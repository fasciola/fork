import { defineType, defineField } from 'sanity'

export const seo = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    defineField({ name: 'title', type: 'string' }),
    defineField({ name: 'description', type: 'text', rows: 2 }),
    defineField({ name: 'ogImage', type: 'reference', to: [{ type: 'imageAsset' }] }),
  ],
})

export const cta = defineType({
  name: 'cta',
  title: 'Call to Action',
  type: 'object',
  fields: [
    defineField({ name: 'label', type: 'string' }),
    defineField({ name: 'href', type: 'string' }),
    defineField({ name: 'style', type: 'string', options: { list: ['primary', 'gold', 'ghost'] } }),
  ],
})

export const processStage = defineType({
  name: 'processStage',
  title: 'Process Stage',
  type: 'object',
  fields: [
    defineField({ name: 'title', type: 'string' }),
    defineField({ name: 'objective', type: 'text', rows: 2 }),
    defineField({ name: 'ffResponsibility', type: 'text', rows: 2 }),
    defineField({ name: 'clientResponsibility', type: 'text', rows: 2 }),
    defineField({ name: 'output', type: 'text', rows: 2 }),
  ],
})
