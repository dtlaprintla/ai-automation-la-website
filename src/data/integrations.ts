// N8N-Style Integrations Database
// Based on comprehensive N8N integrations data with real logos and structure

export interface Integration {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: string;
  subcategory?: string;
  logo: string; // Logo URL from N8N or fallback
  tags: string[];
  nodeType: 'trigger' | 'action' | 'trigger_action' | 'cluster_node';
  popularity: number; // 1-100 score
  automationUseCase: string;
  businessBenefit: string;
  commonIntegrations: string[];
  features: string[];
  logoUrl?: string; // N8N logo URL
  lastUpdated?: string;
}

export const integrationCategories = {
  'AI & Machine Learning': {
    color: '#ff6d5a',
    description: 'Seamlessly integrate AI tools like OpenAI, Google AI, IBM Watson, and embeddings',
    subcategories: ['embeddings', 'agents', 'language-models', 'machine-learning', 'chatbots']
  },
  'Productivity': {
    color: '#4f46e5', 
    description: 'Automate daily tasks with tools like Google Workspace, Notion, and Evernote',
    subcategories: ['document-management', 'note-taking', 'calendar', 'email']
  },
  'Communication & Messaging': {
    color: '#10b981',
    description: 'Connect apps like Slack, Microsoft Teams, and Discord',
    subcategories: ['chat', 'video-conferencing', 'notifications', 'social-media', 'email', 'customer-support']
  },
  'Data & Storage': {
    color: '#8b5cf6',
    description: 'Move and transform data between apps and databases',
    subcategories: ['databases', 'cloud-storage', 'file-management', 'data-processing', 'accounting', 'inventory']
  },
  'Development': {
    color: '#06b6d4',
    description: 'API integrations, webhooks, and developer tools',
    subcategories: ['apis', 'webhooks', 'version-control', 'deployment']
  },
  'Marketing & CRM': {
    color: '#f59e0b',
    description: 'Customer relationships, marketing automation, and business growth tools',
    subcategories: ['crm', 'email-marketing', 'lead-generation', 'healthcare', 'real-estate', 'legal', 'hospitality']
  },
  'E-commerce & Sales': {
    color: '#10b981',
    description: 'Online stores, payment processing, and sales automation',
    subcategories: ['ecommerce-platform', 'point-of-sale', 'payments', 'marketplace']
  },
  'Project Management': {
    color: '#6366f1',
    description: 'Task management, project tracking, and team collaboration tools',
    subcategories: ['task-management', 'collaboration', 'time-tracking', 'reporting', 'field-service']
  },
  'Ecommerce': {
    color: '#ef4444',
    description: 'Track orders and sync product data with platforms like Shopify',
    subcategories: ['online-stores', 'payment-processing', 'inventory', 'analytics']
  },
  'Project Management': {
    color: '#84cc16',
    description: 'Stay on top of tasks with platforms like Trello, Asana, and Monday.com',
    subcategories: ['task-management', 'collaboration', 'time-tracking', 'reporting']
  }
};

