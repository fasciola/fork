/** Full capability groups, audiences, differentiators and process data. */

export interface CapabilityGroup {
  title: string
  icon: string
  items: string[]
}

export const capabilityGroups: CapabilityGroup[] = [
  {
    title: 'Strategy',
    icon: 'strategy',
    items: ['Market and concept assessment', 'Food concept selection', 'Business-model planning', 'Location strategy', 'Growth planning'],
  },
  {
    title: 'Culinary Development',
    icon: 'culinary',
    items: ['Product development and testing', 'Tastings and recipe refinement', 'Sub-recipes', 'Recipe standardization', 'Cookbooks and SOPs', 'Quality standards'],
  },
  {
    title: 'Brand & Menu',
    icon: 'brand',
    items: ['Brand naming and logo development', 'Brand identity', 'Menu structure, product naming and descriptions', 'Menu engineering and combo creation', 'Pricing strategy', 'Packaging design'],
  },
  {
    title: 'Kitchen & Production',
    icon: 'kitchen',
    items: ['Kitchen planning', 'Equipment planning', 'Supplier sourcing', 'Production setup', 'Food preparation', 'Quality control', 'Daily kitchen management'],
  },
  {
    title: 'Technology',
    icon: 'technology',
    items: ['POS setup', 'Grubtech setup', 'Middleware', 'Menu configuration and modifiers', 'Price verification', 'Order-flow setup', 'Reporting dashboards'],
  },
  {
    title: 'Platforms',
    icon: 'platforms',
    items: ['Aggregator registration', 'Document submission', 'Menu and product-image upload', 'Platform activation', 'Promotion coordination', 'Performance optimization'],
  },
  {
    title: 'Operations',
    icon: 'operations',
    items: ['Recruitment support', 'Staff training', 'Operational systems', 'Platform management', 'Marketing coordination', 'Performance monitoring', 'Financial and operational reporting'],
  },
]

export interface AudiencePath {
  audience: string
  situation: string
  challenge: string
  solution: string
  cta: { label: string; href: string }
}

export const audiencePaths: AudiencePath[] = [
  {
    audience: 'First-Time Food Entrepreneurs',
    situation: 'You want to start a food business',
    challenge: 'No kitchen, team, technology or operational experience yet.',
    solution: 'Fully Managed Food Brand',
    cta: { label: 'Explore Managed Brands', href: '/solutions/fully-managed-food-brand' },
  },
  {
    audience: 'Chefs & Concept Owners',
    situation: 'You have recipes, a menu or a reference concept',
    challenge: 'Turning an original idea into a standardized, scalable product line.',
    solution: 'Custom Brand Development',
    cta: { label: 'Develop My Concept', href: '/solutions/custom-brand-development' },
  },
  {
    audience: 'Restaurant Investors',
    situation: 'You want to open your own kitchen, café or restaurant',
    challenge: 'Building complete operational infrastructure without trial and error.',
    solution: 'Turnkey Kitchen & Restaurant Consultancy',
    cta: { label: 'Build My Operation', href: '/solutions/turnkey-kitchen-restaurant-consultancy' },
  },
  {
    audience: 'Existing Restaurants',
    situation: 'You operate a restaurant, café or food brand',
    challenge: 'Inconsistency, undocumented recipes, weak systems or plateauing performance.',
    solution: 'Restaurant & Brand Growth Consultancy',
    cta: { label: 'Improve My Business', href: '/solutions/restaurant-brand-growth-consultancy' },
  },
  {
    audience: 'Cloud-Kitchen Operators',
    situation: 'You run or plan a delivery-first kitchen',
    challenge: 'Platform complexity, production discipline and unit economics.',
    solution: 'Growth Consultancy or Managed Brands',
    cta: { label: 'Request an Assessment', href: '/operational-assessment' },
  },
  {
    audience: 'International Food Brands',
    situation: 'You want to enter Dubai or the wider UAE',
    challenge: 'Local production, platform onboarding and market-ready execution.',
    solution: 'Custom Brand Development',
    cta: { label: 'Enter the UAE Market', href: '/submit-your-menu' },
  },
  {
    audience: 'Multi-Brand Investors',
    situation: 'You want a portfolio without daily management',
    challenge: 'Building and operating multiple brands with professional oversight.',
    solution: 'Strategic Investment Partner Program',
    cta: { label: 'Explore the Partnership', href: '/solutions/strategic-investment-partner-program' },
  },
]

export const differentiators = [
  'End-to-end execution',
  'Culinary and commercial expertise',
  'Delivery-focused product development',
  'Structured onboarding',
  'Technology-enabled operations',
  'Professional kitchen network',
  'Clear documentation',
  'Scalable systems',
  'Ongoing management options',
  'Multiple solutions under one operating partner',
]

