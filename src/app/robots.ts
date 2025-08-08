import { MetadataRoute } from 'next'
import { BRAND } from '@/config/branding'
 
export default function robots(): MetadataRoute.Robots {
  const baseUrl = `https://${BRAND.domain}`
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/services/',
          '/industries/', 
          '/locations/',
          '/integrations/',
          '/about',
          '/contact',
          '/pricing',
          '/case-studies',
          '/resources',
          '/blog',
        ],
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/private/',
          '/*.json$',
          '/tmp/',
        ],
      },
      // Block AI training bots while allowing search engines
      {
        userAgent: 'GPTBot',
        disallow: ['/'],
      },
      {
        userAgent: 'Google-Extended', 
        disallow: ['/'],
      },
      {
        userAgent: 'CCBot',
        disallow: ['/'],
      },
      {
        userAgent: 'anthropic-ai',
        disallow: ['/'],
      },
      {
        userAgent: 'Claude-Web',
        disallow: ['/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}