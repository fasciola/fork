import { Link } from 'react-router'
import { Check, MessageCircle, Phone } from 'lucide-react'
import { PageLayout, PageHero } from '@/components/layout/PageLayout'
import { Reveal } from '@/components/shared/Reveal'
import { LeadForm } from '@/components/forms/LeadForm'
import { formConfigs, type FormConfig } from '@/data/forms'
import { site } from '@/lib/site'
import { FF_EVENTS, trackEvent } from '@/lib/analytics'

const sideNotes: Record<string, string[]> = {
  consultation: ['Reviewed by a senior team member', 'Response within one business day', 'No obligation, no pressure', 'Video call, office visit or WhatsApp'],
  managedBrand: ['Tailored Category 1 proposal', 'Package comparison included', 'Timeline estimate for your concept'],
  menuAssessment: ['Culinary feasibility review', 'Mutual NDA available on request', 'Your recipes stay yours — protected by process and agreement'],
  turnkey: ['Scoped project proposal', 'Approximate 90-day delivery estimate', 'Collaborative decision process'],
  operationalAssessment: ['Structured audit plan', 'Gap identification before any proposal', 'No guaranteed-revenue promises — ever'],
  partner: ['Qualification review first', 'Private meeting before any commitment', 'No online payment — ever', 'Legal and compliance review built in'],
}

function ConversionPage({ config }: { config: FormConfig }) {
  const notes = sideNotes[config.id] ?? sideNotes.consultation
  return (
    <PageLayout title={`${config.title} | Fork & Founders`} description={config.intro}>
      <PageHero eyebrow={config.categoryTag} title={config.title} copy={config.intro} />
      <section className="section-pad bg-softgrey/60" aria-label={`${config.title} form`}>
        <div className="container-ff grid items-start gap-10 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <LeadForm config={config} />
          </Reveal>
          <Reveal delay={0.12}>
            <aside className="space-y-5 lg:sticky lg:top-28">
              <div className="card-ff !p-6">
                <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-navy">What happens next</h2>
                <ul className="mt-4 space-y-3">
                  {notes.map((n) => (
                    <li key={n} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                      {n}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card-ff !p-6">
                <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-navy">Prefer to talk?</h2>
                <div className="mt-4 space-y-3">
                  <a href={site.phoneHref} onClick={() => trackEvent(FF_EVENTS.phoneClicked, { placement: config.id })} className="flex items-center gap-3 text-sm font-semibold text-ink transition-colors hover:text-navy">
                    <Phone className="h-4 w-4 text-gold" aria-hidden="true" /> {site.phone}
                  </a>
                  <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent(FF_EVENTS.whatsappClicked, { placement: config.id })} className="flex items-center gap-3 text-sm font-semibold text-ink transition-colors hover:text-navy">
                    <MessageCircle className="h-4 w-4 text-gold" aria-hidden="true" /> WhatsApp {site.whatsapp}
                  </a>
                </div>
              </div>
              <div className="ff-img-frame aspect-[4/3]">
                <img src="/images/contact/fork-founders-consultation-meeting.webp" alt="Consultation setting at Fork & Founders" loading="lazy" width={1600} height={1040} />
              </div>
            </aside>
          </Reveal>
        </div>
      </section>
    </PageLayout>
  )
}

export function ConsultationPage() {
  return <ConversionPage config={formConfigs.consultation} />
}
export function ManagedBrandPage() {
  return <ConversionPage config={formConfigs.managedBrand} />
}
export function MenuAssessmentPage() {
  return <ConversionPage config={formConfigs.menuAssessment} />
}
export function TurnkeyProjectPage() {
  return <ConversionPage config={formConfigs.turnkey} />
}
export function OperationalAssessmentPage() {
  return <ConversionPage config={formConfigs.operationalAssessment} />
}
export function PartnerApplicationPage() {
  return <ConversionPage config={formConfigs.partner} />
}
export function UltimateApplicationPage() {
  const cfg = {
    ...formConfigs.partner,
    id: 'ultimatePartner',
    title: 'Ultimate Partner Application',
    categoryTag: 'Category 6',
    intro:
      'A private application for the 20-brand, six-year Ultimate Strategic Investment Partner Program. The process: qualification form, initial commercial review, private meeting, legal and compliance review, customized proposal, agreement process.',
    successTitle: 'Application received',
    successBody:
      'Thank you. Your application enters our private qualification process. If it proceeds, we will contact you to arrange an initial commercial review.',
  }
  return <ConversionPage config={cfg} />
}

export function ContactPage() {
  return (
    <PageLayout
      title="Contact Fork & Founders — Dubai F&B Operating Partner"
      description="Speak with the Fork & Founders team: consultation requests, WhatsApp, telephone and office details for food-business projects in the UAE."
    >
      <PageHero
        eyebrow="Contact"
        title="Start the Conversation"
        copy="Whether you have a full business plan or just an idea over coffee, the first step is the same: tell us where you are."
      />
      <section className="section-pad bg-softgrey/60">
        <div className="container-ff grid items-start gap-10 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <LeadForm config={formConfigs.consultation} />
          </Reveal>
          <Reveal delay={0.12}>
            <aside className="space-y-5 lg:sticky lg:top-28">
              <div className="card-ff !p-6">
                <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-navy">Direct channels</h2>
                <div className="mt-4 space-y-3.5 text-sm">
                  <p className="text-muted-foreground">{site.office}</p>
                  <a href={site.phoneHref} className="flex items-center gap-3 font-semibold text-ink hover:text-navy">
                    <Phone className="h-4 w-4 text-gold" aria-hidden="true" /> {site.phone}
                  </a>
                  <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-semibold text-ink hover:text-navy">
                    <MessageCircle className="h-4 w-4 text-gold" aria-hidden="true" /> WhatsApp {site.whatsapp}
                  </a>
                  <p className="text-muted-foreground">{site.hours}</p>
                </div>
              </div>
              <div className="card-ff !p-6">
                <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-navy">Looking for something specific?</h2>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {[
                    ['Submit a menu for assessment', '/submit-your-menu'],
                    ['Request an operational assessment', '/operational-assessment'],
                    ['Start a restaurant project', '/start-a-restaurant-project'],
                    ['Strategic partner application', '/strategic-partner-application'],
                    ['Ultimate partner application', '/ultimate-partner-application'],
                  ].map(([label, href]) => (
                    <li key={href}>
                      <Link to={href} className="link-underline text-[0.85rem]">{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>
    </PageLayout>
  )
}