export const journeySteps = [
  'Idea',
  'Concept',
  'Brand',
  'Menu',
  'Production',
  'Technology',
  'Launch',
  'Operations',
  'Growth',
]

export interface NineStage {
  step: number
  title: string
  objective: string
  ffResponsibility: string
  clientResponsibility: string
  output: string
}

export const nineStages: NineStage[] = [
  { step: 1, title: 'Documentation & Legal', objective: 'Establish the legal and commercial foundation.', ffResponsibility: 'Coordinate document requirements and agreement process.', clientResponsibility: 'Provide trade license, bank details and signed agreement.', output: 'Completed documentation and signed agreement.' },
  { step: 2, title: 'Brand Identity', objective: 'Create a distinctive, market-ready brand.', ffResponsibility: 'Develop name options, logo and identity system.', clientResponsibility: 'Review and approve the selected identity.', output: 'Approved brand identity.' },
  { step: 3, title: 'Menu Engineering', objective: 'Engineer a menu designed for delivery performance.', ffResponsibility: 'Structure categories, name products, write descriptions, create combos, set pricing strategy.', clientResponsibility: 'Approve the final menu and pricing.', output: 'Final engineered menu.' },
  { step: 4, title: 'System Setup', objective: 'Configure the technology backbone.', ffResponsibility: 'Set up POS menu, Grubtech, modifiers and customization; verify prices; run internal testing.', clientResponsibility: 'Provide access and confirmations where required.', output: 'Configured and tested systems.' },
  { step: 5, title: 'Aggregator Onboarding', objective: 'Register the brand on delivery platforms.', ffResponsibility: 'Handle registration, document submission, menu upload and price verification.', clientResponsibility: 'Supply required legal documents promptly.', output: 'Platform accounts prepared for activation.' },
  { step: 6, title: 'Content Production', objective: 'Produce professional platform content.', ffResponsibility: 'Organize product photoshoot, edit images and upload to platforms.', clientResponsibility: 'Approve final visual content.', output: 'Published product imagery.' },
  { step: 7, title: 'Integration & Testing', objective: 'Verify the complete order flow.', ffResponsibility: 'Integrate POS, run test orders, verify order flow and troubleshoot.', clientResponsibility: 'Availability for approvals during testing.', output: 'Verified end-to-end order flow.' },
  { step: 8, title: 'Go Live', objective: 'Launch on approved platforms.', ffResponsibility: 'Obtain final approvals, activate platforms and monitor the initial launch.', clientResponsibility: 'Final go-live approval.', output: 'Live, order-ready brand.' },
  { step: 9, title: 'Platform Training', objective: 'Hand over operational visibility.', ffResponsibility: 'Deliver aggregator and Grubtech dashboard training.', clientResponsibility: 'Attend training and designate the responsible contact.', output: 'Trained owner with dashboard access.' },
]

export const fiveWeekTimeline = [
  { week: 'Week 1', title: 'Documentation and Branding' },
  { week: 'Week 2', title: 'Menu and System Setup' },
  { week: 'Week 3', title: 'Aggregators and Content' },
  { week: 'Week 4', title: 'Onboarding' },
  { week: 'Week 5', title: 'Testing and Promotional Activation' },
]

export const timelineDisclaimer =
  'Timelines are estimates and may vary depending on document readiness, approvals, product requirements, platform processing and other third-party dependencies.'

export const ownershipRows = [
  { aspect: 'Brand ownership', client: 'Subject to the signed agreement, the client owns the approved brand.', ff: 'Develops the identity and manages the agreed operational scope.' },
  { aspect: 'Intellectual property', client: 'Rights are defined and transferred as documented in the final agreement.', ff: 'Protects client recipes and formulations under NDA where applicable.' },
  { aspect: 'Customer payments', client: 'Received into the client’s designated business bank account.', ff: 'Configures and monitors the order and payment flow.' },
  { aspect: 'Licenses', client: 'Responsible for trade license and regulatory documents, with coordination support.', ff: 'Coordinates submission requirements and platform documentation.' },
  { aspect: 'Operating expenses', client: 'Ingredients, packaging, delivery, platform commissions and third-party costs.', ff: 'Manages procurement discipline and cost visibility within the agreed scope.' },
  { aspect: 'Platform costs', client: 'Aggregator commissions and advertising budgets.', ff: 'Coordinates promotions and optimizes platform performance.' },
  { aspect: 'After launch', client: 'Strategic direction and approvals.', ff: 'Daily operations, reporting, menu updates and continuous support under the agreed scope.' },
]
