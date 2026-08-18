import React from 'react';
import { siteConfig } from '@/content/site';

export interface JsonLdProps {
  type?: 'Organization' | 'WebSite' | 'Service' | 'BreadcrumbList';
  data?: Record<string, unknown>;
}

export function JsonLd({ type = 'Organization', data }: JsonLdProps) {
  let schema: Record<string, unknown> = {};

  if (type === 'Organization') {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: siteConfig.name,
      legalName: siteConfig.legalName,
      url: 'https://siatech.pk',
      logo: 'https://siatech.pk/images/projects/naqsh-hero.jpeg',
      description: siteConfig.tagline,
      email: siteConfig.email,
      telephone: siteConfig.phone,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Karachi',
        addressCountry: 'PK',
      },
      sameAs: [siteConfig.github, siteConfig.linkedin, siteConfig.instagram],
      priceRange: '$$',
      founders: [
        {
          '@type': 'Person',
          name: 'Syed Ibrahim Ali',
          jobTitle: 'Founder & Lead Engineer',
        },
      ],
      ...data,
    };
  } else if (type === 'WebSite') {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: siteConfig.name,
      url: 'https://siatech.pk',
      description: siteConfig.heroPitch,
      publisher: {
        '@type': 'Organization',
        name: siteConfig.name,
      },
      ...data,
    };
  } else if (data) {
    schema = {
      '@context': 'https://schema.org',
      '@type': type,
      ...data,
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
