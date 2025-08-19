'use client';

import { useContent } from '@/hooks/useContent';
import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/forms/ContactForm';
import { BRAND } from '@/config/branding';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  CheckCircle,
  Zap,
  Star,
  ArrowRight,
  Loader2
} from 'lucide-react';

export default function ContactPage() {
  const { data: content, loading, error } = useContent('pages', 'contact');

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

      {/* Contact Form Section */}
      <section className="py-20 bg-n8n-bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-n8n-text-primary mb-6">
              {content.form.title}
            </h2>
            <p className="text-xl text-n8n-text-secondary">
              {content.form.subtitle}
            </p>
          </div>
          
          <div className="bg-n8n-bg-primary rounded-lg p-8 border border-n8n-border">
            <form className="space-y-6">
              {content.form.fields.map((field: any, index: number) => (
                <div key={field.name}>
                  <label className="block text-sm font-medium text-n8n-text-primary mb-2">
                    {field.label}
                    {field.required && <span className="text-brand-primary ml-1">*</span>}
                  </label>
                  
                  {field.type === 'textarea' ? (
                    <textarea
                      name={field.name}
                      required={field.required}
                      placeholder={field.placeholder}
                      rows={4}
                      className="w-full px-4 py-3 bg-n8n-bg-secondary border border-n8n-border rounded-lg text-n8n-text-primary placeholder-n8n-text-secondary focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                    />
                  ) : field.type === 'select' ? (
                    <select
                      name={field.name}
                      required={field.required}
                      className="w-full px-4 py-3 bg-n8n-bg-secondary border border-n8n-border rounded-lg text-n8n-text-primary focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                    >
                      <option value="">Select {field.label}</option>
                      {field.options?.map((option: string, idx: number) => (
                        <option key={idx} value={option}>{option}</option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={field.type}
                      name={field.name}
                      required={field.required}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 bg-n8n-bg-secondary border border-n8n-border rounded-lg text-n8n-text-primary placeholder-n8n-text-secondary focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                    />
                  )}
                </div>
              ))}
              
              <button
                type="submit"
                className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white font-medium py-4 px-6 rounded-lg transition-colors duration-200"
              >
                {content.form.submitText}
              </button>
              
              <p className="text-sm text-n8n-text-secondary text-center">
                {content.form.privacyNote}
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-n8n-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-n8n-text-primary mb-8">
                Get In Touch
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-n8n-text-primary mb-1">Phone</h3>
                    <a href={`tel:${content.contactInfo.phone.number}`} className="text-brand-primary hover:text-brand-primary/80 font-medium">
                      {content.contactInfo.phone.number}
                    </a>
                    <p className="text-n8n-text-secondary text-sm">{content.contactInfo.phone.hours}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-n8n-text-primary mb-1">Email</h3>
                    <a href={`mailto:${content.contactInfo.email}`} className="text-brand-primary hover:text-brand-primary/80 font-medium">
                      {content.contactInfo.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-n8n-text-primary mb-1">Address</h3>
                    <p className="text-n8n-text-secondary">
                      {content.contactInfo.address.street}<br/>
                      {content.contactInfo.address.city}, {content.contactInfo.address.state} {content.contactInfo.address.zip}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Service Areas */}
            <div>
              <h3 className="text-2xl font-medium text-n8n-text-primary mb-6">Service Areas</h3>
              <div className="grid grid-cols-2 gap-3">
                {content.contactInfo.serviceAreas.map((area: string, index: number) => (
                  <div key={index} className="bg-n8n-bg-secondary rounded-lg p-3 border border-n8n-border">
                    <p className="text-n8n-text-primary text-sm font-medium">{area}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Process */}
      <section className="py-20 bg-n8n-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-n8n-text-primary mb-4">
              {content.consultationProcess.title}
            </h2>
            <p className="text-xl text-n8n-text-secondary">
              {content.consultationProcess.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {content.consultationProcess.steps.map((step: any, index: number) => (
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

      {/* Testimonials */}
      <section className="py-20 bg-n8n-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-n8n-text-primary mb-4">
              {content.testimonials.title}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {content.testimonials.items.map((testimonial: any, index: number) => (
              <div key={index} className="bg-n8n-bg-secondary rounded-lg p-8 border border-n8n-border">
                <p className="text-n8n-text-secondary mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-n8n-text-primary font-medium">{testimonial.name}</p>
                    <p className="text-n8n-text-secondary text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-n8n-bg-secondary border-t border-n8n-border">
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
          
          <a 
            href="#contact-form"
            className="bg-brand-primary hover:bg-brand-primary/90 text-white px-10 py-4 rounded-lg font-medium transition-colors duration-200 text-lg inline-flex items-center gap-2"
          >
            <ArrowRight className="w-5 h-5" />
            Get My Free Consultation
          </a>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}