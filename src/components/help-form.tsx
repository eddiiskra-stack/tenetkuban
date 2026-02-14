"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Link from "next/link";


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
                  WhatsApp
                </a>
              </Button>
               <Button asChild size="lg" variant="outline" className="h-14 text-base">
                <a href="https://t.me/webgazgold" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full">
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
