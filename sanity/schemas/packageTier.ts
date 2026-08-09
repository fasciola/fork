import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'packageTier',
  title: 'Package Tier (Category 1)',
  type: 'document',
  fields: [
    defineField({ name: 'model', type: 'string', options: { list: ['monthly', 'annual', 'hybrid'] }, validation: (r) => r.required() }),
    defineField({ name: 'tierName', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'brandCount', type: 'number' }),
    defineField({ name: 'priceAed', type: 'number', validation: (r) => r.required().min(0) }),
    defineField({ name: 'priceUnit', type: 'string', description: 'e.g. "per month", "per brand/location per month"' }),
    defineField({ name: 'badge', type: 'string', description: 'e.g. "Most Popular", "Great Value"' }),
    defineField({ name: 'features', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'serviceFeeNote', type: 'text', rows: 2, description: 'Standard note: 5% of monthly net sales.' }),
    defineField({ name: 'cta', type: 'cta' }),
    defineField({ name: 'sortOrder', type: 'number' }),
    defineField({ name: 'published', type: 'boolean', initialValue: true }),
  ],
})
