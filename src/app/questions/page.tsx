import type { Metadata } from "next";

import { FormSection } from "@/components/forms/form-section";
import { FaqSection } from "@/components/sections/faq-section";
import { PageHero } from "@/components/sections/page-hero";
import { tallyForms } from "@/lib/tally-forms";

export const metadata: Metadata = {
  title: "Frågor",
};

export default function QuestionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Frågor & svar"
        title="Har du en fråga?"
        description="Här hittar du svar på vanliga frågor. Hittar du inte det du söker? Ställ din fråga via formuläret nedan."
      />
      <FaqSection />
      <FormSection
        title="Ställ din fråga"
        description="Frågor om medlemskap, aktiviteter, volontärskap eller partnerskap? Vi svarar inom 2 arbetsdagar."
        formId={tallyForms.questions.id}
        formTitle={tallyForms.questions.title}
      />
    </>
  );
}
