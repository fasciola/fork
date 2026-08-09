import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { ChevronDown, Globe, Menu, MessageCircle, Phone, X } from 'lucide-react'
import { primaryNav, site, solutionsMegaMenu } from '@/lib/site'
import { useI18n } from '@/lib/i18n'
import { FF_EVENTS, trackEvent } from '@/lib/analytics'
import { BrandMark } from './BrandMark'
import { FFIcon, type FFIconName } from '@/components/shared/Icons'

const solutionIcons: Record<string, FFIconName> = {
  'fully-managed-food-brand': 'platforms',
  'custom-brand-development': 'culinary',
  'turnkey-kitchen-restaurant-consultancy': 'kitchen',
  'restaurant-brand-growth-consultancy': 'growth',
  'strategic-investment-partner-program': 'partnership',
  'ultimate-strategic-investment-partner-program': 'portfolio',
}

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const megaTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const location = useLocation()
  const { lang, setLang, t } = useI18n()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMegaOpen(false)
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const openMega = () => {
    clearTimeout(megaTimeout.current)
    setMegaOpen(true)
  }
  const closeMega = () => {
    megaTimeout.current = setTimeout(() => setMegaOpen(false), 160)
  }

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled ? 'bg-white shadow-[0_1px_0_rgba(8,19,33,0.06),0_12px_32px_-16px_rgba(7,29,73,0.18)]' : 'bg-white/95 backdrop-blur-md'
        }`}
      >
        <div className="container-ff relative">
          <div className="flex h-[4.5rem] items-center justify-between gap-4">
            <BrandMark />

            {/* Desktop nav */}
            <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
              {primaryNav.map((item) =>
                item.label === 'Solutions' ? (
                  <div key={item.label} onMouseEnter={openMega} onMouseLeave={closeMega}>
                    <button
                      type="button"
                      aria-expanded={megaOpen}
                      aria-haspopup="true"
                      onClick={() => setMegaOpen((v) => !v)}
                      className={`inline-flex items-center gap-1 rounded-full px-3.5 py-2 font-display text-[0.78rem] font-bold uppercase tracking-wider transition-colors hover:bg-paleblue hover:text-navy ${
                        megaOpen ? 'text-navy' : 'text-ink/80'
                      }`}
                    >
                      {t('solutions')}
                      <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${megaOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                    </button>
                    {/* Mega menu */}
                    <div
                      className={`absolute left-0 right-0 top-full pt-2 transition-all duration-300 ${
                        megaOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0'
                      }`}
                    >
                      <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-3xl border border-border bg-white shadow-[0_32px_80px_-24px_rgba(7,29,73,0.35)]">
                        <div className="grid grid-cols-4 gap-0">
                          {solutionsMegaMenu.map((group) => (
                            <div key={group.label} className="border-r border-border/70 p-6 last:border-r-0">
                              <p className="eyebrow-navy mb-4">{t(group.label.toLowerCase() as 'launch' | 'build' | 'grow' | 'partner')}</p>
                              <ul className="space-y-4">
                                {group.items.map((item) => {
                                  const slug = item.href.split('/').pop() ?? ''
                                  return (
                                    <li key={item.href}>
                                      <Link to={item.href} className="group/item flex gap-3">
                                        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-paleblue text-navy transition-colors group-hover/item:bg-navy group-hover/item:text-white">
                                          <FFIcon name={solutionIcons[slug] ?? 'concept'} className="h-4 w-4" />
                                        </span>
                                        <span>
                                          <span className="block font-display text-[0.82rem] font-semibold leading-snug text-ink transition-colors group-hover/item:text-navy">
                                            {item.label}
                                          </span>
                                          <span className="mt-1 block text-[0.72rem] leading-snug text-muted-foreground">
                                            {item.description}
                                          </span>
                                        </span>
                                      </Link>
                                    </li>
                                  )
                                })}
                              </ul>
                            </div>
                          ))}
                        </div>
                        <div className="flex items-center justify-between border-t border-border bg-softgrey/70 px-6 py-3.5">
                          <p className="text-xs text-muted-foreground">
                            Not sure which path fits? Answer seven questions and get a recommendation.
                          </p>
                          <Link to="/find-your-path" className="link-underline text-xs">
                            {t('findYourPath')} →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <NavLink
                    key={item.href}
                    to={item.href}
                    className={({ isActive }) =>
                      `rounded-full px-3.5 py-2 font-display text-[0.78rem] font-bold uppercase tracking-wider transition-colors hover:bg-paleblue hover:text-navy ${
                        isActive ? 'text-navy' : 'text-ink/80'
                      }`
                    }
                  >
                    {item.label === 'Home' ? t('home') : item.label === 'How It Works' ? t('howItWorks') : item.label === 'Our Brands' ? t('ourBrands') : item.label === 'Technology & Operations' ? t('techOps') : item.label === 'About' ? t('about') : item.label === 'Insights' ? t('insights') : t('contact')}
                  </NavLink>
                ),
              )}
            </nav>

            <div className="flex items-center gap-2.5">
              {/* Language selector */}
              <button
                type="button"
                onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
                className="hidden items-center gap-1.5 rounded-full border border-border px-3 py-2 font-display text-xs font-semibold text-ink/70 transition-colors hover:border-navy/30 hover:text-navy sm:inline-flex"
                aria-label={lang === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'}
              >
                <Globe className="h-3.5 w-3.5" aria-hidden="true" />
                {lang === 'en' ? 'عربي' : 'EN'}
              </button>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent(FF_EVENTS.whatsappClicked, { placement: 'header' })}
                className="hidden h-10 w-10 items-center justify-center rounded-full border border-border text-ink/70 transition-colors hover:border-navy/30 hover:text-navy xl:inline-flex"
                aria-label="WhatsApp Fork & Founders"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
              </a>
              <Link
                to="/book-a-consultation"
                onClick={() => trackEvent(FF_EVENTS.ctaClicked, { cta: 'book_consultation', placement: 'header' })}
                className="btn-primary-ff hidden !px-5 !py-2.5 !text-[0.8rem] md:inline-flex"
              >
                {t('bookConsultation')}
              </Link>
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink lg:hidden"
                aria-label={t('menu')}
                aria-expanded={mobileOpen}
              >
                <Menu className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile navigation drawer */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden ${mobileOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        aria-hidden={!mobileOpen}
      >
        <div
          className={`absolute inset-0 bg-navy-deep/40 backdrop-blur-sm transition-opacity duration-300 ${mobileOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMobileOpen(false)}
        />
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className={`absolute inset-y-0 end-0 flex w-[min(24rem,88vw)] flex-col bg-white shadow-2xl transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full rtl:-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between border-b border-border px-6 py-4">
            <BrandMark compact />
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border"
              aria-label={t('close')}
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-6 py-6" aria-label="Mobile">
            <ul className="space-y-1">
              {primaryNav
                .filter((i) => i.label !== 'Solutions')
                .map((item) => (
                  <li key={item.href}>
                    <NavLink
                      to={item.href}
                      className={({ isActive }) =>
                        `block rounded-xl px-4 py-3 font-display text-base font-semibold ${isActive ? 'bg-paleblue text-navy' : 'text-ink'}`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
            </ul>
            <p className="eyebrow-navy mt-8 px-4">{t('solutions')}</p>
            <ul className="mt-3 space-y-1">
              {solutionsMegaMenu.flatMap((g) => g.items).map((item) => (
                <li key={item.href}>
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      `block rounded-xl px-4 py-2.5 text-[0.92rem] font-medium ${isActive ? 'bg-paleblue text-navy' : 'text-ink/80'}`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="mt-8 space-y-3 rounded-2xl bg-softgrey p-5">
              <a href={site.phoneHref} onClick={() => trackEvent(FF_EVENTS.phoneClicked, { placement: 'mobile_nav' })} className="flex items-center gap-3 text-sm font-semibold text-navy">
                <Phone className="h-4 w-4" aria-hidden="true" /> {site.phone}
              </a>
              <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent(FF_EVENTS.whatsappClicked, { placement: 'mobile_nav' })} className="flex items-center gap-3 text-sm font-semibold text-navy">
                <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp
              </a>
              <button
                type="button"
                onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
                className="flex items-center gap-3 text-sm font-semibold text-navy"
              >
                <Globe className="h-4 w-4" aria-hidden="true" /> {lang === 'en' ? 'العربية' : 'English'}
              </button>
            </div>
          </nav>
          <div className="border-t border-border p-5">
            <Link to="/book-a-consultation" className="btn-primary-ff w-full">
              {t('bookConsultation')}
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
