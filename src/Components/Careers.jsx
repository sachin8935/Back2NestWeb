import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeftIcon,
  MagnifyingGlassIcon,
  CalendarDaysIcon,
  UserIcon,
  TagIcon,
  FolderIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ExclamationTriangleIcon,
  BookOpenIcon,
  ArrowTrendingUpIcon,
  ShieldCheckIcon,
  LightBulbIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';
import SEO from '../Components/SEO';

const Blog = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    setIsVisible(true);
    fetchBlogData();
  }, [currentPage, selectedCategory, searchTerm]);

  // Enhanced structured data for blog with comprehensive SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": "https://back2nest.in/blog#blog",
        "name": "Back2Nest Blog - School Transportation Insights Patna Bihar",
        "description": "Expert insights, safety tips, and latest updates on school transportation, driver training, GPS tracking, and student commute solutions in Patna, Bihar. Professional advice from Back2Nest transportation specialists.",
        "url": "https://back2nest.in/blog",
        "publisher": {
          "@type": "Organization",
          "@id": "https://back2nest.in/#organization",
          "name": "Back2Nest",
          "logo": {
            "@type": "ImageObject",
            "url": "https://back2nest.in/assets/logo.png",
            "width": "200",
            "height": "60"
          },
          "url": "https://back2nest.in",
          "sameAs": [
            "https://www.facebook.com/back2nest",
            "https://www.instagram.com/back2nest_official",
            "https://www.linkedin.com/company/back2nest"
          ]
        },
        "inLanguage": "en-IN",
        "about": {
          "@type": "Thing",
          "name": "School Transportation Safety"
        },
        "keywords": "school transportation blog, school van safety, GPS tracking, driver training, student transport Patna, school bus safety Bihar",
        "blogPost": posts.map(post => ({
          "@type": "BlogPosting",
          "@id": `https://back2nest.in/blog/${post.slug}#article`,
          "headline": post.title,
          "description": post.excerpt,
          "image": {
            "@type": "ImageObject",
            "url": post.image,
            "width": "800",
            "height": "450"
          },
          "datePublished": post.publishDate,
          "dateModified": post.modifiedDate || post.publishDate,
          "author": {
            "@type": "Person",
            "name": post.author
          },
          "publisher": {
            "@id": "https://back2nest.in/#organization"
          },
          "mainEntityOfPage": `https://back2nest.in/blog/${post.slug}`,
          "articleSection": post.category,
          "keywords": post.tags.join(', ')
        }))
      },
      {
        "@type": "WebPage",
        "@id": "https://back2nest.in/blog#webpage",
        "url": "https://back2nest.in/blog",
        "name": "Back2Nest Blog - Expert Insights on School Transportation Safety in Patna Bihar",
        "description": "Explore comprehensive insights, tips, and updates on school transportation safety, GPS tracking innovations, driver training, and student commute solutions in Patna, Bihar from Back2Nest experts.",
        "mainEntity": {
          "@id": "https://back2nest.in/blog#blog"
        },
        "breadcrumb": {
          "@id": "https://back2nest.in/blog#breadcrumb"
        },
        "publisher": {
          "@id": "https://back2nest.in/#organization"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://back2nest.in/#organization",
        "name": "Back2Nest",
        "url": "https://back2nest.in",
        "logo": {
          "@type": "ImageObject",
          "url": "https://back2nest.in/assets/logo.png",
          "width": "200",
          "height": "60"
        }
      }
    ]
  };

  // Breadcrumb structured data
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://back2nest.in/blog#breadcrumb",
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
        "name": "Blog",
        "item": "https://back2nest.in/blog"
      }
    ]
  };

  // Enhanced sample blog data with more comprehensive content
  const samplePosts = [
    {
      id: 1,
      title: "10 Essential Safety Tips for School Van Transportation in Patna Bihar - Complete Parent Guide",
      slug: "essential-safety-tips-school-van-transportation-patna-bihar",
      excerpt: "Discover the most important safety measures that ensure your child's secure journey to and from school every day. Our comprehensive guide covers GPS tracking, driver verification, emergency protocols, and vehicle safety standards specifically for families in Patna, Bihar.",
      content: "Full article content here...",
      image: "https://back2nest.in/images/blog/safety-tips-school-van-patna.jpg",
      author: "Back2Nest Safety Team",
      publishDate: "2024-12-15",
      modifiedDate: "2024-12-15",
      category: "Safety",
      tags: ["Safety Tips", "School Transport", "Parent Guide", "Patna", "Bihar"],
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "How Live GPS Tracking Technology Revolutionizes School Transport Safety in Patna Bihar",
      slug: "live-gps-tracking-revolutionizes-school-transport-patna-bihar",
      excerpt: "Learn how real-time GPS tracking technology is making school transportation safer and more transparent for families in Patna, Bihar. Discover how parents can monitor their child's journey with live updates, emergency alerts, and comprehensive safety features.",
      content: "Full article content here...",
      image: "https://back2nest.in/images/blog/gps-tracking-school-transport-patna.jpg",
      author: "Sachin Kumar",
      publishDate: "2024-12-10",
      modifiedDate: "2024-12-10",
      category: "Technology",
      tags: ["GPS Tracking", "Technology", "Innovation", "Live Monitoring", "Patna"],
      readTime: "10 min read"
    },
    {
      id: 3,
      title: "Professional Driver Training Benefits for Safe School Transportation in Bihar",
      slug: "professional-driver-training-benefits-school-transport-bihar",
      excerpt: "Why trained and certified drivers make all the difference in ensuring safe and reliable school transportation services. Explore our comprehensive driver training programs, background verification processes, and safety protocols that protect students across Bihar.",
      content: "Full article content here...",
      image: "https://back2nest.in/images/blog/driver-training-school-transport-bihar.jpg",
      author: "Back2Nest Training Team",
      publishDate: "2024-12-05",
      modifiedDate: "2024-12-05",
      category: "Driver Training",
      tags: ["Driver Training", "Safety Protocols", "Professional Drivers", "Bihar", "Certification"],
      readTime: "7 min read"
    },
    {
      id: 4,
      title: "Complete Parent's Guide to Choosing the Right School Transport Service in Patna Bihar",
      slug: "complete-parents-guide-choosing-school-transport-patna-bihar",
      excerpt: "A comprehensive guide for parents on what to look for when selecting a reliable school transportation service in Bihar. Learn about safety features, driver qualifications, vehicle standards, insurance coverage, and technology integration for peace of mind.",
      content: "Full article content here...",
      image: "https://back2nest.in/images/blog/parents-guide-school-transport-patna.jpg",
      author: "Back2Nest Advisory Team",
      publishDate: "2024-11-28",
      modifiedDate: "2024-11-28",
      category: "Guides",
      tags: ["Parent Guide", "School Transport", "Selection Criteria", "Patna", "Safety Standards"],
      readTime: "12 min read"
    },
    {
      id: 5,
      title: "Future of School Transportation in Bihar - Sustainable and Smart Solutions",
      slug: "future-school-transportation-bihar-sustainable-smart-solutions",
      excerpt: "Exploring eco-friendly initiatives and sustainable practices in school transportation for a greener future. Discover how Back2Nest is leading innovation in Bihar with electric vehicles, route optimization, and smart technology integration.",
      content: "Full article content here...",
      image: "https://back2nest.in/images/blog/future-school-transport-bihar.jpg",
      author: "Sachin Kumar",
      publishDate: "2024-11-20",
      modifiedDate: "2024-11-20",
      category: "Innovation",
      tags: ["Sustainability", "Future Technology", "Innovation", "Electric Vehicles", "Bihar"],
      readTime: "9 min read"
    },
    {
      id: 6,
      title: "How Back2Nest Ensures 100% Safety During School Commutes in Patna Bihar",
      slug: "back2nest-ensures-100-percent-safety-school-commutes-patna",
      excerpt: "An inside look at the comprehensive safety measures and protocols that make Back2Nest the most trusted choice in Patna. Learn about our multi-layered security approach, emergency response systems, and safety innovations.",
      content: "Full article content here...",
      image: "https://back2nest.in/images/blog/back2nest-safety-measures-patna.jpg",
      author: "Back2Nest Operations Team",
      publishDate: "2024-11-15",
      modifiedDate: "2024-11-15",
      category: "Company Updates",
      tags: ["Back2Nest", "Safety Protocols", "Security Measures", "Patna", "Zero Incidents"],
      readTime: "6 min read"
    },
    {
      id: 7,
      title: "School Van Maintenance Standards and Safety Inspections in Bihar",
      slug: "school-van-maintenance-safety-inspections-bihar",
      excerpt: "Understanding the importance of regular vehicle maintenance and safety inspections for school transportation. Learn about our comprehensive maintenance schedules, safety checks, and quality assurance processes.",
      content: "Full article content here...",
      image: "https://back2nest.in/images/blog/van-maintenance-safety-bihar.jpg",
      author: "Back2Nest Technical Team",
      publishDate: "2024-11-08",
      modifiedDate: "2024-11-08",
      category: "Maintenance",
      tags: ["Vehicle Maintenance", "Safety Inspections", "Quality Standards", "Bihar", "Preventive Care"],
      readTime: "5 min read"
    },
    {
      id: 8,
      title: "Emergency Response Protocols for School Transportation in Patna",
      slug: "emergency-response-protocols-school-transportation-patna",
      excerpt: "Comprehensive emergency response procedures and protocols that ensure student safety during unexpected situations. Learn about our 24/7 response team, communication systems, and crisis management strategies.",
      content: "Full article content here...",
      image: "https://back2nest.in/images/blog/emergency-response-school-transport-patna.jpg",
      author: "Back2Nest Emergency Team",
      publishDate: "2024-11-01",
      modifiedDate: "2024-11-01",
      category: "Emergency Preparedness",
      tags: ["Emergency Response", "Crisis Management", "Student Safety", "Patna", "24/7 Support"],
      readTime: "8 min read"
    }
  ];

  const sampleCategories = [
    { id: 'all', name: 'All Posts', count: 8 },
    { id: 'safety', name: 'Safety', count: 2 },
    { id: 'technology', name: 'Technology', count: 1 },
    { id: 'driver training', name: 'Driver Training', count: 1 },
    { id: 'guides', name: 'Guides', count: 1 },
    { id: 'innovation', name: 'Innovation', count: 1 },
    { id: 'company updates', name: 'Company Updates', count: 1 },
    { id: 'maintenance', name: 'Maintenance', count: 1 }
  ];

  // Fetch blog data (replace with actual API calls)
  const fetchBlogData = async () => {
    try {
      setLoading(true);
      setError('');

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Filter posts based on search and category
      let filteredPosts = samplePosts;
      
      if (searchTerm) {
        filteredPosts = filteredPosts.filter(post => 
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
        );
      }

      if (selectedCategory !== 'all') {
        filteredPosts = filteredPosts.filter(post => 
          post.category.toLowerCase() === selectedCategory.toLowerCase()
        );
      }

      // Pagination
      const startIndex = (currentPage - 1) * postsPerPage;
      const endIndex = startIndex + postsPerPage;
      const paginatedPosts = filteredPosts.slice(startIndex, endIndex);
      
      setPosts(paginatedPosts);
      setTotalPages(Math.ceil(filteredPosts.length / postsPerPage));
      setCategories(sampleCategories);
      setRecentPosts(samplePosts.slice(0, 5));
      
    } catch (err) {
      setError('Failed to load blog posts. Please try again.');
      console.error('Blog fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchBlogData();
  };

  // Handle category change
  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
  };

  // Handle pagination
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const featuredTopics = [
    {
      icon: ShieldCheckIcon,
      title: "Safety Protocols",
      description: "Comprehensive safety measures and protocols for secure school transportation",
      count: "12 Articles"
    },
    {
      icon: ArrowTrendingUpIcon,
      title: "Industry Insights",
      description: "Latest trends and developments in school transportation industry",
      count: "8 Articles"
    },
    {
      icon: LightBulbIcon,
      title: "Innovation & Technology",
      description: "Cutting-edge technology solutions revolutionizing student transport",
      count: "6 Articles"
    },
    {
      icon: BookOpenIcon,
      title: "Educational Resources",
      description: "Guides and resources for parents and educational institutions",
      count: "15 Articles"
    }
  ];

  return (
    <>
      <SEO 
        title="Back2Nest Blog - Expert Insights on School Transportation Safety in Patna Bihar | Latest Updates, Tips & Innovations"
        description="Explore comprehensive insights, safety tips, driver training guides, GPS tracking innovations, and student transportation solutions in Patna, Bihar. Stay updated with Back2Nest's expert advice on school transport safety, vehicle maintenance, emergency protocols, and technology advancements for secure daily commutes."
        keywords="school transportation blog Patna, safe school rides Bihar, school transport tips, Back2Nest news updates, school bus safety blog Bihar, student transportation insights Patna, school van safety tips Bihar, driver training blog, GPS tracking insights, school transport innovations, emergency protocols school transport, vehicle maintenance tips, parent guides school transport Bihar"
        canonicalUrl="https://back2nest.in/blog"
        ogTitle="Back2Nest Blog - Expert School Transportation Insights & Safety Tips in Patna Bihar"
        ogDescription="Stay updated with Back2Nest's comprehensive blog covering school transport safety, GPS tracking innovations, driver training, emergency protocols, and expert tips for parents in Patna, Bihar."
        ogImage="https://back2nest.in/images/blog-featured-og.jpg"
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
              <Link to="/" className="hover:text-blue-600 transition-colors" title="Back2Nest Home - School Transportation Patna">
                Home
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-800 font-medium">Blog</li>
          </ol>
        </nav>

        <div className="container mx-auto px-6 py-8">
          <main className="max-w-7xl mx-auto">
            {/* Header Section */}
            <header className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                Back2Nest Expert Insights & Updates
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Latest Insights on 
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  School Transportation Safety
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                Stay updated with comprehensive insights, expert tips, and latest innovations in school transportation safety from <strong>Patna, Bihar's most trusted school van service</strong>. 
                Our blog features in-depth guides, safety protocols, technology updates, and professional advice to help parents make informed decisions about their child's daily commute. 
                Discover how <em>Back2Nest</em> is revolutionizing student transportation with cutting-edge solutions and unwavering commitment to safety.
              </p>
              
              {/* Blog Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-gray-600">Expert Articles</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-green-600">15k+</div>
                  <div className="text-sm text-gray-600">Monthly Readers</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-purple-600">8</div>
                  <div className="text-sm text-gray-600">Categories</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-orange-600">24/7</div>
                  <div className="text-sm text-gray-600">Updates</div>
                </div>
              </div>
            </header>

            {/* Featured Topics Section */}
            <section className={`mb-16 transform transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} aria-labelledby="featured-topics">
              <h2 id="featured-topics" className="text-3xl font-bold text-gray-900 text-center mb-12">
                Featured Topics - School Transportation Expertise
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {featuredTopics.map((topic, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4 group-hover:scale-110 transition-transform">
                      <topic.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{topic.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{topic.description}</p>
                    <div className="text-blue-600 text-sm font-medium">{topic.count}</div>
                  </div>
                ))}
              </div>
            </section>

            <div className="grid lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3">
                {/* Enhanced Search Bar */}
                <div className={`mb-8 transform transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <form onSubmit={handleSearch} className="relative max-w-2xl">
                    <div className="relative">
                      <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search articles about safety, GPS tracking, drivers, or any school transport topic..."
                        className="w-full px-4 py-3 pl-12 pr-24 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm"
                        aria-label="Search blog posts"
                      />
                      <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
                      <button
                        type="submit"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                        aria-label="Search articles"
                      >
                        Search
                      </button>
                    </div>
                  </form>
                </div>

                {/* Loading State */}
                {loading && (
                  <div className="flex items-center justify-center py-20">
                    <div className="text-center">
                      <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                      <p className="text-gray-600">Loading expert articles on school transportation...</p>
                    </div>
                  </div>
                )}

                {/* Error State */}
                {error && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-lg mb-8">
                    <ExclamationTriangleIcon className="w-5 h-5 flex-shrink-0" />
                    <span>{error}</span>
                    <button 
                      onClick={fetchBlogData}
                      className="ml-auto text-red-700 underline hover:no-underline"
                      aria-label="Retry loading blog posts"
                    >
                      Retry
                    </button>
                  </div>
                )}

                {/* Enhanced Blog Posts Grid */}
                {!loading && !error && (
                  <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {posts.length > 0 ? (
                      <>
                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                          {posts.map((post, index) => (
                            <article
                              key={post.id}
                              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                              itemScope
                              itemType="https://schema.org/BlogPosting"
                            >
                              <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 relative overflow-hidden">
                                <img
                                  src={post.image}
                                  alt={`${post.title} - School transportation insights from Back2Nest Patna Bihar`}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                  itemProp="image"
                                  loading="lazy"
                                  width="800"
                                  height="450"
                                />
                                <div className="absolute top-4 left-4">
                                  <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                                    {post.category}
                                  </span>
                                </div>
                                <div className="absolute top-4 right-4">
                                  <span className="px-2 py-1 bg-black/20 backdrop-blur-sm text-white text-xs rounded-full">
                                    {post.readTime}
                                  </span>
                                </div>
                              </div>
                              
                              <div className="p-6">
                                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                                  <div className="flex items-center gap-1">
                                    <UserIcon className="w-4 h-4" />
                                    <span itemProp="author">{post.author}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <CalendarDaysIcon className="w-4 h-4" />
                                    <time itemProp="datePublished" dateTime={post.publishDate}>
                                      {new Date(post.publishDate).toLocaleDateString('en-IN', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                      })}
                                    </time>
                                  </div>
                                </div>
                                
                                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight" itemProp="headline">
                                  <Link 
                                    to={`/blog/${post.slug}`} 
                                    className="hover:underline"
                                    title={`Read full article: ${post.title}`}
                                  >
                                    {post.title}
                                  </Link>
                                </h2>
                                
                                <p className="text-gray-600 mb-4 leading-relaxed text-sm" itemProp="description">
                                  {post.excerpt}
                                </p>
                                
                                <div className="flex items-center justify-between">
                                  <div className="flex flex-wrap gap-2">
                                    {post.tags.slice(0, 3).map((tag, tagIndex) => (
                                      <span
                                        key={tagIndex}
                                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full flex items-center gap-1"
                                      >
                                        <TagIcon className="w-3 h-3" />
                                        {tag}
                                      </span>
                                    ))}
                                  </div>
                                  <Link
                                    to={`/blog/${post.slug}`}
                                    className="text-blue-600 hover:text-blue-800 font-semibold text-sm hover:underline flex items-center gap-1"
                                    title={`Read more about: ${post.title}`}
                                  >
                                    Read More →
                                  </Link>
                                </div>
                              </div>
                              
                              <meta itemProp="url" content={`https://back2nest.in/blog/${post.slug}`} />
                            </article>
                          ))}
                        </div>

                        {/* Enhanced Pagination */}
                        {totalPages > 1 && (
                          <div className="flex items-center justify-center gap-2">
                            <button
                              onClick={() => handlePageChange(currentPage - 1)}
                              disabled={currentPage === 1}
                              className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                              aria-label="Previous page"
                            >
                              <ChevronLeftIcon className="w-5 h-5" />
                            </button>
                            
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                              <button
                                key={page}
                                onClick={() => handlePageChange(page)}
                                className={`px-4 py-2 border rounded-lg transition-colors ${
                                  currentPage === page
                                    ? 'bg-blue-600 text-white border-blue-600'
                                    : 'border-gray-300 hover:bg-gray-50'
                                }`}
                                aria-label={`Go to page ${page}`}
                              >
                                {page}
                              </button>
                            ))}
                            
                            <button
                              onClick={() => handlePageChange(currentPage + 1)}
                              disabled={currentPage === totalPages}
                              className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                              aria-label="Next page"
                            >
                              <ChevronRightIcon className="w-5 h-5" />
                            </button>
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="text-center py-20">
                        <div className="max-w-md mx-auto">
                          <BookOpenIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                          <p className="text-gray-600 text-lg mb-4">No blog posts found matching your criteria.</p>
                          <p className="text-gray-500 text-sm mb-6">
                            Try adjusting your search terms or browse all articles about school transportation safety, 
                            GPS tracking, driver training, and more.
                          </p>
                          <button 
                            onClick={() => {
                              setSearchTerm('');
                              setSelectedCategory('all');
                              setCurrentPage(1);
                            }}
                            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                          >
                            View All Articles
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Enhanced Sidebar */}
              <aside className={`lg:col-span-1 transform transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                {/* Categories */}
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <FolderIcon className="w-5 h-5 text-blue-600" />
                    Article Categories
                  </h3>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <button
                        key={category.id}
                        onClick={() => handleCategoryChange(category.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          selectedCategory === category.id
                            ? 'bg-blue-100 text-blue-700 font-semibold'
                            : 'hover:bg-gray-100 text-gray-700'
                        }`}
                        title={`Browse ${category.name.toLowerCase()} articles`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{category.name}</span>
                          <span className="text-sm text-gray-500">({category.count})</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Recent Posts */}
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Latest Articles</h3>
                  <div className="space-y-4">
                    {recentPosts.map(post => (
                      <article key={post.id} className="group">
                        <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight mb-2 text-sm">
                          <Link 
                            to={`/blogs/${post.slug}`} 
                            className="hover:underline"
                            title={`Read: ${post.title}`}
                          >
                            {post.title.length > 60 ? post.title.substring(0, 60) + '...' : post.title}
                          </Link>
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                          <CalendarDaysIcon className="w-3 h-3" />
                          <time dateTime={post.publishDate}>
                            {new Date(post.publishDate).toLocaleDateString('en-IN', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </time>
                          <span className="text-blue-600 ml-auto">{post.readTime}</span>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>

                {/* Popular Tags */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Topics</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Safety Tips', 'GPS Tracking', 'Driver Training', 'Patna', 'Bihar', 'School Transport', 'Emergency Response', 'Technology', 'Parent Guide'].map((tag, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 text-sm rounded-full transition-colors cursor-pointer"
                        onClick={() => setSearchTerm(tag)}
                        title={`Search articles about ${tag}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </aside>
            </div>

            {/* Internal Links Section */}
            <section className="mt-16 mb-12" aria-labelledby="related-pages">
              <h2 id="related-pages" className="text-3xl font-bold text-gray-900 text-center mb-8">
                Explore More About Back2Nest Services
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Link to="/safety" className="block group">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                        <ShieldCheckIcon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Safety Features</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Discover our comprehensive safety measures including live GPS tracking, certified drivers, vehicle inspections, and emergency support protocols.
                    </p>
                  </div>
                </Link>

                <Link to="/about" className="block group">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                        <BookOpenIcon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">About Back2Nest</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Learn about our mission, founder Sachin Kumar's vision, and how we're revolutionizing school transportation in Patna, Bihar.
                    </p>
                  </div>
                </Link>

                <Link to="/contact" className="block group">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                        <EnvelopeIcon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Contact Us</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Get in touch with our team for enrollment, safety consultations, and detailed information about our school transportation services.
                    </p>
                  </div>
                </Link>
              </div>
            </section>

            {/* Enhanced Call to Action */}
            <section className="text-center" aria-labelledby="newsletter-signup">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h2 id="newsletter-signup" className="text-3xl font-bold mb-4">
                  Stay Updated with Back2Nest Expert Insights
                </h2>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Get the latest insights on school transportation safety, technology innovations, and expert tips delivered directly to your inbox. 
                  Join thousands of parents and educators who trust Back2Nest for reliable transportation information.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/students"
                    className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    title="Book safe school transportation with Back2Nest"
                  >
                    Book Safe Ride Now
                  </Link>
                  <a
                    href="tel:+918935904820"
                    className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
                    title="Call Back2Nest for consultation"
                  >
                    Call for Expert Consultation
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

export default Blog;
