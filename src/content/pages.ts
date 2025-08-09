// Centralized Page Content Management
// All page text, headings, and copy in one place for easy editing

export const PAGE_CONTENT = {
  // HOME PAGE
  home: {
    hero: {
      badge: "Transform your business with AI automation",
      title: "Done-For-You AI Automation",
      subtitle: "for Los Angeles Businesses",
      description: "We build and manage AI phone agents, chatbots, and workflow automation so you can focus on growing your business. Zero technical knowledge required.",
      primaryCTA: "Get Started",
      secondaryCTA: "See How It Works",
      features: [
        "24/7 AI phone agents that never miss calls",
        "Smart chatbots that convert visitors to customers", 
        "Automated workflows that save 20+ hours per week",
        "Completely managed - we handle everything"
      ]
    },
    stats: {
      title: "Results Our LA Clients See",
      metrics: [
        { number: "85%", label: "Fewer Missed Calls", description: "AI agents answer 24/7" },
        { number: "60%", label: "More Qualified Leads", description: "Smart screening saves time" },
        { number: "40%", label: "Cost Reduction", description: "Vs hiring staff" },
        { number: "24/7", label: "Always Available", description: "Never miss opportunities" }
      ]
    },
    services: {
      title: "What We Build For You",
      subtitle: "Complete AI automation solutions designed for LA businesses",
      items: [
        {
          name: "AI Phone Agents",
          description: "Smart voice agents that answer calls, book appointments, and qualify leads 24/7",
          features: ["Appointment booking", "Lead qualification", "Customer support", "Bilingual Spanish/English"],
          icon: "phone"
        },
        {
          name: "AI Chatbots", 
          description: "Website chatbots that engage visitors and convert them into customers",
          features: ["Lead capture", "Product recommendations", "Support tickets", "CRM integration"],
          icon: "message"
        },
        {
          name: "Workflow Automation",
          description: "Connect all your business apps so data flows automatically between them",
          features: ["CRM sync", "Email automation", "Task management", "Reporting dashboards"],
          icon: "workflow"
        }
      ]
    },
    testimonials: {
      title: "What LA Business Owners Say",
      items: [
        {
          quote: "AI Automation LA saved us 30 hours per week on appointment booking. Our dental practice runs smoother than ever.",
          author: "Dr. Maria Rodriguez",
          business: "Smile Dental - Downtown LA",
          avatar: "/testimonials/maria.jpg"
        },
        {
          quote: "Their AI phone agent books 40% more showings for our real estate listings. It's like having the best receptionist working 24/7.",
          author: "James Chen", 
          business: "Pacific Coast Realty",
          avatar: "/testimonials/james.jpg"
        }
      ]
    },
    cta: {
      title: "Ready to Automate Your Business?",
      subtitle: "Free consultation to see exactly how AI can help your LA business grow",
      primaryCTA: "Get Free Consultation", 
      secondaryCTA: "Call (323) 555-0123",
      guarantee: "90-day money-back guarantee"
    }
  },

  // SERVICES PAGES
  services: {
    main: {
      hero: {
        title: "AI Automation Services",
        subtitle: "Built For LA Businesses", 
        description: "We handle everything - from building your AI systems to managing them daily. Focus on your business while we handle the technology."
      }
    },
    aiPhoneAgents: {
      hero: {
        title: "AI Phone Agents",
        subtitle: "Never Miss Another Call",
        description: "24/7 AI voice agents that answer calls, book appointments, and qualify leads for your business",
        features: ["Answers 100% of calls", "Books appointments instantly", "Speaks English & Spanish", "Integrates with your CRM"]
      }
    }
  },

  // PRICING PAGE
  pricing: {
    hero: {
      title: "Simple, Transparent Pricing",
      subtitle: "Choose the package that fits your business needs",
      description: "All plans include setup, training, and ongoing management. No hidden fees."
    },
    packages: [
      {
        name: "Starter",
        price: 497,
        period: "month",
        description: "Perfect for small businesses getting started with AI",
        features: [
          "1 AI Phone Agent",
          "Basic chatbot", 
          "Email automation",
          "CRM integration",
          "Monthly reporting",
          "Phone & email support"
        ],
        setupFee: 1997,
        popular: false
      },
      {
        name: "Growth", 
        price: 997,
        period: "month",
        description: "Ideal for growing businesses that need more automation",
        features: [
          "2 AI Phone Agents",
          "Advanced chatbot with AI",
          "Workflow automation",
          "Advanced CRM integration", 
          "Weekly reporting",
          "Priority phone support",
          "Custom integrations"
        ],
        setupFee: 2997,
        popular: true
      },
      {
        name: "Enterprise",
        price: 1997, 
        period: "month",
        description: "Complete automation suite for established businesses",
        features: [
          "Unlimited AI agents",
          "Custom AI solutions",
          "Advanced workflows",
          "Multi-location support",
          "Real-time reporting",
          "Dedicated account manager",
          "White-label options"
        ],
        setupFee: 4997,
        popular: false
      }
    ]
  },

  // CONTACT PAGE
  contact: {
    hero: {
      title: "Let's Talk About Your Business",
      subtitle: "Free consultation to explore how AI automation can help you grow",
      description: "We'll analyze your current processes and show you exactly how much time and money AI automation can save."
    },
    form: {
      title: "Get Your Free Consultation",
      subtitle: "Tell us about your business and we'll create a custom automation plan",
      fields: [
        { name: "name", label: "Full Name", required: true },
        { name: "email", label: "Email Address", required: true },
        { name: "phone", label: "Phone Number", required: true },
        { name: "business", label: "Business Name", required: true },
        { name: "industry", label: "Industry", required: false },
        { name: "employees", label: "Number of Employees", required: false },
        { name: "goals", label: "What would you like to automate?", required: true }
      ]
    }
  }
} as const;

// Helper functions for easy access
export const getHomeContent = () => PAGE_CONTENT.home;
export const getServiceContent = (service: keyof typeof PAGE_CONTENT.services) => PAGE_CONTENT.services[service];
export const getPricingContent = () => PAGE_CONTENT.pricing;
export const getContactContent = () => PAGE_CONTENT.contact;