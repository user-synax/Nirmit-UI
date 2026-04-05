"use client";

import { cn } from "@repo/utils";
import { ChevronLeft, Menu } from "lucide-react";
import {
  useState,
  createContext,
  useContext,
  ReactNode,
  forwardRef,
  HTMLAttributes,
} from "react";

interface SidebarContextType {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
  variant: "sidebar" | "floating" | "inset";
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
}

export interface SidebarProviderProps {
  children: ReactNode;
  defaultCollapsed?: boolean;
  variant?: "sidebar" | "floating" | "inset";
}

export function SidebarProvider({
  children,
  defaultCollapsed = false,
  variant = "sidebar",
}: SidebarProviderProps) {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);
  const [open, setOpen] = useState(!defaultCollapsed);

  return (
    <SidebarContext.Provider
      value={{ collapsed, setCollapsed, open, setOpen, variant }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export interface SidebarProps extends HTMLAttributes<HTMLDivElement> {
  side?: "left" | "right";
}

export const Sidebar = forwardRef<HTMLDivElement, SidebarProps>(
  ({ className, side = "left", children, ...props }, ref) => {
    const { collapsed, variant } = useSidebar();

    const variantClasses = {
      sidebar:
        "fixed inset-y-0 z-30 flex flex-col border-r border-border bg-surface",
      floating:
        "fixed inset-y-0 z-30 m-2 flex flex-col rounded-xl border border-border bg-surface shadow-lg",
      inset: "flex flex-col border-r border-border bg-surface",
    };

    return (
      <div
        ref={ref}
        className={cn(
          variantClasses[variant],
          side === "left" ? "left-0" : "right-0",
          variant === "sidebar" && "w-64",
          variant === "floating" && "w-64",
          variant === "inset" && "w-64",
          collapsed && variant !== "inset" && "-translate-x-full",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);
Sidebar.displayName = "Sidebar";

export const SidebarHeader = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex h-14 items-center border-b border-border px-4",
      className,
    )}
    {...props}
  />
));
SidebarHeader.displayName = "SidebarHeader";

export const SidebarContent = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex-1 overflow-y-auto p-3", className)}
    {...props}
  />
));
SidebarContent.displayName = "SidebarContent";

export const SidebarFooter = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("border-t border-border p-3", className)}
    {...props}
  />
));
SidebarFooter.displayName = "SidebarFooter";

export interface SidebarGroupProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
}

export const SidebarGroup = forwardRef<HTMLDivElement, SidebarGroupProps>(
  ({ className, label, children, ...props }, ref) => (
    <div ref={ref} className={cn("mb-4", className)} {...props}>
      {label && (
        <div className="mb-1 px-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {label}
        </div>
      )}
      <div className="space-y-1">{children}</div>
    </div>
  ),
);
SidebarGroup.displayName = "SidebarGroup";

export interface SidebarItemProps extends HTMLAttributes<HTMLDivElement> {
  icon?: ReactNode;
  active?: boolean;
}

export const SidebarItem = forwardRef<HTMLDivElement, SidebarItemProps>(
  ({ className, icon, active, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all duration-fast cursor-pointer",
        "hover:bg-surface-hover hover:text-foreground",
        active
          ? "bg-primary text-background hover:bg-primary-hover hover:text-background"
          : "text-muted-foreground",
        className,
      )}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span className="truncate">{children}</span>
    </div>
  ),
);
SidebarItem.displayName = "SidebarItem";

export const SidebarTrigger = forwardRef<
  HTMLButtonElement,
  HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const { collapsed, setCollapsed } = useSidebar();

  return (
    <button
      ref={ref}
      onClick={() => setCollapsed(!collapsed)}
      className={cn(
        "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-muted transition-colors hover:bg-surface hover:text-foreground",
        className,
      )}
      {...props}
    >
      {collapsed ? (
        <Menu className="h-4 w-4" />
      ) : (
        <ChevronLeft className="h-4 w-4" />
      )}
    </button>
  );
});
SidebarTrigger.displayName = "SidebarTrigger";
