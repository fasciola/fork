import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'redirect',
  title: 'Redirect',
  type: 'document',
  fields: [
    defineField({ name: 'fromPath', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'toPath', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'permanent', type: 'boolean', initialValue: true }),
  ],
})
