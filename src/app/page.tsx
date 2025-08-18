'use client';

import { useContent } from '@/hooks/useContent';
import Header from '@/components/layout/Header';
import HeroVapi from '@/components/sections/HeroVapi';
import Link from 'next/link';
import { ArrowRight, Loader2 } from 'lucide-react';

// Security badges
const securityBadges = [
  { name: 'TypeScript', icon: '🔷' },
  { name: 'Python', icon: '🐍' },
  { name: 'cURL', icon: '🌊' },
  { name: 'React (web SDK)', icon: '⚛️' }
];

// Integration logos
const integrations = [
  { name: 'Eleven Labs', icon: '🎙️' },
  { name: 'Assembly AI', icon: '🤖' },
  { name: 'Play.ht', icon: '🎵' },
  { name: 'Anthropic', icon: '🧠' },
  { name: 'OpenAI', icon: '🤖' },
  { name: 'Groq', icon: '⚡' },
  { name: 'Together AI', icon: '🤝' },
  { name: 'Deepgram', icon: '🎧' },
  { name: 'Google Cloud', icon: '☁️' },
  { name: 'Microsoft', icon: '🪟' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Notion', icon: '📝' },
  { name: 'Zapier', icon: '⚡' }
];

export default function HomePageVapi() {
  const { data: content, loading, error } = useContent('pages', 'home');

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0B0C0F] flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-[#10B981]" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0C0F] text-[#F3F1E8]">
      <Header />
      <HeroVapi />
      
      {/* API Section - Keep original design, optionally use JSON content for text */}
      <section className="py-20 bg-[#0E0E13]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-2">
            <p className="text-gray-500 text-sm uppercase tracking-wider mb-6">AUTOMATION</p>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
              {content?.services?.title || 'Making business automation'}
              <br />
              {content?.services?.title ? '' : 'simple and accessible.'}
            </h2>
            
            {/* Cream highlight sections like Vapi */}
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
              <div className="vapi-cream-text">
                {content?.benefits?.items?.[1]?.description || 'Teams at LA startups to Fortune 500 companies deploy automation workflows on the AI Automation LA platform.'}
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-16">
              <div className="vapi-cream-text">
                {content?.services?.subtitle || 'The most configurable API to build leading automation products and scale business operations.'}
              </div>
            </div>
          </div>

          {/* Security Badges */}
          <div className="flex justify-center items-center gap-6 mb-16">
            {securityBadges.map((badge, index) => (
              <button
                key={index}
                className="bg-gray-800/50 hover:bg-gray-800 border border-gray-700 px-4 py-2 rounded-lg text-sm text-gray-300 flex items-center gap-2 transition-all duration-200"
              >
                <span>{badge.icon}</span>
                {badge.name}
              </button>
            ))}
          </div>

          {/* Code Example */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#111827] rounded-lg border border-gray-800 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span>View Workflow</span>
                  <span>Export Template</span>
                  <span>API Docs</span>
                  <span>Integration Guide</span>
                  <button className="text-gray-400 hover:text-white">Copy</button>
                </div>
              </div>
              <pre className="p-6 text-sm text-gray-300 overflow-x-auto">
                <code>{`# npm install @vapi-ai/server-sdk
import { VapiClient } from '@vapi-ai/server-sdk';

const vapi = new VapiClient({
    token: 'YOUR_PRIVATE_API_KEY' // Get your private api key from the dashboard
});

async function startCall() {
    const call = await vapi.calls.create({
        phoneNumber: '+1234567890', // Create a free phone number in the dashboard
        customer: { number: '+0987654321' }, // Your customer's phone number
        assistant: {
            model: {
                provider: 'openai',
                model: 'gpt-3.5-turbo',
                messages: [
                    {
                        role: 'system',
                        content: 'You are a helpful AI assistant. Keep your responses concise and friendly.'
                    }
                ]
            }
        }
    });
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section - Keep original design, use JSON testimonials */}
      <section className="py-20 bg-[#0E0E13]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gray-500 text-sm uppercase tracking-wider mb-6">SUCCESS STORIES</p>
              <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
                Real results.
                <br />
                Real ROI.
              </h2>
              
              {/* Case Study Card - Use JSON testimonial if available */}
              <div className="bg-[#111827] rounded-lg p-6 border border-gray-800">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-xl">📞</span>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Lead automation</p>
                    <h3 className="text-white font-medium">
                      <span className="font-bold">AI Automation LA</span> processes 1,000+ leads daily.
                    </h3>
                    <p className="text-white">
                      <span className="font-bold">{content?.testimonials?.items?.[1]?.role || 'Local Restaurant Chain'}</span> saves $50K
                      <br />
                      monthly in manual work.
                    </p>
                  </div>
                </div>
                
                <Link href="/case-studies">
                  <button className="border border-gray-700 hover:border-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center gap-2">
                    CASE STUDY
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
                
                <p className="text-gray-500 text-sm mt-4">
                  {content?.testimonials?.items?.[1]?.content?.substring(0, 100) || 'We needed a solution that could integrate'}
                  <br />
                  {content?.testimonials?.items?.[1]?.content ? '...' : 'with our existing systems — AI Automation'}
                  <br />
                  {content?.testimonials?.items?.[1]?.content ? '' : 'LA\'s flexible approach made this'}
                  <br />
                  {content?.testimonials?.items?.[1]?.content ? '' : 'seamless.'}
                </p>
                
                <div className="flex items-center gap-3 mt-4">
                  <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                  <div>
                    <p className="text-white text-sm font-medium">{content?.testimonials?.items?.[1]?.name || 'Sarah Martinez'}</p>
                    <p className="text-gray-500 text-xs">{content?.testimonials?.items?.[1]?.role || 'CTO, TASTE OF LA'}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="relative">
              <div className="bg-gray-800/30 rounded-3xl p-8">
                <div className="bg-black rounded-3xl p-4 shadow-2xl">
                  <div className="bg-[#10B981] rounded-2xl p-8 text-center">
                    <div className="mb-4">
                      <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-2xl">📞</span>
                      </div>
                      <p className="text-white/80 text-sm mb-2">Receive call</p>
                      <p className="text-white font-bold text-lg">+1-XXX-XXX-1111</p>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="bg-black/20 rounded-lg p-3">
                        <p className="text-white/80 text-sm">✅ Capture lead</p>
                      </div>
                      <div className="bg-black/20 rounded-lg p-3">
                        <p className="text-white text-sm">🤖 AI_qualification_check</p>
                      </div>
                      <div className="bg-black/20 rounded-lg p-3">
                        <p className="text-white/80 text-sm">📧 Auto-follow-up</p>
                        <p className="text-xs text-white/60">QUALIFIED LEAD?</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-[#0E0E13]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gray-500 text-sm uppercase tracking-wider mb-6">INTEGRATIONS</p>
            <h2 className="text-4xl md:text-5xl font-light text-white">
              Integrate with more
              <br />
              than {content?.hero?.stats?.[3]?.value || '40+'}+ apps in a snap.
            </h2>
          </div>

          {/* Integration Logos Grid */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-4 md:grid-cols-6 gap-8 justify-items-center">
              {integrations.map((integration, index) => (
                <div
                  key={index}
                  className="w-16 h-16 bg-gray-900/50 rounded-lg flex items-center justify-center hover:bg-gray-800/50 transition-all duration-200 cursor-pointer"
                >
                  <span className="text-2xl">{integration.icon}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-[#0E0E13] border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gray-500 text-sm uppercase tracking-wider mb-6">HOW IT WORKS</p>
            <h2 className="text-4xl md:text-5xl font-light text-white">
              Try in minutes.
              <br />
              Deploy in {content?.hero?.stats?.[1]?.value || 'days'}.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="w-16 h-16 bg-gray-800 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-xl font-light">001</span>
              </div>
              <h3 className="text-xl text-white mb-4">Analyze Process</h3>
              <p className="text-gray-400">
                We identify bottlenecks and
                <br />
                repetitive tasks in your workflow
              </p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-gray-800 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-xl font-light">002</span>
              </div>
              <h3 className="text-xl text-white mb-4">Build Automation</h3>
              <p className="text-gray-400">
                Create custom workflows with
                <br />
                your existing tools and systems
              </p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-gray-800 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-xl font-light">003</span>
              </div>
              <h3 className="text-xl text-white mb-4">Deploy & Optimize</h3>
              <p className="text-gray-400">
                Launch automations and continuously
                <br />
                improve performance with data
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Use JSON CTA content */}
      <section className="py-20 bg-[#0E0E13] border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
            {content?.cta?.title || 'Start automating today.'}
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            {content?.cta?.subtitle || 'Join hundreds of LA businesses saving time with AI automation.'}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={content?.cta?.button?.link || '/contact'}>
              <button className="bg-[#10B981] hover:bg-[#059669] text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                {content?.cta?.button?.text || 'GET FREE CONSULTATION'}
              </button>
            </Link>
            <Link href="/roi-calculator">
              <button className="border border-gray-700 hover:border-gray-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                CALCULATE YOUR ROI
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#0E0E13] border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold text-2xl mb-4">AI AUTOMATION LA</h3>
              <p className="text-gray-400 text-sm">
                Los Angeles' premier
                <br />
                AI automation agency.
              </p>
            </div>
            
            <div>
              <h4 className="text-gray-500 text-sm uppercase tracking-wider mb-4">Services</h4>
              <ul className="space-y-2">
                <li><Link href="/services" className="text-gray-400 hover:text-white text-sm">AI Automation</Link></li>
                <li><Link href="/pricing" className="text-gray-400 hover:text-white text-sm">Pricing</Link></li>
                <li><Link href="/case-studies" className="text-gray-400 hover:text-white text-sm">Case Studies</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-gray-500 text-sm uppercase tracking-wider mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-400 hover:text-white text-sm">About Us</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white text-sm">Contact</Link></li>
                <li><Link href="/blog" className="text-gray-400 hover:text-white text-sm">Blog</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-gray-500 text-sm uppercase tracking-wider mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-gray-400 hover:text-white text-sm">Privacy</Link></li>
                <li><Link href="/terms" className="text-gray-400 hover:text-white text-sm">Terms</Link></li>
                <li><Link href="/security" className="text-gray-400 hover:text-white text-sm">Security</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-500 text-sm">
              © 2024 AI Automation LA. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}