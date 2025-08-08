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
  Home,
  MessageSquare,
  DollarSign,
  TrendingUp,
  MapPin,
  FileText
} from 'lucide-react';

export const metadata: Metadata = {
  title: `Real Estate Automation Los Angeles | AI Lead Response & CRM | ${BRAND.name}`,
  description: "AI automation for LA real estate agents and brokerages. Instant lead response, automated follow-ups, and CRM management. Capture every lead 24/7. Free consultation.",
  keywords: [
    "real estate automation Los Angeles",
    "AI lead response real estate LA",
    "automated real estate follow up",
    "real estate CRM automation",
    "AI real estate assistant LA",
    "real estate chatbot Los Angeles", 
    "property management automation LA",
    "real estate AI phone agent",
    "LA real estate lead generation",
    "automated property inquiries"
  ].join(", "),
  alternates: {
    canonical: `https://${BRAND.domain}/industries/real-estate`,
  },
};

// JSON-LD for Real Estate Industry Page
const realEstateJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `https://${BRAND.domain}/industries/real-estate#service`,
  "name": "AI Automation for Real Estate",
  "description": "Comprehensive AI lead response, follow-up automation, and CRM management solutions for LA real estate professionals",
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
  "serviceType": "Real Estate Automation",
  "audience": {
    "@type": "BusinessAudience",
    "businessType": "Real Estate"
  }
};

