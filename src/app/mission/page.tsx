import type { Metadata } from "next";

import { MissionSection } from "@/components/sections/home/mission-section";
import { PageHero } from "@/components/sections/page-hero";

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
        image="https://images.unsplash.com/photo-1509099836639-18ba02e776ef?w=1920&q=80"
      />
      <MissionSection />
    </>
  );
}
