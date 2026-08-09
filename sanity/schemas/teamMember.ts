import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'role', type: 'string' }),
    defineField({ name: 'bio', type: 'text', rows: 4 }),
    defineField({ name: 'photo', type: 'reference', to: [{ type: 'imageAsset' }] }),
    defineField({ name: 'published', type: 'boolean', initialValue: false,
      description: 'About page shows a designed pending state until real members publish.' }),
  ],
})
