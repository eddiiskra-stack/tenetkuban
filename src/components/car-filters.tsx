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

export function CarFilters() {
  const [priceRange, setPriceRange] = useState([2140000, 2490000]);

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

        <Accordion type="multiple" defaultValue={["model", "color"]} className="w-full">
          <AccordionItem value="model">
            <AccordionTrigger className="text-sm font-semibold">МОДЕЛЬ</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="tiggo" className="flex items-center gap-2 text-sm cursor-pointer">
                    <Checkbox id="tiggo" />
                    Tenet 4
                  </label>
                  <span className="text-xs text-muted-foreground">13</span>
                </div>
                <div className="flex items-center justify-between">
                  <label htmlFor="arrizo" className="flex items-center gap-2 text-sm cursor-pointer">
                    <Checkbox id="arrizo" />
                    Tenet 7
                  </label>
                  <span className="text-xs text-muted-foreground">3</span>
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
              <p className="text-sm text-muted-foreground">Опции скоро появятся</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="body">
            <AccordionTrigger className="text-sm font-semibold">КУЗОВ</AccordionTrigger>
            <AccordionContent>
               <p className="text-sm text-muted-foreground">Опции скоро появятся</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="drive">
            <AccordionTrigger className="text-sm font-semibold">ПРИВОД</AccordionTrigger>
            <AccordionContent>
               <p className="text-sm text-muted-foreground">Опции скоро появятся</p>
            </AccordionContent>
          </AccordionItem>
           <AccordionItem value="fuel">
            <AccordionTrigger className="text-sm font-semibold">ТИП ТОПЛИВА</AccordionTrigger>
            <AccordionContent>
               <p className="text-sm text-muted-foreground">Опции скоро появятся</p>
            </AccordionContent>
          </AccordionItem>
           <AccordionItem value="power">
            <AccordionTrigger className="text-sm font-semibold">МОЩНОСТЬ, Л.С.</AccordionTrigger>
            <AccordionContent>
               <p className="text-sm text-muted-foreground">Опции скоро появятся</p>
            </AccordionContent>
          </AccordionItem>
           <AccordionItem value="seats">
            <AccordionTrigger className="text-sm font-semibold">КОЛИЧЕСТВО МЕСТ</AccordionTrigger>
            <AccordionContent>
               <p className="text-sm text-muted-foreground">Опции скоро появятся</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="mt-8 border-t pt-6">
        <p className="text-sm text-muted-foreground mb-4">Подходит 16 новых автомобилей</p>
        <Button variant="outline" className="w-full">
          Очистить фильтры
        </Button>
      </div>
    </div>
  );
}
