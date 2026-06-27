"use client";

import Link from "next/link";
import { useState, useSyncExternalStore } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function useMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

function getConsent() {
  return localStorage.getItem("samen-cookie-consent");
}

export function CookieBanner() {
  const mounted = useMounted();
  const [accepted, setAccepted] = useState(false);

  function accept() {
    localStorage.setItem("samen-cookie-consent", "accepted");
    setAccepted(true);
  }

  if (!mounted || getConsent() === "accepted" || accepted) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie-meddelande"
      className={cn(
        "fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-lg rounded-2xl border border-border/60 p-6 shadow-soft glass sm:inset-x-auto sm:right-6"
      )}
    >
      <p className="text-sm leading-relaxed text-muted-foreground">
        Vi använder cookies för att förbättra din upplevelse. Läs mer i vår{" "}
        <Link href="/privacy-policy" className="font-medium text-foreground underline-offset-4 hover:underline">
          integritetspolicy
        </Link>
        .
      </p>
      <div className="mt-4 flex gap-3">
        <Button onClick={accept} className="rounded-full bg-forest" size="sm">
          Acceptera
        </Button>
        <Button
          render={<Link href="/privacy-policy" />}
          variant="outline"
          size="sm"
          className="rounded-full"
          nativeButton={false}
        >
          Läs mer
        </Button>
      </div>
    </div>
  );
}
