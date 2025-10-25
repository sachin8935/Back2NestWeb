'use client';

import { ChevronDown, Search, MapPin, Clock, Download, Mail, Milk, Menu, X, CheckCircle } from 'lucide-react';
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
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
          Frequently Asked Questions
        </h1>
        
        <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
          Get answers to common questions about fresh milk delivery in Patna. Serving Kankarbagh, Boring Road, Rajendra Nagar, and all areas.
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-4 text-sm">
          <div className="flex items-center space-x-2 bg-black bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full border border-white border-opacity-30">
            <MapPin className="w-4 h-4 text-white" />
            <span className="font-semibold text-white">All Patna Areas</span>
          </div>
          <div className="flex items-center space-x-2 bg-black bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full border border-white border-opacity-30">
            <Clock className="w-4 h-4 text-white" />
            <span className="font-semibold text-white">5 AM - 10 AM Delivery</span>
          </div>
          <div className="flex items-center space-x-2 bg-black bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full border border-white border-opacity-30">
            <CheckCircle className="w-4 h-4 text-green-300" />
            <span className="font-semibold text-white">100% Pure Milk</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      question: "Is your milk available in Kankarbagh, Patna?",
      answer: "Yes! We deliver fresh farm milk to Kankarbagh and all major areas of Patna including Boring Road, Rajendra Nagar, Frazer Road, Bailey Road, and Exhibition Road. Download our app to check delivery availability in your specific location.",
      category: "Delivery Areas"
    },
    {
      question: "What areas in Patna do you deliver to?",
      answer: "Back2Nest delivers across Patna including Kankarbagh, Boring Road, Rajendra Nagar, Bailey Road, Frazer Road, Exhibition Road, Ashok Rajpath, S.K. Puri, Anisabad, Patliputra Colony, and many more areas. We are constantly expanding our delivery zones.",
      category: "Delivery Areas"
    },
    {
      question: "What time do you deliver milk in Patna?",
      answer: "We deliver fresh milk every morning between 5:00 AM to 10:00 AM across Patna. You can schedule your preferred delivery time slot through our mobile app.",
      category: "Delivery"
    },
    {
      question: "Is your milk pure and organic?",
      answer: "Yes, absolutely! We provide 100% pure, farm-fresh milk sourced directly from local farms near Patna. Our milk is free from preservatives, additives, and adulteration. We also offer A2 milk from desi cows for health-conscious customers.",
      category: "Quality"
    },
    {
      question: "How much does milk delivery cost in Patna?",
      answer: "Our milk prices are competitive and transparent. Regular cow milk starts from ₹60/liter, buffalo milk from ₹70/liter, and premium A2 milk from ₹85/liter. We also offer special discounts on subscription plans. Check our app for current offers and wallet recharge discounts.",
      category: "Pricing"
    },
    {
      question: "Do you offer subscription plans?",
      answer: "Yes! We offer flexible daily, weekly, and monthly subscription plans. You can pause, modify, or cancel your subscription anytime through our app. Subscription customers enjoy priority delivery and exclusive discounts.",
      category: "Subscriptions"
    },
    {
      question: "How do I place an order?",
      answer: "Download the Back2Nest app from Google Play Store, create an account, select your products and delivery preferences, and place your order. You can also download our app for assistance.",
      category: "Orders"
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major payment methods including UPI (Google Pay, DownloadPe, Paytm), debit/credit cards, net banking, and cash on delivery. You can also recharge your Back2Nest wallet for faster checkout and avail exclusive wallet offers.",
      category: "Payment"
    },
    {
      question: "Do you deliver other dairy products besides milk?",
      answer: "Yes! Besides fresh milk, we deliver dahi (curd), paneer, ghee, buttermilk, and other dairy products. All products are made from pure milk and delivered fresh to your doorstep in Patna.",
      category: "Products"
    },
    {
      question: "What is your refund policy?",
      answer: "If you receive a damaged or unsatisfactory product, contact us immediately through our app or at help@back2nest.in. We will replace the product or issue a full refund as per our refund policy.",
      category: "Policies"
    },
    {
      question: "Can I track my delivery?",
      answer: "Yes! You can track your delivery in real-time through our mobile app. You will receive notifications when your order is out for delivery and when it arrives at your doorstep.",
      category: "Delivery"
    },
    {
      question: "Is there a minimum order value?",
      answer: "No, there is no minimum order value. You can order as little as 500ml of milk. However, we recommend subscribing to our plans for better convenience and savings.",
      category: "Orders"
    },
    {
      question: "Do you deliver to Boring Road area?",
      answer: "Yes, we deliver to Boring Road and surrounding areas including Gandhi Maidan, Fraser Road, and nearby localities. Our delivery timings are 5:00 AM to 10:00 AM every day.",
      category: "Delivery Areas"
    },
    {
      question: "Is milk delivery available in Rajendra Nagar?",
      answer: "Absolutely! Rajendra Nagar is one of our primary delivery zones. We serve the entire Rajendra Nagar area including Bailey Road and Exhibition Road with fresh milk every morning.",
      category: "Delivery Areas"
    },
    {
      question: "What makes your milk different from store-bought milk?",
      answer: "Our milk is sourced directly from farms and delivered within hours of milking, ensuring maximum freshness and nutrition. Unlike store-bought milk, our products contain no preservatives, undergo minimal processing, and come straight from verified farms near Patna.",
      category: "Quality"
    },
    {
      question: "Do you offer A2 milk in Patna?",
      answer: "Yes! We offer premium A2 milk from indigenous desi cows. A2 milk is easier to digest and rich in nutrients. It's available at ₹85/liter with home delivery across Patna.",
      category: "Products"
    }
  ];

  const filteredFAQs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const categories = Array.from(new Set(faqs.map(faq => faq.category)));

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Bar */}
        <div className="mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search questions... (e.g., Kankarbagh, delivery time, A2 milk)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none text-gray-700 shadow-lg"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((category, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold"
            >
              {category}
            </span>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border-2 border-gray-100 overflow-hidden hover:shadow-xl transition"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-blue-50 transition"
                >
                  <div className="flex-1 pr-4">
                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                      {faq.category}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 mt-1">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-blue-600 flex-shrink-0 transition-transform ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-5 pt-2">
                    <div className="border-t-2 border-gray-100 pt-4">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">
                No questions found matching your search.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => (
  <section className="bg-white py-16">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-12 text-white shadow-2xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Still Have Questions?
          </h2>
          <p className="text-blue-100 text-lg">
            Our team is here to help! Contact us anytime for assistance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <a
            href="https://play.google.com/store/apps/details?id=com.app.back2nest" target="_blank" rel="noopener noreferrer"
            className="flex items-center space-x-4 bg-white bg-opacity-20 backdrop-blur-sm p-6 rounded-2xl hover:bg-opacity-30 transition border border-white border-opacity-30"
          >
            <div className="bg-white p-3 rounded-full">
              <Download className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-blue-100">Get the App</p>
              <p className="text-lg font-bold">Download Now</p>
            </div>
          </a>

          <a
            href="mailto:help@back2nest.in"
            className="flex items-center space-x-4 bg-white bg-opacity-20 backdrop-blur-sm p-6 rounded-2xl hover:bg-opacity-30 transition border border-white border-opacity-30"
          >
            <div className="bg-white p-3 rounded-full">
              <Mail className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-blue-100">Email Us</p>
              <p className="text-lg font-bold">help@back2nest.in</p>
            </div>
          </a>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:shadow-2xl transition transform hover:scale-105"
          >
            Visit Contact Page
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default function FAQPageClient() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
