import type { MetadataRoute } from 'next';
import { clientProjects } from '@/content/projects';
import { servicesData } from '@/content/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://siatech.pk';

  const staticPages = [
    '',
    '/work',
    '/services',
    '/about',
    '/contact',
    '/privacy',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const projectPages = clientProjects.map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const servicePages = servicesData.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  return [...staticPages, ...servicePages, ...projectPages];
}
