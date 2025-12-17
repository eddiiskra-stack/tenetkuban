"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function HelpForm() {
  return (
    <Card id="help-form" className="w-full max-w-3xl mx-auto shadow-none border-t border-b-0 border-l-0 border-r-0 rounded-none py-12 bg-transparent">
      <CardHeader className="text-center px-0">
        <CardTitle className="text-3xl font-headline">НУЖНА ПОМОЩЬ С ВЫБОРОМ АВТОМОБИЛЯ?</CardTitle>
        <CardDescription>
          Оставьте свои контакты и наш менеджер проконсультирует вас по модельному ряду
        </CardDescription>
      </CardHeader>
      <CardContent className="px-0">
        <iframe
          id="YandexForm-69426e14e010db1d42df9734"
          title="Tenet Lead Form"
          style={{ width: '100%', minHeight: '350px', border: 'none' }}
          src="https://forms.yandex.ru/cloud/69426e14e010db1d42df9734/?iframe=1"
          allowFullScreen
          allow="geolocation; microphone; camera"
        >
        </iframe>
      </CardContent>
    </Card>
  );
}
