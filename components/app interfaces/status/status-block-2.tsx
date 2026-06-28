import { Badge } from "@/components/ui/badge";
import { Marker, MarkerContent } from "@/components/ui/marker";

type UpdateStatus = "Resolved" | "Monitoring" | "Identified" | "Investigating";

const statusText: Record<UpdateStatus, string> = {
  Resolved: "text-emerald-600 dark:text-emerald-400",
  Monitoring: "text-sky-600 dark:text-sky-400",
  Identified: "text-amber-600 dark:text-amber-400",
  Investigating: "text-red-600 dark:text-red-500",
};

type Incident = {
  date: string;
  title: string;
  impact: "Minor" | "Major";
  updates: { status: UpdateStatus; time: string; message: string }[];
};

const incidents: Incident[] = [
  {
    date: "Jun 18, 2026",
    title: "Elevated API error rates",
    impact: "Minor",
    updates: [
      {
        status: "Resolved",
        time: "14:20 UTC",
        message:
          "Error rates have returned to normal and the fix is fully deployed.",
      },
      {
        status: "Monitoring",
        time: "13:05 UTC",
        message:
          "A fix has been rolled out and we are watching error rates closely.",
      },
      {
        status: "Identified",
        time: "12:30 UTC",
        message:
          "The issue was traced to a slow database query and a fix is underway.",
      },
    ],
  },
  {
    date: "Jun 04, 2026",
    title: "Webhook delivery delays",
    impact: "Minor",
    updates: [
      {
        status: "Resolved",
        time: "09:15 UTC",
        message: "The webhook queue has fully drained and delivery is on time.",
      },
      {
        status: "Investigating",
        time: "08:40 UTC",
        message:
          "We are investigating delayed webhook deliveries for some workspaces.",
      },
    ],
  },
];

export default function StatusBlock2() {
  return (
    <section className="flex min-h-svh w-full justify-center bg-background px-6 py-16 text-foreground">
      <div className="mx-auto w-full max-w-2xl">
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight">
            Incident history
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Past incidents and the updates we posted while resolving them.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {incidents.map((incident) => (
            <div
              key={`${incident.date}-${incident.title}`}
              className="flex flex-col gap-3"
            >
              <Marker variant="separator">
                <MarkerContent className="tabular-nums">
                  {incident.date}
                </MarkerContent>
              </Marker>
              <div className="border border-border bg-card p-5">
                <div className="flex items-center gap-2.5">
                  <h3 className="text-sm font-semibold">{incident.title}</h3>
                  <Badge variant="secondary">{incident.impact}</Badge>
                </div>

                <ol className="mt-4 flex flex-col gap-4">
                  {incident.updates.map((update) => (
                    <li
                      key={update.time}
                      className="grid grid-cols-[5.5rem_1fr] gap-x-3 gap-y-1"
                    >
                      <span
                        className={`text-sm font-medium ${statusText[update.status]}`}
                      >
                        {update.status}
                      </span>
                      <span className="text-xs text-muted-foreground tabular-nums">
                        {update.time}
                      </span>
                      <p className="col-start-2 text-sm/relaxed text-muted-foreground">
                        {update.message}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
