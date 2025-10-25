'use client';

import { Milk, Clock, Truck, Shield, Star, Package, Sparkles, CheckCircle, X } from 'lucide-react';
import Image from 'next/image';

interface ProductDetailsProps {
  productId: string;
  onClose: () => void;
}

export const productDetailsData = {
  milk: {
    name: 'Farm-Fresh Cow Milk',
    tagline: 'Pure & Unadulterated',
    description: 'Wake up to pure, unadulterated cow milk delivered every morning across Patna. Direct from trusted local farms — no middlemen, no compromises.',
    deliveryTime: 'Delivered by 5 AM',
    rating: '4.8',
    reviewCount: '127',
    gradient: 'from-blue-500 to-blue-600',
    image: 'https://res.cloudinary.com/back2nest/image/upload/v1761124740/products/gi3tgzs9kyq3ubnvinci.jpg',
    features: [
      {
        icon: Shield,
        title: '100% Pure & Natural',
        description: 'No adulteration, no artificial colors, no preservatives. Just pure milk the way nature intended.',
        color: 'bg-blue-600'
      },
      {
        icon: Truck,
        title: 'Farm to Doorstep',
        description: 'Direct delivery from local farms to your home. No middlemen means fresher milk and better prices.',
        color: 'bg-blue-600'
      },
      {
        icon: Clock,
        title: 'Early Morning Delivery',
        description: 'Milk delivered fresh to your doorstep by 5 AM every morning, ready when you need it.',
        color: 'bg-blue-600'
      }
    ],
    benefits: [
      'Rich in calcium and protein',
      'No added water or chemicals',
      'Fresh from local dairy farms',
      'Daily morning delivery',
      'Trusted by 500+ families'
    ]
  },
  dahi: {
    name: 'Fresh Homemade Dahi',
    tagline: 'Creamy & Natural',
    description: 'Enjoy creamy, pure dahi made fresh daily from local farms. No preservatives, no additives — just natural taste delivered straight to your home in Patna.',
    deliveryTime: 'Delivered by 7 AM',
    rating: '4.9',
    reviewCount: '85',
    gradient: 'from-green-500 to-green-600',
    image: 'https://res.cloudinary.com/back2nest/image/upload/v1761124895/products/itl5xodvyqcknxsso7cl.jpg',
    features: [
      {
        icon: Shield,
        title: '100% Natural & Homemade',
        description: 'Freshly cultured dahi with no preservatives or additives — just creamy goodness straight from the farm.',
        color: 'bg-green-600'
      },
      {
        icon: Truck,
        title: 'Farm to Doorstep',
        description: 'Direct delivery from trusted farms ensures freshness and consistent quality for your family.',
        color: 'bg-green-600'
      },
      {
        icon: Clock,
        title: 'Morning Delivery',
        description: 'Creamy dahi delivered early each morning so you get the freshest batch daily.',
        color: 'bg-green-600'
      }
    ],
    benefits: [
      'Rich in probiotics',
      'Aids digestion naturally',
      'Made from pure cow milk',
      'No artificial cultures',
      'Perfect consistency every time'
    ]
  },
  ghee: {
    name: 'Pure Desi Ghee',
    tagline: 'Traditional Granular Ghee',
    description: 'Experience the authentic taste of traditional desi ghee made from pure cow milk. Our danedar (granular) ghee is prepared using age-old methods for maximum flavor and nutrition.',
    deliveryTime: 'Delivered within 24 hours',
    rating: '4.9',
    reviewCount: '142',
    gradient: 'from-amber-500 to-amber-600',
    image: 'https://res.cloudinary.com/back2nest/image/upload/v1761125364/products/v5xzfyr5lpyl14oektnx.jpg',
    features: [
      {
        icon: Shield,
        title: '100% Pure Cow Ghee',
        description: 'Made from pure cow milk using traditional bilona method. No adulterants, no vegetable oils — just pure desi ghee.',
        color: 'bg-amber-600'
      },
      {
        icon: Sparkles,
        title: 'Granular Texture',
        description: 'Authentic danedar ghee with perfect granular consistency, rich aroma, and golden color that defines quality.',
        color: 'bg-amber-600'
      },
      {
        icon: Star,
        title: 'Traditional Method',
        description: 'Prepared using time-tested bilona method that preserves nutrients and enhances the authentic desi flavor.',
        color: 'bg-amber-600'
      }
    ],
    benefits: [
      'Rich in vitamins A, D, E & K',
      'Traditional bilona method',
      'Perfect for cooking & rituals',
      'Boosts immunity naturally',
      'Long shelf life'
    ]
  },
  paneer: {
    name: 'Fresh Paneer',
    tagline: 'Soft & Protein-Rich',
    description: 'Freshly made paneer using pure cow milk delivered daily to your doorstep. Soft, fresh, and packed with protein — perfect for your favorite dishes.',
    deliveryTime: 'Delivered by 8 AM',
    rating: '4.8',
    reviewCount: '96',
    gradient: 'from-purple-500 to-purple-600',
    image: 'https://res.cloudinary.com/back2nest/image/upload/v1761125201/products/c54kq7pybisnlwvpm8jk.jpg',
    features: [
      {
        icon: Shield,
        title: 'Made from Pure Milk',
        description: 'Fresh paneer made daily from pure cow milk with no additives or preservatives — just natural goodness.',
        color: 'bg-purple-600'
      },
      {
        icon: Package,
        title: 'Daily Fresh Production',
        description: 'Made fresh every morning and delivered within hours. Never frozen, always soft and delicious.',
        color: 'bg-purple-600'
      },
      {
        icon: Star,
        title: 'High Protein Content',
        description: 'Excellent source of protein and calcium. Perfect for vegetarians looking for quality protein intake.',
        color: 'bg-purple-600'
      }
    ],
    benefits: [
      'Rich source of protein',
      'Made fresh daily',
      'Soft & non-rubbery texture',
      'Perfect for all dishes',
      'No artificial preservatives'
    ]
  }
};

