import type { Metadata } from "next";

import { MissionSection } from "@/components/sections/home/mission-section";
import { PageHero } from "@/components/sections/page-hero";
import { muharramImages } from "@/lib/muharram-images";

export const metadata: Metadata = {
  title: "Vårt uppdrag",
};

export default function MissionPage() {
  return (
    <>
      <PageHero
        eyebrow="Vårt uppdrag"
        title="En tryggare framtid för alla unga"
        description="Vi arbetar systematiskt för att förebygga kriminalitet, stärka utbildning och bygga gemenskaper där unga kan blomstra."
        image={muharramImages.mission}
        imageAlt="Karavan mot Karbala — Muharram"
        objectPosition="center center"
      />
      <MissionSection />
    </>
  );
}
