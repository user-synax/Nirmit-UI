"use client";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { cn } from "@repo/utils";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

export interface CheckboxProps extends ComponentPropsWithoutRef<
  typeof CheckboxPrimitive.Root
> {
  className?: string;
  label?: string;
}

export const Checkbox = forwardRef<
  ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, label, ...props }, ref) => (
  <label className="inline-flex items-center gap-2 cursor-pointer group">
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        "peer h-4 w-4 shrink-0 rounded border border-border bg-surface",
        "transition-colors duration-fast",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "data-[state=checked]:bg-primary data-[state=checked]:border-primary",
        "data-[state=checked]:text-background",
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator className="flex items-center justify-center text-current">
        <Check className="h-3 w-3" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
    {label && (
      <span className="text-sm text-foreground group-hover:text-muted-foreground transition-colors">
        {label}
      </span>
    )}
  </label>
));

Checkbox.displayName = CheckboxPrimitive.Root.displayName;
