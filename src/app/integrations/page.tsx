import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { BRAND } from '@/config/branding';
import { Zap, CheckCircle, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: `App Integrations | ${BRAND.name}`,
  description: "We connect your favorite business apps with AI automation. Salesforce, HubSpot, Gmail, Slack, QuickBooks and 100+ more. All done-for-you.",
  keywords: "business app integrations, Salesforce automation, HubSpot integration, CRM automation, done for you integrations Los Angeles"
};

const categories = [
  {
    name: "Customer Management (CRM)",
    description: "We connect your customer data so AI can provide personalized service",
    apps: [
      { name: "Salesforce", description: "Automatically update leads and opportunities", logo: "salesforce.svg" },
      { name: "HubSpot", description: "Sync contacts and track interactions", logo: "hubspot.svg" }, 
      { name: "Pipedrive", description: "Manage your sales pipeline automatically", logo: "pipedrive.svg" },
      { name: "Zoho CRM", description: "Keep customer data always up-to-date", logo: "zoho.svg" },
      { name: "Microsoft Dynamics", description: "Enterprise customer management", logo: "microsoft.svg" },
      { name: "Copper", description: "Simple CRM that works with Google", logo: "copper.svg" }
    ]
  },
  {
    name: "Communication Tools", 
    description: "Connect your phone, email, and chat tools for seamless customer communication",
    apps: [
      { name: "Gmail", description: "Smart email automation and responses", logo: "gmail.svg" },
      { name: "Outlook", description: "Microsoft email integration", logo: "outlook.svg" },
      { name: "Slack", description: "Team notifications and updates", logo: "slack.svg" },
      { name: "Microsoft Teams", description: "Enterprise communication", logo: "teams.svg" },
      { name: "Zoom", description: "Automatic meeting scheduling", logo: "zoom.svg" },
      { name: "Calendly", description: "Smart appointment booking", logo: "calendly.svg" }
    ]
  },
  {
    name: "Accounting & Finance",
    description: "Automate your money management and financial reporting", 
    apps: [
      { name: "QuickBooks", description: "Automatic invoice and payment tracking", logo: "quickbooks.svg" },
      { name: "Xero", description: "Cloud accounting automation", logo: "xero.svg" },
      { name: "FreshBooks", description: "Time tracking and billing automation", logo: "freshbooks.svg" },
      { name: "Wave", description: "Free accounting with AI enhancements", logo: "wave.svg" },
      { name: "Stripe", description: "Payment processing automation", logo: "stripe.svg" },
      { name: "PayPal", description: "Transaction tracking and reporting", logo: "paypal.svg" }
    ]
  },
  {
    name: "E-commerce & Sales",
    description: "Connect your online store for automated order processing and customer service",
    apps: [
      { name: "Shopify", description: "Complete e-commerce automation", logo: "shopify.svg" },
      { name: "WooCommerce", description: "WordPress store integration", logo: "woocommerce.svg" }, 
      { name: "Square", description: "Point-of-sale and inventory management", logo: "square.svg" },
      { name: "BigCommerce", description: "Enterprise e-commerce platform", logo: "bigcommerce.svg" },
      { name: "Etsy", description: "Handmade and vintage marketplace", logo: "etsy.svg" },
      { name: "Amazon", description: "Marketplace management automation", logo: "amazon.svg" }
    ]
  },
  {
    name: "Marketing & Social Media",
    description: "Automate your marketing campaigns and social media presence",
    apps: [
      { name: "Mailchimp", description: "Email marketing automation", logo: "mailchimp.svg" },
      { name: "Constant Contact", description: "Email and social media marketing", logo: "constant-contact.svg" },
      { name: "Facebook", description: "Social media management and ads", logo: "facebook.svg" },
      { name: "Instagram", description: "Content posting and engagement", logo: "instagram.svg" },
      { name: "LinkedIn", description: "Professional networking automation", logo: "linkedin.svg" },
      { name: "Google Ads", description: "Automated advertising optimization", logo: "google-ads.svg" }
    ]
  },
  {
    name: "Project Management",
    description: "Keep your team organized with automated task and project tracking",
    apps: [
      { name: "Asana", description: "Task management and team collaboration", logo: "asana.svg" },
      { name: "Trello", description: "Simple project boards with AI updates", logo: "trello.svg" },
      { name: "Monday.com", description: "Work management platform", logo: "monday.svg" },
      { name: "ClickUp", description: "All-in-one productivity suite", logo: "clickup.svg" },
      { name: "Notion", description: "Notes, docs, and project management", logo: "notion.svg" },
      { name: "Airtable", description: "Database and project tracking", logo: "airtable.svg" }
    ]
  }
];

const benefits = [
  {
    title: "No More Manual Data Entry",
    description: "Information flows automatically between your apps. Never copy-paste customer data again."
  },
  {
    title: "Always Stay in Sync", 
    description: "When something updates in one app, it updates everywhere. Your data is always accurate."
  },
  {
    title: "Work Faster Than Ever",
    description: "Automate repetitive tasks so you can focus on growing your business instead of managing apps."
  }
];

