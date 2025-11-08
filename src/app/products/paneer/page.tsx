import { Milk, ArrowLeft, Sun, Thermometer, Shield, Truck, CheckCircle, Clock, Droplet, Award, Users, MapPin, Flame, Snowflake, Sparkles, Download, Heart } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Fresh Paneer Process - Homemade Quality | Back2Nest',
  description: 'Fresh, soft paneer made daily in Patna using pure A2 milk and natural coagulation. Authentic homemade taste with hygienic packaging. Order today!',
  keywords: 'fresh paneer Patna, homemade paneer delivery, pure paneer Bihar, paneer making process, A2 milk paneer, organic paneer Patna, Back2Nest paneer, soft paneer delivery, cottage cheese Patna',
  openGraph: {
    title: 'Fresh Paneer Making Process - Homemade Quality | Back2Nest Patna',
    description: 'Discover how Back2Nest makes fresh, soft paneer daily in Patna using pure A2 milk and traditional methods.',
    images: [
      {
        url: 'https://back2nest.in/paneer.jpeg',
        width: 1200,
        height: 630,
        alt: 'Back2Nest Fresh Paneer made with natural lemon curdling'
      }
    ],
    type: 'article',
  },
  alternates: {
    canonical: 'https://back2nest.in/products/paneer',
  },
};

