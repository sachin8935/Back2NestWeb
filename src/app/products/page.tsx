import { Metadata } from 'next';
import Link from 'next/link';
import { Milk, ArrowLeft, Shield, CheckCircle, Award, Thermometer, Droplet, Sparkles, Phone, Heart, Users, Truck, Clock, Sun, Flame, Leaf, Eye, Settings } from 'lucide-react';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.back2nest.in'),
  title: 'Fresh Dairy Products Patna | A2 Milk, Dahi, Paneer & Ghee - Back2Nest',
  description: 'Buy pure dairy products in Patna - Farm-fresh A2 milk, thick dahi, soft paneer, and traditional danedar ghee. Delivered daily to your doorstep. Order now!',
  keywords: ['dairy products patna', 'A2 milk patna', 'fresh dahi patna', 'paneer delivery patna', 'danedar ghee patna', 'buy milk online patna', 'dairy store patna', 'farm fresh products patna'],
  openGraph: {
    title: 'Premium Dairy Products Patna | Fresh A2 Milk, Dahi, Paneer & Ghee',
    description: 'Order pure, fresh dairy products delivered daily in Patna. A2 milk, dahi, paneer, and bilona ghee made with traditional methods.',
    url: 'https://www.back2nest.in/products',
    siteName: 'Back2Nest',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://www.back2nest.in/milk.jpeg',
        width: 1200,
        height: 630,
        alt: 'Back2Nest Premium Dairy Products - Fresh Milk, Dahi, Paneer & Ghee in Patna',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Dairy Products Patna',
    description: 'Order pure, fresh dairy products delivered daily in Patna.',
    images: ['https://www.back2nest.in/milk.jpeg'],
    creator: '@B2N_Back2Nest',
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
  alternates: {
    canonical: 'https://www.back2nest.in/products',
  },
};

