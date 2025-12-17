
"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { TrimDetails } from "@/components/trim-details";
import Image from "next/image";
import type { Car } from "@/lib/cars";
import {
  Clock,
  Gauge,
  Fuel,
  GitCommitHorizontal,
  Cog,
  Users,
} from "lucide-react";

const specIcons: { [key: string]: React.ReactNode } = {
  'Разгон до 100 км/ч': <Clock className="w-5 h-5" />,
  'Тип топлива': <Fuel className="w-5 h-5" />,
  'Расход топлива': <Gauge className="w-5 h-5" />,
  'Объем двигателя': <Cog className="w-5 h-5" />,
  'Мощность': <GitCommitHorizontal className="w-5 h-5" />,
  'Кол-во мест': <Users className="w-5 h-5" />,
};

export function ModelDetails({ car }: { car: Car }) {
  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <h1 className="text-3xl md:text-4xl font-bold font-headline mb-4">
        {car.name}
      </h1>
      <p className="text-muted-foreground mb-8">
        Цена от {car.price.toLocaleString("ru-RU")} ₽
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
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
        <div>
          <h2 className="text-2xl font-bold font-headline mb-4">
            Характеристики
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {car.specs.map((spec, index) => (
              <div key={index} className="flex items-center gap-3">
                 <div className="text-primary">
                  {specIcons[spec.label]}
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{spec.label}</p>
                  <p className="font-semibold">{spec.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-16">
        <h2 className="text-3xl font-bold font-headline mb-6 text-center">
          Комплектации и цены
        </h2>
        <TrimDetails trims={car.trims} />
      </div>

    </div>
  );
}
