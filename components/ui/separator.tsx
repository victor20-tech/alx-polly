import * as React from "react";

type SeparatorProps = React.HTMLAttributes<HTMLDivElement> & {
  decorative?: boolean;
  orientation?: "horizontal" | "vertical";
};

export function Separator({ className, decorative = true, orientation = "horizontal", ...props }: SeparatorProps) {
  return (
    <div
      role={decorative ? "none" : "separator"}
      aria-orientation={orientation}
      className={[
        "bg-border",
        orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
        className,
      ].filter(Boolean).join(" ")}
      {...props}
    />
  );
}

export default Separator;


