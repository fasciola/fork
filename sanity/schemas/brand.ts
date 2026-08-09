import { defineType, defineField } from 'sanity'

// Portfolio entries publish ONLY when explicitly approved — the public page
// otherwise shows the designed "portfolio publishing in progress" state.
export default defineType({
  name: 'brand',
  title: 'Brand (Portfolio)',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'name' } }),
    defineField({ name: 'cuisine', type: 'string' }),
    defineField({ name: 'summary', type: 'text', rows: 3 }),
    defineField({ name: 'logo', type: 'reference', to: [{ type: 'imageAsset' }] }),
    defineField({ name: 'gallery', type: 'array', of: [{ type: 'reference', to: [{ type: 'imageAsset' }] }] }),
    defineField({ name: 'approvedForPublicDisplay', type: 'boolean', initialValue: false }),
    defineField({ name: 'internalNote', type: 'text', rows: 2, description: 'CMS-only placeholder text never renders publicly.' }),
  ],
})
