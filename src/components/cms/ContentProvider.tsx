'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { getPageBySlug } from '@/lib/sanity-queries';
import { PAGE_CONTENT } from '@/content/pages';

interface ContentContextType {
  content: any;
  loading: boolean;
  error: string | null;
  refreshContent: () => void;
}

const ContentContext = createContext<ContentContextType | null>(null);

interface ContentProviderProps {
  children: React.ReactNode;
  pageSlug: string;
  fallbackContent?: any;
}

export function ContentProvider({ children, pageSlug, fallbackContent }: ContentProviderProps) {
  const [content, setContent] = useState(fallbackContent || null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchContent = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Try to fetch from Sanity first
      const sanityContent = await getPageBySlug(pageSlug);
      
      if (sanityContent) {
        // Transform Sanity content to match our expected format
        const transformedContent = {
          title: sanityContent.title,
          hero: {
            title: sanityContent.heroHeadline || sanityContent.title,
            description: sanityContent.heroDescription,
            image: sanityContent.heroImage
          },
          content: sanityContent.content,
          seo: {
            title: sanityContent.metaTitle || sanityContent.title,
            description: sanityContent.metaDescription
          },
          lastUpdated: sanityContent._updatedAt
        };
        
        setContent(transformedContent);
      } else {
        // Fallback to static content
        setContent(fallbackContent || getStaticFallback(pageSlug));
      }
    } catch (err) {
      console.error('Failed to fetch content:', err);
      setError('Failed to load content');
      
      // Use fallback content on error
      setContent(fallbackContent || getStaticFallback(pageSlug));
    } finally {
      setLoading(false);
    }
  };

  const refreshContent = () => {
    fetchContent();
  };

  useEffect(() => {
    fetchContent();
  }, [pageSlug]);

  return (
    <ContentContext.Provider value={{ content, loading, error, refreshContent }}>
      {children}
    </ContentContext.Provider>
  );
}

export function usePageContent() {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('usePageContent must be used within a ContentProvider');
  }
  return context;
}

// Fallback to static content if Sanity is unavailable
function getStaticFallback(pageSlug: string) {
  switch (pageSlug) {
    case 'home':
      return {
        title: 'Home',
        hero: PAGE_CONTENT.home.hero,
        content: PAGE_CONTENT.home
      };
    case 'services':
      return {
        title: 'Services', 
        hero: PAGE_CONTENT.services.main.hero,
        content: PAGE_CONTENT.services
      };
    case 'pricing':
      return {
        title: 'Pricing',
        hero: PAGE_CONTENT.pricing.hero,
        content: PAGE_CONTENT.pricing
      };
    case 'contact':
      return {
        title: 'Contact',
        hero: PAGE_CONTENT.contact.hero, 
        content: PAGE_CONTENT.contact
      };
    default:
      return null;
  }
}