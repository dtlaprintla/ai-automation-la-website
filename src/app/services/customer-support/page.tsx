import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { BRAND } from '@/config/branding';
import { MessageCircle, Clock, Users, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: `AI Customer Support Automation | ${BRAND.name}`,
  description: "Done-for-you AI customer support that answers questions 24/7. We build, train, and manage everything. You just enjoy 80% fewer support calls.",
  keywords: "AI customer support automation Los Angeles, automated customer service, 24/7 chat support, done for you customer support"
};

const benefits = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: "24/7 Availability",
    description: "Your customers get instant answers any time of day or night"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Handle Unlimited Customers",
    description: "Serve hundreds of customers simultaneously without hiring staff"
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Gets Smarter Over Time",
    description: "AI learns from every interaction and improves automatically"
  }
];

const features = [
  "Answers 90% of common questions instantly",
  "Escalates complex issues to you automatically", 
  "Integrates with your existing website",
  "Works with your current help desk software",
  "Captures leads even during support conversations",
  "Provides detailed analytics on customer questions",
  "Supports multiple languages if needed",
  "Updates knowledge base automatically"
];

const pricing = [
  {
    name: "Setup",
    price: "One-time",
    description: "We build and train your AI support system",
    includes: [
      "Custom AI training on your business",
      "Integration with your website/tools", 
      "Knowledge base setup",
      "Testing and optimization",
      "Staff training (if needed)"
    ]
  },
  {
    name: "Monthly Management", 
    price: "$497/month",
    description: "We monitor, maintain and improve everything",
    includes: [
      "24/7 monitoring and maintenance",
      "Monthly performance reports",
      "Continuous AI improvements", 
      "Knowledge base updates",
      "Priority technical support"
    ]
  }
];

export default function CustomerSupportPage() {
  return (
    <main className="min-h-screen bg-[#0E0918] text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#0E0918] via-[#1A1B26] to-[#0E0918]">
        <div className="absolute inset-0 animated-bg opacity-30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-[#1A1B26] backdrop-blur-md border border-[#C4BBD3]/20 rounded-lg px-4 py-2 text-white mb-6">
                <MessageCircle className="w-5 h-5 mr-2" />
                Customer Support Automation
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Never Miss Another
                <span className="block text-[#EE4F27]">Customer Question</span>
              </h1>
              
              <p className="text-xl text-[#C4BBD3] mb-8 leading-relaxed">
                We build AI that answers your customers 24/7. <span className="text-white font-semibold">Completely done-for-you</span> - 
                no technical knowledge required. Just tell us about your business and we handle the rest.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-[#EE4F27] hover:bg-[#EE4F27]/80 text-white">
                  Get Free Demo
                </Button>
                <Button size="lg" className="bg-[#1A1B26] border border-[#C4BBD3]/20 text-white hover:bg-[#242530]">
                  See How It Works
                </Button>
              </div>
              
              <div className="bg-[#1A1B26] backdrop-blur-md border border-[#C4BBD3]/20 rounded-lg p-4">
                <p className="text-white font-semibold">
                  ⚡ Result: <span className="text-[#EE4F27]">80% fewer support calls to you</span>
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-[#1A1B26] backdrop-blur-md rounded-xl p-8 border border-[#C4BBD3]/20">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-[#EE4F27] rounded-full flex items-center justify-center">
                      <MessageCircle className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[#C4BBD3] text-sm mb-1">Customer asks:</p>
                      <p className="text-white">"What are your business hours?"</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-[#6B21EF] rounded-full flex items-center justify-center">
                      <MessageCircle className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[#C4BBD3] text-sm mb-1">AI responds instantly:</p>
                      <p className="text-white">"We're open Monday-Friday 9AM-6PM PST. For urgent matters, you can reach us at {BRAND.phone}. How else can I help you today?"</p>
                    </div>
                  </div>
                  
                  <div className="text-center pt-4">
                    <p className="text-[#EE4F27] font-semibold">
                      ⚡ Answered in 0.3 seconds
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[#1A1B26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Businesses Love Our AI Support
            </h2>
            <p className="text-xl text-[#C4BBD3]">
              Real benefits that save you time and make customers happier
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#EE4F27] to-[#6B21EF] rounded-full flex items-center justify-center text-white mx-auto mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-[#C4BBD3]">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-[#0E0918]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Everything Included in Your AI Support System
              </h2>
              <p className="text-xl text-[#C4BBD3] mb-8">
                We don't just build basic chatbots. This is a complete customer support solution that handles real business needs.
              </p>
              
              <div className="grid gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-[#C4BBD3]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#1A1B26] to-[#242530] p-8 rounded-xl border border-[#C4BBD3]/20">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Real Business Impact
              </h3>
              
              <div className="space-y-6">
                <div className="text-center p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <div className="text-3xl font-bold text-green-400 mb-2">80%</div>
                  <p className="text-[#C4BBD3]">Fewer calls to you</p>
                </div>
                
                <div className="text-center p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                  <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                  <p className="text-[#C4BBD3]">Customer coverage</p>
                </div>
                
                <div className="text-center p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                  <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
                  <p className="text-[#C4BBD3]">Customer satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-[#1A1B26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How We Set Up Your AI Support
            </h2>
            <p className="text-xl text-[#C4BBD3]">
              100% done-for-you process. You don't need to know anything about AI.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "We Learn Your Business", 
                description: "Tell us about your products/services, common questions, and how you currently handle support."
              },
              {
                step: "2", 
                title: "We Build Your AI",
                description: "Our team creates and trains your AI using your business knowledge. Takes 5-7 business days."
              },
              {
                step: "3",
                title: "We Test Everything", 
                description: "We run hundreds of test conversations to make sure your AI gives perfect answers every time."
              },
              {
                step: "4",
                title: "You Go Live",
                description: "We install everything on your website. Your AI starts helping customers immediately."
              }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#EE4F27] to-[#6B21EF] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-[#C4BBD3] text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-[#0E0918]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-[#C4BBD3]">
              No surprises. No hidden fees. Just results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {pricing.map((plan) => (
              <div key={plan.name} className="bg-gradient-to-br from-[#1A1B26] to-[#242530] p-8 rounded-xl border border-[#C4BBD3]/20">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-[#EE4F27] mb-4">{plan.price}</div>
                <p className="text-[#C4BBD3] mb-6">{plan.description}</p>
                
                <div className="space-y-3">
                  {plan.includes.map((item, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-[#C4BBD3] text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-[#C4BBD3] mb-6">
              Most businesses see ROI within 30 days from time savings alone.
            </p>
            <Button size="lg" className="bg-[#EE4F27] hover:bg-[#EE4F27]/80 text-white">
              Get Free Consultation <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}