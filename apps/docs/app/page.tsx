"use client";

import Link from "next/link";
import { formatDate } from "@repo/utils";
import { Badge, Button, Card, CardContent, CardTitle, Separator } from "@repo/ui";
import { ArrowRight, Blocks, Layers, Sparkles } from "lucide-react";
import { useInteractiveSurface } from "./hooks/useInteractiveSurface";

const principles = [
  {
    title: "Minimal by Default",
    description:
      "Clean defaults with low visual noise so teams can ship faster and stay consistent.",
  },
  {
    title: "Accessible Foundation",
    description:
      "Built on reliable primitives with keyboard-first interactions and sensible focus states.",
  },
  {
    title: "Token Driven",
    description:
      "Design tokens keep spacing, color, and motion cohesive from first screen to last.",
  },
];

const highlights = [
  "20+ reusable components",
  "Variants for real product states",
  "Built with TypeScript + Radix UI",
];

export default function Home() {
  const { enabled, handleMouseMove, handleMouseLeave } = useInteractiveSurface();
  const interactiveProps = enabled
    ? {
        onMouseMove: handleMouseMove,
        onMouseLeave: handleMouseLeave,
      }
    : {};

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="inline-flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-background shadow-glow">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="text-base font-semibold tracking-tight">NirmitUI</span>
          </Link>
          <nav className="flex items-center gap-2 sm:gap-3">
            <Link href="/component">
              <Button variant="secondary" size="sm" className="gap-2">
                <Blocks className="h-4 w-4" />
                Components
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 pb-14 pt-10 sm:px-6 sm:pt-14">
        <section
          className="mouse-reactive mouse-tilt hover-lift glint-border gradient-shift relative overflow-hidden rounded-3xl border border-border bg-surface px-6 py-10 sm:px-10 sm:py-14"
          {...interactiveProps}
        >
          <div className="aurora-bg" />
          <div className="gradient-drift pointer-events-none absolute inset-0 bg-[radial-gradient(700px_circle_at_15%_-10%,rgba(14,165,233,0.18),transparent_50%),radial-gradient(620px_circle_at_90%_0%,rgba(16,185,129,0.14),transparent_42%)]" />
          <div className="grain-overlay" />

          <div className="mouse-layer max-w-3xl">
            <Badge variant="info" className="mb-4">
              Modern Minimal UI Library
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Build elegant interfaces with fewer decisions.
            </h1>
            <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
              NirmitUI gives you thoughtfully designed components, clear variants,
              and practical defaults so your product feels polished without design
              drift.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/component">
                <Button size="lg" className="gap-2">
                  Open Component Explorer
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <a href="#principles">
                <Button variant="outline" size="lg">
                  Why NirmitUI
                </Button>
              </a>
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-3 sm:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item}
              className="mouse-reactive mouse-tilt hover-lift glint-border rounded-xl border border-border bg-surface px-4 py-3 text-sm text-muted-foreground"
              {...interactiveProps}
            >
              <span className="mouse-layer">{item}</span>
            </div>
          ))}
        </section>

        <section id="principles" className="mt-14">
          <div className="mb-5 flex items-center gap-2">
            <Layers className="h-4 w-4 text-info" />
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Design Principles
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {principles.map((item) => (
              <Card
                key={item.title}
                variant="interactive"
                className="mouse-reactive mouse-tilt hover-lift glint-border h-full"
                {...interactiveProps}
              >
                <CardTitle className="mouse-layer">{item.title}</CardTitle>
                <CardContent className="mouse-layer mt-3 pt-0 text-sm text-muted-foreground">
                  {item.description}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section
          className="mouse-reactive mouse-tilt hover-lift glint-border mt-14 rounded-2xl border border-border bg-surface p-6 sm:p-8"
          {...interactiveProps}
        >
          <div className="mouse-layer flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-lg font-semibold tracking-tight">Start building now</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Explore all components, variants, and usage snippets in one place.
              </p>
            </div>
            <Link href="/component">
              <Button size="md" className="gap-2">
                Browse Components
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <Separator className="mouse-layer my-6" />
          <p className="mouse-layer text-xs text-muted">Last updated: {formatDate(new Date())}</p>
        </section>
      </main>
    </div>
  );
}
