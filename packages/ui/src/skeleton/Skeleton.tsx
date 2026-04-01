import { cn } from "@repo/utils";
import { HTMLAttributes } from "react";

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "text" | "circular" | "rounded" | "rectangular";
}

const variantStyles = {
  text: "h-4 w-full rounded",
  circular: "rounded-full",
  rounded: "rounded-lg",
  rectangular: "rounded-none",
};

export function Skeleton({
  variant = "text",
  className,
  ...props
}: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse bg-surface-hover",
        variantStyles[variant],
        className,
      )}
      {...props}
    />
  );
}

export function SkeletonText({
  lines = 3,
  className,
}: {
  lines?: number;
  className?: string;
}) {
  return (
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={cn(i === lines - 1 ? "w-3/4" : "w-full", className)}
        />
      ))}
    </div>
  );
}
