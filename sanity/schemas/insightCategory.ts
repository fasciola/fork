import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'insightCategory',
  title: 'Insight Category',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'name' } }),
    defineField({ name: 'nameAr', type: 'string' }),
  ],
})
