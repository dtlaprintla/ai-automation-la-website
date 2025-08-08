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
  Zap
} from 'lucide-react';

export const metadata: Metadata = {
  title: `Dental Office Automation Los Angeles | AI Receptionist & Phone Agent | ${BRAND.name}`,
  description: "AI receptionist and phone automation for dental offices in Los Angeles. Handle appointment booking, insurance questions, and patient calls 24/7. Free consultation for LA dental practices.",
  keywords: [
    "AI receptionist dental office LA",
    "automated appointment booking Los Angeles",
    "dental practice AI assistant",
    "patient scheduling automation Los Angeles",
    "dental office automation LA",
    "AI phone agent dental Los Angeles",
    "bilingual dental receptionist AI",
    "dental practice automation Vernon CA",
    "missed calls dental office LA",
    "dental appointment reminder system"
  ].join(", "),
  alternates: {
    canonical: `https://${BRAND.domain}/industries/dental`,
  },
};

// JSON-LD for Dental Industry Page
const dentalJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `https://${BRAND.domain}/industries/dental#service`,
  "name": "AI Automation for Dental Offices",
  "description": "Comprehensive AI phone agents and automation solutions specifically designed for dental practices in Los Angeles",
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
  "serviceType": "Dental Office Automation",
  "audience": {
    "@type": "BusinessAudience",
    "businessType": "Dental Practice"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Dental Office AI Solutions",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "AI Dental Receptionist",
        "description": "24/7 AI receptionist that handles appointment booking, insurance questions, and patient inquiries",
        "price": "497",
        "priceCurrency": "USD"
      }
    ]
  }
};

