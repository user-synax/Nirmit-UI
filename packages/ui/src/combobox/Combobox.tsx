"use client";

import { cn } from "@repo/utils";
import { Check, ChevronsUpDown, Search, X } from "lucide-react";
import {
  useState,
  useRef,
  useEffect,
  useCallback,
  ReactNode,
  forwardRef,
  useImperativeHandle,
} from "react";

export interface ComboboxOption {
  value: string;
  label: string;
  description?: string;
  icon?: ReactNode;
  disabled?: boolean;
}

export interface ComboboxProps {
  options: ComboboxOption[];
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  emptyMessage?: string;
  searchable?: boolean;
  multiple?: boolean;
  disabled?: boolean;
  className?: string;
}

export interface ComboboxRef {
  open: () => void;
  close: () => void;
}

export const Combobox = forwardRef<ComboboxRef, ComboboxProps>(
  (
    {
      options,
      value,
      onValueChange,
      placeholder = "Select...",
      emptyMessage = "No options found.",
      searchable = true,
      disabled = false,
      className,
    },
    ref,
  ) => {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState("");
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
      open: () => setOpen(true),
      close: () => setOpen(false),
    }));

    const selectedOption = options.find((o) => o.value === value);

    const filteredOptions = options.filter((option) => {
      if (option.disabled) return false;
      if (!search) return true;
      return (
        option.label.toLowerCase().includes(search.toLowerCase()) ||
        option.description?.toLowerCase().includes(search.toLowerCase())
      );
    });

    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (
          containerRef.current &&
          !containerRef.current.contains(e.target as Node)
        ) {
          setOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
      if (open) {
        setSearch("");
        setTimeout(() => inputRef.current?.focus(), 0);
      }
    }, [open]);

    const handleSelect = useCallback(
      (option: ComboboxOption) => {
        if (option.disabled) return;
        onValueChange?.(option.value);
        setOpen(false);
      },
      [onValueChange],
    );

    return (
      <div ref={containerRef} className={cn("relative w-full", className)}>
        <button
          type="button"
          onClick={() => !disabled && setOpen(!open)}
          disabled={disabled}
          className={cn(
            "flex h-10 w-full items-center justify-between rounded-lg border border-border bg-surface px-3 py-2 text-sm transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            "hover:border-border-hover",
            disabled && "opacity-50 cursor-not-allowed",
            !selectedOption && "text-muted-foreground",
          )}
        >
          <span className="truncate">
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 text-muted" />
        </button>

        {open && (
          <div className="absolute z-50 mt-1 w-full rounded-lg border border-border bg-surface shadow-lg">
            {searchable && (
              <div className="flex items-center gap-2 border-b border-border px-3 py-2">
                <Search className="h-4 w-4 text-muted" />
                <input
                  ref={inputRef}
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search..."
                  className="flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted"
                />
                {search && (
                  <button
                    onClick={() => setSearch("")}
                    className="text-muted hover:text-foreground"
                  >
                    <X className="h-3 w-3" />
                  </button>
                )}
              </div>
            )}

            <div className="max-h-60 overflow-y-auto p-1">
              {filteredOptions.length === 0 ? (
                <div className="py-6 text-center text-sm text-muted-foreground">
                  {emptyMessage}
                </div>
              ) : (
                filteredOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleSelect(option)}
                    className={cn(
                      "flex w-full items-center gap-2 rounded-md px-2 py-2 text-sm transition-colors",
                      option.value === value
                        ? "bg-primary text-background"
                        : "text-foreground hover:bg-surface-hover",
                      option.disabled && "opacity-50 cursor-not-allowed",
                    )}
                  >
                    {option.icon && (
                      <span className="shrink-0">{option.icon}</span>
                    )}
                    <div className="flex flex-1 flex-col items-start gap-0.5">
                      <span className="font-medium">{option.label}</span>
                      {option.description && (
                        <span
                          className={cn(
                            "text-xs",
                            option.value === value
                              ? "text-background/70"
                              : "text-muted-foreground",
                          )}
                        >
                          {option.description}
                        </span>
                      )}
                    </div>
                    {option.value === value && (
                      <Check className="ml-auto h-4 w-4 shrink-0" />
                    )}
                  </button>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    );
  },
);

Combobox.displayName = "Combobox";
