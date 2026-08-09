import { useState } from 'react'
import { Link } from 'react-router'
import { ArrowRight, Check, ChevronDown } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { FFIcon, type FFIconName } from '@/components/shared/Icons'
import { audiencePaths, capabilityGroups, differentiators, fiveWeekTimeline, nineStages, timelineDisclaimer } from '@/data/capabilities'

/* ------------------------ WHO WE WORK WITH ------------------------ */
export function WhoWeWorkWith() {
  return (
    <section className="section-pad bg-softgrey/60" aria-labelledby="audiences-heading">
      <div className="container-ff">
        <SectionHeading
          eyebrow="Who We Work With"
          title="Built for Every Stage of the Food Business Journey"
          copy="Find the pathway designed for where you are today — and where you want the business to go."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {audiencePaths.map((a, i) => (
            <Reveal key={a.audience} delay={i * 0.06}>
              <div className="card-ff card-ff-hover flex h-full flex-col">
                <h3 className="font-display text-base font-semibold text-ink">{a.audience}</h3>
                <p className="mt-1.5 text-sm font-medium text-navy">{a.situation}</p>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">{a.challenge}</p>
                <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                  <span className="text-xs font-semibold text-muted-foreground">
                    Recommended: <span className="text-ink">{a.solution}</span>
                  </span>
                  <Link to={a.cta.href} className="inline-flex items-center gap-1.5 font-display text-xs font-bold text-navy transition-colors hover:text-gold">
                    {a.cta.label} <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* -------------------------- CAPABILITIES -------------------------- */
export function Capabilities() {
  return (
    <section className="section-pad" aria-labelledby="capabilities-heading">
      <div className="container-ff">
        <SectionHeading
          eyebrow="Full Capabilities"
          title="Everything Required to Build a Market-Ready Food Business"
          copy="Seven disciplines, one operating team. Every capability below is delivered inside the Fork & Founders model — not subcontracted, not theoretical."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {capabilityGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.05} className={i === 6 ? 'sm:col-span-2 lg:col-span-3 xl:col-span-1' : ''}>
              <div className="group h-full rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:border-navy/25 hover:shadow-lg hover:shadow-navy/5">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-white transition-colors duration-300 group-hover:bg-gold group-hover:text-ink">
                  <FFIcon name={g.icon as FFIconName} className="h-5.5 w-5.5" />
                </span>
                <h3 className="mt-4 font-display text-[0.95rem] font-semibold uppercase tracking-[0.08em] text-ink">{g.title}</h3>
                <ul className="mt-4 space-y-2">
                  {g.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[0.83rem] leading-snug text-muted-foreground">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
          {/* imagery tile */}
          <Reveal delay={0.35}>
            <div className="ff-img-frame h-full min-h-[18rem]">
              <img
                src="/images/capabilities/fork-founders-culinary-development.webp"
                alt="A chef tasting and refining products during culinary development"
                loading="lazy"
                width={1600}
                height={1040}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* --------------------------- WHY US --------------------------- */
export function WhyUs() {
  return (
    <section className="navy-section section-pad text-white" aria-labelledby="why-heading">
      <div className="container-ff">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              dark
              eyebrow="Why Fork & Founders"
              title="Built Around Operations — Not Just Advice."
              copy="Many service providers stop at strategy, branding or setup. Fork & Founders works across the full operating journey — from product development and documentation to launch, production and ongoing performance."
            />
            <ul className="mt-10 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
              {differentiators.map((d, i) => (
                <Reveal key={d} delay={i * 0.04} y={12}>
                  <li className="flex items-start gap-2.5 text-sm text-white/80">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                    {d}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
          <Reveal delay={0.15}>
            <div className="grid gap-4">
              <div className="ff-img-frame aspect-[4/3]">
                <img src="/images/operations/fork-founders-cloud-kitchen-operations.webp" alt="Cloud-kitchen order production at a professional packing station" loading="lazy" width={1600} height={1040} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="ff-img-frame aspect-square">
                  <img src="/images/capabilities/fork-founders-food-preparation.webp" alt="Ingredient preparation in a professional kitchen" loading="lazy" width={1600} height={1040} />
                </div>
                <div className="ff-img-frame aspect-square">
                  <img src="/images/packaging/fork-founders-delivery-dispatch.webp" alt="Premium delivery dispatch with sealed containers" loading="lazy" width={1600} height={1040} />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* -------------------------- HOW IT WORKS -------------------------- */
export function HowItWorksPreview() {
  const [active, setActive] = useState(0)
  return (
    <section className="section-pad" aria-labelledby="process-heading">
      <div className="container-ff">
        <SectionHeading
          eyebrow="The Category 1 Process"
          title="Nine Structured Stages From Agreement to Live Brand"
          copy="A documented onboarding process with clear responsibilities at every stage — so you always know what happens next, and when."
        />

        {/* Desktop: interactive horizontal timeline */}
        <Reveal delay={0.1} className="mt-12 hidden lg:block">
          <div className="no-scrollbar flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Process stages">
            {nineStages.map((s, i) => (
              <button
                key={s.step}
                role="tab"
                aria-selected={active === i}
                onClick={() => setActive(i)}
                className={`flex min-w-[8.5rem] flex-1 flex-col items-start gap-2 rounded-xl border p-4 text-start transition-all duration-300 ${
                  active === i ? 'border-navy bg-navy text-white shadow-lg shadow-navy/20' : 'border-border bg-white hover:border-navy/30'
                }`}
              >
                <span className={`font-display text-[0.65rem] font-bold uppercase tracking-[0.14em] ${active === i ? 'text-gold-light' : 'text-gold'}`}>
                  Stage {s.step}
                </span>
                <span className={`font-display text-[0.8rem] font-semibold leading-tight ${active === i ? 'text-white' : 'text-ink'}`}>
                  {s.title}
                </span>
              </button>
            ))}
          </div>
          <div className="card-ff mt-4 grid gap-8 !p-8 sm:grid-cols-2" role="tabpanel">
            <div>
              <p className="eyebrow-navy">Objective</p>
              <p className="mt-2 text-lg font-medium text-ink">{nineStages[active].objective}</p>
              <p className="eyebrow-navy mt-6">Output</p>
              <p className="mt-2 text-muted-foreground">{nineStages[active].output}</p>
            </div>
            <div className="space-y-5 border-t border-border pt-6 sm:border-s sm:border-t-0 sm:ps-8 sm:pt-0">
              <div>
                <p className="font-display text-xs font-bold uppercase tracking-[0.14em] text-navy">Fork &amp; Founders</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{nineStages[active].ffResponsibility}</p>
              </div>
              <div>
                <p className="font-display text-xs font-bold uppercase tracking-[0.14em] text-gold">You</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{nineStages[active].clientResponsibility}</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Mobile: vertical accordion */}
        <div className="mt-10 space-y-3 lg:hidden">
          {nineStages.map((s, i) => (
            <div key={s.step} className="overflow-hidden rounded-2xl border border-border bg-white">
              <button
                type="button"
                onClick={() => setActive(active === i ? -1 : i)}
                aria-expanded={active === i}
                className="flex w-full items-center justify-between gap-4 p-5 text-start"
              >
                <span className="flex items-center gap-3.5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-paleblue font-display text-xs font-bold text-navy">{s.step}</span>
                  <span className="font-display text-sm font-semibold text-ink">{s.title}</span>
                </span>
                <ChevronDown className={`h-4 w-4 shrink-0 text-navy transition-transform duration-300 ${active === i ? 'rotate-180' : ''}`} aria-hidden="true" />
              </button>
              <div className={`grid transition-all duration-300 ${active === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden">
                  <div className="space-y-3 border-t border-border p-5 text-sm">
                    <p className="font-medium text-ink">{s.objective}</p>
                    <p className="text-muted-foreground"><span className="font-semibold text-navy">Fork &amp; Founders:</span> {s.ffResponsibility}</p>
                    <p className="text-muted-foreground"><span className="font-semibold text-gold-dark">You:</span> {s.clientResponsibility}</p>
                    <p className="rounded-lg bg-softgrey px-3.5 py-2.5 text-xs font-semibold text-ink">Output: {s.output}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Reveal className="mt-10">
          <Link to="/how-it-works" className="btn-secondary-ff">
            View the Complete Process <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

/* ------------------------ FIVE-WEEK TIMELINE ------------------------ */
export function FiveWeekTimeline() {
  return (
    <section className="section-pad bg-softgrey/60" aria-labelledby="timeline-heading">
      <div className="container-ff">
        <SectionHeading
          eyebrow="Estimated Category 1 Timeline"
          title="From Onboarding to Launch"
        />
        <ol className="mt-14 grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {fiveWeekTimeline.map((w, i) => (
            <Reveal key={w.week} delay={i * 0.08}>
              <li className="relative flex h-full flex-col rounded-2xl border border-border bg-white p-6">
                <span className="font-display text-[0.65rem] font-bold uppercase tracking-[0.18em] text-gold">{w.week}</span>
                <span className="mt-3 flex-1 font-display text-[0.95rem] font-semibold leading-snug text-ink">{w.title}</span>
                <span className="mt-4 h-1 w-full rounded-full bg-softgrey">
                  <span className="block h-full rounded-full bg-gradient-to-r from-navy to-gold" style={{ width: `${((i + 1) / fiveWeekTimeline.length) * 100}%` }} />
                </span>
              </li>
            </Reveal>
          ))}
        </ol>
        <Reveal className="mt-8">
          <p className="max-w-3xl text-xs leading-relaxed text-muted-foreground">{timelineDisclaimer}</p>
        </Reveal>
      </div>
    </section>
  )
}
