"use client";

import Script from "next/script";

declare global {
  interface Window {
    Tally?: { loadEmbeds: () => void };
  }
}

export function TallyProvider() {
  return (
    <Script
      id="tally-embed"
      src="https://tally.so/widgets/embed.js"
      strategy="lazyOnload"
      onReady={() => window.Tally?.loadEmbeds()}
    />
  );
}

export function loadTallyEmbeds() {
  window.Tally?.loadEmbeds();
}
