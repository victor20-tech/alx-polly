import * as React from "react";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "secondary" | "outline" | "success" | "destructive" | "accent";
};

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants: Record<NonNullable<BadgeProps["variant"]>, string> = {
    default: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    outline: "border border-border",
    success: "bg-green-600 text-white",
    destructive: "bg-destructive text-destructive-foreground",
    accent: "bg-accent text-accent-foreground",
  };

  return (
    <span
      className={[
        "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium",
        variants[variant],
        className,
      ].filter(Boolean).join(" ")}
      {...props}
    />
  );
}

export default Badge;


