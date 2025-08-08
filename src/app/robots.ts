import { MetadataRoute } from 'next'
import { BRAND } from '@/config/branding'
 
export default function robots(): MetadataRoute.Robots {
  const baseUrl = `https://${BRAND.domain}`
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/admin/',
        '/_next/',
        '/temp/',
        '/private/',
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}