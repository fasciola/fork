import { defineType, defineField } from 'sanity'

// HARD RULE: nothing in this model renders publicly unless `approved` is true
// AND `financialComparisonApproved` is true. Frontend must gate on both.
export default defineType({
  name: 'financialIllustration',
  title: 'Financial Illustration (GATED)',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'relatedSolution', type: 'reference', to: [{ type: 'solution' }] }),
    defineField({ name: 'figures', type: 'array', of: [{ type: 'object', fields: [
      { name: 'label', type: 'string' }, { name: 'valueAed', type: 'number' }, { name: 'note', type: 'string' },
    ] }] }),
    defineField({ name: 'assumptions', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'approved', type: 'boolean', initialValue: false,
      description: 'Client has approved these figures in writing.' }),
    defineField({ name: 'financialComparisonApproved', type: 'boolean', initialValue: false,
      description: 'Master switch for publishing ANY detailed financial comparison.' }),
    defineField({ name: 'approvedBy', type: 'string' }),
    defineField({ name: 'approvedAt', type: 'datetime' }),
    defineField({ name: 'internalNote', type: 'text', rows: 3,
      description: 'CMS-only. Known conflicts (e.g. AED 9,600 / AED 3,200 per-brand figures) are recorded here, never published.' }),
  ],
})
