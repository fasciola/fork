import { Suspense, lazy, type ComponentType } from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'

function lazyNamed<T extends ComponentType<object>>(
  factory: () => Promise<Record<string, T>>,
  exportName: string,
) {
  return lazy(() =>
    factory().then((mod) => {
      const named = mod[exportName]
      if (!named) throw new Error(`Missing export "${exportName}" in lazy page module`)
      return { default: named }
    }),
  )
}

const SolutionsOverview = lazy(() => import('./pages/Solutions'))
const SolutionPage = lazy(() => import('./pages/SolutionPage'))
const HowItWorks = lazy(() => import('./pages/HowItWorks'))
const Technology = lazy(() => import('./pages/Technology'))
const About = lazy(() => import('./pages/About'))
const Brands = lazy(() => import('./pages/Brands'))
const Insights = lazy(() => import('./pages/Insights'))
const ArticlePage = lazy(() => import('./pages/ArticlePage'))
const Pricing = lazy(() => import('./pages/Pricing'))
const Faq = lazy(() => import('./pages/Faq'))
const Locations = lazy(() => import('./pages/Locations'))
const FindYourPath = lazy(() => import('./pages/FindYourPath'))
const ContactPage = lazyNamed(() => import('./pages/FormPages') as Promise<Record<string, ComponentType<object>>>, 'ContactPage')
const ConsultationPage = lazyNamed(() => import('./pages/FormPages') as Promise<Record<string, ComponentType<object>>>, 'ConsultationPage')
const ManagedBrandPage = lazyNamed(() => import('./pages/FormPages') as Promise<Record<string, ComponentType<object>>>, 'ManagedBrandPage')
const MenuAssessmentPage = lazyNamed(() => import('./pages/FormPages') as Promise<Record<string, ComponentType<object>>>, 'MenuAssessmentPage')
const TurnkeyProjectPage = lazyNamed(() => import('./pages/FormPages') as Promise<Record<string, ComponentType<object>>>, 'TurnkeyProjectPage')
const OperationalAssessmentPage = lazyNamed(() => import('./pages/FormPages') as Promise<Record<string, ComponentType<object>>>, 'OperationalAssessmentPage')
const PartnerApplicationPage = lazyNamed(() => import('./pages/FormPages') as Promise<Record<string, ComponentType<object>>>, 'PartnerApplicationPage')
const UltimateApplicationPage = lazyNamed(() => import('./pages/FormPages') as Promise<Record<string, ComponentType<object>>>, 'UltimateApplicationPage')
const PrivacyPolicy = lazyNamed(() => import('./pages/Legal') as Promise<Record<string, ComponentType<object>>>, 'PrivacyPolicy')
const Terms = lazyNamed(() => import('./pages/Legal') as Promise<Record<string, ComponentType<object>>>, 'Terms')
const CookiePolicy = lazyNamed(() => import('./pages/Legal') as Promise<Record<string, ComponentType<object>>>, 'CookiePolicy')
const CommercialDisclaimer = lazyNamed(() => import('./pages/Legal') as Promise<Record<string, ComponentType<object>>>, 'CommercialDisclaimer')
const Careers = lazyNamed(() => import('./pages/Misc') as Promise<Record<string, ComponentType<object>>>, 'Careers')
const ServerError = lazyNamed(() => import('./pages/Misc') as Promise<Record<string, ComponentType<object>>>, 'ServerError')
const NotFound = lazyNamed(() => import('./pages/Misc') as Promise<Record<string, ComponentType<object>>>, 'NotFound')

function PageFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center" role="status" aria-label="Loading page">
      <div className="h-10 w-10 animate-spin rounded-full border-[3px] border-paleblue border-t-navy" />
    </div>
  )
}

export default function App() {
  return (
    <Suspense fallback={<PageFallback />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<SolutionsOverview />} />
        <Route path="/solutions/:slug" element={<SolutionPage />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/technology-and-operations" element={<Technology />} />
        <Route path="/about" element={<About />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/insights/:slug" element={<ArticlePage />} />
        <Route path="/packages-and-pricing" element={<Pricing />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/find-your-path" element={<FindYourPath />} />
        <Route path="/book-a-consultation" element={<ConsultationPage />} />
        <Route path="/start-my-managed-brand" element={<ManagedBrandPage />} />
        <Route path="/submit-your-menu" element={<MenuAssessmentPage />} />
        <Route path="/start-a-restaurant-project" element={<TurnkeyProjectPage />} />
        <Route path="/operational-assessment" element={<OperationalAssessmentPage />} />
        <Route path="/strategic-partner-application" element={<PartnerApplicationPage />} />
        <Route path="/ultimate-partner-application" element={<UltimateApplicationPage />} />
        <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/legal/terms-and-conditions" element={<Terms />} />
        <Route path="/legal/cookie-policy" element={<CookiePolicy />} />
        <Route path="/legal/commercial-disclaimer" element={<CommercialDisclaimer />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/500" element={<ServerError />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}
