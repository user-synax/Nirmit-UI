import { cn } from "@repo/utils";
import { HTMLAttributes } from "react";

export interface KbdProps extends HTMLAttributes<HTMLElement> {
  size?: "sm" | "md";
}

const sizeStyles = {
  sm: "min-w-5 h-5 px-1 text-[10px]",
  md: "min-w-6 h-6 px-1.5 text-xs",
};

export function Kbd({ size = "md", className, ...props }: KbdProps) {
  return (
    <kbd
      className={cn(
        "inline-flex items-center justify-center rounded-md border border-border bg-surface-elevated font-mono font-medium text-muted-foreground shadow-sm",
        sizeStyles[size],
        className,
      )}
      {...props}
    />
  );
}
