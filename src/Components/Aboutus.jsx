import React, { useEffect, useState, useRef } from 'react';
import SEO from './SEO';
import sachinImage from '../assets/sachin.png';
import { 
  HeartIcon, 
  LightBulbIcon, 
  ShieldCheckIcon, 
  StarIcon,
  MapPinIcon,
  UsersIcon,
  TrophyIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const timelineRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Enhanced structured data with comprehensive business information
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://back2nest.in/#business",
        "name": "Back2Nest",
        "alternateName": ["Back2Nest School Van Service", "Back2Nest Transport"],
        "description": "Leading school van service in Patna, Bihar providing safe, reliable transportation with live tracking, professional drivers, and 100% safety guarantee for students across Patna.",
        "founder": {
          "@type": "Person",
          "name": "Sachin Kumar",
          "jobTitle": "Founder & CEO",
          "image": "https://back2nest.in/assets/sachin.png",
          "description": "Visionary entrepreneur revolutionizing school transportation in Bihar",
          "sameAs": [
            "https://www.linkedin.com/in/sachinkumar-back2nest"
          ]
        },
        "url": "https://back2nest.in",
        "mainEntityOfPage": "https://back2nest.in/about",
        "telephone": "+91-8935904820",
        "email": "help@back2nest.in",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "123 Education Lane, Boring Road",
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
            "latitude": "25.5941",
            "longitude": "85.1376"
          },
          "geoRadius": "30000"
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
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "School Transportation Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Daily School Van Service",
                "description": "Regular school pickup and drop service with live tracking"
              }
            },
            {
              "@type": "Offer", 
              "itemOffered": {
                "@type": "Service",
                "name": "Live GPS Tracking",
                "description": "Real-time vehicle tracking for parent peace of mind"
              }
            }
          ]
        }
      },
      {
        "@type": "Organization",
        "@id": "https://back2nest.in/#organization",
        "name": "Back2Nest",
        "url": "https://back2nest.in",
        "logo": {
          "@type": "ImageObject",
          "url": "https://back2nest.in/assets/logo.png",
          "width": "200",
          "height": "60"
        },
        "foundingDate": "2022",
        "foundingLocation": "Patna, Bihar, India",
        "numberOfEmployees": "500+",
        "slogan": "Safe Journey Home",
        "mission": "To provide the safest and most reliable school transportation service in Bihar"
      },
      {
        "@type": "Person",
        "@id": "https://back2nest.in/#founder",
        "name": "Sachin Kumar",
        "jobTitle": "Founder & CEO",
        "worksFor": {
          "@id": "https://back2nest.in/#organization"
        },
        "image": "https://back2nest.in/assets/sachin.png",
        "description": "Founder and CEO of Back2Nest, leading school transportation innovation in Bihar since 2022"
      }
    ]
  };

  // Breadcrumb structured data
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
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
        "name": "About Us",
        "item": "https://back2nest.in/about"
      }
    ]
  };

  const timeline = [
    {
      year: "2022",
      title: "Founded in Patna Bihar",
      description: "Sachin Kumar established Back2Nest to address school transport challenges in Patna, Bihar with a vision for safer student commutes",
      icon: LightBulbIcon,
      color: "bg-blue-500"
    },
    {
      year: "2023", 
      title: "100 Families Milestone",
      description: "Successfully served our first 100 families across Patna with reliable school van services and professional drivers",
      icon: UsersIcon,
      color: "bg-green-500"
    },
    {
      year: "2024",
      title: "Technology Leadership",
      description: "Pioneered live GPS tracking and in-vehicle camera systems for school transport in Bihar, setting new safety standards",
      icon: ShieldCheckIcon,
      color: "bg-purple-500"
    },
    {
      year: "2025",
      title: "1250+ Happy Families",
      description: "Now proudly serving over 1,250 families across Patna with 500+ verified professional drivers and 4.8-star rating",
      icon: TrophyIcon,
      color: "bg-orange-500"
    }
  ];

  const coreValues = [
    {
      icon: HeartIcon,
      title: "Child-First Safety Approach",
      description: "Every policy and procedure at Back2Nest prioritizes student safety, comfort, and wellbeing during daily school commutes in Patna",
      gradient: "from-red-400 to-pink-500"
    },
    {
      icon: ShieldCheckIcon,
      title: "Uncompromising Safety Standards",
      description: "Multi-layer safety protocols including background-verified drivers, real-time GPS tracking, vehicle maintenance, and comprehensive insurance coverage",
      gradient: "from-blue-400 to-indigo-500"
    },
    {
      icon: ClockIcon,
      title: "Punctuality Promise",
      description: "Reliable, on-time school pickup and drop services across Patna, ensuring consistent daily routines for students and parents",
      gradient: "from-green-400 to-emerald-500"
    },
    {
      icon: StarIcon,
      title: "Excellence in Service",
      description: "Continuously improving our school transport services based on parent feedback and industry best practices in student transportation",
      gradient: "from-yellow-400 to-orange-500"
    }
  ];

  // Additional meta tags for enhanced SEO
  const additionalMeta = {
    'geo.region': 'IN-BR',
    'geo.placename': 'Patna, Bihar, India',
    'geo.position': '25.5941;85.1376',
    'ICBM': '25.5941, 85.1376',
    'distribution': 'global',
    'rating': 'general',
    'HandheldFriendly': 'True',
    'MobileOptimized': '320',
    'theme-color': '#4F46E5'
  };

  return (
    <>
      <SEO
        title="About Back2Nest | Leading School Van Service in Patna Bihar | Sachin Kumar Founder"
        description="Meet Sachin Kumar, founder of Back2Nest - Patna's most trusted school van service. Learn how we're revolutionizing student transportation in Bihar with live tracking, professional drivers, and 100% safety guarantee. Serving 1,250+ families since 2022."
        keywords="About Back2Nest, Sachin Kumar founder, school van service Patna, safe school transport Bihar, live tracking Patna, professional drivers Bihar, school bus Patna, student transportation Bihar, Back2Nest history, school van company Patna, reliable school transport Bihar, best school transport Patna, school van booking Bihar"
        canonicalUrl="https://back2nest.in/about"
        ogTitle="About Back2Nest - Meet Founder Sachin Kumar | Premier School Transport in Patna Bihar"
        ogDescription="Discover Back2Nest's journey from vision to reality. Founded by Sachin Kumar in 2022, now serving 1,250+ families in Patna with safest school van services in Bihar."
        ogImage="https://back2nest.in/assets/sachin.png"
        ogUrl="https://back2nest.in/about"
        structuredData={structuredData}
        breadcrumbData={breadcrumbData}
        additionalMeta={additionalMeta}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative">
        {/* Optimized Parallax Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div 
            className="absolute -top-64 -right-64 w-96 h-96 bg-gradient-to-br from-indigo-300/30 to-purple-400/20 rounded-full"
            style={{ transform: `translateY(${scrollY * 0.1}px) rotate(${scrollY * 0.05}deg)` }}
          />
          <div 
            className="absolute top-1/3 -left-32 w-80 h-80 bg-gradient-to-br from-blue-300/20 to-cyan-400/15 rounded-full"
            style={{ transform: `translateY(${scrollY * -0.08}px)` }}
          />
          <div 
            className="absolute bottom-32 right-1/3 w-64 h-64 bg-gradient-to-br from-emerald-300/25 to-green-400/20 rounded-full"
            style={{ transform: `translateY(${scrollY * 0.12}px)` }}
          />
        </div>

        {/* Breadcrumb Navigation for SEO */}
        <nav className="relative z-10 container mx-auto px-6 py-4" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-slate-600" itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <a href="/" className="hover:text-indigo-600 transition-colors" itemProp="item">
                <span itemProp="name">Home</span>
              </a>
              <meta itemProp="position" content="1" />
            </li>
            <li aria-hidden="true" className="text-slate-400">/</li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span className="text-slate-800 font-medium" itemProp="name">About Us</span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </nav>

        {/* SEO Optimized Hero Section */}
        <section className="relative z-10 min-h-screen flex items-center justify-center" aria-labelledby="hero-heading">
          <div className="container mx-auto px-6 py-20">
            <div className={`text-center max-w-5xl mx-auto transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
              <div className="mb-8">
                <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-4 animate-badge-float">
                  Our Story - Established 2022 in Patna, Bihar
                </span>
                <h1 id="hero-heading" className="text-5xl md:text-7xl font-bold mb-6">
                  <span className="block text-slate-800">Redefining</span>
                  <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-text-shimmer">
                    School Transport in Patna Bihar
                  </span>
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Born in the heart of <strong>Patna, Bihar</strong>, Back2Nest is revolutionizing how children travel to school across Bihar. 
                We're not just a <em>school van service</em> – we're guardians of your child's daily journey with <strong>live GPS tracking</strong> and <strong>professional drivers</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* SEO Enhanced Founder Section */}
        <section className="relative z-10 py-20 bg-white/70 backdrop-blur-sm" aria-labelledby="founder-heading" itemScope itemType="https://schema.org/Person">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">
              {/* SEO Optimized Founder Image */}
              <div className="lg:w-1/2 flex justify-center">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-500 animate-pulse-glow"></div>
                  <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                    <img
                      src={sachinImage}
                      alt="Sachin Kumar - Founder and CEO of Back2Nest School Van Service in Patna Bihar - Leading safe student transportation since 2022"
                      className="w-full h-full object-cover"
                      loading="lazy"
                      width="320"
                      height="320"
                      itemProp="image"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-indigo-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg animate-bounce-gentle">
                    Founder & CEO
                  </div>
                </div>
              </div>

              {/* Enhanced Founder Content */}
              <div className="lg:w-1/2">
                <article className="space-y-6">
                  <header>
                    <h2 id="founder-heading" className="text-4xl font-bold text-slate-800 mb-4" itemProp="name">
                      Meet Sachin Kumar - Visionary Behind Bihar's Safest School Transport
                    </h2>
                    <meta itemProp="jobTitle" content="Founder & CEO" />
                    <meta itemProp="worksFor" content="Back2Nest" />
                    <blockquote className="text-lg text-slate-600 leading-relaxed border-l-4 border-indigo-500 pl-4 italic">
                      "Growing up in <strong>Patna, Bihar</strong>, I witnessed firsthand the challenges parents face with <em>school transportation</em>. 
                      The anxiety, the uncertainty, the compromise on safety – it didn't have to be this way in Bihar's capital city."
                      <footer className="mt-2 font-medium">— Sachin Kumar, Founder & CEO</footer>
                    </blockquote>
                  </header>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
                        <HeartIcon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800 mb-2">The Vision for Safe School Transport in Bihar</h3>
                        <p className="text-slate-600">
                          Transform <strong>school transportation in Patna</strong> into a service that parents can trust completely, 
                          where technology meets care to ensure every child's journey across Bihar is safe and comfortable.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
                        <MapPinIcon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800 mb-2">Mission: Revolutionizing Student Transportation in Patna</h3>
                        <p className="text-slate-600">
                          Starting from <strong>Patna, Bihar</strong>, we're building a network of safe, reliable, and 
                          technology-enabled <em>school van services</em> that gives parents complete peace of mind across the state.
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Enhanced Timeline */}
        <section className="relative z-10 py-20" aria-labelledby="timeline-heading">
          <div className="container mx-auto px-6">
            <header className="text-center mb-16">
              <h2 id="timeline-heading" className="text-4xl font-bold text-slate-800 mb-4">
                Back2Nest Journey: From Vision to Leading School Transport Service in Bihar
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Discover how we grew from a vision in 2022 to serving thousands of families across <strong>Patna</strong> with the safest <em>school van services in Bihar</em>
              </p>
            </header>

            <div className="max-w-4xl mx-auto" ref={timelineRef}>
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-indigo-500 to-purple-600" aria-hidden="true"></div>
                
                {timeline.map((item, index) => (
                  <article key={index} className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 z-10" aria-hidden="true">
                      <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center shadow-lg animate-timeline-pop`}
                           style={{ animationDelay: `${index * 0.2}s` }}>
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Timeline Content */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                      <div className={`bg-white p-6 rounded-2xl shadow-lg transform transition-all duration-700 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                           style={{ transitionDelay: `${index * 0.15}s` }}>
                        <time className="text-2xl font-bold text-indigo-600 mb-2 block">{item.year}</time>
                        <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
                        <p className="text-slate-600">{item.description}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SEO Enhanced Core Values */}
        <section className="relative z-10 py-20 bg-gradient-to-br from-slate-800 to-slate-900" aria-labelledby="values-heading">
          <div className="container mx-auto px-6">
            <header className="text-center mb-16">
              <h2 id="values-heading" className="text-4xl font-bold text-white mb-4">
                Core Values Driving Safe School Transportation in Patna Bihar
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                The fundamental principles that guide every decision we make at <strong>Back2Nest</strong> to ensure the safest <em>school van service in Bihar</em>
              </p>
            </header>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {coreValues.map((value, index) => (
                <article key={index} 
                     className={`group relative overflow-hidden bg-white/10 backdrop-blur-sm rounded-3xl p-8 transition-all duration-700 hover:bg-white/20 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                     style={{ transitionDelay: `${index * 0.1}s` }}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} aria-hidden="true"></div>
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`} aria-hidden="true">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                    <p className="text-slate-300 leading-relaxed">{value.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Statistics Section for SEO */}
        <section className="relative z-10 py-20 bg-white/90 backdrop-blur-sm" aria-labelledby="stats-heading">
          <div className="container mx-auto px-6">
            <header className="text-center mb-12">
              <h2 id="stats-heading" className="text-4xl font-bold text-slate-800 mb-4">
                Back2Nest by the Numbers - Leading School Transport in Bihar
              </h2>
              <p className="text-xl text-slate-600">
                Trusted statistics that showcase our commitment to safe <strong>school transportation in Patna</strong>
              </p>
            </header>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg" itemScope itemType="https://schema.org/Statistic">
                <div className="text-4xl font-bold text-indigo-600 mb-2" itemProp="value">1,250+</div>
                <div className="text-slate-600" itemProp="name">Happy Families Served</div>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg" itemScope itemType="https://schema.org/Statistic">
                <div className="text-4xl font-bold text-green-600 mb-2" itemProp="value">500+</div>
                <div className="text-slate-600" itemProp="name">Professional Drivers</div>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg" itemScope itemType="https://schema.org/Statistic">
                <div className="text-4xl font-bold text-purple-600 mb-2" itemProp="value">50+</div>
                <div className="text-slate-600" itemProp="name">Partner Schools</div>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg" itemScope itemType="https://schema.org/Statistic">
                <div className="text-4xl font-bold text-orange-600 mb-2" itemProp="value">4.8★</div>
                <div className="text-slate-600" itemProp="name">Average Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Enhanced CTA */}
        <section className="relative z-10 py-20 bg-gradient-to-r from-indigo-600 to-purple-700" aria-labelledby="cta-heading">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 id="cta-heading" className="text-4xl font-bold text-white mb-6">
                Ready to Join 1,250+ Happy Families Using Back2Nest in Patna?
              </h2>
              <p className="text-xl text-indigo-100 mb-8">
                Experience the peace of mind that comes with knowing your child travels safely with <strong>Bihar's most trusted school van service</strong>. 
                Join families across <em>Patna</em> who choose Back2Nest every day.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:help@back2nest.in" 
                   className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                   aria-label="Contact Back2Nest school van service via email">
                  Contact Us Today
                </a>
                <a href="tel:+918935904820"
                   className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-all duration-300"
                   aria-label="Call Back2Nest school van service">
                  Call Now: +91-8935904820
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Performance Optimized CSS */}
      <style jsx>{`
        @keyframes badge-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes text-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }
        
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes timeline-pop {
          0% { transform: scale(0) rotate(0deg); opacity: 0; }
          50% { transform: scale(1.1) rotate(180deg); opacity: 0.8; }
          100% { transform: scale(1) rotate(360deg); opacity: 1; }
        }
        
        .animate-badge-float { animation: badge-float 3s ease-in-out infinite; }
        .animate-text-shimmer { 
          background-size: 200% auto;
          animation: text-shimmer 3s linear infinite;
        }
        .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        .animate-bounce-gentle { animation: bounce-gentle 2s ease-in-out infinite; }
        .animate-timeline-pop { animation: timeline-pop 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards; }
        
        @media (max-width: 768px) {
          .lg\\:flex-row .w-5\\/12 {
            width: 100%;
            padding: 0;
            margin-bottom: 2rem;
          }
          
          .absolute.left-1\\/2 {
            left: 2rem;
          }
          
          .flex-row-reverse {
            flex-direction: column;
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

export default AboutPage;
