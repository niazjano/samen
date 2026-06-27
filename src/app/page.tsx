import type { Metadata } from "next";

import { HeroSection } from "@/components/sections/home/hero-section";
import { ImpactSection } from "@/components/sections/home/impact-section";
import { MembershipPreviewSection } from "@/components/sections/home/membership-preview-section";
import { MissionSection } from "@/components/sections/home/mission-section";
import { NewsletterSection } from "@/components/sections/home/newsletter-section";
import { TestimonialsSection } from "@/components/sections/home/testimonials-section";
import { WhatWeDoSection } from "@/components/sections/home/what-we-do-section";

export const metadata: Metadata = {
  title: "Hem",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ImpactSection />
      <MissionSection />
      <WhatWeDoSection />
      <MembershipPreviewSection />
      <TestimonialsSection />
      <NewsletterSection />
    </>
  );
}
