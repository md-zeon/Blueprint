import { RiGithubLine, RiLinkedinLine, RiTwitterXLine } from "@remixicon/react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const members = [
  {
    name: "Clara Hoffmann",
    role: "Co-founder & CEO",
    avatar: "https://i.pravatar.cc/150?img=5",
    bio: "Shapes strategy and culture. Previously founded two B2B SaaS companies and led growth at Stripe.",
    social: { linkedin: "#", twitter: "#", github: null },
  },
  {
    name: "Marcus Tran",
    role: "Co-founder & CTO",
    avatar: "https://i.pravatar.cc/150?img=12",
    bio: "Architect behind the platform. Open-source contributor with a decade of distributed-systems experience.",
    social: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "Amara Osei",
    role: "Head of Design",
    avatar: "https://i.pravatar.cc/150?img=49",
    bio: "Crafts interfaces that feel inevitable. Former principal designer at Figma and Linear.",
    social: { linkedin: "#", twitter: "#", github: null },
  },
  {
    name: "Lena Kovač",
    role: "VP of Engineering",
    avatar: "https://i.pravatar.cc/150?img=24",
    bio: "Scales teams and codebases with equal care. Led engineering at three Series B startups.",
    social: { linkedin: "#", twitter: null, github: "#" },
  },
  {
    name: "Daniel Reyes",
    role: "Head of Product",
    avatar: "https://i.pravatar.cc/150?img=33",
    bio: "Turns customer problems into elegant solutions. Background in product management at Notion and Vercel.",
    social: { linkedin: "#", twitter: "#", github: null },
  },
  {
    name: "Yuna Park",
    role: "Head of Marketing",
    avatar: "https://i.pravatar.cc/150?img=44",
    bio: "Builds brand from zero to recognizable. Previously ran marketing at Loom through their acquisition by Atlassian.",
    social: { linkedin: "#", twitter: "#", github: null },
  },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("");
}

export default function TeamBlock1() {
  return (
    <section className="flex min-h-svh w-full items-center justify-center bg-background px-6 py-20 text-foreground">
      <div className="mx-auto w-full max-w-5xl">
        <div className="mx-auto max-w-xl text-center">
          <span className="inline-block border border-border px-3 py-1 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            Our Team
          </span>
          <h2 className="mt-5 text-4xl font-bold tracking-tight">
            The people behind Acme
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            A small, focused team that cares deeply about craft, reliability,
            and the people who use what we build.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2 md:grid-cols-3">
          {members.map(({ name, role, avatar, bio, social }) => (
            <Card
              key={name}
              className="flex flex-col border-0 bg-card p-0 transition-colors duration-150 hover:bg-muted/40"
            >
              <CardContent className="flex flex-1 flex-col gap-5 p-6">
                <div className="flex items-start gap-4">
                  <Avatar className="size-16 border border-border">
                    <AvatarImage
                      src={avatar}
                      alt={name}
                      className="grayscale"
                    />
                    <AvatarFallback className="text-sm font-medium">
                      {getInitials(name)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col items-start gap-2">
                    <span className="text-sm leading-none font-semibold text-foreground">
                      {name}
                    </span>
                    <span className="text-xs font-medium text-muted-foreground">
                      {role}
                    </span>
                    <div className="flex gap-0.5">
                      {social.linkedin && (
                        <Button
                          nativeButton={false}
                          variant="secondary"
                          size="icon-sm"
                          render={
                            <a
                              href={social.linkedin}
                              aria-label={`${name} on LinkedIn`}
                            />
                          }
                        >
                          <RiLinkedinLine className="size-4 text-muted-foreground transition-colors hover:text-foreground" />
                        </Button>
                      )}
                      {social.twitter && (
                        <Button
                          nativeButton={false}
                          variant="secondary"
                          size="icon-sm"
                          render={
                            <a
                              href={social.twitter}
                              aria-label={`${name} on X`}
                            />
                          }
                        >
                          <RiTwitterXLine className="size-4 text-muted-foreground transition-colors hover:text-foreground" />
                        </Button>
                      )}
                      {social.github && (
                        <Button
                          nativeButton={false}
                          variant="secondary"
                          size="icon-sm"
                          render={
                            <a
                              href={social.github}
                              aria-label={`${name} on GitHub`}
                            />
                          }
                        >
                          <RiGithubLine className="size-4 text-muted-foreground transition-colors hover:text-foreground" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
