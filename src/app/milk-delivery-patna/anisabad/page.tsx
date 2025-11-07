import type { Metadata } from "next";
import Link from "next/link";
import { Milk, Phone, MapPin, Clock, Award, CheckCircle2, Star, TrendingUp, Shield, Heart, Users, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "A2 Milk Delivery Anisabad Patna | Pure Desi by 5 AM",
  description: "Farm-fresh A2 milk delivered in Anisabad by 5 AM daily. Pure desi cow milk, ghee, dahi & paneer near Bye Pass, Gaighat. Order at ₹89/litre!",
  keywords: [
    "A2 milk delivery Anisabad",
    "Anisabad milk delivery",
    "pure desi cow milk Anisabad",
    "A2 milk Anisabad Patna",
    "fresh milk Anisabad Bye Pass",
    "cow milk home delivery Anisabad",
    "milk delivery Gaighat",
    "Back2Nest Anisabad",
    "dairy products Anisabad",
    "organic milk Anisabad 800002"
  ],
  openGraph: {
    title: "A2 Milk Delivery in Anisabad, Patna | Pure Desi Cow Milk | Back2Nest",
    description: "Get farm-fresh A2 milk delivered to your doorstep in Anisabad by 5 AM daily. Pure desi cow milk from Gir & Sahiwal cows. ₹89/litre. Order now!",
    url: "https://back2nest.in/milk-delivery-patna/anisabad",
    siteName: "Back2Nest",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/anisabad-milk-delivery.jpg",
        width: 1200,
        height: 630,
        alt: "A2 Milk Delivery in Anisabad, Patna"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "A2 Milk Delivery in Anisabad | Back2Nest",
    description: "Farm-fresh A2 milk delivered to Anisabad by 5 AM. Pure desi cow milk, ghee, dahi & paneer. Order now!",
    images: ["/images/anisabad-milk-delivery.jpg"]
  },
  alternates: {
    canonical: "https://back2nest.in/milk-delivery-patna/anisabad"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function AnisabadPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Back2Nest - A2 Milk Delivery Anisabad",
    "image": "https://back2nest.in/images/anisabad-milk-delivery.jpg",
    "@id": "https://back2nest.in/milk-delivery-patna/anisabad",
    "url": "https://back2nest.in/milk-delivery-patna/anisabad",
    "telephone": "+91-XXXXXXXXXX",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Anisabad Bye Pass, Gaighat Road",
      "addressLocality": "Anisabad",
      "addressRegion": "Bihar",
      "postalCode": "800002",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.6288,
      "longitude": 85.1167
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
      "opens": "05:00",
      "closes": "21:00"
    },
    "sameAs": [
      "https://www.facebook.com/back2nest",
      "https://www.instagram.com/back2nest"
    ],
    "areaServed": {
      "@type": "City",
      "name": "Anisabad, Patna"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Dairy Products",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "A2 Desi Cow Milk",
            "description": "Pure A2 milk from Gir & Sahiwal cows"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Pure Desi Ghee",
            "description": "100% pure A2 ghee made from A2 milk"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Fresh Dahi (Curd)",
            "description": "Thick and creamy A2 dahi"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "A2 Paneer",
            "description": "Soft and fresh paneer from A2 milk"
          }
        }
      ]
    }
  };

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
        "name": "Anisabad",
        "item": "https://back2nest.in/milk-delivery-patna/anisabad"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you deliver A2 milk to all areas of Anisabad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we deliver fresh A2 milk to all areas of Anisabad including Anisabad Bye Pass, Gaighat, Bailey Road Extension, and surrounding localities. We ensure coverage across the entire Anisabad postal code 800002."
        }
      },
      {
        "@type": "Question",
        "name": "What time does milk delivery happen in Anisabad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We deliver fresh A2 milk to Anisabad homes by 5:00 AM every morning. This ensures you get farm-fresh milk right at your doorstep before sunrise, maintaining maximum freshness and nutritional value."
        }
      },
      {
        "@type": "Question",
        "name": "Is your A2 milk genuine and tested?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our A2 milk is 100% genuine and sourced from pure desi cow breeds (Gir and Sahiwal). Every batch undergoes quality testing for purity, fat content, and hygiene. We provide lab test certificates upon request."
        }
      },
      {
        "@type": "Question",
        "name": "What is the price of A2 milk delivery in Anisabad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our A2 desi cow milk is priced at ₹89 per litre for Anisabad residents. We also offer subscription plans with discounts: Weekly plan at ₹615 (saves ₹8), and Monthly plan at ₹2499 (saves ₹170)."
        }
      },
      {
        "@type": "Question",
        "name": "Can I get same-day delivery in Anisabad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! If you order before 8 PM, you'll receive fresh A2 milk by 5 AM the next morning. For emergencies, we also offer same-day delivery for orders placed before 12 PM (subject to availability in Anisabad area)."
        }
      },
      {
        "@type": "Question",
        "name": "Do you deliver other dairy products to Anisabad besides milk?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we deliver a complete range of A2 dairy products to Anisabad including Pure Desi Ghee (₹599/500g), Fresh Dahi (₹75/500g), A2 Paneer (₹120/250g), and Chhachh. All products are made from 100% pure A2 milk."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <MapPin className="h-8 w-8" />
                <span className="text-green-200 font-semibold">Now Serving Anisabad</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Fresh A2 Milk Delivered to Your Home in Anisabad, Patna
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-green-100">
                Pure Desi Cow Milk from Gir & Sahiwal Breeds | Delivered by 5 AM Daily
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>100% Pure A2</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Clock className="h-5 w-5" />
                  <span>5 AM Delivery</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Award className="h-5 w-5" />
                  <span>Lab Tested</span>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/quick-order"
                  className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition-colors inline-flex items-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  Order Now - ₹89/Litre
                </Link>
                <Link
                  href="/products"
                  className="bg-green-800 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-900 transition-colors"
                >
                  View All Products
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex text-sm text-gray-600">
            <Link href="/" className="hover:text-green-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/milk-delivery-patna" className="hover:text-green-600">Milk Delivery Patna</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-semibold">Anisabad</span>
          </nav>
        </div>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Introduction */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Premium A2 Milk Delivery Service in Anisabad, Patna
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="mb-4">
                Welcome to <strong>Back2Nest</strong>, Anisabad&apos;s most trusted source for pure, farm-fresh <strong>A2 milk</strong> delivered right to your doorstep. We understand that residents of Anisabad—whether you live near the bustling Anisabad Bye Pass, the peaceful neighborhoods around Gaighat, or the expanding areas along Bailey Road Extension—deserve access to the highest quality dairy products for your family&apos;s health and well-being.
              </p>
              <p className="mb-4">
                In today&apos;s world, finding genuine A2 milk in Anisabad can be challenging. Most commercial milk is A1 milk from hybrid cows, which may cause digestive discomfort and health issues. At Back2Nest, we&apos;re changing this by bringing pure <strong>A2 desi cow milk from indigenous Gir and Sahiwal breeds</strong> directly to homes across Anisabad, Patna.
              </p>
              <p className="mb-4">
                Our milk delivery service in Anisabad is designed with your convenience in mind. Every morning by <strong>5:00 AM</strong>, fresh A2 milk arrives at your doorstep—whether you&apos;re in a modern apartment near Anisabad Bye Pass, a traditional home in Gaighat, or anywhere in the Anisabad 800002 postal area. No more early morning trips to the market, no more worrying about milk quality or adulteration.
              </p>
            </div>
          </section>

          {/* Why Choose Us for Anisabad */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Why Anisabad Families Trust Back2Nest
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-green-100">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">100% Pure A2 Milk</h3>
                <p className="text-gray-600">
                  Sourced exclusively from indigenous Gir and Sahiwal desi cows. Every batch is tested for purity, with no mixing or adulteration. Lab certificates available.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-green-100">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">5 AM Daily Delivery</h3>
                <p className="text-gray-600">
                  Fresh milk delivered to all areas of Anisabad before sunrise. From Anisabad Bye Pass to Gaighat—reliable, on-time service every single day.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-green-100">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Health Benefits</h3>
                <p className="text-gray-600">
                  A2 milk is easier to digest, boosts immunity, and supports bone health. Perfect for children, elderly, and those with sensitive digestion.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-green-100">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Quality Assured</h3>
                <p className="text-gray-600">
                  FSSAI certified dairy processing. Strict hygiene standards from farm to doorstep. Temperature-controlled cold chain maintained throughout.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-green-100">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Local Service</h3>
                <p className="text-gray-600">
                  Proudly serving Anisabad families. We understand local needs—from morning chai preferences to festival requirements. Personalized service for every household.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-green-100">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Zap className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Flexible Plans</h3>
                <p className="text-gray-600">
                  Choose from daily, weekly, or monthly subscriptions. Pause anytime during travel. Emergency same-day delivery available for Anisabad residents.
                </p>
              </div>
            </div>
          </section>

          {/* Coverage Areas in Anisabad */}
          <section className="mb-16 bg-green-50 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Complete Coverage Across Anisabad
            </h2>
            <p className="text-gray-700 text-center mb-8 max-w-3xl mx-auto">
              We proudly deliver to every corner of Anisabad, Patna. Whether you&apos;re in the heart of the locality or in surrounding areas, our delivery network ensures fresh A2 milk reaches you by 5 AM.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg mb-3 text-green-700 flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Main Anisabad Areas
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Anisabad Bye Pass (NH 31)</li>
                  <li>✓ Gaighat Road</li>
                  <li>✓ Bailey Road Extension</li>
                  <li>✓ Anisabad Main Road</li>
                  <li>✓ Kalyanpur area</li>
                  <li>✓ Anisabad Station Road</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg mb-3 text-green-700 flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Nearby Connected Areas
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Hanuman Nagar</li>
                  <li>✓ Shastri Nagar</li>
                  <li>✓ New Bypass Road colonies</li>
                  <li>✓ All sectors within 800002 postal code</li>
                  <li>✓ Commercial areas near Anisabad Bye Pass</li>
                  <li>✓ Residential colonies near Gaighat</li>
                </ul>
              </div>
            </div>
            <p className="text-center mt-6 text-gray-600">
              <strong>Postal Code Served:</strong> 800002 (Anisabad, Patna)
            </p>
          </section>

          {/* Products Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Products Available in Anisabad
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/products/milk" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-green-500">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Milk className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">A2 Desi Cow Milk</h3>
                <p className="text-gray-600 text-center mb-3">Pure & fresh from Gir/Sahiwal cows</p>
                <p className="text-2xl font-bold text-green-600 text-center mb-3">₹89/litre</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✓ 100% A2 beta-casein protein</li>
                  <li>✓ Rich in nutrients & vitamins</li>
                  <li>✓ Easy to digest</li>
                  <li>✓ Daily delivery by 5 AM</li>
                </ul>
              </Link>

              <Link href="/products/ghee" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-green-500">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Award className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Pure Desi Ghee</h3>
                <p className="text-gray-600 text-center mb-3">Traditional bilona method</p>
                <p className="text-2xl font-bold text-green-600 text-center mb-3">₹599/500g</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✓ Made from 100% A2 milk</li>
                  <li>✓ Hand-churned bilona ghee</li>
                  <li>✓ Rich aroma & taste</li>
                  <li>✓ High nutritional value</li>
                </ul>
              </Link>

              <Link href="/products/dahi" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-green-500">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Star className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Fresh Dahi (Curd)</h3>
                <p className="text-gray-600 text-center mb-3">Thick & creamy A2 dahi</p>
                <p className="text-2xl font-bold text-green-600 text-center mb-3">₹75/500g</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✓ Made from A2 milk</li>
                  <li>✓ Rich in probiotics</li>
                  <li>✓ Thick consistency</li>
                  <li>✓ Fresh daily preparation</li>
                </ul>
              </Link>

              <Link href="/products/paneer" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-green-500">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <CheckCircle2 className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">A2 Paneer</h3>
                <p className="text-gray-600 text-center mb-3">Soft & fresh cottage cheese</p>
                <p className="text-2xl font-bold text-green-600 text-center mb-3">₹120/250g</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✓ Made from pure A2 milk</li>
                  <li>✓ Soft texture</li>
                  <li>✓ High protein content</li>
                  <li>✓ Fresh made daily</li>
                </ul>
              </Link>
            </div>
            <div className="text-center mt-8">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                View All Products & Prices
                <TrendingUp className="h-5 w-5" />
              </Link>
            </div>
          </section>

          {/* Why A2 Milk Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why A2 Milk is Better for Anisabad Families
            </h2>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <p className="text-gray-700 mb-6">
                The difference between A1 and A2 milk lies in the type of beta-casein protein. A2 milk contains only the A2 beta-casein protein, which is the original protein found in indigenous Indian cow breeds like Gir and Sahiwal. This makes A2 milk significantly healthier and easier to digest compared to regular commercial milk (A1 milk) from hybrid cows.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-green-700 mb-4">Health Benefits of A2 Milk:</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                      <span><strong>Easier Digestion:</strong> No digestive discomfort or bloating like A1 milk</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                      <span><strong>Boosts Immunity:</strong> Rich in omega-3 fatty acids and antioxidants</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                      <span><strong>Better for Children:</strong> Supports healthy growth and brain development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                      <span><strong>Bone Health:</strong> High calcium and vitamin D for strong bones</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                      <span><strong>Reduces Inflammation:</strong> May help with lactose sensitivity symptoms</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-green-700 mb-4">Perfect For:</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <Star className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-1" />
                      <span>Growing children and teenagers in Anisabad schools</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-1" />
                      <span>Elderly family members needing gentle nutrition</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-1" />
                      <span>People with mild lactose sensitivity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-1" />
                      <span>Fitness enthusiasts and athletes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-1" />
                      <span>Anyone seeking healthier dairy alternatives</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              How Our Delivery Works in Anisabad
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl font-bold text-green-600">1</span>
                </div>
                <h3 className="font-semibold mb-2">Place Order</h3>
                <p className="text-gray-600 text-sm">Order online or call us. Choose daily or subscription plan</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="font-semibold mb-2">Fresh Collection</h3>
                <p className="text-gray-600 text-sm">Milk collected from our partnered desi cow farms</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl font-bold text-green-600">3</span>
                </div>
                <h3 className="font-semibold mb-2">Quality Testing</h3>
                <p className="text-gray-600 text-sm">Lab tested for purity, hygiene, and quality standards</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl font-bold text-green-600">4</span>
                </div>
                <h3 className="font-semibold mb-2">Doorstep Delivery</h3>
                <p className="text-gray-600 text-sm">Delivered to your Anisabad home by 5 AM daily</p>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              What Anisabad Residents Say
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  &quot;Best A2 milk in Anisabad! We live near Anisabad Bye Pass and get fresh milk by 5 AM every day. My kids love it, and I feel confident about the quality.&quot;
                </p>
                <p className="font-semibold">- Priya Sharma</p>
                <p className="text-sm text-gray-600">Anisabad Bye Pass, Patna</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  &quot;Genuine desi cow milk at reasonable price. The delivery is always on time in Gaighat area. Their ghee is also excellent—pure and aromatic!&quot;
                </p>
                <p className="font-semibold">- Rajesh Kumar</p>
                <p className="text-sm text-gray-600">Gaighat, Anisabad</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  &quot;Switched to Back2Nest 3 months ago. No more digestive issues! The milk quality is consistently excellent. Highly recommend to all Anisabad families.&quot;
                </p>
                <p className="font-semibold">- Sunita Devi</p>
                <p className="text-sm text-gray-600">Bailey Road Extension, Anisabad</p>
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section className="mb-16 bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Affordable Pricing for Anisabad Residents
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-2">Daily Plan</h3>
                <p className="text-3xl font-bold text-green-600 mb-4">₹89<span className="text-lg font-normal text-gray-600">/litre</span></p>
                <ul className="space-y-2 text-gray-700 text-sm mb-6">
                  <li>✓ No commitment</li>
                  <li>✓ Order as needed</li>
                  <li>✓ Same day delivery available</li>
                  <li>✓ Perfect for occasional use</li>
                </ul>
                <Link href="/quick-order" className="block text-center bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                  Order Now
                </Link>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-green-500 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Popular
                </div>
                <h3 className="text-xl font-semibold mb-2">Weekly Plan</h3>
                <p className="text-3xl font-bold text-green-600 mb-4">₹615<span className="text-lg font-normal text-gray-600">/week</span></p>
                <ul className="space-y-2 text-gray-700 text-sm mb-6">
                  <li>✓ 7 litres included</li>
                  <li>✓ Save ₹8 per week</li>
                  <li>✓ Skip days if needed</li>
                  <li>✓ Best for regular users</li>
                </ul>
                <Link href="/quick-order" className="block text-center bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                  Subscribe Now
                </Link>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-2">Monthly Plan</h3>
                <p className="text-3xl font-bold text-green-600 mb-4">₹2499<span className="text-lg font-normal text-gray-600">/month</span></p>
                <ul className="space-y-2 text-gray-700 text-sm mb-6">
                  <li>✓ 30 litres included</li>
                  <li>✓ Save ₹170 per month</li>
                  <li>✓ Pause anytime during travel</li>
                  <li>✓ Maximum savings!</li>
                </ul>
                <Link href="/quick-order" className="block text-center bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                  Subscribe Now
                </Link>
              </div>
            </div>
            <p className="text-center mt-6 text-gray-600">
              All plans include free delivery to your Anisabad location by 5 AM daily
            </p>
          </section>

          {/* How to Order */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Easy Ordering for Anisabad Residents
            </h2>
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-green-600">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Visit Our Quick Order Page</h3>
                    <p className="text-gray-600">Go to our quick order page or call us directly at +91-XXXXXXXXXX</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-green-600">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Choose Your Products</h3>
                    <p className="text-gray-600">Select A2 milk quantity and any additional products (ghee, dahi, paneer)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-green-600">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Enter Your Anisabad Address</h3>
                    <p className="text-gray-600">Provide complete address (Near Anisabad Bye Pass, Gaighat, etc.) with landmark</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-green-600">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Select Subscription Plan</h3>
                    <p className="text-gray-600">Choose daily, weekly, or monthly plan based on your needs</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-green-600">5</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Confirm & Relax</h3>
                    <p className="text-gray-600">Your fresh A2 milk will be delivered to your doorstep by 5 AM!</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Link
                  href="/quick-order"
                  className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  Start Your Order Now
                </Link>
              </div>
            </div>
          </section>

          {/* Special Offers */}
          <section className="mb-16 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Special Offers for Anisabad Residents
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-green-700 mb-3">New Customer Offer</h3>
                <p className="text-gray-700 mb-4">
                  Get <strong>10% off</strong> on your first order! Use code: <span className="bg-green-100 px-2 py-1 rounded font-mono">ANISABAD10</span>
                </p>
                <p className="text-sm text-gray-600">Valid for first-time customers in Anisabad area</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-green-700 mb-3">Monthly Subscription Bonus</h3>
                <p className="text-gray-700 mb-4">
                  Subscribe monthly and get <strong>500g free ghee</strong> + <strong>₹170 savings</strong>
                </p>
                <p className="text-sm text-gray-600">Limited time offer for Anisabad locality</p>
              </div>
            </div>
          </section>

          {/* Nearby Areas */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              We Also Serve Nearby Areas
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/milk-delivery-patna/boring-road" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow text-center">
                <p className="font-semibold text-gray-900">Boring Road</p>
              </Link>
              <Link href="/milk-delivery-patna/kankarbagh" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow text-center">
                <p className="font-semibold text-gray-900">Kankarbagh</p>
              </Link>
              <Link href="/milk-delivery-patna/fraser-road" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow text-center">
                <p className="font-semibold text-gray-900">Fraser Road</p>
              </Link>
              <Link href="/milk-delivery-patna/bailey-road" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow text-center">
                <p className="font-semibold text-gray-900">Bailey Road</p>
              </Link>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions - Anisabad
            </h2>
            <div className="space-y-4 max-w-4xl mx-auto">
              <details className="bg-white rounded-lg shadow-md p-6">
                <summary className="font-semibold text-lg cursor-pointer">
                  Do you deliver A2 milk to all areas of Anisabad?
                </summary>
                <p className="mt-4 text-gray-700">
                  Yes, we deliver fresh A2 milk to all areas of Anisabad including Anisabad Bye Pass, Gaighat, Bailey Road Extension, and surrounding localities. We ensure coverage across the entire Anisabad postal code 800002.
                </p>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6">
                <summary className="font-semibold text-lg cursor-pointer">
                  What time does milk delivery happen in Anisabad?
                </summary>
                <p className="mt-4 text-gray-700">
                  We deliver fresh A2 milk to Anisabad homes by 5:00 AM every morning. This ensures you get farm-fresh milk right at your doorstep before sunrise, maintaining maximum freshness and nutritional value.
                </p>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6">
                <summary className="font-semibold text-lg cursor-pointer">
                  Is your A2 milk genuine and tested?
                </summary>
                <p className="mt-4 text-gray-700">
                  Yes, our A2 milk is 100% genuine and sourced from pure desi cow breeds (Gir and Sahiwal). Every batch undergoes quality testing for purity, fat content, and hygiene. We provide lab test certificates upon request.
                </p>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6">
                <summary className="font-semibold text-lg cursor-pointer">
                  What is the price of A2 milk delivery in Anisabad?
                </summary>
                <p className="mt-4 text-gray-700">
                  Our A2 desi cow milk is priced at ₹89 per litre for Anisabad residents. We also offer subscription plans with discounts: Weekly plan at ₹615 (saves ₹8), and Monthly plan at ₹2499 (saves ₹170).
                </p>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6">
                <summary className="font-semibold text-lg cursor-pointer">
                  Can I get same-day delivery in Anisabad?
                </summary>
                <p className="mt-4 text-gray-700">
                  Yes! If you order before 8 PM, you&apos;ll receive fresh A2 milk by 5 AM the next morning. For emergencies, we also offer same-day delivery for orders placed before 12 PM (subject to availability in Anisabad area).
                </p>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6">
                <summary className="font-semibold text-lg cursor-pointer">
                  Do you deliver other dairy products to Anisabad besides milk?
                </summary>
                <p className="mt-4 text-gray-700">
                  Yes, we deliver a complete range of A2 dairy products to Anisabad including Pure Desi Ghee (₹599/500g), Fresh Dahi (₹75/500g), A2 Paneer (₹120/250g), and Chhachh. All products are made from 100% pure A2 milk.
                </p>
              </details>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Experience Pure A2 Milk in Anisabad?
            </h2>
            <p className="text-xl mb-8 text-green-100">
              Join hundreds of satisfied families in Anisabad enjoying farm-fresh A2 milk every morning!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/quick-order"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition-colors inline-flex items-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Order Now - ₹89/Litre
              </Link>
              <Link
                href="/contact"
                className="bg-green-800 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-900 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
