import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Download, Mail, MapPin, Clock, MessageSquare, Smartphone } from 'lucide-react';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Contact Back2Nest Patna | Download App or Email Us',
  description: 'Contact Back2Nest for pure milk delivery in Patna. Download our app from Google Play, email help@back2nest.in or visit us at Jagat Narayan Road, Kadam Kuan, Patna 800003.',
  keywords: 'contact back2nest, milk delivery patna contact, back2nest app, milk delivery customer care patna, back2nest address patna',
  openGraph: {
    title: 'Contact Back2Nest Patna | Milk Delivery Service',
    description: 'Get in touch with Back2Nest for fresh milk delivery in Patna. Download our app or email us.',
    url: 'https://www.back2nest.in/contact',
    type: 'website',
    images: [
      {
        url: 'https://www.back2nest.in/milk.jpeg',
        width: 1200,
        height: 630,
        alt: 'Contact Back2Nest - Fresh Milk Delivery in Patna',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Back2Nest Patna',
    description: 'Get in touch for fresh milk delivery in Patna.',
    images: ['https://www.back2nest.in/milk.jpeg'],
  },
  alternates: {
    canonical: 'https://www.back2nest.in/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50 border-b-2 border-blue-100">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </nav>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">
            We're here to help! Reach out to us for any questions or concerns.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                    <Download className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Download Our App</h3>
                    <a href="https://play.google.com/store/apps/details?id=com.app.back2nest" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 text-lg">
                      Get on Google Play
                    </a>
                    <p className="text-sm text-gray-600 mt-1">Easy ordering & subscription management</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:help@back2nest.in" className="text-blue-600 hover:text-blue-700 text-lg">
                      help@back2nest.in
                    </a>
                    <p className="text-sm text-gray-600 mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-700 text-lg">
                      Jagat Narayan Road, Kadam Kuan<br />
                      Patna 800003, Bihar<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-full flex-shrink-0">
                    <Clock className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Operating Hours</h3>
                    <p className="text-gray-700">Monday - Sunday</p>
                    <p className="text-lg font-medium text-gray-900">5:00 AM - 4:00 PM</p>
                    <p className="text-sm text-gray-600 mt-1">Delivery: 5:00 AM - 9:00 AM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-lg p-8 text-white">
              <Smartphone className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Quick & Easy Ordering</h3>
              <p className="text-blue-100 mb-6">
                For instant ordering and subscription management, download our mobile app. Available 24/7 for your convenience.
              </p>
              <a
                href="https://play.google.com/store/apps/details?id=com.app.back2nest"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:shadow-xl transition"
              >
                Download App
              </a>
            </div>
          </div>

          {/* Map / Additional Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Area</h2>
              <div className="bg-blue-50 rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">We Deliver Across Patna</h3>
                <p className="text-gray-700 leading-relaxed">
                  Back2Nest provides dairy delivery services across all areas of Patna city. If you're unsure whether we deliver to your location, please contact us to verify.
                </p>
              </div>

              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-1">New Customer?</h4>
                  <p className="text-gray-600">
                    Download our app from Google Play Store to set up your delivery schedule and receive fresh dairy products starting tomorrow morning!
                  </p>
                </div>

                <div className="border-l-4 border-green-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Existing Customer?</h4>
                  <p className="text-gray-600">
                    Use the app to modify your subscription, update delivery address, or pause/resume your service instantly.
                  </p>
                </div>

                <div className="border-l-4 border-amber-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Have Feedback?</h4>
                  <p className="text-gray-600">
                    We value your opinions! Email us at help@back2nest.in to share your experience or suggestions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl shadow-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Download Our App</h3>
              <p className="text-green-100 mb-6">
                Get the Back2Nest mobile app for easy ordering, subscription management, and exclusive app-only offers!
              </p>
              <a
                href="https://play.google.com/store/apps/details?id=com.app.back2nest"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-green-600 px-8 py-3 rounded-full font-bold hover:shadow-xl transition"
              >
                Download on Google Play
              </a>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">What time will my milk be delivered?</h3>
              <p className="text-gray-600">
                We deliver fresh milk between 5:00 AM and 9:00 AM every morning, 7 days a week.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">How do I place an order?</h3>
              <p className="text-gray-600">
                Download the Back2Nest app from Google Play Store, create an account, and place your order in minutes. You can also use our website's quick order form.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Do you deliver on holidays?</h3>
              <p className="text-gray-600">
                Yes! We deliver 365 days a year, including all public holidays.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">What if I'm not satisfied with the product?</h3>
              <p className="text-gray-600">
                Contact us within 2 hours of delivery, and we'll provide a replacement or refund after verification.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
