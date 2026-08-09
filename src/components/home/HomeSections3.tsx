import { useState } from 'react'
import { Link } from 'react-router'
import { ArrowRight, HelpCircle, Info } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { MenuPerformanceDashboard, OrderFlowDashboard, PlatformStatusDashboard } from '@/components/shared/DashboardMock'
import { PathQuiz } from '@/components/shared/PathQuiz'
import { category1Packages, consultancyCards, partnershipCards, pricingGlossary, type PackageModel } from '@/data/packages'
import { categoryOneServiceFeeNote, partnershipDisclaimer } from '@/data/solutions'
import { ownershipRows } from '@/data/capabilities'
import { faqs } from '@/data/faq'
import { FF_EVENTS, trackEvent } from '@/lib/analytics'

/* ----------------------- TECH & OPERATIONS ----------------------- */
const techFeatures = [
  'POS menu setup', 'Grubtech configuration', 'Aggregator dashboards', 'Sales visibility',
  'Menu-performance tracking', 'Order-flow monitoring', 'Platform training', 'Performance reporting',
]

export function TechOps() {
  return (
    <section className="navy-section section-pad text-white" aria-labelledby="tech-heading">
      <div className="container-ff">
        <SectionHeading
          dark
          eyebrow="Technology & Operations"
          title="Visibility, Control and Operational Intelligence"
          copy="Your brand runs on a connected stack: POS, Grubtech middleware and aggregator dashboards — configured, tested and handed over with training, so you always see what the business is doing."
        />
        <div className="mt-14 grid items-start gap-6 lg:grid-cols-[1fr_1.25fr]">
          <Reveal>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {techFeatures.map((f, i) => (
                <li key={f} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white/85 transition-colors hover:border-gold/40">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gold/15 font-display text-[0.65rem] font-bold text-gold">{String(i + 1).padStart(2, '0')}</span>
                  {f}
                </li>
              ))}
            </ul>
            <Link to="/technology-and-operations" className="btn-gold-ff mt-8">
              Explore the Operating Stack <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
            </Link>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="grid gap-5 sm:grid-cols-2">
              <OrderFlowDashboard />
              <div className="space-y-5">
                <MenuPerformanceDashboard />
                <PlatformStatusDashboard />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* -------------------- OWNERSHIP & RESPONSIBILITIES -------------------- */
export function Ownership() {
  return (
    <section className="section-pad" aria-labelledby="ownership-heading">
      <div className="container-ff">
        <SectionHeading
          eyebrow="Ownership & Responsibilities"
          title="Your Business. Supported by Our Operating System."
          copy="Transparency before signature. The points below summarize the standard model — the final agreement defines every term precisely."
        />
        <div className="mt-14 overflow-hidden rounded-2xl border border-border">
          {/* header row */}
          <div className="hidden grid-cols-[1.1fr_1.4fr_1.4fr] bg-navy-deep px-7 py-4 font-display text-xs font-bold uppercase tracking-[0.14em] text-white md:grid">
            <span>Aspect</span>
            <span className="text-gold-light">You — the owner</span>
            <span>Fork &amp; Founders</span>
          </div>
          {ownershipRows.map((row, i) => (
            <Reveal key={row.aspect} y={10} delay={i * 0.03}>
              <div className={`grid gap-4 px-7 py-6 md:grid-cols-[1.1fr_1.4fr_1.4fr] ${i % 2 ? 'bg-softgrey/50' : 'bg-white'}`}>
                <h3 className="font-display text-sm font-semibold text-ink">{row.aspect}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground md:border-s md:border-gold/30 md:ps-5">
                  <span className="mb-1 block font-display text-[0.62rem] font-bold uppercase tracking-[0.14em] text-gold-dark md:hidden">You — the owner</span>
                  {row.client}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground md:border-s md:border-navy/20 md:ps-5">
                  <span className="mb-1 block font-display text-[0.62rem] font-bold uppercase tracking-[0.14em] text-navy md:hidden">Fork &amp; Founders</span>
                  {row.ff}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-6">
          <p className="text-xs leading-relaxed text-muted-foreground">
            Ownership, intellectual-property rights, payment flows and responsibilities are subject to the final signed
            agreement. Nothing on this page overrides the agreement.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

/* ------------------------- BRAND PORTFOLIO ------------------------- */
export function BrandPortfolioPreview() {
  return (
    <section className="section-pad bg-softgrey/60" aria-labelledby="brands-heading">
      <div className="container-ff">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Our Brands"
              title="A Portfolio Built Brand by Brand"
              copy="Every Fork & Founders brand is developed, launched and operated through the same disciplined system — culinary development, identity, menu engineering, content, platforms and daily operations."
            />
            <Reveal delay={0.1}>
              <div className="mt-8 rounded-2xl border border-dashed border-navy/25 bg-white p-6">
                <p className="font-display text-sm font-semibold text-navy">Portfolio publishing in progress</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Brand case studies are published only with full client approval — names, imagery, platforms and
                  verified results. The first approved case studies are being prepared for release.
                </p>
                <Link to="/brands" className="link-underline mt-4 inline-block text-sm">
                  Visit the brand portfolio
                </Link>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              <div className="ff-img-frame aspect-[3/4]">
                <img src="/images/packaging/fork-founders-premium-food-packaging.webp" alt="Premium food packaging system developed for delivery-first brands" loading="lazy" width={1600} height={1040} />
              </div>
              <div className="mt-8 flex flex-col gap-4">
                <div className="ff-img-frame aspect-[3/4]">
                  <img src="/images/packaging/fork-founders-packaging-system.webp" alt="Packaging design exploration with boxes, sleeves and labels" loading="lazy" width={1600} height={1040} />
                </div>
                <p className="rounded-xl bg-white p-4 text-[0.7rem] leading-relaxed text-muted-foreground">
                  Capability demonstration — packaging and identity systems created within the Fork &amp; Founders
                  development process. Not a client portfolio brand.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ------------------------ PRICING PREVIEW ------------------------ */
export function PricingPreview() {
  const [model, setModel] = useState<PackageModel>('monthly')
  const data = category1Packages[model]
  return (
    <section className="section-pad" aria-labelledby="pricing-heading" id="category-1">
      <div className="container-ff">
        <SectionHeading
          eyebrow="Category 1 Packages"
          title="Flexible Commercial Models for Managed Food Brands"
          copy="Three structures, three brand-count tiers. Every proposal is confirmed individually before signature."
          align="center"
        />

        <Reveal className="mt-10">
          <div className="mx-auto flex w-fit rounded-full border border-border bg-white p-1.5" role="tablist" aria-label="Package model">
            {(['monthly', 'annual', 'hybrid'] as const).map((m) => (
              <button
                key={m}
                role="tab"
                aria-selected={model === m}
                onClick={() => {
                  setModel(m)
                  trackEvent(FF_EVENTS.priceTabChanged, { model: m })
                }}
                className={`rounded-full px-6 py-2.5 font-display text-sm font-semibold capitalize transition-all duration-300 ${
                  model === m ? 'bg-navy text-white shadow-md' : 'text-muted-foreground hover:text-navy'
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">{data.summary}</p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {data.tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.08}>
              <div className={`card-ff relative flex h-full flex-col !p-8 ${tier.label === 'Most Popular' ? 'border-navy shadow-[0_24px_50px_-20px_rgba(11,43,99,0.3)]' : ''}`}>
                {tier.label && (
                  <span className={`absolute -top-3.5 start-7 rounded-full px-3.5 py-1.5 font-display text-[0.62rem] font-bold uppercase tracking-[0.14em] ${
                    tier.label === 'Most Popular' ? 'bg-navy text-white' : 'bg-gold text-ink'
                  }`}>
                    {tier.label}
                  </span>
                )}
                <h3 className="font-display text-base font-semibold text-ink">{tier.name}</h3>
                <div className="mt-4 flex-1">
                  {tier.annual && <p className="font-display text-3xl font-bold text-navy-deep">{tier.annual}</p>}
                  {tier.monthly && <p className="font-display text-3xl font-bold text-navy-deep">{tier.monthly}</p>}
                  {tier.setup && (
                    <p className="mt-2 font-display text-lg font-semibold text-gold-dark">+ {tier.setup} <span className="text-xs font-medium text-muted-foreground">one-time setup</span></p>
                  )}
                  <p className="mt-2 text-xs text-muted-foreground">{tier.perUnit}</p>
                </div>
                <Link to="/book-a-consultation?solution=managed-brand" onClick={() => trackEvent(FF_EVENTS.packageViewed, { package: tier.name, model })} className={`mt-6 w-full ${tier.label === 'Most Popular' ? 'btn-primary-ff' : 'btn-secondary-ff'} !py-3 text-center`}>
                  Request Proposal
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <div className="mx-auto flex max-w-3xl items-start gap-3 rounded-2xl border border-gold/30 bg-gold/5 p-5">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-gold-dark" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-ink/80">{categoryOneServiceFeeNote}</p>
          </div>
        </Reveal>

        {/* Glossary tooltips */}
        <Reveal className="mt-8">
          <div className="flex flex-wrap items-center justify-center gap-2.5" aria-label="Pricing terms explained">
            {pricingGlossary.map((g) => (
              <span key={g.term} className="group relative">
                <button type="button" className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3.5 py-2 text-xs font-semibold text-ink/70 transition-colors hover:border-navy/40 hover:text-navy" aria-describedby={`tip-${g.term}`}>
                  <HelpCircle className="h-3.5 w-3.5 text-gold" aria-hidden="true" /> {g.term}
                </button>
                <span role="tooltip" id={`tip-${g.term}`} className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2.5 w-64 -translate-x-1/2 rounded-xl bg-navy-deep p-4 text-[0.7rem] leading-relaxed text-white opacity-0 shadow-xl transition-all duration-200 group-hover:opacity-100 group-focus-within:opacity-100">
                  {g.definition}
                </span>
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-10 text-center">
          <Link to="/packages-and-pricing" className="link-underline">
            See the complete packages and commercial terms
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------------------- CONSULTANCY PREVIEW ---------------------- */
export function ConsultancyPreview() {
  return (
    <section className="section-pad bg-softgrey/60" aria-labelledby="consultancy-heading">
      <div className="container-ff">
        <SectionHeading
          eyebrow="Consultancy Solutions"
          title="Build New. Or Transform What You Have."
          copy="Two structured consultancy engagements — one for new operations, one for existing businesses — each ending with a documented, market-ready result."
          align="center"
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {consultancyCards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <Link to={c.href} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-20px_rgba(7,29,73,0.3)]">
                <div className="ff-img-frame aspect-[16/8] !rounded-none">
                  <img src={c.image} alt={c.imageAlt} loading="lazy" width={1920} height={1009} />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-xl font-semibold text-ink transition-colors group-hover:text-navy">{c.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{c.description}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="font-display text-sm font-bold text-gold-dark">{c.price}</span>
                    <span className="inline-flex items-center gap-1.5 font-display text-sm font-semibold text-navy">
                      Compare Consultancy Solutions <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------------- PARTNERSHIP PREVIEW ---------------------- */
export function PartnershipPreview() {
  return (
    <section className="navy-section section-pad text-white" aria-labelledby="partnership-heading">
      <div className="container-ff">
        <SectionHeading
          dark
          eyebrow="Long-Term Partnerships"
          title="Build a Multi-Brand Food Portfolio"
          copy="Two private partnership programs for qualified investors and business groups — structured, documented and managed by the Fork & Founders operating team."
          align="center"
        />
        <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
          {partnershipCards.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.12}>
              <div className="flex h-full flex-col rounded-2xl border border-gold/25 bg-white/[0.04] p-8 backdrop-blur transition-all duration-300 hover:border-gold/50 hover:bg-white/[0.07]">
                <h3 className="font-display text-lg font-semibold leading-snug text-white">{p.name}</h3>
                <ul className="mt-6 flex-1 space-y-3.5">
                  <li className="flex items-center justify-between border-b border-white/10 pb-3 text-sm">
                    <span className="text-white/55">Portfolio</span>
                    <span className="font-display font-semibold text-white">{p.brands}</span>
                  </li>
                  <li className="flex items-center justify-between border-b border-white/10 pb-3 text-sm">
                    <span className="text-white/55">Term</span>
                    <span className="font-display font-semibold text-white">{p.term}</span>
                  </li>
                  <li className="flex items-center justify-between text-sm">
                    <span className="text-white/55">One-time investment</span>
                    <span className="font-display font-bold text-gold">{p.investment}</span>
                  </li>
                </ul>
                <Link to={p.cta.href} className="btn-gold-ff mt-8 w-full">
                  {p.cta.label}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mx-auto mt-8 max-w-4xl">
          <p className="text-center text-[0.7rem] leading-relaxed text-white/45">{partnershipDisclaimer}</p>
        </Reveal>
      </div>
    </section>
  )
}

/* --------------------------- QUIZ SECTION --------------------------- */
export function QuizSection() {
  return (
    <section className="section-pad" aria-labelledby="quiz-heading">
      <div className="container-ff">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Find Your Best Path"
              title="Seven Questions. One Clear Recommendation."
              copy="Answer a few questions about your objective, resources and involvement — and we will point you to the Fork & Founders pathway that fits, with the reasoning explained."
            />
            <Reveal delay={0.1}>
              <div className="ff-img-frame mt-8 hidden aspect-[4/3] lg:block">
                <img src="/images/contact/fork-founders-consultation-meeting.webp" alt="Consultation setting with documents, laptop and coffee" loading="lazy" width={1600} height={1040} />
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <PathQuiz />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ----------------------------- FAQ ----------------------------- */
export function FaqSection({ limit = 8 }: { limit?: number }) {
  const [open, setOpen] = useState(0)
  const items = faqs.slice(0, limit)
  return (
    <section className="section-pad bg-softgrey/60" aria-labelledby="faq-heading">
      <div className="container-ff">
        <SectionHeading
          eyebrow="Questions, Answered Honestly"
          title="Frequently Asked Questions"
          copy="Straight answers about the model, the commercials and the responsibilities — including the things most providers avoid saying."
          align="center"
        />
        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {items.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.04} y={12}>
              <div className="overflow-hidden rounded-2xl border border-border bg-white">
                <button
                  type="button"
                  onClick={() => setOpen(open === i ? -1 : i)}
                  aria-expanded={open === i}
                  className="flex w-full items-center justify-between gap-4 p-5 text-start"
                >
                  <span className="font-display text-[0.92rem] font-semibold text-ink">{f.q}</span>
                  <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-all duration-300 ${open === i ? 'rotate-45 bg-navy text-white' : 'bg-paleblue text-navy'}`} aria-hidden="true">
                    +
                  </span>
                </button>
                <div className={`grid transition-all duration-300 ${open === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <p className="border-t border-border p-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <Link to="/faq" className="btn-secondary-ff">
            View All {faqs.length} Questions <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

/* --------------------------- FINAL CTA --------------------------- */
export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-navy-deep py-24" aria-labelledby="final-cta-heading">
      <div className="absolute inset-0 opacity-25">
        <img src="/images/video/fork-founders-hero-video-poster.webp" alt="" aria-hidden="true" className="h-full w-full object-cover" loading="lazy" width={1920} height={1009} />
        <div className="absolute inset-0 bg-navy-deep/70" />
      </div>
      <div className="container-ff relative text-center">
        <Reveal>
          <p className="eyebrow">We Build. You Grow.</p>
          <h2 id="final-cta-heading" className="mx-auto mt-4 max-w-2xl text-balance font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Ready to Build Your Food Business?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/70">
            Tell us what you are planning. Our team will review your concept, current operation, menu or investment
            objective and recommend the most suitable Fork &amp; Founders pathway.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link to="/book-a-consultation" className="btn-gold-ff">Book a Consultation</Link>
            <Link to="/find-your-path" className="btn-ghost-light">Find Your Best Path</Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
