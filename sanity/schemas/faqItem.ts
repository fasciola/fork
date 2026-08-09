import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'faqItem',
  title: 'FAQ Item',
  type: 'document',
  fields: [
    defineField({ name: 'question', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'answer', type: 'text', rows: 5, validation: (r) => r.required() }),
    defineField({ name: 'category', type: 'string', options: { list: ['model', 'operations', 'consultancy', 'commercial', 'partnerships'] } }),
    defineField({ name: 'questionAr', type: 'string' }),
    defineField({ name: 'answerAr', type: 'text', rows: 5 }),
    defineField({ name: 'sortOrder', type: 'number' }),
    defineField({ name: 'published', type: 'boolean', initialValue: true }),
  ],
})
