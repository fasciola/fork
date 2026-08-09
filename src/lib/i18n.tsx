/**
 * Bilingual-ready (EN/AR) infrastructure for Fork & Founders.
 *
 * Architecture notes:
 * - URL structure is designed for /en/ and /ar/ prefixes at the Next.js/edge
 *   layer; this SPA build exposes the language switch as a context so every
 *   component already consumes localized chrome strings and RTL direction.
 * - Full Arabic page content is managed through the Sanity bilingual field
 *   structure (see /sanity/schemas). Chrome strings below are fully translated.
 * - Direction (ltr/rtl) is applied to <html dir> so mirrored layout utilities
 *   (logical properties, rtl-mirror) work everywhere.
 */
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { FF_EVENTS, trackEvent } from './analytics'

export type Lang = 'en' | 'ar'

const chromeStrings: Record<string, Record<Lang, string>> = {
  bookConsultation: { en: 'Book a Consultation', ar: 'احجز استشارة' },
  findYourPath: { en: 'Find Your Best Path', ar: 'اعثر على مسارك الأنسب' },
  exploreSolutions: { en: 'Explore Our Solutions', ar: 'استكشف حلولنا' },
  solutions: { en: 'Solutions', ar: 'الحلول' },
  home: { en: 'Home', ar: 'الرئيسية' },
  howItWorks: { en: 'How It Works', ar: 'كيف نعمل' },
  ourBrands: { en: 'Our Brands', ar: 'علاماتنا' },
  techOps: { en: 'Technology & Operations', ar: 'التقنية والعمليات' },
  about: { en: 'About', ar: 'من نحن' },
  insights: { en: 'Insights', ar: 'الرؤى' },
  contact: { en: 'Contact', ar: 'تواصل معنا' },
  menu: { en: 'Menu', ar: 'القائمة' },
  close: { en: 'Close', ar: 'إغلاق' },
  learnMore: { en: 'Learn more', ar: 'اعرف المزيد' },
  readMore: { en: 'Read more', ar: 'اقرأ المزيد' },
  submit: { en: 'Submit', ar: 'إرسال' },
  required: { en: 'Required', ar: 'مطلوب' },
  launch: { en: 'Launch', ar: 'الإطلاق' },
  build: { en: 'Build', ar: 'البناء' },
  grow: { en: 'Grow', ar: 'النمو' },
  partner: { en: 'Partner', ar: 'الشراكة' },
}

interface I18nContextValue {
  lang: Lang
  dir: 'ltr' | 'rtl'
  setLang: (lang: Lang) => void
  t: (key: keyof typeof chromeStrings) => string
}

const I18nContext = createContext<I18nContextValue | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')
  const dir = lang === 'ar' ? 'rtl' : 'ltr'

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = dir
  }, [lang, dir])

  const value = useMemo<I18nContextValue>(
    () => ({
      lang,
      dir,
      setLang: (next: Lang) => {
        setLangState(next)
        trackEvent(FF_EVENTS.languageChanged, { from: lang, to: next })
      },
      t: (key) => chromeStrings[key]?.[lang] ?? String(key),
    }),
    [lang, dir],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}
