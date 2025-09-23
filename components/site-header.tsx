"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-20 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-semibold">ALX Polly</Link>
          <nav className="hidden md:flex items-center gap-4 text-sm">
            <Link href="/polls" className={pathname?.startsWith("/polls") && !pathname?.startsWith("/polls/new") ? "text-foreground" : "text-foreground/80 hover:text-foreground"}>Browse</Link>
            <Link href="/polls/new" className={pathname === "/polls/new" ? "text-foreground" : "text-foreground/80 hover:text-foreground"}>Create</Link>
          </nav>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <Link href="/signin"><Button variant="ghost" size="sm">Sign in</Button></Link>
          <Link href="/signup"><Button size="sm">Sign up</Button></Link>
        </div>
        <button
          aria-label="Toggle menu"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
            <path fillRule="evenodd" d="M3.75 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75ZM3.75 12a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5H4.5A.75.75 0 0 1 3.75 12Zm0 6.75a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-background">
          <div className="container py-4 grid gap-3">
            <Link href="/polls" className="text-foreground/80 hover:text-foreground">Browse</Link>
            <Link href="/polls/new" className="text-foreground/80 hover:text-foreground">Create</Link>
            <div className="flex items-center gap-2 pt-2">
              <Link href="/signin"><Button variant="ghost" size="sm" className="w-full">Sign in</Button></Link>
              <Link href="/signup"><Button size="sm" className="w-full">Sign up</Button></Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default SiteHeader;


