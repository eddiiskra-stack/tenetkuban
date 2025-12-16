import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CarFilters } from "@/components/car-filters";
import { CarListings } from "@/components/car-listings";
import { HelpForm } from "@/components/help-form";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 w-full bg-background">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <aside className="lg:col-span-1">
              <CarFilters />
            </aside>
            <div className="lg:col-span-3 space-y-12">
              <CarListings />
              <HelpForm />
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
