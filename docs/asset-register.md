# Fork & Founders — Asset Register

Complete register of every visual asset shipped with the website.
Machine-readable version: `src/data/image-manifest.ts` (typed, CMS-mirrored).

**Totals:** 39 assets — 39 AI-generated, 0 client-supplied, 0 licensed stock, 0 remote/placeholder files.

## Generation & post-processing method

1. Masters generated with an AI image model from detailed art-directed prompts
   (see `docs/visual-art-direction.md`), at 2K/1K depending on placement.
2. Every master was post-processed locally with a deterministic pipeline:
   - bottom strip crop (~6.5–9%) to remove the generator's watermark mark;
   - responsive derivative crops (desktop 16:9-ish, tablet, mobile 4:5 portrait);
   - WebP conversion at quality 80–85 (`method=6`);
   - Open Graph derivative center-cropped to exactly 1200×630 (WebP + JPEG fallback).
3. No asset uses Unsplash, Picsum, placehold.*, hotlinked, or base64 inline imagery.
   Dashboard interfaces are React components, not images — guaranteeing fictional data.

## Compliance notes

- All assets are **fictional, brand-neutral scenes** (no real people identifiable, no real
  client brands, no delivery-platform logos, no Dubai-skyline clichés, no handshakes,
  no staged investors). Prompts explicitly excluded these.
- Every asset is marked `pending-client-review` in the manifest and may be replaced
  with commissioned photography without code changes (same filenames).
- The official Fork & Founders logo was **not supplied**; an interim typographic
  wordmark (`src/components/layout/BrandMark.tsx`) is used and flagged here as the
  highest-priority client-supplied asset. Per project rules, no replacement logo was
  generated or altered.

## Register

