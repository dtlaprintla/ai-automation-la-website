'use client';

import { useContent } from '@/hooks/useContent';
import { useContactPopup } from '@/contexts/ContactPopupContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { ArrowRight, Bot, Phone, Workflow, MessageCircle, CheckCircle, Loader2 } from 'lucide-react';

export default function ServicesPage() {
  const { data: content, loading, error } = useContent('pages', 'services');
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

  const getServiceIcon = (serviceId: string) => {
    const icons: { [key: string]: any } = {
      'voice-agents': Phone,
      'chatbots': MessageCircle,
      'workflow-automation': Workflow,
      'customer-support': Bot
    };
    return icons[serviceId] || Bot;
  };

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

      {/* Services Grid */}
      <section className="py-20 bg-n8n-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {content.services.map((service: any, index: number) => {
              const IconComponent = getServiceIcon(service.id);
              return (
                <div key={service.id} className="bg-n8n-bg-primary rounded-lg overflow-hidden border border-n8n-border hover:shadow-xl transition-all duration-300">
                  {/* Service Image */}
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Service Content */}
                  <div className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-brand-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-brand-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-medium text-n8n-text-primary mb-2">{service.title}</h3>
                        <p className="text-n8n-text-secondary mb-4">{service.shortDescription}</p>
                      </div>
                    </div>
                    
                    <p className="text-n8n-text-secondary mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-lg font-medium text-n8n-text-primary mb-3">What's Included:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2 text-n8n-text-secondary">
                            <CheckCircle className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Pricing & CTA */}
                    <div className="flex items-center justify-between pt-6 border-t border-n8n-border">
                      <div>
                        <p className="text-2xl font-bold text-brand-primary">{service.pricing.starting}</p>
                        <p className="text-sm text-n8n-text-secondary">{service.pricing.includes}</p>
                      </div>
                      <Link href={service.cta.link}>
                        <button className="bg-brand-primary hover:bg-brand-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2">
                          {service.cta.text}
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-n8n-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-n8n-text-primary mb-4">
              {content.process.title}
            </h2>
            <p className="text-xl text-n8n-text-secondary">
              {content.process.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.process.steps.map((step: any, index: number) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-brand-primary/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-brand-primary text-xl font-bold">{step.number}</span>
                </div>
                <h3 className="text-xl font-medium text-n8n-text-primary mb-3">{step.title}</h3>
                <p className="text-n8n-text-secondary mb-2">{step.description}</p>
                <p className="text-sm text-brand-primary font-medium">{step.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-n8n-bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-n8n-text-primary mb-6">
            {content.cta.title}
          </h2>
          <p className="text-xl text-n8n-text-secondary mb-12">
            {content.cta.subtitle}
          </p>
          
          {/* CTA Features */}
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