'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { BRAND } from '@/config/branding';
import { ArrowRight, Play, Zap } from 'lucide-react';

export default function Hero() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // LLM Models
  const llmModels = [
    { name: 'OpenAI', icon: '🤖' },
    { name: 'Claude', icon: '🧠' },
    { name: 'Gemini', icon: '💎' },
    { name: 'GPT-4', icon: '⚡' },
    { name: 'Llama', icon: '🦙' },
    { name: 'Mistral', icon: '🌪️' },
    { name: 'Perplexity', icon: '🔍' },
    { name: 'Cohere', icon: '🌊' }
  ];

  // Popular Tools
  const popularTools = [
    { name: 'Zapier', icon: '⚡' },
    { name: 'Make', icon: '🔧' },
    { name: 'n8n', icon: '🔗' },
    { name: 'HubSpot', icon: '📈' },
    { name: 'Salesforce', icon: '☁️' },
    { name: 'Slack', icon: '💬' },
    { name: 'Discord', icon: '🎮' },
    { name: 'WhatsApp', icon: '📱' },
    { name: 'Gmail', icon: '📧' },
    { name: 'Calendar', icon: '📅' },
    { name: 'Stripe', icon: '💳' },
    { name: 'Shopify', icon: '🛍️' }
  ];

  return (
    <section className="relative min-h-screen bg-[#0E0E13] dotted-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <motion.div 
          className="text-center"
          variants={staggerChildren}
          initial="initial"
          animate="animate"
        >
          {/* LLM Models Marquee */}
          <motion.div variants={fadeInUp} className="mb-12">
            <div className="text-xs uppercase tracking-wider text-gray-500 mb-6 font-mono">
              POWERED BY LEADING AI MODELS
            </div>
            <div className="flex overflow-hidden border border-gray-800 rounded-lg bg-gray-900/20 backdrop-blur-sm">
              <div className="flex animate-pulse space-x-8 py-4 px-6">
                {llmModels.concat(llmModels).map((model, index) => (
                  <div key={`${model.name}-${index}`} className="flex items-center space-x-3 whitespace-nowrap">
                    <span className="text-2xl">{model.icon}</span>
                    <span className="text-gray-300 font-medium">{model.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div variants={fadeInUp} className="mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              <span className="gradient-text-vapi">Connect Anything</span>
              <br />
              <span className="text-white">with Anything</span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Done-for-you AI automation that connects your favorite tools, models, and workflows. 
            No coding required. <span className="text-white font-semibold">Enterprise-grade reliability</span> for Los Angeles businesses.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link href="/contact">
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 flex items-center justify-center w-full sm:w-auto">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </Link>
            <Link href="/roi-calculator">
              <button className="border border-gray-700 hover:border-gray-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 flex items-center justify-center w-full sm:w-auto">
                <Play className="w-5 h-5 mr-2" />
                See ROI Calculator
              </button>
            </Link>
          </motion.div>

          {/* Popular Tools Section */}
          <motion.div variants={fadeInUp} className="mb-16">
            <div className="text-xs uppercase tracking-wider text-gray-500 mb-6 font-mono">
              INTEGRATES WITH 1000+ TOOLS
            </div>
            
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4 max-w-6xl mx-auto">
              {popularTools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.05 }}
                  className="group relative"
                >
                  <div className="w-16 h-16 bg-gray-900/50 border border-gray-800 rounded-lg flex items-center justify-center hover:border-blue-600/50 hover:bg-gray-800/50 transition-all duration-200 cursor-pointer">
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-200">
                      {tool.icon}
                    </span>
                  </div>
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    {tool.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              { number: "1000+", label: "Integrations Available" },
              { number: "99.9%", label: "Uptime Guarantee" },
              { number: "24/7", label: "AI-Powered Support" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="text-center border-glow rounded-xl p-6 bg-gray-900/20 backdrop-blur-sm hover:bg-gray-800/30 transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Location Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center text-gray-500 text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              Serving Los Angeles, Vernon, and all of LA County
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}