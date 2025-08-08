// Comprehensive integrations database for AI Automation LA
// Based on popular business automation tools and services

export interface Integration {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: string;
  subcategory?: string;
  logo: string; // Path to logo file
  tags: string[];
  popularity: 'high' | 'medium' | 'low';
  automationUseCase: string;
  businessBenefit: string;
  commonIntegrations: string[];
  features: string[];
}

export const integrationCategories = {
  'CRM & Sales': {
    color: '#3B82F6',
    description: 'Customer relationship management and sales automation'
  },
  'Communication': {
    color: '#10B981', 
    description: 'Email, messaging, and team communication tools'
  },
  'E-commerce': {
    color: '#8B5CF6',
    description: 'Online stores and marketplace management'
  },
  'Marketing': {
    color: '#F59E0B',
    description: 'Marketing automation and social media tools'
  },
  'Accounting & Finance': {
    color: '#EF4444',
    description: 'Financial management and accounting software'
  },
  'Project Management': {
    color: '#06B6D4',
    description: 'Task management and team collaboration'
  },
  'Analytics': {
    color: '#84CC16',
    description: 'Data analytics and reporting tools'
  },
  'Storage & Files': {
    color: '#6366F1',
    description: 'Cloud storage and file management'
  },
  'AI & Machine Learning': {
    color: '#EC4899',
    description: 'AI services and machine learning platforms'
  }
};

