import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, RefreshCcw } from 'lucide-react';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Refund Policy | Back2Nest',
  description: 'Read our refund and return policy for Back2Nest dairy delivery services in Patna.',
  alternates: {
    canonical: 'https://www.back2nest.in/refund-policy',
  },
};

export default function RefundPolicyPage() {
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
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-100 p-3 rounded-full">
              <RefreshCcw className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Refund & Return Policy</h1>
              <p className="text-gray-600 mt-1">Last updated: January 2025</p>
            </div>
          </div>

          <div className="prose prose-blue max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
              <p className="text-gray-700 leading-relaxed">
                At Back2Nest, we are committed to providing you with the highest quality dairy products. This Refund & Return Policy outlines the terms and conditions for refunds, returns, and replacements of products purchased through our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Quality Guarantee</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We guarantee that all our products are:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>100% pure and free from adulteration</li>
                <li>Fresh and delivered within quality standards</li>
                <li>Handled and stored under hygienic conditions</li>
                <li>Packaged in food-grade materials</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Refund Eligibility</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You are eligible for a refund or replacement in the following situations:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Product Quality Issues:</strong> If you receive spoiled, curdled, or substandard products</li>
                <li><strong>Incorrect Products:</strong> If you receive products different from what you ordered</li>
                <li><strong>Damaged Packaging:</strong> If the product packaging is damaged or leaking</li>
                <li><strong>Missed Delivery:</strong> If your order was not delivered on the scheduled date</li>
                <li><strong>Short Quantity:</strong> If you receive less quantity than what you paid for</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Reporting Issues</h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 Time Frame</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                To be eligible for a refund or replacement, you must report the issue:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li><strong>Within 2 hours of delivery</strong> for quality-related issues</li>
                <li><strong>On the day of expected delivery</strong> for missed deliveries</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">3.2 How to Report</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Contact us immediately through any of the following methods:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Phone: <a href="tel:+918935904820" className="text-blue-600 hover:underline">+91 89359 04820</a></li>
                <li>Email: <a href="mailto:help@back2nest.in" className="text-blue-600 hover:underline">help@back2nest.in</a></li>
                <li>Mobile App: Use the "Report Issue" feature</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">3.3 Required Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When reporting an issue, please provide:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Order ID or invoice number</li>
                <li>Clear photographs of the product and packaging</li>
                <li>Detailed description of the issue</li>
                <li>Date and time of delivery</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Refund Process</h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1 Verification</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Once you report an issue:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Our team will review your complaint within 24 hours</li>
                <li>We may request additional photographs or information</li>
                <li>In some cases, we may send a representative for verification</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">4.2 Resolution Options</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                After verification, we will offer one of the following solutions:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li><strong>Immediate Replacement:</strong> Fresh product delivered on the next delivery cycle</li>
                <li><strong>Full Refund:</strong> Complete refund of the product price</li>
                <li><strong>Account Credit:</strong> Credit applied to your account for future purchases</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">4.3 Refund Timeline</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Cash Payments:</strong> Refund adjusted in next bill or provided in cash within 3 days</li>
                <li><strong>Online Payments:</strong> Refund processed within 5-7 business days to original payment method</li>
                <li><strong>UPI/Digital Wallets:</strong> Refund processed within 2-3 business days</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Order Cancellation Policy</h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">5.1 One-Time Orders</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li><strong>Before 8:00 PM (previous day):</strong> Full refund, no charges</li>
                <li><strong>After 8:00 PM:</strong> Cancellation may not be possible; product will be delivered</li>
                <li><strong>After Delivery:</strong> No cancellation allowed; refund only for quality issues</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">5.2 Subscription Orders</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Temporary Pause:</strong> Can be paused with 24 hours notice, no charges</li>
                <li><strong>Cancellation:</strong> Requires 48 hours notice; unused balance will be refunded</li>
                <li><strong>Prepaid Subscriptions:</strong> Pro-rated refund for remaining days</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Non-Refundable Situations</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Refunds will NOT be provided in the following cases:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Issues reported after the 2-hour window for quality complaints</li>
                <li>Product issues arising from improper storage by customer</li>
                <li>Customer unavailability during delivery (product left at doorstep as instructed)</li>
                <li>Incorrect delivery address provided by customer</li>
                <li>Change of mind after product has been delivered</li>
                <li>Product already consumed or partially used</li>
                <li>Late cancellation requests (after production has started)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Bottle/Container Return Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For customers using our reusable glass bottles:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Empty bottles must be returned for the next delivery</li>
                <li>Deposit on bottles is refundable upon subscription cancellation</li>
                <li>Damaged or lost bottles will be charged at actual cost</li>
                <li>Bottle deposit is non-refundable if not returned within 30 days</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Force Majeure</h2>
              <p className="text-gray-700 leading-relaxed">
                In cases of natural disasters, strikes, pandemics, government restrictions, or other force majeure events that prevent us from fulfilling orders:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-4">
                <li>We will notify customers as soon as possible</li>
                <li>Subscription payments will be paused automatically</li>
                <li>Full refund provided for unfulfilled orders</li>
                <li>No liability for delays or non-performance beyond our control</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Customer Responsibilities</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To ensure smooth refund processing:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Inspect products immediately upon delivery</li>
                <li>Store products as per storage instructions</li>
                <li>Report issues promptly within specified timeframes</li>
                <li>Provide accurate information and evidence</li>
                <li>Return reusable containers in good condition</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact for Refunds</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For any refund-related queries or to initiate a refund request:
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Back2Nest (B2N)</strong>
                </p>
                <p className="text-gray-700 mb-2">Jagat Narayan Road, Kadam Kuan, Patna 800003</p>
                <p className="text-gray-700 mb-2">Phone: <a href="tel:+918935904820" className="text-blue-600 hover:underline">+91 89359 04820</a></p>
                <p className="text-gray-700 mb-2">Email: <a href="mailto:help@back2nest.in" className="text-blue-600 hover:underline">help@back2nest.in</a></p>
                <p className="text-gray-700">Hours: 5:00 AM - 4:00 PM (Daily)</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Policy Updates</h2>
              <p className="text-gray-700 leading-relaxed">
                Back2Nest reserves the right to modify this Refund & Return Policy at any time. Changes will be effective immediately upon posting on our website and mobile application. Continued use of our services after changes constitutes acceptance of the updated policy.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-center text-gray-600 mb-6">
              This Refund & Return Policy is effective as of January 2025
            </p>
            <div className="flex justify-center space-x-6">
              <Link href="/" className="text-blue-600 hover:text-blue-700 font-semibold">Back to Home</Link>
              <Link href="/terms-conditions" className="text-blue-600 hover:text-blue-700 font-semibold">Terms & Conditions</Link>
              <Link href="/privacy-policy" className="text-blue-600 hover:text-blue-700 font-semibold">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
