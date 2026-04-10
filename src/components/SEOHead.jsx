import { useEffect } from 'react';

/**
 * SEOHead — sets document title + meta description per-page.
 * Also injects JSON-LD structured data when provided.
 *
 * Usage:
 *   <SEOHead
 *     title="Home | Norexa"
 *     description="Discover the best fashion deals…"
 *     canonicalPath="/"
 *     jsonLd={{ … }}
 *   />
 */
const SEOHead = ({ title, description, canonicalPath, jsonLd }) => {
  useEffect(() => {
    // Title
    if (title) {
      document.title = title;
    }

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    if (description) {
      metaDesc.setAttribute('content', description);
    }

    // Open Graph title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    if (title) {
      ogTitle.setAttribute('content', title);
    }

    // Open Graph description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    if (description) {
      ogDesc.setAttribute('content', description);
    }

    // Open Graph type
    let ogType = document.querySelector('meta[property="og:type"]');
    if (!ogType) {
      ogType = document.createElement('meta');
      ogType.setAttribute('property', 'og:type');
      document.head.appendChild(ogType);
    }
    ogType.setAttribute('content', 'website');

    // Open Graph URL
    if (canonicalPath) {
      let ogUrl = document.querySelector('meta[property="og:url"]');
      if (!ogUrl) {
        ogUrl = document.createElement('meta');
        ogUrl.setAttribute('property', 'og:url');
        document.head.appendChild(ogUrl);
      }
      ogUrl.setAttribute('content', `https://norexa.online${canonicalPath}`);
    }

    // Canonical link
    if (canonicalPath) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', `https://norexa.online${canonicalPath}`);
    }

    // JSON-LD structured data
    let scriptTag = document.querySelector('script[data-seo-jsonld]');
    if (jsonLd) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.setAttribute('type', 'application/ld+json');
        scriptTag.setAttribute('data-seo-jsonld', 'true');
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(jsonLd);
    } else if (scriptTag) {
      scriptTag.remove();
    }

    // Cleanup JSON-LD on unmount
    return () => {
      const tag = document.querySelector('script[data-seo-jsonld]');
      if (tag) tag.remove();
    };
  }, [title, description, canonicalPath, jsonLd]);

  return null; // This component only manages <head>, renders nothing
};

export default SEOHead;
