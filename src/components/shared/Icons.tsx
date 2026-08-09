/**
 * Fork & Founders custom icon family.
 * Single visual system: 24px grid, 1.6px stroke, rounded caps/joins,
 * brand-navy default with gold-accent option. No emoji, no mixed libraries.
 */
import type { JSX, SVGProps } from 'react'

export type FFIconName =
  | 'concept'
  | 'culinary'
  | 'brand'
  | 'menu'
  | 'kitchen'
  | 'technology'
  | 'platforms'
  | 'operations'
  | 'growth'
  | 'partnership'
  | 'strategy'
  | 'packaging'
  | 'training'
  | 'handover'
  | 'assessment'
  | 'location'
  | 'portfolio'
  | 'reporting'
  | 'quality'
  | 'supply'

interface FFIconProps extends SVGProps<SVGSVGElement> {
  name: FFIconName
  accent?: boolean
}

const paths: Record<FFIconName, JSX.Element> = {
  concept: (
    <>
      <path d="M9 18h6M10 21h4" />
      <path d="M12 3a6 6 0 0 0-3.5 10.9c.8.6 1.5 1.5 1.5 2.6v.5h4v-.5c0-1.1.7-2 1.5-2.6A6 6 0 0 0 12 3Z" />
    </>
  ),
  culinary: (
    <>
      <path d="M7 3v7a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V3" />
      <path d="M9 3v18" />
      <path d="M17 3c-1.7 1.5-2.5 4-2.5 6.5 0 2 1 3.5 2.5 3.5V21" />
    </>
  ),
  brand: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5 14 11l-2 4.5L10 11l2-3.5Z" />
      <path d="M8.5 16.5c1 .9 2.2 1.3 3.5 1.3s2.5-.4 3.5-1.3" />
    </>
  ),
  menu: (
    <>
      <rect x="5.5" y="3.5" width="13" height="17" rx="2" />
      <path d="M9 8h6M9 11.5h6M9 15h4" />
    </>
  ),
  kitchen: (
    <>
      <path d="M4 10h16v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 19v-9Z" />
      <path d="M4 10c0-3.5 3.6-6 8-6s8 2.5 8 6" />
      <path d="M9.5 14.5h5" />
    </>
  ),
  technology: (
    <>
      <rect x="3.5" y="5" width="17" height="12" rx="2" />
      <path d="M8 21h8M12 17v4" />
      <path d="M7 9.5h4M7 12.5h7" />
      <circle cx="16.5" cy="9.5" r="1" />
    </>
  ),
  platforms: (
    <>
      <rect x="7" y="3.5" width="10" height="17" rx="2.5" />
      <path d="M10.5 6h3" />
      <path d="M9.5 12.5l1.8 1.8 3.2-3.6" />
    </>
  ),
  operations: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 4.5V7M12 17v2.5M4.5 12H7M17 12h2.5M6.7 6.7l1.8 1.8M15.5 15.5l1.8 1.8M17.3 6.7l-1.8 1.8M8.5 15.5l-1.8 1.8" />
    </>
  ),
  growth: (
    <>
      <path d="M4 19.5h16" />
      <path d="M5 16l4.5-5 3.5 3 5.5-6.5" />
      <path d="M15.5 7.5h3v3" />
    </>
  ),
  partnership: (
    <>
      <circle cx="8.5" cy="9" r="3" />
      <circle cx="15.5" cy="9" r="3" />
      <path d="M4 19.5c0-2.5 2-4 4.5-4s4.5 1.5 4.5 4" />
      <path d="M13.5 15.7c.6-.2 1.3-.3 2-.3 2.5 0 4.5 1.5 4.5 4" />
    </>
  ),
  strategy: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" />
      <path d="M12 3.5v2M20.5 12h-2M12 20.5v-2M3.5 12h2" />
    </>
  ),
  packaging: (
    <>
      <path d="M4 8.5 12 4l8 4.5v7L12 20l-8-4.5v-7Z" />
      <path d="M4 8.5 12 13l8-4.5" />
      <path d="M12 13v7" />
    </>
  ),
  training: (
    <>
      <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4H20v13.5H6.5A2.5 2.5 0 0 0 4 20V6.5Z" />
      <path d="M4 20a2.5 2.5 0 0 1 2.5-2.5H20" />
      <path d="M9 9.5h7M9 12.5h4.5" />
    </>
  ),
  handover: (
    <>
      <path d="M8 4.5h8a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5H8a1.5 1.5 0 0 1-1.5-1.5V6A1.5 1.5 0 0 1 8 4.5Z" />
      <path d="M9.5 4.5V3h5v1.5" />
      <path d="M9.5 13.5l1.8 1.8 3.4-3.8" />
    </>
  ),
  assessment: (
    <>
      <circle cx="10.5" cy="10.5" r="6" />
      <path d="M15.2 15.2 20 20" />
      <path d="M8 10.5h5M10.5 8v5" />
    </>
  ),
  location: (
    <>
      <path d="M12 21s-6.5-5.4-6.5-10.5a6.5 6.5 0 0 1 13 0C18.5 15.6 12 21 12 21Z" />
      <circle cx="12" cy="10.5" r="2.2" />
    </>
  ),
  portfolio: (
    <>
      <rect x="4" y="7.5" width="16" height="12" rx="2" />
      <path d="M9 7.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5" />
      <path d="M4 12.5h16" />
    </>
  ),
  reporting: (
    <>
      <path d="M5 4.5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-13a1 1 0 0 1 1-1Z" />
      <path d="M8.5 15.5v-4M12 15.5V9M15.5 15.5v-2.5" />
    </>
  ),
  quality: (
    <>
      <path d="m12 3.5 2.3 2.6 3.3-.3 1 3.2 2.7 2-1.6 3 1.6 3-2.7 2-1 3.2-3.3-.3L12 20.5l-2.3-2.6-3.3.3-1-3.2-2.7-2 1.6-3-1.6-3 2.7-2 1-3.2 3.3.3L12 3.5Z" />
      <path d="m9.5 12 1.8 1.8 3.4-3.8" />
    </>
  ),
  supply: (
    <>
      <path d="M3.5 7.5h11v9h-11z" />
      <path d="M14.5 10.5h3.2l2.8 3v3h-6" />
      <circle cx="7.5" cy="18" r="1.7" />
      <circle cx="17" cy="18" r="1.7" />
    </>
  ),
}

export function FFIcon({ name, accent, ...props }: FFIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      data-accent={accent || undefined}
      {...props}
    >
      {paths[name]}
    </svg>
  )
}
