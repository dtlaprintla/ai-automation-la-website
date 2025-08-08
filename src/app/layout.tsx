import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BRAND } from "@/config/branding";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(`https://${BRAND.domain}`),
  title: `${BRAND.name} | ${BRAND.tagline}`,
  description: BRAND.description,
  keywords: [
    "AI automation Los Angeles",
    "business automation LA", 
    "AI chatbots Los Angeles",
    "voice agents Los Angeles",
    "customer support automation LA",
    "Vernon CA AI automation",
    "done for you automation"
  ].join(", "),
  authors: [{ name: BRAND.name }],
  creator: BRAND.name,
  publisher: BRAND.name,
  robots: "index, follow",
  openGraph: {
    title: `${BRAND.name} | ${BRAND.tagline}`,
    description: BRAND.description,
    url: `https://${BRAND.domain}`,
    siteName: BRAND.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${BRAND.name} - AI Automation Services`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND.name} | ${BRAND.tagline}`,
    description: BRAND.description,
    images: ["/og-image.jpg"],
    creator: `@${BRAND.social.twitter}`,
  },
  verification: {
    google: "google-site-verification-code", // Add when available
  },
  alternates: {
    canonical: `https://${BRAND.domain}`,
  },
};

// JSON-LD Structured Data for Local Business
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": BRAND.name,
  "description": BRAND.description,
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
  "areaServed": BRAND.serviceAreas,
  "serviceType": BRAND.services.primary,
  "priceRange": "$497-$1997",
  "paymentAccepted": ["Cash", "Credit Card", "Check", "Invoice"],
  "currenciesAccepted": "USD",
  "openingHours": "Mo-Fr 09:00-17:00",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "50"
  },
  "sameAs": [
    `https://linkedin.com/${BRAND.social.linkedin}`,
    `https://twitter.com/${BRAND.social.twitter}`,
    `https://facebook.com/${BRAND.social.facebook}`,
    `https://instagram.com/${BRAND.social.instagram}`
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          as="style"
        />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#6366f1" />
        
        {/* Performance hints */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        {children}
        
        {/* Analytics Scripts - Add when ready */}
        {process.env.NODE_ENV === 'production' && (
          <>
            {/* Google Analytics */}
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
                  gtag('config', '${BRAND.tracking.googleAnalytics}');
                `,
              }}
            />
          </>
        )}
      </body>
    </html>
  );
}