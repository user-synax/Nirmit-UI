"use client";

import { cn } from "@repo/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "secondary"
    | "ghost"
    | "destructive"
    | "outline"
    | "success"
    | "warning"
    | "soft"
    | "link";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

const variantStyles = {
  primary:
    "bg-primary text-background hover:bg-primary-hover focus-visible:ring-primary shadow-sm hover:shadow-glow",
  secondary:
    "bg-surface text-foreground hover:bg-surface-hover border border-border",
  ghost: "bg-transparent hover:bg-surface text-foreground",
  destructive: "bg-destructive text-background hover:opacity-90",
  outline:
    "bg-transparent border border-border hover:bg-surface text-foreground",
  success: "bg-success text-background hover:opacity-90",
  warning: "bg-warning text-background hover:opacity-90",
  soft: "bg-primary-pale text-primary hover:opacity-90 border border-transparent",
  link: "bg-transparent text-primary hover:underline h-auto p-0 shadow-none",
};

const sizeStyles = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      isLoading,
      className,
      children,
      disabled,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-lg font-medium",
          "transition-all duration-fast",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          "active:scale-[0.98]",
          variantStyles[variant],
          variant !== "link" && sizeStyles[size],
          className,
        )}
        {...props}
      >
        {isLoading && (
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        )}
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
