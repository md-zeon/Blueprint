import {
  RiFlagLine,
  RiRocketLine,
  RiSeedlingLine,
  RiSparkling2Line,
  RiTeamLine,
} from "@remixicon/react";

import { Badge } from "@/components/ui/badge";

type Status = "Shipped" | "In Progress" | "Planned";

const milestones: {
  date: string;
  title: string;
  copy: string;
  icon: typeof RiFlagLine;
  status: Status;
}[] = [
  {
    date: "Jan 2024",
    title: "Acme founded",
    copy: "Three engineers set out to make shipping software feel calm again, starting with a single internal tool.",
    icon: RiSeedlingLine,
    status: "Shipped",
  },
  {
    date: "Jun 2024",
    title: "Private beta",
    copy: "The first 200 teams joined the waitlist and helped shape the core workflow over a summer of weekly releases.",
    icon: RiFlagLine,
    status: "Shipped",
  },
  {
    date: "Nov 2024",
    title: "Public launch",
    copy: "Acme opened to everyone with a free tier, full light and dark themes, and a CLI that installs blocks in seconds.",
    icon: RiRocketLine,
    status: "Shipped",
  },
  {
    date: "Mar 2025",
    title: "Team workspaces",
    copy: "Role-based access, shared libraries, and audit trails landed so larger organizations could adopt Acme safely.",
    icon: RiTeamLine,
    status: "In Progress",
  },
  {
    date: "Q3 2025",
    title: "AI assist",
    copy: "Inline suggestions and natural-language search are next, generating production-ready sections from a short prompt.",
    icon: RiSparkling2Line,
    status: "Planned",
  },
];

const statusVariant: Record<Status, "default" | "secondary" | "outline"> = {
  Shipped: "default",
  "In Progress": "secondary",
  Planned: "outline",
};

export default function TimelineBlock1() {
  return (
    <section className="flex min-h-svh w-full items-center justify-center bg-background px-6 py-16 text-foreground">
      <div className="mx-auto w-full max-w-2xl">
        <div className="mb-12">
          <Badge variant="outline" className="mb-4">
            Milestones
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight">
            From idea to launch
          </h2>
          <p className="mt-3 text-muted-foreground">
            The releases that shaped Acme, and what is coming next.
          </p>
        </div>

        <ol className="flex flex-col">
          {milestones.map((item, i) => {
            const last = i === milestones.length - 1;
            return (
              <li key={item.title} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <span className="flex size-10 shrink-0 items-center justify-center border border-border bg-card text-foreground">
                    <item.icon className="size-5" aria-hidden="true" />
                  </span>
                  {!last && (
                    <span
                      className="w-px flex-1 bg-border"
                      aria-hidden="true"
                    />
                  )}
                </div>

                <div className={last ? "pb-0" : "pb-10"}>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="font-mono text-xs text-muted-foreground tabular-nums">
                      {item.date}
                    </span>
                    <Badge variant={statusVariant[item.status]}>
                      {item.status}
                    </Badge>
                  </div>
                  <h3 className="mt-2 text-base font-semibold">{item.title}</h3>
                  <p className="mt-1.5 text-sm/relaxed text-muted-foreground">
                    {item.copy}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
