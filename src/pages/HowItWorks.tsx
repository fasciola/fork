import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import { PageLayout, PageHero } from '@/components/layout/PageLayout'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { FinalCta } from '@/components/home/HomeSections3'
import { FiveWeekTimeline } from '@/components/home/HomeSections2'
import { nineStages } from '@/data/capabilities'
import { solutions } from '@/data/solutions'

export default function HowItWorks() {
  return (
    <PageLayout
      title="How It Works — The Fork & Founders Onboarding Process"
      description="Nine documented stages from agreement to live brand: responsibilities, outputs, dependencies and the estimated five-week Category 1 timeline."
    >
      <PageHero
        eyebrow="How It Works"
        title="A Documented Process — Not a Leap of Faith"
        copy="Every stage has a defined objective, clear responsibilities on both sides and a concrete output. This is the Category 1 journey; Categories 2–4 follow their own scoped timelines, and partnership programs run on agreed launch schedules."
      />

      <section className="section-pad" aria-label="Nine-stage process">
        <div className="container-ff">
          <ol className="space-y-6">
            {nineStages.map((s, i) => (
              <Reveal key={s.step} delay={i * 0.04}>
                <li className="card-ff grid gap-6 !p-7 sm:!p-9 lg:grid-cols-[auto_1fr] lg:gap-10">
                  <div className="flex items-start gap-5 lg:w-72 lg:flex-col lg:gap-3">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-navy font-display text-lg font-bold text-white">
                      {s.step}
                    </span>
                    <h2 className="font-display text-xl font-semibold leading-snug text-ink">{s.title}</h2>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                      <p className="eyebrow-navy">Objective</p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.objective}</p>
                    </div>
                    <div>
                      <p className="eyebrow-navy">Fork &amp; Founders</p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.ffResponsibility}</p>
                    </div>
                    <div>
                      <p className="eyebrow-navy">You</p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.clientResponsibility}</p>
                    </div>
                    <div>
                      <p className="eyebrow-navy">Output</p>
                      <p className="mt-2 rounded-lg bg-paleblue/60 px-3.5 py-2.5 text-sm font-semibold text-navy">{s.output}</p>
                    </div>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <FiveWeekTimeline />

      <section className="section-pad" aria-labelledby="other-paths-heading">
        <div className="container-ff">
          <SectionHeading
            eyebrow="Other Pathways"
            title="Categories 2–6 Follow Their Own Timelines"
            copy="Custom development is scoped after the menu assessment; turnkey projects typically run approximately 90 days; growth consultancy runs one to three months; partnerships follow an agreed phased schedule."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {solutions.filter((s) => s.id !== 1).map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.06}>
                <Link to={`/solutions/${s.slug}`} className="card-ff card-ff-hover group flex h-full flex-col !p-6">
                  <h3 className="font-display text-sm font-semibold leading-snug text-ink group-hover:text-navy">{s.name}</h3>
                  <span className="mt-4 inline-flex items-center gap-1.5 font-display text-xs font-bold text-navy">
                    View process <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </PageLayout>
  )
}
