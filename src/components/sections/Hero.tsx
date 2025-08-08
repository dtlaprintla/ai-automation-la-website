'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { BRAND } from '@/config/branding';
import { ArrowRight, Play, CheckCircle, Zap, Bot, Phone } from 'lucide-react';

export default function Hero() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
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

  const benefits = [
    "100% Done-For-You Setup",
    "No Technical Knowledge Required", 
    "24/7 AI-Powered Support",
    "Proven ROI Within 30 Days"
  ];

  const stats = [
    { number: "500+", label: "Hours Saved Monthly", icon: <Zap className="w-6 h-6" /> },
    { number: "40%", label: "Cost Reduction", icon: <Bot className="w-6 h-6" /> },
    { number: "24/7", label: "AI Support", icon: <Phone className="w-6 h-6" /> },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0 animated-bg opacity-30"></div>
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/20 via-brand-secondary/20 to-brand-accent/20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>

      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-brand-primary/20 rounded-full blur-xl animate-float delay-100"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-brand-accent/20 rounded-full blur-xl animate-float delay-300"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-brand-secondary/20 rounded-full blur-xl animate-float delay-500"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div 
          className="text-center"
          variants={staggerChildren}
          initial="initial"
          animate="animate"
        >
          {/* Badge */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            Now serving Los Angeles & Vernon, CA
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            We Handle All Your{' '}
            <span className="gradient-text">
              AI Automation
            </span>
            <br />
            So You Don't Have To
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            {BRAND.tagline} - Complete AI systems for customer support, voice agents, 
            workflows & chatbots. <span className="text-brand-accent font-semibold">100% managed service</span> with proven results.
          </motion.p>

          {/* Benefits List */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2"
              >
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-white font-medium">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button 
              size="xl" 
              variant="primary"
              rightIcon={<ArrowRight className="w-5 h-5" />}
            >
              Get Free Consultation
            </Button>
            <Button 
              size="xl" 
              variant="secondary"
              leftIcon={<Play className="w-5 h-5" />}
            >
              Watch Demo
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.2 }}
                className="text-center bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 card-hover"
              >
                <div className="text-brand-accent mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">
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
            <div className="inline-flex items-center text-gray-400 text-sm">
              <div className="w-2 h-2 bg-brand-accent rounded-full mr-2 animate-pulse"></div>
              Proudly serving {BRAND.address.city}, CA and all of Los Angeles
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div 
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
            animate={{ scaleY: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}