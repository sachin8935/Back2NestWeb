import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Clock, Star, Truck, Shield, Package, Milk } from 'lucide-react';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'A2 Milk Delivery Budha Colony Patna | Fresh by 5 AM',
  description: 'Pure A2 milk delivered in Budha Colony by 5 AM. Fresh desi cow milk, ghee, paneer & dahi. Same-day delivery in Budha Colony, Dak Bungalow Chowk.',
  keywords: 'A2 milk Budha Colony, milk delivery Budha Colony Patna, fresh milk Budha Colony, desi cow milk Budha Colony, home delivery milk Budha Colony, Budha Colony milk subscription, Dak Bungalow Chowk milk delivery',
  alternates: {
    canonical: 'https://back2nest.in/milk-delivery-patna/budha-colony',
  },
  openGraph: {
    title: 'Pure A2 Milk Delivery in Budha Colony | Back2Nest',
    description: 'Fresh A2 milk from desi cows delivered by 5 AM in Budha Colony, Patna',
    url: 'https://back2nest.in/milk-delivery-patna/budha-colony',
    siteName: 'Back2Nest',
    images: [
      {
        url: 'https://back2nest.in/milk.jpeg',
        width: 1200,
        height: 630,
        alt: 'Fresh A2 milk delivery in Budha Colony Patna - Back2Nest',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pure A2 Milk Delivery in Budha Colony | Back2Nest',
    description: 'Fresh A2 milk from desi cows delivered by 5 AM in Budha Colony, Patna',
    images: ['https://back2nest.in/milk.jpeg'],
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
};

// Header Component
const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b-2 border-blue-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 rounded-full shadow-lg">
            <Milk className="w-7 h-7 text-white" />
          </div>
          <div>
            <span className="text-2xl font-bold text-gray-900">
              Back<span className="text-blue-600">2</span>Nest
            </span>
            <p className="text-xs text-gray-600">Budha Colony, Patna</p>
          </div>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-gray-700 hover:text-blue-600 transition font-medium">
            Home
          </Link>
          <Link href="/products" className="text-gray-700 hover:text-blue-600 transition font-medium">
            Products
          </Link>
          <Link href="/milk-delivery-patna" className="text-gray-700 hover:text-blue-600 transition font-medium">
            All Areas
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition font-medium">
            Contact
          </Link>
          <Link 
            href="/quick-order" 
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-full hover:shadow-xl transition shadow-lg font-semibold transform hover:scale-105"
          >
            Order Now
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default function BudhaColonyPage() {
  // Breadcrumb Schema
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
        "name": "Budha Colony",
        "item": "https://back2nest.in/milk-delivery-patna/budha-colony"
      }
    ]
  };

  // FAQPage Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you deliver in all parts of Budha Colony?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we deliver to all residential and commercial areas in Budha Colony including Budha Colony Market area, Dak Bungalow Chowk, Mithapur, and surrounding localities."
        }
      },
      {
        "@type": "Question",
        "name": "What is the delivery time in Budha Colony?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We deliver between 4:00 AM to 6:00 AM every morning in Budha Colony. You can expect your milk to arrive fresh before sunrise, perfect for your morning tea or breakfast!"
        }
      },
      {
        "@type": "Question",
        "name": "Is there a minimum order value for Budha Colony?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Minimum order of ₹100 for free delivery in Budha Colony. Orders below this may have a small delivery charge of ₹20. We recommend subscribing for daily delivery to save more!"
        }
      },
      {
        "@type": "Question",
        "name": "How is A2 milk different from regular milk?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A2 milk comes from desi cows and contains only A2 beta-casein protein, making it easier to digest. Regular milk often contains A1 protein which can cause digestive issues for some people. Many Budha Colony customers have reported better digestion after switching to A2 milk."
        }
      },
      {
        "@type": "Question",
        "name": "Can I pause or modify my subscription?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! You can pause, modify, or cancel your subscription anytime through our mobile app. Going on vacation from Budha Colony? Just pause your delivery and resume when you're back."
        }
      },
      {
        "@type": "Question",
        "name": "What if I'm not home during delivery?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We deliver between 4-6 AM, so most customers are home. We place the milk in insulated packaging at your doorstep. You can also provide special delivery instructions in the app (like 'leave at side door')."
        }
      }
    ]
  };

  // LocalBusiness Schema with OfferCatalog
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://back2nest.in/milk-delivery-patna/budha-colony",
    "name": "Back2Nest - Budha Colony",
    "image": "https://back2nest.in/logo.png",
    "description": "Fresh A2 milk delivery in Budha Colony, Patna",
    "url": "https://back2nest.in/milk-delivery-patna/budha-colony",
    "telephone": "+918935904820",
    "email": "help@back2nest.in",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Budha Colony",
      "addressLocality": "Patna",
      "addressRegion": "Bihar",
      "postalCode": "800001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "25.5961",
      "longitude": "85.1750"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "servesCuisine": "Dairy Products",
    "areaServed": {
      "@type": "Place",
      "name": "Budha Colony, Patna"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "156"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Dairy Products",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Fresh A2 Cow Milk",
            "description": "Pure A2 milk from desi cows"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Desi Ghee",
            "description": "Traditional bilona ghee from A2 milk"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Fresh Dahi",
            "description": "Thick creamy curd made from A2 milk"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Soft Paneer",
            "description": "Fresh paneer made daily"
          }
        }
      ]
    }
  };

  return (
    <div className="min-h-screen">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Pure A2 Milk Delivery in <span className="text-green-600">Budha Colony</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Fresh desi cow milk delivered to your doorstep by 5 AM every morning
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/quick-order">
                  <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all">
                    Order Now
                  </button>
                </Link>
                <Link href="/products">
                  <button className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold border-2 border-green-600 hover:bg-green-50 transition-all">
                    View Products
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative bg-gradient-to-br from-green-400 via-green-500 to-green-600 rounded-3xl p-3 shadow-2xl transform hover:rotate-1 transition duration-500">
                <Image
                  src="https://res.cloudinary.com/back2nest/image/upload/v1760552874/offer_banners/em79ofmcsxf5upawy9b7.png"
                  alt="Fresh A2 milk delivery in Budha Colony Patna - Back2Nest"
                  width={600}
                  height={600}
                  className="rounded-2xl shadow-lg w-full object-cover h-96"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Budha Colony */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Budha Colony Families Trust Back2Nest
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Delivered by 5 AM</h3>
              <p className="text-gray-600">Fresh milk at your doorstep before sunrise in Budha Colony</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">100% Pure A2</h3>
              <p className="text-gray-600">Authentic desi cow milk, no adulteration</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="font-semibold mb-2">Free Delivery</h3>
              <p className="text-gray-600">No extra charges for delivery in Budha Colony</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular in Budha Colony */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Popular Products in Budha Colony
          </h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Link href="/products/milk">
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all cursor-pointer">
                <div className="text-4xl mb-4">🥛</div>
                <h3 className="font-semibold text-lg mb-2">A2 Cow Milk</h3>
                <p className="text-sm text-gray-600 mb-3">Fresh daily</p>
                <p className="text-green-600 font-bold">From ₹70/L</p>
              </div>
            </Link>
            <Link href="/products/ghee">
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all cursor-pointer">
                <div className="text-4xl mb-4">🧈</div>
                <h3 className="font-semibold text-lg mb-2">Desi Ghee</h3>
                <p className="text-sm text-gray-600 mb-3">Pure & traditional</p>
                <p className="text-green-600 font-bold">From ₹600/kg</p>
              </div>
            </Link>
            <Link href="/products/dahi">
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all cursor-pointer">
                <div className="text-4xl mb-4">🥣</div>
                <h3 className="font-semibold text-lg mb-2">Fresh Dahi</h3>
                <p className="text-sm text-gray-600 mb-3">Thick & creamy</p>
                <p className="text-green-600 font-bold">From ₹80/kg</p>
              </div>
            </Link>
            <Link href="/products/paneer">
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all cursor-pointer">
                <div className="text-4xl mb-4">🧀</div>
                <h3 className="font-semibold text-lg mb-2">Soft Paneer</h3>
                <p className="text-sm text-gray-600 mb-3">Made fresh</p>
                <p className="text-green-600 font-bold">From ₹350/kg</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials from Budha Colony */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Budha Colony Customers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                &quot;Best milk delivery service in Budha Colony. Always on time and the quality is excellent! My kids love the taste.&quot;
              </p>
              <p className="font-semibold">Sunita Devi</p>
              <p className="text-sm text-gray-500">Budha Colony Market area</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                &quot;Switched to Back2Nest 6 months ago. The A2 milk is genuinely pure. My digestive issues have improved significantly.&quot;
              </p>
              <p className="font-semibold">Amit Kumar</p>
              <p className="text-sm text-gray-500">Near Dak Bungalow Chowk</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                &quot;Reliable service! Never missed a delivery in 4 months. The dahi and paneer are also top quality.&quot;
              </p>
              <p className="font-semibold">Rekha Singh</p>
              <p className="text-sm text-gray-500">Mithapur, Budha Colony</p>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Info for Budha Colony */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Delivery Information for Budha Colony
            </h2>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Delivery Time</h3>
                    <p className="text-gray-600">Between 4:00 AM - 6:00 AM daily. Your milk arrives fresh every morning!</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Coverage Area</h3>
                    <p className="text-gray-600">
                      All sectors of Budha Colony including Budha Colony Market, Dak Bungalow Chowk, 
                      Mithapur, and surrounding residential areas
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Truck className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Minimum Order</h3>
                    <p className="text-gray-600">₹100 for free delivery in Budha Colony. No hidden charges!</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Package className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Subscription Options</h3>
                    <p className="text-gray-600">
                      Daily, alternate days, or weekly delivery. Pause or modify anytime through our app.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local SEO Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">A2 Milk Delivery Service in Budha Colony, Patna</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Looking for fresh, pure A2 milk delivery in Budha Colony? Back2Nest brings you the finest 
                quality desi cow milk right to your doorstep in Budha Colony, Patna. We understand the 
                importance of starting your day with fresh, nutritious milk, which is why we ensure 
                delivery before 5 AM every morning to all areas of Budha Colony including Budha Colony Market, 
                Dak Bungalow Chowk, Mithapur, and surrounding residential areas.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Why Choose A2 Milk in Budha Colony?</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                A2 milk from desi cows is easier to digest and packed with essential nutrients. 
                Unlike regular milk, A2 milk contains only the A2 beta-casein protein, making it 
                a healthier choice for families in Budha Colony. Many of our Budha Colony customers report 
                better digestion and overall health after switching to our A2 milk. The milk comes from 
                indigenous Indian cow breeds like Gir, Sahiwal, and Red Sindhi, known for producing 
                high-quality A2 milk.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-gray-700">Easier to digest than regular milk</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-gray-700">Rich in proteins, calcium, and vitamins</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-gray-700">Suitable for people with mild lactose sensitivity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-gray-700">Better for children&#39;s growth and development</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Delivery Process in Budha Colony</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We follow a streamlined delivery process to ensure you get the freshest milk:
              </p>
              <ol className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                  <span className="text-gray-700">Milk is collected from our farm at 2:00 AM</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                  <span className="text-gray-700">Quality tested and packed immediately in food-grade containers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                  <span className="text-gray-700">Delivered to Budha Colony homes by 5 AM in refrigerated vehicles</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                  <span className="text-gray-700">Placed at your doorstep in insulated packaging to maintain freshness</span>
                </li>
              </ol>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Coverage in Budha Colony</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We deliver to all parts of Budha Colony including:
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-green-600" />
                  <span>Budha Colony Market area</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-green-600" />
                  <span>Dak Bungalow Chowk</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-green-600" />
                  <span>Mithapur locality</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-green-600" />
                  <span>Near Gandhi Maidan</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-green-600" />
                  <span>All residential complexes</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-green-600" />
                  <span>Commercial areas in Budha Colony</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">How to Order in Budha Colony</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ordering fresh A2 milk for your Budha Colony home is simple:
              </p>
              <ol className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                  <span className="text-gray-700">Download our app from Play Store or App Store, or visit our website</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                  <span className="text-gray-700">Select your products (milk, ghee, dahi, paneer) and quantity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                  <span className="text-gray-700">Enter your Budha Colony address with nearby landmark</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                  <span className="text-gray-700">Choose your preferred payment method (UPI, card, or cash)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">5</span>
                  <span className="text-gray-700">Receive fresh milk by 5 AM the next day!</span>
                </li>
              </ol>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Special Offers for Budha Colony Residents</h3>
              <p className="text-gray-700 leading-relaxed">
                New customers in Budha Colony get ₹50 off on their first order. Subscribe for daily 
                delivery and save up to 15% on your monthly milk bill. We also offer special discounts 
                during festivals and seasonal promotions. Refer a friend in Budha Colony and both of you 
                get ₹50 credit in your account!
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Our Products Available in Budha Colony</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h4 className="font-semibold mb-2">🥛 Fresh A2 Cow Milk - ₹70/L</h4>
                  <p className="text-gray-600">Pure, unadulterated milk from desi cows. Delivered fresh every morning.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h4 className="font-semibold mb-2">🧈 Traditional Desi Ghee - ₹600/kg</h4>
                  <p className="text-gray-600">Made using the traditional bilona method from A2 milk.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h4 className="font-semibold mb-2">🥣 Fresh Dahi (Curd) - ₹80/kg</h4>
                  <p className="text-gray-600">Thick, creamy curd made from fresh A2 milk.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h4 className="font-semibold mb-2">🧀 Soft Paneer - ₹350/kg</h4>
                  <p className="text-gray-600">Fresh paneer made daily, soft and protein-rich.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Health Benefits of A2 Milk for Budha Colony Families</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Residents of Budha Colony who have switched to our A2 milk have experienced numerous health benefits:
              </p>
              <div className="bg-blue-50 p-6 rounded-xl space-y-3">
                <p className="text-gray-700"><strong>Better Digestion:</strong> A2 milk is gentler on the stomach and easier to digest, reducing bloating and discomfort.</p>
                <p className="text-gray-700"><strong>Stronger Immunity:</strong> Rich in vitamins A, D, and essential minerals that boost immune function.</p>
                <p className="text-gray-700"><strong>Bone Health:</strong> High calcium content supports strong bones and teeth in children and adults.</p>
                <p className="text-gray-700"><strong>Heart Health:</strong> Contains omega-3 fatty acids that support cardiovascular health.</p>
                <p className="text-gray-700"><strong>Natural Energy:</strong> Provides sustained energy throughout the day without heaviness.</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Why Budha Colony Residents Choose Back2Nest</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Families in Budha Colony trust Back2Nest for several reasons:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Quality Assurance:</strong> Every batch is tested for purity and quality before delivery.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Punctual Delivery:</strong> We never miss a delivery. Your milk arrives by 5 AM, guaranteed.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Truck className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Hygiene Standards:</strong> Our entire supply chain maintains strict hygiene protocols.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Customer Service:</strong> Dedicated support team available to address all your concerns.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            We Also Deliver to Nearby Areas
          </h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            <Link href="/milk-delivery-patna/boring-road" className="bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all">
              Boring Road
            </Link>
            <Link href="/milk-delivery-patna/fraser-road" className="bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all">
              Fraser Road
            </Link>
            <Link href="/milk-delivery-patna/bailey-road" className="bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all">
              Bailey Road
            </Link>
            <Link href="/milk-delivery-patna" className="bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all">
              View All Areas
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ for Budha Colony */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions - Budha Colony
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-semibold text-lg mb-2">
                Do you deliver in all parts of Budha Colony?
              </h3>
              <p className="text-gray-600">
                Yes, we deliver to all residential and commercial areas in Budha Colony including Budha Colony Market area, 
                Dak Bungalow Chowk, Mithapur, and surrounding localities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-semibold text-lg mb-2">
                What is the delivery time in Budha Colony?
              </h3>
              <p className="text-gray-600">
                We deliver between 4:00 AM to 6:00 AM every morning in Budha Colony. You can expect your 
                milk to arrive fresh before sunrise, perfect for your morning tea or breakfast!
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-semibold text-lg mb-2">
                Is there a minimum order value for Budha Colony?
              </h3>
              <p className="text-gray-600">
                Minimum order of ₹100 for free delivery in Budha Colony. Orders below this may have a small 
                delivery charge of ₹20. We recommend subscribing for daily delivery to save more!
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-semibold text-lg mb-2">
                How is A2 milk different from regular milk?
              </h3>
              <p className="text-gray-600">
                A2 milk comes from desi cows and contains only A2 beta-casein protein, making it easier to 
                digest. Regular milk often contains A1 protein which can cause digestive issues for some people. 
                Many Budha Colony customers have reported better digestion after switching to A2 milk.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-semibold text-lg mb-2">
                Can I pause or modify my subscription?
              </h3>
              <p className="text-gray-600">
                Absolutely! You can pause, modify, or cancel your subscription anytime through our mobile app. 
                Going on vacation from Budha Colony? Just pause your delivery and resume when you&#39;re back.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-semibold text-lg mb-2">
                What if I&#39;m not home during delivery?
              </h3>
              <p className="text-gray-600">
                We deliver between 4-6 AM, so most customers are home. We place the milk in insulated packaging 
                at your doorstep. You can also provide special delivery instructions in the app (like &quot;leave at side door&quot;).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Fresh A2 Milk in Budha Colony?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join 200+ families in Budha Colony who trust Back2Nest for their daily milk needs
          </p>
          <Link href="/quick-order">
            <button className="bg-white text-green-600 px-12 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all">
              Start Your Subscription
            </button>
          </Link>
          <p className="text-white/80 mt-4">First order: Get ₹50 off • No commitment required</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
