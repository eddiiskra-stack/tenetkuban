import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: {
    template: "%s | TENET Сервис Кубань - Официальный дилер в Краснодаре",
    default: "TENET Сервис Кубань - Официальный дилер в Краснодаре",
  },
  description:
    "Купите новые автомобили TENET Сервис Кубань 4, 7, 8, 9 у официального дилера TENET Сервис Кубань в Краснодаре. Выгодные цены, лучшие комплектации и специальные предложения.",
  keywords: [
    "автомобили TENET Сервис Кубань",
    "купить TENET Сервис Кубань в Краснодаре",
    "официальный дилер TENET Сервис Кубань",
    "цена Tenet 4",
    "Tenet 7",
    "Tenet 8",
    "Tenet 9",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
