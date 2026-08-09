import { Link } from 'react-router'
import { Clock, MapPin, MessageCircle, Phone } from 'lucide-react'
import { PageLayout, PageHero } from '@/components/layout/PageLayout'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { FinalCta } from '@/components/home/HomeSections3'
import { site } from '@/lib/site'
import { FF_EVENTS, trackEvent } from '@/lib/analytics'

export default function Locations() {
  return (
    <PageLayout
      title="Locations — Fork & Founders in Dubai, UAE"
      description="Fork & Founders operates from Blue Bay Tower, Dubai, serving food-business projects across the United Arab Emirates."
    >
      <PageHero
        eyebrow="Locations"
        title="Based in Dubai. Operating Across the UAE."
        copy="Our consultancy and development work happens wherever your project is — our office is where the planning begins."
      />

      <section className="section-pad" aria-label="Office">
        <div className="container-ff grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Head Office" title="Blue Bay Tower, Dubai" />
            <Reveal delay={0.08}>
              <div className="mt-8 space-y-4">
                <div className="card-ff flex items-start gap-4">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  <div>
                    <p className="font-display font-semibold text-ink">{site.office}</p>
                    <p className="mt-1 text-sm text-muted-foreground">Meetings by appointment — book a consultation and we will confirm a time.</p>
                  </div>
                </div>
                <a href={site.phoneHref} onClick={() => trackEvent(FF_EVENTS.phoneClicked, { placement: 'locations' })} className="card-ff card-ff-hover flex items-center gap-4">
                  <Phone className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  <div>
                    <p className="font-display font-semibold text-ink">{site.phone}</p>
                    <p className="text-sm text-muted-foreground">Call us directly</p>
                  </div>
                </a>
                <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent(FF_EVENTS.whatsappClicked, { placement: 'locations' })} className="card-ff card-ff-hover flex items-center gap-4">
                  <MessageCircle className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  <div>
                    <p className="font-display font-semibold text-ink">WhatsApp {site.whatsapp}</p>
                    <p className="text-sm text-muted-foreground">Fastest response for new inquiries</p>
                  </div>
                </a>
                <div className="card-ff flex items-center gap-4">
                  <Clock className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  <div>
                    <p className="font-display font-semibold text-ink">{site.hours}</p>
                    <p className="text-sm text-muted-foreground">Gulf Standard Time</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <div>
              <div className="ff-img-frame aspect-[4/3]">
                <img src="/images/about/fork-founders-dubai-office-district.webp" alt="Modern Dubai business district near the Fork & Founders office" loading="lazy" width={1600} height={1040} />
              </div>
              <div className="mt-5 rounded-2xl bg-paleblue/60 p-6">
                <p className="font-display text-sm font-semibold text-navy">Service coverage</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/75">
                  Consultancy, development and partnership projects are delivered across the United Arab Emirates.
                  Kitchen production for managed brands operates through approved facilities within the Fork &amp;
                  Founders operating network — location availability is confirmed per project.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-softgrey/60 py-16">
        <div className="container-ff text-center">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-ink">Planning a visit?</h2>
            <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
              Book a consultation first — we will prepare for your project and confirm the meeting format (office,
              video call or WhatsApp).
            </p>
            <Link to="/book-a-consultation" className="btn-primary-ff mt-7">Book a Consultation</Link>
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </PageLayout>
  )
}
