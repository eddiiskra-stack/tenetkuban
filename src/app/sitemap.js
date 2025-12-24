
import { allCars } from '@/lib/cars';

const URL = 'https://tenetkuban.ru';

export default function sitemap() {
  const staticPages = [
    {
      url: `${URL}/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
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
    // This creates a base model ID like "tenet-t4" from more specific IDs
    const parts = car.id.split('-');
    if (parts.length >= 2 && parts[0] === 'tenet') {
        return `${parts[0]}-${parts[1]}`;
    }
    return null;
  }).filter(id => id))];

  const carModelPages = modelIds.map((id) => ({
    url: `${URL}/models/${id}`,
    lastModified: new Date(),
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
