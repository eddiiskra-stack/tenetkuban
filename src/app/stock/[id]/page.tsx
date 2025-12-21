
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { allCars } from "@/lib/cars";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, Share2 } from "lucide-react";
import { HelpForm } from "@/components/help-form";

export async function generateStaticParams() {
  return allCars.map((car) => ({
    id: car.id,
  }));
}

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const car = allCars.find((c) => c.id === params.id);

  if (!car) {
    return {
      title: "Car Not Found",
    };
  }

  return {
    title: `${car.name} ${car.trimName}`,
    description: `Details, specifications, and pricing for the ${car.name} ${car.trimName}.`,
  };
}

export default function CarPage({ params }: { params: { id: string } }) {
  const car = allCars.find((c) => c.id === params.id);

  if (!car) {
    notFound();
  }

  const details = [
    { label: "Двигатель", value: car.engineVolume },
    { label: "Трансмиссия", value: car.transmission },
    { label: "Привод", value: car.drivetrain },
    { label: "Комплектация", value: car.trimName },
    { label: "Цвет", value: car.color },
    { label: "VIN", value: car.vin },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 w-full bg-background">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <Link
            href="/stock"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Назад к списку
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <div className="relative">
                {car.status && (
                  <Badge
                    variant={
                      car.status === "У дилера" ? "default" : "secondary"
                    }
                    className="absolute top-4 left-4 z-10"
                  >
                    {car.status}
                  </Badge>
                )}
                <Carousel className="w-full">
                  <CarouselContent>
                    {car.images.map((img, index) => (
                      <CarouselItem key={index}>
                        <Card>
                          <CardContent className="relative aspect-video p-0">
                            <Image
                              src={img.imageUrl}
                              alt={`${car.name} - ${img.description}`}
                              fill
                              className="object-cover rounded-lg"
                              data-ai-hint={img.imageHint}
                            />
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-4" />
                  <CarouselNext className="right-4" />
                </Carousel>
              </div>
              <div className="hidden lg:flex mt-4 space-x-2">
                 {car.images.map((img, index) => (
                    <div key={index} className="w-1/5">
                        <Card className="overflow-hidden">
                            <CardContent className="relative aspect-video p-0">
                                <Image
                                src={img.imageUrl}
                                alt={`${car.name} - ${img.description}`}
                                fill
                                className="object-cover cursor-pointer"
                                data-ai-hint={img.imageHint}
                                />
                            </CardContent>
                        </Card>
                    </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2">
              <h1 className="text-3xl font-bold font-headline">
                {car.name}
              </h1>
              <p className="text-xl text-muted-foreground mt-1">
                {car.trimName}, {car.year}
              </p>

              <div className="mt-8 space-y-4">
                {details.map(
                  (detail) =>
                    detail.value && (
                      <div
                        key={detail.label}
                        className="flex justify-between border-b pb-2"
                      >
                        <span className="text-muted-foreground">
                          {detail.label}
                        </span>
                        <span className="font-semibold">{detail.value}</span>
                      </div>
                    )
                )}
              </div>
              <div className="mt-6">
                <p className="text-sm text-muted-foreground">{car.dealer}</p>
              </div>

              <div className="mt-8">
                <p className="text-sm text-muted-foreground">Стоимость</p>
                <p className="text-3xl font-bold mt-1">
                  {car.price.toLocaleString("ru-RU")} ₽
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-2">
                <Link href="#help-form" passHref>
                  <Button size="lg" className="w-full">
                    Оставить заявку
                  </Button>
                </Link>
                <div className="flex gap-2">
                  <Button variant="outline" className="w-full">
                    <Share2 className="mr-2 h-4 w-4" />
                    Сравнение
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Heart className="mr-2 h-4 w-4" />
                    В избранное
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16">
            <HelpForm />
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
