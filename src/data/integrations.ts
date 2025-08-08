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
  // CRM & Sales (Expanded)
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
  },

  // Additional CRM & Sales Tools
  {
    id: 'zoho-crm',
    name: 'Zoho CRM',
    slug: 'zoho-crm',
    description: 'Comprehensive CRM solution with sales, marketing, and customer service automation.',
    category: 'CRM & Sales',
    logo: '/logos/zoho.svg',
    tags: ['CRM', 'Sales', 'Customer Service', 'Lead Management'],
    popularity: 'high',
    automationUseCase: 'Automate lead assignment, follow-up sequences, deal progression, and customer communication across the entire sales lifecycle.',
    businessBenefit: 'Streamline your entire sales process from lead capture to deal closure. Never miss a follow-up or lose track of prospects.',
    commonIntegrations: ['Gmail', 'Mailchimp', 'QuickBooks', 'Google Workspace'],
    features: ['Lead scoring', 'Sales automation', 'Pipeline management', 'Email integration', 'Mobile CRM']
  },
  {
    id: 'monday-sales-crm',
    name: 'Monday Sales CRM',
    slug: 'monday-sales-crm',
    description: 'Visual CRM platform that makes sales team collaboration and pipeline management intuitive.',
    category: 'CRM & Sales',
    logo: '/logos/monday.svg',
    tags: ['CRM', 'Visual', 'Team Collaboration', 'Pipeline'],
    popularity: 'medium',
    automationUseCase: 'Automate deal updates, task assignments, progress tracking, and team notifications in a visual workflow environment.',
    businessBenefit: 'Keep your sales team aligned with visual pipelines and automated task management. Boost team productivity and deal closure rates.',
    commonIntegrations: ['Gmail', 'Slack', 'Zoom', 'Mailchimp'],
    features: ['Visual pipeline', 'Automated workflows', 'Team collaboration', 'Custom fields', 'Progress tracking']
  },
  {
    id: 'close',
    name: 'Close',
    slug: 'close',
    description: 'Built-in phone and email CRM designed for inside sales teams that need to make calls.',
    category: 'CRM & Sales',
    logo: '/logos/close.svg',
    tags: ['CRM', 'Sales Calls', 'Email', 'Inside Sales'],
    popularity: 'medium',
    automationUseCase: 'Automate call logging, email sequences, follow-up reminders, and lead distribution to optimize inside sales productivity.',
    businessBenefit: 'Maximize calling efficiency with automatic call logging and intelligent follow-up sequences. Close more deals with less manual work.',
    commonIntegrations: ['Zapier', 'Calendly', 'Intercom', 'Segment'],
    features: ['Built-in calling', 'Email automation', 'SMS campaigns', 'Call recording', 'Lead management']
  },

  // Communication Tools (Expanded)
  {
    id: 'microsoft-teams',
    name: 'Microsoft Teams',
    slug: 'microsoft-teams',
    description: 'Unified communication and collaboration platform with chat, video meetings, and file sharing.',
    category: 'Communication',
    logo: '/logos/teams.svg',
    tags: ['Team Chat', 'Video Meetings', 'Collaboration', 'Microsoft'],
    popularity: 'high',
    automationUseCase: 'Automate meeting notifications, file sharing workflows, team updates, and integration with business applications.',
    businessBenefit: 'Streamline team communication and reduce meeting overhead with automated workflows and smart notifications.',
    commonIntegrations: ['Outlook', 'SharePoint', 'Power Automate', 'Salesforce'],
    features: ['Team messaging', 'Video conferencing', 'File collaboration', 'App integrations', 'Workflow automation']
  },
  {
    id: 'discord',
    name: 'Discord',
    slug: 'discord',
    description: 'Voice, video, and text communication platform for communities and teams.',
    category: 'Communication',
    logo: '/logos/discord.svg',
    tags: ['Chat', 'Voice', 'Community', 'Real-time'],
    popularity: 'medium',
    automationUseCase: 'Automate community management, role assignments, welcome messages, and notifications from other business tools.',
    businessBenefit: 'Build engaged communities with automated moderation and seamless integration with your business systems.',
    commonIntegrations: ['Twitch', 'YouTube', 'Spotify', 'GitHub'],
    features: ['Voice channels', 'Bot automation', 'Community management', 'Screen sharing', 'Custom roles']
  },
  {
    id: 'zoom',
    name: 'Zoom',
    slug: 'zoom',
    description: 'Video conferencing platform with webinar and phone system capabilities.',
    category: 'Communication',
    logo: '/logos/zoom.svg',
    tags: ['Video Conferencing', 'Webinars', 'Meetings', 'Phone'],
    popularity: 'high',
    automationUseCase: 'Automate meeting scheduling, recording distribution, attendee follow-ups, and CRM integration with meeting data.',
    businessBenefit: 'Streamline meeting workflows and ensure no follow-ups are missed. Automatically sync meeting outcomes with your CRM.',
    commonIntegrations: ['Calendar', 'Salesforce', 'HubSpot', 'Slack'],
    features: ['HD video meetings', 'Webinar hosting', 'Recording automation', 'Calendar integration', 'Phone system']
  },
  {
    id: 'whatsapp-business',
    name: 'WhatsApp Business',
    slug: 'whatsapp-business',
    description: 'Business messaging platform for customer communication via WhatsApp.',
    category: 'Communication',
    logo: '/logos/whatsapp.svg',
    tags: ['Messaging', 'Customer Service', 'Mobile', 'Chat'],
    popularity: 'high',
    automationUseCase: 'Automate customer support responses, appointment reminders, order updates, and marketing messages via WhatsApp.',
    businessBenefit: 'Reach customers on their preferred messaging platform with automated, personalized communications that drive engagement.',
    commonIntegrations: ['CRM systems', 'E-commerce platforms', 'Booking systems', 'Support tools'],
    features: ['Automated responses', 'Broadcast messaging', 'Customer profiles', 'Message templates', 'Analytics']
  },

  // E-commerce (Expanded)
  {
    id: 'amazon-seller',
    name: 'Amazon Seller',
    slug: 'amazon-seller',
    description: 'Amazon marketplace platform for selling products to millions of customers worldwide.',
    category: 'E-commerce',
    logo: '/logos/amazon.svg',
    tags: ['Marketplace', 'E-commerce', 'FBA', 'Retail'],
    popularity: 'high',
    automationUseCase: 'Automate inventory management, order processing, pricing updates, customer communications, and advertising campaigns.',
    businessBenefit: 'Scale your Amazon business with automated inventory management and optimized pricing strategies that maximize profits.',
    commonIntegrations: ['Inventory management', 'Accounting software', 'Analytics tools', 'Advertising platforms'],
    features: ['Inventory automation', 'Order management', 'Dynamic pricing', 'Customer messaging', 'FBA integration']
  },
  {
    id: 'etsy',
    name: 'Etsy',
    slug: 'etsy',
    description: 'Global marketplace for unique and creative goods, focused on handmade and vintage items.',
    category: 'E-commerce',
    logo: '/logos/etsy.svg',
    tags: ['Marketplace', 'Handmade', 'Creative', 'Small Business'],
    popularity: 'medium',
    automationUseCase: 'Automate shop management, order processing, customer communications, inventory tracking, and marketing campaigns.',
    businessBenefit: 'Focus on creating while automation handles shop operations, customer service, and marketing to grow your creative business.',
    commonIntegrations: ['QuickBooks', 'Mailchimp', 'Social media', 'Shipping tools'],
    features: ['Shop automation', 'Order processing', 'Customer messaging', 'SEO optimization', 'Marketing tools']
  },
  {
    id: 'square',
    name: 'Square',
    slug: 'square',
    description: 'Complete commerce platform with point-of-sale, online store, and payment processing.',
    category: 'E-commerce',
    logo: '/logos/square.svg',
    tags: ['POS', 'Payments', 'E-commerce', 'Retail'],
    popularity: 'high',
    automationUseCase: 'Automate payment processing, inventory synchronization, customer communications, and sales reporting across channels.',
    businessBenefit: 'Unify online and offline sales with automated inventory management and seamless customer experience across all touchpoints.',
    commonIntegrations: ['QuickBooks', 'Mailchimp', 'WooCommerce', 'BigCommerce'],
    features: ['Payment processing', 'Inventory management', 'Customer profiles', 'Analytics reporting', 'Multi-channel sales']
  },
  {
    id: 'bigcommerce',
    name: 'BigCommerce',
    slug: 'bigcommerce',
    description: 'Enterprise e-commerce platform with built-in features for scaling online businesses.',
    category: 'E-commerce',
    logo: '/logos/bigcommerce.svg',
    tags: ['E-commerce', 'Enterprise', 'SaaS', 'Multi-channel'],
    popularity: 'medium',
    automationUseCase: 'Automate product catalog management, order fulfillment, customer segmentation, and multi-channel sales synchronization.',
    businessBenefit: 'Scale your e-commerce operations with enterprise-grade automation that handles complex product catalogs and order volumes.',
    commonIntegrations: ['ERP systems', 'CRM platforms', 'Accounting software', 'Marketing tools'],
    features: ['Product management', 'Order automation', 'Customer segmentation', 'Multi-channel selling', 'API integrations']
  },
  {
    id: 'stripe',
    name: 'Stripe',
    slug: 'stripe',
    description: 'Complete payment infrastructure for internet businesses with powerful APIs and tools.',
    category: 'E-commerce',
    logo: '/logos/stripe.svg',
    tags: ['Payments', 'API', 'Subscriptions', 'Fintech'],
    popularity: 'high',
    automationUseCase: 'Automate payment processing, subscription management, invoice generation, fraud detection, and financial reconciliation.',
    businessBenefit: 'Handle payments automatically with intelligent fraud protection and seamless subscription management that reduces churn.',
    commonIntegrations: ['QuickBooks', 'Salesforce', 'Shopify', 'Subscription tools'],
    features: ['Payment processing', 'Subscription billing', 'Fraud prevention', 'Financial reporting', 'API integrations']
  },
  {
    id: 'paypal',
    name: 'PayPal',
    slug: 'paypal',
    description: 'Global payment platform enabling secure money transfers and online payments.',
    category: 'E-commerce',
    logo: '/logos/paypal.svg',
    tags: ['Payments', 'Money Transfer', 'E-commerce', 'Global'],
    popularity: 'high',
    automationUseCase: 'Automate payment collection, transaction reconciliation, refund processing, and integration with accounting systems.',
    businessBenefit: 'Simplify payment collection and financial management with automated transaction processing and reconciliation.',
    commonIntegrations: ['QuickBooks', 'WooCommerce', 'Shopify', 'Xero'],
    features: ['Payment processing', 'Money transfers', 'Refund automation', 'Transaction tracking', 'International payments']
  },

  // Marketing (Expanded)
  {
    id: 'facebook-ads',
    name: 'Facebook Ads',
    slug: 'facebook-ads',
    description: 'Social media advertising platform for reaching targeted audiences across Facebook and Instagram.',
    category: 'Marketing',
    logo: '/logos/facebook.svg',
    tags: ['Social Media', 'Advertising', 'Targeting', 'ROI'],
    popularity: 'high',
    automationUseCase: 'Automate ad campaign creation, audience targeting, bid optimization, performance tracking, and lead syncing with CRM.',
    businessBenefit: 'Maximize advertising ROI with automated campaign optimization and seamless lead management integration.',
    commonIntegrations: ['CRM systems', 'Google Analytics', 'Email marketing', 'E-commerce platforms'],
    features: ['Campaign automation', 'Audience targeting', 'Performance tracking', 'Lead generation', 'ROI optimization']
  },
  {
    id: 'google-ads',
    name: 'Google Ads',
    slug: 'google-ads',
    description: 'Online advertising platform for displaying ads across Google search results and partner sites.',
    category: 'Marketing',
    logo: '/logos/google-ads.svg',
    tags: ['Search Advertising', 'PPC', 'Keywords', 'ROI'],
    popularity: 'high',
    automationUseCase: 'Automate keyword bidding, ad creation, campaign optimization, conversion tracking, and performance reporting.',
    businessBenefit: 'Drive qualified traffic with automated bidding strategies and conversion tracking that optimizes for your business goals.',
    commonIntegrations: ['Google Analytics', 'CRM systems', 'E-commerce platforms', 'Call tracking'],
    features: ['Automated bidding', 'Keyword optimization', 'Conversion tracking', 'Performance reporting', 'Campaign management']
  },
  {
    id: 'hootsuite',
    name: 'Hootsuite',
    slug: 'hootsuite',
    description: 'Social media management platform for scheduling, publishing, and analyzing social content.',
    category: 'Marketing',
    logo: '/logos/hootsuite.svg',
    tags: ['Social Media', 'Scheduling', 'Analytics', 'Content Management'],
    popularity: 'high',
    automationUseCase: 'Automate social media posting, content curation, engagement responses, and performance reporting across platforms.',
    businessBenefit: 'Maintain consistent social media presence with automated posting and engagement that builds brand awareness.',
    commonIntegrations: ['Facebook', 'Twitter', 'Instagram', 'LinkedIn'],
    features: ['Post scheduling', 'Content curation', 'Social analytics', 'Team collaboration', 'Engagement management']
  },
  {
    id: 'buffer',
    name: 'Buffer',
    slug: 'buffer',
    description: 'Simple social media management tool for scheduling posts and analyzing performance.',
    category: 'Marketing',
    logo: '/logos/buffer.svg',
    tags: ['Social Media', 'Scheduling', 'Analytics', 'Simple'],
    popularity: 'medium',
    automationUseCase: 'Automate social media scheduling, cross-platform posting, performance tracking, and content optimization.',
    businessBenefit: 'Save time on social media management while maintaining consistent posting schedules that engage your audience.',
    commonIntegrations: ['Facebook', 'Twitter', 'Instagram', 'Pinterest'],
    features: ['Post scheduling', 'Analytics dashboard', 'Team management', 'Content calendar', 'Performance insights']
  },
  {
    id: 'constant-contact',
    name: 'Constant Contact',
    slug: 'constant-contact',
    description: 'Email marketing platform with automation tools for small businesses.',
    category: 'Marketing',
    logo: '/logos/constant-contact.svg',
    tags: ['Email Marketing', 'Small Business', 'Automation', 'Newsletters'],
    popularity: 'medium',
    automationUseCase: 'Automate email campaigns, list management, welcome sequences, and customer journey workflows.',
    businessBenefit: 'Build stronger customer relationships with automated email marketing that nurtures leads and drives repeat business.',
    commonIntegrations: ['CRM systems', 'E-commerce platforms', 'Social media', 'Event platforms'],
    features: ['Email automation', 'List management', 'Template library', 'A/B testing', 'Reporting analytics']
  },

  // Project Management (Expanded)
  {
    id: 'trello',
    name: 'Trello',
    slug: 'trello',
    description: 'Visual project management tool using boards, lists, and cards for team collaboration.',
    category: 'Project Management',
    logo: '/logos/trello.svg',
    tags: ['Kanban', 'Visual', 'Team Collaboration', 'Simple'],
    popularity: 'high',
    automationUseCase: 'Automate card creation, task assignments, due date reminders, progress updates, and team notifications.',
    businessBenefit: 'Keep projects organized and teams aligned with visual workflows that automatically update based on progress.',
    commonIntegrations: ['Slack', 'Google Drive', 'Dropbox', 'Calendar'],
    features: ['Kanban boards', 'Automated workflows', 'Team collaboration', 'Due date tracking', 'Power-ups integration']
  },
  {
    id: 'monday',
    name: 'Monday.com',
    slug: 'monday',
    description: 'Work operating system that powers teams to run projects and workflows with confidence.',
    category: 'Project Management',
    logo: '/logos/monday.svg',
    tags: ['Work OS', 'Visual', 'Workflows', 'Team Management'],
    popularity: 'high',
    automationUseCase: 'Automate project workflows, task dependencies, status updates, time tracking, and cross-team communications.',
    businessBenefit: 'Streamline complex projects with visual workflows and automated task management that keeps teams productive.',
    commonIntegrations: ['Slack', 'Gmail', 'Excel', 'Zoom'],
    features: ['Visual workflows', 'Automation recipes', 'Time tracking', 'Dashboard reporting', 'Team collaboration']
  },
  {
    id: 'notion',
    name: 'Notion',
    slug: 'notion',
    description: 'All-in-one workspace combining notes, tasks, databases, and collaboration tools.',
    category: 'Project Management',
    logo: '/logos/notion.svg',
    tags: ['Workspace', 'Notes', 'Databases', 'Documentation'],
    popularity: 'high',
    automationUseCase: 'Automate content organization, task tracking, database updates, template creation, and team documentation.',
    businessBenefit: 'Centralize all work in one flexible workspace with automated organization that adapts to your team\'s needs.',
    commonIntegrations: ['Slack', 'Google Calendar', 'Figma', 'GitHub'],
    features: ['Flexible databases', 'Template automation', 'Team wikis', 'Task management', 'API integrations']
  },
  {
    id: 'basecamp',
    name: 'Basecamp',
    slug: 'basecamp',
    description: 'Project management and team collaboration software focused on simplicity and ease of use.',
    category: 'Project Management',
    logo: '/logos/basecamp.svg',
    tags: ['Project Management', 'Team Collaboration', 'Simple', 'Communication'],
    popularity: 'medium',
    automationUseCase: 'Automate project setup, task assignments, progress check-ins, client communications, and deadline reminders.',
    businessBenefit: 'Keep projects on track with automated check-ins and communications that ensure nothing falls through the cracks.',
    commonIntegrations: ['Email', 'Calendar', 'Time tracking tools', 'File storage'],
    features: ['Project organization', 'Team messaging', 'File sharing', 'Schedule management', 'Client access']
  },
  {
    id: 'jira',
    name: 'Jira',
    slug: 'jira',
    description: 'Issue and project tracking software for agile software development teams.',
    category: 'Project Management',
    logo: '/logos/jira.svg',
    tags: ['Agile', 'Software Development', 'Bug Tracking', 'Scrum'],
    popularity: 'high',
    automationUseCase: 'Automate issue creation, sprint planning, bug triage, status updates, and development workflow management.',
    businessBenefit: 'Accelerate software development with automated workflows that keep development teams focused on coding.',
    commonIntegrations: ['Confluence', 'Bitbucket', 'Slack', 'GitHub'],
    features: ['Agile workflows', 'Issue tracking', 'Sprint management', 'Custom automation', 'Development integration']
  },

  // Accounting & Finance (Expanded)
  {
    id: 'xero',
    name: 'Xero',
    slug: 'xero',
    description: 'Cloud-based accounting software designed for small businesses and their advisors.',
    category: 'Accounting & Finance',
    logo: '/logos/xero.svg',
    tags: ['Accounting', 'Cloud', 'Small Business', 'Invoicing'],
    popularity: 'high',
    automationUseCase: 'Automate invoice generation, expense tracking, bank reconciliation, tax calculations, and financial reporting.',
    businessBenefit: 'Keep finances organized automatically with real-time bookkeeping that reduces manual data entry and errors.',
    commonIntegrations: ['PayPal', 'Stripe', 'Shopify', 'CRM systems'],
    features: ['Automated invoicing', 'Bank reconciliation', 'Expense tracking', 'Tax compliance', 'Financial reporting']
  },
  {
    id: 'freshbooks',
    name: 'FreshBooks',
    slug: 'freshbooks',
    description: 'Cloud accounting software built for small business owners and their teams.',
    category: 'Accounting & Finance',
    logo: '/logos/freshbooks.svg',
    tags: ['Accounting', 'Invoicing', 'Time Tracking', 'Small Business'],
    popularity: 'medium',
    automationUseCase: 'Automate time tracking, invoice creation, payment reminders, expense categorization, and client communications.',
    businessBenefit: 'Get paid faster with automated invoicing and payment tracking that reduces administrative overhead.',
    commonIntegrations: ['PayPal', 'Stripe', 'G Suite', 'Project management tools'],
    features: ['Time tracking', 'Automated invoicing', 'Expense management', 'Client portal', 'Financial reporting']
  },
  {
    id: 'wave-accounting',
    name: 'Wave Accounting',
    slug: 'wave-accounting',
    description: 'Free accounting software for small businesses with invoicing and payment processing.',
    category: 'Accounting & Finance',
    logo: '/logos/wave.svg',
    tags: ['Free Accounting', 'Small Business', 'Invoicing', 'Payments'],
    popularity: 'medium',
    automationUseCase: 'Automate bookkeeping, invoice generation, payment processing, tax preparation, and financial reporting.',
    businessBenefit: 'Manage finances efficiently with free automated accounting that handles core business financial needs.',
    commonIntegrations: ['PayPal', 'Bank connections', 'Receipt scanning', 'Tax software'],
    features: ['Free accounting', 'Automated invoicing', 'Payment processing', 'Receipt scanning', 'Tax reporting']
  },

  // Storage & Files (Expanded)
  {
    id: 'google-drive',
    name: 'Google Drive',
    slug: 'google-drive',
    description: 'Cloud storage service with real-time collaboration on documents, spreadsheets, and presentations.',
    category: 'Storage & Files',
    logo: '/logos/google-drive.svg',
    tags: ['Cloud Storage', 'Collaboration', 'Documents', 'Google'],
    popularity: 'high',
    automationUseCase: 'Automate file organization, sharing permissions, backup processes, document creation, and collaborative workflows.',
    businessBenefit: 'Keep files organized and accessible with automated backup and sharing that ensures team productivity.',
    commonIntegrations: ['Gmail', 'Google Workspace', 'Slack', 'CRM systems'],
    features: ['Cloud storage', 'Real-time collaboration', 'File sharing', 'Version control', 'Mobile access']
  },
  {
    id: 'dropbox',
    name: 'Dropbox',
    slug: 'dropbox',
    description: 'Cloud storage platform with advanced sharing and collaboration features for teams.',
    category: 'Storage & Files',
    logo: '/logos/dropbox.svg',
    tags: ['Cloud Storage', 'File Sharing', 'Sync', 'Collaboration'],
    popularity: 'high',
    automationUseCase: 'Automate file synchronization, backup processes, sharing workflows, and team collaboration on documents.',
    businessBenefit: 'Ensure files are always accessible and backed up with automated sync and sharing that protects against data loss.',
    commonIntegrations: ['Slack', 'Zoom', 'Adobe', 'Microsoft Office'],
    features: ['File synchronization', 'Advanced sharing', 'Version history', 'Team collaboration', 'Smart sync']
  },
  {
    id: 'box',
    name: 'Box',
    slug: 'box',
    description: 'Enterprise cloud content management platform with security and compliance features.',
    category: 'Storage & Files',
    logo: '/logos/box.svg',
    tags: ['Enterprise Storage', 'Security', 'Compliance', 'Content Management'],
    popularity: 'medium',
    automationUseCase: 'Automate document workflows, approval processes, compliance tracking, and secure file sharing across organizations.',
    businessBenefit: 'Secure and streamline document management with enterprise-grade automation that ensures compliance and security.',
    commonIntegrations: ['Salesforce', 'Office 365', 'DocuSign', 'Slack'],
    features: ['Secure file sharing', 'Workflow automation', 'Compliance tools', 'Advanced security', 'API integrations']
  },
  {
    id: 'onedrive',
    name: 'OneDrive',
    slug: 'onedrive',
    description: 'Microsoft\'s cloud storage service integrated with Office 365 and Windows.',
    category: 'Storage & Files',
    logo: '/logos/onedrive.svg',
    tags: ['Microsoft', 'Cloud Storage', 'Office Integration', 'Sync'],
    popularity: 'high',
    automationUseCase: 'Automate file backup, Office document collaboration, sharing workflows, and integration with Microsoft ecosystem.',
    businessBenefit: 'Seamlessly integrate with Microsoft tools while automating file management and collaboration workflows.',
    commonIntegrations: ['Office 365', 'Teams', 'Outlook', 'SharePoint'],
    features: ['Office integration', 'File synchronization', 'Collaboration tools', 'Version control', 'Mobile apps']
  },

  // Analytics (Expanded)
  {
    id: 'google-analytics',
    name: 'Google Analytics',
    slug: 'google-analytics',
    description: 'Web analytics service that tracks and reports website traffic and user behavior.',
    category: 'Analytics',
    logo: '/logos/google-analytics.svg',
    tags: ['Web Analytics', 'Traffic Analysis', 'Conversion Tracking', 'Reports'],
    popularity: 'high',
    automationUseCase: 'Automate traffic monitoring, conversion tracking, report generation, alert notifications, and data integration with other tools.',
    businessBenefit: 'Make data-driven decisions with automated analytics reporting that reveals customer behavior and optimization opportunities.',
    commonIntegrations: ['Google Ads', 'Search Console', 'Data Studio', 'CRM systems'],
    features: ['Traffic analysis', 'Conversion tracking', 'Custom reports', 'Real-time data', 'Goal tracking']
  },
  {
    id: 'mixpanel',
    name: 'Mixpanel',
    slug: 'mixpanel',
    description: 'Advanced analytics platform for tracking user interactions and product usage.',
    category: 'Analytics',
    logo: '/logos/mixpanel.svg',
    tags: ['Product Analytics', 'User Tracking', 'Events', 'Cohorts'],
    popularity: 'medium',
    automationUseCase: 'Automate user behavior tracking, cohort analysis, funnel monitoring, and automated insights delivery.',
    businessBenefit: 'Optimize product experience with detailed user analytics that automatically identify improvement opportunities.',
    commonIntegrations: ['Mobile apps', 'Web platforms', 'CRM systems', 'Marketing tools'],
    features: ['Event tracking', 'User segmentation', 'Funnel analysis', 'Cohort reports', 'A/B testing']
  },
  {
    id: 'tableau',
    name: 'Tableau',
    slug: 'tableau',
    description: 'Business intelligence and data visualization platform for analyzing complex datasets.',
    category: 'Analytics',
    logo: '/logos/tableau.svg',
    tags: ['Business Intelligence', 'Data Visualization', 'Dashboards', 'Enterprise'],
    popularity: 'high',
    automationUseCase: 'Automate data refresh, dashboard updates, report distribution, alert notifications, and cross-platform data integration.',
    businessBenefit: 'Transform complex data into actionable insights with automated visualization and reporting that drives better decisions.',
    commonIntegrations: ['Databases', 'Cloud platforms', 'CRM systems', 'ERP software'],
    features: ['Data visualization', 'Interactive dashboards', 'Automated reports', 'Data blending', 'Mobile analytics']
  },

  // Additional Communication Tools
  {
    id: 'calendly',
    name: 'Calendly',
    slug: 'calendly',
    description: 'Automated scheduling software that eliminates the back-and-forth emails to find the perfect time.',
    category: 'Communication',
    logo: '/logos/calendly.svg',
    tags: ['Scheduling', 'Appointments', 'Calendar', 'Automation'],
    popularity: 'high',
    automationUseCase: 'Automate appointment scheduling, reminder notifications, calendar integration, follow-up sequences, and no-show management.',
    businessBenefit: 'Eliminate scheduling hassles and reduce no-shows with automated booking and reminder systems that optimize your calendar.',
    commonIntegrations: ['Google Calendar', 'Outlook', 'Zoom', 'Salesforce'],
    features: ['Automated scheduling', 'Calendar sync', 'Email reminders', 'Payment integration', 'Team scheduling']
  },
  {
    id: 'intercom',
    name: 'Intercom',
    slug: 'intercom',
    description: 'Customer messaging platform that unites marketing, sales, and support in one system.',
    category: 'Communication',
    logo: '/logos/intercom.svg',
    tags: ['Customer Support', 'Live Chat', 'Messaging', 'CRM'],
    popularity: 'high',
    automationUseCase: 'Automate customer support responses, lead qualification, onboarding sequences, and support ticket routing.',
    businessBenefit: 'Provide instant customer support with automated responses and intelligent routing that improves satisfaction.',
    commonIntegrations: ['CRM systems', 'Help desk tools', 'Analytics platforms', 'E-commerce'],
    features: ['Live chat', 'Automated messaging', 'Customer profiles', 'Help desk', 'Product tours']
  },
  {
    id: 'zendesk',
    name: 'Zendesk',
    slug: 'zendesk',
    description: 'Customer service software that brings all customer interactions into one integrated platform.',
    category: 'Communication',
    logo: '/logos/zendesk.svg',
    tags: ['Customer Support', 'Help Desk', 'Ticketing', 'Service'],
    popularity: 'high',
    automationUseCase: 'Automate ticket creation, response routing, SLA management, customer feedback collection, and resolution tracking.',
    businessBenefit: 'Deliver consistent customer support with automated workflows that ensure fast response times and resolution.',
    commonIntegrations: ['CRM systems', 'E-commerce platforms', 'Phone systems', 'Chat tools'],
    features: ['Ticket management', 'Knowledge base', 'Live chat', 'Customer analytics', 'Automation workflows']
  },

  // Additional Popular Tools
  {
    id: 'wordpress',
    name: 'WordPress',
    slug: 'wordpress',
    description: 'Content management system powering over 40% of websites worldwide.',
    category: 'Marketing',
    logo: '/logos/wordpress.svg',
    tags: ['CMS', 'Website', 'Blog', 'Content'],
    popularity: 'high',
    automationUseCase: 'Automate content publishing, SEO optimization, backup processes, security monitoring, and lead capture.',
    businessBenefit: 'Maintain your website automatically with content scheduling and security monitoring that keeps your site running smoothly.',
    commonIntegrations: ['Google Analytics', 'Mailchimp', 'Social media', 'E-commerce'],
    features: ['Content management', 'SEO tools', 'Plugin ecosystem', 'Theme customization', 'User management']
  },
  {
    id: 'airtable',
    name: 'Airtable',
    slug: 'airtable',
    description: 'Collaborative database platform that combines the simplicity of a spreadsheet with database power.',
    category: 'Project Management',
    logo: '/logos/airtable.svg',
    tags: ['Database', 'Collaboration', 'Spreadsheet', 'Workflow'],
    popularity: 'high',
    automationUseCase: 'Automate data entry, record updates, workflow triggers, report generation, and team notifications.',
    businessBenefit: 'Organize complex projects with flexible databases that automatically update and notify teams of important changes.',
    commonIntegrations: ['Slack', 'Google Calendar', 'Email platforms', 'Zapier'],
    features: ['Flexible databases', 'Automation triggers', 'Collaboration tools', 'Custom views', 'API integrations']
  },
  {
    id: 'zapier',
    name: 'Zapier',
    slug: 'zapier',
    description: 'Automation platform that connects over 5,000 apps to automate workflows without coding.',
    category: 'AI & Machine Learning',
    logo: '/logos/zapier.svg',
    tags: ['Automation', 'Integration', 'Workflow', 'No-code'],
    popularity: 'high',
    automationUseCase: 'Create custom automations between any combination of business tools, triggering actions across platforms automatically.',
    businessBenefit: 'Connect all your business tools with custom automation workflows that eliminate manual tasks and data silos.',
    commonIntegrations: ['All major business apps', 'CRM systems', 'E-commerce platforms', 'Marketing tools'],
    features: ['5000+ app integrations', 'Custom workflows', 'Multi-step automation', 'Conditional logic', 'Team collaboration']
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