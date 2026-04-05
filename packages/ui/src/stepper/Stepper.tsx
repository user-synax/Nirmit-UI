"use client";

import { cn } from "@repo/utils";
import { Check } from "lucide-react";
import {
  createContext,
  useContext,
  ReactNode,
  forwardRef,
  HTMLAttributes,
} from "react";

interface StepperContextType {
  currentStep: number;
  totalSteps: number;
  orientation: "horizontal" | "vertical";
}

const StepperContext = createContext<StepperContextType | undefined>(undefined);

function useStepperContext() {
  const context = useContext(StepperContext);
  if (!context) {
    throw new Error("useStepperContext must be used within a Stepper");
  }
  return context;
}

export interface StepperProps extends HTMLAttributes<HTMLDivElement> {
  currentStep?: number;
  orientation?: "horizontal" | "vertical";
  children: ReactNode;
}

export function Stepper({
  currentStep = 0,
  orientation = "horizontal",
  className,
  children,
  ...props
}: StepperProps) {
  const totalSteps = Array.isArray(children) ? children.length : 1;

  return (
    <StepperContext.Provider value={{ currentStep, totalSteps, orientation }}>
      <div
        className={cn(
          "flex",
          orientation === "horizontal" ? "flex-row items-center" : "flex-col",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    </StepperContext.Provider>
  );
}

export interface StepperItemProps extends HTMLAttributes<HTMLDivElement> {
  step: number;
  title?: string;
  description?: string;
  icon?: ReactNode;
}

export const StepperItem = forwardRef<HTMLDivElement, StepperItemProps>(
  ({ className, step, title, description, icon, children, ...props }, ref) => {
    const { currentStep, orientation } = useStepperContext();
    const isCompleted = step < currentStep;
    const isActive = step === currentStep;

    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center gap-3",
          orientation === "horizontal" ? "flex-1" : "w-full",
          className,
        )}
        {...props}
      >
        <div className="flex flex-col items-center">
          <div
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-medium transition-all duration-fast",
              isCompleted && "border-primary bg-primary text-background",
              isActive && "border-primary text-primary",
              !isCompleted &&
                !isActive &&
                "border-border text-muted-foreground",
            )}
          >
            {isCompleted ? <Check className="h-4 w-4" /> : icon || step + 1}
          </div>
        </div>

        {title && (
          <div
            className={cn(
              orientation === "horizontal" ? "hidden sm:block" : "",
            )}
          >
            <p
              className={cn(
                "text-sm font-medium",
                isActive && "text-foreground",
                isCompleted && "text-foreground",
                !isCompleted && !isActive && "text-muted-foreground",
              )}
            >
              {title}
            </p>
            {description && (
              <p className="text-xs text-muted-foreground">{description}</p>
            )}
          </div>
        )}

        {children}
      </div>
    );
  },
);
StepperItem.displayName = "StepperItem";

export const StepperSeparator = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useStepperContext();

  return (
    <div
      ref={ref}
      className={cn(
        "bg-border",
        orientation === "horizontal"
          ? "flex-1 h-0.5 mx-2"
          : "w-0.5 h-8 my-1 ml-4",
        className,
      )}
      {...props}
    />
  );
});
StepperSeparator.displayName = "StepperSeparator";

export interface StepperTriggerProps extends HTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
}

export const StepperTrigger = forwardRef<
  HTMLButtonElement,
  StepperTriggerProps
>(({ className, onClick, ...props }, ref) => {
  return (
    <button
      ref={ref}
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 text-sm transition-colors",
        className,
      )}
      {...props}
    />
  );
});
StepperTrigger.displayName = "StepperTrigger";
