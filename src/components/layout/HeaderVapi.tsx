'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Mail, X } from 'lucide-react';

export default function HeaderVapi() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNewsletter, setShowNewsletter] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Newsletter Banner */}
      {showNewsletter && (
        <div className="bg-[#0B0C0F] border-b border-[#17181F] px-4 py-2">
          <div className="max-w-7xl mx-auto flex items-center justify-center">
            <div className="flex items-center gap-2 text-[#A3A09A] text-sm">
              <Mail className="w-4 h-4" />
              <span>Subscribe to AI Automation LA's newsletter and stay ahead of all the new developments in the Voice AI space.</span>
              <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
            </div>
            <button 
              onClick={() => setShowNewsletter(false)}
              className="ml-4 text-[#A3A09A] hover:text-[#F3F1E8] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Main Header */}
      <header className="relative bg-[#0B0C0F] border-b border-[#17181F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#52EDBC] rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-lg">AI</span>
                </div>
                <span className="text-[#F3F1E8] text-lg font-bold tracking-tight whitespace-nowrap">AI AUTOMATION LA</span>
              </div>
            </Link>

            {/* Centered Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/workflows" className="text-[#A3A09A] hover:text-[#F3F1E8] text-sm font-medium transition-colors">
                WORKFLOWS
              </Link>
              <Link href="/use-cases" className="text-[#A3A09A] hover:text-[#F3F1E8] text-sm font-medium transition-colors">
                USE CASES
              </Link>
              <Link href="/pricing" className="text-[#A3A09A] hover:text-[#F3F1E8] text-sm font-medium transition-colors">
                PRICING
              </Link>
              <Link href="/docs" className="text-[#A3A09A] hover:text-[#F3F1E8] text-sm font-medium transition-colors">
                DOCS
              </Link>
              <div className="relative group">
                <button className="text-[#A3A09A] hover:text-[#F3F1E8] text-sm font-medium transition-colors flex items-center">
                  RESOURCES
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
              </div>
              <Link href="/careers" className="text-[#A3A09A] hover:text-[#F3F1E8] text-sm font-medium transition-colors">
                CAREERS
              </Link>
            </nav>

            {/* CTA Button */}
            <div>
              <Link href="/dashboard">
                <button className="bg-[#52EDBC] hover:bg-[#3EE5B3] text-black px-6 py-2 rounded-full text-sm font-bold transition-colors duration-200 uppercase tracking-wide">
                  OPEN DASHBOARD
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}