import Link from "next/link";
import { Car, Phone } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Car className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline text-lg">Tenet</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link
              href="#calculator"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Калькулятор
            </Link>
            <Link
              href="#"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Модели
            </Link>
            <Link
              href="#"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Контакты
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
           <a href="tel:+78619929292" className="hidden sm:flex items-center text-sm font-medium transition-colors hover:text-primary">
              <Phone className="mr-2 h-4 w-4" />
              +7 (861) 992-92-92
           </a>
        </div>
      </div>
    </header>
  );
}
