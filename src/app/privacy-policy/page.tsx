import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Shield, Lock, Eye, UserCheck } from 'lucide-react';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | Back2Nest',
  description: 'Read our privacy policy for Back2Nest dairy delivery services in Patna.',
  alternates: {
    canonical: 'https://www.back2nest.in/privacy-policy',
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-amber-600" />
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
            <Shield className="w-10 h-10 text-amber-600" />
            <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
          </div>
          
          <p className="text-gray-600 mb-8">Last Updated: January 15, 2025</p>

          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="mb-4">
                Back2Nest ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our milk delivery services, website, and mobile application (collectively, the "Services").
              </p>
              <p className="mb-4">
                We comply with the Information Technology Act, 2000, the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and applicable data protection laws in India.
              </p>
              <div className="bg-amber-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Business Details:</h3>
                <ul className="space-y-1 text-sm">
                  <li><strong>Company Name:</strong> Back2Nest (B2N)</li>
                  <li><strong>Address:</strong> Jagat Narayan Road, Kadam Kuan, Patna, Bihar 800003, India</li>
                  <li><strong>Email:</strong> help@back2nest.in</li>
                  <li><strong>Phone:</strong> +91 89359 04820</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">2.1 Personal Information</h3>
              <p className="mb-4">We collect personal information that you voluntarily provide to us when you:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Register for an account</li>
                <li>Place an order or subscribe to our services</li>
                <li>Contact customer support</li>
                <li>Participate in surveys or promotions</li>
              </ul>
              <p className="mb-4">This information may include:</p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Contact Information:</strong> Name, email address, phone number, delivery address</li>
                <li><strong>Account Information:</strong> Username, password (encrypted), preferences</li>
                <li><strong>Payment Information:</strong> Payment method details, transaction history</li>
                <li><strong>Order Information:</strong> Order history, delivery preferences, subscription details</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2.2 Automatically Collected Information</h3>
              <p className="mb-4">When you use our Services, we automatically collect:</p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Device Information:</strong> Device type, operating system, unique device identifiers</li>
                <li><strong>Usage Data:</strong> Pages visited, features used, time spent on the app/website</li>
                <li><strong>Location Data:</strong> Approximate location based on IP address (with your consent for precise location)</li>
                <li><strong>Log Data:</strong> IP address, browser type, access times, referring URLs</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2.3 Information from Third Parties</h3>
              <p className="mb-4">We may receive information from:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Payment processors (transaction confirmations)</li>
                <li>Social media platforms (if you choose to link your account)</li>
                <li>Analytics providers</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">We use your information for the following purposes:</p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">3.1 Service Delivery</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Process and fulfill your orders</li>
                <li>Manage your account and subscriptions</li>
                <li>Facilitate delivery to your specified address</li>
                <li>Send order confirmations and delivery updates</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">3.2 Customer Support</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Respond to your inquiries and requests</li>
                <li>Resolve technical issues and complaints</li>
                <li>Provide customer service assistance</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">3.3 Communication</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Send transactional notifications (order updates, payment confirmations)</li>
                <li>Send promotional offers and marketing communications (with your consent)</li>
                <li>Notify you of service changes or updates</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">3.4 Business Operations</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Analyze usage patterns and improve our Services</li>
                <li>Conduct research and analytics</li>
                <li>Prevent fraud and ensure security</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">3.5 Personalization</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Customize your experience</li>
                <li>Recommend products based on your preferences</li>
                <li>Remember your delivery preferences</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Legal Basis for Processing (India)</h2>
              <p className="mb-4">We process your personal information based on:</p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Consent:</strong> You have given explicit consent for specific purposes</li>
                <li><strong>Contract Performance:</strong> Processing is necessary to fulfill our service agreement with you</li>
                <li><strong>Legal Obligation:</strong> We must comply with Indian laws and regulations</li>
                <li><strong>Legitimate Interests:</strong> Processing is necessary for our legitimate business interests (fraud prevention, service improvement)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. How We Share Your Information</h2>
              <p className="mb-4">We do not sell your personal information. We may share your information with:</p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">5.1 Service Providers</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li><strong>Delivery Personnel:</strong> Name, phone number, and delivery address for order fulfillment</li>
                <li><strong>Payment Processors:</strong> Payment information to process transactions</li>
                <li><strong>Cloud Hosting Providers:</strong> To store and manage data</li>
                <li><strong>SMS/Email Service Providers:</strong> To send notifications and updates</li>
                <li><strong>Analytics Providers:</strong> To understand usage patterns (anonymized data)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">5.2 Legal Requirements</h3>
              <p className="mb-4">We may disclose your information when required by law or to:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Comply with legal processes, court orders, or government requests</li>
                <li>Enforce our Terms and Conditions</li>
                <li>Protect our rights, property, or safety</li>
                <li>Prevent fraud or illegal activities</li>
                <li>Respond to emergencies involving personal safety</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">5.3 Business Transfers</h3>
              <p>
                In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new owner, subject to the same privacy protections.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Security</h2>
              <p className="mb-4">We implement appropriate technical and organizational measures to protect your information:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li><strong>Encryption:</strong> Sensitive data is encrypted in transit (SSL/TLS) and at rest</li>
                <li><strong>Access Controls:</strong> Limited access to personal information on a need-to-know basis</li>
                <li><strong>Secure Servers:</strong> Data stored on secure servers with firewalls and intrusion detection</li>
                <li><strong>Regular Audits:</strong> Periodic security assessments and vulnerability testing</li>
                <li><strong>Employee Training:</strong> Staff trained on data protection and confidentiality</li>
                <li><strong>Password Protection:</strong> Passwords are hashed and salted using industry-standard algorithms</li>
              </ul>
              <p className="bg-yellow-50 p-4 rounded-lg text-sm">
                <strong>Important:</strong> While we strive to protect your information, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Retention</h2>
              <p className="mb-4">We retain your personal information for as long as necessary to:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Provide our Services to you</li>
                <li>Comply with legal and regulatory requirements (tax records: 7 years)</li>
                <li>Resolve disputes and enforce agreements</li>
                <li>Maintain business records</li>
              </ul>
              <p className="mb-4">
                <strong>Active Accounts:</strong> Information retained while your account is active and for up to 3 years after account closure.
              </p>
              <p>
                <strong>Inactive Accounts:</strong> Accounts inactive for more than 2 years may be automatically deleted after notification.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Your Rights and Choices</h2>
              <p className="mb-4">Under Indian law, you have the following rights:</p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">8.1 Access and Correction</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Access your personal information we hold</li>
                <li>Update or correct inaccurate information through your account settings</li>
                <li>Request a copy of your data in a portable format</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">8.2 Deletion</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Request deletion of your personal information (subject to legal retention requirements)</li>
                <li>Close your account at any time</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">8.3 Marketing Communications</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Opt-out of promotional emails by clicking "unsubscribe"</li>
                <li>Opt-out of SMS marketing by replying "STOP"</li>
                <li>Manage notification preferences in your account settings</li>
                <li>Note: You cannot opt-out of transactional communications (order confirmations, delivery updates)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">8.4 Consent Withdrawal</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Withdraw consent for processing your data at any time</li>
                <li>Note: Withdrawal may affect your ability to use certain Services</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">8.5 Exercising Your Rights</h3>
              <p>To exercise any of these rights, contact us at <a href="mailto:help@back2nest.in" className="text-amber-600 hover:text-amber-700">help@back2nest.in</a> or call +91 89359 04820. We will respond within 30 days.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Cookies and Tracking Technologies</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">9.1 What We Use</h3>
              <p className="mb-4">We use cookies, web beacons, and similar technologies to:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Remember your preferences and settings</li>
                <li>Authenticate your account</li>
                <li>Analyze site traffic and usage patterns</li>
                <li>Deliver relevant advertisements</li>
                <li>Improve user experience</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">9.2 Types of Cookies</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li><strong>Essential Cookies:</strong> Required for basic site functionality</li>
                <li><strong>Performance Cookies:</strong> Help us understand how visitors use our Services</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences</li>
                <li><strong>Marketing Cookies:</strong> Track your activity for advertising purposes</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">9.3 Managing Cookies</h3>
              <p>You can control cookies through your browser settings. Note that disabling cookies may affect functionality.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Third-Party Services</h2>
              <p className="mb-4">Our Services may contain links to third-party websites or integrate with third-party services:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li><strong>Payment Gateways:</strong> Razorpay, Paytm, PhonePe, etc.</li>
                <li><strong>Social Media:</strong> Facebook, Twitter/X (for sharing and login)</li>
                <li><strong>Analytics:</strong> Google Analytics, Firebase Analytics</li>
                <li><strong>Maps:</strong> Google Maps (for delivery location)</li>
              </ul>
              <p className="bg-amber-50 p-4 rounded-lg">
                <strong>Note:</strong> We are not responsible for the privacy practices of third-party services. We encourage you to review their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Children's Privacy</h2>
              <p className="mb-4">
                Our Services are not intended for children under 18 years of age. We do not knowingly collect personal information from children.
              </p>
              <p>
                If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately at <a href="mailto:help@back2nest.in" className="text-amber-600 hover:text-amber-700">help@back2nest.in</a>. We will delete such information promptly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. International Data Transfers</h2>
              <p className="mb-4">
                Your information is primarily stored and processed in India. If we transfer data outside India, we ensure appropriate safeguards are in place to protect your information in accordance with Indian data protection laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Mobile Application Permissions</h2>
              <p className="mb-4">Our mobile application may request the following permissions:</p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Location:</strong> To provide accurate delivery services and show nearby offers</li>
                <li><strong>Camera:</strong> To scan QR codes for payments or upload profile pictures</li>
                <li><strong>Storage:</strong> To cache data for offline access and save order receipts</li>
                <li><strong>Notifications:</strong> To send order updates and promotional messages</li>
                <li><strong>Phone:</strong> To make calls to customer support directly from the app</li>
                <li><strong>SMS:</strong> To auto-fill OTP verification codes (optional)</li>
              </ul>
              <p className="mt-4">You can manage these permissions through your device settings at any time.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Google Play Store Compliance</h2>
              <p className="mb-4">
                Our mobile application complies with Google Play Store policies:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>We only collect data necessary for app functionality and disclosed in this policy</li>
                <li>We do not share personal data with third parties except as disclosed</li>
                <li>We implement industry-standard security measures</li>
                <li>We provide users with control over their data</li>
                <li>We maintain transparency about data practices</li>
                <li>We comply with Prominent Disclosure and Consent requirements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Data Breach Notification</h2>
              <p className="mb-4">
                In the event of a data breach that may compromise your personal information, we will:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Notify affected users within 72 hours via email or app notification</li>
                <li>Report the breach to relevant authorities as required by law</li>
                <li>Provide information about the breach and steps to protect yourself</li>
                <li>Take immediate action to contain and remediate the breach</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">16. Grievance Officer</h2>
              <p className="mb-4">
                In accordance with the Information Technology Act, 2000, and rules made thereunder, we have appointed a Grievance Officer to address concerns regarding data protection:
              </p>
              <div className="bg-amber-50 p-6 rounded-lg">
                <p className="font-semibold text-gray-900">Grievance Officer</p>
                <p className="mt-2">Back2Nest (B2N)</p>
                <p>Jagat Narayan Road, Kadam Kuan</p>
                <p>Patna, Bihar 800003, India</p>
                <p className="mt-3">Email: <a href="mailto:help@back2nest.in" className="text-amber-600 hover:text-amber-700">help@back2nest.in</a></p>
                <p>Phone: <a href="tel:+918935904820" className="text-amber-600 hover:text-amber-700">+91 89359 04820</a></p>
                <p className="mt-3 text-sm text-gray-600">Response Time: Within 30 days of receiving a complaint</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">17. Changes to This Privacy Policy</h2>
              <p className="mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or for other operational reasons.
              </p>
              <p className="mb-4">
                When we make material changes, we will:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Update the "Last Updated" date at the top of this policy</li>
                <li>Notify you via email or in-app notification</li>
                <li>Display a prominent notice on our website and app</li>
                <li>Request your consent if required by law</li>
              </ul>
              <p>
                Your continued use of our Services after changes are posted constitutes acceptance of the updated Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">18. Contact Us</h2>
              <p className="mb-4">
                If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">19. Consent</h2>
              <p>
                By using our Services, you consent to the collection, use, and disclosure of your information as described in this Privacy Policy. If you do not agree with this Privacy Policy, please do not use our Services.
              </p>
            </section>

            <section className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Summary of Key Points</h2>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <Lock className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                  <span>We collect personal information necessary to provide our services</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Shield className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                  <span>We implement strong security measures to protect your data</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Eye className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                  <span>We do not sell your personal information to third parties</span>
                </li>
                <li className="flex items-start space-x-2">
                  <UserCheck className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                  <span>You have rights to access, correct, and delete your information</span>
                </li>
              </ul>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-center text-gray-600">
              This Privacy Policy is effective as of January 15, 2025
            </p>
            <div className="flex justify-center space-x-6 mt-6">
              <Link href="/" className="text-amber-600 hover:text-amber-700 font-semibold">Back to Home</Link>
              <Link href="/terms-conditions" className="text-amber-600 hover:text-amber-700 font-semibold">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}