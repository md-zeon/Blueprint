import {
  RiArrowDownLine,
  RiArrowUpLine,
  RiGroupLine,
  RiPulseLine,
  RiShoppingBag3Line,
  RiTimeLine,
} from "@remixicon/react";

const stats = [
  {
    icon: RiGroupLine,
    value: "48,920",
    label: "Monthly active users",
    delta: "+12.5%",
    trend: "up" as const,
  },
  {
    icon: RiShoppingBag3Line,
    value: "$182k",
    label: "Net revenue",
    delta: "+8.1%",
    trend: "up" as const,
  },
  {
    icon: RiPulseLine,
    value: "3.2%",
    label: "Churn rate",
    delta: "-1.4%",
    trend: "down" as const,
  },
  {
    icon: RiTimeLine,
    value: "412 ms",
    label: "Avg response time",
    delta: "-3.2%",
    trend: "down" as const,
  },
];

export default function StatsBlock3() {
  return (
    <section className="flex min-h-svh w-full items-center justify-center bg-background px-6 py-16 text-foreground">
      <div className="mx-auto w-full max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
            This quarter
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Performance at a glance
          </h2>
          <p className="mt-3 text-muted-foreground">
            Key metrics across growth, revenue, and reliability, refreshed every
            hour.
          </p>
        </div>

        <dl className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {stats.map(({ icon: Icon, value, label, delta, trend }) => (
            <div
              key={label}
              className="flex flex-col border border-border bg-card p-6"
            >
              <span className="flex size-10 items-center justify-center border border-border bg-muted">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <dt className="mt-6 text-3xl font-bold tracking-tight tabular-nums">
                {value}
              </dt>
              <dd className="mt-1 text-sm text-muted-foreground">{label}</dd>
              <div className="mt-4 flex items-center gap-1 text-sm text-muted-foreground">
                {trend === "up" ? (
                  <RiArrowUpLine className="size-4" aria-hidden="true" />
                ) : (
                  <RiArrowDownLine className="size-4" aria-hidden="true" />
                )}
                <span className="font-medium tabular-nums">{delta}</span>
                <span>vs last quarter</span>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
