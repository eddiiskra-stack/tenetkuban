import { Car, Github, Twitter, Youtube } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-card text-card-foreground">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Car className="h-6 w-6 text-primary" />
          <p className="text-center text-sm leading-loose md:text-left">
            © {new Date().getFullYear()} Tenet. Официальный дилер в Краснодаре.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <Twitter className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <Youtube className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
          </a>
        </div>
      </div>
    </footer>
  );
}
