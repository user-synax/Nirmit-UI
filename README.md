# NirmitUI

NirmitUI is a modern, minimalist, and accessible UI component system built in a monorepo with Next.js, TypeScript, Tailwind CSS, and Radix UI primitives.

It is designed for teams that want:
- clean visual defaults
- reusable production-ready components
- fast developer workflow with shared packages

---

## Highlights

- 25+ reusable components and utilities
- token-driven design foundation (`@repo/tokens`)
- component docs site with live previews and copy-ready snippets
- searchable component explorer with mobile-friendly layout
- accessibility-first primitives (Radix-based)
- monorepo structure for scale and consistency

---

## Monorepo Structure

```text
nirmitui/
|-- apps/
|   `-- docs/                # Next.js docs + component explorer
|-- packages/
|   |-- ui/                  # Core component library
|   |-- tokens/              # Design tokens + Tailwind preset
|   |-- utils/               # Shared utilities (e.g. cn)
|   `-- hooks/               # Shared React hooks
|-- turbo.json
|-- pnpm-workspace.yaml
`-- package.json
```

---

## Packages

| Package | Purpose |
|---|---|
| `apps/docs` | Public-facing docs and component showcase |
| `@repo/ui` | UI components and composition primitives |
| `@repo/tokens` | CSS variables + Tailwind preset |
| `@repo/utils` | Shared helpers (`clsx`, `tailwind-merge`, etc.) |
| `@repo/hooks` | Reusable custom hooks |

---

## Component Coverage

Current exports from `@repo/ui` include:

- Button
- Input
- Textarea
- Card
- Modal
- Badge
- Avatar
- Dropdown
- Checkbox
- Switch
- Tabs
- Tooltip
- Skeleton
- Alert
- Progress
- Accordion
- Select
- Separator
- Spinner
- Kbd
- Breadcrumb
- EmptyState
- Pagination
- CodeBlock
- Table
- Timeline
- LoadingDots

---

## Quick Start

### 1) Install dependencies

```bash
pnpm install
```

### 2) Run docs app

```bash
pnpm --filter docs dev
```

Docs will run on `http://localhost:3000` (default Next.js port).

### 3) Run all workspace dev tasks (optional)

```bash
pnpm dev
```

---

## Workspace Scripts

At repo root:

```bash
pnpm dev         # turbo dev
pnpm build       # turbo build
pnpm lint        # turbo lint
pnpm typecheck   # turbo typecheck
pnpm test        # turbo test
pnpm format      # prettier write
```

---

## Usage Example

```tsx
import { Button, Card, CardTitle, CardContent } from "@repo/ui";

export function ExampleCard() {
  return (
    <Card variant="interactive">
      <CardTitle>Welcome</CardTitle>
      <CardContent className="mt-2">
        <Button variant="soft">Get Started</Button>
      </CardContent>
    </Card>
  );
}
```

---

## Deploy Docs on Vercel

If this repository is connected to GitHub:

1. Import the project in Vercel.
2. Set **Root Directory** to `apps/docs`.
3. Use:
   - Install Command: `pnpm install`
   - Build Command: `cd ../.. && turbo build --filter=docs`
   - Output Directory: `.next`

---

## Notes

- This repo uses workspace packages (`workspace:*`) and is optimized for monorepo usage.
- If you want to publish `@repo/ui` to npm, package names/versioning and publish settings will need preparation.

---

## Contributing

Contributions are welcome. For larger changes, open an issue first to discuss scope and direction.

Please run lint/build checks before opening a PR:

```bash
pnpm lint
pnpm build
```
