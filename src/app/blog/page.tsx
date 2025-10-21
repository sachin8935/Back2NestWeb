import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight, BookOpen, Milk } from 'lucide-react';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Dairy Blog | Milk Tips & Health Benefits - Back2Nest',
  description: 'Expert articles on A2 milk benefits, dairy nutrition, storage tips, and traditional dairy products. Learn from Back2Nest - Patna\'s trusted milk delivery service.',
  keywords: [
    'dairy blog patna',
    'A2 milk benefits',
    'milk nutrition tips',
    'ghee benefits',
    'milk storage tips',
    'desi cow milk benefits',
    'health blog patna',
    'dairy products patna',
    'back2nest blog'
  ],
  openGraph: {
    title: 'Dairy & Nutrition Blog | Back2Nest Patna',
    description: 'Expert tips on milk, dairy nutrition, and healthy living from Back2Nest.',
    url: 'https://www.back2nest.in/blog',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.back2nest.in/blog',
  },
};

const blogPosts = [
  {
    slug: 'benefits-of-A2-milk',
    title: 'Top Benefits of A2 Milk: Why It\'s Better for Your Health',
    excerpt: 'Discover the amazing health benefits of A2 milk from desi cows. Learn how A2 milk improves digestion, immunity, and overall well-being for your family.',
    image: 'https://res.cloudinary.com/back2nest/image/upload/v1760552656/offer_banners/gjb3sg9cvpzu2yuzxvvd.jpg',
    category: 'Nutrition',
    readTime: '6 min read',
    date: 'January 15, 2025'
  },
  {
    slug: 'desi-cow-milk-benefits',
    title: 'Desi Cow Milk Benefits: Why Indian Breeds Are Superior',
    excerpt: 'Learn why milk from indigenous Indian cow breeds like Gir and Sahiwal is healthier, more nutritious, and better for digestion than hybrid varieties.',
    image: 'https://res.cloudinary.com/back2nest/image/upload/v1760552850/offer_banners/zrmudosi8ifnghrhuzna.png',
    category: 'Health',
    readTime: '7 min read',
    date: 'January 12, 2025'
  },
  {
    slug: 'desi-ghee-vs-regular-ghee',
    title: 'Bilona Ghee vs Regular Ghee: Which One Is Better?',
    excerpt: 'Understand the difference between traditional Bilona ghee and regular ghee. Discover why Back2Nest\'s A2 Bilona ghee is healthier and more authentic.',
    image: 'https://res.cloudinary.com/back2nest/image/upload/v1760552874/offer_banners/em79ofmcsxf5upawy9b7.png',
    category: 'Products',
    readTime: '8 min read',
    date: 'January 10, 2025'
  },
  {
    slug: 'best-time-to-drink-milk',
    title: 'Best Time to Drink Milk: Morning or Night?',
    excerpt: 'Find out the ideal time to drink milk for maximum health benefits. Learn how timing affects digestion, sleep, and nutrient absorption.',
    image: 'https://res.cloudinary.com/back2nest/image/upload/v1760552656/offer_banners/gjb3sg9cvpzu2yuzxvvd.jpg',
    category: 'Tips',
    readTime: '5 min read',
    date: 'January 8, 2025'
  },
  {
    slug: 'milk-storage-tips-patna',
    title: 'How to Store Fresh Milk in Patna\'s Climate: Expert Tips',
    excerpt: 'Practical tips for storing fresh milk in Patna\'s hot weather. Keep your milk fresh longer with proper storage techniques and temperature control.',
    image: 'https://res.cloudinary.com/back2nest/image/upload/v1760552850/offer_banners/zrmudosi8ifnghrhuzna.png',
    category: 'Tips',
    readTime: '4 min read',
    date: 'January 5, 2025'
  },
];

export default function BlogPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    'name': 'Back2Nest Dairy & Nutrition Blog',
    'description': 'Expert articles on dairy products, nutrition, and healthy living',
    'url': 'https://www.back2nest.in/blog',
    'publisher': {
      '@type': 'Organization',
      'name': 'Back2Nest',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://www.back2nest.in/logo.png'
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Header */}
        <header className="bg-white shadow-md sticky top-0 z-50">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <Milk className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">
                Back<span className="text-blue-600">2</span>Nest
              </span>
            </Link>
            <Link href="/" className="text-blue-600 hover:text-blue-700 font-medium">
              ← Back to Home
            </Link>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6">
              <BookOpen className="w-5 h-5" />
              <span className="font-semibold">Dairy & Nutrition Blog</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Expert Tips on Dairy, Nutrition & Healthy Living
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover the benefits of A2 milk, learn proper storage techniques, and explore the world of traditional dairy products with Back2Nest
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link 
                key={index}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-blue-600 font-semibold group-hover:gap-3 gap-2 transition-all">
                    <span>Read More</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-700 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">
              Want Fresh A2 Milk Delivered Daily?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Subscribe to Back2Nest and get 100% pure, farm-fresh milk delivered to your doorstep in Patna by 5 AM every morning
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quick-order"
                className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold hover:bg-blue-50 transition shadow-xl"
              >
                Order Now
              </Link>
              <Link
                href="/products"
                className="bg-blue-500 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-400 transition shadow-xl"
              >
                View Products
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
