"use client";

import React from "react";
import {
  Button,
  Input,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Modal,
  Badge,
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarGroup,
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  DropdownLabel,
  DropdownSeparator,
  DropdownCheckboxItem,
  DropdownRadioItem,
  DropdownRadioGroup,
  DropdownShortcut,
  Checkbox,
  Switch,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Tooltip,
  Skeleton,
  SkeletonText,
  Alert,
  Progress,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui";
import { formatDate } from "@repo/utils";
import {
  User,
  Settings,
  LogOut,
  Bell,
  Search,
  Zap,
  Shield,
  Palette,
  Code2,
  Layers,
  ArrowRight,
  Github,
  Sparkles,
} from "lucide-react";

export default function Home() {
  const [showActivity, setShowActivity] = React.useState(true);
  const [panel, setPanel] = React.useState("right");
  const [progress, setProgress] = React.useState(65);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary shadow-glow">
              <Sparkles className="h-4 w-4 text-background" />
            </div>
            <span className="text-lg font-bold">NirmitUI</span>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            <a
              href="#components"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              Components
            </a>
            <a
              href="#forms"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              Forms
            </a>
            <a
              href="#feedback"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              Feedback
            </a>
            <a
              href="#navigation"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              Navigation
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <Tooltip content="View on GitHub">
              <Button variant="ghost" size="sm" className="gap-2">
                <Github className="h-4 w-4" />
                <span className="hidden sm:inline">GitHub</span>
              </Button>
            </Tooltip>
            <Button size="sm" className="gap-2">
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-16">
        <section className="mb-24 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm">
            <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
            v1.0 — Now with 16+ components
          </div>
          <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
            Build{" "}
            <span className="bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">
              beautiful
            </span>{" "}
            interfaces
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted">
            A modern, dark-themed UI component library built with Radix UI,
            Tailwind CSS, and TypeScript. Accessible, customizable, and ready
            for production.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button size="lg" className="gap-2">
              <Code2 className="h-4 w-4" />
              Browse Components
            </Button>
            <Button variant="outline" size="lg">
              Read Docs
            </Button>
          </div>
        </section>

        <section id="features" className="mb-24">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                desc: "Optimized for performance with tree-shaking and minimal bundle size.",
              },
              {
                icon: Shield,
                title: "Accessible",
                desc: "WCAG 2.1 AA compliant components built on Radix UI primitives.",
              },
              {
                icon: Palette,
                title: "Customizable",
                desc: "Design tokens and Tailwind CSS for seamless theme customization.",
              },
            ].map((feature, i) => (
              <Card key={i} variant="elevated" className="group">
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-pale text-primary transition-transform group-hover:scale-110">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="components" className="mb-24 space-y-8">
          <div>
            <h2 className="text-3xl font-bold">Buttons</h2>
            <p className="mt-2 text-muted">
              Versatile button component with multiple variants and states.
            </p>
          </div>
          <Card>
            <CardContent className="space-y-6 pt-6">
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
                <Button isLoading>Loading</Button>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="forms" className="mb-24 space-y-8">
          <div>
            <h2 className="text-3xl font-bold">Form Controls</h2>
            <p className="mt-2 text-muted">
              Input, select, checkbox, switch, and more form elements.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Inputs</CardTitle>
                <CardDescription>
                  Text inputs with labels, hints, and validation states.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                <Input
                  label="Email"
                  placeholder="you@example.com"
                  hint="We'll never share your email."
                />
                <Input
                  label="Password"
                  type="password"
                  placeholder="••••••••"
                  error="Password must be at least 8 characters."
                />
                <Input
                  label="Search"
                  placeholder="Search..."
                  leftIcon={<Search className="h-4 w-4" />}
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Select & Controls</CardTitle>
                <CardDescription>
                  Dropdown selects, checkboxes, and toggle switches.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a framework" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="next">Next.js</SelectItem>
                    <SelectItem value="svelte">SvelteKit</SelectItem>
                    <SelectItem value="nuxt">Nuxt.js</SelectItem>
                    <SelectItem value="remix">Remix</SelectItem>
                  </SelectContent>
                </Select>
                <div className="space-y-3">
                  <Checkbox label="Accept terms and conditions" />
                  <Checkbox label="Subscribe to newsletter" defaultChecked />
                </div>
                <div className="space-y-3">
                  <Switch
                    label="Dark mode"
                    description="Toggle dark theme"
                    defaultChecked
                  />
                  <Switch
                    label="Notifications"
                    description="Enable push notifications"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="feedback" className="mb-24 space-y-8">
          <div>
            <h2 className="text-3xl font-bold">Feedback</h2>
            <p className="mt-2 text-muted">
              Alerts, progress indicators, badges, and skeleton loaders.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Alerts</CardTitle>
                <CardDescription>
                  Contextual feedback messages for user actions.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                <Alert variant="info" title="Update available">
                  A new version of the app is available. Please refresh to
                  update.
                </Alert>
                <Alert variant="success" title="Success!">
                  Your changes have been saved successfully.
                </Alert>
                <Alert variant="warning" title="Warning">
                  Your session is about to expire. Save your work.
                </Alert>
                <Alert
                  variant="destructive"
                  title="Error"
                  dismissible
                  onDismiss={() => {}}
                >
                  Failed to connect to the server. Please try again.
                </Alert>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Progress & Skeletons</CardTitle>
                <CardDescription>
                  Loading states and progress indicators.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 pt-4">
                <Progress value={progress} label="Uploading..." showValue />
                <Progress
                  value={100}
                  variant="success"
                  label="Complete"
                  showValue
                />
                <Progress
                  value={45}
                  variant="warning"
                  label="Processing"
                  showValue
                />
                <div className="space-y-4">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                  <SkeletonText lines={3} />
                </div>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Badges</CardTitle>
              <CardDescription>Status indicators and labels.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3 pt-4">
              <Badge variant="default">Default</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="info">Info</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge size="sm">Small</Badge>
            </CardContent>
          </Card>
        </section>

        <section id="navigation" className="mb-24 space-y-8">
          <div>
            <h2 className="text-3xl font-bold">Navigation & Layout</h2>
            <p className="mt-2 text-muted">
              Tabs, accordion, dropdown menus, and tooltips.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Tabs</CardTitle>
                <CardDescription>
                  Organize content into tabbed sections.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <Tabs defaultValue="account">
                  <TabsList className="w-full">
                    <TabsTrigger value="account" className="flex-1">
                      Account
                    </TabsTrigger>
                    <TabsTrigger value="password" className="flex-1">
                      Password
                    </TabsTrigger>
                    <TabsTrigger value="notifications" className="flex-1">
                      Notifications
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="account">
                    <p className="text-sm text-muted-foreground">
                      Manage your account settings and preferences.
                    </p>
                  </TabsContent>
                  <TabsContent value="password">
                    <p className="text-sm text-muted-foreground">
                      Change your password and security settings.
                    </p>
                  </TabsContent>
                  <TabsContent value="notifications">
                    <p className="text-sm text-muted-foreground">
                      Configure your notification preferences.
                    </p>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Accordion</CardTitle>
                <CardDescription>Collapsible content sections.</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                      Yes. Built on Radix UI primitives for full keyboard and
                      screen reader support.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>
                      Can I customize the styles?
                    </AccordionTrigger>
                    <AccordionContent>
                      Absolutely. All components use Tailwind CSS and design
                      tokens for easy customization.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>What about dark mode?</AccordionTrigger>
                    <AccordionContent>
                      Dark mode is the default theme. All components are
                      designed with dark-first styling.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Dropdown Menu</CardTitle>
                <CardDescription>
                  Contextual menus with rich interactions.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-center pt-4">
                <Dropdown>
                  <DropdownTrigger asChild>
                    <Button variant="secondary">Open Menu</Button>
                  </DropdownTrigger>
                  <DropdownContent>
                    <DropdownLabel>My Account</DropdownLabel>
                    <DropdownSeparator />
                    <DropdownItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                      <DropdownShortcut>⇧⌘P</DropdownShortcut>
                    </DropdownItem>
                    <DropdownItem>
                      <Bell className="mr-2 h-4 w-4" />
                      <span>Notifications</span>
                    </DropdownItem>
                    <DropdownItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                      <DropdownShortcut>⌘S</DropdownShortcut>
                    </DropdownItem>
                    <DropdownSeparator />
                    <DropdownCheckboxItem
                      checked={showActivity}
                      onCheckedChange={setShowActivity}
                    >
                      Show Activity Bar
                    </DropdownCheckboxItem>
                    <DropdownSeparator />
                    <DropdownRadioGroup value={panel} onValueChange={setPanel}>
                      <DropdownLabel>Panel Position</DropdownLabel>
                      <DropdownRadioItem value="left">Left</DropdownRadioItem>
                      <DropdownRadioItem value="right">Right</DropdownRadioItem>
                    </DropdownRadioGroup>
                    <DropdownSeparator />
                    <DropdownItem className="text-destructive focus:text-destructive">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownItem>
                  </DropdownContent>
                </Dropdown>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Tooltip</CardTitle>
                <CardDescription>
                  Informative popups on hover or focus.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-center gap-4 pt-4">
                <Tooltip content="This is a helpful tooltip" side="top">
                  <Button variant="outline">Hover me</Button>
                </Tooltip>
                <Tooltip content="Another tooltip example" side="bottom">
                  <Button variant="outline">Or me</Button>
                </Tooltip>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-24 space-y-8">
          <div>
            <h2 className="text-3xl font-bold">Avatars & Cards</h2>
            <p className="mt-2 text-muted">
              User representations and content containers.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Avatars</CardTitle>
                <CardDescription>
                  User profile images with fallback initials.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 pt-4">
                <div className="flex items-end gap-4">
                  {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
                    <Avatar key={size} size={size}>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <div>
                  <p className="mb-3 text-sm text-muted">Avatar Group</p>
                  <AvatarGroup limit={3} size="md">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
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
                      <AvatarImage src="https://github.com/delbaoliveira.png" />
                      <AvatarFallback>DO</AvatarFallback>
                    </Avatar>
                  </AvatarGroup>
                </div>
              </CardContent>
            </Card>
            <div className="space-y-6">
              <Card variant="default">
                <CardHeader>
                  <CardTitle>Default Card</CardTitle>
                  <CardDescription>
                    Subtle border and surface background.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Clean, minimal card design perfect for content sections.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button size="sm">Action</Button>
                  <Button variant="ghost" size="sm">
                    Cancel
                  </Button>
                </CardFooter>
              </Card>
              <Card variant="elevated">
                <CardHeader>
                  <CardTitle>Elevated Card</CardTitle>
                  <CardDescription>
                    Shadow-based depth without borders.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Uses shadow for visual hierarchy.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="mb-24 space-y-8">
          <div>
            <h2 className="text-3xl font-bold">Modals</h2>
            <p className="mt-2 text-muted">
              Dialog overlays for focused interactions.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Modal
              trigger={<Button>Small Modal</Button>}
              title="Small Modal"
              description="Compact dialog for simple confirmations."
              size="sm"
              className=""
              open={undefined}
              onOpenChange={() => {}}
            >
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  This is a small modal with minimal content.
                </p>
                <Button className="w-full">Confirm</Button>
              </div>
            </Modal>
            <Modal
              trigger={<Button variant="secondary">Medium Modal</Button>}
              title="Medium Modal"
              description="Standard dialog for forms and details."
              size="md"
              className=""
              open={undefined}
              onOpenChange={() => {}}
            >
              <div className="space-y-4">
                <Input label="Name" placeholder="Enter your name" />
                <Input label="Email" placeholder="you@example.com" />
                <Button className="w-full">Submit</Button>
              </div>
            </Modal>
            <Modal
              trigger={<Button variant="outline">Large Modal</Button>}
              title="Large Modal"
              description="Spacious dialog for complex content."
              size="lg"
              className=""
              open={undefined}
              onOpenChange={() => {}}
            >
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  This larger modal can accommodate more complex interactions,
                  forms, or content layouts.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <Skeleton className="h-24 rounded-lg" />
                  <Skeleton className="h-24 rounded-lg" />
                </div>
                <Button className="w-full">Continue</Button>
              </div>
            </Modal>
          </div>
        </section>

        <section className="rounded-xl border border-border bg-surface p-8 text-center">
          <Layers className="mx-auto mb-4 h-12 w-12 text-primary" />
          <h2 className="mb-2 text-2xl font-bold">Ready to build?</h2>
          <p className="mb-6 text-muted">
            Start building beautiful interfaces with NirmitUI today.
            <br />
            Last updated: {formatDate(new Date())}
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="gap-2">
              <Code2 className="h-4 w-4" />
              Get Started
            </Button>
            <Button variant="outline" size="lg">
              View on GitHub
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8 text-center text-sm text-muted">
        <p>Built with Radix UI, Tailwind CSS, and TypeScript</p>
      </footer>
    </div>
  );
}
