import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeftIcon,
  CurrencyDollarIcon,
  ClockIcon,
  ShieldCheckIcon,
  DocumentCheckIcon,
  TruckIcon,
  PhoneIcon,
  StarIcon,
  CheckCircleIcon,
  ArrowDownTrayIcon,
  PlayIcon
} from '@heroicons/react/24/outline';
import SEO from '../Components/SEO';

const Driver = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Enhanced structured data for driver recruitment
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "JobPosting",
        "@id": "https://back2nest.in/driver#jobposting",
        "title": "Professional School Van Driver - Back2Nest Patna Bihar",
        "description": "Join Back2Nest as a professional school van driver in Patna, Bihar. Earn ₹25,000-₹40,000/month with flexible hours, training provided, and vehicle support. Perfect opportunity for car/van owners to monetize their vehicles.",
        "hiringOrganization": {
          "@type": "Organization",
          "name": "Back2Nest",
          "url": "https://back2nest.in",
          "logo": "https://back2nest.in/assets/logo.png"
        },
        "jobLocation": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Jagat Narayan Road",
            "addressLocality": "Patna",
            "addressRegion": "Bihar",
            "postalCode": "800003",
            "addressCountry": "IN"
          }
        },
        "employmentType": ["FULL_TIME", "PART_TIME"],
        "workHours": "06:00-20:00",
        "baseSalary": {
          "@type": "MonetaryAmount",
          "currency": "INR",
          "value": {
            "@type": "QuantitativeValue",
            "minValue": 25000,
            "maxValue": 40000,
            "unitText": "MONTH"
          }
        },
        "benefits": "Training, Insurance, Fuel Allowance, Performance Bonuses",
        "qualifications": "Valid driving license, clean driving record, own vehicle preferred",
        "datePosted": "2025-01-04",
        "validThrough": "2025-12-31"
      },
      {
        "@type": "WebPage",
        "@id": "https://back2nest.in/driver#webpage",
        "url": "https://back2nest.in/driver",
        "name": "Driver Partner Program - Earn Money with Back2Nest Patna Bihar",
        "description": "Join Back2Nest driver network in Patna, Bihar. Monetize your car/van, earn steady income, flexible hours. Download our partner app and start earning today!"
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
        "name": "Driver Partner Program",
        "item": "https://back2nest.in/driver"
      }
    ]
  };

  const benefits = [
    {
      icon: CurrencyDollarIcon,
      title: "Earn ₹25K - ₹40K/Month",
      description: "Competitive monthly compensation with performance bonuses",
      highlight: "High Income"
    },
    {
      icon: ClockIcon,
      title: "Flexible Hours",
      description: "Work around your schedule, morning and evening shifts",
      highlight: "Work-Life Balance"
    },
    {
      icon: ShieldCheckIcon,
      title: "Complete Training",
      description: "Free safety training and certification provided",
      highlight: "Free Training"
    },
    {
      icon: TruckIcon,
      title: "Vehicle Support",
      description: "Fuel allowance and maintenance guidance",
      highlight: "Support Included"
    },
    {
      icon: StarIcon,
      title: "Performance Rewards",
      description: "Extra bonuses for excellent service and ratings",
      highlight: "Bonus Earnings"
    },
    {
      icon: PhoneIcon,
      title: "24/7 Support",
      description: "Dedicated support team always available",
      highlight: "Always Supported"
    }
  ];

  const requiredDocuments = [
    "Valid driving license (minimum 3 years)",
    "Clean driving record (no major violations)",
    "Vehicle registration certificate",
    "Valid vehicle insurance",
    "Police verification certificate",
    "Aadhaar card and PAN card",
    "Bank account details for payments"
  ];

  const processSteps = [
    {
      step: "1",
      title: "Download Partner App",
      description: "Get our free partner app and complete registration",
      color: "bg-blue-500"
    },
    {
      step: "2", 
      title: "Submit Documents",
      description: "Upload required documents for verification",
      color: "bg-green-500"
    },
    {
      step: "3",
      title: "Complete Training",
      description: "Attend our free safety and service training",
      color: "bg-purple-500"
    },
    {
      step: "4",
      title: "Start Earning",
      description: "Get matched with routes and start earning immediately",
      color: "bg-orange-500"
    }
  ];

  return (
    <>
      <SEO 
        title="Driver Partner Program | Back2Nest Patna Bihar - Earn ₹25K-₹40K Monthly with Your Vehicle"
        description="Join Back2Nest driver network in Patna, Bihar! Monetize your car/van, earn ₹25,000-₹40,000 monthly with flexible hours. Free training, fuel allowance, performance bonuses. Perfect for vehicle owners wanting steady income. Download partner app now!"
        keywords="driver jobs Patna, earn money with car Bihar, school van driver Patna, vehicle monetization Bihar, part time driving jobs Patna, Back2Nest driver partner, earn from vehicle Bihar, flexible driving jobs Patna, school transport driver Bihar"
        canonicalUrl="https://back2nest.in/driver"
        ogTitle="Earn Money as Back2Nest Driver Partner in Patna Bihar | ₹25K-₹40K Monthly"
        ogDescription="Turn your vehicle into income! Join 500+ drivers earning with Back2Nest in Patna. Flexible hours, free training, fuel support. Download partner app and start earning today!"
        ogImage="https://back2nest.in/images/driver-partner.jpg"
        structuredData={structuredData}
        breadcrumbData={breadcrumbData}
        additionalMeta={{
          'geo.region': 'IN-BR',
          'geo.placename': 'Patna, Bihar, India',
          'geo.position': '25.617001;85.157219',
          'ICBM': '25.617001, 85.157219'
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
        {/* Breadcrumb Navigation */}
        <nav className="container mx-auto px-6 py-4" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link to="/" className="hover:text-purple-600 transition-colors">Home</Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-800 font-medium">Driver Partner Program</li>
          </ol>
        </nav>

        <div className="container mx-auto px-6 py-8">
          <main className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <header className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
                Driver Partner Program
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Turn Your Vehicle Into 
                <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Steady Income
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Join 500+ drivers earning <strong>₹25,000 - ₹40,000 monthly</strong> with Back2Nest in Patna, Bihar. 
                Perfect for car/van owners wanting flexible work and guaranteed income.
              </p>
              
              {/* App Download CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="https://play.google.com/store/apps/details?id=com.back2nest.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 justify-center"
                >
                  <PlayIcon className="w-6 h-6" />
                  Download Partner App
                  <ArrowDownTrayIcon className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
                </a>
                <a
                  href="tel:+918935904820"
                  className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-600 hover:text-white transition-all duration-300 flex items-center gap-2 justify-center"
                >
                  <PhoneIcon className="w-5 h-5" />
                  Call Us Now
                </a>
              </div>
            </header>

            {/* Benefits Section */}
            <section className={`mb-16 transform transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                Why Drive with Back2Nest?
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border hover:border-purple-200"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-purple-100 rounded-lg">
                        <benefit.icon className="w-8 h-8 text-purple-600" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-bold text-gray-900">{benefit.title}</h3>
                          <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">
                            {benefit.highlight}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Process Steps */}
            <section className={`mb-16 transform transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                How to Get Started (Simple 4-Step Process)
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {processSteps.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
                      <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4`}>
                        {step.step}
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-6">
                        <div className="w-full h-0.5 bg-gray-300 mt-3"></div>
                        <div className="absolute right-0 top-2 w-2 h-2 bg-gray-300 rounded-full transform rotate-45"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Requirements Section */}
            <section className={`mb-16 transform transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                  Required Documents (Easy to Arrange)
                </h2>
                <div className="max-w-3xl mx-auto">
                  <div className="grid md:grid-cols-2 gap-6">
                    {requiredDocuments.map((doc, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{doc}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                    <p className="text-blue-800 text-center font-medium">
                      📝 Don't worry! Our team will guide you through the documentation process step by step.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* App Download Section */}
            <section className={`mb-16 transform transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Start Earning?</h2>
                <p className="text-xl text-purple-100 mb-8">
                  Download our free partner app and join hundreds of drivers already earning with Back2Nest
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.back2nest.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 justify-center"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    Download for Android
                  </a>
                  <a
                    href="tel:+918935904820"
                    className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center gap-2 justify-center"
                  >
                    <PhoneIcon className="w-5 h-5" />
                    Call for Support
                  </a>
                </div>
              </div>
            </section>

            {/* Trust Indicators */}
            <section className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Join Our Growing Driver Network in Patna
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
                  <div className="text-gray-600">Active Drivers</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">₹35K</div>
                  <div className="text-gray-600">Average Monthly Earning</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">4.8★</div>
                  <div className="text-gray-600">Driver Satisfaction</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                  <div className="text-gray-600">Support Available</div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default Driver;
