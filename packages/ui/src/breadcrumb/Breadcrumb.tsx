import { cn } from "@repo/utils";
import { ChevronRight } from "lucide-react";
import React, { HTMLAttributes } from "react";

export function Breadcrumb({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"nav">) {
  return (
    <nav aria-label="Breadcrumb" className={cn("w-full", className)} {...props} />
  );
}

export function BreadcrumbList({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"ol">) {
  return (
    <ol
      className={cn(
        "flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
}

export function BreadcrumbItem({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"li">) {
  return <li className={cn("inline-flex items-center gap-1.5", className)} {...props} />;
}

export function BreadcrumbLink({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"a">) {
  return (
    <a
      className={cn("transition-colors hover:text-foreground", className)}
      {...props}
    />
  );
}

export function BreadcrumbPage({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      aria-current="page"
      className={cn("font-medium text-foreground", className)}
      {...props}
    />
  );
}

export function BreadcrumbSeparator({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"span">) {
  return (
    <span aria-hidden="true" className={cn("text-muted", className)} {...props}>
      <ChevronRight className="h-3.5 w-3.5" />
    </span>
  );
}
