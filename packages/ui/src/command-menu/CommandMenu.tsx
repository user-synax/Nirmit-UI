"use client";

import { cn } from "@repo/utils";
import {
  Search,
  Command as CommandIcon,
  X,
  ArrowUp,
  ArrowDown,
  CornerDownLeft,
} from "lucide-react";
import {
  useState,
  useRef,
  useEffect,
  useCallback,
  ReactNode,
  KeyboardEvent,
  forwardRef,
  useImperativeHandle,
} from "react";

export interface CommandItem {
  id: string;
  label: string;
  description?: string;
  icon?: ReactNode;
  shortcut?: string;
  action?: () => void;
}

export interface CommandGroup {
  heading?: string;
  items: CommandItem[];
}

export interface CommandMenuProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  groups: CommandGroup[];
  placeholder?: string;
  className?: string;
}

export interface CommandMenuRef {
  focusInput: () => void;
}

export const CommandMenu = forwardRef<CommandMenuRef, CommandMenuProps>(
  (
    {
      open,
      onOpenChange,
      groups,
      placeholder = "Type a command...",
      className,
    },
    ref,
  ) => {
    const [search, setSearch] = useState("");
    const [selectedIndex, setSelectedIndex] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const listRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => ({
      focusInput: () => inputRef.current?.focus(),
    }));

    const allItems = groups.flatMap((g) => g.items);

    const filteredItems = search
      ? allItems.filter(
          (item) =>
            item.label.toLowerCase().includes(search.toLowerCase()) ||
            item.description?.toLowerCase().includes(search.toLowerCase()),
        )
      : allItems;

    useEffect(() => {
      if (open) {
        setSearch("");
        setSelectedIndex(0);
        setTimeout(() => inputRef.current?.focus(), 0);
      }
    }, [open]);

    useEffect(() => {
      setSelectedIndex(0);
    }, [search]);

    useEffect(() => {
      if (open) {
        const handleKeyDown = (e: KeyboardEvent) => {
          if ((e.metaKey || e.ctrlKey) && e.key === "k") {
            e.preventDefault();
            onOpenChange(!open);
          }
        };
        window.addEventListener("keydown", handleKeyDown as any);
        return () =>
          window.removeEventListener("keydown", handleKeyDown as any);
      }
    }, [open, onOpenChange]);

    const handleKeyDown = useCallback(
      (e: KeyboardEvent<HTMLInputElement>) => {
        switch (e.key) {
          case "ArrowDown":
            e.preventDefault();
            setSelectedIndex((prev) =>
              prev < filteredItems.length - 1 ? prev + 1 : prev,
            );
            break;
          case "ArrowUp":
            e.preventDefault();
            setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
            break;
          case "Enter":
            e.preventDefault();
            if (filteredItems[selectedIndex]) {
              filteredItems[selectedIndex].action?.();
              onOpenChange(false);
            }
            break;
          case "Escape":
            e.preventDefault();
            onOpenChange(false);
            break;
        }
      },
      [filteredItems, selectedIndex, onOpenChange],
    );

    useEffect(() => {
      const selectedEl = listRef.current?.querySelector(
        `[data-index="${selectedIndex}"]`,
      ) as HTMLElement;
      selectedEl?.scrollIntoView({ block: "nearest" });
    }, [selectedIndex]);

    if (!open) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh]">
        <div
          className="fixed inset-0 bg-black/60"
          onClick={() => onOpenChange(false)}
        />
        <div
          className={cn(
            "relative z-50 w-full max-w-lg rounded-xl border border-border bg-surface shadow-2xl overflow-hidden",
            "animate-in fade-in-0 zoom-in-95",
            className,
          )}
        >
          <div className="flex items-center gap-2 border-b border-border px-4 py-3">
            <Search className="h-4 w-4 text-muted" />
            <input
              ref={inputRef}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={placeholder}
              className="flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted"
            />
            <button
              onClick={() => onOpenChange(false)}
              className="rounded-md p-1 text-muted hover:text-foreground transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div ref={listRef} className="max-h-[300px] overflow-y-auto p-2">
            {filteredItems.length === 0 ? (
              <div className="py-8 text-center text-sm text-muted-foreground">
                No results found.
              </div>
            ) : (
              groups.map((group) => {
                const visibleItems = group.items.filter((item) =>
                  filteredItems.includes(item),
                );
                if (visibleItems.length === 0) return null;

                return (
                  <div key={group.heading || "default"} className="mb-2">
                    {group.heading && (
                      <div className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
                        {group.heading}
                      </div>
                    )}
                    {visibleItems.map((item) => {
                      const globalIdx = filteredItems.indexOf(item);
                      const isSelected = globalIdx === selectedIndex;

                      return (
                        <button
                          key={item.id}
                          data-index={globalIdx}
                          className={cn(
                            "flex w-full items-center gap-3 rounded-lg px-2 py-2.5 text-sm transition-colors",
                            isSelected
                              ? "bg-primary text-background"
                              : "text-foreground hover:bg-surface-hover",
                          )}
                          onClick={() => {
                            item.action?.();
                            onOpenChange(false);
                          }}
                          onMouseEnter={() => setSelectedIndex(globalIdx)}
                        >
                          {item.icon && (
                            <span className="shrink-0">{item.icon}</span>
                          )}
                          <div className="flex flex-1 flex-col items-start gap-0.5">
                            <span className="font-medium">{item.label}</span>
                            {item.description && (
                              <span
                                className={cn(
                                  "text-xs",
                                  isSelected
                                    ? "text-background/70"
                                    : "text-muted-foreground",
                                )}
                              >
                                {item.description}
                              </span>
                            )}
                          </div>
                          {item.shortcut && (
                            <kbd
                              className={cn(
                                "ml-auto rounded px-1.5 py-0.5 text-xs font-mono",
                                isSelected
                                  ? "bg-background/20"
                                  : "bg-surface border border-border",
                              )}
                            >
                              {item.shortcut}
                            </kbd>
                          )}
                        </button>
                      );
                    })}
                  </div>
                );
              })
            )}
          </div>

          <div className="flex items-center gap-4 border-t border-border px-4 py-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <ArrowUp className="h-3 w-3" />
              <ArrowDown className="h-3 w-3" />
              Navigate
            </span>
            <span className="flex items-center gap-1">
              <CornerDownLeft className="h-3 w-3" />
              Select
            </span>
            <span className="flex items-center gap-1">
              <CommandIcon className="h-3 w-3" />K Close
            </span>
          </div>
        </div>
      </div>
    );
  },
);

CommandMenu.displayName = "CommandMenu";
