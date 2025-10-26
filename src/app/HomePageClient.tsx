'use client';

import { Milk, Clock, MapPin, Phone, Mail, CheckCircle, Star, Truck, Shield, Droplets, Heart, Award, Leaf, Users, Download, Smartphone, Package, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import dynamic from 'next/dynamic';

// Lazy load Footer for better initial page load
const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="h-96 bg-gray-50" />,
  ssr: true,
});

// Header Component with Mobile Menu
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b-2 border-blue-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 rounded-full shadow-lg">
            <Milk className="w-7 h-7 text-white" />
          </div>
          <div>
            <span className="text-2xl font-bold text-gray-900">
              Back<span className="text-blue-600">2</span>Nest
            </span>
            <p className="text-xs text-gray-600">Farm Fresh Milk</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/reviews" className="text-gray-700 hover:text-blue-600 transition font-medium">
            Reviews
          </Link>
          <Link href="/products" className="text-gray-700 hover:text-blue-600 transition font-medium">
            Our Products
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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-700 hover:text-blue-600 transition"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-blue-100 shadow-lg">
          <div className="px-4 py-4 space-y-4">
            <Link 
              href="/reviews" 
              className="block text-gray-700 hover:text-blue-600 transition font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Reviews
            </Link>
            <Link 
              href="/products" 
              className="block text-gray-700 hover:text-blue-600 transition font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </Link>
            <Link 
              href="/contact" 
              className="block text-gray-700 hover:text-blue-600 transition font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              href="/quick-order" 
              className="block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full hover:shadow-xl transition shadow-lg font-semibold text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Order Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

