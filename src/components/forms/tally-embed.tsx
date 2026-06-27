"use client";

import { useEffect } from "react";

import { loadTallyEmbeds } from "@/components/forms/tally-provider";
import { cn } from "@/lib/utils";

type TallyEmbedProps = {
  formId: string;
  title: string;
  className?: string;
};

export function TallyEmbed({ formId, title, className }: TallyEmbedProps) {
  const embedUrl = `https://tally.so/embed/${formId}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`;

  useEffect(() => {
    loadTallyEmbeds();
    const retry = window.setTimeout(loadTallyEmbeds, 600);
    return () => window.clearTimeout(retry);
  }, [formId]);

  return (
    <iframe
      data-tally-src={embedUrl}
      loading="lazy"
      width="100%"
      height={400}
      title={title}
      className={cn("min-h-[400px] w-full border-0 bg-transparent", className)}
    />
  );
}
