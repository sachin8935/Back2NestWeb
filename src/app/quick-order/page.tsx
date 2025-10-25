import type { Metadata } from 'next';
import QuickOrderClient from './QuickOrderClient';

export const metadata: Metadata = {
  title: 'Quick Order | Back2Nest',
  description:
    'Order fresh farm milk and dairy products for next-day delivery across Patna. Fast checkout and reliable morning delivery.',
  alternates: {
    canonical: 'https://www.back2nest.in/quick-order',
  },
  openGraph: {
    title: 'Quick Order | Back2Nest',
    description:
      'Order fresh farm milk and dairy products for next-day delivery across Patna.',
    url: 'https://www.back2nest.in/quick-order',
    type: 'website',
    images: [
      {
        url: 'https://www.back2nest.in/milk.jpeg',
        width: 1200,
        height: 630,
        alt: 'Back2Nest Quick Order',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quick Order | Back2Nest',
    description: 'Fast, fresh dairy delivery in Patna.',
    images: ['https://www.back2nest.in/milk.jpeg'],
  },
  robots: { index: true, follow: true },
};

export default function QuickOrderPage() {
  return <QuickOrderClient />;
}