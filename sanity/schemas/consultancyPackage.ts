import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'consultancyPackage',
  title: 'Consultancy Package (Cat 2–4)',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'categoryId', type: 'number' }),
    defineField({ name: 'priceFromAed', type: 'number' }),
    defineField({ name: 'priceNote', type: 'text', rows: 3 }),
    defineField({ name: 'scopeSummary', type: 'text', rows: 4 }),
    defineField({ name: 'cta', type: 'cta' }),
    defineField({ name: 'published', type: 'boolean', initialValue: true }),
  ],
})
