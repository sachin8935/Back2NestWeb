import React from 'react';
import { Link } from 'react-router-dom';
import { 
  HomeIcon,
  UserGroupIcon,
  TruckIcon,
  ShieldCheckIcon,
  MapPinIcon,
  NewspaperIcon,
  BriefcaseIcon,
  QuestionMarkCircleIcon,
  PhoneIcon,
  CurrencyDollarIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';
import SEO from '../Components/SEO';

const Sitemap = () => {
  const currentYear = new Date().getFullYear();

  // Enhanced structured data for sitemap
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://back2nest.in/sitemap#webpage",
        "url": "https://back2nest.in/sitemap",
        "name": "Sitemap - Back2Nest School Transportation Patna Bihar",
        "description": "Complete sitemap of Back2Nest website with all pages for school transportation services in Patna, Bihar including booking, safety features, live tracking, and support",
        "publisher": {
          "@type": "LocalBusiness",
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
          "email": "help@back2nest.in"
        },
        "mainEntity": {
          "@id": "https://back2nest.in/sitemap#itemlist"
        },
        "dateModified": new Date().toISOString().split('T')[0]
      },
      {
        "@type": "ItemList",
        "@id": "https://back2nest.in/sitemap#itemlist",
        "name": "Back2Nest Website Pages",
        "description": "All pages available on Back2Nest school transportation website",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "url": "https://back2nest.in/",
            "name": "Home"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "url": "https://back2nest.in/about",
            "name": "About Us"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "url": "https://back2nest.in/students",
            "name": "Book School Van"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "url": "https://back2nest.in/driver",
            "name": "Driver Partnership"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "url": "https://back2nest.in/safety-features",
            "name": "Safety Features"
          },
          {
            "@type": "ListItem",
            "position": 6,
            "url": "https://back2nest.in/live-tracking",
            "name": "Live Tracking"
          },
          {
            "@type": "ListItem",
            "position": 7,
            "url": "https://back2nest.in/blogs",
            "name": "Blog"
          },
          {
            "@type": "ListItem",
            "position": 8,
            "url": "https://back2nest.in/careers",
            "name": "Careers"
          },
          {
            "@type": "ListItem",
            "position": 9,
            "url": "https://back2nest.in/help",
            "name": "Help Centre"
          },
          {
            "@type": "ListItem",
            "position": 10,
            "url": "https://back2nest.in/contact",
            "name": "Contact Us"
          },
          {
            "@type": "ListItem",
            "position": 11,
            "url": "https://back2nest.in/pricing",
            "name": "Pricing Plans"
          },
          {
            "@type": "ListItem",
            "position": 12,
            "url": "https://back2nest.in/privacy-policy",
            "name": "Privacy Policy"
          },
          {
            "@type": "ListItem",
            "position": 13,
            "url": "https://back2nest.in/terms-conditions",
            "name": "Terms & Conditions"
          },
          {
            "@type": "ListItem",
            "position": 14,
            "url": "https://back2nest.in/refund-policy",
            "name": "Refund Policy"
          }
        ]
      }
    ]
  };

  // Enhanced breadcrumb structured data
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
        "name": "Sitemap",
        "item": "https://back2nest.in/sitemap"
      }
    ]
  };

  // Enhanced additional meta tags
  const additionalMeta = {
    'geo.region': 'IN-BR',
    'geo.placename': 'Patna, Bihar, India',
    'geo.position': '25.617001;85.157219',
    'ICBM': '25.617001, 85.157219',
    'distribution': 'global',
    'rating': 'general',
    'HandheldFriendly': 'True',
    'MobileOptimized': '320',
    'application-name': 'Back2Nest Sitemap',
    'msapplication-TileColor': '#4F46E5',
    'theme-color': '#4F46E5'
  };

  // Page sections with icons
  const sitePages = [
    {
      category: "Main Pages",
      pages: [
        {
          name: "Home",
          path: "/",
          icon: HomeIcon,
          description: "Back2Nest homepage - Safe school transportation in Patna, Bihar"
        },
        {
          name: "About Us",
          path: "/about",
          icon: UserGroupIcon,
          description: "Learn about Back2Nest's mission for safe school transportation"
        }
      ]
    },
    {
      category: "Services",
      pages: [
        {
          name: "Book School Van",
          path: "/students",
          icon: TruckIcon,
          description: "Book safe and reliable school van services for your child"
        },
        {
          name: "Driver Partnership",
          path: "/driver",
          icon: UserGroupIcon,
          description: "Join Back2Nest as a professional driver partner"
        },
        {
          name: "Safety Features",
          path: "/safety-features",
          icon: ShieldCheckIcon,
          description: "Comprehensive safety features and protocols for student transportation"
        },
        {
          name: "Live GPS Tracking",
          path: "/live-tracking",
          icon: MapPinIcon,
          description: "Real-time GPS tracking of school vans for parent peace of mind"
        },
        {
          name: "Pricing Plans",
          path: "/pricing",
          icon: CurrencyDollarIcon,
          description: "Transparent pricing plans for school transportation services"
        }
      ]
    },
    {
      category: "Resources",
      pages: [
        {
          name: "Blog",
          path: "/blogs",
          icon: NewspaperIcon,
          description: "Latest news, tips, and updates on school transportation safety"
        },
        {
          name: "Help Centre",
          path: "/help",
          icon: QuestionMarkCircleIcon,
          description: "FAQs and support for Back2Nest services and features"
        },
        {
          name: "Contact Us",
          path: "/contact",
          icon: PhoneIcon,
          description: "Get in touch with our customer support team"
        }
      ]
    },
    {
      category: "Company",
      pages: [
        {
          name: "Careers",
          path: "/careers",
          icon: BriefcaseIcon,
          description: "Explore career opportunities at Back2Nest"
        }
      ]
    },
    {
      category: "Legal",
      pages: [
        {
          name: "Privacy Policy",
          path: "/privacy-policy",
          icon: DocumentTextIcon,
          description: "How we protect and handle your personal information"
        },
        {
          name: "Terms & Conditions",
          path: "/terms-conditions",
          icon: DocumentTextIcon,
          description: "Legal terms and conditions for using Back2Nest services"
        },
        {
          name: "Refund Policy",
          path: "/refund-policy",
          icon: DocumentTextIcon,
          description: "Refund and cancellation policy for transportation services"
        }
      ]
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <SEO 
        title="Sitemap - All Pages Directory | Back2Nest School Transportation Website Patna Bihar"
        description="Complete sitemap of Back2Nest website featuring all pages for school transportation services in Patna, Bihar. Easy navigation to booking, safety features, live tracking, pricing, support pages, and more with comprehensive site structure for better user experience."
        keywords="Back2Nest sitemap, website navigation, all pages directory, school transport website Bihar, site map Patna, Back2Nest pages, website structure, school van booking pages, navigation directory, website index"
        canonicalUrl="https://back2nest.in/sitemap"
        ogTitle="Website Sitemap - Back2Nest School Transportation | Complete Pages Directory"
        ogDescription="Browse all Back2Nest website pages including booking, safety features, live tracking, pricing, and support for school transportation services in Patna, Bihar with easy navigation."
        ogImage="https://back2nest.in/images/sitemap-social-share.jpg"
        ogUrl="https://back2nest.in/sitemap"
        structuredData={structuredData}
        breadcrumbData={breadcrumbData}
        additionalMeta={additionalMeta}
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Breadcrumb Navigation */}
        <nav className="container mx-auto px-6 py-4" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link to="/" onClick={scrollToTop} className="hover:text-blue-600 transition-colors">Home</Link>
            </li>
            <li className="text-gray-400" aria-hidden="true">/</li>
            <li className="text-gray-800 font-medium" aria-current="page">Sitemap</li>
          </ol>
        </nav>

        <div className="container mx-auto px-6 py-8">
          <main className="max-w-6xl mx-auto">
            {/* Header Section */}
            <header className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                Website Navigation
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Website 
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Sitemap
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Find all pages on the Back2Nest website. Easy navigation to our school transportation services, 
                safety features, and support resources for families in <strong>Patna, Bihar</strong>.
              </p>
            </header>

            {/* Sitemap Content */}
            <div className="space-y-12">
              {sitePages.map((section, sectionIndex) => (
                <section key={sectionIndex} className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">
                    {section.category}
                  </h2>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {section.pages.map((page, pageIndex) => (
                      <Link
                        key={pageIndex}
                        to={page.path}
                        onClick={scrollToTop}
                        className="group block p-6 bg-gray-50 rounded-xl hover:bg-blue-50 hover:shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        title={page.description}
                        aria-label={`Navigate to ${page.name} - ${page.description}`}
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-blue-100 group-hover:bg-blue-200 rounded-lg flex items-center justify-center transition-colors duration-300">
                            <page.icon className="w-6 h-6 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-300 mb-2">
                              {page.name}
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                              {page.description}
                            </p>
                            <div className="mt-3">
                              <span className="text-xs text-blue-600 group-hover:text-blue-700 font-medium">
                                Visit Page →
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            {/* Quick Links Summary */}
            <section className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-6">Quick Navigation</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Looking for something specific? Here are our most popular pages for quick access.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { name: "Book School Van", path: "/students" },
                  { name: "Live Tracking", path: "/live-tracking" },
                  { name: "Pricing Plans", path: "/pricing" },
                  { name: "Contact Support", path: "/contact" }
                ].map((quickLink, index) => (
                  <Link
                    key={index}
                    to={quickLink.path}
                    onClick={scrollToTop}
                    className="bg-white bg-opacity-20 hover:bg-opacity-30 px-6 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
                    aria-label={`Quick access to ${quickLink.name}`}
                  >
                    {quickLink.name}
                  </Link>
                ))}
              </div>
            </section>

            {/* SEO Footer */}
            <section className="mt-16 text-center">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Sitemap</h2>
                <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  This sitemap provides a complete overview of all pages available on the Back2Nest website. 
                  We organize our content to make it easy for parents, students, and drivers to find information 
                  about our school transportation services in Patna, Bihar. All pages are designed to be 
                  accessible, informative, and user-friendly.
                </p>
                
                <div className="mt-8 grid md:grid-cols-3 gap-6 text-sm">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h3 className="font-semibold text-blue-700 mb-2">For Parents</h3>
                    <p className="text-gray-600">Booking, safety features, live tracking, and support pages</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h3 className="font-semibold text-green-700 mb-2">For Drivers</h3>
                    <p className="text-gray-600">Partnership opportunities, careers, and requirements</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h3 className="font-semibold text-purple-700 mb-2">For Everyone</h3>
                    <p className="text-gray-600">About us, blog, contact information, and legal pages</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact CTA */}
            <section className="mt-16 text-center">
              <div className="bg-gray-900 rounded-2xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Our customer support team is here to help you navigate our services and find the information you need.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    onClick={scrollToTop}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                    aria-label="Contact our support team for assistance"
                  >
                    Contact Support
                  </Link>
                  <a
                    href="tel:+918935904820"
                    className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
                    aria-label="Call Back2Nest support at +91-8935904820"
                  >
                    Call: +91-8935904820
                  </a>
                </div>
              </div>
            </section>

            {/* Footer Info */}
            <footer className="text-center text-gray-500 text-sm mt-12 pt-8 border-t border-gray-200">
              <p>Last Updated: {new Date().toLocaleDateString()}</p>
              <p className="mt-2">© {currentYear} Back2Nest. All rights reserved. | Safe Journey Home</p>
            </footer>
          </main>
        </div>
      </div>
    </>
  );
};

export default Sitemap;
