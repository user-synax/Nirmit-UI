"use client";

import React from "react";
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
  Input,
  Kbd,
  Modal,
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
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
  Tooltip,
} from "@repo/ui";
import {
  Bell,
  ChevronRight,
  Component,
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
    id: "spinner",
    name: "Spinner",
    category: "Feedback",
    description: "Minimal loading indicator with size and color variants.",
    Preview: SpinnerPreview,
  },
];

export default function ComponentPage() {
  const [activeId, setActiveId] = React.useState(showcaseItems[0]?.id ?? "");
  const activeItem =
    showcaseItems.find((item) => item.id === activeId) ?? showcaseItems[0];
  const ActivePreview = activeItem.Preview;

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(850px_circle_at_8%_0%,rgba(14,165,233,0.14),transparent_55%),radial-gradient(720px_circle_at_92%_0%,rgba(16,185,129,0.12),transparent_48%)]" />

      <main className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <header className="mb-6 rounded-2xl border border-border bg-surface p-6 shadow-sm sm:mb-8 sm:p-8">
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

        <div className="grid gap-6 lg:grid-cols-[290px_minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-6 lg:self-start">
            <div className="rounded-2xl border border-border bg-surface p-4 shadow-sm sm:p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Component className="h-4 w-4 text-info" />
                  <h2 className="text-sm font-semibold">All Components</h2>
                </div>
                <Badge variant="outline">{showcaseItems.length}</Badge>
              </div>
              <p className="mt-2 text-xs text-muted">
                Active selection stays highlighted as you switch components.
              </p>

              <nav className="mt-4 max-h-[58vh] space-y-2 overflow-y-auto pr-1 lg:max-h-[72vh]">
                {showcaseItems.map((item) => {
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
              </nav>
            </div>
          </aside>

          <section className="rounded-2xl border border-border bg-surface p-5 shadow-sm sm:p-7">
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

            <div className="rounded-2xl border border-border bg-background p-4 sm:p-6">
              <ActivePreview />
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