// Hero Section Component
const HeroSection = () => (
  <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 overflow-hidden">
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl animate-pulse"></div>
    </div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-blue-50 px-4 py-2 rounded-full mb-6 border border-blue-200">
            <Droplets className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">100% Farm Fresh & Pure</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Pure Milk Delivery in Patna – Fresh A2 Milk at Your Doorstep
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Get 100% pure A2 cow milk delivered to your home in Patna by 5 AM every morning. Farm-fresh, chemical-free, and naturally creamy. Trusted by 127+ families across Patna.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a 
              href="https://play.google.com/store/apps/details?id=com.app.back2nest"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition shadow-lg text-center transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download App
            </a>
            <Link 
              href="/quick-order" 
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition text-center flex items-center justify-center gap-2"
            >
              <Package className="w-5 h-5" />
              Quick Order
            </Link>
          </div>
          
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <div className="flex items-center space-x-2 bg-yellow-50 px-4 py-2 rounded-full">
              <Star className="w-5 h-5 text-yellow-500 fill-current" />
              <span className="font-semibold text-gray-700">4.8/5 Rating</span>
            </div>
            <div className="flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-full">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="font-semibold text-gray-700">100% Pure</span>
            </div>
            <div className="flex items-center space-x-2 bg-red-50 px-4 py-2 rounded-full">
              <Heart className="w-5 h-5 text-red-500 fill-current" />
              <span className="font-semibold text-gray-700">127+ Families</span>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="relative bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-3xl p-3 shadow-2xl transform hover:rotate-1 transition duration-500">
            <Image
              src="https://res.cloudinary.com/back2nest/image/upload/v1760552874/offer_banners/em79ofmcsxf5upawy9b7.png"
              alt="Pure A2 cow milk delivery in Patna - Back2Nest farm fresh milk home delivery by 5 AM daily"
              width={700}
              height={700}
              className="rounded-2xl shadow-lg w-full object-cover h-96"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={90}
            />
          </div>
          
          <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl border-4 border-blue-100 hover:scale-105 transition">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-lg">Delivered by 5 AM</p>
                <p className="text-sm text-gray-600">Fresh Every Morning</p>
              </div>
            </div>
          </div>
          
          <div className="absolute -top-6 -right-6 bg-gradient-to-br from-blue-600 to-blue-700 text-white p-5 rounded-2xl shadow-xl hover:scale-105 transition">
            <div className="text-center">
              <Award className="w-8 h-8 mx-auto mb-2" />
              <p className="font-bold text-sm">Premium Quality</p>
              <p className="text-xs opacity-90">Certified</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Features Section Component
const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: "100% Pure & Natural Milk",
      description: "Zero adulteration, no water mixing, no preservatives. Pure milk exactly as it comes from trusted farms in Patna—naturally creamy and nutritious.",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Truck,
      title: "Direct Farm to Doorstep",
      description: "From local partner farms to your home within hours. No middlemen, no storage delays—ensuring maximum freshness and nutritional value daily.",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: Clock,
      title: "5 AM Morning Delivery",
      description: "Fresh milk arrives at your doorstep by 5 AM every day. Perfect timing for morning tea, breakfast, and all your daily cooking needs.",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      icon: Droplets,
      title: "Rich & Creamy Texture",
      description: "Full-fat, naturally rich milk from well-cared-for cows. Taste the real difference in every sip—perfect for health, flavor, and family wellness.",
      gradient: "from-cyan-500 to-cyan-600"
    },
    {
      icon: Heart,
      title: "Health & Nutrition First",
      description: "Packed with natural proteins, calcium, vitamins A & D. Our farm-fresh milk supports strong bones, immunity, and overall family health.",
      gradient: "from-red-500 to-red-600"
    },
    {
      icon: Leaf,
      title: "Sustainable & Ethical",
      description: "Supporting local Patna farmers and sustainable practices. Our cows are healthy, happy, and raised with care—milk you can feel good about.",
      gradient: "from-emerald-500 to-emerald-600"
    }
  ];

  return (
    <section id="features" className="bg-gradient-to-b from-white to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Why Choose Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Patna Families Trust Back2Nest
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We bring farm-fresh goodness to your family with care, purity, and dedication every single morning
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border border-blue-100 group hover:-translate-y-2"
              >
                <div className={`bg-gradient-to-br ${feature.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// How It Works Section
const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      title: "Download Our App",
      description: "Get the Back2Nest app from Google Play Store to start your fresh milk delivery subscription in Patna",
      icon: Smartphone
    },
    {
      number: "2",
      title: "Choose Your Plan",
      description: "Select your preferred daily quantity and delivery schedule that perfectly fits your family's needs",
      icon: CheckCircle
    },
    {
      number: "3",
      title: "Enjoy Fresh Milk",
      description: "Wake up to pure, farm-fresh milk at your doorstep by 5 AM every morning—hassle-free and reliable",
      icon: Milk
    }
  ];

  return (
    <section id="how-it-works" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Simple Process
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get Started in 3 Easy Steps
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From subscription to daily delivery—it's simple, quick, and convenient
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center relative">
                <div className="relative inline-block">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-xl relative z-10">
                    {step.number}
                  </div>
                  <div className="absolute inset-0 bg-blue-200 rounded-full blur-xl opacity-50 animate-pulse"></div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border-2 border-blue-100 hover:shadow-lg transition">
                  <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-1 bg-gradient-to-r from-blue-300 to-blue-200 -z-10"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// App Download Section (replaces order form for SEO-friendly, conversion-focused CTA)
const AppDownloadSection = () => (
  <section id="order" className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-20 overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
    </div>

    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <div className="mb-12">
        <div className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
          Get Started Today
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Start Your Fresh Milk Subscription
        </h2>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
          Join 127+ happy families in Patna enjoying pure, farm-fresh milk delivered every morning at 5 AM
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-8">
        {/* Download App CTA */}
        <a
          href="https://play.google.com/store/apps/details?id=com.app.back2nest"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-blue-700 p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition transform hover:scale-105 group"
        >
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
            <Download className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Download Our App</h3>
          <p className="text-gray-600 mb-4">
            Order milk, manage subscriptions, and track deliveries—all in one app
          </p>
          <div className="inline-flex items-center gap-2 text-blue-600 font-semibold">
            <Smartphone className="w-5 h-5" />
            Get on Google Play
          </div>
        </a>

        

        {/* View Products CTA */}
        <Link
          href="/quick-order"
          className="bg-white text-blue-700 p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition transform hover:scale-105 group"
        >
          <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
            <Package className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Quick Order</h3>
          <p className="text-gray-600 mb-4">
            Browse our fresh milk products and choose your daily subscription plan
          </p>
          <div className="inline-flex items-center gap-2 text-green-600 font-semibold">
            <Package className="w-5 h-5" />
            Explore Now
          </div>
        </Link>
      </div>

      <div className="text-center">
        <p className="text-blue-100 text-lg mb-3">Available Daily: 5:00 AM - 4:00 PM</p>
        <p className="text-blue-200 text-sm">Serving all areas across Patna with farm-fresh milk delivery</p>
      </div>
    </div>
  </section>
);

// Contact Section
const ContactSection = () => {
  const contactInfo = [
    {
      icon: Smartphone,
      title: "Download Our App",
      detail: "Order on Google Play",
      link: "https://play.google.com/store/apps/details?id=com.app.back2nest",
      subtext: "Easy ordering & tracking",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: Mail,
      title: "Email Support",
      detail: "help@back2nest.in",
      link: "mailto:help@back2nest.in",
      subtext: "Quick response guaranteed",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: MapPin,
      title: "Visit Our Office",
      detail: "Jagat Narayan Road, Kadam Kuan",
      subtext: "Patna, Bihar 800003",
      gradient: "from-red-500 to-red-600"
    }
  ];

  return (
    <section id="contact" className="bg-gradient-to-b from-white to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            We're Here to Serve You
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about our fresh milk delivery service? Reach out to us anytime!
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition text-center border-2 border-blue-100 group hover:-translate-y-2 duration-300">
                <div className={`bg-gradient-to-br ${contact.gradient} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{contact.title}</h3>
                {contact.link ? (
                  <a href={contact.link} target={contact.link.startsWith('http') ? '_blank' : undefined} rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined} className="text-blue-600 hover:text-blue-700 text-lg font-semibold block mb-2 hover:underline">
                    {contact.detail}
                  </a>
                ) : (
                  <p className="text-gray-700 text-lg font-semibold mb-2">{contact.detail}</p>
                )}
                <p className="text-gray-600 text-sm">{contact.subtext}</p>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-center text-white shadow-2xl">
          <Users className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h3 className="text-3xl font-bold mb-4">Join the Back2Nest Family Today!</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Experience the joy of waking up to fresh, pure milk every morning. Switch to farm-fresh quality now!
          </p>
          <a 
            href="https://play.google.com/store/apps/details?id=com.app.back2nest"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition transform hover:scale-105"
          >
            Start Your Subscription
          </a>
        </div>
      </div>
    </section>
  );
};

