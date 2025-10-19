import { Milk, Phone, Mail, MapPin, Facebook, Twitter, Shield } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
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
                href="https://x.com/B2N_Back2Nest"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 p-2 rounded-full hover:bg-blue-600 transition"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
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
                <Link href="/products" className="text-gray-300 hover:text-blue-400 transition text-sm">
                  Our Products
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
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+918935904820"
                  className="flex items-start space-x-3 text-gray-300 hover:text-blue-400 transition"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-white">Phone</p>
                    <p className="text-sm">+91 89359 04820</p>
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
                    <p className="text-sm font-semibold text-white">Email</p>
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

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
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
