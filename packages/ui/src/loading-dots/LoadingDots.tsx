import { cn } from "@repo/utils";
import React from "react";

export interface LoadingDotsProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
  variant?: "default" | "primary" | "success" | "warning";
}

const sizeStyles = {
  sm: "h-1.5 w-1.5",
  md: "h-2 w-2",
  lg: "h-2.5 w-2.5",
};

const colorStyles = {
  default: "bg-muted-foreground",
  primary: "bg-primary",
  success: "bg-success",
  warning: "bg-warning",
};

export function LoadingDots({
  size = "md",
  variant = "default",
  className,
  ...props
}: LoadingDotsProps) {
  return (
    <div
      className={cn("inline-flex items-center gap-1.5", className)}
      role="status"
      aria-label="Loading"
      {...props}
    >
      {[0, 1, 2].map((index) => (
        <span
          key={index}
          className={cn(
            "inline-block animate-pulse rounded-full",
            sizeStyles[size],
            colorStyles[variant],
          )}
          style={{ animationDelay: `${index * 120}ms` }}
        />
      ))}
    </div>
  );
}
