'use client';

import { Milk, Clock, MapPin, Mail, CheckCircle, Star, Truck, Shield, Droplets, Heart, Leaf, Users, Download, Smartphone, Package, Menu, X, Award, TrendingUp, Zap, ArrowRight, Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Lazy load Footer for better initial page load
const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="h-96 bg-gray-50" />,
  ssr: true,
});


// Modern Floating Header with Transparency Effect
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-white/80 backdrop-blur-md'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <Milk className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Back<span className="text-blue-600">2</span>Nest
              </span>
              <p className="text-[10px] text-gray-500 -mt-1">Pure A2 Milk</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link href="/products" className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors rounded-lg hover:bg-blue-50">
              Products
            </Link>
            <Link href="/milk-delivery-patna" className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors rounded-lg hover:bg-blue-50">
              Delivery Areas
            </Link>
            <Link href="/reviews" className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors rounded-lg hover:bg-blue-50">
              Reviews
            </Link>
            <Link href="/contact" className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors rounded-lg hover:bg-blue-50">
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-2 md:gap-3">
            <a
              href="https://play.google.com/store/apps/details?id=com.app.back2nest"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-4 py-2.5 rounded-full font-semibold transition-all duration-300 hover:shadow-lg shadow-md"
            >
              <Download className="w-4 h-4" />
              <span className="hidden md:inline">Download App</span>
            </a>
            <Link 
              href="/quick-order" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 via-blue-600 to-blue-700 hover:from-blue-700 hover:via-blue-700 hover:to-blue-800 text-white px-5 md:px-6 py-2.5 rounded-full font-semibold hover:shadow-lg shadow-md transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
            >
              <Package className="w-4 h-4" />
              <span>Order Now</span>
            </Link>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-2xl">
          <div className="container mx-auto px-4 py-4 space-y-2">
            <Link 
              href="/products" 
              className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Products
            </Link>
            <Link 
              href="/milk-delivery-patna" 
              className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Delivery Areas
            </Link>
            <Link 
              href="/reviews" 
              className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Reviews
            </Link>
            <Link 
              href="/contact" 
              className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
            <a
              href="https://play.google.com/store/apps/details?id=com.app.back2nest"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-full font-semibold transition-all duration-300 text-center shadow-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              📱 Download App
            </a>
          </div>
        </div>
      )}
    </header>
  );
};


