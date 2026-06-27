"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { ActionLink } from "@/components/navigation/action-link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=80"
        alt="Ungdomar tillsammans i gemenskap"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.72_0.1_85/0.12),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 pt-24 text-center sm:px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-sm font-semibold tracking-[0.2em] text-gold uppercase"
        >
          För unga. För gemenskap. För framtiden.
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl font-semibold leading-[1.1] text-primary-foreground sm:text-5xl lg:text-7xl"
        >
          Tillsammans bygger vi en{" "}
          <span className="text-gradient-gold">tryggare framtid.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-primary-foreground/85 sm:text-xl"
        >
          SAMEN arbetar för att förebygga kriminalitet, stärka gemenskapen och skapa möjligheter
          för barn och ungdomar i Näsby och andra utsatta områden.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button
            render={<Link href="/become-member" />}
            size="lg"
            className="h-12 rounded-full bg-gold px-8 text-base font-semibold text-forest hover:bg-gold-light"
            nativeButton={false}
          >
            Bli medlem
          </Button>
          <Button
            render={<ActionLink href="/support#swish" />}
            variant="outline"
            size="lg"
            className="h-12 rounded-full border-primary-foreground/30 bg-primary-foreground/10 px-8 text-base text-primary-foreground backdrop-blur-sm hover:bg-primary-foreground/20"
            nativeButton={false}
          >
            Stöd oss
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
