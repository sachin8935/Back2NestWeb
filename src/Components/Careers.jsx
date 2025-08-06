import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeftIcon,
  BriefcaseIcon,
  EnvelopeIcon,
  PhoneIcon,
  UserGroupIcon,
  HeartIcon,
  BellIcon,
  PaperAirplaneIcon,
  ExclamationCircleIcon,
  BuildingOfficeIcon,
  CalendarDaysIcon
} from '@heroicons/react/24/outline';
import SEO from '../Components/SEO';

const Careers = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // FIXED: Enhanced structured data with canonical URL consistency
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://back2nest.in/careers#webpage",
        "url": "https://back2nest.in/careers", // FIXED: Matches canonical URL
        "name": "Careers at Back2Nest - Join Our Team | School Transportation Jobs Patna Bihar",
        "description": "Explore career opportunities at Back2Nest. Currently no openings available. Contact us for future opportunities in school transportation industry in Patna, Bihar.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://back2nest.in#website",
          "url": "https://back2nest.in",
          "name": "Back2Nest - Safe School Transportation"
        },
        "mainEntity": {
          "@id": "https://back2nest.in/careers#organization"
        },
        "breadcrumb": {
          "@id": "https://back2nest.in/careers#breadcrumb"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://back2nest.in/careers#organization",
        "name": "Back2Nest",
        "url": "https://back2nest.in",
        "logo": {
          "@type": "ImageObject",
          "url": "https://back2nest.in/assets/logo.png",
          "width": "200",
          "height": "60"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Jagat Narayan Road",
          "addressLocality": "Patna",
          "addressRegion": "Bihar",
          "postalCode": "800003",
          "addressCountry": "IN"
        },
        "telephone": "+91-8935904820",
        "email": "careers@back2nest.in",
        "description": "Leading school transportation service provider in Patna, Bihar, committed to safe and reliable student commute solutions",
        "numberOfEmployees": "500+",
        "foundingDate": "2022",
        "slogan": "Safe Journey Home",
        "sameAs": [
          "https://www.facebook.com/back2nest",
          "https://www.instagram.com/back2nest",
          "https://x.com/back2_nest"
        ]
      },
      {
        "@type": "JobPosting",
        "@id": "https://back2nest.in/careers#no-current-openings",
        "title": "No Current Job Openings Available",
        "description": "Back2Nest currently has no open positions. We encourage interested candidates to check back regularly or contact us directly for future opportunities in school transportation.",
        "hiringOrganization": {
          "@id": "https://back2nest.in/careers#organization"
        },
        "jobLocation": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Patna",
            "addressRegion": "Bihar",
            "addressCountry": "IN"
          }
        },
        "datePosted": "2025-01-04",
        "validThrough": "2025-12-31",
        "employmentType": "FULL_TIME",
        "applicantLocationRequirements": {
          "@type": "Country",
          "name": "India"
        }
      }
    ]
  };

  // FIXED: Breadcrumb structured data with canonical URL
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://back2nest.in/careers#breadcrumb",
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
        "name": "Careers",
        "item": "https://back2nest.in/careers" // FIXED: Matches canonical URL
      }
    ]
  };

  const companyValues = [
    {
      icon: HeartIcon,
      title: "Safety First",
      description: "We prioritize student safety above everything else in every decision we make",
      color: "text-red-500",
      bgColor: "bg-red-50"
    },
    {
      icon: UserGroupIcon,
      title: "Team Spirit",
      description: "We believe in collaboration, mutual support, and building lasting relationships",
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: BriefcaseIcon,
      title: "Professional Growth",
      description: "We invest in our team's continuous development and career advancement",
      color: "text-green-500",
      bgColor: "bg-green-50"
    }
  ];

  const futureRoles = [
    "School Van Drivers",
    "Fleet Supervisors",
    "Customer Support Representatives",
    "Safety Coordinators",
    "Route Planners",
    "Technology Specialists",
    "Operations Managers",
    "Maintenance Technicians"
  ];

  const benefits = [
    "Competitive salary packages",
    "Comprehensive health insurance",
    "Professional training programs",
    "Career advancement opportunities",
    "Flexible working arrangements",
    "Employee recognition programs"
  ];

  return (
    <>
      <SEO 
        title="Careers at Back2Nest - Join Our Team | School Transportation Jobs Patna Bihar"
        description="Explore career opportunities at Back2Nest, Patna's leading school transportation service. Currently no openings available. Contact us at careers@back2nest.in or +91-8935904820 for future opportunities in safe school transport industry in Bihar."
        keywords="Back2Nest careers, school transport jobs Patna, school van driver jobs Bihar, school bus jobs Patna, transportation careers Bihar, join Back2Nest team, school transport employment, driver jobs Patna Bihar, careers@back2nest.in"
        canonicalUrl="https://back2nest.in/careers" // FIXED: Matches route
        ogTitle="Careers - Join Back2Nest Team | School Transportation Jobs Patna Bihar"
        ogDescription="Currently no job openings at Back2Nest. Contact careers@back2nest.in for future opportunities in school transportation. Join India's leading school transport service in Patna, Bihar."
        ogImage="https://back2nest.in/images/careers-og.jpg"
        ogUrl="https://back2nest.in/careers" // FIXED: Added ogUrl to match canonical
        structuredData={structuredData}
        breadcrumbData={breadcrumbData}
        additionalMeta={{
          'geo.region': 'IN-BR',
          'geo.placename': 'Patna, Bihar, India',
          'geo.position': '25.617001;85.157219',
          'ICBM': '25.617001, 85.157219'
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
        {/* FIXED: Enhanced Breadcrumb Navigation with Schema Markup */}
        <nav className="container mx-auto px-6 py-4" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-600" itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link 
                to="/" 
                className="hover:text-purple-600 transition-colors" 
                title="Back2Nest Home - School Transportation Patna"
                itemProp="item"
              >
                <span itemProp="name">Home</span>
              </Link>
              <meta itemProp="position" content="1" />
            </li>
            <li aria-hidden="true" className="text-gray-400">/</li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span className="text-gray-800 font-medium" itemProp="name">Careers</span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </nav>

        <div className="container mx-auto px-6 py-8">
          <main className="max-w-5xl mx-auto">
            {/* Hero Section */}
            <header className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} aria-labelledby="careers-heading">
              <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
                Careers at Back2Nest
              </div>
              <h1 id="careers-heading" className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Join Our Mission of 
                <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Safe School Transportation
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Be part of India's most trusted school transportation service in <strong>Patna, Bihar</strong>. 
                Help us make every child's journey to school safe and reliable while building a rewarding career.
              </p>
              
              {/* Company Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm" itemScope itemType="https://schema.org/Statistic">
                  <div className="text-2xl font-bold text-purple-600" itemProp="value">500+</div>
                  <div className="text-sm text-gray-600" itemProp="name">Team Members</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm" itemScope itemType="https://schema.org/Statistic">
                  <div className="text-2xl font-bold text-blue-600" itemProp="value">1,250+</div>
                  <div className="text-sm text-gray-600" itemProp="name">Families Served</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm" itemScope itemType="https://schema.org/Statistic">
                  <div className="text-2xl font-bold text-green-600" itemProp="value">3+</div>
                  <div className="text-sm text-gray-600" itemProp="name">Years Growing</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm" itemScope itemType="https://schema.org/Statistic">
                  <div className="text-2xl font-bold text-orange-600" itemProp="value">4.8★</div>
                  <div className="text-sm text-gray-600" itemProp="name">Rating</div>
                </div>
              </div>
            </header>

            {/* Current Status Section */}
            <section className={`mb-16 transform transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} aria-labelledby="current-status">
              <div className="bg-white rounded-2xl shadow-xl p-8 text-center border-l-4 border-blue-500">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6" aria-hidden="true">
                  <ExclamationCircleIcon className="w-8 h-8 text-blue-600" />
                </div>
                <h2 id="current-status" className="text-3xl font-bold text-gray-900 mb-4">
                  No Current Job Openings Available
                </h2>
                <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                  We're excited about your interest in joining the Back2Nest family! Currently, we don't have any open positions available. 
                  However, we're always growing and looking for talented individuals who share our passion for student safety and excellence in service.
                </p>
                <div className="flex items-center justify-center gap-2 text-blue-600 font-medium">
                  <BellIcon className="w-5 h-5" aria-hidden="true" />
                  <span>We'll update this page when new positions become available</span>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section className={`mb-16 transform transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} aria-labelledby="contact-info">
              <h2 id="contact-info" className="text-3xl font-bold text-gray-900 text-center mb-8">
                Interested in Future Opportunities?
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Contact Details */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Get In Touch With Our HR Team
                  </h3>
                  <p className="text-gray-600 mb-6">
                    We'd love to hear from you! Reach out to us and we'll keep your information on file for future openings that match your skills and interests.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center" aria-hidden="true">
                        <EnvelopeIcon className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Email Our HR Team</p>
                        <a 
                          href="mailto:careers@back2nest.in" 
                          className="text-purple-600 hover:text-purple-800 transition-colors"
                          title="Send email to Back2Nest careers team"
                          aria-label="Email careers team at careers@back2nest.in"
                        >
                          careers@back2nest.in
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center" aria-hidden="true">
                        <PhoneIcon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Call Our Office</p>
                        <a 
                          href="tel:+918935904820" 
                          className="text-blue-600 hover:text-blue-800 transition-colors"
                          title="Call Back2Nest for career inquiries"
                          aria-label="Call Back2Nest at +91-8935904820"
                        >
                          +91-8935904820
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center" aria-hidden="true">
                        <BuildingOfficeIcon className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Office Location</p>
                        <p className="text-gray-600">Jagat Narayan Road, Patna, Bihar 800003</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Send Resume */}
                <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl shadow-lg p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">
                    Submit Your Resume for Future Consideration
                  </h3>
                  <p className="text-purple-100 mb-6">
                    Even though we don't have current openings, we're always building our talent pool. 
                    Send us your resume and we'll reach out when a suitable position opens up that matches your expertise.
                  </p>
                  
                  <a
                    href="mailto:careers@back2nest.in?subject=Resume Submission - Future Opportunities&body=Hello Back2Nest HR Team,%0D%0A%0D%0AI am interested in future career opportunities with Back2Nest. Please find my resume attached.%0D%0A%0D%0AThank you for your consideration!%0D%0A%0D%0ABest regards"
                    className="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
                    title="Send resume to Back2Nest careers team"
                    aria-label="Send resume via email to careers team"
                  >
                    <PaperAirplaneIcon className="w-5 h-5" aria-hidden="true" />
                    Send Resume via Email
                  </a>
                  
                  <p className="text-sm text-purple-200 mt-4">
                    We'll review your application carefully and contact you when relevant positions become available.
                  </p>
                </div>
              </div>
            </section>

            {/* Company Values */}
            <section className={`mb-16 transform transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} aria-labelledby="company-values">
              <h2 id="company-values" className="text-3xl font-bold text-gray-900 text-center mb-12">
                Why Work at Back2Nest?
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {companyValues.map((value, index) => (
                  <div 
                    key={index}
                    className={`${value.bgColor} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group`}
                  >
                    <div className={`w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`} aria-hidden="true">
                      <value.icon className={`w-8 h-8 ${value.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-700">{value.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits Section */}
            <section className={`mb-16 transform transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} aria-labelledby="benefits">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 id="benefits" className="text-3xl font-bold text-gray-900 text-center mb-8">
                  Employee Benefits & Perks
                </h2>
                <p className="text-lg text-gray-600 text-center mb-8 max-w-2xl mx-auto">
                  We believe in taking care of our team members and providing them with comprehensive benefits and growth opportunities.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="w-2 h-2 bg-purple-600 rounded-full" aria-hidden="true"></div>
                      <span className="text-gray-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Future Roles */}
            <section className={`mb-16 transform transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} aria-labelledby="future-roles">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 id="future-roles" className="text-3xl font-bold text-gray-900 text-center mb-8">
                  Roles We Typically Hire For
                </h2>
                <p className="text-lg text-gray-600 text-center mb-8 max-w-2xl mx-auto">
                  While we don't have current openings, these are the types of positions we often recruit for as our company continues to grow and expand our services across Bihar.
                </p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {futureRoles.map((role, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors group"
                    >
                      <div className="w-2 h-2 bg-purple-600 rounded-full group-hover:scale-150 transition-transform" aria-hidden="true"></div>
                      <span className="text-gray-700 font-medium group-hover:text-purple-700 transition-colors">{role}</span>
                    </div>
                  ))}
                </div>
                
                <div className="text-center mt-8">
                  <p className="text-gray-600 mb-4">
                    Don't see your specialty listed? We're always open to exceptional talent who can contribute to our mission!
                  </p>
                  <a
                    href="mailto:careers@back2nest.in?subject=Unique Skills Inquiry&body=Hello Back2Nest Team,%0D%0A%0D%0AI would like to discuss how my unique skills and experience could contribute to your mission of safe school transportation.%0D%0A%0D%0AThank you!"
                    className="text-purple-600 hover:text-purple-800 underline font-medium"
                    title="Contact us about your unique skills"
                    aria-label="Email us about your unique skills and experience"
                  >
                    Tell us about your unique skills →
                  </a>
                </div>
              </div>
            </section>

            {/* Internal Links Section */}
            <section className="mb-16" aria-labelledby="explore-more">
              <h2 id="explore-more" className="text-3xl font-bold text-gray-900 text-center mb-8">
                Learn More About Back2Nest
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Link to="/about" className="block group">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center" aria-hidden="true">
                        <BuildingOfficeIcon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">About Our Company</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Learn about our mission, founder Sachin Kumar's vision, and how we're revolutionizing school transportation in Patna, Bihar.
                    </p>
                  </div>
                </Link>

                <Link to="/safety" className="block group">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center" aria-hidden="true">
                        <HeartIcon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Our Safety Standards</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Discover our comprehensive safety measures including live GPS tracking, certified drivers, and emergency protocols.
                    </p>
                  </div>
                </Link>

                <Link to="/contact" className="block group">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center" aria-hidden="true">
                        <EnvelopeIcon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Contact Information</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Get in touch with our team for general inquiries, service information, and other business matters.
                    </p>
                  </div>
                </Link>
              </div>
            </section>

            {/* Social Media & Updates */}
            <section className="text-center" aria-labelledby="stay-connected">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h2 id="stay-connected" className="text-3xl font-bold mb-4">
                  Stay Connected for Career Updates
                </h2>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Follow us on social media to be the first to know about new job openings, company updates, and insights into life at Back2Nest.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                  <a
                    href="https://www.linkedin.com/company/back2nest"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2 justify-center"
                    title="Follow Back2Nest on LinkedIn for career updates"
                    aria-label="Follow Back2Nest on LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    Follow on LinkedIn
                  </a>
                  <a
                    href="https://www.facebook.com/back2nest"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center gap-2 justify-center"
                    title="Follow Back2Nest on Facebook for updates"
                    aria-label="Follow Back2Nest on Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Follow on Facebook
                  </a>
                </div>
                
                <p className="text-sm text-blue-200">
                  Or bookmark this page and check back regularly for new career opportunities
                </p>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default Careers;
