import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Milk, AlertTriangle, Lightbulb, Rocket, Heart, Users, TrendingUp, Target, CheckCircle, Download, ArrowRight, Sparkles, Award } from 'lucide-react';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Our Story - Fighting Milk Adulteration in Patna',
  description: 'How a CSE graduate discovered milk adulteration in Patna and founded Back2Nest to bring pure, farm-fresh A2 milk to every home. Our journey from idea to impact.',
  keywords: [
    'back2nest story',
    'milk adulteration patna',
    'pure milk mission',
    'back2nest founder story',
    'startup story patna',
    'why back2nest started',
    'milk quality problems bihar',
    'farm to home milk delivery'
  ],
  openGraph: {
    title: 'Our Story - Fighting Milk Adulteration with Pure A2 Milk',
    description: 'From CSE graduate to milk delivery entrepreneur - the inspiring journey of Back2Nest and our mission to solve milk adulteration in Patna.',
    url: 'https://www.back2nest.in/our-story',
    type: 'article',
    images: [
      {
        url: 'https://www.back2nest.in/sachin.png',
        width: 1200,
        height: 630,
        alt: 'Back2Nest Founder - Fighting milk adulteration in Patna',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Story - How Back2Nest Is Solving Milk Adulteration',
    description: 'The inspiring journey from problem to solution - bringing pure milk to Patna families.',
    images: ['https://www.back2nest.in/sachin.png'],
  },
  alternates: {
    canonical: 'https://www.back2nest.in/our-story',
  },
};

export default function OurStoryPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Our Story - How Back2Nest Started Fighting Milk Adulteration in Patna',
    'description': 'The inspiring story of how a CSE graduate discovered the problem of milk adulteration in Patna and founded Back2Nest to bring pure, farm-fresh A2 milk to every home.',
    'image': 'https://www.back2nest.in/sachin.png',
    'datePublished': '2024-10-15',
    'dateModified': '2025-10-22',
    'author': {
      '@type': 'Person',
      'name': 'Sachin',
      'jobTitle': 'Founder & CEO',
      'alumniOf': 'Computer Science Engineering'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Back2Nest',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://www.back2nest.in/logo.png'
      }
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.back2nest.in/our-story'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
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
          <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <Sparkles className="w-4 h-4 inline mr-2" />
                  The Back2Nest Journey
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  From Problem to <span className="text-yellow-300">Solution</span>
                </h1>
                <p className="text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                  How a CSE graduate's discovery led to a mission that's changing how Patna consumes milk
                </p>
              </div>
            </div>
          </section>

          {/* Chapter 1: The Discovery */}
          <section className="py-20 bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-red-100 p-3 rounded-full">
                    <AlertTriangle className="w-8 h-8 text-red-600" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-red-600 uppercase tracking-wide">Chapter 1</div>
                    <h2 className="text-3xl font-bold text-gray-900">The Shocking Discovery</h2>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <Image
                    src="/sachin.png"
                    alt="Sachin - Founder of Back2Nest, CSE graduate fighting milk adulteration in Patna"
                    width={500}
                    height={500}
                    className="rounded-2xl shadow-2xl"
                    priority
                  />
                </div>
                <div>
                  <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                    As a <strong>Computer Science Engineering graduate</strong>, my mornings started like most Indians - with a glass of milk. I never questioned what went into that glass until one day in 2024, when I visited a local dairy farm in Patna.
                  </p>
                  <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                    What I witnessed shocked me to the core. The <strong>milk I had been drinking</strong> - and that millions of families trusted - was far from pure. Middlemen were adding water, urea, detergent, and even harmful chemicals to increase volume and profits.
                  </p>
                  <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl mb-4">
                    <p className="text-red-900 font-semibold text-lg">
                      "Up to 68% of milk samples in India fail quality tests due to adulteration."
                    </p>
                    <p className="text-red-700 text-sm mt-2">- FSSAI Report 2023</p>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    The most heartbreaking part? <strong>Parents unknowingly giving this adulterated milk to their children</strong>, believing it was nutritious. I knew something had to change.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Chapter 2: The Problem */}
          <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Target className="w-8 h-8 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-orange-600 uppercase tracking-wide">Chapter 2</div>
                    <h2 className="text-3xl font-bold text-gray-900">Understanding the Problem</h2>
                  </div>
                </div>
              </div>

              <div className="bg-white p-10 rounded-3xl shadow-xl border-2 border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Why Was Milk Adulteration So Common in Patna?
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-100 p-2 rounded-lg mt-1">
                      <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-2">Complex Supply Chains</h4>
                      <p className="text-gray-700">
                        Milk passed through 5-7 middlemen from farm to home. Each layer added opportunity for adulteration and reduced farmer profits.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-red-100 p-2 rounded-lg mt-1">
                      <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-2">Lack of Quality Testing</h4>
                      <p className="text-gray-700">
                        Most local vendors had no quality control systems. Customers had no way to verify purity before consumption.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-red-100 p-2 rounded-lg mt-1">
                      <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-2">Zero Transparency</h4>
                      <p className="text-gray-700">
                        Families had no idea where their milk came from, how it was stored, or what standards were followed.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-red-100 p-2 rounded-lg mt-1">
                      <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white text-sm font-bold">4</div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-2">Profit Over Health</h4>
                      <p className="text-gray-700">
                        Middlemen prioritized margins over consumer health, diluting milk with water and harmful additives to maximize profits.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Chapter 3: The Lightbulb Moment */}
          <section className="py-20 bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-yellow-100 p-3 rounded-full">
                    <Lightbulb className="w-8 h-8 text-yellow-600" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-yellow-600 uppercase tracking-wide">Chapter 3</div>
                    <h2 className="text-3xl font-bold text-gray-900">The Solution Takes Shape</h2>
                  </div>
                </div>
              </div>

              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  I spent weeks researching dairy supply chains, interviewing local farmers, and studying successful milk delivery models. The solution became clear: <strong>eliminate the middlemen entirely.</strong>
                </p>

                <div className="bg-gradient-to-br from-blue-50 to-white p-10 rounded-3xl shadow-xl border-2 border-blue-100 mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    The Back2Nest Model Was Born
                  </h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-blue-600 text-lg mb-3">Direct Farm Partnerships</h4>
                      <p className="text-gray-700 mb-4">
                        Work directly with verified local dairy farmers. No middlemen. Fair prices for farmers, pure milk for customers.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Personally visit each farm</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Verify cattle health & feed</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Ensure ethical practices</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-600 text-lg mb-3">Rigorous Quality Control</h4>
                      <p className="text-gray-700 mb-4">
                        Test every batch for 6 parameters. Maintain cold chain at 4°C from collection to delivery.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Fat content verification</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Adulteration detection</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">FSSAI compliance</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Using my technical background, I designed a simple yet effective system: <strong>Morning collection → Quick testing → Immediate delivery</strong>. The milk you receive is less than 6 hours old, maintaining maximum freshness and nutrition.
                </p>
              </div>
            </div>
          </section>

          {/* Chapter 4: The Launch */}
          <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Rocket className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-green-600 uppercase tracking-wide">Chapter 4</div>
                    <h2 className="text-3xl font-bold text-gray-900">From Idea to Impact</h2>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-600">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 px-3 py-1 rounded-lg font-bold text-blue-700">Oct 2024</div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-2">First Delivery Day</h4>
                      <p className="text-gray-700">
                        Started with just <strong>5 families in Boring Road, Patna</strong>. I personally delivered every bottle, explaining our mission and promise. The nervousness was real, but so was the excitement.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-600">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 px-3 py-1 rounded-lg font-bold text-green-700">Nov 2024</div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-2">Word Spreads</h4>
                      <p className="text-gray-700">
                        Within a month, we grew to <strong>25 families</strong>. Mothers started calling their friends. The taste and purity spoke for itself. No marketing needed - just pure milk and happy customers.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-purple-600">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 px-3 py-1 rounded-lg font-bold text-purple-700">Jan 2025</div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-2">Expanding Reach</h4>
                      <p className="text-gray-700">
                        Launched service in <strong>Kankarbagh and Patliputra</strong>. Added dahi, paneer, and ghee to the product line based on customer requests. Built a small team to maintain quality as we scaled.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-yellow-600">
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-100 px-3 py-1 rounded-lg font-bold text-yellow-700">Oct 2025</div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-2">Today - Serving 127+ Families</h4>
                      <p className="text-gray-700">
                        <strong>127+ happy families, 15+ farm partners, 5000+ liters monthly.</strong> Every morning, we deliver not just milk, but the promise of purity we made on day one.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Chapter 5: Our Mission Today */}
          <section className="py-20 bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Heart className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-blue-600 uppercase tracking-wide">Chapter 5</div>
                    <h2 className="text-3xl font-bold text-gray-900">Our Mission Continues</h2>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-12 rounded-3xl text-white shadow-2xl">
                <h3 className="text-3xl font-bold mb-6">Why We Do This Every Day</h3>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <Award className="w-12 h-12 mb-4 text-yellow-300" />
                    <h4 className="font-bold text-xl mb-3">For Families</h4>
                    <p className="text-blue-100 leading-relaxed">
                      Every child deserves to grow up with pure, nutritious milk. We're giving parents peace of mind knowing their family consumes only the best.
                    </p>
                  </div>
                  <div>
                    <Users className="w-12 h-12 mb-4 text-yellow-300" />
                    <h4 className="font-bold text-xl mb-3">For Farmers</h4>
                    <p className="text-blue-100 leading-relaxed">
                      Our direct partnerships ensure farmers get fair compensation. No middlemen means better income for those who do the hard work.
                    </p>
                  </div>
                  <div>
                    <TrendingUp className="w-12 h-12 mb-4 text-yellow-300" />
                    <h4 className="font-bold text-xl mb-3">For Community</h4>
                    <p className="text-blue-100 leading-relaxed">
                      Building a transparent, trustworthy dairy ecosystem in Bihar. Setting standards that others will follow.
                    </p>
                  </div>
                  <div>
                    <Target className="w-12 h-12 mb-4 text-yellow-300" />
                    <h4 className="font-bold text-xl mb-3">For the Future</h4>
                    <p className="text-blue-100 leading-relaxed">
                      Proving that business success and ethical practices can go hand-in-hand. Creating a model for sustainable dairy delivery.
                    </p>
                  </div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl text-center">
                  <p className="text-2xl font-bold mb-2">
                    Our goal: Serve 10,000 families across Bihar by 2027
                  </p>
                  <p className="text-blue-100">
                    Making pure milk accessible to everyone, everywhere
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Be Part of Our Story
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Join the growing family of 127+ households choosing purity over convenience
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://play.google.com/store/apps/details?id=com.app.back2nest" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-700 transition text-lg"
                >
                  <Download className="w-6 h-6" />
                  Download App - Start Your Journey
                </a>
                <Link
                  href="/quick-order"
                  className="inline-flex items-center justify-center gap-2 border-2 border-blue-600 text-blue-600 px-10 py-4 rounded-full font-bold hover:bg-blue-50 transition text-lg"
                >
                  Subscribe Now
                  <ArrowRight className="w-6 h-6" />
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>100% Pure A2 Milk</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Farm-Fresh Daily</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Cancel Anytime</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Zero Adulteration</span>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
