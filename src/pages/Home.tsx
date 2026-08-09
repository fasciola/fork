import { PageLayout } from '@/components/layout/PageLayout'
import { Hero, TrustStrip, BusinessModel, SolutionPathways } from '@/components/home/HomeSections1'
import { WhoWeWorkWith, Capabilities, WhyUs, HowItWorksPreview, FiveWeekTimeline } from '@/components/home/HomeSections2'
import {
  TechOps,
  Ownership,
  BrandPortfolioPreview,
  PricingPreview,
  ConsultancyPreview,
  PartnershipPreview,
  QuizSection,
  FaqSection,
  FinalCta,
} from '@/components/home/HomeSections3'
import { site } from '@/lib/site'

export default function Home() {
  return (
    <PageLayout
      title="Fork & Founders — Build, Launch and Scale Food Brands in the UAE"
      description="Dubai-based food-brand development, restaurant operations and F&B consultancy partner. Managed virtual brands, turnkey restaurants, growth consultancy and multi-brand partnerships."
      canonicalPath="/"
      schema={[
        {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: site.name,
          url: site.url,
          inLanguage: ['en', 'ar'],
        },
      ]}
    >
      <Hero />
      <TrustStrip />
      <BusinessModel />
      <SolutionPathways />
      <WhoWeWorkWith />
      <Capabilities />
      <WhyUs />
      <HowItWorksPreview />
      <FiveWeekTimeline />
      <TechOps />
      <Ownership />
      <BrandPortfolioPreview />
      <PricingPreview />
      <ConsultancyPreview />
      <PartnershipPreview />
      <QuizSection />
      <FaqSection />
      <FinalCta />
    </PageLayout>
  )
}
