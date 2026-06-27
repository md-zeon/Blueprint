import { RiArrowRightLine } from "@remixicon/react";

import { Button } from "@/components/ui/button";

export default function CtaBlock2() {
  return (
    <section className="flex min-h-svh w-full items-center justify-center bg-muted px-6 py-12 text-foreground">
      <div className="w-full max-w-md border border-border bg-card px-8 py-10 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-balance sm:text-3xl">
          Ready to ship your next product?
        </h2>
        <p className="mx-auto mt-3 max-w-sm text-sm text-pretty text-muted-foreground">
          Acme gives your team everything it needs to go from idea to
          production. Start free, no credit card required.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button
            render={<a href="#" />}
            nativeButton={false}
            className="w-full sm:w-auto"
          >
            Get Started for Free
            <RiArrowRightLine data-icon="inline-end" aria-hidden="true" />
          </Button>
          <Button
            variant="outline"
            render={<a href="#" />}
            nativeButton={false}
            className="w-full sm:w-auto"
          >
            Talk to Sales
          </Button>
        </div>
        <p className="mt-5 text-xs text-muted-foreground">
          Join 10,000+ teams already building with Acme.
        </p>
      </div>
    </section>
  );
}
