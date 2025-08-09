import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Button from '@/components/ui/Button';
import { BRAND } from '@/config/branding';
import { 
  Phone, 
  Calendar, 
  Users, 
  Clock, 
  CheckCircle,
  Star,
  ArrowRight,
  Shield,
  Zap,
  Wrench,
  MessageSquare,
  DollarSign,
  TrendingUp,
  MapPin,
  AlertTriangle,
  Truck
} from 'lucide-react';

export const metadata: Metadata = {
  title: `Home Services Automation Los Angeles | AI Dispatch & Scheduling | ${BRAND.name}`,
  description: "AI automation for LA home services - HVAC, plumbing, electrical. Automated dispatch, scheduling, and customer service 24/7. Emergency routing and bilingual support.",
  keywords: [
    "home services automation Los Angeles",
    "HVAC automation AI Los Angeles",
    "plumbing dispatch automation LA",
    "electrical contractor AI assistant",
    "home services AI phone agent",
    "automated service scheduling LA",
    "emergency dispatch automation",
    "home services chatbot Los Angeles", 
    "contractor automation Vernon CA",
    "field service automation LA"
  ].join(", "),
  alternates: {
    canonical: `https://${BRAND.domain}/industries/home-services`,
  },
};

// JSON-LD for Home Services Industry Page
const homeServicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `https://${BRAND.domain}/industries/home-services#service`,
  "name": "AI Automation for Home Services",
  "description": "Comprehensive AI dispatch, scheduling, and customer service automation for LA home service contractors",
  "provider": {
    "@type": "LocalBusiness",
    "name": BRAND.name,
    "telephone": BRAND.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": BRAND.address.street,
      "addressLocality": BRAND.address.city,
      "addressRegion": BRAND.address.state,
      "postalCode": BRAND.address.zip
    }
  },
  "areaServed": {
    "@type": "City",
    "name": "Los Angeles",
    "sameAs": "https://en.wikipedia.org/wiki/Los_Angeles"
  },
  "serviceType": "Home Services Automation",
  "audience": {
    "@type": "BusinessAudience",
    "businessType": "Home Services"
  }
};

