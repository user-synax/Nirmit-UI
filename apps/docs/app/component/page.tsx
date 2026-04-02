"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@repo/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  CodeBlock,
  Dropdown,
  DropdownCheckboxItem,
  DropdownContent,
  DropdownItem,
  DropdownLabel,
  DropdownRadioGroup,
  DropdownRadioItem,
  DropdownSeparator,
  DropdownShortcut,
  DropdownTrigger,
  EmptyState,
  Input,
  Kbd,
  LoadingDots,
  Modal,
  Pagination,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationList,
  PaginationNext,
  PaginationPrevious,
  Progress,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Separator,
  Skeleton,
  SkeletonText,
  Spinner,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
  Timeline,
  TimelineDescription,
  TimelineDot,
  TimelineItem,
  TimelineLine,
  TimelineMeta,
  TimelineTitle,
  Tooltip,
} from "@repo/ui";
import {
  ArrowLeft,
  Bell,
  Check,
  ChevronRight,
  Copy,
  Component,
  FolderSearch,
  Layers,
  Palette,
  Search,
  Settings,
  Sparkles,
  User,
} from "lucide-react";

type ShowcaseItem = {
  id: string;
  name: string;
  category: string;
  description: string;
  Preview: React.ComponentType;
};

function ButtonPreview() {
  return (
    <div className="space-y-5">
      <div className="flex flex-wrap gap-3">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="success">Success</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="soft">Soft</Button>
        <Button variant="link">Link Variant</Button>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
        <Button isLoading>Loading</Button>
      </div>
    </div>
  );
}

function InputPreview() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Input
        label="Email"
        placeholder="you@example.com"
        hint="We only use this for account updates."
      />
      <Input
        label="Search"
        placeholder="Search components..."
        leftIcon={<Search className="h-4 w-4" />}
        variant="filled"
      />
      <Input
        label="Git URL"
        placeholder="https://github.com/owner/repo"
        variant="ghost"
      />
    </div>
  );
}

function TextareaPreview() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Textarea
        label="Project Brief"
        placeholder="Describe your goal and constraints..."
        hint="Keep it short and clear for faster reviews."
      />
      <Textarea
        label="Feedback"
        placeholder="What can we improve?"
        error="A minimum of 30 characters is required."
      />
    </div>
  );
}

function CardPreview() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Starter Card</CardTitle>
          <CardDescription>Balanced spacing for summary content.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Use cards to group related data and keep content readable.
          </p>
        </CardContent>
        <CardFooter>
          <Button size="sm">Open</Button>
          <Button size="sm" variant="ghost">
            Dismiss
          </Button>
        </CardFooter>
      </Card>
      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Elevated Card</CardTitle>
          <CardDescription>Visual hierarchy with clean depth.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Great for dashboards, featured sections, and highlights.
          </p>
        </CardContent>
      </Card>
      <Card variant="interactive">
        <CardHeader>
          <CardTitle>Interactive Card</CardTitle>
          <CardDescription>Hover to see motion and depth.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Designed for clickable panels and dashboard shortcuts.
          </p>
        </CardContent>
      </Card>
      <Card variant="gradient">
        <CardHeader>
          <CardTitle>Gradient Card</CardTitle>
          <CardDescription>Subtle modern glow from layered surfaces.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Good for callouts, premium sections, and hero side panels.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

function EmptyStatePreview() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <EmptyState
        title="No projects yet"
        description="Create your first project to start collaborating with your team."
        action={<Button>Create Project</Button>}
      />
      <EmptyState
        variant="soft"
        icon={<FolderSearch className="h-5 w-5" />}
        title="No search results"
        description="Try another keyword or clear your filters."
        action={
          <Button variant="secondary" size="sm">
            Clear Filters
          </Button>
        }
      />
    </div>
  );
}

function BadgePreview() {
  return (
    <div className="flex flex-wrap gap-3">
      <Badge>Default</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="neutral">Neutral</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="destructive">Error</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge size="sm">Small</Badge>
    </div>
  );
}

function AvatarPreview() {
  return (
    <div className="space-y-5">
      <div className="flex items-end gap-3">
        {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
          <Avatar key={size} size={size}>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>UI</AvatarFallback>
          </Avatar>
        ))}
      </div>
      <div>
        <p className="mb-3 text-sm text-muted">Team</p>
        <AvatarGroup limit={4}>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://github.com/leerob.png" />
            <AvatarFallback>LR</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://github.com/evilrabbit.png" />
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://github.com/timneutkens.png" />
            <AvatarFallback>TN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://github.com/acdlite.png" />
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
        </AvatarGroup>
      </div>
    </div>
  );
}

