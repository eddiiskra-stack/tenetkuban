
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { allCars } from "@/lib/cars";
import type { Car } from "@/lib/cars";

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
              <Link href={`/models/${car.id}`} key={car.id} className="block">
                <Card
                  className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
                >
                  <CardContent className="p-0 flex flex-col flex-grow">
                    <div className="relative">
                      {car.images?.length > 0 && (
                        <Image
                          src={car.images[0].imageUrl}
                          alt={car.name}
                          width={500}
                          height={300}
                          className="object-cover w-full aspect-video"
                          data-ai-hint={car.images[0].imageHint}
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
                          <Link href={`/models/${car.id}`} passHref>
                            <Button className="w-full">Подробнее</Button>
                          </Link>
                          <Button variant="outline" className="w-full as-link">
                            <Link href="/#help-form" className="w-full h-full flex items-center justify-center">
                              Тест-драйв
                            </Link>
                          </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
