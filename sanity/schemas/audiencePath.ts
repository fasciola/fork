import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'audiencePath',
  title: 'Audience Path (Who We Work With)',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'description', type: 'text', rows: 2 }),
    defineField({ name: 'recommendedSolution', type: 'reference', to: [{ type: 'solution' }] }),
    defineField({ name: 'sortOrder', type: 'number' }),
  ],
})
