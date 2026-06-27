import type { Metadata } from "next";

import { HeroSection } from "@/components/sections/home/hero-section";
import { ServiceHubSection } from "@/components/sections/home/service-hub-section";

export const metadata: Metadata = {
  title: "Hem",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServiceHubSection />
    </>
  );
}
