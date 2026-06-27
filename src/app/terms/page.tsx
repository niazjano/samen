import type { Metadata } from "next";

import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/sections/section";
import { FadeIn } from "@/components/motion/fade-in";

export const metadata: Metadata = { title: "Villkor" };

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Juridiskt" title="Användarvillkor" description="Villkor för användning av samen.se." />
      <Section>
        <FadeIn>
          <div className="mx-auto max-w-3xl space-y-6 leading-relaxed text-muted-foreground">
            <p>Genom att använda denna webbplats godkänner du dessa villkor. Innehållet tillhandahålls i informationssyfte.</p>
            <p>SAMEN ansvarar inte för skador som uppstår genom användning av webbplatsen. Externa länkar ansvarar sina respektive ägare för.</p>
            <p>Vi förbehåller oss rätten att uppdatera dessa villkor. Fortsatt användning efter ändringar innebär acceptans.</p>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
