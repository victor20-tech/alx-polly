"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ErrorIllustration } from "@/components/illustrations/empty-state";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <main className="container py-24 text-center">
      <ErrorIllustration />
      <h1 className="text-3xl font-bold mt-6">Something went wrong</h1>
      <p className="mt-2 text-muted-foreground max-w-md mx-auto">An unexpected error occurred. Don't worry, we're looking into it.</p>
      <div className="mt-8 flex items-center justify-center gap-3">
        <Button onClick={reset}>Try again</Button>
        <Link href="/"><Button variant="ghost">Go home</Button></Link>
      </div>
      <p className="mt-6 text-xs text-muted-foreground max-w-lg mx-auto">{error?.message}</p>
    </main>
  );
}


