import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: string;
  jsonLd?: object | object[];
}

export default function SEO({
  title,
  description,
  canonical,
  ogType = "website",
  jsonLd,
}: SEOProps) {
  const fullTitle = `${title} | Dawu Msendo Trading and Projects`;
  const baseUrl = "https://dawumsendo.co.za";
  const canonicalUrl = canonical
    ? `${baseUrl}${canonical}`
    : `${baseUrl}${window.location.pathname}`;

  useEffect(() => {
    document.title = fullTitle;

    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(
        `meta[${attribute}="${name}"]`
      ) as HTMLMetaElement;

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }

      element.content = content;
    };

    updateMetaTag("description", description);

    updateMetaTag("og:title", fullTitle, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:type", ogType, true);
    updateMetaTag("og:url", canonicalUrl, true);
    updateMetaTag("og:site_name", "Dawu Msendo Trading and Projects", true);

    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", fullTitle);
    updateMetaTag("twitter:description", description);

    let linkElement = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!linkElement) {
      linkElement = document.createElement("link");
      linkElement.rel = "canonical";
      document.head.appendChild(linkElement);
    }
    linkElement.href = canonicalUrl;

    if (jsonLd) {
      const schemas = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      
      schemas.forEach((schema, index) => {
        const scriptId = `json-ld-${index}`;
        let scriptElement = document.getElementById(scriptId);
        
        if (!scriptElement) {
          scriptElement = document.createElement("script");
          scriptElement.id = scriptId;
          scriptElement.type = "application/ld+json";
          document.head.appendChild(scriptElement);
        }
        
        scriptElement.textContent = JSON.stringify(schema);
      });
    }

    return () => {
      const oldScripts = document.querySelectorAll('script[type="application/ld+json"]');
      oldScripts.forEach((script) => script.remove());
    };
  }, [title, description, canonical, ogType, jsonLd]);

  return null;
}
