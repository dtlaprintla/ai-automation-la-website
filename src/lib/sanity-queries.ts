// Sanity GROQ Queries for fetching website content
import { sanityClient } from './sanity'

// Get page by slug
export async function getPageBySlug(slug: string) {
  const query = `*[_type == "page" && slug.current == $slug][0]{
    title,
    slug,
    heroHeadline,
    heroDescription,
    heroImage,
    content,
    metaTitle,
    metaDescription,
    _updatedAt
  }`
  
  return await sanityClient.fetch(query, { slug })
}

// Get all pages for sitemap/navigation
export async function getAllPages() {
  const query = `*[_type == "page"]{
    title,
    "slug": slug.current,
    _updatedAt
  } | order(_updatedAt desc)`
  
  return await sanityClient.fetch(query)
}

// Get blog posts
export async function getBlogPosts(limit = 10) {
  const query = `*[_type == "post"] | order(publishedAt desc)[0...$limit]{
    title,
    "slug": slug.current,
    content,
    publishedAt,
    _updatedAt
  }`
  
  return await sanityClient.fetch(query, { limit })
}

// Get single blog post
export async function getBlogPost(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    slug,
    content,
    publishedAt,
    _updatedAt
  }`
  
  return await sanityClient.fetch(query, { slug })
}

// Get homepage content specifically
export async function getHomepageContent() {
  return await getPageBySlug('home')
}

// Get services page content
export async function getServicesContent() {
  return await getPageBySlug('services')
}

// Get pricing page content  
export async function getPricingContent() {
  return await getPageBySlug('pricing')
}

// Get contact page content
export async function getContactContent() {
  return await getPageBySlug('contact')
}

// Get about page content
export async function getAboutContent() {
  return await getPageBySlug('about')
}