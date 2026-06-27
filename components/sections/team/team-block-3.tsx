import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  RiDribbbleLine,
  RiGithubLine,
  RiLinkedinLine,
  RiTwitterXLine,
} from "@remixicon/react";

const members = [
  {
    name: "Clara Hoffmann",
    role: "Chief Executive Officer",
    bio: "Scaled three enterprise platforms from seed to IPO. Leads with clarity and an obsession for customer impact.",
    img: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Marcus Tran",
    role: "Chief Technology Officer",
    bio: "Former staff engineer at Google. Builds resilient distributed systems and the teams that maintain them.",
    img: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Amara Osei",
    role: "Head of Design",
    bio: "Crafts interfaces that win awards and convert users. Believes great design is invisible until it's gone.",
    img: "https://i.pravatar.cc/150?img=20",
  },
  {
    name: "Lena Kovac",
    role: "VP of Engineering",
    bio: "Led platform migrations at Stripe and Figma. Turns technical debt into roadmap wins quarter after quarter.",
    img: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "Daniel Reyes",
    role: "Head of Product",
    bio: "Zero-to-one product thinker. Shipped features now used by over four million people across the globe.",
    img: "https://i.pravatar.cc/150?img=14",
  },
  {
    name: "Sophie Laurent",
    role: "Head of Marketing",
    bio: "Turned brand storytelling into a growth engine twice, at companies you already know and trust.",
    img: "https://i.pravatar.cc/150?img=45",
  },
  {
    name: "Yuki Tanaka",
    role: "Head of Data",
    bio: "Built the analytics backbone powering every decision. Makes numbers tell stories executives act on.",
    img: "https://i.pravatar.cc/150?img=60",
  },
  {
    name: "Noah Bennett",
    role: "Head of Operations",
    bio: "Keeps the company running like clockwork. Scaled support and finance through three hypergrowth phases.",
    img: "https://i.pravatar.cc/150?img=68",
  },
];

const socials = [
  { label: "X", icon: RiTwitterXLine },
  { label: "LinkedIn", icon: RiLinkedinLine },
  { label: "GitHub", icon: RiGithubLine },
  { label: "Dribbble", icon: RiDribbbleLine },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("");
}

export default function TeamBlock3() {
  return (
    <section className="flex min-h-svh w-full items-center justify-center bg-muted/30 px-6 py-16 text-foreground">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Meet the Acme team
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            A small, senior crew that has shipped products used by millions.
            Hover a card to learn what makes each of them tick.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
          {members.map(({ name, role, bio, img }) => (
            <Card
              key={name}
              className="group relative overflow-hidden p-0 transition-all duration-300 hover:shadow-lg hover:ring-1 hover:ring-border"
            >
              <div className="flex flex-col items-center gap-4 px-6 py-10 text-center">
                <Avatar className="size-20 border border-border">
                  <AvatarImage src={img} alt={name} className="grayscale" />
                  <AvatarFallback className="bg-muted text-lg font-semibold">
                    {getInitials(name)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-1">
                  <span className="text-base leading-tight font-semibold">
                    {name}
                  </span>
                  <span className="text-sm text-muted-foreground">{role}</span>
                </div>
              </div>

              <div
                className={cn(
                  "absolute inset-0 flex flex-col items-center justify-center gap-5 bg-card/95 px-6 text-center opacity-0 backdrop-blur-sm transition-all duration-300",
                  "translate-y-3 group-hover:translate-y-0 group-hover:opacity-100",
                )}
              >
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {bio}
                </p>
                <div className="flex items-center gap-2">
                  {socials.map(({ label, icon: Icon }) => (
                    <a
                      key={label}
                      href="#"
                      aria-label={`${name} on ${label}`}
                      className="flex size-9 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                    >
                      <Icon className="size-4" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
