import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../Components/SEO';

const RefundPolicy = () => {
  const currentDate = new Date().toLocaleDateString();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Refund Policy - Back2Nest School Transportation",
    "description": "Refund and cancellation policy for Back2Nest school transportation services in Patna, Bihar",
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
        "name": "Refund Policy",
        "item": "https://back2nest.in/refund-policy"
      }
    ]
  };

  return (
    <>
      <SEO 
        title="Refund Policy | Back2Nest - School Transportation Cancellation & Refund Terms"
        description="Read Back2Nest's refund and cancellation policy for school transportation services in Patna, Bihar. Clear terms for service cancellations, refund eligibility, and processing procedures."
        keywords="Back2Nest refund policy, school transport cancellation, refund terms Bihar, cancellation policy school van, transportation refund Patna, service refund conditions"
        canonicalUrl="https://back2nest.in/refund-policy"
        ogTitle="Refund Policy - Back2Nest School Transportation"
        ogDescription="Comprehensive refund and cancellation policy for Back2Nest school transportation services including eligibility criteria and processing procedures."
        ogImage="https://back2nest.in/images/refund-policy-og.jpg"
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
            <li className="text-gray-800 font-medium">Refund Policy</li>
          </ol>
        </nav>

        <div className="container mx-auto px-6 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="refund-text text-3xl font-bold text-gray-900 mb-2">Refund Policy</h1>
              <p className="refund-text text-lg text-gray-600 mb-2">Back2Nest</p>
              <p className="refund-text text-sm text-gray-500 italic">Last Updated: {currentDate}</p>
            </div>

            {/* Content */}
            <div className="refund-content space-y-6">
              
              <section>
                <h2 className="refund-text text-xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                <p className="refund-text text-gray-700 leading-relaxed mb-4">
                  At Back2Nest, we are committed to providing safe, reliable, and transparent school transportation services in Patna, Bihar. This Refund Policy outlines the terms and conditions under which refunds may be granted for our services.
                </p>
                <p className="refund-text text-gray-700 leading-relaxed">
                  We strive to ensure customer satisfaction while maintaining fair and reasonable policies for both parents/guardians and our business operations.
                </p>
              </section>

              <section>
                <h2 className="refund-text text-xl font-bold text-gray-900 mb-4">2. Contact Information</h2>
                <div className="refund-text text-gray-700 leading-relaxed">
                  <p>Service Provider: Sachin Kumar</p>
                  <p>Business Name: Back2Nest</p>
                  <p>Email: help@back2nest.in</p>
                  <p>Phone: +91-8935904820</p>
                  <p>Address: Jagat Narayan Road, Patna, Bihar 800003, India</p>
                </div>
              </section>

              <section>
                <h2 className="refund-text text-xl font-bold text-gray-900 mb-4">3. Refund Eligibility</h2>
                <p className="refund-text text-gray-700 leading-relaxed mb-4">
                  Refunds are available under the following circumstances:
                </p>
                <ul className="refund-text text-gray-700 leading-relaxed space-y-2 ml-6">
                  <li>• Service cancellation with proper advance notice (as specified below)</li>
                  <li>• Unused monthly fees due to extended school holidays or closures</li>
                  <li>• Service suspension due to our operational issues</li>
                  <li>• Student permanent school change or relocation</li>
                  <li>• Medical conditions preventing student from using transportation</li>
                  <li>• Overcharging or billing errors on our part</li>
                </ul>
              </section>

              <section>
                <h2 className="refund-text text-xl font-bold text-gray-900 mb-4">4. Non-Refundable Charges</h2>
                <p className="refund-text text-gray-700 leading-relaxed mb-4">
                  The following charges are non-refundable:
                </p>
                <ul className="refund-text text-gray-700 leading-relaxed space-y-2 ml-6">
                  <li>• Registration and processing fees</li>
                  <li>• Administrative and documentation charges</li>
                  <li>• Completed transportation services</li>
                  <li>• Late cancellation fees (less than 72 hours notice)</li>
                  <li>• Security deposits (refundable only at service termination)</li>
                  <li>• Charges for special requests or route modifications</li>
                  <li>• Fees for services used during trial periods</li>
                </ul>
              </section>

              <section>
                <h2 className="refund-text text-xl font-bold text-gray-900 mb-4">5. Cancellation Policy</h2>
                <p className="refund-text text-gray-700 leading-relaxed mb-4">
                  Different cancellation terms apply based on the situation:
                </p>
                
                <h3 className="refund-text text-lg font-semibold text-gray-800 mb-3">5.1 Monthly Service Cancellation</h3>
                <ul className="refund-text text-gray-700 leading-relaxed space-y-2 ml-6 mb-4">
                  <li>• Minimum 7 days written notice required</li>
                  <li>• Refund available for unused portion of the month</li>
                  <li>• Pro-rated charges will apply for partial month usage</li>
                </ul>

                <h3 className="refund-text text-lg font-semibold text-gray-800 mb-3">5.2 Daily Trip Cancellation</h3>
                <ul className="refund-text text-gray-700 leading-relaxed space-y-2 ml-6 mb-4">
                  <li>• At least 24 hours advance notice for single trip cancellations</li>
                  <li>• Same-day cancellations are non-refundable</li>
                  <li>• Emergency cancellations will be considered case-by-case</li>
                </ul>

                <h3 className="refund-text text-lg font-semibold text-gray-800 mb-3">5.3 Emergency Cancellations</h3>
                <ul className="refund-text text-gray-700 leading-relaxed space-y-2 ml-6">
                  <li>• Medical emergencies with valid documentation</li>
                  <li>• Sudden school closures or emergencies</li>
                  <li>• Family emergencies with reasonable proof</li>
                </ul>
              </section>

              <section>
                <h2 className="refund-text text-xl font-bold text-gray-900 mb-4">6. How to Request a Refund</h2>
                <p className="refund-text text-gray-700 leading-relaxed mb-4">
                  To request a refund, please follow these steps:
                </p>
                <ol className="refund-text text-gray-700 leading-relaxed space-y-2 ml-6">
                  <li>1. Contact us within 7 days of the refund event</li>
                  <li>2. Send a written request to help@back2nest.in or call +91-8935904820</li>
                  <li>3. Include the following information:
                    <ul className="mt-2 ml-6 space-y-1">
                      <li>• Student name and registration details</li>
                      <li>• Reason for refund request</li>
                      <li>• Service dates affected</li>
                      <li>• Supporting documents (if applicable)</li>
                      <li>• Preferred refund method</li>
                    </ul>
                  </li>
                  <li>4. Wait for our team to review and respond within 3-5 business days</li>
                </ol>
              </section>

              <section>
                <h2 className="refund-text text-xl font-bold text-gray-900 mb-4">7. Refund Processing Time</h2>
                <p className="refund-text text-gray-700 leading-relaxed mb-4">
                  Once your refund request is approved:
                </p>
                <ul className="refund-text text-gray-700 leading-relaxed space-y-2 ml-6">
                  <li>• Bank transfers: 5-10 business days</li>
                  <li>• UPI refunds: 3-7 business days</li>
                  <li>• Cash refunds: Available at our office within 5 business days</li>
                  <li>• Credit card refunds: 7-14 business days (depending on bank)</li>
                  <li>• Digital wallet refunds: 3-7 business days</li>
                </ul>
                <p className="refund-text text-gray-700 leading-relaxed mt-4">
                  Refunds will be processed to the original payment method unless otherwise requested and approved.
                </p>
              </section>

              <section>
                <h2 className="refund-text text-xl font-bold text-gray-900 mb-4">8. Partial Refunds</h2>
                <p className="refund-text text-gray-700 leading-relaxed mb-4">
                  Partial refunds may be granted in the following situations:
                </p>
                <ul className="refund-text text-gray-700 leading-relaxed space-y-2 ml-6">
                  <li>• Service interruptions due to vehicle breakdown or maintenance</li>
                  <li>• Significant delays caused by our operational issues</li>
                  <li>• Route modifications that substantially affect service quality</li>
                  <li>• Weather-related service cancellations beyond reasonable limits</li>
                  <li>• Temporary suspension of services due to driver unavailability</li>
                </ul>
                <p className="refund-text text-gray-700 leading-relaxed mt-4">
                  Partial refund amounts will be calculated based on the proportional value of affected services and will be determined at Back2Nest's discretion.
                </p>
              </section>

              <section>
                <h2 className="refund-text text-xl font-bold text-gray-900 mb-4">9. School Holiday and Closure Policy</h2>
                <p className="refund-text text-gray-700 leading-relaxed mb-4">
                  Regarding school holidays and closures:
                </p>
                <ul className="refund-text text-gray-700 leading-relaxed space-y-2 ml-6">
                  <li>• Planned school holidays are factored into monthly fee calculations</li>
                  <li>• Unexpected school closures (more than 5 consecutive days) may qualify for partial refunds</li>
                  <li>• Strike-related closures will be assessed case-by-case</li>
                  <li>• Summer vacation periods are excluded from regular monthly services</li>
                  <li>• Festival holidays are included in standard service calculations</li>
                </ul>
              </section>

              <section>
                <h2 className="refund-text text-xl font-bold text-gray-900 mb-4">10. Medical and Emergency Situations</h2>
                <p className="refund-text text-gray-700 leading-relaxed mb-4">
                  Special consideration for medical and emergency situations:
                </p>
                <ul className="refund-text text-gray-700 leading-relaxed space-y-2 ml-6">
                  <li>• Medical certificates required for health-related cancellations</li>
                  <li>• Full refunds available for long-term medical conditions (30+ days)</li>
                  <li>• Family emergencies require reasonable documentation</li>
                  <li>• Temporary medical issues (less than 15 days) may not qualify for refunds</li>
                  <li>• Mental health considerations will be handled sensitively and case-by-case</li>
                </ul>
              </section>

              <section>
                <h2 className="refund-text text-xl font-bold text-gray-900 mb-4">11. Service Quality Refunds</h2>
                <p className="refund-text text-gray-700 leading-relaxed mb-4">
                  Refunds related to service quality issues:
                </p>
                <ul className="refund-text text-gray-700 leading-relaxed space-y-2 ml-6">
                  <li>• Consistent punctuality issues (more than 3 complaints per month)</li>
                  <li>• Driver conduct issues affecting student safety or comfort</li>
                  <li>• Vehicle condition problems impacting service quality</li>
                  <li>• Failure to follow agreed route or pickup points</li>
                  <li>• Communication failures during critical situations</li>
                </ul>
                <p className="refund-text text-gray-700 leading-relaxed mt-4">
                  We investigate all service quality complaints thoroughly and provide appropriate compensation or refunds where justified.
                </p>
              </section>

              <section>
                <h2 className="refund-text text-xl font-bold text-gray-900 mb-4">12. Dispute Resolution</h2>
                <p className="refund-text text-gray-700 leading-relaxed mb-4">
                  If you disagree with our refund decision:
                </p>
                <ul className="refund-text text-gray-700 leading-relaxed space-y-2 ml-6">
                  <li>• Submit a written appeal within 15 days of our initial decision</li>
                  <li>• Provide additional documentation supporting your claim</li>
                  <li>• Request a review meeting with our management team</li>
                  <li>• Appeals will be reviewed by a senior team member within 7 business days</li>
                  <li>• Final decisions will be communicated in writing</li>
                </ul>
              </section>

              <section>
                <h2 className="refund-text text-xl font-bold text-gray-900 mb-4">13. Refund Limitations</h2>
                <p className="refund-text text-gray-700 leading-relaxed mb-4">
                  Please note the following limitations:
                </p>
                <ul className="refund-text text-gray-700 leading-relaxed space-y-2 ml-6">
                  <li>• Refunds cannot exceed the original amount paid</li>
                  <li>• No interest or additional compensation will be provided on refunds</li>
                  <li>• Refunds older than 6 months may not be processed</li>
                  <li>• Multiple refund requests for the same issue will not be entertained</li>
                  <li>• Refunds are available only to the original payer</li>
                </ul>
              </section>

              <section>
                <h2 className="refund-text text-xl font-bold text-gray-900 mb-4">14. Changes to Refund Policy</h2>
                <p className="refund-text text-gray-700 leading-relaxed">
                  Back2Nest reserves the right to modify this Refund Policy at any time. Material changes will be communicated to all active customers via email, SMS, or app notifications at least 30 days before the changes take effect. Continued use of our services after policy changes constitutes acceptance of the updated terms.
                </p>
              </section>

              <section>
                <h2 className="refund-text text-xl font-bold text-gray-900 mb-4">15. Contact Information for Refunds</h2>
                <p className="refund-text text-gray-700 leading-relaxed mb-4">
                  For all refund-related inquiries, contact us through:
                </p>
                <div className="refund-text text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-lg">
                  <p><strong>Email:</strong> help@back2nest.in</p>
                  <p><strong>Phone:</strong> +91-8935904820</p>
                  <p><strong>Address:</strong> Jagat Narayan Road, Patna, Bihar 800003, India</p>
                  <p><strong>Office Hours:</strong> Monday to Saturday, 9:00 AM - 6:00 PM</p>
                  <p><strong>Subject Line for Email:</strong> Refund Request - [Student Name] - [Date]</p>
                </div>
              </section>

              <section>
                <h2 className="refund-text text-xl font-bold text-gray-900 mb-4">16. Legal Compliance</h2>
                <p className="refund-text text-gray-700 leading-relaxed">
                  This Refund Policy complies with applicable consumer protection laws in India. In case of any conflict between this policy and local regulations, the law will prevail. Disputes regarding refunds will be subject to the jurisdiction of courts in Patna, Bihar, India.
                </p>
              </section>

              <section>
                <h2 className="refund-text text-xl font-bold text-gray-900 mb-4">17. Acknowledgment</h2>
                <p className="refund-text text-gray-700 leading-relaxed">
                  By using Back2Nest services, you acknowledge that you have read, understood, and agree to this Refund Policy. This policy should be read in conjunction with our Terms and Conditions and Privacy Policy for complete understanding of our service agreements.
                </p>
              </section>

              <div className="refund-text text-center text-gray-500 text-sm mt-12 pt-8 border-t border-gray-200">
                <p>This Refund Policy is effective as of {currentDate}</p>
                <p className="mt-2">© 2025 Back2Nest. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .refund-text,
        .refund-content,
        .refund-content * {
          -webkit-user-select: none !important;
          -moz-user-select: none !important;
          -ms-user-select: none !important;
          user-select: none !important;
          -webkit-touch-callout: none !important;
          -webkit-tap-highlight-color: transparent !important;
        }
        
        .refund-text::selection,
        .refund-content ::selection {
          background: transparent !important;
        }
        
        .refund-text::-moz-selection,
        .refund-content ::-moz-selection {
          background: transparent !important;
        }
      `}</style>
    </>
  );
};

export default RefundPolicy;
