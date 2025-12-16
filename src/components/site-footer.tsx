import { Car, Github, MapPin, Phone, Twitter, Youtube } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-card text-card-foreground">
      <div className="container py-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Car className="h-6 w-6 text-primary" />
            <p className="text-center text-sm leading-loose md:text-left">
              © {new Date().getFullYear()} TENET Сервис Кубань. Официальный дилер в Краснодаре.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 text-sm text-muted-foreground md:items-end">
              <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <a href="tel:+79631625082" className="hover:text-primary">+7 (963) 162-50-82</a>
              </div>
              <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Краснодар, ул. Горячеключевская, д. 2, к.1</span>
              </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t">
            <p className="text-xs text-muted-foreground text-center">
            Вся представленная на сайте информация, касающаяся стоимости автомобилей, аксессуаров* и сервисного обслуживания, носит информационный характер и не является публичной офертой, определяемой положениями ст. 437 (2) ГК РФ. Для получения подробной информации обращайтесь в автосалон "TENET Сервис Кубань" расположенный по адресу Краснодар, ул. Горячеключевская, д. 2, к.1. Опубликованная на данном сайте информация может быть изменена в любое время без предварительного уведомления. * Стоимость аксессуаров указана без учета стоимости установки.
            </p>
        </div>
      </div>
    </footer>
  );
}