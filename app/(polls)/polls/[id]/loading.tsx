import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingPollDetail() {
  return (
    <div className="rounded-lg border p-6">
      <Skeleton className="h-7 w-2/3" />
      <Skeleton className="h-4 w-40 mt-2" />
      <div className="mt-6 grid gap-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-10 w-full" />
        ))}
      </div>
      <Skeleton className="h-10 w-28 mt-6" />
    </div>
  );
}


