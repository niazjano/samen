"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function BecomeMemberRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/member");
  }, [router]);

  return (
    <p className="mx-auto max-w-lg px-4 py-32 text-center text-muted-foreground">
      Omdirigerar till medlemssidan…
    </p>
  );
}
