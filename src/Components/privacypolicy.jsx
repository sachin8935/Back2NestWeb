import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../Components/SEO';

const PrivacyPolicy = () => {
  const currentDate = new Date().toLocaleDateString();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy - Back2Nest School Transportation",
    "description": "Privacy Policy for Back2Nest school transportation services in Patna, Bihar",
    "publisher": {
      "@type": "Organization",
      "name": "Back2Nest",
      "url": "https://back2nest.in"
    }
  };

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
        "name": "Privacy Policy",
        "item": "https://back2nest.in/privacy-policy"
      }
    ]
  };

  return (
    <>
      <SEO 
        title="Privacy Policy | Back2Nest - School Transportation Privacy & Data Protection"
        description="Learn how Back2Nest collects, uses, and protects your personal information. Comprehensive privacy policy for our school transportation services in Patna, Bihar."
        keywords="Back2Nest privacy policy, data protection, personal information, school transport privacy, data security Bihar"
        canonicalUrl="https://back2nest.in/privacy-policy"
        ogTitle="Privacy Policy - Back2Nest School Transportation"
        ogDescription="Comprehensive privacy policy detailing how Back2Nest handles your personal data and protects your privacy."
        ogImage="https://back2nest.in/images/privacy-policy-og.jpg"
        structuredData={structuredData}
        breadcrumbData={breadcrumbData}
      />

      <div className="min-h-screen bg-white">
        {/* Breadcrumb Navigation */}
        <nav className="container mx-auto px-6 py-4" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-800 font-medium">Privacy Policy</li>
          </ol>
        </nav>

        <div className="container mx-auto px-6 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="privacy-text text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
              <p className="privacy-text text-lg text-gray-600 mb-2">Back2Nest</p>
              <p className="privacy-text text-sm text-gray-500 italic">Last Updated: {currentDate}</p>
            </div>

            {/* Content */}
            <div className="privacy-content space-y-6">
              
              <section>
                <h2 className="privacy-text text-xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                <p className="privacy-text text-gray-700 leading-relaxed mb-4">
                  Welcome to Back2Nest ("we," "our," or "us"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application Back2Nest (the "Service") operated by Sachin Kumar.
                </p>
                <p className="privacy-text text-gray-700 leading-relaxed mb-4">
                  Back2Nest is a school transportation service platform that connects students and parents with professional drivers to facilitate safe physical transportation services. Our platform enables users to book real-world transportation services, not digital goods or in-app purchases.
                </p>
                <p className="privacy-text text-gray-700 leading-relaxed">
                  We respect your privacy and are committed to protecting your personal information. This policy will inform you about how we look after your personal data and tell you about your privacy rights.
                </p>
              </section>

              <section>
                <h2 className="privacy-text text-xl font-bold text-gray-900 mb-4">2. Controller Information</h2>
                <div className="privacy-text text-gray-700 leading-relaxed">
                  <p>Data Controller: Sachin Kumar</p>
                  <p>Email: help@back2nest.in</p>
                  <p>Phone: +91-8935904820</p>
                  <p>Address: Jagat Narayan Road, Patna, Bihar 800003, India</p>
                </div>
              </section>

              <section>
                <h2 className="privacy-text text-xl font-bold text-gray-900 mb-4">3. Service Description</h2>
                <p className="privacy-text text-gray-700 leading-relaxed mb-4">
                  Back2Nest is a school transportation platform that provides the following physical transportation services:
                </p>
                <ul className="privacy-text text-gray-700 leading-relaxed space-y-2 ml-6">
                  <li>• Connection between students/parents and registered professional drivers</li>
                  <li>• Real-world school transportation services in safe, certified vehicles</li>
                  <li>• Route planning and navigation for daily school commutes</li>
                  <li>• Live GPS tracking and safety monitoring</li>
                  <li>• Payment facilitation for completed transportation services</li>
                </ul>
                <p className="privacy-text text-gray-700 leading-relaxed mt-4">
                  Our service exclusively deals with physical transportation services, not digital content, virtual items, or in-app purchases.
                </p>
              </section>

              <section>
                <h2 className="privacy-text text-xl font-bold text-gray-900 mb-4">4. Information We Collect</h2>
                <p className="privacy-text text-gray-700 leading-relaxed mb-4">
                  We collect information you provide directly to us, information we obtain automatically when you use our Service, and information from third parties.
                </p>
                
                <h3 className="privacy-text text-lg font-semibold text-gray-800 mb-3">4.1 Personal Information</h3>
                <ul className="privacy-text text-gray-700 leading-relaxed space-y-1 ml-6 mb-4">
                  <li>• Full name of student and parent/guardian</li>
                  <li>• Phone number and email address</li>
                  <li>• Student's school details and grade</li>
                  <li>• Home and school addresses</li>
                  <li>• Emergency contact information</li>
                  <li>• Profile picture (if provided)</li>
                </ul>

                <h3 className="privacy-text text-lg font-semibold text-gray-800 mb-3">4.2 Driver Information</h3>
                <ul className="privacy-text text-gray-700 leading-relaxed space-y-1 ml-6 mb-4">
                  <li>• Driving license number and expiry date</li>
                  <li>• Driving license photograph</li>
                  <li>• Government-issued ID verification</li>
                  <li>• Background verification documents</li>
                  <li>• Training certificates</li>
                </ul>

                <h3 className="privacy-text text-lg font-semibold text-gray-800 mb-3">4.3 Vehicle Information</h3>
                <ul className="privacy-text text-gray-700 leading-relaxed space-y-1 ml-6 mb-4">
                  <li>• Vehicle registration number</li>
                  <li>• Vehicle make, model, and color</li>
                  <li>• Vehicle insurance details</li>
                  <li>• Safety inspection certificates</li>
                  <li>• Vehicle photographs</li>
                </ul>

                <h3 className="privacy-text text-lg font-semibold text-gray-800 mb-3">4.4 Location and Usage Information</h3>
                <ul className="privacy-text text-gray-700 leading-relaxed space-y-1 ml-6">
                  <li>• Real-time GPS location during trips</li>
                  <li>• Pickup and drop-off locations</li>
                  <li>• Route history and trip patterns</li>
                  <li>• App usage patterns and device information</li>
                  <li>• Communication records within the app</li>
                </ul>
              </section>

              <section>
                <h2 className="privacy-text text-xl font-bold text-gray-900 mb-4">5. Legal Basis for Processing</h2>
                <p className="privacy-text text-gray-700 leading-relaxed mb-4">
                  We process your personal information based on the following legal grounds:
                </p>
                <ul className="privacy-text text-gray-700 leading-relaxed space-y-2 ml-6">
                  <li>• Consent: When you provide explicit consent for specific processing</li>
                  <li>• Contract: To fulfill our contractual obligations for transportation services</li>
                  <li>• Legal obligations: To comply with applicable laws and regulations</li>
                  <li>• Legitimate interests: For business operations, safety, and service improvement</li>
                </ul>
              </section>

              <section>
                <h2 className="privacy-text text-xl font-bold text-gray-900 mb-4">6. How We Use Your Information</h2>
                <p className="privacy-text text-gray-700 leading-relaxed mb-4">
                  We use your information for the following purposes:
                </p>
                
                <h3 className="privacy-text text-lg font-semibold text-gray-800 mb-3">6.1 Service Provision</h3>
                <ul className="privacy-text text-gray-700 leading-relaxed space-y-1 ml-6 mb-4">
                  <li>• Account creation and management</li>
                  <li>• School van booking and driver assignment</li>
                  <li>• Route planning and optimization</li>
                  <li>• Live GPS tracking and notifications</li>
                  <li>• Customer support and communication</li>
                </ul>

                <h3 className="privacy-text text-lg font-semibold text-gray-800 mb-3">6.2 Safety and Security</h3>
                <ul className="privacy-text text-gray-700 leading-relaxed space-y-1 ml-6 mb-4">
                  <li>• Driver and vehicle verification</li>
                  <li>• Student safety monitoring</li>
                  <li>• Emergency assistance and alerts</li>
                  <li>• Fraud prevention and detection</li>
                </ul>

                <h3 className="privacy-text text-lg font-semibold text-gray-800 mb-3">6.3 Business Operations</h3>
                <ul className="privacy-text text-gray-700 leading-relaxed space-y-1 ml-6">
                  <li>• Service analytics and improvement</li>
                  <li>• Payment processing and invoicing</li>
                  <li>• Legal compliance and reporting</li>
                  <li>• Marketing communications (with consent)</li>
                </ul>
              </section>

              <section>
                <h2 className="privacy-text text-xl font-bold text-gray-900 mb-4">7. Payment Processing</h2>
                <p className="privacy-text text-gray-700 leading-relaxed mb-4">
                  Our payment system operates with strict compliance:
                </p>
                <ul className="privacy-text text-gray-700 leading-relaxed space-y-2 ml-6">
                  <li>• All payments are exclusively for completed physical transportation services</li>
                  <li>• No digital goods, virtual items, or in-app purchases are available</li>
                  <li>• Payment is processed through secure, authorized payment gateways</li>
                  <li>• Driver earnings are processed externally through legitimate payment systems</li>
                  <li>• All financial transactions comply with applicable regulations</li>
                </ul>
              </section>

              <section>
                <h2 className="privacy-text text-xl font-bold text-gray-900 mb-4">8. Data Storage and Security</h2>
                <p className="privacy-text text-gray-700 leading-relaxed mb-4">
                  We protect your data using industry-standard security measures:
                </p>
                <ul className="privacy-text text-gray-700 leading-relaxed space-y-2 ml-6">
                  <li>• Secure cloud storage with encryption at rest and in transit</li>
                  <li>• Access controls and role-based permissions</li>
                  <li>• Regular security audits and monitoring</li>
                  <li>• Secure backup and disaster recovery procedures</li>
                  <li>• Staff training on data protection practices</li>
                </ul>
              </section>

              <section>
                <h2 className="privacy-text text-xl font-bold text-gray-900 mb-4">9. Data Retention</h2>
                <p className="privacy-text text-gray-700 leading-relaxed mb-4">
                  We retain your information for different periods based on the type of data:
                </p>
                <ul className="privacy-text text-gray-700 leading-relaxed space-y-2 ml-6">
                  <li>• Account information: Until account deletion + 30 days</li>
                  <li>• Transaction and payment records: 7 years (for legal and tax purposes)</li>
                  <li>• Trip and safety data: 3 years</li>
                  <li>• Communication logs: 1 year</li>
                  <li>• Marketing data: Until consent withdrawal</li>
                </ul>
              </section>

              <section>
                <h2 className="privacy-text text-xl font-bold text-gray-900 mb-4">10. Your Privacy Rights</h2>
                <p className="privacy-text text-gray-700 leading-relaxed mb-4">
                  You have the following rights regarding your personal information:
                </p>
                <ul className="privacy-text text-gray-700 leading-relaxed space-y-2 ml-6">
                  <li>• Right to access your personal data</li>
                  <li>• Right to correct inaccurate information</li>
                  <li>• Right to request deletion of your data</li>
                  <li>• Right to data portability</li>
                  <li>• Right to withdraw consent</li>
                  <li>• Right to object to processing</li>
                  <li>• Right to restrict processing</li>
                </ul>
              </section>

              <section>
                <h2 className="privacy-text text-xl font-bold text-gray-900 mb-4">11. Children's Privacy</h2>
                <p className="privacy-text text-gray-700 leading-relaxed">
                  Our service is designed for school transportation and may involve minors. We collect student information only as necessary for safe transportation services and with parental consent. Parents/guardians have full control over their child's information and can request access, correction, or deletion at any time.
                </p>
              </section>

              <section>
                <h2 className="privacy-text text-xl font-bold text-gray-900 mb-4">12. Location Services</h2>
                <p className="privacy-text text-gray-700 leading-relaxed mb-4">
                  Our app requires location services for safe operation. We collect location data to:
                </p>
                <ul className="privacy-text text-gray-700 leading-relaxed space-y-2 ml-6">
                  <li>• Provide real-time tracking for student safety</li>
                  <li>• Optimize routes and reduce travel time</li>
                  <li>• Send pickup and drop-off notifications</li>
                  <li>• Enable emergency assistance features</li>
                  <li>• Calculate accurate pricing and distances</li>
                </ul>
              </section>

              <section>
                <h2 className="privacy-text text-xl font-bold text-gray-900 mb-4">13. Third-Party Services</h2>
                <p className="privacy-text text-gray-700 leading-relaxed mb-4">
                  Our app integrates with trusted third-party services:
                </p>
                <ul className="privacy-text text-gray-700 leading-relaxed space-y-2 ml-6">
                  <li>• Google Maps for navigation and routing</li>
                  <li>• Authorized payment gateways for transactions</li>
                  <li>• SMS and notification services</li>
                  <li>• Cloud storage and analytics platforms</li>
                </ul>
              </section>

              <section>
                <h2 className="privacy-text text-xl font-bold text-gray-900 mb-4">14. Data Breach Notification</h2>
                <p className="privacy-text text-gray-700 leading-relaxed">
                  In the unlikely event of a data breach, we will notify relevant authorities within 72 hours and inform affected users without undue delay. We will provide details about the breach and steps taken to secure the affected systems.
                </p>
              </section>

              <section>
                <h2 className="privacy-text text-xl font-bold text-gray-900 mb-4">15. Changes to This Privacy Policy</h2>
                <p className="privacy-text text-gray-700 leading-relaxed">
                  We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of any material changes through the app, email notifications, or website updates. Your continued use of our services after any modifications indicates acceptance of the updated policy.
                </p>
              </section>

              <section>
                <h2 className="privacy-text text-xl font-bold text-gray-900 mb-4">16. Contact Information</h2>
                <p className="privacy-text text-gray-700 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="privacy-text text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-lg">
                  <p><strong>Email:</strong> help@back2nest.in</p>
                  <p><strong>Phone:</strong> +91-8935904820</p>
                  <p><strong>Address:</strong> Jagat Narayan Road, Patna, Bihar 800003, India</p>
                  <p><strong>Subject Line:</strong> Privacy Policy Inquiry - Back2Nest</p>
                </div>
              </section>

              <section>
                <h2 className="privacy-text text-xl font-bold text-gray-900 mb-4">17. Complaint Resolution</h2>
                <p className="privacy-text text-gray-700 leading-relaxed">
                  If you believe we have not handled your personal information appropriately, you have the right to make a complaint to the relevant data protection authority in India or contact us directly for resolution.
                </p>
              </section>

              <section>
                <h2 className="privacy-text text-xl font-bold text-gray-900 mb-4">18. Consent</h2>
                <p className="privacy-text text-gray-700 leading-relaxed">
                  By using Back2Nest services, you consent to the collection, use, and disclosure of your information as described in this Privacy Policy. You acknowledge that Back2Nest provides school transportation services dealing exclusively with physical transportation, and that all data processing complies with applicable laws and platform policies. If you do not agree with any part of this policy, please discontinue use of our services.
                </p>
              </section>

              <div className="privacy-text text-center text-gray-500 text-sm mt-12 pt-8 border-t border-gray-200">
                <p>This Privacy Policy is effective as of {currentDate}</p>
                <p className="mt-2">© 2025 Back2Nest. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .privacy-text,
        .privacy-content,
        .privacy-content * {
          -webkit-user-select: none !important;
          -moz-user-select: none !important;
          -ms-user-select: none !important;
          user-select: none !important;
          -webkit-touch-callout: none !important;
          -webkit-tap-highlight-color: transparent !important;
        }
        
        .privacy-text::selection,
        .privacy-content ::selection {
          background: transparent !important;
        }
        
        .privacy-text::-moz-selection,
        .privacy-content ::-moz-selection {
          background: transparent !important;
        }
      `}</style>
    </>
  );
};

export default PrivacyPolicy;
