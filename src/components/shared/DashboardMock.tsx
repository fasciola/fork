/**
 * Original interface visualizations for the Technology & Operations sections.
 * Illustrative product visualizations with clearly fictional, neutral data.
 * Component metadata: "Interface visualization shown for illustrative purposes only."
 * No customer names, real revenue, usernames or account information.
 */
import { useMemo } from 'react'
import { CheckCircle2, Clock, TrendingUp, UtensilsCrossed } from 'lucide-react'

const series = [42, 48, 45, 56, 61, 58, 67, 72, 69, 78, 84, 91]

function Sparkline({ data, stroke = '#D7E22E' }: { data: number[]; stroke?: string }) {
  const path = useMemo(() => {
    const max = Math.max(...data)
    const min = Math.min(...data)
    const w = 220
    const h = 56
    const pts = data.map((v, i) => `${(i / (data.length - 1)) * w},${h - ((v - min) / (max - min)) * (h - 8) - 4}`)
    return `M${pts.join(' L')}`
  }, [data])
  return (
    <svg viewBox="0 0 220 56" className="h-14 w-full" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="spark-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={stroke} stopOpacity="0.25" />
          <stop offset="100%" stopColor={stroke} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${path} L220,56 L0,56 Z`} fill="url(#spark-fill)" />
      <path d={path} fill="none" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

const orderRows = [
  { id: '#4821', items: '3 items', status: 'Preparing', tone: 'amber' },
  { id: '#4822', items: '1 item', status: 'On its way', tone: 'green' },
  { id: '#4823', items: '5 items', status: 'Preparing', tone: 'amber' },
  { id: '#4824', items: '2 items', status: 'Accepted', tone: 'blue' },
  { id: '#4825', items: '4 items', status: 'On its way', tone: 'green' },
] as const

const menuPerf = [
  { name: 'Signature Bowl', score: 94 },
  { name: 'Grilled Wrap', score: 88 },
  { name: 'Loaded Fries', score: 81 },
  { name: 'Classic Combo', score: 76 },
  { name: 'Fresh Salad', score: 63 },
]

const platforms = [
  { name: 'Platform A', status: 'Live', uptime: 'Accepting orders' },
  { name: 'Platform B', status: 'Live', uptime: 'Accepting orders' },
  { name: 'Platform C', status: 'Syncing', uptime: 'Menu update in progress' },
]

export function OrderFlowDashboard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#16291C] shadow-2xl" role="img" aria-label="Illustrative order-flow monitoring dashboard with fictional neutral data">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-gold/70" />
        </div>
        <span className="font-display text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white/50">Order Flow · Live View</span>
      </div>
      <div className="grid gap-4 p-5 sm:grid-cols-3">
        <div className="rounded-xl bg-white/5 p-4">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-white/45">Orders today</p>
          <p className="mt-1.5 font-display text-2xl font-bold text-white">128</p>
          <p className="mt-1 flex items-center gap-1 text-[0.68rem] font-semibold text-emerald-400"><TrendingUp className="h-3 w-3" aria-hidden="true" /> Illustrative trend</p>
        </div>
        <div className="rounded-xl bg-white/5 p-4">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-white/45">Avg. prep time</p>
          <p className="mt-1.5 font-display text-2xl font-bold text-white">14 min</p>
          <p className="mt-1 flex items-center gap-1 text-[0.68rem] text-white/45"><Clock className="h-3 w-3" aria-hidden="true" /> Within target</p>
        </div>
        <div className="rounded-xl bg-white/5 p-4">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-white/45">Availability</p>
          <p className="mt-1.5 font-display text-2xl font-bold text-white">100%</p>
          <p className="mt-1 flex items-center gap-1 text-[0.68rem] text-white/45"><CheckCircle2 className="h-3 w-3 text-emerald-400" aria-hidden="true" /> All items in stock</p>
        </div>
      </div>
      <div className="px-5 pb-5">
        <div className="rounded-xl bg-white/5 p-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-white/45">Weekly order trend</p>
            <span className="text-[0.65rem] text-white/35">Fictional data</span>
          </div>
          <Sparkline data={series} />
        </div>
        <ul className="mt-4 space-y-2">
          {orderRows.map((o) => (
            <li key={o.id} className="flex items-center justify-between rounded-lg bg-white/[0.04] px-4 py-2.5 text-xs">
              <span className="font-mono font-semibold text-white/80">{o.id}</span>
              <span className="text-white/45">{o.items}</span>
              <span className={`rounded-full px-2.5 py-1 font-semibold ${o.tone === 'green' ? 'bg-emerald-400/15 text-emerald-300' : o.tone === 'amber' ? 'bg-amber-400/15 text-amber-300' : 'bg-sky-400/15 text-sky-300'}`}>
                {o.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function MenuPerformanceDashboard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#16291C] shadow-2xl" role="img" aria-label="Illustrative menu-performance dashboard with fictional neutral data">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-gold/70" />
        </div>
        <span className="font-display text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white/50">Menu Performance</span>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-3 rounded-xl bg-white/5 p-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/15 text-gold"><UtensilsCrossed className="h-5 w-5" aria-hidden="true" /></span>
          <div>
            <p className="font-display text-sm font-semibold text-white">Top product visibility</p>
            <p className="text-[0.68rem] text-white/45">Popularity index across connected platforms · illustrative</p>
          </div>
        </div>
        <ul className="mt-5 space-y-4">
          {menuPerf.map((m) => (
            <li key={m.name}>
              <div className="mb-1.5 flex items-center justify-between text-xs">
                <span className="font-semibold text-white/80">{m.name}</span>
                <span className="font-mono text-gold-light">{m.score}</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <div className="h-full rounded-full bg-gradient-to-r from-navy-100 to-gold transition-all duration-1000" style={{ width: `${m.score}%` }} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function PlatformStatusDashboard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#16291C] shadow-2xl" role="img" aria-label="Illustrative platform status dashboard with fictional neutral data">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-gold/70" />
        </div>
        <span className="font-display text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white/50">Platform Status</span>
      </div>
      <ul className="space-y-3 p-5">
        {platforms.map((p) => (
          <li key={p.name} className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3.5">
            <div className="flex items-center gap-3">
              <span className={`h-2.5 w-2.5 rounded-full ${p.status === 'Live' ? 'bg-emerald-400' : 'bg-amber-400'}`} />
              <span className="text-sm font-semibold text-white">{p.name}</span>
            </div>
            <div className="text-end">
              <p className={`text-xs font-bold ${p.status === 'Live' ? 'text-emerald-300' : 'text-amber-300'}`}>{p.status}</p>
              <p className="text-[0.65rem] text-white/40">{p.uptime}</p>
            </div>
          </li>
        ))}
        <li className="rounded-xl border border-dashed border-white/15 px-4 py-3 text-center text-[0.65rem] text-white/40">
          Interface visualization shown for illustrative purposes only.
        </li>
      </ul>
    </div>
  )
}
