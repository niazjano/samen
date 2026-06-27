"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  CircleHelp,
  Heart,
  MessageCircle,
  MessageSquare,
  Shield,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

import { FadeIn } from "@/components/motion/fade-in";
import { Section, SectionHeader } from "@/components/sections/section";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type ServiceCardData = {
  icon: LucideIcon;
  title: string;
  description: string;
  buttonLabel: string;
  href: string;
  price?: string;
  priceNote?: string;
};

const serviceCards: ServiceCardData[] = [
  {
    icon: Users,
    title: "Bli medlem",
    description: "Bli medlem i Masjid Hayat och stöd verksamheten året runt.",
    price: "100 kr/månad · Familj 150 kr/månad",
    priceNote: "Ingen bindningstid.",
    buttonLabel: "Bli medlem",
    href: "/member",
  },
  {
    icon: Shield,
    title: "Ta en roll",
    description: "Hjälp till före, under eller efter Muharram.",
    buttonLabel: "Ansök",
    href: "/volunteer",
  },
  {
    icon: MessageSquare,
    title: "Lämna en synpunkt",
    description: "Har du en idé eller ett förbättringsförslag?",
    buttonLabel: "Lämna synpunkt",
    href: "/feedback",
  },
  {
    icon: CircleHelp,
    title: "Ställ en fråga",
    description: "Har du frågor om medlemskap, Muharram eller verksamheten?",
    buttonLabel: "Kontakta oss",
    href: "/questions",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp-gruppen",
    description:
      "Ansök om tillgång till Masjid Hayats officiella WhatsApp-grupp för viktig information och uppdateringar.",
    buttonLabel: "Ansök om tillgång",
    href: "/whatsapp",
  },
  {
    icon: Heart,
    title: "Stöd Masjid Hayat",
    description:
      "Ditt bidrag hjälper oss att arrangera en välorganiserad Majlis under Muharram.",
    buttonLabel: "Donera",
    href: "/support",
  },
];

function ServiceCard({ card, index }: { card: ServiceCardData; index: number }) {
  const Icon = card.icon;

  return (
    <FadeIn delay={index * 0.06}>
      <motion.div
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="group flex h-full flex-col rounded-3xl border border-border/60 bg-card p-8 shadow-soft transition-shadow duration-300 hover:shadow-glow"
      >
        <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-forest/10 text-forest transition-colors duration-300 group-hover:bg-forest group-hover:text-primary-foreground">
          <Icon className="size-5" strokeWidth={1.75} />
        </div>
        <h3 className="text-xl font-semibold">{card.title}</h3>
        <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{card.description}</p>
        {card.price && (
          <div className="mt-4 rounded-2xl bg-muted/50 px-4 py-3">
            <p className="font-semibold text-forest">{card.price}</p>
            {card.priceNote && (
              <p className="mt-1 text-sm text-muted-foreground">{card.priceNote}</p>
            )}
          </div>
        )}
        <Button
          render={<Link href={card.href} />}
          className={cn("mt-6 w-full rounded-full bg-forest hover:bg-forest-light")}
          nativeButton={false}
        >
          {card.buttonLabel}
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Button>
      </motion.div>
    </FadeIn>
  );
}

export function ServiceHubSection() {
  return (
    <Section id="tjanster" className="scroll-mt-24 bg-muted/40">
      <SectionHeader
        title="Hur kan vi hjälpa dig?"
        description="Välj det du behöver — allt är samlat på ett ställe för en smidig upplevelse."
      />
      <div className="grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {serviceCards.map((card, index) => (
          <ServiceCard key={card.title} card={card} index={index} />
        ))}
      </div>
    </Section>
  );
}
