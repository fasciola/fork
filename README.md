# Fork & Founders — Website

Production website for **Fork & Founders**, a Dubai-based food-brand development,
restaurant operations, cloud-kitchen and F&B consultancy company.

**Tagline:** We Build. You Grow.

---

## 1. Stack

| Layer | Choice |
| --- | --- |
| Framework | React 19 + TypeScript (strict) + Vite 6 |
| Styling | Tailwind CSS 3.4 + custom design-token system (`src/index.css`) + shadcn/ui primitives |
| Motion | Framer Motion (with `prefers-reduced-motion` fallbacks) |
| Fonts | Sora (display) + Manrope (body) via `@fontsource` — self-hosted, no Google Fonts round-trip |
| Routing | `react-router` v7 (client-side; static host with SPA fallback) |
| Content layer | Typed data modules in `src/data/` — mirror the Sanity schemas in `sanity/schemas/` 1:1 so content can be migrated to Sanity without re-modelling |
| Analytics | Internal event layer (`src/lib/analytics.ts`) buffering `ff_*` events to `window.dataLayer`; GA4 / GTM attach via env vars |
| Forms / CRM | `src/lib/crm.ts` adapter — posts to `VITE_LEAD_ENDPOINT` (Odoo or any webhook) with a local fallback |
| i18n | `src/lib/i18n.tsx` — EN live, AR scaffolded with full RTL support (`[dir='rtl']` styles, chrome string dictionary) |

> The original agency brief targeted Next.js + Sanity + Vercel. This delivery runs on the
> Kimi static-site pipeline, so the architecture was ported 1:1 onto React + Vite:
> every page, section, CMS model, integration adapter and asset requirement is preserved.
> Sanity schemas ship in `sanity/schemas/` ready for a headless-CMS phase.

## 2. Quick start

```bash
npm install
npm run dev        # local dev on :3000
npm run build      # production build → dist/
npm run preview    # serve dist/ locally on :4173
```

## 3. Environment variables

Copy `.env.example` to `.env` and fill in what you need. **No secret is required for
the site to build or run** — every integration degrades gracefully:

| Variable | Purpose | Behaviour when unset |
| --- | --- | --- |
| `VITE_LEAD_ENDPOINT` | HTTPS endpoint (Odoo/webhook) receiving form leads | Leads stored in browser `localStorage` (`ff_leads`) with an `FF-…` reference |
| `VITE_GA4_MEASUREMENT_ID` | GA4 measurement ID (`G-…`) | Events still buffered to `window.dataLayer`; no network calls |
| `VITE_GTM_ID` | Google Tag Manager container ID | Not injected |
| `VITE_TURNSTILE_SITE_KEY` | Cloudflare Turnstile site key | Forms show the "protected in production" note; submission still works |
| `VITE_META_PIXEL_ID` | Meta Pixel ID | Not injected |
| `VITE_LINKEDIN_PARTNER_ID` | LinkedIn Insight Tag partner ID | Not injected |
| `VITE_ANNOUNCEMENT_ENABLED` | `true`/`false` kill-switch for the announcement bar | Bar follows the CMS-shaped config in `src/components/layout/Chrome.tsx` |

See `docs/integrations.md` for the full adapter architecture (Odoo, Turnstile, GA4/GTM,
Meta, LinkedIn, cookie consent gating).

## 4. Project map

```
src/
  data/            Typed content layer (solutions, packages, capabilities, FAQ,
                   insights, quiz, forms, image-manifest) — CMS mirror
  lib/             site config, analytics, i18n, CRM adapter
  components/
    layout/        Header (+ mega menu), Footer, Chrome (announcement bar,
                   cookie banner), PageLayout (SEO per page), BrandMark
    shared/        Icons, Reveal (motion), DashboardMock (fictional dashboards),
                   PathQuiz (qualification quiz)
    forms/         LeadForm — config-driven renderer for all 6 conversion forms
    home/          Homepage sections (3 modules, 18 sections)
  pages/           20 route components (lazy-loaded)
public/
  images/          39 local, optimized assets (WebP + OG JPEG) — see docs/asset-register.md
  robots.txt, sitemap.xml, favicon.svg
sanity/schemas/    30 Sanity content models for the CMS phase
docs/              asset-register, integrations, qa-checklist, visual-art-direction
tests/             Playwright critical-journey suite
```

