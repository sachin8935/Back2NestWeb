import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://back2nest.in';
  const today = new Date();
  
  const map: MetadataRoute.Sitemap = [
    // HOMEPAGE - Maximum Priority
    {
      url: `${base}/`,
      lastModified: today,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    
    // HIGH-PRIORITY LOCATION PAGES (Beat competitors with local SEO)
    {
      url: `${base}/milk-delivery-patna`,
      lastModified: today,
      changeFrequency: 'daily',
      priority: 0.95,
    },
    
    // SPECIFIC AREA PAGES - Critical for local SEO
    {
      url: `${base}/milk-delivery-patna/boring-road`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.90,
    },
    {
      url: `${base}/milk-delivery-patna/kankarbagh`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.90,
    },
    {
      url: `${base}/milk-delivery-patna/patliputra`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.90,
    },
    {
      url: `${base}/milk-delivery-patna/bailey-road`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.90,
    },
    {
      url: `${base}/milk-delivery-patna/fraser-road`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.90,
    },
    {
      url: `${base}/milk-delivery-patna/rajendra-nagar`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.90,
    },
    {
      url: `${base}/milk-delivery-patna/budha-colony`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.90,
    },
    {
      url: `${base}/milk-delivery-patna/kidwaipuri`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.90,
    },
    {
      url: `${base}/milk-delivery-patna/anisabad`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.90,
    },
    
    // PRICE PAGE - High commercial intent
    {
      url: `${base}/milk-price-patna`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.92,
    },
    
    // MAIN PRODUCTS PAGE
    {
      url: `${base}/products`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.92,
    },
    
    // PRODUCT PAGES - Individual with high priority
    {
      url: `${base}/products/milk`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.88,
    },
    {
      url: `${base}/products/dahi`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.87,
    },
    {
      url: `${base}/products/paneer`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.87,
    },
    {
      url: `${base}/products/ghee`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.87,
    },
    
    // CONVERSION PAGES
    {
      url: `${base}/quick-order`,
      lastModified: today,
      changeFrequency: 'daily',
      priority: 0.85,
    },
    {
      url: `${base}/offers`,
      lastModified: today,
      changeFrequency: 'daily',
      priority: 0.85,
    },
    
    // TRUST & ENGAGEMENT PAGES
    {
      url: `${base}/reviews`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.82,
    },
    {
      url: `${base}/faq`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.82,
    },
    {
      url: `${base}/resources`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.82,
    },
    
    // ABOUT & STORY (Like PaavniOrganic's high-priority pages)
    {
      url: `${base}/about-us`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.88,
    },
    {
      url: `${base}/our-story`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.88,
    },
    
    // CONTACT
    {
      url: `${base}/contact`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    
    // CAREERS
    {
      url: `${base}/jobs`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.65,
    },
    
    // BLOG INDEX - Critical like DoodhHai
    {
      url: `${base}/blog`,
      lastModified: today,
      changeFrequency: 'daily',
      priority: 0.85,
    },
    
    // BLOG POSTS - Updated more frequently
    {
      url: `${base}/blog/a2-vs-a1-milk-complete-guide`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.82,
    },
    {
      url: `${base}/blog/benefits-of-A2-milk`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.80,
    },
    {
      url: `${base}/blog/desi-cow-milk-benefits`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.80,
    },
    {
      url: `${base}/blog/desi-ghee-vs-regular-ghee`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.78,
    },
    {
      url: `${base}/blog/best-time-to-drink-milk`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.78,
    },
    {
      url: `${base}/blog/milk-storage-tips-patna`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${base}/blog/a2-milk-benefits-for-children`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.80,
    },
    
    // LEGAL PAGES - Lower priority
    {
      url: `${base}/terms-conditions`,
      lastModified: new Date('2025-09-01'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${base}/privacy-policy`,
      lastModified: new Date('2025-09-01'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${base}/refund-policy`,
      lastModified: new Date('2025-09-01'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
  
  return map;
}
