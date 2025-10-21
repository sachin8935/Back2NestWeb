import { Metadata } from 'next';
import Script from 'next/script';
import OffersPageClient from './OffersPageClient';

const SITE_URL = 'https://www.back2nest.in';
const SITE_NAME = 'Back2Nest';

// SEO Metadata for Offers page
export const metadata: Metadata = {
  title: 'Exclusive Offers & Discounts – Back2Nest Patna',
  description: 'Get FLAT ₹100 off on ₹1000 wallet recharge! Exclusive offers on fresh milk delivery in Patna. Download the Back2Nest app to avail special discounts.',
  keywords: [
    'back2nest offers',
    'milk delivery offers patna',
    'wallet recharge offers',
    'discount on milk delivery',
    'back2nest coupons',
    'flat 100 off',
    'milk delivery deals patna',
    'cashback offers'
  ],
  openGraph: {
    title: 'Exclusive Offers & Discounts – Back2Nest Patna',
    description: 'Get FLAT ₹100 off on ₹1000 wallet recharge! Exclusive offers on fresh milk delivery in Patna.',
    url: `${SITE_URL}/offers`,
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/milk.jpeg`,
        width: 1200,
        height: 630,
        alt: 'Back2Nest Offers - Save on Milk Delivery',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Exclusive Offers & Discounts – Back2Nest Patna',
    description: 'Get FLAT ₹100 off on ₹1000 wallet recharge! Exclusive offers on fresh milk delivery.',
  },
  alternates: {
    canonical: `${SITE_URL}/offers`,
  },
};

// Structured Data for Offers
const offersSchema = {
  '@context': 'https://schema.org',
  '@type': 'OfferCatalog',
  'name': 'Back2Nest Wallet Recharge Offers',
  'description': 'Exclusive wallet recharge offers for Back2Nest milk delivery service in Patna',
  'itemListElement': [
    {
      '@type': 'Offer',
      'name': 'FLAT100 - Get ₹100 off on ₹1000 recharge',
      'description': 'Recharge your wallet with ₹1000 and get FLAT ₹100 discount',
      'price': '900',
      'priceCurrency': 'INR',
      'availability': 'https://schema.org/InStock',
      'validFrom': '2025-10-21',
      'priceValidUntil': '2025-12-31',
      'seller': {
        '@type': 'Organization',
        'name': SITE_NAME
      }
    },
    {
      '@type': 'Offer',
      'name': 'FLAT50 - Get ₹50 off on ₹500 recharge',
      'description': 'Recharge your wallet with ₹500 and get FLAT ₹50 discount',
      'price': '450',
      'priceCurrency': 'INR',
      'availability': 'https://schema.org/InStock',
      'validFrom': '2025-10-21',
      'priceValidUntil': '2025-12-31',
      'seller': {
        '@type': 'Organization',
        'name': SITE_NAME
      }
    },
    {
      '@type': 'Offer',
      'name': 'FLAT10 - Get ₹10 off on ₹100 recharge',
      'description': 'Recharge your wallet with ₹100 and get FLAT ₹10 discount',
      'price': '90',
      'priceCurrency': 'INR',
      'availability': 'https://schema.org/InStock',
      'validFrom': '2025-10-21',
      'priceValidUntil': '2025-12-31',
      'seller': {
        '@type': 'Organization',
        'name': SITE_NAME
      }
    }
  ]
};

export default function OffersPage() {
  return (
    <>
      {/* Offers Structured Data for Google Rich Results */}
      <Script
        id="offers-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(offersSchema)
        }}
      />
      <OffersPageClient />
    </>
  );
}
