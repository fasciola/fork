import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { ArrowRight, Megaphone, X, Cookie } from 'lucide-react'

/**
 * CMS-controlled announcement bar.
 * Production behavior: driven by the Sanity `announcement` schema —
 * headline, offer copy, CTA, start/end dates, auto-expiration, visibility
 * toggle, EN/AR versions. Values below are the approved default content.
 */
const announcement = {
  visible: true,
  headline: 'Limited-Time Launch Packages Available',
  offer: 'Explore the current offer for managed food brands.',
  cta: { label: 'View the Offer', href: '/packages-and-pricing#category-1' },
  startDate: '2026-01-01',
  endDate: '2026-12-31',
}

export function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false)
  const now = new Date()
  const active =
    announcement.visible && now >= new Date(announcement.startDate) && now <= new Date(announcement.endDate)
  if (!active || dismissed) return null

  return (
    <div className="relative z-[55] bg-promoyellow text-ink" role="region" aria-label="Announcement">
      <div className="container-ff flex items-center justify-center gap-3 py-2.5 text-center">
        <Megaphone className="hidden h-4 w-4 shrink-0 sm:block" aria-hidden="true" />
        <p className="text-xs font-semibold sm:text-[0.82rem]">
          <span className="font-display font-bold">{announcement.headline}</span>
          <span className="mx-2 hidden opacity-40 sm:inline">·</span>
          <span className="hidden sm:inline">{announcement.offer}</span>{' '}
          <Link to={announcement.cta.href} className="group ml-1 inline-flex items-center gap-1 font-display font-bold underline decoration-2 underline-offset-2">
            {announcement.cta.label}
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 rtl:rotate-180" aria-hidden="true" />
          </Link>
        </p>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          className="absolute end-3 top-1/2 -translate-y-1/2 rounded-full p-1.5 transition-colors hover:bg-ink/10"
          aria-label="Dismiss announcement"
        >
          <X className="h-3.5 w-3.5" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}

/** Cookie-consent banner with granular preferences (GA4/Meta/LinkedIn gating). */
export function CookieBanner() {
  const [state, setState] = useState<'pending' | 'done'>('pending')
  const [customizing, setCustomizing] = useState(false)
  const [prefs, setPrefs] = useState({ analytics: true, marketing: false })

  useEffect(() => {
    if (localStorage.getItem('ff_consent')) setState('done')
  }, [])

  if (state === 'done') return null

  const save = (value: typeof prefs) => {
    localStorage.setItem('ff_consent', JSON.stringify({ ...value, ts: new Date().toISOString() }))
    setState('done')
  }

  return (
    <div
      role="dialog"
      aria-label="Cookie preferences"
      className="fixed bottom-4 start-4 z-[70] w-[min(26rem,calc(100vw-2rem))] rounded-2xl border border-border bg-white p-6 shadow-[0_24px_60px_-20px_rgba(7,29,73,0.4)]"
    >
      <div className="flex items-start gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-paleblue text-navy">
          <Cookie className="h-4.5 w-4.5" aria-hidden="true" />
        </span>
        <div>
          <h2 className="font-display text-sm font-bold text-ink">Your privacy preferences</h2>
          <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
            We use essential cookies to run the site, and optional analytics and marketing cookies to improve it. Read our{' '}
            <Link to="/legal/cookie-policy" className="font-semibold text-navy underline">Cookie Policy</Link>.
          </p>
        </div>
      </div>
      {customizing && (
        <div className="mt-4 space-y-2.5 rounded-xl bg-softgrey p-4 text-xs">
          <label className="flex items-center justify-between gap-3">
            <span className="font-semibold text-ink">Essential <span className="font-normal text-muted-foreground">(always on)</span></span>
            <input type="checkbox" checked disabled className="h-4 w-4 accent-navy" />
          </label>
          <label className="flex items-center justify-between gap-3">
            <span className="font-semibold text-ink">Analytics <span className="font-normal text-muted-foreground">(GA4, Vercel)</span></span>
            <input type="checkbox" checked={prefs.analytics} onChange={(e) => setPrefs((p) => ({ ...p, analytics: e.target.checked }))} className="h-4 w-4 accent-navy" />
          </label>
          <label className="flex items-center justify-between gap-3">
            <span className="font-semibold text-ink">Marketing <span className="font-normal text-muted-foreground">(Meta, LinkedIn)</span></span>
            <input type="checkbox" checked={prefs.marketing} onChange={(e) => setPrefs((p) => ({ ...p, marketing: e.target.checked }))} className="h-4 w-4 accent-navy" />
          </label>
        </div>
      )}
      <div className="mt-5 flex flex-wrap gap-2">
        <button type="button" onClick={() => save({ analytics: true, marketing: true })} className="btn-primary-ff !px-5 !py-2.5 !text-xs">
          Accept all
        </button>
        {customizing ? (
          <button type="button" onClick={() => save(prefs)} className="btn-secondary-ff !px-5 !py-2.5 !text-xs">
            Save preferences
          </button>
        ) : (
          <button type="button" onClick={() => setCustomizing(true)} className="btn-secondary-ff !px-5 !py-2.5 !text-xs">
            Customize
          </button>
        )}
        <button type="button" onClick={() => save({ analytics: false, marketing: false })} className="rounded-full px-4 py-2.5 font-display text-xs font-semibold text-muted-foreground transition-colors hover:text-ink">
          Reject optional
        </button>
      </div>
    </div>
  )
}
