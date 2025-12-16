"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Autoplay from "embla-carousel-autoplay";

const sliderContent = [
  {
    id: "slide-1",
    imageId: "hero-slide-1",
    title: "Tenet. Искусство Движения.",
    description: "Откройте для себя модельный ряд Tenet. Рассчитайте стоимость вашего будущего автомобиля прямо сейчас.",
  },
  {
    id: "slide-2",
    imageId: "hero-slide-2",
    title: "Инновации в каждой детали",
    description: "Передовые технологии для вашего комфорта и безопасности.",
  },
  {
    id: "slide-3",
    imageId: "hero-slide-3",
    title: "Дизайн, который вдохновляет",
    description: "Элегантность и мощь в каждой линии.",
  },
];

export function HeroSlider() {
  return (
    <Carousel
      className="w-full"
      plugins={[
        Autoplay({
          delay: 5000,
          stopOnInteraction: true,
        }),
      ]}
      opts={{
        loop: true,
      }}
    >
      <CarouselContent>
        {sliderContent.map((slide) => {
          const image = PlaceHolderImages.find((img) => img.id === slide.imageId);
          return (
            <CarouselItem key={slide.id}>
              <div className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center text-center text-primary-foreground overflow-hidden">
                {image && (
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    fill
                    className="object-cover"
                    priority={sliderContent.indexOf(slide) === 0}
                    data-ai-hint={image.imageHint}
                  />
                )}
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative container px-4 md:px-6 z-10">
                  <div className="flex flex-col items-center space-y-4">
                    <h1 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                      {slide.title}
                    </h1>
                    <p className="max-w-[700px] text-lg md:text-xl">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
    </Carousel>
  );
}