# Fork & Founders — Sanity Schemas

30 content models (27 document types + 3 shared objects) mirroring the typed
content layer in `src/data/` one-to-one.

## Usage

```bash
npm create sanity@latest   # or add to an existing Sanity Studio
# copy schemas/ into your studio project and register:
#   import { schemaTypes } from './fork-and-founders/schemas'
#   defineConfig({ schema: { types: schemaTypes } })
```

## Governance built into the models

- `financialIllustration` — hard-gated: `approved` + `financialComparisonApproved`
  must both be true before anything renders publicly. Known internal price
  conflicts belong in `internalNote` (CMS-only).
- `brand` / `caseStudy` / `testimonial` — publish flags default `false`;
  metrics require `evidenceOnFile`; nothing invented ever publishes.
- `formConfig.collectsPayment` — validated to always be `false` (online payment
  is prohibited on this website).
- `legalPage.legalReviewStatus` — the public banner stays until `approved`.
- `location.verifiedOperating` — blocks publishing non-existent locations.
- `imageAsset` — mirrors `src/data/image-manifest.ts`; `assetId` joins the two.
