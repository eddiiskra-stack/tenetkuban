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

  const modelIds = [...new Set(allCars.map(car => {
    // Only get the base model ID, e.g., "tenet-t4" from "tenet-t4-cvt-line-white"
    if (car.id.startsWith('tenet-t')) {
        const parts = car.id.split('-');
        if(parts.length >= 2) {
            return `${parts[0]}-${parts[1]}`;
        }
    }
    return car.id.split('-').slice(0, 2).join('-');
  }).filter((id): id is string => id !== null && id.startsWith('tenet-t')))];


  const carModelPages: MetadataRoute.Sitemap = modelIds
    .map((id) => {
        const car = allCars.find(c => c.id.startsWith(id));
        if (!car) return null;
        return {
            url: `${URL}/models/${id}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        }
    })
    .filter((page): page is NonNullable<typeof page> => page !== null);

  const carStockPages: MetadataRoute.Sitemap = allCars.map((car) => ({
    url: `${URL}/stock/${car.id}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.6,
  }));
  
  const uniqueCarModelPages = carModelPages.reduce((acc, current) => {
    if (!acc.find(item => item.url === current.url)) {
        acc.push(current);
    }
    return acc;
  }, [] as MetadataRoute.Sitemap);

  return [
    ...staticPages,
    ...uniqueCarModelPages,
    ...carStockPages,
  ];
}
