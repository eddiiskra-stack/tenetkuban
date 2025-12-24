"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { X } from "lucide-react";
import { allCars } from "@/lib/cars";
import { cn } from "@/lib/utils";

const colors = [
    { name: "Благородный серый", hex: "#A9A9A9" },
    { name: "Глубокий черный", hex: "#000000" },
    { name: "Изумрудный зеленый", hex: "#008000" },
    { name: "Искрящийся белый", hex: "#F5F5DC" },
    { name: "Лазурный синий", hex: "#007FFF" },
    { name: "Морской синий", hex: "#000080" },
    { name: "Огненно-красный", hex: "#FF4500" },
    { name: "Серебристый", hex: "#C0C0C0" },
    { name: "Технологичный серый", hex: "#808080" },
    { name: "Глубокий синий", hex: "#00008B" },
];


type CarFiltersProps = {
  minPrice: number;
  maxPrice: number;
  priceRange: [number, number];
  onPriceChange: (value: [number, number]) => void;
  onGearboxChange: (gearbox: string) => void;
  selectedGearboxes: string[];
  onBodyTypeChange: (bodyType: string) => void;
  selectedBodyTypes: string[];
  onSeatsChange: (seats: number) => void;
  selectedSeats: number[];
  onModelChange: (model: string) => void;
  selectedModels: string[];
  onColorChange: (color: string) => void;
  selectedColors: string[];
  carCount: number;
  onShowClick?: () => void;
  showButton?: boolean;
};

