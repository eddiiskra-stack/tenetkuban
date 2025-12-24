
"use client";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CarFilters } from "@/components/car-filters";
import { CarListings } from "@/components/car-listings";
import { HelpForm } from "@/components/help-form";
import React, { useState, useMemo, useEffect, Suspense } from "react";
import { allCars } from "@/lib/cars";
import { useSearchParams, useRouter } from "next/navigation";

function StockPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const minPrice = useMemo(() => Math.min(...allCars.map(car => car.price)), []);
  const maxPrice = useMemo(() => Math.max(...allCars.map(car => car.price)), []);

  const [gearboxFilter, setGearboxFilter] = useState<string[]>([]);
  const [bodyTypeFilter, setBodyTypeFilter] = useState<string[]>([]);
  const [seatsFilter, setSeatsFilter] = useState<number[]>([]);
  const [modelFilter, setModelFilter] = useState<string[]>([]);
  const [colorFilter, setColorFilter] = useState<string[]>([]);
  const [statusFilter, setStatusFilter] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([minPrice, maxPrice]);

  useEffect(() => {
    const gearbox = searchParams.get('gearbox');
    const body = searchParams.get('body');
    const seats = searchParams.get('seats');
    const model = searchParams.get('model');
    const color = searchParams.get('color');
    const status = searchParams.get('status');
    const price = searchParams.get('price');
    
    if (gearbox) setGearboxFilter(gearbox.split(','));
    if (body) setBodyTypeFilter(body.split(','));
    if (seats) setSeatsFilter(seats.split(',').map(Number));
    if (model) setModelFilter(model.split(','));
    if (color) setColorFilter(color.split(','));
    if (status) setStatusFilter(status.split(','));
    if (price) {
      const [min, max] = price.split(',').map(Number);
      if (!isNaN(min) && !isNaN(max)) {
        setPriceRange([min, max]);
      }
    } else {
      setPriceRange([minPrice, maxPrice]);
    }
  }, [searchParams, minPrice, maxPrice]);

  const updateURLParams = (newFilters: { [key: string]: any }, reset = false) => {
    if (reset) {
        router.replace('/stock');
        return;
    }
    const params = new URLSearchParams(searchParams.toString());
    Object.keys(newFilters).forEach(key => {
      const value = newFilters[key];
      if (Array.isArray(value) && value.length > 0) {
        params.set(key, value.join(','));
      } else if (typeof value === 'string' && value) {
        params.set(key, value);
      } else if ((Array.isArray(value) && value.length === 0) || value === null || value === undefined) {
        params.delete(key);
      } else if(typeof value === 'object' && !Array.isArray(value) && value !== null) {
         if (value.length === 0) params.delete(key);
      }
    });
    router.replace(`/stock?${params.toString()}`);
  };

  const handleGearboxChange = (gearbox: string) => {
    const newGearboxFilter = gearboxFilter.includes(gearbox)
      ? gearboxFilter.filter(g => g !== gearbox)
      : [...gearboxFilter, gearbox];
    setGearboxFilter(newGearboxFilter);
    updateURLParams({ gearbox: newGearboxFilter });
  };
  
  const handleBodyTypeChange = (bodyType: string) => {
    const newBodyTypeFilter = bodyTypeFilter.includes(bodyType)
      ? bodyTypeFilter.filter(b => b !== bodyType)
      : [...bodyTypeFilter, bodyType];
    setBodyTypeFilter(newBodyTypeFilter);
    updateURLParams({ body: newBodyTypeFilter });
  };

  const handleSeatsChange = (seats: number) => {
    const newSeatsFilter = seatsFilter.includes(seats)
      ? seatsFilter.filter(s => s !== seats)
      : [...seatsFilter, seats];
    setSeatsFilter(newSeatsFilter);
    updateURLParams({ seats: newSeatsFilter });
  };
  
  const handleModelChange = (model: string) => {
    const newModelFilter = modelFilter.includes(model)
      ? modelFilter.filter(m => m !== model)
      : [...modelFilter, model];
    setModelFilter(newModelFilter);
    updateURLParams({ model: newModelFilter });
  };

  const handleColorChange = (color: string) => {
    const newColorFilter = colorFilter.includes(color)
      ? colorFilter.filter(c => c !== color)
      : [...colorFilter, color];
    setColorFilter(newColorFilter);
    updateURLParams({ color: newColorFilter });
  };

  const handleStatusChange = (status: string) => {
    const newStatusFilter = statusFilter.includes(status)
      ? statusFilter.filter(s => s !== status)
      : [...statusFilter, status];
    setStatusFilter(newStatusFilter);
    updateURLParams({ status: newStatusFilter });
  };

  const handlePriceChange = (newRange: [number, number]) => {
    setPriceRange(newRange);
    updateURLParams({ price: newRange.join(',') });
  };

  const handleResetFilters = () => {
    setGearboxFilter([]);
    setBodyTypeFilter([]);
    setSeatsFilter([]);
    setModelFilter([]);
    setColorFilter([]);
    setStatusFilter([]);
    setPriceRange([minPrice, maxPrice]);
    updateURLParams({}, true);
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
  }, [gearboxFilter, bodyTypeFilter, seatsFilter, modelFilter, colorFilter, statusFilter, priceRange]);
  
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
                onResetClick={handleResetFilters}
                showButton={false}
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


export default function StockPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <StockPageContent />
    </Suspense>
  )
}
