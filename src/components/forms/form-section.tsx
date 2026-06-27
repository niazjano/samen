import { FadeIn } from "@/components/motion/fade-in";
import { TallyEmbed } from "@/components/forms/tally-embed";
import { Section, SectionHeader } from "@/components/sections/section";
import { cn } from "@/lib/utils";

export function FormSection({
  id = "form",
  title,
  description,
  formId,
  formTitle,
  className,
}: {
  id?: string;
  title: string;
  description?: string;
  formId: string;
  formTitle: string;
  className?: string;
}) {
  return (
    <Section id={id} className={cn("scroll-mt-24 bg-muted/30", className)} aria-label={title}>
      <SectionHeader title={title} description={description} />
      <FadeIn>
        <div className="mx-auto max-w-2xl overflow-hidden rounded-3xl border border-border/60 bg-card p-3 shadow-soft sm:p-5">
          <TallyEmbed formId={formId} title={formTitle} />
        </div>
      </FadeIn>
    </Section>
  );
}
