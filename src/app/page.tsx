import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import CaseStudies from '@/components/sections/CaseStudies';
import { BRAND } from '@/config/branding';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Star, Phone, Zap, Users, Clock, Shield, Target, TrendingUp } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-n8n-bg-primary text-n8n-text-primary">
      <Header />
      <Hero />
      
      {/* Services Preview */}
      <section className="py-20 bg-n8n-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Done-For-You AI Solutions
            </h2>
            <p className="text-xl text-n8n-text-secondary max-w-3xl mx-auto">
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
              <div key={index} className="bg-n8n-bg-secondary rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-n8n-border">
                <div className="text-brand-primary mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-n8n-text-secondary mb-4">{service.description}</p>
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                  <p className="text-green-400 font-semibold text-sm">
                    <span className="text-green-300">Result:</span> {service.result}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/services">
              <Button size="lg" className="bg-brand-primary hover:bg-brand-primary/80 border border-brand-primary/20">
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-n8n-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stop Losing Money Every Day
            </h2>
            <p className="text-xl text-n8n-text-secondary max-w-3xl mx-auto">
              LA businesses are hemorrhaging revenue due to manual processes and missed opportunities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Phone className="w-12 h-12" />,
                title: "Missed Calls = Lost Money",
                stat: "35% of calls go unanswered",
                cost: "$50K+ lost annually"
              },
              {
                icon: <Clock className="w-12 h-12" />,
                title: "Manual Tasks Drain Time", 
                stat: "20+ hours/week wasted",
                cost: "Staff burnout & turnover"
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "Slow Customer Response",
                stat: "6+ hour response times",
                cost: "Customers choose competitors"
              },
              {
                icon: <TrendingUp className="w-12 h-12" />,
                title: "No Growth Strategy",
                stat: "Same revenue for years",
                cost: "Falling behind market"
              }
            ].map((pain, index) => (
              <div key={index} className="bg-n8n-bg-secondary border border-red-500/20 rounded-lg p-6 text-center">
                <div className="text-red-400 mb-4 flex justify-center">{pain.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{pain.title}</h3>
                <div className="text-red-400 font-bold mb-2">{pain.stat}</div>
                <div className="text-n8n-text-secondary text-sm">{pain.cost}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-n8n-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How AI Automation Transforms Your Business
            </h2>
            <p className="text-xl text-n8n-text-secondary max-w-3xl mx-auto">
              Turn your biggest operational challenges into competitive advantages
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                {
                  icon: <Phone className="w-8 h-8" />,
                  title: "Never Miss Another Call",
                  description: "AI answers in 2 rings, books appointments, and qualifies leads 24/7.",
                  benefit: "98% call answer rate"
                },
                {
                  icon: <Clock className="w-8 h-8" />,
                  title: "Eliminate Manual Work",
                  description: "Automate data entry, follow-ups, and routine tasks that drain your time.",
                  benefit: "20+ hours saved weekly"
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Instant Customer Response",
                  description: "Respond to leads in under 60 seconds, not hours or days.",
                  benefit: "300% higher conversion"
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "Predictable Growth",
                  description: "Scale your operations without hiring more staff.",
                  benefit: "400-650% ROI"
                }
              ].map((solution, index) => (
                <div key={index} className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-n8n-bg-secondary border border-n8n-border rounded-lg flex items-center justify-center">
                      <div className="text-brand-primary">{solution.icon}</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{solution.title}</h3>
                    <p className="text-n8n-text-secondary mb-2">{solution.description}</p>
                    <p className="text-sm text-brand-primary font-medium">{solution.benefit}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-br from-brand-primary/5 to-brand-accent/5 border border-n8n-border rounded-xl p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Average Results in 90 Days
                </h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-brand-primary mb-2">650%</div>
                    <div className="text-n8n-text-secondary">Return on Investment</div>
                  </div>
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-2xl font-bold text-green-400 mb-1">95%</div>
                      <div className="text-sm text-n8n-text-secondary">Call Answer Rate</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-400 mb-1">30 sec</div>
                      <div className="text-sm text-n8n-text-secondary">Response Time</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-400 mb-1">24/7</div>
                      <div className="text-sm text-n8n-text-secondary">Availability</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-yellow-400 mb-1">20+</div>
                      <div className="text-sm text-n8n-text-secondary">Hours Saved</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-n8n-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by 100+ LA Businesses
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-n8n-bg-secondary rounded-lg p-6">
              <div className="text-3xl font-bold text-brand-primary mb-2">100+</div>
              <div className="text-n8n-text-secondary">Businesses Automated</div>
            </div>
            <div className="bg-n8n-bg-secondary rounded-lg p-6">
              <div className="text-3xl font-bold text-brand-primary mb-2">650%</div>
              <div className="text-n8n-text-secondary">Average ROI</div>
            </div>
            <div className="bg-n8n-bg-secondary rounded-lg p-6">
              <div className="text-3xl font-bold text-brand-primary mb-2">2-3</div>
              <div className="text-n8n-text-secondary">Weeks to Deploy</div>
            </div>
            <div className="bg-n8n-bg-secondary rounded-lg p-6 flex flex-col items-center">
              <div className="flex text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-current" />
                ))}
              </div>
              <div className="text-n8n-text-secondary">Client Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-n8n-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Specialized for LA Industries
            </h2>
            <p className="text-xl text-n8n-text-secondary max-w-3xl mx-auto">
              Custom AI solutions designed for your specific business challenges
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Dental Practices", icon: "🦷", benefit: "+180K revenue" },
              { name: "Real Estate", icon: "🏠", benefit: "+60% leads" },
              { name: "Restaurants", icon: "🍽️", benefit: "+40% orders" },
              { name: "Home Services", icon: "🔧", benefit: "+150% calls" },
              { name: "Healthcare", icon: "🏥", benefit: "94% faster" },
              { name: "Professional Services", icon: "💼", benefit: "+25 hours/week" },
              { name: "E-commerce", icon: "🛒", benefit: "80% automation" },
              { name: "Hospitality", icon: "🏨", benefit: "24/7 booking" }
            ].map((industry, index) => (
              <Link key={index} href={`/industries/${industry.name.toLowerCase().replace(' ', '-')}`}>
                <div className="bg-n8n-bg-primary border border-n8n-border hover:border-[#EE4F27]/50 rounded-lg p-6 text-center transition-all cursor-pointer group">
                  <div className="text-4xl mb-3">{industry.icon}</div>
                  <h3 className="font-semibold text-white mb-2 group-hover:text-brand-primary">{industry.name}</h3>
                  <div className="text-sm text-brand-primary">{industry.benefit}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <CaseStudies />

      {/* CTA Section */}
      <section className="py-20 bg-n8n-bg-secondary relative overflow-hidden">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/8 via-brand-accent/6 to-brand-primary/8"></div>
        <div className="relative z-10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get your free AI automation plan and see exactly how we can transform your operations in 2-3 weeks.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/contact">
              <Button size="xl" className="bg-white text-brand-primary font-bold hover:bg-gray-100">
                <ArrowRight className="w-6 h-6 mr-2" />
                Get Free AI Plan
              </Button>
            </Link>
            <Button size="xl" variant="outline" className="text-white border-white hover:bg-white/10">
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
        </div>
      </section>
      
      <Footer />
    </div>
  );
}