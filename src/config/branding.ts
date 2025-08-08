// Global Branding Configuration for AI Automation LA
// This file contains all brand variables for easy updates

export const BRAND = {
  // Company Names
  name: "AI Automation LA",
  nameShort: "AI Automation LA", 
  namePlural: "AI Automation LA Services",
  tagline: "Done-For-You AI Business Automation",
  description: "Complete AI automation solutions for Los Angeles businesses. We handle everything so you don't have to.",
  
  // Location & Contact
  address: {
    street: "4905 S Santa Fe Ave",
    city: "Vernon",
    state: "CA", 
    zip: "90058",
    full: "4905 S Santa Fe Ave, Vernon, CA 90058"
  },
  serviceAreas: [
    "Vernon, CA",
    "Los Angeles, CA", 
    "Downtown LA",
    "West LA",
    "Santa Monica",
    "Beverly Hills",
    "Hollywood",
    "Pasadena",
    "Long Beach",
    "Burbank",
    "Glendale"
  ],
  phone: "(323) 555-0123", // Update with real number
  email: "hello@aiautomationla.com", // Update with real email
  
  // Services
  services: {
    primary: [
      "Customer Support Automation",
      "AI Voice Agents", 
      "AI Workflows & Integrations",
      "AI Chatbots",
      "Real Estate Cold Calling AI"
    ],
    secondary: [
      "Business Process Automation",
      "CRM Integration", 
      "Lead Generation Automation",
      "Appointment Scheduling",
      "Review Management"
    ]
  },
  
  // Pricing
  pricing: {
    model: "Hybrid - Setup + Monthly Retainer",
    packages: [
      {
        name: "Essentials", 
        price: 497,
        description: "Basic automation suite for small businesses"
      },
      {
        name: "Growth",
        price: 997, 
        description: "Full workflow automation for growing businesses"
      },
      {
        name: "Enterprise",
        price: 1997,
        description: "Complete business automation solution"
      }
    ]
  },
  
  // USP & Positioning
  usp: "Complete Done-For-You AI Automation - We Build It, We Manage It, You Profit",
  positioning: {
    target: "Small businesses who need full management and hand-holding",
    model: "Done-for-you service with optional self-management",
    differentiator: "100% managed service - no technical knowledge required"
  },
  
  // SEO & Keywords
  seo: {
    primaryKeyword: "AI automation Los Angeles",
    secondaryKeywords: [
      "business automation LA",
      "AI chatbots Los Angeles", 
      "voice agents Los Angeles",
      "customer support automation LA",
      "done for you automation Los Angeles"
    ],
    localKeywords: [
      "Vernon CA AI automation",
      "AI automation near me",
      "Los Angeles business automation"
    ]
  },
  
  // Social & Web
  domain: "aiautomationla.com", // Update when purchased
  social: {
    linkedin: "company/ai-automation-la",
    twitter: "aiautomationla", 
    facebook: "aiautomationla",
    instagram: "aiautomationla"
  },
  
  // Visual Branding
  colors: {
    primary: "#6366f1", // Indigo
    secondary: "#8b5cf6", // Purple  
    accent: "#06b6d4", // Cyan
    gradient: "from-indigo-600 via-purple-600 to-cyan-500",
    gradientReverse: "from-cyan-500 via-purple-600 to-indigo-600",
    text: {
      primary: "#1f2937", // Gray-800
      secondary: "#6b7280", // Gray-500
      light: "#9ca3af" // Gray-400
    },
    background: {
      primary: "#ffffff",
      secondary: "#f9fafb", // Gray-50
      dark: "#111827" // Gray-900
    }
  },
  
  // Design Theme
  design: {
    style: "Modern tech-focused with gradients",
    elements: ["Minimal design", "Cool animations", "Tech aesthetics"],
    fonts: {
      heading: "Inter", // Clean, modern
      body: "Inter"
    }
  },
  
  // Legal & Business
  legal: {
    businessName: "AI Automation LA LLC", // Update with actual entity
    license: "TBD", // Business license info
    insurance: "TBD" // Professional liability info
  },
  
  // Analytics & Tracking
  tracking: {
    googleAnalytics: "GA_MEASUREMENT_ID", // Update when created
    googleTagManager: "GTM_ID", // Update when created
    facebookPixel: "FB_PIXEL_ID", // Update when created
    linkedinInsight: "LINKEDIN_PARTNER_ID" // Update when created
  }
} as const;

// Export individual elements for convenience
export const { 
  name: COMPANY_NAME,
  nameShort: COMPANY_NAME_SHORT,
  namePlural: COMPANY_NAME_PLURAL,
  tagline: COMPANY_TAGLINE,
  address: COMPANY_ADDRESS,
  phone: COMPANY_PHONE,
  email: COMPANY_EMAIL,
  services: COMPANY_SERVICES,
  colors: BRAND_COLORS,
  seo: SEO_CONFIG
} = BRAND;

// Helper functions
export const getFullAddress = () => BRAND.address.full;
export const getServiceAreasString = () => BRAND.serviceAreas.join(", ");
export const getPrimaryServices = () => BRAND.services.primary;
export const getPrimaryGradient = () => `bg-gradient-to-r ${BRAND.colors.gradient}`;
export const getReverseGradient = () => `bg-gradient-to-r ${BRAND.colors.gradientReverse}`;