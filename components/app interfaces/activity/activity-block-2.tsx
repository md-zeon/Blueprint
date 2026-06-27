import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Marker, MarkerContent } from "@/components/ui/marker";

type Event = {
  id: string;
  actor: string;
  initials: string;
  avatar: string;
  action: string;
  target: string;
  time: string;
};

const groups: { label: string; events: Event[] }[] = [
  {
    label: "Today",
    events: [
      {
        id: "merge-main",
        actor: "Mara Ellis",
        initials: "ME",
        avatar: "https://i.pravatar.cc/80?img=47",
        action: "merged a pull request into",
        target: "main",
        time: "12 Min Ago",
      },
      {
        id: "deploy-v241",
        actor: "Leo Tanaka",
        initials: "LT",
        avatar: "https://i.pravatar.cc/80?img=12",
        action: "deployed",
        target: "v2.4.1",
        time: "1 Hour Ago",
      },
      {
        id: "comment-roadmap",
        actor: "Priya Nair",
        initials: "PN",
        avatar: "https://i.pravatar.cc/80?img=32",
        action: "commented on",
        target: "Q3 Roadmap",
        time: "3 Hours Ago",
      },
    ],
  },
  {
    label: "Yesterday",
    events: [
      {
        id: "invite-members",
        actor: "Owen Brooks",
        initials: "OB",
        avatar: "https://i.pravatar.cc/80?img=53",
        action: "invited",
        target: "two new members",
        time: "Jun 24",
      },
      {
        id: "close-482",
        actor: "Sasha Kim",
        initials: "SK",
        avatar: "https://i.pravatar.cc/80?img=48",
        action: "closed issue",
        target: "#482",
        time: "Jun 24",
      },
    ],
  },
];

export default function ActivityBlock2() {
  return (
    <section className="flex min-h-svh w-full items-center justify-center bg-background px-6 py-16 text-foreground">
      <div className="w-full max-w-md">
        <h2 className="mb-6 text-xl font-bold tracking-tight">Activity</h2>

        <div className="flex flex-col gap-6">
          {groups.map((group) => (
            <div key={group.label} className="flex flex-col gap-3">
              <Marker variant="separator">
                <MarkerContent>{group.label}</MarkerContent>
              </Marker>
              <ul className="flex flex-col gap-4">
                {group.events.map((event) => (
                  <li key={event.id} className="flex items-center gap-3">
                    <Avatar className="size-8 border border-border">
                      <AvatarImage
                        src={event.avatar}
                        alt={event.actor}
                        className="grayscale"
                      />
                      <AvatarFallback className="text-xs">
                        {event.initials}
                      </AvatarFallback>
                    </Avatar>
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
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
