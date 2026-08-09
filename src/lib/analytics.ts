/**
 * Analytics event layer for Fork & Founders.
 *
 * Naming convention: ff_<object>_<action> (GA4-compatible snake_case).
 * In production this forwards to GA4 (gtag), Meta Pixel, LinkedIn Insight and
 * Vercel Analytics. Keys are injected through environment variables — never
 * hardcode credentials. When no measurement ID is present the layer buffers
 * events to window.dataLayer so QA can verify tracking without live tags.
 *
 * Env vars:
 *   VITE_GA4_MEASUREMENT_ID, VITE_META_PIXEL_ID, VITE_LINKEDIN_PARTNER_ID
 */

export const FF_EVENTS = {
  pageView: 'ff_page_view',
  solutionViewed: 'ff_solution_viewed',
  packageViewed: 'ff_package_viewed',
  priceTabChanged: 'ff_price_tab_changed',
  quizStarted: 'ff_quiz_started',
  quizCompleted: 'ff_quiz_completed',
  formStarted: 'ff_form_started',
  formAbandoned: 'ff_form_abandoned',
  formSubmitted: 'ff_form_submitted',
  menuUploaded: 'ff_menu_uploaded',
  operationalAssessmentRequested: 'ff_operational_assessment_requested',
  partnerApplicationSubmitted: 'ff_partner_application_submitted',
  consultationBooked: 'ff_consultation_booked',
  whatsappClicked: 'ff_whatsapp_clicked',
  phoneClicked: 'ff_phone_clicked',
  emailClicked: 'ff_email_clicked',
  caseStudyViewed: 'ff_case_study_viewed',
  articleRead: 'ff_article_read',
  ctaClicked: 'ff_cta_clicked',
  languageChanged: 'ff_language_changed',
  videoPlayed: 'ff_video_played',
  scrollDepth: 'ff_scroll_depth',
} as const

export type FFEventName = (typeof FF_EVENTS)[keyof typeof FF_EVENTS]

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
    gtag?: (...args: unknown[]) => void
  }
}

export function trackEvent(name: FFEventName, params: Record<string, unknown> = {}) {
  const payload = { event: name, ...params, page: window.location.pathname }
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push(payload)
  if (typeof window.gtag === 'function') {
    window.gtag('event', name, params)
  }
  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.debug('[analytics]', payload)
  }
}

export function trackPageView(path: string) {
  trackEvent(FF_EVENTS.pageView, { page_path: path })
}
