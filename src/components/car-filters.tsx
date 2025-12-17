
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

const colors = ["#ffffff", "#000000", "#a0aec0", "#48bb78", "#4299e1"];

type CarFiltersProps = {
  onGearboxChange: (gearbox: string) => void;
  selectedGearboxes: string[];
  onBodyTypeChange: (bodyType: string) => void;
  selectedBodyTypes: string[];
  onSeatsChange: (seats: number) => void;
  selectedSeats: number[];
  carCount: number;
};

export function CarFilters({ onGearboxChange, selectedGearboxes, onBodyTypeChange, selectedBodyTypes, onSeatsChange, selectedSeats, carCount }: CarFiltersProps) {
  const [priceRange, setPriceRange] = useState([2140000, 3200000]);
  
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
        <div>
          <h3 className="text-sm font-semibold mb-2">ЦЕНА, Р</h3>
          <Slider
            min={1000000}
            max={5000000}
            step={10000}
            value={priceRange}
            onValueChange={(value) => setPriceRange(value as [number, number])}
            className="mb-4"
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
        </div>

        <Accordion type="multiple" defaultValue={["model", "color", "gearbox", "body", "seats"]} className="w-full">
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
        <Button variant="outline" className="w-full">
          Очистить фильтры
        </Button>
      </div>
    </div>
  );
}
