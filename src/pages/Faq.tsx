import { useMemo, useState } from 'react'
import { PageLayout, PageHero } from '@/components/layout/PageLayout'
import { Reveal } from '@/components/shared/Reveal'
import { FinalCta } from '@/components/home/HomeSections3'
import { faqs } from '@/data/faq'
import { site } from '@/lib/site'

const categories = ['All', 'Model', 'Operations', 'Consultancy', 'Commercial', 'Partnerships'] as const

export default function Faq() {
  const [cat, setCat] = useState<(typeof categories)[number]>('All')
  const [open, setOpen] = useState<number | null>(0)
  const items = useMemo(() => (cat === 'All' ? faqs : faqs.filter((f) => f.category === cat)), [cat])

  return (
    <PageLayout
      title="FAQ — Honest Answers About Food Business Building | Fork & Founders"
      description={`${faqs.length} transparent answers about virtual brands, ownership, pricing, VAT, the 5% fee, consultancy, partnerships and guarantees.`}
      schema={[
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${site.url}/en/` },
            { '@type': 'ListItem', position: 2, name: 'FAQ' },
          ],
        },
      ]}
    >
      <PageHero
        eyebrow="Frequently Asked Questions"
        title="Honest Answers — Including the Uncomfortable Ones"
        copy="Ownership, money, timelines, guarantees. If a provider avoids these questions, that tells you something. We answer them directly."
      />

      <section className="section-pad" aria-label="FAQ list">
        <div className="container-ff">
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="FAQ categories">
            {categories.map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={cat === c}
                onClick={() => { setCat(c); setOpen(0) }}
                className={`rounded-full px-5 py-2.5 font-display text-sm font-semibold transition-all ${
                  cat === c ? 'bg-navy text-white' : 'border border-border text-muted-foreground hover:border-navy/40 hover:text-navy'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-3xl space-y-3">
            {items.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.02} y={10}>
                <div className="overflow-hidden rounded-2xl border border-border bg-white">
                  <button
                    type="button"
                    onClick={() => setOpen(open === i ? null : i)}
                    aria-expanded={open === i}
                    className="flex w-full items-center justify-between gap-4 p-5 text-start"
                  >
                    <span className="flex items-center gap-3">
                      <span className="hidden rounded-full bg-paleblue px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.1em] text-navy sm:inline">
                        {f.category}
                      </span>
                      <span className="font-display text-[0.95rem] font-semibold text-ink">{f.q}</span>
                    </span>
                    <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-bold transition-all duration-300 ${open === i ? 'rotate-45 bg-navy text-white' : 'bg-paleblue text-navy'}`} aria-hidden="true">
                      +
                    </span>
                  </button>
                  <div className={`grid transition-all duration-300 ${open === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                    <div className="overflow-hidden">
                      <p className="border-t border-border p-5 leading-relaxed text-muted-foreground">{f.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </PageLayout>
  )
}
