// Centralized Image Management
// All images, alt text, and media assets organized in one place

export const IMAGES = {
  // LOGOS & BRANDING
  logo: {
    main: "/logo/ai-automation-la-logo.svg",
    icon: "/logo/ai-icon.svg",
    white: "/logo/ai-automation-la-white.svg",
    favicon: "/favicon.svg"
  },

  // HERO IMAGES
  heroes: {
    home: "/heroes/ai-automation-hero.jpg",
    services: "/heroes/services-hero.jpg",
    about: "/heroes/about-hero.jpg",
    contact: "/heroes/contact-hero.jpg",
    pricing: "/heroes/pricing-hero.jpg"
  },

  // SERVICE ILLUSTRATIONS
  services: {
    phoneAgent: "/services/ai-phone-agent.svg",
    chatbot: "/services/ai-chatbot.svg", 
    workflow: "/services/workflow-automation.svg",
    integration: "/services/app-integration.svg",
    analytics: "/services/analytics-dashboard.svg"
  },

  // INDUSTRY IMAGES
  industries: {
    dental: "/industries/dental-practice.jpg",
    realEstate: "/industries/real-estate.jpg",
    homeServices: "/industries/home-services.jpg",
    restaurants: "/industries/restaurant.jpg",
    legal: "/industries/legal-office.jpg",
    healthcare: "/industries/healthcare.jpg"
  },

  // TEAM PHOTOS
  team: {
    founder: "/team/founder-photo.jpg",
    developer: "/team/developer-photo.jpg",
    support: "/team/support-team.jpg"
  },

  // TESTIMONIAL PHOTOS
  testimonials: {
    maria: "/testimonials/maria-rodriguez.jpg",
    james: "/testimonials/james-chen.jpg", 
    david: "/testimonials/david-wilson.jpg",
    sarah: "/testimonials/sarah-martinez.jpg"
  },

  // CASE STUDY IMAGES
  caseStudies: {
    dentalPractice: "/case-studies/dental-practice-results.jpg",
    realEstateAgency: "/case-studies/real-estate-results.jpg",
    hvacCompany: "/case-studies/hvac-company-results.jpg"
  },

  // INTEGRATION LOGOS (already exists in /public/logos/)
  integrations: {
    salesforce: "/logos/salesforce-new.svg",
    hubspot: "/logos/hubspot.svg",
    gmail: "/logos/gmail.svg",
    slack: "/logos/slack.svg",
    // ... all other integration logos
  },

  // ICONS & GRAPHICS
  icons: {
    phone: "/icons/phone.svg",
    chat: "/icons/chat.svg", 
    automation: "/icons/automation.svg",
    analytics: "/icons/analytics.svg",
    security: "/icons/security.svg",
    support: "/icons/support.svg"
  },

  // BACKGROUNDS
  backgrounds: {
    gradient: "/backgrounds/gradient-bg.jpg",
    pattern: "/backgrounds/pattern-bg.svg", 
    dots: "/backgrounds/dots-pattern.svg"
  },

  // PLACEHOLDERS (for missing images)
  placeholders: {
    avatar: "/placeholders/avatar-placeholder.svg",
    image: "/placeholders/image-placeholder.svg",
    logo: "/placeholders/logo-placeholder.svg"
  }
} as const;

// Image with alt text helper
export const getImage = (path: string, alt: string) => ({
  src: path,
  alt: alt
});

// Common alt text templates
export const ALT_TEXT = {
  logos: {
    main: "AI Automation LA - Done-for-you business automation services",
    icon: "AI Automation LA icon"
  },
  services: {
    phoneAgent: "AI phone agent answering customer calls 24/7",
    chatbot: "AI chatbot helping customers on website", 
    workflow: "Automated workflow connecting business applications"
  },
  testimonials: {
    defaultAvatar: "Happy customer photo"
  }
} as const;

// Helper functions
export const getHeroImage = (page: keyof typeof IMAGES.heroes) => IMAGES.heroes[page];
export const getServiceImage = (service: keyof typeof IMAGES.services) => IMAGES.services[service];
export const getTestimonialImage = (person: keyof typeof IMAGES.testimonials) => IMAGES.testimonials[person];
export const getIntegrationLogo = (integration: string) => `/logos/${integration}.svg`;