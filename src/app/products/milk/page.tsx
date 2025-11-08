import { Milk, ArrowLeft, Sun, Thermometer, Shield, Truck, CheckCircle, Clock, Droplet, Award, Users, MapPin, Download } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Fresh A2 Milk Process | Farm to Home - Back2Nest',
  description: 'Discover how Back2Nest delivers 100% pure A2 milk to your doorstep in Patna. Quality tested, fresh daily with hygienic packaging.',
  keywords: 'A2 milk Patna, fresh milk delivery Patna, farm fresh milk Bihar, pure milk home delivery, organic milk Patna, Back2Nest milk process, quality milk testing, dairy farm Patna, cow milk delivery',
  openGraph: {
    title: 'Fresh A2 Milk Process - Farm to Doorstep | Back2Nest Patna',
    description: 'Discover how Back2Nest delivers 100% pure, farm-fresh A2 milk directly to your doorstep in Patna.',
    images: [
      {
        url: 'https://back2nest.in/milk.jpeg',
        width: 1200,
        height: 630,
        alt: 'Back2Nest Fresh A2 Milk - Farm fresh milk delivered in Patna'
      }
    ],
    type: 'article',
  },
  alternates: {
    canonical: 'https://back2nest.in/products/milk',
  },
};

export default function OurProcess() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Farm to Doorstep: Back2Nest's Pure Milk Delivery Process in Patna",
          "description": "Discover how Back2Nest delivers 100% pure, farm-fresh milk directly to your doorstep in Patna. Learn about our rigorous quality testing, early morning collection, and hygienic packaging process.",
          "image": "/milk.jpeg",
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
          "name": "Fresh A2 Cow Milk - Farm to Doorstep",
          "description": "100% pure, farm-fresh A2 milk delivered daily in Patna. Collected early morning, lab-tested, and delivered chilled to your doorstep by 5 AM. No preservatives, no adulteration.",
          "image": ["https://back2nest.in/milk.jpeg"],
          "brand": { 
            "@type": "Brand", 
            "name": "Back2Nest" 
          },
          "category": "Dairy Products",
          "url": "https://back2nest.in/products/milk",
          "sku": "B2N-MILK-001",
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "INR",
            "lowPrice": "60",
            "highPrice": "85",
            "availability": "https://schema.org/InStock",
            "priceValidUntil": "2025-12-31",
            "url": "https://back2nest.in/products/milk",
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
              "name": "Milk Type",
              "value": "A2 Cow Milk"
            },
            {
              "@type": "PropertyValue",
              "name": "Delivery Time",
              "value": "5:00 AM - 7:00 AM"
            },
            {
              "@type": "PropertyValue",
              "name": "Processing",
              "value": "Raw, Farm Fresh"
            }
          ]
        })
      }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://back2nest.in/" },
            { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://back2nest.in/products" },
            { "@type": "ListItem", "position": 3, "name": "Milk", "item": "https://back2nest.in/products/milk" }
          ]
        })
      }} />

      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
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

        <section className="bg-gradient-to-b from-white to-amber-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Farm to Doorstep:<br />Our Pure Milk Journey
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover how we bring 100% pure, farm-fresh milk to your doorstep every morning in Patna
              </p>
            </div>
            
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden p-8 md:p-12">
              <div className="flex justify-center">
                <Image
                  src="/milk.jpeg"
                  alt="Back2Nest Fresh Pure Milk Product - 100% natural farm-fresh milk delivered daily in Patna"
                  width={1200}
                  height={800}
                  priority
                  className="max-w-full h-auto rounded-2xl shadow-lg"
                  style={{ maxHeight: '600px', objectFit: 'contain' }}
                />
              </div>
              <div className="mt-8 text-center">
                <p className="text-gray-700 text-lg">
                  <strong className="text-amber-600">Back2Nest Pure Milk</strong> - Fresh from local farms, delivered with care
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Back2Nest Promise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every drop of milk that reaches your doorstep goes through our rigorous 7-step quality process, ensuring you receive nothing but the purest, freshest milk directly from trusted local farms in Patna.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">100% Pure</h3>
              <p className="text-gray-600">No water, no chemicals, no preservatives - just natural milk</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Lab Tested</h3>
              <p className="text-gray-600">Every batch tested for quality and safety standards</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">FSSAI Certified</h3>
              <p className="text-gray-600">Compliant with all food safety regulations</p>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our 7-Step Milk Delivery Process</h2>
              <p className="text-xl text-gray-600">From farm to your table - excellence at every step</p>
            </div>

            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white p-8 rounded-2xl shadow-xl">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-white text-amber-600 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold">1</div>
                      <Sun className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Early Morning Collection</h3>
                    <p className="text-amber-50">3:00 AM - 4:30 AM</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Fresh from the Farm</h4>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    Our dedicated team reaches partner farms across Patna before dawn, at 3:00 AM sharp. We collect milk immediately after milking when it's at its freshest and most nutritious. This early collection ensures the milk maintains its natural goodness and flavor.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Direct collection from verified local farms in Patna region</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Milk collected within 30 minutes of milking for maximum freshness</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Temperature-controlled collection containers used immediately</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-2xl shadow-xl">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-white text-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold">2</div>
                      <Thermometer className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Immediate Chilling</h3>
                    <p className="text-blue-50">4:30 AM - 4:45 AM</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Cold Chain Management</h4>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    Within minutes of collection, milk is rapidly chilled to 4°C to preserve its natural properties and prevent bacterial growth. Our state-of-the-art chilling units ensure optimal temperature maintenance throughout the process.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Rapid cooling to 4°C within 15 minutes of collection</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Continuous temperature monitoring with digital sensors</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Prevents bacterial growth and maintains nutritional value</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-8 rounded-2xl shadow-xl">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-white text-purple-600 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold">3</div>
                      <Shield className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Quality Testing</h3>
                    <p className="text-purple-50">4:45 AM - 5:15 AM</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Rigorous Laboratory Analysis</h4>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    Every batch undergoes comprehensive testing in our in-house laboratory. Our trained quality assurance team checks multiple parameters to ensure only the best milk reaches your home. We maintain zero-tolerance for adulteration.
                  </p>
                  <div className="bg-blue-50 p-6 rounded-xl mb-4">
                    <h5 className="font-bold text-gray-900 mb-3">Tests Performed:</h5>
                    <div className="grid md:grid-cols-2 gap-3 text-gray-700">
                      <div className="flex items-center space-x-2">
                        <Droplet className="w-4 h-4 text-blue-600" />
                        <span>Fat content analysis (SNF test)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Droplet className="w-4 h-4 text-blue-600" />
                        <span>Water adulteration detection</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Droplet className="w-4 h-4 text-blue-600" />
                        <span>pH level testing</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Droplet className="w-4 h-4 text-blue-600" />
                        <span>Bacterial count test</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Droplet className="w-4 h-4 text-blue-600" />
                        <span>Synthetic milk detection</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Droplet className="w-4 h-4 text-blue-600" />
                        <span>Preservative screening</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">✓ Only batches passing all tests proceed to packaging</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-8 rounded-2xl shadow-xl">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-white text-green-600 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold">4</div>
                      <Droplet className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Filtration Process</h3>
                    <p className="text-green-50">5:15 AM - 5:30 AM</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Multi-Stage Purification</h4>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    Milk passes through our advanced multi-stage filtration system to remove any physical impurities while preserving all natural nutrients. This ensures crystal-clear, pure milk without any particles.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Three-stage filtration removes all visible impurities</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Maintains natural cream content and nutritional profile</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Food-grade stainless steel filters used</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="bg-gradient-to-br from-red-500 to-red-600 text-white p-8 rounded-2xl shadow-xl">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-white text-red-600 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold">5</div>
                      <Milk className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Hygienic Packaging</h3>
                    <p className="text-red-50">5:30 AM - 6:00 AM</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Sealed Freshness</h4>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    Fresh milk is packaged in food-grade, sanitized containers in our fully automated, hygienic packaging facility. Each container is sealed to lock in freshness and prevent any contamination during transit.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>BPA-free, food-grade packaging materials</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Tamper-evident seals on every container</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Batch number and date stamped for traceability</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Automated filling to maintain consistency</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white p-8 rounded-2xl shadow-xl">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-white text-indigo-600 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold">6</div>
                      <Truck className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Cold Chain Transport</h3>
                    <p className="text-indigo-50">6:00 AM - 7:00 AM</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Refrigerated Delivery Fleet</h4>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    Packed milk is loaded into our temperature-controlled delivery vehicles. Our specialized fleet maintains optimal temperature throughout the journey to your doorstep, ensuring milk stays fresh from our facility to your home.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Insulated delivery boxes maintain 4-6°C temperature</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>GPS-tracked vehicles for route optimization</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Trained delivery personnel handle with care</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Contactless delivery option available</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white p-8 rounded-2xl shadow-xl">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-white text-amber-600 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold">7</div>
                      <Clock className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Doorstep Delivery</h3>
                    <p className="text-amber-50">By 5:00 AM - 7:00 AM</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Fresh at Your Doorstep</h4>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    Your fresh milk arrives at your doorstep before you wake up! Our delivery team ensures your milk is placed safely at your preferred location, ready for your morning tea, coffee, or breakfast. From farm to your table in less than 4 hours!
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Guaranteed delivery by 7:00 AM daily</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Delivery at your preferred location (doorstep, gate, etc.)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Real-time delivery notifications via SMS/app</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>365 days service including weekends and holidays</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-amber-600 to-amber-700 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white mb-12">
              <h2 className="text-4xl font-bold mb-4">Why Our Process Matters</h2>
              <p className="text-xl text-amber-100 max-w-3xl mx-auto">
                Every step in our process is designed with one goal: delivering the purest, freshest milk to you and your family
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">No Intermediaries</h3>
                <p className="text-amber-50 leading-relaxed">
                  By eliminating middlemen and bringing milk directly from farms to your doorstep, we ensure maximum freshness, better prices, and complete quality control. You get farm-fresh milk at fair prices, and farmers get better returns.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">Complete Traceability</h3>
                <p className="text-amber-50 leading-relaxed">
                  Every bottle of milk can be traced back to the source farm. We maintain detailed records of collection time, testing results, and delivery details. This transparency ensures accountability and builds trust with our customers.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">Zero Adulteration</h3>
                <p className="text-amber-50 leading-relaxed">
                  Our rigorous testing and quality control measures ensure absolutely no water, chemicals, preservatives, or synthetic additives are present in our milk. What you get is 100% pure, natural milk just as nature intended.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">Supporting Local Farmers</h3>
                <p className="text-amber-50 leading-relaxed">
                  By partnering with local dairy farmers in and around Patna, we support the local economy and ensure fair compensation for farmers. Our model benefits everyone - farmers, customers, and the community.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Commitment to You</h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-amber-100 p-3 rounded-full flex-shrink-0">
                        <Shield className="w-6 h-6 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Quality Guarantee</h3>
                        <p className="text-gray-600">If you're not satisfied with the quality, we'll replace it immediately or refund your money.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-amber-100 p-3 rounded-full flex-shrink-0">
                        <Clock className="w-6 h-6 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">On-Time Delivery</h3>
                        <p className="text-gray-600">Your milk will be at your doorstep by 7:00 AM, 365 days a year.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-amber-100 p-3 rounded-full flex-shrink-0">
                        <Users className="w-6 h-6 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Customer Support</h3>
                        <p className="text-gray-600">Our team is available from 5 AM to 4 PM to assist you with any concerns.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-12 text-white flex flex-col justify-center">
                  <h3 className="text-3xl font-bold mb-6">Experience Pure Milk Delivery</h3>
                  <p className="text-amber-50 mb-8 text-lg">
                    Join thousands of families in Patna who trust Back2Nest for their daily milk needs.
                  </p>
                  <div className="space-y-4">
                    <a href="https://play.google.com/store/apps/details?id=com.app.back2nest" target="_blank" rel="noopener noreferrer" className="block bg-white text-amber-600 px-8 py-4 rounded-full font-bold text-center hover:bg-amber-50 transition">
                      Download App
                    </a>
                    <Link href="/#order" className="block border-2 border-white text-white px-8 py-4 rounded-full font-bold text-center hover:bg-white/10 transition">
                      Start Subscription
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">Everything you need to know about our milk delivery process</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">How fresh is the milk I receive?</h3>
                <p className="text-gray-600">
                  The milk you receive is collected early morning (3-4 AM), processed, tested, and delivered by 7 AM - all within 4 hours. This is as fresh as it gets!
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Is the milk pasteurized?</h3>
                <p className="text-gray-600">
                  We deliver raw, fresh milk that has been thoroughly tested and filtered. We recommend boiling before consumption as per traditional practices.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">What if I miss a delivery?</h3>
                <p className="text-gray-600">
                  You can pause or skip deliveries easily through our app before 8 PM the previous day. We're flexible with your schedule.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">How do you ensure quality?</h3>
                <p className="text-gray-600">
                  Every batch goes through 6 different quality tests including fat content, adulteration detection, pH levels, and bacterial count before delivery.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Which areas do you deliver to?</h3>
                <p className="text-gray-600">
                  We currently serve all areas within Patna city limits. Download our app from Google Play Store to check if we deliver to your location.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">What are your operating hours?</h3>
                <p className="text-gray-600">
                  Deliveries happen between 5-7 AM daily. Our customer support is available from 5 AM to 4 PM, 7 days a week.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-3xl p-12 text-center text-white">
              <MapPin className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-4xl font-bold mb-4">Visit Our Processing Center</h2>
              <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
                Transparency is at the heart of what we do. We welcome you to visit our facility and see our process firsthand.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-md mx-auto">
                <p className="font-semibold text-lg mb-2">Back2Nest Processing Center</p>
                <p className="text-amber-100">Jagat Narayan Road, Kadam Kuan</p>
                <p className="text-amber-100">Patna, Bihar 800003</p>
                <p className="mt-4 text-amber-100">Visit Hours: 6 AM - 10 AM (Prior appointment required)</p>
                <a href="https://play.google.com/store/apps/details?id=com.app.back2nest" target="_blank" rel="noopener noreferrer" className="inline-block mt-6 bg-white text-amber-600 px-6 py-3 rounded-full font-bold hover:bg-amber-50 transition">
                  Schedule a Visit
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Certifications & Standards</h2>
              <p className="text-xl text-gray-600">Committed to the highest quality and safety standards</p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl text-center">
                <Award className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">FSSAI Certified</h3>
                <p className="text-sm text-gray-600">Licensed by Food Safety and Standards Authority of India</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl text-center">
                <Shield className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Quality Tested</h3>
                <p className="text-sm text-gray-600">Regular third-party laboratory testing and audits</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl text-center">
                <CheckCircle className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">ISO Standards</h3>
                <p className="text-sm text-gray-600">Following international quality management standards</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl text-center">
                <Users className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Verified Farms</h3>
                <p className="text-sm text-gray-600">Only partnering with certified and inspected dairy farms</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-amber-50 to-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Experience Pure Milk?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join the Back2Nest family today and enjoy farm-fresh milk delivered to your doorstep every morning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://play.google.com/store/apps/details?id=com.app.back2nest" target="_blank" rel="noopener noreferrer" className="bg-amber-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-amber-700 transition inline-flex items-center justify-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Download App</span>
              </a>
              <Link href="/#order" className="border-2 border-amber-600 text-amber-600 px-10 py-4 rounded-full text-lg font-semibold hover:bg-amber-50 transition">
                Subscribe Online
              </Link>
            </div>
            <div className="mt-8 flex items-center justify-center space-x-6 text-gray-600">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>No Registration Fee</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Cancel Anytime</span>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}