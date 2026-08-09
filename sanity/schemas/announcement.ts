import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'announcement',
  title: 'Announcement Bar',
  type: 'document',
  fields: [
    defineField({ name: 'enabled', type: 'boolean', initialValue: false }),
    defineField({ name: 'message', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'linkLabel', type: 'string' }),
    defineField({ name: 'linkHref', type: 'string' }),
    defineField({ name: 'startsAt', type: 'datetime' }),
    defineField({ name: 'endsAt', type: 'datetime' }),
    defineField({ name: 'messageAr', type: 'string' }),
  ],
})
