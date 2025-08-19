'use client';

import { useContent } from '@/hooks/useContent';
import Header from '@/components/layout/Header';
import DancingPills from '@/components/ui/DancingPills';
import Link from 'next/link';
import { ArrowRight, Loader2 } from 'lucide-react';

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
      
      {/* Hero Section with JSON Content */}
      <section className="min-h-screen bg-[#0B0C0F] relative overflow-hidden">
        {/* Dotted Grid Background */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle, #17181F 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }}
        />

        {/* Main Content */}
        <div className="relative z-10 pt-20 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Text - Using JSON Content */}
            <div className="text-center mb-16">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-[#F3F1E8] mb-6 tracking-tight leading-none" style={{ fontFamily: 'ui-rounded, system-ui, sans-serif' }}>
                {content?.hero?.title || 'Voice AI agents'}
              </h1>
              <p className="text-4xl md:text-5xl lg:text-5xl font-light text-[#F3F1E8] mb-12 tracking-tight" style={{ fontFamily: 'ui-rounded, system-ui, sans-serif' }}>
                {content?.hero?.subtitle || 'for LA businesses'}
              </p>
              
              {/* Description */}
              {content?.hero?.description && (
                <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
                  {content.hero.description}
                </p>
              )}
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <Link href={content?.hero?.cta?.primary?.link || '/contact'}>
                  <button className="bg-[#52EDBC] hover:bg-[#3EE5B3] text-black px-8 py-3 rounded-full font-bold transition-colors duration-200 flex items-center uppercase tracking-wide">
                    {content?.hero?.cta?.primary?.text || 'GET STARTED'}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </Link>
                <Link href={content?.hero?.cta?.secondary?.link || '/pricing'}>
                  <button className="border border-[#2A2B31] bg-[#0E0F12] hover:border-[#52EDBC] text-[#F3F1E8] px-8 py-3 rounded-full font-medium transition-all duration-200 flex items-center uppercase tracking-wide">
                    {content?.hero?.cta?.secondary?.text || 'VIEW PRICING'}
                    <div className="flex items-center gap-1 ml-2">
                      <div className="w-1 h-1 bg-[#F3F1E8] rounded-full animate-pulse"></div>
                      <div className="w-1 h-1 bg-[#F3F1E8] rounded-full animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-1 h-1 bg-[#F3F1E8] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </button>
                </Link>
              </div>

              {/* Stats from JSON */}
              {content?.hero?.stats && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
                  {content.hero.stats.map((stat: any, index: number) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-[#52EDBC] mb-2">
                        {stat.value}
                      </div>
                      <div className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Dancing Pills Animation */}
            <div className="flex justify-center items-center">
              <DancingPills />
            </div>
            
            {/* Client Logos */}
            <div className="mt-20">
              <p className="text-center text-gray-500 text-sm uppercase tracking-wider mb-8">TRUSTED BY</p>
              <div className="flex justify-center items-center gap-8 flex-wrap">
                {content?.hero?.clientLogos ? (
                  content.hero.clientLogos.map((client: any, index: number) => (
                    <a
                      key={index}
                      href={client.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-60 hover:opacity-100 transition-opacity duration-200"
                    >
                      <img 
                        src={client.logo} 
                        alt={client.name}
                        className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-200"
                      />
                    </a>
                  ))
                ) : (
                  ['ELLIPSIS', 'NYT', 'intuit', 'Delphi', 'Housecall Pro', 'luma'].map((logo, index) => (
                    <div key={index} className="text-gray-400 font-medium text-sm">
                      {logo}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* API Section - Keep original design, optionally use JSON content for text */}
      <section className="py-20 bg-[#0E0E13]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-2">
            <p className="text-gray-500 text-sm uppercase tracking-wider mb-6">SERVICES</p>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
              {content?.services?.title || 'AI Solutions That Transform Your Business'}
            </h2>
            
            {/* Service subtitle */}
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-16">
              <div className="vapi-cream-text">
                {content?.services?.subtitle || 'From voice agents to workflow automation, we build what you need'}
              </div>
            </div>
          </div>

          {/* Services Grid */}
          {content?.services?.items && (
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {content.services.items.slice(0, 4).map((service: any) => (
                <div key={service.id} className="bg-[#111827] rounded-lg overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-200">
                  {/* Service Image */}
                  {service.image && (
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#52EDBC]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">
                          {service.icon === 'phone' ? '📞' : 
                           service.icon === 'message-square' ? '💬' : 
                           service.icon === 'workflow' ? '⚡' : 
                           service.icon === 'headphones' ? '🎧' : '🤖'}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-medium text-white mb-3">{service.title}</h3>
                        <p className="text-gray-400 mb-4">{service.description}</p>
                        <ul className="space-y-2">
                          {service.features.map((feature: string, idx: number) => (
                            <li key={idx} className="flex items-center text-gray-300">
                              <span className="text-[#52EDBC] mr-2">✓</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Security Badges */}
          {content?.automationSection?.securityBadges && (
            <div className="flex justify-center items-center gap-6 mb-16">
              {content.automationSection.securityBadges.map((badge: any, index: number) => (
                <button
                  key={index}
                  className="bg-gray-800/50 hover:bg-gray-800 border border-gray-700 px-4 py-2 rounded-lg text-sm text-gray-300 flex items-center gap-2 transition-all duration-200"
                >
                  <span>{badge.icon}</span>
                  {badge.name}
                </button>
              ))}
            </div>
          )}

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
                <code>{content?.automationSection?.codeExample?.code || `# npm install @vapi-ai/server-sdk
import { VapiClient } from '@vapi-ai/server-sdk';

const vapi = new VapiClient({
    token: 'YOUR_PRIVATE_API_KEY'
});

async function startCall() {
    const call = await vapi.calls.create({
        phoneNumber: '+1234567890',
        customer: { number: '+0987654321' }
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

      {/* Benefits Section */}
      {content?.benefits && (
        <section className="py-20 bg-[#0B0C0F]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-light text-white text-center mb-16">
              {content.benefits.title}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {content.benefits.items.map((benefit: any, index: number) => (
                <div key={index} className="text-center">
                  <h3 className="text-2xl font-medium text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-400 text-lg">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      {content?.testimonials && (
        <section className="py-20 bg-[#0E0E13]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-light text-white text-center mb-16">
              {content.testimonials.title}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {content.testimonials.items.map((testimonial: any) => (
                <div key={testimonial.id} className="bg-[#111827] rounded-lg p-8 border border-gray-800">
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {testimonial.avatar && (
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                      )}
                      <div>
                        <p className="text-white font-medium">{testimonial.name}</p>
                        <p className="text-gray-500 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-[#52EDBC] font-bold">{testimonial.metrics.improvement}</p>
                      <p className="text-gray-500 text-sm">{testimonial.metrics.timeframe}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Integrations Section */}
      {content?.integrations && (
        <section className="py-20 bg-[#0E0E13]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-gray-500 text-sm uppercase tracking-wider mb-6">{content.integrations.label}</p>
              <h2 className="text-4xl md:text-5xl font-light text-white">
                {content.integrations.title}
                <br />
                {content.integrations.subtitle}
              </h2>
            </div>

            {/* Integration Logos Grid */}
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-4 md:grid-cols-6 gap-8 justify-items-center">
                {content.integrations.logos.map((integration: any, index: number) => (
                  <a
                    key={index}
                    href={integration.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 bg-gray-900/50 rounded-lg flex items-center justify-center hover:bg-gray-800/50 transition-all duration-200 cursor-pointer"
                  >
                    <span className="text-2xl">{integration.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* How It Works Section */}
      {content?.howItWorks && (
        <section className="py-20 bg-[#0E0E13] border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-gray-500 text-sm uppercase tracking-wider mb-6">{content.howItWorks.label}</p>
              <h2 className="text-4xl md:text-5xl font-light text-white">
                {content.howItWorks.title}
                <br />
                {content.howItWorks.subtitle}
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-12 text-center">
              {content.howItWorks.steps.map((step: any, index: number) => (
                <div key={index}>
                  <div className="w-16 h-16 bg-gray-800 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-white text-xl font-light">{step.number}</span>
                  </div>
                  <h3 className="text-xl text-white mb-4">{step.title}</h3>
                  <p className="text-gray-400">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

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