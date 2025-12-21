
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X } from "lucide-react";

const colors = ["#ffffff", "#000000", "#a0aec0", "#48bb78", "#4299e1"];

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


  return (
    <div className="p-6 bg-card rounded-lg shadow-sm border">
      <div className="space-y-6">
        <Accordion type="multiple" defaultValue={["location", "model", "price", "color", "gearbox", "body", "seats"]} className="w-full">
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
                <div>
                  <label className="text-xs font-semibold text-muted-foreground">ДИЛЕРСКИЙ ЦЕНТР</label>
                  <Select>
                      <SelectTrigger className="w-full mt-1">
                          <SelectValue placeholder="Выберите" />
                      </SelectTrigger>
                      <SelectContent>
                          <SelectItem value="leon-avto">ЛЕОН-АВТО ОНЛАЙН</SelectItem>
                          <SelectItem value="optima-online">ОПТИМА ОНЛАЙН</SelectItem>
                      </SelectContent>
                  </Select>
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
                    <Checkbox id="tenet-t4" />
                    Tenet T4
                  </label>
                  <span className="text-xs text-muted-foreground">3</span>
                </div>
                <div className="flex items-center justify-between">
                  <label htmlFor="tenet-t7" className="flex items-center gap-2 text-sm cursor-pointer">
                    <Checkbox id="tenet-t7" />
                    Tenet T7
                  </label>
                  <span className="text-xs text-muted-foreground">13</span>
                </div>
                <div className="flex items-center justify-between">
                  <label htmlFor="tenet-t8" className="flex items-center gap-2 text-sm cursor-pointer">
                    <Checkbox id="tenet-t8" />
                    Tenet T8
                  </label>
                  <span className="text-xs text-muted-foreground">5</span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="color">
            <AccordionTrigger className="text-sm font-semibold">ЦВЕТ</AccordionTrigger>
            <AccordionContent>
                <div className="flex items-center space-x-2 pt-2">
                    {colors.map((color, index) => (
                        <button key={index} className="w-6 h-6 rounded-full border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2" style={{ backgroundColor: color }} aria-label={`Color ${color}`}></button>
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