function AlertPreview() {
  return (
    <div className="space-y-3">
      <Alert variant="info" title="Heads up">
        This project switched to the new component explorer layout.
      </Alert>
      <Alert variant="success" title="Saved">
        Theme and display settings were updated successfully.
      </Alert>
      <Alert variant="warning" title="Attention">
        You have unsaved edits on this component demo.
      </Alert>
      <Alert variant="neutral" title="Note">
        Neutral variant is useful for non-blocking guidance.
      </Alert>
    </div>
  );
}

function ProgressPreview() {
  const [value, setValue] = React.useState(36);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setValue((prev) => (prev >= 100 ? 20 : prev + 2));
    }, 120);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-5">
      <Progress value={value} label="Publishing updates" showValue />
      <Progress value={72} variant="success" label="Asset sync" showValue />
      <Progress value={41} variant="warning" label="Audit checks" showValue />
      <Progress value={58} variant="info" label="API health" showValue />
    </div>
  );
}

function SkeletonPreview() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-3 rounded-lg border border-border p-4">
          <Skeleton className="h-6 w-1/3" />
          <SkeletonText lines={3} />
        </div>
        <div className="space-y-3 rounded-lg border border-border p-4">
          <div className="flex items-center gap-3">
            <Skeleton variant="circular" className="h-10 w-10" />
            <div className="w-full space-y-2">
              <Skeleton className="h-3 w-1/2" />
              <Skeleton className="h-3 w-2/3" />
            </div>
          </div>
          <Skeleton variant="rounded" className="h-24 w-full" />
        </div>
      </div>
    </div>
  );
}

function CheckboxPreview() {
  return (
    <div className="space-y-3">
      <Checkbox label="Enable daily digest email" defaultChecked />
      <Checkbox label="Enable product release notifications" />
      <Checkbox label="Allow usage analytics" />
    </div>
  );
}

function SwitchPreview() {
  return (
    <div className="space-y-4">
      <Switch
        defaultChecked
        label="Compact mode"
        description="Reduce spacing for denser layouts."
      />
      <Switch
        label="Sound effects"
        description="Play subtle UI sounds for key actions."
      />
      <Switch
        defaultChecked
        label="High contrast"
        description="Improve readability for long sessions."
      />
    </div>
  );
}

function SelectPreview() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Choose a framework" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="next">Next.js</SelectItem>
          <SelectItem value="nuxt">Nuxt</SelectItem>
          <SelectItem value="sveltekit">SvelteKit</SelectItem>
          <SelectItem value="remix">Remix</SelectItem>
        </SelectContent>
      </Select>
      <Select defaultValue="dark">
        <SelectTrigger>
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
          <SelectItem value="light">Light</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

function TabsPreview() {
  return (
    <Tabs defaultValue="design">
      <TabsList className="w-full md:w-auto">
        <TabsTrigger value="design">Design</TabsTrigger>
        <TabsTrigger value="build">Build</TabsTrigger>
        <TabsTrigger value="ship">Ship</TabsTrigger>
      </TabsList>
      <TabsContent value="design">
        <p className="text-sm text-muted-foreground">
          Create a clear visual system with tokens, type scale, and spacing.
        </p>
      </TabsContent>
      <TabsContent value="build">
        <p className="text-sm text-muted-foreground">
          Compose reusable primitives so teams can ship consistent interfaces.
        </p>
      </TabsContent>
      <TabsContent value="ship">
        <p className="text-sm text-muted-foreground">
          Monitor quality with previews, checks, and accessibility testing.
        </p>
      </TabsContent>
    </Tabs>
  );
}

function AccordionPreview() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Can I customize every component?</AccordionTrigger>
        <AccordionContent>
          Yes. The library is token-driven and uses Tailwind utility classes for
          straightforward overrides.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is accessibility built in?</AccordionTrigger>
        <AccordionContent>
          Components are built on Radix primitives and include keyboard and
          focus support by default.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Can I use only what I need?</AccordionTrigger>
        <AccordionContent>
          Yes. Import only the components you need to keep bundle size lean.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

function DropdownPreview() {
  const [showActivity, setShowActivity] = React.useState(true);
  const [panel, setPanel] = React.useState("right");

  return (
    <div className="flex justify-center">
      <Dropdown>
        <DropdownTrigger asChild>
          <Button variant="secondary">Open Menu</Button>
        </DropdownTrigger>
        <DropdownContent>
          <DropdownLabel>Workspace</DropdownLabel>
          <DropdownSeparator />
          <DropdownItem>
            <User className="mr-2 h-4 w-4" />
            Profile
            <DropdownShortcut>Cmd+P</DropdownShortcut>
          </DropdownItem>
          <DropdownItem>
            <Bell className="mr-2 h-4 w-4" />
            Notifications
          </DropdownItem>
          <DropdownItem>
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </DropdownItem>
          <DropdownSeparator />
          <DropdownCheckboxItem
            checked={showActivity}
            onCheckedChange={(checked) => setShowActivity(checked === true)}
          >
            Show activity panel
          </DropdownCheckboxItem>
          <DropdownRadioGroup value={panel} onValueChange={setPanel}>
            <DropdownLabel>Panel side</DropdownLabel>
            <DropdownRadioItem value="left">Left</DropdownRadioItem>
            <DropdownRadioItem value="right">Right</DropdownRadioItem>
          </DropdownRadioGroup>
        </DropdownContent>
      </Dropdown>
    </div>
  );
}

