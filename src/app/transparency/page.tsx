import type { Metadata } from "next";
import { FileText, Landmark, Scale, Target, Users } from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { PageHero } from "@/components/sections/page-hero";
import { Section, SectionHeader } from "@/components/sections/section";
import { muharramImages } from "@/lib/muharram-images";

export const metadata: Metadata = {
  title: "Transparens",
};

const items = [
  { icon: FileText, title: "Finansiella rapporter", status: "Kommer snart", desc: "Kvartalsvisa redovisningar av intäkter och utgifter." },
  { icon: Landmark, title: "Protokoll", status: "Kommer snart", desc: "Mötesprotokoll från styrelse och medlemsmöten." },
  { icon: Users, title: "Organisationsstruktur", status: "Publicerad", desc: "Styrelse, arbetsgrupper och ansvarsfördelning." },
  { icon: Scale, title: "Årsredovisningar", status: "Kommer snart", desc: "Fullständiga årsrapporter med resultat och mål." },
  { icon: Target, title: "Framtida mål", status: "Publicerad", desc: "Vår strategi och roadmap för kommande år." },
  { icon: Scale, title: "Uppförandekod & policyer", status: "Kommer snart", desc: "Riktlinjer som styr vårt arbete och vår kultur." },
];

export default function TransparencyPage() {
  return (
    <>
      <PageHero
        eyebrow="Transparens"
        title="Öppenhet i allt vi gör"
        description="Transparens är en av våra kärnvärderingar. Här delar vi hur vi arbetar, beslutar och använder resurser."
        image={muharramImages.transparency}
        imageAlt="Muharram — Masjid Hayat"
      />
      <Section>
        <SectionHeader
          title="Dokument & rapporter"
          description="Vi publicerar löpande material för att du ska kunna följa vårt arbete."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.05}>
              <div className="flex h-full flex-col rounded-3xl border border-border/60 bg-card p-6 shadow-soft">
                <item.icon className="size-5 text-gold" />
                <h3 className="mt-4 font-semibold">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{item.desc}</p>
                <span className="mt-4 inline-flex w-fit rounded-full bg-muted px-3 py-1 text-xs font-medium">
                  {item.status}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>
    </>
  );
}
