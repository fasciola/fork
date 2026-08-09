import { useState } from 'react'
import { Link } from 'react-router'
import { Clock, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { footerNav, site } from '@/lib/site'
import { FF_EVENTS, trackEvent } from '@/lib/analytics'
import { BrandMark } from './BrandMark'

export function Footer() {
  const [newsletter, setNewsletter] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  return (
    <footer className="navy-section text-white" aria-label="Site footer">
      <div className="container-ff section-pad !pb-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr]">
          <div>
            <BrandMark light />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/60">{site.description.split('.')[0]}.</p>
            <p className="mt-4 font-display text-sm font-semibold text-gold">{site.supportingMessage}</p>
            <div className="mt-6 flex gap-3">
              <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-gold hover:text-gold">
                <Instagram className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-gold hover:text-gold">
                <Linkedin className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <nav aria-label="Solutions">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-white/50">Solutions</h3>
            <ul className="mt-5 space-y-2.5">
              {footerNav.solutions.map((i) => (
                <li key={i.href}>
                  <Link to={i.href} className="text-sm text-white/75 transition-colors hover:text-gold">{i.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-white/50">Company</h3>
            <ul className="mt-5 space-y-2.5">
              {footerNav.company.map((i) => (
                <li key={i.href}>
                  <Link to={i.href} className="text-sm text-white/75 transition-colors hover:text-gold">{i.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Resources">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-white/50">Resources</h3>
            <ul className="mt-5 space-y-2.5">
              {footerNav.resources.map((i) => (
                <li key={i.href}>
                  <Link to={i.href} className="text-sm text-white/75 transition-colors hover:text-gold">{i.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-white/50">Contact</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              <li className="flex gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <span>{site.office}</span>
              </li>
              <li>
                <a href={site.phoneHref} onClick={() => trackEvent(FF_EVENTS.phoneClicked, { placement: 'footer' })} className="flex gap-2.5 transition-colors hover:text-gold">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" /> {site.phone}
                </a>
              </li>
              <li>
                <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent(FF_EVENTS.whatsappClicked, { placement: 'footer' })} className="flex gap-2.5 transition-colors hover:text-gold">
                  <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" /> WhatsApp {site.whatsapp}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} onClick={() => trackEvent(FF_EVENTS.emailClicked, { placement: 'footer' })} className="flex gap-2.5 transition-colors hover:text-gold">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" /> {site.email}
                </a>
              </li>
              <li className="flex gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" /> {site.hours}
              </li>
            </ul>
            <form
              className="mt-6"
              onSubmit={(e) => {
                e.preventDefault()
                if (newsletter.trim()) setSubscribed(true)
              }}
            >
              <label htmlFor="newsletter-email" className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
                Insights Newsletter
              </label>
              {subscribed ? (
                <p className="mt-3 rounded-xl border border-gold/40 bg-gold/10 px-4 py-3 text-sm text-gold-light" role="status">
                  Thank you — you are on the list.
                </p>
              ) : (
                <div className="mt-3 flex overflow-hidden rounded-full border border-white/15 bg-white/5 focus-within:border-gold/60">
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    value={newsletter}
                    onChange={(e) => setNewsletter(e.target.value)}
                    placeholder="Your email"
                    className="w-full bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none"
                  />
                  <button type="submit" className="shrink-0 bg-gold px-4 font-display text-xs font-bold text-ink transition-colors hover:bg-gold-light">
                    Join
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 md:flex-row md:items-center md:justify-between">
          <nav aria-label="Legal" className="flex flex-wrap gap-x-6 gap-y-2">
            {footerNav.legal.map((i) => (
              <Link key={i.href} to={i.href} className="text-xs text-white/50 transition-colors hover:text-gold">
                {i.label}
              </Link>
            ))}
          </nav>
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Fork & Founders — Dubai, United Arab Emirates. {site.url.replace('https://', '')}
          </p>
        </div>
      </div>
    </footer>
  )
}
