import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const router = useRouter();
  const supabase = createClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/auth/login");
  };

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/"
        className="text-lg font-bold transition-colors hover:text-primary"
      >
        PollApp
      </Link>
      <Link
        href="/polls"
        className={buttonVariants({ variant: "ghost" })}
      >
        Polls
      </Link>
      <Link
        href="/polls/create"
        className={buttonVariants({ variant: "ghost" })}
      >
        Create Poll
      </Link>
      <Button onClick={handleLogout} variant="ghost">
        Logout
      </Button>
    </nav>
  );
}
