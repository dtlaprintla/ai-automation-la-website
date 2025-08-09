// Sanity Schemas for Content Sections
import { defineType, defineField } from 'sanity'

// Services Section Schema
export const servicesSection = defineType({
  name: 'servicesSection',
  title: 'Services Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string'
    }),
    defineField({
      name: 'subtitle', 
      title: 'Section Subtitle',
      type: 'string'
    }),
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'name', title: 'Service Name', type: 'string' },
          { name: 'description', title: 'Description', type: 'text' },
          { name: 'icon', title: 'Icon', type: 'string' },
          { name: 'features', title: 'Features', type: 'array', of: [{ type: 'string' }] },
          { name: 'image', title: 'Service Image', type: 'image' }
        ]
      }]
    })
  ]
})

// Stats Section Schema
export const statsSection = defineType({
  name: 'statsSection',
  title: 'Stats Section', 
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string'
    }),
    defineField({
      name: 'stats',
      title: 'Statistics',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'number', title: 'Statistic Number', type: 'string' },
          { name: 'label', title: 'Label', type: 'string' },
          { name: 'description', title: 'Description', type: 'string' }
        ]
      }]
    })
  ]
})

// Testimonials Section Schema
export const testimonialsSection = defineType({
  name: 'testimonialsSection',
  title: 'Testimonials Section',
  type: 'object', 
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string'
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'quote', title: 'Quote', type: 'text' },
          { name: 'author', title: 'Author Name', type: 'string' },
          { name: 'business', title: 'Business Name', type: 'string' },
          { name: 'avatar', title: 'Author Photo', type: 'image' },
          { name: 'rating', title: 'Rating (1-5)', type: 'number', validation: rule => rule.min(1).max(5) }
        ]
      }]
    })
  ]
})

// CTA Section Schema
export const ctaSection = defineType({
  name: 'ctaSection',
  title: 'Call to Action Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'CTA Title',
      type: 'string'
    }),
    defineField({
      name: 'subtitle',
      title: 'CTA Subtitle', 
      type: 'string'
    }),
    defineField({
      name: 'primaryButton',
      title: 'Primary Button',
      type: 'object',
      fields: [
        { name: 'text', title: 'Button Text', type: 'string' },
        { name: 'link', title: 'Button Link', type: 'string' }
      ]
    }),
    defineField({
      name: 'secondaryButton',
      title: 'Secondary Button', 
      type: 'object',
      fields: [
        { name: 'text', title: 'Button Text', type: 'string' },
        { name: 'link', title: 'Button Link', type: 'string' }
      ]
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image'
    }),
    defineField({
      name: 'guarantee',
      title: 'Guarantee Text',
      type: 'string'
    })
  ]
})

// Content Block Schema
export const contentBlock = defineType({
  name: 'contentBlock',
  title: 'Content Block',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Block Title',
      type: 'string'
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'block' },
        { 
          type: 'image',
          options: { hotspot: true }
        }
      ]
    })
  ]
})