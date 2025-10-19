'use client';

import { Phone } from 'lucide-react';
import { useState } from 'react';

export default function OrderForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: ''
  });

  const handleSubmit = () => {
    if (formData.name && formData.phone && formData.address) {
      alert('Thank you for your interest! Our team will contact you soon to confirm your milk delivery subscription.');
      setFormData({ name: '', phone: '', address: '' });
    } else {
      alert('Please fill in all fields to start your subscription');
    }
  };

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
            Begin Your Fresh Milk Subscription
          </h2>
          <p className="text-xl text-blue-100">
            Join 127+ happy families enjoying pure, farm-fresh milk daily in Patna
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl">
          <div className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-lg">Full Name *</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition text-lg"
                placeholder="Enter your full name"
                aria-label="Full Name"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-lg">Phone Number *</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition text-lg"
                placeholder="Enter your 10-digit mobile number"
                aria-label="Phone Number"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-lg">Delivery Address in Patna *</label>
              <textarea
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none transition text-lg"
                rows={4}
                placeholder="Enter your complete delivery address (House/Flat no., Area, Landmark)"
                aria-label="Delivery Address"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-5 rounded-xl font-bold text-xl hover:shadow-2xl transition transform hover:scale-105"
              aria-label="Submit subscription request"
            >
              Submit Subscription Request
            </button>

            <div className="text-center pt-4 border-t-2 border-gray-100">
              <p className="text-gray-600 mb-2">Prefer to call? We're here to help!</p>
              <a href="tel:+918935904820" className="text-blue-600 font-bold text-xl hover:text-blue-700" aria-label="Call Back2Nest at 8935904820">
                <Phone className="w-5 h-5 inline mr-2" />
                +91 89359 04820
              </a>
              <p className="text-sm text-gray-500 mt-2">Available: 5:00 AM - 4:00 PM Daily</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
