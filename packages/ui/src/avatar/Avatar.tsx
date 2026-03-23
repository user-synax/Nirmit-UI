"use client";

import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "@repo/utils";
import React, { createContext, useContext } from "react";

type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";

const AvatarContext = createContext<{ size: AvatarSize }>({ size: "md" });

const sizeStyles: Record<AvatarSize, string> = {
  xs: "h-6 w-6 text-[10px]",
  sm: "h-8 w-8 text-xs",
  md: "h-10 w-10 text-sm",
  lg: "h-12 w-12 text-base",
  xl: "h-16 w-16 text-lg",
};

export interface AvatarProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> {
  size?: AvatarSize;
}

export const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>(({ className, size = "md", ...props }, ref) => (
  <AvatarContext.Provider value={{ size }}>
    <AvatarPrimitive.Root
      ref={ref}
      className={cn(
        "relative flex shrink-0 overflow-hidden rounded-full border border-border bg-surface",
        sizeStyles[size],
        className
      )}
      {...props}
    />
  </AvatarContext.Provider>
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

export const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full object-cover", className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

export const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-surface font-medium text-muted",
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  limit?: number;
  size?: AvatarSize;
  children: React.ReactNode;
}

export const AvatarGroup = ({
  children,
  limit,
  size = "md",
  className,
  ...props
}: AvatarGroupProps) => {
  const avatars = React.Children.toArray(children);
  const visibleAvatars = limit ? avatars.slice(0, limit) : avatars;
  const remainingCount = limit ? avatars.length - limit : 0;

  return (
    <div
      className={cn("flex items-center -space-x-2", className)}
      {...props}
    >
      {visibleAvatars.map((child, index) => (
        <div
          key={index}
          className="ring-2 ring-background rounded-full overflow-hidden"
        >
          {React.isValidElement(child)
            ? React.cloneElement(child as React.ReactElement<any>, { size })
            : child}
        </div>
      ))}
      {remainingCount > 0 && (
        <div
          className={cn(
            "flex items-center justify-center rounded-full border border-border bg-surface font-medium text-muted ring-2 ring-background",
            sizeStyles[size]
          )}
        >
          +{remainingCount}
        </div>
      )}
    </div>
  );
};
