import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://toolsdev.org',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    // {
    //   url: 'https://toolsdev.org/case/GutenTag',
    //   lastModified: new Date(),
    //   changeFrequency: 'weekly',
    //   priority: 0.7,
    // },
    {
      url: 'https://toolsdev.org/case/Pafos',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: 'https://toolsdev.org/case/Serebrennikov',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: 'https://toolsdev.org/case/T-Card',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    // потом добавим другие страницы
  ];
}
