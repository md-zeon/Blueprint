"use client";

import { useState } from "react";
import {
  RiArrowRightLine,
  RiCloseLine,
  RiMegaphoneLine,
  RiSparkling2Line,
} from "@remixicon/react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function AnnouncementBlock1() {
  const [dismissed, setDismissed] = useState(false);

  return (
    <section className="flex min-h-svh w-full flex-col items-center justify-center bg-background px-6 py-12 text-foreground">
      <div className="w-full max-w-2xl">
        {!dismissed && (
          <div className="flex w-full items-center justify-between gap-3 border border-border bg-primary px-4 py-2.5 text-primary-foreground">
            <div className="flex items-center gap-2 text-sm font-medium">
              <RiMegaphoneLine className="size-4 shrink-0" aria-hidden="true" />
              <span>
                Acme 3.0 is here: faster, smarter, and redesigned.{" "}
                <Button
                  variant="link"
                  size="sm"
                  render={<a href="#" />}
                  nativeButton={false}
                  className="h-auto p-0 text-primary-foreground underline underline-offset-2 hover:text-primary-foreground/80"
                >
                  Read the Announcement
                  <span className="sr-only"> (opens in same tab)</span>
                </Button>
              </span>
            </div>
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label="Dismiss announcement"
              onClick={() => setDismissed(true)}
              className="shrink-0 hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <RiCloseLine aria-hidden="true" />
            </Button>
          </div>
        )}

        <div className="mt-6 border border-border bg-card px-6 py-10 text-center sm:px-10">
          <Badge variant="secondary">
            <RiSparkling2Line data-icon="inline-start" aria-hidden="true" />
            What&apos;s New
          </Badge>
          <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
            Introducing Acme 3.0
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
            A faster engine, a redesigned workspace, and powerful new
            automations. Everything your team needs to ship sooner.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              render={<a href="#" />}
              nativeButton={false}
              className="w-full sm:w-auto"
            >
              Explore the Release
              <RiArrowRightLine data-icon="inline-end" aria-hidden="true" />
            </Button>
            <Button
              variant="outline"
              render={<a href="#" />}
              nativeButton={false}
              className="w-full sm:w-auto"
            >
              View Changelog
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
