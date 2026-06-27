"use client";

import { useState } from "react";
import { RiArrowRightLine, RiMenuLine } from "@remixicon/react";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Product", href: "#" },
  { label: "Solutions", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Resources", href: "#" },
];

export default function HeaderBlock3() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative flex min-h-svh w-full flex-col bg-background text-foreground">
      <header className="sticky top-0 z-30 w-full border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center gap-6 px-6">
          <a href="#" className="flex shrink-0 items-center gap-2.5">
            <div className="grid grid-cols-2 gap-0.5" aria-hidden="true">
              <div className="size-2.5 bg-primary" />
              <div className="size-2.5 bg-primary" />
              <div className="size-2.5 bg-primary" />
              <div className="size-2.5 bg-primary" />
            </div>
            <span className="text-base font-bold tracking-tight">Acme</span>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="ml-auto hidden items-center gap-2 md:flex">
            <Button
              render={<a href="#" />}
              nativeButton={false}
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground"
            >
              Sign in
            </Button>
            <Button render={<a href="#" />} nativeButton={false} size="sm">
              Get Started
              <RiArrowRightLine data-icon="inline-end" aria-hidden="true" />
            </Button>
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="Open menu"
                  className="ml-auto md:hidden"
                />
              }
            >
              <RiMenuLine aria-hidden="true" />
            </SheetTrigger>
            <SheetContent side="right" className="w-3/4 max-w-xs">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2.5">
                  <span className="grid grid-cols-2 gap-0.5" aria-hidden="true">
                    <span className="size-2 bg-primary" />
                    <span className="size-2 bg-primary" />
                    <span className="size-2 bg-primary" />
                    <span className="size-2 bg-primary" />
                  </span>
                  Acme
                </SheetTitle>
              </SheetHeader>

              <nav className="flex flex-col px-4">
                {navLinks.map((link) => (
                  <SheetClose
                    key={link.label}
                    nativeButton={false}
                    render={
                      <a
                        href={link.href}
                        className="border-b border-border py-3 text-sm font-medium text-muted-foreground transition-colors last:border-b-0 hover:text-foreground"
                      />
                    }
                  >
                    {link.label}
                  </SheetClose>
                ))}
              </nav>

              <SheetFooter>
                <SheetClose
                  nativeButton={false}
                  render={
                    <Button
                      render={<a href="#" />}
                      nativeButton={false}
                      variant="outline"
                      className="w-full"
                    />
                  }
                >
                  Sign in
                </SheetClose>
                <SheetClose
                  nativeButton={false}
                  render={
                    <Button
                      render={<a href="#" />}
                      nativeButton={false}
                      className="w-full"
                    />
                  }
                >
                  Get Started
                  <RiArrowRightLine data-icon="inline-end" aria-hidden="true" />
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <div className="flex-1 px-6 py-10">
        <div className="mx-auto w-full max-w-6xl">
          <div className="flex flex-col gap-3">
            <Skeleton className="h-9 w-2/3 max-w-md" />
            <Skeleton className="h-4 w-full max-w-xl" />
            <Skeleton className="h-4 w-4/5 max-w-lg" />
          </div>
          <div className="mt-8 grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
            <Skeleton className="h-36" />
            <Skeleton className="h-36" />
            <Skeleton className="h-36" />
          </div>
        </div>
      </div>
    </section>
  );
}
