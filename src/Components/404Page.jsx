// src/Components/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  HomeIcon, 
  ExclamationTriangleIcon,
  PhoneIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline';
import SEO from './SEO';

const NotFound = () => {
  // Enhanced structured data for 404 page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "404 Page Not Found - Back2Nest School Transportation",
    "description": "The requested page was not found. Return to Back2Nest homepage for school transportation services in Patna, Bihar.",
    "publisher": {
      "@type": "LocalBusiness",
      "name": "Back2Nest",
      "url": "https://back2nest.in"
    }
  };

  const additionalMeta = {
    'robots': 'noindex, nofollow', // Don't index 404 pages
    'geo.region': 'IN-BR',
    'geo.placename': 'Patna, Bihar, India',
  };

  return (
    <>
      <SEO 
        title="404 - Page Not Found | Back2Nest School Transportation Patna Bihar"
        description="The page you're looking for doesn't exist. Return to Back2Nest homepage for safe school transportation services in Patna, Bihar with GPS tracking and professional drivers."
        canonicalUrl="https://back2nest.in/404"
        ogTitle="Page Not Found - Back2Nest School Transportation"
        ogDescription="The requested page was not found. Visit our homepage for school transportation services in Patna, Bihar."
        ogImage="https://back2nest.in/images/404-og.jpg"
        structuredData={structuredData}
        additionalMeta={additionalMeta}
        noindex={true} // Don't index 404 pages
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Icon */}
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ExclamationTriangleIcon className="w-16 h-16 text-blue-600" />
            </div>
            <h1 className="text-8xl font-bold text-gray-900 mb-2">404</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          {/* Error Message */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Oops! Page Not Found
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              The page you're looking for seems to have taken a different route. 
              Don't worry - let's get you back on track to our safe school transportation services.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
              <p className="text-blue-700 text-sm">
                <strong>Looking for something specific?</strong> Try our homepage or contact our support team for assistance.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/"
              className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <HomeIcon className="w-6 h-6" />
              Back to Homepage
              <ArrowLeftIcon className="w-5 h-5 group-hover:-translate-x-1 transition-transform rotate-180" />
            </Link>
            
            <a
              href="tel:+918935904820"
              className="group border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3"
            >
              <PhoneIcon className="w-6 h-6" />
              Call Support
            </a>
          </div>

          {/* Quick Links */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Popular Pages</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "Book School Van", path: "/students" },
                { name: "Live Tracking", path: "/live-tracking" },
                { name: "Safety Features", path: "/safety-features" },
                { name: "Contact Us", path: "/contact" }
              ].map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="bg-gray-50 hover:bg-blue-50 text-gray-700 hover:text-blue-600 px-4 py-3 rounded-lg font-medium text-sm transition-colors duration-300 border hover:border-blue-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Info */}
          <div className="mt-12 text-center text-gray-500 text-sm">
            <p>Need immediate assistance? Call us at +91-8935904820</p>
            <p className="mt-2">© 2025 Back2Nest - Safe Journey Home</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
