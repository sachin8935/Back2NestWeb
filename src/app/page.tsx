import type { Metadata } from 'next';
import HomePageClient from './HomePageClient';

export const metadata: Metadata = {
  title: 'Back2Nest - Pure A2 Milk Delivery in Patna | Fresh by 5 AM Daily',
  description: 'Get 100% pure A2 cow milk by 5 AM in Patna. Farm-fresh, zero adulteration. Serving Kankarbagh, Boring Road & all areas. Trusted by 127+ families.',
  keywords: 'milk delivery Patna, A2 milk Patna, best milk delivery near me, fresh milk home delivery, cow milk delivery Patna, farm fresh milk, pure milk delivery, milk subscription Patna, desi cow milk, organic milk Patna, Kankarbagh milk delivery, Boring Road milk delivery',
  alternates: {
    canonical: 'https://back2nest.in',
  },
  openGraph: {
    title: 'Back2Nest - Pure A2 Milk Delivery in Patna | Fresh by 5 AM',
    description: 'Get 100% pure A2 milk by 5 AM daily. Farm-fresh, zero adulteration. Download app for ₹50 off! Trusted by 127+ families across Patna.',
    url: 'https://back2nest.in',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Back2Nest',
    images: [
      { 
        url: 'https://back2nest.in/milk.jpeg', 
        width: 1200, 
        height: 630, 
        alt: 'Back2Nest - Fresh A2 Cow Milk Delivery in Patna by 5 AM Daily' 
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pure A2 Milk Delivery in Patna | Back2Nest - Fresh by 5 AM',
    description: 'Get 100% pure A2 milk by 5 AM daily. Farm-fresh, zero adulteration. Download app now!',
    images: ['https://back2nest.in/milk.jpeg'],
    site: '@Back2Nest',
  },
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
  other: {
    'geo.region': 'IN-BR',
    'geo.placename': 'Patna',
    'geo.position': '25.5941;85.1376',
  },
};

export default function Home() {
  return <HomePageClient />;
}