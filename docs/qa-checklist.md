# Fork & Founders — QA Checklist

Status legend: ✅ verified · ⬜ pending client input

## A. Build & routes

- ✅ Production build passes clean (`npm run build`, TypeScript strict)
- ✅ All 41 routes render content (automated full-route sweep, desktop viewport):
  20 main routes + 6 solution pages + 8 article pages + 4 legal pages + 404/500
- ✅ No blank page on direct sub-route load (Vite `base: '/'` — regression covered
  by Playwright `routes.spec.ts`)
- ✅ Route-level code splitting active (React.lazy per page)
- ✅ `robots.txt`, `sitemap.xml` (with hreflang), `favicon.svg` served from `/`

## B. Visual / responsive (CDP screenshot review)

- ✅ Homepage: all 18 sections render in order, desktop 1440px + mobile 390px
- ✅ Solutions overview: filters + 10-criteria comparison table + CTAs
- ✅ Solution detail: hero with mobile crop, ideal-for sidebar, included, process,
  partnership disclaimer block, related solutions
- ✅ Pricing: interactive builder (model × brand count), tier cards with
  "Most Popular" / "Great Value" labels, 5% net-sales fee note, glossary,
  all-category commercial list
- ✅ Technology: 4 layers + 3 fictional dashboards + disclaimer line
- ✅ Forms: labels, required markers, validation errors (`role="alert"`),
  file upload (menu assessment), disclaimer checkbox (partner forms)
- ✅ Quiz: 7 questions, progress, top-2 recommendations with reasons
- ✅ Sticky header opaque over navy sections (contrast fix verified)
- ✅ Footer: 5 columns, newsletter, legal links, contact block
- ✅ Cookie banner + announcement bar render and dismiss correctly

## C. Content integrity (prohibitions enforced)

- ✅ Zero invented statistics / testimonials / case studies / revenue / client
  logos / regulatory claims (grep-audited + manual review)
- ✅ No guaranteed return/revenue/profit/savings language
- ✅ Partnership financial comparisons not published (`financialIllustration.approved = false`);
  AED 6,608,000 appears nowhere
- ✅ Conflicting AED 9,600 / AED 3,200 per-brand figures unpublished and flagged
- ✅ VAT-neutral wording on all pricing; commercial disclaimers on partnership sections
- ✅ No lorem ipsum; no CMS placeholder strings rendered publicly
- ✅ Portfolio & leadership show designed "publishing in progress" states
- ✅ Dashboards are fictional React components with the illustrative-purposes note
- ✅ 39/39 images local WebP/JPEG — no Unsplash/Picsum/placehold/hotlink/base64
- ✅ No skyline clichés, handshakes, fake investors, platform logos in imagery

## D. SEO

- ✅ Unique `<title>` + meta description per page
- ✅ Canonical URLs (`/en/` prefix), hreflang en/ar
- ✅ Open Graph + Twitter cards (local 1200×630 OG image)
- ✅ JSON-LD: ProfessionalService (sitewide), Service (solution pages),
  FAQPage (FAQ), Article (insights), BreadcrumbList (detail pages)
- ✅ Semantic H1 per page; heading hierarchy reviewed

## E. Accessibility

- ✅ Skip link, landmarks, focus-visible styles
- ✅ Form labels + accessible error summary
- ✅ `prefers-reduced-motion` disables hero/scroll animation
- ✅ Dashboards have aria labels noting illustrative data
- ⬜ Full WCAG 2.2 AA audit with assistive tech (recommended pre-launch)

## F. Integrations (per docs/integrations.md)

- ✅ Lead adapter functional; localStorage fallback verified with reference ID
- ✅ Analytics `ff_*` events buffer to `window.dataLayer` (console-verified)
- ✅ Consent gates analytics/marketing injection
- ⬜ Odoo endpoint, Turnstile keys, GA4/GTM IDs — awaiting client credentials

## G. Known items pending client

- ⬜ Official logo (interim wordmark in use)
- ⬜ Legal page copy (pages carry a "pending legal review" banner)
- ⬜ Pricing conflict decisions (AED 9,600 / AED 3,200 figures)
- ⬜ Arabic body content (RTL + chrome strings ready)
- ⬜ Hero video, brand portfolio, leadership content
