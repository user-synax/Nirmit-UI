"use client";

import { cn } from "@repo/utils";
import { ReactNode, forwardRef, HTMLAttributes } from "react";

export interface NavbarProps extends HTMLAttributes<HTMLElement> {
  variant?: "default" | "floating" | "sticky";
}

export const Navbar = forwardRef<HTMLElement, NavbarProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    const variantClasses = {
      default: "border-b border-border bg-surface",
      floating:
        "mx-4 mt-4 rounded-xl border border-border bg-surface/80 backdrop-blur-md shadow-sm",
      sticky:
        "sticky top-0 z-40 border-b border-border bg-surface/80 backdrop-blur-md",
    };

    return (
      <nav
        ref={ref}
        className={cn(
          "flex h-14 items-center gap-4 px-4",
          variantClasses[variant],
          className,
        )}
        {...props}
      >
        {children}
      </nav>
    );
  },
);
Navbar.displayName = "Navbar";

export const NavbarBrand = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center gap-2 text-lg font-semibold text-foreground",
      className,
    )}
    {...props}
  >
    {children}
  </div>
));
NavbarBrand.displayName = "NavbarBrand";

export const NavbarContent = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-1 items-center gap-2", className)}
    {...props}
  />
));
NavbarContent.displayName = "NavbarContent";

export const NavbarActions = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center gap-2 ml-auto", className)}
    {...props}
  />
));
NavbarActions.displayName = "NavbarActions";

export interface NavbarItemProps extends HTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  active?: boolean;
}

export const NavbarItem = forwardRef<HTMLButtonElement, NavbarItemProps>(
  ({ className, icon, active, children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-fast",
        "hover:bg-surface-hover hover:text-foreground",
        active ? "bg-primary text-background" : "text-muted-foreground",
        className,
      )}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </button>
  ),
);
NavbarItem.displayName = "NavbarItem";

export const NavbarDivider = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("h-6 w-px bg-border mx-1", className)}
    {...props}
  />
));
NavbarDivider.displayName = "NavbarDivider";
