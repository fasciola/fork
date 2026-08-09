import { PageLayout, PageHero } from '@/components/layout/PageLayout'
import { Reveal } from '@/components/shared/Reveal'
import { site } from '@/lib/site'

/**
 * Legal page templates. Content is structured placeholder legal copy for review
 * by a UAE-qualified legal professional before publication — clearly flagged.
 */

interface LegalSection {
  heading: string
  body: string[]
}

function LegalPage({
  title,
  description,
  updated,
  sections,
}: {
  title: string
  description: string
  updated: string
  sections: LegalSection[]
}) {
  return (
    <PageLayout title={`${title} | Fork & Founders`} description={description}>
      <PageHero eyebrow="Legal" title={title} copy={`Last updated: ${updated}`} />
      <section className="section-pad" aria-label={title}>
        <div className="container-ff max-w-3xl">
          <Reveal>
            <div className="mb-10 rounded-2xl border border-gold/30 bg-gold/5 p-5 text-xs leading-relaxed text-ink/75">
              This document is a template prepared for review by a UAE-qualified legal professional. It is provided for
              information and does not constitute legal advice.
            </div>
          </Reveal>
          {sections.map((s, i) => (
            <Reveal key={s.heading} className={i > 0 ? 'mt-10' : ''}>
              <h2 className="font-display text-xl font-semibold text-ink">
                {i + 1}. {s.heading}
              </h2>
              {s.body.map((p, j) => (
                <p key={j} className="mt-3.5 leading-[1.85] text-muted-foreground">{p}</p>
              ))}
            </Reveal>
          ))}
          <Reveal className="mt-12">
            <div className="rounded-2xl bg-softgrey p-6 text-sm text-muted-foreground">
              Questions about this document? Contact us at {site.email} or {site.phone}.
            </div>
          </Reveal>
        </div>
      </section>
    </PageLayout>
  )
}

export function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="How Fork & Founders collects, uses and protects personal data across its website and services."
      updated="Pending legal review"
      sections={[
        { heading: 'Who we are', body: [`Fork & Founders is a Dubai-based food-brand development, restaurant operations, cloud-kitchen and F&B consultancy company, located at ${site.office}. This policy explains how we handle personal data submitted through ${site.url}.`] },
        { heading: 'Data we collect', body: ['Contact details you submit through our forms (name, company, email, telephone, country), project information you choose to share (menus, recipes, business details), technical data (device, browser, approximate location, pages visited), and cookie preferences. Files you upload are used solely to assess your project.'] },
        { heading: 'How we use it', body: ['To respond to inquiries, prepare proposals, deliver services, operate our CRM, improve the website through analytics, and — with your consent — send relevant updates. We do not sell personal data.'] },
        { heading: 'Legal basis and retention', body: ['We process data based on your consent, contractual necessity and legitimate business interest. Data is retained only as long as needed for these purposes or as required by applicable UAE law.'] },
        { heading: 'Sharing', body: ['Data may be processed by trusted service providers (CRM, analytics, hosting) under confidentiality obligations. Menu and recipe materials are handled under our mutual NDA process where applicable.'] },
        { heading: 'Your rights', body: ['You may request access, correction or deletion of your personal data, and withdraw consent at any time, by contacting us at the details below.'] },
        { heading: 'Contact', body: [`Privacy questions: ${site.email} · ${site.phone} · ${site.office}.`] },
      ]}
    />
  )
}

