"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { saveLead } from "@/app/actions";
import { CheckCircle, Loader2 } from "lucide-react";

const carData = [
  {
    id: "tenet-4",
    name: "Tenet 4",
    basePrice: 2100000,
    image: PlaceHolderImages.find((img) => img.id === "tenet-4"),
    trims: [
      { name: "Base", priceModifier: 0 },
      { name: "Comfort", priceModifier: 150000 },
      { name: "Flagship", priceModifier: 300000 },
    ],
  },
  {
    id: "tenet-7",
    name: "Tenet 7",
    basePrice: 2800000,
    image: PlaceHolderImages.find((img) => img.id === "tenet-7"),
    trims: [
      { name: "Base", priceModifier: 0 },
      { name: "Comfort", priceModifier: 200000 },
      { name: "Flagship", priceModifier: 450000 },
    ],
  },
  {
    id: "tenet-8",
    name: "Tenet 8",
    basePrice: 3500000,
    image: PlaceHolderImages.find((img) => img.id === "tenet-8"),
    trims: [
      { name: "Base", priceModifier: 0 },
      { name: "Comfort", priceModifier: 250000 },
      { name: "Flagship", priceModifier: 550000 },
    ],
  },
  {
    id: "tenet-9",
    name: "Tenet 9",
    basePrice: 4200000,
    image: PlaceHolderImages.find((img) => img.id === "tenet-9"),
    trims: [
      { name: "Base", priceModifier: 0 },
      { name: "Comfort", priceModifier: 300000 },
      { name: "Flagship", priceModifier: 700000 },
    ],
  },
];

const leadFormSchema = z.object({
  name: z.string().min(2, { message: "Имя должно содержать не менее 2 букв." }),
  phone: z.string().regex(/^(\+7|8)?\s?\(?\d{3}\)?\s?\d{3}-?\d{2}-?\d{2}$/, {
    message: "Введите корректный номер телефона.",
  }),
  model: z.string(),
  trim: z.string(),
  price: z.number(),
});

type LeadFormValues = z.infer<typeof leadFormSchema>;

export function CarCalculator() {
  const { toast } = useToast();
  const [selectedModelId, setSelectedModelId] = useState(carData[0].id);
  const [selectedTrimName, setSelectedTrimName] = useState(
    carData[0].trims[0].name
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const selectedModel = useMemo(
    () => carData.find((car) => car.id === selectedModelId) || carData[0],
    [selectedModelId]
  );
  const selectedTrim = useMemo(
    () =>
      selectedModel.trims.find((trim) => trim.name === selectedTrimName) ||
      selectedModel.trims[0],
    [selectedModel, selectedTrimName]
  );

  const totalPrice = useMemo(
    () => selectedModel.basePrice + selectedTrim.priceModifier,
    [selectedModel, selectedTrim]
  );
  
  const form = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      model: selectedModel.name,
      trim: selectedTrim.name,
      price: totalPrice,
    },
  });

  useEffect(() => {
    form.reset({
        name: "",
        phone: "",
        model: selectedModel.name,
        trim: selectedTrim.name,
        price: totalPrice,
    });
  }, [selectedModel, selectedTrim, totalPrice, form, isModalOpen]);

  const handleModelChange = (modelId: string) => {
    setSelectedModelId(modelId);
    const newModel = carData.find((car) => car.id === modelId);
    if (newModel) {
      setSelectedTrimName(newModel.trims[0].name);
    }
  };
  
  const handleTrimChange = (trimName: string) => {
    setSelectedTrimName(trimName);
  };
  
  async function onSubmit(data: LeadFormValues) {
    setIsSubmitting(true);
    try {
      const result = await saveLead(data);
      if (result.success) {
        setSubmissionSuccess(true);
      } else {
        throw new Error(result.error || "Не удалось отправить заявку.");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Ошибка",
        description: error instanceof Error ? error.message : "Произошла неизвестная ошибка.",
      });
      setIsSubmitting(false);
    }
  }

  const handleModalOpenChange = (open: boolean) => {
      setIsModalOpen(open);
      if (!open) {
          // Reset state on close
          setTimeout(() => {
            setIsSubmitting(false);
            setSubmissionSuccess(false);
          }, 300); // Delay to allow animation
      }
  }

  return (
    <Card className="w-full max-w-4xl mx-auto overflow-hidden shadow-2xl">
      <div className="grid md:grid-cols-2">
        <div className="p-6 flex flex-col">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="font-headline text-3xl">
              Калькулятор стоимости
            </CardTitle>
            <CardDescription>
              Выберите модель и комплектацию, чтобы узнать итоговую цену.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow p-0 space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Модель</label>
              <Select
                value={selectedModelId}
                onValueChange={handleModelChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Выберите модель" />
                </SelectTrigger>
                <SelectContent>
                  {carData.map((car) => (
                    <SelectItem key={car.id} value={car.id}>
                      {car.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Комплектация</label>
              <Select
                value={selectedTrimName}
                onValueChange={handleTrimChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Выберите комплектацию" />
                </SelectTrigger>
                <SelectContent>
                  {selectedModel.trims.map((trim) => (
                    <SelectItem key={trim.name} value={trim.name}>
                      {trim.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
          <CardFooter className="p-0 mt-auto flex-col items-start pt-6">
            <div className="w-full">
                <p className="text-sm text-muted-foreground">Итоговая цена:</p>
                <p className="text-4xl font-bold font-headline text-primary">
                    {totalPrice.toLocaleString("ru-RU")} ₽
                </p>
            </div>
            <Dialog open={isModalOpen} onOpenChange={handleModalOpenChange}>
              <DialogTrigger asChild>
                <Button className="w-full mt-4" size="lg">
                  Получить предложение
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                {submissionSuccess ? (
                    <div className="flex flex-col items-center justify-center p-8 text-center">
                        <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                        <h3 className="text-xl font-headline font-semibold mb-2">Заявка отправлена!</h3>
                        <p className="text-muted-foreground mb-6">Наш менеджер скоро свяжется с вами.</p>
                        <DialogClose asChild>
                            <Button>Закрыть</Button>
                        </DialogClose>
                    </div>
                ) : (
                    <>
                <DialogHeader>
                  <DialogTitle className="font-headline">
                    Получить специальное предложение
                  </DialogTitle>
                  <DialogDescription>
                    Оставьте ваши данные, и мы свяжемся с вами, чтобы
                    предоставить лучшее предложение на {selectedModel.name}{" "}
                    в комплектации {selectedTrim.name}.
                  </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Имя</FormLabel>
                          <FormControl>
                            <Input placeholder="Иван" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Телефон</FormLabel>
                          <FormControl>
                            <Input placeholder="+7 (999) 999-99-99" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <DialogFooter>
                      <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Отправить
                      </Button>
                    </DialogFooter>
                  </form>
                </Form>
                </>
                )}
              </DialogContent>
            </Dialog>
          </CardFooter>
        </div>
        <div className="relative min-h-[300px] md:min-h-0">
            {selectedModel.image && (
                 <Image
                    src={selectedModel.image.imageUrl}
                    alt={selectedModel.image.description}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    data-ai-hint={selectedModel.image.imageHint}
                />
            )}
        </div>
      </div>
    </Card>
  );
}
