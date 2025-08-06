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
    // Enhanced validation with better error messages
    if (!title || title.trim().length < 30) {
      console.warn('SEO Warning: Title should be at least 30 characters long for better SEO performance');
    }
    
    if (!description || description.trim().length < 120 || description.trim().length > 160) {
      console.warn('SEO Warning: Meta description should be between 120-160 characters for optimal display in search results');
    }

    // CRITICAL: Validate canonical URL format and requirement
    if (!canonicalUrl) {
      console.error('SEO Critical Error: Canonical URL is required to prevent duplicate content issues');
      return; // Don't proceed without canonical URL
    }

    // Validate canonical URL format
    try {
      new URL(canonicalUrl);
    } catch (error) {
      console.error('SEO Error: Invalid canonical URL format:', canonicalUrl);
      return;
    }

    // Update document title with fallback
    const finalTitle = title?.trim() || 'Back2Nest - Safe School Transportation in Patna Bihar';
    document.title = finalTitle;
    
    // Clean up existing meta tags and links to avoid duplicates
    const existingElements = document.querySelectorAll('[data-back2nest]');
    existingElements.forEach(element => element.remove());

    // Build robots content with proper validation
    const robotsContent = [];
    if (noindex) robotsContent.push('noindex');
    else robotsContent.push('index');
    
    if (nofollow) robotsContent.push('nofollow');
    else robotsContent.push('follow');
    
    robotsContent.push('max-image-preview:large', 'max-snippet:-1', 'max-video-preview:-1');

    // CRITICAL FIX: Set canonical URL first with proper validation
    const canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', canonicalUrl);
    canonical.setAttribute('data-back2nest', 'true');
    document.head.appendChild(canonical);

    // Default values with proper fallbacks
    const finalDescription = description?.trim() || 'Safe and reliable school transportation services in Patna, Bihar with live GPS tracking, certified drivers, and comprehensive safety features.';
    const finalOgUrl = ogUrl || canonicalUrl;
    const finalOgImage = ogImage || 'https://back2nest.in/images/back2nest-og-default.jpg';

    // Essential meta tags with validation
    const metaTags = [
      // CRITICAL: Meta description must be present
      { name: 'description', content: finalDescription },
      { name: 'keywords', content: keywords || 'school transport Patna, safe school van Bihar, GPS tracking, certified drivers' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'robots', content: robotsContent.join(', ') },
      { name: 'author', content: 'Back2Nest Team' },
      { name: 'language', content: 'English' },
      { name: 'revisit-after', content: '7 days' },
      { name: 'publisher', content: 'Back2Nest' },
      { name: 'copyright', content: '© 2025 Back2Nest. All rights reserved.' },
      { name: 'theme-color', content: '#059669' },
      
      // Enhanced mobile optimization
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
      { name: 'apple-mobile-web-app-title', content: 'Back2Nest' },
      
      // Open Graph - Essential tags with proper validation
      { property: 'og:title', content: ogTitle || finalTitle },
      { property: 'og:description', content: ogDescription || finalDescription },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: finalOgUrl },
      { property: 'og:site_name', content: 'Back2Nest' },
      { property: 'og:locale', content: 'en_IN' },
      
      // Twitter Cards with proper validation
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@Back2Nest' },
      { name: 'twitter:creator', content: '@Back2Nest' },
      { name: 'twitter:title', content: ogTitle || finalTitle },
      { name: 'twitter:description', content: ogDescription || finalDescription },
      { name: 'twitter:domain', content: 'back2nest.in' },
      
      // Additional meta tags from props
      ...Object.entries(additionalMeta).map(([key, value]) => ({ name: key, content: value }))
    ];

    // Add og:image and twitter:image with validation
    if (finalOgImage) {
      metaTags.push(
        { property: 'og:image', content: finalOgImage },
        { property: 'og:image:alt', content: `${finalTitle} - Back2Nest School Transport` },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:type', content: 'image/jpeg' },
        { name: 'twitter:image', content: finalOgImage },
        { name: 'twitter:image:alt', content: `${finalTitle} - Back2Nest School Transport` }
      );
    }

    // Create and append meta tags with validation
    metaTags.forEach(({ name, property, content }) => {
      if (!content || content.trim() === '') return; // Skip empty content
      
      const meta = document.createElement('meta');
      meta.setAttribute('data-back2nest', 'true');
      
      if (name) meta.setAttribute('name', name);
      if (property) meta.setAttribute('property', property);
      meta.setAttribute('content', content.trim());
      
      document.head.appendChild(meta);
    });

    // FIXED: Self-referencing canonical for hreflang
    const alternateLinks = [
      { hrefLang: 'en-IN', href: canonicalUrl },
      { hrefLang: 'x-default', href: canonicalUrl }
    ];

    alternateLinks.forEach(({ hrefLang, href }) => {
      const alternate = document.createElement('link');
      alternate.setAttribute('rel', 'alternate');
      alternate.setAttribute('hreflang', hrefLang);
      alternate.setAttribute('href', href);
      alternate.setAttribute('data-back2nest', 'true');
      document.head.appendChild(alternate);
    });

    // Add structured data with validation
    if (structuredData && typeof structuredData === 'object') {
      try {
        const script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        script.setAttribute('data-back2nest', 'true');
        script.setAttribute('data-type', 'main-structured-data');
        script.textContent = JSON.stringify(structuredData);
        document.head.appendChild(script);
      } catch (error) {
        console.error('SEO Error: Invalid structured data format:', error);
      }
    }

    // Add breadcrumb structured data with validation
    if (breadcrumbData && typeof breadcrumbData === 'object') {
      try {
        const breadcrumbScript = document.createElement('script');
        breadcrumbScript.setAttribute('type', 'application/ld+json');
        breadcrumbScript.setAttribute('data-back2nest', 'true');
        breadcrumbScript.setAttribute('data-type', 'breadcrumb');
        breadcrumbScript.textContent = JSON.stringify(breadcrumbData);
        document.head.appendChild(breadcrumbScript);
      } catch (error) {
        console.error('SEO Error: Invalid breadcrumb data format:', error);
      }
    }

    // Cleanup function
    return () => {
      const elementsToClean = document.querySelectorAll('[data-back2nest]');
      elementsToClean.forEach(element => {
        if (element.parentNode) {
          element.parentNode.removeChild(element);
        }
      });
    };

  }, [title, description, keywords, canonicalUrl, ogTitle, ogDescription, ogImage, ogUrl, structuredData, additionalMeta, breadcrumbData, noindex, nofollow]);

  return null;
};

export default SEO;
