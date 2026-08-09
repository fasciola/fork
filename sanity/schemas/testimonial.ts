import { defineType, defineField } from 'sanity'

// GATED: testimonials publish only with written client approval AND evidence.
// The current website ships with zero testimonials by design.
export default defineType({
  name: 'testimonial',
  title: 'Testimonial (GATED)',
  type: 'document',
  fields: [
    defineField({ name: 'quote', type: 'text', rows: 4, validation: (r) => r.required() }),
    defineField({ name: 'authorName', type: 'string' }),
    defineField({ name: 'authorRole', type: 'string' }),
    defineField({ name: 'relatedBrand', type: 'reference', to: [{ type: 'brand' }] }),
    defineField({ name: 'evidenceOnFile', type: 'boolean', initialValue: false }),
    defineField({ name: 'clientApproved', type: 'boolean', initialValue: false }),
    defineField({ name: 'published', type: 'boolean', initialValue: false }),
  ],
})
