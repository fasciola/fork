import { useEffect, useRef, useState } from 'react'
import { CheckCircle2, FileUp, Loader2, ShieldCheck, X } from 'lucide-react'
import type { FormConfig } from '@/data/forms'
import { submitLead } from '@/lib/crm'
import { FF_EVENTS, trackEvent } from '@/lib/analytics'

interface LeadFormProps {
  config: FormConfig
}

export function LeadForm({ config }: LeadFormProps) {
  const [values, setValues] = useState<Record<string, string>>({})
  const [files, setFiles] = useState<File[]>([])
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [reference, setReference] = useState('')
  const startedRef = useRef(false)
  const submittedRef = useRef(false)

  // Track form start / abandonment
  useEffect(() => {
    return () => {
      if (startedRef.current && !submittedRef.current) {
        trackEvent(FF_EVENTS.formAbandoned, { form: config.id })
      }
    }
  }, [config.id])

  const markStarted = () => {
    if (!startedRef.current) {
      startedRef.current = true
      trackEvent(FF_EVENTS.formStarted, { form: config.id })
    }
  }

  const setValue = (name: string, value: string) => {
    markStarted()
    setValues((v) => ({ ...v, [name]: value }))
    setErrors((e) => ({ ...e, [name]: '' }))
  }

  const validate = () => {
    const next: Record<string, string> = {}
    config.fields.forEach((f) => {
      const v = values[f.name]?.trim() ?? ''
      if (f.required && !v && f.type !== 'checkbox') next[f.name] = 'This field is required.'
      if (f.required && f.type === 'checkbox' && !values[f.name]) next[f.name] = 'Please confirm to continue.'
      if (f.type === 'email' && v && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) next[f.name] = 'Enter a valid email address.'
      if (f.type === 'tel' && v && !/^[+0-9][0-9\s-]{6,}$/.test(v)) next[f.name] = 'Enter a valid telephone number.'
    })
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) {
      trackEvent(FF_EVENTS.formAbandoned, { form: config.id, reason: 'validation' })
      return
    }
    setStatus('submitting')
    try {
      const params = new URLSearchParams(window.location.search)
      const result = await submitLead({
        formId: config.id,
        categoryTag: config.categoryTag,
        values,
        files: files.map((f) => ({ name: f.name, size: f.size })),
        meta: {
          pageUrl: window.location.pathname,
          utmSource: params.get('utm_source') ?? undefined,
          utmMedium: params.get('utm_medium') ?? undefined,
          utmCampaign: params.get('utm_campaign') ?? undefined,
          consentTimestamp: new Date().toISOString(),
        },
      })
      submittedRef.current = true
      setReference(result.reference)
      setStatus('success')
      trackEvent(config.event, { form: config.id, category: config.categoryTag, reference: result.reference })
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="card-ff border-gold/40 bg-paleblue/40 p-10 text-center" role="status">
        <CheckCircle2 className="mx-auto h-12 w-12 text-gold" aria-hidden="true" />
        <h3 className="mt-5 font-display text-2xl font-semibold text-navy-deep">{config.successTitle}</h3>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">{config.successBody}</p>
        <p className="mt-5 inline-block rounded-full bg-white px-4 py-2 font-mono text-xs text-navy">
          Reference: {reference}
        </p>
      </div>
    )
  }

  const inputCls = (name: string) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink placeholder:text-muted-foreground/60 transition-colors focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/15 ${
      errors[name] ? 'border-destructive' : 'border-input'
    }`

  return (
    <form onSubmit={onSubmit} noValidate className="card-ff space-y-5 !p-7 sm:!p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        {config.fields.map((f) => {
          const span = f.type === 'textarea' || f.type === 'file' || f.type === 'checkbox' ? 'sm:col-span-2' : ''
          return (
            <div key={f.name} className={span}>
              {f.type === 'checkbox' ? (
                <div>
                  <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-input bg-softgrey/60 p-4">
                    <input
                      type="checkbox"
                      checked={!!values[f.name]}
                      onChange={(e) => setValue(f.name, e.target.checked ? 'yes' : '')}
                      className="mt-0.5 h-4.5 w-4.5 shrink-0 accent-navy"
                      aria-describedby={errors[f.name] ? `${f.name}-error` : undefined}
                    />
                    <span className="text-xs leading-relaxed text-ink/80">{f.label}</span>
                  </label>
                  {errors[f.name] && <p id={`${f.name}-error`} role="alert" className="mt-1.5 text-xs font-semibold text-destructive">{errors[f.name]}</p>}
                </div>
              ) : f.type === 'radio' ? (
                <fieldset>
                  <legend className="mb-2 font-display text-xs font-semibold uppercase tracking-[0.12em] text-ink/70">
                    {f.label} {f.required && <span className="text-gold">*</span>}
                  </legend>
                  <div className="flex flex-wrap gap-2">
                    {f.options?.map((o) => (
                      <label
                        key={o}
                        className={`cursor-pointer rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${
                          values[f.name] === o ? 'border-navy bg-navy text-white' : 'border-input bg-white text-ink/70 hover:border-navy/40'
                        }`}
                      >
                        <input type="radio" name={f.name} value={o} checked={values[f.name] === o} onChange={(e) => setValue(f.name, e.target.value)} className="sr-only" />
                        {o}
                      </label>
                    ))}
                  </div>
                  {errors[f.name] && <p role="alert" className="mt-1.5 text-xs font-semibold text-destructive">{errors[f.name]}</p>}
                </fieldset>
              ) : (
                <>
                  <label htmlFor={f.name} className="mb-2 block font-display text-xs font-semibold uppercase tracking-[0.12em] text-ink/70">
                    {f.label} {f.required && <span className="text-gold">*</span>}
                  </label>
                  {f.type === 'select' ? (
                    <select id={f.name} value={values[f.name] ?? ''} onChange={(e) => setValue(f.name, e.target.value)} className={inputCls(f.name)} aria-invalid={!!errors[f.name]}>
                      <option value="">Select…</option>
                      {f.options?.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  ) : f.type === 'textarea' ? (
                    <textarea id={f.name} rows={4} value={values[f.name] ?? ''} placeholder={f.placeholder} onChange={(e) => setValue(f.name, e.target.value)} className={inputCls(f.name)} aria-invalid={!!errors[f.name]} />
                  ) : f.type === 'file' ? (
                    <div>
                      <label
                        htmlFor={f.name}
                        className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-input bg-softgrey/50 px-6 py-8 text-center transition-colors hover:border-navy/40 hover:bg-paleblue/40"
                      >
                        <FileUp className="h-6 w-6 text-navy" aria-hidden="true" />
                        <span className="text-sm font-semibold text-navy">Choose files or drag them here</span>
                        {f.hint && <span className="text-xs text-muted-foreground">{f.hint}</span>}
                        <input
                          id={f.name}
                          type="file"
                          multiple
                          accept={f.accept}
                          className="sr-only"
                          onChange={(e) => {
                            markStarted()
                            const list = Array.from(e.target.files ?? []).slice(0, 5)
                            setFiles(list)
                            trackEvent(FF_EVENTS.menuUploaded, { form: config.id, count: list.length })
                          }}
                        />
                      </label>
                      {files.length > 0 && (
                        <ul className="mt-3 space-y-2">
                          {files.map((file, i) => (
                            <li key={i} className="flex items-center justify-between rounded-lg bg-softgrey px-3.5 py-2.5 text-xs font-medium text-ink">
                              <span className="truncate">{file.name} <span className="text-muted-foreground">({(file.size / 1024).toFixed(0)} KB)</span></span>
                              <button type="button" onClick={() => setFiles((fl) => fl.filter((_, j) => j !== i))} aria-label={`Remove ${file.name}`} className="ms-2 text-muted-foreground hover:text-destructive">
                                <X className="h-3.5 w-3.5" aria-hidden="true" />
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <input
                      id={f.name}
                      type={f.type}
                      value={values[f.name] ?? ''}
                      placeholder={f.placeholder}
                      onChange={(e) => setValue(f.name, e.target.value)}
                      className={inputCls(f.name)}
                      aria-invalid={!!errors[f.name]}
                      autoComplete={f.type === 'email' ? 'email' : f.type === 'tel' ? 'tel' : f.name === 'name' ? 'name' : 'off'}
                    />
                  )}
                  {errors[f.name] && <p role="alert" className="mt-1.5 text-xs font-semibold text-destructive">{errors[f.name]}</p>}
                </>
              )}
            </div>
          )
        })}
      </div>

      {config.disclaimer && <p className="rounded-xl bg-softgrey p-4 text-xs leading-relaxed text-muted-foreground">{config.disclaimer}</p>}

      <div className="flex items-start gap-2.5 text-[0.7rem] leading-relaxed text-muted-foreground">
        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-navy" aria-hidden="true" />
        <p>
          Protected by Cloudflare Turnstile in production. Your details are transmitted securely, tagged with the
          relevant service category and routed to the Fork & Founders team through our CRM. We never share your data.
        </p>
      </div>

      {status === 'error' && (
        <p role="alert" className="rounded-xl border border-destructive/30 bg-destructive/5 p-4 text-sm font-semibold text-destructive">
          Something went wrong. Please try again or contact us directly at +971 58 191 3320.
        </p>
      )}

      <button type="submit" disabled={status === 'submitting'} className="btn-primary-ff w-full disabled:opacity-60">
        {status === 'submitting' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> Submitting…
          </>
        ) : (
          config.submitLabel
        )}
      </button>
    </form>
  )
}