export const integrations: Integration[] = [
  // MASSIVE LA BUSINESS INTEGRATIONS DATABASE - 100+ Tools
  // AI & Machine Learning Category
  {
    id: 'openai',
    name: 'OpenAI',
    slug: 'openai',
    description: 'Access GPT models, embeddings, and other OpenAI services',
    category: 'AI & Machine Learning',
    subcategory: 'language-models',
    logo: '/logos/openai.svg',
    logoUrl: 'https://n8n.io/integrations/openai/',
    tags: ['gpt', 'language-model', 'embeddings', 'ai', 'chatgpt'],
    nodeType: 'trigger_action',
    popularity: 98,
    automationUseCase: 'Automatically generate content, respond to customer inquiries, analyze data, create summaries, and power intelligent workflows.',
    businessBenefit: 'Add intelligent automation to any process. Let AI handle content creation, customer support, and data analysis automatically.',
    commonIntegrations: ['Slack', 'Gmail', 'WordPress', 'Zapier'],
    features: [
      'Automated content generation',
      'Intelligent customer support',
      'Data analysis and insights',
      'Language translation',
      'Custom AI workflow integration'
    ],
    lastUpdated: '2025-01-08'
  },
  {
    id: 'embeddings-openai',
    name: 'Embeddings OpenAI',
    slug: 'embeddings-openai',
    description: 'Generate embeddings using OpenAI models for vector databases',
    category: 'AI & Machine Learning',
    subcategory: 'embeddings',
    logo: '/logos/openai.svg',
    logoUrl: 'https://n8n.io/integrations/embeddings-openai/',
    tags: ['embeddings', 'vector', 'openai', 'machine-learning'],
    nodeType: 'action',
    popularity: 85,
    automationUseCase: 'Transform text data into vector embeddings for semantic search, content similarity, and AI-powered recommendations.',
    businessBenefit: 'Enable intelligent content discovery and recommendations by converting text into searchable vectors.',
    commonIntegrations: ['Vector databases', 'Search systems', 'Recommendation engines'],
    features: ['Text-to-vector conversion', 'Semantic search enablement', 'Content similarity analysis', 'AI recommendation systems'],
    lastUpdated: '2025-01-08'
  },
  {
    id: 'ai-agent',
    name: 'AI Agent',
    slug: 'ai-agent',
    description: 'Build AI-powered applications and integrate with 422+ apps',
    category: 'AI & Machine Learning',
    subcategory: 'agents',
    logo: '/logos/ai-agent.svg',
    logoUrl: 'https://n8n.io/integrations/agent/',
    tags: ['agent', 'ai', 'automation', 'intelligent-workflows'],
    nodeType: 'cluster_node',
    popularity: 90,
    automationUseCase: 'Create intelligent agents that can reason, make decisions, and execute complex workflows automatically.',
    businessBenefit: 'Deploy smart automation that adapts to changing conditions and makes intelligent decisions.',
    commonIntegrations: ['All supported integrations', 'APIs', 'Databases', 'Communication tools'],
    features: ['Intelligent decision making', 'Multi-step reasoning', 'Dynamic workflow adaptation', 'Context awareness'],
    lastUpdated: '2025-01-08'
  },

  // Productivity Category
  {
    id: 'google-sheets',
    name: 'Google Sheets',
    slug: 'google-sheets',
    description: 'Read, write, and manipulate Google Sheets data',
    category: 'Productivity',
    subcategory: 'document-management',
    logo: '/logos/google-sheets.svg',
    logoUrl: 'https://n8n.io/integrations/google-sheets/',
    tags: ['spreadsheet', 'google', 'data', 'collaboration'],
    nodeType: 'trigger_action',
    popularity: 95,
    automationUseCase: 'Automatically sync data between systems and spreadsheets, create reports, and manage data workflows.',
    businessBenefit: 'Keep spreadsheets automatically updated with real-time data from your business systems.',
    commonIntegrations: ['CRM systems', 'E-commerce platforms', 'Analytics tools'],
    features: ['Real-time data sync', 'Automated reporting', 'Data validation', 'Collaborative editing'],
    lastUpdated: '2025-01-08'
  },
  {
    id: 'notion',
    name: 'Notion',
    slug: 'notion',
    description: 'Manage databases, pages, and content in Notion',
    category: 'Productivity',
    subcategory: 'note-taking',
    logo: '/logos/notion.svg',
    logoUrl: 'https://n8n.io/integrations/notion/',
    tags: ['database', 'notes', 'collaboration', 'workspace'],
    nodeType: 'trigger_action',
    popularity: 88,
    automationUseCase: 'Automate content organization, task tracking, database updates, and team documentation workflows.',
    businessBenefit: 'Centralize all work in one workspace with automated organization that adapts to your team\'s needs.',
    commonIntegrations: ['Slack', 'Google Calendar', 'CRM systems'],
    features: ['Database automation', 'Content management', 'Task tracking', 'Team collaboration'],
    lastUpdated: '2025-01-08'
  },

  // Communication & Messaging Category
  {
    id: 'slack',
    name: 'Slack',
    slug: 'slack',
    description: 'Send messages, manage channels, and automate Slack workflows',
    category: 'Communication & Messaging',
    subcategory: 'chat',
    logo: '/logos/slack.svg',
    logoUrl: 'https://n8n.io/integrations/slack/',
    tags: ['chat', 'team', 'notifications', 'collaboration'],
    nodeType: 'trigger_action',
    popularity: 92,
    automationUseCase: 'Get instant notifications about business events, automate team updates, and streamline communication workflows.',
    businessBenefit: 'Keep your team instantly informed about important business activities without manual updates.',
    commonIntegrations: ['CRM systems', 'Project management', 'Analytics tools'],
    features: ['Automated notifications', 'Channel management', 'Bot integrations', 'Workflow triggers'],
    lastUpdated: '2025-01-08'
  },
  {
    id: 'telegram',
    name: 'Telegram',
    slug: 'telegram',
    description: 'Send messages and interact with Telegram bots',
    category: 'Communication & Messaging',
    subcategory: 'chat',
    logo: '/logos/telegram.svg',
    logoUrl: 'https://n8n.io/integrations/telegram/',
    tags: ['messaging', 'bot', 'notifications', 'automation'],
    nodeType: 'trigger_action',
    popularity: 75,
    automationUseCase: 'Automate customer communications, send notifications, and manage bot interactions.',
    businessBenefit: 'Reach customers instantly with automated messaging that drives engagement and support.',
    commonIntegrations: ['CRM systems', 'E-commerce platforms', 'Support tools'],
    features: ['Bot automation', 'Message broadcasting', 'Customer notifications', 'Interactive workflows'],
    lastUpdated: '2025-01-08'
  },
  {
    id: 'microsoft-teams',
    name: 'Microsoft Teams',
    slug: 'microsoft-teams',
    description: 'Unified communication platform with chat, video meetings, and file sharing',
    category: 'Communication & Messaging',
    subcategory: 'video-conferencing',
    logo: '/logos/teams.svg',
    logoUrl: 'https://n8n.io/integrations/microsoft-teams/',
    tags: ['team-chat', 'video-meetings', 'collaboration', 'microsoft'],
    nodeType: 'trigger_action',
    popularity: 90,
    automationUseCase: 'Automate meeting workflows, team notifications, and business application integration.',
    businessBenefit: 'Streamline team communication with automated workflows and smart notifications.',
    commonIntegrations: ['Outlook', 'SharePoint', 'CRM systems'],
    features: ['Meeting automation', 'Team messaging', 'File collaboration', 'App integrations'],
    lastUpdated: '2025-01-08'
  },

  // Data & Storage Category
  {
    id: 'google-drive',
    name: 'Google Drive',
    slug: 'google-drive',
    description: 'Upload, download, and manage files in Google Drive',
    category: 'Data & Storage',
    subcategory: 'cloud-storage',
    logo: '/logos/google-drive.svg',
    logoUrl: 'https://n8n.io/integrations/google-drive/',
    tags: ['storage', 'files', 'google', 'collaboration'],
    nodeType: 'trigger_action',
    popularity: 90,
    automationUseCase: 'Automate file organization, backup processes, sharing workflows, and document management.',
    businessBenefit: 'Keep files organized and accessible with automated backup and sharing systems.',
    commonIntegrations: ['Gmail', 'Google Workspace', 'CRM systems'],
    features: ['File automation', 'Backup workflows', 'Sharing management', 'Document processing'],
    lastUpdated: '2025-01-08'
  },
  {
    id: 'airtable',
    name: 'Airtable',
    slug: 'airtable',
    description: 'Manage records in Airtable databases',
    category: 'Data & Storage',
    subcategory: 'databases',
    logo: '/logos/airtable.svg',
    logoUrl: 'https://n8n.io/integrations/airtable/',
    tags: ['database', 'spreadsheet', 'collaboration', 'workflow'],
    nodeType: 'trigger_action',
    popularity: 85,
    automationUseCase: 'Automate data entry, record updates, workflow triggers, and team notifications.',
    businessBenefit: 'Organize complex projects with flexible databases that automatically update and notify teams.',
    commonIntegrations: ['CRM systems', 'Project management', 'Marketing tools'],
    features: ['Database automation', 'Record management', 'Workflow triggers', 'Team collaboration'],
    lastUpdated: '2025-01-08'
  },

  // Development Category
  {
    id: 'http-request',
    name: 'HTTP Request',
    slug: 'http-request',
    description: 'Make HTTP requests to any API or service',
    category: 'Development',
    subcategory: 'apis',
    logo: '/logos/http.svg',
    logoUrl: 'https://n8n.io/integrations/httprequest/',
    tags: ['api', 'http', 'rest', 'integration'],
    nodeType: 'action',
    popularity: 95,
    automationUseCase: 'Connect to any API or web service to exchange data and trigger external actions.',
    businessBenefit: 'Integrate with any system that has an API, creating unlimited automation possibilities.',
    commonIntegrations: ['Any API-enabled service', 'Custom applications', 'Third-party systems'],
    features: ['Universal API connectivity', 'Custom headers and authentication', 'Data transformation', 'Error handling'],
    lastUpdated: '2025-01-08'
  },
  {
    id: 'webhook',
    name: 'Webhook',
    slug: 'webhook',
    description: 'Receive HTTP requests to trigger workflows',
    category: 'Development',
    subcategory: 'webhooks',
    logo: '/logos/webhook.svg',
    logoUrl: 'https://n8n.io/integrations/webhook/',
    tags: ['webhook', 'trigger', 'http', 'api'],
    nodeType: 'trigger',
    popularity: 92,
    automationUseCase: 'Receive data from external systems and trigger automated workflows based on events.',
    businessBenefit: 'Enable real-time automation triggered by events from any external system or application.',
    commonIntegrations: ['Web applications', 'E-commerce platforms', 'Payment systems'],
    features: ['Real-time triggers', 'Event-driven workflows', 'Data reception', 'Custom endpoints'],
    lastUpdated: '2025-01-08'
  },

  // Marketing & CRM Category
  {
    id: 'hubspot',
    name: 'HubSpot',
    slug: 'hubspot',
    description: 'Manage contacts, deals, and marketing campaigns in HubSpot',
    category: 'Marketing & CRM',
    subcategory: 'crm',
    logo: '/logos/hubspot.svg',
    logoUrl: 'https://n8n.io/integrations/hubspot/',
    tags: ['crm', 'marketing', 'sales', 'inbound'],
    nodeType: 'trigger_action',
    popularity: 93,
    automationUseCase: 'Automate lead nurturing, contact management, deal progression, and marketing campaigns.',
    businessBenefit: 'Convert more leads with automated marketing and sales processes that track the entire customer journey.',
    commonIntegrations: ['Gmail', 'Slack', 'WordPress', 'Analytics tools'],
    features: ['Lead automation', 'Contact management', 'Deal tracking', 'Marketing workflows'],
    lastUpdated: '2025-01-08'
  },
  {
    id: 'mailchimp',
    name: 'Mailchimp',
    slug: 'mailchimp',
    description: 'Manage email campaigns and subscriber lists',
    category: 'Marketing & CRM',
    subcategory: 'email-marketing',
    logo: '/logos/mailchimp.svg',
    logoUrl: 'https://n8n.io/integrations/mailchimp/',
    tags: ['email', 'marketing', 'automation', 'campaigns'],
    nodeType: 'trigger_action',
    popularity: 89,
    automationUseCase: 'Automate email marketing campaigns, subscriber management, and customer segmentation.',
    businessBenefit: 'Keep customers engaged with automated email marketing that increases sales and retention.',
    commonIntegrations: ['E-commerce platforms', 'CRM systems', 'Analytics tools'],
    features: ['Email automation', 'List management', 'Campaign tracking', 'Audience segmentation'],
    lastUpdated: '2025-01-08'
  },
  {
    id: 'salesforce',
    name: 'Salesforce',
    slug: 'salesforce',
    description: 'World\'s #1 CRM platform for managing customer relationships',
    category: 'Marketing & CRM',
    subcategory: 'crm',
    logo: '/logos/salesforce.svg',
    logoUrl: 'https://n8n.io/integrations/salesforce/',
    tags: ['crm', 'sales', 'enterprise', 'lead-management'],
    nodeType: 'trigger_action',
    popularity: 96,
    automationUseCase: 'Automate lead capture, opportunity management, customer tracking, and sales pipeline workflows.',
    businessBenefit: 'Never lose a lead with automated CRM workflows that track every customer interaction.',
    commonIntegrations: ['Gmail', 'Slack', 'Marketing tools'],
    features: ['Lead automation', 'Sales pipeline', 'Customer tracking', 'Opportunity management'],
    lastUpdated: '2025-01-08'
  },

  // Ecommerce Category
  {
    id: 'shopify',
    name: 'Shopify',
    slug: 'shopify',
    description: 'Manage products, orders, and customers in Shopify',
    category: 'Ecommerce',
    subcategory: 'online-stores',
    logo: '/logos/shopify.svg',
    logoUrl: 'https://n8n.io/integrations/shopify/',
    tags: ['ecommerce', 'store', 'products', 'orders'],
    nodeType: 'trigger_action',
    popularity: 94,
    automationUseCase: 'Automate order processing, inventory management, customer communications, and fulfillment workflows.',
    businessBenefit: 'Run your online store automatically with seamless order processing and customer management.',
    commonIntegrations: ['Payment processors', 'Accounting software', 'Marketing tools'],
    features: ['Order automation', 'Inventory management', 'Customer tracking', 'Product synchronization'],
    lastUpdated: '2025-01-08'
  },
  {
    id: 'stripe',
    name: 'Stripe',
    slug: 'stripe',
    description: 'Process payments and manage customer transactions',
    category: 'Ecommerce',
    subcategory: 'payment-processing',
    logo: '/logos/stripe.svg',
    logoUrl: 'https://n8n.io/integrations/stripe/',
    tags: ['payments', 'billing', 'subscriptions', 'transactions'],
    nodeType: 'trigger_action',
    popularity: 91,
    automationUseCase: 'Automate payment processing, subscription management, invoice generation, and financial workflows.',
    businessBenefit: 'Handle payments automatically with intelligent fraud protection and seamless billing management.',
    commonIntegrations: ['E-commerce platforms', 'Accounting software', 'CRM systems'],
    features: ['Payment automation', 'Subscription billing', 'Fraud protection', 'Financial reporting'],
    lastUpdated: '2025-01-08'
  },

  // Project Management Category
  {
    id: 'trello',
    name: 'Trello',
    slug: 'trello',
    description: 'Manage boards, cards, and lists in Trello',
    category: 'Project Management',
    subcategory: 'task-management',
    logo: '/logos/trello.svg',
    logoUrl: 'https://n8n.io/integrations/trello/',
    tags: ['kanban', 'tasks', 'collaboration', 'boards'],
    nodeType: 'trigger_action',
    popularity: 87,
    automationUseCase: 'Automate task creation, card movements, team assignments, and project tracking workflows.',
    businessBenefit: 'Keep projects organized with automated task management and team coordination.',
    commonIntegrations: ['Slack', 'Google Drive', 'Time tracking tools'],
    features: ['Task automation', 'Board management', 'Team collaboration', 'Progress tracking'],
    lastUpdated: '2025-01-08'
  },
  {
    id: 'asana',
    name: 'Asana',
    slug: 'asana',
    description: 'Manage projects, tasks, and team collaboration',
    category: 'Project Management',
    subcategory: 'task-management',
    logo: '/logos/asana.svg',
    logoUrl: 'https://n8n.io/integrations/asana/',
    tags: ['tasks', 'projects', 'team', 'collaboration'],
    nodeType: 'trigger_action',
    popularity: 86,
    automationUseCase: 'Automate project workflows, task assignments, progress tracking, and team communications.',
    businessBenefit: 'Keep projects on track with automated task management and team coordination.',
    commonIntegrations: ['Slack', 'Gmail', 'Google Drive'],
    features: ['Project automation', 'Task management', 'Team collaboration', 'Progress reporting'],
    lastUpdated: '2025-01-08'
  },

  // Additional high-priority integrations
  {
    id: 'gmail',
    name: 'Gmail',
    slug: 'gmail',
    description: 'Google\'s email service with powerful automation capabilities',
    category: 'Communication & Messaging',
    subcategory: 'email',
    logo: '/logos/gmail.svg',
    logoUrl: 'https://n8n.io/integrations/gmail/',
    tags: ['email', 'google', 'communication', 'automation'],
    nodeType: 'trigger_action',
    popularity: 97,
    automationUseCase: 'Automate email processing, contact management, and communication workflows with powerful Gmail integration.',
    businessBenefit: 'Transform your inbox into an automation hub that handles emails intelligently and efficiently.',
    commonIntegrations: ['CRM systems', 'Calendar apps', 'Project management tools'],
    features: ['Email automation', 'Contact sync', 'Template responses', 'Smart filtering'],
    lastUpdated: '2025-01-08'
  },
  {
    id: 'zapier',
    name: 'Zapier',
    slug: 'zapier',
    description: 'Automation platform that connects 5000+ apps without coding',
    category: 'Development',
    subcategory: 'apis',
    logo: '/logos/zapier.svg',
    logoUrl: 'https://n8n.io/integrations/zapier/',
    tags: ['automation', 'integration', 'workflow', 'no-code'],
    nodeType: 'trigger_action',
    popularity: 89,
    automationUseCase: 'Create custom automations between any combination of business tools and platforms.',
    businessBenefit: 'Connect all your business tools with no-code automation workflows.',
    commonIntegrations: ['All major business apps', 'CRM systems', 'E-commerce platforms'],
    features: ['5000+ integrations', 'Custom workflows', 'Multi-step automation', 'Conditional logic'],
    lastUpdated: '2025-01-08'
  },

  // ===== MASSIVE LA BUSINESS INTEGRATIONS EXPANSION =====
  
  // DENTAL PRACTICE MANAGEMENT SYSTEMS
  {
    id: 'dentrix',
    name: 'Dentrix',
    slug: 'dentrix',
    description: 'Leading dental practice management software',
    category: 'Marketing & CRM',
    subcategory: 'healthcare',
    logo: '/logos/dentrix.svg',
    tags: ['dental', 'practice-management', 'appointments', 'patient-records'],
    nodeType: 'trigger_action',
    popularity: 78,
    automationUseCase: 'Automate patient appointment reminders, insurance verification, and treatment follow-ups.',
    businessBenefit: 'Reduce no-shows and streamline dental office operations.',
    commonIntegrations: ['SMS services', 'Email marketing', 'Payment processors'],
    features: ['Patient management', 'Scheduling automation', 'Insurance processing', 'Treatment tracking'],
    lastUpdated: '2025-01-08'
  },
  {
    id: 'eaglesoft',
    name: 'Eaglesoft',
    slug: 'eaglesoft',
    description: 'Comprehensive dental practice management solution',
    category: 'Marketing & CRM',
    subcategory: 'healthcare',
    logo: '/logos/eaglesoft.svg',
    tags: ['dental', 'practice-management', 'billing', 'scheduling'],
    nodeType: 'trigger_action',
    popularity: 72,
    automationUseCase: 'Streamline dental workflows with automated billing, scheduling, and patient communications.',
    businessBenefit: 'Improve practice efficiency and patient satisfaction.',
    commonIntegrations: ['Twilio', 'Mailchimp', 'QuickBooks'],
    features: ['Practice automation', 'Billing integration', 'Patient portal', 'Reporting'],
    lastUpdated: '2025-01-08'
  },
  {
    id: 'opendental',
    name: 'Open Dental',
    slug: 'opendental',
    description: 'Open source dental practice management software',
    category: 'Marketing & CRM',
    subcategory: 'healthcare',
    logo: '/logos/opendental.svg',
    tags: ['dental', 'open-source', 'practice-management', 'customizable'],
    nodeType: 'trigger_action',
    popularity: 65,
    automationUseCase: 'Customize dental workflows with open-source flexibility and automation.',
    businessBenefit: 'Cost-effective practice management with extensive customization.',
    commonIntegrations: ['API integrations', 'Custom webhooks', 'Third-party tools'],
    features: ['Open source', 'Customizable workflows', 'API access', 'Multi-location support'],
    lastUpdated: '2025-01-08'
  },

  // REAL ESTATE CRM SYSTEMS
  {
    id: 'followupboss',
    name: 'Follow Up Boss',
    slug: 'followupboss',
    description: 'Real estate CRM designed for lead follow-up and conversion',
    category: 'Marketing & CRM',
    subcategory: 'real-estate',
    logo: '/logos/followupboss.svg',
    tags: ['real-estate', 'crm', 'lead-management', 'follow-up'],
    nodeType: 'trigger_action',
    popularity: 84,
    automationUseCase: 'Automate real estate lead nurturing, follow-ups, and deal progression tracking.',
    businessBenefit: 'Convert more leads into closed deals with systematic follow-up.',
    commonIntegrations: ['Zillow', 'Realtor.com', 'Facebook Lead Ads', 'Gmail'],
    features: ['Lead automation', 'Deal tracking', 'Team management', 'Performance analytics'],
    lastUpdated: '2025-01-08'
  },
  {
    id: 'chime',
    name: 'Chime',
    slug: 'chime',
    description: 'Real estate CRM and lead management platform',
    category: 'Marketing & CRM', 
    subcategory: 'real-estate',
    logo: '/logos/chime.svg',
    tags: ['real-estate', 'crm', 'leads', 'automation'],
    nodeType: 'trigger_action',
    popularity: 79,
    automationUseCase: 'Streamline real estate operations with automated lead capture and nurturing.',
    businessBenefit: 'Increase conversion rates with intelligent lead management.',
    commonIntegrations: ['MLS systems', 'Social media platforms', 'Email marketing'],
    features: ['Lead capture', 'Automated nurturing', 'Deal management', 'Team collaboration'],
    lastUpdated: '2025-01-08'
  },
  {
    id: 'wise-agent',
    name: 'Wise Agent',
    slug: 'wise-agent',
    description: 'All-in-one real estate business management platform',
    category: 'Marketing & CRM',
    subcategory: 'real-estate',
    logo: '/logos/wise-agent.svg',
    tags: ['real-estate', 'business-management', 'transactions', 'marketing'],
    nodeType: 'trigger_action',
    popularity: 71,
    automationUseCase: 'Manage entire real estate business with automated transactions and marketing.',
    businessBenefit: 'Complete business automation from leads to closing.',
    commonIntegrations: ['DocuSign', 'MLS', 'Social media', 'Accounting software'],
    features: ['Transaction management', 'Marketing automation', 'Client database', 'Task automation'],
    lastUpdated: '2025-01-08'
  },

  // RESTAURANT POS SYSTEMS
  {
    id: 'toast-pos',
    name: 'Toast POS',
    slug: 'toast-pos',
    description: 'All-in-one restaurant management platform',
    category: 'E-commerce & Sales',
    subcategory: 'point-of-sale',
    logo: '/logos/toast.svg',
    tags: ['restaurant', 'pos', 'orders', 'payments'],
    nodeType: 'trigger_action',
    popularity: 91,
    automationUseCase: 'Automate restaurant operations from orders to kitchen management and customer engagement.',
    businessBenefit: 'Streamline restaurant operations and improve customer experience.',
    commonIntegrations: ['DoorDash', 'Uber Eats', 'Grubhub', 'Inventory systems'],
    features: ['Order automation', 'Kitchen display', 'Loyalty programs', 'Analytics'],
    lastUpdated: '2025-01-08'
  },
  {
    id: 'square-restaurants',
    name: 'Square for Restaurants',
    slug: 'square-restaurants', 
    description: 'Point-of-sale system designed for restaurants',
    category: 'E-commerce & Sales',
    subcategory: 'point-of-sale',
    logo: '/logos/square.svg',
    tags: ['restaurant', 'pos', 'payments', 'square'],
    nodeType: 'trigger_action',
    popularity: 86,
    automationUseCase: 'Manage restaurant sales, inventory, and staff with automated POS workflows.',
    businessBenefit: 'Simplify restaurant operations with integrated payment and management tools.',
    commonIntegrations: ['QuickBooks', 'Delivery apps', 'Payroll systems', 'Inventory'],
    features: ['POS automation', 'Inventory tracking', 'Staff management', 'Reporting'],
    lastUpdated: '2025-01-08'
  },
  {
    id: 'resy',
    name: 'Resy',
    slug: 'resy',
    description: 'Restaurant reservation and table management platform',
    category: 'Marketing & CRM',
    subcategory: 'hospitality',
    logo: '/logos/resy.svg',
    tags: ['restaurant', 'reservations', 'table-management', 'hospitality'],
    nodeType: 'trigger_action',
    popularity: 83,
    automationUseCase: 'Automate restaurant reservations, waitlist management, and customer communications.',
    businessBenefit: 'Maximize table turns and improve guest experience.',
    commonIntegrations: ['POS systems', 'SMS platforms', 'Email marketing', 'Social media'],
    features: ['Reservation automation', 'Waitlist management', 'Guest messaging', 'Analytics'],
    lastUpdated: '2025-01-08'
  },

  // HOME SERVICES SOFTWARE
  {
    id: 'servicetitan',
    name: 'ServiceTitan',
    slug: 'servicetitan',
    description: 'All-in-one software solution for home service businesses',
    category: 'Project Management',
    subcategory: 'field-service',
    logo: '/logos/servicetitan.svg',
    tags: ['home-services', 'field-service', 'scheduling', 'dispatching'],
    nodeType: 'trigger_action',
    popularity: 89,
    automationUseCase: 'Automate HVAC, plumbing, and electrical business operations from dispatch to billing.',
    businessBenefit: 'Streamline field operations and improve customer satisfaction.',
    commonIntegrations: ['QuickBooks', 'GPS tracking', 'Payment processors', 'Marketing tools'],
    features: ['Dispatch automation', 'Job scheduling', 'Inventory management', 'Customer portal'],
    lastUpdated: '2025-01-08'
  },
  {
    id: 'jobber',
    name: 'Jobber',
    slug: 'jobber',
    description: 'Field service management software for small businesses',
    category: 'Project Management',
    subcategory: 'field-service',
    logo: '/logos/jobber.svg',
    tags: ['field-service', 'scheduling', 'invoicing', 'customer-management'],
    nodeType: 'trigger_action',
    popularity: 82,
    automationUseCase: 'Manage field service operations with automated scheduling, invoicing, and customer communications.',
    businessBenefit: 'Grow field service business with professional automation.',
    commonIntegrations: ['QuickBooks', 'Stripe', 'Google Calendar', 'SMS services'],
    features: ['Job scheduling', 'Quote automation', 'Invoice generation', 'Customer portal'],
    lastUpdated: '2025-01-08'
  },
  {
    id: 'housecall-pro',
    name: 'Housecall Pro',
    slug: 'housecall-pro',
    description: 'All-in-one software for home service professionals',
    category: 'Project Management',
    subcategory: 'field-service', 
    logo: '/logos/housecall-pro.svg',
    tags: ['home-services', 'scheduling', 'invoicing', 'customer-communication'],
    nodeType: 'trigger_action',
    popularity: 80,
    automationUseCase: 'Automate home service business from job scheduling to payment collection.',
    businessBenefit: 'Professional service delivery with automated workflows.',
    commonIntegrations: ['Payment processors', 'Marketing tools', 'Accounting software', 'GPS tracking'],
    features: ['Schedule automation', 'Payment processing', 'Customer messaging', 'Job tracking'],
    lastUpdated: '2025-01-08'
  },

  // LEGAL PRACTICE MANAGEMENT
  {
    id: 'clio',
    name: 'Clio',
    slug: 'clio',
    description: 'Cloud-based legal practice management software',
    category: 'Marketing & CRM',
    subcategory: 'legal',
    logo: '/logos/clio.svg',
    tags: ['legal', 'practice-management', 'billing', 'case-management'],
    nodeType: 'trigger_action',
    popularity: 85,
    automationUseCase: 'Automate legal practice operations including client intake, billing, and case management.',
    businessBenefit: 'Streamline law firm operations and improve client service.',
    commonIntegrations: ['Outlook', 'QuickBooks', 'Document management', 'Payment processors'],
    features: ['Case automation', 'Time tracking', 'Client portal', 'Document automation'],
    lastUpdated: '2025-01-08'
  },
  {
    id: 'mycase',
    name: 'MyCase',
    slug: 'mycase',
    description: 'Legal case management and client communication platform',
    category: 'Marketing & CRM',
    subcategory: 'legal',
    logo: '/logos/mycase.svg',
    tags: ['legal', 'case-management', 'client-portal', 'billing'],
    nodeType: 'trigger_action',
    popularity: 78,
    automationUseCase: 'Manage legal cases with automated workflows, client communications, and billing.',
    businessBenefit: 'Improve law firm efficiency and client satisfaction.',
    commonIntegrations: ['Email clients', 'Accounting software', 'Document storage', 'Payment systems'],
    features: ['Case management', 'Client communication', 'Billing automation', 'Document management'],
    lastUpdated: '2025-01-08'
  },

  // ACCOUNTING SOFTWARE
  {
    id: 'quickbooks-online',
    name: 'QuickBooks Online',
    slug: 'quickbooks-online',
    description: 'Cloud-based accounting software for small businesses',
    category: 'Data & Storage',
    subcategory: 'accounting',
    logo: '/logos/quickbooks.svg',
    tags: ['accounting', 'bookkeeping', 'invoicing', 'tax-preparation'],
    nodeType: 'trigger_action',
    popularity: 94,
    automationUseCase: 'Automate bookkeeping, invoicing, expense tracking, and financial reporting.',
    businessBenefit: 'Streamline financial management and tax preparation.',
    commonIntegrations: ['Banks', 'Payment processors', 'CRM systems', 'E-commerce platforms'],
    features: ['Automated bookkeeping', 'Invoice generation', 'Expense tracking', 'Financial reporting'],
    lastUpdated: '2025-01-08'
  },
  {
    id: 'xero',
    name: 'Xero',
    slug: 'xero',
    description: 'Beautiful accounting software for small businesses',
    category: 'Data & Storage',
    subcategory: 'accounting',
    logo: '/logos/xero.svg',
    tags: ['accounting', 'invoicing', 'bank-reconciliation', 'financial-reports'],
    nodeType: 'trigger_action',
    popularity: 87,
    automationUseCase: 'Simplify accounting with automated bank feeds, invoicing, and financial reporting.',
    businessBenefit: 'Beautiful, easy-to-use accounting automation.',
    commonIntegrations: ['Banking', 'Payment systems', 'CRM', 'Inventory management'],
    features: ['Bank automation', 'Invoice automation', 'Financial reporting', 'Multi-currency'],
    lastUpdated: '2025-01-08'
  },

  // E-COMMERCE PLATFORMS
  {
    id: 'woocommerce',
    name: 'WooCommerce',
    slug: 'woocommerce',
    description: 'WordPress e-commerce plugin for online stores',
    category: 'E-commerce & Sales',
    subcategory: 'ecommerce-platform',
    logo: '/logos/woocommerce.svg',
    tags: ['ecommerce', 'wordpress', 'online-store', 'customizable'],
    nodeType: 'trigger_action',
    popularity: 88,
    automationUseCase: 'Automate WordPress e-commerce operations including orders, inventory, and customer communications.',
    businessBenefit: 'Flexible e-commerce automation with WordPress integration.',
    commonIntegrations: ['Payment gateways', 'Shipping providers', 'Email marketing', 'Analytics'],
    features: ['Order automation', 'Inventory sync', 'Customer management', 'Marketing integration'],
    lastUpdated: '2025-01-08'
  },
  {
    id: 'magento',
    name: 'Magento',
    slug: 'magento',
    description: 'Enterprise e-commerce platform for online stores',
    category: 'E-commerce & Sales',
    subcategory: 'ecommerce-platform',
    logo: '/logos/magento.svg',
    tags: ['ecommerce', 'enterprise', 'b2b', 'customizable'],
    nodeType: 'trigger_action',
    popularity: 75,
    automationUseCase: 'Power enterprise e-commerce with automated order processing, inventory management, and customer workflows.',
    businessBenefit: 'Scalable e-commerce automation for growing businesses.',
    commonIntegrations: ['ERP systems', 'Payment processors', 'Shipping', 'Marketing automation'],
    features: ['Enterprise automation', 'B2B features', 'Multi-store management', 'Advanced reporting'],
    lastUpdated: '2025-01-08'
  },

  // SOCIAL MEDIA MANAGEMENT
  {
    id: 'hootsuite',
    name: 'Hootsuite',
    slug: 'hootsuite',
    description: 'Social media management platform for businesses',
    category: 'Communication & Messaging',
    subcategory: 'social-media',
    logo: '/logos/hootsuite.svg',
    tags: ['social-media', 'scheduling', 'analytics', 'team-collaboration'],
    nodeType: 'trigger_action',
    popularity: 84,
    automationUseCase: 'Automate social media posting, engagement monitoring, and performance reporting.',
    businessBenefit: 'Maintain consistent social media presence with automated scheduling.',
    commonIntegrations: ['All major social platforms', 'Analytics tools', 'Content libraries'],
    features: ['Post scheduling', 'Social listening', 'Team collaboration', 'Analytics'],
    lastUpdated: '2025-01-08'
  },
  {
    id: 'buffer',
    name: 'Buffer',
    slug: 'buffer',
    description: 'Simple social media management platform',
    category: 'Communication & Messaging',
    subcategory: 'social-media',
    logo: '/logos/buffer.svg',
    tags: ['social-media', 'scheduling', 'analytics', 'content-planning'],
    nodeType: 'trigger_action',
    popularity: 81,
    automationUseCase: 'Schedule and automate social media content across multiple platforms.',
    businessBenefit: 'Streamline social media management with simple automation.',
    commonIntegrations: ['Facebook', 'Twitter', 'Instagram', 'LinkedIn', 'Pinterest'],
    features: ['Content scheduling', 'Performance analytics', 'Team management', 'Content calendar'],
    lastUpdated: '2025-01-08'
  },

  // VIDEO CONFERENCING
  {
    id: 'zoom',
    name: 'Zoom',
    slug: 'zoom',
    description: 'Video conferencing and communication platform',
    category: 'Communication & Messaging',
    subcategory: 'video-conferencing',
    logo: '/logos/zoom.svg',
    tags: ['video-conferencing', 'meetings', 'webinars', 'communication'],
    nodeType: 'trigger_action',
    popularity: 93,
    automationUseCase: 'Automate meeting scheduling, follow-ups, and recording distribution.',
    businessBenefit: 'Streamline virtual meetings and communication workflows.',
    commonIntegrations: ['Calendar apps', 'CRM systems', 'Email platforms', 'Project management'],
    features: ['Meeting automation', 'Recording management', 'Participant tracking', 'Integration APIs'],
    lastUpdated: '2025-01-08'
  },
  {
    id: 'microsoft-teams',
    name: 'Microsoft Teams',
    slug: 'microsoft-teams',
    description: 'Collaboration platform combining chat, video, and file sharing',
    category: 'Communication & Messaging',
    subcategory: 'video-conferencing',
    logo: '/logos/microsoft-teams.svg',
    tags: ['collaboration', 'video-conferencing', 'chat', 'file-sharing'],
    nodeType: 'trigger_action',
    popularity: 90,
    automationUseCase: 'Automate team collaboration, meeting management, and workflow notifications.',
    businessBenefit: 'Centralize team communication and project collaboration.',
    commonIntegrations: ['Microsoft 365', 'SharePoint', 'Power Platform', 'Third-party apps'],
    features: ['Team automation', 'Meeting scheduling', 'File collaboration', 'App integrations'],
    lastUpdated: '2025-01-08'
  },

  // CUSTOMER SERVICE PLATFORMS
  {
    id: 'zendesk',
    name: 'Zendesk',
    slug: 'zendesk',
    description: 'Customer service and support platform',
    category: 'Communication & Messaging',
    subcategory: 'customer-support',
    logo: '/logos/zendesk.svg',
    tags: ['customer-service', 'helpdesk', 'ticketing', 'knowledge-base'],
    nodeType: 'trigger_action',
    popularity: 87,
    automationUseCase: 'Automate customer support workflows, ticket routing, and response management.',
    businessBenefit: 'Improve customer service efficiency and satisfaction.',
    commonIntegrations: ['CRM systems', 'Email platforms', 'Chat widgets', 'Knowledge bases'],
    features: ['Ticket automation', 'Customer portal', 'Knowledge management', 'Performance analytics'],
    lastUpdated: '2025-01-08'
  },
  {
    id: 'intercom',
    name: 'Intercom',
    slug: 'intercom',
    description: 'Customer messaging platform for sales and support',
    category: 'Communication & Messaging',
    subcategory: 'customer-support',
    logo: '/logos/intercom.svg',
    tags: ['customer-messaging', 'live-chat', 'support', 'sales'],
    nodeType: 'trigger_action',
    popularity: 84,
    automationUseCase: 'Automate customer conversations, lead qualification, and support routing.',
    businessBenefit: 'Convert more visitors with intelligent messaging automation.',
    commonIntegrations: ['CRM systems', 'Email marketing', 'Analytics tools', 'Development APIs'],
    features: ['Conversation automation', 'Lead qualification', 'Customer segmentation', 'Performance tracking'],
    lastUpdated: '2025-01-08'
  },

  // PAYMENT PROCESSORS
  {
    id: 'stripe',
    name: 'Stripe',
    slug: 'stripe',
    description: 'Online payment processing for businesses',
    category: 'E-commerce & Sales',
    subcategory: 'payments',
    logo: '/logos/stripe.svg',
    tags: ['payments', 'e-commerce', 'subscriptions', 'marketplace'],
    nodeType: 'trigger_action',
    popularity: 92,
    automationUseCase: 'Automate payment processing, subscription management, and revenue tracking.',
    businessBenefit: 'Streamline online payments and financial workflows.',
    commonIntegrations: ['E-commerce platforms', 'Accounting software', 'CRM systems', 'Analytics'],
    features: ['Payment automation', 'Subscription billing', 'Fraud protection', 'Revenue analytics'],
    lastUpdated: '2025-01-08'
  },
  {
    id: 'paypal',
    name: 'PayPal',
    slug: 'paypal',
    description: 'Global payment platform for online transactions',
    category: 'E-commerce & Sales',
    subcategory: 'payments',
    logo: '/logos/paypal.svg',
    tags: ['payments', 'global', 'mobile', 'checkout'],
    nodeType: 'trigger_action',
    popularity: 89,
    automationUseCase: 'Process payments, manage invoicing, and automate transaction workflows.',
    businessBenefit: 'Accept payments globally with trusted automation.',
    commonIntegrations: ['E-commerce sites', 'Accounting software', 'Mobile apps', 'Marketplaces'],
    features: ['Global payments', 'Invoice automation', 'Mobile payments', 'Seller protection'],
    lastUpdated: '2025-01-08'
  },

  // INVENTORY MANAGEMENT
  {
    id: 'cin7',
    name: 'Cin7',
    slug: 'cin7',
    description: 'Inventory management and order automation platform',
    category: 'Data & Storage',
    subcategory: 'inventory',
    logo: '/logos/cin7.svg',
    tags: ['inventory', 'warehouse', 'order-management', 'b2b'],
    nodeType: 'trigger_action',
    popularity: 74,
    automationUseCase: 'Automate inventory tracking, order fulfillment, and warehouse operations.',
    businessBenefit: 'Optimize inventory levels and reduce fulfillment errors.',
    commonIntegrations: ['E-commerce platforms', 'Accounting software', 'Shipping carriers', 'Marketplaces'],
    features: ['Inventory automation', 'Order fulfillment', 'Warehouse management', 'Multi-channel sync'],
    lastUpdated: '2025-01-08'
  },
  {
    id: 'skuvault',
    name: 'SkuVault',
    slug: 'skuvault',
    description: 'Warehouse management and inventory control system',
    category: 'Data & Storage',
    subcategory: 'inventory',
    logo: '/logos/skuvault.svg',
    tags: ['warehouse', 'inventory-control', 'order-fulfillment', 'barcode'],
    nodeType: 'trigger_action',
    popularity: 71,
    automationUseCase: 'Automate warehouse operations with barcode scanning and inventory control.',
    businessBenefit: 'Reduce inventory errors and improve fulfillment speed.',
    commonIntegrations: ['E-commerce platforms', 'Shipping software', 'Accounting systems', 'Marketplaces'],
    features: ['Barcode automation', 'Quality control', 'Cycle counting', 'Pick optimization'],
    lastUpdated: '2025-01-08'
  },

  // ADDITIONAL POPULAR BUSINESS INTEGRATIONS
  // CRM & Sales Tools
  {
    id: 'pipedrive',
    name: 'Pipedrive',
    slug: 'pipedrive',
    description: 'Visual sales pipeline management and CRM for growing businesses',
    category: 'Marketing & CRM',
    subcategory: 'crm',
    logo: '/logos/pipedrive.svg',
    tags: ['crm', 'sales-pipeline', 'deal-management', 'lead-tracking'],
    nodeType: 'trigger_action',
    popularity: 89,
    automationUseCase: 'Automatically sync leads between marketing channels and sales pipeline, update deal stages based on activities.',
    businessBenefit: 'Never lose a deal in the pipeline. Automatic lead routing and stage progression.',
    commonIntegrations: ['Gmail', 'Mailchimp', 'Slack', 'Google Calendar'],
    features: ['Visual pipeline management', 'Activity tracking', 'Deal forecasting', 'Lead scoring'],
    lastUpdated: '2025-01-08'
  },
  {
    id: 'zoho-crm',
    name: 'Zoho CRM',
    slug: 'zoho-crm',
    description: 'Complete customer relationship management suite for businesses',
    category: 'Marketing & CRM',
    subcategory: 'crm',
    logo: '/logos/zoho.svg',
    tags: ['crm', 'sales-automation', 'customer-management', 'lead-nurturing'],
    nodeType: 'trigger_action',
    popularity: 86,
    automationUseCase: 'Automate lead assignment, follow-up sequences, and customer communication workflows.',
    businessBenefit: 'Complete customer journey automation from lead to close to retention.',
    commonIntegrations: ['Google Workspace', 'Mailchimp', 'QuickBooks', 'Social media'],
    features: ['Sales automation', 'Customer analytics', 'Territory management', 'Mobile CRM'],
    lastUpdated: '2025-01-08'
  },
  {
    id: 'monday-sales-crm',
    name: 'Monday Sales CRM',
    slug: 'monday-sales-crm',
    description: 'Visual CRM and project management for sales teams',
    category: 'Marketing & CRM',
    subcategory: 'crm',
    logo: '/logos/monday.svg',
    tags: ['crm', 'project-management', 'sales-tracking', 'team-collaboration'],
    nodeType: 'trigger_action',
    popularity: 83,
    automationUseCase: 'Coordinate sales activities with project delivery, automate client onboarding workflows.',
    businessBenefit: 'Align sales and delivery teams with unified customer view and automated handoffs.',
    commonIntegrations: ['Slack', 'Gmail', 'Zoom', 'DocuSign'],
    features: ['Visual sales boards', 'Client portal', 'Timeline management', 'Custom automations'],
    lastUpdated: '2025-01-08'
  },

  // Communication & Messaging
  {
    id: 'microsoft-teams',
    name: 'Microsoft Teams',
    slug: 'microsoft-teams',
    description: 'Enterprise communication and collaboration platform',
    category: 'Communication & Messaging',
    subcategory: 'chat',
    logo: '/logos/teams.svg',
    tags: ['team-chat', 'video-conferencing', 'file-sharing', 'enterprise'],
    nodeType: 'trigger_action',
    popularity: 91,
    automationUseCase: 'Send automated notifications to teams, create meetings from form submissions, share reports automatically.',
    businessBenefit: 'Keep teams informed with automated updates and seamless information flow.',
    commonIntegrations: ['SharePoint', 'Outlook', 'Power Automate', 'Azure'],
    features: ['Team notifications', 'Meeting automation', 'File sync', 'Bot integrations'],
    lastUpdated: '2025-01-08'
  },
  {
    id: 'whatsapp-business',
    name: 'WhatsApp Business',
    slug: 'whatsapp-business',
    description: 'Business messaging platform for customer communication',
    category: 'Communication & Messaging',
    subcategory: 'customer-support',
    logo: '/logos/whatsapp.svg',
    tags: ['messaging', 'customer-support', 'mobile', 'international'],
    nodeType: 'trigger_action',
    popularity: 92,
    automationUseCase: 'Send automated appointment confirmations, order updates, and customer support messages via WhatsApp.',
    businessBenefit: 'Reach customers on their preferred messaging platform with automated business communications.',
    commonIntegrations: ['CRM systems', 'E-commerce platforms', 'Booking systems', 'Support desks'],
    features: ['Automated messaging', 'Rich media support', 'Contact management', 'Business catalog'],
    lastUpdated: '2025-01-08'
  },

  // E-commerce & Payments
  {
    id: 'woocommerce',
    name: 'WooCommerce',
    slug: 'woocommerce',
    description: 'WordPress e-commerce plugin for online stores',
    category: 'Ecommerce',
    subcategory: 'online-stores',
    logo: '/logos/woocommerce.svg',
    tags: ['ecommerce', 'wordpress', 'online-store', 'payments'],
    nodeType: 'trigger_action',
    popularity: 88,
    automationUseCase: 'Sync orders with inventory systems, send automated follow-up emails, manage customer data across platforms.',
    businessBenefit: 'Streamline e-commerce operations with automated order processing and customer communication.',
    commonIntegrations: ['WordPress', 'PayPal', 'Stripe', 'MailChimp'],
    features: ['Order automation', 'Inventory sync', 'Customer segmentation', 'Payment processing'],
    lastUpdated: '2025-01-08'
  },
  {
    id: 'square',
    name: 'Square',
    slug: 'square',
    description: 'Point-of-sale and payment processing platform',
    category: 'Ecommerce',
    subcategory: 'payment-processing',
    logo: '/logos/square.svg',
    tags: ['pos', 'payments', 'inventory', 'retail'],
    nodeType: 'trigger_action',
    popularity: 87,
    automationUseCase: 'Sync POS sales with accounting, send receipts automatically, update inventory across channels.',
    businessBenefit: 'Unify online and offline sales with automated reporting and inventory management.',
    commonIntegrations: ['QuickBooks', 'Shopify', 'BigCommerce', 'Email marketing'],
    features: ['POS integration', 'Payment processing', 'Inventory tracking', 'Analytics sync'],
    lastUpdated: '2025-01-08'
  },
  {
    id: 'paypal',
    name: 'PayPal',
    slug: 'paypal',
    description: 'Global digital payment platform',
    category: 'Ecommerce',
    subcategory: 'payment-processing',
    logo: '/logos/paypal.svg',
    tags: ['payments', 'international', 'invoicing', 'subscriptions'],
    nodeType: 'trigger_action',
    popularity: 93,
    automationUseCase: 'Automatically create invoices, process refunds, sync payment data with accounting systems.',
    businessBenefit: 'Streamline payment processing with automated invoicing and reconciliation.',
    commonIntegrations: ['E-commerce platforms', 'Accounting software', 'CRM systems', 'Subscription management'],
    features: ['Payment automation', 'Invoice generation', 'Subscription billing', 'International payments'],
    lastUpdated: '2025-01-08'
  },

  // LA Business Specific Tools
  {
    id: 'toast-pos',
    name: 'Toast POS',
    slug: 'toast-pos',
    description: 'Restaurant point-of-sale and management system',
    category: 'Business Management',
    subcategory: 'field-service',
    logo: '/logos/toast.svg',
    tags: ['restaurant', 'pos', 'ordering', 'payments', 'la-business'],
    nodeType: 'trigger_action',
    popularity: 85,
    automationUseCase: 'Sync orders with kitchen display, automate inventory alerts, send customer receipts and loyalty updates.',
    businessBenefit: 'Complete restaurant automation from ordering to payment to customer retention.',
    commonIntegrations: ['DoorDash', 'Uber Eats', 'Grubhub', 'QuickBooks'],
    features: ['Order management', 'Kitchen automation', 'Loyalty programs', 'Analytics'],
    lastUpdated: '2025-01-08'
  },
  {
    id: 'servicetitan',
    name: 'ServiceTitan',
    slug: 'servicetitan',
    description: 'Field service management software for home service businesses',
    category: 'Business Management',
    subcategory: 'field-service',
    logo: '/logos/servicetitan.svg',
    tags: ['field-service', 'hvac', 'plumbing', 'scheduling', 'la-business'],
    nodeType: 'trigger_action',
    popularity: 89,
    automationUseCase: 'Automatically schedule jobs, send technician notifications, update customers on arrival times.',
    businessBenefit: 'Optimize field operations with automated scheduling and real-time customer communication.',
    commonIntegrations: ['QuickBooks', 'Google Calendar', 'SMS platforms', 'Marketing tools'],
    features: ['Job scheduling', 'Dispatch automation', 'Customer communication', 'Invoice generation'],
    lastUpdated: '2025-01-08'
  },
  {
    id: 'jobber',
    name: 'Jobber',
    slug: 'jobber',
    description: 'Field service management for small to medium businesses',
    category: 'Business Management',
    subcategory: 'field-service',
    logo: '/logos/jobber.svg',
    tags: ['field-service', 'scheduling', 'invoicing', 'customer-management'],
    nodeType: 'trigger_action',
    popularity: 82,
    automationUseCase: 'Automate job scheduling, send service reminders, process payments and generate reports.',
    businessBenefit: 'Complete field service automation from quote to payment with minimal manual work.',
    commonIntegrations: ['QuickBooks', 'Stripe', 'Google Calendar', 'Mailchimp'],
    features: ['Job automation', 'Customer portal', 'Payment processing', 'Route optimization'],
    lastUpdated: '2025-01-08'
  },
  {
    id: 'follow-up-boss',
    name: 'Follow Up Boss',
    slug: 'follow-up-boss',
    description: 'Real estate CRM and lead management system',
    category: 'Marketing & CRM',
    subcategory: 'crm',
    logo: '/logos/follow-up-boss.svg',
    tags: ['real-estate', 'crm', 'lead-management', 'la-business'],
    nodeType: 'trigger_action',
    popularity: 87,
    automationUseCase: 'Automatically assign leads to agents, send follow-up sequences, track property interests.',
    businessBenefit: 'Never lose a real estate lead with automated follow-up and agent assignment.',
    commonIntegrations: ['Zillow', 'Realtor.com', 'MLS systems', 'DocuSign'],
    features: ['Lead routing', 'Automated follow-up', 'Property tracking', 'Agent management'],
    lastUpdated: '2025-01-08'
  },
  {
    id: 'dentrix',
    name: 'Dentrix',
    slug: 'dentrix',
    description: 'Dental practice management software',
    category: 'Business Management',
    subcategory: 'healthcare',
    logo: '/logos/dentrix.svg',
    tags: ['dental', 'healthcare', 'appointments', 'patient-management', 'la-business'],
    nodeType: 'trigger_action',
    popularity: 80,
    automationUseCase: 'Send automated appointment reminders, sync patient data, manage insurance claims processing.',
    businessBenefit: 'Reduce no-shows and streamline patient communication with automated dental practice workflows.',
    commonIntegrations: ['Insurance systems', 'SMS platforms', 'Email marketing', 'Accounting software'],
    features: ['Appointment automation', 'Patient communication', 'Insurance processing', 'Treatment planning'],
    lastUpdated: '2025-01-08'
  },
  {
    id: 'opentable',
    name: 'OpenTable',
    slug: 'opentable',
    description: 'Restaurant reservation and table management platform',
    category: 'Business Management',
    subcategory: 'hospitality',
    logo: '/logos/opentable.svg',
    tags: ['restaurant', 'reservations', 'hospitality', 'la-business'],
    nodeType: 'trigger_action',
    popularity: 88,
    automationUseCase: 'Sync reservations with POS, send confirmation emails, manage waitlists automatically.',
    businessBenefit: 'Optimize table turnover and customer experience with automated reservation management.',
    commonIntegrations: ['Restaurant POS', 'Email marketing', 'Review platforms', 'Payment systems'],
    features: ['Reservation automation', 'Waitlist management', 'Customer communication', 'Table optimization'],
    lastUpdated: '2025-01-08'
  },
  {
    id: 'clio',
    name: 'Clio',
    slug: 'clio',
    description: 'Legal practice management software',
    category: 'Business Management',
    subcategory: 'legal',
    logo: '/logos/clio.svg',
    tags: ['legal', 'case-management', 'billing', 'client-communication'],
    nodeType: 'trigger_action',
    popularity: 84,
    automationUseCase: 'Automate client intake, send case updates, generate invoices and track time automatically.',
    businessBenefit: 'Streamline legal workflows with automated client communication and billing processes.',
    commonIntegrations: ['QuickBooks', 'Outlook', 'DocuSign', 'LawPay'],
    features: ['Case automation', 'Time tracking', 'Client portal', 'Document management'],
    lastUpdated: '2025-01-08'
  },

  // Accounting & Finance
  {
    id: 'quickbooks',
    name: 'QuickBooks',
    slug: 'quickbooks',
    description: 'Small business accounting and bookkeeping software',
    category: 'Data & Storage',
    subcategory: 'accounting',
    logo: '/logos/quickbooks.svg',
    tags: ['accounting', 'bookkeeping', 'invoicing', 'expenses'],
    nodeType: 'trigger_action',
    popularity: 94,
    automationUseCase: 'Automatically sync sales data, create invoices, track expenses, and generate financial reports.',
    businessBenefit: 'Eliminate manual bookkeeping with automated financial data sync and reporting.',
    commonIntegrations: ['Banks', 'E-commerce platforms', 'CRM systems', 'Payment processors'],
    features: ['Automated bookkeeping', 'Invoice generation', 'Expense tracking', 'Financial reporting'],
    lastUpdated: '2025-01-08'
  },
  {
    id: 'xero',
    name: 'Xero',
    slug: 'xero',
    description: 'Cloud-based accounting software for small businesses',
    category: 'Data & Storage',
    subcategory: 'accounting',
    logo: '/logos/xero.svg',
    tags: ['accounting', 'cloud', 'invoicing', 'bank-reconciliation'],
    nodeType: 'trigger_action',
    popularity: 89,
    automationUseCase: 'Auto-reconcile bank transactions, send invoice reminders, sync with e-commerce platforms.',
    businessBenefit: 'Real-time financial insights with automated data entry and reconciliation.',
    commonIntegrations: ['Banks', 'Shopify', 'Stripe', 'Inventory systems'],
    features: ['Bank reconciliation', 'Invoice automation', 'Financial reporting', 'Multi-currency'],
    lastUpdated: '2025-01-08'
  },
  {
    id: 'freshbooks',
    name: 'FreshBooks',
    slug: 'freshbooks',
    description: 'Invoicing and time tracking software for service businesses',
    category: 'Data & Storage',
    subcategory: 'accounting',
    logo: '/logos/freshbooks.svg',
    tags: ['invoicing', 'time-tracking', 'project-accounting', 'freelance'],
    nodeType: 'trigger_action',
    popularity: 85,
    automationUseCase: 'Automatically track project time, generate invoices, send payment reminders, sync expenses.',
    businessBenefit: 'Get paid faster with automated invoicing and time tracking for service businesses.',
    commonIntegrations: ['Payment processors', 'Project management', 'CRM systems', 'Banks'],
    features: ['Time tracking automation', 'Invoice generation', 'Payment reminders', 'Project profitability'],
    lastUpdated: '2025-01-08'
  },

  // MORE BUSINESS CRITICAL INTEGRATIONS
  // Email Marketing & Automation
  {
    id: 'activecampaign',
    name: 'ActiveCampaign',
    slug: 'activecampaign',
    description: 'Customer experience automation platform combining email marketing and CRM',
    category: 'Marketing & CRM',
    subcategory: 'email-marketing',
    logo: '/logos/activecampaign.svg',
    tags: ['email-marketing', 'automation', 'crm', 'segmentation'],
    nodeType: 'trigger_action',
    popularity: 87,
    automationUseCase: 'Create sophisticated email sequences, track customer behavior, automate lead scoring.',
    businessBenefit: 'Convert leads with intelligent email automation and behavioral tracking.',
    commonIntegrations: ['Shopify', 'WordPress', 'Facebook Ads', 'Zapier'],
    features: ['Email sequences', 'Customer journey mapping', 'Lead scoring', 'Behavioral automation'],
    lastUpdated: '2025-01-08'
  },
  {
    id: 'constantcontact',
    name: 'Constant Contact',
    slug: 'constantcontact',
    description: 'Email marketing and digital marketing automation platform',
    category: 'Marketing & CRM',
    subcategory: 'email-marketing',
    logo: '/logos/constantcontact.svg',
    tags: ['email-marketing', 'events', 'social-media', 'small-business'],
    nodeType: 'trigger_action',
    popularity: 81,
    automationUseCase: 'Automate email campaigns, event marketing, and social media posting for small businesses.',
    businessBenefit: 'All-in-one marketing automation designed for small business success.',
    commonIntegrations: ['WordPress', 'Shopify', 'QuickBooks', 'Survey tools'],
    features: ['Email automation', 'Event marketing', 'Social posting', 'Contact management'],
    lastUpdated: '2025-01-08'
  },
  {
    id: 'convertkit',
    name: 'ConvertKit',
    slug: 'convertkit',
    description: 'Email marketing platform built for creators and online businesses',
    category: 'Marketing & CRM',
    subcategory: 'email-marketing',
    logo: '/logos/convertkit.svg',
    tags: ['email-marketing', 'creators', 'automation', 'landing-pages'],
    nodeType: 'trigger_action',
    popularity: 79,
    automationUseCase: 'Build email funnels, tag subscribers based on behavior, automate course delivery.',
    businessBenefit: 'Turn subscribers into customers with creator-focused automation tools.',
    commonIntegrations: ['WordPress', 'Teachable', 'Gumroad', 'Stripe'],
    features: ['Email sequences', 'Subscriber tagging', 'Landing pages', 'Commerce integration'],
    lastUpdated: '2025-01-08'
  },

  // Project Management & Collaboration
  {
    id: 'monday-com',
    name: 'Monday.com',
    slug: 'monday-com',
    description: 'Work operating system for teams to run projects and workflows',
    category: 'Project Management',
    subcategory: 'collaboration',
    logo: '/logos/monday.svg',
    tags: ['project-management', 'workflows', 'collaboration', 'automation'],
    nodeType: 'trigger_action',
    popularity: 88,
    automationUseCase: 'Automate project workflows, task assignments, status updates, and team notifications.',
    businessBenefit: 'Streamline team collaboration with visual project automation.',
    commonIntegrations: ['Slack', 'Gmail', 'Jira', 'Salesforce'],
    features: ['Custom workflows', 'Board automations', 'Timeline tracking', 'Resource management'],
    lastUpdated: '2025-01-08'
  },
  {
    id: 'clickup',
    name: 'ClickUp',
    slug: 'clickup',
    description: 'All-in-one productivity platform for teams',
    category: 'Project Management',
    subcategory: 'task-management',
    logo: '/logos/clickup.svg',
    tags: ['project-management', 'task-management', 'docs', 'goals'],
    nodeType: 'trigger_action',
    popularity: 86,
    automationUseCase: 'Automate task creation, status updates, time tracking, and cross-team workflows.',
    businessBenefit: 'Replace multiple tools with one automated productivity platform.',
    commonIntegrations: ['Slack', 'Google Workspace', 'Figma', 'GitHub'],
    features: ['Task automation', 'Custom fields', 'Goal tracking', 'Document collaboration'],
    lastUpdated: '2025-01-08'
  },
  {
    id: 'basecamp',
    name: 'Basecamp',
    slug: 'basecamp',
    description: 'Project management and team collaboration software',
    category: 'Project Management',
    subcategory: 'collaboration',
    logo: '/logos/basecamp.svg',
    tags: ['project-management', 'team-collaboration', 'messaging', 'simple'],
    nodeType: 'trigger_action',
    popularity: 77,
    automationUseCase: 'Automate project updates, team check-ins, and client communication.',
    businessBenefit: 'Keep projects organized with simple, automated team coordination.',
    commonIntegrations: ['Email', 'Calendar apps', 'Time tracking', 'File storage'],
    features: ['Project automation', 'Team messaging', 'Schedule management', 'Client access'],
    lastUpdated: '2025-01-08'
  },

  // E-commerce & Marketplace
  {
    id: 'bigcommerce',
    name: 'BigCommerce',
    slug: 'bigcommerce',
    description: 'E-commerce platform for growing and established businesses',
    category: 'E-commerce & Sales',
    subcategory: 'ecommerce-platform',
    logo: '/logos/bigcommerce.svg',
    tags: ['ecommerce', 'enterprise', 'api-first', 'headless'],
    nodeType: 'trigger_action',
    popularity: 82,
    automationUseCase: 'Sync products across channels, automate inventory updates, process orders automatically.',
    businessBenefit: 'Scale e-commerce operations with enterprise-level automation.',
    commonIntegrations: ['Amazon', 'eBay', 'Google Shopping', 'Mailchimp'],
    features: ['Multi-channel sync', 'Inventory automation', 'Order processing', 'API integrations'],
    lastUpdated: '2025-01-08'
  },
  {
    id: 'amazon-seller',
    name: 'Amazon Seller Central',
    slug: 'amazon-seller',
    description: 'Platform for selling products on Amazon marketplace',
    category: 'E-commerce & Sales',
    subcategory: 'marketplace',
    logo: '/logos/amazon.svg',
    tags: ['marketplace', 'fulfillment', 'inventory', 'advertising'],
    nodeType: 'trigger_action',
    popularity: 91,
    automationUseCase: 'Sync inventory with Amazon, automate repricing, manage FBA shipments.',
    businessBenefit: 'Maximize Amazon sales with automated inventory and pricing management.',
    commonIntegrations: ['Inventory systems', 'Accounting software', 'Repricing tools', 'Analytics'],
    features: ['Inventory sync', 'Order fulfillment', 'Automated repricing', 'Performance monitoring'],
    lastUpdated: '2025-01-08'
  },
  {
    id: 'etsy',
    name: 'Etsy',
    slug: 'etsy',
    description: 'Global marketplace for unique and creative goods',
    category: 'E-commerce & Sales',
    subcategory: 'marketplace',
    logo: '/logos/etsy.svg',
    tags: ['marketplace', 'handmade', 'creative', 'small-business'],
    nodeType: 'trigger_action',
    popularity: 76,
    automationUseCase: 'Sync handmade inventory, automate order processing, manage customer communications.',
    businessBenefit: 'Grow creative business with automated order management and customer service.',
    commonIntegrations: ['QuickBooks', 'Mailchimp', 'Social media', 'Shipping services'],
    features: ['Listing automation', 'Order sync', 'Customer messaging', 'Shop management'],
    lastUpdated: '2025-01-08'
  },

  // Communication Platforms
  {
    id: 'discord',
    name: 'Discord',
    slug: 'discord',
    description: 'Voice, video and text communication service for communities',
    category: 'Communication & Messaging',
    subcategory: 'chat',
    logo: '/logos/discord.svg',
    tags: ['community', 'gaming', 'voice-chat', 'servers'],
    nodeType: 'trigger_action',
    popularity: 83,
    automationUseCase: 'Send automated community updates, moderate content, manage member roles.',
    businessBenefit: 'Build engaged communities with automated moderation and communication.',
    commonIntegrations: ['Twitch', 'YouTube', 'GitHub', 'Social platforms'],
    features: ['Server automation', 'Role management', 'Message moderation', 'Community engagement'],
    lastUpdated: '2025-01-08'
  },
  {
    id: 'twilio-sms',
    name: 'Twilio SMS',
    slug: 'twilio-sms',
    description: 'Cloud communications platform for SMS and voice',
    category: 'Communication & Messaging',
    subcategory: 'chat',
    logo: '/logos/twilio.svg',
    tags: ['sms', 'voice', 'communication', 'api'],
    nodeType: 'trigger_action',
    popularity: 89,
    automationUseCase: 'Send automated SMS notifications, appointment reminders, two-factor authentication.',
    businessBenefit: 'Reach customers instantly with automated SMS communication.',
    commonIntegrations: ['CRM systems', 'Scheduling apps', 'E-commerce', 'Authentication systems'],
    features: ['SMS automation', 'Voice calls', 'Two-factor auth', 'Delivery tracking'],
    lastUpdated: '2025-01-08'
  },

  // Analytics & Tracking
  {
    id: 'google-analytics',
    name: 'Google Analytics',
    slug: 'google-analytics',
    description: 'Web analytics service that tracks and reports website traffic',
    category: 'Marketing & CRM',
    subcategory: 'analytics',
    logo: '/logos/google-analytics.svg',
    tags: ['analytics', 'tracking', 'reporting', 'insights'],
    nodeType: 'trigger',
    popularity: 96,
    automationUseCase: 'Trigger workflows based on website events, automate reporting, track conversion goals.',
    businessBenefit: 'Make data-driven decisions with automated analytics insights and reporting.',
    commonIntegrations: ['Google Ads', 'Data Studio', 'CRM systems', 'Email marketing'],
    features: ['Event tracking', 'Goal automation', 'Custom reports', 'Audience insights'],
    lastUpdated: '2025-01-08'
  },
  {
    id: 'facebook-pixel',
    name: 'Facebook Pixel',
    slug: 'facebook-pixel',
    description: 'Analytics tool for Facebook advertising and website tracking',
    category: 'Marketing & CRM',
    subcategory: 'analytics',
    logo: '/logos/facebook.svg',
    tags: ['facebook-ads', 'tracking', 'retargeting', 'conversions'],
    nodeType: 'trigger',
    popularity: 88,
    automationUseCase: 'Track conversions, build custom audiences, optimize ad campaigns automatically.',
    businessBenefit: 'Improve Facebook ad performance with automated tracking and optimization.',
    commonIntegrations: ['Facebook Ads', 'Shopify', 'WordPress', 'Email marketing'],
    features: ['Conversion tracking', 'Custom audiences', 'Ad optimization', 'Event automation'],
    lastUpdated: '2025-01-08'
  },

  // Cloud Storage & File Management
  {
    id: 'dropbox',
    name: 'Dropbox',
    slug: 'dropbox',
    description: 'Cloud file storage and collaboration platform',
    category: 'Data & Storage',
    subcategory: 'cloud-storage',
    logo: '/logos/dropbox.svg',
    tags: ['file-storage', 'collaboration', 'sync', 'backup'],
    nodeType: 'trigger_action',
    popularity: 84,
    automationUseCase: 'Automatically backup files, sync documents across teams, organize project assets.',
    businessBenefit: 'Keep files organized and accessible with automated backup and sharing.',
    commonIntegrations: ['Microsoft Office', 'Google Workspace', 'Slack', 'Zoom'],
    features: ['File automation', 'Team collaboration', 'Version control', 'Smart sync'],
    lastUpdated: '2025-01-08'
  },
  {
    id: 'box',
    name: 'Box',
    slug: 'box',
    description: 'Enterprise cloud content management platform',
    category: 'Data & Storage',
    subcategory: 'cloud-storage',
    logo: '/logos/box.svg',
    tags: ['enterprise', 'content-management', 'security', 'compliance'],
    nodeType: 'trigger_action',
    popularity: 79,
    automationUseCase: 'Automate document workflows, manage compliance, secure file sharing.',
    businessBenefit: 'Enterprise-grade file management with automated security and compliance.',
    commonIntegrations: ['Microsoft 365', 'Salesforce', 'NetSuite', 'Slack'],
    features: ['Workflow automation', 'Security controls', 'Compliance tracking', 'API integrations'],
    lastUpdated: '2025-01-08'
  },

  // Scheduling & Calendar
  {
    id: 'calendly',
    name: 'Calendly',
    slug: 'calendly',
    description: 'Automated scheduling software for meetings and appointments',
    category: 'Productivity',
    subcategory: 'calendar',
    logo: '/logos/calendly.svg',
    tags: ['scheduling', 'appointments', 'meetings', 'automation'],
    nodeType: 'trigger_action',
    popularity: 92,
    automationUseCase: 'Automatically schedule meetings, send reminders, sync with calendar systems.',
    businessBenefit: 'Eliminate back-and-forth scheduling with automated appointment booking.',
    commonIntegrations: ['Google Calendar', 'Outlook', 'Zoom', 'CRM systems'],
    features: ['Automated scheduling', 'Meeting reminders', 'Calendar sync', 'Workflow triggers'],
    lastUpdated: '2025-01-08'
  },
  {
    id: 'acuity-scheduling',
    name: 'Acuity Scheduling',
    slug: 'acuity-scheduling',
    description: 'Online appointment scheduling software for service businesses',
    category: 'Productivity',
    subcategory: 'calendar',
    logo: '/logos/acuity.svg',
    tags: ['appointment-scheduling', 'service-business', 'payments', 'intake-forms'],
    nodeType: 'trigger_action',
    popularity: 85,
    automationUseCase: 'Automate service bookings, collect payments, send appointment reminders.',
    businessBenefit: 'Streamline service business operations with automated scheduling and payments.',
    commonIntegrations: ['PayPal', 'Stripe', 'MailChimp', 'QuickBooks'],
    features: ['Online booking', 'Payment processing', 'Intake forms', 'Automated reminders'],
    lastUpdated: '2025-01-08'
  },

  // MORE INDUSTRY SPECIFIC INTEGRATIONS
  // Healthcare & Medical
  {
    id: 'epic-fhir',
    name: 'Epic FHIR',
    slug: 'epic-fhir',
    description: 'Electronic health record system integration via FHIR API',
    category: 'Marketing & CRM',
    subcategory: 'healthcare',
    logo: '/logos/epic.svg',
    tags: ['healthcare', 'ehr', 'medical-records', 'fhir'],
    nodeType: 'trigger_action',
    popularity: 73,
    automationUseCase: 'Sync patient data, automate appointment reminders, integrate with practice management.',
    businessBenefit: 'Streamline healthcare workflows with automated patient data management.',
    commonIntegrations: ['Practice management', 'Billing systems', 'Lab systems', 'Pharmacies'],
    features: ['Patient data sync', 'Appointment automation', 'Clinical workflows', 'Billing integration'],
    lastUpdated: '2025-01-08'
  },
  {
    id: 'athenahealth',
    name: 'athenahealth',
    slug: 'athenahealth',
    description: 'Cloud-based healthcare technology platform',
    category: 'Marketing & CRM',
    subcategory: 'healthcare',
    logo: '/logos/athena.svg',
    tags: ['healthcare', 'practice-management', 'billing', 'ehr'],
    nodeType: 'trigger_action',
    popularity: 78,
    automationUseCase: 'Automate patient check-ins, insurance verification, billing workflows.',
    businessBenefit: 'Complete healthcare practice automation from scheduling to billing.',
    commonIntegrations: ['Insurance systems', 'Lab networks', 'Pharmacies', 'Patient portals'],
    features: ['Practice automation', 'Revenue cycle management', 'Patient engagement', 'Care coordination'],
    lastUpdated: '2025-01-08'
  },

  // Manufacturing & Logistics
  {
    id: 'sap',
    name: 'SAP',
    slug: 'sap',
    description: 'Enterprise resource planning software for large businesses',
    category: 'Data & Storage',
    subcategory: 'enterprise',
    logo: '/logos/sap.svg',
    tags: ['erp', 'enterprise', 'manufacturing', 'logistics'],
    nodeType: 'trigger_action',
    popularity: 82,
    automationUseCase: 'Integrate enterprise systems, automate supply chain, sync financial data.',
    businessBenefit: 'Connect enterprise operations with automated data flows and process management.',
    commonIntegrations: ['Databases', 'Accounting systems', 'Supply chain', 'HR systems'],
    features: ['ERP integration', 'Supply chain automation', 'Financial sync', 'Process optimization'],
    lastUpdated: '2025-01-08'
  },
  {
    id: 'oracle-netsuite',
    name: 'Oracle NetSuite',
    slug: 'oracle-netsuite',
    description: 'Cloud-based ERP and business management suite',
    category: 'Data & Storage',
    subcategory: 'enterprise',
    logo: '/logos/netsuite.svg',
    tags: ['erp', 'cloud', 'financials', 'crm'],
    nodeType: 'trigger_action',
    popularity: 80,
    automationUseCase: 'Sync business operations, automate financial reporting, integrate sales and inventory.',
    businessBenefit: 'Unified business management with automated cross-department workflows.',
    commonIntegrations: ['E-commerce platforms', 'CRM systems', 'Banking', 'Third-party apps'],
    features: ['Business automation', 'Financial reporting', 'Inventory management', 'CRM integration'],
    lastUpdated: '2025-01-08'
  },

  // Real Estate Specific
  {
    id: 'mls',
    name: 'MLS (Multiple Listing Service)',
    slug: 'mls',
    description: 'Real estate listing database integration',
    category: 'Marketing & CRM',
    subcategory: 'real-estate',
    logo: '/logos/mls.svg',
    tags: ['real-estate', 'listings', 'properties', 'mls'],
    nodeType: 'trigger_action',
    popularity: 85,
    automationUseCase: 'Sync property listings, automate market updates, trigger lead notifications.',
    businessBenefit: 'Stay competitive with automated listing management and lead generation.',
    commonIntegrations: ['Real estate CRM', 'Website builders', 'Lead generation', 'Marketing tools'],
    features: ['Listing automation', 'Market updates', 'Lead triggers', 'Property sync'],
    lastUpdated: '2025-01-08'
  },
  {
    id: 'zillow-premier',
    name: 'Zillow Premier Agent',
    slug: 'zillow-premier',
    description: 'Real estate lead generation and marketing platform',
    category: 'Marketing & CRM',
    subcategory: 'real-estate',
    logo: '/logos/zillow.svg',
    tags: ['real-estate', 'leads', 'marketing', 'advertising'],
    nodeType: 'trigger_action',
    popularity: 89,
    automationUseCase: 'Capture Zillow leads, automate follow-up sequences, sync with CRM systems.',
    businessBenefit: 'Convert more Zillow leads with automated nurturing and follow-up.',
    commonIntegrations: ['Real estate CRM', 'Email marketing', 'Call tracking', 'MLS systems'],
    features: ['Lead capture', 'Automated follow-up', 'Performance tracking', 'CRM sync'],
    lastUpdated: '2025-01-08'
  },

  // Legal Technology
  {
    id: 'lexisnexis',
    name: 'LexisNexis',
    slug: 'lexisnexis',
    description: 'Legal research and analytics platform',
    category: 'Marketing & CRM',
    subcategory: 'legal',
    logo: '/logos/lexisnexis.svg',
    tags: ['legal', 'research', 'analytics', 'compliance'],
    nodeType: 'trigger_action',
    popularity: 76,
    automationUseCase: 'Automate legal research, compliance checking, case law updates.',
    businessBenefit: 'Enhance legal services with automated research and compliance monitoring.',
    commonIntegrations: ['Legal practice management', 'Document systems', 'Billing software', 'Court systems'],
    features: ['Research automation', 'Compliance alerts', 'Case tracking', 'Document analysis'],
    lastUpdated: '2025-01-08'
  },
  {
    id: 'thomson-reuters',
    name: 'Thomson Reuters',
    slug: 'thomson-reuters',
    description: 'Professional information services for legal and business',
    category: 'Marketing & CRM',
    subcategory: 'legal',
    logo: '/logos/thomson-reuters.svg',
    tags: ['legal', 'compliance', 'risk-management', 'research'],
    nodeType: 'trigger_action',
    popularity: 74,
    automationUseCase: 'Automate compliance monitoring, risk assessments, legal research workflows.',
    businessBenefit: 'Mitigate risk and ensure compliance with automated monitoring and alerts.',
    commonIntegrations: ['Legal software', 'Compliance systems', 'Risk management', 'Document management'],
    features: ['Compliance automation', 'Risk monitoring', 'Legal research', 'Regulatory alerts'],
    lastUpdated: '2025-01-08'
  },

  // Social Media Platforms
  {
    id: 'instagram',
    name: 'Instagram Business',
    slug: 'instagram',
    description: 'Social media platform for visual content and business marketing',
    category: 'Communication & Messaging',
    subcategory: 'social-media',
    logo: '/logos/instagram.svg',
    tags: ['social-media', 'visual-content', 'marketing', 'engagement'],
    nodeType: 'trigger_action',
    popularity: 93,
    automationUseCase: 'Automate content posting, engage with followers, track hashtag performance.',
    businessBenefit: 'Grow Instagram presence with automated posting and engagement strategies.',
    commonIntegrations: ['Facebook', 'Content creation tools', 'Analytics platforms', 'Scheduling tools'],
    features: ['Content automation', 'Hashtag tracking', 'Engagement monitoring', 'Story automation'],
    lastUpdated: '2025-01-08'
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    slug: 'linkedin',
    description: 'Professional networking and B2B marketing platform',
    category: 'Communication & Messaging',
    subcategory: 'social-media',
    logo: '/logos/linkedin.svg',
    tags: ['professional-networking', 'b2b-marketing', 'lead-generation', 'content'],
    nodeType: 'trigger_action',
    popularity: 91,
    automationUseCase: 'Automate B2B outreach, content publishing, lead generation workflows.',
    businessBenefit: 'Generate B2B leads with automated LinkedIn marketing and networking.',
    commonIntegrations: ['CRM systems', 'Email marketing', 'Sales tools', 'Content management'],
    features: ['Lead generation', 'Content automation', 'Network building', 'Sales outreach'],
    lastUpdated: '2025-01-08'
  },
  {
    id: 'tiktok',
    name: 'TikTok for Business',
    slug: 'tiktok',
    description: 'Short-form video platform for business marketing',
    category: 'Communication & Messaging',
    subcategory: 'social-media',
    logo: '/logos/tiktok.svg',
    tags: ['video-content', 'social-media', 'marketing', 'viral'],
    nodeType: 'trigger_action',
    popularity: 87,
    automationUseCase: 'Schedule video content, track trending hashtags, monitor engagement metrics.',
    businessBenefit: 'Reach younger audiences with automated TikTok marketing strategies.',
    commonIntegrations: ['Video editing tools', 'Analytics platforms', 'Content schedulers', 'Ad platforms'],
    features: ['Video scheduling', 'Trend monitoring', 'Engagement tracking', 'Ad automation'],
    lastUpdated: '2025-01-08'
  },

  // Financial Services
  {
    id: 'plaid',
    name: 'Plaid',
    slug: 'plaid',
    description: 'Financial data network connecting apps to bank accounts',
    category: 'Data & Storage',
    subcategory: 'financial',
    logo: '/logos/plaid.svg',
    tags: ['fintech', 'banking', 'financial-data', 'verification'],
    nodeType: 'trigger_action',
    popularity: 84,
    automationUseCase: 'Verify bank accounts, sync financial data, automate payment processing.',
    businessBenefit: 'Seamlessly integrate banking data for automated financial services.',
    commonIntegrations: ['Banking apps', 'Accounting software', 'Investment platforms', 'Lending apps'],
    features: ['Account verification', 'Transaction sync', 'Balance checking', 'Payment initiation'],
    lastUpdated: '2025-01-08'
  },
  {
    id: 'yodlee',
    name: 'Yodlee',
    slug: 'yodlee',
    description: 'Financial data aggregation and analytics platform',
    category: 'Data & Storage',
    subcategory: 'financial',
    logo: '/logos/yodlee.svg',
    tags: ['financial-data', 'aggregation', 'analytics', 'banking'],
    nodeType: 'trigger_action',
    popularity: 78,
    automationUseCase: 'Aggregate financial accounts, analyze spending patterns, automate financial insights.',
    businessBenefit: 'Provide comprehensive financial services with automated data aggregation.',
    commonIntegrations: ['Financial apps', 'Wealth management', 'Accounting systems', 'Analytics tools'],
    features: ['Data aggregation', 'Financial analytics', 'Account insights', 'Spending analysis'],
    lastUpdated: '2025-01-08'
  },

  // HR & Recruitment
  {
    id: 'bamboohr',
    name: 'BambooHR',
    slug: 'bamboohr',
    description: 'Human resources information system for small businesses',
    category: 'Data & Storage',
    subcategory: 'hr',
    logo: '/logos/bamboohr.svg',
    tags: ['hr', 'employee-management', 'payroll', 'benefits'],
    nodeType: 'trigger_action',
    popularity: 81,
    automationUseCase: 'Automate employee onboarding, time-off requests, performance reviews.',
    businessBenefit: 'Streamline HR processes with automated employee lifecycle management.',
    commonIntegrations: ['Payroll systems', 'Benefits providers', 'Background check services', 'Slack'],
    features: ['Employee automation', 'Time tracking', 'Performance management', 'Benefits administration'],
    lastUpdated: '2025-01-08'
  },
  {
    id: 'adp',
    name: 'ADP',
    slug: 'adp',
    description: 'Payroll and human capital management platform',
    category: 'Data & Storage',
    subcategory: 'hr',
    logo: '/logos/adp.svg',
    tags: ['payroll', 'hr', 'benefits', 'compliance'],
    nodeType: 'trigger_action',
    popularity: 86,
    automationUseCase: 'Automate payroll processing, benefits administration, compliance reporting.',
    businessBenefit: 'Ensure accurate payroll and HR compliance with automated processing.',
    commonIntegrations: ['Time tracking', 'HRIS systems', 'Benefits providers', 'Tax services'],
    features: ['Payroll automation', 'Benefits management', 'Compliance tracking', 'Employee self-service'],
    lastUpdated: '2025-01-08'
  },
];

