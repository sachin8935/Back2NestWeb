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
  CheckCircleIcon
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

  // Enhanced structured data for help centre and FAQs
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": "https://back2nest.in/help-centre#faqpage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How can I book a school van for my child?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can book a school van through our website by visiting the 'Students' page, filling out the booking form with your child's details, school name, and pickup address. You can also call us at +91-8935904820 for assistance."
            }
          },
          {
            "@type": "Question",
            "name": "Is there live tracking available for school vans?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! Back2Nest provides live GPS tracking through our parent app and web portal. You can monitor your child's journey in real-time, see current location, and get accurate ETAs."
            }
          },
          {
            "@type": "Question",
            "name": "What safety measures does Back2Nest implement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We ensure safety through certified and background-verified drivers, live GPS tracking, in-van camera monitoring, regular vehicle inspections, comprehensive insurance coverage, and 24/7 emergency support."
            }
          },
          {
            "@type": "Question",
            "name": "How much does the school van service cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our pricing varies based on distance, route, and service type. Contact us at +91-8935904820 or help@back2nest.in for a personalized quote based on your requirements."
            }
          },
          {
            "@type": "Question",
            "name": "What areas does Back2Nest serve in Patna?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We serve all major areas of Patna, Bihar including Boring Road, Bailey Road, Fraser Road, Kankarbagh, Rajendra Nagar, and surrounding localities within a 30km radius."
            }
          },
          {
            "@type": "Question",
            "name": "How can I contact customer support?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can reach our customer support via phone at +91-8935904820, email at help@back2nest.in, live chat on our website, or by submitting a query through our help centre contact form."
            }
          }
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://back2nest.in/help-centre#webpage",
        "url": "https://back2nest.in/help-centre",
        "name": "Help Centre - Customer Support & FAQs | Back2Nest Patna Bihar",
        "description": "Get quick assistance and answers to common questions about Back2Nest school transportation services in Patna, Bihar",
        "mainEntity": {
          "@id": "https://back2nest.in/help-centre#faqpage"
        }
      },
      {
        "@type": "ContactPage",
        "@id": "https://back2nest.in/help-centre#contactpage",
        "url": "https://back2nest.in/help-centre",
        "name": "Contact Back2Nest Support",
        "description": "Multiple ways to get in touch with Back2Nest customer support team"
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
        "name": "Help Centre",
        "item": "https://back2nest.in/help-centre"
      }
    ]
  };

  const faqs = [
    {
      id: 1,
      question: "How can I book a school van for my child?",
      answer: "You can book a school van through our website by visiting the 'Students' page, filling out the booking form with your child's details, school name, and pickup address. You can also call us at +91-8935904820 for immediate assistance."
    },
    {
      id: 2,
      question: "Is there live tracking available for school vans?",
      answer: "Yes! Back2Nest provides live GPS tracking through our parent app and web portal. You can monitor your child's journey in real-time, see current location, get accurate ETAs, and receive notifications for pickup and drop-off."
    },
    {
      id: 3,
      question: "What safety measures does Back2Nest implement?",
      answer: "We ensure safety through multiple layers: certified and background-verified drivers, live GPS tracking, in-van camera monitoring, regular vehicle inspections, comprehensive insurance coverage, emergency response protocols, and 24/7 customer support."
    },
    {
      id: 4,
      question: "How much does the school van service cost?",
      answer: "Our pricing varies based on distance, route, and service requirements. We offer competitive rates starting from ₹1,500 per month. Contact us at +91-8935904820 or help@back2nest.in for a personalized quote."
    },
    {
      id: 5,
      question: "What areas does Back2Nest serve in Patna?",
      answer: "We serve all major areas of Patna, Bihar including Boring Road, Bailey Road, Fraser Road, Kankarbagh, Rajendra Nagar, Danapur, and surrounding localities within a 30km radius of Patna city."
    },
    {
      id: 6,
      question: "How can I access the live tracking feature?",
      answer: "Once enrolled, you'll receive login credentials for our parent portal or mobile app. Use your registered mobile number and PIN to access live tracking, view your child's current location, and monitor the journey."
    },
    {
      id: 7,
      question: "What if my child's school changes or they're absent?",
      answer: "You can inform us about school changes or absences through the app, by calling our support line, or via email. We provide flexible scheduling and will adjust routes accordingly."
    },
    {
      id: 8,
      question: "Are the drivers verified and trained?",
      answer: "Absolutely! All our drivers undergo rigorous background verification, safety training, first aid certification, and regular performance evaluations. They're experienced professionals committed to student safety."
    },
    {
      id: 9,
      question: "What happens in case of emergencies?",
      answer: "We have 24/7 emergency support with immediate response protocols. Our vans are equipped with emergency communication systems, and our support team can be reached instantly for any urgent situations."
    },
    {
      id: 10,
      question: "Can I change or cancel my booking?",
      answer: "Yes, you can modify or cancel your booking by contacting our customer support. Changes are subject to availability and our terms of service. We recommend giving advance notice for better accommodation."
    }
  ];

  const contactMethods = [
    {
      icon: PhoneIcon,
      title: "Phone Support",
      description: "Speak directly with our support team",
      contact: "+91-8935904820",
      action: "tel:+918935904820",
      availability: "Mon-Sat, 6AM-8PM",
      color: "text-blue-600"
    },
    {
      icon: EnvelopeIcon,
      title: "Email Support",
      description: "Send us your queries via email",
      contact: "help@back2nest.in",
      action: "mailto:help@back2nest.in",
      availability: "Response within 24 hours",
      color: "text-green-600"
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: "Live Chat",
      description: "Chat with us in real-time",
      contact: "Available on this page",
      action: "#",
      availability: "Mon-Sat, 9AM-7PM",
      color: "text-purple-600"
    }
  ];

  // Filter FAQs based on search
  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFaq = (faqId) => {
    setExpandedFaq(expandedFaq === faqId ? null : faqId);
  };

  if (state.succeeded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center p-8 bg-white rounded-2xl shadow-lg">
          <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for contacting us! We'll get back to you within 24 hours.
          </p>
          <Link 
            to="/help-centre" 
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Help Centre
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title="Help Centre - Customer Support & FAQs | Back2Nest Patna Bihar"
        description="Get quick assistance and answers to common questions about Back2Nest school transportation services in Patna, Bihar. Contact us via phone, email, or live chat for immediate support with booking, tracking, and safety queries."
        keywords="Back2Nest help centre, customer support Patna, school transport FAQ Bihar, Back2Nest contact, school van help, live chat support, help@back2nest.in, customer service Bihar, school transport queries"
        canonicalUrl="https://back2nest.in/help-centre"
        ogTitle="Help Centre - Back2Nest Customer Support & FAQs | School Transport Patna Bihar"
        ogDescription="Access comprehensive help and support for Back2Nest's school transportation services. Browse FAQs, contact support, or chat with us live for immediate assistance."
        ogImage="https://back2nest.in/images/help-centre-og.jpg"
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
        {/* Breadcrumb Navigation */}
        <nav className="container mx-auto px-6 py-4" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-800 font-medium">Help Centre</li>
          </ol>
        </nav>

        <div className="container mx-auto px-6 py-8">
          <main className="max-w-6xl mx-auto">
            {/* Header Section */}
            <header className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                Help Centre
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                How Can We 
                <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  Help You Today?
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Find answers to your questions, get support, or chat with our team. 
                We're here to make your Back2Nest experience smooth and hassle-free in <strong>Patna, Bihar</strong>.
              </p>
            </header>

            {/* Contact Methods */}
            <section className={`mb-16 transform transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                Get In Touch With Us
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.action}
                    className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group text-center"
                  >
                    <div className={`w-16 h-16 ${method.color === 'text-blue-600' ? 'bg-blue-100' : method.color === 'text-green-600' ? 'bg-green-100' : 'bg-purple-100'} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <method.icon className={`w-8 h-8 ${method.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                    <p className="text-gray-600 mb-3">{method.description}</p>
                    <p className={`font-semibold ${method.color} mb-2`}>{method.contact}</p>
                    <div className="flex items-center justify-center gap-1 text-sm text-gray-500">
                      <ClockIcon className="w-4 h-4" />
                      <span>{method.availability}</span>
                    </div>
                  </a>
                ))}
              </div>
            </section>

            {/* FAQ Section */}
            <section className={`mb-16 transform transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                Frequently Asked Questions
              </h2>
              
              {/* FAQ Search */}
              <div className="max-w-md mx-auto mb-8">
                <div className="relative">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search FAQs..."
                    className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                  <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
                </div>
              </div>

              {/* FAQ List */}
              <div className="max-w-4xl mx-auto space-y-4">
                {filteredFaqs.length > 0 ? (
                  filteredFaqs.map((faq) => (
                    <div
                      key={faq.id}
                      className="bg-white rounded-2xl shadow-lg border overflow-hidden"
                      itemScope
                      itemType="https://schema.org/Question"
                    >
                      <button
                        onClick={() => toggleFaq(faq.id)}
                        className="w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-gray-900 pr-4" itemProp="name">
                            {faq.question}
                          </h3>
                          {expandedFaq === faq.id ? (
                            <ChevronUpIcon className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          ) : (
                            <ChevronDownIcon className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          )}
                        </div>
                      </button>
                      
                      {expandedFaq === faq.id && (
                        <div className="px-6 pb-4 border-t bg-gray-50" itemScope itemType="https://schema.org/Answer">
                          <p className="text-gray-700 leading-relaxed pt-4" itemProp="text">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <ExclamationTriangleIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">No FAQs match your search. Try different keywords or contact our support team.</p>
                  </div>
                )}
              </div>
            </section>

            {/* Contact Form */}
            <section className={`mb-16 transform transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="max-w-2xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Still Have Questions?
                    </h2>
                    <p className="text-lg text-gray-600">
                      Send us a message and we'll get back to you within 24 hours.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Enter your full name"
                      />
                      <ValidationError prefix="Name" field="name" errors={state.errors} />
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Enter your email address"
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>

                    {/* Phone Field */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Enter your phone number"
                      />
                      <ValidationError prefix="Phone" field="phone" errors={state.errors} />
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select a subject</option>
                        <option value="Booking Inquiry">Booking Inquiry</option>
                        <option value="Live Tracking Help">Live Tracking Help</option>
                        <option value="Safety Concerns">Safety Concerns</option>
                        <option value="Payment Issues">Payment Issues</option>
                        <option value="Driver Feedback">Driver Feedback</option>
                        <option value="Technical Support">Technical Support</option>
                        <option value="General Question">General Question</option>
                        <option value="Other">Other</option>
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
                        rows="5"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                        placeholder="Please describe your question or concern in detail..."
                      />
                      <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-green-700 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-300 shadow-lg"
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

                    <p className="text-xs text-gray-500 text-center">
                      We typically respond within 24 hours during business days.
                      For urgent matters, please call us at +91-8935904820.
                    </p>
                  </form>
                </div>
              </div>
            </section>

            {/* Additional Help */}
            <section className="text-center">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-4">
                  Need Immediate Assistance?
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Our support team is ready to help you with any urgent queries or concerns.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+918935904820"
                    className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 justify-center"
                  >
                    <PhoneIcon className="w-5 h-5" />
                    Call Now: +91-8935904820
                  </a>
                  <a
                    href="mailto:help@back2nest.in"
                    className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center gap-2 justify-center"
                  >
                    <EnvelopeIcon className="w-5 h-5" />
                    Email: help@back2nest.in
                  </a>
                </div>
                <p className="text-sm text-blue-200 mt-6">
                  You can also use the live chat widget on the bottom right corner of this page
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