export default function ProductsHub() {
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
        "name": "Products",
        "item": "https://www.back2nest.in/products"
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbSchema)
      }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Back2Nest Products - Fresh Milk, Dahi, Paneer & Ghee | Patna",
          "description": "Explore Back2Nest's range of pure dairy products made with highest safety standards. Fresh A2 milk, creamy dahi, soft paneer, and traditional danedar ghee delivered daily in Patna.",
          "url": "https://www.back2nest.in/products"
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
                Our Premium Dairy Products<br />
                <span className="text-amber-600">Pure, Fresh & Safe</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the authentic taste of traditional dairy products made with modern hygiene standards. Every product is crafted with care, following the highest safety guidelines for your family's health.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Product Range</h2>
            <p className="text-xl text-gray-600">Click on any product to learn about our detailed process</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Link href="/products/milk" className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <Milk className="w-24 h-24 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition">Fresh A2 Milk</h3>
                <p className="text-gray-600 mb-4">Pure desi cow milk delivered fresh daily. Farm-to-doorstep in 2 hours.</p>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Morning & evening delivery</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>No water, no preservatives</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Rich in natural nutrients</span>
                  </div>
                </div>
                <div className="mt-4 text-blue-600 font-semibold flex items-center space-x-2">
                  <span>Learn Our Process</span>
                  <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition" />
                </div>
              </div>
            </Link>

            <Link href="/products/dahi" className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <Droplet className="w-24 h-24 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition">Fresh Dahi (Curd)</h3>
                <p className="text-gray-600 mb-4">Thick, creamy dahi made from A2 milk with natural culture. Perfect consistency every time.</p>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Natural fermentation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Probiotic-rich</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Made fresh daily</span>
                  </div>
                </div>
                <div className="mt-4 text-green-600 font-semibold flex items-center space-x-2">
                  <span>Learn Our Process</span>
                  <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition" />
                </div>
              </div>
            </Link>
            <Link href="/products/paneer" className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                <Heart className="w-24 h-24 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition">Fresh Taaza Paneer</h3>
                <p className="text-gray-600 mb-4">Soft, natural paneer curdled with fresh lemon. No chemicals, pure taste.</p>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Natural lemon curdling</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>High protein content</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Same-day delivery</span>
                  </div>
                </div>
                <div className="mt-4 text-purple-600 font-semibold flex items-center space-x-2">
                  <span>Learn Our Process</span>
                  <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition" />
                </div>
              </div>
            </Link>

            <Link href="/products/ghee" className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
                <Sparkles className="w-24 h-24 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition">Danedar Ghee</h3>
                <p className="text-gray-600 mb-4">Traditional bilona method ghee with granular texture. Pure golden goodness.</p>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Hand-churned bilona method</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Authentic granular texture</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>100% natural process</span>
                  </div>
                </div>
                <div className="mt-4 text-yellow-600 font-semibold flex items-center space-x-2">
                  <span>Learn Our Process</span>
                  <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition" />
                </div>
              </div>
            </Link>
          </div>
        </section>

        <section className="bg-gradient-to-br from-amber-600 to-amber-700 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white mb-16">
              <Shield className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-4xl font-bold mb-4">Our Safety Guidelines & Standards</h2>
              <p className="text-xl text-amber-100 max-w-3xl mx-auto">
                Your family's health is our top priority. We follow stringent safety protocols at every step of production.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">FSSAI Certified</h3>
                <p className="text-amber-50 leading-relaxed">
                  Our facility is FSSAI certified and regularly inspected. We comply with all food safety regulations and maintain proper licensing for all our dairy products.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Quality Testing</h3>
                <p className="text-amber-50 leading-relaxed">
                  Every batch undergoes quality testing for purity, fat content, and adulterants. We test for added water, urea, starch, and other common adulterations daily.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Thermometer className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Temperature Control</h3>
                <p className="text-amber-50 leading-relaxed">
                  Strict cold chain management from collection to delivery. Milk is chilled immediately after collection and maintained at 4°C throughout the supply chain.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Food-Grade Equipment</h3>
                <p className="text-amber-50 leading-relaxed">
                  All equipment is food-grade stainless steel. Vessels, churners, and storage containers are sanitized before and after each use with approved cleaning agents.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Staff Hygiene</h3>
                <p className="text-amber-50 leading-relaxed">
                  All staff undergo regular health checkups and maintain strict personal hygiene. Mandatory use of hair nets, gloves, and sanitized uniforms during production.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Droplet className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Clean Water Source</h3>
                <p className="text-amber-50 leading-relaxed">
                  We use RO-filtered water for all washing and processing. Water quality is tested regularly for pH, TDS, and bacterial contamination to ensure purity.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What Makes Us Different?</h2>
              <p className="text-xl text-gray-600">Our commitment to quality, purity, and tradition</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-4 rounded-full flex-shrink-0">
                    <Milk className="w-8 h-8 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">100% A2 Cow Milk</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We source milk exclusively from indigenous desi cow breeds (Gir, Sahiwal, Red Sindhi) that produce only A2 protein. A2 milk is easier to digest and more nutritious than regular A1 milk, making it ideal for children, elderly, and those with sensitive stomachs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-4 rounded-full flex-shrink-0">
                    <Leaf className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">No Chemicals or Preservatives</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We never use any chemicals, preservatives, colors, or artificial additives in any of our products. Our paneer is curdled with natural lemon juice, not chemicals. Our ghee is made using traditional bilona method. Everything is 100% natural and pure.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-4 rounded-full flex-shrink-0">
                    <Clock className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Fresh Daily Production</h3>
                    <p className="text-gray-600 leading-relaxed">
                      All our products are made fresh every single day. Milk is delivered within 2 hours of milking. Dahi and paneer are prepared fresh each morning. We don't believe in storing products for days - what you get is always fresh and flavorful.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-4 rounded-full flex-shrink-0">
                    <Heart className="w-8 h-8 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Traditional Methods</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We combine the wisdom of traditional dairy-making methods with modern hygiene standards. Our ghee is hand-churned using the ancient bilona technique. Our paneer uses natural lemon curdling just like your grandmother made it. Tradition meets safety!
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-4 rounded-full flex-shrink-0">
                    <Shield className="w-8 h-8 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Maximum Hygiene</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We maintain the highest level of hygiene at every step - from collection to delivery. Food-grade equipment, sanitized surfaces, regular health checks, clean water, and proper temperature control ensure that your products are safe and healthy.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-100 p-4 rounded-full flex-shrink-0">
                    <Truck className="w-8 h-8 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Direct to Doorstep</h3>
                    <p className="text-gray-600 leading-relaxed">
                      No middlemen, no delays. We deliver directly from our facility to your doorstep in Patna. This ensures freshness, reduces handling, and gives you the best price. Plus, our delivery team maintains strict hygiene protocols during delivery.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Production Standards</h2>
              <p className="text-xl text-gray-600">Transparency in every step</p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                    <span>What We DO</span>
                  </h3>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Source milk from verified desi cow farms only</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Test every batch for quality and purity</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Use natural ingredients (lemon for paneer, natural culture for dahi)</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Follow traditional methods with modern hygiene</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Maintain strict temperature control throughout</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Sanitize all equipment before and after use</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Deliver within hours of production</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Label every product with date and batch number</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                      <span className="text-red-600 font-bold text-xl">✕</span>
                    </div>
                    <span>What We DON'T DO</span>
                  </h3>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-1 flex-shrink-0">
                        <span className="text-red-600 text-xs font-bold">✕</span>
                      </div>
                      <span>Never add water or any adulterants to milk</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-1 flex-shrink-0">
                        <span className="text-red-600 text-xs font-bold">✕</span>
                      </div>
                      <span>Never use chemicals for curdling (citric acid, vinegar)</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-1 flex-shrink-0">
                        <span className="text-red-600 text-xs font-bold">✕</span>
                      </div>
                      <span>Never add preservatives or artificial colors</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-1 flex-shrink-0">
                        <span className="text-red-600 text-xs font-bold">✕</span>
                      </div>
                      <span>Never mix A1 milk or buffalo milk in our products</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-1 flex-shrink-0">
                        <span className="text-red-600 text-xs font-bold">✕</span>
                      </div>
                      <span>Never store products for days before delivery</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-1 flex-shrink-0">
                        <span className="text-red-600 text-xs font-bold">✕</span>
                      </div>
                      <span>Never compromise on hygiene or quality standards</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-1 flex-shrink-0">
                        <span className="text-red-600 text-xs font-bold">✕</span>
                      </div>
                      <span>Never use synthetic milk powder or reconstituted milk</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-1 flex-shrink-0">
                        <span className="text-red-600 text-xs font-bold">✕</span>
                      </div>
                      <span>Never skip quality testing or temperature control</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Visit Our Process Pages</h2>
              <p className="text-xl text-gray-600">Learn the detailed step-by-step process for each product</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Link href="/products/milk" className="group bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-blue-600 p-4 rounded-full">
                    <Milk className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Fresh Milk Process</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Discover how we collect, test, and deliver fresh A2 milk within 2 hours. Learn about our quality checks and cold chain management.
                </p>
                <div className="text-blue-600 font-semibold flex items-center space-x-2">
                  <span>View Detailed Process</span>
                  <ArrowLeft className="w-5 h-5 rotate-180 group-hover:translate-x-2 transition" />
                </div>
              </Link>

              <Link href="/products/dahi" className="group bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-green-600 p-4 rounded-full">
                    <Droplet className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Fresh Dahi Process</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Learn how we make thick, creamy dahi using natural fermentation. See our temperature control and culture preparation methods.
                </p>
                <div className="text-green-600 font-semibold flex items-center space-x-2">
                  <span>View Detailed Process</span>
                  <ArrowLeft className="w-5 h-5 rotate-180 group-hover:translate-x-2 transition" />
                </div>
              </Link>

              <Link href="/products/paneer" className="group bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-purple-600 p-4 rounded-full">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Fresh Paneer Process</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Discover our natural lemon curdling method that creates the softest paneer. Learn why we never use chemicals or preservatives.
                </p>
                <div className="text-purple-600 font-semibold flex items-center space-x-2">
                  <span>View Detailed Process</span>
                  <ArrowLeft className="w-5 h-5 rotate-180 group-hover:translate-x-2 transition" />
                </div>
              </Link>

              <Link href="/products/ghee" className="group bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-yellow-600 p-4 rounded-full">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Danedar Ghee Process</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Explore our traditional bilona method that takes 3-4 days. See how we create authentic granular ghee with natural aroma.
                </p>
                <div className="text-yellow-600 font-semibold flex items-center space-x-2">
                  <span>View Detailed Process</span>
                  <ArrowLeft className="w-5 h-5 rotate-180 group-hover:translate-x-2 transition" />
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-amber-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Award className="w-16 h-16 text-amber-600 mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Quality Commitment</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We take pride in delivering products that we would serve to our own families
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="bg-amber-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl font-bold text-amber-600">100%</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Pure & Natural</h3>
                <p className="text-gray-600">
                  No adulteration, no water mixing, no synthetic additives. Every product is as pure as nature intended.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl font-bold text-green-600">24h</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Fresh Daily</h3>
                <p className="text-gray-600">
                  All products made fresh every single day. What you receive today was made this morning - guaranteed freshness.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl font-bold text-blue-600">A2</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Desi Cow Only</h3>
                <p className="text-gray-600">
                  Exclusively sourced from indigenous desi cow breeds. A2 protein for better digestion and health benefits.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-12">
                  <h2 className="text-3xl font-bold text-white mb-6">Experience Pure Dairy Products</h2>
                  <p className="text-amber-50 text-lg mb-8 leading-relaxed">
                    Visit our product pages to learn the detailed process behind each item. See how traditional methods meet modern hygiene standards to bring you the finest dairy products in Patna.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-white">
                      <CheckCircle className="w-6 h-6 flex-shrink-0" />
                      <span className="text-lg">FSSAI Certified Facility</span>
                    </div>
                    <div className="flex items-center space-x-3 text-white">
                      <CheckCircle className="w-6 h-6 flex-shrink-0" />
                      <span className="text-lg">Daily Quality Testing</span>
                    </div>
                    <div className="flex items-center space-x-3 text-white">
                      <CheckCircle className="w-6 h-6 flex-shrink-0" />
                      <span className="text-lg">Maximum Hygiene Standards</span>
                    </div>
                    <div className="flex items-center space-x-3 text-white">
                      <CheckCircle className="w-6 h-6 flex-shrink-0" />
                      <span className="text-lg">100% Natural Ingredients</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Order Now</h3>
                  <p className="text-gray-600 mb-8 text-lg">
                    Start your journey to healthier living with our pure dairy products delivered fresh to your doorstep.
                  </p>
                  <div className="space-y-4">
                    <a href="tel:+918935904820" className="block bg-amber-600 text-white px-8 py-4 rounded-full font-bold text-center hover:bg-amber-700 transition text-lg">
                      Call +91 89359 04820
                    </a>
                    <Link href="/#order" className="block border-2 border-amber-600 text-amber-600 px-8 py-4 rounded-full font-bold text-center hover:bg-amber-50 transition text-lg">
                      Subscribe Online
                    </Link>
                  </div>
                  <p className="text-gray-500 text-sm mt-6 text-center">
                    Free delivery across Patna | Daily delivery options available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-amber-50 to-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Have Questions About Our Products?</h2>
            <p className="text-xl text-gray-600 mb-8">
              We're here to help! Call us or explore our detailed process pages to learn everything about how we make our products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+918935904820" className="bg-amber-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-amber-700 transition inline-flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Call Us: +91 89359 04820</span>
              </a>
              <Link href="/#order" className="border-2 border-amber-600 text-amber-600 px-10 py-4 rounded-full text-lg font-semibold hover:bg-amber-50 transition">
                View All Products
              </Link>
            </div>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/products/milk" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center group">
                <Milk className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition">Milk Process</p>
              </Link>
              <Link href="/products/dahi" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center group">
                <Droplet className="w-10 h-10 text-green-600 mx-auto mb-3" />
                <p className="font-semibold text-gray-900 group-hover:text-green-600 transition">Dahi Process</p>
              </Link>
              <Link href="/products/paneer" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center group">
                <Heart className="w-10 h-10 text-purple-600 mx-auto mb-3" />
                <p className="font-semibold text-gray-900 group-hover:text-purple-600 transition">Paneer Process</p>
              </Link>
              <Link href="/products/ghee" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center group">
                <Sparkles className="w-10 h-10 text-yellow-600 mx-auto mb-3" />
                <p className="font-semibold text-gray-900 group-hover:text-yellow-600 transition">Ghee Process</p>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}