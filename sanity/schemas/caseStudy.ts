import { defineType, defineField } from 'sanity'

// Case studies must never contain invented metrics. Every figure requires
// `evidenceOnFile` and client approval before publishing.
export default defineType({
  name: 'caseStudy',
  title: 'Case Study (GATED)',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'relatedBrand', type: 'reference', to: [{ type: 'brand' }] }),
    defineField({ name: 'challenge', type: 'text', rows: 4 }),
    defineField({ name: 'approach', type: 'text', rows: 4 }),
    defineField({ name: 'outcomes', type: 'array', of: [{ type: 'object', fields: [
      { name: 'metric', type: 'string' }, { name: 'value', type: 'string' },
      { name: 'evidenceOnFile', type: 'boolean', initialValue: false },
    ] }] }),
    defineField({ name: 'clientApproved', type: 'boolean', initialValue: false }),
    defineField({ name: 'published', type: 'boolean', initialValue: false }),
  ],
})