// Modern Hero Section with Better Visual Hierarchy
const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'Pure A2 Milk';
  
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        // Hide cursor after typing is complete
        setTimeout(() => setShowCursor(false), 500);
      }
    }, 100); // Faster typing speed for smoother effect

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-20 md:pt-24 pb-12 overflow-hidden">
    {/* Animated Background Elements */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-purple-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
    </div>
    
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left Column - Content */}
        <div className="text-center lg:text-left space-y-6 md:space-y-8">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-blue-200">
            <Award className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-gray-800">Trusted by 127+ Families</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
            <span className="inline-flex items-center min-h-[1.2em]">
              <span className="inline-block" style={{ minWidth: '0.1em' }}>{displayedText}</span>
              {showCursor && <span className="inline-block w-[2px] h-[0.9em] bg-gray-900 animate-pulse ml-1"></span>}
            </span>
            <span className="block text-blue-600 mt-2">Delivered by 5 AM</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Farm-fresh, 100% pure A2 cow milk at your doorstep every morning. 
            <span className="font-semibold text-gray-900"> Zero adulteration. Maximum freshness.</span>
          </p>
          
          {/* Key Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto lg:mx-0">
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-3 rounded-xl shadow-md">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span className="text-sm font-medium text-gray-800">100% Pure</span>
            </div>
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-3 rounded-xl shadow-md">
              <Clock className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span className="text-sm font-medium text-gray-800">5 AM Delivery</span>
            </div>
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-3 rounded-xl shadow-md">
              <Truck className="w-5 h-5 text-orange-600 flex-shrink-0" />
              <span className="text-sm font-medium text-gray-800">All Patna Areas</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a 
              href="https://play.google.com/store/apps/details?id=com.app.back2nest"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 via-blue-600 to-blue-700 hover:from-blue-700 hover:via-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-full text-lg font-bold shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <Download className="w-6 h-6 group-hover:animate-bounce" />
              <span>Download App</span>
            </a>
            <Link 
              href="/quick-order" 
              className="group inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-blue-600 px-8 py-4 rounded-full text-lg font-bold shadow-2xl hover:shadow-gray-400/50 transition-all duration-300 transform hover:scale-105 border-2 border-blue-600 hover:border-blue-700"
            >
              <Package className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Order Now</span>
            </Link>
          </div>
          
          {/* Social Proof */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {['👨', '👩', '👨', '👩'].map((emoji, i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center border-2 border-white text-lg">
                    {emoji}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-gray-900">127+ Families</p>
                <p className="text-xs text-gray-600">Trust us daily</p>
              </div>
            </div>
            <div className="h-8 w-px bg-gray-300 hidden sm:block"></div>
            <div className="text-left">
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-xs text-gray-600">4.8/5 Average Rating</p>
            </div>
          </div>
        </div>
        
        {/* Right Column - Visual */}
        <div className="relative order-first lg:order-last">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
            {/* Limited Offer Badge - Floating on top */}
            <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-red-600 to-red-500 text-white px-5 py-3 rounded-full shadow-2xl animate-pulse">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                <span className="font-bold text-sm">Limited Offer!</span>
              </div>
            </div>
            
            <Image
              src="https://res.cloudinary.com/back2nest/image/upload/v1761587178/offer_banners/bxqdrhzzhttryfs9xxuo.jpg"
              alt="Fresh A2 Cow Milk Delivery in Patna - Get Pure Farm Milk at Your Doorstep by 5 AM Daily"
              width={800}
              height={800}
              className="w-full h-auto rounded-3xl"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={95}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};


// Compact Service Areas Section
const ServiceAreasSection = () => {
  const popularAreas = [
    'Kankarbagh', 'Boring Road', 'Patliputra Colony', 'Rajendra Nagar',
    'Fraser Road', 'Bailey Road', 'Kadam Kuan', 'Exhibition Road'
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <MapPin className="w-4 h-4 inline mr-1" />
            Serving All Patna
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Fresh Milk Delivery Across Patna
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We deliver pure A2 cow milk by 5 AM daily to all major localities
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-blue-100">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {popularAreas.map((area, index) => (
              <div 
                key={index}
                className="text-center p-4 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <MapPin className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                <p className="font-semibold text-gray-900 text-sm">{area}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center pt-4 border-t border-blue-100">
            <p className="text-gray-700 mb-4">
              <strong className="text-blue-600">Can't find your area?</strong> We're expanding daily!
            </p>
            <Link 
              href="/milk-delivery-patna"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold hover:gap-3 transition-all"
            >
              View All Delivery Areas
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};


// Streamlined Features Section
const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: "100% Pure A2 Milk",
      description: "Zero adulteration, no water mixing, no preservatives. Only pure desi cow milk.",
      color: "blue"
    },
    {
      icon: Clock,
      title: "5 AM Morning Delivery",
      description: "Fresh milk at your doorstep every morning. Never miss your morning tea again.",
      color: "orange"
    },
    {
      icon: Truck,
      title: "Farm to Doorstep",
      description: "Direct from local trusted farms to your home. Maximum freshness guaranteed.",
      color: "green"
    },
    {
      icon: Heart,
      title: "Family Health First",
      description: "Rich in natural proteins, calcium, and vitamins for your family's wellness.",
      color: "red"
    },
    {
      icon: Droplets,
      title: "Rich & Creamy",
      description: "Full-fat, naturally rich milk. Taste the real difference in every sip.",
      color: "cyan"
    },
    {
      icon: Leaf,
      title: "Sustainable & Ethical",
      description: "Supporting local Patna farmers with sustainable, ethical practices.",
      color: "emerald"
    }
  ];

  const colorMap: Record<string, { bg: string; icon: string; border: string }> = {
    blue: { bg: 'bg-blue-50', icon: 'text-blue-600', border: 'border-blue-200' },
    orange: { bg: 'bg-orange-50', icon: 'text-orange-600', border: 'border-orange-200' },
    green: { bg: 'bg-green-50', icon: 'text-green-600', border: 'border-green-200' },
    red: { bg: 'bg-red-50', icon: 'text-red-600', border: 'border-red-200' },
    cyan: { bg: 'bg-cyan-50', icon: 'text-cyan-600', border: 'border-cyan-200' },
    emerald: { bg: 'bg-emerald-50', icon: 'text-emerald-600', border: 'border-emerald-200' }
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Why Choose Us
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Patna Families Love Us
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We bring farm-fresh goodness to 127+ families with care, purity, and dedication every morning
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colors = colorMap[feature.color];
            return (
              <div 
                key={index}
                className={`${colors.bg} p-6 md:p-8 rounded-2xl border-2 ${colors.border} hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group`}
              >
                <Icon className={`w-12 h-12 ${colors.icon} mb-4 group-hover:scale-110 transition-transform`} />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


// Modern Testimonials Section
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Boring Road",
      rating: 5,
      text: "Best milk delivery in Patna! So fresh and creamy. My kids love it. The app makes ordering super easy!",
      avatar: "👩"
    },
    {
      name: "Rajesh Kumar",
      location: "Kankarbagh",
      rating: 5,
      text: "Using Back2Nest for 6 months now. Never missed a single delivery. Quality is consistently excellent!",
      avatar: "👨"
    },
    {
      name: "Anita Singh",
      location: "Patliputra Colony",
      rating: 5,
      text: "Pure and fresh milk delivered right on time. My family's health has improved since we switched!",
      avatar: "👩"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Star className="w-4 h-4 inline mr-1 fill-current" />
            Customer Reviews
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Loved by Patna Families
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Join 127+ satisfied families who trust us for their daily milk needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-blue-50 to-white p-6 md:p-8 rounded-2xl shadow-lg border-2 border-blue-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-3 pt-4 border-t border-blue-100">
                <div className="text-4xl">{testimonial.avatar}</div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {testimonial.location}, Patna
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 rounded-2xl text-center text-white shadow-xl">
            <div className="text-4xl font-bold mb-2">127+</div>
            <p className="text-blue-100">Happy Families</p>
          </div>
          <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-6 rounded-2xl text-center text-white shadow-xl">
            <div className="text-4xl font-bold mb-2">4.8★</div>
            <p className="text-yellow-100">Average Rating</p>
          </div>
          <div className="bg-gradient-to-br from-green-600 to-green-700 p-6 rounded-2xl text-center text-white shadow-xl">
            <div className="text-4xl font-bold mb-2">5 AM</div>
            <p className="text-green-100">Daily Delivery</p>
          </div>
          <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-6 rounded-2xl text-center text-white shadow-xl">
            <div className="text-4xl font-bold mb-2">100%</div>
            <p className="text-purple-100">Pure & Fresh</p>
          </div>
        </div>
      </div>
    </section>
  );
};


// Modern How It Works Section
const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      title: "Download App",
      description: "Get our app from Google Play Store",
      icon: Download,
      color: "blue"
    },
    {
      number: "2",
      title: "Choose Plan",
      description: "Select quantity and delivery schedule",
      icon: CheckCircle,
      color: "green"
    },
    {
      number: "3",
      title: "Get Fresh Milk",
      description: "Wake up to pure milk by 5 AM daily",
      icon: Milk,
      color: "orange"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Simple Process
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get Started in 3 Easy Steps
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            From subscription to delivery—it's simple, quick, and convenient
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isBlue = step.color === 'blue';
            const isGreen = step.color === 'green';
            const isOrange = step.color === 'orange';
            
            return (
              <div key={index} className="relative text-center">
                {/* Connector Line - Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-1/2 w-full h-1 bg-gradient-to-r from-blue-200 via-green-200 to-orange-200 -z-10"></div>
                )}
                
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-2xl z-10 ${
                    isBlue ? 'bg-gradient-to-br from-blue-600 to-blue-700' :
                    isGreen ? 'bg-gradient-to-br from-green-600 to-green-700' :
                    'bg-gradient-to-br from-orange-600 to-orange-700'
                  }`}>
                    {step.number}
                  </div>
                  <div className={`absolute inset-0 rounded-full blur-xl opacity-40 animate-pulse ${
                    isBlue ? 'bg-blue-400' :
                    isGreen ? 'bg-green-400' :
                    'bg-orange-400'
                  }`}></div>
                </div>
                
                <div className={`bg-white p-6 md:p-8 rounded-2xl shadow-lg border-2 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                  isBlue ? 'border-blue-200' :
                  isGreen ? 'border-green-200' :
                  'border-orange-200'
                }`}>
                  <Icon className={`w-12 h-12 mx-auto mb-4 ${
                    isBlue ? 'text-blue-600' :
                    isGreen ? 'text-green-600' :
                    'text-orange-600'
                  }`} />
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://play.google.com/store/apps/details?id=com.app.back2nest"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 via-blue-600 to-blue-700 hover:from-blue-700 hover:via-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-full text-lg font-bold shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
          >
            <Download className="w-6 h-6" />
            Start Your Journey Today
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};


// Powerful CTA Section
const AppDownloadSection = () => (
  <section className="relative py-20 md:py-28 overflow-hidden">
    {/* Gradient Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800"></div>
    
    {/* Animated Background Elements */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    </div>

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
      <div className="text-center mb-12">
        <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
          <TrendingUp className="w-4 h-4 inline mr-1" />
          Start Your Subscription Today
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Experience Pure Freshness?
        </h2>
        <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-8">
          Join 127+ families in Patna enjoying farm-fresh A2 milk delivered by 5 AM daily
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Download App Card */}
        <a
          href="https://play.google.com/store/apps/details?id=com.app.back2nest"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-green-400"
        >
          <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
            <Download className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Download Our App</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Order milk, manage subscriptions, and track deliveries—all in one easy-to-use app
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-full font-bold transition-all duration-300 shadow-xl hover:shadow-green-500/50 group-hover:scale-105">
            <Smartphone className="w-5 h-5" />
            <span>Get on Google Play</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
          <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-3">
            <Check className="w-5 h-5 text-green-600" />
            <span className="text-sm text-gray-600">Get ₹50 off on first order</span>
          </div>
        </a>

        {/* Quick Order Card */}
        <Link
          href="/quick-order"
          className="group bg-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-blue-400"
        >
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
            <Package className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Quick Order</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Browse our products and place your order instantly for fresh milk delivery
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full font-bold transition-all duration-300 shadow-xl hover:shadow-blue-500/50 group-hover:scale-105">
            <Package className="w-5 h-5" />
            <span>Order Now</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
          <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-3">
            <Check className="w-5 h-5 text-blue-600" />
            <span className="text-sm text-gray-600">Delivery by 5 AM tomorrow</span>
          </div>
        </Link>
      </div>

      {/* Contact Info */}
      <div className="text-center mt-12 text-white">
        <p className="text-lg mb-2">Need Help? Email Us</p>
        <a href="mailto:help@back2nest.in" className="text-2xl md:text-3xl font-bold hover:text-blue-200 transition-colors inline-flex items-center gap-2">
          <Mail className="w-6 h-6" />
          help@back2nest.in
        </a>
        <p className="text-blue-200 text-sm mt-3">Quick response guaranteed</p>
      </div>
    </div>
  </section>
);


// Streamlined Contact Section
const ContactSection = () => {
  const contactMethods = [
    {
      icon: Download,
      title: "Download Our App",
      detail: "Order & Manage Easily",
      link: "https://play.google.com/store/apps/details?id=com.app.back2nest",
      subtext: "Available on Google Play",
      color: "green"
    },
    {
      icon: Mail,
      title: "Email Support",
      detail: "help@back2nest.in",
      link: "mailto:help@back2nest.in",
      subtext: "Quick response guaranteed",
      color: "blue"
    },
    {
      icon: MapPin,
      title: "Visit Our Office",
      detail: "Jagat Narayan Road",
      subtext: "Kadam Kuan, Patna 800003",
      color: "red"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Contact Us Anytime
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our fresh milk delivery? We're here to help!
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {contactMethods.map((contact, index) => {
            const Icon = contact.icon;
            const isGreen = contact.color === 'green';
            const isBlue = contact.color === 'blue';
            const isRed = contact.color === 'red';
            
            return (
              <div 
                key={index} 
                className={`p-8 rounded-2xl border-2 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center ${
                  isGreen ? 'bg-gradient-to-br from-green-50 to-white border-green-200' :
                  isBlue ? 'bg-gradient-to-br from-blue-50 to-white border-blue-200' :
                  'bg-gradient-to-br from-red-50 to-white border-red-200'
                }`}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg ${
                  isGreen ? 'bg-gradient-to-br from-green-500 to-green-600' :
                  isBlue ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
                  'bg-gradient-to-br from-red-500 to-red-600'
                }`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{contact.title}</h3>
                {contact.link ? (
                  <a 
                    href={contact.link} 
                    target={contact.link.startsWith('http') ? '_blank' : undefined} 
                    rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined} 
                    className={`text-lg font-bold block mb-2 hover:underline ${
                      isGreen ? 'text-green-600' :
                      isBlue ? 'text-blue-600' :
                      'text-red-600'
                    }`}
                  >
                    {contact.detail}
                  </a>
                ) : (
                  <p className="text-lg font-bold text-gray-700 mb-2">{contact.detail}</p>
                )}
                <p className="text-gray-600 text-sm">{contact.subtext}</p>
              </div>
            );
          })}
        </div>
        
        {/* Final CTA Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
          <Milk className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Join the Back2Nest Family!</h3>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Experience pure, farm-fresh milk every morning. Download our app and start your subscription today!
          </p>
          <a 
            href="https://play.google.com/store/apps/details?id=com.app.back2nest"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-white shadow-xl"
          >
            <Download className="w-6 h-6" />
            Download App Now
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};// Main Component
export default function HomePageClient() {
  // Structured Data for SEO
  
  // WebSite Schema - Critical for brand name display in Google Search
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Back2Nest",
    "alternateName": "Back2Nest - Pure A2 Milk Delivery Patna",
    "url": "https://back2nest.in",
    "description": "Fresh A2 cow milk delivery service in Patna. 100% pure, farm-fresh milk delivered by 5 AM daily.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://back2nest.in/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Back2Nest",
      "url": "https://back2nest.in"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Back2Nest",
    "description": "Best milk delivery service in Patna delivering 100% pure A2 cow milk by 5 AM daily",
    "url": "https://back2nest.in",
    "logo": "https://back2nest.in/milk.jpeg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-91622-74474",
      "contactType": "Customer Service",
      "areaServed": "IN-BR",
      "availableLanguage": ["Hindi", "English"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jagat Narayan Road, Kadam Kuan",
      "addressLocality": "Patna",
      "addressRegion": "Bihar",
      "postalCode": "800003",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.instagram.com/back2nest_patna/",
      "https://www.facebook.com/back2nest"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Back2Nest - Fresh Milk Delivery Patna",
    "image": "https://back2nest.in/milk.jpeg",
    "description": "Fresh A2 cow milk delivery service in Patna. 100% pure, farm-fresh milk delivered by 5 AM daily to your doorstep.",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jagat Narayan Road, Kadam Kuan",
      "addressLocality": "Patna",
      "addressRegion": "Bihar",
      "postalCode": "800003",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "25.5941",
      "longitude": "85.1376"
    },
    "telephone": "+91-91622-74474",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "05:00",
      "closes": "20:00"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127"
    }
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Fresh A2 Cow Milk",
    "description": "100% pure A2 cow milk from desi breeds, delivered fresh by 5 AM daily in Patna",
    "image": "https://back2nest.in/milk.jpeg",
    "brand": {
      "@type": "Brand",
      "name": "Back2Nest"
    },
    "offers": {
      "@type": "Offer",
      "price": "72",
      "priceCurrency": "INR",
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
      "areaServed": {
        "@type": "City",
        "name": "Patna"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://back2nest.in"
    }]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What time is milk delivered in Patna?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We deliver fresh A2 milk to your doorstep by 5 AM every morning across all areas in Patna."
        }
      },
      {
        "@type": "Question",
        "name": "Is Back2Nest milk pure A2 milk?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we source 100% pure A2 milk from desi cow breeds with zero adulteration or water mixing."
        }
      },
      {
        "@type": "Question",
        "name": "Which areas in Patna do you deliver?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We deliver across Boring Road, Kankarbagh, Patliputra Colony, Rajendra Nagar, and all major areas in Patna."
        }
      },
      {
        "@type": "Question",
        "name": "How do I subscribe to daily milk delivery?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Download the Back2Nest app from Google Play Store, select your plan, and start receiving fresh milk daily."
        }
      }
    ]
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <HeroSection />
          <ServiceAreasSection />
          <FeaturesSection />
          <HowItWorksSection />
          <TestimonialsSection />
          <AppDownloadSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