export function CarFilters({ 
  minPrice, 
  maxPrice, 
  priceRange, 
  onPriceChange, 
  onGearboxChange, 
  selectedGearboxes, 
  onBodyTypeChange, 
  selectedBodyTypes, 
  onSeatsChange, 
  selectedSeats,
  onModelChange,
  selectedModels,
  onColorChange,
  selectedColors,
  carCount,
  onShowClick,
  showButton = true,
}: CarFiltersProps) {
  
  const getCarNoun = (count: number) => {
    const lastDigit = count % 10;
    const lastTwoDigits = count % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
      return 'новых автомобилей';
    }
    if (lastDigit === 1) {
      return 'новый автомобиль';
    }
    if (lastDigit >= 2 && lastDigit <= 4) {
      return 'новых автомобиля';
    }
    return 'новых автомобилей';
  };
  
  const modelCounts = {
    'Tenet T4': allCars.filter(car => car.name === 'Tenet T4').length,
    'Tenet T7': allCars.filter(car => car.name === 'Tenet T7').length,
    'Tenet T8': allCars.filter(car => car.name === 'Tenet T8').length,
  };


  return (
    <div className="p-6 bg-card rounded-lg shadow-sm border">
      <div className="space-y-6">
        <Accordion type="multiple" defaultValue={["location", "model", "price", "color", "gearbox", "body", "seats", "transmission"]} className="w-full">
          <AccordionItem value="location">
            <AccordionTrigger className="text-sm font-semibold">ГДЕ КУПИТЬ</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 pt-2">
                <div>
                  <label className="text-xs font-semibold text-muted-foreground">ГОРОД</label>
                   <div className="flex items-center gap-2 mt-1">
                      <div className="flex items-center gap-1.5 bg-muted text-muted-foreground px-2 py-1 rounded-full">
                          <span>Краснодар</span>
                          <X className="w-3.5 h-3.5 cursor-pointer"/>
                      </div>
                   </div>
                </div>
                <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-2">
                        <Checkbox id="status-in-transit" />
                        <label htmlFor="status-in-transit" className="text-sm cursor-pointer">В пути</label>
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox id="status-at-dealer" />
                        <label htmlFor="status-at-dealer" className="text-sm cursor-pointer">У дилера</label>
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox id="status-central-stock" />
                        <label htmlFor="status-central-stock" className="text-sm cursor-pointer">Центральный склад</label>
                    </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="price">
            <AccordionTrigger className="text-sm font-semibold">ЦЕНА, Р</AccordionTrigger>
            <AccordionContent>
                <Slider
                    min={minPrice}
                    max={maxPrice}
                    step={10000}
                    value={priceRange}
                    onValueChange={(value) => onPriceChange(value as [number, number])}
                    className="mb-4 pt-2"
                />
                <div className="flex justify-between items-center text-sm">
                    <Input
                    value={`от ${priceRange[0].toLocaleString("ru-RU")}`}
                    readOnly
                    className="w-1/2"
                    />
                    <Input
                    value={`до ${priceRange[1].toLocaleString("ru-RU")}`}
                    readOnly
                    className="w-1/2 ml-2"
                    />
                </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="model">
            <AccordionTrigger className="text-sm font-semibold">МОДЕЛЬ</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between">
                   <label htmlFor="tenet-t4" className="flex items-center gap-2 text-sm cursor-pointer">
                    <Checkbox id="tenet-t4"
                      onCheckedChange={() => onModelChange('Tenet T4')}
                      checked={selectedModels.includes('Tenet T4')}
                    />
                    Tenet T4
                  </label>
                  <span className="text-xs text-muted-foreground">{modelCounts['Tenet T4']}</span>
                </div>
                <div className="flex items-center justify-between">
                   <label htmlFor="tenet-t7" className="flex items-center gap-2 text-sm cursor-pointer">
                    <Checkbox id="tenet-t7"
                      onCheckedChange={() => onModelChange('Tenet T7')}
                      checked={selectedModels.includes('Tenet T7')}
                    />
                    Tenet T7
                  </label>
                  <span className="text-xs text-muted-foreground">{modelCounts['Tenet T7']}</span>
                </div>
                <div className="flex items-center justify-between">
                   <label htmlFor="tenet-t8" className="flex items-center gap-2 text-sm cursor-pointer">
                    <Checkbox id="tenet-t8"
                      onCheckedChange={() => onModelChange('Tenet T8')}
                      checked={selectedModels.includes('Tenet T8')}
                    />
                    Tenet T8
                  </label>
                  <span className="text-xs text-muted-foreground">{modelCounts['Tenet T8']}</span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="color">
            <AccordionTrigger className="text-sm font-semibold">ЦВЕТ</AccordionTrigger>
            <AccordionContent>
                <div className="grid grid-cols-6 gap-2 pt-2">
                    {colors.map((color) => (
                         <button 
                            key={color.name}
                            className={cn(
                                "w-8 h-8 rounded-full border-2",
                                selectedColors.includes(color.name) ? 'border-primary' : 'border-muted'
                            )}
                            style={{ backgroundColor: color.hex }}
                            aria-label={color.name}
                            onClick={() => onColorChange(color.name)}
                         />
                    ))}
                </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="gearbox">
            <AccordionTrigger className="text-sm font-semibold">КОРОБКА</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2">
                  <Checkbox 
                    id="gearbox-manual" 
                    onCheckedChange={() => onGearboxChange('механическая')}
                    checked={selectedGearboxes.includes('механическая')}
                  />
                  <label htmlFor="gearbox-manual" className="text-sm cursor-pointer">механическая</label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox 
                    id="gearbox-robot" 
                    onCheckedChange={() => onGearboxChange('робот')}
                    checked={selectedGearboxes.includes('робот')}
                  />
                  <label htmlFor="gearbox-robot" className="text-sm cursor-pointer">робот</label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox 
                    id="gearbox-variator" 
                    onCheckedChange={() => onGearboxChange('вариатор')}
                    checked={selectedGearboxes.includes('вариатор')}
                  />
                  <label htmlFor="gearbox-variator" className="text-sm cursor-pointer">вариатор</label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="body">
            <AccordionTrigger className="text-sm font-semibold">КУЗОВ</AccordionTrigger>
            <AccordionContent>
                <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-2">
                        <Checkbox 
                            id="body-hatchback" 
                            onCheckedChange={() => onBodyTypeChange('хечбек')}
                            checked={selectedBodyTypes.includes('хечбек')}
                        />
                        <label htmlFor="body-hatchback" className="text-sm cursor-pointer">хечбек</label>
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox 
                            id="body-suv" 
                            onCheckedChange={() => onBodyTypeChange('внедорожник')}
                            checked={selectedBodyTypes.includes('внедорожник')}
                        />
                        <label htmlFor="body-suv" className="text-sm cursor-pointer">внедорожник</label>
                    </div>
                </div>
            </AccordionContent>
          </AccordionItem>
           <AccordionItem value="seats">
            <AccordionTrigger className="text-sm font-semibold">КОЛИЧЕСТВО МЕСТ</AccordionTrigger>
            <AccordionContent>
               <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-2">
                        <Checkbox 
                            id="seats-5" 
                            onCheckedChange={() => onSeatsChange(5)}
                            checked={selectedSeats.includes(5)}
                        />
                        <label htmlFor="seats-5" className="text-sm cursor-pointer">5 мест</label>
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox 
                            id="seats-7" 
                            onCheckedChange={() => onSeatsChange(7)}
                            checked={selectedSeats.includes(7)}
                        />
                        <label htmlFor="seats-7" className="text-sm cursor-pointer">7 мест</label>
                    </div>
                </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="mt-8 border-t pt-6">
        <p className="text-sm text-muted-foreground mb-4">Подходит {carCount} {getCarNoun(carCount)}</p>
        {showButton && onShowClick && (
          <Button onClick={onShowClick} className="w-full">
            Показать
          </Button>
        )}
        <Button variant="outline" className="w-full mt-2">
          Очистить фильтры
        </Button>
      </div>
    </div>
  );
}
