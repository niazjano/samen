import type { Metadata } from "next";

import { FormSection } from "@/components/forms/form-section";
import { FadeIn } from "@/components/motion/fade-in";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/sections/section";
import { muharramImages } from "@/lib/muharram-images";
import { tallyForms } from "@/lib/tally-forms";

export const metadata: Metadata = {
  title: "Ta en roll",
};

export default function VolunteerPage() {
  return (
    <>
      <PageHero
        eyebrow="Engagemang"
        title="Vill du göra skillnad?"
        description="Alla är välkomna att ansöka om en roll. Det spelar ingen roll om du har tidigare erfarenhet eller inte."
        image={muharramImages.community}
        imageAlt="Gemenskap och engagemang under Muharram"
        objectPosition="center center"
      />
      <Section className="py-12">
        <FadeIn>
          <p className="mx-auto max-w-2xl text-center leading-relaxed text-muted-foreground">
            Vill du hjälpa till före, under eller efter Muharram? Vi välkomnar alla som vill bidra med
            sin tid, sina kunskaper eller sitt engagemang för att göra Majlis så välorganiserad och
            framgångsrik som möjligt.
          </p>
        </FadeIn>
      </Section>
      <FormSection
        title="🤲 Anmäl dig för Khidmat i Imam Husayns (ع) väg"
        formId={tallyForms.volunteer.id}
        formTitle={tallyForms.volunteer.title}
      />
    </>
  );
}
