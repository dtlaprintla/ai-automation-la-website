'use client';

import { Integration } from '@/data/integrations';
import Image from 'next/image';
import { useState } from 'react';

interface IntegrationLogoProps {
  integration: Integration;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export default function IntegrationLogo({ integration, size = 'md', className = '' }: IntegrationLogoProps) {
  const [imageError, setImageError] = useState(false);
  
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12', 
    lg: 'w-16 h-16',
    xl: 'w-20 h-20'
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-xl', 
    xl: 'text-2xl'
  };

  // Generate a consistent color based on the integration name
  const getLogoColor = (name: string): string => {
    const colors = [
      'from-blue-500 to-blue-600',      // Salesforce, Gmail
      'from-orange-500 to-orange-600',  // HubSpot
      'from-green-500 to-green-600',    // Pipedrive
      'from-purple-500 to-purple-600',  // Slack
      'from-pink-500 to-pink-600',      // Shopify
      'from-indigo-500 to-indigo-600',  // Mailchimp
      'from-red-500 to-red-600',        // QuickBooks
      'from-teal-500 to-teal-600',      // Asana
      'from-yellow-500 to-yellow-600',  // OpenAI
      'from-gray-500 to-gray-600'       // Default
    ];
    
    const hash = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[hash % colors.length];
  };

  // Brand-specific color overrides for accurate representation
  const getBrandColor = (id: string): string => {
    const brandColors: Record<string, string> = {
      'salesforce': 'from-blue-400 to-blue-600',
      'hubspot': 'from-orange-400 to-orange-600',
      'pipedrive': 'from-green-400 to-green-600',
      'gmail': 'from-red-400 to-red-600',
      'slack': 'from-purple-400 to-purple-600',
      'shopify': 'from-green-500 to-green-700',
      'woocommerce': 'from-purple-600 to-purple-800',
      'mailchimp': 'from-yellow-400 to-yellow-600',
      'quickbooks': 'from-blue-500 to-blue-700',
      'asana': 'from-red-400 to-pink-500',
      'openai': 'from-gray-700 to-gray-900'
    };
    
    return brandColors[id] || getLogoColor(integration.name);
  };

  // Try to load the actual logo image first, fallback to generated logo
  const logoUrl = `/logos/${integration.id}.svg`;
  
  if (imageError) {
    // Fallback to generated logo
    return (
      <div className={`${sizes[size]} ${className} bg-gradient-to-br ${getBrandColor(integration.id)} rounded-lg flex items-center justify-center shadow-md`}>
        <span className={`text-white font-bold ${textSizes[size]}`}>
          {integration.name.charAt(0)}
        </span>
      </div>
    );
  }

  return (
    <div className={`${sizes[size]} ${className} relative overflow-hidden rounded-lg shadow-md bg-white flex items-center justify-center`}>
      <Image
        src={logoUrl}
        alt={`${integration.name} logo`}
        width={size === 'xl' ? 80 : size === 'lg' ? 64 : size === 'md' ? 48 : 32}
        height={size === 'xl' ? 80 : size === 'lg' ? 64 : size === 'md' ? 48 : 32}
        className="object-contain"
        onError={() => setImageError(true)}
        onLoad={() => setImageError(false)}
        priority={size === 'lg' || size === 'xl'}
      />
    </div>
  );
}