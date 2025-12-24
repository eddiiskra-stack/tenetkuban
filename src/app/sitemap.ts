import type { MetadataRoute } from 'next';
import { allCars } from '@/lib/cars';

const URL = 'https://tenet-servis-kuban.ru';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${URL}/`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${URL}/models`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${URL}/stock`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ];

  // Create a Set of unique model IDs (e.g., 'tenet-t4', 'tenet-t7')
  const modelIds = new Set(
    allCars.map(car => {
      if (car.id.startsWith('tenet-t')) {
        const parts = car.id.split('-');
        if (parts.length >= 2) {
          return `${parts[0]}-${parts[1]}`;
        }
      }
      // Fallback for other potential formats
      return car.id.split('-').slice(0, 2).join('-');
    })
  );

  const carModelPages: MetadataRoute.Sitemap = Array.from(modelIds)
    .map((id) => {
        return {
            url: `${URL}/models/${id}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        }
    });

  const carStockPages: MetadataRoute.Sitemap = allCars.map((car) => ({
    url: `${URL}/stock/${car.id}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...carModelPages,
    ...carStockPages,
  ];
}
