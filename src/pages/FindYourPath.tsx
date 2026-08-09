import { PageLayout, PageHero } from '@/components/layout/PageLayout'
import { Reveal } from '@/components/shared/Reveal'
import { PathQuiz } from '@/components/shared/PathQuiz'
import { FinalCta } from '@/components/home/HomeSections3'

export default function FindYourPath() {
  return (
    <PageLayout
      title="Find Your Best Path — Solution Finder | Fork & Founders"
      description="Answer seven questions about your food-business objective and get a guided recommendation for the right Fork & Founders pathway."
    >
      <PageHero
        eyebrow="Find Your Best Path"
        title="Seven Questions. One Clear Recommendation."
        copy="Your answers help us recommend one or two relevant categories — and give our team context before your first consultation. Guidance, not commercial approval."
      />
      <section className="section-pad bg-softgrey/60" aria-label="Qualification questionnaire">
        <div className="container-ff max-w-3xl">
          <Reveal>
            <PathQuiz />
          </Reveal>
        </div>
      </section>
      <FinalCta />
    </PageLayout>
  )
}
