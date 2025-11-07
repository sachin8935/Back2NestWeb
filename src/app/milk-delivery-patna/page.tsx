import { Metadata } from 'next';
import { 
  Milk, Clock, MapPin, Mail, CheckCircle, Star, Truck, Shield, 
  Droplets, Heart, Award, Leaf, Users, Download, Package, Menu, X,
  TrendingUp, ThumbsUp, Zap, Globe, Home
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';

// SEO Metadata for Patna Milk Delivery
export const metadata: Metadata = {
  title: 'Milk Delivery Patna | Farm Fresh by 5 AM - Back2Nest',
  description: 'Get 100% pure farm-fresh milk delivered to your doorstep in Patna by 5 AM daily. No adulteration, no preservatives. Order from Back2Nest today!',
  keywords: [
    'milk delivery patna',
    'fresh milk delivery patna',
    'milk home delivery patna',
    'farm fresh milk patna',
    'pure milk delivery patna',
    'cow milk delivery patna',
    'daily milk delivery patna',
    'milk subscription patna',
    'online milk delivery patna',
    'morning milk delivery patna',
    'back2nest patna',
    'milk delivery patna online',
    'best milk delivery patna',
    'patna milk delivery service',
    'milk delivery service in patna',
    'fresh milk patna',
    'milk supplier patna',
    'milk delivery app patna',
    'door to door milk delivery patna',
    'milk delivery in patna bihar',
    'kadam kuan milk delivery',
    'boring road milk delivery',
    'kankarbagh milk delivery patna',
    'patliputra milk delivery',
    'rajendra nagar milk delivery patna'
  ],
  openGraph: {
    title: 'Fresh Milk Delivery Patna | Farm Fresh by 5 AM - Back2Nest',
    description: 'Pure, farm-fresh milk delivered to your home in Patna by 5 AM. Zero adulteration. Join 127+ families enjoying healthy milk daily.',
    url: 'https://back2nest.in/milk-delivery-patna',
    siteName: 'Back2Nest',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://back2nest.in/milk.jpeg',
        width: 1200,
        height: 630,
        alt: 'Fresh Milk Delivery Patna - Back2Nest',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fresh Milk Delivery Patna | Back2Nest',
    description: 'Get 100% pure farm-fresh milk at your doorstep in Patna by 5 AM daily.',
    images: ['https://back2nest.in/milk.jpeg'],
  },
  alternates: {
    canonical: 'https://back2nest.in/milk-delivery-patna',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// Header Component
const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b-2 border-blue-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 rounded-full shadow-lg">
            <Milk className="w-7 h-7 text-white" />
          </div>
          <div>
            <span className="text-2xl font-bold text-gray-900">
              Back<span className="text-blue-600">2</span>Nest
            </span>
            <p className="text-xs text-gray-600">Milk Delivery Patna</p>
          </div>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-gray-700 hover:text-blue-600 transition font-medium">
            Home
          </Link>
          <Link href="/products" className="text-gray-700 hover:text-blue-600 transition font-medium">
            Products
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition font-medium">
            Contact
          </Link>
          <Link 
            href="/quick-order" 
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-full hover:shadow-xl transition shadow-lg font-semibold transform hover:scale-105"
          >
            Order Now
          </Link>
        </div>
      </nav>
    </header>
  );
};

// Hero Section
const HeroSection = () => (
  <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 overflow-hidden">
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl animate-pulse"></div>
    </div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-green-50 px-4 py-2 rounded-full mb-6 border border-green-200">
            <MapPin className="w-4 h-4 text-green-600" />
            <span className="text-sm font-semibold text-green-700">Serving All Patna Areas</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Fresh Milk Delivery in <span className="text-blue-600">Patna</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            Wake up to <strong>100% pure, farm-fresh milk</strong> delivered to your doorstep in Patna by <strong>5 AM every morning</strong>. No adulteration, no water mixing, no preservatives—just pure, creamy goodness from healthy cows.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-8 rounded-r-lg">
            <p className="text-blue-900 font-semibold">
              <Zap className="w-5 h-5 inline mr-2 text-blue-600" />
              Limited Time Offer: Get 10% off on your first month subscription!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a 
              href="https://play.google.com/store/apps/details?id=com.app.back2nest" target="_blank" rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition shadow-lg text-center transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download App
            </a>
            <Link 
              href="/quick-order" 
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition text-center flex items-center justify-center gap-2"
            >
              <Package className="w-5 h-5" />
              Order Online
            </Link>
          </div>
          
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <div className="flex items-center space-x-2 bg-yellow-50 px-4 py-2 rounded-full">
              <Star className="w-5 h-5 text-yellow-500 fill-current" />
              <span className="font-semibold text-gray-700">4.8/5 Rating</span>
            </div>
            <div className="flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-full">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="font-semibold text-gray-700">100% Pure</span>
            </div>
            <div className="flex items-center space-x-2 bg-red-50 px-4 py-2 rounded-full">
              <Users className="w-5 h-5 text-red-500" />
              <span className="font-semibold text-gray-700">127+ Families</span>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="relative bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-3xl p-3 shadow-2xl transform hover:rotate-1 transition duration-500">
            <Image
              src="https://res.cloudinary.com/back2nest/image/upload/v1761124550/products/rprfyfwgi7pzmud1oojc.jpg"
              alt="Fresh pure milk delivery in Patna - Back2Nest farm to home service"
              width={700}
              height={700}
              className="rounded-2xl shadow-lg w-full object-cover h-96"
              priority
            />
          </div>
          
          <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl border-4 border-blue-100 hover:scale-105 transition">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-lg">Delivered by 5 AM</p>
                <p className="text-sm text-gray-600">Every Morning in Patna</p>
              </div>
            </div>
          </div>
          
          <div className="absolute -top-6 -right-6 bg-gradient-to-br from-green-500 to-green-600 text-white p-5 rounded-2xl shadow-xl hover:scale-105 transition">
            <div className="text-center">
              <Shield className="w-8 h-8 mx-auto mb-2" />
              <p className="font-bold text-sm">100% Pure</p>
              <p className="text-xs opacity-90">Certified Quality</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Coverage Areas Section
const CoverageAreasSection = () => {
  const areas = [
    'Kadam Kuan', 'Boring Road', 'Kankarbagh', 'Patliputra Colony', 'Rajendra Nagar',
    'Fraser Road', 'Exhibition Road', 'Anisabad', 'Danapur', 'Bailey Road',
    'Ashok Rajpath', 'SK Puri', 'Kurji', 'Patna City', 'Gandhi Maidan Area',
    'Gardanibagh', 'Sheikhpura', 'Rupaspur', 'Saguna More', 'Dakbunglow',
    'New Bypass Road', 'Patrakar Nagar', 'Lodipur', 'Hanuman Nagar', 'West Boring Canal Road'
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Globe className="w-4 h-4 inline mr-2" />
            Wide Coverage
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Milk Delivery Areas We Serve in Patna
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver fresh milk to all major localities across Patna, Bihar. Find your area below!
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg border-2 border-blue-100">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {areas.map((area, index) => (
              <div 
                key={index}
                className="flex items-center space-x-2 bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition border border-blue-100 hover:border-blue-300"
              >
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 text-sm font-medium">{area}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center bg-blue-100 p-4 rounded-xl">
            <p className="text-blue-900 font-semibold mb-2">
              Don't see your area listed?
            </p>
            <p className="text-blue-700 text-sm mb-3">
              We are constantly expanding! Download our app to check if we deliver to your location.
            </p>
            <a 
              href="https://play.google.com/store/apps/details?id=com.app.back2nest" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition"
            >
              <Download className="w-4 h-4" />
              Download App
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Area-Specific Pages Section
const AreaSpecificSection = () => {
  const specificAreas = [
    {
      title: "Boring Road",
      description: "Premium milk delivery service covering Boring Road, West Boring Canal Road, and surrounding localities.",
      link: "/milk-delivery-patna/boring-road",
      icon: MapPin,
      color: "blue"
    },
    {
      title: "Kankarbagh",
      description: "Fresh daily milk delivery to Old Kankarbagh, New Kankarbagh, Kankarbagh Colony, SK Puri and nearby areas.",
      link: "/milk-delivery-patna/kankarbagh",
      icon: MapPin,
      color: "green"
    },
    {
      title: "Patliputra Colony",
      description: "Reliable milk delivery across all Patliputra sectors, Saguna More, Rupaspur and Shastri Nagar localities.",
      link: "/milk-delivery-patna/patliputra",
      icon: MapPin,
      color: "purple"
    },
    {
      title: "Fraser Road",
      description: "Pure A2 milk delivery to Fraser Road Market, Hanuman Mandir area and all Fraser Road localities by 5 AM daily.",
      link: "/milk-delivery-patna/fraser-road",
      icon: MapPin,
      color: "orange"
    },
    {
      title: "Rajendra Nagar",
      description: "Fresh milk delivery to IGIMS area, Exhibition Road, Rajendra Nagar Terminal and surrounding residential areas.",
      link: "/milk-delivery-patna/rajendra-nagar",
      icon: MapPin,
      color: "red"
    },
    {
      title: "Bailey Road",
      description: "Daily fresh milk delivery to Bailey Road, Maurya Lok Complex, Dak Bungalow area and nearby localities.",
      link: "/milk-delivery-patna/bailey-road",
      icon: MapPin,
      color: "teal"
    },
    {
      title: "Budha Colony",
      description: "Farm-fresh milk delivery to Budha Colony Market, Dak Bungalow Chowk, Mithapur and all Budha Colony areas.",
      link: "/milk-delivery-patna/budha-colony",
      icon: MapPin,
      color: "indigo"
    },
    {
      title: "Kidwaipuri",
      description: "Daily A2 milk delivery to Kidwaipuri Main Road, Kurji area, Hanuman Nagar and surrounding localities.",
      link: "/milk-delivery-patna/kidwaipuri",
      icon: MapPin,
      color: "pink"
    },
    {
      title: "Anisabad",
      description: "Fresh A2 milk delivery to Anisabad Bye Pass, Gaighat Road, Bailey Road Extension and all Anisabad localities.",
      link: "/milk-delivery-patna/anisabad",
      icon: MapPin,
      color: "cyan"
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <MapPin className="w-4 h-4 inline mr-2" />
            Explore Your Area
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Find Milk Delivery in Your Patna Locality
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get area-specific information, delivery schedules, and local testimonials for your neighborhood
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {specificAreas.map((area, index) => {
            // Define gradient classes based on color
            const gradientClasses = {
              blue: 'bg-gradient-to-br from-blue-500 to-blue-600',
              green: 'bg-gradient-to-br from-green-500 to-green-600',
              purple: 'bg-gradient-to-br from-purple-500 to-purple-600',
              orange: 'bg-gradient-to-br from-orange-500 to-orange-600',
              red: 'bg-gradient-to-br from-red-500 to-red-600',
              teal: 'bg-gradient-to-br from-teal-500 to-teal-600',
              indigo: 'bg-gradient-to-br from-indigo-500 to-indigo-600',
              pink: 'bg-gradient-to-br from-pink-500 to-pink-600',
              cyan: 'bg-gradient-to-br from-cyan-500 to-cyan-600',
            };
            
            return (
              <Link 
                key={index}
                href={area.link}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-blue-300 transform hover:-translate-y-2"
              >
                <div className={`${gradientClasses[area.color as keyof typeof gradientClasses]} p-6 text-white`}>
                  <area.icon className="w-12 h-12 mb-3" />
                  <h3 className="text-2xl font-bold mb-2">{area.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {area.description}
                  </p>
                  <div className="flex items-center text-blue-600 font-semibold group-hover:gap-3 gap-2 transition-all">
                    <span>View Details</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="p-8 md:p-12 text-white">
              <Package className="w-12 h-12 mb-4" />
              <h3 className="text-3xl font-bold mb-4">Check Our Pricing Plans</h3>
              <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                Transparent pricing for fresh milk delivery in Patna. Choose from daily, weekly, or monthly subscription plans that fit your family's needs.
              </p>
              <Link 
                href="/milk-price-patna"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition shadow-lg"
              >
                <TrendingUp className="w-5 h-5" />
                View Pricing & Plans
              </Link>
            </div>
            <div className="hidden md:block relative h-full min-h-[300px]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent flex items-center justify-center">
                <div className="text-white/20 text-9xl font-bold">₹</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Why Choose Us Section
const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: Shield,
      title: "100% Pure & Unadulterated Milk",
      description: "Zero water mixing, no chemicals, no preservatives. Every drop is pure, natural milk from healthy cows in Patna's partner farms.",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Truck,
      title: "Early Morning Delivery by 5 AM",
      description: "Fresh milk delivered to your doorstep in Patna before sunrise. Perfect timing for morning tea, breakfast, and daily cooking needs.",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      icon: Clock,
      title: "Direct from Farm to Home",
      description: "Minimal time between milking and delivery ensures maximum freshness, nutrition, and taste. No storage, no middlemen.",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: Droplets,
      title: "Rich, Creamy Full-Fat Milk",
      description: "Naturally thick and creamy milk from well-fed, healthy cows. Rich in taste, perfect for families in Patna who value quality.",
      gradient: "from-cyan-500 to-cyan-600"
    },
    {
      icon: Heart,
      title: "Healthy & Nutritious for Family",
      description: "Loaded with calcium, protein, vitamins A & D. Supports bone health, immunity, and overall wellness for all age groups.",
      gradient: "from-red-500 to-red-600"
    },
    {
      icon: Award,
      title: "Trusted by 127+ Patna Families",
      description: "Join hundreds of satisfied families across Patna who have switched to Back2Nest for pure, reliable milk delivery every day.",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: TrendingUp,
      title: "Flexible Subscription Plans",
      description: "Choose daily quantity, pause deliveries when away, and manage everything easily through our app or customer support.",
      gradient: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Leaf,
      title: "Supporting Local Patna Farmers",
      description: "By choosing Back2Nest, you support local dairy farmers and sustainable, ethical farming practices in Bihar.",
      gradient: "from-emerald-500 to-emerald-600"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Why Back2Nest?
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Patna Trusts Back2Nest for Milk Delivery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just a milk delivery service—we're your partner in health, bringing farm-fresh purity to your family every morning
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div 
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border border-blue-100 group hover:-translate-y-2"
              >
                <div className={`bg-gradient-to-br ${reason.gradient} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition shadow-lg`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// SEO Content Section
const SEOContentSection = () => (
  <section className="bg-white py-20">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <article className="prose prose-lg max-w-none">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Why Choose Farm-Fresh Milk Delivery in Patna?
        </h2>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          In today's fast-paced world, ensuring that your family consumes <strong>pure, unadulterated milk</strong> has become increasingly challenging. Traditional milk sources often involve multiple intermediaries, extended storage periods, and questionable quality standards. This is where <strong>Back2Nest milk delivery service in Patna</strong> stands out as a reliable, health-focused solution for families across Bihar's capital city.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
          The Back2Nest Difference: Pure Milk from Farm to Your Home in Patna
        </h3>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          <strong>Back2Nest</strong> has revolutionized milk delivery in Patna by establishing direct partnerships with local dairy farms. Our milk undergoes minimal processing—just essential pasteurization to ensure safety—while retaining all natural nutrients, proteins, and vitamins. Unlike packaged milk that sits in warehouses and retail stores for days, our <strong>fresh milk is delivered to homes across Patna by 5 AM</strong>, just hours after milking.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
          Benefits of Subscribing to Daily Milk Delivery in Patna
        </h3>
        
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-6 rounded-r-lg">
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
              <span><strong>Consistent Quality:</strong> Same pure milk every single day without fail</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
              <span><strong>Time-Saving Convenience:</strong> No daily trips to the store or milk vendor</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
              <span><strong>Health Assurance:</strong> Zero adulteration, no harmful preservatives or chemicals</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
              <span><strong>Cost-Effective:</strong> Competitive pricing with flexible subscription plans</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
              <span><strong>Easy Management:</strong> Pause, modify, or cancel anytime through our app</span>
            </li>
          </ul>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
          How to Order Fresh Milk Delivery in Patna?
        </h3>
        
        <p className="text-gray-700 leading-relaxed mb-4">
          Getting started with <strong>Back2Nest milk delivery in Patna</strong> is incredibly simple:
        </p>

        <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-6 ml-4">
          <li><strong>Download our app from Google Play Store</strong> and create your account</li>
          <li><strong>Choose your daily milk quantity</strong> (500ml, 1L, or custom amounts)</li>
          <li><strong>Select your preferred delivery time</strong> (we recommend our 5 AM slot)</li>
          <li><strong>Provide your Patna delivery address</strong> (we serve all major areas)</li>
          <li><strong>Start receiving fresh milk</strong> every morning at your doorstep!</li>
        </ol>

        <p className="text-gray-700 leading-relaxed mb-6">
          You can also download our mobile app for even easier subscription management, delivery tracking, and instant customer support.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
          Areas We Cover for Milk Delivery in Patna
        </h3>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          Back2Nest provides <strong>reliable milk delivery service across Patna</strong>, including popular localities such as <strong>Kadam Kuan, Boring Road, Kankarbagh, Patliputra Colony, Rajendra Nagar, Fraser Road, Exhibition Road, Bailey Road, Danapur, SK Puri</strong>, and many more areas across the city. If you're unsure whether we deliver to your area, simply give us a call—we're constantly expanding our delivery network!
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
          Customer Reviews: What Patna Families Say About Us
        </h3>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          With over <strong>127+ satisfied families in Patna</strong> and a <strong>4.8/5 rating</strong>, Back2Nest has become the preferred choice for health-conscious households. Our customers consistently praise the milk's natural taste, thick creamy texture, and the reliability of our early morning deliveries. Many have shared how their children now prefer our milk over store-bought alternatives, and families have noticed improved health benefits from switching to farm-fresh quality.
        </p>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-2xl shadow-xl mt-10 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Experience Pure Milk in Patna?</h3>
          <p className="text-blue-100 mb-6 text-lg">
            Join 127+ happy families enjoying farm-fresh milk every morning. Start your subscription today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://play.google.com/store/apps/details?id=com.app.back2nest" target="_blank" rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:shadow-2xl transition inline-flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download App
            </a>
            <Link 
              href="/quick-order"
              className="bg-blue-500 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-400 transition inline-flex items-center justify-center gap-2"
            >
              <Package className="w-5 h-5" />
              Order Online
            </Link>
          </div>
        </div>
      </article>
    </div>
  </section>
);

// FAQ Section for SEO
const FAQSection = () => {
  const faqs = [
    {
      question: "What time does milk get delivered in Patna?",
      answer: "We deliver fresh milk to your doorstep by 5 AM every morning across Patna. This ensures you wake up to farm-fresh milk ready for your morning tea and breakfast."
    },
    {
      question: "Is the milk 100% pure and unadulterated?",
      answer: "Yes! Back2Nest guarantees 100% pure milk with zero water mixing, no adulteration, and no preservatives. Our milk comes directly from healthy cows at partner farms in and around Patna."
    },
    {
      question: "Which areas of Patna do you deliver to?",
      answer: "We deliver to all major areas including Kadam Kuan, Boring Road, Kankarbagh, Patliputra Colony, Rajendra Nagar, Bailey Road, Fraser Road, Danapur, and many more. Download our app to check availability in your specific area."
    },
    {
      question: "How do I subscribe to milk delivery in Patna?",
      answer: "Simply download our app or use our quick order form on the website. You can also download our mobile app to subscribe, manage deliveries, and track orders easily."
    },
    {
      question: "Can I pause or modify my subscription?",
      answer: "Absolutely! You can pause deliveries when traveling, modify your daily quantity, or adjust delivery schedules anytime through our app or by contacting customer support."
    },
    {
      question: "What is the price of milk delivery in Patna?",
      answer: "Our pricing is competitive and transparent. Prices vary based on daily quantity and subscription duration. Download our app or visit our products page for current pricing and special offers."
    },
    {
      question: "Is the milk pasteurized?",
      answer: "Yes, our milk undergoes essential pasteurization for safety while retaining all natural nutrients, vitamins, and proteins. It's fresh, safe, and nutritious."
    },
    {
      question: "What if I'm not satisfied with the quality?",
      answer: "Customer satisfaction is our priority. If you're not satisfied with the quality, contact us immediately. We'll address your concerns and ensure you get the best quality milk every single day."
    }
  ];

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Got Questions?
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions About Milk Delivery in Patna
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our farm-fresh milk delivery service
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg border-2 border-blue-100 hover:border-blue-300 transition"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                <CheckCircle className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                {faq.question}
              </h3>
              <p className="text-gray-700 leading-relaxed ml-9">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-blue-100 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h3>
          <p className="text-gray-700 mb-6">
            Our customer support team is here to help! Reach out to us anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://play.google.com/store/apps/details?id=com.app.back2nest" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition"
            >
              <Download className="w-5 h-5" />
              Download App
            </a>
            <a 
              href="mailto:help@back2nest.in"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-full font-bold border-2 border-blue-600 hover:bg-blue-50 transition"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Boring Road, Patna",
      rating: 5,
      text: "Best milk delivery service in Patna! The milk is so fresh and creamy. My kids love it, and I trust the quality completely. Highly recommend Back2Nest!",
      avatar: "PS"
    },
    {
      name: "Rajesh Kumar",
      location: "Kankarbagh, Patna",
      rating: 5,
      text: "Been using Back2Nest for 6 months now. Never missed a single delivery. The milk quality is outstanding—pure and natural just like village milk.",
      avatar: "RK"
    },
    {
      name: "Anita Singh",
      location: "Patliputra Colony, Patna",
      rating: 5,
      text: "Switched from packaged milk to Back2Nest and noticed the difference immediately. Thicker, creamier, and tastes so much better. Worth every rupee!",
      avatar: "AS"
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <ThumbsUp className="w-4 h-4 inline mr-2" />
            Customer Love
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Patna Families Say About Our Milk Delivery
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real reviews from real families enjoying pure, farm-fresh milk every day
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg border-2 border-blue-100 hover:shadow-2xl transition hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/reviews"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-lg group"
          >
            Read More Customer Reviews
            <span className="group-hover:translate-x-1 transition">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => (
  <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-20 overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
    </div>

    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <Home className="w-16 h-16 mx-auto text-white mb-6 opacity-90" />
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
        Start Your Fresh Milk Subscription in Patna Today!
      </h2>
      <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
        Join 127+ happy families in Patna who wake up to pure, farm-fresh milk every morning. No contracts, pause anytime, 100% satisfaction guaranteed.
      </p>

      <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
        <a
          href="https://play.google.com/store/apps/details?id=com.app.back2nest" target="_blank" rel="noopener noreferrer"
          className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition inline-flex items-center justify-center gap-2 transform hover:scale-105"
        >
          <Download className="w-6 h-6" />
          Download App
        </a>
        <Link
          href="/quick-order"
          className="bg-blue-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-400 transition inline-flex items-center justify-center gap-2 transform hover:scale-105"
        >
          <Package className="w-6 h-6" />
          Order Online Now
        </Link>
      </div>

      <div className="flex flex-wrap justify-center gap-6 text-blue-100">
        <div className="flex items-center gap-2">
          <CheckCircle className="w-5 h-5" />
          <span>100% Pure Milk</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle className="w-5 h-5" />
          <span>5 AM Delivery</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle className="w-5 h-5" />
          <span>All Patna Areas</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle className="w-5 h-5" />
          <span>Flexible Plans</span>
        </div>
      </div>

      <div className="mt-10 pt-8 border-t border-blue-500">
        <p className="text-blue-100 text-lg mb-3">Available Daily: 5:00 AM - 4:00 PM</p>
        <p className="text-blue-200">
          <MapPin className="w-4 h-4 inline mr-1" />
          Jagat Narayan Road, Kadam Kuan, Patna 800003, Bihar
        </p>
      </div>
    </div>
  </section>
);

// Main Page Component
export default function MilkDeliveryPatnaPage() {
  // Breadcrumb Schema
  const breadcrumbSchema = {
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
        "name": "Milk Delivery Patna",
        "item": "https://back2nest.in/milk-delivery-patna"
      }
    ]
  };

  // JSON-LD structured data for local SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'serviceType': 'Milk Delivery Service',
    'provider': {
      '@type': 'LocalBusiness',
      'name': 'Back2Nest',
      'image': 'https://back2nest.in/logo.png',
      'telephone': '+918935904820',
      'email': 'help@back2nest.in',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Jagat Narayan Road, Kadam Kuan',
        'addressLocality': 'Patna',
        'addressRegion': 'Bihar',
        'postalCode': '800003',
        'addressCountry': 'IN'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 25.5941,
        'longitude': 85.1376
      },
      'areaServed': {
        '@type': 'City',
        'name': 'Patna'
      },
      'priceRange': '₹',
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.8',
        'reviewCount': '127'
      }
    },
    'name': 'Fresh Milk Delivery in Patna',
    'description': 'Farm-fresh, 100% pure milk delivered to your doorstep in Patna by 5 AM daily. No adulteration, no preservatives.',
    'areaServed': 'Patna, Bihar',
    'availableChannel': {
      '@type': 'ServiceChannel',
      'servicePhone': {
        '@type': 'ContactPoint',
        'telephone': '+918935904820',
        'contactType': 'Customer Service'
      }
    }
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'What time does milk get delivered in Patna?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'We deliver fresh milk to your doorstep by 5 AM every morning across Patna.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Is the milk 100% pure and unadulterated?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes! Back2Nest guarantees 100% pure milk with zero water mixing, no adulteration, and no preservatives.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Which areas of Patna do you deliver to?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'We deliver to all major areas including Kadam Kuan, Boring Road, Kankarbagh, Patliputra Colony, Rajendra Nagar, Bailey Road, and many more.'
        }
      }
    ]
  };

  return (
    <>
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <HeroSection />
          <CoverageAreasSection />
          <AreaSpecificSection />
          <WhyChooseUsSection />
          <TestimonialsSection />
          <SEOContentSection />
          <FAQSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
}
