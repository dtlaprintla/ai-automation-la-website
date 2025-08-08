/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable standalone output for Docker
  output: 'standalone',
  
  // Performance optimizations for perfect PageSpeed scores
  experimental: {
    optimizeCss: false, // Disable to fix critters error
  },
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
  
  // Compression
  compress: true,
  
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  
  // SEO optimization
  trailingSlash: false,
  
  // Bundle analyzer (for optimization)
  env: {
    COMPANY_NAME: 'AI Automation LA',
    COMPANY_PHONE: '(323) 555-0123',
    COMPANY_EMAIL: 'hello@aiautomationla.com',
    COMPANY_ADDRESS: '4905 S Santa Fe Ave, Vernon, CA 90058',
  },
};

module.exports = nextConfig;