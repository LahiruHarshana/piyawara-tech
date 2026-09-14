import { getSiteUrl, siteConfig } from "@/lib/site";

export function JsonLd() {
  const siteUrl = getSiteUrl();

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: siteConfig.name,
        url: siteUrl,
        logo: `${siteUrl}/android-chrome-512x512.png`,
        email: siteConfig.email,
        telephone: siteConfig.phone,
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.address.locality,
          addressCountry: siteConfig.address.countryCode,
        },
        areaServed: "Sri Lanka",
        description: siteConfig.description,
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: { "@id": `${siteUrl}/#organization` },
        inLanguage: "en-LK",
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#service`,
        name: siteConfig.name,
        url: siteUrl,
        image: `${siteUrl}/hero.webp`,
        email: siteConfig.email,
        telephone: siteConfig.phone,
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.address.locality,
          addressCountry: siteConfig.address.countryCode,
        },
        priceRange: "$$",
        serviceType: [
          "Mobile app development",
          "Web development",
          "Custom software development",
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
