import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm, ValidationError } from '@formspree/react';
import { 
  ArrowLeftIcon,
  QuestionMarkCircleIcon,
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  PhoneIcon,
  ClockIcon,
  UserIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  MagnifyingGlassIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  HomeIcon,
  BookOpenIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';
import SEO from '../Components/SEO';
import ChatWidget from './ChatWidget';

const HelpCentre = () => {
  const [state, handleSubmit] = useForm("mblkavzj");
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // FIXED: Enhanced structured data with canonical URL consistency
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": "https://back2nest.in/help#faqpage", // FIXED: Updated to match route
        "url": "https://back2nest.in/help", // FIXED: Updated to match route
        "name": "Back2Nest Help Centre - Customer Support & FAQs | School Transport Patna Bihar",
        "description": "Comprehensive help center with FAQs and support for Back2Nest school transportation services in Patna, Bihar.",
        "inLanguage": "en-IN",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://back2nest.in#website",
          "url": "https://back2nest.in",
          "name": "Back2Nest - Safe School Transportation"
        },
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How can I book a school van for my child in Patna?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can book a school van through our website by visiting the 'Students' page, filling out the booking form with your child's details, school name, and pickup address. You can also call us at +91-8935904820 for immediate assistance with booking in Patna, Bihar."
            }
          },
          {
            "@type": "Question",
            "name": "Is there live GPS tracking available for school vans?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! Back2Nest provides comprehensive live GPS tracking through our parent app and web portal. You can monitor your child's journey in real-time, see current location, get accurate ETAs, and receive instant notifications for pickup and drop-off."
            }
          },
          {
            "@type": "Question",
            "name": "What safety measures does Back2Nest implement for student transportation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We ensure safety through multiple layers: certified and background-verified drivers, live GPS tracking, in-van camera monitoring, regular vehicle inspections, comprehensive insurance coverage, emergency response protocols, and 24/7 customer support for complete peace of mind."
            }
          },
          {
            "@type": "Question",
            "name": "How much does the school van service cost in Patna?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our pricing varies based on distance, route, and service requirements. We offer competitive rates starting from ₹1,500 per month for school transportation in Patna. Contact us at +91-8935904820 or help@back2nest.in for a personalized quote."
            }
          },
          {
            "@type": "Question",
            "name": "What areas does Back2Nest serve in Patna and Bihar?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We serve all major areas of Patna, Bihar including Boring Road, Bailey Road, Fraser Road, Kankarbagh, Rajendra Nagar, Danapur, and surrounding localities within a 30km radius of Patna city."
            }
          },
          {
            "@type": "Question",
            "name": "How can I contact Back2Nest customer support?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can reach our customer support via phone at +91-8935904820, email at help@back2nest.in, live chat on our website, or by submitting a query through our help centre contact form. We provide 24/7 emergency support."
            }
          }
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://back2nest.in/help#webpage", // FIXED: Updated to match route
        "url": "https://back2nest.in/help", // FIXED: Updated to match route
        "name": "Help Centre - Customer Support & FAQs | Back2Nest Patna Bihar",
        "description": "Get quick assistance and answers to common questions about Back2Nest school transportation services in Patna, Bihar. Contact support, browse FAQs, and get live help.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://back2nest.in#website",
          "url": "https://back2nest.in",
          "name": "Back2Nest - Safe School Transportation"
        },
        "mainEntity": {
          "@id": "https://back2nest.in/help#faqpage"
        },
        "breadcrumb": {
          "@id": "https://back2nest.in/help#breadcrumb"
        }
      },
      {
        "@type": "ContactPage",
        "@id": "https://back2nest.in/help#contactpage",
        "url": "https://back2nest.in/help", // FIXED: Updated to match route
        "name": "Contact Back2Nest Support",
        "description": "Multiple ways to get in touch with Back2Nest customer support team for school transportation assistance"
      }
    ]
  };

  // FIXED: Breadcrumb structured data with canonical URL
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://back2nest.in/help#breadcrumb",
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
        "name": "Help Centre",
        "item": "https://back2nest.in/help" // FIXED: Updated to match route
      }
    ]
  };

  // Enhanced FAQ data with more comprehensive answers
  const faqs = [
    {
      id: 1,
      question: "How can I book a school van for my child in Patna?",
      answer: "You can book a school van through our website by visiting the 'Students' page, filling out the booking form with your child's details, school name, and pickup address. You can also call us at +91-8935904820 for immediate assistance. Our team will help you choose the best route and provide pricing information based on your location in Patna.",
      category: "Booking"
    },
    {
      id: 2,
      question: "Is there live GPS tracking available for school vans?",
      answer: "Yes! Back2Nest provides comprehensive live GPS tracking through our parent app and web portal. You can monitor your child's journey in real-time, see current location, get accurate ETAs, receive notifications for pickup and drop-off, and access historical trip data for complete transparency.",
      category: "Tracking"
    },
    {
      id: 3,
      question: "What safety measures does Back2Nest implement for student transportation?",
      answer: "We ensure safety through multiple layers: certified and background-verified drivers with police clearance, live GPS tracking systems, in-van camera monitoring, regular vehicle inspections and maintenance, comprehensive insurance coverage, emergency response protocols, first aid trained drivers, and 24/7 customer support for immediate assistance.",
      category: "Safety"
    },
    {
      id: 4,
      question: "How much does the school van service cost in Patna?",
      answer: "Our pricing varies based on distance, route, and service requirements. We offer competitive rates starting from ₹1,500 per month for standard school transportation in Patna. Pricing includes live tracking, insurance coverage, and professional driver services. Contact us at +91-8935904820 or help@back2nest.in for a personalized quote based on your specific needs.",
      category: "Pricing"
    },
    {
      id: 5,
      question: "What areas does Back2Nest serve in Patna and Bihar?",
      answer: "We serve all major areas of Patna, Bihar including Boring Road, Bailey Road, Fraser Road, Kankarbagh, Rajendra Nagar, Danapur, Khagaul, Fatuha, and surrounding localities within a 30km radius of Patna city. We're continuously expanding our service area to cover more locations across Bihar.",
      category: "Service Area"
    },
    {
      id: 6,
      question: "How can I access the live tracking feature?",
      answer: "Once enrolled, you'll receive login credentials for our parent portal or mobile app. Use your registered mobile number and PIN to access live tracking features, view your child's current location, monitor the journey progress, and receive real-time notifications about pickup and drop-off status.",
      category: "Tracking"
    },
    {
      id: 7,
      question: "What if my child's school changes or they're absent?",
      answer: "You can inform us about school changes, absences, or schedule modifications through the app, by calling our support line at +91-8935904820, or via email at help@back2nest.in. We provide flexible scheduling and will adjust routes accordingly. For planned absences, please notify us at least 24 hours in advance.",
      category: "Scheduling"
    },
    {
      id: 8,
      question: "Are the drivers verified and professionally trained?",
      answer: "Absolutely! All our drivers undergo rigorous background verification including police clearance, safety training programs, first aid certification, defensive driving courses, and regular performance evaluations. They're experienced professionals committed to student safety and have valid commercial driving licenses.",
      category: "Drivers"
    },
    {
      id: 9,
      question: "What happens in case of emergencies during transportation?",
      answer: "We have comprehensive 24/7 emergency support with immediate response protocols. Our vans are equipped with emergency communication systems, GPS tracking for instant location identification, and our support team can be reached instantly for any urgent situations. All drivers are trained in basic first aid and emergency procedures.",
      category: "Emergency"
    },
    {
      id: 10,
      question: "Can I change or cancel my booking? What's the refund policy?",
      answer: "Yes, you can modify or cancel your booking by contacting our customer support at +91-8935904820. Changes are subject to availability and our terms of service. We recommend giving advance notice for better accommodation. For detailed refund policies, please refer to our terms and conditions or contact support.",
      category: "Booking"
    },
    {
      id: 11,
      question: "How do I download and use the Back2Nest mobile app?",
      answer: "You can download the Back2Nest app from Google Play Store. After enrollment, you'll receive login credentials. The app allows you to track your child's journey in real-time, receive notifications, communicate with drivers, view trip history, and manage your booking details conveniently.",
      category: "App"
    },
    {
      id: 12,
      question: "What insurance coverage is provided for students?",
      answer: "All students are covered under comprehensive insurance during their journey with Back2Nest. This includes medical coverage for accidents, personal injury protection, and liability coverage. Our insurance policy is designed specifically for student transportation to ensure maximum protection.",
      category: "Insurance"
    }
  ];

  const contactMethods = [
    {
      icon: PhoneIcon,
      title: "Phone Support",
      description: "Speak directly with our support team",
      contact: "+91-8935904820",
      action: "tel:+918935904820",
      availability: "Mon-Sat, 6:00 AM - 8:00 PM",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: EnvelopeIcon,
      title: "Email Support",
      description: "Send us your queries via email",
      contact: "help@back2nest.in",
      action: "mailto:help@back2nest.in",
      availability: "24/7 - Response within 24 hours",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: "Live Chat",
      description: "Chat with us in real-time",
      contact: "Available on this page",
      action: "#",
      availability: "Mon-Sat, 9:00 AM - 7:00 PM",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    }
  ];

  // Filter FAQs based on search
  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFaq = (faqId) => {
    setExpandedFaq(expandedFaq === faqId ? null : faqId);
  };

  const helpfulResources = [
    {
      title: "Booking Guide",
      description: "Step-by-step guide to book school van service",
      link: "/students",
      icon: BookOpenIcon
    },
    {
      title: "Safety Features",
      description: "Learn about our comprehensive safety measures",
      link: "/safety",
      icon: ShieldCheckIcon
    },
    {
      title: "Contact Support",
      description: "Get in touch with our customer support team",
      link: "/contact",
      icon: ChatBubbleLeftRightIcon
    }
  ];

  if (state.succeeded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 flex items-center justify-center">
        <div className="max-w-lg mx-auto text-center p-8 bg-white rounded-2xl shadow-xl">
          <CheckCircleIcon className="w-20 h-20 text-green-500 mx-auto mb-6" aria-hidden="true" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h2>
          <p className="text-lg text-gray-600 mb-6">
            Thank you for contacting our support team! We've received your message and will get back to you within 24 hours.
          </p>
          <div className="space-y-4">
            <p className="text-sm text-gray-500">
              For urgent matters, please call us directly at <strong>+91-8935904820</strong>
            </p>
            <Link 
              to="/help" 
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
              title="Return to Back2Nest Help Centre"
              aria-label="Go back to help centre"
            >
              <ArrowLeftIcon className="w-5 h-5" aria-hidden="true" />
              Back to Help Centre
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title="Help Centre - Customer Support & FAQs | Back2Nest Patna Bihar"
        description="Get quick assistance and answers to common questions about Back2Nest school transportation services in Patna, Bihar. Contact us via phone, email, or live chat for immediate support with booking, tracking, safety queries, and technical assistance. Comprehensive FAQ section available."
        keywords="Back2Nest help centre, customer support Patna, school transport FAQ Bihar, Back2Nest contact, school van help, live chat support, help@back2nest.in, customer service Bihar, school transport queries, booking help, tracking support, safety questions"
        canonicalUrl="https://back2nest.in/help" // FIXED: Updated to match route
        ogTitle="Help Centre - Back2Nest Customer Support & FAQs | School Transport Patna Bihar"
        ogDescription="Access comprehensive help and support for Back2Nest's school transportation services. Browse detailed FAQs, contact support team, or chat with us live for immediate assistance."
        ogImage="https://back2nest.in/images/help-support-og.jpg"
        ogUrl="https://back2nest.in/help" // FIXED: Added ogUrl to match canonical
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

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        {/* FIXED: Enhanced Breadcrumb Navigation with Schema Markup */}
        <nav className="container mx-auto px-6 py-4" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-600" itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link 
                to="/" 
                className="hover:text-blue-600 transition-colors flex items-center gap-1" 
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
              <span className="text-gray-800 font-medium" itemProp="name">Help Centre</span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </nav>

        <div className="container mx-auto px-6 py-8">
          <main className="max-w-6xl mx-auto">
            {/* Header Section */}
            <header className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} aria-labelledby="help-heading">
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                Customer Support & Help Centre
              </div>
              <h1 id="help-heading" className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                How Can We 
                <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  Help You Today?
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                Find answers to your questions, get expert support, or chat with our team. 
                We're here to make your Back2Nest experience smooth and hassle-free in <strong>Patna, Bihar</strong>. 
                Browse our comprehensive FAQ section or contact our support team for personalized assistance.
              </p>
              
              {/* Help Centre Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm" itemScope itemType="https://schema.org/Statistic">
                  <div className="text-2xl font-bold text-blue-600" itemProp="value">24hrs</div>
                  <div className="text-sm text-gray-600" itemProp="name">Response Time</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm" itemScope itemType="https://schema.org/Statistic">
                  <div className="text-2xl font-bold text-green-600" itemProp="value">95%</div>
                  <div className="text-sm text-gray-600" itemProp="name">Issue Resolution</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm" itemScope itemType="https://schema.org/Statistic">
                  <div className="text-2xl font-bold text-purple-600" itemProp="value">24/7</div>
                  <div className="text-sm text-gray-600" itemProp="name">Emergency Support</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm" itemScope itemType="https://schema.org/Statistic">
                  <div className="text-2xl font-bold text-orange-600" itemProp="value">Hindi</div>
                  <div className="text-sm text-gray-600" itemProp="name">Support Available</div>
                </div>
              </div>
            </header>

            {/* Enhanced Contact Methods */}
            <section className={`mb-16 transform transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} aria-labelledby="contact-methods">
              <h2 id="contact-methods" className="text-3xl font-bold text-gray-900 text-center mb-12">
                Multiple Ways to Get Support
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.action}
                    className={`${method.bgColor} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group text-center block`}
                    title={`${method.title} - ${method.contact}`}
                    aria-label={`Contact Back2Nest via ${method.title.toLowerCase()}`}
                  >
                    <div className={`w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`} aria-hidden="true">
                      <method.icon className={`w-8 h-8 ${method.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                    <p className="text-gray-600 mb-3">{method.description}</p>
                    <p className={`font-semibold ${method.color} mb-2`}>{method.contact}</p>
                    <div className="flex items-center justify-center gap-1 text-sm text-gray-500">
                      <ClockIcon className="w-4 h-4" aria-hidden="true" />
                      <span>{method.availability}</span>
                    </div>
                  </a>
                ))}
              </div>
            </section>

            {/* Enhanced FAQ Section */}
            <section className={`mb-16 transform transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} aria-labelledby="faq-section">
              <h2 id="faq-section" className="text-3xl font-bold text-gray-900 text-center mb-8">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 text-center mb-8 max-w-2xl mx-auto">
                Find quick answers to common questions about our school transportation services, 
                booking process, safety measures, and more.
              </p>
              
              {/* Enhanced FAQ Search */}
              <div className="max-w-md mx-auto mb-8">
                <div className="relative">
                  <label htmlFor="faq-search" className="sr-only">Search FAQs</label>
                  <input
                    id="faq-search"
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search FAQs by topic, category, or keyword..."
                    className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    aria-label="Search frequently asked questions"
                  />
                  <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" aria-hidden="true" />
                </div>
              </div>

              {/* Enhanced FAQ List */}
              <div className="max-w-4xl mx-auto space-y-4">
                {filteredFaqs.length > 0 ? (
                  filteredFaqs.map((faq) => (
                    <div
                      key={faq.id}
                      className="bg-white rounded-2xl shadow-lg border overflow-hidden hover:shadow-xl transition-shadow duration-300"
                      itemScope
                      itemType="https://schema.org/Question"
                    >
                      <button
                        onClick={() => toggleFaq(faq.id)}
                        className="w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-50 transition-colors"
                        aria-expanded={expandedFaq === faq.id}
                        aria-controls={`faq-answer-${faq.id}`}
                        aria-label={`Toggle answer for: ${faq.question}`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1 pr-4">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                                {faq.category}
                              </span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900" itemProp="name">
                              {faq.question}
                            </h3>
                          </div>
                          {expandedFaq === faq.id ? (
                            <ChevronUpIcon className="w-5 h-5 text-gray-500 flex-shrink-0" aria-hidden="true" />
                          ) : (
                            <ChevronDownIcon className="w-5 h-5 text-gray-500 flex-shrink-0" aria-hidden="true" />
                          )}
                        </div>
                      </button>
                      
                      {expandedFaq === faq.id && (
                        <div 
                          id={`faq-answer-${faq.id}`}
                          className="px-6 pb-4 border-t bg-gray-50" 
                          itemScope 
                          itemType="https://schema.org/Answer"
                        >
                          <p className="text-gray-700 leading-relaxed pt-4" itemProp="text">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <ExclamationTriangleIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" aria-hidden="true" />
                    <p className="text-gray-600 mb-4">No FAQs match your search. Try different keywords or browse all questions.</p>
                    <button 
                      onClick={() => setSearchTerm('')}
                      className="text-blue-600 hover:text-blue-800 underline font-medium"
                    >
                      Clear search and view all FAQs
                    </button>
                  </div>
                )}
              </div>
            </section>

            {/* Helpful Resources Section */}
            <section className={`mb-16 transform transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} aria-labelledby="helpful-resources">
              <h2 id="helpful-resources" className="text-3xl font-bold text-gray-900 text-center mb-8">
                Helpful Resources
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {helpfulResources.map((resource, index) => (
                  <Link
                    key={index}
                    to={resource.link}
                    className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                    title={resource.title}
                    aria-label={resource.description}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center" aria-hidden="true">
                        <resource.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">{resource.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{resource.description}</p>
                  </Link>
                ))}
              </div>
            </section>

            {/* Enhanced Contact Form */}
            <section className={`mb-16 transform transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} aria-labelledby="contact-form">
              <div className="max-w-2xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <div className="text-center mb-8">
                    <h2 id="contact-form" className="text-3xl font-bold text-gray-900 mb-4">
                      Still Have Questions?
                    </h2>
                    <p className="text-lg text-gray-600">
                      Can't find what you're looking for? Send us a detailed message and our support team will get back to you within 24 hours.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    {/* Name Field */}
                    <div>
                      <label htmlFor="help-name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        id="help-name"
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Enter your full name"
                        aria-describedby="name-help"
                      />
                      <ValidationError prefix="Name" field="name" errors={state.errors} />
                      <p id="name-help" className="sr-only">Enter your full name for our records</p>
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="help-email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        id="help-email"
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Enter your email address"
                        aria-describedby="email-help"
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} />
                      <p id="email-help" className="text-xs text-gray-500 mt-1">We'll send our response to this email address</p>
                    </div>

                    {/* Phone Field */}
                    <div>
                      <label htmlFor="help-phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        id="help-phone"
                        type="tel"
                        name="phone"
                        pattern="[0-9]{10}"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Enter your 10-digit phone number"
                        aria-describedby="phone-help"
                      />
                      <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                      <p id="phone-help" className="text-xs text-gray-500 mt-1">Optional - for urgent follow-ups</p>
                    </div>

                    {/* Subject Field */}
                    <div>
                      <label htmlFor="help-subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        id="help-subject"
                        name="subject"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        aria-describedby="subject-help"
                      >
                        <option value="">Select the topic of your inquiry</option>
                        <option value="Booking Inquiry">Booking Inquiry & Registration</option>
                        <option value="Live Tracking Help">Live Tracking & App Support</option>
                        <option value="Safety Concerns">Safety Concerns & Incidents</option>
                        <option value="Payment Issues">Payment & Billing Questions</option>
                        <option value="Driver Feedback">Driver Feedback & Service Quality</option>
                        <option value="Technical Support">Technical Support & App Issues</option>
                        <option value="General Question">General Question</option>
                        <option value="Other">Other</option>
                      </select>
                      <ValidationError prefix="Subject" field="subject" errors={state.errors} />
                      <p id="subject-help" className="text-xs text-gray-500 mt-1">Select the most relevant topic</p>
                    </div>

                    {/* Message Field */}
                    <div>
                      <label htmlFor="help-message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="help-message"
                        name="message"
                        rows="5"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                        placeholder="Please describe your question, concern, or feedback in detail. Include any relevant information like student name, school details, or specific dates if applicable..."
                        aria-describedby="message-help"
                      />
                      <ValidationError prefix="Message" field="message" errors={state.errors} />
                      <p id="message-help" className="text-xs text-gray-500 mt-1">Provide as much detail as possible for faster resolution</p>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-green-700 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-300 shadow-lg"
                      aria-label={state.submitting ? "Sending your message to Back2Nest support" : "Send message to Back2Nest support team"}
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

                    <p className="text-xs text-gray-500 text-center">
                      We typically respond within 24 hours during business days. 
                      For urgent matters, please call us directly at <strong>+91-8935904820</strong>.
                    </p>
                  </form>
                </div>
              </div>
            </section>

            {/* Enhanced Immediate Assistance CTA */}
            <section className="text-center" aria-labelledby="immediate-help">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
                <h2 id="immediate-help" className="text-3xl font-bold mb-4">
                  Need Immediate Assistance?
                </h2>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Our dedicated support team is ready to help you with any urgent queries, safety concerns, 
                  or technical issues. We're committed to providing quick, professional assistance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+918935904820"
                    className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 justify-center"
                    title="Call Back2Nest support team for immediate assistance"
                    aria-label="Call Back2Nest support at +91-8935904820"
                  >
                    <PhoneIcon className="w-5 h-5" aria-hidden="true" />
                    Call Now: +91-8935904820
                  </a>
                  <a
                    href="mailto:help@back2nest.in"
                    className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center gap-2 justify-center"
                    title="Email Back2Nest support team"
                    aria-label="Email Back2Nest support at help@back2nest.in"
                  >
                    <EnvelopeIcon className="w-5 h-5" aria-hidden="true" />
                    Email: help@back2nest.in
                  </a>
                </div>
                <p className="text-sm text-blue-200 mt-6">
                  You can also use the live chat widget on the bottom right corner of this page for instant support
                </p>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default HelpCentre;
