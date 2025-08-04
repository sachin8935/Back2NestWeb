import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Testimonials from './Testimonials';
import SEO from './SEO';
import { 
  MapPinIcon, 
  ShieldCheckIcon, 
  CurrencyDollarIcon, 
  VideoCameraIcon,
  UserGroupIcon,
  StarIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';

const MainPage = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Enhanced structured data for local business with correct URLs and comprehensive info
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://back2nest.in/#business",
        "name": "Back2Nest",
        "alternateName": ["Back2Nest School Van Service", "Back2Nest Transport Patna"],
        "description": "Leading school van service in Patna, Bihar providing safe, reliable student transportation with live GPS tracking, professional drivers, and guaranteed safety for daily school commutes.",
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
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "School Transportation Services Patna",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Daily School Van Service Patna",
                "description": "Regular school pickup and drop service with live GPS tracking in Patna, Bihar"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service", 
                "name": "Live Camera Monitoring",
                "description": "Real-time in-vehicle camera access for parent peace of mind"
              }
            }
          ]
        },
        "sameAs": [
          "https://www.facebook.com/back2nest",
          "https://www.instagram.com/back2nest_official",
          "https://www.linkedin.com/company/back2nest"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://back2nest.in/#website",
        "url": "https://back2nest.in",
        "name": "Back2Nest - School Van Service Patna Bihar",
        "description": "Book safe school van services in Patna, Bihar with live tracking and professional drivers",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://back2nest.in/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  const benefits = [
    {
      icon: CurrencyDollarIcon,
      title: "Lowest Pricing in Patna",
      description: "Most competitive rates for school van services in Bihar without compromising on safety and quality",
      color: "text-green-500"
    },
    {
      icon: MapPinIcon,
      title: "Live GPS Location Tracking",
      description: "Real-time vehicle tracking across Patna so parents always know their child's exact location",
      color: "text-blue-500"
    },
    {
      icon: UserGroupIcon,
      title: "Verified Professional Drivers",
      description: "Background-checked, trained drivers committed to student safety in Patna's traffic conditions",
      color: "text-purple-500"
    },
    {
      icon: ShieldCheckIcon,
      title: "100% Reliable Daily Service",
      description: "Punctual, dependable school transportation you can trust every day across Patna, Bihar",
      color: "text-orange-500"
    },
    {
      icon: VideoCameraIcon,
      title: "Live In-Van Camera Access",
      description: "Monitor your child's school journey with our advanced in-vehicle camera monitoring system",
      color: "text-red-500"
    },
    {
      icon: StarIcon,
      title: "Complete Safety Guarantee",
      description: "Your child's safety is our priority with comprehensive insurance and emergency protocols",
      color: "text-yellow-500"
    }
  ];

  // Additional meta tags for enhanced local SEO
  const additionalMeta = {
    'geo.region': 'IN-BR',
    'geo.placename': 'Patna, Bihar, India',
    'geo.position': '25.617001;85.157219',
    'ICBM': '25.617001, 85.157219',
    'distribution': 'global',
    'rating': 'general',
    'HandheldFriendly': 'True',
    'MobileOptimized': '320',
    'theme-color': '#4F46E5'
  };

  return (
    <>
      <SEO 
        title="Back2Nest - Safe School Van Service in Patna Bihar | Live Tracking & Professional Drivers"
        description="Book trusted school van services in Patna, Bihar with Back2Nest. Features live GPS tracking, verified professional drivers, in-van cameras, and lowest pricing. Serving 1,250+ families across Patna with 100% safety guarantee for daily school commutes."
        keywords="school van service Patna, school transport Bihar, safe school rides Patna, live tracking school van, professional drivers Bihar, school bus Patna, student transport Patna Bihar, Back2Nest, school van booking Patna, child safety transport Bihar, best school van Patna, reliable school transport Bihar"
        canonicalUrl="https://back2nest.in"
        ogTitle="Back2Nest - Patna's Most Trusted School Van Service | Live Tracking & Safety Guaranteed"
        ogDescription="Experience the safest school transportation in Patna, Bihar with live GPS tracking, professional drivers & unbeatable safety standards. Join 1,250+ happy families. Book your child's ride today!"
        ogImage="https://back2nest.in/images/og-main.jpg"
        structuredData={structuredData}
        additionalMeta={additionalMeta}
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          {/* Floating Circles */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full animate-float-slow"></div>
          <div className="absolute top-1/2 -left-20 w-60 h-60 bg-gradient-to-br from-purple-400/15 to-pink-400/15 rounded-full animate-float-medium"></div>
          <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-gradient-to-br from-blue-400/25 to-cyan-400/25 rounded-full animate-float-fast"></div>
          
          {/* Moving Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-gradient-x"></div>
          
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-grid-pattern animate-grid-move"></div>
          </div>
        </div>

        {/* Header with Schema */}
        <header className="container mx-auto px-6 py-4 relative z-10" itemScope itemType="https://schema.org/Organization">
          <nav className="flex justify-between items-center" role="navigation" aria-label="Main navigation">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" itemProp="name">
                Back2Nest
              </h1>
              <p className="text-sm text-gray-600 mt-1" itemProp="slogan">Safe Journey Home</p>
              <meta itemProp="url" content="https://back2nest.in" />
              <meta itemProp="logo" content="https://back2nest.in/assets/logo.png" />
            </div>
          </nav>
        </header>

        {/* SEO-Enhanced Hero Section */}
        <section className="container mx-auto px-6 py-16 relative z-10" aria-labelledby="hero-heading">
          <div className="text-center max-w-4xl mx-auto">
            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h2 id="hero-heading" className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Safe, Reliable 
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient-text">
                  {" "}School Van Services in Patna Bihar
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Experience the best <strong>school transportation in Patna, Bihar</strong> with live GPS tracking, professional drivers, 
                and unbeatable safety standards. Your child's daily school journey matters to us across <em>Patna</em>.
              </p>
            </div>

            {/* Action Buttons */}
            <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <button
                onClick={() => navigate('/Students')}
                className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 min-w-[200px] animate-pulse-subtle cursor-pointer"
                aria-label="Book school van service in Patna as a student"
              >
                <UserGroupIcon className="w-6 h-6" />
                I am a Student
                <ChevronRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button
                onClick={() => navigate('/Driver')}
                className="group bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 min-w-[200px] animate-pulse-subtle cursor-pointer"
                style={{ animationDelay: '0.5s' }}
                aria-label="Join as a professional driver partner in Patna"
              >
                <ShieldCheckIcon className="w-6 h-6" />
                Join as Partner
                <ChevronRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </section>

        {/* SEO-Enhanced Benefits Section */}
        <section className="container mx-auto px-6 py-16 relative z-10" aria-labelledby="benefits-heading">
          <div className={`text-center mb-12 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h3 id="benefits-heading" className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Back2Nest for School Transport in Patna Bihar?
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide the best features and benefits that make us the top choice for <strong>school transportation in Patna</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <article
                key={index}
                className={`group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:scale-105 border border-gray-100 hover:border-gray-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${900 + index * 100}ms` }}
              >
                <div className={`${benefit.color} mb-4 group-hover:scale-110 transition-transform duration-300`} aria-hidden="true">
                  <benefit.icon className="w-12 h-12" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Enhanced Trust Indicators Section with Schema */}
        <section className="container mx-auto px-6 py-16 relative z-10" aria-labelledby="stats-heading">
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-gray-100">
            <header className="mb-8">
              <h3 id="stats-heading" className="text-3xl font-bold text-gray-900 mb-2">
                Trusted by Families Across Patna, Bihar
              </h3>
              <p className="text-lg text-gray-600">
                Real numbers that showcase our commitment to safe <strong>school transportation in Patna</strong>
              </p>
            </header>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="animate-count-up" itemScope itemType="https://schema.org/Statistic">
                <div className="text-3xl font-bold text-blue-600 mb-2" itemProp="value">1,250+</div>
                <div className="text-gray-600" itemProp="name">Happy Families in Patna</div>
              </div>
              <div className="animate-count-up" style={{ animationDelay: '0.2s' }} itemScope itemType="https://schema.org/Statistic">
                <div className="text-3xl font-bold text-purple-600 mb-2" itemProp="value">500+</div>
                <div className="text-gray-600" itemProp="name">Professional Drivers</div>
              </div>
              <div className="animate-count-up" style={{ animationDelay: '0.4s' }} itemScope itemType="https://schema.org/Statistic">
                <div className="text-3xl font-bold text-green-600 mb-2" itemProp="value">50+</div>
                <div className="text-gray-600" itemProp="name">Partner Schools in Bihar</div>
              </div>
              <div className="animate-count-up" style={{ animationDelay: '0.6s' }} itemScope itemType="https://schema.org/Statistic">
                <div className="text-3xl font-bold text-orange-600 mb-2" itemProp="value">4.8★</div>
                <div className="text-gray-600" itemProp="name">Average Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Location-Specific Service Area Section */}
        <section className="container mx-auto px-6 py-16 relative z-10" aria-labelledby="service-area-heading">
          <div className="text-center max-w-4xl mx-auto">
            <h3 id="service-area-heading" className="text-3xl font-bold text-gray-900 mb-6">
              Serving Schools Across Patna, Bihar
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Our <strong>school van services</strong> cover all major areas of <em>Patna</em> including Boring Road, Bailey Road, 
              Fraser Road, Kankarbagh, Rajendra Nagar, and surrounding areas in Bihar.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-700">
              <div className="bg-blue-50 p-3 rounded-lg">Boring Road</div>
              <div className="bg-purple-50 p-3 rounded-lg">Bailey Road</div>
              <div className="bg-green-50 p-3 rounded-lg">Kankarbagh</div>
              <div className="bg-orange-50 p-3 rounded-lg">Rajendra Nagar</div>
            </div>
          </div>
        </section>

        <Testimonials/>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-1deg); }
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
        
        @keyframes gradient-x {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }
        
        @keyframes gradient-text {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes pulse-subtle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.9; }
        }
        
        @keyframes count-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(20px, 20px); }
        }
        
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 4s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 3s ease-in-out infinite; }
        .animate-gradient-x { animation: gradient-x 15s ease infinite; }
        .animate-gradient-text { 
          background-size: 200% 200%;
          animation: gradient-text 3s ease infinite;
        }
        .animate-pulse-subtle { animation: pulse-subtle 3s ease-in-out infinite; }
        .animate-count-up { animation: count-up 1s ease-out forwards; }
        .animate-grid-move { animation: grid-move 20s linear infinite; }
        
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        @media (max-width: 768px) {
          .animate-float-slow,
          .animate-float-medium,
          .animate-float-fast {
            animation-duration: 8s;
          }
          
          .animate-gradient-x {
            animation-duration: 20s;
          }
        }

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