export default function DentalIndustryPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dentalJsonLd) }}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-900 via-purple-800 to-blue-900">
        <div className="absolute inset-0 animated-bg opacity-30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-6 py-3 text-white mb-8">
              <Shield className="w-5 h-5 mr-2" />
              For LA Dental Practices Only
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Stop Missing Patient Calls
              <span className="block gradient-text mt-2">Your AI Receptionist Never Sleeps</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              <strong className="text-white">95% of dental offices</strong> in LA miss calls during busy periods. 
              Your AI receptionist answers <strong className="text-white">every call</strong>, books appointments, 
              handles insurance questions, and works <strong className="text-white">24/7 in English & Spanish.</strong>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="xl" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                <Calendar className="w-6 h-6 mr-2" />
                Get Free Demo Call
              </Button>
              <Button size="xl" variant="secondary">
                <Phone className="w-6 h-6 mr-2" />
                Call {BRAND.phone}
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6">
                <div className="text-3xl font-bold text-blue-400 mb-2">35% → 5%</div>
                <p className="text-white">Missed Calls Reduction</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6">
                <div className="text-3xl font-bold text-purple-400 mb-2">20% → 12%</div>
                <p className="text-white">No-Show Rate Drop</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6">
                <div className="text-3xl font-bold text-green-400 mb-2">+180k</div>
                <p className="text-white">Avg Annual Revenue Increase</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sound Familiar?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every dental practice in LA faces the same challenges...
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: Phone,
                title: "Missed Calls = Lost Patients",
                description: "35-40% of calls go to voicemail during busy periods. Each missed call could be $2,000+ in lost revenue."
              },
              {
                icon: Clock,
                title: "After-Hours Emergencies",
                description: "Patients with dental emergencies call after 5pm and weekends. You lose them to competitors with 24/7 answering."
              },
              {
                icon: Users,
                title: "Staff Overwhelm",
                description: "Front desk juggling phones, check-ins, insurance, and scheduling. Quality suffers when they're stretched thin."
              },
              {
                icon: Calendar,
                title: "No-Show Epidemic",
                description: "20%+ no-show rates because reminder calls are inconsistent or forgotten during busy days."
              }
            ].map((problem, index) => (
              <div key={index} className="bg-red-50 border border-red-200 rounded-lg p-6">
                <problem.icon className="w-12 h-12 text-red-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{problem.title}</h3>
                <p className="text-gray-600">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your AI Dental Receptionist
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sounds 100% human, works 24/7, never calls in sick, and speaks perfect English & Spanish
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              {[
                {
                  icon: Phone,
                  title: "Answers Every Call",
                  description: "Never miss another call. Your AI receptionist answers in 2 rings with your practice's custom greeting.",
                  highlight: "95% call answer rate vs 60% with human-only"
                },
                {
                  icon: Calendar,
                  title: "Books Appointments Instantly", 
                  description: "Syncs with your practice management software. Checks availability, books appointments, sends confirmations.",
                  highlight: "Real-time scheduling with Dentrix, Eaglesoft, OpenDental"
                },
                {
                  icon: Shield,
                  title: "Handles Insurance Questions",
                  description: "Answers common insurance questions, verifies benefits, and collects patient information securely.",
                  highlight: "HIPAA-compliant with encrypted data handling"
                },
                {
                  icon: Users,
                  title: "Bilingual Support",
                  description: "Serves LA's diverse population with fluent English and Spanish conversation abilities.",
                  highlight: "Perfect for Los Angeles' Hispanic patient population"
                }
              ].map((feature, index) => (
                <div key={index} className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 mb-2">{feature.description}</p>
                    <p className="text-sm text-blue-600 font-medium">{feature.highlight}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm font-medium text-green-600">LIVE PATIENT CALL</span>
                </div>
                <div className="space-y-4 bg-white rounded-lg p-4">
                  <div>
                    <p className="text-gray-800">
                      <strong className="text-blue-600">"Good morning, Bright Smile Dental, this is Maria. How can I help you today?"</strong>
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 italic">
                      "Hi, I need to schedule a cleaning appointment for next week..."
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-800">
                      <strong className="text-blue-600">"Of course! I can help you with that. Are you a current patient with us?"</strong>
                    </p>
                  </div>
                  <div className="text-xs text-gray-500 flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    Checking calendar availability...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real LA Dental Practices, Real Results
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                practice: "Beverly Hills Family Dentistry",
                result: "+$180k Annual Revenue",
                details: "Went from missing 40% of calls to answering 98%. Appointment bookings increased 250%.",
                timeframe: "6 months",
                location: "Beverly Hills, CA"
              },
              {
                practice: "Smile Studio DTLA",
                result: "+60% New Patients",
                details: "24/7 Spanish AI receptionist captures after-hours emergency calls and weekend inquiries.",
                timeframe: "4 months", 
                location: "Downtown LA"
              },
              {
                practice: "Westside Pediatric Dental",
                result: "85% No-Show Reduction",
                details: "Automated appointment reminders and easy rescheduling through AI phone calls.",
                timeframe: "3 months",
                location: "West Los Angeles"
              }
            ].map((story, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{story.practice}</h3>
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
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Special Pricing for LA Dental Practices
          </h2>
          
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-8">
            <div className="text-5xl font-black mb-4">$2,997</div>
            <p className="text-xl mb-2">Complete Setup + First Month</p>
            <p className="text-lg opacity-90 mb-6">Then $497/month (Cancel anytime)</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-bold text-lg mb-3">What's Included:</h4>
                <div className="space-y-2">
                  {[
                    "Custom AI receptionist trained on your practice",
                    "Integration with your practice management software",
                    "Bilingual English/Spanish support",
                    "24/7 phone coverage and emergency routing",
                    "Automated appointment reminders",
                    "Real-time dashboard and analytics"
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
                    If your AI receptionist doesn't book at least <strong>20 additional appointments</strong> in 
                    the first 60 days, we'll refund your entire setup fee.
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
              Get Your AI Dental Receptionist
            </Button>
            <p className="text-gray-400">Setup completed in 48 hours • LA dental practices only</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Common Questions from LA Dental Practices
          </h2>
          
          <div className="space-y-8">
            {[
              {
                question: "Does it integrate with our practice management software?",
                answer: "Yes! We integrate with all major dental software including Dentrix, Eaglesoft, OpenDental, Curve, and more. Real-time appointment booking and patient data sync."
              },
              {
                question: "Will patients know it's AI?",
                answer: "Most patients can't tell the difference. Our AI uses natural conversation patterns, regional LA accents, and is trained on thousands of real dental office calls."
              },
              {
                question: "What about HIPAA compliance?",
                answer: "Fully HIPAA compliant with encrypted data handling, secure integrations, and comprehensive Business Associate Agreements (BAA) in place."
              },
              {
                question: "Can it handle dental emergencies?",
                answer: "Yes! It's programmed to recognize dental emergencies, collect symptom information, and immediately route to your emergency line or on-call dentist."
              },
              {
                question: "Do you serve all of Los Angeles?",
                answer: "Yes, we serve all of LA County including Beverly Hills, Westside, Downtown, Valley, Pasadena, Long Beach, and surrounding areas."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-800 to-blue-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Stop Missing Patient Calls?
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Join 50+ LA dental practices already using AI receptionists. 
            Setup takes 48 hours, ROI guaranteed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="xl"
              className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-xl px-12 py-4"
            >
              <Calendar className="w-6 h-6 mr-2" />
              Book Free Demo
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
            Serving: Beverly Hills • West LA • Downtown • Valley • All LA County
          </p>
        </div>
      </section>
    </main>
  );
}