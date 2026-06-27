"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function useMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className={cn("relative size-9 rounded-full", className)}
        aria-label="Byt tema"
        disabled
      />
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn(
        "relative size-9 rounded-full text-muted-foreground hover:text-foreground",
        className
      )}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label={`Byt till ${resolvedTheme === "dark" ? "ljust" : "mörkt"} tema`}
    >
      <Sun className="size-4 transition-all dark:scale-0 dark:-rotate-90" aria-hidden="true" />
      <Moon
        className="absolute size-4 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
        aria-hidden="true"
      />
    </Button>
  );
}
