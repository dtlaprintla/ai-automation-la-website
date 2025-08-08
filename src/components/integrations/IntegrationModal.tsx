'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Integration } from '@/data/integrations';
import { X, Zap, CheckCircle, ArrowRight, ExternalLink } from 'lucide-react';
import Button from '@/components/ui/Button';
import IntegrationLogo from './IntegrationLogo';

interface IntegrationModalProps {
  integration: Integration | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function IntegrationModal({ integration, isOpen, onClose }: IntegrationModalProps) {
  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!integration) return null;

  const popularityColors = {
    high: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    low: 'bg-gray-100 text-gray-800'
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 bg-white rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-gray-50 to-white px-6 py-4 border-b border-gray-200 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center space-x-4">
                <IntegrationLogo integration={integration} size="lg" />
                
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {integration.name}
                  </h2>
                  <div className="flex items-center space-x-3 mt-1">
                    <span className="text-gray-600">{integration.category}</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${popularityColors[integration.popularity]}`}>
                      {integration.popularity} popularity
                    </span>
                  </div>
                </div>
              </div>
              
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-6 space-y-8">
                {/* Description */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    About {integration.name}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {integration.description}
                  </p>
                </div>

                {/* Business Benefit */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-100">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-chatgpt rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        How This Helps Your Business
                      </h4>
                      <p className="text-gray-800 leading-relaxed">
                        {integration.businessBenefit}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Automation Use Case */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    What We Automate For You
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {integration.automationUseCase}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Features We Set Up
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {integration.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Common Integrations */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Works Great With These Apps
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {integration.commonIntegrations.map((common, index) => {
                      // Find the integration for this common app to get proper logo
                      const commonIntegration = {
                        id: common.toLowerCase().replace(/\s+/g, ''),
                        name: common,
                        slug: common.toLowerCase().replace(/\s+/g, ''),
                        description: '',
                        category: '',
                        logo: '',
                        tags: [],
                        popularity: 'medium' as const,
                        automationUseCase: '',
                        businessBenefit: '',
                        commonIntegrations: [],
                        features: []
                      };
                      
                      return (
                        <div key={index} className="bg-gray-50 rounded-lg p-3 text-center hover:bg-gray-100 transition-colors">
                          <div className="mx-auto mb-2 flex justify-center">
                            <IntegrationLogo integration={commonIntegration} size="sm" />
                          </div>
                          <span className="text-sm font-medium text-gray-800">
                            {common}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Categories & Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {integration.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex-shrink-0">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="primary"
                  rightIcon={<ArrowRight className="w-5 h-5" />}
                >
                  Set Up {integration.name} Integration
                </Button>
                <Button 
                  size="lg" 
                  variant="secondary"
                  leftIcon={<ExternalLink className="w-5 h-5" />}
                >
                  Learn More About {integration.name}
                </Button>
              </div>
              
              <p className="text-center text-sm text-gray-600 mt-4">
                Complete done-for-you setup • No technical knowledge required • We handle everything
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}