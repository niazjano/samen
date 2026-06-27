import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Crown,
  Heart,
  Shield,
  Sparkles,
  Users,
} from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { Section, SectionHeader } from "@/components/sections/section";

const missions: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Shield,
    title: "Förebygga ungdomskriminalitet",
    description: "Vi skapar trygga miljöer och meningsfulla alternativ som håller unga borta från kriminalitet.",
  },
  {
    icon: Sparkles,
    title: "Skapa möjligheter",
    description: "Genom program och aktiviteter öppnar vi dörrar till utbildning, arbete och personlig utveckling.",
  },
  {
    icon: BookOpen,
    title: "Stödja utbildning",
    description: "Läxhjälp, mentorskap och studiestöd som ger unga verktyg att lyckas i skolan.",
  },
  {
    icon: Users,
    title: "Stärka gemenskapen",
    description: "Vi bygger broar mellan generationer, kulturer och grannskap i utsatta områden.",
  },
  {
    icon: Crown,
    title: "Stärka framtidens ledare",
    description: "Vi investerar i unga ledare som formar morgondagens samhälle.",
  },
  {
    icon: Heart,
    title: "Sprida hopp",
    description: "Varje ung människa förtjänar att känna att framtiden är full av möjligheter.",
  },
];

export function MissionSection() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Vårt uppdrag"
        title="Det vi kämpar för varje dag"
        description="Sex pelare som styr allt vi gör — från Näsby till hela Sverige."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {missions.map((item, i) => (
          <FadeIn key={item.title} delay={i * 0.06}>
            <div className="group h-full rounded-3xl border border-border/60 bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
              <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-forest/10 text-forest transition-colors group-hover:bg-forest group-hover:text-primary-foreground">
                <item.icon className="size-5" strokeWidth={1.75} />
              </div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
