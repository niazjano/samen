"use client";

import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

import { DesktopNav } from "@/components/navigation/desktop-nav";
import { MobileNav } from "@/components/navigation/mobile-nav";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Header() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => setScrolled(latest > 24));

  return (
    <motion.header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass border-b border-border/50 shadow-soft" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-2.5 font-semibold tracking-tight">
          <span className="flex size-9 items-center justify-center rounded-xl bg-forest text-sm font-bold text-primary-foreground shadow-soft transition-transform group-hover:scale-105">
            S
          </span>
          <span className="hidden text-lg sm:inline">{siteConfig.name}</span>
        </Link>
        <DesktopNav />
        <div className="flex items-center gap-1">
          <ThemeToggle className="hidden md:inline-flex" />
          <Button
            render={<Link href="/become-member" />}
            size="sm"
            className="hidden rounded-full bg-forest px-4 hover:bg-forest-light md:inline-flex"
            nativeButton={false}
          >
            Bli medlem
          </Button>
          <MobileNav />
        </div>
      </div>
    </motion.header>
  );
}
