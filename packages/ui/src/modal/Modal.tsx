"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@repo/utils";
import { ReactNode } from "react";

export interface ModalProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger?: ReactNode;
  title?: string;
  description?: string;
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  className?: string;
}

const sizeStyles = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  full: "max-w-[95vw] h-[95vh]",
};

export function Modal({
  open,
  onOpenChange,
  trigger,
  title,
  description,
  children,
  size = "md",
  className,
}: ModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {trigger && <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>}
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content
          className={cn(
            "fixed left-1/2 top-1/2 z-50 w-full -translate-x-1/2 -translate-y-1/2 rounded-xl bg-surface border border-border shadow-lg outline-none",
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] duration-200",
            sizeStyles[size],
            className,
          )}
        >
          <div className="flex flex-col space-y-2">
            {title && (
              <Dialog.Title className="text-xl font-semibold leading-none tracking-tight text-foreground">
                {title}
              </Dialog.Title>
            )}
            {description && (
              <Dialog.Description className="text-sm text-muted">
                {description}
              </Dialog.Description>
            )}
          </div>
          <div className="mt-4">{children}</div>
          <Dialog.Close className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none bg-transparent">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
