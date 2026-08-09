# Fork & Founders — Visual Art Direction

The visual language a commissioned photographer / the CMS phase should continue.

## Brand palette (design tokens, `src/index.css`)

| Token | HSL | Hex (approx) | Use |
| --- | --- | --- | --- |
| `--navy-deep` | 222 83% 16% | `#071D49` | Primary surfaces, dark sections, header CTA |
| `--navy` | 219 80% 22% | `#0B2A6B` | Gradients, secondary dark surfaces |
| `--gold` | 42 45% 58% | `#C6AA62` | Accents, eyebrows, icons, highlights |
| `--baby-blue` | 196 100% 93% | `#DBF1FE` | Soft tints, tags, info surfaces |
| `--promo-yellow` | 49 87% 65% | `#F5D04F` | Announcement bar only |

Typography: **Sora** (display, tight tracking) + **Manrope** (body). Self-hosted.

## Imagery principles (all 39 assets follow these)

1. **Operations, not clichés.** Kitchens, packaging, prep lines, workshops,
   documentation, consultation tables. No Dubai skylines, no handshakes, no staged
   investors, no fake platform logos.
2. **Brand-neutral.** Packaging and screens are always unbranded/generic so no real
   client or platform is implied. Dashboard UIs are code, not images.
3. **Mood.** Deep navy-shadowed environments, warm gold practical light, editorial
   contrast; shallow depth of field on craft details (plating, tasting, sealing).
4. **People.** At most incidental, non-identifiable staff (cropped, back-turned or
   hands-only). Never posed "customer" or "investor" characters.
5. **Composition for crops.** Subjects sit center-right with quiet space left —
   heroes take a navy gradient overlay for headline legibility; every hero ships
   desktop / tablet / mobile-portrait derivatives.

## Component language

- Cards: 24px radius, hairline border, soft navy shadow on hover.
- Eyebrow labels: gold, letter-spaced caps.
- Buttons: pill, navy primary / gold accent / ghost on dark.
- Motion: 0.6–0.9s ease-out reveals, 24px rise, disabled under reduced motion.

## Replacement workflow

Any AI asset can be swapped for commissioned photography by overwriting the same
filename in `public/images/…` (keep dimensions ratio) and flipping
`approvalStatus` in `src/data/image-manifest.ts`. No component changes needed.
