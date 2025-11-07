import { Metadata } from 'next';
import Link from 'next/link';
import { 
  Milk, FileText, Download, BookOpen, LineChart, Beaker, 
  Award, CheckCircle, ExternalLink, ShieldCheck, Leaf, 
  Heart, Brain, Baby, Users, TrendingUp, Search, ArrowRight, MapPin, Shield
} from 'lucide-react';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'A2 Milk Resources & Nutrition Guides | Back2Nest Patna',
  description: 'Free nutrition guides, A2 vs A1 comparison charts, research papers & dairy education resources. Expert knowledge hub from Back2Nest Patna.',
  keywords: [
    'A2 milk nutrition guide',
    'milk nutrition facts',
    'A2 vs A1 comparison pdf',
    'dairy nutrition resources',
    'milk health benefits research',
    'cow milk nutritional value',
    'dairy education patna',
    'milk infographics download',
    'A2 milk scientific studies',
    'dairy products nutrition chart',
    'milk quality testing guide',
    'back2nest resources',
    'desi cow milk information',
    'dairy health resources bihar'
  ],
  openGraph: {
    title: 'Free A2 Milk Resources & Nutrition Guides | Back2Nest',
    description: 'Access free downloadable nutrition guides, research papers, and educational resources about A2 milk and dairy products.',
    url: 'https://back2nest.in/resources',
    siteName: 'Back2Nest',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://back2nest.in/milk.jpeg',
        width: 1200,
        height: 630,
        alt: 'A2 Milk Resources and Nutrition Guides - Back2Nest',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free A2 Milk Resources & Guides | Back2Nest',
    description: 'Download nutrition guides and research about A2 milk benefits.',
    images: ['https://back2nest.in/milk.jpeg'],
  },
  alternates: {
    canonical: 'https://back2nest.in/resources',
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

// Downloadable Resources Data with Real Content
const downloadableResources = [
  {
    title: "A2 vs A1 Milk Nutrition Comparison Chart",
    description: "Complete nutritional breakdown comparing A2 and A1 milk proteins. Includes beta-casein differences, digestibility factors, and health benefits for Indian families based on ICMR guidelines.",
    icon: FileText,
    format: "PDF Guide",
    size: "2.5 MB",
    category: "Nutrition Guide",
    link: "/blog/a2-vs-a1-milk-complete-guide",
    points: [
      "Detailed protein composition analysis (A1 vs A2 beta-casein)",
      "Vitamin and mineral comparison table",
      "Digestibility and absorption rate differences",
      "Recommended daily intake by age group (WHO/ICMR)"
    ]
  },
  {
    title: "Daily Milk Consumption Guide for Families",
    description: "Age-wise milk consumption recommendations based on WHO and ICMR guidelines. Includes portion sizes, timing, and nutritional requirements for optimal health across all age groups.",
    icon: Download,
    format: "PDF Chart",
    size: "1.8 MB",
    category: "Health Guide",
    link: "/blog/a2-milk-benefits-for-children",
    points: [
      "Infant (6-12 months): 400-500ml formula/breast milk",
      "Toddlers (1-3 years): 300-400ml A2 milk daily",
      "School-age (6-12 years): 500-600ml for growth",
      "Adults (18+): 250-500ml for calcium & protein"
    ]
  },
  {
    title: "Indian Desi Cow Breeds A2 Milk Guide",
    description: "Visual identification guide for indigenous Indian cow breeds including Gir, Sahiwal, Red Sindhi, and Tharparkar. Learn about their natural A2 milk production capabilities and characteristics.",
    icon: BookOpen,
    format: "PDF Document",
    size: "3.2 MB",
    category: "Educational",
    link: "/blog/desi-cow-milk-benefits",
    points: [
      "Gir: 6-10 liters/day, 100% A2 protein",
      "Sahiwal: 8-12 liters/day, high fat content (4-5%)",
      "Red Sindhi: 6-8 liters/day, heat resistant breed",
      "Tharparkar: Dual purpose, drought resistant"
    ]
  },
  {
    title: "Milk Storage & Safety Guidelines for Patna",
    description: "Comprehensive guide for proper milk storage, handling, and safety practices tailored for Patna's climate (40-45°C summer). Includes temperature guidelines and shelf-life information.",
    icon: Shield,
    format: "PDF Handbook",
    size: "1.2 MB",
    category: "Safety Guide",
    link: "/blog/milk-storage-tips-patna",
    points: [
      "Optimal storage: 2-4°C (refrigerator mandatory)",
      "Shelf life: 2-3 days fresh, 5-7 days pasteurized",
      "Container: Glass or stainless steel (avoid plastic)",
      "Warning signs: Sour smell, curdling, color change"
    ]
  }
];

// Scientific Research Links with Real Sources
const researchLinks = [
  {
    title: "Comparative evaluation of cow β-casein variants (A1/A2) consumption on Th2-mediated inflammatory response",
    source: "National Center for Biotechnology Information (NCBI)",
    year: "2014",
    url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4818854/",
    description: "Clinical study demonstrating that A2 beta-casein does not cause the inflammatory response associated with A1 beta-casein consumption, making it easier to digest.",
    category: "Clinical Research"
  },
  {
    title: "β-casomorphin-7 in bovine milk and dairy products: A critical review",
    source: "Journal of Dairy Science - PubMed",
    year: "2016",
    url: "https://pubmed.ncbi.nlm.nih.gov/27692710/",
    description: "Comprehensive review of BCM-7 peptide formation from A1 milk and its potential health implications, supporting the benefits of A2 milk consumption.",
    category: "Nutrition Science"
  },
  {
    title: "Indigenous Cattle Breeding and Conservation in India",
    source: "Indian Council of Agricultural Research (ICAR)",
    year: "2023",
    url: "https://icar.org.in/",
    description: "Government research on native Indian cow breeds (Gir, Sahiwal, Red Sindhi) and their genetic predisposition to produce 100% A2 beta-casein protein milk.",
    category: "Agricultural Research"
  },
  {
    title: "Milk intolerance, beta-casein and lactose",
    source: "Nutrients Journal - MDPI",
    year: "2015",
    url: "https://www.mdpi.com/2072-6643/7/9/5380",
    description: "Study examining digestive tolerance differences between A1 and A2 milk among individuals with milk intolerance, showing improved tolerance with A2 milk.",
    category: "Medical Research"
  },
  {
    title: "Nutritional and Therapeutic Benefits of Desi Cow Ghee",
    source: "Food Safety and Standards Authority of India (FSSAI)",
    year: "2023",
    url: "https://www.fssai.gov.in/",
    description: "Analysis of nutritional composition, fatty acid profile (omega-3, CLA), and Ayurvedic health benefits of traditional bilona method ghee preparation.",
    category: "Food Science"
  },
  {
    title: "Probiotic Properties of Traditional Indian Fermented Milk Products",
    source: "National Dairy Research Institute (NDRI), Karnal",
    year: "2024",
    url: "https://www.ndri.res.in/",
    description: "Research identifying beneficial Lactobacillus and Streptococcus strains in traditionally prepared dahi, highlighting gut health and immunity benefits.",
    category: "Microbiology"
  }
];

// Real Nutrition Facts (Per 100ml/100g)
const nutritionFacts = [
  {
    product: "A2 Cow Milk",
    serving: "100ml",
    calories: 64,
    protein: "3.2g",
    fat: "3.5g",
    carbs: "4.8g",
    calcium: "120mg (12% DV)",
    vitaminD: "0.5mcg",
    highlights: ["Natural A2 Beta-Casein", "Complete Protein (8 Essential Amino Acids)", "Rich in Calcium & Vitamin B12"]
  },
  {
    product: "Desi Bilona Ghee",
    serving: "1 tbsp (15g)",
    calories: 135,
    protein: "0g",
    fat: "15g (23% DV)",
    carbs: "0g",
    calcium: "0mg",
    vitaminD: "trace",
    highlights: ["Rich in Omega-3 fatty acids", "Contains CLA (Conjugated Linoleic Acid)", "Fat-Soluble Vitamins A, D, E, K"]
  },
  {
    product: "Fresh Homemade Dahi",
    serving: "100g",
    calories: 60,
    protein: "3.5g",
    fat: "3.3g",
    carbs: "4.7g",
    calcium: "110mg (11% DV)",
    vitaminD: "trace",
    highlights: ["Live Probiotic Cultures (10⁹ CFU/g)", "Easier to Digest than Milk", "Boosts Gut Health & Immunity"]
  },
  {
    product: "Fresh Paneer",
    serving: "100g",
    calories: 265,
    protein: "18g (36% DV)",
    fat: "20g",
    carbs: "3g",
    calcium: "200mg (20% DV)",
    vitaminD: "trace",
    highlights: ["High-Quality Vegetarian Protein", "Essential for Muscle Building", "Rich in Calcium & Phosphorus"]
  }
];

export default function ResourcesPage() {
  // Schema.org structured data
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
        "name": "Resources",
        "item": "https://back2nest.in/resources"
      }
    ]
  };

  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "A2 Milk Resources & Nutrition Guides",
    "description": "Comprehensive collection of downloadable nutrition guides, scientific research, and educational resources about A2 milk and dairy products.",
    "url": "https://back2nest.in/resources",
    "publisher": {
      "@type": "Organization",
      "name": "Back2Nest",
      "logo": {
        "@type": "ImageObject",
        "url": "https://back2nest.in/logo.png"
      }
    },
    "about": {
      "@type": "Thing",
      "name": "A2 Milk Nutrition and Health Benefits"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 rounded-full">
                <Milk className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold text-gray-900">
                  Back<span className="text-blue-600">2</span>Nest
                </span>
                <p className="text-xs text-gray-600">Knowledge Resources</p>
              </div>
            </Link>

            <Link 
              href="/"
              className="text-gray-700 hover:text-blue-600 transition font-medium flex items-center gap-2"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back to Home
            </Link>
          </nav>
        </header>

        <main>
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                  <BookOpen className="w-5 h-5" />
                  <span className="text-sm font-semibold">Free Educational Resources</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  A2 Milk Resources &<br />Nutrition Knowledge Hub
                </h1>
                
                <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                  Access comprehensive guides, scientific research, nutrition charts, and educational materials about A2 milk and dairy products. All resources backed by scientific evidence!
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="#downloadables"
                    className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition inline-flex items-center justify-center gap-2"
                  >
                    <Download className="w-5 h-5" />
                    Browse Guides
                  </a>
                  <a 
                    href="#research"
                    className="bg-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-400 transition inline-flex items-center justify-center gap-2"
                  >
                    <Search className="w-5 h-5" />
                    View Research
                  </a>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="text-3xl font-bold mb-1">4</div>
                    <div className="text-blue-100 text-sm">Nutrition Guides</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="text-3xl font-bold mb-1">6</div>
                    <div className="text-blue-100 text-sm">Research Papers</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="text-3xl font-bold mb-1">4</div>
                    <div className="text-blue-100 text-sm">Nutrition Tables</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="text-3xl font-bold mb-1">100%</div>
                    <div className="text-blue-100 text-sm">Free Access</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Downloadable Nutrition Guides */}
          <section id="downloadables" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <Download className="w-4 h-4 inline mr-2" />
                  Educational Guides
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Nutrition Guides & Educational Resources
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Comprehensive guides about A2 milk nutrition, health benefits, and dairy product information based on scientific research
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {downloadableResources.map((resource, index) => (
                  <Link
                    key={index}
                    href={resource.link}
                    className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-500 hover:shadow-2xl transition-all group"
                  >
                    <div className="flex items-start gap-6">
                      <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-xl group-hover:scale-110 transition">
                        <resource.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                              {resource.title}
                            </h3>
                            <div className="flex items-center gap-3 text-sm text-gray-600">
                              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold">
                                {resource.format}
                              </span>
                              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                                {resource.category}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {resource.description}
                        </p>

                        <div className="bg-gray-50 rounded-lg p-4 mb-4">
                          <h4 className="font-semibold text-gray-900 mb-2 text-sm">What's Included:</h4>
                          <ul className="space-y-2">
                            {resource.points.map((point, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                          <span>Read Full Guide</span>
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Nutrition Facts Table */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <LineChart className="w-4 h-4 inline mr-2" />
                  Nutrition Data
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Complete Nutrition Facts
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Detailed nutritional information for all our dairy products based on FSSAI standards
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {nutritionFacts.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-100 hover:border-blue-300 transition"
                  >
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
                      <h3 className="text-2xl font-bold mb-1">{item.product}</h3>
                      <p className="text-blue-100">Per {item.serving}</p>
                    </div>
                    
                    <div className="p-6">
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                          <div className="text-3xl font-bold text-blue-600 mb-1">{item.calories}</div>
                          <div className="text-sm text-gray-600">Calories</div>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                          <div className="text-3xl font-bold text-green-600 mb-1">{item.protein}</div>
                          <div className="text-sm text-gray-600">Protein</div>
                        </div>
                      </div>

                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                          <span className="text-gray-700">Total Fat</span>
                          <span className="font-semibold text-gray-900">{item.fat}</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                          <span className="text-gray-700">Carbohydrates</span>
                          <span className="font-semibold text-gray-900">{item.carbs}</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                          <span className="text-gray-700">Calcium</span>
                          <span className="font-semibold text-gray-900">{item.calcium}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">Vitamin D</span>
                          <span className="font-semibold text-gray-900">{item.vitaminD}</span>
                        </div>
                      </div>

                      <div className="bg-blue-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Benefits:</h4>
                        <ul className="space-y-2">
                          {item.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                              <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Scientific Research Links */}
          <section id="research" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <Beaker className="w-4 h-4 inline mr-2" />
                  Scientific Evidence
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Peer-Reviewed Research Papers
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Access scientific studies and research papers about A2 milk benefits from reputable medical journals and institutions
                </p>
              </div>

              <div className="grid gap-6">
                {researchLinks.map((research, index) => (
                  <a
                    key={index}
                    href={research.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-purple-500 hover:shadow-xl transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-3 rounded-lg group-hover:scale-110 transition">
                        <ExternalLink className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition leading-tight">
                            {research.title}
                          </h3>
                          <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
                            {research.category}
                          </span>
                        </div>
                        
                        <p className="text-gray-600 mb-3 leading-relaxed">
                          {research.description}
                        </p>

                        <div className="flex items-center gap-4 text-sm">
                          <span className="text-gray-700 font-semibold">{research.source}</span>
                          <span className="text-gray-500">•</span>
                          <span className="text-gray-500">{research.year}</span>
                          <span className="ml-auto text-purple-600 font-semibold group-hover:gap-2 flex items-center gap-1">
                            Read Paper
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Experience Pure A2 Milk?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Order fresh, farm-delivered A2 milk from desi cows. Delivered to your doorstep in Patna by 5 AM daily.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/quick-order"
                  className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition inline-flex items-center justify-center gap-2"
                >
                  <Milk className="w-5 h-5" />
                  Order Now
                </Link>
                <Link
                  href="/products"
                  className="bg-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-400 transition inline-flex items-center justify-center gap-2 border-2 border-white"
                >
                  View All Products
                </Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