// Main Component
export default function HomePageClient() {
  // Breadcrumb Schema for SEO
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://back2nest.in"
      }
    ]
  };

  // FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What time is milk delivered in Patna?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We deliver fresh milk to your doorstep in Patna by 5 AM every morning. This ensures you get farm-fresh milk for your morning tea and breakfast."
        }
      },
      {
        "@type": "Question",
        "name": "Is Back2Nest milk pure A2 milk?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we source milk exclusively from indigenous desi cow breeds (Gir, Sahiwal, Red Sindhi) that naturally produce only A2 protein. Our milk is 100% pure with no adulteration or water mixing."
        }
      },
      {
        "@type": "Question",
        "name": "Which areas in Patna do you deliver milk?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We deliver across all major areas in Patna including Boring Road, Kankarbagh, Patliputra Colony, Rajendra Nagar, Fraser Road, Kadam Kuan, Bailey Road, and many more localities."
        }
      },
        {
        "@type": "Question",
        "name": "How do I subscribe to daily milk delivery in Patna?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Download the Back2Nest app from Google Play Store, create an account, select your products and delivery preferences, and place your order. You can also use our website's quick order form. Choose your daily quantity and delivery schedule."
        }
      },
      {
        "@type": "Question",
        "name": "What is the price of milk delivery in Patna?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our pricing is competitive and transparent. Download our app from Google Play Store to view current pricing and subscription plans. We offer flexible daily, weekly, and monthly plans with exclusive app discounts."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <AppDownloadSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
