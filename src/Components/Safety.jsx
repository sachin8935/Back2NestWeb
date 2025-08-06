import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeftIcon,
  MapPinIcon,
  ShieldCheckIcon,
  VideoCameraIcon,
  PhoneIcon,
  TruckIcon,
  UserGroupIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  DocumentCheckIcon,
  HeartIcon,
  BellIcon,
  StarIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import SEO from '../Components/SEO';

const SafetyFeatures = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // CRITICAL FIX: Define consistent canonical URL
  const CANONICAL_URL = "https://back2nest.in/safety";

  // Enhanced structured data with consistent canonical URL references
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${CANONICAL_URL}#service`,
        "url": CANONICAL_URL,
        "name": "School Transport Safety Features - Back2Nest Patna Bihar",
        "description": "Comprehensive safety features for school transportation including live GPS tracking, certified drivers, vehicle inspections, emergency support, and insurance coverage for students in Patna, Bihar.",
        "provider": {
          "@type": "LocalBusiness",
          "@id": "https://back2nest.in#organization",
          "name": "Back2Nest",
          "url": "https://back2nest.in",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Jagat Narayan Road",
            "addressLocality": "Patna",
            "addressRegion": "Bihar",
            "postalCode": "800003",
            "addressCountry": "IN"
          },
          "telephone": "+91-8935904820",
          "email": "help@back2nest.in",
          "sameAs": [
            "https://www.facebook.com/back2nest",
            "https://www.instagram.com/back2nest",
            "https://twitter.com/back2_nest"
          ]
        },
        "serviceType": "School Transportation Safety",
        "areaServed": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Patna",
            "addressRegion": "Bihar",
            "addressCountry": "IN"
          }
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1250",
          "bestRating": "5"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Safety Features",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Live GPS Tracking",
                "description": "Real-time vehicle tracking for complete transparency"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Professional Driver Training",
                "description": "Background-verified and safety-trained drivers"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "In-Van Camera Monitoring",
                "description": "Live video monitoring for enhanced safety"
              }
            }
          ]
        }
      },
      {
        "@type": "WebPage",
        "@id": `${CANONICAL_URL}#webpage`,
        "url": CANONICAL_URL,
        "name": "Safety Features - Back2Nest School Transportation Patna Bihar",
        "description": "Comprehensive safety measures ensuring secure school transportation in Patna, Bihar",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://back2nest.in#website",
          "url": "https://back2nest.in",
          "name": "Back2Nest - Safe School Transportation"
        },
        "mainEntity": {
          "@id": `${CANONICAL_URL}#service`
        },
        "breadcrumb": {
          "@id": `${CANONICAL_URL}#breadcrumb`
        }
      }
    ]
  };

  // Breadcrumb structured data with canonical URL
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${CANONICAL_URL}#breadcrumb`,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://back2nest.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Safety Features",
        "item": CANONICAL_URL
      }
    ]
  };

  const primarySafetyFeatures = [
    {
      icon: MapPinIcon,
      title: "Live GPS Tracking",
      description: "Real-time location tracking with parent app access. Monitor your child's journey from pickup to drop-off with precise location updates every 30 seconds.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      highlight: "Real-Time Monitoring"
    },
    {
      icon: VideoCameraIcon,
      title: "In-Van Live Camera Monitoring",
      description: "HD cameras inside every vehicle with live streaming capability. Parents can view their child's journey for complete transparency and peace of mind.",
      color: "text-red-600",
      bgColor: "bg-red-50",
      highlight: "Live Video Access"
    },
    {
      icon: ShieldCheckIcon,
      title: "Certified Professional Drivers",
      description: "All drivers undergo rigorous background verification, safety training, and regular performance evaluations to ensure the highest standards.",
      color: "text-green-600",
      bgColor: "bg-green-50",
      highlight: "Verified & Trained"
    },
    {
      icon: TruckIcon,
      title: "Regular Vehicle Inspections",
      description: "Daily safety checks and monthly comprehensive inspections ensure all vehicles meet strict safety standards and are roadworthy.",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      highlight: "Daily Checks"
    },
    {
      icon: PhoneIcon,
      title: "24/7 Emergency Support",
      description: "Round-the-clock emergency response team ready to handle any situation. Direct hotline for immediate assistance and support.",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      highlight: "Always Available"
    },
    {
      icon: HeartIcon,
      title: "Comprehensive Insurance Coverage",
      description: "Full insurance protection for all passengers with emergency medical coverage and liability protection for complete security.",
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      highlight: "Fully Insured"
    }
  ];

  const additionalSafetyMeasures = [
    "Background verification for all drivers",
    "First aid training for drivers",
    "Speed monitoring and alerts",
    "Route optimization for safety",
    "Emergency contact protocols",
    "Regular safety training sessions",
    "Vehicle maintenance schedules",
    "Parent notification system",
    "Incident reporting system",
    "Safety equipment checks"
  ];

  const safetyStats = [
    {
      number: "100%",
      label: "Safety Record",
      description: "Zero major incidents since inception"
    },
    {
      number: "24/7",
      label: "Monitoring",
      description: "Continuous vehicle and driver tracking"
    },
    {
      number: "500+",
      label: "Trained Drivers",
      description: "Professional, certified drivers"
    },
    {
      number: "1,250+",
      label: "Safe Journeys",
      description: "Daily safe trips completed"
    }
  ];

  return (
    <>
      <SEO 
        title="Safety Features | Back2Nest - Comprehensive School Transportation Security in Patna Bihar"
        description="Discover Back2Nest's comprehensive safety features for school transportation in Patna, Bihar. Live GPS tracking, certified drivers, in-van cameras, emergency support, vehicle inspections, and complete insurance coverage ensure your child's security."
        keywords="Back2Nest safety features, school transport safety Patna, GPS tracking child safety Bihar, certified drivers Patna, vehicle inspections Bihar, emergency support school transport, school van safety Patna, secure student transportation Bihar, live camera monitoring, comprehensive insurance school transport"
        canonicalUrl={CANONICAL_URL}
        ogTitle="Safety Features - Back2Nest | Comprehensive School Transport Security in Patna Bihar"
        ogDescription="Explore comprehensive safety measures by Back2Nest ensuring secure school transportation in Patna. Live tracking, professional drivers, vehicle monitoring, emergency support & complete insurance coverage."
        ogImage="https://back2nest.in/images/safety-og.jpg"
        ogUrl={CANONICAL_URL} // FIXED: Ensure OG URL matches canonical
        structuredData={structuredData}
        breadcrumbData={breadcrumbData}
        additionalMeta={{
          'geo.region': 'IN-BR',
          'geo.placename': 'Patna, Bihar, India',
          'geo.position': '25.617001;85.157219',
          'ICBM': '25.617001, 85.157219'
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
        {/* Breadcrumb Navigation */}
        <nav className="container mx-auto px-6 py-4" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-600" itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link 
                to="/" 
                className="hover:text-green-600 transition-colors" 
                itemProp="item"
                title="Back2Nest Home - School Transportation Patna"
              >
                <span itemProp="name">Home</span>
              </Link>
              <meta itemProp="position" content="1" />
            </li>
            <li aria-hidden="true" className="text-gray-400">/</li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span className="text-gray-800 font-medium" itemProp="name">Safety Features</span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </nav>

        <div className="container mx-auto px-6 py-8">
          <main className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <header className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} aria-labelledby="hero-heading">
              <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
                Safety First Approach
              </div>
              <h1 id="hero-heading" className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Your Child's Safety is Our 
                <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Top Priority
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Discover the comprehensive safety measures that make Back2Nest the most trusted school transportation service in <strong>Patna, Bihar</strong>. 
                From live tracking to certified drivers, every feature is designed with your child's security in mind.
              </p>
              
              {/* Safety Badge */}
              <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg">
                <ShieldCheckIcon className="w-6 h-6 text-green-600" />
                <span className="font-semibold text-gray-900">100% Safety Guaranteed</span>
              </div>
            </header>

            {/* Primary Safety Features */}
            <section className={`mb-16 transform transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} aria-labelledby="primary-features">
              <h2 id="primary-features" className="text-3xl font-bold text-gray-900 text-center mb-12">
                Comprehensive Safety Features
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {primarySafetyFeatures.map((feature, index) => (
                  <article
                    key={index}
                    className={`${feature.bgColor} p-8 rounded-2xl border-l-4 border-${feature.color.split('-')[1]}-500 hover:shadow-xl transition-all duration-300 group`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`${feature.color} group-hover:scale-110 transition-transform duration-300`} aria-hidden="true">
                        <feature.icon className="w-10 h-10" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                          <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">
                            {feature.highlight}
                          </span>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Safety Statistics */}
            <section className={`mb-16 transform transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} aria-labelledby="safety-stats">
              <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
                <h2 id="safety-stats" className="text-3xl font-bold text-center mb-8">Safety by the Numbers</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {safetyStats.map((stat, index) => (
                    <div key={index} className="text-center" itemScope itemType="https://schema.org/Statistic">
                      <div className="text-4xl font-bold mb-2" itemProp="value">{stat.number}</div>
                      <div className="text-lg font-semibold mb-1" itemProp="name">{stat.label}</div>
                      <div className="text-sm opacity-90">{stat.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Additional Safety Measures */}
            <section className={`mb-16 transform transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} aria-labelledby="additional-measures">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 id="additional-measures" className="text-3xl font-bold text-gray-900 text-center mb-8">
                  Additional Safety Measures
                </h2>
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {additionalSafetyMeasures.map((measure, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0" aria-hidden="true" />
                      <span className="text-gray-700">{measure}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Safety Process */}
            <section className={`mb-16 transform transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} aria-labelledby="safety-process">
              <h2 id="safety-process" className="text-3xl font-bold text-gray-900 text-center mb-12">
                How We Ensure Safety Every Day
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                    <ClockIcon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Pre-Journey Checks</h3>
                  <p className="text-gray-600">Every vehicle undergoes comprehensive safety inspection before starting daily routes.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                    <BellIcon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Live Monitoring</h3>
                  <p className="text-gray-600">Continuous tracking and monitoring throughout the journey with real-time alerts.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                    <DocumentCheckIcon className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Post-Journey Review</h3>
                  <p className="text-gray-600">Complete journey analysis and safety report generation for continuous improvement.</p>
                </div>
              </div>
            </section>

            {/* Parent Safety App */}
            <section className={`mb-16 transform transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} aria-labelledby="parent-app">
              <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
                <h2 id="parent-app" className="text-3xl font-bold text-gray-900 mb-6">
                  Parent Safety App - Complete Control
                </h2>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  Our dedicated parent app puts safety controls in your hands with real-time tracking, 
                  live camera access, instant notifications, and emergency contact features.
                </p>
                <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="flex items-center gap-3">
                    <MapPinIcon className="w-6 h-6 text-blue-600" aria-hidden="true" />
                    <span className="text-gray-700">Live GPS Location</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <VideoCameraIcon className="w-6 h-6 text-red-600" aria-hidden="true" />
                    <span className="text-gray-700">In-Van Camera Access</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <BellIcon className="w-6 h-6 text-green-600" aria-hidden="true" />
                    <span className="text-gray-700">Instant Notifications</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <PhoneIcon className="w-6 h-6 text-purple-600" aria-hidden="true" />
                    <span className="text-gray-700">Emergency Hotline</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ClockIcon className="w-6 h-6 text-yellow-600" aria-hidden="true" />
                    <span className="text-gray-700">ETA Updates</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <StarIcon className="w-6 h-6 text-pink-600" aria-hidden="true" />
                    <span className="text-gray-700">Driver Ratings</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="text-center" aria-labelledby="cta-heading">
              <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
                <h2 id="cta-heading" className="text-3xl font-bold mb-4">
                  Experience the Safest School Transportation in Patna
                </h2>
                <p className="text-xl text-green-100 mb-8">
                  Join 1,250+ families who trust Back2Nest for their children's daily school commute. 
                  Book now and experience safety-first transportation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/students"
                    className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    aria-label="Book safe ride with Back2Nest"
                    title="Book school van service for your child"
                  >
                    Book Safe Ride Now
                  </Link>
                  <a
                    href="tel:+918935904820"
                    className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-green-600 transition-all duration-300"
                    aria-label="Call Back2Nest for safety information"
                    title="Call for immediate assistance"
                  >
                    Call for Safety Info
                  </a>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default SafetyFeatures;
