import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'solution',
  title: 'Solution',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'name' }, validation: (r) => r.required() }),
    defineField({ name: 'categoryId', type: 'number', description: 'Commercial category 1–6' }),
    defineField({ name: 'group', type: 'string', options: { list: ['launch', 'build', 'grow', 'partner'] } }),
    defineField({ name: 'kind', type: 'string', options: { list: ['service', 'partnership'] } }),
    defineField({ name: 'cardSummary', type: 'text', rows: 3 }),
    defineField({ name: 'h1', type: 'string' }),
    defineField({ name: 'intro', type: 'text', rows: 4 }),
    defineField({ name: 'idealFor', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'included', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'process', type: 'array', of: [{ type: 'object', fields: [
      { name: 'title', type: 'string' }, { name: 'items', type: 'array', of: [{ type: 'string' }] },
    ] }] }),
    defineField({ name: 'pricingNote', type: 'text', rows: 3, description: 'Never imply VAT inclusion; no guaranteed-return language.' }),
    defineField({ name: 'heroImage', type: 'reference', to: [{ type: 'imageAsset' }] }),
    defineField({ name: 'heroImageMobile', type: 'reference', to: [{ type: 'imageAsset' }] }),
    defineField({ name: 'primaryCta', type: 'cta' }),
    defineField({ name: 'secondaryCta', type: 'cta' }),
    defineField({ name: 'seo', type: 'seo' }),
    // Arabic content phase
    defineField({ name: 'nameAr', type: 'string' }),
    defineField({ name: 'introAr', type: 'text', rows: 4 }),
    defineField({ name: 'published', type: 'boolean', initialValue: true }),
  ],
})
