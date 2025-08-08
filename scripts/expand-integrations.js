// Script to expand integrations database with popular business tools
// Based on N8N integrations and LA business needs

const popularIntegrations = [
  // CRM & Sales
  { name: 'HubSpot', category: 'Marketing & CRM', popularity: 95, nodeType: 'trigger_action' },
  { name: 'Salesforce', category: 'Marketing & CRM', popularity: 92, nodeType: 'trigger_action' },
  { name: 'Pipedrive', category: 'Marketing & CRM', popularity: 85, nodeType: 'trigger_action' },
  { name: 'Zoho CRM', category: 'Marketing & CRM', popularity: 82, nodeType: 'trigger_action' },
  { name: 'Close', category: 'Marketing & CRM', popularity: 75, nodeType: 'trigger_action' },
  { name: 'Monday Sales CRM', category: 'Marketing & CRM', popularity: 78, nodeType: 'trigger_action' },
  
  // Communication
  { name: 'Microsoft Teams', category: 'Communication & Messaging', popularity: 88, nodeType: 'trigger_action' },
  { name: 'Discord', category: 'Communication & Messaging', popularity: 82, nodeType: 'trigger_action' },
  { name: 'WhatsApp Business', category: 'Communication & Messaging', popularity: 90, nodeType: 'trigger_action' },
  { name: 'SMS (Twilio)', category: 'Communication & Messaging', popularity: 87, nodeType: 'action' },
  
  // E-commerce
  { name: 'WooCommerce', category: 'Ecommerce', popularity: 88, nodeType: 'trigger_action' },
  { name: 'Magento', category: 'Ecommerce', popularity: 80, nodeType: 'trigger_action' },
  { name: 'BigCommerce', category: 'Ecommerce', popularity: 75, nodeType: 'trigger_action' },
  { name: 'Square', category: 'Ecommerce', popularity: 85, nodeType: 'trigger_action' },
  { name: 'PayPal', category: 'Ecommerce', popularity: 90, nodeType: 'trigger_action' },
  
  // Accounting & Finance
  { name: 'QuickBooks', category: 'Data & Storage', popularity: 92, nodeType: 'trigger_action' },
  { name: 'Xero', category: 'Data & Storage', popularity: 85, nodeType: 'trigger_action' },
  { name: 'FreshBooks', category: 'Data & Storage', popularity: 78, nodeType: 'trigger_action' },
  { name: 'Wave Accounting', category: 'Data & Storage', popularity: 70, nodeType: 'trigger_action' },
  
  // Project Management
  { name: 'Monday.com', category: 'Business Management', popularity: 88, nodeType: 'trigger_action' },
  { name: 'ClickUp', category: 'Business Management', popularity: 85, nodeType: 'trigger_action' },
  { name: 'Basecamp', category: 'Business Management', popularity: 75, nodeType: 'trigger_action' },
  { name: 'Wrike', category: 'Business Management', popularity: 72, nodeType: 'trigger_action' },
  
  // LA Business Specific
  { name: 'Toast POS', category: 'Business Management', popularity: 80, nodeType: 'trigger_action' },
  { name: 'ServiceTitan', category: 'Business Management', popularity: 85, nodeType: 'trigger_action' },
  { name: 'Jobber', category: 'Business Management', popularity: 78, nodeType: 'trigger_action' },
  { name: 'Follow Up Boss', category: 'Marketing & CRM', popularity: 82, nodeType: 'trigger_action' },
  { name: 'Dentrix', category: 'Business Management', popularity: 75, nodeType: 'trigger_action' },
  { name: 'Eaglesoft', category: 'Business Management', popularity: 72, nodeType: 'trigger_action' },
  { name: 'Chime (Real Estate)', category: 'Marketing & CRM', popularity: 78, nodeType: 'trigger_action' },
  { name: 'Resy', category: 'Business Management', popularity: 70, nodeType: 'trigger_action' },
  { name: 'OpenTable', category: 'Business Management', popularity: 85, nodeType: 'trigger_action' },
  { name: 'Yelp for Business', category: 'Marketing & CRM', popularity: 82, nodeType: 'trigger_action' },
  { name: 'Clio', category: 'Business Management', popularity: 80, nodeType: 'trigger_action' },
  { name: 'MyCase', category: 'Business Management', popularity: 75, nodeType: 'trigger_action' },
];

// Export for use in integrations.ts
console.log('Popular integrations to add:', popularIntegrations.length);
console.log('Sample integrations:');
popularIntegrations.slice(0, 5).forEach(integration => {
  console.log(`- ${integration.name} (${integration.category}, ${integration.popularity}%)`);
});