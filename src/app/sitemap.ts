import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.back2nest.in';
  const today = new Date('2025-10-22');
  const map: MetadataRoute.Sitemap = [
    {
      url: `${base}/`,
      lastModified: today,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${base}/milk-delivery-patna`,
      lastModified: today,
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${base}/milk-delivery-patna/boring-road`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.88,
    },
    {
      url: `${base}/milk-delivery-patna/kankarbagh`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.88,
    },
    {
      url: `${base}/milk-delivery-patna/patliputra`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.88,
    },
    {
      url: `${base}/milk-price-patna`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${base}/products`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${base}/products/milk`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${base}/products/dahi`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${base}/products/paneer`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${base}/products/ghee`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${base}/quick-order`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${base}/faq`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${base}/offers`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${base}/reviews`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${base}/contact`,
      lastModified: new Date('2025-10-20'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${base}/about-us`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${base}/our-story`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${base}/jobs`,
      lastModified: new Date('2025-10-15'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
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
    // Blog index
    {
      url: `${base}/blog`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Blog posts
    {
      url: `${base}/blog/benefits-of-A2-milk`,
      lastModified: new Date('2025-01-15'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${base}/blog/desi-cow-milk-benefits`,
      lastModified: new Date('2025-01-12'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${base}/blog/desi-ghee-vs-regular-ghee`,
      lastModified: new Date('2025-01-10'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${base}/blog/best-time-to-drink-milk`,
      lastModified: new Date('2025-01-08'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${base}/blog/milk-storage-tips-patna`,
      lastModified: new Date('2025-01-05'),
      changeFrequency: 'monthly',
      priority: 0.68,
    },
  ];
  return map;
}
