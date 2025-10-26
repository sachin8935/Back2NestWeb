import { Metadata } from 'next';
import { Milk, Clock, MapPin, Download, CheckCircle, Star, Truck, Shield, Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Milk Delivery in Patliputra Patna | Fresh A2 Milk Home Delivery Daily',
  description: '100% pure A2 cow milk delivered to Patliputra Colony, Patna homes by 5 AM. Farm-fresh quality with zero adulteration. Download our app for subscription.',
  keywords: [
    'milk delivery patliputra patna',
    'fresh milk patliputra colony',
    'pure milk delivery patliputra',
    'A2 milk patliputra patna',
    'cow milk home delivery patliputra',
    'daily milk subscription patliputra',
    'farm fresh milk patliputra patna',
    'milk delivery near patliputra',
    'best milk delivery patliputra colony'
  ],
  openGraph: {
    title: 'Fresh Milk Delivery in Patliputra Colony Patna | Back2Nest',
    description: 'Pure A2 cow milk delivered to Patliputra homes by 5 AM. Trusted by families across Patliputra area.',
    url: 'https://www.back2nest.in/milk-delivery-patna/patliputra',
    type: 'website',
    images: [{
      url: 'https://res.cloudinary.com/back2nest/image/upload/v1760552656/offer_banners/gjb3sg9cvpzu2yuzxvvd.jpg',
      width: 1200,
      height: 630,
      alt: 'Milk Delivery Patliputra Patna - Back2Nest'
    }]
  },
  alternates: {
    canonical: 'https://www.back2nest.in/milk-delivery-patna/patliputra',
  },
};

export default function PatliputraMilkDeliveryPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.back2nest.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Milk Delivery Patna",
        "item": "https://www.back2nest.in/milk-delivery-patna"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Patliputra Colony",
        "item": "https://www.back2nest.in/milk-delivery-patna/patliputra"
      }
    ]
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'Back2Nest - Milk Delivery in Patliputra Patna',
    'image': 'https://www.back2nest.in/logo.png',
    'telephone': '+918935904820',
    'email': 'help@back2nest.in',
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
    'url': 'https://www.back2nest.in/milk-delivery-patna/patliputra',
    'priceRange': '₹₹',
    'areaServed': {
      '@type': 'Place',
      'name': 'Patliputra Colony, Patna'
    },
    'description': 'Fresh A2 cow milk delivered daily by 5 AM to homes in Patliputra Colony, Patna. 100% pure with no adulteration.',
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.8',
      'reviewCount': '127',
      'bestRating': '5',
      'worstRating': '1'
    }
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
                    <span className="text-sm font-semibold text-green-700">Serving Patliputra Area</span>
                  </div>
                  
                  <h1 className="text-5xl font-bold text-gray-900 mb-6">
                    Pure Milk Delivery in <span className="text-blue-600">Patliputra Colony, Patna</span>
                  </h1>
                  
                  <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                    Start your day with 100% pure A2 cow milk delivered fresh to your doorstep in Patliputra by 5 AM daily. Premium farm-fresh quality trusted by families across Patliputra Colony, Saguna More, and Rupaspur areas.
                  </p>

                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-6 rounded-r-lg">
                    <p className="text-blue-900 font-semibold flex items-center gap-2">
                      <Heart className="w-5 h-5 text-red-500 fill-current" />
                      Trusted by 50+ families in Patliputra & nearby areas
                    </p>
                  </div>

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

                  <div className="flex items-center gap-6 flex-wrap">
                    <div className="flex items-center gap-2 bg-yellow-50 px-4 py-2 rounded-full">
                      <Star className="w-5 h-5 text-yellow-500 fill-current" />
                      <span className="font-semibold">4.8/5 Rating</span>
                    </div>
                    <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="font-semibold">100% Pure</span>
                    </div>
                    <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <span className="font-semibold">5 AM Delivery</span>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <Image
                    src="https://res.cloudinary.com/back2nest/image/upload/v1760552656/offer_banners/gjb3sg9cvpzu2yuzxvvd.jpg"
                    alt="Fresh pure A2 milk delivery in Patliputra Colony Patna by Back2Nest - Farm to home daily service"
                    width={600}
                    height={600}
                    className="rounded-3xl shadow-2xl"
                    priority
                  />
                  <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border-4 border-blue-100">
                    <Clock className="w-8 h-8 text-blue-600 mb-2" />
                    <p className="font-bold text-gray-900 text-lg">Delivered by 5 AM</p>
                    <p className="text-sm text-gray-600">Daily in Patliputra</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us for Patliputra */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
                Why Patliputra Families Trust Back2Nest
              </h2>
              <p className="text-xl text-gray-600 text-center mb-12">
                Your reliable partner for pure, farm-fresh milk in Patliputra Colony
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
                  <Shield className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Premium A2 Milk Quality</h3>
                  <p className="text-gray-600 leading-relaxed">
                    100% pure desi cow milk with no water dilution, no harmful preservatives. Lab-tested for quality and delivered fresh to your Patliputra home every morning.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
                  <Truck className="w-12 h-12 text-green-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Timely Patliputra Delivery</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our dedicated delivery team ensures fresh milk reaches your doorstep in Patliputra Colony, Saguna More, Rupaspur before 5 AM every single day without fail.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
                  <MapPin className="w-12 h-12 text-yellow-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Complete Local Coverage</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Covering all sectors of Patliputra Colony, Shastri Nagar, Saguna More junction, Rupaspur, and surrounding neighborhoods with flexible subscription plans.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Coverage in Patliputra Area */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
                Complete Coverage Across Patliputra & Nearby Areas
              </h2>
              <p className="text-xl text-gray-600 text-center mb-12">
                We deliver fresh milk to every sector and locality in the Patliputra region
              </p>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    'Patliputra Colony Sector 1-14',
                    'Saguna More',
                    'Rupaspur',
                    'Shastri Nagar',
                    'Patliputra Industrial Area',
                    'Patrakar Nagar',
                    'Sewak Colony',
                    'Ashiana nearby',
                    'Digha nearby',
                    'Saguna More junction',
                    'All Patliputra sectors',
                    'Connecting areas'
                  ].map((area, index) => (
                    <div key={index} className="flex items-center gap-2 bg-blue-50 p-3 rounded-lg hover:bg-blue-100 transition">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{area}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-center bg-gradient-to-r from-blue-100 to-blue-50 p-6 rounded-xl">
                  <p className="text-blue-900 font-semibold mb-3 text-lg">
                    🏠 Not sure if we deliver to your sector in Patliputra?
                  </p>
                  <p className="text-blue-700 mb-4">
                    We're rapidly expanding across all Patliputra sectors! Download our app to confirm delivery at your address.
                  </p>
                  <a 
                    href="https://play.google.com/store/apps/details?id=com.app.back2nest" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition shadow-lg"
                  >
                    <Download className="w-5 h-5" />
                    Download App
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials from Patliputra */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
                What Patliputra Residents Say About Us
              </h2>
              <p className="text-xl text-gray-600 text-center mb-12">
                Real reviews from your neighbors in Patliputra Colony
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg">
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic leading-relaxed">
                    "We live in Patliputra Colony Sector 5 and have been using Back2Nest for over 8 months now. The milk quality is exceptional - pure, thick, and always fresh. Delivery has never been late even once. Highly recommended!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      PM
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Priya Mishra</p>
                      <p className="text-sm text-gray-600">Patliputra Colony Sector 5, Patna</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg">
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic leading-relaxed">
                    "Best milk delivery service in Patliputra area! The A2 milk is so pure that you can actually see the cream layer. My kids love drinking milk now. Great customer service and very professional delivery team."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                      VG
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Vikram Gupta</p>
                      <p className="text-sm text-gray-600">Saguna More, Patna</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <Link 
                  href="/reviews"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-lg group"
                >
                  Read More Customer Reviews from Patna
                  <span className="group-hover:translate-x-1 transition">→</span>
                </Link>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
                Benefits of Choosing Back2Nest in Patliputra
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Better Nutrition</h3>
                  <p className="text-gray-600 text-sm">A2 milk with natural calcium, protein, essential vitamins</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Zero Adulterants</h3>
                  <p className="text-gray-600 text-sm">No chemicals, no water mixing, pure farm milk</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Convenient Service</h3>
                  <p className="text-gray-600 text-sm">Doorstep delivery before you wake up at 5 AM</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
                  <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-yellow-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Easy Management</h3>
                  <p className="text-gray-600 text-sm">Flexible plans, pause/modify subscription anytime</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-700">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
              <h2 className="text-4xl font-bold mb-6">
                Start Fresh Milk Subscription in Patliputra Colony Today!
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Join 50+ satisfied families in Patliputra who enjoy pure, farm-fresh A2 milk delivered at their doorstep every morning at 5 AM. No binding contracts, no hidden charges, just pure quality!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="https://play.google.com/store/apps/details?id=com.app.back2nest" target="_blank" rel="noopener noreferrer"
                  className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold hover:bg-blue-50 transition inline-flex items-center justify-center gap-2 shadow-xl"
                >
                  <Download className="w-6 h-6" />
                  Download App
                </a>
                <Link
                  href="/quick-order"
                  className="bg-blue-500 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-400 transition shadow-xl"
                >
                  Order Online Now
                </Link>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-blue-100">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>100% Pure A2 Milk</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Daily 5 AM Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Free Doorstep Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>No Hidden Costs</span>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-blue-500">
                <p className="text-blue-100 text-lg">
                  📍 Serving entire Patliputra: All sectors, Saguna More, Rupaspur, Shastri Nagar & nearby areas
                </p>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
