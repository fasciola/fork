/**
 * Odoo CRM integration adapter.
 *
 * Production architecture (documented in /docs/integrations.md):
 *   form → API route (server) → Odoo XML-RPC/JSON lead creation
 *   - Server-only credentials: ODOO_URL, ODOO_DB, ODOO_USERNAME, ODOO_API_KEY
 *   - Lead payload: contact, company, country, category tag, lead source,
 *     UTM params, form answers, uploaded-file reference, page URL,
 *     preferred consultation date, investment range, consent timestamp.
 *   - Tags: Category 1–6, High Priority, Menu Uploaded, Existing Restaurant,
 *     Investor, International Lead, Arabic Lead, Consultation Booked.
 *
 * In this environment no Odoo credentials exist, so the adapter stores
 * submissions locally and logs them — the contract is identical, so wiring
 * the real endpoint requires no component changes.
 */

export interface LeadPayload {
  formId: string
  categoryTag: string
  values: Record<string, unknown>
  files?: { name: string; size: number }[]
  meta: {
    pageUrl: string
    utmSource?: string
    utmMedium?: string
    utmCampaign?: string
    consentTimestamp: string
  }
}

export interface LeadResult {
  ok: boolean
  reference: string
}

export async function submitLead(payload: LeadPayload): Promise<LeadResult> {
  const reference = `FF-${Date.now().toString(36).toUpperCase()}`
  const endpoint = import.meta.env.VITE_LEAD_ENDPOINT as string | undefined

  if (endpoint) {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...payload, reference }),
    })
    if (!res.ok) throw new Error(`Lead submission failed (${res.status})`)
    return { ok: true, reference }
  }

  // Local persistence (dev/preview): QA can verify the full journey.
  const existing = JSON.parse(localStorage.getItem('ff_leads') ?? '[]') as unknown[]
  existing.push({ ...payload, reference, files: payload.files?.map((f) => f.name) })
  localStorage.setItem('ff_leads', JSON.stringify(existing))
  if (import.meta.env.DEV) console.debug('[crm adapter] lead stored', reference, payload)
  await new Promise((r) => setTimeout(r, 650))
  return { ok: true, reference }
}
