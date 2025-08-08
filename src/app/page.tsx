import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import CaseStudies from '@/components/sections/CaseStudies';
import { BRAND } from '@/config/branding';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Star, Phone, Zap, Users, Clock } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      
      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Done-For-You AI Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We handle everything so you don't have to. No technical knowledge required.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <Phone className="w-8 h-8" />,
                title: "AI Voice Agents",
                description: "Never miss a call again. AI that sounds human and books appointments 24/7.",
                result: "3x more leads"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Workflow Automation", 
                description: "Connect all your apps. Eliminate manual data entry and repetitive tasks.",
                result: "20+ hours saved/week"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Customer Support",
                description: "AI that answers customer questions instantly, 24/7 with perfect accuracy.",
                result: "80% fewer support calls"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-brand-primary mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="bg-green-50 rounded-lg p-3">
                  <p className="text-green-800 font-semibold text-sm">
                    <span className="text-green-600">Result:</span> {service.result}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/services">
              <Button size="lg">
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by 100+ LA Businesses
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-3xl font-bold text-brand-primary mb-2">100+</div>
              <div className="text-gray-600">Businesses Automated</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-3xl font-bold text-brand-primary mb-2">650%</div>
              <div className="text-gray-600">Average ROI</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-3xl font-bold text-brand-primary mb-2">2-3</div>
              <div className="text-gray-600">Weeks to Deploy</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 flex flex-col items-center">
              <div className="flex text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-current" />
                ))}
              </div>
              <div className="text-gray-600">Client Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <CaseStudies />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get your free AI automation plan and see exactly how we can transform your operations in 2-3 weeks.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/contact">
              <Button size="xl" variant="secondary" className="bg-white text-brand-primary font-bold hover:bg-gray-100">
                <ArrowRight className="w-6 h-6 mr-2" />
                Get Free AI Plan
              </Button>
            </Link>
            <Button size="xl" variant="ghost" className="text-white border-white hover:bg-white/10">
              <Phone className="w-6 h-6 mr-2" />
              Call {BRAND.phone}
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-8 text-white/80">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              Free consultation
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              24-hour response
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              No obligation
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}