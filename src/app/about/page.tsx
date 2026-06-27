import type { Metadata } from "next";
import Image from "next/image";

import { FadeIn } from "@/components/motion/fade-in";
import { PageHero } from "@/components/sections/page-hero";
import { Section, SectionHeader } from "@/components/sections/section";

export const metadata: Metadata = {
  title: "Om oss",
  description: "Lär känna SAMEN — en modern rörelse för unga i utsatta områden.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Om oss"
        title="Vi är SAMEN"
        description="En ideell organisation som investerar i unga människor, gemenskap och en tryggare framtid i Näsby och beyond."
      />
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <SectionHeader
              align="left"
              title="Vår historia"
              description="SAMEN föddes ur en enkel övertygelse: att varje ung människa förtjänar en chans. I Näsby såg vi unga som saknade meningsfulla alternativ — och vi bestämde oss för att förändra det."
              className="mb-0"
            />
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Idag är vi en växande rörelse av volontärer, medlemmar och partners som tillsammans
              bygger trygga miljöer, erbjuder mentorskap och skapar möjligheter för hundratals
              unga varje år.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-soft">
              <Image
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=80"
                alt="Ungdomar i gemenskap"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
        </div>
      </Section>
      <Section className="bg-muted/40">
        <SectionHeader
          title="Våra värderingar"
          description="Transparens, gemenskap och hopp genomsyrar allt vi gör."
        />
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { title: "Transparens", desc: "Vi är öppna med hur vi arbetar, beslutar och använder resurser." },
            { title: "Gemenskap", desc: "Tillsammans är vi starkare. Ingen ska stå ensam." },
            { title: "Hopp", desc: "Vi tror på varje ung persons potential att forma sin framtid." },
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
    </>
  );
}
