import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'location',
  title: 'Location',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'address', type: 'text', rows: 3 }),
    defineField({ name: 'phone', type: 'string' }),
    defineField({ name: 'hours', type: 'string' }),
    defineField({ name: 'mapUrl', type: 'url' }),
    defineField({ name: 'image', type: 'reference', to: [{ type: 'imageAsset' }] }),
    // Never publish a location the business does not actually operate.
    defineField({ name: 'verifiedOperating', type: 'boolean', initialValue: false }),
    defineField({ name: 'published', type: 'boolean', initialValue: false }),
  ],
})
