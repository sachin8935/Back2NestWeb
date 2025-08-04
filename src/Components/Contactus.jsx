import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm, ValidationError } from '@formspree/react';
import { 
  ArrowLeftIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  UserIcon,
  BuildingOfficeIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';
import SEO from '../Components/SEO';
import ChatWidget from '../Components/ChatWidget';

const ContactUs = () => {
  const [state, handleSubmit] = useForm("mblkavzj");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Enhanced structured data for contact page
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://back2nest.in/contact-us#contactpage",
        "url": "https://back2nest.in/contact-us",
        "name": "Contact Us - Back2Nest Customer Support Patna Bihar",
        "description": "Contact Back2Nest for school transportation services support, inquiries, and assistance in Patna, Bihar",
        "mainEntity": {
          "@id": "https://back2nest.in/contact-us#organization"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://back2nest.in/contact-us#organization",
        "name": "Back2Nest",
        "url": "https://back2nest.in",
        "logo": {
          "@type": "ImageObject",
          "url": "https://back2nest.in/assets/logo.png",
          "width": "200",
          "height": "60"
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+91-8935904820",
            "contactType": "customer service",
            "areaServed": "Patna, Bihar",
            "availableLanguage": ["English", "Hindi"],
            "hoursAvailable": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "06:00",
              "closes": "20:00"
            }
          },
          {
            "@type": "ContactPoint",
            "email": "help@back2nest.in",
            "contactType": "customer service",
            "areaServed": "Patna, Bihar"
          }
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Jagat Narayan Road",
          "addressLocality": "Patna",
          "addressRegion": "Bihar",
          "postalCode": "800003",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "25.617001",
          "longitude": "85.157219"
        },
        "description": "Leading school transportation service provider in Patna, Bihar",
        "sameAs": [
          "https://www.facebook.com/back2nest",
          "https://www.linkedin.com/company/back2nest"
        ]
      }
    ]
  };

  // Breadcrumb structured data
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
        "name": "Contact Us",
        "item": "https://back2nest.in/contact-us"
      }
    ]
  };

  const contactMethods = [
    {
      icon: PhoneIcon,
      title: "Call Us",
      description: "Speak directly with our support team",
      contact: "+91-8935904820",
      action: "tel:+918935904820",
      availability: "Mon-Sat, 6AM-8PM",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: EnvelopeIcon,
      title: "Email Us",
      description: "Send us your queries via email",
      contact: "help@back2nest.in",
      action: "mailto:help@back2nest.in",
      availability: "24/7 - Response within 24hrs",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: MapPinIcon,
      title: "Visit Us",
      description: "Our office location in Patna",
      contact: "Jagat Narayan Road, Patna",
      action: "https://maps.google.com/?q=Jagat+Narayan+Road,+Patna,+Bihar",
      availability: "Mon-Sat, 9AM-6PM",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "6:00 AM - 8:00 PM" },
    { day: "Saturday", hours: "6:00 AM - 8:00 PM" },
    { day: "Sunday", hours: "Emergency Support Only" }
  ];

  if (state.succeeded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center p-8 bg-white rounded-2xl shadow-lg">
          <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for contacting Back2Nest! We've received your message and will get back to you within 24 hours.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title="Contact Us - Get in Touch with Back2Nest Support | School Transportation Patna Bihar"
        description="Contact Back2Nest customer support for assistance with school transportation services in Patna, Bihar. Reach us via phone +91-8935904820, email help@back2nest.in, or contact form. Quick response guaranteed for booking, tracking, and safety queries."
        keywords="Back2Nest contact, customer support Patna Bihar, school transport contact, help@back2nest.in, +91-8935904820, contact form, Back2Nest office Patna, school van support Bihar, customer service contact"
        canonicalUrl="https://back2nest.in/contact-us"
        ogTitle="Contact Back2Nest - Customer Support & Service | School Transportation Patna Bihar"
        ogDescription="Get in touch with Back2Nest support team for school transportation assistance in Patna, Bihar. Phone, email, and contact form available with guaranteed response."
        ogImage="https://back2nest.in/images/contact-us-og.jpg"
        structuredData={structuredData}
        breadcrumbData={breadcrumbData}
        additionalMeta={{
          'geo.region': 'IN-BR',
          'geo.placename': 'Patna, Bihar, India',
          'geo.position': '25.617001;85.157219',
          'ICBM': '25.617001, 85.157219'
        }}
      />

      {/* Chat Widget Integration */}
      <ChatWidget />

      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
        {/* Breadcrumb Navigation */}
        <nav className="container mx-auto px-6 py-4" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link to="/" className="hover:text-purple-600 transition-colors">Home</Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-800 font-medium">Contact Us</li>
          </ol>
        </nav>

        <div className="container mx-auto px-6 py-8">
          <main className="max-w-6xl mx-auto">
            {/* Header Section */}
            <header className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
                Contact Us
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Get in Touch 
                <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  With Our Team
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                We're here to help you with all your school transportation needs in <strong>Patna, Bihar</strong>. 
                Reach out for support, inquiries, or feedback - we'd love to hear from you!
              </p>
            </header>

            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className={`lg:col-span-2 transform transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
                    <p className="text-lg text-gray-600">
                      Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Name Field */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                          placeholder="Enter your full name"
                        />
                        <ValidationError prefix="Name" field="name" errors={state.errors} />
                      </div>

                      {/* Phone Field */}
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          name="phone"
                          required
                          pattern="[0-9]{10}"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                          placeholder="Enter your phone number"
                        />
                        <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                      </div>
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        placeholder="Enter your email address"
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>

                    {/* Subject Field */}
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select a subject</option>
                        <option value="School Van Booking">School Van Booking</option>
                        <option value="Live Tracking Support">Live Tracking Support</option>
                        <option value="Driver Partner Inquiry">Driver Partner Inquiry</option>
                        <option value="Safety Concerns">Safety Concerns</option>
                        <option value="Payment & Pricing">Payment & Pricing</option>
                        <option value="Technical Support">Technical Support</option>
                        <option value="Feedback & Suggestions">Feedback & Suggestions</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                      <ValidationError prefix="Subject" field="subject" errors={state.errors} />
                    </div>

                    {/* Message Field */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="6"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                        placeholder="Please describe your question or concern in detail..."
                      />
                      <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                      {state.submitting ? (
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending Message...
                        </div>
                      ) : (
                        <>
                          <EnvelopeIcon className="w-5 h-5 inline mr-2" />
                          Send Message
                        </>
                      )}
                    </button>

                    <p className="text-sm text-gray-500 text-center">
                      We typically respond within 24 hours during business days. 
                      For urgent matters, please call us directly.
                    </p>
                  </form>
                </div>
              </div>

              {/* Contact Information Sidebar */}
              <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                {/* Contact Methods */}
                <div className="space-y-6 mb-8">
                  {contactMethods.map((method, index) => (
                    <a
                      key={index}
                      href={method.action}
                      target={method.action.startsWith('http') ? '_blank' : '_self'}
                      rel={method.action.startsWith('http') ? 'noopener noreferrer' : ''}
                      className={`block ${method.bgColor} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <method.icon className={`w-6 h-6 ${method.color}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900 mb-2">{method.title}</h3>
                          <p className="text-gray-600 text-sm mb-2">{method.description}</p>
                          <p className={`font-semibold ${method.color} mb-1`}>{method.contact}</p>
                          <div className="flex items-center gap-1 text-xs text-gray-500">
                            <ClockIcon className="w-3 h-3" />
                            <span>{method.availability}</span>
                          </div>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Office Hours */}
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <ClockIcon className="w-5 h-5 text-purple-600" />
                    Office Hours
                  </h3>
                  <div className="space-y-3">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                        <span className="text-gray-600 font-medium">{schedule.day}</span>
                        <span className="text-gray-900 font-semibold">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <MapPinIcon className="w-5 h-5 text-purple-600" />
                    Our Location
                  </h3>
                  <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-center">
                      <BuildingOfficeIcon className="w-12 h-12 text-purple-600 mx-auto mb-2" />
                      <p className="text-gray-600 text-sm">Interactive map</p>
                      <p className="text-gray-500 text-xs">Coming soon</p>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p className="font-semibold text-gray-900 mb-2">Back2Nest Office</p>
                    <p>Jagat Narayan Road</p>
                    <p>Patna, Bihar 800003</p>
                    <p>India</p>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Jagat+Narayan+Road,+Patna,+Bihar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors text-center block"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Contact CTA */}
            <section className={`mt-16 transform transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center">
                <h2 className="text-3xl font-bold mb-4">Need Immediate Assistance?</h2>
                <p className="text-xl text-purple-100 mb-8">
                  Our support team is standing by to help you with any urgent questions or concerns.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+918935904820"
                    className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 justify-center"
                  >
                    <PhoneIcon className="w-5 h-5" />
                    Call Now: +91-8935904820
                  </a>
                  <a
                    href="mailto:help@back2nest.in"
                    className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center gap-2 justify-center"
                  >
                    <EnvelopeIcon className="w-5 h-5" />
                    Email: help@back2nest.in
                  </a>
                </div>
                <p className="text-sm text-purple-200 mt-6">
                  You can also use the live chat widget on this page for instant support
                </p>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
