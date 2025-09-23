import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NotFoundIllustration } from "@/components/illustrations/empty-state";

export default function NotFound() {
  return (
    <main className="container py-24 text-center">
      <NotFoundIllustration />
      <h1 className="text-3xl font-bold mt-6">Page not found</h1>
      <p className="mt-2 text-muted-foreground max-w-md mx-auto">The page you are looking for doesn't exist or may have been moved.</p>
      <div className="mt-8 flex items-center justify-center gap-3">
        <Link href="/"><Button>Go home</Button></Link>
        <Link href="/polls"><Button variant="ghost">Browse polls</Button></Link>
      </div>
    </main>
  );
}


