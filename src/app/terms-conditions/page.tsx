import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Scale } from 'lucide-react';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms and Conditions | Back2Nest',
  description: 'Read our terms and conditions for Back2Nest dairy delivery services in Patna.',
  alternates: {
    canonical: 'https://www.back2nest.in/terms-conditions',
  },
};

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Scale className="w-8 h-8 text-amber-600" />
            <span className="text-2xl font-bold text-gray-900">Back<span className="text-amber-600">2</span>Nest</span>
          </Link>
          <Link href="/" className="flex items-center space-x-2 text-amber-600 hover:text-amber-700 transition">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
        </nav>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex items-center space-x-3 mb-6">
            <Scale className="w-10 h-10 text-amber-600" />
            <h1 className="text-4xl font-bold text-gray-900">Terms and Conditions</h1>
          </div>
          
          <p className="text-gray-600 mb-8">Last Updated: October 15, 2025</p>

          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="mb-4">
                Welcome to Back2Nest ("we," "our," or "us"). These Terms and Conditions ("Terms") govern your use of our milk delivery services, website, and mobile application (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms.
              </p>
              <div className="bg-amber-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Business Details:</h3>
                <ul className="space-y-1 text-sm">
                  <li><strong>Company Name:</strong> Back2Nest (B2N)</li>
                  <li><strong>Address:</strong> Jagat Narayan Road, Kadam Kuan, Patna, Bihar 800003, India</li>
                  <li><strong>Email:</strong> help@back2nest.in</li>
                  <li><strong>Phone:</strong> +91 89359 04820</li>
                  <li><strong>Operating Hours:</strong> 5:00 AM to 4:00 PM (Monday to Sunday)</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Acceptance of Terms</h2>
              <p>
                By registering for, accessing, or using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, please do not use our Services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Eligibility</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>You must be at least 18 years of age to use our Services</li>
                <li>You must provide accurate and complete information during registration</li>
                <li>You must be a resident of Patna, Bihar, or our designated service areas</li>
                <li>You are responsible for maintaining the confidentiality of your account credentials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Services Description</h2>
              <p className="mb-4">
                Back2Nest provides fresh milk delivery services directly from farms to customers' doorsteps in Patna. Our services include:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Daily milk delivery by 5:00 AM</li>
                <li>Subscription-based delivery plans</li>
                <li>One-time orders (subject to availability)</li>
                <li>Customer support through phone, email, and mobile app</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Product Quality and Standards</h2>
              <p className="mb-4">We guarantee:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>100% pure and natural milk with no adulteration</li>
                <li>No artificial colors, preservatives, or harmful chemicals</li>
                <li>Direct farm-to-door delivery maintaining cold chain standards</li>
                <li>Compliance with Food Safety and Standards Authority of India (FSSAI) regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Orders and Subscriptions</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">6.1 Placing Orders</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Orders can be placed via phone, website, or mobile application</li>
                <li>Minimum order quantity may apply</li>
                <li>Orders must be placed before 8:00 PM for next-day delivery</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">6.2 Subscription Plans</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Daily, weekly, and monthly subscription plans are available</li>
                <li>Subscription modifications must be made at least 24 hours in advance</li>
                <li>Temporary holds on subscriptions require 24-hour notice</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">6.3 Order Modifications and Cancellations</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Orders can be modified or cancelled up to 8:00 PM the previous day</li>
                <li>Same-day cancellations may not be eligible for refunds</li>
                <li>Subscription cancellations require 48-hour notice</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Delivery Terms</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">7.1 Delivery Schedule</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Standard delivery time: 5:00 AM to 7:00 AM</li>
                <li>Deliveries are made daily, including weekends and public holidays</li>
                <li>Delivery times may vary due to weather, traffic, or unforeseen circumstances</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">7.2 Delivery Address</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Customers must provide accurate and complete delivery addresses</li>
                <li>Address changes require 24-hour notice</li>
                <li>We currently serve only within Patna city limits</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">7.3 Failed Deliveries</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>If delivery cannot be completed due to incorrect address, inaccessibility, or customer unavailability, no refund will be provided</li>
                <li>Customers will be charged for products left at the doorstep as per instructions</li>
                <li>We are not responsible for products after they are delivered to the specified location</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Pricing and Payment</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">8.1 Pricing</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>All prices are in Indian Rupees (INR)</li>
                <li>Prices are subject to change with prior notice</li>
                <li>Applicable taxes will be added to the final bill</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">8.2 Payment Methods</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Cash on Delivery (COD)</li>
                <li>Online payment via UPI, Credit/Debit Cards, Net Banking</li>
                <li>Digital wallets (Paytm, PhonePe, Google Pay, etc.)</li>
                <li>Monthly billing for subscription customers</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">8.3 Payment Terms</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Payment is due at the time of delivery for COD orders</li>
                <li>Subscription payments are due on the 1st of each month</li>
                <li>Failed payments may result in service suspension</li>
                <li>Outstanding dues must be cleared before service resumption</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Refund and Return Policy</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">9.1 Quality Issues</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>If you receive spoiled or substandard milk, contact us within 2 hours of delivery</li>
                <li>Provide photographic evidence of the quality issue</li>
                <li>Refunds or replacements will be processed within 48 hours</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">9.2 Cancellations and Refunds</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Cancellations made before 8:00 PM the previous day are eligible for full refund</li>
                <li>Same-day cancellations are not eligible for refunds</li>
                <li>Refunds will be processed within 7-10 business days</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">9.3 Non-Refundable Situations</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Products delivered as per order specifications</li>
                <li>Customer unavailability during delivery</li>
                <li>Incorrect address provided by customer</li>
                <li>Late cancellation requests</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. User Responsibilities</h2>
              <p className="mb-4">As a user of our Services, you agree to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Provide accurate contact and delivery information</li>
                <li>Ensure someone is available to receive deliveries</li>
                <li>Make timely payments for services rendered</li>
                <li>Treat delivery personnel with respect and courtesy</li>
                <li>Not misuse or abuse the Services</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Report any issues or concerns promptly</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Limitation of Liability</h2>
              <p className="mb-4">
                To the maximum extent permitted by Indian law:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Back2Nest shall not be liable for any indirect, incidental, special, or consequential damages</li>
                <li>Our total liability shall not exceed the amount paid by you for the specific product or service</li>
                <li>We are not responsible for delays caused by force majeure events (natural disasters, strikes, government actions, etc.)</li>
                <li>We are not liable for any health issues arising from product consumption beyond our control</li>
                <li>We are not responsible for products after delivery to the specified location</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Intellectual Property Rights</h2>
              <p className="mb-4">
                All content, trademarks, logos, and intellectual property associated with Back2Nest are owned by us or our licensors. You may not:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Copy, modify, or distribute our content without written permission</li>
                <li>Use our trademarks or branding without authorization</li>
                <li>Reverse engineer or attempt to extract source code from our mobile application</li>
                <li>Remove or alter any copyright, trademark, or proprietary notices</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Privacy and Data Protection</h2>
              <p className="mb-4">
                Your privacy is important to us. Our collection, use, and disclosure of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference. By using our Services, you consent to our Privacy Policy.
              </p>
              <p>
                We comply with the Information Technology Act, 2000, and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Account Termination</h2>
              <p className="mb-4">We reserve the right to suspend or terminate your account if:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>You violate these Terms and Conditions</li>
                <li>You engage in fraudulent activities</li>
                <li>You have outstanding payment dues</li>
                <li>You misuse or abuse the Services</li>
                <li>We discontinue our Services in your area</li>
              </ul>
              <p className="mt-4">
                You may terminate your account at any time by contacting customer support. Termination does not relieve you of any payment obligations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Dispute Resolution</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">15.1 Customer Support</h3>
              <p className="mb-4">
                For any issues or disputes, please contact our customer support at help@back2nest.in or +91 89359 04820. We will make reasonable efforts to resolve complaints within 7 business days.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">15.2 Governing Law</h3>
              <p className="mb-4">
                These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">15.3 Jurisdiction</h3>
              <p>
                Any disputes arising out of or relating to these Terms or the Services shall be subject to the exclusive jurisdiction of the courts in Patna, Bihar, India.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">16. Force Majeure</h2>
              <p>
                Back2Nest shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, riots, strikes, government actions, pandemics, or telecommunications failures.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">17. Modifications to Terms</h2>
              <p className="mb-4">
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on our website and mobile application. Your continued use of the Services after changes are posted constitutes your acceptance of the modified Terms.
              </p>
              <p>
                We will notify users of material changes via email or in-app notification.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">18. Severability</h2>
              <p>
                If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect. The invalid provision shall be modified to the minimum extent necessary to make it valid and enforceable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">19. Entire Agreement</h2>
              <p>
                These Terms, together with our Privacy Policy, constitute the entire agreement between you and Back2Nest regarding the use of our Services and supersede all prior agreements and understandings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">20. Contact Information</h2>
              <p className="mb-4">
                For questions, concerns, or complaints regarding these Terms, please contact us:
              </p>
              <div className="bg-amber-50 p-6 rounded-lg">
                <p className="font-semibold text-gray-900 mb-2">Back2Nest (B2N)</p>
                <p>Jagat Narayan Road, Kadam Kuan</p>
                <p>Patna, Bihar 800003, India</p>
                <p className="mt-3">Email: <a href="mailto:help@back2nest.in" className="text-amber-600 hover:text-amber-700">help@back2nest.in</a></p>
                <p>Phone: <a href="tel:+918935904820" className="text-amber-600 hover:text-amber-700">+91 89359 04820</a></p>
                <p>Hours: 5:00 AM to 4:00 PM (Daily)</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">21. Acknowledgment</h2>
              <p>
                By using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. You also acknowledge that you have read and understood our Privacy Policy.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-center text-gray-600">
              These Terms and Conditions are effective as of January 15, 2025
            </p>
            <div className="flex justify-center space-x-6 mt-6">
              <Link href="/" className="text-amber-600 hover:text-amber-700 font-semibold">Back to Home</Link>
              <Link href="/privacy-policy" className="text-amber-600 hover:text-amber-700 font-semibold">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}