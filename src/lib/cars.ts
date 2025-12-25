
      
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
  gearbox: 'механическая' | 'робот' | 'автомат' | 'вариатор';
  bodyType: 'хечбек' | 'внедорожник' | 'седан';
  count: number;
  seats: number;
  specs: Spec[];
  trims: Trim[];
  seoText?: SeoText;
  trimName?: string;
  year?: number;
  engineVolume?: string;
  transmission?: 'Механическая' | 'Робот' | 'Вариатор';
  drivetrain?: 'Передний привод' | 'Полный привод';
  status?: 'У дилера' | 'В пути' | 'Центральный склад';
  dealer?: string;
  color?: string;
  vin?: string;
};

export type Model = {
    id: string;
    name: string;
    description: string;
    image: ImagePlaceholder;
    price: number;
    link: string;
}

export const allModels: Model[] = [
    {
        id: 't4',
        name: 'Tenet T4',
        description: 'Компактный городской кроссовер для тех, кто живет в ритме мегаполиса. Стильный дизайн, маневренность и экономичный расход топлива делают его идеальным спутником в плотном трафике.',
        image: PlaceHolderImages.find((img) => img.id === 'tenet-4')!,
        price: 1999000,
        link: '/models/tenet-t4-mt-line-white'
    },
    {
        id: 't7',
        name: 'Tenet T7',
        description: 'Вместительный и надежный внедорожник, созданный для путешествий и семейных поездок. Мощный двигатель, просторный салон и богатое оснащение обеспечивают комфорт и безопасность.',
        image: PlaceHolderImages.find((img) => img.id === 'tenet-7')!,
        price: 2630000,
        link: '/models/vin-EDEFB32BSE---01'
    },
    {
        id: 't8',
        name: 'Tenet T8',
        description: 'Яркий и технологичный лифтбек для тех, кто ценит динамику и передовые решения. Футуристичный дизайн, впечатляющая мощность и интеллектуальные системы помощи водителю.',
        image: PlaceHolderImages.find((img) => img.id === 'tenet-8')!,
        price: 3399900,
        link: '/models/tenet-t8-premium-sport-blue'
    }
];


