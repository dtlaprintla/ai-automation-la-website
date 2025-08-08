'use client';

import { useState } from 'react';
import { Search, Zap, Star, Filter, ArrowRight } from 'lucide-react';

const demoIntegrations = [
  {
    name: 'Salesforce',
    logo: '🏢',
    category: 'CRM',
    popularity: 95,
    description: 'World\'s #1 CRM platform',
    nodeType: 'trigger_action'
  },
  {
    name: 'Gmail',
    logo: '📧',
    category: 'Email',
    popularity: 98,
    description: 'Google\'s email service',
    nodeType: 'trigger_action'
  },
  {
    name: 'Slack',
    logo: '💬',
    category: 'Communication',
    popularity: 92,
    description: 'Team collaboration platform',
    nodeType: 'trigger_action'
  },
  {
    name: 'HubSpot',
    logo: '🎯',
    category: 'CRM',
    popularity: 93,
    description: 'Inbound marketing platform',
    nodeType: 'trigger_action'
  },
  {
    name: 'Stripe',
    logo: '💳',
    category: 'Payments',
    popularity: 91,
    description: 'Online payment processing',
    nodeType: 'trigger_action'
  },
  {
    name: 'Shopify',
    logo: '🛒',
    category: 'E-commerce',
    popularity: 94,
    description: 'E-commerce platform',
    nodeType: 'trigger_action'
  }
];

export default function N8NDemoPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredIntegrations = demoIntegrations.filter(integration => {
    const matchesSearch = integration.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || integration.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['All', ...Array.from(new Set(demoIntegrations.map(i => i.category)))];

  return (
    <div className="min-h-screen bg-n8n-bg-primary">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-white mb-6">
            N8N-Style Dark Theme
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience the beautiful dark interface inspired by N8N's design system.
            Deep navy backgrounds, elegant typography, and stunning gradients.
          </p>
          <button className="btn-primary text-lg px-8 py-4">
            <Zap className="w-5 h-5 mr-2 inline" />
            Get Started
          </button>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-n8n-bg-secondary rounded-lg p-8 mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-n8n-text-secondary" />
                <input
                  type="text"
                  placeholder="Search integrations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-n8n-bg-primary border border-n8n-border rounded-lg py-3 pl-12 pr-4 text-n8n-text-primary placeholder-n8n-text-secondary focus:outline-none focus:border-brand-primary"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Filter className="w-5 h-5 text-n8n-text-secondary mt-4" />
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-brand-primary to-brand-secondary text-white'
                        : 'bg-n8n-bg-primary border border-n8n-border text-n8n-text-primary hover:border-brand-primary'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Integration Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredIntegrations.map((integration) => (
            <div key={integration.name} className="bg-n8n-bg-secondary rounded-lg p-6 border border-n8n-border hover:border-brand-primary transition-all duration-300 group">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">{integration.logo}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-n8n-text-primary mb-1">
                    {integration.name}
                  </h3>
                  <p className="text-sm text-n8n-text-secondary mb-2">{integration.description}</p>
                  <div className="flex items-center gap-2">
                    <span className="bg-n8n-bg-primary border border-n8n-border rounded px-2 py-1 text-xs text-n8n-text-secondary">
                      {integration.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-n8n-text-secondary">{integration.popularity}%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white rounded px-2 py-1 text-xs">
                  {integration.nodeType}
                </span>
                <button className="btn-secondary text-sm px-4 py-2 group-hover:bg-gradient-to-r group-hover:from-brand-primary group-hover:to-brand-secondary group-hover:text-white group-hover:border-transparent">
                  Configure <ArrowRight className="w-4 h-4 ml-1 inline" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-n8n-bg-secondary rounded-lg p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-n8n-text-primary mb-2">Lightning Fast</h3>
            <p className="text-n8n-text-secondary">Built with performance in mind using modern web technologies.</p>
          </div>
          
          <div className="bg-n8n-bg-secondary rounded-lg p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-brand-secondary to-brand-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-n8n-text-primary mb-2">Beautiful Design</h3>
            <p className="text-n8n-text-secondary">Inspired by N8N's elegant dark theme with stunning gradients.</p>
          </div>
          
          <div className="bg-n8n-bg-secondary rounded-lg p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Filter className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-n8n-text-primary mb-2">Smart Filtering</h3>
            <p className="text-n8n-text-secondary">Advanced search and filtering capabilities for better user experience.</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-br from-brand-primary/10 via-brand-secondary/10 to-brand-accent/10 backdrop-blur-md border border-n8n-border rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold text-n8n-text-primary mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-n8n-text-secondary mb-8 max-w-2xl mx-auto">
            Join thousands of businesses using AI automation to streamline operations 
            and accelerate growth with our N8N-inspired platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg px-8 py-4">
              Start Free Trial
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              View Pricing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}