"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card } from "@/components/ui/card";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem("cookies_accepted");
    if (!cookiesAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookies_accepted", "true");
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <Card className="fixed bottom-4 right-4 z-50 w-full max-w-md p-6 shadow-lg">
      <div className="flex flex-col items-start gap-4">
        <p className="text-sm text-muted-foreground">
          Мы используем файлы cookie для улучшения работы сайта и анализа трафика.
          Продолжая использовать сайт, вы соглашаетесь с нашей{" "}
          <Link href="/privacy-policy" className="underline hover:text-primary">
            Политикой конфиденциальности
          </Link>
          .
        </p>
        <Button onClick={handleAccept} className="w-full sm:w-auto">
          Согласен
        </Button>
      </div>
    </Card>
  );
}
