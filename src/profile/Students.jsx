import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm, ValidationError } from '@formspree/react';
import { 
  ArrowLeftIcon, 
  MapPinIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  VideoCameraIcon,
  UserGroupIcon,
  StarIcon,
  CheckCircleIcon,
  PhoneIcon,
  AcademicCapIcon,
  ClockIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';
import SEO from '../Components/SEO';

const maps_api_key = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
const formspreeId = import.meta.env.VITE_FORMSPREE_ID;

const Students = () => {
  const [state, handleSubmit] = useForm(formspreeId);
  const [userLocation, setUserLocation] = useState(null);
  const [address, setAddress] = useState('');
  const [locationLoading, setLocationLoading] = useState(false);
  const [locationError, setLocationError] = useState('');
  const [showAddressField, setShowAddressField] = useState(false);
  const [allowManualEdit, setAllowManualEdit] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Enhanced structured data for student services
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://back2nest.in/students#service",
        "name": "School Van Booking Service Patna Bihar",
        "description": "Safe and reliable school transportation service in Patna, Bihar with live GPS tracking, professional drivers, in-van cameras, and comprehensive safety features for students",
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
        "serviceType": "Student Transportation",
        "areaServed": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Patna",
            "addressRegion": "Bihar",
            "addressCountry": "IN"
          }
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Student Transportation Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Daily School Van Service",
                "description": "Regular pickup and drop service with live tracking"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Live GPS Tracking",
                "description": "Real-time vehicle tracking for parent peace of mind"
              }
            }
          ]
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://back2nest.in/students#webpage",
        "url": "https://back2nest.in/students",
        "name": "Book School Van Service - Student Transportation Patna Bihar",
        "description": "Book safe school van service for students in Patna, Bihar with live tracking and professional drivers",
        "mainEntity": {
          "@id": "https://back2nest.in/students#service"
        }
      }
    ]
  };

  const keyFeatures = [
    {
      icon: MapPinIcon,
      title: "Live GPS Tracking",
      description: "Real-time location tracking across Patna with parent app access",
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: VideoCameraIcon,
      title: "In-Van Camera Monitoring",
      description: "Live camera access for complete transparency and safety",
      color: "text-red-500",
      bgColor: "bg-red-50"
    },
    {
      icon: UserGroupIcon,
      title: "Professional Verified Drivers",
      description: "Background-checked, trained drivers committed to student safety",
      color: "text-purple-500",
      bgColor: "bg-purple-50"
    },
    {
      icon: ShieldCheckIcon,
      title: "100% Safety Guarantee",
      description: "Comprehensive insurance and emergency protocols in place",
      color: "text-green-500",
      bgColor: "bg-green-50"
    },
    {
      icon: CurrencyDollarIcon,
      title: "Affordable Pricing",
      description: "Most competitive rates for school transport in Patna, Bihar",
      color: "text-yellow-500",
      bgColor: "bg-yellow-50"
    },
    {
      icon: ClockIcon,
      title: "Punctual Service",
      description: "On-time pickup and drop guaranteed every school day",
      color: "text-indigo-500",
      bgColor: "bg-indigo-50"
    }
  ];

  const safetyChecklist = [
    "GPS tracking system with real-time updates",
    "In-vehicle camera monitoring for transparency", 
    "Background-verified professional drivers",
    "Regular vehicle safety inspections",
    "Emergency contact and response system",
    "First aid trained drivers",
    "Comprehensive insurance coverage",
    "Route optimization for efficiency",
    "Real-time parent notifications",
    "24/7 customer support hotline"
  ];

  // Get user's current location
  const getCurrentLocation = () => {
    setLocationLoading(true);
    setLocationError('');
    setShowAddressField(true);

    if (!navigator.geolocation) {
      setLocationError('Geolocation is not supported by this browser.');
      setAllowManualEdit(true);
      setLocationLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ lat: latitude, lng: longitude });
        await getAddressFromCoordinates(latitude, longitude);
        setLocationLoading(false);
      },
      (error) => {
        let errorMessage = '';
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = 'Location access denied. Please enter your address manually.';
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = 'Location information is unavailable.';
            break;
          case error.TIMEOUT:
            errorMessage = 'Location request timed out.';
            break;
          default:
            errorMessage = 'An unknown error occurred while retrieving location.';
            break;
        }
        setLocationError(errorMessage);
        setAllowManualEdit(true);
        setLocationLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000
      }
    );
  };

  // Get address from coordinates using Google Maps API
  const getAddressFromCoordinates = async (lat, lng) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${maps_api_key}`
      );
      const data = await response.json();
      
      if (data.results && data.results.length > 0) {
        const formattedAddress = data.results[0].formatted_address;
        setAddress(formattedAddress);
      } else {
        throw new Error('No address found');
      }
    } catch (error) {
      console.error('Error getting address:', error);
      setLocationError('Could not retrieve address. Please enter manually.');
      setAllowManualEdit(true);
    }
  };

  if (state.succeeded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center p-8 bg-white rounded-2xl shadow-lg">
          <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Registration Successful!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for choosing Back2Nest! We'll contact you within 24 hours to finalize your school van service.
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
        title="Book School Van Service in Patna Bihar | Back2Nest - Safe Student Transportation with Live Tracking"
        description="Book reliable school van service for your child in Patna, Bihar. Features live GPS tracking, professional drivers, in-van cameras, and 100% safety guarantee. Lowest pricing with comprehensive safety features for daily school commutes."
        keywords="book school van Patna, student transport booking Bihar, school bus service Patna, safe school rides Bihar, live tracking van Patna, school transport Patna Bihar, Back2Nest booking, school van registration Patna, student transportation Bihar"
        canonicalUrl="https://back2nest.in/students"
        ogTitle="Book Safe School Van Service in Patna Bihar - Back2Nest Student Transportation"
        ogDescription="Ensure your child's safe journey to school in Patna, Bihar. Live GPS tracking, professional drivers, and unbeatable safety features. Book now!"
        ogImage="https://back2nest.in/images/students-service.jpg"
        structuredData={structuredData}
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
            <li className="text-gray-800 font-medium">Book School Van Service</li>
          </ol>
        </nav>

        <div className="container mx-auto px-6 py-8">
          <main className="max-w-7xl mx-auto">
            {/* Header Section */}
            <header className={`text-center mb-12 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Book Your Safe <span className="text-blue-600">School Van Service</span> in Patna Bihar
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Join 1,250+ families across <strong>Patna, Bihar</strong> who trust Back2Nest for their children's daily school commute. 
                Experience the safest school transportation with live tracking and professional drivers.
              </p>
            </header>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Features Section */}
              <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <section aria-labelledby="features-heading">
                  <h2 id="features-heading" className="text-3xl font-bold text-gray-900 mb-8">
                    Why Choose Back2Nest in Patna?
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {keyFeatures.map((feature, index) => (
                      <div 
                        key={index}
                        className={`${feature.bgColor} p-6 rounded-xl border-l-4 border-${feature.color.split('-')[1]}-500 hover:shadow-lg transition-all duration-300`}
                      >
                        <div className="flex items-start gap-4">
                          <div className={`${feature.color} flex-shrink-0`}>
                            <feature.icon className="w-8 h-8" />
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                            <p className="text-gray-600 text-sm">{feature.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Safety Checklist */}
                  <div className="bg-white p-6 rounded-xl shadow-lg border">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <ShieldCheckIcon className="w-6 h-6 text-green-500" />
                      Complete Safety Checklist
                    </h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {safetyChecklist.map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              </div>

              {/* Booking Form */}
              <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <section aria-labelledby="booking-form-heading">
                  <div className="bg-white p-8 rounded-2xl shadow-xl border">
                    <h2 id="booking-form-heading" className="text-2xl font-bold text-gray-900 mb-6">
                      Book Your School Van Service
                    </h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name Field */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Student Name *
                        </label>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="Enter student's full name"
                        />
                        <ValidationError prefix="Name" field="name" errors={state.errors} />
                      </div>

                      {/* School Name Field */}
                      <div>
                        <label htmlFor="school" className="block text-sm font-medium text-gray-700 mb-2">
                          <AcademicCapIcon className="w-4 h-4 inline mr-1" />
                          School Name *
                        </label>
                        <input
                          id="school"
                          type="text"
                          name="school"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="Enter school name"
                        />
                        <ValidationError prefix="School" field="school" errors={state.errors} />
                      </div>

                      {/* Phone Number Field */}
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          <PhoneIcon className="w-4 h-4 inline mr-1" />
                          Phone Number *
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          name="phone"
                          required
                          pattern="[0-9]{10}"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="Enter 10-digit phone number"
                        />
                        <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                      </div>

                      {/* Address Field with Improved Location Flow */}
                      <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                          <MapPinIcon className="w-4 h-4 inline mr-1" />
                          Pickup Address *
                        </label>

                        {/* First show location detection button */}
                        {!showAddressField && (
                          <button
                            type="button"
                            onClick={getCurrentLocation}
                            disabled={locationLoading}
                            className="w-full flex items-center justify-center gap-3 px-4 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-all font-medium cursor-pointer"
                          >
                            {locationLoading ? (
                              <>
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                Detecting Your Location...
                              </>
                            ) : (
                              <>
                                <MapPinIcon className="w-5 h-5" />
                                Detect My Location
                              </>
                            )}
                          </button>
                        )}

                        {/* Show manual option */}
                        {!showAddressField && (
                          <div className="mt-3">
                            <button
                              type="button"
                              onClick={() => {
                                setShowAddressField(true);
                                setAllowManualEdit(true);
                              }}
                              className="text-sm text-blue-600 hover:text-blue-800 underline cursor-pointer"
                            >
                              Or enter address manually
                            </button>
                          </div>
                        )}

                        {/* Show address field after location detection or manual choice */}
                        {showAddressField && (
                          <div className="relative">
                            <textarea
                              id="address"
                              name="address"
                              rows="3"
                              required
                              value={address}
                              onChange={(e) => setAddress(e.target.value)}
                              readOnly={!allowManualEdit}
                              className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none ${!allowManualEdit ? 'bg-gray-50 cursor-not-allowed' : ''}`}
                              placeholder="Enter pickup address or use current location"
                            />
                            {address && !allowManualEdit && (
                              <button
                                type="button"
                                onClick={() => setAllowManualEdit(true)}
                                className="mt-2 text-sm text-blue-600 hover:text-blue-800 underline"
                              >
                                Edit address manually
                              </button>
                            )}
                          </div>
                        )}

                        {locationError && (
                          <div className="mt-2 flex items-center gap-2 text-amber-600 text-sm">
                            <ExclamationTriangleIcon className="w-4 h-4" />
                            {locationError}
                          </div>
                        )}
                        <ValidationError prefix="Address" field="address" errors={state.errors} />
                      </div>

                      {/* Additional Message */}
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Additional Requirements (Optional)
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows="3"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                          placeholder="Any special requirements or notes..."
                        />
                        <ValidationError prefix="Message" field="message" errors={state.errors} />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={state.submitting}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-300 shadow-lg cursor-pointer"
                      >
                        {state.submitting ? (
                          <div className="flex items-center justify-center gap-2">
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Booking Your Service...
                          </div>
                        ) : (
                          'Book School Van Service'
                        )}
                      </button>

                      {/* Updated Terms & Privacy Links */}
                      <p className="text-xs text-gray-500 text-center">
                        By booking, you agree to our{' '}
                        <Link 
                          to="/terms-condition" 
                          className="text-blue-600 hover:text-blue-800 underline"
                        >
                          terms & conditions
                        </Link>
                        {' '}and{' '}
                        <Link 
                          to="/privacy-policy" 
                          className="text-blue-600 hover:text-blue-800 underline"
                        >
                          privacy policy
                        </Link>
                        . We'll contact you within 24 hours to confirm your booking.
                      </p>
                    </form>
                  </div>
                </section>
              </div>
            </div>

            {/* Trust Indicators */}
            <section className="mt-16 text-center" aria-labelledby="trust-heading">
              <h2 id="trust-heading" className="text-2xl font-bold text-gray-900 mb-8">
                Trusted by 1,250+ Families Across Patna, Bihar
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">4.8★</div>
                  <div className="text-gray-600">Average Rating</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">1,250+</div>
                  <div className="text-gray-600">Happy Families</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
                  <div className="text-gray-600">Professional Drivers</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
                  <div className="text-gray-600">Partner Schools</div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default Students;
