import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { BRAND } from '@/config/branding';
import { 
  Users, 
  MapPin, 
  Phone, 
  Mail,
  CheckCircle,
  Star,
  Award,
  Clock,
  Target,
  Zap,
  ArrowRight
} from 'lucide-react';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: `About Us | Meet the LA AI Automation Team | ${BRAND.name}`,
  description: "Meet the AI automation experts serving Los Angeles businesses. Local team in Vernon, CA with deep LA market knowledge and proven track record of business transformation.",
  keywords: [
    "AI automation team Los Angeles",
    "LA business automation experts",
    "Vernon CA AI consultants",
    "Los Angeles automation company",
    "AI experts near me",
    "business automation consultants LA",
    "local AI automation team"
  ].join(", "),
  alternates: {
    canonical: `https://${BRAND.domain}/about`,
  },
};

// JSON-LD for About Page
const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `https://${BRAND.domain}/about#page`,
  "mainEntity": {
    "@type": "LocalBusiness",
    "name": BRAND.name,
    "description": "AI automation experts serving Los Angeles businesses with done-for-you automation solutions",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": BRAND.address.street,
      "addressLocality": BRAND.address.city,
      "addressRegion": BRAND.address.state,
      "postalCode": BRAND.address.zip
    },
    "founder": {
      "@type": "Person",
      "name": "AI Automation LA Team",
      "jobTitle": "AI Automation Specialists"
    },
    "foundingDate": "2024",
    "numberOfEmployees": "5-10",
    "areaServed": "Los Angeles County, California"
  }
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-6 py-3 mb-8">
              <Users className="w-5 h-5 mr-2" />
              Your Local LA AI Automation Experts
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Meet Your
              <span className="block gradient-text-white">AI Automation Team</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto">
              We're a dedicated team of AI automation specialists based in Vernon, CA, 
              serving Los Angeles businesses with <strong>done-for-you automation solutions</strong> 
              that actually work.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why We Started AI Automation LA
              </h2>
              <div className="space-y-6 text-gray-700 text-lg">
                <p>
                  We saw too many LA business owners drowning in busywork—missing calls, 
                  juggling manual processes, and losing potential customers to competitors 
                  who were faster to respond.
                </p>
                <p>
                  The AI revolution was happening, but small businesses were being left behind. 
                  Complex setups, expensive consultants, and technical jargon created barriers 
                  that seemed impossible to overcome.
                </p>
                <p>
                  <strong>So we decided to change that.</strong> We created a completely 
                  done-for-you service where business owners get all the benefits of AI 
                  automation without any of the headaches.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="space-y-6">
                <div className="flex items-center">
                  <Award className="w-8 h-8 text-brand-primary mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">100+ Businesses Automated</h3>
                    <p className="text-gray-600">Across every major LA industry</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Star className="w-8 h-8 text-yellow-500 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">5.0 Star Rating</h3>
                    <p className="text-gray-600">From satisfied LA business owners</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="w-8 h-8 text-green-500 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">2-3 Week Implementation</h3>
                    <p className="text-gray-600">From consultation to live automation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Done-For-You Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don't just consult—we build, deploy, and manage your entire automation system 
              so you can focus on growing your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-n8n-bg-secondary rounded-lg p-8 shadow-lg">
              <div className="w-12 h-12 bg-brand-primary rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">We Listen First</h3>
              <p className="text-gray-600">
                Every LA business is unique. We spend time understanding your specific 
                challenges, workflows, and goals before building anything.
              </p>
            </div>
            
            <div className="bg-n8n-bg-secondary rounded-lg p-8 shadow-lg">
              <div className="w-12 h-12 bg-brand-secondary rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">We Build Everything</h3>
              <p className="text-gray-600">
                Our team handles all the technical work. AI training, system integrations, 
                testing—you don't lift a finger during implementation.
              </p>
            </div>
            
            <div className="bg-n8n-bg-secondary rounded-lg p-8 shadow-lg">
              <div className="w-12 h-12 bg-brand-accent rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">We Manage It All</h3>
              <p className="text-gray-600">
                Ongoing monitoring, updates, and improvements. Your automation keeps 
                getting better while you focus on serving customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local LA Focus */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Deep Los Angeles Market Knowledge
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the unique challenges of running a business in LA—from bilingual 
              customer bases to industry-specific regulations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Bilingual Support",
                description: "AI that speaks English and Spanish fluently for LA's diverse market",
                icon: <Users className="w-8 h-8" />
              },
              {
                title: "Industry Expertise", 
                description: "Deep knowledge of dental, real estate, home services, and more",
                icon: <Award className="w-8 h-8" />
              },
              {
                title: "Local Compliance",
                description: "Understanding of California business regulations and requirements",
                icon: <CheckCircle className="w-8 h-8" />
              },
              {
                title: "On-Site Visits",
                description: "Available for in-person meetings throughout LA County",
                icon: <MapPin className="w-8 h-8" />
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-primary">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-gray-600">
              Let's discuss how AI automation can transform your LA business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-n8n-bg-secondary rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
              <a 
                href={`tel:${BRAND.phone}`}
                className="text-brand-primary hover:text-brand-secondary font-medium text-lg"
              >
                {BRAND.phone}
              </a>
              <p className="text-gray-600 text-sm mt-1">Mon-Fri 9am-6pm PST</p>
            </div>
            
            <div className="bg-n8n-bg-secondary rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-brand-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
              <a 
                href={`mailto:${BRAND.email}`}
                className="text-brand-primary hover:text-brand-secondary font-medium"
              >
                {BRAND.email}
              </a>
              <p className="text-gray-600 text-sm mt-1">24-hour response</p>
            </div>
            
            <div className="bg-n8n-bg-secondary rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-700 font-medium">Vernon, CA</p>
              <p className="text-gray-600 text-sm mt-1">Serving all LA County</p>
            </div>
          </div>
          
          <div className="text-center">
            <Button size="xl" className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent text-white font-bold">
              <ArrowRight className="w-6 h-6 mr-2" />
              Get Your Free AI Plan
            </Button>
            <p className="text-gray-600 text-sm mt-4">
              Free consultation • Custom automation roadmap • No obligation
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}