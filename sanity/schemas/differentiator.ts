import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'differentiator',
  title: 'Differentiator (Why Fork & Founders)',
  type: 'document',
  fields: [
    defineField({ name: 'label', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'description', type: 'text', rows: 2 }),
    defineField({ name: 'sortOrder', type: 'number' }),
  ],
})
