import { cn } from "@repo/utils";
import { HTMLAttributes } from "react";

export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
  variant?: "default" | "primary" | "success" | "warning" | "destructive";
}

const sizeStyles = {
  sm: "h-4 w-4 border-2",
  md: "h-5 w-5 border-2",
  lg: "h-7 w-7 border-[3px]",
};

const variantStyles = {
  default: "border-muted border-t-foreground",
  primary: "border-primary-pale border-t-primary",
  success: "border-success-pale border-t-success",
  warning: "border-warning-pale border-t-warning",
  destructive: "border-destructive-pale border-t-destructive",
};

export function Spinner({
  size = "md",
  variant = "default",
  className,
  ...props
}: SpinnerProps) {
  return (
    <div
      className={cn(
        "inline-block animate-spin rounded-full",
        sizeStyles[size],
        variantStyles[variant],
        className,
      )}
      role="status"
      aria-label="Loading"
      {...props}
    />
  );
}