function TooltipPreview() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Tooltip content="Inspect component details">
        <Button variant="outline">Hover me</Button>
      </Tooltip>
      <Tooltip content="Modern colors are applied across the page" side="bottom">
        <Button variant="ghost">Color note</Button>
      </Tooltip>
    </div>
  );
}

function ModalPreview() {
  return (
    <div className="flex justify-center">
      <Modal
        trigger={<Button>Open Modal</Button>}
        title="Share This Component"
        description="Send a quick preview link to your team."
        size="2xl"
      >
        <div className="space-y-4">
          <Input label="Email" placeholder="designer@team.com" />
          <Textarea
            label="Message"
            placeholder="Take a look at this updated component setup."
          />
          <Button className="w-full">Send Preview</Button>
        </div>
      </Modal>
    </div>
  );
}

function SeparatorPreview() {
  return (
    <div className="space-y-5">
      <div className="rounded-lg border border-border p-4">
        <p className="text-sm font-medium text-foreground">Profile Settings</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Manage visibility, privacy, and notifications.
        </p>
        <Separator className="my-4" />
        <div className="flex items-center gap-4 text-sm">
          <span>Account</span>
          <Separator orientation="vertical" className="h-4" />
          <span>Security</span>
          <Separator orientation="vertical" className="h-4" />
          <span>Billing</span>
        </div>
      </div>
    </div>
  );
}

function SpinnerPreview() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Spinner size="sm" variant="default" />
      <Spinner size="md" variant="primary" />
      <Spinner size="lg" variant="success" />
      <Spinner size="md" variant="warning" />
      <Spinner size="md" variant="destructive" />
    </div>
  );
}

function KbdPreview() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        Quick action: <Kbd>Ctrl</Kbd> + <Kbd>K</Kbd>
      </p>
      <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
        <span>Save</span>
        <Kbd size="sm">Ctrl</Kbd>
        <Kbd size="sm">S</Kbd>
        <Separator orientation="vertical" className="h-4" />
        <span>Command Palette</span>
        <Kbd>Ctrl</Kbd>
        <Kbd>P</Kbd>
      </div>
    </div>
  );
}

