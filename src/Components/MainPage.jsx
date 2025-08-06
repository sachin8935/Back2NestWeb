import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Testimonials from './Testimonials';
import SEO from './SEO';
import { 
  MapPinIcon, 
  ShieldCheckIcon, 
  CurrencyDollarIcon, 
  VideoCameraIcon,
  UserGroupIcon,
  StarIcon,
  ChevronRightIcon,
  PhoneIcon,
  ClockIcon,
  TruckIcon,
  DocumentCheckIcon,
  BellIcon,
  HeartIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const MainPage = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Enhanced structured data for local business with comprehensive SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://back2nest.in/#business",
        "name": "Back2Nest",
        "alternateName": ["Back2Nest School Van Service", "Back2Nest Transport Patna"],
        "description": "Leading school van service in Patna, Bihar providing safe, reliable student transportation with live GPS tracking, professional drivers, and guaranteed safety for daily school commutes across Bihar.",
        "url": "https://back2nest.in",
        "telephone": "+91-8935904820",
        "email": "help@back2nest.in",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Jagat Narayan Road",
          "addressLocality": "Patna",
          "addressRegion": "Bihar",
          "postalCode": "800003",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "25.617001",
          "longitude": "85.157219"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "06:00",
            "closes": "20:00"
          }
        ],
        "serviceArea": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": "25.617001",
            "longitude": "85.157219"
          },
          "geoRadius": "50000"
        },
        "priceRange": "₹₹",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "bestRating": "5",
          "worstRating": "1",
          "reviewCount": "1250"
        },
        "sameAs": [
          "https://www.facebook.com/back2nest",
          "https://www.instagram.com/back2nest_official",
          "https://www.linkedin.com/company/back2nest"
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://back2nest.in/#webpage",
        "url": "https://back2nest.in",
        "name": "Back2Nest - Safe School Van Service in Patna Bihar | Live Tracking & Professional Drivers",
        "description": "Book trusted school van services in Patna, Bihar with Back2Nest. Features live GPS tracking, verified professional drivers, in-van cameras, and lowest pricing for safe daily school commutes.",
        "mainEntity": {
          "@id": "https://back2nest.in/#business"
        }
      }
    ]
  };

  // Breadcrumb structured data for homepage
  const breadcrumbData = {
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

  const benefits = [
    {
      icon: MapPinIcon,
      title: "Live GPS Tracking",
      description: "Real-time location monitoring with instant notifications for complete transparency during your child's journey.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: VideoCameraIcon,
      title: "In-Van Camera Access",
      description: "Live camera monitoring inside vehicles for parents to watch their child's safe journey in real-time.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: ShieldCheckIcon,
      title: "Verified Professional Drivers",
      description: "Background-verified, trained drivers committed to your child's safety with regular performance evaluations.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: CurrencyDollarIcon,
      title: "Best Pricing in Patna",
      description: "Competitive rates without compromising on safety, quality, or reliability for families across Bihar.",
      color: "from-orange-500 to-orange-600"
    }
  ];

  // Enhanced additional meta tags for better local SEO
  const additionalMeta = {
    'geo.region': 'IN-BR',
    'geo.placename': 'Patna, Bihar, India',
    'geo.position': '25.617001;85.157219',
    'ICBM': '25.617001, 85.157219',
    'distribution': 'global',
    'rating': 'general',
    'HandheldFriendly': 'True',
    'MobileOptimized': '320',
    'application-name': 'Back2Nest',
    'msapplication-TileColor': '#4F46E5',
    'msapplication-config': '/browserconfig.xml',
    'apple-mobile-web-app-title': 'Back2Nest'
  };

  return (
    <>
      <SEO 
        title="Back2Nest - Safe School Van Service in Patna Bihar | Live GPS Tracking, Professional Drivers & Best Pricing"
        description="Book trusted school van services in Patna, Bihar with Back2Nest. Features live GPS tracking, verified professional drivers, in-van cameras, comprehensive safety protocols, and competitive pricing. Serving 1,250+ families across Patna with 100% safety guarantee for daily school commutes. Call +91-8935904820 now!"
        keywords="school van service Patna, school transport Bihar, safe school rides Patna, live tracking school van, professional drivers Bihar, school bus Patna, student transport Patna Bihar, Back2Nest, school van booking Patna, child safety transport Bihar, best school van Patna, reliable school transport Bihar, GPS tracking school transport, verified drivers Patna, school transportation safety Bihar"
        canonicalUrl="https://back2nest.in"
        ogTitle="Back2Nest - Patna's Most Trusted School Van Service | Live Tracking & Safety Guaranteed"
        ogDescription="Experience the safest school transportation in Patna, Bihar with live GPS tracking, professional verified drivers & unbeatable safety standards. Join 1,250+ happy families. Book your child's safe ride today!"
        ogImage="https://back2nest.in/images/og-main-homepage.jpg"
        ogUrl="https://back2nest.in"
        structuredData={structuredData}
        breadcrumbData={breadcrumbData}
        additionalMeta={additionalMeta}
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full animate-float-slow"></div>
          <div className="absolute bottom-20 -left-20 w-60 h-60 bg-gradient-to-br from-purple-400/8 to-pink-400/8 rounded-full animate-float-medium"></div>
        </div>

        {/* Clean Header */}
        <header className="container mx-auto px-6 py-6 relative z-10">
          <nav className="flex justify-between items-center" role="navigation" aria-label="Main navigation">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Back2Nest
              </div>
              <p className="text-sm text-gray-500 mt-1">Safe Journey Home</p>
            </div>
            
            {/* Clean Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                About
              </Link>
              <Link to="/safety-features" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Safety
              </Link>
              <Link to="/blogs" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Blog
              </Link>
              <a 
                href="tel:+918935904820" 
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors font-medium"
                aria-label="Call Back2Nest at +91-8935904820"
              >
                Call Now
              </a>
            </div>
          </nav>
        </header>

        {/* Hero Section with Better Spacing */}
        <main className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className={`text-center mb-16 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Safe, Reliable 
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  School Van Services in Patna Bihar
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
                Experience the best <strong>school transportation in Patna, Bihar</strong> with live GPS tracking, 
                professional verified drivers, and comprehensive safety protocols. Your child's daily school journey matters to us.
              </p>
            </div>

            {/* Clean Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">1,250+</div>
                <div className="text-gray-600 text-sm">Happy Families</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
                <div className="text-gray-600 text-sm">Professional Drivers</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">4.8★</div>
                <div className="text-gray-600 text-sm">Average Rating</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">Zero</div>
                <div className="text-gray-600 text-sm">Major Incidents</div>
              </div>
            </div>

            {/* Clean Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button
                onClick={() => navigate('/Students')}
                className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
                aria-label="Book safe school van ride for your child"
              >
                <UserGroupIcon className="w-6 h-6" />
                Book Safe Ride Now
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={() => navigate('/Driver')}
                className="group border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center gap-3"
                aria-label="Join Back2Nest as a driver partner"
              >
                <ShieldCheckIcon className="w-6 h-6" />
                Join as Partner
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Key Features - Clean List */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 text-center max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Families Choose Back2Nest</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
                <div className="flex items-center justify-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Live GPS Tracking</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">In-Van Cameras</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">24/7 Support</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Verified Drivers</span>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Benefits Section - Better Spacing */}
        <section className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Advanced Features for Complete Safety
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We provide cutting-edge technology and comprehensive safety measures that make us the top choice for school transportation in Patna.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas - Clean Layout */}
        <section className="container mx-auto px-6 py-20 relative z-10 bg-gradient-to-r from-blue-600 to-purple-600 mx-6 rounded-3xl text-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Serving Schools Across Patna, Bihar
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
              Our comprehensive school van services cover all major areas of Patna including residential zones, 
              educational districts, and commercial areas for convenient daily commutes.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {['Boring Road', 'Bailey Road', 'Kankarbagh', 'Rajendra Nagar'].map((area, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <MapPinIcon className="w-8 h-8 text-blue-200 mx-auto mb-3" />
                  <h3 className="font-semibold text-lg">{area}</h3>
                  <p className="text-blue-100 text-sm mt-2">Complete Coverage</p>
                </div>
              ))}
            </div>

            <Link 
              to="/contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
              aria-label="Contact us to get service in your area"
            >
              Get Service in Your Area
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Clean Internal Links */}
        <section className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Learn More About Back2Nest
              </h2>
              <p className="text-lg text-gray-600">
                Discover comprehensive information about our services, safety measures, and company story.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Link to="/about" className="group">
                <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 text-center group-hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <UserGroupIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Our Story</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Learn about founder Sachin Kumar's vision and how we're revolutionizing school transportation.
                  </p>
                </div>
              </Link>

              <Link to="/safety-features" className="group">
                <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 text-center group-hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <ShieldCheckIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Safety Features</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Comprehensive safety measures including GPS tracking and emergency protocols.
                  </p>
                </div>
              </Link>

              <Link to="/blogs" className="group">
                <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 text-center group-hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <DocumentCheckIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Expert Insights</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Latest tips and updates on school transportation safety and innovations.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <Testimonials/>

        {/* Clean CTA */}
        <section className="container mx-auto px-6 py-20 relative z-10">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Experience Safe School Transportation?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of families across Patna who trust Back2Nest for their children's daily school commute.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/Students"
                className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                aria-label="Book your child's safe school van ride"
              >
                Book Your Child's Ride
              </Link>
              <a
                href="tel:+918935904820"
                className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
                aria-label="Call Back2Nest at +91-8935904820"
              >
                Call: +91-8935904820
              </a>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(1deg); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-0.5deg); }
        }
        
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 6s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </>
  );
};

export default MainPage;
