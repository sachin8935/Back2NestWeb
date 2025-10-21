import { Metadata } from 'next';
import Link from 'next/link';
import { Milk, ArrowLeft, CheckCircle, Clock, Droplet, Shield, Phone, Thermometer, Flame, Snowflake, Beaker, Truck, Award } from 'lucide-react';
import Footer from '@/components/Footer';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Fresh Dahi (Curd) - Traditional Process | Back2Nest',
  description: 'Fresh, creamy dahi made using traditional methods and 100% pure milk. Same-day delivery in Patna. Order authentic homemade-style dahi today!',
  keywords: 'fresh dahi Patna, homemade curd, traditional dahi, Back2Nest dahi, dahi delivery Patna, fresh curd Patna, probiotic curd, natural dahi',
  openGraph: {
    title: 'Fresh Homemade Dahi - Traditional Process | Back2Nest',
    description: 'Experience authentic homemade dahi made daily using traditional methods. Fresh, creamy, and delivered to your doorstep in Patna.',
    images: [
      {
        url: 'https://www.back2nest.in/dahi.jpeg',
        width: 1200,
        height: 630,
        alt: 'Back2Nest Fresh Homemade Dahi in Patna'
      }
    ],
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.back2nest.in/products/dahi',
  },
};

export default function DahiProcess() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Traditional Dahi Making Process - Back2Nest's Fresh Homemade Curd in Patna",
          "description": "Discover how Back2Nest makes fresh, creamy dahi (curd) using traditional methods and pure milk. Learn about our authentic process from milk selection to same-day delivery in Patna.",
          "image": "https://www.back2nest.in/dahi.jpeg",
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
          "name": "Fresh Homemade Dahi",
          "description": "Thick, creamy dahi made daily using traditional methods from pure milk. Same-day delivery in Patna.",
          "image": ["https://www.back2nest.in/dahi.jpeg"],
          "brand": { "@type": "Brand", "name": "Back2Nest" },
          "category": "Dairy",
          "url": "https://www.back2nest.in/products/dahi",
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "INR",
            "lowPrice": "40",
            "highPrice": "80",
            "offerCount": "3",
            "availability": "https://schema.org/InStock",
            "url": "https://www.back2nest.in/products/dahi"
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
              "name": "Preparation Method",
              "value": "Traditional 8-hour fermentation"
            },
            {
              "@type": "PropertyValue",
              "name": "Delivery Time",
              "value": "Same day delivery (4-7 PM)"
            },
            {
              "@type": "PropertyValue",
              "name": "Shelf Life",
              "value": "2-3 days when refrigerated"
            },
            {
              "@type": "PropertyValue",
              "name": "Packaging",
              "value": "Food-grade airtight containers"
            }
          ]
        })
      }} />

      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
        {/* Header */}
        <header className="bg-white shadow-md sticky top-0 z-50 border-b-2 border-amber-100">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link href="/" className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-semibold transition">
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-amber-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Traditional Homemade Dahi<br />
                <span className="text-amber-600">Just Like Mom Makes It</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the authentic taste of fresh, creamy dahi made daily using time-honored traditional methods and 100% pure milk
              </p>
            </div>
            
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden p-8 md:p-12">
              <div className="flex justify-center">
                <Image
                  src="/dahi.jpeg"
                  alt="Back2Nest Fresh Homemade Dahi (Curd) - Traditional creamy curd made from pure milk, delivered daily in Patna"
                  width={1200}
                  height={800}
                  priority
                  className="max-w-full h-auto rounded-2xl shadow-lg"
                  style={{ maxHeight: '600px', objectFit: 'contain' }}
                />
              </div>
              <div className="mt-8 text-center">
                <p className="text-gray-700 text-lg">
                  <strong className="text-amber-600">Back2Nest Fresh Dahi</strong> - Thick, creamy, and naturally set
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Promise Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Back2Nest Dahi Promise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every cup of dahi is crafted with care using the same traditional method your grandmother used, ensuring authentic taste, perfect texture, and maximum probiotic benefits.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">100% Natural</h3>
              <p className="text-gray-600">No preservatives, no artificial cultures, no additives</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplet className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Thick & Creamy</h3>
              <p className="text-gray-600">Perfect consistency, rich texture every time</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Probiotic Rich</h3>
              <p className="text-gray-600">Natural live cultures for gut health</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Made Fresh Daily</h3>
              <p className="text-gray-600">Prepared and delivered the same day</p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our 6-Step Traditional Dahi Making Process</h2>
              <p className="text-xl text-gray-600">Time-tested method passed down through generations</p>
            </div>

            <div className="space-y-12">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-2xl shadow-xl">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-white text-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold">1</div>
                      <Milk className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Collect Fresh Milk</h3>
                    <p className="text-blue-50">Early Morning - 4:00 AM</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Premium Quality Milk Selection</h4>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    We start with our freshest morning milk, collected from trusted local farms. Only the best quality milk is selected for dahi making - rich in fat content and free from any impurities.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Full-cream milk with optimal fat content for thick dahi</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Tested for purity and quality - no adulteration</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Same premium milk we deliver to your doorstep</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="bg-gradient-to-br from-red-500 to-red-600 text-white p-8 rounded-2xl shadow-xl">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-white text-red-600 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold">2</div>
                      <Flame className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Boil & Cool</h3>
                    <p className="text-red-50">5:00 AM - 7:00 AM</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Perfect Temperature Control</h4>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    Fresh milk is gently boiled to enhance flavor and eliminate any unwanted bacteria. Once boiled, we cool it to the precise temperature needed for optimal curd setting.
                  </p>
                  <div className="bg-red-50 p-6 rounded-xl mb-4">
                    <h5 className="font-bold text-gray-900 mb-3">Temperature Process:</h5>
                    <div className="space-y-3 text-gray-700">
                      <div className="flex items-center space-x-3">
                        <Flame className="w-5 h-5 text-red-600" />
                        <span><strong>Boiling:</strong> Heated to 85-90°C to pasteurize naturally</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Thermometer className="w-5 h-5 text-blue-600" />
                        <span><strong>Cooling:</strong> Brought down to 40-45°C (lukewarm)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-8 rounded-2xl shadow-xl">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-white text-purple-600 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold">3</div>
                      <Beaker className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Add Culture</h3>
                    <p className="text-purple-50">7:00 AM - 7:15 AM</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Traditional Fermentation Magic</h4>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    We add fresh, live culture (dahi starter) from the previous day's batch - just like it's done at home. The milk is then transferred to clean containers.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Natural probiotic bacteria (Lactobacillus)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>No artificial cultures or chemical starters</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-8 rounded-2xl shadow-xl">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-white text-green-600 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold">4</div>
                      <Clock className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Fermentation</h3>
                    <p className="text-green-50">7:15 AM - 3:00 PM (8 hours)</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Natural Setting Process</h4>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    The containers are placed in a warm, controlled environment where nature does its work. The live cultures ferment the milk, creating the tangy flavor and thick texture.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>8-10 hours for perfect consistency</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Undisturbed setting ensures smooth dahi</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white p-8 rounded-2xl shadow-xl">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-white text-indigo-600 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold">5</div>
                      <Snowflake className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Chill & Pack</h3>
                    <p className="text-indigo-50">3:00 PM - 4:00 PM</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Quality Check & Packaging</h4>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    Once perfectly set, we immediately refrigerate to stop fermentation. Each batch is inspected for consistency, aroma, and quality before packing in food-grade containers.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Rapid cooling to 4°C preserves freshness</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Airtight, food-grade containers</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 6 */}
              <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white p-8 rounded-2xl shadow-xl">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-white text-amber-600 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold">6</div>
                      <Truck className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Deliver Same Day</h3>
                    <p className="text-amber-50">4:00 PM - 7:00 PM</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Fresh to Your Doorstep</h4>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    Your fresh dahi is delivered the same day it's made! From setting to your table in just hours - ensuring you get the freshest dahi possible.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Evening delivery (4-7 PM) for next morning freshness</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Temperature-controlled transport</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Uses Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">How to Use Our Fresh Dahi</h2>
              <p className="text-xl text-gray-600">Endless possibilities with every cup</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🥣 As It Is</h3>
                <p className="text-gray-600">Enjoy plain with salt and cumin, or add sugar for sweet dahi. Perfect breakfast!</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🥗 Raita & Salads</h3>
                <p className="text-gray-600">Mix with cucumber, onion, tomatoes, and spices. Perfect with spicy meals.</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🥤 Lassi & Smoothies</h3>
                <p className="text-gray-600">Blend with fruits. Make mango lassi, banana smoothie, or traditional chaas.</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-50 to-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🍛 Curries & Gravies</h3>
                <p className="text-gray-600">Add to kadhi, korma, or biryani. Makes gravies creamy and flavorful.</p>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🥘 Marinades</h3>
                <p className="text-gray-600">Perfect for marinating chicken, paneer, or vegetables. Tenderizes and flavors.</p>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🍨 Desserts</h3>
                <p className="text-gray-600">Make mishti doi, shrikhand, or fruit custard. Healthy dessert base.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">Everything you need to know about our dahi</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">How long does your dahi last?</h3>
                <p className="text-gray-600">
                  Our fresh dahi stays good for 2-3 days when refrigerated at 4°C. For best taste, consume within 48 hours.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Is your dahi too sour or mild?</h3>
                <p className="text-gray-600">
                  We maintain balanced tanginess - not too sour, not too mild. The 8-hour fermentation gives perfect traditional taste.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Can I get it delivered daily?</h3>
                <p className="text-gray-600">
                  Yes! We offer daily, alternate day, or weekly subscriptions based on your needs.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">What sizes are available?</h3>
                <p className="text-gray-600">
                  We offer 250ml, 500ml, and 1-liter packs. Perfect for individuals, couples, or families.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-b from-amber-50 to-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Taste the Difference?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of families in Patna who trust Back2Nest for their daily dahi needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+918935904820" className="bg-amber-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-amber-700 transition inline-flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Call +91 89359 04820</span>
              </a>
              <Link href="/products" className="border-2 border-amber-600 text-amber-600 px-10 py-4 rounded-full text-lg font-semibold hover:bg-amber-50 transition">
                View All Products
              </Link>
            </div>
            <div className="mt-8 flex items-center justify-center space-x-6 text-gray-600">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Same Day Delivery</span>
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
