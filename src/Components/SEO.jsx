import React, { useEffect } from 'react';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  canonicalUrl, 
  ogTitle, 
  ogDescription, 
  ogImage, 
  ogUrl,
  structuredData,
  additionalMeta = {},
  breadcrumbData = null
}) => {
  
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta tags
    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'author', content: 'Back2Nest Team' },
      { name: 'language', content: 'English' },
      { name: 'revisit-after', content: '7 days' },
      { name: 'publisher', content: 'Back2Nest' },
      { name: 'copyright', content: '© 2025 Back2Nest. All rights reserved.' },
      
      // Open Graph
      { property: 'og:title', content: ogTitle || title },
      { property: 'og:description', content: ogDescription || description },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: ogUrl || canonicalUrl },
      { property: 'og:site_name', content: 'Back2Nest - Safe School Van Services' },
      { property: 'og:locale', content: 'en_IN' },
      
      // Twitter Cards
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: ogTitle || title },
      { name: 'twitter:description', content: ogDescription || description },
      
      // Additional meta tags
      ...Object.entries(additionalMeta).map(([key, value]) => ({ name: key, content: value }))
    ];

    // Add og:image if provided
    if (ogImage) {
      metaTags.push(
        { property: 'og:image', content: ogImage },
        { property: 'og:image:alt', content: `${title} - Back2Nest` },
        { name: 'twitter:image', content: ogImage },
        { name: 'twitter:image:alt', content: `${title} - Back2Nest` }
      );
    }

    // Update existing meta tags or create new ones
    metaTags.forEach(({ name, property, content }) => {
      const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
      let meta = document.querySelector(selector);
      
      if (!meta) {
        meta = document.createElement('meta');
        if (name) meta.setAttribute('name', name);
        if (property) meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    });

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // Add alternate language links
    const alternateLinks = [
      { hrefLang: 'en-IN', href: canonicalUrl },
      { hrefLang: 'hi-IN', href: canonicalUrl.replace('/about', '/hi/about') }
    ];

    alternateLinks.forEach(({ hrefLang, href }) => {
      let alternate = document.querySelector(`link[hreflang="${hrefLang}"]`);
      if (!alternate) {
        alternate = document.createElement('link');
        alternate.setAttribute('rel', 'alternate');
        alternate.setAttribute('hreflang', hrefLang);
        document.head.appendChild(alternate);
      }
      alternate.setAttribute('href', href);
    });

    // Add structured data
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]');
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }

    // Add breadcrumb structured data if provided
    if (breadcrumbData) {
      let breadcrumbScript = document.querySelector('script[data-type="breadcrumb"]');
      if (!breadcrumbScript) {
        breadcrumbScript = document.createElement('script');
        breadcrumbScript.setAttribute('type', 'application/ld+json');
        breadcrumbScript.setAttribute('data-type', 'breadcrumb');
        document.head.appendChild(breadcrumbScript);
      }
      breadcrumbScript.textContent = JSON.stringify(breadcrumbData);
    }

  }, [title, description, keywords, canonicalUrl, ogTitle, ogDescription, ogImage, ogUrl, structuredData, additionalMeta, breadcrumbData]);

  return null; // This component doesn't render anything
};

export default SEO;
