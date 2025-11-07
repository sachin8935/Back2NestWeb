import type { Metadata } from 'next';
import { blogs, type BlogMeta } from '@/data/blogs';

export function getBlogBySlug(slug: string): BlogMeta | undefined {
  return blogs.find((b) => b.slug === slug);
}

export function buildBlogMetadata(slug: string): Metadata {
  const b = getBlogBySlug(slug);
  const base = 'https://back2nest.in';
  if (!b) return {};
  return {
    title: b.title,
    description: b.description,
    keywords: b.keywords,
    alternates: { canonical: `${base}/blog/${b.slug}` },
    openGraph: {
      type: 'article',
      title: b.title,
      description: b.description,
      url: `${base}/blog/${b.slug}`,
      images: [{ url: b.image }],
      publishedTime: new Date(b.date).toISOString(),
    },
    twitter: {
      card: 'summary_large_image',
      title: b.title,
      description: b.description,
      images: [b.image],
    },
  };
}