export function Terms() {
  return (
    <LegalPage
      title="Terms and Conditions"
      description="Terms governing the use of the Fork & Founders website and the information it presents."
      updated="Pending legal review"
      sections={[
        { heading: 'Scope', body: ['These terms govern your use of the Fork & Founders website. They do not govern service engagements, which are defined exclusively by individually signed agreements.'] },
        { heading: 'Information, not offers', body: ['Website content — including packages, prices and partnership structures — is general information. It does not constitute an offer, a quotation, investment advice or a commitment. Final commercial terms are confirmed in written proposals and signed agreements.'] },
        { heading: 'No guaranteed outcomes', body: ['Nothing on this website guarantees revenue, sales, profits, savings, returns, launch dates or business performance. Illustrative figures are labeled as such and explain commercial structures only.'] },
        { heading: 'Intellectual property', body: ['Website content, design and branding are the property of Fork & Founders unless stated otherwise. Materials you submit remain yours; their use in assessments is covered by our confidentiality process.'] },
        { heading: 'Acceptable use', body: ['You agree not to misuse the website, submit unlawful content, or attempt to access systems without authorization.'] },
        { heading: 'Liability', body: ['The website is provided as-is. To the extent permitted by UAE law, Fork & Founders is not liable for decisions taken based on website content without a signed agreement.'] },
        { heading: 'Governing law', body: ['These terms are governed by the laws of the United Arab Emirates as applied in the Emirate of Dubai. Disputes are subject to the jurisdiction of the Dubai courts, subject to the final legal review of this document.'] },
      ]}
    />
  )
}

export function CookiePolicy() {
  return (
    <LegalPage
      title="Cookie Policy"
      description="How Fork & Founders uses cookies and how you can control them."
      updated="Pending legal review"
      sections={[
        { heading: 'What cookies we use', body: ['Essential cookies required for the site to function (including your consent preferences), optional analytics cookies (Google Analytics 4, Vercel Analytics) that help us understand usage, and optional marketing cookies (Meta Pixel, LinkedIn Insight Tag) used only with your consent.'] },
        { heading: 'Your control', body: ['You can accept, reject or customize optional cookies through the consent banner, and change your choice at any time by clearing site data in your browser. Rejecting optional cookies does not affect core website functionality.'] },
        { heading: 'Retention', body: ['Cookie lifetimes follow the defaults of each provider and are documented in their respective policies. Consent records are stored locally in your browser.'] },
        { heading: 'Updates', body: ['This policy will be updated as our measurement stack evolves and following legal review.'] },
      ]}
    />
  )
}

export function CommercialDisclaimer() {
  return (
    <LegalPage
      title="Commercial and Performance Disclaimer"
      description="Important clarifications about figures, timelines and outcomes published on the Fork & Founders website."
      updated="Pending legal review"
      sections={[
        { heading: 'Illustrative figures', body: ['All financial figures on this website — including package prices, partnership investments, management-fee comparisons and service-charge examples — are published to explain commercial structures. Detailed financial comparisons are approved internally before publication and shared during the relevant consultation stage.'] },
        { heading: 'No guaranteed performance', body: ['Fork & Founders does not guarantee revenue, sales, order volumes, profits, savings, returns, market share or launch dates. Actual outcomes depend on location, cuisine, market demand, pricing, operating costs, platform performance, production capacity, operations and other commercial factors.'] },
        { heading: 'Timelines', body: ['Published timelines — including the estimated five-week Category 1 onboarding journey and the approximate 90-day turnkey delivery — are estimates. They may vary depending on document readiness, approvals, product requirements, site condition, equipment availability, recruitment, platform processing and other third-party dependencies.'] },
        { heading: 'Ownership and agreements', body: ['Statements about brand ownership, payment flows and responsibilities are summaries subject to the final signed agreement. The agreement alone defines the legal relationship.'] },
        { heading: 'Not investment advice', body: ['Partnership programs are commercial arrangements for building and operating food brands. They are not financial products, securities or investment schemes, and nothing on this website constitutes investment advice.'] },
        { heading: 'VAT and third-party costs', body: ['Whether published fees include UAE VAT is confirmed in your proposal and agreement. Third-party costs — aggregator commissions, advertising, packaging, delivery, refunds, discounts, payment processing and ingredients — are not included in management fees.'] },
      ]}
    />
  )
}
