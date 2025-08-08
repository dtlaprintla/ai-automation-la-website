import Link from 'next/link';
import Header from '@/components/layout/Header';
import Button from '@/components/ui/Button';
import { Home, Search, Phone, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Header />
      
      {/* Animated Background */}
      <div className="absolute inset-0 animated-bg opacity-30"></div>
      
      {/* 404 Content */}
      <section className="pt-32 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Large 404 */}
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-bold gradient-text mb-4">
              404
            </h1>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>
          
          {/* Error Message */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Oops! Page Not Found
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Looks like this page got lost in the automation! Don't worry - 
              our AI automation services are still working perfectly. 
              Let's get you back on track.
            </p>
          </div>
          
          {/* Quick Actions */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <Link href="/">
              <div className="bg-n8n-bg-secondary/10 backdrop-blur-md border border-white/20 rounded-lg p-6 hover:bg-white/20 transition-all duration-300 card-hover cursor-pointer">
                <Home className="w-8 h-8 text-brand-accent mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Home</h3>
                <p className="text-gray-300 text-sm">Back to homepage</p>
              </div>
            </Link>
            
            <Link href="/services">
              <div className="bg-n8n-bg-secondary/10 backdrop-blur-md border border-white/20 rounded-lg p-6 hover:bg-white/20 transition-all duration-300 card-hover cursor-pointer">
                <Search className="w-8 h-8 text-brand-accent mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Services</h3>
                <p className="text-gray-300 text-sm">Browse our AI automation services</p>
              </div>
            </Link>
            
            <Link href="/integrations">
              <div className="bg-n8n-bg-secondary/10 backdrop-blur-md border border-white/20 rounded-lg p-6 hover:bg-white/20 transition-all duration-300 card-hover cursor-pointer">
                <Search className="w-8 h-8 text-brand-accent mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Integrations</h3>
                <p className="text-gray-300 text-sm">See app connections</p>
              </div>
            </Link>
            
            <Link href="/contact">
              <div className="bg-n8n-bg-secondary/10 backdrop-blur-md border border-white/20 rounded-lg p-6 hover:bg-white/20 transition-all duration-300 card-hover cursor-pointer">
                <Phone className="w-8 h-8 text-brand-accent mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Contact</h3>
                <p className="text-gray-300 text-sm">Get help from our team</p>
              </div>
            </Link>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/">
              <Button size="lg" variant="primary" leftIcon={<ArrowLeft className="w-5 h-5" />}>
                Go Back Home
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="secondary">
                Browse Services
              </Button>
            </Link>
          </div>
          
          {/* Help Text */}
          <div className="bg-n8n-bg-secondary/10 backdrop-blur-md border border-white/20 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-white font-semibold mb-3">
              Looking for something specific?
            </h3>
            <p className="text-gray-300 mb-4">
              Our AI automation experts are here to help. Give us a call and we'll 
              guide you to exactly what you need.
            </p>
            <div className="flex items-center justify-center space-x-4 text-brand-accent font-medium">
              <Phone className="w-5 h-5" />
              <span>(323) 555-0123</span>
            </div>
          </div>
          
          {/* Popular Pages */}
          <div className="mt-16">
            <h3 className="text-xl font-semibold text-white mb-6">
              Popular Pages
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/services/customer-support" className="text-brand-accent hover:text-white transition-colors">
                AI Customer Support
              </Link>
              <Link href="/services/voice-agents" className="text-brand-accent hover:text-white transition-colors">
                Voice Agents
              </Link>
              <Link href="/services/chatbots" className="text-brand-accent hover:text-white transition-colors">
                AI Chatbots
              </Link>
              <Link href="/services/workflows" className="text-brand-accent hover:text-white transition-colors">
                Workflow Automation
              </Link>
              <Link href="/services/real-estate" className="text-brand-accent hover:text-white transition-colors">
                Real Estate AI
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Floating Elements for Visual Interest */}
      <div className="absolute top-32 left-10 w-20 h-20 bg-brand-primary/20 rounded-full blur-xl animate-float delay-100"></div>
      <div className="absolute bottom-32 right-10 w-32 h-32 bg-brand-accent/20 rounded-full blur-xl animate-float delay-300"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-brand-secondary/20 rounded-full blur-xl animate-float delay-500"></div>
    </main>
  );
}