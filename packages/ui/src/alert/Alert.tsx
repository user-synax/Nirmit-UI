import { cn } from "@repo/utils";
import {
  AlertCircle,
  AlertTriangle,
  CheckCircle2,
  Info,
  LucideIcon,
} from "lucide-react";
import { HTMLAttributes } from "react";

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "info" | "success" | "warning" | "destructive" | "neutral";
  title?: string;
  icon?: LucideIcon;
  dismissible?: boolean;
  onDismiss?: () => void;
}

const variantStyles = {
  info: "bg-info-pale border-info/30 text-foreground",
  success: "bg-success-pale border-success/30 text-foreground",
  warning: "bg-warning-pale border-warning/30 text-foreground",
  destructive: "bg-destructive-pale border-destructive/30 text-foreground",
  neutral: "bg-surface border-border text-foreground",
};

const variantIcons = {
  info: Info,
  success: CheckCircle2,
  warning: AlertTriangle,
  destructive: AlertCircle,
  neutral: Info,
};

export function Alert({
  variant = "info",
  title,
  icon,
  dismissible,
  onDismiss,
  className,
  children,
  ...props
}: AlertProps) {
  const IconComponent = icon || variantIcons[variant];

  return (
    <div
      className={cn(
        "relative w-full rounded-lg border p-4",
        "flex items-start gap-3",
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      {IconComponent && <IconComponent className="h-5 w-5 shrink-0 mt-0.5" />}
      <div className="flex-1">
        {title && (
          <h5 className="mb-1 font-medium leading-none tracking-tight">
            {title}
          </h5>
        )}
        <div className="text-sm opacity-90">{children}</div>
      </div>
      {dismissible && (
        <button
          onClick={onDismiss}
          className="shrink-0 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none"
          aria-label="Dismiss"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
