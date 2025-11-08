'use client';

import { Gift, Wallet, Download, Smartphone, CheckCircle, ArrowRight, Sparkles, Tag, TrendingUp, Milk, Menu, X, Copy, Check } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import Footer from '@/components/Footer';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            <p className="text-xs text-gray-600">Farm Fresh Milk</p>
          </div>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-700 hover:text-blue-600 transition font-medium">
            Home
          </Link>
          <Link href="/products" className="text-gray-700 hover:text-blue-600 transition font-medium">
            Products
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

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-700 hover:text-blue-600 transition"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-blue-100 shadow-lg">
          <div className="px-4 py-4 space-y-4">
            <Link href="/" className="block text-gray-700 hover:text-blue-600 transition font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link href="/products" className="block text-gray-700 hover:text-blue-600 transition font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
              Products
            </Link>
            <Link href="/contact" className="block text-gray-700 hover:text-blue-600 transition font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

const HeroSection = () => (
  <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-20 overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
    </div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center">
        <div className="inline-flex items-center space-x-2 bg-black bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white border-opacity-30">
          <Gift className="w-4 h-4 text-white" />
          <span className="text-sm font-semibold text-white">Limited Time Offers</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
          Exclusive Offers & Deals
        </h1>
        
        <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
          Get amazing cashback, free products, and subscription deals! Download the Back2Nest app and save more on fresh milk delivery in Patna.
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
          <div className="flex items-center space-x-2 bg-black bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full border border-white border-opacity-30">
            <Sparkles className="w-5 h-5 text-yellow-300" />
            <span className="font-semibold text-white">5% Cashback</span>
          </div>
          <div className="flex items-center space-x-2 bg-black bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full border border-white border-opacity-30">
            <TrendingUp className="w-5 h-5 text-white" />
            <span className="font-semibold text-white">Free Products</span>
          </div>
          <div className="flex items-center space-x-2 bg-black bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full border border-white border-opacity-30">
            <CheckCircle className="w-5 h-5 text-green-300" />
            <span className="font-semibold text-white">Buy 5 Get 1</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const OffersSection = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const offers = [
    {
      code: 'CASHBACK5',
      title: '5% On Every Order',
      image: 'https://res.cloudinary.com/back2nest/image/upload/v1761587354/offer_banners/wfzhoant0wroqlukuivt.jpg',
      recharge: 'All Orders',
      discount: '5%',
      finalAmount: 'Instant Cashback',
      gradient: 'from-purple-500 to-purple-600',
      icon: Wallet,
      percentage: '5%',
      description: 'Enjoy instant 5% cashback on all your orders — because loyalty deserves rewards! ✨',
      validity: 'Valid till Nov 30, 2025',
      popular: true
    },
    {
      code: 'FREECURD',
      title: 'Free Curd',
      image: 'https://res.cloudinary.com/back2nest/image/upload/v1761587286/offer_banners/busdhs5ngusgrekmnufa.jpg',
      recharge: '₹500',
      discount: 'Free Curd',
      finalAmount: '+ Free Curd Pack',
      gradient: 'from-blue-500 to-blue-600',
      icon: Gift,
      percentage: 'FREE',
      description: 'Add ₹500 to your Back2Nest wallet and enjoy a complimentary pack of curd with your next delivery.',
      validity: 'Valid till Nov 30, 2025',
      popular: false
    },
    {
      code: 'BUY5GET1',
      title: 'Buy 5 Get 1 Free',
      image: 'https://res.cloudinary.com/back2nest/image/upload/v1761587178/offer_banners/bxqdrhzzhttryfs9xxuo.jpg',
      recharge: '5 Days',
      discount: '6th Day Free',
      finalAmount: 'Subscribe & Save',
      gradient: 'from-green-500 to-green-600',
      icon: Tag,
      percentage: '17%',
      description: 'Subscribe for 5 days of milk and get your 6th day FREE! Consistent freshness, same great taste — your morning made better.',
      validity: 'Valid till Nov 30, 2025',
      popular: false
    }
  ];

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Active Offers
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Choose Your Offer
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select the recharge amount that suits you and enjoy instant savings on your wallet
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {offers.map((offer, index) => {
            const Icon = offer.icon;
            return (
              <div 
                key={index}
                className={`relative bg-white rounded-3xl shadow-2xl overflow-hidden border-2 ${
                  offer.popular ? 'border-purple-300 transform scale-105' : 'border-blue-100'
                } hover:shadow-3xl transition duration-300 group`}
              >
                {offer.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                    <Sparkles className="w-3 h-3" />
                    POPULAR
                  </div>
                )}

                <div className={`bg-gradient-to-r ${offer.gradient} p-8 text-white relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-20">
                    <img 
                      src={offer.image} 
                      alt={offer.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-0 right-0 opacity-10">
                    <Tag className="w-32 h-32 transform rotate-12" />
                  </div>
                  <div className="flex items-center justify-between mb-4 relative z-10">
                    <div className="bg-white p-2 rounded-2xl shadow-lg">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="text-right">
                      <p className="text-xs opacity-90">Save</p>
                      <p className="text-2xl font-bold">{offer.percentage}</p>
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-2 relative z-10">{offer.title}</h3>
                  <p className="text-sm text-white opacity-90 relative z-10">{offer.validity}</p>
                </div>

                <div className="p-8">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-600">Offer Type:</span>
                      <span className="font-bold text-gray-900 text-lg">{offer.recharge}</span>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-600">You Get:</span>
                      <span className="font-bold text-green-600 text-lg">{offer.discount}</span>
                    </div>
                    <div className="border-t-2 border-dashed border-gray-200 my-3"></div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-900 font-semibold">Benefit:</span>
                      <span className="font-bold text-blue-600 text-xl">{offer.finalAmount}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {offer.description}
                  </p>

                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 mb-4 border border-gray-200">
                    <p className="text-xs text-gray-600 mb-2 font-medium">Offer Code</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-gray-900 tracking-wider font-mono">
                        {offer.code}
                      </span>
                      <button
                        onClick={() => copyToClipboard(offer.code)}
                        className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition text-sm font-medium"
                      >
                        {copiedCode === offer.code ? (
                          <>
                            <Check className="w-4 h-4 text-green-600" />
                            <span className="text-green-600">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4 text-gray-600" />
                            <span className="text-gray-600">Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  <a
                    href="https://play.google.com/store/apps/details?id=com.app.back2nest"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full bg-gradient-to-r ${offer.gradient} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-2xl transition transform hover:scale-105 flex items-center justify-center gap-2 group-hover:shadow-xl`}
                  >
                    <Download className="w-5 h-5" />
                    Redeem in App
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* How to Redeem Section */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-12 text-white shadow-2xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">How to Redeem Offers</h3>
            <p className="text-blue-100 text-lg">Follow these simple steps to avail your discount</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-3xl font-bold text-blue-600">1</span>
              </div>
              <h4 className="font-bold text-lg mb-2">Download App</h4>
              <p className="text-blue-100 text-sm">Get the Back2Nest app from Play Store</p>
            </div>

            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-3xl font-bold text-blue-600">2</span>
              </div>
              <h4 className="font-bold text-lg mb-2">Choose Offer</h4>
              <p className="text-blue-100 text-sm">Select your preferred recharge amount</p>
            </div>

            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-3xl font-bold text-blue-600">3</span>
              </div>
              <h4 className="font-bold text-lg mb-2">Apply Code</h4>
              <p className="text-blue-100 text-sm">Enter the offer code at checkout</p>
            </div>

            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-3xl font-bold text-blue-600">4</span>
              </div>
              <h4 className="font-bold text-lg mb-2">Save Money</h4>
              <p className="text-blue-100 text-sm">Get instant discount on your recharge</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MoreOffersSection = () => (
  <section className="bg-white py-20">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 border-2 border-blue-100 shadow-xl">
        <Smartphone className="w-20 h-20 mx-auto mb-6 text-blue-600" />
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Discover More Exclusive Offers!
        </h2>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Get access to exclusive deals, seasonal offers, and special promotions available only on the Back2Nest app. Download now and never miss out on amazing savings!
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="text-sm font-semibold text-gray-700">Daily Deals</span>
          </div>
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="text-sm font-semibold text-gray-700">Cashback Offers</span>
          </div>
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="text-sm font-semibold text-gray-700">Referral Bonuses</span>
          </div>
        </div>

        <a
          href="https://play.google.com/store/apps/details?id=com.app.back2nest"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full text-lg font-bold hover:shadow-2xl transition transform hover:scale-105 shadow-lg"
        >
          <Download className="w-6 h-6" />
          Download App Now
          <ArrowRight className="w-5 h-5" />
        </a>

        <p className="text-sm text-gray-500 mt-6">
          Available on Google Play Store • Free to Download
        </p>
      </div>
    </div>
  </section>
);

export default function OffersPageClient() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <OffersSection />
        <MoreOffersSection />
      </main>
      <Footer />
    </div>
  );
}