export default function IntegrationsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#0E0E13]">
        <div className="absolute inset-0 animated-bg opacity-30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-6 py-3 text-white mb-8">
            <Zap className="w-5 h-5 mr-2" />
            500+ App Integrations Available
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            We Connect All Your
            <span className="block text-[#10B981]">Favorite Business Apps</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            <span className="text-white font-semibold">Completely done-for-you.</span> We connect your CRM, email, accounting, 
            and all other business apps so they work together automatically. No technical knowledge required.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/integrations/advanced">
              <Button size="xl" variant="primary">
                Browse All 500+ Apps
              </Button>
            </Link>
            <Button size="xl" variant="secondary">
              Get Free Integration Plan
            </Button>
          </div>
          
          <div className="bg-n8n-bg-secondary/10 backdrop-blur-md border border-white/20 rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-white font-semibold mb-2">
              ⚡ Average Result:
            </p>
            <p className="text-brand-accent text-xl font-bold">
              Save 20+ hours per week on manual data entry and app switching
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Connect Your Apps?
            </h2>
            <p className="text-xl text-gray-600">
              Stop wasting time jumping between different apps and copying data
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-n8n-bg-secondary p-8 rounded-xl shadow-card text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Categories */}
      <section className="py-20 bg-[#1E1E2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Apps We Connect For You
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We work with 500+ business apps. Here are the most popular categories:
            </p>
            <div className="inline-flex items-center bg-green-500/10 border border-green-500/20 rounded-lg px-6 py-3">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
              <span className="text-green-300 font-medium">Don't see your app? We can probably connect it - just ask!</span>
            </div>
          </div>

          <div className="space-y-16">
            {categories.map((category, index) => (
              <div key={index} className="border-b border-gray-700 pb-16 last:border-b-0 last:pb-0">
                <div className="text-center mb-12">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {category.name}
                  </h3>
                  <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                    {category.description}
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.apps.map((app, appIndex) => (
                    <div key={appIndex} className="bg-[#2A2D3A] border border-[#3A3F4B] rounded-xl p-6 hover:bg-[#2F3441] transition-all duration-300 cursor-pointer group">
                      {/* Logo Container */}
                      <div className="w-16 h-16 bg-[#3A3F4B] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#4A4F5B] transition-colors">
                        {app.logo ? (
                          <Image
                            src={`/logos/${app.logo}`}
                            alt={`${app.name} logo`}
                            width={32}
                            height={32}
                            className="w-8 h-8 object-contain"
                          />
                        ) : (
                          <div className="w-8 h-8 bg-gray-500 rounded-lg flex items-center justify-center">
                            <span className="text-white text-xs font-bold">{app.name.charAt(0)}</span>
                          </div>
                        )}
                      </div>
                      
                      {/* App Name */}
                      <h4 className="text-white font-semibold text-lg mb-2">
                        {app.name}
                      </h4>
                      
                      {/* Description */}
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {app.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Connect Your Apps
            </h2>
            <p className="text-xl text-gray-600">
              Simple process - we handle all the technical complexity
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Tell Us Your Apps",
                description: "List all the business apps you currently use. We'll review which connections will save you the most time."
              },
              {
                step: "2", 
                title: "We Plan Connections",
                description: "Our team creates a custom integration plan showing exactly how your apps will work together."
              },
              {
                step: "3",
                title: "We Build Integrations",
                description: "We connect everything behind the scenes using secure, professional integration methods. Takes 5-10 business days."
              },
              {
                step: "4",
                title: "Everything Flows",
                description: "Your apps start working together automatically. Data flows between them without you touching anything."
              }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-[#10B981] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Example */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real Example: How It Works
            </h2>
            <p className="text-xl text-gray-600">
              See how connecting your apps saves hours of manual work
            </p>
          </div>

          <div className="bg-[#10B981]/10 rounded-xl p-8 border border-[#10B981]/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              When a Customer Fills Out Your Website Form:
            </h3>
            
            <div className="space-y-6">
              {[
                "New lead automatically added to your CRM (Salesforce/HubSpot)",
                "Welcome email sent immediately through your email system", 
                "Slack notification sent to your sales team",
                "Calendar appointment booking link texted to customer",
                "Follow-up sequence started in your marketing automation",
                "Lead information added to your Google Sheet for tracking"
              ].map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-8 h-8 bg-[#10B981] rounded-full flex items-center justify-center text-white text-sm font-bold mr-4 mt-1">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-800 font-medium">{step}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center bg-white rounded-lg p-6 border border-blue-200">
              <p className="text-gray-900 font-bold text-lg mb-2">
                All of this happens automatically in under 30 seconds
              </p>
              <p className="text-gray-600">
                Without integrations, this would take you 15+ minutes of manual work per lead
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#10B981]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Connect Your Apps?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Free consultation to plan your perfect app integration setup. 
            We'll show you exactly how much time you'll save.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" rightIcon={<ArrowRight className="w-5 h-5" />}>
              Get Free Integration Plan
            </Button>
            <Button size="lg" variant="ghost" className="text-white border-white hover:bg-white hover:text-brand-primary">
              Call {BRAND.phone}
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}