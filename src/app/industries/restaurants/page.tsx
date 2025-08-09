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
  UtensilsCrossed,
  MessageSquare,
  DollarSign,
  TrendingUp
} from 'lucide-react';

export const metadata: Metadata = {
  title: `Restaurant Automation Los Angeles | AI Phone Agent & Ordering System | ${BRAND.name}`,
  description: "AI automation for LA restaurants and hospitality. Handle orders, reservations, and customer service 24/7. Bilingual support for LA's diverse dining scene. Free consultation.",
  keywords: [
    "restaurant automation Los Angeles",
    "AI phone orders LA restaurants", 
    "automated restaurant reservations",
    "hospitality AI assistant Los Angeles",
    "bilingual restaurant AI LA",
    "restaurant chatbot ordering system",
    "LA dining automation Vernon CA",
    "restaurant voice ordering AI",
    "hospitality automation Los Angeles",
    "restaurant customer service AI"
  ].join(", "),
  alternates: {
    canonical: `https://${BRAND.domain}/industries/restaurants`,
  },
};

// JSON-LD for Restaurant Industry Page
const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `https://${BRAND.domain}/industries/restaurants#service`,
  "name": "AI Automation for Restaurants and Hospitality",
  "description": "Comprehensive AI phone ordering, reservation management, and customer service solutions for LA restaurants and hospitality businesses",
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
  "serviceType": "Restaurant Automation",
  "audience": {
    "@type": "BusinessAudience",
    "businessType": "Restaurant"
  }
};

