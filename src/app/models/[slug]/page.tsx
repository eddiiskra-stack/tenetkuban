
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ModelDetails } from "@/components/model-details";
import { allCars, allModels } from "@/lib/cars";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Car } from "@/lib/cars";

function findCarForModel(modelId: string): Car | undefined {
    const model = allModels.find(m => m.id === modelId);
    if (!model) return undefined;
    // Find the first car in allCars that matches the model name.
    return allCars.find(car => car.name === model.name);
}


export async function generateStaticParams() {
  return allModels.map((model) => ({
    slug: model.id,
  }));
}

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const car = findCarForModel(params.slug);

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
  const car = findCarForModel(params.slug);

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
