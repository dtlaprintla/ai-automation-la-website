/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable standalone output for Docker
  output: 'standalone',
  
  // Performance optimizations for perfect PageSpeed scores
  experimental: {
    optimizeCss: true, // Enable CSS optimization
    webpackBuildWorker: true, // Faster builds
    gzipSize: true, // Show gzip sizes
    serverComponentsExternalPackages: [], // Optimize server components
  },
  
  // Image optimization for perfect performance
  images: {
    formats: ['image/avif', 'image/webp'], // AVIF first for better compression
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year cache
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Compression and caching
  compress: true,
  poweredByHeader: false, // Remove X-Powered-By header
  
  // Bundle optimization
  webpack: (config, { isServer }) => {
    // Optimize bundle size
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    };
    
    // Tree shaking improvements
    config.optimization.usedExports = true;
    config.optimization.sideEffects = false;
    
    return config;
  },
  
  // Performance and security headers
  async headers() {
    return [
      {
        // Apply to all routes
        source: '/(.*)',
        headers: [
          // Security headers
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
          // Performance headers
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
        ],
      },
      {
        // Static assets caching
        source: '/(.*)\\.(js|css|woff2|woff|ttf|otf)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Image caching
        source: '/(.*)\\.(png|jpg|jpeg|gif|webp|avif|ico|svg)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // HTML pages caching
        source: '/((?!api/).*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, s-maxage=86400, stale-while-revalidate=86400',
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