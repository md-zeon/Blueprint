import {
  RiArrowLeftLine,
  RiBriefcaseLine,
  RiCheckLine,
  RiMapPinLine,
  RiTimeLine,
} from "@remixicon/react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const meta = [
  { icon: RiBriefcaseLine, label: "Engineering" },
  { icon: RiMapPinLine, label: "Remote, Europe" },
  { icon: RiTimeLine, label: "Full-time" },
];

const responsibilities = [
  "Build and own customer-facing features across the web app, end to end.",
  "Shape the design system and raise the quality bar for the frontend.",
  "Partner with design and product to turn ideas into shipped work.",
  "Mentor engineers and help set our frontend technical direction.",
];

const requirements = [
  "5+ years building production web apps with React and TypeScript.",
  "A strong eye for detail, accessibility, and interaction design.",
  "Comfort working autonomously in a remote-first, async team.",
];

export default function CareersBlock2() {
  return (
    <section className="flex min-h-svh w-full justify-center bg-background px-6 py-16 text-foreground">
      <article className="w-full max-w-2xl">
        <a
          href="#"
          className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <RiArrowLeftLine className="size-4" aria-hidden="true" />
          All open roles
        </a>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-bold tracking-tight">
              Senior Frontend Engineer
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-muted-foreground">
              {meta.map((item) => (
                <span key={item.label} className="flex items-center gap-1.5">
                  <item.icon className="size-4" aria-hidden="true" />
                  {item.label}
                </span>
              ))}
            </div>
          </div>
          <Button
            render={<a href="#" />}
            nativeButton={false}
            className="shrink-0"
          >
            Apply now
          </Button>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col gap-8 text-[15px]/relaxed text-foreground/80">
          <div className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold tracking-tight text-foreground">
              About the role
            </h2>
            <p>
              We are looking for a senior engineer to help shape the frontend of
              our product. You will work closely with design and product to ship
              polished, accessible interfaces that thousands of teams rely on
              every day.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold tracking-tight text-foreground">
              What you will do
            </h2>
            <ul className="flex flex-col gap-2.5">
              {responsibilities.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <RiCheckLine
                    className="mt-0.5 size-4 shrink-0 text-foreground"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold tracking-tight text-foreground">
              What we are looking for
            </h2>
            <ul className="flex flex-col gap-2.5">
              {requirements.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <RiCheckLine
                    className="mt-0.5 size-4 shrink-0 text-foreground"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col gap-4 border border-border bg-muted/30 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-sm font-semibold">Ready to apply?</p>
            <p className="text-sm text-muted-foreground">
              We review every application and reply within a week.
            </p>
          </div>
          <Button
            render={<a href="#" />}
            nativeButton={false}
            className="shrink-0"
          >
            Apply now
          </Button>
        </div>
      </article>
    </section>
  );
}
