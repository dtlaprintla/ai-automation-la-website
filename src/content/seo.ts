// SEO Content Management
// All meta titles, descriptions, and structured data in one place

import { BRAND } from '@/config/branding';

export const SEO_CONTENT = {
  // DEFAULT/GLOBAL SEO
  default: {
    title: `${BRAND.name} | AI Automation Services for Los Angeles Businesses`,
    description: "Done-for-you AI automation for LA businesses. AI phone agents, chatbots, and workflow automation. We build it, manage it, you profit. Free consultation.",
    keywords: "AI automation Los Angeles, AI phone agents LA, chatbots Los Angeles, workflow automation, business automation California",
    ogImage: "/og-images/default-og.jpg"
  },

  // PAGE-SPECIFIC SEO
  pages: {
    home: {
      title: `${BRAND.name} | Done-For-You AI Automation in Los Angeles`,
      description: "Transform your LA business with AI automation. Phone agents, chatbots, and workflows that work 24/7. Completely managed service. Free consultation.",
      keywords: "AI automation Los Angeles, done for you automation, AI phone agents LA, business chatbots, workflow automation Los Angeles",
      ogImage: "/og-images/home-og.jpg"
    },

    services: {
      title: "AI Automation Services | Phone Agents, Chatbots & Workflows | LA",
      description: "Complete AI automation services for Los Angeles businesses. AI phone agents, intelligent chatbots, and workflow automation. Fully managed.",
      keywords: "AI services Los Angeles, AI phone agents, AI chatbots, workflow automation services, business automation LA",
      ogImage: "/og-images/services-og.jpg"
    },

    aiPhoneAgents: {
      title: "AI Phone Agents | 24/7 Call Answering Service | Los Angeles",
      description: "AI phone agents that never miss calls. Book appointments, qualify leads, and provide support 24/7. Bilingual English/Spanish. Los Angeles businesses.",
      keywords: "AI phone agents Los Angeles, automated call answering, AI receptionist, virtual phone agent LA, automated appointment booking",
      ogImage: "/og-images/phone-agents-og.jpg"
    },

    chatbots: {
      title: "AI Chatbots for Websites | Lead Generation | Los Angeles",
      description: "Smart AI chatbots that convert website visitors into customers. Automated lead capture, customer support, and sales assistance for LA businesses.",
      keywords: "AI chatbots Los Angeles, website chatbots, lead generation bots, customer support automation, conversational AI LA",
      ogImage: "/og-images/chatbots-og.jpg"
    },

    pricing: {
      title: "AI Automation Pricing | Transparent Plans | Los Angeles",
      description: "Simple pricing for AI automation services. Phone agents, chatbots, and workflows starting at $497/month. Setup included. 90-day guarantee.",
      keywords: "AI automation pricing, AI phone agent cost, chatbot pricing Los Angeles, automation service rates",
      ogImage: "/og-images/pricing-og.jpg"
    },

    industries: {
      dental: {
        title: "AI Automation for Dental Practices | Los Angeles Dentists",
        description: "AI phone agents and automation for dental practices in LA. Automated appointment booking, patient reminders, and lead qualification. Increase bookings 40%.",
        keywords: "dental practice automation Los Angeles, AI for dentists, automated appointment booking dental, dental office chatbot LA",
        ogImage: "/og-images/dental-og.jpg"
      },

      realEstate: {
        title: "AI Automation for Real Estate | Los Angeles Realtors", 
        description: "AI phone agents for real estate professionals in LA. Automated lead qualification, showing scheduling, and follow-up. Never miss a lead again.",
        keywords: "real estate automation Los Angeles, AI for realtors LA, automated lead qualification, real estate chatbot, property showing automation",
        ogImage: "/og-images/real-estate-og.jpg"
      }
    },

    contact: {
      title: "Contact AI Automation LA | Free Consultation",
      description: "Get a free consultation for AI automation services. We'll show you exactly how AI can save time and increase revenue for your LA business.",
      keywords: "AI automation consultation Los Angeles, contact AI automation LA, free business automation consultation",
      ogImage: "/og-images/contact-og.jpg"
    },

    about: {
      title: "About AI Automation LA | Your AI Automation Partners", 
      description: "Meet the team behind LA's premier AI automation service. We build and manage AI solutions so you can focus on growing your business.",
      keywords: "AI automation company Los Angeles, about AI automation LA, AI automation team, business automation experts LA",
      ogImage: "/og-images/about-og.jpg"
    }
  }
} as const;

// STRUCTURED DATA TEMPLATES
export const STRUCTURED_DATA = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": BRAND.name,
    "alternateName": "AI Automation LA",
    "url": `https://${BRAND.domain}`,
    "logo": `https://${BRAND.domain}/logo/ai-automation-la-logo.svg`,
    "description": BRAND.description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": BRAND.address.street,
      "addressLocality": BRAND.address.city,
      "addressRegion": BRAND.address.state,
      "postalCode": BRAND.address.zip,
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": BRAND.phone,
      "contactType": "customer service",
      "availableLanguage": ["English", "Spanish"]
    },
    "sameAs": [
      `https://linkedin.com/${BRAND.social.linkedin}`,
      `https://twitter.com/${BRAND.social.twitter}`,
      `https://facebook.com/${BRAND.social.facebook}`
    ]
  },

  localBusiness: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": BRAND.name,
    "description": "AI automation services for Los Angeles businesses",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": BRAND.address.street,
      "addressLocality": BRAND.address.city, 
      "addressRegion": BRAND.address.state,
      "postalCode": BRAND.address.zip
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "34.0064",
      "longitude": "-118.2272"
    },
    "telephone": BRAND.phone,
    "openingHours": "Mo-Fr 09:00-17:00",
    "priceRange": "$497-$1997"
  }
};

// Helper functions
export const getPageSEO = (page: keyof typeof SEO_CONTENT.pages) => SEO_CONTENT.pages[page];
export const getIndustrySEO = (industry: keyof typeof SEO_CONTENT.pages.industries) => SEO_CONTENT.pages.industries[industry];