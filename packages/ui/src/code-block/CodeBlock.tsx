"use client";

import { cn } from "@repo/utils";
import { Check, Copy } from "lucide-react";
import React from "react";

export interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
  code: string;
  language?: string;
  showCopy?: boolean;
  variant?: "default" | "soft";
}

const variantStyles = {
  default: "border-border bg-[#081223] text-slate-100",
  soft: "border-info/30 bg-info-pale/20 text-foreground",
};

export function CodeBlock({
  code,
  language = "tsx",
  showCopy = true,
  variant = "default",
  className,
  ...props
}: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = React.useCallback(async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1200);
  }, [code]);

  return (
    <div className="relative">
      {showCopy && (
        <button
          onClick={handleCopy}
          className="absolute right-2 top-2 inline-flex items-center gap-1 rounded-md border border-border bg-surface/80 px-2 py-1 text-xs text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
          aria-label="Copy code block"
        >
          {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
          {copied ? "Copied" : "Copy"}
        </button>
      )}
      <pre
        className={cn(
          "overflow-x-auto rounded-xl border p-4 text-xs sm:text-sm",
          variantStyles[variant],
          className,
        )}
        {...props}
      >
        <code data-language={language}>{code}</code>
      </pre>
    </div>
  );
}
