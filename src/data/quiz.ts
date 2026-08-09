/** Find Your Best Path — interactive qualification questionnaire. */

export interface QuizOption {
  label: string
  scores: Partial<Record<string, number>>
}

export interface QuizQuestion {
  id: string
  question: string
  options: QuizOption[]
}

const C1 = 'fully-managed-food-brand'
const C2 = 'custom-brand-development'
const C3 = 'turnkey-kitchen-restaurant-consultancy'
const C4 = 'restaurant-brand-growth-consultancy'
const C5 = 'strategic-investment-partner-program'
const C6 = 'ultimate-strategic-investment-partner-program'

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'objective',
    question: 'What do you want to achieve?',
    options: [
      { label: 'Launch a fully managed brand', scores: { [C1]: 3 } },
      { label: 'Develop my own food concept', scores: { [C2]: 3 } },
      { label: 'Open a kitchen or restaurant', scores: { [C3]: 3 } },
      { label: 'Improve an existing business', scores: { [C4]: 3 } },
      { label: 'Build a three-brand portfolio', scores: { [C5]: 3 } },
      { label: 'Build a large multi-brand portfolio', scores: { [C6]: 3 } },
    ],
  },
  {
    id: 'menu',
    question: 'Do you already have a menu or recipes?',
    options: [
      { label: 'Yes, fully developed', scores: { [C2]: 2, [C4]: 1 } },
      { label: 'Partially developed', scores: { [C2]: 1, [C3]: 1, [C4]: 1 } },
      { label: 'No', scores: { [C1]: 2, [C3]: 1 } },
    ],
  },
  {
    id: 'location',
    question: 'Do you already have a location?',
    options: [
      { label: 'Yes', scores: { [C3]: 2, [C4]: 1 } },
      { label: 'No', scores: { [C1]: 1, [C3]: 1 } },
      { label: 'Searching now', scores: { [C3]: 2 } },
      { label: 'Not required', scores: { [C1]: 2, [C2]: 1, [C5]: 1, [C6]: 1 } },
    ],
  },
  {
    id: 'involvement',
    question: 'How involved do you want to be in daily operations?',
    options: [
      { label: 'I want Fork & Founders to manage the operation', scores: { [C1]: 2, [C5]: 2, [C6]: 2 } },
      { label: 'I want setup support and will operate independently', scores: { [C3]: 2, [C2]: 1 } },
      { label: 'I want consultancy followed by management', scores: { [C3]: 1, [C4]: 2 } },
      { label: 'I am not sure', scores: { [C1]: 1, [C4]: 1 } },
    ],
  },
  {
    id: 'brands',
    question: 'How many brands are you considering?',
    options: [
      { label: 'One', scores: { [C1]: 1, [C2]: 1, [C3]: 1 } },
      { label: 'Two to three', scores: { [C1]: 1, [C5]: 2 } },
      { label: 'Four to ten', scores: { [C6]: 2, [C5]: 1 } },
      { label: 'Eleven to twenty', scores: { [C6]: 3 } },
    ],
  },
  {
    id: 'timeline',
    question: 'What is your expected project timeline?',
    options: [
      { label: 'Immediately', scores: { [C1]: 1, [C4]: 1 } },
      { label: 'Within three months', scores: { [C1]: 1, [C3]: 1 } },
      { label: 'Within six months', scores: { [C3]: 1, [C2]: 1 } },
      { label: 'Within one year', scores: { [C5]: 1, [C6]: 1 } },
      { label: 'Still researching', scores: {} },
    ],
  },
  {
    id: 'range',
    question: 'What is your estimated project range?',
    options: [
      { label: 'Under AED 50,000', scores: { [C1]: 2, [C2]: 1 } },
      { label: 'AED 50,000 – 150,000', scores: { [C3]: 2, [C4]: 2, [C2]: 1 } },
      { label: 'AED 150,000 – 500,000', scores: { [C5]: 3, [C3]: 1 } },
      { label: 'Above AED 500,000', scores: { [C6]: 3, [C5]: 1 } },
      { label: 'Prefer to discuss', scores: {} },
    ],
  },
]

export function scoreQuiz(answers: Record<string, string>): { slug: string; score: number }[] {
  const totals: Record<string, number> = {}
  quizQuestions.forEach((q) => {
    const selected = answers[q.id]
    const option = q.options.find((o) => o.label === selected)
    if (!option) return
    Object.entries(option.scores).forEach(([slug, pts]) => {
      totals[slug] = (totals[slug] || 0) + (pts ?? 0)
    })
  })
  return Object.entries(totals)
    .map(([slug, score]) => ({ slug, score }))
    .sort((a, b) => b.score - a.score)
}

export const quizReasons: Record<string, string> = {
  [C1]: 'You want a delivery-first brand with professional daily management and no operational complexity on your side.',
  [C2]: 'You have your own recipes or concept and need culinary development, standardization and production systems around them.',
  [C3]: 'You are building a physical operation — kitchen, cafeteria or restaurant — and want it delivered ready for handover.',
  [C4]: 'You already operate a food business and want stronger systems, products, branding and performance.',
  [C5]: 'You are planning a multi-brand position and prefer a structured five-year partnership over single-brand management.',
  [C6]: 'You are a high-capacity partner looking at a large, phased multi-brand portfolio with long-term operational support.',
}
