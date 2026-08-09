/**
 * Fork & Founders wordmark.
 * NOTE: The official client logo file was not supplied with the brief. This
 * typographic wordmark is a faithful interim rendering — replace the <svg>
 * with the approved artwork in /public/brand/ when delivered. Tracked in
 * /docs/asset-register.md.
 */
import { Link } from 'react-router'

export function BrandMark({ light = false, compact = false }: { light?: boolean; compact?: boolean }) {
  return (
    <Link to="/" className="group inline-flex items-center gap-2.5" aria-label="Fork & Founders — home">
      <svg
        width="34"
        height="34"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
        className="shrink-0 transition-transform duration-500 group-hover:rotate-[8deg]"
      >
        <rect width="40" height="40" rx="14" className={light ? 'fill-white/10' : 'fill-navy-deep'} />
        {/* fork */}
        <path
          d="M15.5 9v6.2c0 1.5 1 2.4 2 2.4s2-.9 2-2.4V9"
          stroke={light ? '#FFFFFF' : '#EAF1D8'}
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path d="M17.5 9v22" stroke={light ? '#FFFFFF' : '#EAF1D8'} strokeWidth="1.7" strokeLinecap="round" />
        {/* knife / growth line */}
        <path
          d="M24.5 31V9c2.6 2 3.6 5.4 3.6 8.4 0 2.7-1.3 4.4-3.6 4.6"
          stroke="#D7E22E"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span
            className={`font-display text-[1.1rem] font-extrabold tracking-tight ${
              light ? 'text-white' : 'text-navy-deep'
            }`}
          >
            Fork <span className={light ? 'text-gold' : 'text-gold-dark'}>&</span> Founders
          </span>
          <span
            className={`mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.24em] ${
              light ? 'text-white/60' : 'text-muted-foreground'
            }`}
          >
            We Build. You Grow.
          </span>
        </span>
      )}
    </Link>
  )
}
