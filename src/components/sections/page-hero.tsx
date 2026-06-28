"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { imageSrc, muharramImages } from "@/lib/muharram-images";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  title: string;
  description?: string;
  eyebrow?: string;
  image?: string;
  imageAlt?: string;
  objectPosition?: string;
  className?: string;
  children?: React.ReactNode;
};

export function PageHero({
  title,
  description,
  eyebrow,
  image = muharramImages.defaultHero,
  imageAlt = "Muharram — Masjid Hayat",
  objectPosition = "center center",
  className,
  children,
}: PageHeroProps) {
  return (
    <section className={cn("relative flex min-h-[55vh] items-end overflow-hidden pt-16", className)}>
      <Image
        src={imageSrc(image)}
        alt={imageAlt}
        fill
        priority
        className="object-cover"
        style={{ objectPosition }}
        sizes="100vw"
      />
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        <motion.div
          initial={false}
          animate={{ opacity: 1 }}
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
