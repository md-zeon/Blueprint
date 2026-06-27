import {
  RiCheckLine,
  RiChat3Line,
  RiGitMergeLine,
  RiUploadLine,
  RiUserAddLine,
} from "@remixicon/react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Marker, MarkerContent } from "@/components/ui/marker";

type Event = {
  actor: string;
  initials: string;
  avatar: string;
  action: string;
  target: string;
  time: string;
  icon: typeof RiCheckLine;
};

const groups: { label: string; events: Event[] }[] = [
  {
    label: "Today",
    events: [
      {
        actor: "Mara Ellis",
        initials: "ME",
        avatar: "https://i.pravatar.cc/80?img=47",
        action: "merged pull request",
        target: "feat/auth-refresh",
        time: "12 Min Ago",
        icon: RiGitMergeLine,
      },
      {
        actor: "Leo Tanaka",
        initials: "LT",
        avatar: "https://i.pravatar.cc/80?img=12",
        action: "deployed to production",
        target: "v2.4.1",
        time: "1 Hour Ago",
        icon: RiUploadLine,
      },
      {
        actor: "Priya Nair",
        initials: "PN",
        avatar: "https://i.pravatar.cc/80?img=32",
        action: "resolved a comment on",
        target: "Q3 Roadmap",
        time: "3 Hours Ago",
        icon: RiChat3Line,
      },
    ],
  },
  {
    label: "Yesterday",
    events: [
      {
        actor: "Sasha Kim",
        initials: "SK",
        avatar: "https://i.pravatar.cc/80?img=48",
        action: "completed task",
        target: "Migrate billing service",
        time: "Jun 24",
        icon: RiCheckLine,
      },
      {
        actor: "Owen Brooks",
        initials: "OB",
        avatar: "https://i.pravatar.cc/80?img=53",
        action: "invited a new member",
        target: "design@acme.com",
        time: "Jun 24",
        icon: RiUserAddLine,
      },
    ],
  },
];

export default function TimelineBlock3() {
  return (
    <section className="flex min-h-svh w-full items-center justify-center bg-background px-6 py-16 text-foreground">
      <div className="mx-auto w-full max-w-xl">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold tracking-tight">Activity</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              What your team has been working on lately.
            </p>
          </div>
          <Badge variant="secondary" className="shrink-0">
            5 Updates
          </Badge>
        </div>

        <div className="flex flex-col gap-6">
          {groups.map((group) => (
            <div key={group.label} className="flex flex-col gap-4">
              <Marker variant="separator">
                <MarkerContent>{group.label}</MarkerContent>
              </Marker>

              <ol className="relative flex flex-col gap-5">
                <span
                  className="absolute top-3 bottom-3 left-4 w-px bg-border"
                  aria-hidden="true"
                />
                {group.events.map((event) => (
                  <li
                    key={`${event.actor}-${event.target}`}
                    className="relative flex items-center gap-3"
                  >
                    <span className="relative shrink-0">
                      <Avatar className="size-9 border border-border">
                        <AvatarImage
                          src={event.avatar}
                          alt={event.actor}
                          className="grayscale"
                        />
                        <AvatarFallback>{event.initials}</AvatarFallback>
                      </Avatar>
                      <span className="absolute -right-1 -bottom-1 flex size-4 items-center justify-center rounded-full border border-border bg-card text-muted-foreground">
                        <event.icon className="size-2.5" aria-hidden="true" />
                      </span>
                    </span>

                    <p className="flex-1 text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">
                        {event.actor}
                      </span>{" "}
                      {event.action}{" "}
                      <span className="font-medium text-foreground">
                        {event.target}
                      </span>
                    </p>

                    <span className="shrink-0 text-xs text-muted-foreground tabular-nums">
                      {event.time}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
