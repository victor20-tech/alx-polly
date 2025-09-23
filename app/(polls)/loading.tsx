import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingPollsIndex() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="rounded-lg border p-6">
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-24 mt-3" />
          <Skeleton className="h-4 w-32 mt-6" />
        </div>
      ))}
    </div>
  );
}


