'use client';

import { useContent } from '@/hooks/useContent';
import { useContactPopup } from '@/contexts/ContactPopupContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Loader2 } from 'lucide-react';

export default function IntegrationsPage() {
  const { data: content, loading, error } = useContent('integrations', 'integrations');
  const { openPopup } = useContactPopup();

  if (loading) {
    return (
      <div className="min-h-screen bg-n8n-bg-primary flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-brand-primary" />
      </div>
    );
  }

  if (error || !content) {
    return (
      <div className="min-h-screen bg-n8n-bg-primary">
        <Header />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-2xl text-red-500">Content Loading Error</h1>
          <p className="text-n8n-text-secondary mt-2">Please refresh the page</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-n8n-bg-primary">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-n8n-bg-primary relative overflow-hidden">
        {content.hero.backgroundImage && (
          <div className="absolute inset-0">
            <img 
              src={content.hero.backgroundImage} 
              alt={content.hero.title}
              className="w-full h-full object-cover opacity-10"
            />
          </div>
        )}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-light text-n8n-text-primary mb-6 tracking-tight">
            {content.hero.title}
          </h1>
          <p className="text-2xl md:text-3xl text-brand-primary mb-8 font-light">
            {content.hero.subtitle}
          </p>
          <p className="text-xl text-n8n-text-secondary mb-12 max-w-4xl mx-auto">
            {content.hero.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/integrations/advanced">
              <button className="bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2">
                Browse All Integrations
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <button 
              onClick={openPopup}
              className="bg-n8n-bg-secondary hover:bg-n8n-bg-secondary/80 text-n8n-text-primary border border-n8n-border px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Get Free Integration Plan
            </button>
          </div>
        </div>
      </section>

      {/* Integration Categories */}
      <section className="py-20 bg-n8n-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.categories.map((category: any) => (
              <div key={category.id} className="bg-n8n-bg-primary rounded-lg p-8 border border-n8n-border hover:shadow-xl transition-all duration-300">
                <div className="text-3xl mb-4">{category.icon}</div>
                <h3 className="text-2xl font-medium text-n8n-text-primary mb-3">{category.name}</h3>
                <p className="text-n8n-text-secondary mb-6">{category.description}</p>
                
                <div className="space-y-2 mb-6">
                  {category.integrations.slice(0, 4).map((app: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-2 text-n8n-text-secondary">
                      <CheckCircle className="w-4 h-4 text-brand-primary flex-shrink-0" />
                      <span className="text-sm">{app}</span>
                    </div>
                  ))}
                  {category.integrations.length > 4 && (
                    <p className="text-sm text-brand-primary font-medium">
                      + {category.integrations.length - 4} more
                    </p>
                  )}
                </div>
                
                <Link href="/integrations/advanced">
                  <button className="w-full bg-n8n-bg-secondary hover:bg-n8n-bg-secondary/80 text-n8n-text-primary border border-n8n-border py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200">
                    View All {category.name}
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-n8n-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-n8n-text-primary mb-4">
              {content.stats.title}
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {content.stats.items.map((stat: any, index: number) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-brand-primary mb-2">{stat.number}</div>
                <div className="text-n8n-text-secondary">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Integration Section */}
      <section className="py-20 bg-n8n-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-n8n-bg-primary rounded-lg p-12 border border-n8n-border">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-medium text-n8n-text-primary mb-6">
                {content.customIntegration.title}
              </h2>
              <p className="text-xl text-n8n-text-secondary mb-8">
                {content.customIntegration.description}
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {content.customIntegration.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-center gap-2 text-n8n-text-secondary">
                    <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <button 
                onClick={openPopup}
                className="bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                {content.customIntegration.cta.text}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-n8n-bg-primary border-t border-n8n-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-n8n-text-primary mb-8">
            {content.cta.title}
          </h2>
          <p className="text-xl text-n8n-text-secondary mb-12">
            {content.cta.subtitle}
          </p>
          
          <button 
            onClick={openPopup}
            className="bg-brand-primary hover:bg-brand-primary/90 text-white px-10 py-4 rounded-lg font-medium transition-colors duration-200 text-lg"
          >
            {content.cta.button.text}
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}