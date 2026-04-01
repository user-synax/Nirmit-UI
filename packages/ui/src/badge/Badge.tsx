import { cn } from "@repo/utils";
import { HTMLAttributes } from "react";

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?:
    | "default"
    | "success"
    | "warning"
    | "destructive"
    | "outline"
    | "info";
  size?: "sm" | "md";
}

const variantStyles = {
  default: "bg-primary-pale text-primary border-transparent",
  success: "bg-success-pale text-success border-transparent",
  warning: "bg-warning-pale text-warning border-transparent",
  destructive: "bg-destructive-pale text-destructive border-transparent",
  info: "bg-info-pale text-info border-transparent",
  outline: "bg-transparent text-foreground border-border",
};

const sizeStyles = {
  sm: "px-2 py-0.5 text-[10px]",
  md: "px-2.5 py-0.5 text-xs",
};

export function Badge({
  variant = "default",
  size = "md",
  className,
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      {...props}
    />
  );
}
