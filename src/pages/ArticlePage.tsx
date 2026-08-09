import { Link, Navigate, useParams } from 'react-router'
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react'
import { PageLayout } from '@/components/layout/PageLayout'
import { Reveal } from '@/components/shared/Reveal'
import { FinalCta } from '@/components/home/HomeSections3'
import { articles } from '@/data/insights'
import { site } from '@/lib/site'

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>()
  const article = articles.find((a) => a.slug === slug)
  if (!article) return <Navigate to="/insights" replace />

  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3)
  const toc = article.body.filter((b) => b.heading)

  return (
    <PageLayout
      title={`${article.title} | Fork & Founders Insights`}
      description={article.excerpt}
      schema={[
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: article.title,
          description: article.excerpt,
          datePublished: article.date,
          author: { '@type': 'Organization', name: article.author.name },
          publisher: { '@type': 'Organization', name: site.name, url: site.url },
          image: `${site.url}${article.cover.replace('.webp', '.webp')}`,
          inLanguage: 'en',
        },
      ]}
    >
      <article>
        <header className="relative overflow-hidden bg-navy-deep">
          <div className="absolute inset-0">
            <img src={article.cover} alt="" aria-hidden="true" className="h-full w-full object-cover opacity-40" width={1600} height={840} />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/80 to-navy-deep/50" />
          </div>
          <div className="container-ff relative py-24 sm:py-28">
            <Link to="/insights" className="inline-flex items-center gap-2 text-xs font-semibold text-white/60 transition-colors hover:text-gold">
              <ArrowLeft className="h-3.5 w-3.5 rtl:rotate-180" aria-hidden="true" /> All insights
            </Link>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-semibold">
              <span className="rounded-full bg-gold/20 px-3 py-1 text-gold-light">{article.category}</span>
              <span className="flex items-center gap-1.5 text-white/55">
                <Clock className="h-3.5 w-3.5" aria-hidden="true" /> {article.readingTime} min read
              </span>
              <span className="text-white/45">{new Date(article.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            </div>
            <h1 className="mt-5 max-w-3xl text-balance font-display text-3xl font-bold leading-[1.12] text-white sm:text-4xl">
              {article.title}
            </h1>
            <p className="mt-4 text-sm text-white/55">
              By {article.author.name} · {article.author.role}
            </p>
          </div>
        </header>

        <div className="container-ff grid gap-14 py-16 lg:grid-cols-[1fr_16rem] lg:py-20">
          <div className="max-w-2xl">
            <p className="text-xl leading-relaxed text-ink/80">{article.excerpt}</p>
            {article.body.map((block, i) => (
              <Reveal key={i} className="mt-9">
                {block.heading && (
                  <h2 id={`section-${i}`} className="font-display text-2xl font-semibold text-ink">
                    {block.heading}
                  </h2>
                )}
                {block.paragraphs.map((p, j) => (
                  <p key={j} className="mt-4 leading-[1.85] text-muted-foreground">{p}</p>
                ))}
              </Reveal>
            ))}
            <div className="mt-12 rounded-2xl bg-paleblue/60 p-7">
              <p className="font-display text-base font-semibold text-navy">Build this with Fork &amp; Founders</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">
                Everything in this article reflects how we actually work. If you are planning a food brand, kitchen or
                portfolio in the UAE, we can walk you through the process for your specific concept.
              </p>
              <Link to="/book-a-consultation" className="btn-primary-ff mt-5 !py-3 !text-xs">Book a Consultation</Link>
            </div>
          </div>

          {toc.length > 0 && (
            <aside className="hidden lg:block" aria-label="Table of contents">
              <div className="sticky top-28 rounded-2xl border border-border bg-white p-6">
                <p className="font-display text-xs font-bold uppercase tracking-[0.16em] text-navy">In this article</p>
                <ul className="mt-4 space-y-2.5">
                  {toc.map((b) => {
                    const i = article.body.indexOf(b)
                    return (
                      <li key={b.heading}>
                        <a href={`#section-${i}`} className="text-sm text-muted-foreground transition-colors hover:text-navy">
                          {b.heading}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </aside>
          )}
        </div>
      </article>

      <section className="border-t border-border bg-softgrey/60 py-16" aria-labelledby="related-heading">
        <div className="container-ff">
          <h2 id="related-heading" className="font-display text-2xl font-semibold text-ink">Related insights</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {related.map((a) => (
              <Link key={a.slug} to={`/insights/${a.slug}`} className="card-ff card-ff-hover group flex h-full flex-col">
                <span className="text-[0.68rem] font-semibold text-gold-dark">{a.category}</span>
                <h3 className="mt-2 flex-1 font-display text-base font-semibold leading-snug text-ink group-hover:text-navy">{a.title}</h3>
                <span className="mt-4 inline-flex items-center gap-2 font-display text-xs font-bold text-navy">
                  Read <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </PageLayout>
  )
}
