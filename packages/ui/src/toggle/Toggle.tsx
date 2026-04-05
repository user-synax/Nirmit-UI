"use client";

import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cn } from "@repo/utils";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

const variantStyles = {
  default:
    "bg-transparent hover:bg-surface hover:text-foreground data-[state=on]:bg-primary data-[state=on]:text-background",
  outline:
    "border border-border bg-transparent hover:bg-surface hover:text-foreground data-[state=on]:bg-primary data-[state=on]:text-background data-[state=on]:border-primary",
};

const sizeStyles = {
  sm: "h-8 px-2.5 text-xs gap-1.5",
  md: "h-10 px-3 text-sm gap-2",
  lg: "h-12 px-4 text-base gap-2.5",
};

export interface ToggleProps extends ComponentPropsWithoutRef<
  typeof TogglePrimitive.Root
> {
  variant?: "default" | "outline";
  size?: "sm" | "md" | "lg";
}

export const Toggle = forwardRef<
  ElementRef<typeof TogglePrimitive.Root>,
  ToggleProps
>(({ className, variant = "default", size = "md", ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-fast",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      "disabled:pointer-events-none disabled:opacity-50",
      variantStyles[variant],
      sizeStyles[size],
      className,
    )}
    {...props}
  />
));
Toggle.displayName = TogglePrimitive.Root.displayName;
