import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeftIcon,
  MapPinIcon,
  ClockIcon,
  ShieldCheckIcon,
  VideoCameraIcon,
  PhoneIcon,
  TruckIcon,
  UserGroupIcon,
  BellIcon,
  SignalIcon,
  EyeIcon,
  ArrowPathIcon,
  PlayIcon,
  CheckCircleIcon,
  LockClosedIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';
import SEO from '../Components/SEO';

const LiveTracking = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  // Form data
  const [mobile, setMobile] = useState('');
  const [pin, setPin] = useState('');
  
  // Driver data from API
  const [driverData, setDriverData] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Enhanced structured data for live tracking
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://back2nest.in/live-tracking#service",
        "name": "Live GPS Tracking Service - Back2Nest Patna Bihar",
        "description": "Secure real-time GPS tracking service for school transportation vehicles with authenticated access for parents in Patna, Bihar.",
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
        },
        "serviceType": "Authenticated GPS Tracking",
        "areaServed": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Patna",
            "addressRegion": "Bihar",
            "addressCountry": "IN"
          }
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://back2nest.in/live-tracking#webpage",
        "url": "https://back2nest.in/live-tracking",
        "name": "Live Tracking - Secure School Transport Monitoring Patna Bihar",
        "description": "Access real-time tracking of your child's school transport with secure mobile and PIN authentication",
        "mainEntity": {
          "@id": "https://back2nest.in/live-tracking#service"
        }
      }
    ]
  };

  // Form validation
  const validateForm = () => {
    if (!mobile || mobile.length !== 10 || !/^\d{10}$/.test(mobile)) {
      setError('Please enter a valid 10-digit mobile number');
      return false;
    }
    if (!pin || pin.length !== 6 || !/^\d{6}$/.test(pin)) {
      setError('Please enter a valid 6-digit PIN');
      return false;
    }
    return true;
  };

  // API call to fetch driver data
  const fetchDriverData = async (mobileNumber, pinCode) => {
    try {
      setIsLoading(true);
      setError('');

      // TODO: Replace with actual API endpoint when provided
      const response = await fetch(`/api/tracking`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          mobile: mobileNumber,
          pin: pinCode
        })
      });

      if (!response.ok) {
        throw new Error('Invalid credentials or service unavailable');
      }

      const data = await response.json();
      setDriverData(data);
      setIsAuthenticated(true);
      
    } catch (err) {
      setError(err.message || 'Failed to fetch tracking data. Please try again.');
      console.error('API Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      fetchDriverData(mobile, pin);
    }
  };

  // Handle logout/retry
  const handleLogout = () => {
    setIsAuthenticated(false);
    setDriverData(null);
    setMobile('');
    setPin('');
    setError('');
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
        "name": "Live Tracking",
        "item": "https://back2nest.in/live-tracking"
      }
    ]
  };

  const trackingFeatures = [
    {
      icon: MapPinIcon,
      title: "Real-Time Location",
      description: "Live GPS updates with precise location data",
      color: "text-blue-600"
    },
    {
      icon: ClockIcon,
      title: "Accurate ETA",
      description: "Real-time estimated arrival based on current traffic",
      color: "text-green-600"
    },
    {
      icon: TruckIcon,
      title: "Route Monitoring",
      description: "Complete route tracking with stops and alerts",
      color: "text-purple-600"
    },
    {
      icon: VideoCameraIcon,
      title: "Live Camera Access",
      description: "In-vehicle camera feed for complete transparency",
      color: "text-red-600"
    },
    {
      icon: BellIcon,
      title: "Instant Notifications",
      description: "Immediate alerts for pickup, drops, and route changes",
      color: "text-yellow-600"
    },
    {
      icon: ShieldCheckIcon,
      title: "Secure Access",
      description: "PIN-protected tracking for privacy and security",
      color: "text-indigo-600"
    }
  ];

  return (
    <>
      <SEO 
        title="Live Tracking | Back2Nest - Secure School Transport Monitoring in Patna Bihar"
        description="Access real-time tracking of your child's school transport with secure mobile and PIN authentication. Monitor location, route, and driver details with Back2Nest's advanced GPS system in Patna, Bihar."
        keywords="secure live tracking school transport Patna, authenticated GPS tracking Bihar, school bus monitoring login, child safety tracking access, Back2Nest secure tracking, school transport PIN access Patna"
        canonicalUrl="https://back2nest.in/live-tracking"
        ogTitle="Secure Live Tracking - Real-Time School Transport Monitoring | Back2Nest Patna"
        ogDescription="Access secure live tracking of your child's school transport with mobile and PIN authentication. Real-time location and driver details in Patna, Bihar."
        ogImage="https://back2nest.in/images/live-tracking-og.jpg"
        structuredData={structuredData}
        breadcrumbData={breadcrumbData}
        additionalMeta={{
          'geo.region': 'IN-BR',
          'geo.placename': 'Patna, Bihar, India',
          'geo.position': '25.617001;85.157219',
          'ICBM': '25.617001, 85.157219'
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        {/* Breadcrumb Navigation */}
        <nav className="container mx-auto px-6 py-4" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-800 font-medium">Live Tracking</li>
          </ol>
        </nav>

        <div className="container mx-auto px-6 py-8">
          <main className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <header className={`text-center mb-12 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                <LockClosedIcon className="w-4 h-4" />
                Secure Tracking Access
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Monitor Your Child's 
                <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  Journey Securely
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Access real-time location and details of your child's school transport with secure authentication. 
                Enter your registered mobile number and PIN to track the journey in <strong>Patna, Bihar</strong>.
              </p>
            </header>

            {!isAuthenticated ? (
              /* Authentication Form */
              <div className={`max-w-md mx-auto transform transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <LockClosedIcon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Access Live Tracking</h2>
                    <p className="text-gray-600">Enter your credentials to view tracking details</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Mobile Number Field */}
                    <div>
                      <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-2">
                        Mobile Number *
                      </label>
                      <input
                        id="mobile"
                        type="tel"
                        value={mobile}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, '');
                          if (value.length <= 10) {
                            setMobile(value);
                            setError('');
                          }
                        }}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Enter 10-digit mobile number"
                        maxLength="10"
                        required
                      />
                    </div>

                    {/* PIN Field */}
                    <div>
                      <label htmlFor="pin" className="block text-sm font-medium text-gray-700 mb-2">
                        6-Digit PIN *
                      </label>
                      <input
                        id="pin"
                        type="password"
                        value={pin}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, '');
                          if (value.length <= 6) {
                            setPin(value);
                            setError('');
                          }
                        }}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Enter 6-digit PIN"
                        maxLength="6"
                        required
                      />
                    </div>

                    {/* Error Message */}
                    {error && (
                      <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-lg">
                        <ExclamationTriangleIcon className="w-4 h-4 flex-shrink-0" />
                        {error}
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-green-700 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                      {isLoading ? (
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Authenticating...
                        </div>
                      ) : (
                        <>
                          <SignalIcon className="w-5 h-5 inline mr-2" />
                          Access Live Tracking
                        </>
                      )}
                    </button>
                  </form>

                  <div className="mt-6 text-center text-sm text-gray-500">
                    <p>Don't have access credentials?</p>
                    <a href="tel:+918935904820" className="text-blue-600 hover:text-blue-800 underline">
                      Call +91-8935904820 for help
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              /* Authenticated Tracking Interface */
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Tracking Interface */}
                <div className="lg:col-span-2">
                  {/* Live Status Bar */}
                  <div className="bg-white rounded-lg shadow-lg p-4 mb-6 border-l-4 border-green-500">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="font-semibold text-gray-900">Tracking Active</span>
                        <span className="text-sm text-gray-600">
                          Mobile: {mobile.replace(/(\d{5})(\d{5})/, '$1•••••')}
                        </span>
                      </div>
                      <button 
                        onClick={handleLogout}
                        className="text-sm text-red-600 hover:text-red-800 underline"
                      >
                        Logout
                      </button>
                    </div>
                  </div>

                  {/* Map Container */}
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="p-6 border-b">
                      <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                        <MapPinIcon className="w-6 h-6 text-blue-600" />
                        Live Location Map
                      </h2>
                    </div>
                    <div className="h-96 bg-gradient-to-br from-blue-100 to-green-100 relative">
                      {/* Map will be populated with actual data from API */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                            <TruckIcon className="w-10 h-10 text-white" />
                          </div>
                          <p className="text-lg font-semibold text-gray-700">
                            {driverData?.currentLocation || 'Loading location...'}
                          </p>
                          <p className="text-sm text-gray-600">
                            Driver: {driverData?.driverName || 'Loading...'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="grid md:grid-cols-3 gap-4 mt-6">
                    <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                      <VideoCameraIcon className="w-5 h-5" />
                      View Live Camera
                    </button>
                    <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-colors">
                      <PhoneIcon className="w-5 h-5" />
                      Call Driver
                    </button>
                    <button 
                      onClick={() => fetchDriverData(mobile, pin)}
                      className="flex items-center gap-2 bg-purple-600 text-white px-4 py-3 rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      <ArrowPathIcon className="w-5 h-5" />
                      Refresh
                    </button>
                  </div>
                </div>

                {/* Tracking Details Sidebar */}
                <div>
                  {/* Current Trip Info */}
                  <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <ClockIcon className="w-5 h-5 text-blue-600" />
                      Trip Details
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm text-gray-600">Current Location</label>
                        <p className="font-semibold text-gray-900">
                          {driverData?.currentLocation || 'Loading...'}
                        </p>
                      </div>
                      <div>
                        <label className="text-sm text-gray-600">Estimated Arrival</label>
                        <p className="font-semibold text-green-600 text-lg">
                          {driverData?.eta || 'Calculating...'}
                        </p>
                      </div>
                      <div>
                        <label className="text-sm text-gray-600">Driver</label>
                        <p className="font-semibold text-gray-900">
                          {driverData?.driverName || 'Loading...'}
                        </p>
                        <p className="text-sm text-gray-600">
                          Rating: {driverData?.driverRating || 'N/A'}★
                        </p>
                      </div>
                      <div>
                        <label className="text-sm text-gray-600">Route Status</label>
                        <p className="font-semibold text-gray-900">
                          {driverData?.routeStatus || 'On route'}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Safety Status */}
                  <div className="bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl p-6 text-white">
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                      <ShieldCheckIcon className="w-5 h-5" />
                      Safety Status
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <CheckCircleIcon className="w-4 h-4" />
                        <span className="text-sm">Driver verified</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircleIcon className="w-4 h-4" />
                        <span className="text-sm">Route compliance</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircleIcon className="w-4 h-4" />
                        <span className="text-sm">Emergency contacts ready</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircleIcon className="w-4 h-4" />
                        <span className="text-sm">Live monitoring active</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tracking Features - Always Visible */}
            <section className={`mt-16 transform transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                Advanced Tracking Features
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {trackingFeatures.map((feature, index) => (
                  <div 
                    key={index}
                    className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border hover:border-blue-200"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`${feature.color} p-3 bg-gray-50 rounded-lg`}>
                        <feature.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Call to Action */}
            <section className="mt-16 text-center">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-4">
                  Experience Secure School Transport Tracking
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Join families across Patna who enjoy peace of mind with our secure tracking system.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/students"
                    className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    Book with Tracking
                  </Link>
                  <a
                    href="tel:+918935904820"
                    className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
                  >
                    Get Access Credentials
                  </a>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default LiveTracking;
