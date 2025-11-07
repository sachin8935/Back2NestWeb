export type FAQ = { q: string; a: string };

export type BlogMeta = {
  slug: string;
  title: string;
  description: string;
  image: string;
  category: 'Nutrition' | 'Health' | 'Products' | 'Tips';
  readTime: string;
  date: string; // ISO date string
  keywords: string[];
  faqs: FAQ[];
};

export const blogs: BlogMeta[] = [
  {
    slug: 'benefits-of-A2-milk',
    title: "Benefits of A2 Milk: Better for Your Health",
    description:
      "Discover the amazing health benefits of A2 milk from desi cows. Learn how A2 milk improves digestion, immunity, and overall well-being for your family.",
    image:
      'https://res.cloudinary.com/back2nest/image/upload/v1760552656/offer_banners/gjb3sg9cvpzu2yuzxvvd.jpg',
    category: 'Nutrition',
    readTime: '6 min read',
    date: '2025-01-15',
    keywords: [
      'A2 milk benefits',
      'A2 milk in Patna',
      'Back2Nest milk delivery',
      'farm fresh milk Patna',
      'pure milk Patna',
      'A2 cow milk benefits',
      'healthy milk for family',
      'A2 vs regular milk'
    ],
    faqs: [
      {
        q: 'What is A2 milk and how is it different from regular milk?',
        a: 'A2 milk comes from cows that produce only the A2 beta-casein protein, which many people find easier to digest than A1 protein found in regular milk.'
      },
      {
        q: 'Is A2 milk good for digestion?',
        a: 'Yes, A2 milk is generally gentler on the stomach and may reduce bloating or discomfort for people sensitive to A1 protein.'
      },
      {
        q: 'Is Back2Nest A2 milk pure and preservative-free?',
        a: 'Back2Nest delivers fresh, preservative-free A2 milk from Indian cow breeds, sourced locally and delivered every morning in Patna.'
      }
    ]
  },
  {
    slug: 'desi-cow-milk-benefits',
    title: "Desi Cow Milk Benefits: Why Indian Breeds Excel",
    description:
      'Learn why milk from indigenous Indian cow breeds like Gir and Sahiwal is healthier, more nutritious, and better for digestion than hybrid varieties.',
    image:
      'https://res.cloudinary.com/back2nest/image/upload/v1760552850/offer_banners/zrmudosi8ifnghrhuzna.png',
    category: 'Health',
    readTime: '7 min read',
    date: '2025-01-12',
    keywords: [
      'Desi cow milk benefits',
      'A2 milk in Patna',
      'Back2Nest milk delivery',
      'pure Desi cow milk',
      'Indian cow milk advantages',
      'Gir cow milk benefits',
      'Sahiwal milk',
      'A2 cow milk Patna'
    ],
    faqs: [
      {
        q: 'What makes Desi cow milk special?',
        a: 'Desi cow milk naturally contains A2 beta-casein protein, which is easier to digest and rich in essential nutrients.'
      },
      {
        q: 'Which Indian breeds produce A2 milk?',
        a: 'Common A2 breeds include Gir, Sahiwal, Tharparkar, and Red Sindhi.'
      },
      {
        q: 'Is Desi cow milk good for children and seniors?',
        a: 'Yes, its digestibility and nutrient density make it ideal for kids and elderly family members.'
      }
    ]
  },
  {
    slug: 'desi-ghee-vs-regular-ghee',
    title: 'Bilona Ghee vs Regular Ghee: Which Is Better?',
    description:
      "Understand the difference between traditional Bilona ghee and regular ghee. Discover why Back2Nest's A2 Bilona ghee is healthier and more authentic.",
    image:
      'https://res.cloudinary.com/back2nest/image/upload/v1761124550/products/rprfyfwgi7pzmud1oojc.jpg',
    category: 'Products',
    readTime: '8 min read',
    date: '2025-01-10',
    keywords: [
      'Bilona ghee vs regular ghee',
      'A2 ghee benefits',
      'traditional ghee method',
      'Back2Nest ghee',
      'pure ghee Patna'
    ],
    faqs: [
      {
        q: 'What is Bilona method ghee?',
        a: 'Bilona ghee is traditionally made by curd-churning butter and slowly heating it, retaining nutrition and authentic flavor.'
      },
      {
        q: 'Is A2 Bilona ghee better than regular ghee?',
        a: 'A2 Bilona ghee is typically purer, aromatic, and easier to digest compared to mass-produced ghee.'
      },
      {
        q: 'How can I use A2 ghee daily?',
        a: 'Use it for cooking, drizzling on rotis, khichdi, or with milk — it supports digestion and adds healthy fats.'
      }
    ]
  },
  {
    slug: 'best-time-to-drink-milk',
    title: 'Best Time to Drink Milk: Morning or Night?',
    description:
      'Find out the ideal time to drink milk for maximum health benefits. Learn how timing affects digestion, sleep, and nutrient absorption.',
    image:
      'https://res.cloudinary.com/back2nest/image/upload/v1760552656/offer_banners/gjb3sg9cvpzu2yuzxvvd.jpg',
    category: 'Tips',
    readTime: '5 min read',
    date: '2025-01-08',
    keywords: [
      'best time to drink milk',
      'morning or night milk benefits',
      'A2 milk Patna',
      'drink milk before bed',
      'A2 milk digestion',
      'ayurvedic milk timing'
    ],
    faqs: [
      {
        q: 'Is it better to drink milk in the morning or at night?',
        a: 'Both have benefits: morning for energy and satiety; night for relaxation and better sleep.'
      },
      {
        q: 'Does warm milk help with sleep?',
        a: 'Yes, warm milk contains tryptophan which supports melatonin production and restful sleep.'
      },
      {
        q: 'Is A2 milk suitable for bedtime?',
        a: 'A2 milk is gentle on digestion and is suitable before bed for most people.'
      }
    ]
  },
  {
    slug: 'milk-storage-tips-patna',
    title: "Milk Storage Tips for Patna's Climate | Back2Nest",
    description:
      "Practical tips for storing fresh milk in Patna's hot weather. Keep your milk fresh longer with proper storage techniques and temperature control.",
    image:
      'https://res.cloudinary.com/back2nest/image/upload/v1760552850/offer_banners/zrmudosi8ifnghrhuzna.png',
    category: 'Tips',
    readTime: '4 min read',
    date: '2025-01-05',
    keywords: [
      'milk storage tips',
      'store milk Patna climate',
      'keep milk fresh',
      'Back2Nest milk storage',
      'refrigeration tips'
    ],
    faqs: [
      {
        q: 'How long can fresh milk last in summer?',
        a: 'Refrigerated at 4°C, fresh milk lasts 2–3 days; avoid frequent temperature changes and always keep sealed.'
      },
      {
        q: 'Can I boil A2 milk?',
        a: 'Boil gently once and avoid repeated boiling to preserve taste and nutrients.'
      },
      {
        q: 'What is the best container to store milk?',
        a: 'Use clean, airtight glass or food-grade steel containers; avoid open vessels and frequent transfers.'
      }
    ]
  }
];
