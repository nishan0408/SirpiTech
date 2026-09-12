import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.sirpi.tech', // Replace with your actual domain
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    // Add more URLs here as your site grows
  ];
}
