import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import { ArrowLeft, ArrowRight, RotateCcw } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { quizQuestions, quizReasons, scoreQuiz } from '@/data/quiz'
import { solutionBySlug } from '@/data/solutions'
import { FF_EVENTS, trackEvent } from '@/lib/analytics'

export function PathQuiz({ embedded = false }: { embedded?: boolean }) {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [done, setDone] = useState(false)

  const q = quizQuestions[step]
  const progress = Math.round((Object.keys(answers).length / quizQuestions.length) * 100)

  const results = useMemo(() => (done ? scoreQuiz(answers).slice(0, 2) : []), [done, answers])

  const choose = (label: string) => {
    trackEvent(FF_EVENTS.quizStarted, { question: q.id })
    const next = { ...answers, [q.id]: label }
    setAnswers(next)
    if (step < quizQuestions.length - 1) {
      setStep(step + 1)
    } else {
      setDone(true)
      trackEvent(FF_EVENTS.quizCompleted, next)
    }
  }

  const reset = () => {
    setAnswers({})
    setStep(0)
    setDone(false)
  }

  return (
    <div className={embedded ? '' : 'card-ff overflow-hidden !p-0'}>
      {/* progress */}
      <div className={embedded ? '' : 'border-b border-border px-7 pt-7 sm:px-10'}>
        <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground">
          <span>{done ? 'Your recommendation' : `Question ${step + 1} of ${quizQuestions.length}`}</span>
          <span>{progress}%</span>
        </div>
        <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-softgrey" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
          <div className="h-full rounded-full bg-gradient-to-r from-navy to-gold transition-all duration-500" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className={embedded ? 'mt-8' : 'p-7 sm:p-10'}>
        <AnimatePresence mode="wait">
          {!done ? (
            <motion.div
              key={q.id}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">{q.question}</h3>
              <div className="mt-6 grid gap-3">
                {q.options.map((o) => (
                  <button
                    key={o.label}
                    type="button"
                    data-quiz-option
                    onClick={() => choose(o.label)}
                    className={`group flex items-center justify-between rounded-2xl border px-5 py-4 text-start font-medium transition-all duration-200 ${
                      answers[q.id] === o.label
                        ? 'border-navy bg-navy text-white'
                        : 'border-input bg-white text-ink/80 hover:border-navy/40 hover:bg-paleblue/50'
                    }`}
                  >
                    <span className="text-sm sm:text-[0.95rem]">{o.label}</span>
                    <ArrowRight className="h-4 w-4 shrink-0 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100 rtl:rotate-180" aria-hidden="true" />
                  </button>
                ))}
              </div>
              {step > 0 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground transition-colors hover:text-navy"
                >
                  <ArrowLeft className="h-3.5 w-3.5 rtl:rotate-180" aria-hidden="true" /> Previous question
                </button>
              )}
            </motion.div>
          ) : (
            <motion.div key="result" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <p className="eyebrow-navy">Recommended for you</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {results.map(({ slug }, i) => {
                  const sol = solutionBySlug(slug)
                  if (!sol) return null
                  return (
                    <div key={slug} className={`rounded-2xl border p-6 ${i === 0 ? 'border-navy bg-paleblue/50' : 'border-border bg-white'}`}>
                      {i === 0 && <span className="mb-3 inline-block rounded-full bg-navy px-3 py-1 font-display text-[0.65rem] font-bold uppercase tracking-[0.14em] text-white">Best match</span>}
                      <h4 className="font-display text-lg font-semibold leading-snug text-navy-deep">{sol.name}</h4>
                      <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{quizReasons[slug]}</p>
                      <Link to={`/solutions/${sol.slug}`} className="link-underline mt-4 inline-block text-sm">
                        Explore this solution
                      </Link>
                    </div>
                  )
                })}
              </div>
              <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
                This recommendation is guidance, not commercial approval or a binding offer. Your answers are shared
                with our team so your consultation starts from context.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/book-a-consultation" className="btn-primary-ff">Book a Consultation</Link>
                <button type="button" onClick={reset} className="btn-secondary-ff">
                  <RotateCcw className="h-4 w-4" aria-hidden="true" /> Start over
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
