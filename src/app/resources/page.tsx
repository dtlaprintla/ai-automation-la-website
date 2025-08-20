'use client';

import { useContent } from '@/hooks/useContent';
import { useContactPopup } from '@/contexts/ContactPopupContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Loader2, Download } from 'lucide-react';

export default function ResourcesPage() {
  const { data: content, loading, error } = useContent('pages', 'resources');
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
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 bg-n8n-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {content.sections.map((section: any, index: number) => (
              <div key={section.id} className="bg-n8n-bg-primary rounded-lg overflow-hidden border border-n8n-border hover:shadow-xl transition-all duration-300">
                {/* Section Image */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={section.image} 
                    alt={section.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Section Content */}
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-3xl">{section.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-medium text-n8n-text-primary mb-2">{section.title}</h3>
                      <p className="text-n8n-text-secondary mb-4">{section.description}</p>
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <ul className="space-y-2">
                      {section.features.map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-2 text-n8n-text-secondary">
                          <CheckCircle className="w-4 h-4 text-brand-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* CTA */}
                  <Link href={section.cta.link}>
                    <button className="w-full bg-n8n-bg-secondary hover:bg-n8n-bg-secondary/80 text-n8n-text-primary border border-n8n-border py-3 px-6 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2">
                      {section.cta.text}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start Guide */}
      <section className="py-20 bg-n8n-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-n8n-text-primary mb-4">
              {content.quickStart.title}
            </h2>
            <p className="text-xl text-n8n-text-secondary">
              {content.quickStart.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.quickStart.steps.map((step: any, index: number) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-brand-primary/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-brand-primary text-xl font-bold">{step.number}</span>
                </div>
                <h3 className="text-xl font-medium text-n8n-text-primary mb-3">{step.title}</h3>
                <p className="text-n8n-text-secondary">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-20 bg-n8n-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-n8n-text-primary mb-4">
              {content.downloads.title}
            </h2>
            <p className="text-xl text-n8n-text-secondary">
              {content.downloads.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {content.downloads.items.map((item: any, index: number) => (
              <div key={index} className="bg-n8n-bg-primary p-6 rounded-lg border border-n8n-border">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-brand-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Download className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-n8n-text-primary mb-2">{item.title}</h3>
                    <p className="text-n8n-text-secondary text-sm mb-3">{item.description}</p>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-brand-primary/20 text-brand-primary">
                      {item.type}
                    </span>
                  </div>
                </div>
                <button 
                  onClick={openPopup}
                  className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 text-sm"
                >
                  Download Free
                </button>
              </div>
            ))}
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
          
          <div className="grid md:grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto">
            {content.cta.features.map((feature: string, index: number) => (
              <div key={index} className="flex items-center gap-2 text-n8n-text-secondary">
                <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
          
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