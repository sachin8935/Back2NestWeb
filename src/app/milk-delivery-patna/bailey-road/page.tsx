import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Clock, Star, Truck, Shield, Package, Milk } from 'lucide-react';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'A2 Milk Delivery Bailey Road Patna | Fresh by 5 AM',
  description: 'Pure A2 milk delivered in Bailey Road by 5 AM. Fresh desi cow milk, ghee, paneer & dahi. Order now for same-day delivery in Bailey Road, Patna.',
  keywords: 'A2 milk Bailey Road, milk delivery Bailey Road Patna, fresh milk Bailey Road, desi cow milk Bailey Road, home delivery milk Bailey Road, Bailey Road milk subscription',
  openGraph: {
    title: 'Pure A2 Milk Delivery in Bailey Road | Back2Nest',
    description: 'Fresh A2 milk from desi cows delivered by 5 AM in Bailey Road, Patna',
    url: 'https://back2nest.in/milk-delivery-patna/bailey-road',
    images: ['/og-bailey-road.jpg'],
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
            <p className="text-xs text-gray-600">Bailey Road, Patna</p>
          </div>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-gray-700 hover:text-blue-600 transition font-medium">
            Home
          </Link>
          <Link href="/products" className="text-gray-700 hover:text-blue-600 transition font-medium">
            Products
          </Link>
          <Link href="/milk-delivery-patna" className="text-gray-700 hover:text-blue-600 transition font-medium">
            All Areas
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

export default function BaileyRoadPage() {
  return (
    <div className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Pure A2 Milk Delivery in <span className="text-green-600">Bailey Road</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Fresh desi cow milk delivered to your doorstep by 5 AM every morning
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/quick-order">
                  <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all">
                    Order Now
                  </button>
                </Link>
                <Link href="/products">
                  <button className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold border-2 border-green-600 hover:bg-green-50 transition-all">
                    View Products
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative bg-gradient-to-br from-green-400 via-green-500 to-green-600 rounded-3xl p-3 shadow-2xl transform hover:rotate-1 transition duration-500">
                <Image
                  src="https://res.cloudinary.com/back2nest/image/upload/v1761124550/products/rprfyfwgi7pzmud1oojc.jpg"
                  alt="Fresh A2 milk delivery in Bailey Road Patna - Back2Nest"
                  width={600}
                  height={600}
                  className="rounded-2xl shadow-lg w-full object-cover h-96"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Bailey Road */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Bailey Road Families Trust Back2Nest
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Delivered by 5 AM</h3>
              <p className="text-gray-600">Fresh milk at your doorstep before sunrise in Bailey Road</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">100% Pure A2</h3>
              <p className="text-gray-600">Authentic desi cow milk, no adulteration</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="font-semibold mb-2">Free Delivery</h3>
              <p className="text-gray-600">No extra charges for delivery in Bailey Road</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular in Bailey Road */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Popular Products in Bailey Road
          </h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Link href="/products/milk">
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all cursor-pointer">
                <div className="text-4xl mb-4">🥛</div>
                <h3 className="font-semibold text-lg mb-2">A2 Cow Milk</h3>
                <p className="text-sm text-gray-600 mb-3">Fresh daily</p>
                <p className="text-green-600 font-bold">From ₹70/L</p>
              </div>
            </Link>
            <Link href="/products/ghee">
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all cursor-pointer">
                <div className="text-4xl mb-4">🧈</div>
                <h3 className="font-semibold text-lg mb-2">Desi Ghee</h3>
                <p className="text-sm text-gray-600 mb-3">Pure & traditional</p>
                <p className="text-green-600 font-bold">From ₹600/kg</p>
              </div>
            </Link>
            <Link href="/products/dahi">
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all cursor-pointer">
                <div className="text-4xl mb-4">🥣</div>
                <h3 className="font-semibold text-lg mb-2">Fresh Dahi</h3>
                <p className="text-sm text-gray-600 mb-3">Thick & creamy</p>
                <p className="text-green-600 font-bold">From ₹80/kg</p>
              </div>
            </Link>
            <Link href="/products/paneer">
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all cursor-pointer">
                <div className="text-4xl mb-4">🧀</div>
                <h3 className="font-semibold text-lg mb-2">Soft Paneer</h3>
                <p className="text-sm text-gray-600 mb-3">Made fresh</p>
                <p className="text-green-600 font-bold">From ₹350/kg</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials from Bailey Road */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Bailey Road Customers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                &quot;Best milk delivery service in Bailey Road. Always on time and the quality is excellent! My kids love the taste.&quot;
              </p>
              <p className="font-semibold">Priya Sharma</p>
              <p className="text-sm text-gray-500">Bailey Road resident since 2010</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                &quot;Switched to Back2Nest 6 months ago. The A2 milk is genuinely pure. My digestive issues have improved significantly.&quot;
              </p>
              <p className="font-semibold">Rajesh Kumar</p>
              <p className="text-sm text-gray-500">Near Maurya Lok Complex</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                &quot;Reliable service! Never missed a delivery in 4 months. The dahi and paneer are also top quality.&quot;
              </p>
              <p className="font-semibold">Anjali Verma</p>
              <p className="text-sm text-gray-500">Bailey Road Extension</p>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Info for Bailey Road */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Delivery Information for Bailey Road
            </h2>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Delivery Time</h3>
                    <p className="text-gray-600">Between 4:00 AM - 6:00 AM daily. Your milk arrives fresh every morning!</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Coverage Area</h3>
                    <p className="text-gray-600">
                      All sectors of Bailey Road including Maurya Lok Complex, Dak Bungalow Road, 
                      Bailey Road Extension, and surrounding residential areas
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Truck className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Minimum Order</h3>
                    <p className="text-gray-600">₹100 for free delivery in Bailey Road. No hidden charges!</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Package className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Subscription Options</h3>
                    <p className="text-gray-600">
                      Daily, alternate days, or weekly delivery. Pause or modify anytime through our app.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local SEO Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">A2 Milk Delivery Service in Bailey Road, Patna</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Looking for fresh, pure A2 milk delivery in Bailey Road? Back2Nest brings you the finest 
                quality desi cow milk right to your doorstep in Bailey Road, Patna. We understand the 
                importance of starting your day with fresh, nutritious milk, which is why we ensure 
                delivery before 5 AM every morning to all areas of Bailey Road including Maurya Lok Complex, 
                Dak Bungalow Road, and Bailey Road Extension.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Why Choose A2 Milk in Bailey Road?</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                A2 milk from desi cows is easier to digest and packed with essential nutrients. 
                Unlike regular milk, A2 milk contains only the A2 beta-casein protein, making it 
                a healthier choice for families in Bailey Road. Many of our Bailey Road customers report 
                better digestion and overall health after switching to our A2 milk. The milk comes from 
                indigenous Indian cow breeds like Gir, Sahiwal, and Red Sindhi, known for producing 
                high-quality A2 milk.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-gray-700">Easier to digest than regular milk</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-gray-700">Rich in proteins, calcium, and vitamins</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-gray-700">Suitable for people with mild lactose sensitivity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-gray-700">Better for children&#39;s growth and development</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Delivery Process in Bailey Road</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We follow a streamlined delivery process to ensure you get the freshest milk:
              </p>
              <ol className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                  <span className="text-gray-700">Milk is collected from our farm at 2:00 AM</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                  <span className="text-gray-700">Quality tested and packed immediately in food-grade containers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                  <span className="text-gray-700">Delivered to Bailey Road homes by 5 AM in refrigerated vehicles</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                  <span className="text-gray-700">Placed at your doorstep in insulated packaging to maintain freshness</span>
                </li>
              </ol>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Coverage in Bailey Road</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We deliver to all parts of Bailey Road including:
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-green-600" />
                  <span>Maurya Lok Complex area</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-green-600" />
                  <span>Dak Bungalow Road</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-green-600" />
                  <span>Bailey Road Extension</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-green-600" />
                  <span>Near Moin-ul-Haq Stadium</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-green-600" />
                  <span>All residential complexes</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-green-600" />
                  <span>Commercial areas on Bailey Road</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">How to Order in Bailey Road</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ordering fresh A2 milk for your Bailey Road home is simple:
              </p>
              <ol className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                  <span className="text-gray-700">Download our app from Play Store or App Store, or visit our website</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                  <span className="text-gray-700">Select your products (milk, ghee, dahi, paneer) and quantity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                  <span className="text-gray-700">Enter your Bailey Road address with nearby landmark</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                  <span className="text-gray-700">Choose your preferred payment method (UPI, card, or cash)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">5</span>
                  <span className="text-gray-700">Receive fresh milk by 5 AM the next day!</span>
                </li>
              </ol>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Special Offers for Bailey Road Residents</h3>
              <p className="text-gray-700 leading-relaxed">
                New customers in Bailey Road get ₹50 off on their first order. Subscribe for daily 
                delivery and save up to 15% on your monthly milk bill. We also offer special discounts 
                during festivals and seasonal promotions. Refer a friend in Bailey Road and both of you 
                get ₹50 credit in your account!
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Our Products Available in Bailey Road</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h4 className="font-semibold mb-2">🥛 Fresh A2 Cow Milk - ₹70/L</h4>
                  <p className="text-gray-600">Pure, unadulterated milk from desi cows. Delivered fresh every morning.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h4 className="font-semibold mb-2">🧈 Traditional Desi Ghee - ₹600/kg</h4>
                  <p className="text-gray-600">Made using the traditional bilona method from A2 milk.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h4 className="font-semibold mb-2">🥣 Fresh Dahi (Curd) - ₹80/kg</h4>
                  <p className="text-gray-600">Thick, creamy curd made from fresh A2 milk.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h4 className="font-semibold mb-2">🧀 Soft Paneer - ₹350/kg</h4>
                  <p className="text-gray-600">Fresh paneer made daily, soft and protein-rich.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            We Also Deliver to Nearby Areas
          </h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            <Link href="/milk-delivery-patna/boring-road" className="bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all">
              Boring Road
            </Link>
            <Link href="/milk-delivery-patna/kankarbagh" className="bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all">
              Kankarbagh
            </Link>
            <Link href="/milk-delivery-patna/patliputra" className="bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all">
              Patliputra
            </Link>
            <Link href="/milk-delivery-patna" className="bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all">
              View All Areas
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ for Bailey Road */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions - Bailey Road
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-semibold text-lg mb-2">
                Do you deliver in all parts of Bailey Road?
              </h3>
              <p className="text-gray-600">
                Yes, we deliver to all residential and commercial areas in Bailey Road including Maurya Lok Complex, 
                Dak Bungalow Road, Bailey Road Extension, and surrounding localities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-semibold text-lg mb-2">
                What is the delivery time in Bailey Road?
              </h3>
              <p className="text-gray-600">
                We deliver between 4:00 AM to 6:00 AM every morning in Bailey Road. You can expect your 
                milk to arrive fresh before sunrise, perfect for your morning tea or breakfast!
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-semibold text-lg mb-2">
                Is there a minimum order value for Bailey Road?
              </h3>
              <p className="text-gray-600">
                Minimum order of ₹100 for free delivery in Bailey Road. Orders below this may have a small 
                delivery charge of ₹20. We recommend subscribing for daily delivery to save more!
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-semibold text-lg mb-2">
                How is A2 milk different from regular milk?
              </h3>
              <p className="text-gray-600">
                A2 milk comes from desi cows and contains only A2 beta-casein protein, making it easier to 
                digest. Regular milk often contains A1 protein which can cause digestive issues for some people. 
                Many Bailey Road customers have reported better digestion after switching to A2 milk.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-semibold text-lg mb-2">
                Can I pause or modify my subscription?
              </h3>
              <p className="text-gray-600">
                Absolutely! You can pause, modify, or cancel your subscription anytime through our mobile app. 
                Going on vacation from Bailey Road? Just pause your delivery and resume when you&#39;re back.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-semibold text-lg mb-2">
                What if I&#39;m not home during delivery?
              </h3>
              <p className="text-gray-600">
                We deliver between 4-6 AM, so most customers are home. We place the milk in insulated packaging 
                at your doorstep. You can also provide special delivery instructions in the app (like &quot;leave at side door&quot;).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Fresh A2 Milk in Bailey Road?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join 200+ families in Bailey Road who trust Back2Nest for their daily milk needs
          </p>
          <Link href="/quick-order">
            <button className="bg-white text-green-600 px-12 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all">
              Start Your Subscription
            </button>
          </Link>
          <p className="text-white/80 mt-4">First order: Get ₹50 off • No commitment required</p>
        </div>
      </section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://back2nest.in/milk-delivery-patna/bailey-road",
            "name": "Back2Nest - Bailey Road",
            "image": "https://back2nest.in/logo.png",
            "description": "Fresh A2 milk delivery in Bailey Road, Patna",
            "url": "https://back2nest.in/milk-delivery-patna/bailey-road",
            "telephone": "+91-1234567890",
            "priceRange": "₹₹",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Bailey Road",
              "addressLocality": "Patna",
              "addressRegion": "Bihar",
              "postalCode": "800014",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "25.6093",
              "longitude": "85.1376"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              "opens": "00:00",
              "closes": "23:59"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Bailey Road, Patna"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "156"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Dairy Products",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "price": "72",
                  "priceCurrency": "INR",
                  "availability": "https://schema.org/InStock",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "A2 Cow Milk",
                    "description": "Fresh daily A2 milk from desi cows",
                    "aggregateRating": {
                      "@type": "AggregateRating",
                      "ratingValue": "4.8",
                      "reviewCount": "156"
                    }
                  }
                },
                {
                  "@type": "Offer",
                  "price": "650",
                  "priceCurrency": "INR",
                  "availability": "https://schema.org/InStock",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Desi Ghee",
                    "description": "Pure & traditional desi ghee",
                    "aggregateRating": {
                      "@type": "AggregateRating",
                      "ratingValue": "4.8",
                      "reviewCount": "156"
                    }
                  }
                }
              ]
            }
          })
        }}
      />
      <Footer />
    </div>
  );
}
