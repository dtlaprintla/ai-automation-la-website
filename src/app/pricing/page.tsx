import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { BRAND } from '@/config/branding';
import { CheckCircle, ArrowRight, Phone, Star, Zap } from 'lucide-react';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `Pricing | AI Automation Packages for LA Businesses | ${BRAND.name}`,
  description: "Transparent pricing for done-for-you AI automation. Setup packages from $2,997 + monthly management from $497. ROI guarantee included.",
  keywords: [
    "AI automation pricing Los Angeles",
    "business automation cost LA", 
    "AI implementation pricing",
    "automation consultant rates LA",
    "done for you automation pricing",
    "AI phone agent pricing",
    "workflow automation cost"
  ].join(", "),
  alternates: {
    canonical: `https://${BRAND.domain}/pricing`,
  },
};

const packages = [
  {
    name: "Starter",
    price: "2,997",
    monthly: "497",
    description: "Perfect for small businesses ready to automate their first processes",
    features: [
      "1-2 AI automations",
      "Phone agent OR chatbot",
      "Basic CRM integration", 
      "2-week implementation",
      "Staff training included",
      "30 days support"
    ],
    ideal: "1-10 employees",
    setup: "2-3 weeks",
    popular: false
  },
  {
    name: "Growth", 
    price: "6,997",
    monthly: "997",
    description: "Comprehensive automation suite for growing businesses",
    features: [
      "3-5 AI automations",
      "Phone agent AND chatbot",
      "Full CRM integration",
      "Workflow automation",
      "Multi-app integrations",
      "4-week implementation", 
      "90 days support",
      "Monthly optimization"
    ],
    ideal: "10-50 employees", 
    setup: "4-6 weeks",
    popular: true
  },
  {
    name: "Enterprise",
    price: "15,997",
    monthly: "1,997", 
    description: "Complete business transformation with custom AI solutions",
    features: [
      "Unlimited automations",
      "Custom AI training",
      "Advanced integrations",
      "Multi-location support",
      "Priority support",
      "8-week implementation",
      "6 months support", 
      "Weekly optimization",
      "On-site training"
    ],
    ideal: "50+ employees",
    setup: "6-8 weeks", 
    popular: false
  }
];

const addOns = [
  {
    name: "Additional Phone Lines",
    price: "297/month per line",
    description: "Scale your AI phone capacity"
  },
  {
    name: "Advanced Analytics Dashboard", 
    price: "497/month",
    description: "Detailed performance insights and ROI tracking"
  },
  {
    name: "Bilingual Support (Spanish)",
    price: "397/month", 
    description: "Native Spanish-speaking AI agents"
  },
  {
    name: "On-Site Training",
    price: "1,997/day",
    description: "In-person team training at your location"
  }
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-white">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-6 py-3 mb-8">
              <Zap className="w-5 h-5 mr-2" />
              Transparent Pricing, Guaranteed ROI
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Simple, Clear
              <span className="block gradient-text-white">Automation Pricing</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto">
              One setup fee, one monthly fee, unlimited support. 
              <strong>No hidden costs</strong>, no hourly billing, no surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 -mt-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={pkg.name} 
                className={`bg-white rounded-2xl shadow-xl p-8 relative ${
                  pkg.popular ? 'border-4 border-brand-primary transform scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-brand-primary to-brand-accent text-white px-6 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-6">{pkg.description}</p>
                  
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-gray-900">
                      ${pkg.price}
                      <span className="text-lg text-gray-600 font-normal"> setup</span>
                    </div>
                    <div className="text-2xl font-bold text-brand-primary mt-2">
                      ${pkg.monthly}
                      <span className="text-lg text-gray-600 font-normal">/month</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between text-sm text-gray-600 bg-gray-50 rounded-lg p-3">
                    <span>Best for: {pkg.ideal}</span>
                    <span>Setup: {pkg.setup}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link href="/contact">
                  <Button 
                    fullWidth 
                    size="lg"
                    variant={pkg.popular ? "primary" : "outline"}
                    className={pkg.popular ? "bg-gradient-to-r from-brand-primary to-brand-accent" : ""}
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Guarantee */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-12 text-center">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-yellow-400 fill-current" />
              ))}
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              100% ROI Guarantee
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              If your automation doesn't deliver measurable ROI within 90 days, 
              we'll work for free until it does or refund your setup fee. That's our promise.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-brand-primary mb-2">650%</div>
                <div className="text-gray-600">Average ROI in 6 months</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-primary mb-2">2-3</div>
                <div className="text-gray-600">Weeks to see results</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-primary mb-2">100%</div>
                <div className="text-gray-600">Client satisfaction rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Optional Add-Ons
            </h2>
            <p className="text-xl text-gray-600">
              Scale your automation with these additional services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{addon.name}</h3>
                  <div className="text-lg font-bold text-brand-primary">{addon.price}</div>
                </div>
                <p className="text-gray-600">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pricing Questions
            </h2>
          </div>
          
          <div className="space-y-8">
            {[
              {
                question: "Are there any hidden fees?",
                answer: "No. The setup fee and monthly fee are all-inclusive. No hourly billing, no surprise charges, no additional costs unless you choose optional add-ons."
              },
              {
                question: "What happens if I want to cancel?",
                answer: "No long-term contracts. Cancel anytime with 30-day notice. You keep everything we built for you."
              },
              {
                question: "Do you offer payment plans?",
                answer: "Yes. We offer 3-month payment plans for setup fees over $5,000. Monthly fees are always billed monthly."
              },
              {
                question: "What's included in ongoing support?",
                answer: "Monthly fees include monitoring, updates, bug fixes, and performance optimization. Major new features may require additional setup fees."
              },
              {
                question: "How do you guarantee ROI?",
                answer: "We track specific KPIs agreed upon before implementation. If you don't hit targets in 90 days, we work for free until you do or refund setup costs."
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

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Free consultation to determine the perfect package for your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="xl" variant="secondary" className="bg-white text-brand-primary font-bold hover:bg-gray-100">
                <ArrowRight className="w-6 h-6 mr-2" />
                Get Free Consultation
              </Button>
            </Link>
            <Button size="xl" variant="ghost" className="text-white border-white hover:bg-white/10">
              <Phone className="w-6 h-6 mr-2" />
              Call {BRAND.phone}
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}