import { Milk, ArrowLeft, Sun, Thermometer, Shield, Truck, CheckCircle, Clock, Droplet, Award, Users, MapPin, Flame, Snowflake, Sparkles, Phone } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Danedar Ghee - Traditional Bilona Method | Back2Nest',
  description: 'Pure danedar ghee using traditional Bilona method in Patna. Made with A2 milk, hand-churned for authentic granular texture and rich aroma. Order now!',
  keywords: 'danedar ghee Patna, bilona ghee Bihar, pure ghee delivery, A2 cow ghee, traditional ghee making, organic ghee Patna, Back2Nest ghee, hand-churned ghee, granular ghee delivery',
  openGraph: {
    title: 'Pure Danedar Ghee Making Process - Traditional Bilona Method | Back2Nest Patna',
    description: 'Discover how Back2Nest makes pure danedar ghee using traditional Bilona method in Patna with A2 milk.',
    images: [
      {
        url: 'https://www.back2nest.in/ghee.jpeg',
        width: 1200,
        height: 630,
        alt: 'Back2Nest Pure Danedar Bilona Ghee'
      }
    ],
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.back2nest.in/products/ghee',
  },
};

export default function GheeProcess() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Pure Desi Danedar Ghee - Traditional Bilona Method | Back2Nest Patna",
          "description": "Discover how Back2Nest makes authentic desi danedar ghee using traditional bilona method from A2 cow milk. Pure, granular ghee with natural aroma and taste, delivered fresh in Patna.",
          "image": "/ghee.jpeg",
          "author": {
            "@type": "Organization",
            "name": "Back2Nest"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Back2Nest",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.back2nest.in/logo.png"
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
          "name": "Pure Danedar Ghee - Traditional Bilona Method",
          "description": "Authentic bilona method danedar ghee made from A2 cow milk. Granular texture and rich aroma. Hand-churned using traditional methods for pure, natural taste.",
          "image": ["https://www.back2nest.in/ghee.jpeg"],
          "brand": { "@type": "Brand", "name": "Back2Nest" },
          "category": "Dairy Products",
          "url": "https://www.back2nest.in/products/ghee",
          "sku": "B2N-GHEE-001",
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "INR",
            "lowPrice": "450",
            "highPrice": "1800",
            "offerCount": "4",
            "availability": "https://schema.org/InStock",
            "seller": {
              "@type": "Organization",
              "name": "Back2Nest"
            },
            "url": "https://www.back2nest.in/products/ghee"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "89",
            "bestRating": "5",
            "worstRating": "1"
          },
          "additionalProperty": [
            {
              "@type": "PropertyValue",
              "name": "Preparation Method",
              "value": "Traditional Bilona hand-churning method"
            },
            {
              "@type": "PropertyValue",
              "name": "Preparation Time",
              "value": "3-4 days from milk to ghee"
            },
            {
              "@type": "PropertyValue",
              "name": "Texture",
              "value": "Danedar (Granular) - sign of purity"
            },
            {
              "@type": "PropertyValue",
              "name": "Shelf Life",
              "value": "12 months when stored properly"
            }
          ]
        })
      }} />

      <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
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

        <section className="bg-gradient-to-b from-white to-yellow-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Pure Desi Danedar Ghee<br />
                <span className="text-yellow-600">Traditional Bilona Method</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the golden goodness of authentic danedar ghee made from A2 cow milk using the ancient bilona churning method - just like our ancestors made it
              </p>
            </div>
            
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden p-8 md:p-12">
              <div className="flex justify-center">
                <Image
                  src="/ghee.jpeg"
                  alt="Back2Nest Pure Desi Danedar Ghee - Traditional bilona method ghee with granular texture, made from A2 cow milk in Patna"
                  width={1200}
                  height={800}
                  priority
                  className="max-w-full h-auto rounded-2xl shadow-lg"
                  style={{ maxHeight: '600px', objectFit: 'contain' }}
                />
              </div>
              <div className="mt-8 text-center">
                <p className="text-gray-700 text-lg">
                  <strong className="text-yellow-600">Back2Nest Desi Danedar Ghee</strong> - Golden, granular, and aromatic pure ghee
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Makes Our Ghee Special?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Danedar (granular) ghee is the purest form of ghee, made using the traditional bilona method that preserves all the natural nutrients, aroma, and authentic taste of desi ghee.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Danedar Texture</h3>
              <p className="text-gray-600">Authentic granular texture - sign of pure, traditional ghee</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">A2 Cow Milk</h3>
              <p className="text-gray-600">Made from pure A2 desi cow milk for maximum benefits</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">100% Natural</h3>
              <p className="text-gray-600">No preservatives, no additives, no colors - just pure ghee</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Flame className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Bilona Method</h3>
              <p className="text-gray-600">Traditional hand-churned process preserving all nutrients</p>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our 8-Step Traditional Ghee Making Process</h2>
              <p className="text-xl text-gray-600">Ancient bilona method passed down through generations</p>
            </div>

            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-2xl shadow-xl">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-white text-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold">1</div>
                      <Milk className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Select A2 Cow Milk</h3>
                    <p className="text-blue-50">Morning - 5:00 AM</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Premium Quality A2 Milk Selection</h4>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    We start with the finest A2 cow milk from indigenous desi breeds. A2 milk contains only A2 beta-casein protein, which is easier to digest and more nutritious than regular A1 milk. This forms the foundation of our superior quality ghee.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Sourced from indigenous desi cow breeds (Gir, Sahiwal, Red Sindhi)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Full-cream milk with high fat content for rich ghee</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>100% pure with no adulteration or mixing</span>
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
                    <p className="text-red-50">6:00 AM - 7:00 AM</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Gentle Heating Process</h4>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    Fresh A2 milk is gently boiled to concentrate it and enhance the flavor. This step also ensures complete sterilization while preserving the natural nutrients. The milk is carefully monitored to prevent burning and maintain its natural goodness.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Slow heating in traditional vessels for even temperature</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Constant stirring to prevent burning and preserve nutrients</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Cooled to lukewarm temperature for next step</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-8 rounded-2xl shadow-xl">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-white text-purple-600 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold">3</div>
                      <Droplet className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Culture & Ferment</h3>
                    <p className="text-purple-50">7:00 AM - Next Day 7:00 AM</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Converting Milk to Dahi</h4>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    Once cooled to the right temperature, we add fresh culture to convert the milk into curd (dahi). This overnight fermentation is crucial for developing the authentic flavor and makes the ghee easier to digest. The natural bacteria work their magic during this time.
                  </p>
                  <div className="bg-purple-50 p-6 rounded-xl mb-4">
                    <h5 className="font-bold text-gray-900 mb-3">Fermentation Details:</h5>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>Duration:</strong> 24 hours for complete fermentation</p>
                      <p><strong>Temperature:</strong> Maintained at 35-40°C for optimal culture growth</p>
                      <p><strong>Result:</strong> Thick, tangy curd perfect for ghee making</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Natural fermentation develops authentic desi ghee flavor</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Creates beneficial probiotics that enhance ghee quality</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-8 rounded-2xl shadow-xl">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-white text-green-600 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold">4</div>
                      <Sun className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Bilona Churning</h3>
                    <p className="text-green-50">Next Day 8:00 AM - 10:00 AM</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Traditional Hand-Churning Method</h4>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    This is the heart of the traditional bilona method! The fermented curd is churned using a wooden bilona (traditional churner) in a clockwise and anti-clockwise motion. This ancient technique separates butter from buttermilk naturally, without using any machines or heat.
                  </p>
                  <div className="bg-green-50 p-6 rounded-xl mb-4">
                    <h5 className="font-bold text-gray-900 mb-3">The Bilona Magic:</h5>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start space-x-2">
                        <Sparkles className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span><strong>Manual Churning:</strong> Done by hand or using traditional wooden equipment</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Sparkles className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span><strong>Bi-Directional:</strong> Alternating clockwise and counter-clockwise motion</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Sparkles className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span><strong>Cold Process:</strong> No heat applied, preserving all nutrients</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Sparkles className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span><strong>Duration:</strong> 2-3 hours of patient churning</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-gray-600 italic">✓ This method retains all vitamins, minerals, and natural aroma unlike machine-made ghee</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white p-8 rounded-2xl shadow-xl">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-white text-yellow-600 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold">5</div>
                      <Droplet className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Collect White Butter</h3>
                    <p className="text-yellow-50">10:00 AM - 10:30 AM</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Separating Butter from Buttermilk</h4>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    After churning, beautiful white butter (makhan) floats to the top. We carefully collect this pure butter by hand, separating it from the nutritious buttermilk (chaach). The butter collected through bilona method is superior in quality and packed with fat-soluble vitamins.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Hand-collected white butter with natural aroma</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Nutritious buttermilk saved for separate consumption</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Butter washed multiple times in pure water to remove impurities</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-8 rounded-2xl shadow-xl">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-white text-orange-600 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold">6</div>
                      <Flame className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Slow Cook Butter</h3>
                    <p className="text-orange-50">11:00 AM - 2:00 PM</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Converting Butter to Golden Ghee</h4>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    The collected butter is slowly heated on low flame in a heavy-bottomed vessel. This gentle heating process removes all water content and milk solids, leaving behind pure golden ghee. The slow cooking is the secret to achieving the authentic danedar (granular) texture.
                  </p>
                  <div className="bg-orange-50 p-6 rounded-xl mb-4">
                    <h5 className="font-bold text-gray-900 mb-3">Cooking Process:</h5>
                    <div className="space-y-3 text-gray-700">
                      <div className="flex items-center space-x-3">
                        <Thermometer className="w-5 h-5 text-orange-600" />
                        <span><strong>Temperature:</strong> Low to medium heat (100-120°C)</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-orange-600" />
                        <span><strong>Duration:</strong> 2-3 hours of slow simmering</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Flame className="w-5 h-5 text-orange-600" />
                        <span><strong>Stirring:</strong> Continuous gentle stirring to prevent burning</span>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Milk solids settle at bottom, creating natural nutty aroma</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Butter transforms into clear golden ghee</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white p-8 rounded-2xl shadow-xl">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-white text-indigo-600 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold">7</div>
                      <Sparkles className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Filter & Granulate</h3>
                    <p className="text-indigo-50">2:00 PM - 3:00 PM</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Creating Danedar Texture</h4>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    The hot ghee is filtered through muslin cloth to remove all milk solids and impurities. Then comes the magic - the ghee is allowed to cool naturally at room temperature. As it cools, it forms beautiful granules (daane), giving it the characteristic danedar texture that's a hallmark of pure bilona ghee.
                  </p>
                  <div className="bg-indigo-50 p-6 rounded-xl mb-4">
                    <h5 className="font-bold text-gray-900 mb-3">What Makes It Danedar?</h5>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>✨ Slow, natural cooling process creates crystalline granules</li>
                      <li>✨ Traditional bilona method preserves saturated fats that form granules</li>
                      <li>✨ No artificial cooling or refrigeration - nature does the work</li>
                      <li>✨ Granular texture is proof of purity and traditional preparation</li>
                    </ul>
                  </div>
                  <p className="text-gray-600 italic bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-600">
                    <strong>Note:</strong> Danedar ghee is the signature of authentic bilona ghee. The granules indicate high saturated fat content and traditional preparation method. Machine-made ghee never has this texture!
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white p-8 rounded-2xl shadow-xl">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-white text-amber-600 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold">8</div>
                      <Truck className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Pack & Deliver</h3>
                    <p className="text-amber-50">3:00 PM - 4:00 PM</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Fresh to Your Kitchen</h4>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    Once the ghee has achieved the perfect danedar consistency, it's carefully packed in food-grade glass or steel containers to preserve its purity and aroma. Each container is sealed and labeled with the preparation date. Your fresh desi ghee is then delivered to your doorstep, ready to add authentic flavor to your meals!
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Packed in airtight glass jars or stainless steel containers</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Each batch labeled with preparation date and batch number</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Delivered within 24 hours of preparation</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Shelf life: 12 months when stored properly in cool, dry place</span>
                    </li>
                  </ul>
                  <div className="mt-6 bg-amber-50 p-4 rounded-lg border-l-4 border-amber-600">
                    <p className="text-gray-700">
                      <strong className="text-amber-600">Storage Tip:</strong> Store in a cool, dry place away from direct sunlight. No refrigeration needed! Use a clean, dry spoon to scoop ghee to maintain freshness.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-yellow-600 to-yellow-700 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white mb-12">
              <h2 className="text-4xl font-bold mb-4">Health Benefits of Desi Danedar Ghee</h2>
              <p className="text-xl text-yellow-100 max-w-3xl mx-auto">
                More than just flavor - our bilona ghee is packed with incredible health benefits
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">💪 Rich in Nutrients</h3>
                <p className="text-yellow-50 leading-relaxed">
                  Packed with fat-soluble vitamins A, D, E, and K. Contains omega-3 and omega-9 fatty acids. Rich in antioxidants and conjugated linoleic acid (CLA) that supports overall health.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">🔥 Boosts Immunity</h3>
                <p className="text-yellow-50 leading-relaxed">
                  A2 ghee enhances immune function and promotes gut health. Contains butyric acid that supports healthy digestion and reduces inflammation. Natural antimicrobial properties.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">🧠 Brain Health</h3>
                <p className="text-yellow-50 leading-relaxed">
                  Essential fatty acids support brain function and memory. Helps in development of nervous system. Traditional Ayurvedic medicine uses ghee for mental clarity and focus.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">❤️ Heart Healthy</h3>
                <p className="text-yellow-50 leading-relaxed">
                  Despite being saturated fat, A2 ghee doesn't increase bad cholesterol when consumed in moderation. Contains K2 that supports cardiovascular health.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">✨ Skin & Hair</h3>
                <p className="text-yellow-50 leading-relaxed">
                  Natural moisturizer for skin and scalp. Rich in antioxidants that fight aging. Used traditionally for glowing skin and healthy hair growth.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">🍳 High Smoke Point</h3>
                <p className="text-yellow-50 leading-relaxed">
                  Perfect for high-temperature cooking (smoke point: 250°C). Doesn't break down into harmful free radicals. Ideal for deep frying, sautéing, and tadka.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Bilona Ghee vs Regular Ghee</h2>
              <p className="text-xl text-gray-600">Understand the difference that makes all the difference</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
                <thead className="bg-gradient-to-r from-yellow-600 to-yellow-700 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-lg font-bold">Feature</th>
                    <th className="px-6 py-4 text-left text-lg font-bold">Our Bilona Ghee</th>
                    <th className="px-6 py-4 text-left text-lg font-bold">Regular/Commercial Ghee</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-900">Method</td>
                    <td className="px-6 py-4 text-gray-700">Traditional hand-churned bilona method</td>
                    <td className="px-6 py-4 text-gray-700">Machine-made, cream separation</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Source</td>
                    <td className="px-6 py-4 text-gray-700">A2 desi cow milk only</td>
                    <td className="px-6 py-4 text-gray-700">Mixed A1/A2 milk or buffalo milk</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-900">Texture</td>
                    <td className="px-6 py-4 text-gray-700">Danedar (granular) - natural</td>
                    <td className="px-6 py-4 text-gray-700">Smooth, uniform texture</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Aroma</td>
                    <td className="px-6 py-4 text-gray-700">Rich, authentic nutty fragrance</td>
                    <td className="px-6 py-4 text-gray-700">Mild or artificial aroma</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-900">Nutrients</td>
                    <td className="px-6 py-4 text-gray-700">All natural vitamins preserved</td>
                    <td className="px-6 py-4 text-gray-700">Many nutrients lost in processing</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Time</td>
                    <td className="px-6 py-4 text-gray-700">3-4 days traditional process</td>
                    <td className="px-6 py-4 text-gray-700">Few hours machine process</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-900">Price</td>
                    <td className="px-6 py-4 text-gray-700">Premium (worth every rupee)</td>
                    <td className="px-6 py-4 text-gray-700">Lower cost</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">How to Use Desi Ghee</h2>
              <p className="text-xl text-gray-600">Versatile golden goodness for every meal</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🍚 Daily Cooking</h3>
                <p className="text-gray-600 mb-3">Add to dal, rice, roti, or vegetables. Use for tadka (tempering) to enhance flavor and aroma.</p>
                <p className="text-sm text-yellow-600 font-semibold">1-2 teaspoons per meal</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🍳 High-Heat Cooking</h3>
                <p className="text-gray-600 mb-3">Perfect for frying, sautéing, roasting. Doesn't produce harmful compounds at high temperatures.</p>
                <p className="text-sm text-yellow-600 font-semibold">Smoke point: 250°C</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🥞 Breakfast</h3>
                <p className="text-gray-600 mb-3">Spread on hot parathas, toast, or idli. Mix in porridge or khichdi for rich taste and energy.</p>
                <p className="text-sm text-yellow-600 font-semibold">Start your day right</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🍪 Baking & Sweets</h3>
                <p className="text-gray-600 mb-3">Essential for ladoos, halwa, kheer, and traditional Indian sweets. Adds authentic flavor to baked goods.</p>
                <p className="text-sm text-yellow-600 font-semibold">Traditional recipes</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">☕ Hot Beverages</h3>
                <p className="text-gray-600 mb-3">Add half teaspoon to hot milk, coffee, or tea. Traditional practice for strength and immunity.</p>
                <p className="text-sm text-yellow-600 font-semibold">Morning ritual</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">💆 External Use</h3>
                <p className="text-gray-600 mb-3">Massage for dry skin, chapped lips, or scalp. Natural moisturizer with healing properties.</p>
                <p className="text-sm text-yellow-600 font-semibold">Ayurvedic practice</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">Everything you need to know about danedar ghee</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">What does "danedar" mean?</h3>
                <p className="text-gray-600">
                  Danedar means "granular" in Hindi. It refers to the crystalline granules that form naturally when ghee made by traditional bilona method cools. This texture is the hallmark of pure, authentic ghee.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Why is A2 ghee better?</h3>
                <p className="text-gray-600">
                  A2 milk contains only A2 beta-casein protein, which is easier to digest and doesn't cause the digestive issues associated with A1 protein. A2 ghee is more nutritious and closer to what our ancestors consumed.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">How long does it last?</h3>
                <p className="text-gray-600">
                  When stored properly in an airtight container away from moisture and direct sunlight, our desi ghee lasts 12 months or more. No refrigeration needed! In fact, ghee improves with age.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Can lactose-intolerant people consume it?</h3>
                <p className="text-gray-600">
                  Yes! During the ghee-making process, all milk solids (including lactose and casein) are removed. Pure ghee contains virtually no lactose, making it safe for most lactose-intolerant individuals.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">How much should I consume daily?</h3>
                <p className="text-gray-600">
                  Ayurveda recommends 1-2 teaspoons (5-10ml) per day for adults. This provides essential nutrients without excessive calories. Consult your doctor if you have specific health conditions.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Is the color always the same?</h3>
                <p className="text-gray-600">
                  The color can vary from golden yellow to deeper yellow depending on the cow's diet, season, and grass quality. Variations in color are natural and indicate seasonal changes.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Back2Nest Danedar Ghee?</h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-yellow-100 p-3 rounded-full flex-shrink-0">
                        <Sparkles className="w-6 h-6 text-yellow-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">100% Pure & Authentic</h3>
                        <p className="text-gray-600">Made from A2 cow milk using traditional bilona method - no shortcuts, no compromises.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-yellow-100 p-3 rounded-full flex-shrink-0">
                        <Shield className="w-6 h-6 text-yellow-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Chemical-Free</h3>
                        <p className="text-gray-600">No preservatives, no colors, no additives - just pure, natural ghee.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-yellow-100 p-3 rounded-full flex-shrink-0">
                        <Award className="w-6 h-6 text-yellow-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Certified Quality</h3>
                        <p className="text-gray-600">FSSAI certified facility. Every batch tested for purity and quality.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-yellow-100 p-3 rounded-full flex-shrink-0">
                        <Users className="w-6 h-6 text-yellow-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Supporting Local</h3>
                        <p className="text-gray-600">We work with local desi cow dairy farmers in Patna, ensuring fair prices and quality.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-12 text-white flex flex-col justify-center">
                  <h3 className="text-3xl font-bold mb-6">Order Pure Danedar Ghee</h3>
                  <p className="text-yellow-50 mb-8 text-lg">
                    Experience the authentic taste and health benefits of traditional bilona ghee delivered to your home in Patna.
                  </p>
                  <div className="space-y-4">
                    <a href="tel:+918935904820" className="block bg-white text-yellow-600 px-8 py-4 rounded-full font-bold text-center hover:bg-yellow-50 transition">
                      Call +91 89359 04820
                    </a>
                    <Link href="/#order" className="block border-2 border-white text-white px-8 py-4 rounded-full font-bold text-center hover:bg-white/10 transition">
                      Order Online
                    </Link>
                  </div>
                  <p className="text-yellow-100 text-sm mt-6 text-center">
                    Available in 250ml, 500ml & 1L packs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-yellow-50 to-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Experience Pure Bilona Ghee?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join families across Patna who trust Back2Nest for authentic desi danedar ghee made the traditional way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+918935904820" className="bg-yellow-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-yellow-700 transition inline-flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Call +91 89359 04820</span>
              </a>
              <Link href="/#order" className="border-2 border-yellow-600 text-yellow-600 px-10 py-4 rounded-full text-lg font-semibold hover:bg-yellow-50 transition">
                Subscribe Online
              </Link>
            </div>
            <div className="mt-8 flex items-center justify-center space-x-6 text-gray-600">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Bilona Method</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>A2 Cow Milk</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>100% Natural</span>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}