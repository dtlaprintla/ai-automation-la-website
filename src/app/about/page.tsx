'use client';

import { useContent } from '@/hooks/useContent';
import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { 
  Users, 
  MapPin, 
  Phone, 
  Mail,
  CheckCircle,
  Star,
  Award,
  Clock,
  Target,
  Zap,
  ArrowRight,
  Loader2
} from 'lucide-react';

export default function AboutPage() {
  const { data: content, loading, error } = useContent('pages', 'about');

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

      {/* Story Section */}
      <section className="py-20 bg-n8n-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-n8n-text-primary mb-8">
                {content.story.title}
              </h2>
              <p className="text-lg text-n8n-text-secondary mb-8 leading-relaxed">
                {content.story.content}
              </p>
              <div className="space-y-6">
                <div className="bg-n8n-bg-primary p-6 rounded-lg border border-n8n-border">
                  <h3 className="text-xl font-medium text-n8n-text-primary mb-3">Our Mission</h3>
                  <p className="text-n8n-text-secondary">{content.story.mission}</p>
                </div>
                <div className="bg-n8n-bg-primary p-6 rounded-lg border border-n8n-border">
                  <h3 className="text-xl font-medium text-n8n-text-primary mb-3">Our Vision</h3>
                  <p className="text-n8n-text-secondary">{content.story.vision}</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                alt="Team collaboration"
                className="w-full h-[600px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-n8n-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-light text-n8n-text-primary text-center mb-16">
            {content.team.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {content.team.members.map((member: any, index: number) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <img 
                    src={member.avatar} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover"
                  />
                </div>
                <h3 className="text-2xl font-medium text-n8n-text-primary mb-2">{member.name}</h3>
                <p className="text-brand-primary font-medium mb-4">{member.role}</p>
                <p className="text-n8n-text-secondary">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-n8n-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-light text-n8n-text-primary text-center mb-16">
            {content.values.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.values.items.map((value: any, index: number) => (
              <div key={index} className="bg-n8n-bg-primary p-8 rounded-lg border border-n8n-border text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-medium text-n8n-text-primary mb-4">{value.title}</h3>
                <p className="text-n8n-text-secondary">{value.description}</p>
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
          <Link href={content.cta.button.link}>
            <button className="bg-brand-primary hover:bg-brand-primary/90 text-white px-10 py-4 rounded-lg font-medium transition-colors duration-200 text-lg">
              {content.cta.button.text}
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}