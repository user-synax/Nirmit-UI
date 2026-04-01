import { cn } from "@repo/utils";
import { HTMLAttributes } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "bordered" | "elevated" | "ghost";
}

const variantStyles = {
  default: "bg-surface border border-border",
  bordered: "bg-transparent border-2 border-border",
  elevated: "bg-surface shadow-lg border-0",
  ghost: "bg-transparent border-0",
};

export function Card({
  variant = "default",
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl p-6 transition-all duration-fast hover:border-border-hover",
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mb-4 flex flex-col gap-1", className)} {...props} />
  );
}

export function CardTitle({
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("text-lg font-semibold text-foreground", className)}
      {...props}
    />
  );
}

export function CardDescription({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("text-sm text-muted", className)} {...props} />;
}

export function CardContent({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

export function CardFooter({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "mt-4 flex items-center gap-2 pt-4 border-t border-border",
        className,
      )}
      {...props}
    />
  );
}
