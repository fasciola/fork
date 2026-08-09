import { Link } from 'react-router'
import { ArrowLeft } from 'lucide-react'
import { PageLayout, PageHero } from '@/components/layout/PageLayout'
import { Reveal } from '@/components/shared/Reveal'
import { FinalCta } from '@/components/home/HomeSections3'

export function Careers() {
  return (
    <PageLayout
      title="Careers at Fork & Founders — Dubai F&B Operations"
      description="Join the team building and operating food brands across the UAE — culinary, operations, technology, branding and consultancy roles."
    >
      <PageHero
        eyebrow="Careers"
        title="Build Food Businesses With Us"
        copy="Culinary development, kitchen operations, brand creation, technology and consultancy — one team, real operating work."
      />
      <section className="section-pad" aria-label="Open roles">
        <div className="container-ff">
          <Reveal>
            <div className="mx-auto max-w-2xl rounded-3xl border border-dashed border-navy/25 bg-white p-10 text-center">
              <p className="eyebrow-navy">Current Openings</p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-ink">Roles Are Published as They Open</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                We hire as projects require — culinary, kitchen operations, platform management, content and
                consultancy. If you believe your experience fits our model, send your profile and the role you are
                interested in to <a href="mailto:careers@forknfounders.com" className="font-semibold text-navy">careers@forknfounders.com</a>.
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                Speculative applications are reviewed when relevant projects begin.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
      <FinalCta />
    </PageLayout>
  )
}

export function NotFound() {
  return (
    <PageLayout title="Page Not Found | Fork & Founders" description="The page you requested could not be found.">
      <section className="navy-section flex min-h-[70vh] items-center py-24 text-white" aria-label="Page not found">
        <div className="container-ff text-center">
          <p className="font-display text-7xl font-bold text-gold/30">404</p>
          <h1 className="mt-4 font-display text-3xl font-bold sm:text-4xl">This page is off the menu.</h1>
          <p className="mx-auto mt-4 max-w-md text-white/65">
            The page you are looking for does not exist or has moved. Let us get you back to something useful.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link to="/" className="btn-gold-ff">
              <ArrowLeft className="h-4 w-4 rtl:rotate-180" aria-hidden="true" /> Back to Homepage
            </Link>
            <Link to="/solutions" className="btn-ghost-light">Explore Solutions</Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

export function ServerError() {
  return (
    <PageLayout title="Something Went Wrong | Fork & Founders" description="A temporary error occurred.">
      <section className="navy-section flex min-h-[70vh] items-center py-24 text-white" aria-label="Server error">
        <div className="container-ff text-center">
          <p className="font-display text-7xl font-bold text-gold/30">500</p>
          <h1 className="mt-4 font-display text-3xl font-bold sm:text-4xl">The kitchen hit a snag.</h1>
          <p className="mx-auto mt-4 max-w-md text-white/65">
            A temporary error occurred on our side. Please try again in a moment — or reach us directly at
            +971 58 191 3320.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link to="/" className="btn-gold-ff">
              <ArrowLeft className="h-4 w-4 rtl:rotate-180" aria-hidden="true" /> Back to Homepage
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
