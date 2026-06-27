import type { Metadata } from "next";

import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/sections/section";
import { FadeIn } from "@/components/motion/fade-in";

export const metadata: Metadata = { title: "Tillgänglighet" };

export default function AccessibilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Tillgänglighet"
        title="Webbplats för alla"
        description="Vi arbetar aktivt för att göra samen.se tillgänglig för alla användare."
      />
      <Section>
        <FadeIn>
          <div className="mx-auto max-w-3xl space-y-6 leading-relaxed text-muted-foreground">
            <p>Vi strävar efter att följa WCAG 2.1 nivå AA. Webbplatsen stödjer tangentbordsnavigering, skärmläsare och responsiv design.</p>
            <p>Om du stöter på tillgänglighetsproblem, kontakta oss gärna så att vi kan åtgärda det snabbt.</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Semantisk HTML och tydliga rubriker</li>
              <li>Alt-texter på bilder</li>
              <li>Tillräcklig färgkontrast</li>
              <li>Fokusindikatorer för tangentbordsanvändare</li>
              <li>Skipp-länk till huvudinnehåll</li>
            </ul>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
