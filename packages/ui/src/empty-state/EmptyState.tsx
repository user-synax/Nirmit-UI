import { cn } from "@repo/utils";
import { Inbox } from "lucide-react";
import { HTMLAttributes, ReactNode } from "react";

export interface EmptyStateProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  icon?: ReactNode;
  action?: ReactNode;
  variant?: "default" | "soft" | "compact";
}

const variantStyles = {
  default: "rounded-2xl border border-border bg-surface p-8",
  soft: "rounded-2xl border border-info/30 bg-info-pale/40 p-8",
  compact: "rounded-xl border border-border bg-surface p-5",
};

export function EmptyState({
  title,
  description,
  icon,
  action,
  variant = "default",
  className,
  ...props
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex w-full flex-col items-center justify-center text-center",
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-surface-elevated text-muted">
        {icon ?? <Inbox className="h-5 w-5" />}
      </div>
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      {description && (
        <p className="mt-2 max-w-md text-sm text-muted-foreground">
          {description}
        </p>
      )}
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}
