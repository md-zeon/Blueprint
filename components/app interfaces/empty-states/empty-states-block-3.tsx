"use client";

import { RiRefreshLine, RiSearchLine } from "@remixicon/react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Toaster } from "@/components/ui/sonner";

export default function EmptyStatesBlock3() {
  return (
    <section className="flex min-h-svh w-full items-center justify-center bg-muted/30 px-6 py-16 text-foreground">
      <Toaster />
      <div className="w-full max-w-md border border-border bg-card">
        <Empty className="border-0">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <RiSearchLine className="size-4" />
            </EmptyMedia>
            <EmptyTitle>No results found</EmptyTitle>
            <EmptyDescription>
              We couldn&apos;t find anything matching &ldquo;quarterly&rdquo;.
              Try a different keyword or clear your filters to see all records.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button
              variant="outline"
              onClick={() =>
                toast("Filters cleared", {
                  id: "filters-cleared",
                  description: "Showing all records.",
                })
              }
            >
              <RiRefreshLine data-icon="inline-start" />
              Clear Filters
            </Button>
          </EmptyContent>
        </Empty>
      </div>
    </section>
  );
}
