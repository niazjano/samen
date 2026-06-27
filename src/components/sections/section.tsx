import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section id={id} className={cn("py-20 sm:py-28 lg:py-32", className)} {...props}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={cn(
        "mb-14 max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold tracking-widest text-gold uppercase">{eyebrow}</p>
      )}
      <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">{title}</h2>
      {description && (
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">{description}</p>
      )}
    </div>
  );
}
