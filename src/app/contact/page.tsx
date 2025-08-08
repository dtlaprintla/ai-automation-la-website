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
  ArrowRight
} from 'lucide-react';

export const metadata: Metadata = {
  title: `Contact Us | Get Your Free AI Automation Plan | ${BRAND.name}`,
  description: "Get a free AI automation consultation for your Los Angeles business. We'll analyze your current processes and create a custom automation roadmap within 24 hours.",
  keywords: [
    "AI automation consultation Los Angeles",
    "free AI business analysis LA",  
    "automation consultation Vernon CA",
    "AI implementation planning Los Angeles",
    "business automation assessment LA",
    "done for you automation consultation"
  ].join(", "),
  alternates: {
    canonical: `https://${BRAND.domain}/contact`,
  },
};

// JSON-LD for Contact Page
const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `https://${BRAND.domain}/contact#page`,
  "name": "Contact AI Automation LA",
  "description": "Get a free AI automation consultation for your Los Angeles business",
  "mainEntity": {
    "@type": "LocalBusiness",
    "name": BRAND.name,
    "telephone": BRAND.phone,
    "email": BRAND.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": BRAND.address.street,
      "addressLocality": BRAND.address.city,
      "addressRegion": BRAND.address.state,
      "postalCode": BRAND.address.zip
    }
  }
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-6 py-3 mb-8">
              <Zap className="w-5 h-5 mr-2" />
              Free AI Automation Consultation
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get Your Custom
              <span className="block gradient-text">AI Automation Plan</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto">
              Tell us about your business and we'll create a <strong>free custom automation roadmap</strong> 
              showing exactly how AI can grow your LA business within <strong>24 hours</strong>.
            </p>
            
            {/* Value Props */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6">
                <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <div className="text-lg font-semibold mb-2">Free 24-Hour Response</div>
                <p className="text-white/80">Custom automation plan delivered within 24 hours</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6">
                <Star className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <div className="text-lg font-semibold mb-2">LA Business Focus</div>
                <p className="text-white/80">Specialists in LA market with on-site visits available</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6">
                <Zap className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <div className="text-lg font-semibold mb-2">Done-For-You Service</div>
                <p className="text-white/80">We handle everything - no technical knowledge required</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Start Your Automation Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete the form below and we'll analyze your business to identify the highest-impact 
              automation opportunities for immediate ROI.
            </p>
          </div>
          
          <ContactForm />
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get In Touch Directly
            </h2>
            <p className="text-xl text-gray-600">
              Prefer to speak with us directly? We're here to help.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
              <a 
                href={`tel:${BRAND.phone}`}
                className="text-brand-primary hover:text-brand-secondary font-medium text-lg"
              >
                {BRAND.phone}
              </a>
              <p className="text-gray-600 text-sm mt-1">Mon-Fri 9am-6pm PST</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
              <a 
                href={`mailto:${BRAND.email}`}
                className="text-brand-primary hover:text-brand-secondary font-medium"
              >
                {BRAND.email}
              </a>
              <p className="text-gray-600 text-sm mt-1">24-hour response</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-700 font-medium">Vernon, CA</p>
              <p className="text-gray-600 text-sm mt-1">Serving all LA County</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Response Time</h3>
              <p className="text-green-600 font-semibold">Within 24 Hours</p>
              <p className="text-gray-600 text-sm mt-1">Usually same day</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Proudly Serving Los Angeles Businesses
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {BRAND.serviceAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-gray-700 font-medium">{area}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              On-Site Visits Available
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We offer on-site consultations throughout Los Angeles County. 
              Our team understands the unique challenges facing LA businesses and can 
              provide personalized automation solutions at your location.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-8">
            {[
              {
                question: "How quickly will you respond to my inquiry?",
                answer: "We respond to all inquiries within 24 hours, usually the same day. For urgent requests, call us directly at " + BRAND.phone + "."
              },
              {
                question: "Is the initial consultation really free?",
                answer: "Yes! We provide a completely free analysis of your business processes and create a custom automation roadmap at no cost. No hidden fees or obligations."
              },
              {
                question: "Do you work with businesses outside of Los Angeles?",
                answer: "While we specialize in LA businesses and offer on-site visits throughout LA County, we can work with businesses anywhere remotely."
              },
              {
                question: "What if I'm not tech-savvy?",
                answer: "Perfect! Our 'done-for-you' service means we handle all the technical work. You don't need any technical knowledge - just tell us your business challenges."
              },
              {
                question: "How long does implementation typically take?",
                answer: "Most automation projects start showing results within 2-3 weeks. Complex integrations may take 4-8 weeks, but we always start with quick wins first."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Join 100+ LA businesses already using our automation solutions. 
            Get your free plan today and start saving time tomorrow.
          </p>
          
          <a 
            href="#contact-form"
            className="inline-flex items-center bg-white text-brand-primary font-bold text-lg px-12 py-4 rounded-full hover:bg-gray-100 transition-colors"
          >
            <ArrowRight className="w-6 h-6 mr-2" />
            Get My Free AI Plan
          </a>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}