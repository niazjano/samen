import type { Metadata } from "next";

import { PageHero } from "@/components/sections/page-hero";
import { SwishSection } from "@/components/sections/swish-section";
import { Section } from "@/components/sections/section";
import { FadeIn } from "@/components/motion/fade-in";

export const metadata: Metadata = {
  title: "Stöd Masjid Hayat",
};

export default function SupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Donation"
        title="Stöd Masjid Hayat"
        description="Ditt bidrag hjälper oss att arrangera en välorganiserad Majlis under Muharram."
        image="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1920&q=80"
      />
      <Section>
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="leading-relaxed text-muted-foreground">
              Dina donationer finansierar lokaler, teknik, välkomnande och allt som behövs för en
              professionell och meningsfull Muharram-upplevelse. Varje bidrag, stort som litet,
              gör skillnad.
            </p>
          </div>
        </FadeIn>
      </Section>
      <SwishSection />
    </>
  );
}
