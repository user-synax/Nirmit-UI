"use client";

import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "@repo/utils";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

export interface SwitchProps extends ComponentPropsWithoutRef<
  typeof SwitchPrimitive.Root
> {
  className?: string;
  label?: string;
  description?: string;
}

export const Switch = forwardRef<
  ElementRef<typeof SwitchPrimitive.Root>,
  SwitchProps
>(({ className, label, description, ...props }, ref) => (
  <label className="inline-flex items-center gap-3 cursor-pointer group">
    <SwitchPrimitive.Root
      ref={ref}
      className={cn(
        "peer inline-flex h-5 w-9 shrink-0 rounded-full border-2 border-transparent",
        "transition-colors duration-fast",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "bg-muted data-[state=checked]:bg-primary",
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        className={cn(
          "pointer-events-none block h-4 w-4 rounded-full bg-background",
          "shadow-sm transition-transform duration-fast",
          "data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0",
        )}
      />
    </SwitchPrimitive.Root>
    {(label || description) && (
      <div className="flex flex-col">
        {label && (
          <span className="text-sm font-medium text-foreground">{label}</span>
        )}
        {description && (
          <span className="text-xs text-muted">{description}</span>
        )}
      </div>
    )}
  </label>
));

Switch.displayName = SwitchPrimitive.Root.displayName;
