"use client";

import { cn } from "@repo/utils";
import { TextareaHTMLAttributes, forwardRef } from "react";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, hint, error, className, id, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={id} className="text-sm font-medium text-foreground">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={id}
          className={cn(
            "min-h-28 w-full rounded-lg border border-border bg-surface px-3 py-2.5",
            "text-sm text-foreground placeholder:text-muted",
            "transition-all duration-fast",
            "focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent",
            "hover:border-border-hover",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "resize-y",
            error && "border-destructive focus:ring-destructive",
            className,
          )}
          {...props}
        />
        {error && <p className="text-xs text-destructive">{error}</p>}
        {hint && !error && <p className="text-xs text-muted">{hint}</p>}
      </div>
    );
  },
);

Textarea.displayName = "Textarea";
