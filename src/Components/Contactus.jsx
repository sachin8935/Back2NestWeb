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
  ExclamationTriangleIcon,
  HomeIcon
} from '@heroicons/react/24/outline';
import SEO from '../Components/SEO';
import ChatWidget from '../Components/ChatWidget';

const ContactUs = () => {
  const [state, handleSubmit] = useForm("mblkavzj");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // FIXED: Enhanced structured data with canonical URL consistency
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://back2nest.in/contact#contactpage",
        "url": "https://back2nest.in/contact", // FIXED: Updated to match route
        "name": "Contact Back2Nest - Customer Support & Service | School Transportation Patna Bihar",
        "description": "Contact Back2Nest customer support for assistance with school transportation services in Patna, Bihar. Professional support team available for booking, tracking, and safety queries.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://back2nest.in#website",
          "url": "https://back2nest.in",
          "name": "Back2Nest - Safe School Transportation"
        },
        "mainEntity": {
          "@id": "https://back2nest.in/contact#organization"
        },
        "breadcrumb": {
          "@id": "https://back2nest.in/contact#breadcrumb"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://back2nest.in/contact#organization",
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
            "areaServed": "Patna, Bihar",
            "availableLanguage": ["English", "Hindi"]
          },
          {
            "@type": "ContactPoint",
            "contactType": "emergency",
            "telephone": "+91-8935904820",
            "areaServed": "Patna, Bihar",
            "hoursAvailable": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            }
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
        "description": "Leading school transportation service provider in Patna, Bihar, committed to safe and reliable student commute solutions",
        "sameAs": [
          "https://www.facebook.com/back2nest",
          "https://x.com/back2_nest",
          "https://www.instagram.com/back2nest"
        ]
      }
    ]
  };

  // FIXED: Breadcrumb structured data with canonical URL
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://back2nest.in/contact#breadcrumb",
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
        "item": "https://back2nest.in/contact" // FIXED: Updated to match route
      }
    ]
  };

  const contactMethods = [
    {
      icon: PhoneIcon,
      title: "Call Our Support Team",
      description: "Speak directly with our customer service experts",
      contact: "+91-8935904820",
      action: "tel:+918935904820",
      availability: "Mon-Sat, 6:00 AM - 8:00 PM",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      priority: "Primary"
    },
    {
      icon: EnvelopeIcon,
      title: "Email Customer Support",
      description: "Send us your queries and get detailed responses",
      contact: "help@back2nest.in",
      action: "mailto:help@back2nest.in",
      availability: "24/7 - Response within 24 hours",
      color: "text-green-600",
      bgColor: "bg-green-50",
      priority: "Secondary"
    },
    {
      icon: MapPinIcon,
      title: "Visit Our Office",
      description: "Meet our team at our Patna office location",
      contact: "Jagat Narayan Road, Patna, Bihar",
      action: "https://maps.google.com/?q=Jagat+Narayan+Road,+Patna,+Bihar",
      availability: "Mon-Sat, 9:00 AM - 6:00 PM",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      priority: "In-Person"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "6:00 AM - 8:00 PM", type: "Full Service" },
    { day: "Saturday", hours: "6:00 AM - 8:00 PM", type: "Full Service" },
    { day: "Sunday", hours: "Emergency Support Only", type: "Emergency" }
  ];

  const quickActions = [
    "Book School Van Service",
    "Track Your Child's Journey",
    "Report Safety Concerns",
    "Payment & Billing Queries",
    "Driver Partner Inquiries",
    "Technical Support"
  ];

  if (state.succeeded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 flex items-center justify-center">
        <div className="max-w-lg mx-auto text-center p-8 bg-white rounded-2xl shadow-xl">
          <CheckCircleIcon className="w-20 h-20 text-green-500 mx-auto mb-6" aria-hidden="true" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h2>
          <p className="text-lg text-gray-600 mb-6">
            Thank you for contacting Back2Nest! We've received your message and our support team will get back to you within 24 hours.
          </p>
          <div className="space-y-4">
            <p className="text-sm text-gray-500">
              For urgent matters, please call us directly at <strong>+91-8935904820</strong>
            </p>
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
              title="Return to Back2Nest homepage"
              aria-label="Go back to homepage"
            >
              <ArrowLeftIcon className="w-5 h-5" aria-hidden="true" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title="Contact Back2Nest - Customer Support & Service | School Transportation Patna Bihar"
        description="Contact Back2Nest customer support for assistance with school transportation services in Patna, Bihar. Reach us via phone +91-8935904820, email help@back2nest.in, or contact form. Quick response guaranteed for booking, tracking, safety queries, and technical support."
        keywords="Back2Nest contact, customer support Patna Bihar, school transport contact, help@back2nest.in, +91-8935904820, contact form, Back2Nest office Patna, school van support Bihar, customer service contact, emergency support, booking assistance"
        canonicalUrl="https://back2nest.in/contact" // FIXED: Updated to match route
        ogTitle="Contact Back2Nest - Customer Support & Service | School Transportation Patna Bihar"
        ogDescription="Get in touch with Back2Nest support team for school transportation assistance in Patna, Bihar. Phone, email, and contact form available with guaranteed quick response."
        ogImage="https://back2nest.in/images/contact-support-og.jpg"
        ogUrl="https://back2nest.in/contact" // FIXED: Added ogUrl to match canonical
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
        {/* FIXED: Enhanced Breadcrumb Navigation with Schema Markup */}
        <nav className="container mx-auto px-6 py-4" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-600" itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link 
                to="/" 
                className="hover:text-purple-600 transition-colors flex items-center gap-1" 
                title="Back2Nest Home - School Transportation Patna"
                itemProp="item"
              >
                <HomeIcon className="w-4 h-4" aria-hidden="true" />
                <span itemProp="name">Home</span>
              </Link>
              <meta itemProp="position" content="1" />
            </li>
            <li aria-hidden="true" className="text-gray-400">/</li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span className="text-gray-800 font-medium" itemProp="name">Contact Us</span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </nav>

        <div className="container mx-auto px-6 py-8">
          <main className="max-w-6xl mx-auto">
            {/* Header Section */}
            <header className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} aria-labelledby="contact-heading">
              <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
                Customer Support & Service
              </div>
              <h1 id="contact-heading" className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Get in Touch 
                <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  With Our Expert Team
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                We're here to help you with all your school transportation needs in <strong>Patna, Bihar</strong>. 
                Our dedicated support team is ready to assist with bookings, live tracking, safety concerns, and any questions about our services. 
                Reach out for support, inquiries, or feedback - we'd love to hear from you!
              </p>
              
              {/* Quick Contact Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm" itemScope itemType="https://schema.org/Statistic">
                  <div className="text-2xl font-bold text-purple-600" itemProp="value">24hrs</div>
                  <div className="text-sm text-gray-600" itemProp="name">Response Time</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm" itemScope itemType="https://schema.org/Statistic">
                  <div className="text-2xl font-bold text-blue-600" itemProp="value">24/7</div>
                  <div className="text-sm text-gray-600" itemProp="name">Emergency Support</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm" itemScope itemType="https://schema.org/Statistic">
                  <div className="text-2xl font-bold text-green-600" itemProp="value">98%</div>
                  <div className="text-sm text-gray-600" itemProp="name">Satisfaction Rate</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm" itemScope itemType="https://schema.org/Statistic">
                  <div className="text-2xl font-bold text-orange-600" itemProp="value">Hindi</div>
                  <div className="text-sm text-gray-600" itemProp="name">Support Available</div>
                </div>
              </div>
            </header>

            <div className="grid lg:grid-cols-3 gap-12">
              {/* Enhanced Contact Form */}
              <div className={`lg:col-span-2 transform transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
                    <p className="text-lg text-gray-600">
                      Fill out the form below and our support team will get back to you as soon as possible. 
                      For urgent matters, please call us directly.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Name Field */}
                      <div>
                        <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                          placeholder="Enter your full name"
                          aria-describedby="name-help"
                        />
                        <ValidationError prefix="Name" field="name" errors={state.errors} />
                        <p id="name-help" className="sr-only">Enter your full name for our records</p>
                      </div>

                      {/* Phone Field */}
                      <div>
                        <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          name="phone"
                          required
                          pattern="[0-9]{10}"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                          placeholder="Enter your 10-digit phone number"
                          aria-describedby="phone-help"
                        />
                        <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                        <p id="phone-help" className="text-xs text-gray-500 mt-1">We'll use this for urgent follow-ups</p>
                      </div>
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        placeholder="Enter your email address"
                        aria-describedby="email-help"
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} />
                      <p id="email-help" className="text-xs text-gray-500 mt-1">We'll send our response to this email</p>
                    </div>

                    {/* Subject Field */}
                    <div>
                      <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        id="contact-subject"
                        name="subject"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        aria-describedby="subject-help"
                      >
                        <option value="">Select the topic of your inquiry</option>
                        <option value="School Van Booking">School Van Booking & Registration</option>
                        <option value="Live Tracking Support">Live Tracking & App Support</option>
                        <option value="Driver Partner Inquiry">Become a Driver Partner</option>
                        <option value="Safety Concerns">Safety Concerns & Incidents</option>
                        <option value="Payment & Pricing">Payment & Pricing Questions</option>
                        <option value="Technical Support">Technical Support & App Issues</option>
                        <option value="Feedback & Suggestions">Feedback & Suggestions</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                      <ValidationError prefix="Subject" field="subject" errors={state.errors} />
                      <p id="subject-help" className="text-xs text-gray-500 mt-1">Select the most relevant topic</p>
                    </div>

                    {/* Message Field */}
                    <div>
                      <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows="6"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                        placeholder="Please describe your question, concern, or feedback in detail. Include any relevant information like student name, route details, or specific dates if applicable."
                        aria-describedby="message-help"
                      />
                      <ValidationError prefix="Message" field="message" errors={state.errors} />
                      <p id="message-help" className="text-xs text-gray-500 mt-1">Provide as much detail as possible for faster resolution</p>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-300 shadow-lg"
                      aria-label={state.submitting ? "Sending your message to Back2Nest" : "Send message to Back2Nest support team"}
                    >
                      {state.submitting ? (
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" aria-hidden="true"></div>
                          Sending Message...
                        </div>
                      ) : (
                        <>
                          <EnvelopeIcon className="w-5 h-5 inline mr-2" aria-hidden="true" />
                          Send Message to Support Team
                        </>
                      )}
                    </button>

                    <p className="text-sm text-gray-500 text-center">
                      We typically respond within 24 hours during business days. 
                      For urgent matters, please call us directly at <strong>+91-8935904820</strong>.
                    </p>
                  </form>
                </div>
              </div>

              {/* Enhanced Contact Information Sidebar */}
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
                      title={`${method.title} - ${method.contact}`}
                      aria-label={`${method.title}: ${method.contact}`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform" aria-hidden="true">
                          <method.icon className={`w-6 h-6 ${method.color}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-bold text-gray-900">{method.title}</h3>
                            <span className="px-2 py-1 bg-white/50 text-xs font-medium rounded-full">
                              {method.priority}
                            </span>
                          </div>
                          <p className="text-gray-600 text-sm mb-2">{method.description}</p>
                          <p className={`font-semibold ${method.color} mb-1`}>{method.contact}</p>
                          <div className="flex items-center gap-1 text-xs text-gray-500">
                            <ClockIcon className="w-3 h-3" aria-hidden="true" />
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
                    <ClockIcon className="w-5 h-5 text-purple-600" aria-hidden="true" />
                    Office Hours & Availability
                  </h3>
                  <div className="space-y-3">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                        <div>
                          <span className="text-gray-600 font-medium block">{schedule.day}</span>
                          <span className="text-xs text-gray-500">{schedule.type}</span>
                        </div>
                        <span className="text-gray-900 font-semibold">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <ChatBubbleLeftRightIcon className="w-5 h-5 text-purple-600" aria-hidden="true" />
                    Common Inquiries
                  </h3>
                  <div className="space-y-2">
                    {quickActions.map((action, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-700 hover:text-purple-600 transition-colors">
                        <div className="w-1.5 h-1.5 bg-purple-600 rounded-full" aria-hidden="true"></div>
                        <span>{action}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enhanced Map Section */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <MapPinIcon className="w-5 h-5 text-purple-600" aria-hidden="true" />
                    Visit Our Office
                  </h3>
                  <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-center">
                      <BuildingOfficeIcon className="w-12 h-12 text-purple-600 mx-auto mb-2" aria-hidden="true" />
                      <p className="text-gray-600 text-sm">Interactive Map</p>
                      <p className="text-gray-500 text-xs">Loading Location</p>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p className="font-semibold text-gray-900 mb-2">Back2Nest Corporate Office</p>
                    <p>Jagat Narayan Road</p>
                    <p>Patna, Bihar 800003</p>
                    <p>India</p>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Jagat+Narayan+Road,+Patna,+Bihar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors text-center block"
                    title="View Back2Nest office location on Google Maps"
                    aria-label="Open Google Maps to view our office location"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Internal Links Section */}
            <section className="mt-16 mb-12" aria-labelledby="explore-more">
              <h2 id="explore-more" className="text-3xl font-bold text-gray-900 text-center mb-8">
                Explore More About Back2Nest Services
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Link to="/safety" className="block group">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center" aria-hidden="true">
                        <CheckCircleIcon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Safety Features</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Discover our comprehensive safety measures including live GPS tracking, certified drivers, vehicle inspections, and emergency protocols.
                    </p>
                  </div>
                </Link>

                <Link to="/about" className="block group">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center" aria-hidden="true">
                        <BuildingOfficeIcon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">About Back2Nest</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Learn about our mission, founder Sachin Kumar's vision, and how we're revolutionizing school transportation in Patna, Bihar.
                    </p>
                  </div>
                </Link>

                <Link to="/blogs" className="block group">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center" aria-hidden="true">
                        <ChatBubbleLeftRightIcon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Blog & Resources</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Read expert insights, safety tips, and latest updates about school transportation innovations and best practices.
                    </p>
                  </div>
                </Link>
              </div>
            </section>

            {/* Enhanced Quick Contact CTA */}
            <section className={`text-center transform transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} aria-labelledby="quick-contact">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
                <h2 id="quick-contact" className="text-3xl font-bold mb-4">
                  Need Immediate Assistance?
                </h2>
                <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                  Our dedicated support team is standing by to help you with any urgent questions, safety concerns, 
                  or technical issues. We're committed to providing quick, professional assistance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+918935904820"
                    className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 justify-center"
                    title="Call Back2Nest support team immediately"
                    aria-label="Call Back2Nest support at +91-8935904820"
                  >
                    <PhoneIcon className="w-5 h-5" aria-hidden="true" />
                    Call Now: +91-8935904820
                  </a>
                  <a
                    href="mailto:help@back2nest.in"
                    className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center gap-2 justify-center"
                    title="Send email to Back2Nest support team"
                    aria-label="Email Back2Nest support at help@back2nest.in"
                  >
                    <EnvelopeIcon className="w-5 h-5" aria-hidden="true" />
                    Email: help@back2nest.in
                  </a>
                </div>
                <p className="text-sm text-purple-200 mt-6">
                  You can also use the live chat widget on this page for instant support and quick answers
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
