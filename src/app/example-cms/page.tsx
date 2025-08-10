'use client';

import { useContent } from '@/hooks/useContent';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Loader2 } from 'lucide-react';

export default function ExampleCMSPage() {
  // This hook fetches content from Sanity CMS
  const { content, loading, error } = useContent('home');

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-[#10B981]" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-2xl text-red-500">Content Loading Error</h1>
          <p className="text-gray-600 mt-2">Using static content as fallback</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section - Content from CMS */}
      <section className="pt-32 pb-20 bg-[#0E0E13]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {content?.hero?.badge && (
            <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-6 py-3 text-white mb-8">
              {content.hero.badge}
            </div>
          )}
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {content?.hero?.headline || 'Welcome to AI Automation LA'}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            {content?.hero?.description || 'Transform your business with AI'}
          </p>

          {content?.hero?.features && (
            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mt-12">
              {content.hero.features.map((feature: string, index: number) => (
                <div key={index} className="flex items-center text-white/80">
                  <span className="text-[#10B981] mr-2">✓</span>
                  {feature}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Stats Section - Content from CMS */}
      {content?.sections?.find((s: any) => s._type === 'statsSection') && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              {content.sections.find((s: any) => s._type === 'statsSection').title}
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {content.sections.find((s: any) => s._type === 'statsSection').stats.map((stat: any, index: number) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-[#10B981] mb-2">{stat.number}</div>
                  <div className="text-gray-900 font-medium">{stat.label}</div>
                  <div className="text-gray-600 text-sm mt-1">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}