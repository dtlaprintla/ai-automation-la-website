import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BRAND } from "@/config/branding";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(`https://${BRAND.domain}`),
  title: `${BRAND.name} | AI Automation Agency in Los Angeles`,
  description: "AI automation agency in Los Angeles. We automate phone calls, customer service & workflows for LA businesses. Free consultation. Call (323) 555-0123",
  keywords: [
    // Primary LA Keywords
    "AI automation agency Los Angeles",
    "AI phone agent Los Angeles",
    "business automation LA",
    "workflow automation Los Angeles",
    "AI chatbot Los Angeles",
    "voice agent Los Angeles",
    // Industry + Location
    "dental office automation LA",
    "real estate automation LA", 
    "restaurant automation Los Angeles",
    "HVAC automation Los Angeles",
    "AI consultant Los Angeles",
    // Service + Location
    "automated phone system LA",
    "AI receptionist Los Angeles",
    "business process automation LA",
    "CRM automation Los Angeles",
    // Local Areas
    "Vernon CA automation",
    "DTLA business automation",
    "AI for small business LA",
    "done for you automation LA",
    "bilingual AI assistant LA",
    // Spanish
    "automatización de negocios Los Ángeles",
    "asistente IA para empresas LA"
  ].join(", "),
  authors: [{ name: BRAND.name }],
  creator: BRAND.name,
  publisher: BRAND.name,
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    title: `${BRAND.name} | AI Automation Agency in Los Angeles`,
    description: "AI automation agency in Los Angeles. We automate phone calls, customer service & workflows for LA businesses. Free consultation.",
    url: `https://${BRAND.domain}`,
    siteName: BRAND.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${BRAND.name} - AI Automation Services in Los Angeles`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND.name} | AI Automation Agency Los Angeles`,
    description: "AI automation agency in Los Angeles. We automate phone calls, customer service & workflows for LA businesses. Free consultation.",
    images: ["/og-image.jpg"],
    creator: `@${BRAND.social.twitter}`,
  },
  verification: {
    google: "google-site-verification-code", // Add when available
  },
  alternates: {
    canonical: `https://${BRAND.domain}`,
    languages: {
      'en-US': `https://${BRAND.domain}`,
      'es-US': `https://${BRAND.domain}/es`,
    },
  },
};

// JSON-LD Structured Data for Local Business
const jsonLd = [
  // Main Local Business
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://${BRAND.domain}/#business`,
    "name": BRAND.name,
    "alternateName": "AI Automation Los Angeles",
    "description": "AI automation agency in Los Angeles specializing in phone agents, chatbots, and workflow automation for small businesses",
    "url": `https://${BRAND.domain}`,
    "telephone": BRAND.phone,
    "email": BRAND.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": BRAND.address.street,
      "addressLocality": BRAND.address.city,
      "addressRegion": BRAND.address.state,
      "postalCode": BRAND.address.zip,
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "34.0064",
      "longitude": "-118.2272"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Los Angeles",
        "sameAs": "https://en.wikipedia.org/wiki/Los_Angeles"
      },
      {
        "@type": "City", 
        "name": "Vernon",
        "sameAs": "https://en.wikipedia.org/wiki/Vernon,_California"
      }
    ],
    "serviceType": BRAND.services.primary,
    "priceRange": "$497-$2997",
    "paymentAccepted": ["Cash", "Credit Card", "Check", "Invoice", "Bank Transfer"],
    "currenciesAccepted": "USD",
    "openingHours": "Mo-Fr 09:00-17:00",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Automation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Phone Agents",
            "description": "24/7 AI voice agents that answer calls, book appointments, and qualify leads"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "AI Chatbots",
            "description": "Customer service chatbots for websites, SMS, and social media"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Workflow Automation",
            "description": "Business process automation and system integrations"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "50",
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      `https://linkedin.com/company/${BRAND.social.linkedin}`,
      `https://twitter.com/${BRAND.social.twitter}`,
      `https://facebook.com/${BRAND.social.facebook}`,
      `https://instagram.com/${BRAND.social.instagram}`
    ]
  },
  // Professional Service Organization
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `https://${BRAND.domain}/#service`,
    "name": `${BRAND.name} - Professional AI Automation Services`,
    "description": "Professional AI automation consulting and implementation services for Los Angeles businesses",
    "serviceType": "Business Automation Consulting",
    "provider": {
      "@id": `https://${BRAND.domain}/#business`
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "34.0064",
        "longitude": "-118.2272"
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Automation Services for LA Businesses",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "AI Voice Agent Setup",
          "price": "2997",
          "priceCurrency": "USD",
          "description": "Complete AI phone agent setup with 24/7 call handling"
        },
        {
          "@type": "Offer", 
          "name": "Monthly AI Management",
          "price": "497",
          "priceCurrency": "USD",
          "description": "Ongoing AI agent management and optimization"
        }
      ]
    }
  }
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth n8n-theme" data-theme="n8n">
      <head>
        {/* Structured Data */}
        {jsonLd.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        
        {/* Critical Resource Hints */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Font loading */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
        />
        
        {/* Favicon - AI Automation LA */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23EE4F27'/%3E%3Cstop offset='100%25' style='stop-color:%236B21EF'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='2' y='2' width='28' height='28' rx='6' fill='url(%23g)'/%3E%3Ctext x='16' y='21' font-family='system-ui' font-size='12' font-weight='bold' text-anchor='middle' fill='white'%3EAI%3C/text%3E%3C/svg%3E" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme colors for mobile browsers - N8N Theme */}
        <meta name="theme-color" content="#0E0918" />
        <meta name="msapplication-TileColor" content="#0E0918" />
        
        {/* Viewport optimization for performance */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        
        {/* Performance and security hints */}
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        
        {/* Optimize rendering - N8N Dark Theme */}
        <meta name="color-scheme" content="dark" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={`${inter.className} n8n-dark`}>
        {children}
        
        {/* Optimized Analytics Scripts - Non-blocking */}
        {process.env.NODE_ENV === 'production' && (
          <>
            {/* Google Analytics with performance optimization */}
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${BRAND.tracking.googleAnalytics}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${BRAND.tracking.googleAnalytics}', {
                    page_title: document.title,
                    page_location: window.location.href,
                    send_page_view: true,
                    anonymize_ip: true,
                    cookie_flags: 'SameSite=None;Secure'
                  });
                  
                  // Performance optimizations
                  gtag('config', '${BRAND.tracking.googleAnalytics}', {
                    custom_map: {'custom_parameter': 'custom_value'}
                  });
                `,
              }}
            />
            
            {/* Preload analytics for better performance */}
            <link rel="preload" as="script" href={`https://www.googletagmanager.com/gtag/js?id=${BRAND.tracking.googleAnalytics}`} />
          </>
        )}
      </body>
    </html>
  );
}