export default function RestaurantIndustryPage() {
  return (
    <main className="min-h-screen bg-n8n-bg-primary">
      <Header />
      
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[#10B981]">
        <div className="absolute inset-0 animated-bg opacity-30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-6 py-3 text-white mb-8">
              <UtensilsCrossed className="w-5 h-5 mr-2" />
              For LA Restaurants & Hospitality
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Never Miss Another Order
              <span className="block text-white mt-2">24/7 AI Takes Every Call</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              <strong className="text-white">LA restaurants lose 30% of calls</strong> during dinner rush. 
              Your AI assistant answers <strong className="text-white">every call</strong>, takes orders, 
              books reservations, and works <strong className="text-white">24/7 in English & Spanish.</strong>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="xl" className="bg-white text-[#10B981] hover:bg-gray-100 transition-colors">
                <UtensilsCrossed className="w-6 h-6 mr-2" />
                Get Free Restaurant Demo
              </Button>
              <Button size="xl" variant="secondary">
                <Phone className="w-6 h-6 mr-2" />
                Call {BRAND.phone}
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-n8n-bg-secondary/10 backdrop-blur-md border border-white/20 rounded-lg p-6">
                <div className="text-3xl font-bold text-orange-400 mb-2">+35%</div>
                <p className="text-white">Order Volume Increase</p>
              </div>
              <div className="bg-n8n-bg-secondary/10 backdrop-blur-md border border-white/20 rounded-lg p-6">
                <div className="text-3xl font-bold text-red-400 mb-2">15 sec</div>
                <p className="text-white">Average Answer Time</p>
              </div>
              <div className="bg-n8n-bg-secondary/10 backdrop-blur-md border border-white/20 rounded-lg p-6">
                <div className="text-3xl font-bold text-green-400 mb-2">+$85k</div>
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
              LA Restaurant Challenges
            </h2>
            <p className="text-xl text-n8n-text-secondary max-w-3xl mx-auto">
              Every restaurant in Los Angeles faces these daily struggles...
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: Phone,
                title: "Dinner Rush Chaos",
                description: "30-40% of calls go unanswered during peak hours. Each missed call = $25-60 in lost orders."
              },
              {
                icon: Clock,
                title: "After-Hours Orders Lost",
                description: "Customers call at 9pm wanting delivery. Competitors with 24/7 ordering steal your business."
              },
              {
                icon: Users,
                title: "Staff Overwhelmed",
                description: "Host juggling phones, seating, and orders. Customer experience suffers when stretched thin."
              },
              {
                icon: MessageSquare,
                title: "Language Barriers",
                description: "40% of LA speaks Spanish at home. Language barriers cost orders and create frustration."
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
              Your AI Restaurant Assistant
            </h2>
            <p className="text-xl text-n8n-text-secondary max-w-3xl mx-auto">
              Sounds 100% human, speaks perfect English & Spanish, never gets overwhelmed
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              {[
                {
                  icon: Phone,
                  title: "Takes Every Order",
                  description: "Answers calls in 2 rings with your restaurant's greeting. Takes complex orders, modifications, and special requests.",
                  highlight: "Handles 100+ concurrent calls during rush hour"
                },
                {
                  icon: Calendar,
                  title: "Books Reservations Instantly", 
                  description: "Syncs with OpenTable, Resy, or your reservation system. Checks availability and confirms bookings.",
                  highlight: "Integrates with all major restaurant POS systems"
                },
                {
                  icon: UtensilsCrossed,
                  title: "Menu Knowledge Expert",
                  description: "Knows your entire menu, ingredients, allergens, and daily specials. Upsells and suggests pairings.",
                  highlight: "Updates automatically when you change menu items"
                },
                {
                  icon: Users,
                  title: "Bilingual & Cultural",
                  description: "Serves LA's diverse population with fluent English and Spanish. Understands cultural food preferences.",
                  highlight: "Perfect for LA's multicultural dining scene"
                }
              ].map((feature, index) => (
                <div key={index} className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-orange-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-n8n-text-primary mb-2">{feature.title}</h3>
                    <p className="text-n8n-text-secondary mb-2">{feature.description}</p>
                    <p className="text-sm text-orange-400 font-medium">{feature.highlight}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-n8n-bg-primary rounded-xl p-8">
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm font-medium text-green-500">LIVE ORDER CALL</span>
                </div>
                <div className="space-y-4 bg-n8n-bg-secondary rounded-lg p-4">
                  <div>
                    <p className="text-n8n-text-primary">
                      <strong className="text-orange-400">"Thank you for calling Maria's Cantina, this is Sofia. How can I help you tonight?"</strong>
                    </p>
                  </div>
                  <div>
                    <p className="text-n8n-text-secondary italic">
                      "Hi, I'd like to order for delivery. Can I get two fish tacos and..."
                    </p>
                  </div>
                  <div>
                    <p className="text-n8n-text-primary">
                      <strong className="text-orange-400">"Perfect! Would you like those with corn or flour tortillas? And can I recommend our house-made guacamole?"</strong>
                    </p>
                  </div>
                  <div className="text-xs text-n8n-text-secondary flex items-center">
                    <UtensilsCrossed className="w-3 h-3 mr-1" />
                    Adding order to POS system...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-[#10B981]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real LA Restaurants, Real Results
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                restaurant: "Abuela's Kitchen",
                result: "+85k Annual Revenue",
                details: "Went from missing 35% of calls to answering 99%. Order volume increased 40% during peak hours.",
                timeframe: "6 months",
                location: "East LA"
              },
              {
                restaurant: "Pacific Sushi Bar",
                result: "+60% Delivery Orders",
                details: "24/7 AI takes complex sushi orders in English and Japanese. Never misses a late-night order.",
                timeframe: "4 months", 
                location: "West Hollywood"
              },
              {
                restaurant: "Tony's Pizza House",
                result: "95% Order Accuracy",
                details: "AI eliminates order mistakes and automatically upsells. Average order value up $12.",
                timeframe: "3 months",
                location: "North Hollywood"
              }
            ].map((story, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{story.restaurant}</h3>
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
              Everything Your Restaurant Needs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Phone,
                title: "Order Taking",
                features: ["Complex order modifications", "Allergy and dietary handling", "Automatic upselling", "Payment processing"]
              },
              {
                icon: Calendar, 
                title: "Reservations",
                features: ["Real-time availability", "Party size optimization", "Special occasion notes", "Confirmation calls"]
              },
              {
                icon: MessageSquare,
                title: "Customer Service",
                features: ["Hours and location info", "Menu questions", "Delivery status updates", "Complaint handling"]
              },
              {
                icon: DollarSign,
                title: "Revenue Optimization",
                features: ["Smart upselling", "Peak hour management", "Loyalty program integration", "Promotional campaigns"]
              },
              {
                icon: TrendingUp,
                title: "Analytics & Insights",
                features: ["Call volume tracking", "Order pattern analysis", "Customer preferences", "Revenue reporting"]
              },
              {
                icon: Shield,
                title: "Integration & Security",
                features: ["POS system sync", "Delivery platform integration", "Secure payment handling", "Data protection"]
              }
            ].map((section, index) => (
              <div key={index} className="bg-n8n-bg-secondary rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center mr-3">
                    <section.icon className="w-5 h-5 text-orange-400" />
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
      <section className="py-16 bg-[#0E0E13] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Restaurant Automation Pricing
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
                    "Custom AI trained on your menu and processes",
                    "Integration with POS and delivery platforms", 
                    "Bilingual English/Spanish support",
                    "24/7 phone coverage and order taking",
                    "Reservation management system",
                    "Real-time analytics dashboard"
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
                    If your AI doesn't increase order volume by <strong>25%</strong> in 
                    the first 60 days, we'll refund your entire setup fee.
                  </p>
                </div>
                <div className="mt-4 text-center">
                  <div className="text-2xl font-bold text-green-400">Average: 350% ROI</div>
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
              Get Your Restaurant AI Assistant
            </Button>
            <p className="text-gray-400">Setup completed in 48 hours • LA restaurants only</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-n8n-bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-n8n-text-primary">
            Common Questions from LA Restaurant Owners
          </h2>
          
          <div className="space-y-8">
            {[
              {
                question: "Does it integrate with our POS system?",
                answer: "Yes! We integrate with all major restaurant POS systems including Toast, Square, Clover, Lightspeed, and more. Orders go directly into your system."
              },
              {
                question: "Can it handle complex orders and modifications?",
                answer: "Absolutely! Our AI understands modifications, substitutions, cooking preferences, allergies, and special requests. It's trained specifically on restaurant operations."
              },
              {
                question: "What about delivery platform integration?",
                answer: "We integrate with DoorDash, Uber Eats, Grubhub, and Postmates. Orders can be routed to appropriate platforms or your direct delivery service."
              },
              {
                question: "Will customers know it's AI?",
                answer: "Most customers can't tell the difference. Our AI uses natural conversation patterns and is trained on thousands of real restaurant calls."
              },
              {
                question: "Do you serve all of Los Angeles?",
                answer: "Yes, we serve all of LA County including Beverly Hills, Hollywood, Downtown, Valley, Beach cities, and surrounding areas."
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
            Ready to Never Miss Another Order?
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Join 25+ LA restaurants already using AI assistants. 
            Setup takes 48 hours, ROI guaranteed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="xl"
              className="bg-[#10B981] hover:bg-[#059669] transition-colors text-xl px-12 py-4"
            >
              <UtensilsCrossed className="w-6 h-6 mr-2" />
              Get Restaurant Demo
            </Button>
            <Button 
              size="xl"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-900 text-xl px-12 py-4"
            >
              <Phone className="w-6 h-6 mr-2" />
              Call {BRAND.phone}
            </Button>
          </div>
          
          <p className="mt-8 text-gray-300">
            Serving: Beverly Hills • West LA • Downtown • Hollywood • Valley • All LA County
          </p>
        </div>
      </section>
    </main>
  );
}