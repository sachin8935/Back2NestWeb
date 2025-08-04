import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeftIcon,
  MapPinIcon,
  CheckCircleIcon,
  StarIcon,
  CurrencyDollarIcon,
  CalendarDaysIcon,
  TruckIcon,
  ShieldCheckIcon,
  VideoCameraIcon,
  SignalIcon,
  PhoneIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import SEO from '../Components/SEO';

const Pricing = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedDistance, setSelectedDistance] = useState('5-10 km');
  const [selectedPackage, setSelectedPackage] = useState('standard');
  const [finalPrice, setFinalPrice] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Fixed getColorClasses function
  const getColorClasses = (color, type = 'bg') => {
    const colorMap = {
      blue: {
        bg: 'bg-blue-500',
        bgLight: 'bg-blue-50',
        text: 'text-blue-600',
        border: 'border-blue-500',
        gradient: 'from-blue-500 to-blue-600'
      },
      indigo: {
        bg: 'bg-indigo-500',
        bgLight: 'bg-indigo-50',
        text: 'text-indigo-600',
        border: 'border-indigo-500',
        gradient: 'from-indigo-500 to-indigo-600'
      },
      purple: {
        bg: 'bg-purple-500',
        bgLight: 'bg-purple-50',
        text: 'text-purple-600',
        border: 'border-purple-500',
        gradient: 'from-purple-500 to-purple-600'
      }
    };
    return colorMap[color] && colorMap[color][type] ? colorMap[color][type] : colorMap.blue[type];
  };

  // Enhanced structured data for pricing page
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://back2nest.in/pricing#service",
        "name": "School Transportation Pricing - Back2Nest Patna Bihar",
        "description": "Transparent pricing for school transportation services in Patna, Bihar based on distance and service packages. Basic, Standard, and Premium options available.",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Back2Nest",
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
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://back2nest.in/pricing#webpage",
        "url": "https://back2nest.in/pricing",
        "name": "Pricing Plans - Back2Nest School Transportation Patna Bihar",
        "description": "Transparent pricing for school transportation services based on distance and packages"
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
        "name": "Pricing",
        "item": "https://back2nest.in/pricing"
      }
    ]
  };

  const distanceSlabs = [
    { range: '0-5 km', price: 1500, description: 'Short distance routes within city limits' },
    { range: '5-10 km', price: 2500, description: 'Medium distance routes across city areas' },
    { range: '10-15 km', price: 3500, description: 'Extended routes to suburban areas' },
    { range: '15-25 km', price: 4500, description: 'Long distance routes to outskirts' },
    { range: '25+ km', price: 5500, description: 'Extended routes beyond city limits' }
  ];

  const packages = {
    basic: {
      name: 'Basic',
      addOn: 0,
      icon: TruckIcon,
      color: 'blue',
      popular: false,
      features: [
        'Standard comfortable seating',
        'Regular pickup and drop service',
        'Monthly vehicle safety inspection',
        'Experienced and trained drivers',
        'Basic insurance coverage',
        'Standard route with multiple stops'
      ],
      description: 'Essential transportation service for daily school commute'
    },
    standard: {
      name: 'Standard',
      addOn: 1000,
      icon: ShieldCheckIcon,
      color: 'indigo',
      popular: true,
      features: [
        'Air-conditioned comfortable vehicle',
        'Real-time GPS tracking system',
        'Enhanced safety protocols',
        'Bi-weekly vehicle inspection',
        'Comprehensive insurance coverage',
        'Priority route with fewer stops',
        'Parent notification system',
        'Emergency contact support'
      ],
      description: 'Enhanced service with modern safety and comfort features'
    },
    premium: {
      name: 'Premium',
      addOn: 2000,
      icon: StarIcon,
      color: 'purple',
      popular: false,
      features: [
        'Luxury seating with extra comfort',
        'High-speed 4G Wi-Fi connectivity',
        'Live in-vehicle video monitoring',
        'Weekly detailed vehicle inspection',
        'Premium insurance with full coverage',
        'Express route with minimal stops',
        'Dedicated customer support manager',
        '24/7 emergency assistance',
        'Complimentary safety kit',
        'Priority booking and scheduling'
      ],
      description: 'Premium service with luxury features and personalized support'
    }
  };

  // Calculate final price
  useEffect(() => {
    const selectedDistanceData = distanceSlabs.find(d => d.range === selectedDistance);
    const selectedPackageData = packages[selectedPackage];
    if (selectedDistanceData && selectedPackageData) {
      setFinalPrice(selectedDistanceData.price + selectedPackageData.addOn);
    }
  }, [selectedDistance, selectedPackage]);

  // ✅ FIX: Extract the icon component before using it in JSX
  const SelectedPackageIcon = packages[selectedPackage].icon;

  return (
    <>
      <SEO 
        title="Pricing Plans - Transparent School Transportation Costs | Back2Nest Patna Bihar"
        description="View transparent pricing for Back2Nest school transportation services in Patna, Bihar. Distance-based pricing with Basic, Standard, and Premium packages. Starting from ₹1,500/month with GPS tracking, safety features, and professional drivers."
        keywords="Back2Nest pricing, school transport cost Patna, school van prices Bihar, transparent pricing, distance-based pricing, school transport packages, affordable school transport Patna, monthly pricing plans"
        canonicalUrl="https://back2nest.in/pricing"
        ogTitle="School Transportation Pricing Plans - Back2Nest Patna Bihar | Transparent Costs"
        ogDescription="Transparent pricing for school transportation in Patna starting from ₹1,500/month. Choose your distance and package for customized pricing with GPS tracking and safety features."
        ogImage="https://back2nest.in/images/pricing-og.jpg"
        structuredData={structuredData}
        breadcrumbData={breadcrumbData}
        additionalMeta={{
          'geo.region': 'IN-BR',
          'geo.placename': 'Patna, Bihar, India',
          'geo.position': '25.617001;85.157219',
          'ICBM': '25.617001, 85.157219'
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Breadcrumb Navigation */}
        <nav className="container mx-auto px-6 py-4" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-800 font-medium">Pricing</li>
          </ol>
        </nav>

        <div className="container mx-auto px-6 py-8">
          <main className="max-w-7xl mx-auto">
            {/* Header Section */}
            <header className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                Transparent Pricing
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Choose Your Perfect 
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Transportation Plan
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Simple, transparent pricing based on distance and service level. 
                No hidden fees, no surprises - just reliable school transportation in <strong>Patna, Bihar</strong>.
              </p>
            </header>

            {/* Distance Selection */}
            <section className={`mb-12 transform transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Step 1: Select Your Distance Range
                </h2>
                <p className="text-lg text-gray-600">
                  Choose the distance range that best matches your route
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {distanceSlabs.map((slab, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedDistance(slab.range)}
                    className={`p-6 rounded-2xl border-2 transition-all duration-300 text-center hover:shadow-lg ${
                      selectedDistance === slab.range
                        ? 'border-blue-500 bg-blue-50 shadow-lg transform scale-105'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                  >
                    <MapPinIcon className={`w-8 h-8 mx-auto mb-3 ${selectedDistance === slab.range ? 'text-blue-600' : 'text-gray-400'}`} />
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{slab.range}</h3>
                    <p className="text-2xl font-bold text-blue-600 mb-2">₹{slab.price.toLocaleString()}</p>
                    <p className="text-sm text-gray-600">{slab.description}</p>
                  </button>
                ))}
              </div>
            </section>

            {/* Package Selection */}
            <section className={`mb-12 transform transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Step 2: Choose Your Service Package
                </h2>
                <p className="text-lg text-gray-600">
                  Select the service level that meets your needs
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {Object.entries(packages).map(([key, pkg]) => {
                  // ✅ FIX: Extract icon component for each package
                  const PackageIcon = pkg.icon;
                  
                  return (
                    <div
                      key={key}
                      className={`relative rounded-2xl border-2 transition-all duration-300 cursor-pointer hover:shadow-xl ${
                        selectedPackage === key
                          ? `border-${pkg.color}-500 shadow-xl transform scale-105`
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setSelectedPackage(key)}
                    >
                      {pkg.popular && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                          <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                            Most Popular
                          </span>
                        </div>
                      )}
                      
                      <div className={`p-8 ${selectedPackage === key ? getColorClasses(pkg.color, 'bgLight') : 'bg-white'} rounded-2xl`}>
                        <div className="text-center mb-6">
                          <div className={`w-16 h-16 ${getColorClasses(pkg.color, 'bg')} rounded-full flex items-center justify-center mx-auto mb-4`}>
                            <PackageIcon className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                          <p className="text-gray-600 mb-4">{pkg.description}</p>
                          <div className="mb-4">
                            <span className="text-sm text-gray-500">Add-on: </span>
                            <span className={`text-2xl font-bold ${getColorClasses(pkg.color, 'text')}`}>
                              {pkg.addOn === 0 ? 'FREE' : `+₹${pkg.addOn.toLocaleString()}`}
                            </span>
                            <span className="text-gray-500 text-sm"> /month</span>
                          </div>
                        </div>

                        <div className="space-y-3">
                          {pkg.features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-3">
                              <CheckCircleIcon className={`w-5 h-5 ${getColorClasses(pkg.color, 'text')} flex-shrink-0 mt-0.5`} />
                              <span className="text-gray-700 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Price Summary */}
            <section className={`mb-16 transform transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
                <h2 className="text-3xl font-bold mb-6">Your Selected Plan</h2>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white bg-opacity-20 rounded-xl p-6">
                    <MapPinIcon className="w-8 h-8 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Distance Range</h3>
                    <p className="text-xl font-bold">{selectedDistance}</p>
                    <p className="text-sm opacity-90">
                      Base: ₹{distanceSlabs.find(d => d.range === selectedDistance)?.price.toLocaleString() || '0'}
                    </p>
                  </div>
                  
                  <div className="bg-white bg-opacity-20 rounded-xl p-6">
                    {/* ✅ FIX: Use the extracted icon component */}
                    <SelectedPackageIcon className="w-8 h-8 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Service Package</h3>
                    <p className="text-xl font-bold">{packages[selectedPackage].name}</p>
                    <p className="text-sm opacity-90">
                      Add-on: {packages[selectedPackage].addOn === 0 ? 'FREE' : `+₹${packages[selectedPackage].addOn.toLocaleString()}`}
                    </p>
                  </div>
                  
                  <div className="bg-white bg-opacity-20 rounded-xl p-6">
                    <CurrencyDollarIcon className="w-8 h-8 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Total Monthly Cost</h3>
                    <p className="text-3xl font-bold">₹{finalPrice.toLocaleString()}</p>
                    <p className="text-sm opacity-90">per month</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/students"
                    className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    Book This Plan
                  </Link>
                  <a
                    href="tel:+918935904820"
                    className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
                  >
                    Call for Custom Quote
                  </a>
                </div>
              </div>
            </section>

            {/* Additional Benefits */}
            <section className={`mb-16 transform transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                Included in All Plans
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: ShieldCheckIcon,
                    title: "100% Safety Guarantee",
                    description: "Comprehensive safety protocols and insurance"
                  },
                  {
                    icon: PhoneIcon,
                    title: "24/7 Support",
                    description: "Round-the-clock customer assistance"
                  },
                  {
                    icon: ClockIcon,
                    title: "Punctual Service",
                    description: "On-time pickup and drop guarantee"
                  },
                  {
                    icon: CalendarDaysIcon,
                    title: "Flexible Billing",
                    description: "Monthly, quarterly, or annual payment options"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ Section */}
            <section className="text-center">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Questions About Pricing?
                </h2>
                <div className="grid md:grid-cols-2 gap-8 text-left">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Are there any hidden charges?</h3>
                    <p className="text-gray-600">No, our pricing is completely transparent. The displayed price includes all services in your selected package.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Can I change my plan later?</h3>
                    <p className="text-gray-600">Yes, you can upgrade or downgrade your plan with 15 days notice. Additional charges may apply for upgrades.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">What payment methods do you accept?</h3>
                    <p className="text-gray-600">We accept cash, bank transfer, UPI, credit/debit cards, and offer flexible monthly payment options.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Is there a discount for annual payment?</h3>
                    <p className="text-gray-600">Yes, we offer a 10% discount for annual payments and 5% discount for quarterly payments.</p>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default Pricing;
