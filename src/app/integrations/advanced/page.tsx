'use client';

import { useState, useMemo } from 'react';
import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { BRAND } from '@/config/branding';
import { 
  integrations, 
  integrationCategories, 
  getIntegrationsByCategory, 
  getPopularIntegrations,
  searchIntegrations,
  Integration
} from '@/data/integrations';
import IntegrationCard from '@/components/integrations/IntegrationCard';
import IntegrationModal from '@/components/integrations/IntegrationModal';
import { Search, Filter, Zap, Star, Grid, List } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function AdvancedIntegrationsPage() {
  const [selectedIntegration, setSelectedIntegration] = useState<Integration | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('All');
  const [selectedNodeType, setSelectedNodeType] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showOnlyPopular, setShowOnlyPopular] = useState(false);

  // Filter integrations based on current filters
  const filteredIntegrations = useMemo(() => {
    let filtered = integrations;

    // Apply search filter
    if (searchQuery.trim()) {
      filtered = searchIntegrations(searchQuery);
    }

    // Apply category filter
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(integration => integration.category === selectedCategory);
    }

    // Apply subcategory filter
    if (selectedSubcategory !== 'All') {
      filtered = filtered.filter(integration => integration.subcategory === selectedSubcategory);
    }

    // Apply node type filter
    if (selectedNodeType !== 'All') {
      filtered = filtered.filter(integration => integration.nodeType === selectedNodeType);
    }

    // Apply popularity filter
    if (showOnlyPopular) {
      filtered = filtered.filter(integration => integration.popularity >= 85);
    }

    return filtered;
  }, [searchQuery, selectedCategory, selectedSubcategory, selectedNodeType, showOnlyPopular]);

  const handleViewDetails = (integration: Integration) => {
    setSelectedIntegration(integration);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedIntegration(null);
  };

  const categories = ['All', ...Object.keys(integrationCategories)];
  const subcategories = selectedCategory !== 'All' && selectedCategory in integrationCategories 
    ? ['All', ...(integrationCategories[selectedCategory as keyof typeof integrationCategories].subcategories || [])]
    : ['All'];
  const nodeTypes = ['All', 'trigger', 'action', 'trigger_action', 'cluster_node'];
  const totalIntegrations = integrations.length;
  const popularIntegrationsCount = getPopularIntegrations(85).length;

  return (
    <main className="min-h-screen bg-n8n-bg-primary">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent">
        <div className="absolute inset-0 animated-bg opacity-30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-6 py-3 text-white mb-8">
            <Zap className="w-5 h-5 mr-2" />
            {totalIntegrations}+ Business Apps We Connect
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Every App Your
            <span className="block gradient-text">Business Uses</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            We connect all your favorite business tools with intelligent automation. 
            <span className="text-white font-semibold"> Completely done-for-you</span> - 
            no technical setup required.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="xl" variant="primary">
              Find Your Apps
            </Button>
            <Button size="xl" variant="secondary">
              Get Custom Integration Plan
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-n8n-bg-secondary/10 backdrop-blur-md border border-white/20 rounded-lg p-6">
              <div className="text-3xl font-bold text-brand-accent mb-2">{totalIntegrations}+</div>
              <p className="text-white">Total Integrations</p>
            </div>
            <div className="bg-n8n-bg-secondary/10 backdrop-blur-md border border-white/20 rounded-lg p-6">
              <div className="text-3xl font-bold text-brand-accent mb-2">{Object.keys(integrationCategories).length}</div>
              <p className="text-white">Categories</p>
            </div>
            <div className="bg-n8n-bg-secondary/10 backdrop-blur-md border border-white/20 rounded-lg p-6">
              <div className="text-3xl font-bold text-brand-accent mb-2">{popularIntegrationsCount}</div>
              <p className="text-white">Most Popular</p>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search */}
            <div className="flex-1 relative max-w-md">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search integrations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setSelectedSubcategory('All'); // Reset subcategory when category changes
                }}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Subcategory Filter */}
            {selectedCategory !== 'All' && subcategories.length > 1 && (
              <div className="flex items-center space-x-2">
                <select
                  value={selectedSubcategory}
                  onChange={(e) => setSelectedSubcategory(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                >
                  {subcategories.map(subcategory => (
                    <option key={subcategory} value={subcategory}>
                      {subcategory === 'All' ? 'All Subcategories' : subcategory.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Node Type Filter */}
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Type:</span>
              <select
                value={selectedNodeType}
                onChange={(e) => setSelectedNodeType(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
              >
                {nodeTypes.map(nodeType => (
                  <option key={nodeType} value={nodeType}>
                    {nodeType === 'All' ? 'All Types' : nodeType.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </option>
                ))}
              </select>
            </div>

            {/* Popular Filter */}
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showOnlyPopular}
                onChange={(e) => setShowOnlyPopular(e.target.checked)}
                className="w-4 h-4 text-brand-primary border-gray-300 rounded focus:ring-brand-primary"
              />
              <Star className="w-4 h-4 text-yellow-500" />
              <span className="text-gray-700">Popular only</span>
            </label>

            {/* View Mode */}
            <div className="flex items-center bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-white shadow-sm text-brand-primary' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-white shadow-sm text-brand-primary' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredIntegrations.length} of {totalIntegrations} integrations
            {searchQuery && ` for "${searchQuery}"`}
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            {selectedSubcategory !== 'All' && ` → ${selectedSubcategory.replace('-', ' ')}`}
            {selectedNodeType !== 'All' && ` (${selectedNodeType.replace('_', ' ')} type)`}
            {showOnlyPopular && ` (popular only)`}
          </div>
        </div>
      </section>

      {/* Integrations Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredIntegrations.length > 0 ? (
            <div className={`grid gap-4 ${
              viewMode === 'grid' 
                ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8' 
                : 'grid-cols-1 max-w-4xl mx-auto gap-3'
            }`}>
              {filteredIntegrations.map((integration) => (
                <IntegrationCard
                  key={integration.id}
                  integration={integration}
                  onViewDetails={handleViewDetails}
                  viewMode={viewMode}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No integrations found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <Button 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                  setSelectedSubcategory('All');
                  setSelectedNodeType('All');
                  setShowOnlyPopular(false);
                }}
                variant="outline"
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Don't See Your App?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            We work with 1000+ business apps. If your favorite tool isn't listed, 
            we can probably connect it. Get a free consultation to find out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Request Custom Integration
            </Button>
            <Button size="lg" variant="ghost" className="text-white border-white hover:bg-white hover:text-brand-primary">
              Call {BRAND.phone}
            </Button>
          </div>
        </div>
      </section>

      {/* Integration Modal */}
      <IntegrationModal
        integration={selectedIntegration}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
      <Footer />
    </main>
  );
}