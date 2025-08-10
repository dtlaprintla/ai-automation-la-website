// Unified Content Management System
// Single import point for all content management

import { BRAND } from '@/config/branding';

export { PAGE_CONTENT, getHomeContent, getServiceContent, getPricingContent, getContactContent } from './pages';
export { IMAGES, getImage, ALT_TEXT, getHeroImage, getServiceImage, getTestimonialImage, getIntegrationLogo } from './images';
export { SEO_CONTENT, STRUCTURED_DATA, getPageSEO, getIndustrySEO } from './seo';
export { BRAND };

// Content Management Utilities will be added later when needed

// Type definitions will be added when the imports are properly resolved

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