import Link from "next/link";

import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/sections/section";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <PageHero eyebrow="404" title="Sidan hittades inte" description="Sidan du söker finns inte eller har flyttats." />
      <Section className="py-12">
        <div className="text-center">
          <Button render={<Link href="/" />} className="rounded-full bg-forest" nativeButton={false}>
            Tillbaka till startsidan
          </Button>
        </div>
      </Section>
    </>
  );
}
