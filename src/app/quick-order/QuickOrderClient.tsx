'use client';

import { Milk, ArrowLeft, ShoppingCart, Plus, Minus, Trash2, Clock, Shield, Smartphone, Package, Star, Sparkles, CheckCircle, Info } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import dynamic from 'next/dynamic';

// Lazy load heavy components for better performance
const ProductDetails = dynamic(() => import('../products/ProductDetails'), {
  loading: () => <div className="fixed inset-0 bg-black/50 flex items-center justify-center"><div className="bg-white p-8 rounded-2xl">Loading...</div></div>,
  ssr: false,
});

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="h-96 bg-gray-50" />,
  ssr: true,
});

// Types
interface Product {
  id: string;
  name: string;
  size: string;
  price: number;
  originalPrice: number;
  category: string;
}

interface CartItem extends Product {
  quantity: number;
}

interface Category {
  id: string;
  name: string;
  tagline: string;
  icon: any;
  gradient: string;
  bgColor: string;
  products: Product[];
}

// Header Component
const Header = ({ cartCount }: { cartCount: number }) => (
  <header className="bg-white shadow-md sticky top-0 z-50 border-b-2 border-blue-100">
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
      <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 rounded-full shadow-lg">
          <Milk className="w-7 h-7 text-white" />
        </div>
        <div>
          <span className="text-2xl font-bold text-gray-900">
            Back<span className="text-blue-600">2</span>Nest
          </span>
          <p className="text-xs text-gray-600">Farm Fresh Products</p>
        </div>
      </Link>
      <div className="flex items-center gap-4">
        <button 
          onClick={() => {
            const cartSection = document.getElementById('cart');
            cartSection?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="relative"
        >
          <div className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition">
            <ShoppingCart className="w-6 h-6 text-white" />
          </div>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
              {cartCount}
            </span>
          )}
        </button>
        <Link 
          href="/"
          className="hidden md:flex items-center gap-2 text-gray-700 hover:text-blue-600 transition font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          Home
        </Link>
      </div>
    </nav>
  </header>
);

// Category Selection Component
interface CategoryCardProps {
  category: Category;
  isSelected: boolean;
  onClick: () => void;
  onLearnMore: () => void;
}

