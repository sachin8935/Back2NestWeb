import { Milk, ArrowLeft, Star, Quote, ThumbsUp, Users, Award, CheckCircle, MapPin, Calendar, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Customer Reviews & Testimonials | Back2Nest Patna',
  description: 'Read authentic reviews from 1000+ satisfied customers in Patna. Discover why families trust Back2Nest for fresh A2 milk, dahi, paneer, and ghee delivery. Rated 4.9/5 stars.',
  keywords: 'Back2Nest reviews, customer testimonials Patna, dairy product reviews, milk delivery reviews Patna, A2 milk customer feedback, Back2Nest ratings, verified customer reviews, dairy reviews Bihar',
  openGraph: {
    title: 'Customer Reviews & Testimonials | Back2Nest Patna',
    description: 'Read authentic reviews from 1000+ satisfied customers in Patna. Rated 4.9/5 stars for quality dairy products.',
    images: ['/logo.png'],
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.back2nest.in/reviews',
  },
};

export default function ReviewsPage() {
  const reviews = [
    {
      name: "Priya Sharma",
      location: "Boring Road, Patna",
      date: "January 2025",
      rating: 5,
      product: "Fresh A2 Milk",
      title: "Best Quality Milk in Patna - Pure and Fresh",
      review: "I have been ordering milk from Back2Nest for 3 months now and I am extremely satisfied. The milk is genuinely pure A2 cow milk with no water mixing. My children love the taste and I can see the cream layer on top which shows it's natural. Delivery is always on time at 6 AM. Highly recommend for families looking for pure desi cow milk in Patna.",
      verified: true
    },
    {
      name: "Rajesh Kumar",
      location: "Kankarbagh, Patna",
      date: "December 2024",
      rating: 5,
      product: "Danedar Ghee",
      title: "Authentic Bilona Ghee - Just Like Homemade",
      review: "The danedar ghee from Back2Nest is exceptional! You can see the granules which is a sign of pure bilona ghee. The aroma is amazing when you open the container. I use it for cooking and also give it to my kids with roti. The taste reminds me of my grandmother's homemade ghee. Worth every rupee. This is real desi ghee, not the commercial ones available in market.",
      verified: true
    },
    {
      name: "Anjali Verma",
      location: "Patliputra Colony, Patna",
      date: "January 2025",
      rating: 5,
      product: "Fresh Paneer",
      title: "Softest Paneer I Have Ever Had - No Chemical Taste",
      review: "I was tired of buying hard, rubbery paneer from local shops. Back2Nest paneer is incredibly soft and fresh. You can tell it's made with lemon and not chemicals. Perfect for paneer tikka and butter masala. My husband who is very particular about food quality is very happy. They deliver it fresh on the same day it's made. Great for health-conscious families.",
      verified: true
    },
    {
      name: "Vikram Singh",
      location: "Fraser Road, Patna",
      date: "December 2024",
      rating: 5,
      product: "Fresh Dahi",
      title: "Thick and Creamy Dahi - Perfect for Lassi",
      review: "The dahi is so thick that you can set it upside down and it won't fall! Natural fermentation gives it the perfect taste. I make lassi every morning and this dahi is perfect for it. No sour taste, just the right tanginess. My mother-in-law who is very strict about dairy products has approved it. That says everything!",
      verified: true
    },
    {
      name: "Meera Reddy",
      location: "Rajendra Nagar, Patna",
      date: "January 2025",
      rating: 5,
      product: "Fresh A2 Milk",
      title: "Pure A2 Milk Helped My Son's Digestion Issues",
      review: "My 5-year-old son had digestive problems with regular milk. After switching to Back2Nest A2 milk, his stomach issues have reduced significantly. A2 protein is easier to digest and I can see the difference. The milk quality is excellent, always fresh, and the delivery person is very punctual. Thank you Back2Nest for providing genuine A2 milk in Patna!",
      verified: true
    },
    {
      name: "Sanjay Mishra",
      location: "Boring Road, Patna",
      date: "December 2024",
      rating: 5,
      product: "Danedar Ghee",
      title: "Traditional Bilona Ghee for My Family's Health",
      review: "I specifically wanted bilona ghee for my family and Back2Nest delivers exactly that. The danedar texture confirms it's made traditionally. I use it for tadka and also consume one spoon daily for immunity. The quality is consistent batch after batch. Price is reasonable considering the quality and traditional method used. Excellent service!",
      verified: true
    },
    {
      name: "Kavita Jha",
      location: "Boring Canal Road, Patna",
      date: "January 2025",
      rating: 5,
      product: "Fresh Paneer",
      title: "Fresh Paneer Delivered Daily - Kids Love It",
      review: "My kids eat paneer almost daily and freshness matters a lot. Back2Nest delivers fresh paneer every morning and it stays soft for 3-4 days in fridge. The natural lemon curdling makes it healthier than chemical-curdled paneer. Perfect for sandwiches, curries, and tikkas. I have stopped buying from other sources. Reliable and consistent quality.",
      verified: true
    },
    {
      name: "Deepak Pandey",
      location: "Kankarbagh, Patna",
      date: "December 2024",
      rating: 5,
      product: "Fresh Dahi",
      title: "Natural Fermented Dahi - No Artificial Taste",
      review: "The dahi has a natural taste with no artificial flavor. I can see they use good quality culture for fermentation. It's not too sour or too bland, just perfect. I eat it with lunch daily and also use it for making kadhi. My diabetic father also consumes it as it's sugar-free and natural. Great product for daily consumption!",
      verified: true
    },
    {
      name: "Pooja Agarwal",
      location: "Patliputra Colony, Patna",
      date: "January 2025",
      rating: 5,
      product: "Fresh A2 Milk & Ghee",
      title: "Complete Dairy Solution for Our Family",
      review: "We order both milk and ghee from Back2Nest. The subscription model is very convenient. Both products are of excellent quality. The milk is genuinely A2 as you can see the cream layer, and the ghee has that traditional aroma. Customer service is also good, they respond quickly to queries. Happy to find a reliable dairy provider in Patna.",
      verified: true
    },
    {
      name: "Amit Kumar Sinha",
      location: "Boring Road, Patna",
      date: "December 2024",
      rating: 5,
      product: "Fresh Paneer",
      title: "Best Paneer for Gym Diet - High Protein",
      review: "As a fitness enthusiast, I need high-protein paneer daily. Back2Nest paneer is perfect - made from A2 milk, no preservatives, and very fresh. The protein content is excellent and it fits perfectly in my diet plan. Soft texture makes it easy to eat raw in salads too. Great for people following keto or high-protein diets. Highly recommended!",
      verified: true
    },
    {
      name: "Sunita Devi",
      location: "Gardanibagh, Patna",
      date: "January 2025",
      rating: 5,
      product: "Fresh Dahi",
      title: "Authentic Taste Like Homemade Dahi",
      review: "I have tried many brands but this dahi tastes exactly like the one I used to make at home. The consistency is perfect, not watery at all. I use it for making dahi vada and raita, and guests always ask where I get such good quality dahi. The best part is it's delivered fresh daily. No need to worry about making dahi at home anymore!",
      verified: true
    },
    {
      name: "Rahul Bhardwaj",
      location: "Fraser Road, Patna",
      date: "December 2024",
      rating: 5,
      product: "Danedar Ghee",
      title: "Pure Desi Ghee for Traditional Cooking",
      review: "I cook traditional Bihari food and needed pure desi ghee. Back2Nest bilona ghee is perfect for litti chokha and other dishes. The granular texture and natural aroma enhance the taste of food. My wife is very happy with the quality. We have been using it for 2 months now and will continue. Thank you for bringing authentic ghee to Patna!",
      verified: true
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Families", icon: Users },
    { number: "4.9/5", label: "Average Rating", icon: Star },
    { number: "98%", label: "Repeat Customers", icon: TrendingUp },
    { number: "1000+", label: "Reviews", icon: ThumbsUp }
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Back2Nest - Fresh Dairy Products Patna",
          "image": "https://www.back2nest.in/logo.png",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Kadam Kuan",
            "addressLocality": "Patna",
            "addressRegion": "Bihar",
            "postalCode": "800003",
            "addressCountry": "IN"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "bestRating": "5",
            "worstRating": "1",
            "ratingCount": "1000"
          },
          "review": reviews.map(r => ({
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": r.name
            },
            "datePublished": r.date,
            "reviewBody": r.review,
            "name": r.title,
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": r.rating,
              "bestRating": "5",
              "worstRating": "1"
            }
          }))
        })
      }} />

      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Milk className="w-8 h-8 text-amber-600" />
              <span className="text-2xl font-bold text-gray-900">Back<span className="text-amber-600">2</span>Nest</span>
            </Link>
            <Link href="/" className="flex items-center space-x-2 text-amber-600 hover:text-amber-700 transition">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
          </nav>
        </header>

        <section className="bg-gradient-to-b from-white to-amber-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <div className="bg-amber-100 p-4 rounded-full">
                  <Award className="w-12 h-12 text-amber-600" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Customer Reviews & Testimonials<br />
                <span className="text-amber-600">Real Experiences from Patna Families</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover why over 500 families in Patna trust Back2Nest for their daily dairy needs. Read authentic reviews from real customers about our fresh A2 milk, dahi, paneer, and danedar ghee.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center">
                  <stat.icon className="w-10 h-10 text-amber-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Verified reviews from real customers across Patna, Bihar</p>
          </div>

          <div className="space-y-8">
            {reviews.map((review, index) => (
              <article key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      {review.name.charAt(0)}
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{review.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                          <span className="font-semibold text-gray-900">{review.name}</span>
                          <span className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{review.location}</span>
                          </span>
                          {review.verified && (
                            <span className="flex items-center space-x-1 text-green-600">
                              <CheckCircle className="w-4 h-4" />
                              <span className="font-medium">Verified Purchase</span>
                            </span>
                          )}
                        </div>
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="flex space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-5 h-5 ${
                                  i < review.rating
                                    ? 'fill-yellow-400 text-yellow-400'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-500 flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{review.date}</span>
                          </span>
                        </div>
                        <div className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                          {review.product}
                        </div>
                      </div>
                      <Quote className="w-12 h-12 text-amber-200 hidden md:block" />
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {review.review}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-br from-amber-600 to-amber-700 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Join Our Happy Customers</h2>
            <p className="text-xl text-amber-50 mb-8 leading-relaxed">
              Experience the same quality and freshness that hundreds of families in Patna enjoy daily. Order now and see why our customers rate us 4.9 out of 5 stars!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://play.google.com/store/apps/details?id=com.app.back2nest" target="_blank" rel="noopener noreferrer" className="bg-white text-amber-600 px-10 py-4 rounded-full text-lg font-bold hover:bg-amber-50 transition">
                Download App
              </a>
              <Link href="/#order" className="border-2 border-white text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-white/10 transition">
                Subscribe Online
              </Link>
            </div>
            <p className="text-amber-100 mt-6">
              Free delivery across Patna | Daily fresh production | 100% satisfaction guaranteed
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Customer Reviews by Product</h2>
              <p className="text-xl text-gray-600">See what customers say about each product</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-4 mb-6">
                  <Milk className="w-12 h-12 text-blue-600" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Fresh A2 Milk Reviews</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">4.9/5 from 350+ reviews</span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>"Pure A2 milk with visible cream layer"</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>"Delivered fresh within 2 hours of milking"</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>"No water mixing, completely natural taste"</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>"Kids love it, easy to digest A2 protein"</span>
                  </li>
                </ul>
                <Link href="/products/milk" className="mt-6 inline-block text-blue-600 font-semibold hover:text-blue-700">
                  Learn about our milk process →
                </Link>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl">🥛</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Fresh Dahi Reviews</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">4.9/5 from 280+ reviews</span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>"Thick and creamy, perfect consistency"</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>"Natural fermentation, probiotic-rich"</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>"Not too sour, perfect for daily use"</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>"Great for lassi, raita, and kadhi"</span>
                  </li>
                </ul>
                <Link href="/products/dahi" className="mt-6 inline-block text-green-600 font-semibold hover:text-green-700">
                  Learn about our dahi process →
                </Link>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl">🧀</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Fresh Paneer Reviews</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">4.9/5 from 220+ reviews</span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>"Softest paneer, melts in mouth"</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>"Natural lemon curdling, no chemicals"</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>"Delivered fresh same day, stays soft"</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>"Perfect for curries, tikka, and salads"</span>
                  </li>
                </ul>
                <Link href="/products/paneer" className="mt-6 inline-block text-purple-600 font-semibold hover:text-purple-700">
                  Learn about our paneer process →
                </Link>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl">🧈</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Danedar Ghee Reviews</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">5.0/5 from 150+ reviews</span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>"Authentic granular texture, pure bilona"</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>"Amazing natural aroma, like homemade"</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>"Hand-churned traditional method"</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>"Perfect for tadka and daily consumption"</span>
                  </li>
                </ul>
                <Link href="/products/ghee" className="mt-6 inline-block text-yellow-600 font-semibold hover:text-yellow-700">
                  Learn about our ghee process →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Patna Families Choose Back2Nest</h2>
              <p className="text-xl text-gray-600">Real reasons from our customer reviews</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Guaranteed Purity</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  "No water mixing, no adulterants" - mentioned in 95% of milk reviews. Customers can see and taste the difference.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ThumbsUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Daily Freshness</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  "Made fresh every morning" - customers love receiving products on the same day of production with no storage delays.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Reliable Service</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  "Always on time, never missed delivery" - punctuality and consistency praised in majority of customer testimonials.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-3xl shadow-2xl p-12 text-center text-white">
              <h2 className="text-4xl font-bold mb-6">Experience What Our Customers Love</h2>
              <p className="text-xl text-amber-50 mb-8 leading-relaxed">
                Join over 500 satisfied families in Patna who have switched to Back2Nest for pure, fresh, and authentic dairy products. Order today and see why we have a 98% customer retention rate!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href="https://play.google.com/store/apps/details?id=com.app.back2nest" target="_blank" rel="noopener noreferrer" className="bg-white text-amber-600 px-10 py-4 rounded-full text-lg font-bold hover:bg-amber-50 transition inline-flex items-center justify-center space-x-2">
                  <span>📞 Download App</span>
                </a>
                <Link href="/#order" className="border-2 border-white text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-white/10 transition">
                  Subscribe Now
                </Link>
              </div>
              <div className="flex items-center justify-center space-x-8 text-amber-50">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Free Delivery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>100% Pure</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Daily Fresh</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions from Customers</h2>
              <p className="text-xl text-gray-600">Common questions from our reviews answered</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">How do I know the milk is really A2?</h3>
                <p className="text-gray-600">
                  Our milk comes exclusively from indigenous desi cow breeds (Gir, Sahiwal, Red Sindhi) that naturally produce only A2 protein. You can see the thick cream layer on top which is a sign of pure desi cow milk. Many customers have noticed improved digestion after switching to our A2 milk.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">What areas in Patna do you deliver to?</h3>
                <p className="text-gray-600">
                  We deliver to all major areas in Patna including Boring Road, Kankarbagh, Fraser Road, Patliputra Colony, Rajendra Nagar, Boring Canal Road, Gardanibagh, and surrounding areas. Most of our verified reviews are from customers across these locations.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Why is your paneer softer than others?</h3>
                <p className="text-gray-600">
                  We use natural lemon juice for curdling instead of chemicals like citric acid or vinegar. This creates a softer, more digestible paneer. Plus, we deliver it the same day it's made, so you always get fresh paneer, not one that has been stored for days.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Can I subscribe for regular deliveries?</h3>
                <p className="text-gray-600">
                  Yes! Most of our customers use our subscription service for daily milk and weekly dahi/paneer deliveries. You can customize your schedule and quantity. Our delivery team is very reliable - as mentioned in many customer reviews, we never miss a delivery.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Is the danedar ghee really made by bilona method?</h3>
                <p className="text-gray-600">
                  Absolutely! The granular (danedar) texture you see is the proof - this texture can only be achieved through traditional hand-churning bilona method. Commercial machine-made ghee never has this texture. Check our detailed ghee process page to see the entire 8-step traditional method.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">What if I'm not satisfied with the product?</h3>
                <p className="text-gray-600">
                  We have a 98% customer retention rate because of our quality and service. However, if you're not satisfied, please contact us through the app immediately. We value customer feedback and will address any concerns. Our goal is 100% customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-amber-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Share Your Experience</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Are you a Back2Nest customer? We'd love to hear your feedback! Your review helps other families in Patna discover pure and fresh dairy products.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <div className="bg-amber-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-10 h-10 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Leave a Review</h3>
                <p className="text-gray-600">Share your experience through our app or email</p>
              </div>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <a href="https://play.google.com/store/apps/details?id=com.app.back2nest" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2 bg-amber-600 text-white px-6 py-4 rounded-xl font-semibold hover:bg-amber-700 transition">
                    <span>📞</span>
                    <span>Download App</span>
                  </a>
                  <a href="https://www.facebook.com/B2Nback2nest/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-4 rounded-xl font-semibold hover:bg-blue-700 transition">
                    <span>👍</span>
                    <span>Facebook Review</span>
                  </a>
                </div>

                <div className="text-center text-gray-600">
                  <p className="mb-4">Or share your feedback via:</p>
                  <div className="flex justify-center space-x-4">
                    <span className="bg-gray-100 px-4 py-2 rounded-lg">📧 help@back2nest.in</span>
                    <span className="bg-gray-100 px-4 py-2 rounded-lg">📱 WhatsApp</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}