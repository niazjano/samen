import type { Metadata } from "next";

import { FormSection } from "@/components/forms/form-section";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/sections/section";
import { tallyForms } from "@/lib/tally-forms";

export const metadata: Metadata = {
  title: "Frågor",
};

export default function QuestionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Ställ en fråga"
        description="Om du har frågor är du varmt välkommen att kontakta oss."
      />
      <Section className="py-12">
        <p className="mx-auto max-w-2xl text-center leading-relaxed text-muted-foreground">
          Har du frågor om medlemskap, Muharram eller verksamheten? Fyll i formuläret nedan så
          återkommer vi till dig så snart vi kan.
        </p>
      </Section>
      <FormSection
        title="Kontakta oss"
        description="Vi svarar så snart som möjligt."
        formId={tallyForms.questions.id}
        formTitle={tallyForms.questions.title}
      />
    </>
  );
}