// Node type definitions
export const nodeTypes = {
  trigger: {
    description: 'Start workflows in response to specific events or conditions',
    examples: ['Webhook', 'Schedule Trigger', 'Email Trigger']
  },
  action: {
    description: 'Perform operations on external systems and manipulate data',
    examples: ['HTTP Request', 'Send Email', 'Create Record']
  },
  trigger_action: {
    description: 'Can both trigger workflows and perform actions',
    examples: ['Gmail', 'Slack', 'HubSpot']
  },
  cluster_node: {
    description: 'Complex nodes that combine multiple operations',
    examples: ['AI Agent', 'Vector Store', 'Chat Model']
  }
};

// Helper functions
export const getIntegrationsByCategory = (category: string): Integration[] => {
  return integrations.filter(integration => integration.category === category);
};

export const getIntegrationsBySubcategory = (subcategory: string): Integration[] => {
  return integrations.filter(integration => integration.subcategory === subcategory);
};

export const getPopularIntegrations = (threshold: number = 85): Integration[] => {
  return integrations.filter(integration => integration.popularity >= threshold);
};

export const getIntegrationsByNodeType = (nodeType: string): Integration[] => {
  return integrations.filter(integration => integration.nodeType === nodeType);
};

export const searchIntegrations = (query: string): Integration[] => {
  const lowercaseQuery = query.toLowerCase();
  return integrations.filter(integration => 
    integration.name.toLowerCase().includes(lowercaseQuery) ||
    integration.description.toLowerCase().includes(lowercaseQuery) ||
    integration.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
    (integration.subcategory && integration.subcategory.toLowerCase().includes(lowercaseQuery))
  );
};

