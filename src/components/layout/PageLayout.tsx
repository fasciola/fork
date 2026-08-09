import { useEffect, type ReactNode } from 'react'
import { useLocation } from 'react-router'
import { Header } from './Header'
import { Footer } from './Footer'
import { AnnouncementBar, CookieBanner } from './Chrome'
import { I18nProvider } from '@/lib/i18n'
import { trackPageView } from '@/lib/analytics'
import { site } from '@/lib/site'

interface PageLayoutProps {
  children: ReactNode
  title: string
  description: string
  /** JSON-LD structured data objects for this page */
  schema?: Record<string, unknown>[]
  canonicalPath?: string
}

function setMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.content = content
}

export function PageLayout({ children, title, description, schema = [], canonicalPath }: PageLayoutProps) {
  const location = useLocation()
  const path = canonicalPath ?? location.pathname
  const canonical = `${site.url}${path === '/' ? '/en/' : `/en${path}`}`

  useEffect(() => {
    document.title = title
    setMeta('description', description)
    setMeta('og:title', title, 'property')
    setMeta('og:description', description, 'property')
    setMeta('og:type', 'website', 'property')
    setMeta('og:url', canonical, 'property')
    setMeta('og:image', `${site.url}/images/og/fork-founders-og-default.jpg`, 'property')
    setMeta('og:site_name', site.name, 'property')
    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', title)
    setMeta('twitter:description', description)

    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.rel = 'canonical'
      document.head.appendChild(link)
    }
    link.href = canonical

    // hreflang structure (en/ar)
    ;(['en', 'ar'] as const).forEach((lang) => {
      let alt = document.querySelector<HTMLLinkElement>(`link[rel="alternate"][hreflang="${lang}"]`)
      if (!alt) {
        alt = document.createElement('link')
        alt.rel = 'alternate'
        alt.hreflang = lang
        document.head.appendChild(alt)
      }
      alt.href = `${site.url}${path === '/' ? `/${lang}/` : `/${lang}${path}`}`
    })

    // structured data
    document.querySelectorAll('script[data-ff-schema]').forEach((el) => el.remove())
    const orgSchema = {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: site.name,
      slogan: site.tagline,
      description: site.description,
      url: site.url,
      telephone: site.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Office #1619, Blue Bay Tower',
        addressLocality: 'Dubai',
        addressCountry: 'AE',
      },
      areaServed: 'United Arab Emirates',
    }
    ;[orgSchema, ...schema].forEach((obj) => {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.setAttribute('data-ff-schema', 'true')
      script.textContent = JSON.stringify(obj)
      document.head.appendChild(script)
    })

    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
    trackPageView(location.pathname)
  }, [location.pathname, title, description, canonical])

  return (
    <I18nProvider>
      <AnnouncementBar />
      <Header />
      <main id="main">{children}</main>
      <Footer />
      <CookieBanner />
    </I18nProvider>
  )
}

/** Shared inner page hero for sub-pages. */
export function PageHero({
  eyebrow,
  title,
  copy,
  image,
  imageAlt,
  dark = true,
}: {
  eyebrow: string
  title: string
  copy?: string
  image?: string
  imageAlt?: string
  dark?: boolean
}) {
  return (
    <section className="px-2.5 pt-2.5 sm:px-4 sm:pt-3" aria-labelledby="page-hero-heading">
      <div className={`relative overflow-hidden rounded-[2rem] sm:rounded-[2.75rem] ${dark ? 'sage-section' : 'bg-softgrey'}`}>
        {/* doodle accents */}
        <svg viewBox="0 0 120 120" fill="none" aria-hidden="true" className={`pointer-events-none absolute -right-8 -top-8 h-36 w-36 ${dark ? 'text-white/15' : 'text-gold-dark/15'}`}>
          <path d="M61 12C34 15 12 36 13 62c1 27 26 47 51 45 24-2 44-22 43-47-1-22-20-40-43-39-19 1-34 15-35 33" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
        </svg>
        {dark && <span className="pointer-events-none absolute bottom-10 right-[12%] hidden h-3 w-3 rounded-full bg-gold lg:block" aria-hidden="true" />}
        {image && (
          <div className="absolute inset-y-0 right-0 hidden w-[42%] lg:block">
            <img src={image} alt={imageAlt ?? ''} className="h-full w-full object-cover" fetchPriority="high" width={1920} height={1009} />
            <div className={`absolute inset-0 ${dark ? 'bg-gradient-to-r from-[hsl(var(--sage))] via-[hsl(var(--sage))]/55 to-transparent' : 'bg-gradient-to-r from-softgrey via-softgrey/60 to-transparent'}`} />
          </div>
        )}
        <div className="container-ff relative py-20 sm:py-24 lg:py-28">
          <p className={dark ? 'font-display text-[0.72rem] font-bold uppercase tracking-[0.24em] text-white/90' : 'eyebrow'}>{eyebrow}</p>
          <h1
            id="page-hero-heading"
            className={`mt-4 max-w-3xl text-balance font-display text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl lg:text-[3.2rem] ${dark ? 'text-white' : 'text-ink'}`}
          >
            {title}
          </h1>
          {copy && <p className={`mt-5 max-w-2xl text-lg font-semibold leading-relaxed ${dark ? 'text-white/90' : 'text-muted-foreground'}`}>{copy}</p>}
        </div>
      </div>
    </section>
  )
}
