"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { NavLink } from "@/components/navigation/nav-link";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { mainNav } from "@/lib/navigation";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function MobileNav({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn("flex items-center gap-1 lg:hidden", className)}>
      <ThemeToggle className="md:hidden" />
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger
          render={
            <Button variant="ghost" size="icon" className="size-9 rounded-full" aria-label="Öppna meny" />
          }
        >
          <Menu className="size-5" />
        </SheetTrigger>
        <SheetContent side="right" className="w-full max-w-sm">
          <SheetHeader>
            <SheetTitle>{siteConfig.name}</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-1 px-4 py-6" aria-label="Mobilnavigation">
            {mainNav.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-3 text-base"
                onClick={() => setOpen(false)}
              >
                {item.title}
              </NavLink>
            ))}
            <Button
              render={<Link href="/member" />}
              className="mt-4 w-full rounded-xl bg-forest"
              nativeButton={false}
              onClick={() => setOpen(false)}
            >
              Bli medlem
            </Button>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
