import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'pricingGlossaryTerm',
  title: 'Pricing Glossary Term',
  type: 'document',
  fields: [
    defineField({ name: 'term', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'definition', type: 'text', rows: 3 }),
    defineField({ name: 'termAr', type: 'string' }),
    defineField({ name: 'definitionAr', type: 'text', rows: 3 }),
  ],
})
