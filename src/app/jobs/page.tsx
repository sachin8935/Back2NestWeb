import { Metadata } from 'next';
import Script from 'next/script';
import CareersPageClient from './CareersPageClient';

const SITE_URL = 'https://www.back2nest.in';
const SITE_NAME = 'Back2Nest';

export const metadata: Metadata = {
  title: 'Careers at Back2Nest - Jobs in Patna | Join Our Team',
  description: 'Join Patna\'s fastest-growing milk delivery startup! Delivery partners (₹8-10K/month), corporate roles (₹6L/year). Flexible hours & growth opportunities.',
  keywords: [
    'back2nest careers',
    'delivery jobs patna',
    'milk delivery partner jobs',
    'part time jobs patna morning',
    'corporate jobs patna startup',
    'business partnership patna dairy',
    'startup jobs bihar 2025',
    'delivery partner jobs kankarbagh',
    'milk business franchise patna',
    'agriculture jobs bihar',
    'food delivery jobs patna',
    'early morning part time jobs patna',
    'work from patna jobs',
    'dairy industry careers bihar'
  ],
  openGraph: {
    title: 'Careers at Back2Nest – Join Patna\'s Top Milk Delivery Startup',
    description: 'Exciting career opportunities! Delivery Partners (₹8-10K/month), Corporate Roles (₹6L/year), Business Partnerships. Flexible schedules, competitive benefits, and career growth in Bihar\'s dairy revolution.',
    url: `${SITE_URL}/jobs`,
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/milk.jpeg`,
        width: 1200,
        height: 630,
        alt: 'Back2Nest Careers - Jobs in Patna Milk Delivery Startup',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers at Back2Nest – Jobs in Patna Dairy Startup',
    description: 'Join our mission to deliver pure milk! Hiring delivery partners, corporate staff & business partners. Competitive pay & growth opportunities.',
    images: [`${SITE_URL}/milk.jpeg`],
  },
  alternates: {
    canonical: `${SITE_URL}/jobs`,
  },
};

const jobPostingsSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    'title': 'Delivery Partner',
    'description': 'Join our delivery team and earn competitive income working flexible morning hours. Deliver fresh milk to customers between 5 AM - 10 AM.',
    'datePosted': '2025-10-20',
    'validThrough': '2025-12-31T23:59',
    'employmentType': 'PART_TIME',
    'hiringOrganization': {
      '@type': 'Organization',
      'name': SITE_NAME,
      'sameAs': SITE_URL,
      'logo': `${SITE_URL}/logo.png`
    },
    'jobLocation': {
      '@type': 'Place',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Jagat Narayan Road, Kadam Kuan',
        'addressLocality': 'Patna',
        'addressRegion': 'Bihar',
        'postalCode': '800003',
        'addressCountry': 'IN'
      }
    },
    'baseSalary': {
      '@type': 'MonetaryAmount',
      'currency': 'INR',
      'value': {
        '@type': 'QuantitativeValue',
        'value': 9000,
        'minValue': 8000,
        'maxValue': 10000,
        'unitText': 'MONTH'
      }
    }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    'title': 'Corporate Roles - Operations & Marketing',
    'description': 'Be part of our core team driving business growth, operations, and customer success.',
    'datePosted': '2025-10-20',
    'validThrough': '2025-12-31T23:59',
    'employmentType': 'FULL_TIME',
    'hiringOrganization': {
      '@type': 'Organization',
      'name': SITE_NAME,
      'sameAs': SITE_URL,
      'logo': `${SITE_URL}/logo.png`
    },
    'jobLocation': {
      '@type': 'Place',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Jagat Narayan Road, Kadam Kuan',
        'addressLocality': 'Patna',
        'addressRegion': 'Bihar',
        'postalCode': '800003',
        'addressCountry': 'IN'
      }
    },
    'baseSalary': {
      '@type': 'MonetaryAmount',
      'currency': 'INR',
      'value': {
        '@type': 'QuantitativeValue',
        'value': 600000,
        'unitText': 'YEAR'
      }
    }
  }
];

export default function CareersPage() {
  return (
    <>
      <Script
        id="job-posting-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jobPostingsSchema)
        }}
      />
      <CareersPageClient />
    </>
  );
}