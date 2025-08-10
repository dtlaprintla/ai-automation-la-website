'use client';

import { ContentProvider, usePageContent } from '@/components/cms/ContentProvider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import { ArrowRight, Loader2, RefreshCw } from 'lucide-react';

// The actual page content component
function CMSDemoContent() {
  const { content, loading, error, refreshContent } = usePageContent();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-[#10B981] mx-auto mb-4" />
          <p className="text-gray-600">Loading content from Sanity CMS...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-2xl text-red-500 mb-4">❌ {error}</h1>
          <p className="text-gray-600 mb-6">Using fallback content instead</p>
          <Button onClick={refreshContent} className="bg-[#10B981]">
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section - Content from Sanity CMS */}
      <section className="pt-32 pb-20 bg-[#0E0E13]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-6 py-3 text-white mb-8">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            Content loaded from Sanity CMS
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {content?.hero?.title || content?.title || 'Welcome to AI Automation LA'}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            {content?.hero?.description || 'Transform your business with AI automation'}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="xl" className="bg-[#10B981] hover:bg-[#059669]">
              Get Started <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="xl" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              Learn More
            </Button>
          </div>

          {content?.lastUpdated && (
            <div className="bg-gray-800/50 rounded-lg p-4 max-w-md mx-auto">
              <p className="text-gray-400 text-sm">
                ✅ Content last updated: {new Date(content.lastUpdated).toLocaleString()}
              </p>
              <Button 
                onClick={refreshContent} 
                size="sm" 
                variant="ghost" 
                className="mt-2 text-gray-300 hover:text-white"
              >
                <RefreshCw className="w-3 h-3 mr-2" />
                Refresh Content
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Content from CMS */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            Live Content from Sanity CMS
          </h2>
          
          {content?.content && (
            <div className="prose max-w-none">
              <pre className="whitespace-pre-wrap bg-gray-50 p-6 rounded-lg text-gray-800">
                {typeof content.content === 'string' ? content.content : JSON.stringify(content.content, null, 2)}
              </pre>
            </div>
          )}

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-8">
            <h3 className="text-green-800 font-semibold mb-2">🎉 How It Works:</h3>
            <ul className="text-green-700 space-y-1 text-sm">
              <li>1. Edit content in your Sanity dashboard</li>
              <li>2. Click "Publish" in Sanity</li>  
              <li>3. This page updates automatically within seconds!</li>
              <li>4. All changes appear instantly on your live website</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// Main page component with ContentProvider wrapper
export default function CMSDemoPage() {
  return (
    <ContentProvider pageSlug="home">
      <CMSDemoContent />
    </ContentProvider>
  );
}