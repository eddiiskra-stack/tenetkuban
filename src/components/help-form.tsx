"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Send } from "lucide-react";
import Link from "next/link";

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.543-.57-1.49-.57-1.49s-.543-.516-1.146-.516a2.478 2.478 0 0 0-1.518.247c-.545.247-1.146.662-1.46 1.177-.315.516-.57 1.177-.57 1.963 0 1.177.57 2.292 1.46 3.23.89.938 1.995 1.62 3.23 2.292.543.247 1.146.39 1.59.39.802 0 1.518-.247 2.063-.516.545-.27.99-.662.99-1.177s-.125-1.177-1.46-1.963zM23.024 10.326c-1.39-1.39-3.23-2.292-5.32-2.292s-3.93.902-5.32 2.292c-1.39 1.39-2.292 3.23-2.292 5.32s.902 3.93 2.292 5.32c1.39 1.39 3.23 2.292 5.32 2.292 2.09 0 3.93-.902 5.32-2.292s2.292-3.23 2.292-5.32c.002-2.09-.9-3.93-2.292-5.32zM17.695 24.5c-1.898 0-3.67-.71-5.044-2.084l-3.323 1.177 1.177-3.323c-1.373-1.373-2.084-3.146-2.084-5.044s.71-3.67 2.084-5.044c1.373-1.374 3.146-2.084 5.044-2.084 1.898 0 3.67.71 5.044 2.084 1.374 1.374 2.084 3.146 2.084 5.044s-.71 3.67-2.084 5.044c-1.373 1.373-3.146 2.084-5.044 2.084z"
            fill="currentColor"
        />
    </svg>
);

export function HelpForm() {
  return (
    <Card id="help-form" className="w-full max-w-3xl mx-auto shadow-none border-t border-b-0 border-l-0 border-r-0 rounded-none py-12 bg-transparent">
      <CardHeader className="text-center px-0">
        <CardTitle className="text-3xl font-headline">НУЖНА ПОМОЩЬ С ВЫБОРОМ АВТОМОБИЛЯ?</CardTitle>
        <CardDescription>
          Выберите удобный для вас способ связи, и мы ответим на все ваши вопросы
        </CardDescription>
      </CardHeader>
      <CardContent className="px-0 flex justify-center">
        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg">Связаться с нами</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md bg-card">
            <DialogHeader>
              <DialogTitle className="text-center text-2xl font-bold font-headline">Свяжитесь с нами</DialogTitle>
              <p className="text-center text-muted-foreground pt-2">
                Выберите удобный для вас способ связи, и мы ответим на все ваши вопросы
              </p>
            </DialogHeader>
            <div className="flex flex-col space-y-4 py-4">
              <Button asChild size="lg" variant="secondary" className="h-14 text-base">
                <a href="https://max.ru/u/f9LHodD0cOIv5UtDF0mDkP2WgLFqm4eKONNGM9pIF0HMC0-ndd6LyZc22UA" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full">
                   Написать в MAX
                </a>
              </Button>
              <Button asChild size="lg" className="h-14 text-base">
                <a href="https://wa.me/79631625082" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full">
                  <WhatsAppIcon className="mr-2 h-6 w-6" />
                  WhatsApp
                </a>
              </Button>
               <Button asChild size="lg" variant="outline" className="h-14 text-base">
                <a href="https://t.me/webgazgold" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full">
                  <Send className="mr-2 h-6 w-6" />
                  Telegram
                </a>
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}
