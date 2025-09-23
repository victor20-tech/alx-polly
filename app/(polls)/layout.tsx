import React from "react";

export default function PollsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <main className="container py-8">{children}</main>
    </div>
  );
}


