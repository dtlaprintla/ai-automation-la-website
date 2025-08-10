'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { BRAND } from '@/config/branding';
import Button from '@/components/ui/Button';
import { Menu, X, Phone, MapPin, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { 
      name: 'SERVICES', 
      href: '/services',
      dropdown: [
        { name: 'AI Phone Agents', href: '/services/ai-phone-agents' },
        { name: 'AI Chatbots', href: '/services/ai-chatbots' },
        { name: 'Workflow Automation', href: '/services/workflow-automation' },
        { name: 'Custom Solutions', href: '/services/custom' }
      ]
    },
    { 
      name: 'INDUSTRIES', 
      href: '/industries',
      dropdown: [
        { name: 'Dental Practices', href: '/industries/dental' },
        { name: 'Real Estate', href: '/industries/real-estate' },
        { name: 'Home Services', href: '/industries/home-services' },
        { name: 'Restaurants', href: '/industries/restaurants' }
      ]
    },
    { name: 'PRICING', href: '/pricing' },
    { 
      name: 'CASE STUDIES', 
      href: '/case-studies'
    },
    { 
      name: 'RESOURCES', 
      href: '/resources',
      dropdown: [
        { name: 'Integrations', href: '/integrations' },
        { name: 'ROI Calculator', href: '/roi-calculator' },
        { name: 'Blog', href: '/blog' },
        { name: 'About', href: '/about' }
      ]
    },
    { name: 'CONTACT', href: '/contact' }
  ];

  return (
    <header className="relative bg-transparent">

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-8 h-8 bg-[#10B981] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">AI</span>
              </div>
              <div>
                <h1 className={`text-lg font-bold whitespace-nowrap ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}>
                  {BRAND.nameShort}
                </h1>
                <p className={`text-xs ${
                  isScrolled ? 'text-gray-600' : 'text-white/80'
                }`}>
                  Done-For-You Automation
                </p>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              <div 
                key={item.name} 
                className="relative group"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center text-sm font-medium transition-colors duration-200 hover:text-[#10B981] ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  {item.name}
                  {item.dropdown && (
                    <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  )}
                </Link>
                
                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#10B981] transition-colors"
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Button 
              size="md" 
              className="bg-[#10B981] hover:bg-[#059669] text-white border-0 px-6 py-2"
            >
              GET STARTED
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-4 py-6 space-y-3">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <Link
                    href={item.href}
                    className="block text-gray-900 font-medium py-2 text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="pl-4 space-y-1">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block text-gray-600 text-sm py-1 hover:text-[#10B981]"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-4"
              >
                <Button fullWidth size="lg" className="bg-[#10B981] hover:bg-[#059669] text-white">
                  GET STARTED
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}