"use client";

import { RiArrowRightLine, RiMenuLine } from "@remixicon/react";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = ["Blocks", "Docs", "Pricing", "Changelog"];

export default function HeaderBlock1() {
  return (
    <section className="flex min-h-svh w-full flex-col bg-background text-foreground">
      <header className="flex h-16 w-full items-center gap-6 border-b border-border px-4 sm:px-6">
        <a href="#" className="flex items-center gap-2">
          <div className="grid grid-cols-2 gap-0.5" aria-hidden="true">
            <div className="size-2.5 bg-primary" />
            <div className="size-2.5 bg-primary" />
            <div className="size-2.5 bg-primary" />
            <div className="size-2.5 bg-primary" />
          </div>
          <span className="text-lg font-bold tracking-tight">Acme</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <Button
            render={<a href="#" />}
            nativeButton={false}
            className="hidden md:inline-flex"
          >
            Get Started
            <RiArrowRightLine data-icon="inline-end" aria-hidden="true" />
          </Button>

          <Sheet>
            <SheetTrigger
              render={
                <Button variant="outline" size="icon" className="md:hidden" />
              }
              aria-label="Open menu"
            >
              <RiMenuLine aria-hidden="true" />
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-xs">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <div className="grid grid-cols-2 gap-0.5" aria-hidden="true">
                    <div className="size-2 bg-primary" />
                    <div className="size-2 bg-primary" />
                    <div className="size-2 bg-primary" />
                    <div className="size-2 bg-primary" />
                  </div>
                  Acme
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col px-2">
                {navLinks.map((link) => (
                  <SheetClose
                    key={link}
                    render={<a href="#" />}
                    nativeButton={false}
                    className="px-2 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {link}
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-auto p-4">
                <Button
                  render={<a href="#" />}
                  nativeButton={false}
                  className="w-full"
                >
                  Get Started
                  <RiArrowRightLine data-icon="inline-end" aria-hidden="true" />
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <div className="flex-1 px-4 py-10 sm:px-6">
        <div className="mx-auto w-full max-w-5xl">
          <div className="flex flex-col gap-3">
            <Skeleton className="h-9 w-2/3 max-w-md" />
            <Skeleton className="h-4 w-full max-w-xl" />
            <Skeleton className="h-4 w-4/5 max-w-lg" />
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Skeleton className="h-36" />
            <Skeleton className="h-36" />
            <Skeleton className="h-36" />
          </div>
        </div>
      </div>
    </section>
  );
}
