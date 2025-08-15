'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, AlignCenter, Loader } from 'lucide-react';
import { useState, useEffect } from 'react';
import DancingPills from '@/components/ui/DancingPills';

export default function HeroVapi() {
  // Client logos
  const clientLogos = [
    { name: 'ELLIPSIS HEALTH', logo: 'ELLIPSIS' },
    { name: 'New York Times', logo: 'NYT' },
    { name: 'Intuit', logo: 'intuit' },
    { name: 'Delphi', logo: 'Delphi' },
    { name: 'Housecall Pro', logo: 'Housecall Pro' },
    { name: 'Luma', logo: 'luma' }
  ];

  return (
    <section className="min-h-screen bg-[#0B0C0F] relative overflow-hidden">
      {/* Dotted Grid Background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle, #17181F 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Text - Three Lines */}
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-[#F3F1E8] mb-12 tracking-tight leading-none" style={{ fontFamily: 'ui-rounded, system-ui, sans-serif' }}>
              Voice AI agents
              <br />
              for LA businesses
            </h1>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link href="/contact">
                <button className="bg-[#52EDBC] hover:bg-[#3EE5B3] text-black px-8 py-3 rounded-full font-bold transition-colors duration-200 flex items-center uppercase tracking-wide">
                  GET STARTED
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </Link>
              <Link href="/pricing">
                <button className="border border-[#2A2B31] bg-[#0E0F12] hover:border-[#52EDBC] text-[#F3F1E8] px-8 py-3 rounded-full font-medium transition-all duration-200 flex items-center uppercase tracking-wide">
                  VIEW PRICING
                  <div className="flex items-center gap-1 ml-2">
                    <div className="w-1 h-1 bg-[#F3F1E8] rounded-full animate-pulse"></div>
                    <div className="w-1 h-1 bg-[#F3F1E8] rounded-full animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-1 h-1 bg-[#F3F1E8] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </button>
              </Link>
            </div>

            {/* Large Cream CTA Capsule */}
            <div className="flex justify-center mb-16">
              <button 
                className="bg-[#F2ECDC] hover:bg-[#EFEADB] text-[#0E0F12] px-12 py-6 rounded-full text-lg font-bold transition-all duration-300 flex items-center gap-3 shadow-lg border-2 border-[#0E0F12] hover:transform hover:scale-105"
                style={{ 
                  boxShadow: 'inset 0 2px 4px rgba(14, 15, 18, 0.1), 0 8px 16px rgba(14, 15, 18, 0.2)' 
                }}
              >
                TALK TO AI AUTOMATION LA
                <div className="flex items-center gap-[1px]">
                  <div className="w-[2px] h-4 bg-[#0E0F12] rounded-full"></div>
                  <div className="w-[2px] h-6 bg-[#0E0F12] rounded-full"></div>
                  <div className="w-[2px] h-3 bg-[#0E0F12] rounded-full"></div>
                  <div className="w-[2px] h-5 bg-[#0E0F12] rounded-full"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Dancing Pills - Full Width */}
      <div style={{ backgroundColor: '#1a1a1a', padding: '40px', width: '100%' }}>
        <p style={{ color: 'white', textAlign: 'center', marginBottom: '20px' }}>Dancing Pills Area (Debug)</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '3px' }}>
          {/* Simple static pills for debugging */}
          <div style={{ width: '20px', height: '40px', backgroundColor: '#00E5FF', borderRadius: '10px' }}></div>
          <div style={{ width: '20px', height: '60px', backgroundColor: '#00FF88', borderRadius: '10px' }}></div>
          <div style={{ width: '20px', height: '30px', backgroundColor: '#FFE500', borderRadius: '10px' }}></div>
          <div style={{ width: '20px', height: '50px', backgroundColor: '#FF6B00', borderRadius: '10px' }}></div>
          <div style={{ width: '20px', height: '45px', backgroundColor: '#FF00FF', borderRadius: '10px' }}></div>
        </div>
      </div>

      {/* Resume container for remaining content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Partner Logo Strip */}
          <div className="bg-[#0E0F12] border border-[#17181F] rounded-lg py-12 px-8">
            <div className="flex justify-center items-center gap-20 flex-wrap">
              {clientLogos.map((client, index) => (
                <div 
                  key={index} 
                  className="text-[#A3A09A] text-lg font-semibold tracking-wide opacity-70 hover:opacity-100 transition-opacity"
                  style={{ fontSize: '20px' }}
                >
                  {client.logo}
                </div>
              ))}
            </div>
          </div>
          
          {/* New H2 Section */}
          <div className="text-center mt-24 mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-[#F3F1E8] mb-4">
              Teams at trail-blazing startups to Fortune
              <br />
              500 companies build with AI Automation LA.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}