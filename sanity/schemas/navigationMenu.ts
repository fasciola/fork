import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'navigationMenu',
  title: 'Navigation Menu',
  type: 'document',
  fields: [
    defineField({ name: 'menuId', type: 'string', description: 'header | footer-solutions | footer-company | footer-resources' }),
    defineField({ name: 'items', type: 'array', of: [{ type: 'object', fields: [
      { name: 'label', type: 'string' }, { name: 'href', type: 'string' },
      { name: 'description', type: 'string' }, { name: 'icon', type: 'string' },
    ] }] }),
  ],
})
