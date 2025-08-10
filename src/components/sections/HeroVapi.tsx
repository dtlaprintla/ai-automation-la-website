'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, AlignCenter, Loader } from 'lucide-react';

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

  // Equalizer colors from the spec
  const eqColors = [
    '#FFE66D', '#FFD166', '#FFAF87', '#F5A6C7', 
    '#D7B6FF', '#B1E0FF', '#7ED7E5', '#5BD6C7', 
    '#91E677', '#FFFFFF'
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
              for developers
            </h1>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link href="/contact">
                <button className="bg-[#52EDBC] hover:bg-[#3EE5B3] text-black px-8 py-3 rounded-full font-bold transition-colors duration-200 flex items-center uppercase tracking-wide">
                  SIGN UP
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </Link>
              <Link href="/docs">
                <button className="border border-[#2A2B31] bg-[#0E0F12] hover:border-[#52EDBC] text-[#F3F1E8] px-8 py-3 rounded-full font-medium transition-all duration-200 flex items-center uppercase tracking-wide">
                  READ THE DOCS
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

          {/* Animated Equalizer Visualization */}
          <div className="flex justify-center mb-20 py-12">
            <div className="flex items-end justify-center gap-[2px] h-48 w-full max-w-6xl">
              {Array.from({ length: 120 }, (_, i) => {
                // Ultra-bright neon colors
                const colors = [
                  '#FFFF00', // pure yellow
                  '#FF6600', // bright orange
                  '#FF3366', // hot pink
                  '#FF0099', // magenta
                  '#9933FF', // electric purple
                  '#3366FF', // electric blue
                  '#00FFFF', // pure cyan
                  '#00FF66', // bright green
                  '#66FF00', // lime green
                  '#FFFFFF'  // pure white
                ];
                const color = colors[i % colors.length];
                const baseHeight = 12;
                const maxHeight = 80 + (Math.random() * 120);
                const animationDelay = i * 0.02;
                
                return (
                  <motion.div
                    key={i}
                    className="rounded-full flex-shrink-0"
                    style={{ 
                      backgroundColor: color,
                      width: '6px',
                      height: `${baseHeight}px`,
                      boxShadow: `0 0 20px ${color}, 0 0 40px ${color}80, 0 0 60px ${color}40`,
                      filter: `brightness(1.2) saturate(1.5)`
                    }}
                    animate={{
                      height: [
                        `${baseHeight}px`, 
                        `${maxHeight}px`, 
                        `${baseHeight + 30}px`, 
                        `${maxHeight * 0.8}px`,
                        `${baseHeight}px`
                      ]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: animationDelay,
                      ease: "easeInOut"
                    }}
                  />
                );
              })}
            </div>
          </div>

          {/* Partner Logo Strip */}
          <div className="bg-[#0E0F12] border border-[#17181F] rounded-lg py-8">
            <div className="flex justify-center items-center gap-16 flex-wrap">
              {clientLogos.map((client, index) => (
                <div 
                  key={index} 
                  className="text-[#A3A09A] text-sm font-medium tracking-wider opacity-60 hover:opacity-100 transition-opacity"
                >
                  {client.logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}