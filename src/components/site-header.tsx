
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold font-headline text-lg">TENET Сервис Кубань</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/stock"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              в наличии
            </Link>
            <Link
              href="/models"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Модели
            </Link>
            <Link
              href="#contacts"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Контакты
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-6">
           <a href="tel:+79631625082" className="hidden sm:flex items-center text-sm font-medium transition-colors hover:text-primary">
              <Phone className="mr-2 h-4 w-4" />
              +7 (963) 162-50-82
           </a>
           <div className="hidden lg:flex items-center text-sm text-muted-foreground">
              <MapPin className="mr-2 h-4 w-4" />
              Краснодар, ул. Горячеключевская, д. 2, к.1
           </div>
        </div>
      </div>
    </header>
  );
}
