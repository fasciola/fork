/**
 * Six conversion-form configurations.
 * Submission flow (production): client validation → Cloudflare Turnstile →
 * API route → server validation → Odoo CRM lead with source/category tags →
 * notification email → confirmation email. This build ships the complete
 * client experience plus a documented integration adapter (src/lib/crm.ts);
 * without API keys, submissions complete locally and are logged for QA.
 */

export interface FieldConfig {
  name: string
  label: string
  type: 'text' | 'email' | 'tel' | 'select' | 'textarea' | 'file' | 'checkbox' | 'radio'
  required?: boolean
  options?: string[]
  placeholder?: string
  hint?: string
  accept?: string
}

export interface FormConfig {
  id: string
  title: string
  intro: string
  categoryTag: string
  event: 'ff_form_submitted' | 'ff_menu_uploaded' | 'ff_operational_assessment_requested' | 'ff_partner_application_submitted' | 'ff_consultation_booked'
  fields: FieldConfig[]
  submitLabel: string
  disclaimer?: string
  successTitle: string
  successBody: string
}

const objectiveOptions = [
  'Launch a fully managed brand',
  'Develop my own food concept',
  'Open a kitchen or restaurant',
  'Improve an existing business',
  'Build a multi-brand portfolio',
  'Not sure yet — advise me',
]

const timelineOptions = ['Immediately', 'Within three months', 'Within six months', 'Within one year', 'Still researching']

