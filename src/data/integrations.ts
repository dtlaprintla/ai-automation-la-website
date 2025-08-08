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
    subcategories: ['chat', 'video-conferencing', 'notifications', 'social-media']
  },
  'Data & Storage': {
    color: '#8b5cf6',
    description: 'Move and transform data between apps and databases',
    subcategories: ['databases', 'cloud-storage', 'file-management', 'data-processing']
  },
  'Development': {
    color: '#06b6d4',
    description: 'API integrations, webhooks, and developer tools',
    subcategories: ['apis', 'webhooks', 'version-control', 'deployment']
  },
  'Marketing & CRM': {
    color: '#f59e0b',
    description: 'Manage emails, campaigns, and customer interactions',
    subcategories: ['email-marketing', 'crm', 'analytics', 'social-media']
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
  }
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
    lastUpdated: new Date().toISOString().split('T')[0]
  };
};