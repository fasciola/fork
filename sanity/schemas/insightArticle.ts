import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'insightArticle',
  title: 'Insight Article',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' }, validation: (r) => r.required() }),
    defineField({ name: 'category', type: 'reference', to: [{ type: 'insightCategory' }] }),
    defineField({ name: 'excerpt', type: 'text', rows: 3 }),
    defineField({ name: 'body', type: 'array', of: [{ type: 'block' }, { type: 'image' }] }),
    defineField({ name: 'coverImage', type: 'reference', to: [{ type: 'imageAsset' }] }),
    defineField({ name: 'titleAr', type: 'string' }),
    defineField({ name: 'bodyAr', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'seo', type: 'seo' }),
    defineField({ name: 'publishedAt', type: 'datetime' }),
    defineField({ name: 'published', type: 'boolean', initialValue: false }),
  ],
})