## 5. Content editing (CMS training notes)

Until the Sanity workspace is connected, all content lives in typed TypeScript modules
under `src/data/`. Each module mirrors a Sanity schema of the same name, so the editing
concepts are identical now and after migration.

**Common edits**

| You want to… | Edit |
| --- | --- |
| Change a solution's copy, pricing note or CTA | `src/data/solutions.ts` |
| Change packages, tiers, glossary tooltips | `src/data/packages.ts` |
| Edit the 9-stage process / 5-week timeline | `src/data/capabilities.ts` |
| Edit FAQs (30+ questions, 5 categories) | `src/data/faq.ts` |
| Publish or edit an Insights article | `src/data/insights.ts` |
| Change quiz questions or scoring | `src/data/quiz.ts` |
| Change form fields / add a form | `src/data/forms.ts` |
| Swap an image | replace the file in `public/images/…` and update `src/data/image-manifest.ts` |
| Change nav, footer, contact details | `src/lib/site.ts` |
| Turn the announcement bar on/off + dates | `src/components/layout/Chrome.tsx` (`announcementConfig`) |
| Arabic chrome strings | `src/lib/i18n.tsx` (`chromeStrings.ar`) |

**Editorial rules that must not be broken**

1. Never invent performance statistics, customer counts, testimonials, revenue figures,
   locations, case studies, partnerships or regulatory approvals.
2. No guaranteed-return / guaranteed-revenue / guaranteed-savings language anywhere.
3. Detailed partnership financial comparisons stay **hidden** until approved — the CMS
   field is `financialIllustration.approved` (currently `false`). Do not publish
   AED 6,608,000 as a net investor benefit.
4. Do not silently "fix" conflicting prices. The AED 9,600 and AED 3,200 per-brand
   figures in the source material are internal conflicts — they are intentionally
   unpublished and flagged for client confirmation.
5. Prices never imply VAT inclusion; the neutral VAT note stays as written.
6. CMS placeholder text ("Content pending final confirmation…") is for the CMS only and
   must never render publicly. Public pages use designed "publishing in progress"
   states (see `src/pages/Brands.tsx`).
7. Dashboards are React components with fictional neutral data
   (`src/components/shared/DashboardMock.tsx`) and always carry the line
   "Interface visualization shown for illustrative purposes only."

## 6. Deployment

The site is a static SPA. Any static host with SPA history-fallback works.

**Kimi platform (this delivery):** the version is saved from `/mnt/agents/output/app`;
use the version card to preview, then click **publish** for a public URL.

**Other hosts (export):**

```bash
npm run build
# upload dist/ to your host
```

- Netlify / Vercel: add an SPA rewrite `/* → /index.html` (a `_redirects` file or
  `vercel.json` rewrite).
- Cloudflare Pages: SPA fallback is automatic.
- Nginx: `try_files $uri $uri/ /index.html;`

Set env vars at build time (`VITE_*` are compiled into the bundle).

## 7. Testing & QA

```bash
npm run build && npm run preview   # serve production build on :4173
npx playwright test                # critical journeys (see tests/)
```

Manual QA evidence and the full checklist live in `docs/qa-checklist.md`.

## 8. Accessibility, SEO, performance

- Semantic landmarks, skip link, focus-visible rings, `role="alert"` form errors,
  aria-labelled dashboards, `prefers-reduced-motion` respected everywhere.
- Per-page `<title>`, meta description, Open Graph, Twitter card, canonical,
  hreflang (en + ar), JSON-LD (`ProfessionalService`, `Service`, `FAQPage`,
  `Article`, `BreadcrumbList`) — see `src/components/layout/PageLayout.tsx`.
- All imagery local WebP with responsive crops; route-level code splitting;
  self-hosted fonts; no render-blocking third parties by default.

## 9. What the client still owes us

See the "Content required from Fork & Founders" section of the delivery report —
most importantly the **official logo files**, brand photography when available,
approved legal copy for the four legal pages, and decisions on the flagged
pricing conflicts.
