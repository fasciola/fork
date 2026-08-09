import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'formConfig',
  title: 'Conversion Form',
  type: 'document',
  fields: [
    defineField({ name: 'formId', type: 'string', description: 'e.g. consultation, managedBrand, menuAssessment, turnkey, operationalAssessment, partner' }),
    defineField({ name: 'title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'intro', type: 'text', rows: 3 }),
    defineField({ name: 'fields', type: 'array', of: [{ type: 'object', fields: [
      { name: 'name', type: 'string' },
      { name: 'label', type: 'string' },
      { name: 'fieldType', type: 'string', options: { list: ['text', 'email', 'tel', 'select', 'textarea', 'file', 'checkbox', 'radio'] } },
      { name: 'required', type: 'boolean', initialValue: false },
      { name: 'options', type: 'array', of: [{ type: 'string' }] },
      { name: 'placeholder', type: 'string' },
    ] }] }),
    defineField({ name: 'submitLabel', type: 'string' }),
    defineField({ name: 'successMessage', type: 'text', rows: 2 }),
    defineField({ name: 'crmTag', type: 'string', description: 'Odoo lead tag / team mapping' }),
    // Partnership forms: payment collection is forbidden — this flag must stay false.
    defineField({ name: 'collectsPayment', type: 'boolean', initialValue: false,
      validation: (r) => r.custom((v) => v === false || 'Online payment is prohibited on this website.') }),
  ],
})
