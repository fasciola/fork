import { useState } from 'react'
import { Link } from 'react-router'
import { ArrowRight, Check, ChevronDown } from 'lucide-react'
import { PageLayout, PageHero } from '@/components/layout/PageLayout'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { FinalCta } from '@/components/home/HomeSections3'
import { groupLabels, solutions, type SolutionGroup } from '@/data/solutions'

const comparisonRows: { label: string; values: string[] }[] = [
  { label: 'Best suited for', values: ['First-time founders, managed investors', 'Chefs & original concept owners', 'New-operation investors & owners', 'Existing restaurants, cafés, kitchens', 'Qualified portfolio partners', 'High-capacity investors & groups'] },
  { label: 'Business stage', values: ['Idea / pre-launch', 'Concept developed', 'Pre-build or expanding', 'Operating business', 'Portfolio building', 'Large portfolio building'] },
  { label: 'Customization', values: ['Concept from the F&F system', 'Fully custom concept', 'Fully custom operation', 'Targeted improvement scope', 'Three-brand portfolio plan', 'Twenty-brand phased plan'] },
  { label: 'Physical location required', values: ['No', 'No', 'Yes', 'Existing site(s)', 'No (approved network)', 'No (approved network)'] },
  { label: 'Operational involvement', values: ['Fully managed by F&F', 'Production managed by F&F', 'You operate after handover', 'You operate, F&F improves', 'Fully managed by F&F', 'Fully managed by F&F'] },
  { label: 'Estimated timeline', values: ['Approx. 5 weeks to launch', 'Scoped after assessment', 'Approx. 90 days', '1 – 3 months', 'Agreed launch schedule', 'Phased, agreed schedule'] },
  { label: 'Starting price / investment', values: ['From AED 3,000–7,000 / month', 'AED 9,000–17,000 / month', 'From AED 48,000', 'From AED 48,000', 'AED 300,000 one-time', 'AED 2,000,000 one-time'] },
  { label: 'Ongoing management', values: ['Included', 'Within scope', 'Optional, from AED 9,000 / month', 'Optional, from AED 9,000 / month', 'Included for 5 years', 'Included for 6 years'] },
  { label: 'Number of brands', values: ['1 – 3', '1', '1 operation', 'Existing portfolio', '3', '20'] },
]

type Filter = 'all' | SolutionGroup

