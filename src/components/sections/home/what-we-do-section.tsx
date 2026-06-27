import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  Dumbbell,
  GraduationCap,
  HandHeart,
  PartyPopper,
  Trophy,
  Users,
  BookMarked,
} from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { Section, SectionHeader } from "@/components/sections/section";

const activities: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: Users, title: "Mentorskap", description: "Personligt stöd från engagerade mentorer." },
  { icon: BookMarked, title: "Läxhjälp", description: "Studiestöd i en trygg och inspirerande miljö." },
  { icon: Dumbbell, title: "Sport", description: "Idrott som bygger gemenskap och självförtroende." },
  { icon: PartyPopper, title: "Gemenskapsevenemang", description: "Aktiviteter som förenar grannskapet." },
  { icon: GraduationCap, title: "Utbildning", description: "Workshops och kurser för personlig utveckling." },
  { icon: Briefcase, title: "Karriärstöd", description: "Vägledning mot jobb, praktik och framtid." },
  { icon: HandHeart, title: "Volontärprogram", description: "Engagemang som förändrar liv." },
  { icon: Trophy, title: "Ledarskapsutveckling", description: "Vi formar morgondagens ledare." },
];

export function WhatWeDoSection() {
  return (
    <Section className="bg-muted/40">
      <SectionHeader
        eyebrow="Vad vi gör"
        title="Program som förändrar liv"
        description="Från läxhjälp till ledarskapsutveckling — vi erbjuder meningsfulla aktiviteter för alla åldrar."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {activities.map((item, i) => (
          <FadeIn key={item.title} delay={i * 0.04}>
            <div className="group rounded-2xl border border-border/60 bg-card p-6 shadow-soft transition-all hover:border-gold/40 hover:shadow-glow">
              <item.icon className="size-5 text-gold" strokeWidth={1.75} />
              <h3 className="mt-4 font-semibold">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