export default function PaneerProcess() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Fresh Taaza Paneer - Natural Lemon Curdling | Back2Nest Patna",
          "description": "Discover how Back2Nest makes fresh taaza paneer using natural lemon curdling from pure A2 cow milk. Chemical-free, hygienic, and delivered fresh daily in Patna.",
          "image": "/paneer.jpeg",
          "author": {
            "@type": "Organization",
            "name": "Back2Nest"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Back2Nest",
            "logo": {
              "@type": "ImageObject",
              "url": "https://back2nest.in/logo.png"
            }
          },
          "datePublished": "2025-01-15",
          "dateModified": "2025-01-15"
        })
      }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Fresh Taaza Paneer - Natural Lemon Curdling",
          "description": "Soft, natural lemon-curdled paneer made from pure A2 cow milk. Delivered fresh daily in Patna. No chemicals, authentic homemade taste.",
          "image": ["https://back2nest.in/paneer.jpeg"],
          "brand": { "@type": "Brand", "name": "Back2Nest" },
          "category": "Dairy Products",
          "url": "https://back2nest.in/products/paneer",
          "sku": "B2N-PANEER-001",
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "INR",
            "lowPrice": "80",
            "highPrice": "180",
            "offerCount": "3",
            "availability": "https://schema.org/InStock",
            "priceValidUntil": "2025-12-31",
            "url": "https://back2nest.in/products/paneer",
            "hasMerchantReturnPolicy": {
              "@type": "MerchantReturnPolicy",
              "applicableCountry": "IN",
              "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
              "merchantReturnDays": 0,
              "returnMethod": "https://schema.org/ReturnByMail",
              "returnFees": "https://schema.org/FreeReturn"
            },
            "shippingDetails": {
              "@type": "OfferShippingDetails",
              "shippingRate": {
                "@type": "MonetaryAmount",
                "value": "0",
                "currency": "INR"
              },
              "shippingDestination": {
                "@type": "DefinedRegion",
                "addressCountry": "IN",
                "addressRegion": "Bihar"
              },
              "deliveryTime": {
                "@type": "ShippingDeliveryTime",
                "handlingTime": {
                  "@type": "QuantitativeValue",
                  "minValue": "0",
                  "maxValue": "1",
                  "unitCode": "DAY"
                },
                "transitTime": {
                  "@type": "QuantitativeValue",
                  "minValue": "0",
                  "maxValue": "1",
                  "unitCode": "DAY"
                }
              }
            },
            "seller": {
              "@type": "Organization",
              "name": "Back2Nest"
            }
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "127",
            "bestRating": "5",
            "worstRating": "1"
          },
          "additionalProperty": [
            {
              "@type": "PropertyValue",
              "name": "Curdling Method",
              "value": "Natural lemon juice - no chemicals"
            },
            {
              "@type": "PropertyValue",
              "name": "Preparation Time",
              "value": "4 hours from milk to paneer"
            },
            {
              "@type": "PropertyValue",
              "name": "Delivery Time",
              "value": "Same day delivery (4-7 PM)"
            },
            {
              "@type": "PropertyValue",
              "name": "Shelf Life",
              "value": "3-4 days when refrigerated at 4°C"
            }
          ]
        })
      }} />

      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Milk className="w-8 h-8 text-amber-600" />
              <span className="text-2xl font-bold text-gray-900">Back<span className="text-amber-600">2</span>Nest</span>
            </Link>
            <Link href="/" className="flex items-center space-x-2 text-amber-600 hover:text-amber-700 transition">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
          </nav>
        </header>

        <section className="bg-gradient-to-b from-white to-green-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Fresh Taaza Paneer<br />
                <span className="text-green-600">Made with Natural Lemon Curdling</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the pure, soft, and fresh paneer made from A2 cow milk using natural lemon juice - no chemicals, no preservatives, just authentic taste delivered daily
              </p>
            </div>
            
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden p-8 md:p-12">
              <div className="flex justify-center">
                <Image
                  src="/paneer.jpeg"
                  alt="Back2Nest Fresh Taaza Paneer - Natural lemon-curdled paneer, made from pure A2 cow milk in Patna"
                  width={1200}
                  height={800}
                  priority
                  className="max-w-full h-auto rounded-2xl shadow-lg"
                  style={{ maxHeight: '600px', objectFit: 'contain' }}
                />
              </div>
              <div className="mt-8 text-center">
                <p className="text-gray-700 text-lg">
                  <strong className="text-green-600">Back2Nest Fresh Taaza Paneer</strong> - Soft, pure, and wholesome cottage cheese
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Makes Our Paneer Special?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our paneer is made fresh daily using natural lemon juice for curdling, ensuring the highest quality, taste, and nutrition without any harmful chemicals.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sun className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Natural Lemon</h3>
              <p className="text-gray-600">Fresh lemon juice for natural curdling - no chemicals</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">A2 Cow Milk</h3>
              <p className="text-gray-600">Made from pure A2 desi cow milk for soft texture</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Maximum Hygiene</h3>
              <p className="text-gray-600">Highest hygiene standards maintained throughout</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Snowflake className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fresh Daily</h3>
              <p className="text-gray-600">Made fresh every morning and delivered same day</p>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our 7-Step Fresh Paneer Making Process</h2>
              <p className="text-xl text-gray-600">Natural, hygienic, and chemical-free method</p>
            </div>

            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-2xl shadow-xl">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-white text-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold">1</div>
                      <Milk className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Select Fresh A2 Milk</h3>
                    <p className="text-blue-50">Morning - 5:00 AM</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Premium Quality A2 Milk</h4>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    We start with the freshest full-cream A2 cow milk from indigenous desi breeds. The quality of milk directly affects the softness and taste of paneer, which is why we use only the best A2 milk available.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>100% pure A2 cow milk from desi breeds</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Full-cream milk for rich, soft paneer texture</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Fresh morning milk - never stored overnight</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="bg-gradient-to-br from-red-500 to-red-600 text-white p-8 rounded-2xl shadow-xl">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-white text-red-600 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold">2</div>
                      <Flame className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Boil the Milk</h3>
                    <p className="text-red-50">6:00 AM - 6:30 AM</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Gentle Heating in Hygienic Vessels</h4>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    Fresh milk is heated to the perfect temperature in food-grade stainless steel vessels. This step ensures complete sterilization while preserving the natural proteins needed for soft paneer. Our hygienic process ensures zero contamination.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Food-grade stainless steel vessels for hygiene</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Controlled heating to preserve milk proteins</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Continuous stirring prevents burning</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white p-8 rounded-2xl shadow-xl">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-white text-yellow-600 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold">3</div>
                      <Sun className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Add Fresh Lemon</h3>
                    <p className="text-yellow-50">6:30 AM - 6:45 AM</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Natural Lemon Curdling - The Secret!</h4>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    This is what makes our paneer special! We use freshly squeezed lemon juice to curdle the milk naturally. Unlike commercial paneer that uses chemicals like citric acid or vinegar, our natural lemon method ensures the softest texture and best taste.
                  </p>
                  <div className="bg-yellow-50 p-6 rounded-xl mb-4">
                    <h5 className="font-bold text-gray-900 mb-3">Why Natural Lemon?</h5>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start space-x-2">
                        <Sparkles className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
                        <span><strong>100% Natural:</strong> No chemicals, acids, or preservatives</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Sparkles className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
                        <span><strong>Softer Texture:</strong> Lemon creates the softest, most delicate paneer</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Sparkles className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
                        <span><strong>Better Taste:</strong> No chemical aftertaste, just pure flavor</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Sparkles className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
                        <span><strong>Healthier:</strong> Natural vitamin C from lemon</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-gray-600 italic">✓ Fresh lemons squeezed daily - never bottled lemon juice</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-8 rounded-2xl shadow-xl">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-white text-green-600 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold">4</div>
                      <Droplet className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Separate Curds & Whey</h3>
                    <p className="text-green-50">6:45 AM - 7:00 AM</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Gentle Curdling Process</h4>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    As soon as lemon juice is added, the milk begins to curdle naturally. The white milk solids (curds) separate from the greenish liquid (whey). We give it time to curdle completely, ensuring all proteins are captured in the paneer.
                  </p>
                  <div className="bg-green-50 p-6 rounded-xl mb-4">
                    <h5 className="font-bold text-gray-900 mb-3">The Curdling Science:</h5>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>Temperature:</strong> Maintained at 85-90°C for optimal curdling</p>
                      <p><strong>pH Level:</strong> Natural lemon brings milk to perfect pH 4.6</p>
                      <p><strong>Time:</strong> 10-15 minutes for complete separation</p>
                      <p><strong>Result:</strong> Soft white curds floating in clear whey</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Complete protein separation for maximum yield</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Nutritious whey saved separately</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-8 rounded-2xl shadow-xl">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-white text-purple-600 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold">5</div>
                      <Droplet className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Drain & Wash</h3>
                    <p className="text-purple-50">7:00 AM - 7:30 AM</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Multiple Washing for Purity</h4>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    The curds are carefully transferred to clean muslin cloth and drained. Then we wash the paneer multiple times with fresh, clean water to remove all traces of whey and lemon, ensuring pure white color and neutral taste.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Food-grade muslin cloth for draining</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>3-4 times washing with filtered water</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Removes all lemon taste - pure paneer flavor</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Maintains hygiene at every step</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white p-8 rounded-2xl shadow-xl">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-white text-indigo-600 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold">6</div>
                      <Shield className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Press & Set</h3>
                    <p className="text-indigo-50">7:30 AM - 9:00 AM</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Shaping the Perfect Paneer Block</h4>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    The washed curds are placed in a clean mold and gently pressed to remove excess water and set into a firm block. The pressing time and weight are carefully controlled to achieve the perfect texture - soft yet firm enough to cut.
                  </p>
                  <div className="bg-indigo-50 p-6 rounded-xl mb-4">
                    <h5 className="font-bold text-gray-900 mb-3">Pressing Details:</h5>
                    <div className="space-y-3 text-gray-700">
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-indigo-600" />
                        <span><strong>Duration:</strong> 1-1.5 hours gentle pressing</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Shield className="w-5 h-5 text-indigo-600" />
                        <span><strong>Weight:</strong> Controlled pressure for soft texture</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Thermometer className="w-5 h-5 text-indigo-600" />
                        <span><strong>Temperature:</strong> Room temperature setting</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">✓ Just the right firmness - not too hard, not too soft!</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white p-8 rounded-2xl shadow-xl">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-white text-amber-600 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold">7</div>
                      <Truck className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Pack & Deliver Fresh</h3>
                    <p className="text-amber-50">9:00 AM - 4:00 PM</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Same Day Delivery</h4>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    Once set, the paneer is cut into perfect blocks and immediately packed in food-grade packaging. We deliver it the same day it's made, ensuring you get the freshest paneer possible. This is why our paneer stays soft for days!
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Food-grade vacuum packaging for freshness</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Each pack labeled with preparation date</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Delivered within hours of preparation</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Best consumed within 3-4 days when refrigerated</span>
                    </li>
                  </ul>
                  <div className="mt-6 bg-amber-50 p-4 rounded-lg border-l-4 border-amber-600">
                    <p className="text-gray-700">
                      <strong className="text-amber-600">Storage Tip:</strong> Keep refrigerated at 4°C. For best taste, bring to room temperature before cooking. Use within 3-4 days for maximum freshness.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-green-600 to-green-700 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white mb-12">
              <h2 className="text-4xl font-bold mb-4">Health Benefits of Fresh Paneer</h2>
              <p className="text-xl text-green-100 max-w-3xl mx-auto">
                A powerhouse of nutrition in every bite
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">💪 High Protein</h3>
                <p className="text-green-50 leading-relaxed">
                  Excellent source of complete protein with all essential amino acids. Perfect for muscle building, weight loss, and vegetarian diet. 100g paneer contains 18-20g protein.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">🦴 Strong Bones</h3>
                <p className="text-green-50 leading-relaxed">
                  Rich in calcium and phosphorus for healthy bones and teeth. Helps prevent osteoporosis. Essential for growing children and elderly. One serving provides 40% of daily calcium needs.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">🧠 Brain Development</h3>
                <p className="text-green-50 leading-relaxed">
                  Contains omega-3 and omega-6 fatty acids. Supports cognitive function and memory. Rich in vitamin B12 for nervous system health. Great for children's brain development.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">⚡ Energy Booster</h3>
                <p className="text-green-50 leading-relaxed">
                  Quick source of energy from healthy fats and proteins. Keeps you full longer, reducing snacking. Ideal pre-workout and post-workout food for sustained energy.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">❤️ Heart Health</h3>
                <p className="text-green-50 leading-relaxed">
                  Contains conjugated linoleic acid (CLA) that supports heart health. Omega-3 fatty acids reduce inflammation. Low in cholesterol when made from A2 milk.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">🩺 Diabetes Friendly</h3>
                <p className="text-green-50 leading-relaxed">
                  Low glycemic index - doesn't spike blood sugar. High protein content helps regulate glucose levels. Good choice for diabetic patients when consumed in moderation.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Natural Lemon vs Chemical Curdling</h2>
              <p className="text-xl text-gray-600">Why our method makes all the difference</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
                <thead className="bg-gradient-to-r from-green-600 to-green-700 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-lg font-bold">Feature</th>
                    <th className="px-6 py-4 text-left text-lg font-bold">Our Lemon-Curdled Paneer</th>
                    <th className="px-6 py-4 text-left text-lg font-bold">Chemical/Commercial Paneer</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-900">Curdling Agent</td>
                    <td className="px-6 py-4 text-gray-700">Fresh natural lemon juice</td>
                    <td className="px-6 py-4 text-gray-700">Citric acid, vinegar, or chemicals</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Texture</td>
                    <td className="px-6 py-4 text-gray-700">Soft, crumbly, melts in mouth</td>
                    <td className="px-6 py-4 text-gray-700">Hard, rubbery, chewy</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-900">Taste</td>
                    <td className="px-6 py-4 text-gray-700">Pure, mild, no aftertaste</td>
                    <td className="px-6 py-4 text-gray-700">Acidic or chemical aftertaste</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Freshness</td>
                    <td className="px-6 py-4 text-gray-700">Made and delivered same day</td>
                    <td className="px-6 py-4 text-gray-700">May be several days old</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-900">Preservatives</td>
                    <td className="px-6 py-4 text-gray-700">Zero - 100% natural</td>
                    <td className="px-6 py-4 text-gray-700">Often contains preservatives</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Digestibility</td>
                    <td className="px-6 py-4 text-gray-700">Easy to digest, gentle on stomach</td>
                    <td className="px-6 py-4 text-gray-700">May cause acidity or bloating</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-900">Nutrition</td>
                    <td className="px-6 py-4 text-gray-700">All nutrients preserved + Vitamin C</td>
                    <td className="px-6 py-4 text-gray-700">May lose nutrients in processing</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Delicious Ways to Use Fresh Paneer</h2>
              <p className="text-xl text-gray-600">From traditional curries to modern dishes</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🍛 Classic Curries</h3>
                <p className="text-gray-600 mb-3">Paneer Butter Masala, Palak Paneer, Kadhai Paneer, Matar Paneer - perfect for rich, creamy gravies.</p>
                <p className="text-sm text-green-600 font-semibold">Most popular dishes</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🥗 Healthy Salads</h3>
                <p className="text-gray-600 mb-3">Cube and add to salads for protein boost. Perfect for weight watchers. Can be eaten raw or grilled.</p>
                <p className="text-sm text-green-600 font-semibold">High protein, low carb</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🌯 Wraps & Rolls</h3>
                <p className="text-gray-600 mb-3">Paneer Tikka Rolls, Frankie, Kathi Rolls. Quick snacks and lunch boxes. Kids love them!</p>
                <p className="text-sm text-green-600 font-semibold">Perfect for lunch</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🍢 Tikka & Kebabs</h3>
                <p className="text-gray-600 mb-3">Paneer Tikka, Malai Paneer, Tandoori Paneer. Marinate and grill for smoky flavor. Party favorite!</p>
                <p className="text-sm text-green-600 font-semibold">BBQ special</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🍝 Pasta & Pizza</h3>
                <p className="text-gray-600 mb-3">Great substitute for mozzarella. Use in pasta, pizza, lasagna. Fusion cooking made easy.</p>
                <p className="text-sm text-green-600 font-semibold">Modern twist</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🍰 Sweets & Desserts</h3>
                <p className="text-gray-600 mb-3">Paneer Kheer, Paneer Sandesh, Rasgulla base. Traditional Indian sweets made at home.</p>
                <p className="text-sm text-green-600 font-semibold">Sweet treats</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">Everything you need to know about our fresh paneer</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Why use lemon instead of chemicals?</h3>
                <p className="text-gray-600">
                  Natural lemon juice creates the softest, most digestible paneer without any chemical residue or aftertaste. It's healthier, tastier, and more natural - just like homemade paneer!
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">How long does fresh paneer last?</h3>
                <p className="text-gray-600">
                  Our fresh paneer stays soft for 3-4 days when refrigerated at 4°C. Since we use no preservatives, it's best consumed fresh for maximum taste and nutrition.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Can I freeze the paneer?</h3>
                <p className="text-gray-600">
                  Yes! You can freeze paneer for up to a month. Wrap it tightly in plastic wrap and store in an airtight container. Thaw in refrigerator before use. Texture may become slightly crumbly.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Is your paneer good for weight loss?</h3>
                <p className="text-gray-600">
                  Absolutely! High protein content keeps you full longer and boosts metabolism. Low in carbs and rich in healthy fats. Perfect for keto and high-protein diets.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">What makes it so soft?</h3>
                <p className="text-gray-600">
                  Three factors: A2 milk quality, natural lemon curdling (gentler than chemicals), and controlled pressing. Plus, we deliver it fresh the same day it's made!
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Do you maintain hygiene standards?</h3>
                <p className="text-gray-600">
                  Yes! We follow the highest hygiene standards - food-grade equipment, clean water, sanitized surfaces, and regular health checks. Our facility follows FSSAI guidelines.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-green-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Back2Nest Fresh Paneer?</h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                        <Sun className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">100% Natural Lemon</h3>
                        <p className="text-gray-600">No chemicals, no citric acid, no vinegar - only fresh lemon juice for the softest texture.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                        <Shield className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Maximum Hygiene</h3>
                        <p className="text-gray-600">Food-grade equipment, sanitized surfaces, and the highest cleanliness standards throughout.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                        <Heart className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Made with A2 Milk</h3>
                        <p className="text-gray-600">Pure A2 cow milk for better taste, nutrition, and digestibility.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                        <Snowflake className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Fresh Daily Delivery</h3>
                        <p className="text-gray-600">Made fresh every morning and delivered the same day - no storage, no aging.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-500 to-green-600 p-12 text-white flex flex-col justify-center">
                  <h3 className="text-3xl font-bold mb-6">Order Fresh Taaza Paneer</h3>
                  <p className="text-green-50 mb-8 text-lg">
                    Experience the softest, most delicious paneer made naturally with lemon and delivered fresh to your home in Patna.
                  </p>
                  <div className="space-y-4">
                    <a href="https://play.google.com/store/apps/details?id=com.app.back2nest" target="_blank" rel="noopener noreferrer" className="block bg-white text-green-600 px-8 py-4 rounded-full font-bold text-center hover:bg-green-50 transition">
                      Download App
                    </a>
                    <Link href="/#order" className="block border-2 border-white text-white px-8 py-4 rounded-full font-bold text-center hover:bg-white/10 transition">
                      Order Online
                    </Link>
                  </div>
                  <p className="text-green-100 text-sm mt-6 text-center">
                    Available in 200g, 500g & 1kg packs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-green-50 to-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready for the Softest Paneer Ever?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join families across Patna who trust Back2Nest for fresh, natural, lemon-curdled paneer delivered daily.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://play.google.com/store/apps/details?id=com.app.back2nest" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition inline-flex items-center justify-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Download App</span>
              </a>
              <Link href="/#order" className="border-2 border-green-600 text-green-600 px-10 py-4 rounded-full text-lg font-semibold hover:bg-green-50 transition">
                Subscribe Online
              </Link>
            </div>
            <div className="mt-8 flex items-center justify-center space-x-6 text-gray-600">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Natural Lemon</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>A2 Cow Milk</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Fresh Daily</span>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}