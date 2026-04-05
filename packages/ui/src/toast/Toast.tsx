"use client";

import { cn } from "@repo/utils";
import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";
import {
  X,
  CheckCircle2,
  AlertCircle,
  AlertTriangle,
  Info,
} from "lucide-react";

export type ToastType = "success" | "error" | "warning" | "info";

export interface Toast {
  id: string;
  title: string;
  description?: string;
  type?: ToastType;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

interface ToastContextType {
  toasts: Toast[];
  addToast: (toast: Omit<Toast, "id">) => string;
  removeToast: (id: string) => void;
  success: (
    title: string,
    options?: Omit<Toast, "id" | "title" | "type">,
  ) => string;
  error: (
    title: string,
    options?: Omit<Toast, "id" | "title" | "type">,
  ) => string;
  warning: (
    title: string,
    options?: Omit<Toast, "id" | "title" | "type">,
  ) => string;
  info: (
    title: string,
    options?: Omit<Toast, "id" | "title" | "type">,
  ) => string;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}

const typeIcons = {
  success: CheckCircle2,
  error: AlertCircle,
  warning: AlertTriangle,
  info: Info,
};

const typeStyles = {
  success: "border-success/30 bg-surface",
  error: "border-destructive/30 bg-surface",
  warning: "border-warning/30 bg-surface",
  info: "border-primary/30 bg-surface",
};

const iconColors = {
  success: "text-success",
  error: "text-destructive",
  warning: "text-warning",
  info: "text-primary",
};

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const generateId = () => Math.random().toString(36).substring(2, 9);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const addToast = useCallback(
    (toast: Omit<Toast, "id">) => {
      const id = generateId();
      const newToast = { ...toast, id, duration: toast.duration ?? 5000 };
      setToasts((prev) => [...prev, newToast]);

      if (newToast.duration !== Infinity && newToast.duration !== 0) {
        setTimeout(() => removeToast(id), newToast.duration);
      }

      return id;
    },
    [removeToast],
  );

  const success = useCallback(
    (title: string, options?: Omit<Toast, "id" | "title" | "type">) =>
      addToast({ ...options, title, type: "success" }),
    [addToast],
  );

  const error = useCallback(
    (title: string, options?: Omit<Toast, "id" | "title" | "type">) =>
      addToast({ ...options, title, type: "error" }),
    [addToast],
  );

  const warning = useCallback(
    (title: string, options?: Omit<Toast, "id" | "title" | "type">) =>
      addToast({ ...options, title, type: "warning" }),
    [addToast],
  );

  const info = useCallback(
    (title: string, options?: Omit<Toast, "id" | "title" | "type">) =>
      addToast({ ...options, title, type: "info" }),
    [addToast],
  );

  return (
    <ToastContext.Provider
      value={{ toasts, addToast, removeToast, success, error, warning, info }}
    >
      {children}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 max-w-sm">
        {toasts.map((toast) => {
          const Icon = typeIcons[toast.type || "info"];
          return (
            <div
              key={toast.id}
              className={cn(
                "flex items-start gap-3 rounded-lg border p-4 shadow-lg animate-in slide-in-from-right-full",
                typeStyles[toast.type || "info"],
              )}
            >
              <Icon
                className={cn(
                  "h-5 w-5 shrink-0 mt-0.5",
                  iconColors[toast.type || "info"],
                )}
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground">
                  {toast.title}
                </p>
                {toast.description && (
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {toast.description}
                  </p>
                )}
                {toast.action && (
                  <button
                    onClick={toast.action.onClick}
                    className="mt-2 text-xs font-medium text-primary hover:underline"
                  >
                    {toast.action.label}
                  </button>
                )}
              </div>
              <button
                onClick={() => removeToast(toast.id)}
                className="shrink-0 rounded-md p-0.5 text-muted hover:text-foreground transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
}
