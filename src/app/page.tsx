import type { Metadata } from 'next';
import HomePageClient from './HomePageClient';

export const metadata: Metadata = {
  title: 'Fresh Milk Delivery Patna | Pure A2 Milk Home Delivery - Back2Nest',
  description: 'Order 100% pure A2 cow milk in Patna. Farm-fresh milk delivered by 5 AM daily. No adulteration, no preservatives. Download our app from Google Play Store for easy ordering.',
  alternates: {
    canonical: 'https://back2nest.in',
  },
  openGraph: {
    title: 'Back2Nest – Fresh Farm Milk Delivery in Patna',
    description: 'Farm-fresh milk delivered by 5 AM across Patna. Pure, unadulterated, and delicious.',
    url: 'https://back2nest.in',
    type: 'website',
    images: [
      { url: 'https://back2nest.in/milk.jpeg', width: 1200, height: 630, alt: 'Back2Nest - Fresh Farm Milk Delivery in Patna' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Back2Nest – Fresh Farm Milk Delivery in Patna',
    description: 'Farm-fresh milk delivered by 5 AM across Patna.',
    images: ['https://back2nest.in/milk.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};
export default function Home() {
  return <HomePageClient />;
}