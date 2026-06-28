import type { Metadata } from "next";
import Image from "next/image";

import { FadeIn } from "@/components/motion/fade-in";
import { GallerySection } from "@/components/sections/gallery-section";
import { PageHero } from "@/components/sections/page-hero";
import { Section, SectionHeader } from "@/components/sections/section";
import { imageSrc, muharramImages } from "@/lib/muharram-images";

export const metadata: Metadata = {
  title: "Om oss",
  description: "Lär känna Masjid Hayat — en gemenskap som organiserar Muharram tillsammans.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Om oss"
        title="Masjid Hayat"
        description="En gemenskap som samlas kring Muharram — organiserad, välkomnande och driven av engagemang."
        image={muharramImages.aboutHero}
        imageAlt="Helgedom med gyllene minaret — Muharram"
        objectPosition="center 20%"
      />
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <SectionHeader
              align="left"
              title="Vår verksamhet"
              description="Masjid Hayat arbetar för att skapa en professionell, välorganiserad och hållbar Muharram-upplevelse för hela gemenskapen."
              className="mb-0"
            />
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Genom medlemskap, volontärskap och generöst stöd bygger vi tillsammans en plattform
              där alla kan bidra — före, under och efter Muharram. Vår digitala plattform gör det
              enkelt att engagera sig på det sätt som passar dig.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-soft">
              <Image
                src={imageSrc(muharramImages.aboutSection)}
                alt="Gyllene kalligrafi — Muharram"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
        </div>
      </Section>
      <Section className="bg-muted/40">
        <SectionHeader
          title="Våra värderingar"
          description="Organisation, gemenskap och respekt genomsyrar allt vi gör."
        />
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            {
              title: "Organisation",
              desc: "Vi strävar efter en professionell och välplanerad verksamhet inför Muharram.",
            },
            {
              title: "Gemenskap",
              desc: "Tillsammans skapar vi en välkomnande miljö för alla.",
            },
            {
              title: "Transparens",
              desc: "Vi är öppna med hur vi arbetar och använder resurser.",
            },
          ].map((v, i) => (
            <FadeIn key={v.title} delay={i * 0.08}>
              <div className="rounded-3xl border border-border/60 bg-card p-8 shadow-soft">
                <h3 className="text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-muted-foreground">{v.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>
      <GallerySection />
    </>
  );
}
