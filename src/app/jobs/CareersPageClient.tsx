'use client';

import { Truck, Briefcase, Handshake, MapPin, DollarSign, CheckCircle, Users, Award, TrendingUp, Heart, Shield, ChevronRight, Send, Milk, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import Footer from '@/components/Footer';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            <p className="text-xs text-gray-600">Farm Fresh Milk</p>
          </div>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
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

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-700 hover:text-blue-600 transition"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-blue-100 shadow-lg">
          <div className="px-4 py-4 space-y-4">
            <Link href="/" className="block text-gray-700 hover:text-blue-600 transition font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link href="/products" className="block text-gray-700 hover:text-blue-600 transition font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
              Products
            </Link>
            <Link href="/contact" className="block text-gray-700 hover:text-blue-600 transition font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

const HeroSection = () => (
  <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-20 overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
    </div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center">
        <div className="inline-flex items-center space-x-2 bg-blue-500 bg-opacity-30 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-blue-400">
          <Users className="w-4 h-4 text-white" />
          <span className="text-sm font-semibold text-white">Join Our Growing Team</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
          Careers at Back2Nest – Jobs in Patna
        </h1>
        
        <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
          Join Patna's fastest-growing farm-fresh milk delivery service. We're hiring delivery partners, corporate roles, and business partners with competitive salaries and growth opportunities.
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
          <div className="flex items-center space-x-2 bg-black bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full border border-white border-opacity-30">
            <TrendingUp className="w-5 h-5 text-white" />
            <span className="font-semibold text-white">Fast Growing Company</span>
          </div>
          <div className="flex items-center space-x-2 bg-black bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full border border-white border-opacity-30">
            <Award className="w-5 h-5 text-white" />
            <span className="font-semibold text-white">Competitive Benefits</span>
          </div>
          <div className="flex items-center space-x-2 bg-black bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full border border-white border-opacity-30">
            <Heart className="w-5 h-5 text-white" />
            <span className="font-semibold text-white">Positive Culture</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const JobPositionsSection = () => {
  const [activeTab, setActiveTab] = useState<'delivery' | 'corporate' | 'business'>('delivery');

  const jobs = {
    delivery: {
      title: 'Delivery Partner',
      icon: Truck,
      gradient: 'from-green-500 to-green-600',
      salary: '₹8,000 - ₹10,000/month',
      type: 'Part-Time',
      location: 'Patna, Bihar',
      description: 'Join our delivery team and earn competitive income working flexible morning hours. Perfect for those who want to balance work with other commitments.',
      responsibilities: [
        'Deliver fresh milk to customers between 5 AM - 10 AM',
        'Maintain delivery schedule and routes efficiently',
        'Ensure product quality during transportation',
        'Build positive relationships with customers',
        'Handle cash/digital payment collections',
        'Report delivery status through our mobile app'
      ],
      requirements: [
        'Own a two-wheeler with valid documents',
        'Valid driving license',
        'Smartphone for app-based tracking',
        'Punctual and reliable',
        'Basic knowledge of Patna city roads',
        'Good communication skills in Hindi/English'
      ],
      benefits: [
        'Earn ₹8,000 - ₹10,000 monthly working just 4-5 hours',
        'Flexible morning-only schedule (6 AM - 10 AM)',
        'Weekly/monthly payment options',
        'Fuel/maintenance support',
        'Performance-based incentives',
        'Growth opportunities within the company'
      ]
    },
    corporate: {
      title: 'Corporate Roles',
      icon: Briefcase,
      gradient: 'from-blue-500 to-blue-600',
      salary: '₹6,00,000/year',
      type: 'Full-Time',
      location: 'Patna, Bihar',
      description: 'Be part of our core team driving business growth, operations, and customer success. We offer competitive packages and career advancement opportunities.',
      responsibilities: [
        'Manage daily operations and team coordination',
        'Drive customer acquisition and retention strategies',
        'Analyze business metrics and optimize processes',
        'Lead marketing and community engagement initiatives',
        'Ensure quality standards across supply chain',
        'Contribute to strategic business decisions'
      ],
      requirements: [
        'Graduate/Post-graduate in relevant field',
        '1-3 years of relevant experience (freshers welcome)',
        'Strong analytical and problem-solving skills',
        'Excellent communication and leadership abilities',
        'Proficiency in MS Office and digital tools',
        'Passion for food/agriculture/startup ecosystem'
      ],
      benefits: [
        'Annual CTC of ₹6 Lakhs with performance bonuses',
        'Health insurance coverage',
        'Paid time off and festival holidays',
        'Professional development opportunities',
        'Stock options for key positions',
        'Dynamic startup culture with growth potential'
      ]
    },
    business: {
      title: 'Business Partnership',
      icon: Handshake,
      gradient: 'from-purple-500 to-purple-600',
      salary: 'Partnership-based earning',
      type: 'Partnership',
      location: 'Patna & Nearby Areas',
      description: 'Partner with Back2Nest to expand our reach across Patna and Bihar. Ideal for entrepreneurs and business owners looking for a sustainable venture.',
      responsibilities: [
        'Establish and manage distribution in your area',
        'Build and maintain customer relationships',
        'Coordinate with farms and logistics',
        'Drive local marketing and brand awareness',
        'Ensure timely delivery and quality standards',
        'Grow and scale operations in your territory'
      ],
      requirements: [
        'Investment capacity for initial setup',
        'Strong local network and market knowledge',
        'Business acumen and entrepreneurial mindset',
        'Commitment to quality and customer service',
        'Space for storage and operations',
        'Team management capabilities'
      ],
      benefits: [
        'Established brand support and recognition',
        'Comprehensive training and onboarding',
        'Flexible profit-sharing model',
        'Marketing and operational support',
        'Technology platform access',
        'Exclusive territory rights'
      ]
    }
  };

  const currentJob = jobs[activeTab];
  const JobIcon = currentJob.icon;

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Open Positions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Find Your Perfect Role
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the opportunity that matches your skills and career goals
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {(Object.keys(jobs) as Array<keyof typeof jobs>).map((key) => {
            const job = jobs[key];
            const Icon = job.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition transform hover:scale-105 ${
                  activeTab === key
                    ? `bg-gradient-to-r ${job.gradient} text-white shadow-lg`
                    : 'bg-white text-gray-700 hover:bg-blue-50 border-2 border-blue-100'
                }`}
              >
                <Icon className="w-5 h-5" />
                {job.title}
              </button>
            );
          })}
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-blue-100">
          <div className={`bg-gradient-to-r ${currentJob.gradient} p-8 text-white`}>
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm p-4 rounded-2xl">
                <JobIcon className="w-12 h-12" />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2">{currentJob.title}</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-black bg-opacity-20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-white">
                    {currentJob.type}
                  </span>
                  <span className="bg-black bg-opacity-20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-white flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {currentJob.location}
                  </span>
                </div>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 text-lg font-semibold bg-black bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full text-white">
              <DollarSign className="w-5 h-5" />
              {currentJob.salary}
            </div>
          </div>

          <div className="p-8 md:p-12">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {currentJob.description}
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-10">
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                  Key Responsibilities
                </h4>
                <ul className="space-y-3">
                  {currentJob.responsibilities.map((item: string, idx: number) => (
                    <li key={idx} className="text-gray-600 flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-green-600" />
                  Requirements
                </h4>
                <ul className="space-y-3">
                  {currentJob.requirements.map((item: string, idx: number) => (
                    <li key={idx} className="text-gray-600 flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Award className="w-6 h-6 text-purple-600" />
                  Benefits & Perks
                </h4>
                <ul className="space-y-3">
                  {currentJob.benefits.map((item: string, idx: number) => (
                    <li key={idx} className="text-gray-600 flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-center">
              <a
                href="#apply"
                className={`inline-flex items-center gap-2 bg-gradient-to-r ${currentJob.gradient} text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition transform hover:scale-105`}
              >
                Apply for {currentJob.title}
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ApplicationFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: 'delivery',
    experience: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://formspree.io/f/mldpkaba', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          position: 'delivery',
          experience: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="apply" className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Application Form
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Apply Now
          </h2>
          <p className="text-xl text-gray-600">
            Fill out the form below and our team will get back to you within 24-48 hours
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-blue-100">
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border-2 border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border-2 border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border-2 border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Position Applying For *
                </label>
                <select
                  value={formData.position}
                  onChange={(e) => setFormData({...formData, position: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border-2 border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition bg-white"
                >
                  <option value="delivery">Delivery Partner</option>
                  <option value="corporate">Corporate Role</option>
                  <option value="business">Business Partnership</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Relevant Experience (Optional)
              </label>
              <input
                type="text"
                value={formData.experience}
                onChange={(e) => setFormData({...formData, experience: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border-2 border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                placeholder="e.g., 2 years in delivery, Fresh graduate, etc."
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Tell Us About Yourself *
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows={5}
                className="w-full px-4 py-3 rounded-xl border-2 border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition resize-none"
                placeholder="Why do you want to join Back2Nest? What makes you a great fit?"
              />
            </div>

            {submitStatus === 'success' && (
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-green-900">Application Submitted Successfully!</p>
                  <p className="text-sm text-green-700">We'll review your application and get back to you soon.</p>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 flex items-center gap-3">
                <X className="w-6 h-6 text-red-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-red-900">Submission Failed</p>
                  <p className="text-sm text-red-700">Please try again or contact us directly at help@back2nest.in</p>
                </div>
              </div>
            )}

            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Submit Application
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function CareersPageClient() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <JobPositionsSection />
        <ApplicationFormSection />
      </main>
      <Footer />
    </div>
  );
}
