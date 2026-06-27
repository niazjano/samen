"use client";

import { useEffect } from "react";

import { cn } from "@/lib/utils";

type ToastProps = {
  message: string;
  open: boolean;
  onClose: () => void;
  duration?: number;
};

export function Toast({ message, open, onClose, duration = 2500 }: ToastProps) {
  useEffect(() => {
    if (!open) return;
    const timer = window.setTimeout(onClose, duration);
    return () => window.clearTimeout(timer);
  }, [open, duration, onClose]);

  if (!open) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className={cn(
        "pointer-events-none fixed bottom-6 left-1/2 z-[110] -translate-x-1/2 rounded-full border border-border/60 bg-card px-5 py-3 text-sm font-medium text-foreground shadow-soft"
      )}
    >
      {message}
    </div>
  );
}
