import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Back2Nest (B2N) - Fresh Farm Milk Delivery in Patna | Pure Milk Home Delivery",
  description: "Get fresh, pure milk delivered directly from farm to your doorstep in Patna every morning by 5 AM. No adulteration, no artificial colors - just natural milk. Order now! Call: 8935904820",
  keywords: [
    "milk delivery patna",
    "fresh milk patna",
    "farm fresh milk patna",
    "pure milk delivery",
    "doorstep milk delivery patna",
    "Back2Nest",
    "B2N milk",
    "kadam kuan milk delivery",
    "morning milk delivery",
    "no adulteration milk",
    "farm to home milk",
    "organic milk patna",
    "daily milk subscription patna"
  ],
  authors: [{ name: "Back2Nest (B2N)" }],
  creator: "Back2Nest",
  publisher: "Back2Nest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/logo.png', sizes: '192x192', type: 'image/png' },
      { url: '/logo.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/logo.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.back2nest.in",
    siteName: "Back2Nest (B2N)",
    title: "Back2Nest - Fresh Farm Milk Delivery in Patna | Pure Milk Home Delivery",
    description: "Get fresh, pure milk delivered directly from farm to your doorstep in Patna every morning by 5 AM. No adulteration, no artificial colors - just natural milk.",
    images: [
      {
        url: "https://www.back2nest.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Back2Nest - Fresh Farm Milk Delivery in Patna",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Back2Nest - Fresh Farm Milk Delivery in Patna",
    description: "Get fresh, pure milk delivered directly from farm to your doorstep in Patna every morning by 5 AM.",
    images: ["https://www.back2nest.in/twitter-image.jpg"],
    creator: "@B2N_Back2Nest",
    site: "@B2N_Back2Nest",
  },
  alternates: {
    canonical: "https://www.back2nest.in",
  },
  category: "Food & Beverage",
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/logo.png" sizes="180x180" />
        
        {/* Critical meta tags for performance and mobile */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Get fresh, pure milk delivered directly from farm to your doorstep in Patna every morning by 5 AM. No adulteration, no artificial colors - just natural milk. Order now! Call: 8935904820" />
        <meta name="theme-color" content="#2563eb" />
        
        {/* Preconnect to external origins to reduce DNS lookup time */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        
        {/* JSON-LD Structured Data for Local Business SEO - Changed to lazyOnload for bfcache */}
        <Script
          id="structured-data-local-business"
          type="application/ld+json"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Back2Nest",
              "alternateName": "B2N",
              "image": "https://www.back2nest.in/logo.png",
              "@id": "https://www.back2nest.in/#organization",
              "url": "https://www.back2nest.in",
              "telephone": "+918935904820",
              "email": "help@back2nest.in",
              "priceRange": "₹₹",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Jagat Narayan Road, Kadam Kuan",
                "addressLocality": "Patna",
                "addressRegion": "Bihar",
                "postalCode": "800003",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 25.5941,
                "longitude": 85.1376
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "05:00",
                "closes": "16:00"
              },
              "sameAs": [
                "https://www.facebook.com/B2Nback2nest",
                "https://x.com/B2N_Back2Nest"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": 127
              },
              "areaServed": {
                "@type": "City",
                "name": "Patna",
                "addressCountry": "IN"
              },
              "serviceType": "Fresh Milk Home Delivery",
              "description": "We deliver fresh, pure milk directly from farm to your doorstep in Patna every early morning. The milk is direct from farm to user with no adulteration, no artificial colors - nothing but pure milk."
            })
          }}
        />
        
        <Script
          id="structured-data-organization"
          type="application/ld+json"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Back2Nest",
              "alternateName": "B2N",
              "url": "https://www.back2nest.in",
              "logo": "https://www.back2nest.in/logo.png",
              "@id": "https://www.back2nest.in/#organization",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+918935904820",
                "contactType": "Customer Service",
                "email": "help@back2nest.in",
                "areaServed": "IN",
                "availableLanguage": ["English", "Hindi"]
              },
              "sameAs": [
                "https://www.facebook.com/B2Nback2nest",
                "https://x.com/B2N_Back2Nest"
              ]
            })
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
