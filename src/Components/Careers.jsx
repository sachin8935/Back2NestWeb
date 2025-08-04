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
  ExclamationCircleIcon
} from '@heroicons/react/24/outline';
import SEO from '../Components/SEO';

const Careers = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Enhanced structured data for careers page
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://back2nest.in/careers#webpage",
        "url": "https://back2nest.in/careers",
        "name": "Careers at Back2Nest - Join Our Team | School Transportation Jobs Patna Bihar",
        "description": "Explore career opportunities at Back2Nest. Currently no openings available. Contact us for future opportunities in school transportation industry in Patna, Bihar.",
        "mainEntity": {
          "@id": "https://back2nest.in/careers#organization"
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
        "slogan": "Safe Journey Home"
      },
      {
        "@type": "JobPosting",
        "@id": "https://back2nest.in/careers#no-current-openings",
        "title": "No Current Job Openings",
        "description": "Back2Nest currently has no open positions. We encourage interested candidates to check back regularly or contact us directly for future opportunities.",
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
        "employmentType": "FULL_TIME"
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
        "name": "Careers",
        "item": "https://back2nest.in/careers"
      }
    ]
  };

  const companyValues = [
    {
      icon: HeartIcon,
      title: "Safety First",
      description: "We prioritize student safety above everything else",
      color: "text-red-500"
    },
    {
      icon: UserGroupIcon,
      title: "Team Spirit",
      description: "We believe in collaboration and mutual support",
      color: "text-blue-500"
    },
    {
      icon: BriefcaseIcon,
      title: "Professional Growth",
      description: "We invest in our team's continuous development",
      color: "text-green-500"
    }
  ];

  const futureRoles = [
    "School Van Drivers",
    "Fleet Supervisors",
    "Customer Support Representatives",
    "Safety Coordinators",
    "Route Planners",
    "Technology Specialists",
    "Operations Managers"
  ];

  return (
    <>
      <SEO 
        title="Careers at Back2Nest - Join Our Team | School Transportation Jobs Patna Bihar"
        description="Explore career opportunities at Back2Nest, Patna's leading school transportation service. Currently no openings available. Contact us at careers@back2nest.in or +91-8935904820 for future opportunities in safe school transport industry in Bihar."
        keywords="Back2Nest careers, school transport jobs Patna, school van driver jobs Bihar, school bus jobs Patna, transportation careers Bihar, join Back2Nest team, school transport employment, driver jobs Patna Bihar, careers@back2nest.in"
        canonicalUrl="https://back2nest.in/careers"
        ogTitle="Careers - Join Back2Nest Team | School Transportation Jobs Patna Bihar"
        ogDescription="Currently no job openings at Back2Nest. Contact careers@back2nest.in for future opportunities in school transportation. Join India's leading school transport service in Patna, Bihar."
        ogImage="https://back2nest.in/images/careers-og.jpg"
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
        {/* Breadcrumb Navigation */}
        <nav className="container mx-auto px-6 py-4" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link to="/" className="hover:text-purple-600 transition-colors">Home</Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-800 font-medium">Careers</li>
          </ol>
        </nav>

        <div className="container mx-auto px-6 py-8">
          <main className="max-w-5xl mx-auto">
            {/* Hero Section */}
            <header className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
                Careers at Back2Nest
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Join Our Mission of 
                <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Safe School Transportation
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Be part of India's most trusted school transportation service in <strong>Patna, Bihar</strong>. 
                Help us make every child's journey to school safe and reliable.
              </p>
            </header>

            {/* Current Status Section */}
            <section className={`mb-16 transform transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-white rounded-2xl shadow-xl p-8 text-center border-l-4 border-blue-500">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ExclamationCircleIcon className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  No Current Openings
                </h2>
                <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                  We're excited about your interest in joining Back2Nest! Currently, we don't have any open positions available. 
                  However, we're always growing and looking for talented individuals who share our passion for student safety.
                </p>
                <div className="flex items-center justify-center gap-2 text-blue-600 font-medium">
                  <BellIcon className="w-5 h-5" />
                  <span>We'll update this page when new positions become available</span>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section className={`mb-16 transform transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Contact Details */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Interested in Future Opportunities?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    We'd love to hear from you! Reach out to us and we'll keep your information on file for future openings.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <EnvelopeIcon className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Email Us</p>
                        <a 
                          href="mailto:careers@back2nest.in" 
                          className="text-purple-600 hover:text-purple-800 transition-colors"
                        >
                          careers@back2nest.in
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <PhoneIcon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Call Us</p>
                        <a 
                          href="tel:+918935904820" 
                          className="text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          +91-8935904820
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Send Resume */}
                <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl shadow-lg p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">
                    Send Us Your Resume
                  </h3>
                  <p className="text-purple-100 mb-6">
                    Even though we don't have current openings, we're always building our talent pool. 
                    Send us your resume and we'll reach out when a suitable position opens up.
                  </p>
                  
                  <a
                    href="mailto:careers@back2nest.in?subject=Resume Submission - Future Opportunities&body=Hello Back2Nest Team,%0D%0A%0D%0AI am interested in future career opportunities with Back2Nest. Please find my resume attached.%0D%0A%0D%0AThank you!"
                    className="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
                  >
                    <PaperAirplaneIcon className="w-5 h-5" />
                    Send Resume via Email
                  </a>
                  
                  <p className="text-sm text-purple-200 mt-4">
                    We'll review your application and contact you when relevant positions become available.
                  </p>
                </div>
              </div>
            </section>

            {/* Company Values */}
            <section className={`mb-16 transform transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                Why Work at Back2Nest?
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {companyValues.map((value, index) => (
                  <div 
                    key={index}
                    className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                  >
                    <div className={`w-16 h-16 ${value.color === 'text-red-500' ? 'bg-red-100' : value.color === 'text-blue-500' ? 'bg-blue-100' : 'bg-green-100'} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <value.icon className={`w-8 h-8 ${value.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Future Roles */}
            <section className={`mb-16 transform transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                  Roles We Typically Hire For
                </h2>
                <p className="text-lg text-gray-600 text-center mb-8 max-w-2xl mx-auto">
                  While we don't have current openings, these are the types of positions we often recruit for as we grow:
                </p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {futureRoles.map((role, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span className="text-gray-700 font-medium">{role}</span>
                    </div>
                  ))}
                </div>
                
                <div className="text-center mt-8">
                  <p className="text-gray-600 mb-4">
                    Don't see your specialty listed? We're always open to exceptional talent!
                  </p>
                  <a
                    href="mailto:careers@back2nest.in"
                    className="text-purple-600 hover:text-purple-800 underline font-medium"
                  >
                    Tell us about your unique skills →
                  </a>
                </div>
              </div>
            </section>

            {/* Social Media & Updates */}
            <section className="text-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-4">
                  Stay Connected for Updates
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Follow us on social media to be the first to know about new job openings and company updates.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                  <a
                    href="https://www.linkedin.com/company/back2nest"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2 justify-center"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    Follow on LinkedIn
                  </a>
                  <a
                    href="https://www.facebook.com/back2nest"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center gap-2 justify-center"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Follow on Facebook
                  </a>
                </div>
                
                <p className="text-sm text-blue-200">
                  Or bookmark this page and check back regularly for new opportunities
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
