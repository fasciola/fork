import { Link } from 'react-router'
import { ArrowRight, ArrowUpRight, ChevronRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { FFIcon, type FFIconName } from '@/components/shared/Icons'
import { groupLabels, solutions } from '@/data/solutions'
import { journeySteps } from '@/data/capabilities'
import { useI18n } from '@/lib/i18n'
import { FF_EVENTS, trackEvent } from '@/lib/analytics'

/* ------------------------------ HERO ------------------------------ */
/** Hand-drawn doodle accents (original SVG line art) */
function DoodleScribble({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" aria-hidden="true" className={className}>
      <path
        d="M61 12C34 15 12 36 13 62c1 27 26 47 51 45 24-2 44-22 43-47-1-22-20-40-43-39-19 1-34 15-35 33"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
    </svg>
  )
}
function DoodleSpark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" fill="none" aria-hidden="true" className={className}>
      <path d="M30 6v14M30 40v14M6 30h14M40 30h14" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
    </svg>
  )
}
function DoodleUnderline({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 22" fill="none" aria-hidden="true" className={className} preserveAspectRatio="none">
      <path d="M4 15C60 7 150 4 216 9" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
    </svg>
  )
}

export function Hero() {
  const { t } = useI18n()
  const reduce = useReducedMotion()
  const wordAnim = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 34, rotate: 1.5 },
          animate: { opacity: 1, y: 0, rotate: 0 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
        }
  return (
    <section className="px-2.5 pt-2.5 sm:px-4 sm:pt-3" aria-labelledby="hero-heading">
      <div className="sage-section relative overflow-hidden rounded-[2rem] sm:rounded-[2.75rem]">
        {/* doodle accents */}
        <DoodleScribble className="animate-ff-spin-slow pointer-events-none absolute -left-10 top-16 h-40 w-40 text-white/20 sm:h-56 sm:w-56" />
        <DoodleSpark className="pointer-events-none absolute right-[8%] top-[14%] hidden h-10 w-10 text-gold lg:block" />
        <span className="pointer-events-none absolute bottom-[18%] left-[6%] hidden h-3 w-3 rounded-full bg-gold lg:block" aria-hidden="true" />
        <span className="pointer-events-none absolute right-[14%] top-[38%] hidden h-2.5 w-2.5 rounded-full bg-white/50 lg:block" aria-hidden="true" />

        <div className="container-ff relative grid items-center gap-10 pb-16 pt-16 sm:pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:pb-20 lg:pt-24">
          <div>
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="font-display text-[0.72rem] font-bold uppercase tracking-[0.24em] text-white/90"
            >
              Dubai-Based Food Brand &amp; Restaurant Operating Partner
            </motion.p>
            <h1
              id="hero-heading"
              className="mt-5 font-display text-[clamp(2.6rem,6.4vw,5.2rem)] font-extrabold leading-[1.02] tracking-tight text-white"
            >
              <motion.span {...wordAnim(0.12)} className="block">
                Build, Launch
              </motion.span>
              <motion.span {...wordAnim(0.22)} className="block">
                and Scale{' '}
                <span className="relative inline-block text-gold">
                  Food Brands
                  <DoodleUnderline className="absolute -bottom-2 left-0 h-[0.35em] w-full text-white/70" />
                </span>
              </motion.span>
              <motion.span {...wordAnim(0.32)} className="mt-2 block font-display text-[clamp(1.3rem,3vw,2.4rem)] font-bold leading-snug text-white/95">
                — without the operational complexity.
              </motion.span>
            </h1>
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.42 }}
              className="mt-6 max-w-xl text-lg font-semibold leading-relaxed text-white/90"
            >
              From managed virtual food brands to turnkey restaurants and multi-brand partnerships, Fork &amp; Founders
              brings culinary development, branding, technology, production and operations together under one expert team.
            </motion.p>
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.52 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <Link
                to="/solutions"
                onClick={() => trackEvent(FF_EVENTS.ctaClicked, { cta: 'explore_solutions', placement: 'hero' })}
                className="btn-primary-ff !py-2.5 pe-3"
              >
                {t('exploreSolutions')}
                <span className="btn-chip">
                  <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
                </span>
              </Link>
              <Link
                to="/book-a-consultation"
                onClick={() => trackEvent(FF_EVENTS.ctaClicked, { cta: 'book_consultation', placement: 'hero' })}
                className="btn-ghost-light"
              >
                {t('bookConsultation')}
              </Link>
            </motion.div>
            <motion.p
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="mt-6 text-sm font-semibold text-white/70"
            >
              Tell us where you are today. We will help you identify the right pathway.
            </motion.p>
          </div>

          {/* Hero visual card */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 30, rotate: 2 }}
            animate={{ opacity: 1, y: 0, rotate: 1.2 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="ff-img-frame rotate-0 shadow-[0_40px_80px_-32px_rgba(28,53,36,0.55)] ring-8 ring-white/25">
              <picture>
                <source media="(max-width: 768px)" srcSet="/images/home/fork-founders-hero-mobile.webp" />
                <source media="(max-width: 1280px)" srcSet="/images/home/fork-founders-hero-tablet.webp" />
                <img
                  src="/images/home/fork-founders-hero-main.webp"
                  alt="A chef finishing a gourmet dish in a premium delivery container — Fork & Founders brand-development imagery"
                  className="aspect-[4/5] w-full object-cover sm:aspect-[5/5] lg:aspect-[4/5]"
                  fetchPriority="high"
                  width={2048}
                  height={1077}
                />
              </picture>
            </div>
            {/* floating badge cards */}
            <div className="animate-ff-float absolute -left-4 top-8 flex items-center gap-2.5 rounded-2xl bg-white px-4 py-3 shadow-[0_20px_45px_-18px_rgba(28,53,36,0.4)] sm:-left-8">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/25 text-gold-dark">
                <FFIcon name="quality" className="h-4 w-4" />
              </span>
              <span className="font-display text-xs font-bold leading-tight text-ink">
                End-to-end
                <br />
                operating partner
              </span>
            </div>
            <div className="animate-ff-float absolute -bottom-5 right-4 flex items-center gap-2.5 rounded-2xl bg-white px-4 py-3 shadow-[0_20px_45px_-18px_rgba(28,53,36,0.4)] [animation-delay:1.2s] sm:right-8">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/25 text-gold-dark">
                <FFIcon name="culinary" className="h-4 w-4" />
              </span>
              <span className="font-display text-xs font-bold leading-tight text-ink">
                Culinary • Brand
                <br />
                Tech • Operations
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* -------------------------- TRUST STRIP -------------------------- */
const trustItems: { icon: FFIconName; label: string }[] = [
  { icon: 'culinary', label: 'Culinary Development' },
  { icon: 'brand', label: 'Brand Creation' },
  { icon: 'kitchen', label: 'Professional Production' },
  { icon: 'technology', label: 'Technology Integration' },
  { icon: 'platforms', label: 'Platform Launch' },
  { icon: 'operations', label: 'Operations Management' },
]

export function TrustStrip() {
  return (
    <section className="py-10" aria-label="Capabilities">
      <div className="container-ff">
        <ul className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3 lg:grid-cols-6">
          {trustItems.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.06} y={14}>
              <li className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/25 text-gold-dark">
                  <FFIcon name={item.icon} className="h-5 w-5" />
                </span>
                <span className="font-display text-[0.82rem] font-bold leading-tight text-ink">{item.label}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ------------------------ BUSINESS MODEL ------------------------ */
export function BusinessModel() {
  return (
    <section className="section-pad bg-softgrey/60" aria-labelledby="business-model-heading">
      <div className="container-ff">
        <SectionHeading
          eyebrow="The Operating Model"
          title="One Partner. The Complete Food Business Journey."
          copy="Fork & Founders connects concept development, culinary systems, brand creation, technology, production, platform onboarding and daily operations into one structured service. Whether you want to launch one delivery brand, open your own restaurant, improve an existing operation or build a multi-brand portfolio, our team creates the systems needed to move from idea to market-ready business."
        />
        {/* Interactive journey visual */}
        <Reveal delay={0.15} className="mt-14">
          <ol className="relative grid grid-cols-3 gap-3 sm:grid-cols-5 lg:grid-cols-9" aria-label="Food business journey">
            {journeySteps.map((step, i) => (
              <li key={step} className="group relative">
                <div className="flex h-full flex-col items-center gap-2.5 rounded-2xl border border-border bg-white px-2 py-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-lg hover:shadow-navy/5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-paleblue font-display text-xs font-bold text-navy transition-colors group-hover:bg-navy group-hover:text-white">
                    {i + 1}
                  </span>
                  <span className="font-display text-[0.68rem] font-bold uppercase tracking-[0.12em] text-ink">{step}</span>
                </div>
                {i < journeySteps.length - 1 && (
                  <ChevronRight className="absolute -end-2.5 top-1/2 hidden h-4 w-4 -translate-y-1/2 text-gold lg:block rtl:rotate-180" aria-hidden="true" />
                )}
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------------------- SOLUTION PATHWAYS ---------------------- */
const groupStyles: Record<string, string> = {
  launch: 'bg-paleblue text-navy',
  build: 'bg-babyblue/60 text-navy',
  grow: 'bg-stone-light/50 text-ink',
  partner: 'bg-navy-deep text-gold',
}

export function SolutionPathways() {
  const services = solutions.filter((s) => s.kind !== 'partnership')
  const partners = solutions.filter((s) => s.kind === 'partnership')
  return (
    <section className="section-pad" aria-labelledby="solutions-heading">
      <div className="container-ff">
        <SectionHeading
          eyebrow="Six Pathways"
          title="Choose the Right Path for Your Food Business"
          copy="Every food project requires a different level of customization, infrastructure, investment and operational involvement. Explore the Fork & Founders model designed for your objective."
          align="center"
        />

        {/* Service + consultancy cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.08}>
              <Link
                to={`/solutions/${s.slug}`}
                onClick={() => trackEvent(FF_EVENTS.solutionViewed, { solution: s.slug, placement: 'home_cards' })}
                className="card-ff card-ff-hover group flex h-full flex-col"
              >
                <span className={`inline-flex w-fit items-center rounded-full px-3 py-1 font-display text-[0.62rem] font-bold uppercase tracking-[0.16em] ${groupStyles[s.group]}`}>
                  {groupLabels[s.group]}
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold leading-snug text-ink transition-colors group-hover:text-navy">
                  {s.name}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.cardSummary}</p>
                <span className="mt-6 inline-flex items-center gap-2 font-display text-sm font-semibold text-navy">
                  {s.cardCta.label}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Partnership cards — deliberately separated, premium dark treatment */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {partners.map((s, i) => (
            <Reveal key={s.slug} delay={0.1 + i * 0.1}>
              <Link
                to={`/solutions/${s.slug}`}
                onClick={() => trackEvent(FF_EVENTS.solutionViewed, { solution: s.slug, placement: 'home_cards' })}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-navy-deep p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_-20px_rgba(7,29,73,0.5)]"
              >
                <div className="absolute -end-16 -top-16 h-48 w-48 rounded-full bg-gold/10 blur-2xl transition-all duration-500 group-hover:bg-gold/20" aria-hidden="true" />
                <span className="inline-flex w-fit items-center rounded-full border border-gold/40 px-3 py-1 font-display text-[0.62rem] font-bold uppercase tracking-[0.16em] text-gold">
                  Long-Term Partnership
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold leading-snug text-white">{s.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/65">{s.cardSummary}</p>
                <span className="mt-6 inline-flex items-center gap-2 font-display text-sm font-semibold text-gold">
                  {s.cardCta.label}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180" aria-hidden="true" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <Link to="/solutions" className="link-underline">
            Compare all six solutions side by side
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
