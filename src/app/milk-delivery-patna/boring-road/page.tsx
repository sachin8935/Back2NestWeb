import { Metadata } from 'next';
import { Milk, Clock, MapPin, Download, CheckCircle, Star, Truck, Shield } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'A2 Milk Delivery Boring Road Patna | Fresh by 5 AM',
  description: 'Get pure A2 milk delivered to your home in Boring Road, Patna by 5 AM daily. Farm-fresh, 100% pure cow milk with no adulteration. Download our app to order.',
  keywords: [
    'milk delivery boring road patna',
    'fresh milk boring road',
    'pure milk delivery boring road',
    'A2 milk boring road patna',
    'cow milk home delivery boring road',
    'daily milk subscription boring road',
    'farm fresh milk boring road patna'
  ],
  openGraph: {
    title: 'Fresh Milk Delivery in Boring Road Patna | Back2Nest',
    description: 'Pure A2 cow milk delivered to Boring Road homes by 5 AM. Trusted by families across Boring Road area.',
    url: 'https://back2nest.in/milk-delivery-patna/boring-road',
    type: 'website',
    images: [
      {
        url: 'https://back2nest.in/milk.jpeg',
        width: 1200,
        height: 630,
        alt: 'Fresh A2 Milk Delivery in Boring Road Patna - Back2Nest',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fresh Milk Delivery in Boring Road Patna | Back2Nest',
    description: 'Pure A2 cow milk delivered to Boring Road homes by 5 AM.',
    images: ['https://back2nest.in/milk.jpeg'],
  },
  alternates: {
    canonical: 'https://back2nest.in/milk-delivery-patna/boring-road',
  },
};

export default function BoringRoadMilkDeliveryPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://back2nest.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Milk Delivery Patna",
        "item": "https://back2nest.in/milk-delivery-patna"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Boring Road",
        "item": "https://back2nest.in/milk-delivery-patna/boring-road"
      }
    ]
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'Back2Nest - Milk Delivery in Boring Road Patna',
    'image': 'https://back2nest.in/logo.png',
    'telephone': '+918935904820',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Jagat Narayan Road, Kadam Kuan',
      'addressLocality': 'Patna',
      'addressRegion': 'Bihar',
      'postalCode': '800003',
      'addressCountry': 'IN'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 25.607376,
      'longitude': 85.1540066
    },
    'url': 'https://back2nest.in/milk-delivery-patna/boring-road',
    'priceRange': '₹₹',
    'areaServed': {
      '@type': 'Place',
      'name': 'Boring Road, Patna'
    },
    'description': 'Fresh A2 cow milk delivered daily by 5 AM to homes in Boring Road, Patna. 100% pure with no adulteration.',
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.8',
      'reviewCount': '127',
      'bestRating': '5',
      'worstRating': '1'
    }
  };

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    'itemReviewed': {
      '@type': 'LocalBusiness',
      'name': 'Back2Nest - Milk Delivery in Boring Road Patna',
      'image': 'https://back2nest.in/logo.png',
      'telephone': '+918935904820',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Jagat Narayan Road, Kadam Kuan',
        'addressLocality': 'Patna',
        'addressRegion': 'Bihar',
        'postalCode': '800003',
        'addressCountry': 'IN'
      }
    },
    'reviewRating': {
      '@type': 'Rating',
      'ratingValue': '5',
      'bestRating': '5'
    },
    'author': {
      '@type': 'Person',
      'name': 'Priya Sharma'
    },
    'reviewBody': 'Best milk delivery service in Boring Road! The milk is so fresh and creamy. My kids love it. Delivery is always on time at 5:30 AM. Highly recommended!'
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />


      <div className="min-h-screen bg-white">
        <header className="bg-white shadow-md sticky top-0 z-50">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <Milk className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">
                Back<span className="text-blue-600">2</span>Nest
              </span>
            </Link>
            <Link href="/" className="text-blue-600 hover:text-blue-700 font-medium">
              ← Back to Home
            </Link>
          </nav>
        </header>

        <main>
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-blue-50 to-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full mb-6">
                    <MapPin className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-semibold text-green-700">Serving Boring Road Area</span>
                  </div>
                  
                  <h1 className="text-5xl font-bold text-gray-900 mb-6">
                    Fresh Milk Delivery in <span className="text-blue-600">Boring Road, Patna</span>
                  </h1>
                  
                  <p className="text-xl text-gray-600 mb-6">
                    Wake up to 100% pure A2 cow milk delivered to your doorstep in Boring Road by 5 AM every morning. Farm-fresh quality trusted by your neighbors.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <a 
                      href="https://play.google.com/store/apps/details?id=com.app.back2nest" target="_blank" rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition text-center flex items-center justify-center gap-2"
                    >
                      <Download className="w-5 h-5" />
                      Download App
                    </a>
                    <Link 
                      href="/quick-order"
                      className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition text-center"
                    >
                      Order Online
                    </Link>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 bg-yellow-50 px-4 py-2 rounded-full">
                      <Star className="w-5 h-5 text-yellow-500 fill-current" />
                      <span className="font-semibold">4.8/5 Rating</span>
                    </div>
                    <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="font-semibold">100% Pure</span>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <Image
                    src="https://res.cloudinary.com/back2nest/image/upload/c_scale,f_auto,q_auto:good,w_600/v1760552850/offer_banners/zrmudosi8ifnghrhuzna.png"
                    alt="Fresh pure A2 milk delivery in Boring Road Patna - 100% natural farm-fresh cow milk delivered daily by Back2Nest"
                    width={600}
                    height={600}
                    className="rounded-3xl shadow-2xl"
                    priority
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                    <Clock className="w-8 h-8 text-blue-600 mb-2" />
                    <p className="font-bold text-gray-900">Delivered by 5 AM</p>
                    <p className="text-sm text-gray-600">Daily in Boring Road</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us for Boring Road */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
                Why Boring Road Families Choose Back2Nest
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg">
                  <Shield className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3">100% Pure A2 Milk</h3>
                  <p className="text-gray-600">
                    No water mixing, no preservatives. Just pure desi cow milk delivered fresh from farm to your Boring Road home.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg">
                  <Truck className="w-12 h-12 text-green-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3">On-Time Delivery</h3>
                  <p className="text-gray-600">
                    Our delivery team knows Boring Road well. Reliable 5 AM delivery every single day, rain or shine.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-2xl shadow-lg">
                  <MapPin className="w-12 h-12 text-yellow-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Local Service</h3>
                  <p className="text-gray-600">
                    Serving Boring Road, West Boring Canal Road, and surrounding areas with dedicated customer support.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Coverage in Boring Road Area */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
                Areas We Cover in Boring Road
              </h2>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    'Boring Road Main',
                    'West Boring Canal Road',
                    'Boring Road Exhibition',
                    'Sri Krishna Puri',
                    'Hanuman Nagar',
                    'Ashiana Nagar nearby',
                    'Boring Patliputra Area',
                    'Rajendra Nagar nearby',
                    'All Boring Road localities'
                  ].map((area, index) => (
                    <div key={index} className="flex items-center gap-2 bg-blue-50 p-3 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{area}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-center bg-blue-100 p-6 rounded-xl">
                  <p className="text-blue-900 font-semibold mb-3">
                    Not sure if we deliver to your exact location in Boring Road?
                  </p>
                  <a 
                    href="https://play.google.com/store/apps/details?id=com.app.back2nest" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700"
                  >
                    <Download className="w-5 h-5" />
                    Download App
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials from Boring Road */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
                What Boring Road Residents Say
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg">
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "Best milk delivery service in Boring Road! The milk is so fresh and creamy. My kids love it. Delivery is always on time at 5:30 AM. Highly recommended!"
                  </p>
                  <p className="font-bold text-gray-900">- Priya Sharma, Boring Road</p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg">
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "Been using Back2Nest for 6 months in Boring Road area. Never missed a single delivery. Quality is outstanding - pure and natural."
                  </p>
                  <p className="font-bold text-gray-900">- Rajesh Kumar, West Boring Canal Road</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-700">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
              <h2 className="text-4xl font-bold mb-6">
                Start Your Fresh Milk Subscription in Boring Road Today!
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Join your neighbors in Boring Road who trust Back2Nest for pure, farm-fresh milk every morning.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="https://play.google.com/store/apps/details?id=com.app.back2nest" target="_blank" rel="noopener noreferrer"
                  className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold hover:bg-blue-50 transition inline-flex items-center justify-center gap-2"
                >
                  <Download className="w-6 h-6" />
                  Download App
                </a>
                <Link
                  href="/quick-order"
                  className="bg-blue-500 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-400 transition"
                >
                  Order Online Now
                </Link>
              </div>

              <div className="flex justify-center gap-6 text-blue-100">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>100% Pure Milk</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>5 AM Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>No Contract</span>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
