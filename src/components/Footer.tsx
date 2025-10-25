import { Milk, Smartphone, Mail, MapPin, Facebook, Twitter, Shield, Instagram, Download, Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center space-x-3 mb-4 hover:opacity-80 transition">
              <div className="bg-white p-2 rounded-full">
                <Image 
                  src="/logo.png" 
                  alt="Back2Nest Logo" 
                  width={40} 
                  height={40}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="text-xl font-bold text-white">
                  Back<span className="text-blue-400">2</span>Nest
                </span>
                <p className="text-xs text-blue-200">Farm Fresh Delivery</p>
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Delivering pure, farm-fresh dairy products to your doorstep every morning across Patna.
            </p>
            <div className="flex items-center space-x-3 mt-4">
              <a
                href="https://www.facebook.com/B2Nback2nest/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/back2nest"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 p-2 rounded-full hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 transition"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/B2N_Back2Nest"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 p-2 rounded-full hover:bg-blue-600 transition"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://jsdl.in/DT-47YPH6XJ5EY"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 p-2 rounded-full hover:bg-orange-600 transition"
                aria-label="JustDial"
              >
                <Shield className="w-4 h-4" />
              </a>
              <a
                href="https://share.google/hHARPkGS7tlQiAXF1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-500 p-2 rounded-full hover:bg-red-600 transition"
                aria-label="Google Business Profile"
                title="View our Google Business Profile"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-blue-400 transition text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-gray-300 hover:text-blue-400 transition text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/our-story" className="text-gray-300 hover:text-blue-400 transition text-sm">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-blue-400 transition text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-blue-400 transition text-sm">
                  Our Products
                </Link>
              </li>
              <li>
                <Link href="/offers" className="relative group text-gray-300 hover:text-blue-400 transition text-sm inline-flex items-center">
                  <span className="relative">
                    Offers
                    <span className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 blur-sm opacity-0 group-hover:opacity-75 transition-opacity animate-pulse"></span>
                  </span>
                  <span className="ml-1 text-xs bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-1.5 py-0.5 rounded-full font-semibold">NEW</span>
                </Link>
              </li>
              <li>
                <Link href="/jobs" className="text-gray-300 hover:text-blue-400 transition text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-blue-400 transition text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-gray-300 hover:text-blue-400 transition text-sm">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/products/milk" className="text-gray-300 hover:text-blue-400 transition text-sm">
                  How It Works
                </Link>
              </li>
              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=com.app.back2nest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition text-sm"
                >
                  Download App
                </a>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Service Areas</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/milk-delivery-patna" className="text-gray-300 hover:text-blue-400 transition text-sm">
                   Patna
                </Link>
              </li>
              <li>
                <Link href="/milk-delivery-patna/boring-road" className="text-gray-300 hover:text-blue-400 transition text-sm">
                  Boring Road
                </Link>
              </li>
              <li>
                <Link href="/milk-delivery-patna/kankarbagh" className="text-gray-300 hover:text-blue-400 transition text-sm">
                  Kankarbagh
                </Link>
              </li>
              <li>
                <Link href="/milk-delivery-patna/patliputra" className="text-gray-300 hover:text-blue-400 transition text-sm">
                  Patliputra
                </Link>
              </li>
              
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/terms-conditions" className="text-gray-300 hover:text-blue-400 transition text-sm">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-blue-400 transition text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="text-gray-300 hover:text-blue-400 transition text-sm">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Get The App</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=com.app.back2nest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 text-gray-300 hover:text-blue-400 transition"
                >
                  <Download className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-white">Order on App</p>
                    <p className="text-sm">Download from Play Store</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://search.google.com/local/writereview?placeid=ChIJ3cz7BzVZ7TkRbNBpDqFq3qw"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="flex items-start space-x-3 text-gray-300 hover:text-yellow-400 transition group"
                  aria-label="Write a Google review for Back2Nest"
                >
                  <Star className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:fill-yellow-400 group-hover:text-yellow-400" />
                  <div>
                    <p className="text-sm font-semibold text-white">Leave a Review</p>
                    <p className="text-sm">Share your experience on Google</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:help@back2nest.in"
                  className="flex items-start space-x-3 text-gray-300 hover:text-blue-400 transition"
                >
                  <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-white">Email Support</p>
                    <p className="text-sm">help@back2nest.in</p>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-white">Address</p>
                    <p className="text-sm">Jagat Narayan Road, Kadam Kuan</p>
                    <p className="text-sm">Patna 800003, Bihar</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Google Map Section */}
        <div className="mt-8 border-t border-gray-700 pt-8">
          <div className="text-center mb-4">
            <h3 className="text-lg font-bold text-white mb-2">Visit Us</h3>
            <p className="text-gray-400 text-sm">Jagat Narayan Road, Kadam Kuan, Patna 800003, Bihar</p>
          </div>
          <div className="w-full h-64 rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.925961157471!2d85.1540066!3d25.607376399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed593507fbccdd%3A0xacde6aa10e69d06c!2sBack2Nest!5e0!3m2!1sen!2sin!4v1761430567662!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Back2Nest (B2N) - Farm Fresh Dairy Products, Jagat Narayan Road, Kadam Kuan, Patna"
            ></iframe>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 Back2Nest (B2N). All rights reserved. | Serving Patna with Pure Farm-Fresh Products
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Shield className="w-4 h-4 text-green-400" />
              <span>100% Pure & Natural</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
