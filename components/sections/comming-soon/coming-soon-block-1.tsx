import { RiGithubFill, RiRocket2Line, RiTwitterXFill } from "@remixicon/react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const waitlistAvatars = [
  "https://i.pravatar.cc/64?img=12",
  "https://i.pravatar.cc/64?img=32",
  "https://i.pravatar.cc/64?img=45",
  "https://i.pravatar.cc/64?img=5",
];

export default function ComingSoonBlock1() {
  return (
    <section className="flex min-h-svh w-full flex-col items-center justify-center gap-8 bg-background px-6 py-12 text-center text-foreground">
      <div className="flex size-12 items-center justify-center border border-border bg-muted/30">
        <RiRocket2Line className="size-6" aria-hidden="true" />
      </div>

      <div className="flex flex-col items-center gap-3">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Something great is coming
        </h1>
        <p className="max-w-md text-sm text-muted-foreground">
          We are putting the finishing touches on it. Leave your email and be
          the first to know when we launch.
        </p>
      </div>

      <form
        action="#"
        className="flex w-full max-w-sm flex-col gap-2 sm:flex-row"
      >
        <Input
          type="email"
          required
          placeholder="you@example.com"
          aria-label="Email address"
        />
        <Button type="submit" className="shrink-0">
          Notify me
        </Button>
      </form>

      <div className="flex items-center gap-3">
        <div className="flex -space-x-2">
          {waitlistAvatars.map((src) => (
            <img
              key={src}
              src={src}
              alt=""
              aria-hidden="true"
              className="size-7 rounded-full border-2 border-background object-cover grayscale"
            />
          ))}
        </div>
        <span className="text-xs text-muted-foreground">
          Join 2,000+ on the waitlist
        </span>
      </div>

      <div className="flex items-center gap-4 text-muted-foreground">
        <a href="#" aria-label="GitHub" className="hover:text-foreground">
          <RiGithubFill className="size-5" aria-hidden="true" />
        </a>
        <a href="#" aria-label="X" className="hover:text-foreground">
          <RiTwitterXFill className="size-5" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
