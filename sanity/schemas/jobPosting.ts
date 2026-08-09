import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'jobPosting',
  title: 'Job Posting',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'department', type: 'string' }),
    defineField({ name: 'location', type: 'string' }),
    defineField({ name: 'employmentType', type: 'string' }),
    defineField({ name: 'description', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'applicationEmail', type: 'string' }),
    defineField({ name: 'published', type: 'boolean', initialValue: false }),
  ],
})
