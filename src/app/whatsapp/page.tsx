import type { Metadata } from "next";

import { FormSection } from "@/components/forms/form-section";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/sections/section";
import { muharramImages } from "@/lib/muharram-images";
import { tallyForms } from "@/lib/tally-forms";

export const metadata: Metadata = {
  title: "Få tillgång till WhatsApp-gruppen",
};

export default function WhatsAppPage() {
  return (
    <>
      <PageHero
        eyebrow="Kommunikation"
        title="WhatsApp-gruppen"
        description="För att hålla kommunikationen organiserad använder Masjid Hayat en officiell WhatsApp-grupp."
        image={muharramImages.whatsapp}
        imageAlt="Muharram — Masjid Hayat"
      />
      <Section className="py-12">
        <p className="mx-auto max-w-2xl text-center leading-relaxed text-muted-foreground">
          Ansök om tillgång till Masjid Hayats officiella WhatsApp-grupp för att ta del av viktig
          information, uppdateringar och meddelanden inför och under Muharram.
        </p>
      </Section>
      <FormSection
        title="Få tillgång till WhatsApp-gruppen"
        formId={tallyForms.whatsapp.id}
        formTitle={tallyForms.whatsapp.title}
      />
    </>
  );
}
