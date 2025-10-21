import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Milk, Heart, Shield, Users, Award, Leaf, TrendingUp, Phone, ArrowRight, CheckCircle, Target, Eye, Sparkles } from 'lucide-react';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About Back2Nest - Pure Milk Delivery Service in Patna | Our Mission & Story',
  description: 'Learn about Back2Nest - Patna\'s trusted milk delivery service. Founded by a CSE graduate passionate about providing pure, unadulterated A2 milk to families. Our mission, values, and commitment to quality.',
  keywords: [
    'about back2nest',
    'back2nest story',
    'milk delivery patna company',
    'pure milk mission patna',
    'back2nest founder',
    'dairy company patna',
    'farm fresh milk bihar',
    'about us back2nest'
  ],
  openGraph: {
    title: 'About Back2Nest - Pure Milk Delivery Mission in Patna',
    description: 'Discover how Back2Nest is revolutionizing milk delivery in Patna with 100% pure A2 milk delivered fresh daily.',
    url: 'https://www.back2nest.in/about-us',
    type: 'website',
    images: [
      {
        url: 'https://www.back2nest.in/milk.jpeg',
        width: 1200,
        height: 630,
        alt: 'About Back2Nest - Fresh Milk Delivery in Patna',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Back2Nest - Pure Milk Delivery in Patna',
    description: 'Learn about our mission to bring pure, unadulterated milk to every home in Patna.',
    images: ['https://www.back2nest.in/milk.jpeg'],
  },
  alternates: {
    canonical: 'https://www.back2nest.in/about-us',
  },
};

export default function AboutUsPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Back2Nest',
    'alternateName': 'B2N',
    'url': 'https://www.back2nest.in',
    'logo': 'https://www.back2nest.in/logo.png',
    'description': 'Back2Nest provides 100% pure, farm-fresh A2 milk delivered daily to homes across Patna. Founded with a mission to eliminate milk adulteration and bring transparency to dairy delivery.',
    'foundingDate': '2024',
    'foundingLocation': {
      '@type': 'Place',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Patna',
        'addressRegion': 'Bihar',
        'addressCountry': 'IN'
      }
    },
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': '+918935904820',
      'contactType': 'Customer Service',
      'email': 'help@back2nest.in',
      'areaServed': 'Patna, Bihar',
      'availableLanguage': ['English', 'Hindi']
    },
    'sameAs': [
      'https://www.facebook.com/B2Nback2nest',
      'https://www.instagram.com/back2nest',
      'https://x.com/B2N_Back2Nest'
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <div className="min-h-screen bg-white">
        {/* Header */}
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
          <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <Heart className="w-4 h-4 inline mr-2" />
                  Our Story
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                  About <span className="text-blue-600">Back2Nest</span>
                </h1>
                <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Bringing <strong>Pure, Unadulterated Milk</strong> Back to Every Home in Patna
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <Image
                    src="/sachin.png"
                    alt="Founder of Back2Nest - Sachin, CSE Graduate passionate about pure milk delivery in Patna"
                    width={600}
                    height={600}
                    className="rounded-3xl shadow-2xl"
                    priority
                  />
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Founded on Trust, Built on Purity
                  </h2>
                  <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                    Back2Nest was born from a simple yet powerful realization: <strong>families deserve access to pure, unadulterated milk</strong> without compromise. What started as a personal mission has grown into Patna's most trusted milk delivery service.
                  </p>
                  <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                    We partner directly with local dairy farmers, eliminating middlemen and ensuring you receive <strong>farm-fresh A2 milk within hours of milking</strong>. Every morning, we deliver not just milk, but peace of mind to 127+ families across Patna.
                  </p>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Our commitment is simple: <strong>100% pure milk, delivered fresh, every single day.</strong>
                  </p>
                  <Link 
                    href="/our-story"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition"
                  >
                    Read Our Complete Story
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-gradient-to-br from-blue-50 to-white p-10 rounded-3xl shadow-lg border-2 border-blue-100">
                  <Target className="w-16 h-16 text-blue-600 mb-6" />
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    To make <strong>pure, farm-fresh A2 milk accessible to every household in Patna</strong> by building transparent, direct relationships between dairy farmers and families. We're committed to eliminating milk adulteration and bringing back trust in daily dairy consumption.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-white p-10 rounded-3xl shadow-lg border-2 border-green-100">
                  <Eye className="w-16 h-16 text-green-600 mb-6" />
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    To become <strong>Bihar's most trusted dairy brand</strong> by 2027, revolutionizing how families consume milk. We envision a future where every child in Patna grows up drinking pure, nutritious milk that supports their health and development.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Core Values */}
          <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  The principles that guide everything we do at Back2Nest
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition text-center">
                  <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Purity First</h3>
                  <p className="text-gray-600">
                    Zero tolerance for adulteration. Every drop is tested for quality and purity before delivery.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition text-center">
                  <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Customer First</h3>
                  <p className="text-gray-600">
                    Your health and satisfaction are our top priorities. We listen, adapt, and deliver excellence.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition text-center">
                  <div className="bg-amber-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Leaf className="w-10 h-10 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Sustainability</h3>
                  <p className="text-gray-600">
                    Supporting local farmers and ethical dairy practices for a sustainable future.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition text-center">
                  <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Sparkles className="w-10 h-10 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Transparency</h3>
                  <p className="text-gray-600">
                    Complete visibility into our process - from farm selection to doorstep delivery.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why We're Different */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">What Makes Us Different</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Why families across Patna trust Back2Nest for their daily milk needs
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg">
                  <Users className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Direct from Farmers</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We work directly with verified local dairy farmers, cutting out middlemen. This ensures fresher milk at fair prices while supporting local agriculture.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Farm-verified partnerships</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Fair compensation to farmers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Traceable milk sources</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg">
                  <Award className="w-12 h-12 text-green-600 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Rigorous Quality Control</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Every batch undergoes comprehensive testing. From collection to delivery, we maintain the highest standards of hygiene and quality.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>6-parameter quality testing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>FSSAI certified facility</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Cold chain maintained 4°C</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl shadow-lg">
                  <TrendingUp className="w-12 h-12 text-amber-600 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Technology Driven</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Modern technology meets traditional values. Track your delivery, manage subscriptions, and stay connected through our platform.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Real-time delivery tracking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Easy subscription management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Instant customer support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Our Impact */}
          <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">Our Impact in Patna</h2>
                <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                  The difference we're making in our community
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center">
                  <div className="text-5xl font-bold text-white mb-2">127+</div>
                  <div className="text-blue-100 text-lg">Happy Families</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center">
                  <div className="text-5xl font-bold text-white mb-2">15+</div>
                  <div className="text-blue-100 text-lg">Local Farm Partners</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center">
                  <div className="text-5xl font-bold text-white mb-2">5000+</div>
                  <div className="text-blue-100 text-lg">Liters Delivered Monthly</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center">
                  <div className="text-5xl font-bold text-white mb-2">4.8★</div>
                  <div className="text-blue-100 text-lg">Customer Rating</div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Join the Back2Nest Family Today
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Experience the difference of pure, farm-fresh milk delivered to your doorstep every morning
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+918935904820"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-700 transition text-lg"
                >
                  <Phone className="w-6 h-6" />
                  Call: 89359 04820
                </a>
                <Link
                  href="/quick-order"
                  className="inline-flex items-center justify-center gap-2 border-2 border-blue-600 text-blue-600 px-10 py-4 rounded-full font-bold hover:bg-blue-50 transition text-lg"
                >
                  Start Subscription
                  <ArrowRight className="w-6 h-6" />
                </Link>
              </div>
              <p className="text-gray-500 mt-6">
                No registration fees • Cancel anytime • 100% satisfaction guaranteed
              </p>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
