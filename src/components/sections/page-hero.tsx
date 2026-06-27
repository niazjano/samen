"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

type PageHeroProps = {
  title: string;
  description?: string;
  eyebrow?: string;
  image?: string;
  className?: string;
  children?: React.ReactNode;
};

export function PageHero({
  title,
  description,
  eyebrow,
  image = "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&q=80",
  className,
  children,
}: PageHeroProps) {
  return (
    <section className={cn("relative flex min-h-[55vh] items-end overflow-hidden pt-16", className)}>
      <Image src={image} alt="" fill priority className="object-cover" sizes="100vw" aria-hidden="true" />
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          {eyebrow && (
            <p className="mb-3 text-sm font-semibold tracking-widest text-gold uppercase">{eyebrow}</p>
          )}
          <h1 className="text-4xl font-semibold text-primary-foreground sm:text-5xl lg:text-6xl">{title}</h1>
          {description && (
            <p className="mt-5 text-lg leading-relaxed text-primary-foreground/85 sm:text-xl">{description}</p>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  );
}
