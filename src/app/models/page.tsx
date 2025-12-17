
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages, ImagePlaceholder } from "@/lib/placeholder-images";
import type { Car } from "@/app/page";

const allCars: Car[] = [
  {
    id: "tenet-t4",
    name: "Tenet T4",
    price: 1999000,
    monthly: 29860,
    info: "3 автомобиля",
    image: PlaceHolderImages.find((img) => img.id === "tenet-4"),
    gearbox: "механическая",
    bodyType: "хечбек",
    count: 3,
    seats: 5,
  },
  {
    id: "tenet-t7",
    name: "Tenet T7",
    price: 2580000,
    monthly: 25663,
    info: "13 автомобилей",
    image: PlaceHolderImages.find((img) => img.id === "tenet-7"),
    gearbox: "робот",
    bodyType: "внедорожник",
    count: 13,
    seats: 5,
  },
  {
    id: "tenet-t8",
    name: "Tenet T8",
    price: 3390000,
    monthly: 38400,
    info: "5 автомобилей",
    image: PlaceHolderImages.find((img) => img.id === "tenet-8"),
    gearbox: "робот",
    bodyType: "внедорожник",
    count: 5,
    seats: 7,
  },
];

export default function ModelsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 w-full bg-background">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <h1 className="text-3xl md:text-4xl font-bold font-headline mb-8">
            Модельный ряд TENET
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allCars.map((car) => (
              <Card
                key={car.id}
                className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <CardContent className="p-0 flex flex-col flex-grow">
                  <div className="relative">
                    {car.image && (
                      <Image
                        src={car.image.imageUrl}
                        alt={car.name}
                        width={500}
                        height={300}
                        className="object-cover w-full aspect-video"
                        data-ai-hint={car.image.imageHint}
                      />
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold font-headline">
                      {car.name}
                    </h3>
                    <p className="text-muted-foreground mt-1">
                      {car.bodyType}
                    </p>
                    <div className="mt-4 flex-grow">
                      <p className="text-xl font-bold">
                        от {car.price.toLocaleString("ru-RU")} ₽
                      </p>
                    </div>
                    <div className="mt-6 flex flex-col sm:flex-row gap-2">
                       <Link href="/" className="flex-1">
                        <Button className="w-full">Подробнее</Button>
                      </Link>
                      <Button variant="outline" className="flex-1">
                        Тест-драйв
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
