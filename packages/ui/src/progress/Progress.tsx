"use client";

import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@repo/utils";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

export interface ProgressProps extends ComponentPropsWithoutRef<
  typeof ProgressPrimitive.Root
> {
  className?: string;
  value?: number;
  variant?: "default" | "success" | "warning" | "destructive";
  label?: string;
  showValue?: boolean;
}

const variantStyles = {
  default: "bg-primary",
  success: "bg-success",
  warning: "bg-warning",
  destructive: "bg-destructive",
};

export const Progress = forwardRef<
  ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(
  (
    { className, value = 0, variant = "default", label, showValue, ...props },
    ref,
  ) => (
    <div className="w-full">
      {(label || showValue) && (
        <div className="flex justify-between mb-2">
          {label && (
            <span className="text-sm text-muted-foreground">{label}</span>
          )}
          {showValue && (
            <span className="text-sm text-muted-foreground">
              {Math.round(value)}%
            </span>
          )}
        </div>
      )}
      <ProgressPrimitive.Root
        ref={ref}
        className={cn(
          "relative h-2 w-full overflow-hidden rounded-full bg-surface",
          className,
        )}
        value={value}
        {...props}
      >
        <ProgressPrimitive.Indicator
          className={cn(
            "h-full w-full flex-1 transition-all duration-slow",
            variantStyles[variant],
          )}
          style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
        />
      </ProgressPrimitive.Root>
    </div>
  ),
);

Progress.displayName = ProgressPrimitive.Root.displayName;
