import sitemapPages from '@/constants/sitemap-pages';
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {

    return [
        {
            url: 'https://mihnea.dev',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        ...sitemapPages as MetadataRoute.Sitemap
    ]
}
