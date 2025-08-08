'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Integration } from '@/data/integrations';
import { ExternalLink, Zap, CheckCircle } from 'lucide-react';
import Button from '@/components/ui/Button';
import IntegrationLogo from './IntegrationLogo';

interface IntegrationCardProps {
  integration: Integration;
  onViewDetails: (integration: Integration) => void;
  viewMode?: 'grid' | 'list';
}

export default function IntegrationCard({ integration, onViewDetails, viewMode = 'grid' }: IntegrationCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getPopularityInfo = (popularity: number) => {
    if (popularity >= 90) return { label: 'Popular', color: 'bg-green-100 text-green-800' };
    if (popularity >= 80) return { label: 'Rising', color: 'bg-yellow-100 text-yellow-800' };
    return { label: 'New', color: 'bg-gray-100 text-gray-800' };
  };

  // N8N-style compact grid view
  if (viewMode === 'grid') {
    return (
      <motion.div
        className="group bg-white rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200 cursor-pointer p-4 flex flex-col items-center text-center"
        whileHover={{ y: -2, scale: 1.02 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={() => onViewDetails(integration)}
      >
        {/* Logo */}
        <div className="mb-3 relative">
          <IntegrationLogo integration={integration} size="lg" />
          {integration.popularity >= 90 && (
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
          )}
        </div>

        {/* Name */}
        <h3 className="text-sm font-semibold text-gray-900 mb-1 group-hover:text-brand-primary transition-colors">
          {integration.name}
        </h3>

        {/* Category */}
        <p className="text-xs text-gray-500 mb-2">
          {integration.category}
        </p>

        {/* Primary tag */}
        {integration.tags[0] && (
          <div className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded group-hover:bg-brand-primary/10 group-hover:text-brand-primary transition-colors">
            {integration.tags[0]}
          </div>
        )}

        {/* Hover overlay */}
        <motion.div 
          className="absolute inset-0 bg-brand-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
        />
      </motion.div>
    );
  }

  // Detailed list view
  return (
    <motion.div
      className="bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden cursor-pointer"
      whileHover={{ y: -4 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => onViewDetails(integration)}
    >
      {/* Card Header */}
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <IntegrationLogo integration={integration} size="md" />
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                {integration.name}
              </h3>
              <div className="flex items-center space-x-2 mt-1">
                <span className="text-sm text-gray-600">{integration.category}</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPopularityInfo(integration.popularity).color}`}>
                  {getPopularityInfo(integration.popularity).label}
                </span>
              </div>
            </div>
          </div>
          
          <motion.div
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.2 }}
          >
            <ExternalLink className="w-5 h-5 text-gray-400 hover:text-brand-primary transition-colors" />
          </motion.div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
          {integration.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {integration.tags.slice(0, 3).map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium"
            >
              {tag}
            </span>
          ))}
          {integration.tags.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium">
              +{integration.tags.length - 3} more
            </span>
          )}
        </div>

        {/* Business Benefit */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-3 mb-4">
          <div className="flex items-start space-x-2">
            <Zap className="w-4 h-4 text-brand-primary mt-0.5 flex-shrink-0" />
            <p className="text-sm text-gray-800 font-medium">
              {integration.businessBenefit}
            </p>
          </div>
        </div>

        {/* Common Integrations */}
        <div className="mb-4">
          <p className="text-xs font-medium text-gray-700 mb-2">Works great with:</p>
          <div className="flex flex-wrap gap-1">
            {integration.commonIntegrations.slice(0, 4).map((common, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-brand-primary/10 text-brand-primary rounded text-xs"
              >
                {common}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center text-xs text-gray-600">
            <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
            <span>{integration.features.length} features</span>
          </div>
          
          <motion.div
            animate={{ x: isHovered ? 4 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <Button 
              size="sm" 
              variant="outline"
              className="text-xs"
            >
              View Details
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}