export default function RealEstateIndustryPage() {
  return (
    <main className="min-h-screen bg-n8n-bg-primary">
      <Header />
      
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(realEstateJsonLd) }}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-900 via-indigo-800 to-blue-900">
        <div className="absolute inset-0 animated-bg opacity-30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-6 py-3 text-white mb-8">
              <Home className="w-5 h-5 mr-2" />
              For LA Real Estate Professionals
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Capture Every Lead
              <span className="block gradient-text mt-2">Respond in 30 Seconds</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              <strong className="text-white">78% of buyers</strong> go with the first agent who responds. 
              Your AI assistant captures leads <strong className="text-white">24/7</strong>, qualifies prospects, 
              and books showings while you focus on <strong className="text-white">closing deals.</strong>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="xl" className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700">
                <Home className="w-6 h-6 mr-2" />
                Get Free Real Estate Demo
              </Button>
              <Button size="xl" variant="secondary">
                <Phone className="w-6 h-6 mr-2" />
                Call {BRAND.phone}
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-n8n-bg-secondary/10 backdrop-blur-md border border-white/20 rounded-lg p-6">
                <div className="text-3xl font-bold text-blue-400 mb-2">30 sec</div>
                <p className="text-white">Average Response Time</p>
              </div>
              <div className="bg-n8n-bg-secondary/10 backdrop-blur-md border border-white/20 rounded-lg p-6">
                <div className="text-3xl font-bold text-indigo-400 mb-2">+60%</div>
                <p className="text-white">Lead Conversion Rate</p>
              </div>
              <div className="bg-n8n-bg-secondary/10 backdrop-blur-md border border-white/20 rounded-lg p-6">
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <p className="text-white">Lead Capture Active</p>
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
              LA Real Estate Challenges
            </h2>
            <p className="text-xl text-n8n-text-secondary max-w-3xl mx-auto">
              Every agent and brokerage in Los Angeles faces these daily challenges...
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: Clock,
                title: "Slow Lead Response",
                description: "Average agent response time is 6 hours. By then, leads have called 5 other agents and chosen one."
              },
              {
                icon: Phone,
                title: "Missed Opportunities",
                description: "50% of leads call outside business hours. Weekend and evening inquiries go to competitors."
              },
              {
                icon: Users,
                title: "Manual Follow-Up",
                description: "Manually tracking leads, sending emails, and scheduling showings. Easy to let prospects slip through."
              },
              {
                icon: MessageSquare,
                title: "Lead Qualification",
                description: "Spending hours with unqualified leads while serious buyers go to responsive agents."
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
              Your AI Real Estate Assistant
            </h2>
            <p className="text-xl text-n8n-text-secondary max-w-3xl mx-auto">
              Responds instantly, qualifies leads, books showings, and nurtures prospects 24/7
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              {[
                {
                  icon: MessageSquare,
                  title: "Instant Lead Response",
                  description: "Responds to leads in under 30 seconds via text, email, and phone. Captures contact info and property interests.",
                  highlight: "78% faster than average agent response time"
                },
                {
                  icon: FileText,
                  title: "Smart Lead Qualification", 
                  description: "Asks the right questions to qualify buyers and sellers. Pre-approvals, timeline, budget, and preferences.",
                  highlight: "Integrates with MLS and CRM systems"
                },
                {
                  icon: Calendar,
                  title: "Automated Scheduling",
                  description: "Books showings, consultations, and follow-up calls directly in your calendar. Sends confirmations and reminders.",
                  highlight: "Syncs with Google Calendar, Calendly, Chime"
                },
                {
                  icon: TrendingUp,
                  title: "Nurture Sequences",
                  description: "Automated drip campaigns for different lead types. Market updates, new listings, and value-add content.",
                  highlight: "Keeps you top-of-mind until they're ready"
                }
              ].map((feature, index) => (
                <div key={index} className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-n8n-text-primary mb-2">{feature.title}</h3>
                    <p className="text-n8n-text-secondary mb-2">{feature.description}</p>
                    <p className="text-sm text-blue-400 font-medium">{feature.highlight}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-n8n-bg-primary rounded-xl p-8">
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm font-medium text-green-500">LIVE LEAD RESPONSE</span>
                </div>
                <div className="space-y-4 bg-n8n-bg-secondary rounded-lg p-4">
                  <div>
                    <p className="text-n8n-text-primary">
                      <strong className="text-blue-400">"Hi Sarah! I see you're interested in the Beverly Hills listing. I'm Alex's assistant. Are you looking to schedule a showing this week?"</strong>
                    </p>
                  </div>
                  <div>
                    <p className="text-n8n-text-secondary italic">
                      "Yes! I'd love to see it Saturday if possible..."
                    </p>
                  </div>
                  <div>
                    <p className="text-n8n-text-primary">
                      <strong className="text-blue-400">"Perfect! I have Saturday at 2pm or 4pm available. Also, are you pre-approved for financing?"</strong>
                    </p>
                  </div>
                  <div className="text-xs text-n8n-text-secondary flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    Adding to Alex's calendar...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real LA Real Estate Success Stories
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                agent: "Sarah Chen, Compass",
                result: "+150% Closed Deals",
                details: "Went from 8 to 20 closed deals per year. AI captures and qualifies leads while she focuses on closings.",
                timeframe: "12 months",
                location: "West LA & Beverly Hills"
              },
              {
                agent: "Mike Rodriguez, Century 21",
                result: "+$2.1M Commission",
                details: "24/7 lead capture and instant response increased conversion by 75%. Never misses a weekend lead.",
                timeframe: "8 months", 
                location: "San Fernando Valley"
              },
              {
                agent: "Jennifer Kim, Keller Williams",
                result: "40 Hours/Week Saved",
                details: "Automated lead qualification and follow-up freed up time for high-value activities and family.",
                timeframe: "6 months",
                location: "Downtown & Silver Lake"
              }
            ].map((story, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg">
                <div className="text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{story.agent}</h3>
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

      {/* Features Deep Dive */}
      <section className="py-16 bg-n8n-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-n8n-text-primary mb-4">
              Complete Real Estate Automation Suite
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: MessageSquare,
                title: "Lead Capture & Response",
                features: ["Website chat integration", "Zillow/Realtor.com leads", "Social media inquiries", "Instant text/email response"]
              },
              {
                icon: Users, 
                title: "Lead Qualification",
                features: ["Buyer vs seller identification", "Budget and timeline questions", "Pre-approval status check", "Property preferences"]
              },
              {
                icon: Calendar,
                title: "Appointment Scheduling",
                features: ["Showing bookings", "Consultation scheduling", "Calendar integration", "Automated reminders"]
              },
              {
                icon: FileText,
                title: "CRM Integration",
                features: ["Contact management", "Activity logging", "Deal pipeline tracking", "Follow-up automation"]
              },
              {
                icon: Home,
                title: "Property Management",
                features: ["Listing inquiries", "Property details", "Virtual tour scheduling", "Comparative market analysis"]
              },
              {
                icon: TrendingUp,
                title: "Market Insights",
                features: ["Price alerts", "Market reports", "Neighborhood data", "Investment analysis"]
              }
            ].map((section, index) => (
              <div key={index} className="bg-n8n-bg-secondary rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3">
                    <section.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-n8n-text-primary">{section.title}</h3>
                </div>
                <ul className="space-y-2">
                  {section.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-n8n-text-secondary text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Real Estate Automation Pricing
          </h2>
          
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 mb-8">
            <div className="text-5xl font-black mb-4">$2,997</div>
            <p className="text-xl mb-2">Complete Setup + First Month</p>
            <p className="text-lg opacity-90 mb-6">Then $497/month (Cancel anytime)</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-bold text-lg mb-3">What's Included:</h4>
                <div className="space-y-2">
                  {[
                    "Custom AI trained on real estate processes",
                    "Lead capture from all major platforms", 
                    "CRM integration (Follow Up Boss, Chime, etc.)",
                    "24/7 lead response and qualification",
                    "Automated scheduling and follow-up",
                    "Performance analytics dashboard"
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
                    If your lead conversion doesn't increase by <strong>50%</strong> in 
                    the first 90 days, we'll refund your entire setup fee.
                  </p>
                </div>
                <div className="mt-4 text-center">
                  <div className="text-2xl font-bold text-green-400">Average: 400% ROI</div>
                  <p className="text-sm opacity-90">in first year</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <Button 
              size="xl"
              className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-xl px-12 py-4"
            >
              <Zap className="w-6 h-6 mr-2" />
              Get Your Real Estate AI Assistant
            </Button>
            <p className="text-gray-400">Setup completed in 48 hours • LA agents & brokerages only</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-n8n-bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-n8n-text-primary">
            Common Questions from LA Real Estate Professionals
          </h2>
          
          <div className="space-y-8">
            {[
              {
                question: "Does it integrate with my CRM and MLS?",
                answer: "Yes! We integrate with all major real estate CRMs including Follow Up Boss, Chime, KvCore, and Top Producer. MLS integration available for CRMLS and other LA area systems."
              },
              {
                question: "Will leads know they're talking to AI?",
                answer: "Your AI assistant introduces itself as your assistant, not as you directly. Most clients appreciate the instant response and professional service."
              },
              {
                question: "Can it handle complex real estate questions?",
                answer: "Our AI is trained on real estate processes and can handle property details, scheduling, qualifying questions, and basic market info. Complex negotiations still go to you."
              },
              {
                question: "What about compliance and data security?",
                answer: "We maintain full compliance with real estate regulations, data privacy laws, and maintain secure handling of all client information."
              },
              {
                question: "Do you work with teams and brokerages?",
                answer: "Absolutely! We can set up systems for individual agents, teams, or entire brokerages throughout LA County."
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
      <section className="py-20 bg-gradient-to-r from-blue-900 via-indigo-800 to-blue-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Capture Every Lead?
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Join 40+ LA real estate professionals already using AI assistants. 
            Setup takes 48 hours, results guaranteed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="xl"
              className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-xl px-12 py-4"
            >
              <Home className="w-6 h-6 mr-2" />
              Get Real Estate Demo
            </Button>
            <Button 
              size="xl"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 text-xl px-12 py-4"
            >
              <Phone className="w-6 h-6 mr-2" />
              Call {BRAND.phone}
            </Button>
          </div>
          
          <p className="mt-8 text-gray-300">
            Serving: Beverly Hills • Brentwood • Manhattan Beach • Downtown • Valley • All LA County
          </p>
        </div>
      </section>
    </main>
  );
}