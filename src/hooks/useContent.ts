// React Hook for Content Management
import { useState, useEffect } from 'react'
import { getPageContent } from '@/lib/sanity'
import { PAGE_CONTENT } from '@/content/pages'

interface ContentHookOptions {
  fallbackToStatic?: boolean
  enableCaching?: boolean
}

// Custom hook for fetching and managing content
export function useContent(pageSlug: string, options: ContentHookOptions = {}) {
  const [content, setContent] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const { fallbackToStatic = true, enableCaching = true } = options

  const fetchContent = async () => {
    try {
      setLoading(true)
      setError(null)

      // Try to fetch from Sanity CMS first
      const sanityContent = await getPageContent(pageSlug)
      
      if (sanityContent) {
        setContent(sanityContent)
      } else if (fallbackToStatic) {
        // Fallback to static content
        const staticContent = getStaticContent(pageSlug)
        if (staticContent) {
          setContent(staticContent)
        } else {
          setError(`No content found for page: ${pageSlug}`)
        }
      } else {
        setError(`No content found for page: ${pageSlug}`)
      }
    } catch (err) {
      console.error('Content fetch error:', err)
      
      if (fallbackToStatic) {
        const staticContent = getStaticContent(pageSlug)
        if (staticContent) {
          setContent(staticContent)
        } else {
          setError('Failed to load content')
        }
      } else {
        setError('Failed to load content')
      }
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchContent()
  }, [pageSlug, fallbackToStatic])

  return { content, loading, error, refetch: fetchContent }
}

// Helper to get static content as fallback
function getStaticContent(pageSlug: string) {
  switch (pageSlug) {
    case 'home':
      return {
        title: 'Home',
        hero: PAGE_CONTENT.home.hero,
        sections: [
          { _type: 'statsSection', ...PAGE_CONTENT.home.stats },
          { _type: 'servicesSection', ...PAGE_CONTENT.home.services },
          { _type: 'testimonialsSection', ...PAGE_CONTENT.home.testimonials },
          { _type: 'ctaSection', ...PAGE_CONTENT.home.cta }
        ]
      }
    case 'pricing':
      return {
        title: 'Pricing',
        hero: PAGE_CONTENT.pricing.hero,
        sections: [
          { _type: 'contentBlock', packages: PAGE_CONTENT.pricing.packages }
        ]
      }
    case 'contact':
      return {
        title: 'Contact', 
        hero: PAGE_CONTENT.contact.hero,
        sections: [
          { _type: 'contentBlock', form: PAGE_CONTENT.contact.form }
        ]
      }
    default:
      return null
  }
}

// Hook for managing editable content (admin use)
export function useEditableContent(pageSlug: string) {
  const { content, loading, error, refetch } = useContent(pageSlug)
  const [isEditing, setIsEditing] = useState(false)
  const [hasChanges, setHasChanges] = useState(false)

  const updateContent = async (updates: any) => {
    try {
      // This would update content in Sanity
      console.log('Updating content:', updates)
      setHasChanges(true)
      
      // Refetch content after update
      await refetch()
      setHasChanges(false)
      
      return { success: true }
    } catch (err) {
      console.error('Update failed:', err)
      return { success: false, error: err }
    }
  }

  return {
    content,
    loading,
    error,
    isEditing,
    setIsEditing,
    hasChanges,
    updateContent,
    refetch
  }
}