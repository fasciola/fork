import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'imageAsset',
  title: 'Image Asset',
  type: 'document',
  fields: [
    defineField({ name: 'assetId', type: 'string', description: 'Matches id in src/data/image-manifest.ts' }),
    defineField({ name: 'image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'alt', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'altAr', type: 'string' }),
    defineField({ name: 'sourceType', type: 'string', options: { list: ['ai-generated', 'client-supplied', 'licensed-stock'] } }),
    defineField({ name: 'approvalStatus', type: 'string', options: { list: ['approved-internal', 'pending-client-review', 'pending-client-supply'] }, initialValue: 'pending-client-review' }),
    defineField({ name: 'licenseNote', type: 'string' }),
  ],
})
