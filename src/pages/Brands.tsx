import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import { PageLayout, PageHero } from '@/components/layout/PageLayout'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { FinalCta } from '@/components/home/HomeSections3'

/**
 * CMS-controlled brand portfolio.
 * Schema (Sanity `brand`): name, slug, logo, cuisine, concept, description,
 * category, location, platforms, launch date, status, packaging, product
 * images, menu highlights, testimonial, approved metrics, related case study.
 * No approved brands exist yet — the portfolio renders an honest empty state
 * rather than invented results (per client instruction).
 */
export default function Brands() {
  return (
    <PageLayout
      title="Our Brands — Fork & Founders Brand Portfolio"
      description="Food brands developed, launched and operated through the Fork & Founders system. Case studies are published only with client approval."
    >
      <PageHero
        eyebrow="Our Brands"
        title="Brands Built Through the Fork & Founders System"
        copy="Every brand in this portfolio is developed, launched and operated through the same disciplined journey — culinary development, identity, menu engineering, content, platforms and operations."
      />

      <section className="section-pad" aria-label="Portfolio">
        <div className="container-ff">
          <Reveal>
            <div className="mx-auto max-w-2xl rounded-3xl border border-dashed border-navy/25 bg-white p-10 text-center">
              <p className="eyebrow-navy">Portfolio Publishing in Progress</p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-ink">Approved Case Studies Are Being Prepared</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                We publish brand stories only with full client approval — brand names, imagery, delivery platforms and
                verified results included. The first approved case studies are currently in review and will appear here
                when released.
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                Until then, we would rather show you the system than show you unapproved logos.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <Link to="/how-it-works" className="btn-primary-ff">See How Brands Are Built</Link>
                <Link to="/book-a-consultation" className="btn-secondary-ff">Discuss Your Brand</Link>
              </div>
            </div>
          </Reveal>

          <div className="mt-16">
            <SectionHeading
              eyebrow="What a Case Study Will Show"
              title="The Structure Behind Every Portfolio Story"
            />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { t: 'Client situation & challenge', d: 'Where the project started and what needed to be solved.' },
                { t: 'Scope & process', d: 'The Fork & Founders solution and the documented delivery stages.' },
                { t: 'Deliverables & launch', d: 'Brand, menu, packaging, content, platforms and go-live.' },
                { t: 'Approved results', d: 'Only metrics the client has explicitly approved for publication.' },
              ].map((item, i) => (
                <Reveal key={item.t} delay={i * 0.06}>
                  <div className="card-ff h-full">
                    <span className="font-display text-[0.65rem] font-bold uppercase tracking-[0.16em] text-gold">{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="mt-2.5 font-display text-base font-semibold text-ink">{item.t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Capability demonstration, clearly separated from real portfolio */}
          <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Capability Demonstration"
                title="The Craft Behind the Portfolio"
                copy="Packaging and identity systems created inside our development process — shown here to demonstrate capability, clearly separated from real client brands."
              />
              <Reveal delay={0.1}>
                <Link to="/solutions/custom-brand-development" className="link-underline mt-6 inline-block">
                  See how custom brands are developed <ArrowRight className="inline h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </Reveal>
            </div>
            <Reveal delay={0.12}>
              <div className="grid grid-cols-2 gap-4">
                <div className="ff-img-frame aspect-square">
                  <img src="/images/packaging/fork-founders-premium-food-packaging.webp" alt="Premium food packaging flat-lay — capability demonstration" loading="lazy" width={1600} height={1040} />
                </div>
                <div className="ff-img-frame aspect-square">
                  <img src="/images/capabilities/fork-founders-brand-identity-workshop.webp" alt="Brand identity workshop materials — capability demonstration" loading="lazy" width={1600} height={1040} />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <FinalCta />
    </PageLayout>
  )
}
