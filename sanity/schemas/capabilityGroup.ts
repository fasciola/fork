import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'capabilityGroup',
  title: 'Capability Group',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'icon', type: 'string' }),
    defineField({ name: 'items', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'sortOrder', type: 'number' }),
  ],
})
