import { Link } from 'react-router'
import { ArrowRight, MapPin } from 'lucide-react'
import { PageLayout, PageHero } from '@/components/layout/PageLayout'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { FinalCta } from '@/components/home/HomeSections3'
import { site } from '@/lib/site'

const values = [
  { name: 'Ownership', body: 'We treat every brand we operate as if it carried our own name — because our reputation does.' },
  { name: 'Transparency', body: 'Clear scope, clear responsibilities, clear pricing and honest disclaimers — before signature, not after.' },
  { name: 'Operational Excellence', body: 'Documented recipes, SOPs, tested systems and disciplined daily execution.' },
  { name: 'Quality', body: 'Products engineered for delivery, tasted, refined and standardized before they ever reach a customer.' },
  { name: 'Collaboration', body: 'Important decisions are made with the owner — concept, location, layout, budget, menu, suppliers, staffing.' },
  { name: 'Commercial Responsibility', body: 'No guaranteed returns, no inflated promises. Illustrative figures are labeled as such, always.' },
  { name: 'Continuous Improvement', body: 'Menus, systems and operations are reviewed and refined throughout the relationship.' },
]

export default function About() {
  return (
    <PageLayout
      title="About Fork & Founders — Dubai Food-Brand & Restaurant Operating Partner"
      description="The operating expertise behind better food businesses: culinary development, brand creation, production, technology and operations under one Dubai-based team."
    >
      <PageHero
        eyebrow="About Fork & Founders"
        title="The Operating Expertise Behind Better Food Businesses"
        copy="Fork & Founders is a Dubai-based food-brand development, restaurant operations, cloud-kitchen and F&B consultancy company. We Build. You Grow."
      />

      <section className="section-pad" aria-label="Company story">
        <div className="container-ff grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Who We Are"
              title="One Team Across the Entire Food Business Journey"
            />
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                Fork &amp; Founders was built on a simple observation: food businesses fail far more often from weak
                operations than from weak ideas. Great concepts stall between the kitchen, the platforms, the paperwork
                and the daily discipline of production.
              </p>
              <p>
                So we built a company that covers the whole journey — food concept development, culinary product
                development, brand creation, menu engineering, recipe standardization, packaging, kitchen operations,
                technology integration, POS implementation, delivery-platform onboarding, content production,
                operational management and multi-brand portfolio development.
              </p>
              <p>
                From our base in Dubai, we work with entrepreneurs, chefs, investors, restaurant owners, cafés, cloud
                kitchens, food creators and international concepts entering the UAE — across virtual brands, cloud
                kitchens, cafeterias, quick-service and full-service restaurants, and multi-brand investment portfolios.
              </p>
            </div>
          </div>
          <Reveal delay={0.12}>
            <div className="space-y-4">
              <div className="ff-img-frame aspect-[4/3]">
                <img src="/images/about/fork-founders-culinary-team.webp" alt="The Fork & Founders culinary team collaborating in a test kitchen" loading="lazy" width={1600} height={1040} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-navy-deep p-6 text-white">
                  <p className="font-display text-sm font-semibold text-gold">Mission</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">
                    Expanding food brands through smart collaboration — building the systems that turn food ideas into
                    operating businesses.
                  </p>
                </div>
                <div className="rounded-2xl bg-paleblue p-6">
                  <p className="font-display text-sm font-semibold text-navy">Vision</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/75">
                    To be the UAE’s most trusted operating partner for building, launching and scaling food businesses.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-softgrey/60" aria-labelledby="values-heading">
        <div className="container-ff">
          <SectionHeading eyebrow="Operating Philosophy" title="The Values We Operate By" align="center" />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.name} delay={i * 0.05} className={i === 6 ? 'sm:col-span-2 lg:col-span-1' : ''}>
                <div className="card-ff card-ff-hover h-full">
                  <h3 className="font-display text-base font-semibold text-navy">{v.name}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" aria-label="Dubai presence">
        <div className="container-ff grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="ff-img-frame aspect-[4/3]">
              <img src="/images/about/fork-founders-dubai-office-district.webp" alt="Modern Dubai business district at street level" loading="lazy" width={1600} height={1040} />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Dubai Market Experience"
              title="Based Where Delivery-First Dining Moves Fastest"
              copy="The UAE is one of the world’s most advanced delivery markets. Our team works daily with the platforms, production facilities, suppliers and regulatory processes that shape it — so your project benefits from current, local, practical knowledge."
            />
            <Reveal delay={0.1}>
              <div className="mt-8 flex items-start gap-3 rounded-2xl border border-border bg-white p-5">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                <div>
                  <p className="font-display text-sm font-semibold text-ink">{site.office}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{site.hours} · {site.phone}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Leadership — CMS placeholder, no invented biographies */}
      <section className="border-t border-border bg-softgrey/60 py-16" aria-label="Leadership">
        <div className="container-ff">
          <Reveal>
            <div className="mx-auto max-w-2xl rounded-2xl border border-dashed border-navy/25 bg-white p-8 text-center">
              <p className="font-display text-sm font-semibold text-navy">Leadership & team profiles</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Biographies and portraits are published only after approval by Fork &amp; Founders. Profiles are being
                prepared for release — nothing here is placeholder fiction.
              </p>
              <Link to="/contact" className="link-underline mt-4 inline-block text-sm">
                Meet us in a consultation instead <ArrowRight className="inline h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </PageLayout>
  )
}
