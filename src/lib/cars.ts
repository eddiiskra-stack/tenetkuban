
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

export type SeoText = {
    title: string;
    description: string;
    audience: string;
}

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
  seoText?: SeoText;
  trimName?: string;
  year?: number;
  engineVolume?: string;
  transmission?: 'Механическая' | 'Робот';
  drivetrain?: 'Передний привод';
  status?: 'У дилера' | 'В пути' | 'Центральный склад';
  dealer?: string;
};

export const allCars: Car[] = [
  {
    id: "tenet-t4",
    name: "Tenet T4",
    price: 1999000,
    monthly: 29860,
    info: "3 автомобиля",
    images: [
        PlaceHolderImages.find((img) => img.id === "tenet-4")!,
        PlaceHolderImages.find((img) => img.id === "tenet-t4-front")!,
        PlaceHolderImages.find((img) => img.id === "tenet-t4-profile")!,
        PlaceHolderImages.find((img) => img.id === "tenet-t4-back")!,
    ],
    gearbox: "робот",
    bodyType: "внедорожник",
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
    ],
    seoText: {
        title: "Энергия вашего города",
        description: "Tenet T4 — это компактный городской кроссовер для тех, кто живет в ритме мегаполиса. Стильный дизайн, маневренность и экономичный расход топлива делают его идеальным спутником в плотном трафике Краснодара. Внутри вас ждет продуманная эргономика и современные смарт-технологии, которые превращают каждую поездку в удовольствие.",
        audience: "Для кого: Для молодых водителей и тех, кто ищет свой первый надежный кроссовер с богатым оснащением по доступной цене."
    },
    trimName: "MT Line",
    year: 2025,
    engineVolume: "1.5",
    transmission: "Механическая",
    drivetrain: "Передний привод",
    status: "У дилера",
    dealer: "ЛЕОН-АВТО ОНЛАЙН, Краснодар"
  },
  {
    id: "tenet-t7",
    name: "Tenet T7",
    price: 2580000,
    monthly: 25663,
    info: "13 автомобилей",
    images: [
      PlaceHolderImages.find((img) => img.id === "tenet-7")!,
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
    ],
    seoText: {
        title: "Технологии комфорта",
        description: "Новый Tenet T7 задает стандарты в классе среднеразмерных SUV. Этот автомобиль объединяет в себе спортивный характер и уют семейного автомобиля. Просторный салон с премиальной отделкой, интеллектуальные системы безопасности и отзывчивый двигатель дарят уверенность на любой дороге. От деловых встреч до путешествий к морю — T7 готов к любым задачам.",
        audience: "Для кого: Для семей и ценителей баланса между динамикой, безопасностью и современным цифровым комфортом."
    }
  },
  {
    id: "tenet-t8",
    name: "Tenet T8",
    price: 3390000,
    monthly: 38400,
    info: "5 автомобилей",
    images: [
      PlaceHolderImages.find((img) => img.id === "tenet-8")!,
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
    ],
    seoText: {
        title: "Безупречное превосходство",
        description: "Флагманский Tenet T8 — это воплощение мощи и статуса. Внушительный 7-местный кроссовер с полным приводом создан для тех, кто не привык к компромиссам. Максимальный пакет опций, роскошный интерьер бизнес-класса и передовые ассистенты водителя обеспечивают высочайший уровень безопасности и удобства. Tenet T8 не просто везет вас — он подчеркивает ваш успех.",
        audience: "Для кого: Для больших семей и тех, кто выбирает максимальную комплектацию, простор и внедорожный потенциал."
    }
  },
];
