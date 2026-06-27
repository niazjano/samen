"use client";

import { motion } from "framer-motion";

import { siteConfig } from "@/lib/site-config";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-background">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-4"
      >
        <motion.span
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex size-14 items-center justify-center rounded-2xl bg-forest text-xl font-bold text-primary-foreground shadow-glow"
        >
          S
        </motion.span>
        <p className="text-sm font-medium text-muted-foreground">{siteConfig.name}</p>
      </motion.div>
    </div>
  );
}
