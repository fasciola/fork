import { defineType, defineField } from 'sanity'

// Nine-stage onboarding journey (How It Works) — mirrors src/data/capabilities.ts
export default defineType({
  name: 'journeyStep',
  title: 'Journey Stage (9-Stage Process)',
  type: 'document',
  fields: [
    defineField({ name: 'stageNumber', type: 'number', validation: (r) => r.required().min(1).max(9) }),
    defineField({ name: 'title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'objective', type: 'text', rows: 2 }),
    defineField({ name: 'ffResponsibility', type: 'text', rows: 2 }),
    defineField({ name: 'clientResponsibility', type: 'text', rows: 2 }),
    defineField({ name: 'output', type: 'text', rows: 2 }),
  ],
})