function BreadcrumbPreview() {
  return (
    <div className="space-y-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Docs</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Components</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Button</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Projects</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>NirmitUI</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}

function PaginationPreview() {
  const [page, setPage] = React.useState(4);

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        Current page: <span className="font-medium text-foreground">{page}</span>
      </p>
      <Pagination>
        <PaginationList className="flex-wrap justify-center">
          <PaginationItem>
            <PaginationPrevious
              href="#"
              className="[&>span]:hidden sm:[&>span]:inline"
              onClick={(event) => {
                event.preventDefault();
                setPage((prev) => Math.max(1, prev - 1));
              }}
            />
          </PaginationItem>
          {[1, 2, 3, 4, 5].map((value) => (
            <PaginationItem key={value}>
              <PaginationLink
                href="#"
                isActive={value === page}
                onClick={(event) => {
                  event.preventDefault();
                  setPage(value);
                }}
              >
                {value}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              href="#"
              className="[&>span]:hidden sm:[&>span]:inline"
              onClick={(event) => {
                event.preventDefault();
                setPage((prev) => Math.min(10, prev + 1));
              }}
            />
          </PaginationItem>
        </PaginationList>
      </Pagination>
    </div>
  );
}

function CodeBlockPreview() {
  const snippet = `import { Button } from "@repo/ui";

export function Demo() {
  return <Button variant="soft">Run Action</Button>;
}`;

  return (
    <div className="space-y-4">
      <CodeBlock code={snippet} language="tsx" />
      <CodeBlock
        code={`pnpm add @repo/ui`}
        language="bash"
        variant="soft"
      />
    </div>
  );
}

function TablePreview() {
  return (
    <Table variant="striped">
      <TableHeader>
        <TableRow>
          <TableHead>Component</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Variants</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">Button</TableCell>
          <TableCell>Actions</TableCell>
          <TableCell>Stable</TableCell>
          <TableCell className="text-right">9</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Modal</TableCell>
          <TableCell>Overlays</TableCell>
          <TableCell>Stable</TableCell>
          <TableCell className="text-right">6 sizes</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Timeline</TableCell>
          <TableCell>Data Display</TableCell>
          <TableCell>New</TableCell>
          <TableCell className="text-right">Composable</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

function TimelinePreview() {
  return (
    <Timeline>
      <TimelineItem>
        <TimelineDot active />
        <TimelineLine />
        <TimelineMeta>Step 1</TimelineMeta>
        <TimelineTitle>Initialize project</TimelineTitle>
        <TimelineDescription>
          Set up docs app and shared workspace dependencies.
        </TimelineDescription>
      </TimelineItem>
      <TimelineItem>
        <TimelineDot active />
        <TimelineLine />
        <TimelineMeta>Step 2</TimelineMeta>
        <TimelineTitle>Build components</TimelineTitle>
        <TimelineDescription>
          Add reusable primitives and variant system with consistent tokens.
        </TimelineDescription>
      </TimelineItem>
      <TimelineItem>
        <TimelineDot />
        <TimelineMeta>Step 3</TimelineMeta>
        <TimelineTitle>Ship release</TimelineTitle>
        <TimelineDescription>
          Final QA, publish changelog, and deploy documentation.
        </TimelineDescription>
      </TimelineItem>
    </Timeline>
  );
}

function LoadingDotsPreview() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <LoadingDots size="sm" variant="default" />
      <LoadingDots size="md" variant="primary" />
      <LoadingDots size="lg" variant="success" />
      <LoadingDots size="md" variant="warning" />
    </div>
  );
}

const showcaseItems: ShowcaseItem[] = [
  {
    id: "button",
    name: "Button",
    category: "Actions",
    description: "Multi-variant controls for primary and secondary actions.",
    Preview: ButtonPreview,
  },
  {
    id: "input",
    name: "Input",
    category: "Forms",
    description: "Single-line fields with labels, hints, and validation states.",
    Preview: InputPreview,
  },
  {
    id: "textarea",
    name: "Textarea",
    category: "Forms",
    description: "Multi-line input for longer text with hint and error support.",
    Preview: TextareaPreview,
  },
  {
    id: "card",
    name: "Card",
    category: "Layout",
    description: "Flexible content container with header, body, and footer slots.",
    Preview: CardPreview,
  },
  {
    id: "empty-state",
    name: "EmptyState",
    category: "Layout",
    description: "Clear empty placeholders with icon, copy, and optional action.",
    Preview: EmptyStatePreview,
  },
  {
    id: "badge",
    name: "Badge",
    category: "Data Display",
    description: "Small status labels for counts, categories, and metadata.",
    Preview: BadgePreview,
  },
  {
    id: "avatar",
    name: "Avatar",
    category: "Data Display",
    description: "User images with initials fallback and avatar grouping.",
    Preview: AvatarPreview,
  },
  {
    id: "table",
    name: "Table",
    category: "Data Display",
    description: "Composable table primitives with striped and compact variants.",
    Preview: TablePreview,
  },
  {
    id: "timeline",
    name: "Timeline",
    category: "Data Display",
    description: "Vertical timeline layout for process steps and event history.",
    Preview: TimelinePreview,
  },
  {
    id: "alert",
    name: "Alert",
    category: "Feedback",
    description: "Contextual messaging for info, success, warning, and errors.",
    Preview: AlertPreview,
  },
  {
    id: "progress",
    name: "Progress",
    category: "Feedback",
    description: "Progress bars for task completion and upload indicators.",
    Preview: ProgressPreview,
  },
  {
    id: "skeleton",
    name: "Skeleton",
    category: "Feedback",
    description: "Lightweight loading placeholders for smoother transitions.",
    Preview: SkeletonPreview,
  },
  {
    id: "checkbox",
    name: "Checkbox",
    category: "Forms",
    description: "Binary controls ideal for list-based selection states.",
    Preview: CheckboxPreview,
  },
  {
    id: "switch",
    name: "Switch",
    category: "Forms",
    description: "Quick toggle controls with optional labels and descriptions.",
    Preview: SwitchPreview,
  },
  {
    id: "select",
    name: "Select",
    category: "Forms",
    description: "Accessible dropdown selector for constrained option lists.",
    Preview: SelectPreview,
  },
  {
    id: "tabs",
    name: "Tabs",
    category: "Navigation",
    description: "Segmented navigation to reveal focused content sections.",
    Preview: TabsPreview,
  },
  {
    id: "accordion",
    name: "Accordion",
    category: "Navigation",
    description: "Expandable content for FAQs, settings, and grouped details.",
    Preview: AccordionPreview,
  },
  {
    id: "dropdown",
    name: "Dropdown",
    category: "Navigation",
    description: "Context menu with actions, toggles, and radio item support.",
    Preview: DropdownPreview,
  },
  {
    id: "breadcrumb",
    name: "Breadcrumb",
    category: "Navigation",
    description: "Compact path navigation for deep pages and settings flows.",
    Preview: BreadcrumbPreview,
  },
  {
    id: "pagination",
    name: "Pagination",
    category: "Navigation",
    description: "Page navigation helpers with active, previous, and next states.",
    Preview: PaginationPreview,
  },
  {
    id: "tooltip",
    name: "Tooltip",
    category: "Overlays",
    description: "Helpful contextual hints on hover and keyboard focus.",
    Preview: TooltipPreview,
  },
  {
    id: "modal",
    name: "Modal",
    category: "Overlays",
    description: "Focused dialog for confirmation, edits, and quick workflows.",
    Preview: ModalPreview,
  },
  {
    id: "separator",
    name: "Separator",
    category: "Layout",
    description: "Horizontal and vertical dividers for cleaner information flow.",
    Preview: SeparatorPreview,
  },
  {
    id: "kbd",
    name: "Kbd",
    category: "Utilities",
    description: "Keyboard key visual for shortcuts in docs and command hints.",
    Preview: KbdPreview,
  },
  {
    id: "code-block",
    name: "CodeBlock",
    category: "Utilities",
    description: "Styled code container with optional built-in copy action.",
    Preview: CodeBlockPreview,
  },
  {
    id: "spinner",
    name: "Spinner",
    category: "Feedback",
    description: "Minimal loading indicator with size and color variants.",
    Preview: SpinnerPreview,
  },
  {
    id: "loading-dots",
    name: "LoadingDots",
    category: "Feedback",
    description: "Animated three-dot loader for subtle inline loading states.",
    Preview: LoadingDotsPreview,
  },
];

const usageExamples: Record<string, string> = {
  button: `import { Button } from "@repo/ui";

export function SaveAction() {
  return <Button variant="primary">Save Changes</Button>;
}`,
  input: `import { Input } from "@repo/ui";

export function EmailField() {
  return (
    <Input
      label="Email"
      type="email"
      placeholder="you@example.com"
      variant="filled"
    />
  );
}`,
  textarea: `import { Textarea } from "@repo/ui";

export function MessageField() {
  return (
    <Textarea
      label="Message"
      placeholder="Write your message..."
      hint="Max 500 characters"
    />
  );
}`,
  card: `import { Card, CardHeader, CardTitle, CardContent } from "@repo/ui";

export function StatCard() {
  return (
    <Card variant="interactive">
      <CardHeader>
        <CardTitle>Active Users</CardTitle>
      </CardHeader>
      <CardContent>1,284 today</CardContent>
    </Card>
  );
}`,
  "empty-state": `import { EmptyState, Button } from "@repo/ui";

export function EmptyProjects() {
  return (
    <EmptyState
      title="No projects yet"
      description="Create your first project to begin."
      action={<Button>Create Project</Button>}
    />
  );
}`,
  badge: `import { Badge } from "@repo/ui";

export function StatusBadge() {
  return <Badge variant="primary">Live</Badge>;
}`,
  avatar: `import { Avatar, AvatarImage, AvatarFallback } from "@repo/ui";

export function UserAvatar() {
  return (
    <Avatar size="md">
      <AvatarImage src="/user.png" alt="User" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  );
}`,
  table: `import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@repo/ui";

export function ComponentTable() {
  return (
    <Table variant="striped">
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Button</TableCell>
          <TableCell>Stable</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}`,
  timeline: `import {
  Timeline,
  TimelineItem,
  TimelineDot,
  TimelineLine,
  TimelineTitle,
  TimelineDescription,
} from "@repo/ui";

export function ReleaseTimeline() {
  return (
    <Timeline>
      <TimelineItem>
        <TimelineDot active />
        <TimelineLine />
        <TimelineTitle>Design</TimelineTitle>
        <TimelineDescription>Finalize UI decisions.</TimelineDescription>
      </TimelineItem>
      <TimelineItem>
        <TimelineDot />
        <TimelineTitle>Ship</TimelineTitle>
        <TimelineDescription>Deploy to production.</TimelineDescription>
      </TimelineItem>
    </Timeline>
  );
}`,
  alert: `import { Alert } from "@repo/ui";

export function SaveAlert() {
  return (
    <Alert variant="success" title="Saved">
      Your profile changes are now live.
    </Alert>
  );
}`,
  progress: `import { Progress } from "@repo/ui";

export function UploadProgress() {
  return <Progress value={68} label="Uploading assets" showValue />;
}`,
  skeleton: `import { Skeleton, SkeletonText } from "@repo/ui";

export function LoadingState() {
  return (
    <div className="space-y-3">
      <Skeleton className="h-5 w-40" />
      <SkeletonText lines={3} />
    </div>
  );
}`,
  checkbox: `import { Checkbox } from "@repo/ui";

export function ConsentCheckbox() {
  return <Checkbox label="I agree to the terms" defaultChecked />;
}`,
  switch: `import { Switch } from "@repo/ui";

export function ThemeSwitch() {
  return (
    <Switch
      label="Dark mode"
      description="Use dark appearance"
      defaultChecked
    />
  );
}`,
  select: `import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@repo/ui";

export function FrameworkSelect() {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select framework" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="next">Next.js</SelectItem>
        <SelectItem value="remix">Remix</SelectItem>
      </SelectContent>
    </Select>
  );
}`,
  tabs: `import { Tabs, TabsList, TabsTrigger, TabsContent } from "@repo/ui";

export function SettingsTabs() {
  return (
    <Tabs defaultValue="general">
      <TabsList>
        <TabsTrigger value="general">General</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
      </TabsList>
      <TabsContent value="general">General settings</TabsContent>
      <TabsContent value="security">Security settings</TabsContent>
    </Tabs>
  );
}`,
  accordion: `import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@repo/ui";

export function FaqAccordion() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is this accessible?</AccordionTrigger>
        <AccordionContent>Yes, keyboard support is included.</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}`,
  dropdown: `import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  Button,
} from "@repo/ui";

export function AccountMenu() {
  return (
    <Dropdown>
      <DropdownTrigger asChild>
        <Button variant="secondary">Open Menu</Button>
      </DropdownTrigger>
      <DropdownContent>
        <DropdownItem>Profile</DropdownItem>
        <DropdownItem>Settings</DropdownItem>
      </DropdownContent>
    </Dropdown>
  );
}`,
  breadcrumb: `import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@repo/ui";

export function PageBreadcrumb() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Docs</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Components</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}`,
  pagination: `import {
  Pagination,
  PaginationList,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "@repo/ui";

export function Pager() {
  return (
    <Pagination>
      <PaginationList>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationList>
    </Pagination>
  );
}`,
  tooltip: `import { Tooltip, Button } from "@repo/ui";

export function HelpTooltip() {
  return (
    <Tooltip content="Extra context for this action">
      <Button variant="outline">Hover me</Button>
    </Tooltip>
  );
}`,
  modal: `import { Modal, Button, Input, Textarea } from "@repo/ui";

export function InviteModal() {
  return (
    <Modal
      trigger={<Button>Invite</Button>}
      title="Invite Team Member"
      description="Share access with your teammate"
      size="2xl"
    >
      <div className="space-y-4">
        <Input label="Email" placeholder="user@company.com" />
        <Textarea label="Message" placeholder="Welcome aboard!" />
      </div>
    </Modal>
  );
}`,
  separator: `import { Separator } from "@repo/ui";

export function SectionDivider() {
  return (
    <div>
      <p>Account</p>
      <Separator className="my-3" />
      <p>Billing</p>
    </div>
  );
}`,
  kbd: `import { Kbd } from "@repo/ui";

export function ShortcutHint() {
  return (
    <p>
      Open command palette: <Kbd>Ctrl</Kbd> + <Kbd>K</Kbd>
    </p>
  );
}`,
  "code-block": `import { CodeBlock } from "@repo/ui";

export function ApiSnippet() {
  return (
    <CodeBlock
      language="tsx"
      code={'<Button variant="primary">Save</Button>'}
    />
  );
}`,
  spinner: `import { Spinner } from "@repo/ui";

export function Loading() {
  return <Spinner size="md" variant="primary" />;
}`,
  "loading-dots": `import { LoadingDots } from "@repo/ui";

export function InlineLoading() {
  return <LoadingDots size="md" variant="primary" />;
}`,
};

export default function ComponentPage() {
  const [activeId, setActiveId] = React.useState(showcaseItems[0]?.id ?? "");
  const [copied, setCopied] = React.useState(false);
  const [showFullCode, setShowFullCode] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [sourceCode, setSourceCode] = React.useState("");
  const [sourceDeps, setSourceDeps] = React.useState<string[]>([]);
  const [sourceInstallCommand, setSourceInstallCommand] = React.useState("");
  const [sourceFilePath, setSourceFilePath] = React.useState("");
  const [sourceLoading, setSourceLoading] = React.useState(false);
  const [sourceError, setSourceError] = React.useState<string | null>(null);

  const filteredItems = React.useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) {
      return showcaseItems;
    }

    return showcaseItems.filter((item) =>
      [item.name, item.category, item.description].some((value) =>
        value.toLowerCase().includes(query),
      ),
    );
  }, [searchQuery]);

  React.useEffect(() => {
    if (
      filteredItems.length > 0 &&
      !filteredItems.some((item) => item.id === activeId)
    ) {
      setActiveId(filteredItems[0].id);
    }
  }, [filteredItems, activeId]);

  const activeItem =
    filteredItems.find((item) => item.id === activeId) ??
    filteredItems[0] ??
    showcaseItems.find((item) => item.id === activeId) ??
    showcaseItems[0];
  const ActivePreview = activeItem.Preview;
  const usageCode = sourceCode || usageExamples[activeItem.id] || "";
  const codeMetrics = React.useMemo(() => {
    const fullCode = usageCode || "";
    const lines = fullCode ? fullCode.split("\n") : [];
    const totalLines = lines.length;
    const previewLines = Math.max(12, Math.ceil(totalLines * 0.2));
    const hasHiddenLines = totalLines > previewLines;
    const previewCode = hasHiddenLines
      ? lines.slice(0, previewLines).join("\n")
      : fullCode;

    return {
      fullCode,
      previewCode,
      totalLines,
      previewLines,
      hasHiddenLines,
    };
  }, [usageCode]);

  const codeToDisplay = sourceLoading
    ? "Loading full component source..."
    : showFullCode || !codeMetrics.hasHiddenLines
      ? codeMetrics.fullCode
      : codeMetrics.previewCode;

  React.useEffect(() => {
    const controller = new AbortController();
    setShowFullCode(false);

    const loadComponentSource = async () => {
      setSourceLoading(true);
      setSourceError(null);

      try {
        const response = await fetch(
          `/api/component-source?id=${encodeURIComponent(activeItem.id)}`,
          {
            signal: controller.signal,
            cache: "no-store",
          },
        );

        if (!response.ok) {
          throw new Error("Failed to fetch source");
        }

        const payload = (await response.json()) as {
          code: string;
          dependencies: string[];
          installCommand: string;
          filePath: string;
        };

        setSourceCode(payload.code);
        setSourceDeps(payload.dependencies ?? []);
        setSourceInstallCommand(payload.installCommand ?? "");
        setSourceFilePath(payload.filePath ?? "");
      } catch (error) {
        if ((error as { name?: string }).name === "AbortError") {
          return;
        }
        setSourceError("Unable to load full component source right now.");
        setSourceCode("");
        setSourceDeps([]);
        setSourceInstallCommand("");
        setSourceFilePath("");
      } finally {
        setSourceLoading(false);
      }
    };

    void loadComponentSource();
    return () => controller.abort();
  }, [activeItem.id]);

  const handleBack = React.useCallback(() => {
    if (window.history.length > 1) {
      window.history.back();
      return;
    }
    window.location.href = "/";
  }, []);

  const handleCopy = React.useCallback(async () => {
    await navigator.clipboard.writeText(usageCode);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  }, [usageCode]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(850px_circle_at_8%_0%,rgba(14,165,233,0.14),transparent_55%),radial-gradient(720px_circle_at_92%_0%,rgba(16,185,129,0.12),transparent_48%)]" />

      <main className="relative mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2 sm:mb-6">
          <button
            onClick={handleBack}
            className="inline-flex min-w-0 items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-surface-hover"
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </button>
          <Link
            href="/"
            className="inline-flex min-w-0 items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-surface-hover hover:text-foreground"
          >
            Home
            <Kbd size="sm">H</Kbd>
          </Link>
        </div>

        <header
          className="mb-6 rounded-2xl border border-border bg-surface p-6 shadow-sm sm:mb-8 sm:p-8"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <Badge variant="info" className="mb-4">
                Component Explorer
              </Badge>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Modern Component Catalog
              </h1>
              <p className="mt-3 max-w-2xl text-sm text-muted sm:text-base">
                Browse every UI primitive from a single responsive workspace.
                Select a component from the left and inspect it live on the
                right.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-background p-3">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">
                Color Theory
              </p>
              <div className="grid grid-cols-3 gap-2">
                <div className="h-8 w-8 rounded-md bg-[#0ea5e9]" />
                <div className="h-8 w-8 rounded-md bg-[#1d4ed8]" />
                <div className="h-8 w-8 rounded-md bg-[#10b981]" />
              </div>
            </div>
          </div>
        </header>

        <div className="grid min-w-0 gap-6 lg:grid-cols-[290px_minmax(0,1fr)]">
          <aside className="min-w-0 lg:sticky lg:top-6 lg:self-start">
            <div
              className="min-w-0 rounded-2xl border border-border bg-surface p-4 shadow-sm sm:p-5"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Component className="h-4 w-4 text-info" />
                  <h2 className="text-sm font-semibold">All Components</h2>
                </div>
                <Badge variant="outline" className="tabular-nums">
                  {filteredItems.length}/{showcaseItems.length}
                </Badge>
              </div>
              <p className="mt-2 text-xs text-muted">
                Search and switch components with active selection highlight.
              </p>

              <div className="mt-3 space-y-2">
                <Input
                  placeholder="Search components..."
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  leftIcon={<Search className="h-4 w-4" />}
                  className="h-9"
                />
                {searchQuery.trim() && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full"
                    onClick={() => setSearchQuery("")}
                  >
                    Clear Search
                  </Button>
                )}
              </div>

              <nav className="mt-4 max-h-[58vh] space-y-2 overflow-y-auto pr-1 lg:max-h-[72vh]">
                {filteredItems.map((item) => {
                  const isActive = item.id === activeItem.id;

                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveId(item.id)}
                      className={cn(
                        "w-full rounded-xl border p-3 text-left transition-all duration-fast",
                        isActive
                          ? "border-info bg-info-pale"
                          : "border-border bg-background hover:border-border-hover hover:bg-surface-hover",
                      )}
                      aria-current={isActive ? "true" : undefined}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-medium text-foreground">
                          {item.name}
                        </span>
                        {isActive ? (
                          <Badge variant="info" size="sm">
                            Active
                          </Badge>
                        ) : (
                          <ChevronRight className="h-4 w-4 text-muted" />
                        )}
                      </div>
                      <p className="mt-1 text-xs text-muted">{item.category}</p>
                    </button>
                  );
                })}
                {filteredItems.length === 0 && (
                  <div className="rounded-xl border border-dashed border-border bg-background p-3 text-xs text-muted">
                    No components matched "{searchQuery.trim()}".
                  </div>
                )}
              </nav>
            </div>
          </aside>

          <section className="min-w-0 rounded-2xl border border-border bg-surface p-4 shadow-sm sm:p-7">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <Layers className="h-4 w-4 text-info" />
                  <Badge variant="outline">{activeItem.category}</Badge>
                </div>
                <h2 className="text-2xl font-bold tracking-tight">
                  {activeItem.name}
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-muted sm:text-base">
                  {activeItem.description}
                </p>
              </div>
              <div className="rounded-lg border border-border bg-background px-3 py-2">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted">
                  <Palette className="h-3.5 w-3.5 text-info" />
                  Modern Preview
                </div>
              </div>
            </div>

            <Separator className="my-6" />

            <div className="min-w-0 rounded-2xl border border-border bg-background p-4 sm:p-6">
              <div className="overflow-x-auto">
                <div className="min-w-0">
                  <ActivePreview />
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-background p-4 sm:p-6">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Component Source Code
                  </p>
                  <p className="text-xs text-muted">
                    Copy full source and install the listed dependencies.
                  </p>
                </div>
                <Button size="sm" variant="secondary" onClick={handleCopy}>
                  {copied ? (
                    <>
                      <Check className="h-4 w-4" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      Copy Code
                    </>
                  )}
                </Button>
              </div>
              {sourceFilePath && (
                <p className="mb-3 text-xs text-muted">
                  Source: <span className="font-mono">{sourceFilePath}</span>
                </p>
              )}
              {sourceDeps.length > 0 && (
                <div className="mb-3 space-y-2">
                  <p className="text-xs font-medium text-foreground">
                    Required dependencies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {sourceDeps.map((dep) => (
                      <span
                        key={dep}
                        className="rounded-full border border-border bg-surface px-2 py-0.5 text-[11px] text-muted-foreground"
                      >
                        {dep}
                      </span>
                    ))}
                  </div>
                  {sourceInstallCommand && (
                    <pre className="max-w-full overflow-x-auto rounded-lg border border-border bg-[#0a1528] px-3 py-2 text-[11px] text-slate-100 sm:text-xs">
                      <code>{sourceInstallCommand}</code>
                    </pre>
                  )}
                </div>
              )}
              {sourceError && (
                <p className="mb-3 text-xs text-warning">{sourceError}</p>
              )}
              {!sourceLoading && codeMetrics.totalLines > 0 && (
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                  <p className="text-xs text-muted">
                    {showFullCode || !codeMetrics.hasHiddenLines
                      ? `Showing all ${codeMetrics.totalLines} lines`
                      : `Showing ${codeMetrics.previewLines} of ${codeMetrics.totalLines} lines`}
                  </p>
                  {codeMetrics.hasHiddenLines && (
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => setShowFullCode((prev) => !prev)}
                    >
                      {showFullCode ? "Show less" : "Show full code"}
                    </Button>
                  )}
                </div>
              )}
              <pre className="max-w-full overflow-x-auto rounded-xl border border-border bg-[#081223] p-4 text-xs text-slate-100 sm:text-sm">
                <code>{codeToDisplay}</code>
              </pre>
            </div>

            <div className="mt-6 rounded-xl border border-border bg-background p-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2 font-medium text-foreground">
                <Sparkles className="h-4 w-4 text-info" />
                Responsive behavior
              </div>
              <p className="mt-2">
                On small screens the list stays above the preview; on larger
                screens it becomes a persistent left-side catalog.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
