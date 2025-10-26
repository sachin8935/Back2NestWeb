"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, Milk, Droplets, Package, ShoppingBag } from 'lucide-react';
import { blogs } from '@/data/blogs';
import { getBlogBySlug } from '@/lib/blog';
import { useMemo } from 'react';

export default function BlogPost({ slug, children }: { slug: string; children: React.ReactNode }) {
  const post = getBlogBySlug(slug);
  const related = useMemo(() => blogs.filter((b) => b.slug !== slug).slice(0, 3), [slug]);

  if (!post) return null;

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: [post.image],
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    articleSection: post.category,
    url: `https://back2nest.in/blog/${post.slug}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://back2nest.in/blog/${post.slug}`,
    },
    author: {
      '@type': 'Organization',
      name: 'Back2Nest',
      url: 'https://back2nest.in'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Back2Nest',
      logo: {
        '@type': 'ImageObject',
        url: 'https://back2nest.in/logo.png',
        width: 512,
        height: 512
      },
    },
    keywords: post.keywords.join(', '),
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://back2nest.in/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://back2nest.in/blog'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://back2nest.in/blog/${post.slug}`
      }
    ]
  };

  const faqLd = post.faqs.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: post.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.a,
          },
        })),
      }
    : null;

  return (
    <div className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      {faqLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      )}

      {/* Hero */}
      <section className="relative w-full h-80 md:h-[28rem]">
        <Image src={post.image} alt={post.title} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4 text-white">
          <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-full mb-3">
            <Milk className="w-4 h-4" />
            <span className="text-sm font-semibold">{post.category}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">{post.title}</h1>
          <div className="mt-3 flex items-center gap-4 text-sm text-gray-200">
            <div className="flex items-center gap-1"><Calendar className="w-4 h-4" /><span>{new Date(post.date).toLocaleDateString()}</span></div>
            <div className="flex items-center gap-1"><Clock className="w-4 h-4" /><span>{post.readTime}</span></div>
          </div>
        </div>
      </section>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-10">
        <article className="prose lg:prose-lg prose-blue max-w-none">
          {children}
        </article>

        {/* Product Links */}
        <section className="mt-12 border-t pt-8">
          <h2 className="text-2xl font-bold mb-4">Recommended Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            <Link href="/products/milk" className="group border rounded-lg p-4 hover:border-blue-500 transition flex items-center gap-2">
              <Droplets className="w-4 h-4 text-blue-600" />
              <span className="group-hover:text-blue-600 font-medium">A2 Milk</span>
              <ArrowRight className="w-4 h-4 ml-auto text-gray-400 group-hover:text-blue-600" />
            </Link>
            <Link href="/products/ghee" className="group border rounded-lg p-4 hover:border-blue-500 transition flex items-center gap-2">
              <Package className="w-4 h-4 text-blue-600" />
              <span className="group-hover:text-blue-600 font-medium">A2 Ghee</span>
              <ArrowRight className="w-4 h-4 ml-auto text-gray-400 group-hover:text-blue-600" />
            </Link>
            <Link href="/products/dahi" className="group border rounded-lg p-4 hover:border-blue-500 transition flex items-center gap-2">
              <Package className="w-4 h-4 text-blue-600" />
              <span className="group-hover:text-blue-600 font-medium">Dahi</span>
              <ArrowRight className="w-4 h-4 ml-auto text-gray-400 group-hover:text-blue-600" />
            </Link>
            <Link href="/products/paneer" className="group border rounded-lg p-4 hover:border-blue-500 transition flex items-center gap-2">
              <Package className="w-4 h-4 text-blue-600" />
              <span className="group-hover:text-blue-600 font-medium">Paneer</span>
              <ArrowRight className="w-4 h-4 ml-auto text-gray-400 group-hover:text-blue-600" />
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold">Ready for Fresh A2 Milk Daily?</h3>
            <p className="text-blue-100">Subscribe now and get farm-fresh milk delivered by 5 AM in Patna.</p>
          </div>
          <div className="flex gap-3">
            <Link href="/quick-order" className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition flex items-center gap-2">
              <ShoppingBag className="w-4 h-4" /> Order Now
            </Link>
            <Link href="/products" className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-400 transition">
              Explore Products
            </Link>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-16 border-t pt-10">
          <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <Link key={r.slug} href={`/blog/${r.slug}`} className="group block border rounded-xl overflow-hidden hover:shadow-lg transition">
                <div className="relative h-36">
                  <Image src={r.image} alt={r.title} fill className="object-cover group-hover:scale-105 transition" />
                </div>
                <div className="p-4">
                  <p className="text-xs text-blue-600 font-semibold mb-1">{r.category}</p>
                  <h3 className="font-semibold line-clamp-2 group-hover:text-blue-600">{r.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
