import { Link } from 'react-router'
import { ArrowRight, Check } from 'lucide-react'
import { PageLayout, PageHero } from '@/components/layout/PageLayout'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { MenuPerformanceDashboard, OrderFlowDashboard, PlatformStatusDashboard } from '@/components/shared/DashboardMock'
import { FinalCta } from '@/components/home/HomeSections3'

const layers = [
  {
    title: 'POS — the system of record',
    body: 'Your menu, prices and transactions live in the point-of-sale system. We configure the full menu structure, categories, modifiers and customization options, then verify every price before anything goes live.',
    points: ['Menu setup and configuration', 'Modifiers and customization', 'Price verification', 'Internal testing'],
  },
  {
    title: 'Grubtech — the middleware layer',
    body: 'Grubtech connects the delivery platforms to your POS, so orders from every channel arrive in one clean flow instead of a wall of separate tablets. We configure, integrate and test the connection end to end.',
    points: ['Grubtech setup and configuration', 'Platform-to-POS integration', 'Test orders and order-flow verification', 'Troubleshooting before go-live'],
  },
  {
    title: 'Aggregator dashboards — your visibility',
    body: 'Each delivery platform provides its own dashboard for menus, availability, promotions and performance. We complete registration, document submission, menu and image upload, then train you to run them confidently.',
    points: ['Aggregator registration and onboarding', 'Menu and product-image upload', 'Platform activation', 'Promotion coordination'],
  },
  {
    title: 'Reporting — operational intelligence',
    body: 'Sales visibility, menu-performance tracking and order-flow monitoring turn daily activity into decisions. Performance reporting keeps you informed without you needing to stand in the kitchen.',
    points: ['Sales visibility', 'Menu-performance tracking', 'Order-flow monitoring', 'Structured performance reporting'],
  },
]

export default function Technology() {
  return (
    <PageLayout
      title="Technology & Operations — POS, Grubtech & Platform Systems | Fork & Founders"
      description="How Fork & Founders connects POS, Grubtech middleware and aggregator dashboards into one tested order flow — with training, monitoring and performance reporting."
    >
      <PageHero
        eyebrow="Technology & Operations"
        title="One Connected Stack. Zero Operational Guesswork."
        copy="Technology explained in business language: what each layer does, why it matters, and how it is configured, tested and handed over to you."
      />

      <section className="section-pad" aria-label="Technology layers">
        <div className="container-ff grid gap-6 md:grid-cols-2">
          {layers.map((l, i) => (
            <Reveal key={l.title} delay={i * 0.07}>
              <div className="card-ff card-ff-hover h-full !p-8">
                <h2 className="font-display text-xl font-semibold text-ink">{l.title}</h2>
                <p className="mt-3.5 text-sm leading-relaxed text-muted-foreground">{l.body}</p>
                <ul className="mt-5 space-y-2.5">
                  {l.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm font-medium text-ink/80">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="navy-section section-pad text-white" aria-labelledby="viz-heading">
        <div className="container-ff">
          <SectionHeading
            dark
            eyebrow="Illustrative Visualizations"
            title="What Operational Visibility Looks Like"
            copy="Original interface visualizations demonstrating the kind of monitoring our operating model provides. All data shown is fictional and neutral."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            <Reveal><OrderFlowDashboard /></Reveal>
            <Reveal delay={0.1}><MenuPerformanceDashboard /></Reveal>
            <Reveal delay={0.2}><PlatformStatusDashboard /></Reveal>
          </div>
          <Reveal className="mt-8">
            <p className="text-xs text-white/45">
              Interface visualizations shown for illustrative purposes only. They contain no customer information, real
              revenue values, usernames, account details or confidential data — and do not represent actual Fork &amp;
              Founders performance.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-softgrey/60">
        <div className="container-ff grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="ff-img-frame aspect-[4/3]">
              <img src="/images/operations/fork-founders-operational-handover.webp" alt="Operations binder and checklist during operational handover" loading="lazy" width={1600} height={1040} />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Handover & Training"
              title="We Hand Over the Controls — With Training"
              copy="Platform training is a formal stage of every launch: aggregator dashboards, the Grubtech layer and the reporting rhythm are walked through with you, so visibility never depends on us being in the room."
            />
            <Reveal delay={0.1}>
              <Link to="/book-a-consultation" className="btn-primary-ff mt-8">
                Discuss Your Operation <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <FinalCta />
    </PageLayout>
  )
}
