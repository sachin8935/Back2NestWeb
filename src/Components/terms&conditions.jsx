import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../Components/SEO';

const TermsConditions = () => {
  const currentDate = new Date().toLocaleDateString();

  // Enhanced structured data for terms and conditions page
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://back2nest.in/terms-conditions#webpage",
        "url": "https://back2nest.in/terms-conditions",
        "name": "Terms and Conditions - Back2Nest School Transportation Patna Bihar",
        "description": "Complete terms and conditions for Back2Nest school transportation services including user responsibilities, service agreements, safety protocols, and legal terms for Patna, Bihar.",
        "publisher": {
          "@type": "LocalBusiness",
          "name": "Back2Nest",
          "url": "https://back2nest.in",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Jagat Narayan Road",
            "addressLocality": "Patna",
            "addressRegion": "Bihar",
            "postalCode": "800003",
            "addressCountry": "IN"
          },
          "telephone": "+91-8935904820",
          "email": "help@back2nest.in"
        },
        "dateModified": new Date().toISOString().split('T')[0]
      }
    ]
  };

  // Enhanced breadcrumb structured data
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://back2nest.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Terms & Conditions",
        "item": "https://back2nest.in/terms-conditions"
      }
    ]
  };

  // Enhanced additional meta tags
  const additionalMeta = {
    'geo.region': 'IN-BR',
    'geo.placename': 'Patna, Bihar, India',
    'geo.position': '25.617001;85.157219',
    'ICBM': '25.617001, 85.157219',
    'distribution': 'global',
    'rating': 'general',
    'HandheldFriendly': 'True',
    'MobileOptimized': '320',
    'application-name': 'Back2Nest Terms & Conditions',
    'msapplication-TileColor': '#4F46E5',
    'theme-color': '#4F46E5'
  };

  return (
    <>
      <SEO 
        title="Terms & Conditions - Service Agreement & User Responsibilities | Back2Nest School Transportation Patna Bihar"
        description="Read the complete terms and conditions for Back2Nest school transportation services in Patna, Bihar. User responsibilities, service agreements, safety protocols, payment terms, and legal conditions for safe school transport with professional drivers."
        keywords="Back2Nest terms conditions, school transport agreement Bihar, service terms Patna, user agreement school van, legal terms transportation, school transport service conditions, student safety agreement, transportation service agreement Bihar"
        canonicalUrl="https://back2nest.in/terms-conditions"
        ogTitle="Terms & Conditions - Back2Nest School Transportation Service Agreement"
        ogDescription="Complete terms and conditions for Back2Nest school transportation services including user responsibilities, service agreements, safety protocols, and legal terms for families in Patna, Bihar."
        ogImage="https://back2nest.in/images/terms-conditions-social-share.jpg"
        ogUrl="https://back2nest.in/terms-conditions"
        structuredData={structuredData}
        breadcrumbData={breadcrumbData}
        additionalMeta={additionalMeta}
      />

      <div className="min-h-screen bg-white">
        {/* Breadcrumb Navigation */}
        <nav className="container mx-auto px-6 py-4" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            </li>
            <li className="text-gray-400" aria-hidden="true">/</li>
            <li className="text-gray-800 font-medium" aria-current="page">Terms & Conditions</li>
          </ol>
        </nav>

        <div className="container mx-auto px-6 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <header className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms and Conditions</h1>
              <p className="text-lg text-gray-600 mb-2">Back2Nest</p>
              <p className="text-sm text-gray-500 italic">Last Updated: {currentDate}</p>
            </header>

            {/* Content - ✅ REMOVED user-select: none to allow copying */}
            <main className="terms-content space-y-6">
              
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Welcome to Back2Nest ("we," "our," or "us"). These Terms and Conditions ("Terms") govern your use of our mobile application Back2Nest (the "Service") operated by Sachin Kumar for school transportation services.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of these Terms, then you may not access the Service.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">2. Contact Information</h2>
                <div className="text-gray-700 leading-relaxed">
                  <p>Service Provider: Sachin Kumar</p>
                  <p>Business Name: Back2Nest</p>
                  <p>Email: <a href="mailto:help@back2nest.in" className="text-blue-600 hover:text-blue-800 underline">help@back2nest.in</a></p>
                  <p>Phone: <a href="tel:+918935904820" className="text-blue-600 hover:text-blue-800 underline">+91-8935904820</a></p>
                  <p>Address: Jagat Narayan Road, Patna, Bihar 800003, India</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">3. Service Description</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Back2Nest is a school transportation service platform that provides safe, reliable transportation for students in Patna, Bihar and surrounding areas. Our services include:
                </p>
                <ul className="text-gray-700 leading-relaxed space-y-2 ml-6">
                  <li>• Daily school pickup and drop-off services</li>
                  <li>• Live GPS tracking for student safety</li>
                  <li>• Professional, verified drivers</li>
                  <li>• Regular vehicle safety inspections</li>
                  <li>• Emergency support and notifications</li>
                  <li>• Parent communication and updates</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">4. Eligibility and Account Registration</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To use our services:
                </p>
                <ul className="text-gray-700 leading-relaxed space-y-2 ml-6">
                  <li>• You must be at least <strong>18 years old</strong> or have parental consent</li>
                  <li>• Parents/guardians must register for their children's transportation</li>
                  <li>• You must provide accurate and complete information during registration</li>
                  <li>• You are responsible for maintaining account security</li>
                  <li>• You must notify us immediately of any unauthorized account use</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">5. User Responsibilities</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  By using Back2Nest services, you agree to:
                </p>
                <ul className="text-gray-700 leading-relaxed space-y-2 ml-6">
                  <li>• Provide accurate student and contact information</li>
                  <li>• Ensure students are ready for pickup at scheduled times</li>
                  <li>• Inform us of any schedule changes or absences in advance</li>
                  <li>• Treat drivers and staff with respect and courtesy</li>
                  <li>• <strong>Pay fees on time</strong> according to agreed terms</li>
                  <li>• Follow all safety guidelines and instructions</li>
                  <li>• Use the service only for legitimate transportation needs</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">6. Student Safety and Conduct</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For student safety, we require:
                </p>
                <ul className="text-gray-700 leading-relaxed space-y-2 ml-6">
                  <li>• Students must follow driver instructions and safety rules</li>
                  <li>• Students must <strong>wear seatbelts</strong> and remain seated during transit</li>
                  <li>• Disruptive behavior may result in service suspension</li>
                  <li>• Parents must ensure students are at pickup points on time</li>
                  <li>• Emergency contact information must be current and accessible</li>
                  <li>• Special medical needs must be disclosed during registration</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">7. Payment Terms</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Payment terms and conditions:
                </p>
                <ul className="text-gray-700 leading-relaxed space-y-2 ml-6">
                  <li>• <strong>Monthly fees are due in advance</strong> on the 1st of each month</li>
                  <li>• Payment can be made via bank transfer, UPI, or authorized payment methods</li>
                  <li>• Late payment may result in service suspension</li>
                  <li>• Refunds are subject to our <Link to="/refund-policy" className="text-blue-600 hover:text-blue-800 underline">refund policy</Link> terms</li>
                  <li>• Fee changes will be communicated <strong>30 days in advance</strong></li>
                  <li>• Additional charges may apply for special requests or route changes</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">8. Data Collection and Privacy</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We collect and process the following information:
                </p>
                <ul className="text-gray-700 leading-relaxed space-y-2 ml-6">
                  <li>• Student and parent/guardian personal information</li>
                  <li>• Contact details and emergency information</li>
                  <li>• School details and transportation requirements</li>
                  <li>• Location data for route optimization and safety</li>
                  <li>• Payment information for billing purposes</li>
                  <li>• Communication records for service improvement</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  All data is stored securely and used only as described in our <Link to="/privacy-policy" className="text-blue-600 hover:text-blue-800 underline">Privacy Policy</Link>. We implement industry-standard security measures to protect your information.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">9. Service Availability and Modifications</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Service availability:
                </p>
                <ul className="text-gray-700 leading-relaxed space-y-2 ml-6">
                  <li>• Services operate during school days as per academic calendar</li>
                  <li>• Service may be suspended during severe weather or emergencies</li>
                  <li>• We reserve the right to modify routes for operational efficiency</li>
                  <li>• <strong>Advance notice will be provided</strong> for significant service changes</li>
                  <li>• Temporary service interruptions may occur for maintenance</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">10. Prohibited Uses</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The following activities are strictly prohibited:
                </p>
                <ul className="text-gray-700 leading-relaxed space-y-2 ml-6">
                  <li>• Using the service for non-school transportation purposes</li>
                  <li>• Providing false or misleading information</li>
                  <li>• Interfering with driver duties or vehicle operations</li>
                  <li>• Engaging in harassment or inappropriate behavior</li>
                  <li>• Attempting to bypass safety protocols or procedures</li>
                  <li>• Using the service for illegal or unauthorized purposes</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">11. Liability and Insurance</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Liability and insurance coverage:
                </p>
                <ul className="text-gray-700 leading-relaxed space-y-2 ml-6">
                  <li>• <strong>All vehicles are covered by comprehensive insurance</strong></li>
                  <li>• We maintain appropriate liability coverage for our operations</li>
                  <li>• Our liability is limited to the extent permitted by law</li>
                  <li>• Parents/guardians are responsible for student behavior and conduct</li>
                  <li>• Emergency medical decisions require parental authorization when possible</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">12. Termination of Service</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Service may be terminated:
                </p>
                <ul className="text-gray-700 leading-relaxed space-y-2 ml-6">
                  <li>• By either party with <strong>30 days written notice</strong></li>
                  <li>• Immediately for breach of terms or safety violations</li>
                  <li>• For non-payment of fees after reasonable notice</li>
                  <li>• For repeated disruptive behavior by students</li>
                  <li>• For providing false information or documentation</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">13. Emergency Procedures</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  In case of emergencies:
                </p>
                <ul className="text-gray-700 leading-relaxed space-y-2 ml-6">
                  <li>• <strong>Drivers are trained in basic first aid</strong> and emergency response</li>
                  <li>• Parents will be notified immediately of any incidents</li>
                  <li>• Emergency contacts must be readily available</li>
                  <li>• Medical emergencies will be handled by qualified professionals</li>
                  <li>• All vehicles are equipped with emergency communication devices</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">14. Intellectual Property</h2>
                <p className="text-gray-700 leading-relaxed">
                  The Back2Nest name, logo, app, and all related content are the intellectual property of Sachin Kumar and Back2Nest. Unauthorized use, reproduction, or distribution is prohibited.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">15. Dispute Resolution</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For dispute resolution:
                </p>
                <ul className="text-gray-700 leading-relaxed space-y-2 ml-6">
                  <li>• Contact our customer support team first for resolution</li>
                  <li>• Formal complaints should be submitted in writing</li>
                  <li>• We aim to resolve disputes within <strong>15 business days</strong></li>
                  <li>• Legal proceedings will be governed by Indian law</li>
                  <li>• Jurisdiction will be the courts of Patna, Bihar</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">16. Governing Law</h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms are governed by the laws of India. Any legal action or proceeding will be brought exclusively in the courts of Patna, Bihar, India.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">17. Changes to Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to modify these Terms at any time. Material changes will be communicated with <strong>30 days notice</strong>. Continued use of our services after changes indicates acceptance of the updated Terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">18. Contact Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For questions about these Terms and Conditions, please contact us:
                </p>
                <div className="text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-lg border">
                  <p><strong>Email:</strong> <a href="mailto:help@back2nest.in?subject=Terms & Conditions Inquiry - Back2Nest" className="text-blue-600 hover:text-blue-800 underline">help@back2nest.in</a></p>
                  <p><strong>Phone:</strong> <a href="tel:+918935904820" className="text-blue-600 hover:text-blue-800 underline">+91-8935904820</a></p>
                  <p><strong>Address:</strong> Jagat Narayan Road, Patna, Bihar 800003, India</p>
                  <p><strong>Subject Line:</strong> Terms & Conditions Inquiry - Back2Nest</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">19. Acknowledgment</h2>
                <p className="text-gray-700 leading-relaxed">
                  By using Back2Nest services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. You also confirm that you have the authority to agree to these Terms on behalf of any minor children for whom you are registering transportation services.
                </p>
              </section>

              <footer className="text-center text-gray-500 text-sm mt-12 pt-8 border-t border-gray-200">
                <p>These Terms and Conditions are effective as of {currentDate}</p>
                <p className="mt-2">© 2025 Back2Nest. All rights reserved.</p>
              </footer>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsConditions;
