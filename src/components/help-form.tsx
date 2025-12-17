"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const helpFormSchema = z.object({
  name: z.string().min(1, { message: "Пожалуйста, представьтесь" }),
  phone: z.string().min(1, { message: "Пожалуйста, введите ваш телефон" }),
  consentPersonal: z.boolean().refine((val) => val === true, {
    message: "Необходимо согласие на обработку персональных данных",
  }),
  consentAds: z.boolean().optional(),
});

type HelpFormValues = z.infer<typeof helpFormSchema>;

export function HelpForm() {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const form = useForm<HelpFormValues>({
        resolver: zodResolver(helpFormSchema),
        defaultValues: {
            name: "",
            phone: "",
            consentPersonal: false,
            consentAds: false,
        },
    });

    async function onSubmit(data: HelpFormValues) {
        setIsSubmitting(true);
        try {
            const leadData = {
                name: data.name,
                phone: data.phone,
                model: 'Не указана',
                trim: 'Не указана',
                price: 0,
                createdAt: serverTimestamp(),
            };
            
            await addDoc(collection(db, "leads"), leadData);

            toast({
                title: "Заявка отправлена!",
                description: "Наш менеджер скоро свяжется с вами.",
            });
            form.reset();

        } catch (error) {
            console.error("Firestore submission error:", error); // Added for debugging
            toast({
                variant: "destructive",
                title: "Ошибка",
                description: "Не удалось отправить заявку. Проверьте консоль для деталей.",
            });
        } finally {
            setIsSubmitting(false);
        }
    }


  return (
    <Card className="w-full max-w-3xl mx-auto shadow-none border-t border-b-0 border-l-0 border-r-0 rounded-none py-12 bg-transparent">
      <CardHeader className="text-center px-0">
        <CardTitle className="text-3xl font-headline">НУЖНА ПОМОЩЬ С ВЫБОРОМ АВТОМОБИЛЯ?</CardTitle>
        <CardDescription>
          Оставьте свои контакты и наш менеджер проконсультирует вас по модельному ряду
        </CardDescription>
      </CardHeader>
      <CardContent className="px-0">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-md mx-auto space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Представьтесь*" {...field} />
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
                  <FormControl>
                    <Input placeholder="Телефон*" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <p className="text-xs text-muted-foreground">* - поля, отмеченные звездочкой, обязательны к заполнению</p>
             <FormField
              control={form.control}
              name="consentPersonal"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-xs">
                      Согласен на <a href="#" className="underline text-primary">обработку персональных данных</a> и с <a href="#" className="underline text-primary">политикой обработки персональных данных</a>
                    </FormLabel>
                     <FormMessage />
                  </div>
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="consentAds"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                     <FormLabel className="text-xs">
                      Я согласен(-на) получать <a href="#" className="underline text-primary">рекламно-информационные рассылки</a>
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                 {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Жду звонка
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
