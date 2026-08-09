import { Link, Navigate, useParams } from 'react-router'
import { ArrowRight, Check, ShieldAlert } from 'lucide-react'
import { useEffect } from 'react'
import { PageLayout } from '@/components/layout/PageLayout'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { FinalCta } from '@/components/home/HomeSections3'
import { partnershipDisclaimer, solutionBySlug, solutions } from '@/data/solutions'
import { FF_EVENTS, trackEvent } from '@/lib/analytics'
import { site } from '@/lib/site'

export default function SolutionPage() {
  const { slug } = useParams<{ slug: string }>()
  const solution = slug ? solutionBySlug(slug) : undefined

  useEffect(() => {
    if (solution) trackEvent(FF_EVENTS.solutionViewed, { solution: solution.slug, placement: 'solution_page' })
  }, [solution])

  if (!solution) return <Navigate to="/solutions" replace />

  const isPartnership = solution.kind === 'partnership'
  const related = solutions.filter((s) => s.slug !== solution.slug && s.group === solution.group).concat(
    solutions.filter((s) => s.slug !== solution.slug && s.group !== solution.group),
  ).slice(0, 3)

  return (
    <PageLayout
      title={solution.seo.title}
      description={solution.seo.description}
      schema={[
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: solution.name,
          provider: { '@type': 'Organization', name: site.name, url: site.url },
          areaServed: 'United Arab Emirates',
          description: solution.seo.description,
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${site.url}/en/` },
            { '@type': 'ListItem', position: 2, name: 'Solutions', item: `${site.url}/en/solutions` },
            { '@type': 'ListItem', position: 3, name: solution.name },
          ],
        },
      ]}
    >
      {/* Hero */}
      <section className="px-2.5 pt-2.5 sm:px-4 sm:pt-3" aria-labelledby="solution-heading">
        <div className="relative overflow-hidden rounded-[2rem] bg-navy-deep sm:rounded-[2.75rem]">
          <div className="absolute inset-0">
            <picture>
              <source media="(max-width: 768px)" srcSet={solution.heroImage.replace('.webp', '-mobile.webp')} />
              <img src={solution.heroImage} alt={solution.heroAlt} className="h-full w-full object-cover" fetchPriority="high" width={1920} height={1009} />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/40" />
          </div>
          <svg viewBox="0 0 120 120" fill="none" aria-hidden="true" className="pointer-events-none absolute -right-8 -top-8 z-10 h-36 w-36 text-white/15">
            <path d="M61 12C34 15 12 36 13 62c1 27 26 47 51 45 24-2 44-22 43-47-1-22-20-40-43-39-19 1-34 15-35 33" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
          </svg>
          <div className="container-ff relative py-24 sm:py-28 lg:py-36">
            <nav aria-label="Breadcrumb" className="mb-8 text-xs font-semibold text-white/60">
              <ol className="flex flex-wrap items-center gap-2">
                <li><Link to="/" className="hover:text-gold">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link to="/solutions" className="hover:text-gold">Solutions</Link></li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-gold">{solution.name}</li>
              </ol>
            </nav>
            <p className="eyebrow-light">{solution.eyebrow}</p>
            <h1 id="solution-heading" className="mt-4 max-w-3xl text-balance font-display text-3xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-[3.2rem]">
              {solution.h1}
            </h1>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link to={solution.primaryCta.href} onClick={() => trackEvent(FF_EVENTS.ctaClicked, { cta: solution.primaryCta.label, placement: 'solution_hero' })} className="btn-primary-ff">
                {solution.primaryCta.label}
              </Link>
              <Link to={solution.secondaryCta.href} className="btn-ghost-light">{solution.secondaryCta.label}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro + ideal for */}
      <section className="section-pad" aria-label="Overview">
        <div className="container-ff grid gap-14 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <SectionHeading eyebrow="Overview" title={solution.name} as="h2" />
            <div className="mt-6 space-y-5">
              {solution.intro.map((p, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <p className="text-lg leading-relaxed text-muted-foreground">{p}</p>
                </Reveal>
              ))}
            </div>
            {solution.pricingNote && (
              <Reveal delay={0.1}>
                <div className={`mt-8 rounded-2xl border p-6 ${isPartnership ? 'border-gold/40 bg-navy-deep text-white/80' : 'border-gold/30 bg-gold/5 text-ink/80'}`}>
                  <p className={`font-display text-xs font-bold uppercase tracking-[0.16em] ${isPartnership ? 'text-gold' : 'text-gold-dark'}`}>
                    {isPartnership ? 'Partnership Structure' : 'Commercial Structure'}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed">{solution.pricingNote}</p>
                </div>
              </Reveal>
            )}
          </div>
          <Reveal delay={0.12}>
            <div className="card-ff h-fit !p-7 lg:sticky lg:top-28">
              <h2 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-navy">Ideal for</h2>
              <ul className="mt-4 space-y-3">
                {solution.idealFor.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What's included */}
      <section className="section-pad bg-softgrey/60" aria-labelledby="included-heading">
        <div className="container-ff">
          <SectionHeading eyebrow="Scope" title="What Is Included" />
          <div className="mt-12 grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {solution.included.map((item, i) => (
              <Reveal key={item} delay={i * 0.03} y={12}>
                <div className="flex items-start gap-3 rounded-xl bg-white p-4">
                  <Check className="mt-0.5 h-4.5 w-4.5 shrink-0 text-navy" aria-hidden="true" />
                  <span className="text-sm font-medium leading-snug text-ink/85">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-pad" aria-labelledby="process-heading">
        <div className="container-ff">
          <SectionHeading eyebrow="Process" title="How the Engagement Works" />
          <ol className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {solution.process.map((stage, i) => (
              <Reveal key={stage.title} delay={i * 0.06}>
                <li className="card-ff card-ff-hover h-full">
                  <span className="font-display text-[0.65rem] font-bold uppercase tracking-[0.16em] text-gold">
                    {solution.process.length <= 6 ? `Phase ${i + 1}` : `Stage ${i + 1}`}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-semibold text-ink">{stage.title}</h3>
                  <ul className="mt-4 space-y-2">
                    {stage.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Partnership disclaimer */}
      {isPartnership && (
        <section className="bg-softgrey/60 py-14" aria-label="Important disclaimer">
          <div className="container-ff">
            <Reveal>
              <div className="flex items-start gap-4 rounded-2xl border border-gold/40 bg-white p-7">
                <ShieldAlert className="mt-0.5 h-6 w-6 shrink-0 text-gold-dark" aria-hidden="true" />
                <div>
                  <h2 className="font-display text-base font-semibold text-ink">Important — read before applying</h2>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{partnershipDisclaimer}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Detailed financial comparisons for this program are reviewed and approved internally by Fork &amp;
                    Founders before publication and are shared during the private-meeting stage.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Related */}
      <section className="section-pad" aria-labelledby="related-heading">
        <div className="container-ff">
          <SectionHeading eyebrow="Continue Exploring" title="Related Pathways" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {related.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.08}>
                <Link to={`/solutions/${s.slug}`} className="card-ff card-ff-hover group flex h-full flex-col">
                  <h3 className="font-display text-base font-semibold leading-snug text-ink group-hover:text-navy">{s.name}</h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">{s.cardSummary}</p>
                  <span className="mt-5 inline-flex items-center gap-2 font-display text-sm font-semibold text-navy">
                    Explore <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
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
