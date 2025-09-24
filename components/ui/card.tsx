import * as React from "react";

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={["rounded-lg border border-border bg-card text-card-foreground shadow-sm", className].filter(Boolean).join(" ")}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }: CardProps) {
  return (
    <div className={["flex flex-col space-y-1.5 p-6", className].filter(Boolean).join(" ")} {...props} />
  );
}

export function CardTitle({ className, ...props }: CardProps) {
  return (
    <h3
      className={["text-2xl font-semibold leading-none tracking-tight", className].filter(Boolean).join(" ")}
      {...props}
    />
  );
}

export function CardDescription({ className, ...props }: CardProps) {
  return (
    <p className={["text-sm text-muted-foreground", className].filter(Boolean).join(" ")} {...props} />
  );
}

export function CardContent({ className, ...props }: CardProps) {
  return (
    <div className={["p-6 pt-0", className].filter(Boolean).join(" ")} {...props} />
  );
}

export function CardFooter({ className, ...props }: CardProps) {
  return (
    <div className={["flex items-center p-6 pt-0", className].filter(Boolean).join(" ")} {...props} />
  );
}


