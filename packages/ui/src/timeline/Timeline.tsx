import { cn } from "@repo/utils";
import React from "react";

export function Timeline({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"ol">) {
  return <ol className={cn("space-y-5", className)} {...props} />;
}

export function TimelineItem({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"li">) {
  return <li className={cn("relative pl-8", className)} {...props} />;
}

export function TimelineDot({
  className,
  active,
  ...props
}: React.ComponentPropsWithoutRef<"span"> & { active?: boolean }) {
  return (
    <span
      className={cn(
        "absolute left-0 top-1.5 inline-flex h-3 w-3 rounded-full border border-border bg-surface-elevated",
        active && "border-info bg-info",
        className,
      )}
      {...props}
    />
  );
}

export function TimelineLine({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"span">) {
  return (
    <span
      className={cn("absolute left-[5px] top-5 h-[calc(100%+1rem)] w-px bg-border", className)}
      {...props}
    />
  );
}

export function TimelineTitle({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"h4">) {
  return <h4 className={cn("text-sm font-semibold text-foreground", className)} {...props} />;
}

export function TimelineDescription({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"p">) {
  return <p className={cn("mt-1 text-sm text-muted-foreground", className)} {...props} />;
}

export function TimelineMeta({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"p">) {
  return (
    <p
      className={cn("mb-1 text-xs font-medium uppercase tracking-wider text-muted", className)}
      {...props}
    />
  );
}
