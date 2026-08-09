import { defineType, defineField } from 'sanity'

// Generic page for editorial landing pages beyond the core routes.
export default defineType({
  name: 'page',
  title: 'Generic Page',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'body', type: 'array', of: [{ type: 'block' }, { type: 'image' }] }),
    defineField({ name: 'seo', type: 'seo' }),
    defineField({ name: 'published', type: 'boolean', initialValue: false }),
  ],
})