export const formConfigs: Record<string, FormConfig> = {
  consultation: {
    id: 'consultation',
    title: 'Book a Consultation',
    intro:
      'Tell us what you are planning. Our team will review your concept, current operation, menu or investment objective and recommend the most suitable Fork & Founders pathway.',
    categoryTag: 'General Inquiry',
    event: 'ff_consultation_booked',
    fields: [
      { name: 'name', label: 'Full name', type: 'text', required: true },
      { name: 'company', label: 'Company', type: 'text' },
      { name: 'email', label: 'Email', type: 'email', required: true },
      { name: 'phone', label: 'Telephone', type: 'tel', required: true },
      { name: 'whatsapp', label: 'WhatsApp (if different)', type: 'tel' },
      { name: 'country', label: 'Country', type: 'text', required: true },
      { name: 'objective', label: 'Objective', type: 'select', required: true, options: objectiveOptions },
      { name: 'category', label: 'Preferred category', type: 'select', options: ['Fully Managed Food Brand', 'Custom Brand Development', 'Turnkey Kitchen & Restaurant Consultancy', 'Restaurant & Brand Growth Consultancy', 'Strategic Investment Partner Program', 'Ultimate Strategic Investment Partner Program', 'Not sure'] },
      { name: 'timeline', label: 'Timeline', type: 'select', options: timelineOptions },
      { name: 'message', label: 'Message', type: 'textarea', placeholder: 'Tell us about your concept, operation or objective…' },
    ],
    submitLabel: 'Request My Consultation',
    successTitle: 'Consultation request received',
    successBody: 'Thank you. A member of the Fork & Founders team will contact you within one business day to schedule your consultation.',
  },
  managedBrand: {
    id: 'managedBrand',
    title: 'Start My Managed Brand',
    intro: 'Tell us about the brand you want to launch and we will prepare a tailored Category 1 proposal.',
    categoryTag: 'Category 1',
    event: 'ff_form_submitted',
    fields: [
      { name: 'name', label: 'Full name', type: 'text', required: true },
      { name: 'email', label: 'Email', type: 'email', required: true },
      { name: 'phone', label: 'Telephone', type: 'tel', required: true },
      { name: 'cuisine', label: 'Cuisine interest', type: 'text', required: true, placeholder: 'e.g. Levantine, burgers, Asian fusion' },
      { name: 'brands', label: 'Number of brands', type: 'select', required: true, options: ['One', 'Two', 'Three', 'More than three'] },
      { name: 'locations', label: 'Number of locations', type: 'select', options: ['One', 'Two', 'Three', 'To be advised'] },
      { name: 'package', label: 'Preferred package', type: 'select', options: ['Monthly', 'Annual', 'Hybrid', 'Advise me'] },
      { name: 'launch', label: 'Target launch', type: 'select', options: timelineOptions },
      { name: 'license', label: 'Existing trade license?', type: 'radio', options: ['Yes', 'No', 'In progress'] },
      { name: 'range', label: 'Investment range', type: 'select', options: ['Under AED 50,000', 'AED 50,000 – 100,000', 'AED 100,000 – 250,000', 'Above AED 250,000', 'Prefer to discuss'] },
    ],
    submitLabel: 'Request My Proposal',
    successTitle: 'Managed-brand inquiry received',
    successBody: 'Thank you. Our team will prepare your Category 1 pathway and contact you within one business day.',
  },
  menuAssessment: {
    id: 'menuAssessment',
    title: 'Submit Your Menu for Assessment',
    intro:
      'Share your menu, recipes or reference concept. The Fork & Founders culinary team will evaluate feasibility and confirm which products can be developed, standardized, produced and scaled through our UAE kitchen operations.',
    categoryTag: 'Category 2',
    event: 'ff_menu_uploaded',
    fields: [
      { name: 'name', label: 'Full name', type: 'text', required: true },
      { name: 'company', label: 'Company', type: 'text' },
      { name: 'email', label: 'Email', type: 'email', required: true },
      { name: 'phone', label: 'Telephone', type: 'tel', required: true },
      { name: 'country', label: 'Country', type: 'text', required: true },
      { name: 'cuisine', label: 'Cuisine', type: 'text', required: true },
      { name: 'items', label: 'Number of menu items', type: 'select', options: ['1 – 5', '6 – 12', '13 – 25', 'More than 25'] },
      { name: 'recipes', label: 'Do you have existing recipes?', type: 'radio', options: ['Yes, fully documented', 'Partially documented', 'No — concept only'] },
      { name: 'brand', label: 'Existing brand?', type: 'radio', options: ['Yes', 'No'] },
      { name: 'reference', label: 'Reference concept (optional)', type: 'text', placeholder: 'A brand or concept you want us to review' },
      { name: 'location', label: 'Preferred location', type: 'text' },
      { name: 'launch', label: 'Target launch date', type: 'select', options: timelineOptions },
      { name: 'files', label: 'Upload menu / recipes / reference images', type: 'file', accept: '.pdf,.doc,.docx,.jpg,.jpeg,.png,.webp,.zip', hint: 'Up to 5 files, 10 MB each. Transmitted securely and covered by our mutual NDA process.' },
      { name: 'notes', label: 'Additional notes', type: 'textarea' },
    ],
    submitLabel: 'Submit for Culinary Assessment',
    successTitle: 'Menu submitted for assessment',
    successBody: 'Thank you. Our culinary team will review your submission and respond with a feasibility assessment. Your materials are handled confidentially.',
  },
  turnkey: {
    id: 'turnkey',
    title: 'Start a Restaurant Project',
    intro: 'Tell us about the operation you want to build — cloud kitchen, cafeteria, quick-service or full-service restaurant.',
    categoryTag: 'Category 3',
    event: 'ff_form_submitted',
    fields: [
      { name: 'name', label: 'Full name', type: 'text', required: true },
      { name: 'email', label: 'Email', type: 'email', required: true },
      { name: 'phone', label: 'Telephone', type: 'tel', required: true },
      { name: 'type', label: 'Business type', type: 'select', required: true, options: ['Cloud kitchen', 'Cafeteria', 'Quick-service restaurant', 'Full-service restaurant', 'Café', 'Other'] },
      { name: 'location', label: 'Preferred location', type: 'text', required: true, placeholder: 'Area or emirate' },
      { name: 'site', label: 'Existing site?', type: 'radio', options: ['Yes', 'No', 'Searching now'] },
      { name: 'size', label: 'Approximate kitchen size', type: 'select', options: ['Under 50 m²', '50 – 120 m²', '120 – 300 m²', 'Above 300 m²', 'Not sure'] },
      { name: 'cuisine', label: 'Cuisine', type: 'text', required: true },
      { name: 'menu', label: 'Menu status', type: 'select', options: ['Fully developed', 'Partially developed', 'Concept only', 'Not started'] },
      { name: 'license', label: 'License status', type: 'select', options: ['Have a trade license', 'In progress', 'Not yet — need guidance'] },
      { name: 'budget', label: 'Budget range', type: 'select', options: ['AED 50,000 – 100,000', 'AED 100,000 – 250,000', 'AED 250,000 – 500,000', 'Above AED 500,000', 'Prefer to discuss'] },
      { name: 'opening', label: 'Target opening', type: 'select', options: timelineOptions },
    ],
    submitLabel: 'Plan My Food Business',
    successTitle: 'Project request received',
    successBody: 'Thank you. Our turnkey consultancy team will review your project and contact you to schedule a project consultation.',
  },
  operationalAssessment: {
    id: 'operationalAssessment',
    title: 'Request an Operational Assessment',
    intro: 'Tell us about your existing business and main challenges. We will respond with an assessment plan and a scoped proposal.',
    categoryTag: 'Category 4',
    event: 'ff_operational_assessment_requested',
    fields: [
      { name: 'name', label: 'Full name', type: 'text', required: true },
      { name: 'business', label: 'Existing business name', type: 'text', required: true },
      { name: 'email', label: 'Email', type: 'email', required: true },
      { name: 'phone', label: 'Telephone', type: 'tel', required: true },
      { name: 'locations', label: 'Number of locations', type: 'select', options: ['One', 'Two', 'Three', 'Four or more'] },
      { name: 'employees', label: 'Number of employees', type: 'select', options: ['1 – 5', '6 – 15', '16 – 40', 'More than 40'] },
      { name: 'cuisine', label: 'Cuisine', type: 'text', required: true },
      { name: 'systems', label: 'Current systems', type: 'select', options: ['POS only', 'POS + aggregator tablets', 'POS + middleware', 'None / manual', 'Not sure'] },
      { name: 'platforms', label: 'Delivery platforms used', type: 'text', placeholder: 'e.g. Talabat, Deliveroo, Careem' },
      { name: 'challenges', label: 'Main challenges', type: 'textarea', required: true, placeholder: 'Consistency, undocumented recipes, platform performance, costs, staffing…' },
      { name: 'support', label: 'Requested support', type: 'textarea', placeholder: 'What would you like Fork & Founders to assess or improve?' },
    ],
    submitLabel: 'Request My Assessment',
    successTitle: 'Assessment request received',
    successBody: 'Thank you. Our growth consultancy team will review your operation and respond with an assessment plan.',
  },
  partner: {
    id: 'partner',
    title: 'Strategic Partner Application',
    intro:
      'This application begins a qualification process: initial commercial review, a private meeting, legal and compliance review, a customized proposal and the agreement process. No payment is taken online.',
    categoryTag: 'Category 5',
    event: 'ff_partner_application_submitted',
    fields: [
      { name: 'name', label: 'Full name', type: 'text', required: true },
      { name: 'company', label: 'Company', type: 'text' },
      { name: 'country', label: 'Country', type: 'text', required: true },
      { name: 'residency', label: 'UAE residency', type: 'radio', options: ['UAE resident', 'Non-resident', 'Corporate applicant'] },
      { name: 'email', label: 'Email', type: 'email', required: true },
      { name: 'phone', label: 'Telephone', type: 'tel', required: true },
      { name: 'experience', label: 'F&B experience', type: 'select', options: ['None', 'Some exposure', 'Active F&B operator', 'F&B investor'] },
      { name: 'businesses', label: 'Existing businesses', type: 'textarea', placeholder: 'Briefly describe your current business interests' },
      { name: 'program', label: 'Preferred program', type: 'select', required: true, options: ['Strategic Investment Partner Program (3 brands / 5 years)', 'Ultimate Strategic Investment Partner Program (20 brands / 6 years)', 'Advise me'] },
      { name: 'cuisines', label: 'Preferred cuisines', type: 'text' },
      { name: 'locations', label: 'Preferred locations', type: 'text' },
      { name: 'timeline', label: 'Target timeline', type: 'select', options: timelineOptions },
      { name: 'readiness', label: 'Investment readiness', type: 'select', required: true, options: ['Ready to proceed', 'Ready within 3 months', 'Exploring options', 'Researching'] },
      { name: 'details', label: 'Additional details', type: 'textarea' },
      { name: 'acknowledgement', label: 'I acknowledge that all published figures are illustrative examples of the commercial structure only, and that no revenue, profit, savings or return is guaranteed.', type: 'checkbox', required: true },
    ],
    submitLabel: 'Submit My Application',
    disclaimer: 'Submitting this form does not constitute an offer, approval or agreement. Applications are reviewed individually.',
    successTitle: 'Application received',
    successBody: 'Thank you. Your application enters our qualification process. If it proceeds, we will invite you to an initial commercial review and private meeting.',
  },
}
