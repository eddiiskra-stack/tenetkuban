
"use client";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CarFilters } from "@/components/car-filters";
import { CarListings } from "@/components/car-listings";
import { HelpForm } from "@/components/help-form";
import React, { useState, useMemo } from "react";
import { PlaceHolderImages, ImagePlaceholder } from "@/lib/placeholder-images";

export type Car = {
  id: string;
  name: string;
  price: number;
  monthly: number;
  info: string;
  image: ImagePlaceholder | undefined;
  gearbox: 'механическая' | 'робот';
  bodyType: 'хечбек' | 'внедорожник';
  count: number;
};

const allCars: Car[] = [
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
  },
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
  }
];


export default function Home() {
  const [gearboxFilter, setGearboxFilter] = useState<string[]>([]);
  const [bodyTypeFilter, setBodyTypeFilter] = useState<string[]>([]);

  const handleGearboxChange = (gearbox: string) => {
    setGearboxFilter(prev => 
      prev.includes(gearbox) 
        ? prev.filter(g => g !== gearbox) 
        : [...prev, gearbox]
    );
  };
  
  const handleBodyTypeChange = (bodyType: string) => {
    setBodyTypeFilter(prev =>
      prev.includes(bodyType)
        ? prev.filter(b => b !== bodyType)
        : [...prev, bodyType]
    );
  };

  const filteredCars = useMemo(() => {
    let cars = allCars;

    if (gearboxFilter.length > 0) {
      cars = cars.filter(car => gearboxFilter.includes(car.gearbox));
    }
    
    if (bodyTypeFilter.length > 0) {
      cars = cars.filter(car => bodyTypeFilter.includes(car.bodyType));
    }

    return cars;
  }, [gearboxFilter, bodyTypeFilter]);
  
  const totalCarCount = useMemo(() => {
    return filteredCars.reduce((total, car) => total + car.count, 0);
  }, [filteredCars]);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 w-full bg-background">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <aside className="lg:col-span-1">
              <CarFilters 
                onGearboxChange={handleGearboxChange}
                selectedGearboxes={gearboxFilter}
                onBodyTypeChange={handleBodyTypeChange}
                selectedBodyTypes={bodyTypeFilter}
                carCount={totalCarCount}
              />
            </aside>
            <div className="lg:col-span-3 space-y-12">
              <CarListings cars={filteredCars} totalCarCount={totalCarCount} />
              <HelpForm />
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
