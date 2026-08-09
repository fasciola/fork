import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import { ArrowRight, Clock, Search } from 'lucide-react'
import { PageLayout, PageHero } from '@/components/layout/PageLayout'
import { Reveal } from '@/components/shared/Reveal'
import { FinalCta } from '@/components/home/HomeSections3'
import { articles, insightCategories } from '@/data/insights'
import { FF_EVENTS, trackEvent } from '@/lib/analytics'

export default function Insights() {
  const [category, setCategory] = useState<string>('all')
  const [query, setQuery] = useState('')

  const filtered = useMemo(
    () =>
      articles.filter(
        (a) =>
          (category === 'all' || a.category === category) &&
          (query.trim() === '' || a.title.toLowerCase().includes(query.toLowerCase()) || a.excerpt.toLowerCase().includes(query.toLowerCase())),
      ),
    [category, query],
  )

  return (
    <PageLayout
      title="Insights — UAE Food Business Knowledge Hub | Fork & Founders"
      description="Practical guidance on virtual food brands, cloud kitchens, menu engineering, delivery platforms, restaurant operations and food-business investment in the UAE."
    >
      <PageHero
        eyebrow="Insights"
        title="Practical Knowledge for Food Business Builders"
        copy="No hype, no invented market statistics — just operational knowledge from a team that builds and runs food businesses every day."
      />

      <section className="border-b border-border bg-white py-8" aria-label="Article filters">
        <div className="container-ff flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {['all', ...insightCategories.filter((c) => articles.some((a) => a.category === c))].map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`rounded-full px-4 py-2 font-display text-xs font-semibold transition-all duration-300 ${
                  category === c ? 'bg-navy text-white' : 'border border-border text-muted-foreground hover:border-navy/40 hover:text-navy'
                }`}
              >
                {c === 'all' ? 'All topics' : c}
              </button>
            ))}
          </div>
          <div className="relative w-full lg:w-72">
            <Search className="absolute start-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search insights…"
              aria-label="Search insights"
              className="w-full rounded-full border border-border py-2.5 pe-4 ps-11 text-sm focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/15"
            />
          </div>
        </div>
      </section>

      <section className="section-pad" aria-label="Articles">
        <div className="container-ff">
          {filtered.length === 0 ? (
            <div className="mx-auto max-w-md rounded-2xl border border-dashed border-navy/25 bg-white p-10 text-center">
              <p className="font-display text-lg font-semibold text-ink">No articles match your search</p>
              <p className="mt-2 text-sm text-muted-foreground">Try a different keyword or topic filter.</p>
              <button onClick={() => { setQuery(''); setCategory('all') }} className="btn-secondary-ff mt-5 !py-2.5 !text-xs">
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
              {filtered.map((a, i) => (
                <Reveal key={a.slug} delay={i * 0.06}>
                  <Link
                    to={`/insights/${a.slug}`}
                    onClick={() => trackEvent(FF_EVENTS.articleRead, { article: a.slug })}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-20px_rgba(7,29,73,0.3)]"
                  >
                    <div className="ff-img-frame aspect-[16/9] !rounded-none">
                      <img src={a.cover} alt={a.coverAlt} loading={i < 3 ? 'eager' : 'lazy'} width={1600} height={840} />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-center gap-3 text-[0.68rem] font-semibold">
                        <span className="rounded-full bg-paleblue px-2.5 py-1 text-navy">{a.category}</span>
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <Clock className="h-3 w-3" aria-hidden="true" /> {a.readingTime} min read
                        </span>
                      </div>
                      <h2 className="mt-3.5 font-display text-lg font-semibold leading-snug text-ink transition-colors group-hover:text-navy">
                        {a.title}
                      </h2>
                      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">{a.excerpt}</p>
                      <span className="mt-5 inline-flex items-center gap-2 font-display text-sm font-semibold text-navy">
                        Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180" aria-hidden="true" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <FinalCta />
    </PageLayout>
  )
}
