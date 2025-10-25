'use client';

import { Download, Smartphone, Package, Star, Shield } from 'lucide-react';
import { useState } from 'react';

export default function OrderForm() {
  return (
    <section id="order" className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Start Today
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Download Our App to Order
          </h2>
          <p className="text-xl text-blue-100">
            Join 127+ happy families enjoying pure, farm-fresh milk daily in Patna
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl">
          <div className="text-center mb-8">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
              <Smartphone className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Order Fresh Milk on Our App</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Download the Back2Nest app for hassle-free ordering, subscription management, and exclusive app-only offers!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <Shield className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Easy Ordering</h4>
              <p className="text-sm text-gray-600">Order with just a few taps</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <Package className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Track Deliveries</h4>
              <p className="text-sm text-gray-600">Real-time delivery updates</p>
            </div>
            <div className="text-center p-6 bg-amber-50 rounded-xl">
              <Star className="w-8 h-8 text-amber-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Exclusive Offers</h4>
              <p className="text-sm text-gray-600">App-only discounts & deals</p>
            </div>
          </div>

          <a
            href="https://play.google.com/store/apps/details?id=com.app.back2nest"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-5 rounded-xl font-bold text-xl hover:shadow-2xl transition transform hover:scale-105 flex items-center justify-center gap-3"
            aria-label="Download Back2Nest app from Google Play Store"
          >
            <Download className="w-6 h-6" />
            Download from Google Play
          </a>

          <div className="text-center pt-6 border-t-2 border-gray-100 mt-8">
            <p className="text-gray-600 mb-2">Need help? We're here for you!</p>
            <a href="mailto:help@back2nest.in" className="text-blue-600 font-semibold text-lg hover:text-blue-700 hover:underline" aria-label="Email Back2Nest support">
              help@back2nest.in
            </a>
            <p className="text-sm text-gray-500 mt-2">Support available: 5:00 AM - 4:00 PM Daily</p>
          </div>
        </div>
      </div>
    </section>
  );
}
