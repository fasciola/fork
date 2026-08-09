/**
 * Fork & Founders — global site configuration.
 * All values sourced from the approved client brief.
 * CMS migration: every value here maps 1:1 to the Sanity `globalSettings` schema.
 */

export const site = {
  name: 'Fork & Founders',
  tagline: 'We Build. You Grow.',
  supportingMessage: 'Expanding Food Brands Through Smart Collaboration',
  description:
    'Fork & Founders is a Dubai-based food-brand development, restaurant operations, cloud-kitchen, and F&B consultancy company. We help entrepreneurs, investors, restaurant owners, cafés, cloud kitchens, food creators, and international food concepts build, launch, operate, improve, and scale food businesses in the UAE.',
  url: 'https://www.forknfounders.com',
  location: 'Dubai, United Arab Emirates',
  office: 'Office #1619, Blue Bay Tower, Dubai, UAE',
  phone: '+971 58 191 3320',
  phoneHref: 'tel:+971581913320',
  whatsapp: '+971 58 191 3320',
  whatsappHref:
    'https://wa.me/971581913320?text=Hello%20Fork%20%26%20Founders%2C%20I%20would%20like%20to%20discuss%20a%20food%20business%20project.',
  email: 'hello@forknfounders.com',
  hours: 'Sunday – Thursday, 9:00 – 18:00 GST',
  social: {
    instagram: 'https://instagram.com/forknfounders',
    linkedin: 'https://linkedin.com/company/forknfounders',
  },
} as const

export interface NavItem {
  label: string
  href: string
  description?: string
  children?: NavItem[]
}

export interface MegaMenuGroup {
  label: string
  items: NavItem[]
}

/** Solutions mega menu, organized per approved IA: LAUNCH / BUILD / GROW / PARTNER */
export const solutionsMegaMenu: MegaMenuGroup[] = [
  {
    label: 'Launch',
    items: [
      {
        label: 'Fully Managed Food Brand',
        href: '/solutions/fully-managed-food-brand',
        description:
          'A delivery-first brand launched and managed through the Fork & Founders operating network.',
      },
      {
        label: 'Custom Brand Development',
        href: '/solutions/custom-brand-development',
        description:
          'Turn your own recipes, menu or original concept into a scalable, production-ready brand.',
      },
    ],
  },
  {
    label: 'Build',
    items: [
      {
        label: 'Turnkey Kitchen & Restaurant Consultancy',
        href: '/solutions/turnkey-kitchen-restaurant-consultancy',
        description:
          'Build a cloud kitchen, cafeteria or restaurant from the ground up — ready for handover.',
      },
    ],
  },
  {
    label: 'Grow',
    items: [
      {
        label: 'Restaurant & Brand Growth Consultancy',
        href: '/solutions/restaurant-brand-growth-consultancy',
        description:
          'Strengthen products, systems, branding and performance for an existing food business.',
      },
    ],
  },
  {
    label: 'Partner',
    items: [
      {
        label: 'Strategic Investment Partner Program',
        href: '/solutions/strategic-investment-partner-program',
        description:
          'A three-brand portfolio built through a five-year partnership with our operating team.',
      },
      {
        label: 'Ultimate Strategic Investment Partner Program',
        href: '/solutions/ultimate-strategic-investment-partner-program',
        description:
          'A private, high-capacity program to build a portfolio of 20 food brands over six years.',
      },
    ],
  },
]

export const primaryNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Solutions', href: '/solutions', children: solutionsMegaMenu.flatMap((g) => g.items) },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Our Brands', href: '/brands' },
  { label: 'Technology & Operations', href: '/technology-and-operations' },
  { label: 'About', href: '/about' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
]

export const footerNav = {
  solutions: solutionsMegaMenu.flatMap((g) => g.items),
  company: [
    { label: 'About Fork & Founders', href: '/about' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Our Brands', href: '/brands' },
    { label: 'Locations', href: '/locations' },
    { label: 'Careers', href: '/careers' },
    { label: 'Insights', href: '/insights' },
  ],
  resources: [
    { label: 'Packages & Pricing', href: '/packages-and-pricing' },
    { label: 'Frequently Asked Questions', href: '/faq' },
    { label: 'Submit Your Menu', href: '/submit-your-menu' },
    { label: 'Request an Operational Assessment', href: '/operational-assessment' },
    { label: 'Start a Restaurant Project', href: '/start-a-restaurant-project' },
    { label: 'Find Your Best Path', href: '/find-your-path' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/legal/privacy-policy' },
    { label: 'Terms and Conditions', href: '/legal/terms-and-conditions' },
    { label: 'Cookie Policy', href: '/legal/cookie-policy' },
    { label: 'Commercial and Performance Disclaimer', href: '/legal/commercial-disclaimer' },
  ],
}
