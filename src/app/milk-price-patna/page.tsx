import { Metadata } from 'next';
import { Milk, Download, CheckCircle, Star, Award, DollarSign, TrendingDown, Package } from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Milk Price Patna | A2 Milk Rate & Plans - Back2Nest',
  description: 'Check current milk prices in Patna. Get A2 cow milk, dahi, paneer & ghee with flexible plans. Download our app for best rates on farm-fresh dairy.',
  keywords: [
    'milk price patna',
    'milk rate patna',
    'A2 milk price patna',
    'cow milk rate patna',
    'milk subscription cost patna',
    'dairy products price patna',
    'fresh milk cost patna',
    'milk delivery charges patna'
  ],
  openGraph: {
    title: 'Milk Price in Patna | Affordable A2 Milk Subscription Plans',
    description: 'Competitive pricing on pure A2 milk in Patna. Flexible daily, weekly & monthly plans available.',
    url: 'https://back2nest.in/milk-price-patna',
    type: 'website',
    images: [
      {
        url: 'https://back2nest.in/milk.jpeg',
        width: 1200,
        height: 630,
        alt: 'Milk Prices in Patna - Back2Nest Affordable A2 Milk Plans',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Milk Price in Patna | Back2Nest',
    description: 'Competitive pricing on pure A2 milk in Patna.',
    images: ['https://back2nest.in/milk.jpeg'],
  },
  alternates: {
    canonical: 'https://back2nest.in/milk-price-patna',
  },
};

export default function MilkPricePage() {
  const products = [
    {
      name: 'Fresh A2 Cow Milk',
      icon: Milk,
      features: [
        '100% Pure desi cow milk',
        'No water, no preservatives',
        'Rich in A2 protein',
        'Delivered by 5 AM daily',
        'Farm-fresh quality'
      ],
      color: 'blue'
    },
    {
      name: 'Fresh Dahi (Curd)',
      icon: Package,
      features: [
        'Made from A2 milk',
        'Natural fermentation',
        'Thick & creamy texture',
        'Probiotic-rich',
        'Made fresh daily'
      ],
      color: 'green'
    },
    {
      name: 'Fresh Paneer',
      icon: Package,
      features: [
        'Soft & natural',
        'Lemon-curdled (no chemicals)',
        'High protein content',
        'Same-day delivery',
        'From pure A2 milk'
      ],
      color: 'purple'
    },
    {
      name: 'Danedar Ghee',
      icon: Award,
      features: [
        'Traditional bilona method',
        'Granular texture',
        'Natural aroma',
        'Hand-churned',
        'Pure A2 cow ghee'
      ],
      color: 'yellow'
    }
  ];

  const subscriptionBenefits = [
    {
      icon: TrendingDown,
      title: 'Best Prices Guaranteed',
      description: 'Get the most competitive rates on pure A2 dairy products in Patna with our subscription plans.'
    },
    {
      icon: CheckCircle,
      title: 'No Hidden Charges',
      description: 'Transparent pricing with no delivery fees, no security deposit, and no surprise charges.'
    },
    {
      icon: Package,
      title: 'Flexible Plans',
      description: 'Choose daily, alternate day, or weekly delivery. Pause or modify anytime at no extra cost.'
    },
    {
      icon: Award,
      title: 'Quality Guaranteed',
      description: 'Premium quality at fair prices. If you\'re not satisfied, we\'ll replace or refund immediately.'
    }
  ];

  return (
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full mb-6">
              <DollarSign className="w-4 h-4 text-green-600" />
              <span className="text-sm font-semibold text-green-700">Affordable & Transparent Pricing</span>
            </div>

            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Milk Price in Patna – <span className="text-blue-600">Affordable Quality</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Get pure A2 cow milk and dairy products at competitive prices in Patna. Flexible subscription plans with no hidden charges. Download our app for current rates and special offers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://play.google.com/store/apps/details?id=com.app.back2nest" target="_blank" rel="noopener noreferrer"
                className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-700 transition inline-flex items-center justify-center gap-2"
              >
                <Download className="w-6 h-6" />
                Download App for Prices
              </a>
              <Link 
                href="/quick-order"
                className="border-2 border-blue-600 text-blue-600 px-10 py-4 rounded-full font-bold hover:bg-blue-50 transition"
              >
                View Products
              </Link>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
              Our Dairy Products & Pricing
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Premium quality at affordable rates - Download our app for current pricing
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product, index) => (
                <div key={index} className={`bg-gradient-to-br from-${product.color}-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition`}>
                  <product.icon className={`w-16 h-16 text-${product.color}-600 mb-4`} />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h3>
                  
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-white rounded-lg p-4 text-center">
                    <p className="text-gray-600 text-sm mb-2">Starting from</p>
                    <p className="text-3xl font-bold text-blue-600 mb-2">₹ Competitive</p>
                    <a 
                      href="https://play.google.com/store/apps/details?id=com.app.back2nest" target="_blank" rel="noopener noreferrer"
                      className="text-blue-600 font-semibold text-sm hover:underline"
                    >
                      Download app for pricing →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Subscription Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
              Why Subscribe to Back2Nest?
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {subscriptionBenefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center">
                  <benefit.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing FAQs */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
              Common Questions About Milk Prices in Patna
            </h2>

            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  What is the price of A2 milk in Patna?
                </h3>
                <p className="text-gray-700">
                  Our A2 cow milk prices are competitive and vary based on quantity and subscription plan. We offer flexible daily, weekly, and monthly subscriptions with discounted rates for long-term plans. Download our app for current pricing and special offers.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Is there a delivery charge for milk in Patna?
                </h3>
                <p className="text-gray-700">
                  No! We provide FREE home delivery across all areas of Patna for our subscription customers. No hidden charges, no delivery fees. You pay only for the products you order.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Can I get a discount on bulk orders?
                </h3>
                <p className="text-gray-700">
                  Yes! We offer attractive discounts on monthly subscriptions and bulk orders. The longer your subscription, the better the rate. Contact us to discuss custom plans for your family or business needs.
                </p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How does your price compare to packaged milk?
                </h3>
                <p className="text-gray-700">
                  While packaged milk may seem cheaper, our farm-fresh A2 milk offers superior quality, nutrition, and taste. When you factor in health benefits and purity, Back2Nest provides excellent value for money with competitive pricing.
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Can I modify or cancel my subscription?
                </h3>
                <p className="text-gray-700">
                  Absolutely! You can pause, modify quantity, or cancel your subscription anytime without any penalty or cancellation charges. We offer complete flexibility to match your changing needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <Star className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-4xl font-bold mb-6">
              Get the Best Milk Prices in Patna Today!
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Download our app to know current rates and subscribe to pure, farm-fresh A2 milk delivery at your doorstep.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="https://play.google.com/store/apps/details?id=com.app.back2nest" target="_blank" rel="noopener noreferrer"
                className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold hover:bg-blue-50 transition inline-flex items-center justify-center gap-2"
              >
                <Download className="w-6 h-6" />
                Download App
              </a>
              <Link
                href="/quick-order"
                className="bg-blue-500 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-400 transition"
              >
                Order Online
              </Link>
            </div>

            <div className="flex justify-center gap-6 text-blue-100">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>No Hidden Charges</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Free Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Best Quality</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
