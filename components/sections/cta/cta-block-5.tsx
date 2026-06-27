import {
  RiArrowRightLine,
  RiPlayLine,
  RiShieldCheckLine,
} from "@remixicon/react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function CtaBlock5() {
  return (
    <section className="flex min-h-svh w-full items-center justify-center bg-muted/30 px-6 py-16 text-foreground">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
        <div className="flex flex-col items-start text-left">
          <Badge variant="secondary">
            <RiShieldCheckLine data-icon="inline-start" aria-hidden="true" />
            Trusted by 12,000+ teams
          </Badge>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
            Ship your next release with Acme.
          </h2>

          <p className="mt-4 max-w-md text-base text-muted-foreground">
            Build, preview, and launch production-ready interfaces in minutes.
            Composable blocks, sensible defaults, and zero configuration to slow
            you down.
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button
              render={<a href="#" />}
              nativeButton={false}
              className="w-full sm:w-auto"
            >
              Start Free Trial
              <RiArrowRightLine data-icon="inline-end" aria-hidden="true" />
            </Button>
            <Button
              variant="outline"
              render={<a href="#" />}
              nativeButton={false}
              className="w-full sm:w-auto"
            >
              <RiPlayLine data-icon="inline-start" aria-hidden="true" />
              Watch Demo
            </Button>
          </div>

          <p className="mt-6 text-xs text-muted-foreground">
            No credit card required. Cancel anytime.
          </p>
        </div>

        <Card className="overflow-hidden p-0 shadow-sm">
          <div className="flex items-center gap-2 border-b border-border bg-muted/40 px-4 py-3">
            <span className="size-2.5 rounded-full bg-muted-foreground/30" />
            <span className="size-2.5 rounded-full bg-muted-foreground/30" />
            <span className="size-2.5 rounded-full bg-muted-foreground/30" />
            <div className="ml-3 h-5 w-40 rounded-none bg-muted" />
          </div>

          <div className="flex">
            <div className="hidden w-40 shrink-0 flex-col gap-3 border-r border-border p-4 sm:flex">
              <div className="h-8 rounded-none bg-primary/15" />
              <div className="h-6 w-3/4 rounded-none bg-muted" />
              <div className="h-6 w-2/3 rounded-none bg-muted" />
              <div className="h-6 w-5/6 rounded-none bg-muted" />
              <div className="mt-auto h-6 w-1/2 rounded-none bg-muted" />
            </div>

            <div className="flex flex-1 flex-col gap-4 p-5">
              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-none border border-border p-3">
                  <div className="h-2.5 w-10 rounded-full bg-muted" />
                  <div className="mt-3 h-5 w-12 rounded-none bg-primary/20" />
                </div>
                <div className="rounded-none border border-border p-3">
                  <div className="h-2.5 w-10 rounded-full bg-muted" />
                  <div className="mt-3 h-5 w-12 rounded-none bg-muted" />
                </div>
                <div className="rounded-none border border-border p-3">
                  <div className="h-2.5 w-10 rounded-full bg-muted" />
                  <div className="mt-3 h-5 w-12 rounded-none bg-muted" />
                </div>
              </div>

              <div className="flex h-28 items-end gap-2 rounded-none border border-border p-4">
                <div className="h-1/3 flex-1 rounded-none bg-muted" />
                <div className="h-2/3 flex-1 rounded-none bg-muted" />
                <div className="h-1/2 flex-1 rounded-none bg-muted" />
                <div className="h-5/6 flex-1 rounded-none bg-primary/30" />
                <div className="h-2/5 flex-1 rounded-none bg-muted" />
                <div className="h-3/4 flex-1 rounded-none bg-muted" />
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="size-8 shrink-0 rounded-full bg-muted" />
                  <div className="h-3 w-1/2 rounded-full bg-muted" />
                  <div className="ml-auto h-3 w-12 rounded-full bg-muted" />
                </div>
                <div className="flex items-center gap-3">
                  <div className="size-8 shrink-0 rounded-full bg-muted" />
                  <div className="h-3 w-2/3 rounded-full bg-muted" />
                  <div className="ml-auto h-3 w-12 rounded-full bg-muted" />
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