| File | Page | Section | Type | Dimensions | Size | Source | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `about/fork-founders-culinary-team.webp` | About | Story section | editorial | 1536×957 | 93 KB | AI-generated | Pending client review |
| `about/fork-founders-dubai-office-district.webp` | About / Locations | Dubai section | editorial | 1536×957 | 221 KB | AI-generated | Pending client review |
| `capabilities/fork-founders-brand-identity-workshop.webp` | Home | Capabilities grid | editorial | 1536×957 | 131 KB | AI-generated | Pending client review |
| `capabilities/fork-founders-culinary-development.webp` | Home / About | Capabilities grid | editorial | 1536×957 | 80 KB | AI-generated | Pending client review |
| `capabilities/fork-founders-food-photography-production.webp` | Home | Capabilities grid | editorial | 1536×957 | 58 KB | AI-generated | Pending client review |
| `capabilities/fork-founders-food-preparation.webp` | Home | Capabilities grid | editorial | 1536×957 | 97 KB | AI-generated | Pending client review |
| `capabilities/fork-founders-menu-engineering.webp` | Home | Capabilities grid | editorial | 1536×957 | 102 KB | AI-generated | Pending client review |
| `capabilities/fork-founders-recipe-standardization.webp` | Home | Capabilities grid | editorial | 1536×957 | 98 KB | AI-generated | Pending client review |
| `contact/fork-founders-consultation-meeting.webp` | Form pages | Sidebar | editorial | 1536×957 | 69 KB | AI-generated | Pending client review |
| `home/fork-founders-hero-main.webp` | Home | Hero (desktop) | hero | 2048×1077 | 103 KB | AI-generated | Pending client review |
| `home/fork-founders-hero-mobile.webp` | Home | Hero (mobile crop) | hero | 1024×1436 | 60 KB | AI-generated | Pending client review |
| `home/fork-founders-hero-tablet.webp` | Home | Hero (tablet crop) | hero | 1600×841 | 73 KB | AI-generated | Pending client review |
| `insights/fork-founders-insight-cloud-kitchen.webp` | Insights | Article card: Cloud Kitchen Unit Economics | editorial | 1600×841 | 88 KB | AI-generated | Pending client review |
| `insights/fork-founders-insight-menu-engineering.webp` | Insights | Article card: Menu Engineering for Delivery | editorial | 1600×841 | 115 KB | AI-generated | Pending client review |
| `insights/fork-founders-insight-operations-assessment.webp` | Insights | Article card: Improving Existing Restaurant Operations | editorial | 1600×841 | 69 KB | AI-generated | Pending client review |
| `insights/fork-founders-insight-platform-onboarding.webp` | Insights | Article card: Delivery Platform Onboarding in the UAE | editorial | 1600×841 | 64 KB | AI-generated | Pending client review |
| `insights/fork-founders-insight-technology.webp` | Insights | Article card: Restaurant Operations Technology Stack | editorial | 1600×841 | 76 KB | AI-generated | Pending client review |
| `insights/fork-founders-insight-virtual-brand.webp` | Insights | Article card: What Is a Virtual Food Brand | editorial | 1600×841 | 57 KB | AI-generated | Pending client review |
| `og/fork-founders-og-default.jpg` | All pages | Open Graph default (JPEG fallback) | og | 1200×630 | 90 KB | AI-generated | Pending client review |
| `og/fork-founders-og-default.webp` | All pages | Open Graph default | og | 1200×630 | 57 KB | AI-generated | Pending client review |
| `operations/fork-founders-cloud-kitchen-operations.webp` | Home / Technology | Operations feature | editorial | 1536×957 | 97 KB | AI-generated | Pending client review |
| `operations/fork-founders-operational-handover.webp` | Technology | Handover feature | editorial | 1536×957 | 79 KB | AI-generated | Pending client review |
| `operations/fork-founders-staff-training.webp` | Technology | Operations feature | editorial | 1536×957 | 97 KB | AI-generated | Pending client review |
| `packaging/fork-founders-delivery-dispatch.webp` | Home | Why Fork & Founders | editorial | 1536×957 | 123 KB | AI-generated | Pending client review |
| `packaging/fork-founders-packaging-system.webp` | Home | Why Fork & Founders | editorial | 1536×957 | 70 KB | AI-generated | Pending client review |
| `packaging/fork-founders-premium-food-packaging.webp` | Home | Why Fork & Founders | editorial | 1536×957 | 109 KB | AI-generated | Pending client review |
| `partnerships/fork-founders-strategic-partner-program-mobile.webp` | Solution: Strategic Investment Partner Program | Hero (mobile crop) | hero | 1080×1350 | 60 KB | AI-generated | Pending client review |
| `partnerships/fork-founders-strategic-partner-program.webp` | Solution: Strategic Investment Partner Program | Hero (desktop) | hero | 1920×1009 | 117 KB | AI-generated | Pending client review |
| `partnerships/fork-founders-ultimate-partner-program-mobile.webp` | Solution: Ultimate Strategic Investment Partner Program | Hero (mobile crop) | hero | 1080×1350 | 96 KB | AI-generated | Pending client review |
| `partnerships/fork-founders-ultimate-partner-program.webp` | Solution: Ultimate Strategic Investment Partner Program | Hero (desktop) | hero | 1920×1009 | 169 KB | AI-generated | Pending client review |
| `solutions/fork-founders-custom-brand-development-mobile.webp` | Solution: Custom Brand Development | Hero (mobile crop) | hero | 1080×1350 | 47 KB | AI-generated | Pending client review |
| `solutions/fork-founders-custom-brand-development.webp` | Solution: Custom Brand Development | Hero (desktop) | hero | 1920×1009 | 71 KB | AI-generated | Pending client review |
| `solutions/fork-founders-growth-consultancy-mobile.webp` | Solution: Restaurant & Brand Growth Consultancy | Hero (mobile crop) | hero | 1080×1350 | 82 KB | AI-generated | Pending client review |
| `solutions/fork-founders-growth-consultancy.webp` | Solution: Restaurant & Brand Growth Consultancy | Hero (desktop) | hero | 1920×1009 | 127 KB | AI-generated | Pending client review |
| `solutions/fork-founders-managed-food-brand-mobile.webp` | Solution: Fully Managed Food Brand | Hero (mobile crop) | hero | 1080×1350 | 51 KB | AI-generated | Pending client review |
| `solutions/fork-founders-managed-food-brand.webp` | Solution: Fully Managed Food Brand | Hero (desktop) | hero | 1920×1009 | 80 KB | AI-generated | Pending client review |
| `solutions/fork-founders-turnkey-kitchen-consultancy-mobile.webp` | Solution: Turnkey Kitchen & Restaurant Consultancy | Hero (mobile crop) | hero | 1080×1350 | 64 KB | AI-generated | Pending client review |
| `solutions/fork-founders-turnkey-kitchen-consultancy.webp` | Solution: Turnkey Kitchen & Restaurant Consultancy | Hero (desktop) | hero | 1920×1009 | 98 KB | AI-generated | Pending client review |
| `video/fork-founders-hero-video-poster.webp` | Home | Hero video poster (reserved) | poster | 1920×1009 | 79 KB | AI-generated | Pending client review |

## Assets still required from the client

| Asset | Purpose | Status |
| --- | --- | --- |
| Official logo (SVG + PNG, light/dark) | Header, footer, favicon, OG card | **Not supplied — interim wordmark in use** |
| Leadership portraits & bios | About page (currently a designed "publishing in progress" state) | Not supplied |
| Brand portfolio imagery & approved case studies | Our Brands page (honest empty state shipped) | Not supplied / not approved |
| Hero video final cut | Homepage hero (`video/fork-founders-hero-video-poster.webp` reserved as poster) | Not supplied |
| Office photography (Blue Bay Tower) | Locations page | Not supplied — AI editorial scene used meanwhile |