export default function SolutionsOverview() {
  const [filter, setFilter] = useState<Filter>('all')
  const [expanded, setExpanded] = useState<string | null>(null)
  const filtered = filter === 'all' ? solutions : solutions.filter((s) => s.group === filter)
  const filteredIdx = filtered.map((s) => solutions.indexOf(s))

  return (
    <PageLayout
      title="Solutions — Six Pathways to Build & Scale Food Businesses | Fork & Founders"
      description="Compare managed food brands, custom brand development, turnkey kitchen consultancy, growth consultancy and long-term partnership programs in the UAE."
    >
      <PageHero
        eyebrow="Solutions"
        title="Six Pathways. One Operating Partner."
        copy="Compare every Fork & Founders model side by side — who it serves, what it includes, how involved you want to be, and what it costs to begin."
      />

      {/* Filters */}
      <section className="border-b border-border bg-white py-8" aria-label="Solution filters">
        <div className="container-ff flex flex-wrap items-center gap-2.5">
          {(['all', 'launch', 'build', 'grow', 'partner'] as Filter[]).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-5 py-2.5 font-display text-sm font-semibold capitalize transition-all duration-300 ${
                filter === f ? 'bg-navy text-white shadow-md' : 'border border-border bg-white text-muted-foreground hover:border-navy/40 hover:text-navy'
              }`}
            >
              {f === 'all' ? 'All solutions' : f === 'grow' ? 'Improve' : groupLabels[f as SolutionGroup]}
            </button>
          ))}
        </div>
      </section>

      {/* Desktop comparison */}
      <section className="section-pad hidden lg:block" aria-labelledby="compare-heading">
        <div className="container-ff">
          <SectionHeading eyebrow="Side by Side" title="Compare the Six Models" />
          <Reveal className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[64rem] border-collapse overflow-hidden rounded-2xl text-start">
              <thead>
                <tr>
                  <th className="w-48 bg-navy-deep p-5 text-start align-bottom font-display text-xs font-bold uppercase tracking-[0.12em] text-white/60">
                    Criteria
                  </th>
                  {filtered.map((s) => (
                    <th key={s.slug} className={`min-w-44 p-5 text-start align-top ${s.kind === 'partnership' ? 'bg-[#0A2456]' : 'bg-navy-deep'}`}>
                      <span className={`inline-block rounded-full px-2.5 py-0.5 font-display text-[0.58rem] font-bold uppercase tracking-[0.14em] ${s.kind === 'partnership' ? 'bg-gold/20 text-gold-light' : 'bg-white/10 text-white/70'}`}>
                        {groupLabels[s.group]}
                      </span>
                      <Link to={`/solutions/${s.slug}`} className="mt-2.5 block font-display text-[0.9rem] font-semibold leading-snug text-white hover:text-gold-light">
                        {s.name}
                      </Link>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, ri) => (
                  <tr key={row.label} className={ri % 2 ? 'bg-softgrey/50' : 'bg-white'}>
                    <th className="border-t border-border p-4 text-start align-top font-display text-xs font-semibold text-ink">{row.label}</th>
                    {filteredIdx.map((si) => (
                      <td key={si} className="border-t border-border p-4 align-top text-[0.8rem] leading-relaxed text-muted-foreground">
                        {row.values[si]}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="bg-white">
                  <th className="border-t border-border p-4" />
                  {filtered.map((s) => (
                    <td key={s.slug} className="border-t border-border p-4 align-top">
                      <Link to={`/solutions/${s.slug}`} className="btn-primary-ff !px-4 !py-2.5 !text-xs">
                        {s.cardCta.label}
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </Reveal>
          <p className="mt-6 text-xs text-muted-foreground">
            Timelines are estimates; partnership figures are illustrative of the commercial structure and subject to the
            signed agreement. Full commercial terms are confirmed in a written proposal.
          </p>
        </div>
      </section>

      {/* Mobile/tablet expandable cards */}
      <section className="section-pad lg:hidden" aria-label="Solutions list">
        <div className="container-ff space-y-4">
          {filtered.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.05}>
              <div className={`overflow-hidden rounded-2xl border ${s.kind === 'partnership' ? 'border-gold/40 bg-navy-deep' : 'border-border bg-white'}`}>
                <button
                  type="button"
                  onClick={() => setExpanded(expanded === s.slug ? null : s.slug)}
                  aria-expanded={expanded === s.slug}
                  className="flex w-full items-center justify-between gap-4 p-5 text-start"
                >
                  <span>
                    <span className={`font-display text-[0.6rem] font-bold uppercase tracking-[0.16em] ${s.kind === 'partnership' ? 'text-gold' : 'text-navy'}`}>
                      {groupLabels[s.group]}
                    </span>
                    <span className={`mt-1 block font-display text-base font-semibold leading-snug ${s.kind === 'partnership' ? 'text-white' : 'text-ink'}`}>
                      {s.name}
                    </span>
                  </span>
                  <ChevronDown className={`h-5 w-5 shrink-0 transition-transform duration-300 ${expanded === s.slug ? 'rotate-180' : ''} ${s.kind === 'partnership' ? 'text-gold' : 'text-navy'}`} aria-hidden="true" />
                </button>
                <div className={`grid transition-all duration-300 ${expanded === s.slug ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <div className={`space-y-3 border-t p-5 ${s.kind === 'partnership' ? 'border-white/10' : 'border-border'}`}>
                      <p className={`text-sm leading-relaxed ${s.kind === 'partnership' ? 'text-white/70' : 'text-muted-foreground'}`}>{s.cardSummary}</p>
                      <ul className="space-y-2 text-[0.8rem]">
                        {comparisonRows.slice(0, 6).map((row) => (
                          <li key={row.label} className="flex justify-between gap-4">
                            <span className={s.kind === 'partnership' ? 'text-white/50' : 'text-muted-foreground'}>{row.label}</span>
                            <span className={`text-end font-medium ${s.kind === 'partnership' ? 'text-white' : 'text-ink'}`}>{row.values[solutions.indexOf(s)]}</span>
                          </li>
                        ))}
                      </ul>
                      <Link to={`/solutions/${s.slug}`} className={`${s.kind === 'partnership' ? 'btn-gold-ff' : 'btn-primary-ff'} mt-2 w-full !py-3`}>
                        {s.cardCta.label}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Guidance strip */}
      <section className="border-t border-border bg-softgrey/60 py-16">
        <div className="container-ff flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">Still comparing?</h2>
            <p className="mt-2 max-w-lg text-muted-foreground">
              Answer seven questions and get a guided recommendation — or speak directly with our team.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/find-your-path" className="btn-primary-ff">
              Find Your Best Path <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
            </Link>
            <Link to="/book-a-consultation" className="btn-secondary-ff">Book a Consultation</Link>
          </div>
        </div>
      </section>

      <FinalCta />
      <span className="sr-only">
        <Check aria-hidden="true" />
      </span>
    </PageLayout>
  )
}
