import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CaseStudies from '@/components/sections/CaseStudies';
import { BRAND } from '@/config/branding';

export const metadata: Metadata = {
  title: `Case Studies | Real AI Automation Results for LA Businesses | ${BRAND.name}`,
  description: "See how Los Angeles businesses achieved 400-650% ROI with our AI automation solutions. Real results from dental practices, real estate firms, and home services companies.",
  keywords: [
    "AI automation case studies Los Angeles",
    "LA business automation success stories",
    "AI implementation results California",
    "automation ROI case studies",
    "Los Angeles AI consultant results",
    "business automation before and after",
    "AI voice agent case studies LA",
    "automation success stories Vernon CA",
    "LA business transformation AI",
    "automation consultant testimonials"
  ].join(", "),
  alternates: {
    canonical: `https://${BRAND.domain}/case-studies`,
  },
};

// JSON-LD for Case Studies Page
const caseStudiesJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `https://${BRAND.domain}/case-studies#page`,
  "name": "AI Automation Case Studies - Los Angeles",
  "description": "Real results from LA businesses using AI automation",
  "provider": {
    "@type": "LocalBusiness",
    "name": BRAND.name,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": BRAND.address.street,
      "addressLocality": BRAND.address.city,
      "addressRegion": BRAND.address.state,
      "postalCode": BRAND.address.zip
    }
  },
  "mainEntity": [
    {
      "@type": "CaseStudy",
      "name": "Beverly Hills Dental Practice - 92% Reduction in Missed Calls",
      "description": "AI voice agent implementation resulting in $16K monthly revenue increase",
      "result": "650% ROI in 6 months"
    },
    {
      "@type": "CaseStudy", 
      "name": "DTLA Real Estate - 217% Increase in Qualified Leads",
      "description": "Automated lead nurturing system boosting agent productivity 133%",
      "result": "420% ROI in 4 months"
    },
    {
      "@type": "CaseStudy",
      "name": "San Fernando Valley HVAC - 420% Emergency Call Conversion",
      "description": "24/7 AI dispatcher scaling emergency response operations",
      "result": "580% ROI in 5 months"
    }
  ]
};

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudiesJsonLd) }}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-8 bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Proven Results from
              <span className="block gradient-text-white">Real LA Businesses</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto">
              Don't just take our word for it. See the measurable impact our AI automation 
              solutions have had on businesses across Los Angeles County.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6">
                <div className="text-3xl font-bold text-white mb-2">400-650%</div>
                <div className="text-white/80">Average ROI</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6">
                <div className="text-3xl font-bold text-white mb-2">2-4 Weeks</div>
                <div className="text-white/80">Implementation Time</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6">
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-white/80">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Component */}
      <CaseStudies />
      
      {/* Additional Value Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why LA Businesses Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Local expertise, proven methodologies, and a track record of delivering 
              measurable results for businesses throughout Los Angeles County.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">LA</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Local Market Expertise</h3>
              <p className="text-gray-600">
                Deep understanding of LA business challenges, from bilingual requirements 
                to industry-specific regulations and seasonal patterns.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-brand-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Rapid Implementation</h3>
              <p className="text-gray-600">
                Quick wins in 2-3 weeks, full transformation in 4-8 weeks. 
                No lengthy consulting phases - we deliver results fast.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Measurable ROI</h3>
              <p className="text-gray-600">
                Every project includes clear KPIs and performance guarantees. 
                We track and report on real business impact.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}