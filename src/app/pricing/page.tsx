'use client';

import { useContent } from '@/hooks/useContent';
import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { BRAND } from '@/config/branding';
import { CheckCircle, ArrowRight, Phone, Star, Zap, Loader2 } from 'lucide-react';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function PricingPage() {
  const { data: content, loading, error } = useContent('pages', 'pricing');

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

      {/* Pricing Cards */}
      <section className="py-20 bg-n8n-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {content.plans.map((plan: any, index: number) => (
              <div 
                key={plan.id} 
                className={`bg-n8n-bg-primary rounded-lg p-8 border border-n8n-border relative ${
                  plan.popular ? 'ring-2 ring-brand-primary transform scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-brand-primary text-white px-6 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-medium text-n8n-text-primary mb-2">{plan.name}</h3>
                  <p className="text-n8n-text-secondary mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-n8n-text-primary">
                      {plan.price}
                      <span className="text-lg text-n8n-text-secondary font-normal"> {plan.period}</span>
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0" />
                      <span className="text-n8n-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link href={plan.cta.link}>
                  <button className={`w-full py-3 px-6 rounded-lg font-medium transition-colors duration-200 ${
                    plan.popular 
                      ? 'bg-brand-primary hover:bg-brand-primary/90 text-white' 
                      : 'bg-n8n-bg-secondary hover:bg-n8n-bg-secondary/80 text-n8n-text-primary border border-n8n-border'
                  }`}>
                    {plan.cta.text}
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-n8n-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-n8n-text-primary mb-4">
              {content.addOns.title}
            </h2>
            <p className="text-xl text-n8n-text-secondary">
              {content.addOns.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {content.addOns.items.map((addon: any, index: number) => (
              <div key={index} className="bg-n8n-bg-secondary rounded-lg p-8 border border-n8n-border">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-medium text-n8n-text-primary">{addon.name}</h3>
                  <div className="text-lg font-bold text-brand-primary">{addon.price}</div>
                </div>
                <p className="text-n8n-text-secondary">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 bg-n8n-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-n8n-text-primary mb-4">
              {content.comparison.title}
            </h2>
          </div>
          
          <div className="bg-n8n-bg-primary rounded-lg overflow-hidden border border-n8n-border">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-n8n-border">
                    <th className="text-left p-6 text-n8n-text-primary font-medium">Feature</th>
                    <th className="text-center p-6 text-n8n-text-primary font-medium">Starter</th>
                    <th className="text-center p-6 text-n8n-text-primary font-medium">Professional</th>
                    <th className="text-center p-6 text-n8n-text-primary font-medium">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {content.comparison.features.map((feature: any, index: number) => (
                    <tr key={index} className="border-b border-n8n-border last:border-b-0">
                      <td className="p-6 text-n8n-text-secondary">{feature.name}</td>
                      <td className="p-6 text-center text-n8n-text-secondary">{feature.starter}</td>
                      <td className="p-6 text-center text-n8n-text-secondary">{feature.professional}</td>
                      <td className="p-6 text-center text-n8n-text-secondary">{feature.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-n8n-bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-n8n-text-primary mb-4">
              {content.faq.title}
            </h2>
          </div>
          
          <div className="space-y-6">
            {content.faq.items.map((faq: any, index: number) => (
              <div key={index} className="bg-n8n-bg-secondary rounded-lg p-8 border border-n8n-border">
                <h3 className="text-xl font-medium text-n8n-text-primary mb-4">
                  {faq.question}
                </h3>
                <p className="text-n8n-text-secondary leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-n8n-bg-secondary border-t border-n8n-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-n8n-text-primary mb-8">
            {content.cta.title}
          </h2>
          <p className="text-xl text-n8n-text-secondary mb-12">
            {content.cta.subtitle}
          </p>
          
          <Link href={content.cta.button.link}>
            <button className="bg-brand-primary hover:bg-brand-primary/90 text-white px-10 py-4 rounded-lg font-medium transition-colors duration-200 text-lg">
              {content.cta.button.text}
            </button>
          </Link>
          
          {content.cta.guarantee && (
            <p className="text-sm text-n8n-text-secondary mt-6">
              {content.cta.guarantee}
            </p>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
}