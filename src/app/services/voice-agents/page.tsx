'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import { BRAND } from '@/config/branding';
import { 
  Phone, 
  Clock, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  Star,
  ArrowRight,
  Zap,
  Calendar,
  MessageSquare,
  BarChart3,
  Shield,
  Headphones
} from 'lucide-react';

export default function VoiceAgentsPage() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-n8n-bg-primary text-n8n-text-primary overflow-hidden relative">
      <Header />
      
      {/* Subtle background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none will-change-transform">
        <div className="absolute top-20 left-20 w-80 h-80 bg-brand-primary/6 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-64 h-64 bg-brand-accent/5 rounded-full mix-blend-multiply filter blur-xl animate-float animation-delay-2000"></div>
        <div className="absolute bottom-40 left-40 w-72 h-72 bg-brand-secondary/5 rounded-full mix-blend-multiply filter blur-xl animate-float animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-n8n-bg-secondary backdrop-blur-md border border-n8n-border rounded-full px-6 py-3 mb-8">
              <Phone className="w-5 h-5 mr-2 text-brand-primary" />
              <span className="text-brand-primary font-semibold">
                AI VOICE REVOLUTION
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-none">
              <span className="block text-white">
                NEVER MISS
              </span>
              <span className="block text-brand-primary">
                A CALL AGAIN
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-n8n-text-secondary mb-12 max-w-5xl mx-auto leading-relaxed">
              Your AI voice agent sounds <span className="text-brand-primary font-bold">completely human</span>, 
              handles complex conversations, books appointments, qualifies leads, and 
              <span className="text-brand-accent font-bold"> grows your business 24/7</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button 
                size="xl" 
                className="bg-brand-primary hover:bg-brand-primary/80 text-white font-bold text-lg px-12 py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Zap className="w-6 h-6 mr-2" />
                GET YOUR AI AGENT NOW
              </Button>
              <Button 
                size="xl" 
                variant="outline" 
                className="border-2 border-n8n-border text-brand-primary font-bold text-lg px-12 py-6 rounded-full hover:bg-brand-primary/10"
              >
                <Phone className="w-6 h-6 mr-2 text-brand-primary" />
                HEAR IT IN ACTION
              </Button>
            </div>

            {/* Massive Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-n8n-bg-secondary backdrop-blur-md border border-n8n-border rounded-2xl p-8">
                <div className="text-5xl font-black text-brand-primary mb-2">95%</div>
                <p className="text-n8n-text-primary font-semibold text-lg">Calls Answered</p>
                <p className="text-n8n-text-secondary text-sm">vs. 60% with humans only</p>
              </div>
              <div className="bg-n8n-bg-secondary backdrop-blur-md border border-n8n-border rounded-2xl p-8">
                <div className="text-5xl font-black text-brand-accent mb-2">3X</div>
                <p className="text-n8n-text-primary font-semibold text-lg">More Bookings</p>
                <p className="text-n8n-text-secondary text-sm">Instant responses convert</p>
              </div>
              <div className="bg-n8n-bg-secondary backdrop-blur-md border border-n8n-border rounded-2xl p-8">
                <div className="text-5xl font-black text-brand-secondary mb-2">24/7</div>
                <p className="text-n8n-text-primary font-semibold text-lg">Always Available</p>
                <p className="text-n8n-text-secondary text-sm">Even when you sleep</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Agitation */}
      <section className="relative z-10 py-24 bg-gradient-to-r from-n8n-bg-secondary to-n8n-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-brand-primary mb-8">
              EVERY MISSED CALL = MONEY LOST
            </h2>
            <p className="text-2xl text-n8n-text-secondary max-w-4xl mx-auto">
              While you're busy running your business, competitors with AI agents are capturing YOUR customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, stat: "40%", problem: "Calls go to voicemail during business hours" },
              { icon: Users, stat: "65%", problem: "After-hours calls are lost forever" },  
              { icon: TrendingUp, stat: "$50k+", problem: "Average revenue lost per year from missed calls" },
              { icon: Phone, stat: "30 sec", problem: "How long customers wait before hanging up" }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-n8n-bg-secondary to-n8n-bg-primary backdrop-blur-md border border-n8n-border rounded-xl p-6 text-center">
                <item.icon className="w-12 h-12 text-brand-primary mx-auto mb-4" />
                <div className="text-3xl font-black text-brand-primary mb-2">
                  {item.stat}
                </div>
                <p className="text-n8n-text-secondary font-medium">{item.problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-brand-primary mb-8">
              THE AI SOLUTION THAT CHANGES EVERYTHING
            </h2>
            <p className="text-2xl text-n8n-text-secondary max-w-4xl mx-auto">
              While your competition loses calls, you capture every opportunity with superhuman efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                {
                  icon: Headphones,
                  title: "Sounds 100% Human",
                  description: "Advanced AI voice technology that customers can't tell apart from your best employee"
                },
                {
                  icon: Calendar, 
                  title: "Books Appointments Instantly",
                  description: "Syncs with your calendar, finds availability, confirms details, sends reminders"
                },
                {
                  icon: MessageSquare,
                  title: "Handles Complex Conversations", 
                  description: "Answers questions, provides quotes, transfers to humans only when needed"
                },
                {
                  icon: Shield,
                  title: "Never Calls In Sick",
                  description: "Works 24/7/365 with perfect consistency and endless patience"
                }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-6 group cursor-pointer"
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <div className={`p-4 rounded-full transition-all duration-300 ${
                    hoveredFeature === index 
                      ? 'bg-brand-primary scale-110' 
                      : 'bg-brand-primary/10'
                  }`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-brand-primary mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-n8n-text-secondary text-lg leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-n8n-bg-secondary to-n8n-bg-primary backdrop-blur-md border border-n8n-border rounded-3xl p-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-brand-primary rounded-full animate-pulse"></div>
                    <span className="text-brand-primary font-semibold">LIVE CALL IN PROGRESS</span>
                  </div>
                  <div className="bg-[#0E0918]/40 rounded-xl p-6">
                    <p className="text-n8n-text-secondary mb-4">
                      <strong className="text-brand-primary">"Hi, thanks for calling [Your Business]. I'm Sarah, how can I help you today?"</strong>
                    </p>
                    <p className="text-n8n-text-secondary/80 mb-4">
                      "Hi, I need to schedule a service call for my HVAC system..."
                    </p>
                    <p className="text-n8n-text-secondary mb-4">
                      <strong className="text-brand-primary">"Of course! I can get that scheduled right now. What's the best day for you this week?"</strong>
                    </p>
                    <div className="flex items-center space-x-2 text-sm text-n8n-text-secondary/60">
                      <Clock className="w-4 h-4" />
                      <span>Appointment being booked in real-time...</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="relative z-10 py-24 bg-gradient-to-r from-n8n-bg-secondary to-n8n-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-brand-primary mb-8">
              REAL LA BUSINESSES, REAL RESULTS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                business: "DTLA Dental Practice",
                result: "+$180k Revenue",
                detail: "Went from missing 40% of calls to answering 98%. Appointment bookings increased 250%.",
                timeframe: "6 months"
              },
              {
                business: "Valley HVAC Company", 
                result: "+35 Jobs/Month",
                detail: "Emergency calls now answered 24/7. After-hours bookings generate $25k monthly.",
                timeframe: "4 months"
              },
              {
                business: "Westside Law Firm",
                result: "+120% Consultations", 
                detail: "AI qualifier pre-screens leads. Partners now focus only on high-value prospects.",
                timeframe: "3 months"
              }
            ].map((story, index) => (
              <div key={index} className="bg-gradient-to-br from-n8n-bg-secondary to-n8n-bg-primary backdrop-blur-md border border-n8n-border rounded-2xl p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">{story.business}</h3>
                  <div className="text-4xl font-black text-brand-primary mb-4">
                    {story.result}
                  </div>
                  <p className="text-n8n-text-secondary mb-4 leading-relaxed">{story.detail}</p>
                  <div className="text-sm text-n8n-text-secondary/60">Results in {story.timeframe}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="relative z-10 py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-brand-primary mb-8">
              GET YOUR AI AGENT TODAY
            </h2>
            <p className="text-2xl text-n8n-text-secondary">
              Stop losing money to missed calls. Start capturing every opportunity.
            </p>
          </div>

          <div className="bg-gradient-to-br from-n8n-bg-secondary to-n8n-bg-primary backdrop-blur-md border-2 border-n8n-border rounded-3xl p-12">
            <div className="text-center mb-8">
              <div className="text-6xl font-black text-brand-primary mb-4">
                $2,997
              </div>
              <p className="text-2xl text-n8n-text-secondary mb-2">Complete Setup + First Month</p>
              <p className="text-lg text-n8n-text-secondary/80">Then $497/month (cancellable anytime)</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <h4 className="text-2xl font-bold text-brand-primary">
                  What You Get:
                </h4>
                {[
                  "Custom AI voice agent trained on your business",
                  "Phone number setup and forwarding", 
                  "Calendar integration and booking system",
                  "Lead qualification and routing",
                  "Bilingual support (English/Spanish)",
                  "Real-time dashboard and analytics"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-brand-primary flex-shrink-0" />
                    <span className="text-n8n-text-secondary">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="space-y-4">
                <h4 className="text-2xl font-bold text-brand-accent">
                  ROI Guarantee:
                </h4>
                <div className="bg-gradient-to-r from-n8n-bg-secondary to-n8n-bg-primary backdrop-blur-md border border-n8n-border rounded-xl p-6">
                  <p className="text-n8n-text-secondary text-lg leading-relaxed">
                    If your AI agent doesn't capture at least <strong className="text-brand-primary">10 additional appointments</strong> in the first 60 days, we'll refund your entire setup fee.
                  </p>
                </div>
                <div className="text-center pt-4">
                  <div className="text-sm text-n8n-text-secondary/60 mb-2">Average ROI:</div>
                  <div className="text-3xl font-bold text-brand-primary">
                    500%+ in first year
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button 
                size="xl"
                className="bg-brand-primary hover:from-[#EE4F27]/80 hover:to-[#6B21EF]/80 text-white font-black text-2xl px-16 py-8 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 mb-4"
              >
                <Zap className="w-8 h-8 mr-3" />
                START CAPTURING EVERY CALL
              </Button>
              <p className="text-n8n-text-secondary/80">Setup completed in 48 hours or less</p>
            </div>
          </div>
        </div>
      </section>

      {/* Urgent CTA */}
      <section className="relative z-10 py-24 bg-gradient-to-r from-n8n-bg-secondary to-n8n-bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-brand-primary mb-8">
            STOP LOSING CUSTOMERS TO COMPETITORS
          </h2>
          <p className="text-2xl text-n8n-text-secondary mb-12 max-w-3xl mx-auto">
            Every day you wait is money left on the table. While you're thinking, your competitors are installing AI agents and stealing your calls.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="xl"
              className="bg-brand-primary hover:from-[#EE4F27]/80 hover:to-[#6B21EF]/80 text-white font-black text-xl px-12 py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <ArrowRight className="w-6 h-6 mr-2" />
              CLAIM YOUR AI AGENT NOW
            </Button>
            <Button 
              size="xl" 
              variant="outline" 
              className="border-2 border-n8n-border text-white font-bold text-xl px-12 py-6 rounded-full hover:bg-[#1A1B26] hover:text-white"
            >
              <Phone className="w-6 h-6 mr-2" />
              CALL {BRAND.phone}
            </Button>
          </div>
          
          <div className="mt-8 text-n8n-text-secondary/60">
            <p className="text-lg">Limited spots available • LA businesses only • 48-hour setup</p>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}