export const getIntegrationBySlug = (slug: string): Integration | undefined => {
  return integrations.find(integration => integration.slug === slug);
};

export const getFeaturedIntegrations = (): Integration[] => {
  // Return top integrations from each category
  const categories = Object.keys(integrationCategories);
  const featured: Integration[] = [];
  
  categories.forEach(category => {
    const categoryIntegrations = getIntegrationsByCategory(category)
      .sort((a, b) => b.popularity - a.popularity)
      .slice(0, 2); // Top 2 from each category
    featured.push(...categoryIntegrations);
  });
  
  return featured.sort((a, b) => b.popularity - a.popularity);
};

// Statistics
export const getIntegrationStats = () => {
  return {
    total: integrations.length,
    categories: Object.keys(integrationCategories).length,
    aiReady: integrations.filter(i => i.category === 'AI & Machine Learning').length,
    highPopularity: integrations.filter(i => i.popularity >= 90).length,
    businessCritical: integrations.filter(i => ['Marketing & CRM', 'E-commerce & Sales', 'Data & Storage'].includes(i.category)).length,
    laBusinessTools: integrations.filter(i => i.tags.includes('la-business')).length,
    industrySpecific: integrations.filter(i => ['healthcare', 'real-estate', 'legal', 'enterprise'].includes(i.subcategory || '')).length,
    lastUpdated: new Date().toISOString().split('T')[0]
  };
};