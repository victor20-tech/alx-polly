import * as React from "react";

export function Skeleton({ className }: { className?: string }) {
  return (
    <div className={["animate-pulse rounded-md bg-muted", className].filter(Boolean).join(" ")} />
  );
}

export default Skeleton;


