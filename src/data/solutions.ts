/**
 * The six Fork & Founders service and partnership categories.
 * All copy, prices and structures are taken from the approved client brief.
 * Financial illustrations are gated behind `financialComparisonApproved`
 * (CMS field) — currently false, so detailed comparisons stay internal.
 */

export type SolutionGroup = 'launch' | 'build' | 'grow' | 'partner'

export interface ProcessStage {
  title: string
  items: string[]
}

export interface Solution {
  slug: string
  id: 1 | 2 | 3 | 4 | 5 | 6
  name: string
  group: SolutionGroup
  kind: 'service' | 'consultancy' | 'partnership'
  cardSummary: string
  cardCta: { label: string; href: string }
  h1: string
  eyebrow: string
  intro: string[]
  idealFor: string[]
  included: string[]
  process: ProcessStage[]
  pricingNote?: string
  heroImage: string
  heroAlt: string
  primaryCta: { label: string; href: string }
  secondaryCta: { label: string; href: string }
  seo: { title: string; description: string; keyword: string }
}

export const solutions: Solution[] = [
  {
    slug: 'fully-managed-food-brand',
    id: 1,
    name: 'Fully Managed Food Brand',
    group: 'launch',
    kind: 'service',
    cardSummary:
      'For entrepreneurs seeking a delivery-first brand managed through the Fork & Founders operating network.',
    cardCta: { label: 'Explore Managed Brands', href: '/solutions/fully-managed-food-brand' },
    h1: 'Launch a Food Brand Without Managing the Operational Complexity',
    eyebrow: 'Category 1 · Fully Managed Service',
    intro: [
      'The Fully Managed Food Brand solution is designed for entrepreneurs who want to build a delivery-first food brand using the Fork & Founders operating system.',
      'Fork & Founders supports the journey from concept, branding and menu development to platform setup, food production, launch and daily operations. The products are prepared through professional kitchen operations and sold through online delivery channels.',
      'Subject to the final agreement, the client owns the approved brand while Fork & Founders manages the agreed operational scope.',
    ],
    idealFor: [
      'First-time food entrepreneurs',
      'Investors seeking a managed brand',
      'Business owners seeking a delivery-first concept',
      'Existing operators adding a new brand',
      'Owners expanding to additional locations',
      'Entrepreneurs who do not want to manage kitchen production personally',
    ],
    included: [
      'Food concept assessment and selection',
      'Brand naming, logo and identity development',
      'Menu engineering, product names and descriptions',
      'Pricing strategy and combo creation',
      'Food production setup and product photography',
      'POS and Grubtech setup',
      'Aggregator onboarding, menu upload and platform testing',
      'Go-live support and kitchen production',
      'Daily operational management',
      'Platform training and performance support',
      'Continuous menu updates',
      'Customer-support coordination and business consultation',
    ],
    process: [
      {
        title: 'Documentation & Legal',
        items: ['Trade-license submission', 'Bank-detail submission', 'Agreement signing', 'Payment completion'],
      },
      {
        title: 'Brand Identity',
        items: ['Brand-name selection', 'Logo design', 'Identity finalization'],
      },
      {
        title: 'Menu Engineering',
        items: ['Menu structure and categories', 'Product naming and descriptions', 'Combo creation', 'Pricing strategy'],
      },
      {
        title: 'System Setup',
        items: ['Menu setup in POS', 'Grubtech setup', 'Modifiers and customization', 'Price verification', 'Internal testing'],
      },
      {
        title: 'Aggregator Onboarding',
        items: ['Registration', 'Document submission', 'Menu upload', 'Price verification'],
      },
      {
        title: 'Content Production',
        items: ['Product photoshoot', 'Image editing', 'Platform upload'],
      },
      {
        title: 'Integration & Testing',
        items: ['POS integration', 'Test orders', 'Order-flow verification', 'Troubleshooting'],
      },
      {
        title: 'Go Live',
        items: ['Final approvals', 'Activation across approved platforms', 'Initial launch monitoring'],
      },
      {
        title: 'Platform Training',
        items: ['Aggregator training', 'Grubtech dashboard training'],
      },
    ],
    heroImage: '/images/solutions/fork-founders-managed-food-brand.webp',
    heroAlt:
      'Premium delivery packaging prepared on a professional kitchen pass — illustrative brand-development imagery.',
    primaryCta: { label: 'Start My Managed Brand', href: '/book-a-consultation?solution=managed-brand' },
    secondaryCta: { label: 'Compare Packages', href: '/packages-and-pricing#category-1' },
    seo: {
      title: 'Fully Managed Food Brand Dubai | Fork & Founders',
      description:
        'Launch a delivery-first food brand in the UAE without managing kitchen operations. Branding, menu engineering, platform onboarding and daily operations by Fork & Founders.',
      keyword: 'virtual food brand Dubai',
    },
  },
  {
    slug: 'custom-brand-development',
    id: 2,
    name: 'Custom Brand Development',
    group: 'launch',
    kind: 'service',
    cardSummary: 'For entrepreneurs with their own recipes, menu or original food concept.',
    cardCta: { label: 'Develop My Concept', href: '/solutions/custom-brand-development' },
    h1: 'Turn Your Original Food Concept Into a Scalable Brand',
    eyebrow: 'Category 2 · Custom Development Service',
    intro: [
      'This solution is designed for entrepreneurs who want to launch a fully customized food brand using their own recipes, menu or concept instead of selecting from the Fork & Founders portfolio.',
      'The client shares the proposed menu and, where applicable, a reference brand or concept. The Fork & Founders culinary team evaluates the feasibility and confirms which products can be successfully developed, standardized, produced and scaled through its UAE kitchen operations.',
    ],
    idealFor: [
      'Entrepreneurs with original food concepts',
      'Chefs with proprietary recipes',
      'International concepts entering the UAE',
      'Food creators requiring production support',
      'Brands requiring recipe standardization',
      'Businesses seeking a custom delivery-first brand',
    ],
    included: [
      'Menu feasibility assessment',
      'Product development, tasting and refinement',
      'Recipe and sub-recipe development',
      'Standard Operating Procedures',
      'Menu design and product descriptions',
      'Ingredient lists',
      'Packaging design and specifications',
      'Production setup and operational implementation',
      'Mutual NDA, recipe and formulation protection',
      'Intellectual-property protection, subject to the signed agreement',
    ],
    process: [
      { title: 'Submission', items: ['Concept and menu submission', 'Reference concept review'] },
      { title: 'Feasibility', items: ['Culinary feasibility assessment', 'Production feasibility assessment'] },
      { title: 'Development', items: ['Product development', 'Product tasting', 'Recipe refinement'] },
      { title: 'Standardization', items: ['Recipe standardization', 'Menu development', 'Packaging preparation'] },
      { title: 'Implementation', items: ['Production setup', 'Testing', 'Operational implementation'] },
    ],
    pricingNote:
      'Monthly service fee: AED 9,000 to AED 17,000 per month. Pricing depends on cuisine complexity, number and complexity of menu items, product-development requirements, production requirements, operating location, packaging requirements and level of operational support. Every project is quoted individually following the menu assessment.',
    heroImage: '/images/solutions/fork-founders-custom-brand-development.webp',
    heroAlt:
      'Culinary research and development — a chef refining a recipe with notes, scale and fresh ingredients.',
    primaryCta: { label: 'Submit Your Menu for Assessment', href: '/submit-your-menu' },
    secondaryCta: { label: 'Discuss Your Custom Concept', href: '/book-a-consultation?solution=custom-brand' },
    seo: {
      title: 'Custom Food Brand Development UAE | Fork & Founders',
      description:
        'Develop your own recipes and food concept into a standardized, production-ready brand in the UAE. Culinary feasibility, recipe standardization, packaging and production setup.',
      keyword: 'food brand development UAE',
    },
  },
  {
    slug: 'turnkey-kitchen-restaurant-consultancy',
    id: 3,
    name: 'Turnkey Kitchen & Restaurant Consultancy',
    group: 'build',
    kind: 'consultancy',
    cardSummary: 'For owners building a cloud kitchen, cafeteria or restaurant from the ground up.',
    cardCta: { label: 'Build My Operation', href: '/solutions/turnkey-kitchen-restaurant-consultancy' },
    h1: 'Build a Complete Food Business From the Ground Up',
    eyebrow: 'Category 3 · Turnkey Consultancy',
    intro: [
      'A complete end-to-end solution for entrepreneurs who want to own and operate their own food business while using the experience, systems and operational expertise of Fork & Founders.',
      'Whether the project is a cloud kitchen, cafeteria, quick-service concept or full-service restaurant, Fork & Founders helps build the operation and prepare it for complete operational handover.',
    ],
    idealFor: [
      'First-time restaurant owners',
      'Cloud-kitchen investors',
      'Café and cafeteria owners',
      'International brands entering the UAE',
      'Restaurant groups opening a new location',
      'Owners requiring complete operational infrastructure',
    ],
    included: [
      'Location sourcing and site assessment',
      'Kitchen planning, layout and equipment selection',
      'Equipment procurement support',
      'Regulatory approval and permit coordination',
      'Operational setup and recruitment',
      'Employment visa and hygiene-card coordination',
      'Staff onboarding and training',
      'Product development, testing and quality standardization',
      'Recipes, sub-recipes, cookbooks and SOPs',
      'Menu engineering and product descriptions',
      'Packaging design, supplier sourcing and supply-chain setup',
      'Procurement systems and POS implementation',
      'Delivery-platform integration and aggregator onboarding',
      'Operational testing, final documentation and complete handover',
    ],
    process: [
      { title: 'Site & Planning', items: ['Location sourcing', 'Site assessment', 'Kitchen planning and layout'] },
      { title: 'Build & Approvals', items: ['Equipment selection and procurement support', 'Regulatory and permit coordination'] },
      { title: 'Team & Product', items: ['Recruitment and staff onboarding', 'Product development and testing', 'Recipes, cookbooks and SOPs'] },
      { title: 'Systems & Supply', items: ['Supplier sourcing and procurement systems', 'POS implementation', 'Platform integration and onboarding'] },
      { title: 'Test & Handover', items: ['Operational testing', 'Final documentation', 'Complete operational handover'] },
    ],
    pricingNote:
      'Consultancy fee: starting from AED 48,000. Final pricing depends on project scope, kitchen size, concept complexity, menu size, location, equipment requirements, recruitment requirements, regulatory requirements and the required level of Fork & Founders involvement. Typical delivery is approximately 90 days; the actual timeline may vary depending on cuisine, menu complexity, concept, site condition, location, approvals, equipment availability, recruitment and third-party processing. Optional operations management after handover starts from AED 9,000 per month, depending on the agreed scope.',
    heroImage: '/images/solutions/fork-founders-turnkey-kitchen-consultancy.webp',
    heroAlt:
      'Kitchen planning blueprints and equipment checklist inside a new commercial kitchen under fit-out.',
    primaryCta: { label: 'Plan My Food Business', href: '/start-a-restaurant-project' },
    secondaryCta: { label: 'Request a Project Consultation', href: '/book-a-consultation?solution=turnkey' },
    seo: {
      title: 'Turnkey Kitchen & Restaurant Consultancy Dubai | Fork & Founders',
      description:
        'Build a cloud kitchen, cafeteria or restaurant in the UAE from the ground up. Site assessment, kitchen planning, recruitment, systems, training and full operational handover.',
      keyword: 'restaurant setup consultancy UAE',
    },
  },
  {
    slug: 'restaurant-brand-growth-consultancy',
    id: 4,
    name: 'Restaurant & Brand Growth Consultancy',
    group: 'grow',
    kind: 'consultancy',
    cardSummary: 'For existing businesses seeking stronger products, systems and performance.',
    cardCta: { label: 'Improve My Business', href: '/solutions/restaurant-brand-growth-consultancy' },
    h1: 'Improve Performance. Strengthen Operations. Scale With Confidence.',
    eyebrow: 'Category 4 · Growth Consultancy',
    intro: [
      'This solution is designed for existing restaurants, cafés, cloud kitchens and food brands seeking to improve operations, product quality, consistency, brand positioning, technology and business performance.',
      'Fork & Founders conducts an operational review and creates a structured improvement and implementation plan.',
    ],
    idealFor: [
      'Existing restaurants, cafés and cloud kitchens',
      'Delivery brands',
      'Businesses preparing to expand',
      'Businesses experiencing inconsistency',
      'Brands without documented recipes or SOPs',
      'Operators requiring technology integration',
      'Restaurants requiring platform optimization',
    ],
    included: [
      'Business and operational assessment',
      'Menu analysis, optimization and engineering',
      'Product refinement and quality improvement',
      'Product-consistency systems, recipe standardization, sub-recipes, cookbooks and SOPs',
      'Staff training and operational coaching',
      'Packaging improvement and brand-presentation enhancement',
      'Logo, menu-design and brand-identity optimization',
      'Platform onboarding and optimization',
      'POS, middleware and system integration',
      'Supply-chain assessment and procurement optimization',
      'Performance reporting and growth strategy',
    ],
    process: [
      { title: 'Audit', items: ['Business and operational audit', 'Performance-gap identification'] },
      { title: 'Strategy', items: ['Improvement strategy', 'Implementation plan'] },
      { title: 'Optimization', items: ['Product and menu optimization', 'Brand optimization', 'System integration'] },
      { title: 'Implementation', items: ['Staff training', 'Operational implementation', 'Testing'] },
      { title: 'Review', items: ['Performance review', 'Final recommendations'] },
    ],
    pricingNote:
      'Consultancy fee: starting from AED 48,000. Most projects are completed within one to three months, depending on business size, number of locations, menu size, operational complexity, existing systems, employee count, technology integrations and scope. Optional operations management following the consultancy phase starts from AED 9,000 per month. Fork & Founders does not guarantee increased revenue, sales, profitability or market share.',
    heroImage: '/images/solutions/fork-founders-growth-consultancy.webp',
    heroAlt:
      'An F&B consultant and chef-owner reviewing a menu and operations report at a restaurant table.',
    primaryCta: { label: 'Request an Operational Assessment', href: '/operational-assessment' },
    secondaryCta: { label: 'Improve My Restaurant', href: '/book-a-consultation?solution=growth' },
    seo: {
      title: 'Restaurant & Brand Growth Consultancy Dubai | Fork & Founders',
      description:
        'Operational assessment, menu engineering, recipe standardization, technology integration and staff training for existing restaurants, cafés and cloud kitchens in the UAE.',
      keyword: 'restaurant consultant Dubai',
    },
  },
  {
    slug: 'strategic-investment-partner-program',
    id: 5,
    name: 'Strategic Investment Partner Program',
    group: 'partner',
    kind: 'partnership',
    cardSummary: 'For qualified partners building a three-brand portfolio through a five-year relationship.',
    cardCta: { label: 'Explore the Partnership', href: '/solutions/strategic-investment-partner-program' },
    h1: 'Build a Diversified Food Portfolio Through a Five-Year Partnership',
    eyebrow: 'Category 5 · Strategic Partnership',
    intro: [
      'The Strategic Investment Partner Program is designed for entrepreneurs and investors seeking to build a long-term food business while reducing recurring management and service costs.',
      'The partnership contribution supports Fork & Founders in expanding production capacity, developing new cuisines and strengthening operational infrastructure. This is a high-consideration partnership — every application is reviewed individually, and the program is documented through a customized agreement.',
    ],
    idealFor: [
      'Entrepreneurs seeking a long-term food-business position',
      'Investors building a diversified delivery-brand portfolio',
      'Business owners reducing recurring management costs',
      'Partners who prefer professional daily operations management',
    ],
    included: [
      'The complete Category 1 service for three brands',
      'Brand development and launch',
      'Menu development and optimization',
      'Product production and packaging design',
      'Platform onboarding and marketing support',
      'Performance optimization and operations management',
      'Continuous menu updates and customer support',
      'Ongoing business consultation',
      'Monthly management fees included for five years',
      'Standard 5% net-sales service fee waived for five years',
    ],
    process: [
      { title: 'Qualification', items: ['Application review', 'Initial commercial review'] },
      { title: 'Alignment', items: ['Private meeting', 'Portfolio and cuisine planning'] },
      { title: 'Agreement', items: ['Legal and compliance review', 'Customized proposal', 'Agreement process'] },
      { title: 'Build & Launch', items: ['Structured launch schedule for the three brands', 'Five-year operational management'] },
    ],
    pricingNote:
      'Partnership structure: one-time investment of AED 300,000; three brands; five-year partnership term; monthly management fees included for five years; the standard 5% net-sales service fee is waived for five years. Subject to the final signed agreement, the partner remains the legal owner of each approved brand, customer payments are received into the partner’s designated business bank account, and the partner retains the revenue and profits generated by the businesses.',
    heroImage: '/images/partnerships/fork-founders-strategic-partner-program.webp',
    heroAlt:
      'Three premium delivery boxes in a dark editorial composition — representing a diversified three-brand portfolio.',
    primaryCta: { label: 'Apply for the Partner Program', href: '/strategic-partner-application' },
    secondaryCta: { label: 'Request the Private Information Pack', href: '/book-a-consultation?solution=strategic-partner' },
    seo: {
      title: 'Strategic Investment Partner Program | Fork & Founders',
      description:
        'A five-year, three-brand food portfolio partnership in the UAE. One-time investment with management fees and the standard service fee included and waived for five years.',
      keyword: 'food brand investment UAE',
    },
  },
  {
    slug: 'ultimate-strategic-investment-partner-program',
    id: 6,
    name: 'Ultimate Strategic Investment Partner Program',
    group: 'partner',
    kind: 'partnership',
    cardSummary: 'For high-capacity partners building a portfolio of 20 food brands.',
    cardCta: { label: 'Request a Private Meeting', href: '/solutions/ultimate-strategic-investment-partner-program' },
    h1: 'Build a Portfolio of 20 Food Brands',
    eyebrow: 'Category 6 · Ultimate Partnership',
    intro: [
      'The Ultimate Strategic Investment Partner Program is designed for high-capacity investors and business groups seeking to develop a large, diversified food-brand portfolio through a long-term partnership with Fork & Founders.',
      'The program covers the complete Category 1 operating service for 20 brands across an agreed launch schedule. Applications lead to a qualification review, a private meeting, legal and compliance review, a customized proposal and the agreement process.',
    ],
    idealFor: [
      'High-capacity investors',
      'Family businesses and family offices',
      'F&B investment groups',
      'Restaurant groups',
      'Multi-brand entrepreneurs',
      'Companies seeking a long-term operating partner',
    ],
    included: [
      'The complete Category 1 operating service for 20 brands',
      'Brand creation and launch',
      'Menu development and optimization',
      'Product production and packaging design',
      'Platform onboarding and marketing support',
      'Performance optimization and operations management',
      'Continuous menu development and customer support',
      'Ongoing business consultancy',
      'Recurring management fees included',
      'Standard 5% net-sales service charge waived',
    ],
    process: [
      { title: 'Qualification', items: ['Qualification form', 'Initial commercial review'] },
      { title: 'Private Meeting', items: ['Portfolio strategy discussion', 'Capacity and launch-schedule alignment'] },
      { title: 'Legal & Compliance', items: ['Legal and compliance review', 'Customized proposal'] },
      { title: 'Agreement & Build', items: ['Agreement process', 'Phased portfolio development across approved locations and cuisines'] },
    ],
    pricingNote:
      'Partnership structure: one-time investment of AED 2,000,000; 20 brands; six-year partnership term; recurring management fees included; the standard 5% net-sales service charge is waived. The brands may operate across multiple locations, through different kitchen facilities, across different cuisines, in phases, according to production capacity and an agreed launch schedule. Subject to the final agreement, the partner remains the legal owner of the approved brands and retains the revenue and profits.',
    heroImage: '/images/partnerships/fork-founders-ultimate-partner-program.webp',
    heroAlt:
      'A large professional cloud-kitchen production facility with multiple stations — representing a 20-brand portfolio.',
    primaryCta: { label: 'Request a Private Partnership Meeting', href: '/ultimate-partner-application' },
    secondaryCta: { label: 'Request the Program Overview', href: '/book-a-consultation?solution=ultimate-partner' },
    seo: {
      title: 'Ultimate Strategic Investment Partner Program | Fork & Founders',
      description:
        'A six-year partnership program for high-capacity investors building a portfolio of 20 food brands in the UAE, with management fees included and the standard service charge waived.',
      keyword: 'multi-brand food investment UAE',
    },
  },
]

export const solutionBySlug = (slug: string) => solutions.find((s) => s.slug === slug)

export const groupLabels: Record<SolutionGroup, string> = {
  launch: 'Launch',
  build: 'Build',
  grow: 'Grow',
  partner: 'Partner',
}

/** Partnership-page disclaimer — mandatory on Categories 5 & 6. */
export const partnershipDisclaimer =
  'All figures are illustrative examples used solely to explain the commercial structure. They are not forecasts, guaranteed savings, guaranteed revenue, guaranteed returns, promises of profitability or representations of expected performance. Actual outcomes depend on market conditions, cuisine, location, launch schedule, production capacity, customer demand, pricing, operating costs, platform performance and execution. The final commercial terms are defined exclusively by the signed agreement.'

/** Category 1 standard additional fee note. */
export const categoryOneServiceFeeNote =
  'A fixed management fee equal to 5% of the brand’s monthly net sales applies under the standard Category 1 commercial model.'
