
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ModelDetails } from "@/components/model-details";
import { allCars } from "@/lib/cars";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return allCars.map((car) => ({
    slug: car.id,
  }));
}

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const car = allCars.find((c) => c.id === params.slug);

  if (!car) {
    return {
      title: "Model Not Found",
    };
  }

  return {
    title: car.name,
    description: `Details, specifications, and pricing for the ${car.name}.`,
  };
}

export default function ModelPage({ params }: { params: { slug: string } }) {
  const car = allCars.find((c) => c.id === params.slug);

  if (!car) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 w-full bg-background">
        <ModelDetails car={car} />
      </main>
      <SiteFooter />
    </div>
  );
}
