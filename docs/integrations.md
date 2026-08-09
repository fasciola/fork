# Fork & Founders — Integrations Architecture

Every external service is isolated behind a small adapter so the site works fully
without any of them, and each can be completed later by setting environment
variables — no code changes required for the standard path.

## 1. Lead capture → Odoo CRM (or any webhook)

**Adapter:** `src/lib/crm.ts` (`submitLead`)

```
LeadForm (6 config-driven forms)
   └─► submitLead(payload: LeadPayload)
         ├─ VITE_LEAD_ENDPOINT set? → POST JSON {form, page, fields, reference, consent, ts}
         └─ otherwise             → localStorage['ff_leads'] (frontend-only fallback)
```

- Every submission carries a human-readable reference (`FF-XXXXXX`) shown on the
  success screen — quote it in any follow-up.
- Recommended Odoo wiring: an Odoo website form endpoint, an Odoo **Webhook /
  automation rule**, or a middleware (Make/Zapier/n8n) mapping `LeadPayload` to
  `crm.lead` fields. The `form` field (e.g. `consultation`, `partner`) maps to the
  Odoo lead tag / team.
- **No Odoo credentials exist in the client.** Any server-side secret lives in the
  endpoint you point `VITE_LEAD_ENDPOINT` at.
- Partnership forms explicitly do **not** collect payment — there is no checkout
  anywhere on the site by design.

## 2. Spam protection — Cloudflare Turnstile

- Set `VITE_TURNSTILE_SITE_KEY` to render the Turnstile widget on all six forms
  (integration point marked in `src/components/forms/LeadForm.tsx`).
- The **secret key** is used only by your endpoint to verify the token
  (`siteverify`), keeping credentials server-side.
- Until configured, forms show the notice "Protected by Cloudflare Turnstile in
  production" and submit normally.

## 3. Analytics — event layer → GA4 / GTM

**Adapter:** `src/lib/analytics.ts`

- All interactions use the `ff_*` event taxonomy (`ff_page_view`,
  `ff_form_started`, `ff_form_submitted`, `ff_form_abandoned`, `ff_quiz_started`,
  `ff_quiz_completed`, `ff_cta_clicked`, `ff_megamenu_opened`,
  `ff_language_changed`, `ff_scroll_depth`, …) and are pushed to
  `window.dataLayer` with `{ event, ff_event, ...context }`.
- With `VITE_GA4_MEASUREMENT_ID` or `VITE_GTM_ID` set, the loader injects the
  vendor script **only after analytics consent** (see §5).
- Without keys, events remain inspectable in `window.dataLayer` — useful for
  QA and for wiring a different analytics backend later.

## 4. Marketing pixels — Meta & LinkedIn

- `VITE_META_PIXEL_ID` and `VITE_LINKEDIN_PARTNER_ID` inject the respective tags
  **only after marketing consent**.
- Lead events map: `ff_form_submitted` → Meta `Lead` / LinkedIn conversion.

## 5. Cookie consent (gates everything above)

**Component:** `CookieBanner` in `src/components/layout/Chrome.tsx`

- Granular choices: essential (always on), analytics, marketing.
- Persisted in `localStorage['ff_consent']`; `ff_consent_updated` is dispatched so
  adapters react live. GA4/GTM and pixels never load before the matching consent.
- To connect a CMP (Cookiebot/OneTrust) later, replace the consent store — the
  gating contract (`ff_consent` shape) stays the same.

## 6. i18n (EN live / AR scaffolded)

**Module:** `src/lib/i18n.tsx`

- Toggling language sets `<html lang>` and `dir` (full RTL styling already in
  `src/index.css` via `[dir='rtl']` overrides) and tracks `ff_language_changed`.
- Arabic UI chrome strings ship in `chromeStrings.ar`; Arabic body content is a
  content phase handled in the CMS (`*Ar` fields exist in the schemas).

## 7. Headless CMS (Sanity) — next phase

- `sanity/schemas/` contains 30 content models matching `src/data/` 1:1
  (solutions, packages, FAQ, insights, quiz, forms, imageAsset,
  financialIllustration with approval fields, announcement, brand, caseStudy, …).
- Migration path: point the data modules at Sanity queries (GROQ) behind the same
  TypeScript interfaces — components never change.

## 8. What is intentionally NOT integrated

- Online payment / checkout (prohibited for partnership programs).
- Real customer/revenue data in dashboards (fictional React components by design).
- Any third-party placeholder imagery service.
