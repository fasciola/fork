/**
 * Category 1 commercial packages and consultancy/partnership pricing.
 * Source: approved client brief. VAT inclusion is NOT confirmed — the VAT note
 * is an editable CMS value and must stay neutral until Fork & Founders confirms.
 */

export type PackageModel = 'monthly' | 'annual' | 'hybrid'

export interface PricingTier {
  name: string
  monthly?: string
  annual?: string
  setup?: string
  perUnit: string
  label?: 'Most Popular' | 'Great Value'
}

export const category1Packages: Record<PackageModel, { summary: string; tiers: PricingTier[] }> = {
  monthly: {
    summary:
      'A straightforward monthly management model. Ideal if you want maximum flexibility while your brand establishes itself on the delivery platforms.',
    tiers: [
      { name: 'One Brand', monthly: 'AED 7,000', perUnit: 'per month' },
      { name: 'Two Brands or Locations', monthly: 'AED 6,000', perUnit: 'per brand/location per month', label: 'Most Popular' },
      { name: 'Three Brands or Locations', monthly: 'AED 5,000', perUnit: 'per brand/location per month', label: 'Great Value' },
    ],
  },
  annual: {
    summary:
      'One annual payment covering the full managed service for twelve months — the most cost-efficient structure for committed operators.',
    tiers: [
      { name: 'One Brand', annual: 'AED 69,000', perUnit: 'per year' },
      { name: 'Two Brands or Locations', annual: 'AED 59,000', perUnit: 'per brand/location per year', label: 'Most Popular' },
      { name: 'Three Brands or Locations', annual: 'AED 47,000', perUnit: 'per brand/location per year', label: 'Great Value' },
    ],
  },
  hybrid: {
    summary:
      'A one-time setup payment combined with a reduced monthly fee — balancing upfront investment with a lighter recurring commitment.',
    tiers: [
      { name: 'One Brand', monthly: 'AED 4,000', setup: 'AED 30,000', perUnit: 'per month + one-time setup' },
      { name: 'Two Brands or Locations', monthly: 'AED 3,500', setup: 'AED 27,000', perUnit: 'per brand/location per month + one-time setup each', label: 'Most Popular' },
      { name: 'Three Brands or Locations', monthly: 'AED 3,000', setup: 'AED 21,000', perUnit: 'per brand/location per month + one-time setup each', label: 'Great Value' },
    ],
  },
}

export const pricingGlossary = [
  { term: 'Net sales', definition: 'Sales value after platform commissions, discounts, refunds and applicable adjustments, as defined in the signed agreement.' },
  { term: 'Brand', definition: 'A single approved food brand developed and operated under the Fork & Founders model.' },
  { term: 'Location', definition: 'An approved kitchen or operating site from which a brand is produced and dispatched.' },
  { term: 'Monthly fee', definition: 'The recurring management fee invoiced monthly under the selected package.' },
  { term: 'Annual fee', definition: 'A single annual payment covering twelve months of the managed service.' },
  { term: 'One-time payment', definition: 'A single setup payment due at the start of the engagement under the hybrid model.' },
  { term: 'Third-party expenses', definition: 'Costs charged by external parties — for example aggregator commissions, advertising budgets, packaging, delivery, refunds, discounts, payment-processing charges and ingredient costs. These are not included in Fork & Founders management fees.' },
  { term: 'VAT', definition: 'Whether quoted fees include UAE VAT is confirmed in the commercial proposal and final agreement. Published prices do not assume VAT treatment.' },
]

export const commercialExclusionsNote =
  'Fork & Founders management fees do not include aggregator commissions, advertising budgets, packaging costs, delivery costs, refunds, discounts, payment-processing charges, ingredient costs or other third-party costs. Renewal and termination terms are defined in the signed agreement.'

export interface ConsultancyCard {
  title: string
  description: string
  price: string
  href: string
  image: string
  imageAlt: string
}

export const consultancyCards: ConsultancyCard[] = [
  {
    title: 'Build a New Food Operation',
    description:
      'Turnkey Kitchen & Restaurant Consultancy — from location and kitchen planning to recruitment, systems, training and complete operational handover.',
    price: 'Starting from AED 48,000',
    href: '/solutions/turnkey-kitchen-restaurant-consultancy',
    image: '/images/solutions/fork-founders-turnkey-kitchen-consultancy.webp',
    imageAlt: 'Kitchen planning blueprints inside a commercial kitchen under fit-out.',
  },
  {
    title: 'Transform an Existing Food Business',
    description:
      'Restaurant & Brand Growth Consultancy — operational assessment, menu engineering, recipe standardization, technology integration and staff training.',
    price: 'Starting from AED 48,000',
    href: '/solutions/restaurant-brand-growth-consultancy',
    image: '/images/solutions/fork-founders-growth-consultancy.webp',
    imageAlt: 'Consultant and chef-owner reviewing menu and operations documents.',
  },
]

export interface PartnershipCard {
  name: string
  brands: string
  term: string
  investment: string
  cta: { label: string; href: string }
}

export const partnershipCards: PartnershipCard[] = [
  {
    name: 'Strategic Investment Partner Program',
    brands: 'Three brands',
    term: 'Five-year partnership',
    investment: 'AED 300,000',
    cta: { label: 'Request Partnership Details', href: '/strategic-partner-application' },
  },
  {
    name: 'Ultimate Strategic Investment Partner Program',
    brands: 'Twenty brands',
    term: 'Six-year partnership',
    investment: 'AED 2,000,000',
    cta: { label: 'Request Partnership Details', href: '/ultimate-partner-application' },
  },
]
