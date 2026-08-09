import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'partnershipProgram',
  title: 'Partnership Program',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'relatedSolution', type: 'reference', to: [{ type: 'solution' }] }),
    defineField({ name: 'investmentAed', type: 'number' }),
    defineField({ name: 'brandCount', type: 'number' }),
    defineField({ name: 'termYears', type: 'number' }),
    defineField({ name: 'includedTerms', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'disclaimer', type: 'text', rows: 4,
      description: 'Commercial and performance disclaimer shown wherever the program appears.' }),
    // Financial projections live in financialIllustration and stay gated.
    defineField({ name: 'illustrations', type: 'array', of: [{ type: 'reference', to: [{ type: 'financialIllustration' }] }] }),
  ],
})
