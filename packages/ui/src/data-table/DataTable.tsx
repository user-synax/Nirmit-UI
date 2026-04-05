"use client";

import { cn } from "@repo/utils";
import { useState, useMemo, HTMLAttributes, ReactNode } from "react";

export interface Column<T> {
  key: string;
  header: string;
  render?: (item: T, index: number) => ReactNode;
  sortable?: boolean;
  className?: string;
}

export interface DataTableProps<T> extends HTMLAttributes<HTMLDivElement> {
  data: T[];
  columns: Column<T>[];
  onRowClick?: (item: T, index: number) => void;
  emptyMessage?: string;
  striped?: boolean;
  hoverable?: boolean;
  selectable?: boolean;
  selectedRows?: Set<number>;
  onSelectionChange?: (selected: Set<number>) => void;
}

export function DataTable<T extends Record<string, any>>({
  data,
  columns,
  onRowClick,
  emptyMessage = "No data available",
  striped = false,
  hoverable = true,
  selectable = false,
  selectedRows,
  onSelectionChange,
  className,
  ...props
}: DataTableProps<T>) {
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const handleSort = (key: string) => {
    const column = columns.find((c) => c.key === key);
    if (!column?.sortable) return;

    if (sortKey === key) {
      setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDirection("asc");
    }
  };

  const sortedData = useMemo(() => {
    if (!sortKey) return data;

    return [...data].sort((a, b) => {
      const aVal = a[sortKey];
      const bVal = b[sortKey];

      if (typeof aVal === "number" && typeof bVal === "number") {
        return sortDirection === "asc" ? aVal - bVal : bVal - aVal;
      }

      const aStr = String(aVal).toLowerCase();
      const bStr = String(bVal).toLowerCase();

      if (sortDirection === "asc") {
        return aStr.localeCompare(bStr);
      }
      return bStr.localeCompare(aStr);
    });
  }, [data, sortKey, sortDirection]);

  const handleSelectAll = () => {
    if (!onSelectionChange) return;
    if (selectedRows?.size === data.length) {
      onSelectionChange(new Set());
    } else {
      onSelectionChange(new Set(data.map((_, i) => i)));
    }
  };

  const handleSelectRow = (index: number) => {
    if (!onSelectionChange) return;
    const next = new Set(selectedRows);
    if (next.has(index)) {
      next.delete(index);
    } else {
      next.add(index);
    }
    onSelectionChange(next);
  };

  const getSortIcon = (key: string) => {
    if (sortKey !== key) return "↕";
    return sortDirection === "asc" ? "↑" : "↓";
  };

  return (
    <div className={cn("w-full overflow-x-auto", className)} {...props}>
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-border">
            {selectable && (
              <th className="w-12 px-4 py-3">
                <input
                  type="checkbox"
                  checked={
                    selectedRows?.size === data.length && data.length > 0
                  }
                  onChange={handleSelectAll}
                  className="h-4 w-4 rounded border-border text-primary focus:ring-primary"
                />
              </th>
            )}
            {columns.map((column) => (
              <th
                key={column.key}
                onClick={() => handleSort(column.key)}
                className={cn(
                  "px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground",
                  column.sortable &&
                    "cursor-pointer select-none hover:text-foreground",
                  column.className,
                )}
              >
                <span className="inline-flex items-center gap-1">
                  {column.header}
                  {column.sortable && (
                    <span className="text-muted">
                      {getSortIcon(column.key)}
                    </span>
                  )}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length + (selectable ? 1 : 0)}
                className="px-4 py-12 text-center text-sm text-muted-foreground"
              >
                {emptyMessage}
              </td>
            </tr>
          ) : (
            sortedData.map((item, index) => {
              const originalIndex = data.indexOf(item);
              const isSelected = selectedRows?.has(originalIndex);

              return (
                <tr
                  key={index}
                  onClick={() => onRowClick?.(item, originalIndex)}
                  className={cn(
                    "border-b border-border/50 transition-colors",
                    striped && index % 2 === 0 && "bg-surface/50",
                    hoverable && "hover:bg-surface-hover",
                    onRowClick && "cursor-pointer",
                    isSelected && "bg-primary/5",
                  )}
                >
                  {selectable && (
                    <td className="px-4 py-3">
                      <input
                        type="checkbox"
                        checked={isSelected ?? false}
                        onChange={() => handleSelectRow(originalIndex)}
                        onClick={(e) => e.stopPropagation()}
                        className="h-4 w-4 rounded border-border text-primary focus:ring-primary"
                      />
                    </td>
                  )}
                  {columns.map((column) => (
                    <td
                      key={column.key}
                      className={cn(
                        "px-4 py-3 text-sm text-foreground",
                        column.className,
                      )}
                    >
                      {column.render
                        ? column.render(item, originalIndex)
                        : String(item[column.key] ?? "")}
                    </td>
                  ))}
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}
