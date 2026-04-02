import { cn } from "@repo/utils";
import React from "react";

export interface TableProps extends React.ComponentPropsWithoutRef<"table"> {
  variant?: "default" | "striped" | "compact";
}

export function Table({
  className,
  variant = "default",
  ...props
}: TableProps) {
  return (
    <div className="relative w-full overflow-x-auto rounded-xl border border-border">
      <table
        className={cn(
          "w-full caption-bottom text-sm",
          variant === "compact" && "[&_td]:py-2 [&_th]:py-2",
          variant === "striped" && "[&_tbody_tr:nth-child(odd)]:bg-surface/40",
          className,
        )}
        {...props}
      />
    </div>
  );
}

export function TableHeader({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"thead">) {
  return (
    <thead
      className={cn("[&_tr]:border-b [&_tr]:border-border bg-surface", className)}
      {...props}
    />
  );
}

export function TableBody({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"tbody">) {
  return (
    <tbody className={cn("[&_tr:last-child]:border-0", className)} {...props} />
  );
}

export function TableFooter({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"tfoot">) {
  return (
    <tfoot
      className={cn(
        "border-t border-border bg-surface font-medium [&>tr]:last:border-b-0",
        className,
      )}
      {...props}
    />
  );
}

export function TableRow({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"tr">) {
  return (
    <tr
      className={cn(
        "border-b border-border transition-colors hover:bg-surface-hover/60",
        className,
      )}
      {...props}
    />
  );
}

export function TableHead({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"th">) {
  return (
    <th
      className={cn(
        "h-10 px-4 text-left align-middle font-medium text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
}

export function TableCell({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"td">) {
  return <td className={cn("px-4 py-3 align-middle", className)} {...props} />;
}

export function TableCaption({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"caption">) {
  return (
    <caption className={cn("mt-4 text-sm text-muted-foreground", className)} {...props} />
  );
}
