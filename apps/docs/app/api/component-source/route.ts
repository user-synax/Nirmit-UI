import { promises as fs } from "node:fs";
import path from "node:path";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const sourcePathById: Record<string, string> = {
  button: "packages/ui/src/button/Button.tsx",
  input: "packages/ui/src/input/Input.tsx",
  textarea: "packages/ui/src/textarea/Textarea.tsx",
  card: "packages/ui/src/card/Card.tsx",
  "empty-state": "packages/ui/src/empty-state/EmptyState.tsx",
  badge: "packages/ui/src/badge/Badge.tsx",
  avatar: "packages/ui/src/avatar/Avatar.tsx",
  table: "packages/ui/src/table/Table.tsx",
  timeline: "packages/ui/src/timeline/Timeline.tsx",
  alert: "packages/ui/src/alert/Alert.tsx",
  progress: "packages/ui/src/progress/Progress.tsx",
  skeleton: "packages/ui/src/skeleton/Skeleton.tsx",
  checkbox: "packages/ui/src/checkbox/Checkbox.tsx",
  switch: "packages/ui/src/switch/Switch.tsx",
  select: "packages/ui/src/select/Select.tsx",
  tabs: "packages/ui/src/tabs/Tabs.tsx",
  accordion: "packages/ui/src/accordion/Accordion.tsx",
  dropdown: "packages/ui/src/dropdown/Dropdown.tsx",
  breadcrumb: "packages/ui/src/breadcrumb/Breadcrumb.tsx",
  pagination: "packages/ui/src/pagination/Pagination.tsx",
  tooltip: "packages/ui/src/tooltip/Tooltip.tsx",
  modal: "packages/ui/src/modal/Modal.tsx",
  separator: "packages/ui/src/separator/Separator.tsx",
  kbd: "packages/ui/src/kbd/Kbd.tsx",
  "code-block": "packages/ui/src/code-block/CodeBlock.tsx",
  spinner: "packages/ui/src/spinner/Spinner.tsx",
  "loading-dots": "packages/ui/src/loading-dots/LoadingDots.tsx",
};

function extractDependencies(code: string): string[] {
  const deps = new Set<string>();
  const importRegex = /from\s+["']([^"']+)["']/g;
  let match: RegExpExecArray | null = importRegex.exec(code);

  while (match) {
    const pkg = match[1];
    if (!pkg.startsWith(".") && pkg !== "react") {
      deps.add(pkg);
    }
    match = importRegex.exec(code);
  }

  return Array.from(deps).sort((a, b) => a.localeCompare(b));
}

function convertWorkspaceCnImport(code: string): { code: string; extraDeps: string[] } {
  const cnImportRegex = /^import\s+\{\s*cn\s*\}\s+from\s+["']@repo\/utils["'];?\s*$/m;
  if (!cnImportRegex.test(code)) {
    return { code, extraDeps: [] };
  }

  const withoutCnImport = code.replace(cnImportRegex, "").replace(/\n{3,}/g, "\n\n");
  const lines = withoutCnImport.split("\n");

  let insertAt = 0;
  while (insertAt < lines.length && lines[insertAt].trim() === "") {
    insertAt += 1;
  }
  if (lines[insertAt]?.startsWith('"use client"') || lines[insertAt]?.startsWith("'use client'")) {
    insertAt += 1;
  }
  while (insertAt < lines.length && lines[insertAt].trim() === "") {
    insertAt += 1;
  }

  while (insertAt < lines.length) {
    const line = lines[insertAt].trim();
    if (!line.startsWith("import ")) {
      break;
    }
    insertAt += 1;
    while (insertAt < lines.length && !lines[insertAt - 1].trim().endsWith(";")) {
      insertAt += 1;
    }
    while (insertAt < lines.length && lines[insertAt].trim() === "") {
      insertAt += 1;
    }
  }

  const injection = [
    'import { clsx, type ClassValue } from "clsx";',
    'import { twMerge } from "tailwind-merge";',
    "",
    "function cn(...inputs: ClassValue[]) {",
    "  return twMerge(clsx(inputs));",
    "}",
    "",
  ];

  lines.splice(insertAt, 0, ...injection);
  return {
    code: lines.join("\n"),
    extraDeps: ["clsx", "tailwind-merge"],
  };
}

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  if (!id || !sourcePathById[id]) {
    return NextResponse.json(
      { error: "Unknown component id." },
      { status: 400 },
    );
  }

  try {
    const repoRoot = path.resolve(process.cwd(), "../..");
    const relativeSourcePath = sourcePathById[id];
    const absoluteSourcePath = path.join(repoRoot, relativeSourcePath);
    const rawCode = await fs.readFile(absoluteSourcePath, "utf8");

    const { code: transformedCode, extraDeps } = convertWorkspaceCnImport(rawCode);
    const deps = new Set([...extractDependencies(transformedCode), ...extraDeps]);
    const dependencies = Array.from(deps).sort((a, b) => a.localeCompare(b));

    return NextResponse.json({
      id,
      filePath: relativeSourcePath,
      code: transformedCode,
      dependencies,
      installCommand: dependencies.length > 0 ? `npm i ${dependencies.join(" ")}` : "",
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to load component source." },
      { status: 500 },
    );
  }
}
