"use client";

import { useState } from "react";
import {
  RiArrowRightLine,
  RiCheckLine,
  RiGithubFill,
  RiTwitterXFill,
  RiLinkedinFill,
  RiYoutubeFill,
} from "@remixicon/react";
import { toast } from "sonner";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Toaster } from "@/components/ui/sonner";

const columns = [
  {
    title: "Product",
    links: ["Blocks", "Templates", "Pricing", "Changelog", "Roadmap"],
  },
  {
    title: "Resources",
    links: ["Documentation", "Guides", "API Reference", "Support"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Careers", "Contact"],
  },
];

const socials = [
  { label: "GitHub", icon: RiGithubFill },
  { label: "X", icon: RiTwitterXFill },
  { label: "LinkedIn", icon: RiLinkedinFill },
  { label: "YouTube", icon: RiYoutubeFill },
];

export default function FooterBlock3() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    toast.success("You're subscribed", {
      description: `Confirmation sent to ${email}.`,
    });
  }

  return (
    <section className="flex min-h-svh w-full flex-col justify-center bg-muted/30 px-6 py-16 text-foreground">
      <Toaster />
      <footer className="mx-auto w-full max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr] lg:gap-16">
          <div className="max-w-sm">
            <a href="#" className="flex items-center gap-2">
              <div className="grid grid-cols-2 gap-0.5" aria-hidden="true">
                <div className="size-2.5 bg-primary" />
                <div className="size-2.5 bg-primary" />
                <div className="size-2.5 bg-primary" />
                <div className="size-2.5 bg-primary" />
              </div>
              <span className="text-lg font-bold tracking-tight">Acme</span>
            </a>
            <h2 className="mt-6 text-xl font-bold tracking-tight">
              Ship faster with our newsletter
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Product updates, new blocks, and engineering notes. One email a
              week, no spam.
            </p>
            <form onSubmit={handleSubscribe} className="mt-5">
              <Label htmlFor="footer-email" className="sr-only">
                Email address
              </Label>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Input
                  id="footer-email"
                  type="email"
                  placeholder="you@acme.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-background sm:flex-1"
                  required
                />
                <Button type="submit" disabled={subscribed}>
                  {subscribed ? (
                    <>
                      <RiCheckLine data-icon="inline-start" />
                      Subscribed
                    </>
                  ) : (
                    <>
                      Subscribe
                      <RiArrowRightLine data-icon="inline-start" />
                    </>
                  )}
                </Button>
              </div>
            </form>
            <p
              className={cn(
                "mt-3 text-xs text-muted-foreground transition-colors",
                subscribed && "text-foreground",
              )}
            >
              {subscribed
                ? "Thanks for subscribing. Check your inbox to confirm."
                : "By subscribing you agree to our Privacy Policy."}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-sm font-bold tracking-tight">
                  {col.title}
                </h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Separator className="mt-12" />

        <div className="flex flex-col items-start gap-4 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; 2026 Acme, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {socials.map((social) => (
              <a
                key={social.label}
                href="#"
                aria-label={social.label}
                className="border border-border bg-background p-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <social.icon className="size-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </section>
  );
}
