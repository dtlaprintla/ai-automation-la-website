// Sanity Schema for Page Content Management
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'page',
  title: 'Pages',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: rule => rule.required()
    }),
    
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: rule => rule.required()
    }),

    // SEO Fields
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
          validation: rule => rule.max(60)
        },
        {
          name: 'metaDescription', 
          title: 'Meta Description',
          type: 'text',
          validation: rule => rule.max(160)
        },
        {
          name: 'keywords',
          title: 'Keywords',
          type: 'array',
          of: [{ type: 'string' }]
        },
        {
          name: 'ogImage',
          title: 'Social Share Image',
          type: 'image'
        }
      ]
    }),

    // Hero Section
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {
          name: 'badge',
          title: 'Badge Text',
          type: 'string'
        },
        {
          name: 'headline',
          title: 'Main Headline',
          type: 'string',
          validation: rule => rule.required()
        },
        {
          name: 'subheadline',
          title: 'Subheadline',
          type: 'string'
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text'
        },
        {
          name: 'primaryCTA',
          title: 'Primary CTA',
          type: 'object',
          fields: [
            { name: 'text', title: 'Button Text', type: 'string' },
            { name: 'link', title: 'Button Link', type: 'string' }
          ]
        },
        {
          name: 'secondaryCTA',
          title: 'Secondary CTA',
          type: 'object',
          fields: [
            { name: 'text', title: 'Button Text', type: 'string' },
            { name: 'link', title: 'Button Link', type: 'string' }
          ]
        },
        {
          name: 'heroImage',
          title: 'Hero Image',
          type: 'image',
          options: {
            hotspot: true
          }
        },
        {
          name: 'features',
          title: 'Feature List',
          type: 'array',
          of: [{ type: 'string' }]
        }
      ]
    }),

    // Content Sections
    defineField({
      name: 'sections',
      title: 'Page Sections',
      type: 'array',
      of: [
        { type: 'servicesSection' },
        { type: 'statsSection' },
        { type: 'testimonialsSection' },
        { type: 'ctaSection' },
        { type: 'contentBlock' }
      ]
    })
  ],

  preview: {
    select: {
      title: 'title',
      slug: 'slug.current'
    },
    prepare(selection) {
      const { title, slug } = selection
      return {
        title,
        subtitle: `/${slug}`
      }
    }
  }
})