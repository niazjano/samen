import type { Metadata } from "next";

import { FormSection } from "@/components/forms/form-section";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/sections/section";
import { muharramImages } from "@/lib/muharram-images";
import { tallyForms } from "@/lib/tally-forms";

export const metadata: Metadata = {
  title: "Ställ din fråga",
};

export default function QuestionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Ställ en fråga"
        description="Om du har frågor är du varmt välkommen att kontakta oss."
        image={muharramImages.questions}
        imageAlt="Muharram — Masjid Hayat"
      />
      <Section className="py-12">
        <p className="mx-auto max-w-2xl text-center leading-relaxed text-muted-foreground">
          Har du frågor om medlemskap, Muharram, Majlis eller Masjid Hayats verksamhet? Skicka din
          fråga så återkommer vi så snart som möjligt.
        </p>
      </Section>
      <FormSection
        title="Ställ din fråga"
        formId={tallyForms.questions.id}
        formTitle={tallyForms.questions.title}
      />
    </>
  );
}
