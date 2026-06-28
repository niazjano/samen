"use client";

import Image from "next/image";

import { FadeIn } from "@/components/motion/fade-in";
import { Section, SectionHeader } from "@/components/sections/section";
import { galleryImages, muharramSrc } from "@/lib/muharram-images";

export function GallerySection() {
  return (
    <Section id="galleri" className="scroll-mt-24 bg-muted/40">
      <SectionHeader
        title="Muharram i bild"
        description="Ögonblick från majlis, helgedomar och gemenskap — en visuell resa genom Muharram."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {galleryImages.map((filename, index) => (
          <FadeIn key={filename} delay={index * 0.03}>
            <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-border/60 bg-card shadow-soft sm:aspect-[3/4]">
              <Image
                src={muharramSrc(filename)}
                alt={`Muharram — bild ${index + 1}`}
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
