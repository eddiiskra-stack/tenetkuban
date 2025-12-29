import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Script from "next/script";

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
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=106067819', 'ym');

            ym(106067819, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
          `}
        </Script>
        <noscript><div><img src="https://mc.yandex.ru/watch/106067819" style={{position:'absolute', left:'-9999px'}} alt="" /></div></noscript>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
