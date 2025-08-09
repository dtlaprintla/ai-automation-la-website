import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import CaseStudies from '@/components/sections/CaseStudies';
import { BRAND } from '@/config/branding';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Star, Phone, Zap, Users, Clock, Shield, Target, TrendingUp, DollarSign, Calculator } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0E0E13] text-white">
      <Header />
      <Hero />
      
      {/* Services Preview */}
      <section className="py-20 bg-[#111117]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Done-For-You AI Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
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
              <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 hover:border-blue-600/50 hover:bg-gray-800/50 transition-all duration-200">
                <div className="text-blue-400 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
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
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
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

      {/* ROI Calculator CTA */}
      <section className="py-20 bg-n8n-bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/5 via-brand-accent/3 to-brand-primary/5"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-brand-primary/10 backdrop-blur-sm border border-brand-primary/20 rounded-lg px-4 py-2 mb-6">
              <Zap className="w-5 h-5 mr-2 text-brand-primary" />
              <span className="text-brand-primary font-semibold">Free ROI Analysis Tool</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              See Your Exact Savings in
              <span className="block text-brand-primary mt-2">60 Seconds</span>
            </h2>
            
            <p className="text-xl text-n8n-text-secondary mb-8 max-w-3xl mx-auto">
              Calculate how much time and money AI automation will save your business. 
              Get a personalized ROI report based on your actual business metrics.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
              <div className="bg-n8n-bg-primary rounded-lg p-6 border border-n8n-border">
                <DollarSign className="w-10 h-10 text-brand-primary mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Cost Savings</h3>
                <p className="text-n8n-text-secondary text-sm">See exactly how much you'll save on labor costs</p>
              </div>
              <div className="bg-n8n-bg-primary rounded-lg p-6 border border-n8n-border">
                <Clock className="w-10 h-10 text-brand-accent mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Time Recovered</h3>
                <p className="text-n8n-text-secondary text-sm">Calculate hours saved from automation</p>
              </div>
              <div className="bg-n8n-bg-primary rounded-lg p-6 border border-n8n-border">
                <TrendingUp className="w-10 h-10 text-brand-secondary mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Revenue Growth</h3>
                <p className="text-n8n-text-secondary text-sm">Estimate revenue from captured opportunities</p>
              </div>
            </div>
            
            <Link href="/roi-calculator">
              <Button size="xl" className="bg-brand-primary hover:bg-brand-primary/80 text-white font-bold shadow-xl transform hover:scale-105 transition-all duration-300">
                <Calculator className="w-6 h-6 mr-2" />
                Calculate Your ROI Now
                <ArrowRight className="w-6 h-6 ml-2" />
              </Button>
            </Link>
            
            <p className="text-sm text-n8n-text-secondary mt-4">
              No email required • Instant results • 100% free
            </p>
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

      {/* Blog Preview */}
      <section className="py-20 bg-n8n-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI Automation Insights
            </h2>
            <p className="text-xl text-n8n-text-secondary max-w-3xl mx-auto">
              Real case studies, expert insights, and practical guides for Los Angeles businesses
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Link href="/blog/ai-phone-agents-transform-dtla-dental-practice">
              <article className="bg-n8n-bg-secondary rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="h-48 bg-gradient-to-r from-brand-primary/20 to-brand-accent/20 flex items-center justify-center">
                  <span className="text-n8n-text-secondary">Featured Case Study</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full text-sm font-semibold">
                      Case Study
                    </span>
                    <span className="text-n8n-text-secondary text-sm">7 min read</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                    How AI Phone Agents Transformed a DTLA Dental Practice: +$180K Revenue
                  </h3>
                  <p className="text-n8n-text-secondary mb-4 leading-relaxed">
                    A downtown Los Angeles dental practice went from missing 40% of calls to answering 98% with AI automation.
                  </p>
                  
                  <div className="flex items-center text-brand-primary font-semibold">
                    Read Case Study
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </article>
            </Link>

            <Link href="/blog/stop-missing-calls-la-business-automation">
              <article className="bg-n8n-bg-secondary rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="h-48 bg-gradient-to-r from-brand-secondary/20 to-brand-primary/20 flex items-center justify-center">
                  <span className="text-n8n-text-secondary">Strategy Guide</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-brand-accent/10 text-brand-accent px-3 py-1 rounded-full text-sm font-semibold">
                      AI Strategy
                    </span>
                    <span className="text-n8n-text-secondary text-sm">5 min read</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                    Stop Missing Calls: How LA Businesses Capture Every Lead with AI
                  </h3>
                  <p className="text-n8n-text-secondary mb-4 leading-relaxed">
                    Los Angeles businesses lose $50K+ annually to missed calls. Learn how AI phone agents ensure you never miss another opportunity.
                  </p>
                  
                  <div className="flex items-center text-brand-primary font-semibold">
                    Read Guide
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </article>
            </Link>
          </div>
          
          <div className="text-center">
            <Link href="/blog">
              <Button size="lg" variant="outline" className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white">
                View All Articles
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

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
            <a href={`tel:${BRAND.phone}`}>
              <Button size="xl" variant="outline" className="text-white border-white hover:bg-white/10">
                <Phone className="w-6 h-6 mr-2" />
                Call {BRAND.phone}
              </Button>
            </a>
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