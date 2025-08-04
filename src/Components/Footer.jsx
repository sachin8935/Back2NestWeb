import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ShieldCheckIcon,
  StarIcon,
  ClockIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Back2Nest",
    "alternateName": "Back2Nest School Van Services",
    "description": "Safe and reliable school van services with live tracking and professional drivers",
    "url": "https://back2nest.in",
    "logo": "https://back2nest.in/images/logo.png",
    "image": "https://back2nest.in/images/back2nest-office.jpg",
    "telephone": "+91-8935904820",
    "email": "help@back2nest.in",
    "priceRange": "₹1500-₹3000",
    "paymentAccepted": ["Cash", "Credit Card", "UPI", "Net Banking"],
    "currenciesAccepted": "INR",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jagat Narayan Road kadam kuan",
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
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "School Transportation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Daily School Pickup and Drop Service",
            "description": "Safe daily transportation for students with live tracking"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Live Location Tracking",
            "description": "Real-time GPS tracking for parent peace of mind"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1250",
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      "https://facebook.com/back2nest",
      "https://twitter.com/back2nest", 
      "https://instagram.com/back2nest",
      "https://linkedin.com/company/back2nest",
      "https://youtube.com/back2nest"
    ]
  };

  // ✅ SCROLL TO TOP HELPER FUNCTION
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Structured Data for Footer */}
      <script type="application/ld+json">
        {JSON.stringify(footerStructuredData)}
      </script>

      <footer className="bg-gray-900 text-white" role="contentinfo" aria-label="Site footer">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Company Info - SEO Optimized */}
            <div className="space-y-4" itemScope itemType="https://schema.org/Organization">
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent" itemProp="name">
                  Back2Nest
                </h3>
                <p className="text-blue-200 text-sm mt-1" itemProp="slogan">Safe Journey Home</p>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed" itemProp="description">
                Bihar's most trusted school van service providing safe, reliable, and affordable transportation 
                for students with live tracking and professional drivers across Patna and surrounding areas.
              </p>
              
              {/* Trust Signals */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <ShieldCheckIcon className="w-5 h-5 text-green-400" />
                  <span className="text-sm text-green-400 font-medium">100% Safety Guaranteed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <StarIcon className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm text-gray-300">4.8/5 Rating • 1,250+ Reviews</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ClockIcon className="w-5 h-5 text-blue-400" />
                  <span className="text-sm text-gray-300">Mon-Sat: 6:00 AM - 8:00 PM</span>
                </div>
              </div>

              {/* Service Areas */}
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-white mb-2">Service Areas:</h4>
                <p className="text-xs text-gray-400">
                  Patna, Danapur, Khagaul, Fatuha, Barh, Mokama, Hajipur, Muzaffarpur
                </p>
              </div>
            </div>

            {/* ✅ FIXED: Quick Links with scroll to top */}
            <nav className="space-y-4" aria-label="Footer navigation">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <ul className="space-y-2" role="list">
                <li>
                  <Link 
                    to="/" 
                    onClick={scrollToTop}
                    className="text-gray-300 hover:text-blue-400 text-sm transition-colors duration-300"
                    title="Back2Nest Home - School Van Services"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/about" 
                    onClick={scrollToTop}
                    className="text-gray-300 hover:text-blue-400 text-sm transition-colors duration-300"
                    title="About Back2Nest - Safe School Transportation"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/Students" 
                    onClick={scrollToTop}
                    className="text-gray-300 hover:text-blue-400 text-sm transition-colors duration-300"
                    title="Book School Van Service Online"
                  >
                    Book School Van
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/Driver" 
                    onClick={scrollToTop}
                    className="text-gray-300 hover:text-blue-400 text-sm transition-colors duration-300"
                    title="Driver Jobs - Join Back2Nest Team"
                  >
                    Driver Partnership
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/safety" 
                    onClick={scrollToTop}
                    className="text-gray-300 hover:text-blue-400 text-sm transition-colors duration-300"
                    title="School Van Safety Features & Protocols"
                  >
                    Safety Features
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/live-tracking" 
                    onClick={scrollToTop}
                    className="text-gray-300 hover:text-blue-400 text-sm transition-colors duration-300"
                    title="Live GPS Tracking for School Vans"
                  >
                    Live Tracking
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/blogs" 
                    onClick={scrollToTop}
                    className="text-gray-300 hover:text-blue-400 text-sm transition-colors duration-300"
                    title="Service Blog"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </nav>

            {/* ✅ FIXED: Services & Support with scroll to top */}
            <nav className="space-y-4" aria-label="Support navigation">
              <h4 className="text-lg font-semibold text-white">Services & Support</h4>
              <ul className="space-y-2" role="list">
                <li>
                  <Link 
                    to="/careers" 
                    onClick={scrollToTop}
                    className="text-gray-300 hover:text-blue-400 text-sm transition-colors duration-300"
                    title="Careers at Back2Nest - Driver & Office Jobs"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/help" 
                    onClick={scrollToTop}
                    className="text-gray-300 hover:text-blue-400 text-sm transition-colors duration-300"
                    title="Help Center - School Van Service FAQs"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/contact" 
                    onClick={scrollToTop}
                    className="text-gray-300 hover:text-blue-400 text-sm transition-colors duration-300"
                    title="Contact Back2Nest Customer Support"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/pricing" 
                    onClick={scrollToTop}
                    className="text-gray-300 hover:text-blue-400 text-sm transition-colors duration-300"
                    title="School Van Service Pricing & Packages"
                  >
                    Pricing Plans
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Contact & App Download - SEO Optimized */}
            <div className="space-y-4" itemScope itemType="https://schema.org/ContactPoint">
              <h4 className="text-lg font-semibold text-white">Get in Touch</h4>
              
              {/* Contact Info with Schema */}
              <address className="space-y-3 not-italic">
                <div className="flex items-center space-x-3">
                  <PhoneIcon className="w-5 h-5 text-blue-400" />
                  <a 
                    href="tel:+918935904820" 
                    className="text-gray-300 hover:text-white text-sm transition-colors duration-300"
                    itemProp="telephone"
                    title="Call Back2Nest Customer Support"
                  >
                    +91 8935904820
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <EnvelopeIcon className="w-5 h-5 text-blue-400" />
                  <a 
                    href="mailto:help@back2nest.in" 
                    className="text-gray-300 hover:text-white text-sm transition-colors duration-300"
                    itemProp="email"
                    title="Email Back2Nest Support Team"
                  >
                    help@back2nest.in
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPinIcon className="w-5 h-5 text-blue-400 mt-0.5" />
                  <span 
                    className="text-gray-300 text-sm"
                    itemProp="address"
                    itemScope 
                    itemType="https://schema.org/PostalAddress"
                  >
                    <span itemProp="streetAddress">Jagat Narayan Road kadam kuan</span><br />
                    <span itemProp="addressLocality">Patna</span>, <span itemProp="addressRegion">Bihar</span> <span itemProp="postalCode">800003</span>
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <GlobeAltIcon className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300 text-sm">Available in 20+ Locations</span>
                </div>
              </address>

              {/* ✅ FIXED: App Download with proper Google Play badge */}
              <div className="mt-6">
                <h5 className="text-sm font-semibold text-white mb-3">Download Our App:</h5>
                <a 
                  href="https://play.google.com/store/apps/details?id=com.back2nest.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block hover:opacity-80 transition-opacity duration-300"
                  title="Download Back2Nest App from Google Play Store"
                  aria-label="Download Back2Nest mobile application"
                >
                  <div className="flex items-center space-x-3 bg-black hover:bg-gray-800 transition-colors duration-300 rounded-lg p-3">
                    {/* ✅ FIXED: Proper Google Play Store icon */}
                    <div className="w-8 h-8 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 leading-none">GET IT ON</p>
                      <p className="text-sm font-semibold text-white leading-none mt-1">Google Play</p>
                    </div>
                  </div>
                </a>
                
                {/* App Features */}
                <div className="mt-3">
                  <p className="text-xs text-gray-400 mb-1">App Features:</p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>• Real-time van tracking</li>
                    <li>• Instant notifications</li>
                    <li>• Emergency alerts</li>
                    <li>• Route optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Links - SEO Optimized */}
          <div className="border-t border-gray-700 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6">
                <span className="text-gray-300 text-sm">Follow us for updates:</span>
                <nav className="flex space-x-4" aria-label="Social media navigation">
                  <a 
                    href="https://facebook.com/back2nest" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                    title="Follow Back2Nest on Facebook"
                    aria-label="Back2Nest Facebook page"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://twitter.com/back2nest" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                    title="Follow Back2Nest on Twitter"
                    aria-label="Back2Nest Twitter profile"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://instagram.com/back2nest" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-pink-500 transition-colors duration-300"
                    title="Follow Back2Nest on Instagram"
                    aria-label="Back2Nest Instagram profile"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C23.975 5.367 18.608.029 12.017.029zM13.99 12.008c0 1.096-.892 1.988-1.988 1.988s-1.988-.892-1.988-1.988.892-1.988 1.988-1.988 1.988.892 1.988 1.988zM12.002 7.003c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a 
                    href="https://linkedin.com/company/back2nest" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
                    title="Connect with Back2Nest on LinkedIn"
                    aria-label="Back2Nest LinkedIn company page"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://youtube.com/back2nest" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-red-500 transition-colors duration-300"
                    title="Subscribe to Back2Nest YouTube channel"
                    aria-label="Back2Nest YouTube channel"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </nav>
              </div>
              
              {/* ✅ FIXED: Removed ISO certification badge */}
              <div className="flex items-center space-x-2">
                <StarIcon className="w-5 h-5 text-yellow-400" />
                <span className="text-sm text-gray-300">4.8/5 on Google Play</span>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ FIXED: Bottom Footer with scroll to top on legal links */}
        <div className="bg-gray-800 border-t border-gray-700">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-gray-400 text-sm">
                  &copy; {currentYear} Back2Nest. All rights reserved. | Safe Journey Home
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Serving Patna and surrounding areas with dedication
                </p>
              </div>
              
              <nav className="flex flex-wrap justify-center md:justify-end items-center space-x-6 text-sm" aria-label="Legal navigation">
                <Link 
                  to="/privacy-policy" 
                  onClick={scrollToTop}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  title="Back2Nest Privacy Policy"
                >
                  Privacy Policy
                </Link>
                <Link 
                  to="/terms-conditions" 
                  onClick={scrollToTop}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  title="Terms and Conditions of Service"
                >
                  Terms & Conditions
                </Link>
                <Link 
                  to="/refund-policy" 
                  onClick={scrollToTop}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  title="Refund and Cancellation Policy"
                >
                  Refund Policy
                </Link>
                <Link 
                  to="/sitemap" 
                  onClick={scrollToTop}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                  title="Site Map - All Pages"
                >
                  Sitemap
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
