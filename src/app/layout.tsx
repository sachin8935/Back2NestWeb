import type { Metadata } from 'next';
import './globals.css';
import Script from 'next/script';

const SITE_URL = 'https://www.back2nest.in';
const SITE_NAME = 'Back2Nest';
const DEFAULT_DESCRIPTION = 'Fresh, pure cow milk delivered early morning in Patna. Farm-to-home, unadulterated and natural. Download our app to order today!';

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} – Fresh Milk Delivery Patna`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: 'Back2Nest (B2N)' }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  keywords: [
    'milk delivery patna',
    'fresh milk delivery',
    'farm fresh milk patna',
    'pure milk delivery',
    'farm fresh milk delivered',
    'Back2Nest',
    'download app milk delivery',
    'morning milk delivery',
    'farm to home milk',
    'organic milk patna',
    'daily milk subscription patna',
    'milk delivery online patna'
  ],
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
    apple: [{ url: '/logo.png', sizes: '180x180', type: 'image/png' }],
    shortcut: '/favicon.ico',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} – Fresh Farm Milk Delivery Patna`,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - Fresh Farm Milk Delivery in Patna`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} – Fresh Farm Milk Delivery Patna`,
    description: DEFAULT_DESCRIPTION,
    images: [`${SITE_URL}/twitter-image.jpg`],
    creator: '@B2N_Back2Nest',
    site: '@B2N_Back2Nest',
  },
  alternates: {
    canonical: SITE_URL,
  },
};
const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  'name': SITE_NAME,
  'alternateName': 'B2N',
  'image': `${SITE_URL}/logo.png`,
  '@id': `${SITE_URL}/#organization`,
  'url': SITE_URL,
  'telephone': '+918935904820',
  'email': 'help@back2nest.in',
  'priceRange': '₹',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'Jagat Narayan Road, Kadam Kuan',
    'addressLocality': 'Patna',
    'addressRegion': 'Bihar',
    'postalCode': '800003',
    'addressCountry': 'IN',
  },
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': 25.5941,
    'longitude': 85.1376,
  },
  'openingHoursSpecification': [
    {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      'opens': '05:00',
      'closes': '16:00',
    },
  ],
  'sameAs': [
    'https://www.facebook.com/B2Nback2nest',
    'https://x.com/B2N_Back2Nest',
  ],
  'areaServed': {
    '@type': 'City',
    'name': 'Patna',
  },
  'serviceType': 'Fresh Milk Home Delivery',
  'description': DEFAULT_DESCRIPTION,
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  'name': SITE_NAME,
  'url': SITE_URL,
  'logo': `${SITE_URL}/logo.png`,
  '@id': `${SITE_URL}/#organization`,
  'contactPoint': [
    {
      '@type': 'ContactPoint',
      'telephone': '+918935904820',
      'contactType': 'Customer Service',
      'email': 'help@back2nest.in',
      'areaServed': 'IN',
      'availableLanguage': ['English', 'Hindi'],
    },
  ],
  'sameAs': [
    'https://www.facebook.com/B2Nback2nest',
    'https://x.com/B2N_Back2Nest',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Favicons (kept for backward compatibility) */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/logo.png" sizes="180x180" />

        {/* Performance: preconnect and dns-prefetch for external resources used often */}
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />

        {/* Preload critical social image (helps link previews render quickly) */}
        <link rel="preload" as="image" href={`${SITE_URL}/og-image.jpg`} />

        {/* Mobile viewport & theme */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />

        {/* JSON-LD structured data (lazyOnload so it doesn't block render) */}
        <Script
          id="ld-localbusiness"
          type="application/ld+json"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />

        <Script
          id="ld-organization"
          type="application/ld+json"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
