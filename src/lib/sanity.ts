// Sanity CMS Configuration and Client
import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// Sanity configuration
export const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: '2024-01-01'
}

// Sanity client for data fetching
export const sanityClient = createClient(config)

// Image URL builder
const builder = imageUrlBuilder(sanityClient)

export const urlFor = (source: any) => builder.image(source)

// Helper functions for fetching content
export async function getPageContent(slug: string) {
  const query = `*[_type == "page" && slug.current == $slug][0]{
    title,
    slug,
    content,
    seo,
    hero,
    sections[]
  }`
  
  return await sanityClient.fetch(query, { slug })
}

export async function getAllPages() {
  const query = `*[_type == "page"]{
    title,
    slug,
    _createdAt
  } | order(_createdAt desc)`
  
  return await sanityClient.fetch(query)
}

export async function getBlogPosts() {
  const query = `*[_type == "post"]{
    title,
    slug,
    publishedAt,
    excerpt,
    author,
    mainImage
  } | order(publishedAt desc)`
  
  return await sanityClient.fetch(query)
}

// Content management utilities
export class SanityContentManager {
  static async updatePageContent(pageId: string, updates: any) {
    try {
      const result = await sanityClient
        .patch(pageId)
        .set(updates)
        .commit()
      
      return { success: true, result }
    } catch (error) {
      console.error('Failed to update content:', error)
      return { success: false, error }
    }
  }

  static async createPage(pageData: any) {
    try {
      const result = await sanityClient.create({
        _type: 'page',
        ...pageData
      })
      
      return { success: true, result }
    } catch (error) {
      console.error('Failed to create page:', error)
      return { success: false, error }
    }
  }
}