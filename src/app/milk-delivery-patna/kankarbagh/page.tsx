import { Metadata } from 'next';
import { Milk, Clock, MapPin, Download, CheckCircle, Star, Truck, Shield, Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Milk Delivery in Kankarbagh Patna | Pure A2 Milk Home Delivery by 5 AM',
  description: 'Get 100% pure A2 cow milk delivered in Kankarbagh, Patna by 5 AM daily. Farm-fresh quality with no adulteration. Download our app to subscribe.',
  keywords: [
    'milk delivery kankarbagh patna',
    'fresh milk kankarbagh',
    'pure milk delivery kankarbagh',
    'A2 milk kankarbagh patna',
    'cow milk home delivery kankarbagh',
    'daily milk subscription kankarbagh',
    'farm fresh milk kankarbagh patna',
    'milk delivery near kankarbagh',
    'best milk delivery kankarbagh'
  ],
  openGraph: {
    title: 'Fresh Milk Delivery in Kankarbagh Patna | Back2Nest',
    description: 'Pure A2 cow milk delivered to Kankarbagh homes by 5 AM. Trusted by families across Kankarbagh area.',
    url: 'https://www.back2nest.in/milk-delivery-patna/kankarbagh',
    type: 'website',
    images: [{
      url: 'https://res.cloudinary.com/back2nest/image/upload/v1760552874/offer_banners/em79ofmcsxf5upawy9b7.png',
      width: 1200,
      height: 630,
      alt: 'Milk Delivery Kankarbagh Patna - Back2Nest'
    }]
  },
  alternates: {
    canonical: 'https://www.back2nest.in/milk-delivery-patna/kankarbagh',
  },
};

