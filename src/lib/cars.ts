
import { PlaceHolderImages, ImagePlaceholder } from "@/lib/placeholder-images";

export type Spec = {
  label: string;
  value: string;
};

export type Trim = {
  name: string;
  price: number;
  specs: Spec[];
};

export type Car = {
  id: string;
  name:string;
  price: number;
  monthly: number;
  info: string;
  images: ImagePlaceholder[];
  gearbox: 'механическая' | 'робот' | 'автомат';
  bodyType: 'хечбек' | 'внедорожник' | 'седан';
  count: number;
  seats: number;
  specs: Spec[];
  trims: Trim[];
};

export const allCars: Car[] = [
  {
    id: "tenet-t4",
    name: "Tenet T4",
    price: 1999000,
    monthly: 29860,
    info: "3 автомобиля",
    images: [
        PlaceHolderImages.find((img) => img.id === "tenet-t4-front")!,
        PlaceHolderImages.find((img) => img.id === "tenet-t4-profile")!,
        PlaceHolderImages.find((img) => img.id === "tenet-t4-back")!,
    ],
    gearbox: "механическая",
    bodyType: "хечбек",
    count: 3,
    seats: 5,
    specs: [
      { label: 'Разгон до 100 км/ч', value: '10.5 с' },
      { label: 'Тип топлива', value: 'Бензин' },
      { label: 'Расход топлива', value: '7.8 л/100км' },
      { label: 'Объем двигателя', value: '1.5 л.' },
      { label: 'Мощность', value: '113 л.с.' },
      { label: 'Кол-во мест', value: '5 мест' },
    ],
    trims: [
      {
        name: 'Base',
        price: 1999000,
        specs: [
          { label: 'Двигатель', value: '1.5л, 113 л.с.'},
          { label: 'Трансмиссия', value: 'МКПП'},
          { label: 'Привод', value: 'Передний'},
        ],
      },
      {
        name: 'Comfort',
        price: 2159000,
        specs: [
          { label: 'Двигатель', value: '1.5л, 113 л.с.'},
          { label: 'Трансмиссия', value: 'Вариатор'},
          { label: 'Привод', value: 'Передний'},
        ]
      }
    ]
  },
  {
    id: "tenet-t7",
    name: "Tenet T7",
    price: 2580000,
    monthly: 25663,
    info: "13 автомобилей",
    images: [
      PlaceHolderImages.find((img) => img.id === "tenet-t7-main")!,
      PlaceHolderImages.find((img) => img.id === "tenet-t7-profile")!,
      PlaceHolderImages.find((img) => img.id === "tenet-t7-rear")!,
    ],
    gearbox: "робот",
    bodyType: "внедорожник",
    count: 13,
    seats: 5,
    specs: [
      { label: 'Разгон до 100 км/ч', value: '9.8 с' },
      { label: 'Тип топлива', value: 'Бензин' },
      { label: 'Расход топлива', value: '8.2 л/100км' },
      { label: 'Объем двигателя', value: '1.6 л.' },
      { label: 'Мощность', value: '150 л.с.' },
      { label: 'Кол-во мест', value: '5 мест' },
    ],
    trims: [
       {
        name: 'Prestige',
        price: 2580000,
        specs: [
          { label: 'Двигатель', value: '1.6л, 150 л.с.'},
          { label: 'Трансмиссия', value: 'Робот'},
          { label: 'Привод', value: 'Передний'},
        ],
      },
      {
        name: 'Ultimate',
        price: 2750000,
        specs: [
          { label: 'Двигатель', value: '1.6л, 150 л.с.'},
          { label: 'Трансмиссия', value: 'Робот'},
          { label: 'Привод', value: 'Полный'},
        ]
      }
    ]
  },
  {
    id: "tenet-t8",
    name: "Tenet T8",
    price: 3390000,
    monthly: 38400,
    info: "5 автомобилей",
    images: [
      PlaceHolderImages.find((img) => img.id === "tenet-t8-main")!,
      PlaceHolderImages.find((img) => img.id === "tenet-t8-profile")!,
      PlaceHolderImages.find((img) => img.id === "tenet-t8-rear")!,
    ],
    gearbox: "робот",
    bodyType: "внедорожник",
    count: 5,
    seats: 7,
    specs: [
      { label: 'Разгон до 100 км/ч', value: '8.5 с' },
      { label: 'Тип топлива', value: 'Бензин' },
      { label: 'Расход топлива', value: '8.5 л/100км' },
      { label: 'Объем двигателя', value: '2.0 л.' },
      { label: 'Мощность', value: '197 л.с.' },
      { label: 'Кол-во мест', value: '7 мест' },
    ],
    trims: [
      {
        name: 'Dreamline',
        price: 3390000,
        specs: [
          { label: 'Двигатель', value: '2.0л, 197 л.с.'},
          { label: 'Трансмиссия', value: 'Робот'},
          { label: 'Привод', value: 'Полный'},
        ],
      },
      {
        name: 'Ultimate',
        price: 3590000,
        specs: [
          { label: 'Двигатель', value: '2.0л, 197 л.с.'},
          { label: 'Трансмиссия', value: 'Робот'},
          { label: 'Привод', value: 'Полный'},
        ]
      }
    ]
  },
];