export default function HomeServicesIndustryPage() {
  return (
    <main className="min-h-screen bg-n8n-bg-primary">
      <Header />
      
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeServicesJsonLd) }}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[#10B981]">
        <div className="absolute inset-0 animated-bg opacity-30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-6 py-3 text-white mb-8">
              <Wrench className="w-5 h-5 mr-2" />
              For LA Home Service Contractors
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Never Miss Emergency Calls
              <span className="block text-white mt-2">AI Dispatch 24/7</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              <strong className="text-white">Emergency calls come at 2am.</strong> Your AI assistant 
              answers <strong className="text-white">every call</strong>, qualifies emergencies, 
              dispatches techs, and handles scheduling while you sleep.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="xl" className="bg-white text-[#10B981] hover:bg-gray-100 transition-colors">
                <Wrench className="w-6 h-6 mr-2" />
                Get Free Home Services Demo
              </Button>
              <Button size="xl" variant="secondary">
                <Phone className="w-6 h-6 mr-2" />
                Call {BRAND.phone}
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-n8n-bg-secondary/10 backdrop-blur-md border border-white/20 rounded-lg p-6">
                <div className="text-3xl font-bold text-green-400 mb-2">+150%</div>
                <p className="text-white">Emergency Response Rate</p>
              </div>
              <div className="bg-n8n-bg-secondary/10 backdrop-blur-md border border-white/20 rounded-lg p-6">
                <div className="text-3xl font-bold text-teal-400 mb-2">2 min</div>
                <p className="text-white">Average Call Handling</p>
              </div>
              <div className="bg-n8n-bg-secondary/10 backdrop-blur-md border border-white/20 rounded-lg p-6">
                <div className="text-3xl font-bold text-yellow-400 mb-2">+$120k</div>
                <p className="text-white">Avg Annual Revenue Boost</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-n8n-text-primary mb-4">
              Home Service Business Challenges
            </h2>
            <p className="text-xl text-n8n-text-secondary max-w-3xl mx-auto">
              Every contractor in Los Angeles faces these operational nightmares...
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: AlertTriangle,
                title: "Missed Emergency Calls",
                description: "40% of emergency calls happen after hours. Missing one AC emergency in summer = $2,000+ lost."
              },
              {
                icon: Clock,
                title: "Dispatch Chaos",
                description: "Manual scheduling leads to double-bookings, travel inefficiency, and frustrated customers."
              },
              {
                icon: Phone,
                title: "Office Staff Overwhelm",
                description: "One person handling calls, scheduling, billing, and walk-ins. Quality suffers during busy periods."
              },
              {
                icon: Truck,
                title: "Inefficient Routing",
                description: "Techs driving across LA County inefficiently. Gas costs and time waste hurt profitability."
              }
            ].map((problem, index) => (
              <div key={index} className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
                <problem.icon className="w-12 h-12 text-red-400 mb-4" />
                <h3 className="text-xl font-semibold text-n8n-text-primary mb-3">{problem.title}</h3>
                <p className="text-n8n-text-secondary">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-n8n-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-n8n-text-primary mb-4">
              Your AI Home Services Dispatcher
            </h2>
            <p className="text-xl text-n8n-text-secondary max-w-3xl mx-auto">
              Answers every call, identifies emergencies, dispatches techs, and manages your entire operation
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              {[
                {
                  icon: AlertTriangle,
                  title: "Emergency Detection & Routing",
                  description: "Identifies true emergencies vs routine calls. Routes urgent calls to on-call tech immediately with location and details.",
                  highlight: "95% accurate emergency classification"
                },
                {
                  icon: Calendar,
                  title: "Smart Scheduling & Dispatch", 
                  description: "Optimizes technician routes across LA County. Considers traffic, job priority, and tech specialization.",
                  highlight: "Integrates with ServiceTitan, Jobber, FieldEdge"
                },
                {
                  icon: Phone,
                  title: "Complete Customer Service",
                  description: "Handles service calls, provides estimates, explains warranties, and follows up on completed jobs.",
                  highlight: "24/7 availability for all customer needs"
                },
                {
                  icon: MessageSquare,
                  title: "Bilingual Support",
                  description: "Serves LA's diverse population with fluent English and Spanish support for all home service needs.",
                  highlight: "Critical for LA's Hispanic market"
                }
              ].map((feature, index) => (
                <div key={index} className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-green-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-n8n-text-primary mb-2">{feature.title}</h3>
                    <p className="text-n8n-text-secondary mb-2">{feature.description}</p>
                    <p className="text-sm text-green-400 font-medium">{feature.highlight}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-n8n-bg-primary rounded-xl p-8">
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <span className="text-sm font-medium text-red-500">EMERGENCY CALL LIVE</span>
                </div>
                <div className="space-y-4 bg-n8n-bg-secondary rounded-lg p-4">
                  <div>
                    <p className="text-n8n-text-primary">
                      <strong className="text-green-400">"LA Comfort HVAC emergency line, this is Maria. What's your emergency?"</strong>
                    </p>
                  </div>
                  <div>
                    <p className="text-n8n-text-secondary italic">
                      "My AC just stopped working and it's 90 degrees inside!"
                    </p>
                  </div>
                  <div>
                    <p className="text-n8n-text-primary">
                      <strong className="text-green-400">"I understand how urgent this is. Let me get your address and dispatch our emergency tech. What's your location?"</strong>
                    </p>
                  </div>
                  <div className="text-xs text-n8n-text-secondary flex items-center">
                    <Truck className="w-3 h-3 mr-1" />
                    Dispatching nearest available tech...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-16 bg-n8n-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-n8n-text-primary mb-4">
              Perfect for All Home Service Types
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🔧",
                title: "HVAC Contractors",
                features: ["Emergency AC/heating calls", "Maintenance scheduling", "Seasonal demand handling", "Energy audit bookings"]
              },
              {
                icon: "🔧", 
                title: "Plumbing Services",
                features: ["Emergency leak response", "Drain cleaning requests", "Installation appointments", "Inspection scheduling"]
              },
              {
                icon: "⚡",
                title: "Electrical Contractors",
                features: ["Emergency electrical issues", "Panel upgrade consultations", "Installation estimates", "Safety inspections"]
              },
              {
                icon: "🏠",
                title: "General Contractors",
                features: ["Project consultations", "Estimate scheduling", "Progress updates", "Permit coordination"]
              },
              {
                icon: "🌿",
                title: "Landscaping",
                features: ["Seasonal cleanups", "Irrigation repairs", "Design consultations", "Maintenance scheduling"]
              },
              {
                icon: "🧹",
                title: "Cleaning Services", 
                features: ["Regular service scheduling", "Move-in/out cleanings", "Emergency cleanups", "Recurring appointments"]
              },
              {
                icon: "🚪",
                title: "Handyman Services",
                features: ["Repair appointments", "Installation services", "Home maintenance", "Emergency fixes"]
              },
              {
                icon: "🌞",
                title: "Solar Installers",
                features: ["Consultation scheduling", "Site assessments", "Permit tracking", "Installation coordination"]
              }
            ].map((service, index) => (
              <div key={index} className="bg-n8n-bg-secondary rounded-lg p-6 text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-n8n-text-primary mb-4">{service.title}</h3>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-n8n-text-secondary text-sm">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-[#10B981]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real LA Contractor Success Stories
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                company: "Valley HVAC Solutions",
                result: "+$180k Annual Revenue",
                details: "Never miss another emergency call. 24/7 AI dispatcher increased emergency response by 200%.",
                timeframe: "8 months",
                location: "San Fernando Valley"
              },
              {
                company: "LA Plumbing Pros",
                result: "+65% Job Bookings",
                details: "Automated scheduling optimized routes and reduced drive time. More jobs per day, higher profits.",
                timeframe: "6 months", 
                location: "West LA & Beverly Hills"
              },
              {
                company: "Bright Electric Co.",
                result: "40 Hours/Week Saved",
                details: "AI handles all customer calls and scheduling. Owner focuses on high-value electrical projects.",
                timeframe: "4 months",
                location: "Downtown & East LA"
              }
            ].map((story, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{story.company}</h3>
                  <p className="text-sm text-gray-500 mb-4">{story.location}</p>
                  <div className="text-3xl font-black text-green-600 mb-4">{story.result}</div>
                  <p className="text-gray-600 mb-4">{story.details}</p>
                  <p className="text-sm text-gray-500">Results achieved in {story.timeframe}</p>
                  <div className="flex justify-center mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-[#0E0E13] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Home Services Automation Pricing
          </h2>
          
          <div className="bg-[#10B981] rounded-2xl p-8 mb-8">
            <div className="text-5xl font-black mb-4">$2,997</div>
            <p className="text-xl mb-2">Complete Setup + First Month</p>
            <p className="text-lg opacity-90 mb-6">Then $497/month (Cancel anytime)</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-bold text-lg mb-3">What's Included:</h4>
                <div className="space-y-2">
                  {[
                    "Custom AI trained on your service processes",
                    "Emergency detection and dispatch system", 
                    "Integration with ServiceTitan, Jobber, FieldEdge",
                    "24/7 phone coverage and scheduling",
                    "Route optimization and tech dispatch",
                    "Bilingual English/Spanish support"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-3">ROI Guarantee:</h4>
                <div className="bg-green-600 rounded-lg p-4">
                  <p className="text-sm">
                    If your emergency response rate doesn't improve by <strong>100%</strong> in 
                    the first 60 days, we'll refund your entire setup fee.
                  </p>
                </div>
                <div className="mt-4 text-center">
                  <div className="text-2xl font-bold text-green-400">Average: 500% ROI</div>
                  <p className="text-sm opacity-90">in first year</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <Button 
              size="xl"
              className="bg-[#10B981] hover:bg-[#059669] transition-colors text-xl px-12 py-4"
            >
              <Zap className="w-6 h-6 mr-2" />
              Get Your Home Services AI Assistant
            </Button>
            <p className="text-gray-400">Setup completed in 48 hours • LA contractors only</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-n8n-bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-n8n-text-primary">
            Common Questions from LA Home Service Contractors
          </h2>
          
          <div className="space-y-8">
            {[
              {
                question: "Does it integrate with my field service management software?",
                answer: "Yes! We integrate with ServiceTitan, Jobber, FieldEdge, Housecall Pro, and most major field service platforms. Jobs, schedules, and customer data sync automatically."
              },
              {
                question: "Can it really identify true emergencies?",
                answer: "Our AI is trained on thousands of service calls and can accurately identify emergencies vs routine requests. It asks the right qualifying questions and routes accordingly."
              },
              {
                question: "What about after-hours emergency dispatch?",
                answer: "The AI can contact your on-call technician via text, call, or app notification with full customer details and emergency classification. Fully automated dispatch."
              },
              {
                question: "Will it work for my specific type of contracting business?",
                answer: "Yes! We customize the AI for HVAC, plumbing, electrical, general contracting, landscaping, cleaning, handyman services, and more."
              },
              {
                question: "Do you serve all LA County service areas?",
                answer: "Absolutely! We optimize routing for all LA County areas and understand local traffic patterns, permit requirements, and service territories."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-n8n-bg-primary rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-n8n-text-primary mb-3">{faq.question}</h3>
                <p className="text-n8n-text-secondary">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#10B981] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Never Miss Another Emergency?
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Join 35+ LA contractors already using AI dispatch systems. 
            Setup takes 48 hours, emergency response guaranteed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="xl"
              className="bg-[#10B981] hover:bg-[#059669] transition-colors text-xl px-12 py-4"
            >
              <Wrench className="w-6 h-6 mr-2" />
              Get Home Services Demo
            </Button>
            <Button 
              size="xl"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-green-900 text-xl px-12 py-4"
            >
              <Phone className="w-6 h-6 mr-2" />
              Call {BRAND.phone}
            </Button>
          </div>
          
          <p className="mt-8 text-gray-300">
            Serving: All LA County • Valley • Beach Cities • Downtown • Vernon Industrial Area
          </p>
        </div>
      </section>
    </main>
  );
}