export default function KankarbaghMilkDeliveryPage() {
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
        "name": "Kankarbagh",
        "item": "https://www.back2nest.in/milk-delivery-patna/kankarbagh"
      }
    ]
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'Back2Nest - Milk Delivery in Kankarbagh Patna',
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
    'url': 'https://www.back2nest.in/milk-delivery-patna/kankarbagh',
    'priceRange': '₹₹',
    'areaServed': {
      '@type': 'Place',
      'name': 'Kankarbagh, Patna'
    },
    'description': 'Fresh A2 cow milk delivered daily by 5 AM to homes in Kankarbagh, Patna. 100% pure with no adulteration.',
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
                    <span className="text-sm font-semibold text-green-700">Serving Kankarbagh Area</span>
                  </div>
                  
                  <h1 className="text-5xl font-bold text-gray-900 mb-6">
                    Fresh Milk Delivery in <span className="text-blue-600">Kankarbagh, Patna</span>
                  </h1>
                  
                  <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                    Wake up to 100% pure A2 cow milk delivered to your doorstep in Kankarbagh by 5 AM every morning. Farm-fresh quality trusted by families across Kankarbagh Colony, New Kankarbagh, and surrounding areas.
                  </p>

                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-6 rounded-r-lg">
                    <p className="text-blue-900 font-semibold flex items-center gap-2">
                      <Heart className="w-5 h-5 text-red-500 fill-current" />
                      Trusted by 40+ families in Kankarbagh area
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
                    src="https://res.cloudinary.com/back2nest/image/upload/v1760552874/offer_banners/em79ofmcsxf5upawy9b7.png"
                    alt="Fresh pure A2 milk delivery in Kankarbagh Patna by Back2Nest - Farm to home service"
                    width={600}
                    height={600}
                    className="rounded-3xl shadow-2xl"
                    priority
                  />
                  <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border-4 border-blue-100">
                    <Clock className="w-8 h-8 text-blue-600 mb-2" />
                    <p className="font-bold text-gray-900 text-lg">Delivered by 5 AM</p>
                    <p className="text-sm text-gray-600">Daily in Kankarbagh</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us for Kankarbagh */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
                Why Kankarbagh Families Choose Back2Nest
              </h2>
              <p className="text-xl text-gray-600 text-center mb-12">
                Serving the Kankarbagh community with pure, farm-fresh milk since day one
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
                  <Shield className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3">100% Pure A2 Milk</h3>
                  <p className="text-gray-600 leading-relaxed">
                    No water mixing, no preservatives, no chemicals. Just pure desi cow milk from trusted farms delivered fresh to your Kankarbagh home every morning.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
                  <Truck className="w-12 h-12 text-green-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Reliable Kankarbagh Service</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our delivery team knows Kankarbagh routes perfectly. Guaranteed 5 AM delivery to Old Kankarbagh, New Kankarbagh, Kankarbagh Colony, and all surrounding areas.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
                  <MapPin className="w-12 h-12 text-yellow-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Complete Area Coverage</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Covering all parts of Kankarbagh including main road, inner colonies, SK Puri nearby, Lohanipur, and Anandpuri areas with dedicated customer support.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Coverage in Kankarbagh Area */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
                Complete Coverage Across Kankarbagh
              </h2>
              <p className="text-xl text-gray-600 text-center mb-12">
                We deliver to every corner of Kankarbagh and nearby localities
              </p>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    'Kankarbagh Main Road',
                    'Old Kankarbagh',
                    'New Kankarbagh',
                    'Kankarbagh Colony',
                    'SK Puri',
                    'Lohanipur',
                    'Anandpuri',
                    'Hanuman Nagar nearby',
                    'Buddha Colony',
                    'Keshri Nagar',
                    'Ramkrishna Nagar',
                    'All Kankarbagh areas'
                  ].map((area, index) => (
                    <div key={index} className="flex items-center gap-2 bg-blue-50 p-3 rounded-lg hover:bg-blue-100 transition">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{area}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-center bg-gradient-to-r from-blue-100 to-blue-50 p-6 rounded-xl">
                  <p className="text-blue-900 font-semibold mb-3 text-lg">
                    🏠 Not sure if we deliver to your exact location in Kankarbagh?
                  </p>
                  <p className="text-blue-700 mb-4">
                    We're expanding daily! Download our app to check availability at your address.
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

          {/* Testimonials from Kankarbagh */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
                What Kankarbagh Residents Say About Us
              </h2>
              <p className="text-xl text-gray-600 text-center mb-12">
                Real reviews from your neighbors in Kankarbagh
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg">
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic leading-relaxed">
                    "Switched from packaged milk to Back2Nest and noticed the difference immediately! The milk is thicker, creamier, and tastes so much better. Delivery in Kankarbagh Colony is always on time. Worth every rupee!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      AS
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Anita Singh</p>
                      <p className="text-sm text-gray-600">Kankarbagh Colony, Patna</p>
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
                    "Been using Back2Nest for 6 months now in Kankarbagh. Never missed a single delivery at 5 AM. Milk quality is outstanding - you can see the cream layer. My family loves it!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                      RK
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Rajesh Kumar</p>
                      <p className="text-sm text-gray-600">Old Kankarbagh, Patna</p>
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
                Benefits of Daily Fresh Milk in Kankarbagh
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Family Health</h3>
                  <p className="text-gray-600 text-sm">Rich in calcium, protein, vitamins for growing kids and adults</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Pure Quality</h3>
                  <p className="text-gray-600 text-sm">Lab tested, no adulterants, farm-fresh every day</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Time Saving</h3>
                  <p className="text-gray-600 text-sm">No daily shopping trips, delivered at your doorstep</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
                  <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-yellow-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Flexible Plans</h3>
                  <p className="text-gray-600 text-sm">Pause, modify, or cancel anytime without penalties</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-700">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
              <h2 className="text-4xl font-bold mb-6">
                Start Your Fresh Milk Subscription in Kankarbagh Today!
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Join 40+ happy families in Kankarbagh who trust Back2Nest for pure, farm-fresh milk delivered every morning at 5 AM. No contracts, no hassles, just pure milk!
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
                  <span>100% Pure Milk</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>5 AM Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Free Home Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>No Hidden Charges</span>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-blue-500">
                <p className="text-blue-100 text-lg">
                  📍 Serving all of Kankarbagh: Old Kankarbagh, New Kankarbagh, SK Puri & nearby areas
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
