'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export default function HeaderVapi() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#0E0E13]/80 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-[#10B981] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">AI</span>
              </div>
              <span className="text-white text-lg font-bold tracking-tight whitespace-nowrap">AI AUTOMATION LA</span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/services" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">
              SERVICES
            </Link>
            <Link href="/industries" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">
              INDUSTRIES
            </Link>
            <Link href="/pricing" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">
              PRICING
            </Link>
            <Link href="/case-studies" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">
              CASE STUDIES
            </Link>
            <div className="relative group">
              <button className="text-gray-300 hover:text-white text-sm font-medium transition-colors flex items-center">
                RESOURCES
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
            </div>
            <Link href="/contact" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">
              CONTACT
            </Link>
          </nav>

          {/* CTA Button */}
          <div>
            <Link href="/contact">
              <button className="bg-[#10B981] hover:bg-[#059669] text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                GET STARTED
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Newsletter Banner */}
      {!isScrolled && (
        <div className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center items-center py-2 text-sm">
              <span className="text-gray-300">
                🚀 Transform your business with AI automation. Book a free consultation to see how we can help.
              </span>
              <button className="ml-2 text-[#10B981] hover:text-[#059669] font-medium">
                →
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}