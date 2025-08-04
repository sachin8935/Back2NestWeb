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
  breadcrumbData = null,
  noindex = false,
  nofollow = false
}) => {
  
  useEffect(() => {
    // Ensure title is not empty and has minimum length
    if (!title || title.trim().length < 30) {
      console.warn('SEO Warning: Title should be at least 30 characters long');
    }
    
    // Ensure description is not empty and within optimal length
    if (!description || description.trim().length < 120 || description.trim().length > 160) {
      console.warn('SEO Warning: Meta description should be between 120-160 characters');
    }

    // Update document title
    document.title = title || 'Back2Nest - Safe School Transportation in Patna Bihar';
    
    // Clean up existing meta tags to avoid duplicates
    const existingMetas = document.querySelectorAll('meta[data-back2nest]');
    existingMetas.forEach(meta => meta.remove());
    
    // Clean up existing structured data
    const existingScripts = document.querySelectorAll('script[data-back2nest]');
    existingScripts.forEach(script => script.remove());

    // Build robots content
    const robotsContent = [];
    if (noindex) robotsContent.push('noindex');
    else robotsContent.push('index');
    
    if (nofollow) robotsContent.push('nofollow');
    else robotsContent.push('follow');
    
    robotsContent.push('max-image-preview:large', 'max-snippet:-1', 'max-video-preview:-1');

    // Update meta tags
    const metaTags = [
      { name: 'description', content: description || 'Safe and reliable school transportation services in Patna, Bihar with live GPS tracking, certified drivers, and comprehensive safety features.' },
      { name: 'keywords', content: keywords || 'school transport Patna, safe school van Bihar, GPS tracking, certified drivers' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'robots', content: robotsContent.join(', ') },
      { name: 'author', content: 'Back2Nest Team' },
      { name: 'language', content: 'English' },
      { name: 'revisit-after', content: '7 days' },
      { name: 'publisher', content: 'Back2Nest' },
      { name: 'copyright', content: '© 2025 Back2Nest. All rights reserved.' },
      { name: 'theme-color', content: '#059669' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
      
      // Open Graph - Essential tags
      { property: 'og:title', content: ogTitle || title || 'Back2Nest - Safe School Transportation in Patna Bihar' },
      { property: 'og:description', content: ogDescription || description || 'Safe and reliable school transportation services in Patna, Bihar with live GPS tracking, certified drivers, and comprehensive safety features.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: ogUrl || canonicalUrl || window.location.href },
      { property: 'og:site_name', content: 'Back2Nest - Safe School Van Services' },
      { property: 'og:locale', content: 'en_IN' },
      
      // Twitter Cards - Complete implementation
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@Back2Nest' },
      { name: 'twitter:creator', content: '@Back2Nest' },
      { name: 'twitter:title', content: ogTitle || title || 'Back2Nest - Safe School Transportation in Patna Bihar' },
      { name: 'twitter:description', content: ogDescription || description || 'Safe and reliable school transportation services in Patna, Bihar with live GPS tracking, certified drivers, and comprehensive safety features.' },
      { name: 'twitter:domain', content: 'back2nest.in' },
      
      // Additional meta tags
      ...Object.entries(additionalMeta).map(([key, value]) => ({ name: key, content: value }))
    ];

    // Add og:image and twitter:image if provided
    if (ogImage) {
      metaTags.push(
        { property: 'og:image', content: ogImage },
        { property: 'og:image:alt', content: `${title || 'Back2Nest'} - Back2Nest` },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:type', content: 'image/jpeg' },
        { name: 'twitter:image', content: ogImage },
        { name: 'twitter:image:alt', content: `${title || 'Back2Nest'} - Back2Nest` }
      );
    } else {
      // Default image
      const defaultImage = 'https://back2nest.in/images/back2nest-og-default.jpg';
      metaTags.push(
        { property: 'og:image', content: defaultImage },
        { property: 'og:image:alt', content: 'Back2Nest - Safe School Transportation' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:type', content: 'image/jpeg' },
        { name: 'twitter:image', content: defaultImage },
        { name: 'twitter:image:alt', content: 'Back2Nest - Safe School Transportation' }
      );
    }

    // Create and append meta tags
    metaTags.forEach(({ name, property, content }) => {
      const meta = document.createElement('meta');
      meta.setAttribute('data-back2nest', 'true');
      
      if (name) meta.setAttribute('name', name);
      if (property) meta.setAttribute('property', property);
      meta.setAttribute('content', content);
      
      document.head.appendChild(meta);
    });

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('data-back2nest', 'true');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl || window.location.href);

    // Add alternate language links (hreflang)
    const currentUrl = canonicalUrl || window.location.href;
    const alternateLinks = [
      { hrefLang: 'en-IN', href: currentUrl },
      { hrefLang: 'hi-IN', href: currentUrl.replace('/safety-features', '/hi/safety-features') },
      { hrefLang: 'x-default', href: currentUrl }
    ];

    // Remove existing alternate links
    const existingAlternates = document.querySelectorAll('link[rel="alternate"][data-back2nest]');
    existingAlternates.forEach(link => link.remove());

    alternateLinks.forEach(({ hrefLang, href }) => {
      const alternate = document.createElement('link');
      alternate.setAttribute('rel', 'alternate');
      alternate.setAttribute('hreflang', hrefLang);
      alternate.setAttribute('href', href);
      alternate.setAttribute('data-back2nest', 'true');
      document.head.appendChild(alternate);
    });

    // Add main structured data
    if (structuredData) {
      const script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      script.setAttribute('data-back2nest', 'true');
      script.setAttribute('data-type', 'main-structured-data');
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    // Add breadcrumb structured data
    if (breadcrumbData) {
      const breadcrumbScript = document.createElement('script');
      breadcrumbScript.setAttribute('type', 'application/ld+json');
      breadcrumbScript.setAttribute('data-back2nest', 'true');
      breadcrumbScript.setAttribute('data-type', 'breadcrumb');
      breadcrumbScript.textContent = JSON.stringify(breadcrumbData);
      document.head.appendChild(breadcrumbScript);
    }

    // Cleanup function
    return () => {
      const elementsToClean = document.querySelectorAll('[data-back2nest]');
      elementsToClean.forEach(element => {
        if (element.tagName === 'META' || element.tagName === 'SCRIPT') {
          element.remove();
        }
      });
    };

  }, [title, description, keywords, canonicalUrl, ogTitle, ogDescription, ogImage, ogUrl, structuredData, additionalMeta, breadcrumbData, noindex, nofollow]);

  return null;
};

export default SEO;
