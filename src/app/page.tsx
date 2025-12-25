
"use client";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CarFilters } from "@/components/car-filters";
import { CarListings } from "@/components/car-listings";
import { HelpForm } from "@/components/help-form";
import React, { useState, useMemo } from "react";
import { allCars } from "@/lib/cars";
import type { Car } from "@/lib/cars";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Home() {
  const [gearboxFilter, setGearboxFilter] = useState<string[]>([]);
  const [bodyTypeFilter, setBodyTypeFilter] = useState<string[]>([]);
  const [seatsFilter, setSeatsFilter] = useState<number[]>([]);
  const [modelFilter, setModelFilter] = useState<string[]>([]);
  const [colorFilter, setColorFilter] = useState<string[]>([]);
  const [statusFilter, setStatusFilter] = useState<string[]>([]);

  const minPrice = useMemo(() => Math.min(...allCars.map(car => car.price)), []);
  const maxPrice = useMemo(() => Math.max(...allCars.map(car => car.price)), []);

  const [priceRange, setPriceRange] = useState<[number, number]>([minPrice, maxPrice]);
  const router = useRouter();


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

  const handleSeatsChange = (seats: number) => {
    setSeatsFilter(prev =>
      prev.includes(seats)
        ? prev.filter(s => s !== seats)
        : [...prev, seats]
    );
  };
  
  const handleModelChange = (model: string) => {
    setModelFilter(prev =>
      prev.includes(model)
        ? prev.filter(m => m !== model)
        : [...prev, model]
    );
  };

  const handleColorChange = (color: string) => {
    setColorFilter(prev =>
      prev.includes(color)
        ? prev.filter(c => c !== color)
        : [...prev, color]
    );
  };

  const handleStatusChange = (status: string) => {
    setStatusFilter(prev =>
      prev.includes(status)
        ? prev.filter(s => s !== status)
        : [...prev, status]
    );
  };

  const handlePriceChange = (newRange: [number, number]) => {
    setPriceRange(newRange);
  };

  const handleResetFilters = () => {
    setGearboxFilter([]);
    setBodyTypeFilter([]);
    setSeatsFilter([]);
    setModelFilter([]);
    setColorFilter([]);
    setStatusFilter([]);
    setPriceRange([minPrice, maxPrice]);
  };

  const filteredCars = useMemo(() => {
    let cars = allCars;

    cars = cars.filter(car => car.price >= priceRange[0] && car.price <= priceRange[1]);

    if (gearboxFilter.length > 0) {
      cars = cars.filter(car => gearboxFilter.includes(car.gearbox));
    }
    
    if (bodyTypeFilter.length > 0) {
      cars = cars.filter(car => bodyTypeFilter.includes(car.bodyType));
    }

    if (seatsFilter.length > 0) {
        cars = cars.filter(car => car.seats ? seatsFilter.includes(car.seats) : false);
    }
    
    if (modelFilter.length > 0) {
        cars = cars.filter(car => modelFilter.includes(car.name));
    }

    if (colorFilter.length > 0) {
        cars = cars.filter(car => car.color ? colorFilter.includes(car.color) : false);
    }

    if (statusFilter.length > 0) {
        cars = cars.filter(car => car.status ? statusFilter.includes(car.status) : false);
    }

    return cars;
  }, [gearboxFilter, bodyTypeFilter, seatsFilter, priceRange, modelFilter, colorFilter, statusFilter]);
  
  const totalCarCount = filteredCars.length;

  const handleShowClick = () => {
    const params = new URLSearchParams();
    if (gearboxFilter.length > 0) params.set('gearbox', gearboxFilter.join(','));
    if (bodyTypeFilter.length > 0) params.set('body', bodyTypeFilter.join(','));
    if (seatsFilter.length > 0) params.set('seats', seatsFilter.join(','));
    if (modelFilter.length > 0) params.set('model', modelFilter.join(','));
    if (colorFilter.length > 0) params.set('color', colorFilter.join(','));
    if (statusFilter.length > 0) params.set('status', statusFilter.join(','));
    params.set('price', `${priceRange[0]},${priceRange[1]}`);
    
    router.push(`/stock?${params.toString()}`);
  };


  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 w-full bg-background">
        <div className="container mx-auto px-4 md:px-6 py-8">
            <h1 className="text-4xl font-bold text-center mb-4 font-headline">Автомобили TENET в наличии</h1>
            <p className="text-center text-muted-foreground mb-8">
                Выберите автомобиль своей мечты
            </p>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <aside className="lg:col-span-1">
              <CarFilters 
                minPrice={minPrice}
                maxPrice={maxPrice}
                priceRange={priceRange}
                onPriceChange={handlePriceChange}
                onGearboxChange={handleGearboxChange}
                selectedGearboxes={gearboxFilter}
                onBodyTypeChange={handleBodyTypeChange}
                selectedBodyTypes={bodyTypeFilter}
                onSeatsChange={handleSeatsChange}
                selectedSeats={seatsFilter}
                onModelChange={handleModelChange}
                selectedModels={modelFilter}
                onColorChange={handleColorChange}
                selectedColors={colorFilter}
                onStatusChange={handleStatusChange}
                selectedStatuses={statusFilter}
                carCount={totalCarCount}
                onShowClick={handleShowClick}
                onResetClick={handleResetFilters}
              />
            </aside>
            <div className="lg:col-span-3 space-y-6">
              <CarListings cars={filteredCars.slice(0, 4)} totalCarCount={totalCarCount} isHomePage />
              <div className="flex justify-center">
                <Link href="/stock" passHref>
                  <Button variant="outline">Смотреть все автомобили</Button>
                </Link>
              </div>
              <HelpForm />
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
