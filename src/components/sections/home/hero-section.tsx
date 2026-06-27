"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { ActionLink } from "@/components/navigation/action-link";
import { Button } from "@/components/ui/button";

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

export function HeroSection() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=80"
        alt="Ungdomar tillsammans i gemenskap"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.72_0.1_85/0.12),transparent_60%)]" />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 pt-24 pb-20 text-center sm:px-6">
        <motion.p
          {...fadeIn}
          transition={{ duration: 0.6 }}
          className="mb-6 text-sm font-semibold tracking-[0.2em] text-gold uppercase"
        >
          För Muharram. För gemenskapen. För Masjid Hayat.
        </motion.p>
        <motion.div
          {...fadeIn}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h1 className="text-pretty text-4xl font-semibold leading-[1.2] text-primary-foreground sm:text-5xl lg:text-7xl">
            <span className="block">Tillsammans för en</span>
            <span className="block text-gold">meningsfull Muharram.</span>
          </h1>
        </motion.div>
        <motion.p
          {...fadeIn}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/85 sm:mt-8 sm:text-xl"
        >
          Masjid Hayats digitala plattform — bli medlem, engagera dig, ställ frågor och stöd
          verksamheten före och under Muharram.
        </motion.p>
        <motion.div
          {...fadeIn}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:mt-10 sm:flex-row"
        >
          <Button
            render={<Link href="/member" />}
            size="lg"
            className="h-12 w-full rounded-full bg-gold px-8 text-base font-semibold text-forest hover:bg-gold-light sm:w-auto"
            nativeButton={false}
          >
            Bli medlem
          </Button>
          <Button
            render={<ActionLink href="/support#swish" />}
            variant="outline"
            size="lg"
            className="h-12 w-full rounded-full border-primary-foreground/30 bg-primary-foreground/10 px-8 text-base text-primary-foreground backdrop-blur-sm hover:bg-primary-foreground/20 sm:w-auto"
            nativeButton={false}
          >
            Stöd Masjid Hayat
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ChevronDown className="size-6 text-primary-foreground/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
