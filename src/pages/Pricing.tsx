import { useState } from 'react'
import { Link } from 'react-router'
import { Check, Info } from 'lucide-react'
import { PageLayout, PageHero } from '@/components/layout/PageLayout'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { FinalCta } from '@/components/home/HomeSections3'
import { category1Packages, commercialExclusionsNote, pricingGlossary, type PackageModel } from '@/data/packages'
import { categoryOneServiceFeeNote } from '@/data/solutions'

const otherCommercials = [
  {
    title: 'Custom Brand Development',
    price: 'AED 9,000 – 17,000 / month',
    note: 'Quoted individually after the culinary menu assessment. Depends on cuisine complexity, menu size and complexity, development and production requirements, location, packaging and operational support level.',
    cta: { label: 'Submit Your Menu', href: '/submit-your-menu' },
    href: '/solutions/custom-brand-development',
  },
  {
    title: 'Turnkey Kitchen & Restaurant Consultancy',
    price: 'From AED 48,000',
    note: 'Final pricing depends on project scope, kitchen size, concept complexity, menu size, location, equipment, recruitment, regulatory requirements and level of Fork & Founders involvement. Optional operations management from AED 9,000 / month.',
    cta: { label: 'Start a Restaurant Project', href: '/start-a-restaurant-project' },
    href: '/solutions/turnkey-kitchen-restaurant-consultancy',
  },
  {
    title: 'Restaurant & Brand Growth Consultancy',
    price: 'From AED 48,000',
    note: 'Most projects complete within one to three months, depending on business size, locations, menu size, complexity, existing systems, employee count, integrations and scope. Optional management from AED 9,000 / month.',
    cta: { label: 'Request an Assessment', href: '/operational-assessment' },
    href: '/solutions/restaurant-brand-growth-consultancy',
  },
  {
    title: 'Strategic Investment Partner Program',
    price: 'AED 300,000 one-time',
    note: 'Three brands, five-year partnership. Monthly management fees included for five years; the standard 5% net-sales service fee is waived for five years. Subject to qualification and the signed agreement.',
    cta: { label: 'Apply for the Program', href: '/strategic-partner-application' },
    href: '/solutions/strategic-investment-partner-program',
  },
  {
    title: 'Ultimate Strategic Investment Partner Program',
    price: 'AED 2,000,000 one-time',
    note: 'Twenty brands, six-year partnership. Recurring management fees included; the standard 5% net-sales service charge is waived. Subject to qualification and the signed agreement.',
    cta: { label: 'Request a Private Meeting', href: '/ultimate-partner-application' },
    href: '/solutions/ultimate-strategic-investment-partner-program',
  },
]

