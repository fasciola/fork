import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'legalPage',
  title: 'Legal Page',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'body', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'legalReviewStatus', type: 'string',
      options: { list: ['pending-legal-review', 'approved'] }, initialValue: 'pending-legal-review',
      description: 'Pages display the pending-review banner until approved.' }),
    defineField({ name: 'reviewedBy', type: 'string' }),
    defineField({ name: 'reviewedAt', type: 'datetime' }),
  ],
})
