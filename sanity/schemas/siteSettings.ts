import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'siteName', type: 'string' }),
    defineField({ name: 'tagline', type: 'string' }),
    defineField({ name: 'phone', type: 'string' }),
    defineField({ name: 'whatsapp', type: 'string' }),
    defineField({ name: 'email', type: 'string' }),
    defineField({ name: 'officeAddress', type: 'text', rows: 2 }),
    defineField({ name: 'defaultOgImage', type: 'reference', to: [{ type: 'imageAsset' }] }),
    defineField({ name: 'navigation', type: 'array', of: [{ type: 'object', fields: [
      { name: 'label', type: 'string' }, { name: 'href', type: 'string' },
    ] }] }),
  ],
})
