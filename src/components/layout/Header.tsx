'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { BRAND } from '@/config/branding';
import Button from '@/components/ui/Button';
import { useContactPopup } from '@/contexts/ContactPopupContext';
import { Menu, X, Phone, MapPin, ChevronDown } from 'lucide-react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openPopup } = useContactPopup();

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#0B0C0F]/95 backdrop-blur-lg border-b border-gray-800/50' : 'bg-transparent'
    }`}>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
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
                <h1 className="text-lg font-bold whitespace-nowrap text-white">
                  AI AUTOMATION LA
                </h1>
                <p className="text-xs text-white/80">
                  Done-For-You Automation
                </p>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              item.dropdown ? (
                <DropdownMenu.Root key={item.name}>
                  <DropdownMenu.Trigger asChild>
                    <button className="flex items-center text-sm font-medium transition-colors duration-200 hover:text-[#10B981] text-white focus:outline-none focus:text-[#10B981] data-[state=open]:text-[#10B981]">
                      {item.name}
                      <ChevronDown className="w-4 h-4 ml-1 transition-transform data-[state=open]:rotate-180" />
                    </button>
                  </DropdownMenu.Trigger>
                  
                  <DropdownMenu.Portal>
                    <DropdownMenu.Content
                      className="min-w-[180px] bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50 will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
                      sideOffset={8}
                    >
                      {item.dropdown.map((dropdownItem) => (
                        <DropdownMenu.Item key={dropdownItem.name} asChild>
                          <Link
                            href={dropdownItem.href}
                            className="block px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#10B981] focus:bg-gray-50 focus:text-[#10B981] focus:outline-none transition-colors cursor-pointer"
                          >
                            {dropdownItem.name}
                          </Link>
                        </DropdownMenu.Item>
                      ))}
                    </DropdownMenu.Content>
                  </DropdownMenu.Portal>
                </DropdownMenu.Root>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium transition-colors duration-200 hover:text-[#10B981] text-white"
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Button 
              size="md" 
              onClick={openPopup}
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
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
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
                <Button 
                  fullWidth 
                  size="lg" 
                  onClick={() => {
                    openPopup();
                    setIsMobileMenuOpen(false);
                  }}
                  className="bg-[#10B981] hover:bg-[#059669] text-white"
                >
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