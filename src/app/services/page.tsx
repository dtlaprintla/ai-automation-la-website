import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { BRAND } from '@/config/branding';
import Link from 'next/link';
import { ArrowRight, Bot, Phone, Workflow, MessageCircle, Building } from 'lucide-react';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: `Our Services | ${BRAND.name}`,
  description: "Complete Done-For-You AI automation services. We handle everything - you get the results. Customer support, voice agents, chatbots, workflows & more.",
  keywords: "AI automation services Los Angeles, done for you automation, customer support automation, voice agents, chatbots, workflow automation"
};

const services = [
  {
    title: "Customer Support Automation",
    slug: "customer-support",
    description: "We build AI that answers your customers 24/7. No training needed - we handle everything.",
    icon: <MessageCircle className="w-8 h-8" />,
    features: [
      "Answers customer questions instantly",
      "Works 24/7 - even while you sleep", 
      "Handles multiple customers at once",
      "Gets smarter over time"
    ],
    result: "80% fewer support calls to you"
  },
  {
    title: "AI Voice Agents", 
    slug: "voice-agents",
    description: "AI that answers your phone and sounds completely human. Perfect for appointments and lead qualification.",
    icon: <Phone className="w-8 h-8" />,
    features: [
      "Sounds exactly like a real person",
      "Books appointments automatically",
      "Qualifies leads while you work", 
      "Never misses a call"
    ],
    result: "3x more leads without hiring staff"
  },
  {
    title: "AI Workflows & Integrations",
    slug: "workflows", 
    description: "We connect all your apps together with AI. Data moves automatically - no manual work required.",
    icon: <Workflow className="w-8 h-8" />,
    features: [
      "Connects all your favorite apps",
      "Moves data automatically",
      "Creates reports for you",
      "Eliminates repetitive tasks"
    ],
    result: "Save 20+ hours per week on admin work"
  },
  {
    title: "AI Chatbots",
    slug: "chatbots",
    description: "Smart chat widgets for your website that convert visitors into customers automatically.",
    icon: <Bot className="w-8 h-8" />,
    features: [
      "Captures leads 24/7 from your website",
      "Answers questions instantly", 
      "Books consultations automatically",
      "Integrates with your CRM"
    ],
    result: "Convert 40% more website visitors"
  },
  {
    title: "Real Estate Cold Calling AI",
    slug: "real-estate",
    description: "AI that makes cold calls for real estate agents. Finds motivated sellers and books appointments.",
    icon: <Building className="w-8 h-8" />,
    features: [
      "Calls hundreds of leads per day",
      "Identifies motivated sellers",
      "Books qualified appointments",
      "Updates your CRM automatically"
    ],
    result: "10x more leads than manual calling"
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-n8n-bg-primary text-n8n-text-primary">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#0E0918] via-[#1A1B26] to-[#0E0918]">
        <div className="absolute inset-0 animated-bg opacity-30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            We Handle Everything
            <span className="block text-brand-primary">You Get Results</span>
          </h1>
          <p className="text-xl md:text-2xl text-n8n-text-secondary mb-8 max-w-4xl mx-auto">
            Complete Done-For-You AI automation. No technical knowledge required. 
            We build it, we manage it, you profit.
          </p>
          <div className="inline-flex items-center bg-n8n-bg-secondary backdrop-blur-md border border-n8n-border rounded-lg px-6 py-3 text-white">
            <span className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></span>
            100% Managed Service - Zero Learning Required
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-n8n-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Done-For-You Services
            </h2>
            <p className="text-xl text-n8n-text-secondary max-w-3xl mx-auto">
              Choose what you need. We handle the rest. All services include setup, training, and ongoing management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={service.slug} className="bg-n8n-bg-secondary rounded-xl shadow-card p-8 hover:shadow-card-hover transition-all duration-300 border border-n8n-border">
                <div className="text-brand-primary mb-4">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                
                <p className="text-n8n-text-secondary mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-brand-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-n8n-text-secondary text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 mb-6">
                  <p className="text-sm font-semibold text-green-400">
                    <span className="text-green-300">Result:</span> {service.result}
                  </p>
                </div>
                
                <Link href={`/services/${service.slug}`}>
                  <Button variant="outline" size="sm" className="w-full border-[#EE4F27] text-brand-primary hover:bg-brand-primary hover:text-white">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-n8n-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How Our Done-For-You Process Works
            </h2>
            <p className="text-xl text-n8n-text-secondary">
              Simple 3-step process. No technical knowledge needed from your side.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#EE4F27] to-[#6B21EF] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                We Listen & Plan
              </h3>
              <p className="text-n8n-text-secondary">
                Tell us what tasks take up your time. We create a custom automation plan that fits your business perfectly.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#EE4F27] to-[#6B21EF] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                We Build & Test
              </h3>
              <p className="text-n8n-text-secondary">
                Our team builds your AI systems and tests everything thoroughly. You don't lift a finger - we handle all the technical work.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#EE4F27] to-[#6B21EF] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                You Get Results
              </h3>
              <p className="text-n8n-text-secondary">
                Your AI starts working immediately. We monitor, maintain, and improve everything. You just enjoy the time savings and increased profits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#EE4F27] via-[#6B21EF] to-[#EE4F27]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Free consultation to show you exactly how AI can save you time and make you money.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-brand-primary hover:bg-gray-100 font-bold">
                Get Free Consultation
              </Button>
            </Link>
            <a href={`tel:${BRAND.phone}`}>
              <Button size="lg" className="bg-white/10 backdrop-blur text-white border border-white/20 hover:bg-white/20">
                Call {BRAND.phone}
              </Button>
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}