const CategoryCard = ({ category, isSelected, onClick, onLearnMore }: CategoryCardProps) => {
  const Icon = category.icon;
  
  return (
    <div
      className={`relative p-8 rounded-2xl transition-all ${
        isSelected 
          ? `bg-gradient-to-br ${category.gradient} text-white shadow-2xl scale-105` 
          : `bg-white border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg`
      }`}
    >
      {isSelected && (
        <div className="absolute top-4 right-4">
          <CheckCircle className="w-6 h-6 text-white" />
        </div>
      )}
      
      <button
        onClick={onClick}
        className="w-full text-left"
      >
        <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
          isSelected ? 'bg-white/20' : category.bgColor
        }`}>
          <Icon className={`w-10 h-10 ${isSelected ? 'text-white' : 'text-current'}`} />
        </div>
        
        <h3 className={`text-2xl font-bold mb-2 ${isSelected ? 'text-white' : 'text-gray-900'}`}>
          {category.name}
        </h3>
        <p className={`text-sm ${isSelected ? 'text-white/90' : 'text-gray-600'} italic mb-4`}>
          {category.tagline}
        </p>
      </button>
      
      <button
        onClick={(e) => {
          e.stopPropagation();
          onLearnMore();
        }}
        className={`w-full mt-4 py-2.5 rounded-lg font-semibold text-sm transition-all flex items-center justify-center gap-2 ${
          isSelected 
            ? 'bg-white/20 text-white hover:bg-white/30' 
            : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
        }`}
      >
        <Info className="w-4 h-4" />
        Learn More
      </button>
    </div>
  );
};

// Product Card Component
interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, quantityChange?: number) => void;
  cartItems: CartItem[];
}

const ProductCard = ({ product, onAddToCart, cartItems }: ProductCardProps) => {
  const cartItem = cartItems.find(item => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all border-2 border-blue-100 overflow-hidden group hover:-translate-y-1">
      <div className="relative bg-gradient-to-br from-blue-50 to-white p-8">
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-red-500 text-white px-3 py-1.5 rounded-full text-sm font-bold shadow-lg">
            {discount}% OFF
          </div>
        </div>
        <div className="bg-white w-32 h-32 rounded-2xl flex items-center justify-center mx-auto shadow-md group-hover:scale-110 transition-transform duration-300">
          <Image 
            src="/logo.png" 
            alt={product.name}
            width={96}
            height={96}
            className="object-contain"
            onError={(e: any) => {
              e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iOTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9Ijk2IiBoZWlnaHQ9Ijk2IiBmaWxsPSIjM0I4MkY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIj5CMk48L3RleHQ+PC9zdmc+';
            }}
          />
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-4">{product.size}</p>

        <div className="flex items-baseline gap-3 mb-6">
          <span className="text-3xl font-bold text-blue-600">₹{product.price}</span>
          <span className="text-lg text-gray-400 line-through">₹{product.originalPrice}</span>
        </div>

        {quantity === 0 ? (
          <button
            onClick={() => onAddToCart(product)}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3.5 rounded-xl font-bold hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Add to Cart
          </button>
        ) : (
          <div className="flex items-center gap-3">
            <button
              onClick={() => onAddToCart(product, -1)}
              className="bg-red-500 text-white p-2.5 rounded-lg hover:bg-red-600 transition flex-shrink-0"
              aria-label="Decrease quantity"
            >
              <Minus className="w-5 h-5" />
            </button>
            <div className="flex-1 bg-gradient-to-r from-blue-50 to-blue-100 py-3 rounded-lg text-center font-bold text-xl text-blue-600 border-2 border-blue-200">
              {quantity}
            </div>
            <button
              onClick={() => onAddToCart(product, 1)}
              className="bg-green-500 text-white p-2.5 rounded-lg hover:bg-green-600 transition flex-shrink-0"
              aria-label="Increase quantity"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// Cart Component
interface CartProps {
  cartItems: CartItem[];
  onUpdateCart: (productId: string, quantityChange: number) => void;
  onClearCart: () => void;
}

const Cart = ({ cartItems, onUpdateCart, onClearCart }: CartProps) => {
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const savings = cartItems.reduce((sum, item) => sum + ((item.originalPrice - item.price) * item.quantity), 0);

  if (cartItems.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-16 text-center border-2 border-gray-200">
        <div className="bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
          <ShoppingCart className="w-12 h-12 text-gray-400" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">Your Cart is Empty</h3>
        <p className="text-gray-600 text-lg">Select a category and add fresh products!</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl border-2 border-blue-100 overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-1">Your Cart</h3>
            <p className="text-blue-100 text-sm">{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} added</p>
          </div>
          <button
            onClick={onClearCart}
            className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg hover:bg-white/30 transition"
          >
            <Trash2 className="w-4 h-4" />
            Clear All
          </button>
        </div>
      </div>

      <div className="p-6 space-y-4 max-h-96 overflow-y-auto">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-white rounded-xl border border-blue-100">
            <div className="w-16 h-16 bg-white rounded-lg p-2 flex items-center justify-center flex-shrink-0 shadow-sm">
              <Image 
                src="/logo.png" 
                alt={item.name}
                width={48}
                height={48}
                className="object-contain"
                onError={(e: any) => {
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiBmaWxsPSIjM0I4MkY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIj5CMk48L3RleHQ+PC9zdmc+';
                }}
              />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-gray-900 truncate">{item.name}</h4>
              <p className="text-sm text-gray-600">{item.size}</p>
              <p className="text-sm font-semibold text-blue-600 mt-1">₹{item.price} × {item.quantity}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => onUpdateCart(item.id, -1)}
                className="bg-red-100 text-red-600 p-2 rounded-lg hover:bg-red-200 transition"
                aria-label="Decrease quantity"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="font-bold text-lg w-10 text-center text-blue-600">{item.quantity}</span>
              <button
                onClick={() => onUpdateCart(item.id, 1)}
                className="bg-green-100 text-green-600 p-2 rounded-lg hover:bg-green-200 transition"
                aria-label="Increase quantity"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <div className="font-bold text-lg text-gray-900 min-w-[80px] text-right">₹{item.price * item.quantity}</div>
          </div>
        ))}
      </div>

      <div className="border-t-2 border-blue-100 p-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="space-y-3 mb-6">
          <div className="flex justify-between text-gray-700 text-lg">
            <span>Subtotal</span>
            <span className="font-semibold">₹{total + savings}</span>
          </div>
          <div className="flex justify-between text-green-600 font-semibold text-lg">
            <span>You Save</span>
            <span>- ₹{savings}</span>
          </div>
          <div className="flex justify-between text-2xl font-bold text-gray-900 pt-3 border-t-2 border-blue-200">
            <span>Total</span>
            <span className="text-blue-600">₹{total}</span>
          </div>
        </div>

        <a
          href="tel:+918935904820"
          className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-bold text-lg text-center hover:shadow-2xl transition-all transform hover:scale-105"
        >
          Place Order - Call Now
        </a>
      </div>
    </div>
  );
};

export default function QuickOrderClient() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showProductDetails, setShowProductDetails] = useState<string | null>(null);

  const categories: Category[] = [
    {
      id: 'milk',
      name: 'Fresh Milk',
      tagline: 'Sourced from Farm',
      icon: Milk,
      gradient: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-100 text-blue-600',
      products: [
        { id: 'milk-500', name: 'Fresh Farm Milk', size: '500 ml', price: 29, originalPrice: 39, category: 'milk' },
        { id: 'milk-1000', name: 'Fresh Farm Milk', size: '1 Liter', price: 69, originalPrice: 79, category: 'milk' }
      ]
    },
    {
      id: 'dahi',
      name: 'Fresh Dahi',
      tagline: 'Tazaa Dahi Daily',
      icon: Package,
      gradient: 'from-green-500 to-green-600',
      bgColor: 'bg-green-100 text-green-600',
      products: [
        { id: 'dahi-200', name: 'Fresh Dahi', size: '200 ml', price: 39, originalPrice: 49, category: 'dahi' },
        { id: 'dahi-400', name: 'Fresh Dahi', size: '400 ml', price: 49, originalPrice: 99, category: 'dahi' }
      ]
    },
    {
      id: 'ghee',
      name: 'Pure Ghee',
      tagline: 'Desi Danedar Ghee',
      icon: Sparkles,
      gradient: 'from-amber-500 to-amber-600',
      bgColor: 'bg-amber-100 text-amber-600',
      products: [
        { id: 'ghee-500', name: 'Pure Desi Ghee', size: '500 ml', price: 600, originalPrice: 800, category: 'ghee' },
        { id: 'ghee-1000', name: 'Pure Desi Ghee', size: '1 Liter', price: 1200, originalPrice: 1600, category: 'ghee' }
      ]
    },
    {
      id: 'paneer',
      name: 'Fresh Paneer',
      tagline: 'Tazaa Paneer Daily',
      icon: Star,
      gradient: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-100 text-purple-600',
      products: [
        { id: 'paneer-200', name: 'Fresh Paneer', size: '200 gm', price: 80, originalPrice: 100, category: 'paneer' },
        { id: 'paneer-400', name: 'Fresh Paneer', size: '400 gm', price: 160, originalPrice: 200, category: 'paneer' }
      ]
    }
  ];

  const handleAddToCart = (product: Product, quantityChange: number = 1) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      
      if (existingItem) {
        const newQuantity = existingItem.quantity + quantityChange;
        if (newQuantity <= 0) {
          return prev.filter(item => item.id !== product.id);
        }
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: newQuantity } : item
        );
      }
      
      if (quantityChange > 0) {
        return [...prev, { ...product, quantity: 1 }];
      }
      return prev;
    });
  };

  const handleUpdateCart = (productId: string, quantityChange: number) => {
    setCartItems(prev => {
      const item = prev.find(i => i.id === productId);
      if (!item) return prev;
      
      const newQuantity = item.quantity + quantityChange;
      if (newQuantity <= 0) {
        return prev.filter(i => i.id !== productId);
      }
      
      return prev.map(i =>
        i.id === productId ? { ...i, quantity: newQuantity } : i
      );
    });
  };

  const handleClearCart = () => {
    if (confirm('Are you sure you want to clear your cart?')) {
      setCartItems([]);
    }
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const selectedCategoryData = categories.find(cat => cat.id === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <Header cartCount={totalItems} />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500 px-5 py-2 rounded-full text-sm font-semibold mb-6">
            <Shield className="w-4 h-4" />
            100% Pure & Fresh Products
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Farm Fresh Products<br />Delivered Daily
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Order today and get fresh products delivered tomorrow between <span className="font-bold text-white">5 AM - 9 AM</span> across Patna
          </p>
        </div>
      </section>

      {/* Category Selection */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Select a Category</h2>
            <p className="text-xl text-gray-600">Choose from our range of fresh dairy products</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                isSelected={selectedCategory === category.id}
                onClick={() => setSelectedCategory(category.id)}
                onLearnMore={() => setShowProductDetails(category.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      {selectedCategoryData && (
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-4">
                <div className={`bg-gradient-to-br ${selectedCategoryData.gradient} p-4 rounded-2xl shadow-lg`}>
                  {(() => {
                    const Icon = selectedCategoryData.icon;
                    return <Icon className="w-8 h-8 text-white" />;
                  })()}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">{selectedCategoryData.name}</h2>
                  <p className="text-gray-600 italic text-lg">{selectedCategoryData.tagline}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedCategory(null)}
                className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2 bg-blue-50 px-6 py-3 rounded-lg hover:bg-blue-100 transition"
              >
                <ArrowLeft className="w-5 h-5" />
                Change Category
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {selectedCategoryData.products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                  cartItems={cartItems}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Cart Section */}
      <section id="cart" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Cart
            cartItems={cartItems}
            onUpdateCart={handleUpdateCart}
            onClearCart={handleClearCart}
          />
        </div>
      </section>

      {/* Subscription CTA */}
      <section className="py-20 bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Smartphone className="w-10 h-10" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Want a Subscription for Peace of Mind?
          </h2>
          <p className="text-xl text-green-100 mb-10 leading-relaxed">
            Download our app for hassle-free recurring deliveries with exclusive benefits and offers
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.app.back2nest"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-green-600 px-10 py-5 rounded-full font-bold text-xl hover:shadow-2xl transition-all transform hover:scale-105"
          >
            Download Back2Nest App
          </a>
          <div className="mt-10 flex flex-wrap justify-center gap-8 text-green-100">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-lg">
                <Shield className="w-5 h-5" />
              </div>
              <span className="font-semibold">Auto Delivery</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-lg">
                <Star className="w-5 h-5" />
              </div>
              <span className="font-semibold">Exclusive Offers</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-lg">
                <Clock className="w-5 h-5" />
              </div>
              <span className="font-semibold">Easy Management</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Product Details Modal */}
      {showProductDetails && (
        <ProductDetails
          productId={showProductDetails}
          onClose={() => setShowProductDetails(null)}
        />
      )}
    </div>
  );
}
