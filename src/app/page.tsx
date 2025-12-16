import { SiteHeader } from "@/components/site-header";
import { CarCalculator } from "@/components/car-calculator";
import { SiteFooter } from "@/components/site-footer";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-background");

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center text-center text-primary-foreground overflow-hidden">
          {heroImage && (
             <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover"
                priority
                data-ai-hint={heroImage.imageHint}
              />
          )}
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative container px-4 md:px-6 z-10">
            <div className="flex flex-col items-center space-y-4">
              <h1 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Tenet. Искусство Движения.
              </h1>
              <p className="max-w-[700px] text-lg md:text-xl">
                Откройте для себя модельный ряд Tenet. Рассчитайте стоимость вашего будущего автомобиля прямо сейчас.
              </p>
            </div>
          </div>
        </section>
        <section id="calculator" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <CarCalculator />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