export const allCars: Car[] = [
  {
    id: "tenet-t4-mt-line-white",
    name: "Tenet T4",
    price: 1999000,
    monthly: 29860,
    info: "1 автомобиль",
    images: [
        PlaceHolderImages.find((img) => img.id === "tenet-t4-white-1")!,
        PlaceHolderImages.find((img) => img.id === "tenet-t4-white-2")!,
        PlaceHolderImages.find((img) => img.id === "tenet-t4-white-3")!,
        PlaceHolderImages.find((img) => img.id === "tenet-t4-white-4")!,
        PlaceHolderImages.find((img) => img.id === "tenet-t4-white-5")!,
    ],
    gearbox: "механическая",
    bodyType: "внедорожник",
    count: 8,
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
        name: 'MT Line',
        price: 1999000,
        specs: [
          { label: 'Двигатель', value: '1.5л, 113 л.с.'},
          { label: 'Трансмиссия', value: 'Механическая'},
          { label: 'Привод', value: 'Передний'},
        ],
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
    dealer: "ОПТИМА ОНЛАЙН, Краснодар",
    color: "Искрящийся белый",
    vin: "EDEEB11B*SE****68"
  },
  {
    id: "tenet-t4-cvt-line-grey",
    name: "Tenet T4",
    price: 2129000,
    monthly: 31800,
    info: "1 автомобиль",
    images: [
        PlaceHolderImages.find((img) => img.id === "tenet-4")!,
        PlaceHolderImages.find((img) => img.id === "tenet-t4-front")!,
        PlaceHolderImages.find((img) => img.id === "tenet-t4-profile")!,
        PlaceHolderImages.find((img) => img.id === "tenet-t4-back")!,
    ],
    gearbox: "вариатор",
    bodyType: "внедорожник",
    count: 1,
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
        name: 'CVT Line',
        price: 2129000,
        specs: [
          { label: 'Двигатель', value: '1.5л, 113 л.с.'},
          { label: 'Трансмиссия', value: 'Вариатор'},
          { label: 'Привод', value: 'Передний'},
        ],
      }
    ],
    seoText: {
        title: "Энергия вашего города",
        description: "Tenet T4 — это компактный городской кроссовер для тех, кто живет в ритме мегаполиса. Стильный дизайн, маневренность и экономичный расход топлива делают его идеальным спутником в плотном трафике Краснодара. Внутри вас ждет продуманная эргономика и современные смарт-технологии, которые превращают каждую поездку в удовольствие.",
        audience: "Для кого: Для молодых водителей и тех, кто ищет свой первый надежный кроссовер с богатым оснащением по доступной цене."
    },
    trimName: "CVT Line",
    year: 2025,
    engineVolume: "1.5",
    transmission: "Вариатор",
    drivetrain: "Передний привод",
    status: "У дилера",
    dealer: "ЛЕОН-АВТО ОНЛАЙН, Краснодар",
    color: "Технологичный серый",
    vin: "EDEEB41B*SE****21"
  },
  {
    id: "tenet-t4-cvt-line-white-in-transit",
    name: "Tenet T4",
    price: 2129000,
    monthly: 31800,
    info: "1 автомобиль",
    images: [
        PlaceHolderImages.find((img) => img.id === "tenet-t4-white-1")!,
        PlaceHolderImages.find((img) => img.id === "tenet-t4-white-2")!,
        PlaceHolderImages.find((img) => img.id === "tenet-t4-white-3")!,
        PlaceHolderImages.find((img) => img.id === "tenet-t4-white-4")!,
        PlaceHolderImages.find((img) => img.id === "tenet-t4-white-5")!,
    ],
    gearbox: "вариатор",
    bodyType: "внедорожник",
    count: 10,
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
        name: 'CVT Line',
        price: 2129000,
        specs: [
          { label: 'Двигатель', value: '1.5л, 113 л.с.'},
          { label: 'Трансмиссия', value: 'Вариатор'},
          { label: 'Привод', value: 'Передний'},
        ],
      }
    ],
    seoText: {
        title: "Энергия вашего города",
        description: "Tenet T4 — это компактный городской кроссовер для тех, кто живет в ритме мегаполиса. Стильный дизайн, маневренность и экономичный расход топлива делают его идеальным спутником в плотном трафике Краснодара. Внутри вас ждет продуманная эргономика и современные смарт-технологии, которые превращают каждую поездку в удовольствие.",
        audience: "Для кого: Для молодых водителей и тех, кто ищет свой первый надежный кроссовер с богатым оснащением по доступной цене."
    },
    trimName: "CVT Line",
    year: 2025,
    engineVolume: "1.5",
    transmission: "Вариатор",
    drivetrain: "Передний привод",
    status: "В пути",
    dealer: "ЛЕОН-АВТО ОНЛАЙН, Краснодар",
    color: "Искрящийся белый",
    vin: "EDEEB41B*SE****30"
  },
  {
    id: "vin-EDEEB11BSE---38",
    name: "Tenet T4",
    price: 1999000,
    monthly: 29860,
    info: "1 автомобиль",
    images: [
        PlaceHolderImages.find((img) => img.id === "tenet-t4-black-1")!,
        PlaceHolderImages.find((img) => img.id === "tenet-t4-black-2")!,
        PlaceHolderImages.find((img) => img.id === "tenet-t4-black-3")!,
        PlaceHolderImages.find((img) => img.id === "tenet-t4-black-4")!,
        PlaceHolderImages.find((img) => img.id === "tenet-t4-black-5")!,
    ],
    gearbox: "механическая",
    bodyType: "внедорожник",
    count: 5,
    seats: 5,
    specs: [],
    trims: [],
    trimName: "MT Line",
    year: 2024,
    engineVolume: "1.5",
    transmission: "Механическая",
    drivetrain: "Передний привод",
    status: "У дилера",
    dealer: "ЛЕОН-АВТО ОНЛАЙН, Краснодар",
    color: "Глубокий синий",
    vin: "EDEEB11BSE***38"
  },
  {
    id: "vin-EDEEB41BSE---34",
    name: "Tenet T4",
    price: 2129000,
    monthly: 31800,
    info: "1 автомобиль",
    images: [
        PlaceHolderImages.find((img) => img.id === "tenet-t4-black-1")!,
        PlaceHolderImages.find((img) => img.id === "tenet-t4-black-2")!,
        PlaceHolderImages.find((img) => img.id === "tenet-t4-black-3")!,
        PlaceHolderImages.find((img) => img.id === "tenet-t4-black-4")!,
        PlaceHolderImages.find((img) => img.id === "tenet-t4-black-5")!,
    ],
    gearbox: "вариатор",
    bodyType: "внедорожник",
    count: 3,
    seats: 5,
    specs: [],
    trims: [],
    trimName: "CVT Line",
    year: 2024,
    engineVolume: "1.5",
    transmission: "Вариатор",
    drivetrain: "Передний привод",
    status: "У дилера",
    dealer: "LEON-AUTO, Krasnodar",
    color: "Глубокий синий",
    vin: "EDEEB41BSE***34"
  },
  {
    id: "vin-EDEEB41BSE---80",
    name: "Tenet T4",
    price: 2129000,
    monthly: 31800,
    info: "1 автомобиль",
    images: [
        PlaceHolderImages.find((img) => img.id === "tenet-t4-black-1")!,
        PlaceHolderImages.find((img) => img.id === "tenet-t4-black-2")!,
        PlaceHolderImages.find((img) => img.id === "tenet-t4-black-3")!,
        PlaceHolderImages.find((img) => img.id === "tenet-t4-black-4")!,
        PlaceHolderImages.find((img) => img.id === "tenet-t4-black-5")!,
    ],
    gearbox: "вариатор",
    bodyType: "внедорожник",
    count: 4,
    seats: 5,
    specs: [],
    trims: [],
    trimName: "CVT Line",
    year: 2024,
    engineVolume: "1.5",
    transmission: "Вариатор",
    drivetrain: "Передний привод",
    status: "У дилера",
    dealer: "FORWARD-AUTO, Tyumen",
    color: "Глубокий синий",
    vin: "EDEEB41BSE***80"
  },
  {
    id: "vin-LXYZ7---55",
    name: "Tenet T7",
    price: 2630000,
    monthly: 0,
    info: "1 автомобиль",
    images: [
      PlaceHolderImages.find((img) => img.id === "tenet-7")!,
      PlaceHolderImages.find((img) => img.id === "tenet-t7-main")!,
      PlaceHolderImages.find((img) => img.id === "tenet-t7-profile")!,
      PlaceHolderImages.find((img) => img.id === "tenet-t7-rear")!,
    ],
    gearbox: "робот",
    bodyType: "внедорожник",
    count: 1,
    seats: 5,
    specs: [],
    trims: [],
    trimName: "Active 2WD",
    year: 2024,
    engineVolume: "1.6",
    transmission: "Робот",
    drivetrain: "Передний привод",
    status: "У дилера",
    dealer: "ОПТИМА ОНЛАЙН",
    color: "Серебристый",
    vin: "LXYZ7***55"
  },
  {
    id: "vin-LXYZ7---05",
    name: "Tenet T7",
    price: 2630000,
    monthly: 0,
    info: "1 автомобиль",
    images: [
      PlaceHolderImages.find((img) => img.id === "tenet-t7-white-1")!,
      PlaceHolderImages.find((img) => img.id === "tenet-t7-white-2")!,
      PlaceHolderImages.find((img) => img.id === "tenet-t7-white-3")!,
      PlaceHolderImages.find((img) => img.id === "tenet-t7-white-4")!,
      PlaceHolderImages.find((img) => img.id === "tenet-t7-white-5")!,
    ],
    gearbox: "робот",
    bodyType: "внедорожник",
    count: 1,
    seats: 5,
    specs: [],
    trims: [],
    trimName: "Active 2WD",
    year: 2024,
    engineVolume: "1.6",
    transmission: "Робот",
    drivetrain: "Передний привод",
    status: "Центральный склад",
    dealer: "ОПТИМА ОНЛАЙН",
    color: "Искрящийся белый",
    vin: "LXYZ7***05"
  },
  {
    id: "vin-LXYZ7---87",
    name: "Tenet T7",
    price: 2630000,
    monthly: 0,
    info: "1 автомобиль",
    images: [
      PlaceHolderImages.find((img) => img.id === "tenet-t7-black-1")!,
      PlaceHolderImages.find((img) => img.id === "tenet-t7-black-2")!,
      PlaceHolderImages.find((img) => img.id === "tenet-t7-black-3")!,
      PlaceHolderImages.find((img) => img.id === "tenet-t7-black-4")!,
      PlaceHolderImages.find((img) => img.id === "tenet-t7-black-5")!,
    ],
    gearbox: "робот",
    bodyType: "внедорожник",
    count: 1,
    seats: 5,
    specs: [],
    trims: [],
    trimName: "Active 2WD",
    year: 2024,
    engineVolume: "1.6",
    transmission: "Робот",
    drivetrain: "Передний привод",
    status: "У дилера",
    dealer: "ОПТИМА ОНЛАЙН",
    color: "Глубокий черный",
    vin: "LXYZ7***87"
  },
  {
    id: "vin-LXYZ7---14",
    name: "Tenet T7",
    price: 2630000,
    monthly: 0,
    info: "1 автомобиль",
    images: [
      PlaceHolderImages.find((img) => img.id === "tenet-t7-white-1")!,
      PlaceHolderImages.find((img) => img.id === "tenet-t7-white-2")!,
      PlaceHolderImages.find((img) => img.id === "tenet-t7-white-3")!,
      PlaceHolderImages.find((img) => img.id === "tenet-t7-white-4")!,
      PlaceHolderImages.find((img) => img.id === "tenet-t7-white-5")!,
    ],
    gearbox: "робот",
    bodyType: "внедорожник",
    count: 5,
    seats: 5,
    specs: [],
    trims: [],
    trimName: "Active 2WD",
    year: 2024,
    engineVolume: "1.6",
    transmission: "Робот",
    drivetrain: "Передний привод",
    status: "У дилера",
    dealer: "ЛЕОН-АВТО ОНЛАЙН",
    color: "Искрящийся белый",
    vin: "LXYZ7***14"
  },
  {
    id: "vin-LXYZ7---59",
    name: "Tenet T7",
    price: 2830000,
    monthly: 0,
    info: "1 автомобиль",
    images: [
      PlaceHolderImages.find((img) => img.id === "tenet-7")!,
      PlaceHolderImages.find((img) => img.id === "tenet-t7-main")!,
      PlaceHolderImages.find((img) => img.id === "tenet-t7-profile")!,
      PlaceHolderImages.find((img) => img.id === "tenet-t7-rear")!,
    ],
    gearbox: "робот",
    bodyType: "внедорожник",
    count: 1,
    seats: 5,
    specs: [],
    trims: [],
    trimName: "Prime 2WD",
    year: 2024,
    engineVolume: "1.6",
    transmission: "Робот",
    drivetrain: "Передний привод",
    status: "У дилера",
    dealer: "ЛЕОН-АВТО ОНЛАЙН",
    color: "Технологичный серый",
    vin: "LXYZ7***59"
  },
  {
    id: "vin-LXYZ7---07",
    name: "Tenet T7",
    price: 2830000,
    monthly: 0,
    info: "1 автомобиль",
    images: [
      PlaceHolderImages.find((img) => img.id === "tenet-t7-white-1")!,
      PlaceHolderImages.find((img) => img.id === "tenet-t7-white-2")!,
      PlaceHolderImages.find((img) => img.id === "tenet-t7-white-3")!,
      PlaceHolderImages.find((img) => img.id === "tenet-t7-white-4")!,
      PlaceHolderImages.find((img) => img.id === "tenet-t7-white-5")!,
    ],
    gearbox: "робот",
    bodyType: "внедорожник",
    count: 1,
    seats: 5,
    specs: [],
    trims: [],
    trimName: "Prime 2WD",
    year: 2024,
    engineVolume: "1.6",
    transmission: "Робот",
    drivetrain: "Передний привод",
    status: "У дилера",
    dealer: "ЛЕОН-АВТО ОНЛАЙН",
    color: "Искрящийся белый",
    vin: "LXYZ7***07"
  },
  {
    id: "vin-LXYZ7---04",
    name: "Tenet T7",
    price: 2830000,
    monthly: 0,
    info: "1 автомобиль",
    images: [
      PlaceHolderImages.find((img) => img.id === "tenet-t7-white-1")!,
      PlaceHolderImages.find((img) => img.id === "tenet-t7-white-2")!,
      PlaceHolderImages.find((img) => img.id === "tenet-t7-white-3")!,
      PlaceHolderImages.find((img) => img.id === "tenet-t7-white-4")!,
      PlaceHolderImages.find((img) => img.id === "tenet-t7-white-5")!,
    ],
    gearbox: "робот",
    bodyType: "внедорожник",
    count: 3,
    seats: 5,
    specs: [],
    trims: [],
    trimName: "Prime 2WD",
    year: 2024,
    engineVolume: "1.6",
    transmission: "Робот",
    drivetrain: "Передний привод",
    status: "У дилера",
    dealer: "ОПТИМА",
    color: "Искрящийся белый",
    vin: "LXYZ7***04"
  },
  {
    id: "vin-LXYZ7---08",
    name: "Tenet T7",
    price: 2830000,
    monthly: 0,
    info: "1 автомобиль",
    images: [
      PlaceHolderImages.find((img) => img.id === "tenet-7")!,
      PlaceHolderImages.find((img) => img.id === "tenet-t7-main")!,
      PlaceHolderImages.find((img) => img.id === "tenet-t7-profile")!,
      PlaceHolderImages.find((img) => img.id === "tenet-t7-rear")!,
    ],
    gearbox: "робот",
    bodyType: "внедорожник",
    count: 2,
    seats: 5,
    specs: [],
    trims: [],
    trimName: "Prime 2WD",
    year: 2024,
    engineVolume: "1.6",
    transmission: "Робот",
    drivetrain: "Передний привод",
    status: "У дилера",
    dealer: "ОПТИМА",
    color: "Технологичный серый",
    vin: "LXYZ7***08"
  },
  {
    id: "vin-LXYZ7---02",
    name: "Tenet T7",
    price: 2830000,
    monthly: 0,
    info: "1 автомобиль",
    images: [
      PlaceHolderImages.find((img) => img.id === "tenet-t7-white-1")!,
      PlaceHolderImages.find((img) => img.id === "tenet-t7-white-2")!,
      PlaceHolderImages.find((img) => img.id === "tenet-t7-white-3")!,
      PlaceHolderImages.find((img) => img.id === "tenet-t7-white-4")!,
      PlaceHolderImages.find((img) => img.id === "tenet-t7-white-5")!,
    ],
    gearbox: "робот",
    bodyType: "внедорожник",
    count: 1,
    seats: 5,
    specs: [],
    trims: [],
    trimName: "Prime 2WD",
    year: 2024,
    engineVolume: "1.6",
    transmission: "Робот",
    drivetrain: "Передний привод",
    status: "У дилера",
    dealer: "ЛЕОН-АВТО",
    color: "Искрящийся белый",
    vin: "LXYZ7***02"
  },
  {
    id: "vin-LXYZ7---53",
    name: "Tenet T7",
    price: 2830000,
    monthly: 0,
    info: "1 автомобиль",
    images: [
      PlaceHolderImages.find((img) => img.id === "tenet-7")!,
      PlaceHolderImages.find((img) => img.id === "tenet-t7-main")!,
      PlaceHolderImages.find((img) => img.id === "tenet-t7-profile")!,
      PlaceHolderImages.find((img) => img.id === "tenet-t7-rear")!,
    ],
    gearbox: "робот",
    bodyType: "внедорожник",
    count: 1,
    seats: 5,
    specs: [],
    trims: [],
    trimName: "Prime 2WD",
    year: 2024,
    engineVolume: "1.6",
    transmission: "Робот",
    drivetrain: "Передний привод",
    status: "У дилера",
    dealer: "ОПТИМА",
    color: "Серебристый",
    vin: "LXYZ7***53"
  },
  {
    id: "vin-LXYZ7---04-awd",
    name: "Tenet T7",
    price: 3030000,
    monthly: 0,
    info: "1 автомобиль",
    images: [
      PlaceHolderImages.find((img) => img.id === "tenet-t7-black-1")!,
      PlaceHolderImages.find((img) => img.id === "tenet-t7-black-2")!,
      PlaceHolderImages.find((img) => img.id === "tenet-t7-black-3")!,
      PlaceHolderImages.find((img) => img.id === "tenet-t7-black-4")!,
      PlaceHolderImages.find((img) => img.id === "tenet-t7-black-5")!,
    ],
    gearbox: "робот",
    bodyType: "внедорожник",
    count: 1,
    seats: 5,
    specs: [],
    trims: [],
    trimName: "Prime 4WD",
    year: 2024,
    engineVolume: "1.6",
    transmission: "Робот",
    drivetrain: "Полный привод",
    status: "У дилера",
    dealer: "ОПТИМА",
    color: "Глубокий черный",
    vin: "LXYZ7***04"
  },
  {
    id: "vin-LXYZ7---97",
    name: "Tenet T7",
    price: 3030000,
    monthly: 0,
    info: "1 автомобиль",
    images: [
      PlaceHolderImages.find((img) => img.id === "tenet-t7-white-1")!,
      PlaceHolderImages.find((img) => img.id === "tenet-t7-white-2")!,
      PlaceHolderImages.find((img) => img.id === "tenet-t7-white-3")!,
      PlaceHolderImages.find((img) => img.id === "tenet-t7-white-4")!,
      PlaceHolderImages.find((img) => img.id === "tenet-t7-white-5")!,
    ],
    gearbox: "робот",
    bodyType: "внедорожник",
    count: 1,
    seats: 5,
    specs: [],
    trims: [],
    trimName: "Prime 4WD",
    year: 2024,
    engineVolume: "1.6",
    transmission: "Робот",
    drivetrain: "Полный привод",
    status: "Центральный склад",
    dealer: "ОПТИМА (склад)",
    color: "Искрящийся белый",
    vin: "LXYZ7***97"
  },
  {
    id: "vin-LXYZ7---18",
    name: "Tenet T7",
    price: 3030000,
    monthly: 0,
    info: "1 автомобиль",
    images: [
      PlaceHolderImages.find((img) => img.id === "tenet-t7-black-1")!,
      PlaceHolderImages.find((img) => img.id === "tenet-t7-black-2")!,
      PlaceHolderImages.find((img) => img.id === "tenet-t7-black-3")!,
      PlaceHolderImages.find((img) => img.id === "tenet-t7-black-4")!,
      PlaceHolderImages.find((img) => img.id === "tenet-t7-black-5")!,
    ],
    gearbox: "робот",
    bodyType: "внедорожник",
    count: 1,
    seats: 5,
    specs: [],
    trims: [],
    trimName: "Prime 4WD",
    year: 2024,
    engineVolume: "1.6",
    transmission: "Робот",
    drivetrain: "Полный привод",
    status: "У дилера",
    dealer: "ОПТИМА",
    color: "Глубокий черный",
    vin: "LXYZ7***18"
  },
  {
    id: "vin-EDEFB32BSE---01",
    name: "Tenet T7",
    price: 2630000,
    monthly: 0,
    info: "1 автомобиль",
    images: [
      PlaceHolderImages.find((img) => img.id === "tenet-7")!,
      PlaceHolderImages.find((img) => img.id === "tenet-t7-main")!,
      PlaceHolderImages.find((img) => img.id === "tenet-t7-profile")!,
      PlaceHolderImages.find((img) => img.id === "tenet-t7-rear")!,
    ],
    gearbox: "робот",
    bodyType: "внедорожник",
    count: 1,
    seats: 5,
    specs: [],
    trims: [],
    seoText: {
      title: "Простор и комфорт для всей семьи",
      description: "Tenet T7 — это вместительный и надежный внедорожник, созданный для путешествий и семейных поездок по Краснодарскому краю. Мощный двигатель, просторный салон и богатое оснащение обеспечивают комфорт и безопасность на любом маршруте. Высокий клиренс и полный привод (в зависимости от комплектации) позволяют уверенно чувствовать себя как на асфальте, так и за его пределами.",
      audience: "Для кого: Для семей, которые ценят комфорт и безопасность, а также для любителей активного отдыха и путешествий."
    },
    trimName: "Active 2WD",
    year: 2025,
    engineVolume: "1.6",
    transmission: "Робот",
    drivetrain: "Передний привод",
    status: "У дилера",
    dealer: "ЛЕОН-АВТО ОНЛАЙН, Краснодар",
    color: "Технологичный серый",
    vin: "EDEFB32BSE***01"
  },
  {
    id: "tenet-t8-premium-sport-blue",
    name: "Tenet T8",
    price: 3399900,
    monthly: 45000,
    info: "1 автомобиль",
    images: [
      PlaceHolderImages.find((img) => img.id === "tenet-8")!,
      PlaceHolderImages.find((img) => img.id === "tenet-t8-main")!,
      PlaceHolderImages.find((img) => img.id === "tenet-t8-profile")!,
      PlaceHolderImages.find((img) => img.id === "tenet-t8-rear")!,
    ],
    gearbox: "робот",
    bodyType: "внедорожник",
    count: 1,
    seats: 5,
    specs: [
        { label: 'Разгон до 100 км/ч', value: '6.9 с' },
        { label: 'Тип топлива', value: 'Бензин' },
        { label: 'Расход топлива', value: '8.5 л/100км' },
        { label: 'Объем двигателя', value: '2.0 л.' },
        { label: 'Мощность', value: '249 л.с.' },
        { label: 'Кол-во мест', value: '5 мест' },
    ],
    trims: [
       {
        name: 'Premium Sport',
        price: 3399900,
        specs: [
          { label: 'Двигатель', value: '2.0л, 249 л.с.'},
          { label: 'Трансмиссия', value: 'Робот'},
          { label: 'Привод', value: 'Полный'},
        ],
      }
    ],
    seoText: {
        title: "Будущее в движении",
        description: "Tenet T8 — это яркий и технологичный лифтбек для тех, кто ценит динамику и передовые решения. Футуристичный дизайн, впечатляющая мощность и интеллектуальные системы помощи водителю дарят незабываемые эмоции от каждой поездки. Этот автомобиль создан, чтобы быть в центре внимания.",
        audience: "Для кого: Для технологичных энтузиастов и ценителей спортивного стиля, которые хотят получить максимум от вождения."
    },
    trimName: "Premium Sport",
    year: 2025,
    engineVolume: "2.0",
    transmission: "Робот",
    drivetrain: "Полный привод",
    status: "У дилера",
    dealer: "ЛЕОН-АВТО ОНЛАЙН, Краснодар",
    color: "Морской синий",
    vin: "SDEF823BSE***01"
  }
].filter(car => car.color);

    
