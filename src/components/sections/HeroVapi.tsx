'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

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
    <section className="min-h-screen bg-[#0E0E13] relative overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Text */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal text-white mb-8 tracking-tight">
              Voice AI agents
              <br />
              for developers
            </h1>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <button className="bg-[#10B981] hover:bg-[#059669] text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center">
                  SIGN UP
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </Link>
              <Link href="/docs">
                <button className="border border-gray-700 hover:border-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                  READ THE DOCS
                </button>
              </Link>
            </div>
          </div>

          {/* Voice Visualizer */}
          <div className="flex justify-center items-center mb-20">
            <div className="relative">
              {/* Voice bars animation */}
              <div className="flex items-end justify-center gap-1 h-32">
                {Array.from({ length: 50 }, (_, i) => {
                  const colors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899', '#14B8A6'];
                  const color = colors[Math.floor(Math.random() * colors.length)];
                  const height = Math.random() * 100 + 20;
                  const delay = i * 0.05;
                  
                  return (
                    <motion.div
                      key={i}
                      className="w-1 rounded-full"
                      style={{ 
                        backgroundColor: color,
                        height: '4px'
                      }}
                      animate={{
                        height: [4, height, 4],
                        opacity: [0.3, 1, 0.3]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: delay,
                        ease: "easeInOut"
                      }}
                    />
                  );
                })}
              </div>
              
              {/* Talk to Vapi button */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <button className="bg-white text-black px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center gap-3">
                  TALK TO VAPI
                  <span className="text-2xl">🎙️</span>
                </button>
              </div>
            </div>
          </div>

          {/* Client Logos */}
          <div className="flex justify-center items-center gap-12 flex-wrap opacity-50">
            {clientLogos.map((client, index) => (
              <div key={index} className="text-white text-sm font-medium tracking-wider">
                {client.logo}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-[#0E0E13] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gray-400 text-lg mb-4">
              Teams at trail-blazing startups to Fortune
              <br />
              500 companies deploy voice agents on the
              <br />
              Vapi platform.
            </p>
            <p className="text-gray-400 text-lg">
              The most configurable API to build leading
              <br />
              voice AI products and scale phone
              <br />
              operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">CALLS</p>
              <p className="text-6xl md:text-7xl font-light text-white">62M+</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">ASSISTANTS LAUNCHED</p>
              <p className="text-6xl md:text-7xl font-light text-white">1M+</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">DEVELOPERS</p>
              <p className="text-6xl md:text-7xl font-light text-white">250K+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}