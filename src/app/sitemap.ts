import type { MetadataRoute } from 'next';
import { allCars } from '@/lib/cars';

const URL = 'https://tenet-servis-kuban.ru';

export const revalidate = 0;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
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

  const modelIds = [...new Set(allCars.map(car => car.id.split('-')[0] + '-' + car.id.split('-')[1]))];

  const carModelPages = modelIds
    .filter(id => allCars.find(car => car.id === id)) // Ensure we only create pages for base models
    .map((id) => ({
      url: `${URL}/models/${id}`,
      lastModified: new
Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    }));

  const carStockPages = allCars.map((car) => ({
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
