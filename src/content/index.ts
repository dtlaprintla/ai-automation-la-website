// Unified Content Management System
// Single import point for all content management

export { PAGE_CONTENT, getHomeContent, getServiceContent, getPricingContent, getContactContent } from './pages';
export { IMAGES, getImage, ALT_TEXT, getHeroImage, getServiceImage, getTestimonialImage, getIntegrationLogo } from './images';
export { SEO_CONTENT, STRUCTURED_DATA, getPageSEO, getIndustrySEO } from './seo';
export { BRAND } from '@/config/branding';

// Content Management Utilities
export class ContentManager {
  // Get all content for a specific page
  static getPageContent(page: string) {
    switch(page) {
      case 'home':
        return {
          content: PAGE_CONTENT.home,
          seo: SEO_CONTENT.pages.home,
          images: {
            hero: IMAGES.heroes.home,
            services: [IMAGES.services.phoneAgent, IMAGES.services.chatbot, IMAGES.services.workflow]
          }
        };
      case 'services':
        return {
          content: PAGE_CONTENT.services.main,
          seo: SEO_CONTENT.pages.services,
          images: {
            hero: IMAGES.heroes.services,
            services: IMAGES.services
          }
        };
      case 'pricing':
        return {
          content: PAGE_CONTENT.pricing,
          seo: SEO_CONTENT.pages.pricing,
          images: {
            hero: IMAGES.heroes.pricing
          }
        };
      case 'contact':
        return {
          content: PAGE_CONTENT.contact,
          seo: SEO_CONTENT.pages.contact,
          images: {
            hero: IMAGES.heroes.contact
          }
        };
      default:
        return null;
    }
  }

  // Get content with fallbacks
  static getSafeContent(contentPath: string[], fallback: string = '') {
    try {
      // This would traverse the content object safely
      return fallback; // Simplified for now
    } catch {
      return fallback;
    }
  }

  // Update content (for future CMS integration)
  static async updateContent(page: string, field: string, value: any) {
    // This will be implemented when we add Sanity CMS
    console.log(`Updating ${page}.${field} to:`, value);
    return true;
  }
}

// Type definitions for better IDE support
export type PageContent = typeof PAGE_CONTENT;
export type ImageAssets = typeof IMAGES;
export type SEOData = typeof SEO_CONTENT;

// Export commonly used content
export const COMMON_CONTENT = {
  // Frequently used text snippets
  cta: {
    primary: "Get Started",
    secondary: "Learn More", 
    contact: "Free Consultation",
    phone: `Call ${BRAND.phone}`
  },
  
  // Common headings
  headings: {
    services: "Our AI Automation Services",
    testimonials: "What Our Clients Say",
    cta: "Ready to Get Started?",
    contact: "Let's Talk About Your Business"
  },

  // Social proof elements  
  social: {
    guarantee: "90-day money-back guarantee",
    support: "24/7 customer support",
    experience: "5+ years in business automation"
  }
} as const;