import type { Metadata } from "next";

import { PageHero } from "@/components/sections/page-hero";
import { SwishSection } from "@/components/sections/swish-section";
import { Section } from "@/components/sections/section";
import { FadeIn } from "@/components/motion/fade-in";

export const metadata: Metadata = {
  title: "Stöd oss",
};

export default function SupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Stöd"
        title="Stöd vårt arbete"
        description="Varje bidrag hjälper oss att skapa en tryggare framtid för våra ungdomar."
        image="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1920&q=80"
      />
      <Section>
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="leading-relaxed text-muted-foreground">
              Som ideell organisation är vi beroende av våra medlemmar, volontärer och generösa
              givare. Ditt stöd finansierar mentorskap, läxhjälp, sportaktiviteter och
              gemenskapsevenemang som förändrar liv.
            </p>
          </div>
        </FadeIn>
      </Section>
      <SwishSection />
    </>
  );
}
