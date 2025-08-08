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
    <main className="min-h-screen bg-black text-white overflow-hidden relative">
      <Header />
      
      {/* Optimized Background Blobs with CSS-only animations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none will-change-transform">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob gpu-accelerated"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 gpu-accelerated"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 gpu-accelerated"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-6000 gpu-accelerated"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-400/20 backdrop-blur-md border border-purple-300/30 rounded-full px-6 py-3 mb-8">
              <Phone className="w-5 h-5 mr-2 text-cyan-400" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 font-semibold">
                AI VOICE REVOLUTION
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-none">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
                NEVER MISS
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
                A CALL AGAIN
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed">
              Your AI voice agent sounds <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-bold">completely human</span>, 
              handles complex conversations, books appointments, qualifies leads, and 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-bold"> grows your business 24/7</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button 
                size="xl" 
                className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 hover:from-purple-600 hover:via-blue-600 hover:to-cyan-600 text-white font-bold text-lg px-12 py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Zap className="w-6 h-6 mr-2" />
                GET YOUR AI AGENT NOW
              </Button>
              <Button 
                size="xl" 
                variant="outline" 
                className="border-2 border-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-bold text-lg px-12 py-6 rounded-full hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-cyan-400/10"
              >
                <Phone className="w-6 h-6 mr-2 text-cyan-400" />
                HEAR IT IN ACTION
              </Button>
            </div>

            {/* Massive Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-cyan-400/20 backdrop-blur-md border border-purple-300/30 rounded-2xl p-8">
                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2">95%</div>
                <p className="text-gray-300 font-semibold text-lg">Calls Answered</p>
                <p className="text-gray-400 text-sm">vs. 60% with humans only</p>
              </div>
              <div className="bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-purple-500/20 backdrop-blur-md border border-cyan-300/30 rounded-2xl p-8">
                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-500 mb-2">3X</div>
                <p className="text-gray-300 font-semibold text-lg">More Bookings</p>
                <p className="text-gray-400 text-sm">Instant responses convert</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500/20 via-cyan-400/20 to-blue-500/20 backdrop-blur-md border border-purple-300/30 rounded-2xl p-8">
                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-2">24/7</div>
                <p className="text-gray-300 font-semibold text-lg">Always Available</p>
                <p className="text-gray-400 text-sm">Even when you sleep</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Agitation */}
      <section className="relative z-10 py-24 bg-gradient-to-r from-red-900/20 via-red-800/20 to-orange-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 mb-8">
              EVERY MISSED CALL = MONEY LOST
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
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
              <div key={index} className="bg-gradient-to-br from-red-500/20 via-orange-500/20 to-yellow-500/20 backdrop-blur-md border border-red-300/30 rounded-xl p-6 text-center">
                <item.icon className="w-12 h-12 text-red-400 mx-auto mb-4" />
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 mb-2">
                  {item.stat}
                </div>
                <p className="text-gray-300 font-medium">{item.problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 mb-8">
              THE AI SOLUTION THAT CHANGES EVERYTHING
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
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
                      ? 'bg-gradient-to-r from-purple-500 to-cyan-500 scale-110' 
                      : 'bg-gradient-to-r from-purple-500/20 to-cyan-500/20'
                  }`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-cyan-400/20 backdrop-blur-md border border-purple-300/30 rounded-3xl p-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 font-semibold">LIVE CALL IN PROGRESS</span>
                  </div>
                  <div className="bg-black/40 rounded-xl p-6">
                    <p className="text-gray-300 mb-4">
                      <strong className="text-cyan-400">"Hi, thanks for calling [Your Business]. I'm Sarah, how can I help you today?"</strong>
                    </p>
                    <p className="text-gray-400 mb-4">
                      "Hi, I need to schedule a service call for my HVAC system..."
                    </p>
                    <p className="text-gray-300 mb-4">
                      <strong className="text-cyan-400">"Of course! I can get that scheduled right now. What's the best day for you this week?"</strong>
                    </p>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
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
      <section className="relative z-10 py-24 bg-gradient-to-r from-green-900/20 via-blue-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 mb-8">
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
              <div key={index} className="bg-gradient-to-br from-green-500/20 via-blue-500/20 to-purple-500/20 backdrop-blur-md border border-green-300/30 rounded-2xl p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">{story.business}</h3>
                  <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 mb-4">
                    {story.result}
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">{story.detail}</p>
                  <div className="text-sm text-gray-400">Results in {story.timeframe}</div>
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
            <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 mb-8">
              GET YOUR AI AGENT TODAY
            </h2>
            <p className="text-2xl text-gray-300">
              Stop losing money to missed calls. Start capturing every opportunity.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-cyan-400/20 backdrop-blur-md border-2 border-purple-300/30 rounded-3xl p-12">
            <div className="text-center mb-8">
              <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-4">
                $2,997
              </div>
              <p className="text-2xl text-gray-300 mb-2">Complete Setup + First Month</p>
              <p className="text-lg text-gray-400">Then $497/month (cancellable anytime)</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
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
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="space-y-4">
                <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  ROI Guarantee:
                </h4>
                <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-md border border-green-300/30 rounded-xl p-6">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    If your AI agent doesn't capture at least <strong className="text-green-400">10 additional appointments</strong> in the first 60 days, we'll refund your entire setup fee.
                  </p>
                </div>
                <div className="text-center pt-4">
                  <div className="text-sm text-gray-400 mb-2">Average ROI:</div>
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                    500%+ in first year
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button 
                size="xl"
                className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 hover:from-purple-600 hover:via-blue-600 hover:to-cyan-600 text-white font-black text-2xl px-16 py-8 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 mb-4"
              >
                <Zap className="w-8 h-8 mr-3" />
                START CAPTURING EVERY CALL
              </Button>
              <p className="text-gray-400">Setup completed in 48 hours or less</p>
            </div>
          </div>
        </div>
      </section>

      {/* Urgent CTA */}
      <section className="relative z-10 py-24 bg-gradient-to-r from-red-900/30 via-orange-900/30 to-yellow-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 mb-8">
            STOP LOSING CUSTOMERS TO COMPETITORS
          </h2>
          <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Every day you wait is money left on the table. While you're thinking, your competitors are installing AI agents and stealing your calls.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="xl"
              className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 hover:from-red-600 hover:via-orange-600 hover:to-yellow-600 text-white font-black text-xl px-12 py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <ArrowRight className="w-6 h-6 mr-2" />
              CLAIM YOUR AI AGENT NOW
            </Button>
            <Button 
              size="xl" 
              variant="outline" 
              className="border-2 border-white text-white font-bold text-xl px-12 py-6 rounded-full hover:bg-white hover:text-black"
            >
              <Phone className="w-6 h-6 mr-2" />
              CALL {BRAND.phone}
            </Button>
          </div>
          
          <div className="mt-8 text-gray-400">
            <p className="text-lg">Limited spots available • LA businesses only • 48-hour setup</p>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}