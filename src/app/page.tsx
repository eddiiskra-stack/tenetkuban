import { SiteHeader } from "@/components/site-header";
import { CarCalculator } from "@/components/car-calculator";
import { SiteFooter } from "@/components/site-footer";
import { HeroSlider } from "@/components/hero-slider";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative w-full">
          <HeroSlider />
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
