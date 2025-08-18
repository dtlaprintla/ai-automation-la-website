'use client';

import { useContent } from '@/hooks/useContent';
import HeaderVapi from '@/components/layout/HeaderVapi';
import Link from 'next/link';
import { ArrowRight, Phone, MessageSquare, Workflow, Headphones, Loader2 } from 'lucide-react';

export default function HomePageVapi() {
  const { data: content, loading, error } = useContent('pages', 'home');

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0B0C0F] flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-[#10B981]" />
      </div>
    );
  }

  if (error || !content) {
    return (
      <div className="min-h-screen bg-[#0B0C0F]">
        <HeaderVapi />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-2xl text-red-500">Content Loading Error</h1>
          <p className="text-gray-400 mt-2">Please refresh the page</p>
        </div>
      </div>
    );
  }

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: any } = {
      phone: Phone,
      'message-square': MessageSquare,
      workflow: Workflow,
      headphones: Headphones
    };
    const Icon = icons[iconName] || Phone;
    return <Icon className="w-6 h-6" />;
  };

  return (
    <div className="min-h-screen bg-[#0B0C0F] text-[#F3F1E8]">
      <HeaderVapi />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#0E0E13]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-light text-white mb-6">
              {content.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              {content.hero.subtitle}
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              {content.hero.description}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href={content.hero.cta.primary.link}>
                <button className="bg-[#10B981] hover:bg-[#059669] text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-lg">
                  {content.hero.cta.primary.text}
                </button>
              </Link>
              <Link href={content.hero.cta.secondary.link}>
                <button className="border border-gray-700 hover:border-gray-600 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-lg">
                  {content.hero.cta.secondary.text}
                </button>
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {content.hero.stats.map((stat: any, index: number) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#10B981] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#0E0E13]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
              {content.services.title}
            </h2>
            <p className="text-xl text-gray-400">
              {content.services.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {content.services.items.map((service: any) => (
              <div key={service.id} className="bg-[#111827] rounded-lg p-8 border border-gray-800 hover:border-gray-700 transition-all duration-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#10B981]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    {getIcon(service.icon)}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-medium text-white mb-3">{service.title}</h3>
                    <p className="text-gray-400 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <span className="text-[#10B981] mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#0B0C0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-light text-white text-center mb-16">
            {content.benefits.title}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {content.benefits.items.map((benefit: any, index: number) => (
              <div key={index} className="text-center">
                <h3 className="text-2xl font-medium text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-400 text-lg">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#0E0E13]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-light text-white text-center mb-16">
            {content.testimonials.title}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {content.testimonials.items.map((testimonial: any) => (
              <div key={testimonial.id} className="bg-[#111827] rounded-lg p-8 border border-gray-800">
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[#10B981] font-bold">{testimonial.metrics.improvement}</p>
                    <p className="text-gray-500 text-sm">{testimonial.metrics.timeframe}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0E0E13] border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            {content.cta.title}
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            {content.cta.subtitle}
          </p>
          
          <Link href={content.cta.button.link}>
            <button className="bg-[#10B981] hover:bg-[#059669] text-white px-10 py-4 rounded-lg font-medium transition-colors duration-200 text-lg mb-8">
              {content.cta.button.text}
            </button>
          </Link>
          
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {content.cta.features.map((feature: string, index: number) => (
              <div key={index} className="flex items-center justify-center text-gray-400">
                <span className="text-[#10B981] mr-2">✓</span>
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#0E0E13] border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold text-2xl mb-4">AI AUTOMATION LA</h3>
              <p className="text-gray-400 text-sm">
                Los Angeles' premier
                <br />
                AI automation agency.
              </p>
            </div>
            
            <div>
              <h4 className="text-gray-500 text-sm uppercase tracking-wider mb-4">Services</h4>
              <ul className="space-y-2">
                <li><Link href="/services" className="text-gray-400 hover:text-white text-sm">AI Automation</Link></li>
                <li><Link href="/pricing" className="text-gray-400 hover:text-white text-sm">Pricing</Link></li>
                <li><Link href="/case-studies" className="text-gray-400 hover:text-white text-sm">Case Studies</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-gray-500 text-sm uppercase tracking-wider mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-400 hover:text-white text-sm">About Us</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white text-sm">Contact</Link></li>
                <li><Link href="/blog" className="text-gray-400 hover:text-white text-sm">Blog</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-gray-500 text-sm uppercase tracking-wider mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-gray-400 hover:text-white text-sm">Privacy</Link></li>
                <li><Link href="/terms" className="text-gray-400 hover:text-white text-sm">Terms</Link></li>
                <li><Link href="/security" className="text-gray-400 hover:text-white text-sm">Security</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-500 text-sm">
              © 2024 AI Automation LA. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}