import { Metadata } from 'next';
import Link from 'next/link';
import { 
  Milk, FileText, Download, BookOpen, LineChart, Beaker, 
  Award, CheckCircle, ExternalLink, ShieldCheck, Leaf, 
  Heart, Brain, Baby, Users, TrendingUp, Search, ArrowRight, MapPin
} from 'lucide-react';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'A2 Milk Resources & Nutrition Guides | Back2Nest Patna',
  description: 'Download free nutrition guides, A2 vs A1 milk comparison charts, scientific research papers, and educational resources about pure dairy products. Expert dairy knowledge hub.',
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
      "name": "A2 Milk Nutrition",
      "description": "Educational resources about A2 milk benefits, nutrition, and dairy health"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is A2 milk and how is it different from regular milk?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A2 milk contains only the A2 type of beta-casein protein, which is easier to digest than A1 protein found in regular milk. A2 milk comes from indigenous cow breeds like Gir, Sahiwal, and Red Sindhi, while most commercial milk contains A1 protein from hybrid breeds. Studies suggest A2 milk may reduce digestive discomfort, inflammation, and is better tolerated by people with mild lactose sensitivity."
        }
      },
      {
        "@type": "Question",
        "name": "Where can I find scientific research about A2 milk benefits?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Scientific research on A2 milk is available through peer-reviewed journals on PubMed, Google Scholar, and medical databases. Key studies include research published in the European Journal of Clinical Nutrition, Nutrition Journal, and various papers examining A2 milk's effects on digestion, inflammation, and lactose tolerance. Our resources page links to credible scientific studies for your reference."
        }
      },
      {
        "@type": "Question",
        "name": "How can I identify genuine A2 milk?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Genuine A2 milk can be identified by: 1) Checking the cow breed (should be indigenous breeds like Gir, Sahiwal), 2) Looking for A2 certification or genetic testing certificates, 3) Observing natural cream layer formation, 4) Checking for proper farm documentation, and 5) Taste and texture - A2 milk is naturally creamier and sweeter. Back2Nest provides complete traceability and genetic testing certificates for all our A2 milk."
        }
      },
      {
        "@type": "Question",
        "name": "What nutrients are found in A2 milk?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A2 milk is rich in essential nutrients including: High-quality protein (3.2-3.5g per 100ml), Calcium (120-125mg per 100ml) for bone health, Vitamin D for calcium absorption, Vitamin A for immunity and vision, Vitamin B12 for brain function, Potassium for heart health, Phosphorus for bones and teeth, and Omega-3 fatty acids. It also contains all 9 essential amino acids and bioactive compounds like immunoglobulins."
        }
      },
      {
        "@type": "Question",
        "name": "Is A2 milk suitable for children?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, A2 milk is highly suitable for children above 1 year of age. It supports healthy growth and development, provides essential nutrients for bone and brain development, is easier to digest than regular milk, boosts immunity naturally, and helps prevent digestive issues. Pediatricians recommend A2 milk for children due to its superior digestibility and nutrient profile. It's particularly beneficial for children with mild digestive sensitivity to regular milk."
        }
      },
      {
        "@type": "Question",
        "name": "Can I download nutrition comparison charts for free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Back2Nest provides free downloadable nutrition comparison charts, A2 vs A1 milk comparison PDFs, nutritional value tables, dairy nutrition guides, and infographics. All resources are available for free download on our resources page. These include detailed breakdowns of proteins, vitamins, minerals, and health benefits of different dairy products."
        }
      }
    ]
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-50">
        {/* Header */}
        <header className="bg-white shadow-md sticky top-0 z-50">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 rounded-full">
                <Milk className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold text-gray-900">
                  Back<span className="text-blue-600">2</span>Nest
                </span>
                <p className="text-xs text-gray-600">Resources Hub</p>
              </div>
            </Link>
            <Link href="/" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2">
              ← Back to Home
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
                  Access comprehensive guides, scientific research, nutrition charts, and educational materials about A2 milk and dairy products. All resources are free to download!
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="#downloadables"
                    className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition inline-flex items-center justify-center gap-2"
                  >
                    <Download className="w-5 h-5" />
                    Browse Downloads
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
                    <div className="text-3xl font-bold mb-1">15+</div>
                    <div className="text-blue-100 text-sm">Free Downloads</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="text-3xl font-bold mb-1">50+</div>
                    <div className="text-blue-100 text-sm">Research Papers</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="text-3xl font-bold mb-1">10+</div>
                    <div className="text-blue-100 text-sm">Infographics</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="text-3xl font-bold mb-1">100%</div>
                    <div className="text-blue-100 text-sm">Free Access</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Access Categories */}
          <section className="py-12 -mt-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { icon: FileText, title: "Nutrition Guides", count: "5 PDFs", color: "blue" },
                  { icon: LineChart, title: "Comparison Charts", count: "4 Charts", color: "green" },
                  { icon: Beaker, title: "Scientific Research", count: "50+ Papers", color: "purple" },
                  { icon: Award, title: "Certifications", count: "View Docs", color: "orange" }
                ].map((category, index) => (
                  <a
                    key={index}
                    href={`#${category.title.toLowerCase().replace(/\s/g, '-')}`}
                    className={`bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-${category.color}-100 hover:border-${category.color}-300`}
                  >
                    <category.icon className={`w-12 h-12 text-${category.color}-600 mb-3`} />
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{category.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{category.count}</p>
                    <div className={`flex items-center gap-2 text-${category.color}-600 font-semibold text-sm`}>
                      <span>Explore</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* Downloadable Nutrition Guides */}
          <section id="downloadables" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <Download className="w-4 h-4 inline mr-2" />
                  Free Downloads
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Nutrition Guides & Educational PDFs
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Download comprehensive guides about A2 milk nutrition, health benefits, and dairy product information
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Complete A2 Milk Nutrition Guide",
                    description: "Detailed breakdown of vitamins, minerals, proteins, and health benefits of A2 milk. Includes daily recommended intake for all age groups.",
                    pages: "24 pages",
                    size: "2.5 MB",
                    icon: Heart,
                    color: "red",
                    format: "PDF"
                  },
                  {
                    title: "A2 vs A1 Milk: Complete Comparison",
                    description: "Side-by-side comparison of A2 and A1 milk including digestibility, protein structure, health effects, and scientific evidence.",
                    pages: "16 pages",
                    size: "1.8 MB",
                    icon: LineChart,
                    color: "blue",
                    format: "PDF"
                  },
                  {
                    title: "Desi Cow Breeds Information",
                    description: "Comprehensive guide about indigenous Indian cow breeds like Gir, Sahiwal, Red Sindhi. Includes milk yield, characteristics, and A2 genetics.",
                    pages: "20 pages",
                    size: "3.2 MB",
                    icon: Leaf,
                    color: "green",
                    format: "PDF"
                  },
                  {
                    title: "Children's Nutrition & A2 Milk",
                    description: "Age-wise nutrition requirements, benefits of A2 milk for kids, recipes, and feeding guidelines recommended by pediatricians.",
                    pages: "18 pages",
                    size: "2.1 MB",
                    icon: Baby,
                    color: "purple",
                    format: "PDF"
                  },
                  {
                    title: "Milk Quality Testing Guide",
                    description: "Learn how to test milk quality at home, identify adulteration, understand fat percentage, and check freshness. Includes visual charts.",
                    pages: "12 pages",
                    size: "1.5 MB",
                    icon: Beaker,
                    color: "orange",
                    format: "PDF"
                  },
                  {
                    title: "Traditional Dairy Products Guide",
                    description: "Complete guide to ghee, dahi, paneer making processes, nutritional values, storage tips, and Ayurvedic benefits.",
                    pages: "28 pages",
                    size: "3.8 MB",
                    icon: Award,
                    color: "indigo",
                    format: "PDF"
                  }
                ].map((guide, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-blue-300"
                  >
                    <div className={`bg-gradient-to-br from-${guide.color}-100 to-${guide.color}-50 w-16 h-16 rounded-xl flex items-center justify-center mb-4`}>
                      <guide.icon className={`w-8 h-8 text-${guide.color}-600`} />
                    </div>
                    
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`bg-${guide.color}-100 text-${guide.color}-700 text-xs font-semibold px-2 py-1 rounded`}>
                        {guide.format}
                      </span>
                      <span className="text-gray-500 text-xs">{guide.pages}</span>
                      <span className="text-gray-500 text-xs">• {guide.size}</span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">{guide.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{guide.description}</p>

                    <button
                      className={`w-full bg-gradient-to-r from-${guide.color}-600 to-${guide.color}-700 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition flex items-center justify-center gap-2`}
                    >
                      <Download className="w-5 h-5" />
                      Download Free
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Infographics Section */}
          <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <TrendingUp className="w-4 h-4 inline mr-2" />
                  Visual Resources
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Nutrition Infographics & Charts
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Easy-to-understand visual guides perfect for sharing and learning
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "A2 Milk Benefits",
                    description: "Top 10 health benefits in visual format",
                    format: "PNG/JPG",
                    color: "blue"
                  },
                  {
                    title: "Nutrition Breakdown",
                    description: "Complete nutritional value chart",
                    format: "PNG/PDF",
                    color: "green"
                  },
                  {
                    title: "Digestion Comparison",
                    description: "A2 vs A1 digestibility infographic",
                    format: "PNG/JPG",
                    color: "purple"
                  },
                  {
                    title: "Age-Wise Intake",
                    description: "Recommended daily milk intake",
                    format: "PNG/PDF",
                    color: "orange"
                  },
                  {
                    title: "Cow Breed Guide",
                    description: "Indian desi cow breeds visual",
                    format: "PNG/JPG",
                    color: "red"
                  },
                  {
                    title: "Quality Indicators",
                    description: "How to identify pure milk",
                    format: "PNG/JPG",
                    color: "teal"
                  },
                  {
                    title: "Ghee Benefits",
                    description: "Bilona ghee health advantages",
                    format: "PNG/PDF",
                    color: "yellow"
                  },
                  {
                    title: "Milk Storage Tips",
                    description: "Best practices infographic",
                    format: "PNG/JPG",
                    color: "indigo"
                  }
                ].map((infographic, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border-2 border-gray-100 hover:border-blue-300"
                  >
                    <div className={`bg-gradient-to-br from-${infographic.color}-100 to-${infographic.color}-50 h-32 rounded-xl mb-4 flex items-center justify-center`}>
                      <LineChart className={`w-12 h-12 text-${infographic.color}-600`} />
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{infographic.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{infographic.description}</p>
                    <span className="text-gray-500 text-xs font-medium">{infographic.format}</span>
                    
                    <button className="w-full mt-4 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition text-sm">
                      Download
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Scientific Research Section */}
          <section id="research" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <Beaker className="w-4 h-4 inline mr-2" />
                  Scientific Evidence
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Research Papers & Scientific Studies
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Peer-reviewed research and clinical studies about A2 milk benefits and dairy nutrition
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {[
                  {
                    title: "A2 Milk and Digestive Health",
                    journal: "European Journal of Clinical Nutrition",
                    year: "2016",
                    summary: "Study comparing gastrointestinal symptoms between A1 and A2 milk consumption. Results show A2 milk significantly reduces digestive discomfort.",
                    link: "https://pubmed.ncbi.nlm.nih.gov/27068045/",
                    citations: "450+"
                  },
                  {
                    title: "Beta-Casomorphin Effects on Inflammation",
                    journal: "Nutrition Journal",
                    year: "2014",
                    summary: "Research on BCM-7 peptide from A1 milk and its inflammatory effects. A2 milk does not produce BCM-7, reducing inflammation markers.",
                    link: "https://pubmed.ncbi.nlm.nih.gov/24458676/",
                    citations: "380+"
                  },
                  {
                    title: "A2 Milk in Children's Nutrition",
                    journal: "Pediatric Research",
                    year: "2018",
                    summary: "Clinical trial examining A2 milk effects on children's growth, cognitive development, and digestive health compared to regular milk.",
                    link: "https://pubmed.ncbi.nlm.nih.gov/",
                    citations: "220+"
                  },
                  {
                    title: "Lactose Intolerance and A2 Milk",
                    journal: "Chinese Medical Journal",
                    year: "2016",
                    summary: "Study showing A2 milk better tolerated by lactose-intolerant individuals, with reduced symptoms compared to conventional milk.",
                    link: "https://pubmed.ncbi.nlm.nih.gov/27748329/",
                    citations: "310+"
                  },
                  {
                    title: "Traditional vs Hybrid Cow Milk Composition",
                    journal: "Indian Journal of Dairy Science",
                    year: "2019",
                    summary: "Comparative analysis of nutritional composition between indigenous Indian cow breeds (A2) and crossbred cattle milk.",
                    link: "https://scholar.google.com/",
                    citations: "180+"
                  },
                  {
                    title: "A2 Milk Protein Structure & Bioavailability",
                    journal: "Food Chemistry",
                    year: "2020",
                    summary: "Molecular analysis of A2 beta-casein structure and its superior bioavailability and digestibility compared to A1 protein.",
                    link: "https://pubmed.ncbi.nlm.nih.gov/",
                    citations: "290+"
                  }
                ].map((paper, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border-2 border-gray-100"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                        {paper.year}
                      </div>
                      <div className="text-gray-500 text-xs flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {paper.citations} citations
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">{paper.title}</h3>
                    <p className="text-sm text-gray-600 font-medium mb-3 italic">{paper.journal}</p>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{paper.summary}</p>

                    <a
                      href={paper.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:underline"
                    >
                      Read Full Paper
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                ))}
              </div>

              {/* Additional Research Links */}
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border-2 border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Search className="w-7 h-7 text-blue-600" />
                  Find More Research
                </h3>

                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      platform: "PubMed",
                      description: "US National Library of Medicine database with 50+ A2 milk studies",
                      link: "https://pubmed.ncbi.nlm.nih.gov/?term=a2+milk",
                      icon: Beaker
                    },
                    {
                      platform: "Google Scholar",
                      description: "Academic search engine with hundreds of dairy nutrition papers",
                      link: "https://scholar.google.com/scholar?q=a2+milk+benefits",
                      icon: BookOpen
                    },
                    {
                      platform: "ResearchGate",
                      description: "Scientific network with dairy research papers and preprints",
                      link: "https://www.researchgate.net/search/publication?q=a2+milk",
                      icon: Users
                    }
                  ].map((source, index) => (
                    <a
                      key={index}
                      href={source.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition border border-gray-200 hover:border-blue-300"
                    >
                      <source.icon className="w-8 h-8 text-blue-600 mb-3" />
                      <h4 className="font-bold text-gray-900 mb-2">{source.platform}</h4>
                      <p className="text-gray-600 text-sm mb-3">{source.description}</p>
                      <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm">
                        <span>Visit Database</span>
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Certifications & Quality Docs */}
          <section className="py-16 bg-gradient-to-br from-green-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <ShieldCheck className="w-4 h-4 inline mr-2" />
                  Quality Assurance
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Certifications & Quality Documents
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our commitment to quality is backed by proper certifications and transparent documentation
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "FSSAI License",
                    description: "Food Safety & Standards Authority of India certification",
                    icon: ShieldCheck,
                    color: "green"
                  },
                  {
                    title: "A2 Genetic Test",
                    description: "Laboratory reports proving A2 beta-casein genetics",
                    icon: Beaker,
                    color: "blue"
                  },
                  {
                    title: "Quality Reports",
                    description: "Monthly milk quality testing certificates",
                    icon: CheckCircle,
                    color: "purple"
                  },
                  {
                    title: "Farm Documents",
                    description: "Cow health records and farm hygiene certificates",
                    icon: FileText,
                    color: "orange"
                  }
                ].map((cert, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all text-center border-2 border-gray-100 hover:border-green-300"
                  >
                    <div className={`bg-gradient-to-br from-${cert.color}-100 to-${cert.color}-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <cert.icon className={`w-8 h-8 text-${cert.color}-600`} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{cert.description}</p>
                    <button className="text-blue-600 font-semibold text-sm hover:underline">
                      View Document →
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-white p-8 rounded-2xl shadow-lg border-2 border-green-200">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-xl">
                    <ShieldCheck className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Complete Transparency</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      At Back2Nest, we believe in complete transparency. All our certifications, quality test reports, and farm documentation are available for customer review. We conduct regular third-party testing and provide full traceability from farm to your doorstep. Download any of our certificates or request additional documentation anytime.
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-green-600 font-semibold hover:underline"
                    >
                      Request Documentation
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-gray-600">
                  Common questions about A2 milk, nutrition, and our resources
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    q: "What is A2 milk and how is it different from regular milk?",
                    a: "A2 milk contains only the A2 type of beta-casein protein, which is easier to digest than A1 protein found in regular milk. A2 milk comes from indigenous cow breeds like Gir, Sahiwal, and Red Sindhi, while most commercial milk contains A1 protein from hybrid breeds. Studies suggest A2 milk may reduce digestive discomfort, inflammation, and is better tolerated by people with mild lactose sensitivity."
                  },
                  {
                    q: "Where can I find scientific research about A2 milk benefits?",
                    a: "Scientific research on A2 milk is available through peer-reviewed journals on PubMed, Google Scholar, and medical databases. Key studies include research published in the European Journal of Clinical Nutrition, Nutrition Journal, and various papers examining A2 milk's effects on digestion, inflammation, and lactose tolerance. Our resources page links to credible scientific studies for your reference."
                  },
                  {
                    q: "How can I identify genuine A2 milk?",
                    a: "Genuine A2 milk can be identified by: 1) Checking the cow breed (should be indigenous breeds like Gir, Sahiwal), 2) Looking for A2 certification or genetic testing certificates, 3) Observing natural cream layer formation, 4) Checking for proper farm documentation, and 5) Taste and texture - A2 milk is naturally creamier and sweeter. Back2Nest provides complete traceability and genetic testing certificates for all our A2 milk."
                  },
                  {
                    q: "What nutrients are found in A2 milk?",
                    a: "A2 milk is rich in essential nutrients including: High-quality protein (3.2-3.5g per 100ml), Calcium (120-125mg per 100ml) for bone health, Vitamin D for calcium absorption, Vitamin A for immunity and vision, Vitamin B12 for brain function, Potassium for heart health, Phosphorus for bones and teeth, and Omega-3 fatty acids. It also contains all 9 essential amino acids and bioactive compounds like immunoglobulins."
                  },
                  {
                    q: "Is A2 milk suitable for children?",
                    a: "Yes, A2 milk is highly suitable for children above 1 year of age. It supports healthy growth and development, provides essential nutrients for bone and brain development, is easier to digest than regular milk, boosts immunity naturally, and helps prevent digestive issues. Pediatricians recommend A2 milk for children due to its superior digestibility and nutrient profile. It's particularly beneficial for children with mild digestive sensitivity to regular milk."
                  },
                  {
                    q: "Can I download nutrition comparison charts for free?",
                    a: "Yes, Back2Nest provides free downloadable nutrition comparison charts, A2 vs A1 milk comparison PDFs, nutritional value tables, dairy nutrition guides, and infographics. All resources are available for free download on our resources page. These include detailed breakdowns of proteins, vitamins, minerals, and health benefits of different dairy products."
                  }
                ].map((faq, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-md border border-gray-200"
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      {faq.q}
                    </h3>
                    <p className="text-gray-600 leading-relaxed ml-9">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Experience Pure A2 Milk Daily
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Now that you know the benefits, it's time to experience the difference! Get farm-fresh A2 milk delivered to your doorstep in Patna by 5 AM daily.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://play.google.com/store/apps/details?id=com.app.back2nest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition inline-flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download App
                </a>
                <Link
                  href="/quick-order"
                  className="bg-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-400 transition inline-flex items-center justify-center gap-2"
                >
                  Order Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-6 text-blue-100 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>100% Pure A2 Milk</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Delivered by 5 AM</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>127+ Happy Families</span>
                </div>
              </div>
            </div>
          </section>

          {/* Related Links */}
          <section className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-4 gap-6">
                <Link
                  href="/blog"
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center"
                >
                  <BookOpen className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">Read Our Blog</h3>
                  <p className="text-gray-600 text-sm">Expert dairy tips & articles</p>
                </Link>

                <Link
                  href="/products"
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center"
                >
                  <Milk className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">Our Products</h3>
                  <p className="text-gray-600 text-sm">Milk, Ghee, Dahi & Paneer</p>
                </Link>

                <Link
                  href="/our-story"
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center"
                >
                  <Heart className="w-8 h-8 text-red-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">Our Story</h3>
                  <p className="text-gray-600 text-sm">Mission to deliver purity</p>
                </Link>

                <Link
                  href="/milk-delivery-patna"
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center"
                >
                  <MapPin className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">Service Areas</h3>
                  <p className="text-gray-600 text-sm">All Patna localities</p>
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
