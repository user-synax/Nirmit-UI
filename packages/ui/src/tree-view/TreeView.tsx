"use client";

import { cn } from "@repo/utils";
import {
  ChevronRight,
  ChevronDown,
  Folder,
  FolderOpen,
  File,
} from "lucide-react";
import {
  useState,
  createContext,
  useContext,
  ReactNode,
  HTMLAttributes,
} from "react";

export interface TreeNode {
  id: string;
  label: string;
  icon?: ReactNode;
  children?: TreeNode[];
  disabled?: boolean;
  onSelect?: (node: TreeNode) => void;
}

interface TreeViewContextType {
  expandedIds: Set<string>;
  toggleNode: (id: string) => void;
  selectedId: string | null;
  setSelectedId: (id: string | null) => void;
  indent: number;
}

const TreeViewContext = createContext<TreeViewContextType | undefined>(
  undefined,
);

function useTreeView() {
  const context = useContext(TreeViewContext);
  if (!context) {
    throw new Error("useTreeView must be used within a TreeView");
  }
  return context;
}

export interface TreeViewProps extends HTMLAttributes<HTMLDivElement> {
  data: TreeNode[];
  defaultExpanded?: string[];
  indent?: number;
  showIcons?: boolean;
  selectable?: boolean;
}

export function TreeView({
  data,
  defaultExpanded = [],
  indent = 20,
  showIcons = true,
  selectable = true,
  className,
  ...props
}: TreeViewProps) {
  const [expandedIds, setExpandedIds] = useState(new Set(defaultExpanded));
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const toggleNode = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <TreeViewContext.Provider
      value={{ expandedIds, toggleNode, selectedId, setSelectedId, indent }}
    >
      <div role="tree" className={cn("w-full", className)} {...props}>
        {data.map((node) => (
          <TreeNodeComponent
            key={node.id}
            node={node}
            showIcons={showIcons}
            selectable={selectable}
          />
        ))}
      </div>
    </TreeViewContext.Provider>
  );
}

interface TreeNodeComponentProps {
  node: TreeNode;
  showIcons: boolean;
  selectable: boolean;
}

function TreeNodeComponent({
  node,
  showIcons,
  selectable,
}: TreeNodeComponentProps) {
  const { expandedIds, toggleNode, selectedId, setSelectedId, indent } =
    useTreeView();
  const isExpanded = expandedIds.has(node.id);
  const isSelected = selectedId === node.id;
  const hasChildren = node.children && node.children.length > 0;

  const handleSelect = () => {
    if (node.disabled) return;
    if (selectable) {
      setSelectedId(node.id);
    }
    node.onSelect?.(node);
  };

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!node.disabled) {
      toggleNode(node.id);
    }
  };

  return (
    <div
      role="treeitem"
      aria-expanded={hasChildren ? isExpanded : undefined}
      aria-selected={isSelected}
    >
      <div
        onClick={handleSelect}
        className={cn(
          "flex items-center gap-1.5 rounded-md py-1.5 pr-2 text-sm transition-colors cursor-pointer",
          "hover:bg-surface-hover",
          isSelected && "bg-primary/10 text-primary",
          node.disabled && "opacity-50 cursor-not-allowed",
        )}
        style={{ paddingLeft: `${indent}px` }}
      >
        {hasChildren ? (
          <button
            onClick={handleToggle}
            className="flex h-5 w-5 shrink-0 items-center justify-center rounded text-muted hover:bg-surface"
          >
            {isExpanded ? (
              <ChevronDown className="h-3.5 w-3.5" />
            ) : (
              <ChevronRight className="h-3.5 w-3.5" />
            )}
          </button>
        ) : (
          <span className="w-5" />
        )}

        {showIcons && (
          <span className="shrink-0 text-muted">
            {node.icon ||
              (hasChildren ? (
                isExpanded ? (
                  <FolderOpen className="h-4 w-4" />
                ) : (
                  <Folder className="h-4 w-4" />
                )
              ) : (
                <File className="h-4 w-4" />
              ))}
          </span>
        )}

        <span className="truncate text-foreground">{node.label}</span>
      </div>

      {hasChildren && isExpanded && (
        <div role="group">
          {node.children!.map((child) => (
            <TreeNodeComponent
              key={child.id}
              node={child}
              showIcons={showIcons}
              selectable={selectable}
            />
          ))}
        </div>
      )}
    </div>
  );
}
