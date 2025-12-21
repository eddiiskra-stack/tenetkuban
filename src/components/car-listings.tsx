
"use client";

import Image from "next/image";
import { Heart, ListFilter, Menu } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Car } from "@/lib/cars";
import Link from "next/link";


type CarListingsProps = {
  cars: Car[];
  totalCarCount: number;
  isHomePage?: boolean;
};

export function CarListings({ cars, totalCarCount, isHomePage = false }: CarListingsProps) {

  const getCarNoun = (count: number) => {
    const lastDigit = count % 10;
    const lastTwoDigits = count % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
      return 'НОВЫХ АВТОМОБИЛЕЙ';
    }
    if (lastDigit === 1) {
      return 'НОВЫЙ АВТОМОБИЛЬ';
    }
    if (lastDigit >= 2 && lastDigit <= 4) {
      return 'НОВЫХ АВТОМОБИЛЯ';
    }
    return 'НОВЫХ АВТОМОБИЛЕЙ';
  };

  return (
    <section>
      {!isHomePage && (
         <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <h1 className="text-2xl md:text-3xl font-bold font-headline mb-4 md:mb-0">
                {totalCarCount > 0 ? `${totalCarCount} ${getCarNoun(totalCarCount)} TENET` : 'НОВЫЕ АВТОМОБИЛИ TENET'}
            </h1>
            <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
                <ListFilter className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
            </Button>
            </div>
        </div>
      )}


      {!isHomePage && (
         <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div className="flex items-center space-x-2">
            <Checkbox id="with-discount" />
            <label
                htmlFor="with-discount"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Со скидкой
            </label>
            </div>
            <div className="w-full md:w-auto mt-4 md:mt-0">
            <Select defaultValue="price-asc">
                <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Сортировка" />
                </SelectTrigger>
                <SelectContent>
                <SelectItem value="price-asc">По возрастанию цены</SelectItem>
                <SelectItem value="price-desc">По убыванию цены</SelectItem>
                </SelectContent>
            </Select>
            </div>
        </div>
      )}
      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cars.map((car) => (
          <Link href="/stock" key={car.id} className="block">
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
              <CardContent className="p-0 flex flex-col h-full">
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
                  <Badge variant="default" className="absolute top-2 left-2 bg-red-600 text-white">Выгода</Badge>
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <p className="text-sm text-muted-foreground">{car.count} автомобилей - {car.info}</p>
                  <h3 className="text-lg font-bold font-headline mt-1">{car.name}</h3>
                  <div className="flex-grow mt-2">
                    <p className="text-xl font-bold text-primary">
                      от {car.price.toLocaleString("ru-RU")}* ₽
                    </p>
                    <p className="text-sm text-green-600 font-semibold mt-1">
                      от {car.monthly.toLocaleString("ru-RU")} ₽ в месяц
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
