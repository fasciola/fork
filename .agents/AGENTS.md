# Design Engineering & UI Craft Guidelines (TasteSkill, Impeccable Style, Emil Kowalski)

All UI development, components, animations, and styles in this project must adhere to the following high-taste design engineering principles:

## 1. Micro-Interactions & Motion Physics (Emil Kowalski)
- **Spring Animations**: Use natural spring physics (e.g. Framer Motion `type: "spring", stiffness: 400, damping: 28`) over linear duration transitions for dropdowns, modals, tabs, and open/close states.
- **Tactile Press States**: Interactive elements (buttons, cards, clickable pills) must provide tactile feedback on click/press (e.g., `whileTap={{ scale: 0.97 }}` or `active:scale-[0.98]`).
- **Smooth Layout Transitions**: Use layout animations (`layout` / `layoutId` in Framer Motion) for active tab indicators, accordion expansions, and dynamic menu bounds to eliminate jarring layout jumps.
- **Hover Micro-Effects**: Subtle lift (`hover:-translate-y-0.5`), border highlight sweeps, or soft shadow expansion on hover.

## 2. Impeccable Style & Layout Craft (impeccable.style)
- **Spatial Rhythm**: Adhere to a strict 4px/8px spatial grid (`gap-2`, `gap-4`, `p-6`, `p-8`).
- **Layered Depth**: Use multi-layered soft drop shadows with low opacity (`shadow-[0_24px_48px_-12px_rgba(7,29,73,0.12)]`) and glassmorphism backdrop blurs (`backdrop-blur-md bg-white/95`) instead of harsh black borders.
- **No Generic UI Defaults**: Never rely on unstyled browser primitives. Custom-craft focus rings (`focus-visible:outline-none focus-visible:ring-2`), inputs, select menus, and scrollbars.
- **Optical Typography**: Maintain high contrast ratios, generous line-heights (`leading-relaxed`), and precise letter spacing (`tracking-wider` on eyebrow tags).

## 3. High-Taste AI Web Development (TasteSkill)
- **Entrance Choreography**: Stagger entrance animations (`staggerChildren: 0.08`) for hero sections, card grids, and list items.
- **Responsive Layout Integrity**: Ensure dropdowns, mega-menus, and floating overlays are strictly bounded relative to the main layout container (`container-ff`) to prevent off-screen clipping across desktop and mobile screens.
- **Color & Texture Balance**: Pair warm background neutrals with rich primary forest/ink tones and crisp accent highlights.