export default function ProductDetails({ productId, onClose }: ProductDetailsProps) {
  const product = productDetailsData[productId as keyof typeof productDetailsData];

  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center overflow-y-auto py-8 px-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-6xl w-full relative animate-in fade-in slide-in-from-bottom-8 duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110"
          aria-label="Close details"
        >
          <X className="w-6 h-6 text-gray-600" />
        </button>

        {/* Hero Section */}
        <div className={`bg-gradient-to-br ${product.gradient} text-white rounded-t-3xl p-12 relative overflow-hidden`}>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Star className="w-4 h-4" />
                {product.rating}/5 Rating ({product.reviewCount} reviews)
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {product.name}
              </h2>
              <p className="text-xl text-white/90 italic mb-6">
                {product.tagline}
              </p>
              <p className="text-lg text-white/95 leading-relaxed mb-8">
                {product.description}
              </p>
              <div className="flex items-center gap-3 bg-white/20 px-6 py-4 rounded-xl backdrop-blur-sm">
                <Clock className="w-6 h-6" />
                <div>
                  <p className="font-bold">{product.deliveryTime}</p>
                  <p className="text-sm text-white/80">Every Morning</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/20 rounded-3xl p-8 backdrop-blur-sm">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="rounded-2xl shadow-2xl w-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-3">
              Why Choose Our {product.name.split(' ').pop()}?
            </h3>
            <p className="text-lg text-gray-600">
              Experience the difference of truly fresh products
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {product.features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
                  <div className={`${feature.color} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Benefits */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 mb-8">
            <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Key Benefits
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              {product.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <button
              onClick={onClose}
              className={`bg-gradient-to-r ${product.gradient} text-white px-12 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105 inline-flex items-center gap-3`}
            >
              <ShoppingCart className="w-5 h-5" />
              Add to Cart & Order Now
            </button>
            <p className="text-gray-600 mt-4">
              Or{' '}
              <a href="https://play.google.com/store/apps/details?id=com.app.back2nest" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">
                download our app
              </a>
              {' '}for easy ordering
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ShoppingCart({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}