export const integrations: Integration[] = [
  // CRM & Sales
  {
    id: 'salesforce',
    name: 'Salesforce',
    slug: 'salesforce',
    description: 'World\'s #1 CRM platform for managing customer relationships and sales pipelines.',
    category: 'CRM & Sales',
    logo: '/logos/salesforce.svg',
    tags: ['CRM', 'Sales', 'Enterprise', 'Lead Management'],
    popularity: 'high',
    automationUseCase: 'Automatically sync leads from your website to Salesforce, update opportunities based on customer interactions, and trigger follow-up sequences.',
    businessBenefit: 'Never lose a lead again. All customer data flows automatically into your CRM without manual data entry.',
    commonIntegrations: ['Gmail', 'Slack', 'Mailchimp', 'Calendly'],
    features: [
      'Automatic lead capture and scoring',
      'Pipeline management automation', 
      'Customer interaction tracking',
      'Sales forecasting and reporting',
      'Email sequence automation'
    ]
  },
  {
    id: 'hubspot',
    name: 'HubSpot',
    slug: 'hubspot',
    description: 'All-in-one inbound marketing, sales, and service platform for growing businesses.',
    category: 'CRM & Sales',
    logo: '/logos/hubspot.svg',
    tags: ['CRM', 'Marketing', 'Sales', 'Inbound'],
    popularity: 'high',
    automationUseCase: 'Automate lead nurturing campaigns, sync contact data across tools, and trigger personalized email sequences based on customer behavior.',
    businessBenefit: 'Convert more leads with automated marketing and sales processes. Track the entire customer journey from first visit to purchase.',
    commonIntegrations: ['Gmail', 'Slack', 'WordPress', 'Shopify'],
    features: [
      'Contact and lead management',
      'Email marketing automation',
      'Sales pipeline tracking',
      'Website chat integration',
      'Marketing analytics and reporting'
    ]
  },
  {
    id: 'pipedrive',
    name: 'Pipedrive',
    slug: 'pipedrive',
    description: 'Simple and effective CRM designed to help small teams manage their sales process.',
    category: 'CRM & Sales',
    logo: '/logos/pipedrive.svg',
    tags: ['CRM', 'Sales', 'Pipeline', 'Small Business'],
    popularity: 'high',
    automationUseCase: 'Automatically move deals through your pipeline based on activities, send follow-up reminders, and sync data with other business tools.',
    businessBenefit: 'Keep your sales process organized and never miss follow-ups. Close more deals with automated pipeline management.',
    commonIntegrations: ['Gmail', 'Calendly', 'Slack', 'Mailchimp'],
    features: [
      'Visual sales pipeline',
      'Activity reminders and scheduling',
      'Deal tracking and forecasting',
      'Email integration and sync',
      'Mobile app for field sales'
    ]
  },

  // Communication Tools
  {
    id: 'gmail',
    name: 'Gmail',
    slug: 'gmail',
    description: 'Google\'s email service with powerful integration capabilities for business automation.',
    category: 'Communication',
    logo: '/logos/gmail.svg',
    tags: ['Email', 'Google', 'Communication', 'Automation'],
    popularity: 'high',
    automationUseCase: 'Automatically sort emails, send personalized responses, sync contacts with CRM, and trigger workflows based on incoming emails.',
    businessBenefit: 'Turn your inbox into a powerful business automation hub. Spend less time on email management and more time on important work.',
    commonIntegrations: ['Salesforce', 'HubSpot', 'Slack', 'Calendar'],
    features: [
      'Automated email sorting and labeling',
      'Template responses and signatures',
      'Contact sync with CRM systems', 
      'Email sequence automation',
      'Integration with Google Workspace'
    ]
  },
  {
    id: 'slack',
    name: 'Slack',
    slug: 'slack',
    description: 'Team communication platform that connects with all your business tools.',
    category: 'Communication',
    logo: '/logos/slack.svg',
    tags: ['Team Chat', 'Communication', 'Collaboration', 'Notifications'],
    popularity: 'high',
    automationUseCase: 'Get instant notifications about new leads, sales updates, and important business events. Automate team updates and status reports.',
    businessBenefit: 'Keep your team instantly informed about important business activities. Never miss critical updates or leads.',
    commonIntegrations: ['Salesforce', 'HubSpot', 'Trello', 'Google Drive'],
    features: [
      'Automated notifications and alerts',
      'Team communication workflows',
      'File sharing and collaboration',
      'Custom bot integrations',
      'Channel-based organization'
    ]
  },

  // E-commerce
  {
    id: 'shopify',
    name: 'Shopify',
    slug: 'shopify',
    description: 'Leading e-commerce platform for online stores and retail point-of-sale systems.',
    category: 'E-commerce',
    logo: '/logos/shopify.svg',
    tags: ['E-commerce', 'Online Store', 'Retail', 'Payments'],
    popularity: 'high',
    automationUseCase: 'Automatically sync orders with inventory, send customer follow-up emails, update accounting records, and manage customer support tickets.',
    businessBenefit: 'Run your online store on autopilot. Automatic order processing, inventory management, and customer communication.',
    commonIntegrations: ['QuickBooks', 'Mailchimp', 'Google Analytics', 'Facebook'],
    features: [
      'Automated order processing',
      'Inventory management and alerts',
      'Customer email sequences',
      'Payment processing automation',
      'Multi-channel sales integration'
    ]
  },
  {
    id: 'woocommerce',
    name: 'WooCommerce',
    slug: 'woocommerce', 
    description: 'Customizable e-commerce platform built for WordPress websites.',
    category: 'E-commerce',
    logo: '/logos/woocommerce.svg',
    tags: ['E-commerce', 'WordPress', 'Online Store', 'Open Source'],
    popularity: 'high',
    automationUseCase: 'Automate order fulfillment, inventory tracking, customer notifications, and integration with shipping and payment providers.',
    businessBenefit: 'Transform your WordPress site into a fully automated online store. Handle orders, inventory, and customers automatically.',
    commonIntegrations: ['WordPress', 'PayPal', 'Stripe', 'MailChimp'],
    features: [
      'WordPress integration',
      'Automated order management',
      'Product inventory tracking',
      'Payment gateway automation',
      'Shipping and tax calculations'
    ]
  },

  // Marketing Tools
  {
    id: 'mailchimp',
    name: 'Mailchimp',
    slug: 'mailchimp',
    description: 'All-in-one marketing platform for email marketing, automation, and audience management.',
    category: 'Marketing',
    logo: '/logos/mailchimp.svg',
    tags: ['Email Marketing', 'Automation', 'Newsletters', 'Campaigns'],
    popularity: 'high',
    automationUseCase: 'Automatically add new customers to email lists, send welcome sequences, trigger campaigns based on purchase behavior, and segment audiences.',
    businessBenefit: 'Keep customers engaged with automated email marketing. Increase sales with personalized campaigns triggered by customer actions.',
    commonIntegrations: ['Shopify', 'WooCommerce', 'Salesforce', 'Facebook'],
    features: [
      'Email automation workflows',
      'Audience segmentation',
      'A/B testing capabilities',
      'Landing page builder',
      'E-commerce integrations'
    ]
  },

  // Accounting & Finance
  {
    id: 'quickbooks',
    name: 'QuickBooks',
    slug: 'quickbooks',
    description: 'Comprehensive accounting software for small to medium-sized businesses.',
    category: 'Accounting & Finance',
    logo: '/logos/quickbooks.svg',
    tags: ['Accounting', 'Finance', 'Invoicing', 'Bookkeeping'],
    popularity: 'high',
    automationUseCase: 'Automatically sync sales data, create invoices, track expenses, update customer records, and generate financial reports.',
    businessBenefit: 'Keep your books automatically updated. No more manual data entry for sales, expenses, or customer information.',
    commonIntegrations: ['Shopify', 'PayPal', 'Stripe', 'Square'],
    features: [
      'Automated bookkeeping',
      'Invoice generation and sending',
      'Expense tracking and categorization',
      'Financial reporting',
      'Tax preparation integration'
    ]
  },

  // Project Management
  {
    id: 'asana',
    name: 'Asana',
    slug: 'asana',
    description: 'Work management platform that helps teams organize, track, and manage their work.',
    category: 'Project Management',
    logo: '/logos/asana.svg',
    tags: ['Project Management', 'Tasks', 'Team Collaboration', 'Workflows'],
    popularity: 'high',
    automationUseCase: 'Automatically create tasks from emails, update project status based on completions, assign work based on team capacity, and send progress reports.',
    businessBenefit: 'Keep projects on track automatically. Tasks are created, assigned, and tracked without manual project management overhead.',
    commonIntegrations: ['Slack', 'Gmail', 'Google Drive', 'Salesforce'],
    features: [
      'Automated task creation and assignment',
      'Project timeline and milestone tracking',
      'Team workload balancing',
      'Progress reporting and dashboards',
      'Custom workflow automation'
    ]
  },

  // AI & Machine Learning 
  {
    id: 'openai',
    name: 'OpenAI',
    slug: 'openai',
    description: 'Advanced AI platform providing GPT models and AI capabilities for business automation.',
    category: 'AI & Machine Learning',
    logo: '/logos/openai.svg',
    tags: ['AI', 'GPT', 'Machine Learning', 'Automation', 'ChatGPT'],
    popularity: 'high',
    automationUseCase: 'Automatically generate content, respond to customer inquiries, analyze data, create summaries, and power intelligent workflows.',
    businessBenefit: 'Add intelligent automation to any process. Let AI handle content creation, customer support, and data analysis automatically.',
    commonIntegrations: ['Slack', 'Gmail', 'WordPress', 'Zapier'],
    features: [
      'Automated content generation',
      'Intelligent customer support',
      'Data analysis and insights',
      'Language translation',
      'Custom AI workflow integration'
    ]
  }
];

// Helper functions
export const getIntegrationsByCategory = (category: string): Integration[] => {
  return integrations.filter(integration => integration.category === category);
};

export const getPopularIntegrations = (): Integration[] => {
  return integrations.filter(integration => integration.popularity === 'high');
};

export const searchIntegrations = (query: string): Integration[] => {
  const lowercaseQuery = query.toLowerCase();
  return integrations.filter(integration => 
    integration.name.toLowerCase().includes(lowercaseQuery) ||
    integration.description.toLowerCase().includes(lowercaseQuery) ||
    integration.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

export const getIntegrationBySlug = (slug: string): Integration | undefined => {
  return integrations.find(integration => integration.slug === slug);
};