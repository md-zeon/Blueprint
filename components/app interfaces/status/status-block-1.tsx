import { RiCheckLine } from "@remixicon/react";

type StatusKey = "operational" | "degraded" | "outage";

const statusConfig: Record<StatusKey, { label: string; dot: string }> = {
  operational: { label: "Operational", dot: "bg-emerald-500" },
  degraded: { label: "Degraded", dot: "bg-amber-500" },
  outage: { label: "Outage", dot: "bg-red-500" },
};

const services: { name: string; status: StatusKey; uptime: string }[] = [
  { name: "API", status: "operational", uptime: "99.99%" },
  { name: "Dashboard", status: "operational", uptime: "99.98%" },
  { name: "Webhooks", status: "operational", uptime: "99.95%" },
  { name: "CDN", status: "operational", uptime: "100%" },
  { name: "Database", status: "operational", uptime: "99.99%" },
];

export default function StatusBlock1() {
  return (
    <section className="flex min-h-svh w-full items-center justify-center bg-background px-6 py-16 text-foreground">
      <div className="mx-auto w-full max-w-2xl">
        <div className="flex items-center gap-4 border border-border bg-card p-5">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
            <RiCheckLine className="size-6" aria-hidden="true" />
          </span>
          <div className="flex flex-col gap-0.5">
            <h2 className="text-lg font-semibold">All systems operational</h2>
            <p className="text-sm text-muted-foreground tabular-nums">
              As of Jun 26, 2026, 14:32 UTC
            </p>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <h3 className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
            Services
          </h3>
          <span className="text-xs text-muted-foreground">
            Uptime, last 90 days
          </span>
        </div>

        <ul className="mt-3 flex flex-col border border-border">
          {services.map((service, i) => (
            <li
              key={service.name}
              className={
                i > 0
                  ? "flex items-center justify-between gap-4 border-t border-border px-4 py-3.5"
                  : "flex items-center justify-between gap-4 px-4 py-3.5"
              }
            >
              <span className="text-sm font-medium">{service.name}</span>
              <div className="flex items-center gap-4">
                <span className="text-xs text-muted-foreground tabular-nums">
                  {service.uptime}
                </span>
                <span className="flex items-center gap-2 text-sm">
                  <span
                    className={`size-2 rounded-full ${statusConfig[service.status].dot}`}
                    aria-hidden="true"
                  />
                  {statusConfig[service.status].label}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
