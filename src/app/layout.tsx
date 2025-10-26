import type { Metadata } from 'next';
import './globals.css';
import Script from 'next/script';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

const SITE_URL = 'https://back2nest.in';
const SITE_NAME = 'Back2Nest';
const DEFAULT_DESCRIPTION = 'Fresh, pure cow milk delivered early morning in Patna. Farm-to-home, unadulterated and natural. Download our app to order today!';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
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
    'pure milk patna',
    'fresh milk delivery patna',
    'A2 milk patna',
    'cow milk delivery patna',
    'farm fresh milk patna',
    'milk home delivery patna',
    'daily milk subscription patna',
    'milk delivery online patna',
    'morning milk delivery patna',
    'desi cow milk patna',
    'organic milk patna',
    'farm to home milk patna',
    'Back2Nest patna',
    'best milk delivery patna',
    'gir cow milk patna',
    'pure desi milk patna',
    'milk supplier patna',
    'milk delivery app patna',
    'Back2Nest app',
    'milk delivery app android',
    'online milk order patna',
    'fresh dairy app patna',
    'milk subscription app',
    'Back2Nest Google Play',
    'dairy delivery app patna'
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
        url: `${SITE_URL}/milk.jpeg`,
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
    images: [`${SITE_URL}/milk.jpeg`],
    creator: '@B2N_Back2Nest',
    site: '@B2N_Back2Nest',
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
  'priceRange': '₹₹',
  'logo': {
    '@type': 'ImageObject',
    'url': `${SITE_URL}/logo.png`,
    'width': 512,
    'height': 512
  },
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
    'latitude': 25.607376,
    'longitude': 85.1540066,
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
    'https://jsdl.in/DT-47YPH6XJ5EY',
    'https://www.instagram.com/back2nest',
    'https://share.google/hHARPkGS7tlQiAXF1'
  ],
  'areaServed': [
    {
      '@type': 'City',
      'name': 'Patna',
    }
  ],
  'serviceType': ['Fresh Milk Home Delivery', 'A2 Milk Delivery', 'Dairy Products Delivery'],
  'description': DEFAULT_DESCRIPTION,
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'Dairy Products',
    'itemListElement': [
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Product',
          'name': 'Fresh A2 Cow Milk - Farm to Doorstep',
          'description': '100% pure, farm-fresh A2 milk delivered daily in Patna. Collected early morning, lab-tested, and delivered chilled to your doorstep by 5 AM. No preservatives, no adulteration.',
          'sku': 'B2N-MILK-001',
          'offers': {
            '@type': 'AggregateOffer',
            'priceCurrency': 'INR',
            'lowPrice': '60',
            'highPrice': '85'
          }
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Product',
          'name': 'Fresh Homemade Dahi (Curd) - Traditional Process',
          'description': 'Thick, creamy dahi made daily using traditional methods from pure milk. Same-day delivery in Patna. Natural fermentation with probiotic benefits.',
          'sku': 'B2N-DAHI-001',
          'offers': {
            '@type': 'AggregateOffer',
            'priceCurrency': 'INR',
            'lowPrice': '40',
            'highPrice': '80'
          }
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Product',
          'name': 'Fresh Taaza Paneer - Natural Lemon Curdling',
          'description': 'Soft, natural lemon-curdled paneer made from pure A2 cow milk. Delivered fresh daily in Patna. No chemicals, authentic homemade taste.',
          'sku': 'B2N-PANEER-001',
          'offers': {
            '@type': 'AggregateOffer',
            'priceCurrency': 'INR',
            'lowPrice': '80',
            'highPrice': '180'
          }
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Product',
          'name': 'Pure Danedar Ghee - Traditional Bilona Method',
          'description': 'Authentic bilona method danedar ghee made from A2 cow milk. Granular texture and rich aroma. Hand-churned using traditional methods for pure, natural taste.',
          'sku': 'B2N-GHEE-001',
          'offers': {
            '@type': 'AggregateOffer',
            'priceCurrency': 'INR',
            'lowPrice': '450',
            'highPrice': '1800'
          }
        }
      }
    ]
  }
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  'name': SITE_NAME,
  'url': SITE_URL,
  'logo': {
    '@type': 'ImageObject',
    'url': `${SITE_URL}/logo.png`,
    'width': 512,
    'height': 512
  },
  '@id': `${SITE_URL}/#organization`,
  'contactPoint': [
    {
      '@type': 'ContactPoint',
      'telephone': '+918935904820',
      'contactType': 'Customer Support',
      'email': 'help@back2nest.in',
      'areaServed': 'IN',
      'availableLanguage': ['English', 'Hindi'],
      'contactOption': 'TollFree',
      'hoursAvailable': {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        'opens': '05:00',
        'closes': '16:00'
      }
    },
  ],
  'sameAs': [
    'https://www.facebook.com/B2Nback2nest',
    'https://www.instagram.com/back2nest',
    'https://x.com/B2N_Back2Nest',
    'https://jsdl.in/DT-47YPH6XJ5EY',
    'https://play.google.com/store/apps/details?id=com.app.back2nest',
    'https://share.google/hHARPkGS7tlQiAXF1'
  ],
};

const mobileAppJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MobileApplication',
  'name': 'Back2Nest - Fresh Milk Delivery',
  'applicationCategory': 'LifestyleApplication',
  'operatingSystem': 'ANDROID',
  'aggregateRating': {
    '@type': 'AggregateRating',
    'ratingValue': '4.8',
    'ratingCount': '127'
  },
  'description': 'Order fresh, pure A2 cow milk and dairy products delivered to your doorstep in Patna. Easy ordering, subscription management, and exclusive app-only offers.',
  'url': 'https://play.google.com/store/apps/details?id=com.app.back2nest',
  'screenshot': `${SITE_URL}/milk.jpeg`,
  'downloadUrl': 'https://play.google.com/store/apps/details?id=com.app.back2nest',
  'installUrl': 'https://play.google.com/store/apps/details?id=com.app.back2nest',
  'applicationSubCategory': 'FoodDelivery',
  'offers': {
    '@type': 'Offer',
    'price': '0',
    'priceCurrency': 'INR',
    'category': 'free'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Favicons (kept for backward compatibility) */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/logo.png" sizes="180x180" />

        {/* Performance: preconnect and dns-prefetch for external resources used often */}
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />

        {/* Preload critical social image (helps link previews render quickly) */}
  <link rel="preload" as="image" href={`${SITE_URL}/milk.jpeg`} />

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

        <Script
          id="ld-mobileapp"
          type="application/ld+json"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(mobileAppJsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
