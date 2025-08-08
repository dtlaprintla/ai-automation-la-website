import Link from 'next/link';
import { BRAND } from '@/config/branding';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'AI Voice Agents', href: '/services/voice-agents' },
      { name: 'Customer Support', href: '/services/customer-support' },
      { name: 'Workflow Automation', href: '/services/workflows' },
      { name: 'AI Chatbots', href: '/services/chatbots' },
      { name: 'Real Estate AI', href: '/services/real-estate' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Contact', href: '/contact' },
      { name: 'Integrations', href: '/integrations' },
    ],
    industries: [
      { name: 'Dental Practices', href: '/industries/dental' },
      { name: 'Real Estate', href: '/industries/real-estate' },
      { name: 'Restaurants', href: '/industries/restaurants' },
      { name: 'Home Services', href: '/industries/home-services' },
    ],
    serviceAreas: [
      'Vernon, CA',
      'Los Angeles, CA',
      'Downtown LA',
      'Beverly Hills',
      'Santa Monica',
      'Long Beach'
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-brand-primary to-brand-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">AI</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">{BRAND.nameShort}</h3>
                <p className="text-gray-400 text-sm">Done-For-You Automation</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Complete AI automation solutions for Los Angeles businesses. 
              We handle everything so you can focus on growth.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-brand-primary flex-shrink-0" />
                <a 
                  href={`tel:${BRAND.phone}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {BRAND.phone}
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-brand-primary flex-shrink-0" />
                <a 
                  href={`mailto:${BRAND.email}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {BRAND.email}
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-3 text-brand-primary flex-shrink-0" />
                <span className="text-gray-300">Vernon & Los Angeles, CA</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-3">
              {footerLinks.serviceAreas.map((area) => (
                <li key={area}>
                  <span className="text-gray-300 text-sm">{area}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Automate Your Business?
            </h3>
            <p className="text-white/90 mb-6">
              Get a free consultation and see exactly how AI can transform your operations.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center bg-white text-brand-primary font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} {BRAND.name}. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <span className="text-gray-400">Made in Los Angeles 🌴</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}