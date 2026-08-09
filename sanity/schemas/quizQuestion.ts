import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'quizQuestion',
  title: 'Quiz Question',
  type: 'document',
  fields: [
    defineField({ name: 'question', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'options', type: 'array', of: [{ type: 'object', fields: [
      { name: 'label', type: 'string' },
      { name: 'scores', type: 'array', of: [{ type: 'object', fields: [
        { name: 'solution', type: 'reference', to: [{ type: 'solution' }] },
        { name: 'points', type: 'number' },
      ] }] },
    ] }], validation: (r) => r.min(2) }),
    defineField({ name: 'sortOrder', type: 'number' }),
    defineField({ name: 'questionAr', type: 'string' }),
  ],
})
