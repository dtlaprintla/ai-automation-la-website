'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, AlignCenter, Loader } from 'lucide-react';
import { useState, useEffect } from 'react';

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

  // Equalizer configuration
  const C = 30; // columns
  const S = 14; // segments per column
  const minS = 3;
  const maxS = 12;
  const palette = [
    '#FFE66D', '#FFD166', '#FFAF87', '#F5A6C7', '#D7B6FF',
    '#B1E0FF', '#7ED7E5', '#5BD6C7', '#91E677', '#FFFFFF'
  ];

  // State for column heights
  const [columnHeights, setColumnHeights] = useState(() => 
    Array.from({ length: C }, (_, i) => {
      const seed = i * 1234 + 5678;
      return minS + ((seed * 9301 + 49297) % 233280) % (maxS - minS + 1);
    })
  );

  // Seeded random function
  const seededRandom = (seed: number): number => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  };

  // Animation logic for each column
  useEffect(() => {
    const animateColumns = () => {
      columnHeights.forEach((currentHeight, columnIndex) => {
        const seed = columnIndex * 1234 + Date.now();
        const delay = columnIndex * 50; // Stagger each column
        
        setTimeout(() => {
          const target = minS + Math.floor(seededRandom(seed) * (maxS - minS + 1));
          
          if (target !== currentHeight) {
            const step = target > currentHeight ? 1 : -1;
            let current = currentHeight;
            
            const tick = () => {
              if (current === target) {
                // Hold for random duration
                const holdTime = 150 + seededRandom(seed + 1000) * 300;
                setTimeout(() => animateColumns(), holdTime);
                return;
              }
              
              current += step;
              setColumnHeights(prev => {
                const newHeights = [...prev];
                newHeights[columnIndex] = current;
                return newHeights;
              });
              
              // Next step
              setTimeout(tick, 60 + seededRandom(seed + current) * 30);
            };
            
            tick();
          }
        }, delay);
      });
    };

    const interval = setInterval(animateColumns, 2000);
    return () => clearInterval(interval);
  }, []);

  // Check for reduced motion preference
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

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

          {/* Animated Equalizer Visualization - Proper Stacked Pills */}
          <div className="flex justify-center mb-16">
            <div 
              className="flex items-end justify-center gap-[3px] pb-8"
              style={{
                filter: 'drop-shadow(0 4px 12px rgba(255, 230, 109, 0.1))',
                paddingBottom: '2rem'
              }}
            >
              {Array.from({ length: C }, (_, columnIndex) => {
                const activeCount = prefersReducedMotion ? columnHeights[0] : columnHeights[columnIndex];
                
                return (
                  <div key={columnIndex} className="flex flex-col-reverse gap-[3px] flex-shrink-0">
                    {Array.from({ length: S }, (_, segmentIndex) => {
                      const color = palette[segmentIndex % palette.length];
                      const isActive = segmentIndex < activeCount;
                      
                      return (
                        <div
                          key={segmentIndex}
                          className="rounded-full flex-shrink-0 transition-all duration-150 ease-out"
                          style={{ 
                            backgroundColor: color,
                            width: '6px',
                            height: '12px',
                            opacity: isActive ? 1 : 0.12,
                            transform: isActive ? 'scale(1)' : 'scale(0.9)',
                            boxShadow: isActive ? `0 0 8px ${color}` : 'none',
                            willChange: 'transform, opacity'
                          }}
                        />
                      );
                    })}
                  </div>
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