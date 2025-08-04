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
  ExclamationTriangleIcon
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

  // Enhanced structured data for blog
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": "https://back2nest.in/blog#blog",
        "name": "Back2Nest Blog - School Transportation Insights",
        "description": "Latest updates, tips, and insights on safe school transportation, driver safety, and student commute solutions in Patna, Bihar.",
        "url": "https://back2nest.in/blog",
        "publisher": {
          "@type": "Organization",
          "name": "Back2Nest",
          "logo": {
            "@type": "ImageObject",
            "url": "https://back2nest.in/assets/logo.png",
            "width": "200",
            "height": "60"
          }
        },
        "inLanguage": "en-IN",
        "blogPost": posts.map(post => ({
          "@type": "BlogPosting",
          "@id": `https://back2nest.in/blog/${post.slug}#article`,
          "headline": post.title,
          "description": post.excerpt,
          "image": post.image,
          "datePublished": post.publishDate,
          "dateModified": post.modifiedDate || post.publishDate,
          "author": {
            "@type": "Person",
            "name": post.author
          },
          "publisher": {
            "@id": "https://back2nest.in/blog#blog"
          }
        }))
      },
      {
        "@type": "WebPage",
        "@id": "https://back2nest.in/blog#webpage",
        "url": "https://back2nest.in/blog",
        "name": "Blog - Latest Updates on School Transportation | Back2Nest Patna Bihar",
        "description": "Explore insights, tips, and updates on school transportation safety and innovations",
        "mainEntity": {
          "@id": "https://back2nest.in/blog#blog"
        }
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
        "name": "Blog",
        "item": "https://back2nest.in/blog"
      }
    ]
  };

  // Sample blog data (replace with API call)
  const samplePosts = [
    {
      id: 1,
      title: "10 Essential Safety Tips for School Van Transportation",
      slug: "essential-safety-tips-school-van-transportation",
      excerpt: "Discover the most important safety measures that ensure your child's secure journey to and from school every day.",
      content: "Full article content here...",
      image: "https://back2nest.in/images/blog/safety-tips.jpg",
      author: "Back2Nest Team",
      publishDate: "2024-12-15",
      modifiedDate: "2024-12-15",
      category: "Safety",
      tags: ["Safety", "Tips", "School Transport"],
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "How Live GPS Tracking Revolutionizes School Transport in Patna",
      slug: "live-gps-tracking-school-transport-patna",
      excerpt: "Learn how real-time GPS tracking technology is making school transportation safer and more transparent for families in Patna, Bihar.",
      content: "Full article content here...",
      image: "https://back2nest.in/images/blog/gps-tracking.jpg",
      author: "Sachin Kumar",
      publishDate: "2024-12-10",
      modifiedDate: "2024-12-10",
      category: "Technology",
      tags: ["GPS", "Technology", "Innovation"],
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Benefits of Professional Driver Training for School Transport",
      slug: "professional-driver-training-benefits",
      excerpt: "Why trained and certified drivers make all the difference in ensuring safe and reliable school transportation services.",
      content: "Full article content here...",
      image: "https://back2nest.in/images/blog/driver-training.jpg",
      author: "Back2Nest Team",
      publishDate: "2024-12-05",
      modifiedDate: "2024-12-05",
      category: "Drivers",
      tags: ["Drivers", "Training", "Safety"],
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Parent's Guide to Choosing the Right School Transport Service",
      slug: "parents-guide-choosing-school-transport",
      excerpt: "A comprehensive guide for parents on what to look for when selecting a reliable school transportation service in Bihar.",
      content: "Full article content here...",
      image: "https://back2nest.in/images/blog/parents-guide.jpg",
      author: "Back2Nest Team",
      publishDate: "2024-11-28",
      modifiedDate: "2024-11-28",
      category: "Guides",
      tags: ["Parents", "Guide", "School Transport"],
      readTime: "8 min read"
    },
    {
      id: 5,
      title: "The Future of School Transportation: Sustainable Solutions",
      slug: "future-school-transportation-sustainable",
      excerpt: "Exploring eco-friendly initiatives and sustainable practices in school transportation for a greener future.",
      content: "Full article content here...",
      image: "https://back2nest.in/images/blog/sustainable-transport.jpg",
      author: "Sachin Kumar",
      publishDate: "2024-11-20",
      modifiedDate: "2024-11-20",
      category: "Innovation",
      tags: ["Sustainability", "Future", "Innovation"],
      readTime: "6 min read"
    },
    {
      id: 6,
      title: "How Back2Nest Ensures 100% Safety During School Commutes",
      slug: "back2nest-ensures-safety-school-commutes",
      excerpt: "An inside look at the comprehensive safety measures and protocols that make Back2Nest the most trusted choice in Patna.",
      content: "Full article content here...",
      image: "https://back2nest.in/images/blog/safety-measures.jpg",
      author: "Back2Nest Team",
      publishDate: "2024-11-15",
      modifiedDate: "2024-11-15",
      category: "Safety",
      tags: ["Back2Nest", "Safety", "Protocols"],
      readTime: "5 min read"
    }
  ];

  const sampleCategories = [
    { id: 'all', name: 'All Posts', count: 6 },
    { id: 'safety', name: 'Safety', count: 3 },
    { id: 'technology', name: 'Technology', count: 1 },
    { id: 'drivers', name: 'Drivers', count: 1 },
    { id: 'guides', name: 'Guides', count: 1 },
    { id: 'innovation', name: 'Innovation', count: 1 }
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
      setRecentPosts(samplePosts.slice(0, 3));
      
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

  return (
    <>
      <SEO 
        title="Blog - Latest Updates and Tips on School Transportation | Back2Nest Patna Bihar"
        description="Explore the latest news, tips, and insights on school transportation safety, driver training, GPS tracking, and student commute solutions from Back2Nest. Stay informed about safe school transport innovations in Patna, Bihar."
        keywords="school transportation blog Patna, safe school rides Bihar, school transport tips, Back2Nest news, school bus safety blog, student transportation updates, school van safety tips, driver training blog, GPS tracking insights"
        canonicalUrl="https://back2nest.in/blog"
        ogTitle="Back2Nest Blog - Latest Insights on School Transportation in Patna Bihar"
        ogDescription="Stay updated with Back2Nest's blog covering school transport safety, tips, driver training, and innovations in Patna, Bihar. Expert insights for parents and schools."
        ogImage="https://back2nest.in/images/blog-og.jpg"
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
            <li className="text-gray-800 font-medium">Blog</li>
          </ol>
        </nav>

        <div className="container mx-auto px-6 py-8">
          <main className="max-w-7xl mx-auto">
            {/* Header Section */}
            <header className={`text-center mb-12 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                Back2Nest Blog
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Latest Insights on 
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  School Transportation
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Stay updated with the latest news, safety tips, and innovations in school transportation. 
                Expert insights to help you make informed decisions for your child's daily commute in <strong>Patna, Bihar</strong>.
              </p>
            </header>

            <div className="grid lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3">
                {/* Search Bar */}
                <div className={`mb-8 transform transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <form onSubmit={handleSearch} className="relative max-w-md">
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Search blog posts..."
                      className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                    <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
                    <button
                      type="submit"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Search
                    </button>
                  </form>
                </div>

                {/* Loading State */}
                {loading && (
                  <div className="flex items-center justify-center py-20">
                    <div className="text-center">
                      <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                      <p className="text-gray-600">Loading blog posts...</p>
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
                    >
                      Retry
                    </button>
                  </div>
                )}

                {/* Blog Posts Grid */}
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
                                  alt={post.title}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                  itemProp="image"
                                  loading="lazy"
                                />
                                <div className="absolute top-4 left-4">
                                  <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                                    {post.category}
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
                                  <span className="text-blue-600">{post.readTime}</span>
                                </div>
                                
                                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors" itemProp="headline">
                                  <Link to={`/blog/${post.slug}`} className="hover:underline">
                                    {post.title}
                                  </Link>
                                </h2>
                                
                                <p className="text-gray-600 mb-4 leading-relaxed" itemProp="description">
                                  {post.excerpt}
                                </p>
                                
                                <div className="flex items-center justify-between">
                                  <div className="flex flex-wrap gap-2">
                                    {post.tags.slice(0, 2).map((tag, tagIndex) => (
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
                                    className="text-blue-600 hover:text-blue-800 font-semibold text-sm hover:underline"
                                  >
                                    Read More →
                                  </Link>
                                </div>
                              </div>
                              
                              <meta itemProp="url" content={`https://back2nest.in/blog/${post.slug}`} />
                            </article>
                          ))}
                        </div>

                        {/* Pagination */}
                        {totalPages > 1 && (
                          <div className="flex items-center justify-center gap-2">
                            <button
                              onClick={() => handlePageChange(currentPage - 1)}
                              disabled={currentPage === 1}
                              className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
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
                              >
                                {page}
                              </button>
                            ))}
                            
                            <button
                              onClick={() => handlePageChange(currentPage + 1)}
                              disabled={currentPage === totalPages}
                              className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              <ChevronRightIcon className="w-5 h-5" />
                            </button>
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="text-center py-20">
                        <p className="text-gray-600 text-lg">No blog posts found matching your criteria.</p>
                        <button 
                          onClick={() => {
                            setSearchTerm('');
                            setSelectedCategory('all');
                            setCurrentPage(1);
                          }}
                          className="mt-4 text-blue-600 hover:text-blue-800 underline"
                        >
                          View all posts
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <aside className={`lg:col-span-1 transform transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                {/* Categories */}
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <FolderIcon className="w-5 h-5 text-blue-600" />
                    Categories
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
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Posts</h3>
                  <div className="space-y-4">
                    {recentPosts.map(post => (
                      <article key={post.id} className="group">
                        <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight mb-2">
                          <Link to={`/blog/${post.slug}`} className="hover:underline">
                            {post.title}
                          </Link>
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <CalendarDaysIcon className="w-3 h-3" />
                          <time dateTime={post.publishDate}>
                            {new Date(post.publishDate).toLocaleDateString('en-IN', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </time>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </aside>
            </div>

            {/* Call to Action */}
            <section className="mt-16 text-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-4">
                  Stay Updated with Back2Nest
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Get the latest insights on school transportation safety and innovations delivered to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/students"
                    className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    Book Safe Ride
                  </Link>
                  <a
                    href="tel:+918935904820"
                    className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
                  >
                    Contact Us
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
