"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CookieIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function CookieConsent({
  variant = "default",
  demo = false,
  onAcceptCallback = () => {},
  onDeclineCallback = () => {},
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [hide, setHide] = useState(false);

  const accept = () => {
    setIsOpen(false);
    document.cookie =
      "cookieConsent=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    setTimeout(() => {
      setHide(true);
    }, 700);
    onAcceptCallback();
  };

  const decline = () => {
    setIsOpen(false);
    setTimeout(() => {
      setHide(true);
    }, 700);
    onDeclineCallback();
  };

  useEffect(() => {
    try {
      setIsOpen(true);
      if (document.cookie.includes("cookieConsent=true")) {
        if (!demo) {
          setIsOpen(false);
          setTimeout(() => {
            setHide(true);
          }, 700);
        }
      }
    } catch (e) {
      // console.log("Error: ", e);
    }
  }, []);

  return variant != "small" ? (
    <div
      className={cn(
        "fixed z-200 bottom-0 left-0 right-0 sm:left-4 sm:bottom-4 w-full sm:max-w-md duration-700",
        !isOpen
          ? "transition-[opacity,transform] translate-y-8 opacity-0"
          : "transition-[opacity,transform] translate-y-0 opacity-100",
        hide && "hidden"
      )}
    >
      <div className="bg-background rounded-md m-3 border border-border shadow-lg">
        <div className="grid gap-2">
          <div className="border-b border-border h-14 flex items-center justify-between p-4">
            <h1 className="text-lg font-medium">Nous utilisons des cookies</h1>
            <CookieIcon className="h-[1.2rem] w-[1.2rem]" />
          </div>
          <div className="p-4">
            <p className="text-sm font-normal text-start">
              Nous utilisons des cookies pour garantir la meilleure expérience
              sur notre site web. Pour plus d'informations sur l'utilisation des
              cookies, veuillez consulter notre politique de cookies.
              <br />
              <br />
              <span className="text-xs">
                En cliquant sur "
                <span className="font-medium opacity-80">Accepter</span>
                ", vous acceptez notre utilisation des cookies.
              </span>
              <br />
              <a href="#" className="text-xs underline">
                En savoir plus.
              </a>
            </p>
          </div>
          <div className="flex gap-2 p-4 py-5 border-t border-border">
            <Button onClick={accept} className="w-full">
              Accepter
            </Button>
            <Button onClick={decline} className="w-full" variant="secondary">
              Refuser
            </Button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div
      className={cn(
        "fixed z-200 bottom-0 left-0 right-0 sm:left-4 sm:bottom-4 w-full sm:max-w-md duration-700",
        !isOpen
          ? "transition-[opacity,transform] translate-y-8 opacity-0"
          : "transition-[opacity,transform] translate-y-0 opacity-100",
        hide && "hidden"
      )}
    >
      <div className="m-3 bg-background border border-border rounded-lg">
        <div className="flex items-center justify-between p-3">
          <h1 className="text-lg font-medium">Nous utilisons des cookies</h1>
          <CookieIcon className="h-[1.2rem] w-[1.2rem]" />
        </div>
        <div className="p-3 -mt-2">
          <p className="text-sm text-left text-muted-foreground">
            Nous utilisons des cookies pour garantir la meilleure expérience sur
            notre site web. Pour plus d'informations sur la manière dont nous
            utilisons les cookies, veuillez consulter notre politique en matière
            de cookies.
          </p>
        </div>
        <div className="p-3 flex items-center gap-2 mt-2 border-t">
          <Button onClick={accept} className="w-full h-9 rounded-full">
            Accepter
          </Button>
          <Button
            onClick={decline}
            className="w-full h-9 rounded-full"
            variant="outline"
          >
            Refuser
          </Button>
        </div>
      </div>
    </div>
  );
}
