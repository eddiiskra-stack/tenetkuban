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
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const carList = [
  {
    id: "tenet-t7",
    name: "Tenet T7",
    price: 2140000,
    monthly: 25663,
    info: "13 автомобилей - 5 цветов",
    image: PlaceHolderImages.find((img) => img.id === "tenet-7"),
  },
  {
    id: "tenet-t4",
    name: "Tenet T4",
    price: 2490000,
    monthly: 29860,
    info: "3 автомобиля - 3 цвета",
    image: PlaceHolderImages.find((img) => img.id === "tenet-4"),
  },
  {
    id: "tenet-t8",
    name: "Tenet T8",
    price: 3200000,
    monthly: 38400,
    info: "5 автомобилей - 4 цвета",
    image: PlaceHolderImages.find((img) => img.id === "tenet-8"),
  }
];

export function CarListings() {
  return (
    <section>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold font-headline mb-4 md:mb-0">
          21 НОВЫХ АВТОМОБИЛЕЙ TENET
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {carList.map((car) => (
          <Card key={car.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-0">
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
                <Badge variant="default" className="absolute top-2 left-2 bg-red-600 text-white">Выгода</Badge>
              </div>
              <div className="p-4">
                <p className="text-sm text-muted-foreground">{car.info}</p>
                <h3 className="text-lg font-bold font-headline mt-1">{car.name}</h3>
                <p className="text-xl font-bold text-primary mt-2">
                  от {car.price.toLocaleString("ru-RU")} ₽
                </p>
                <p className="text-sm text-green-600 font-semibold mt-1">
                  от {car.monthly.toLocaleString("ru-RU")} ₽ в месяц
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