export default function Pricing() {
  const [model, setModel] = useState<PackageModel>('monthly')
  const [brands, setBrands] = useState(0)
  const tiers = category1Packages[model].tiers

  return (
    <PageLayout
      title="Packages & Pricing — Transparent Commercial Models | Fork & Founders"
      description="Category 1 monthly, annual and hybrid packages, custom development fees, turnkey and growth consultancy pricing, and partnership program structures — no checkout, no pressure."
    >
      <PageHero
        eyebrow="Packages & Pricing"
        title="Transparent Commercials. No Checkout Buttons."
        copy="Every engagement begins with a consultation and a written proposal. The figures below are the published structures — final terms are confirmed individually."
      />

      {/* Interactive Category 1 builder */}
      <section className="section-pad" id="category-1" aria-labelledby="builder-heading">
        <div className="container-ff">
          <SectionHeading
            eyebrow="Category 1 · Fully Managed Food Brand"
            title="Build Your Package"
            copy="Select a commercial model and brand count to see the published fee structure."
          />
          <Reveal className="mt-10">
            <div className="card-ff !p-7 sm:!p-9">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <p className="font-display text-xs font-bold uppercase tracking-[0.14em] text-ink/60">Commercial model</p>
                  <div className="mt-3 flex flex-wrap gap-2" role="tablist" aria-label="Commercial model">
                    {(['monthly', 'annual', 'hybrid'] as const).map((m) => (
                      <button
                        key={m}
                        role="tab"
                        aria-selected={model === m}
                        onClick={() => setModel(m)}
                        className={`rounded-full px-5 py-2.5 font-display text-sm font-semibold capitalize transition-all ${
                          model === m ? 'bg-navy text-white' : 'border border-border text-muted-foreground hover:border-navy/40'
                        }`}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-display text-xs font-bold uppercase tracking-[0.14em] text-ink/60">Brands / locations</p>
                  <div className="mt-3 flex flex-wrap gap-2" role="tablist" aria-label="Brand count">
                    {['One', 'Two', 'Three'].map((b, i) => (
                      <button
                        key={b}
                        role="tab"
                        aria-selected={brands === i}
                        onClick={() => setBrands(i)}
                        className={`rounded-full px-5 py-2.5 font-display text-sm font-semibold transition-all ${
                          brands === i ? 'bg-navy text-white' : 'border border-border text-muted-foreground hover:border-navy/40'
                        }`}
                      >
                        {b} {i > 0 ? 'brands / locations' : 'brand'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-9 rounded-2xl bg-navy-deep p-7 text-white sm:p-9">
                <div className="flex flex-wrap items-baseline justify-between gap-4">
                  <div>
                    <p className="font-display text-xs font-bold uppercase tracking-[0.16em] text-gold">{tiers[brands].name}</p>
                    <p className="mt-3 font-display text-4xl font-bold">
                      {tiers[brands].annual ?? tiers[brands].monthly}
                    </p>
                    {tiers[brands].setup && (
                      <p className="mt-2 font-display text-lg font-semibold text-gold-light">+ {tiers[brands].setup} one-time setup</p>
                    )}
                    <p className="mt-2 text-sm text-white/60">{tiers[brands].perUnit}</p>
                  </div>
                  {tiers[brands].label && (
                    <span className="rounded-full bg-gold px-4 py-1.5 font-display text-xs font-bold uppercase tracking-[0.12em] text-ink">
                      {tiers[brands].label}
                    </span>
                  )}
                </div>
                <div className="mt-6 flex items-start gap-3 border-t border-white/10 pt-5 text-sm text-white/70">
                  <Info className="mt-0.5 h-4.5 w-4.5 shrink-0 text-gold" aria-hidden="true" />
                  <p>{categoryOneServiceFeeNote}</p>
                </div>
                <Link to="/book-a-consultation?solution=managed-brand" className="btn-gold-ff mt-7">
                  Request Proposal
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Published monthly tiers — full structure at a glance */}
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {category1Packages.monthly.tiers.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.06}>
                <div className={`card-ff relative flex h-full flex-col !p-7 ${t.label === 'Most Popular' ? 'border-navy' : ''}`}>
                  {t.label && (
                    <span className={`absolute -top-3 start-6 rounded-full px-3.5 py-1 font-display text-[0.65rem] font-bold uppercase tracking-[0.12em] ${
                      t.label === 'Most Popular' ? 'bg-gold text-ink' : 'bg-navy text-white'
                    }`}>
                      {t.label}
                    </span>
                  )}
                  <h3 className="mt-2 font-display text-base font-bold text-ink">{t.name}</h3>
                  <p className="mt-3 font-display text-3xl font-extrabold text-navy-deep">{t.monthly}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{t.perUnit}</p>
                  <p className="mt-4 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
                    {category1Packages.monthly.summary}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Glossary */}
      <section className="bg-softgrey/60 py-16" aria-labelledby="glossary-heading">
        <div className="container-ff">
          <h2 id="glossary-heading" className="font-display text-2xl font-semibold text-ink">Commercial Terms, Explained</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pricingGlossary.map((g) => (
              <Reveal key={g.term}>
                <div className="card-ff h-full !p-5">
                  <h3 className="font-display text-sm font-semibold text-navy">{g.term}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{g.definition}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-6">
            <p className="max-w-3xl rounded-xl border border-border bg-white p-5 text-xs leading-relaxed text-muted-foreground">
              <Check className="me-1.5 inline h-3.5 w-3.5 text-gold" aria-hidden="true" />
              {commercialExclusionsNote}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Other categories */}
      <section className="section-pad" aria-labelledby="other-commercials-heading">
        <div className="container-ff">
          <SectionHeading eyebrow="All Categories" title="Development, Consultancy & Partnership Structures" />
          <div className="mt-12 space-y-5">
            {otherCommercials.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.05}>
                <div className="card-ff grid items-center gap-6 !p-7 md:grid-cols-[1.6fr_auto_auto]">
                  <div>
                    <Link to={c.href} className="font-display text-lg font-semibold text-ink transition-colors hover:text-navy">
                      {c.title}
                    </Link>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.note}</p>
                  </div>
                  <p className="font-display text-xl font-bold text-navy-deep md:text-end">{c.price}</p>
                  <Link to={c.cta.href} className="btn-secondary-ff !py-3 !text-xs">{c.cta.label}</Link>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8">
            <p className="text-xs leading-relaxed text-muted-foreground">
              Whether quoted fees include UAE VAT is confirmed in the commercial proposal and final agreement. All
              partnership figures are illustrative of the commercial structure and are not guaranteed revenue, savings,
              returns or profits. No online payment is taken on this website.
            </p>
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </PageLayout>
  )
}
