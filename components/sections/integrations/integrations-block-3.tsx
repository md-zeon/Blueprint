"use client";

import { useState } from "react";
import {
  RiArrowRightLine,
  RiBankCardLine,
  RiBarChart2Line,
  RiGithubFill,
  RiGoogleFill,
  RiMoneyDollarCircleLine,
  RiSearchLine,
  RiSlackFill,
  RiStackLine,
  RiBankCardFill,
  RiTerminalBoxLine,
} from "@remixicon/react";
import { toast } from "sonner";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Toaster } from "@/components/ui/sonner";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

type Filter = "All" | "Communication" | "Analytics" | "Payments" | "Dev Tools";

const filters: Filter[] = [
  "All",
  "Communication",
  "Analytics",
  "Payments",
  "Dev Tools",
];

type Integration = {
  name: string;
  description: string;
  category: Exclude<Filter, "All">;
  Icon: typeof RiSlackFill;
};

const integrations: Integration[] = [
  {
    name: "Slack",
    description: "Send alerts and approvals straight to your channels.",
    category: "Communication",
    Icon: RiSlackFill,
  },
  {
    name: "Intercom",
    description: "Sync conversations and route tickets automatically.",
    category: "Communication",
    Icon: RiStackLine,
  },
  {
    name: "Gmail",
    description: "Trigger workflows from inbound and outbound mail.",
    category: "Communication",
    Icon: RiGoogleFill,
  },
  {
    name: "Mixpanel",
    description: "Stream product events into actionable funnels.",
    category: "Analytics",
    Icon: RiBarChart2Line,
  },
  {
    name: "Looker",
    description: "Embed dashboards and share live reports with teams.",
    category: "Analytics",
    Icon: RiStackLine,
  },
  {
    name: "Stripe",
    description: "Reconcile payments, refunds and subscriptions.",
    category: "Payments",
    Icon: RiBankCardFill,
  },
  {
    name: "Paddle",
    description: "Handle global tax and merchant-of-record billing.",
    category: "Payments",
    Icon: RiBankCardLine,
  },
  {
    name: "GitHub",
    description: "Link commits and deploys to your release pipeline.",
    category: "Dev Tools",
    Icon: RiGithubFill,
  },
  {
    name: "Sentry",
    description: "Capture errors and open issues without leaving Acme.",
    category: "Dev Tools",
    Icon: RiTerminalBoxLine,
  },
];

const categoryIcon: Record<Exclude<Filter, "All">, typeof RiSlackFill> = {
  Communication: RiStackLine,
  Analytics: RiBarChart2Line,
  Payments: RiMoneyDollarCircleLine,
  "Dev Tools": RiTerminalBoxLine,
};

export default function IntegrationsBlock3() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<Filter>("All");
  const [selected, setSelected] = useState<Integration | null>(null);
  const [notify, setNotify] = useState(true);

  const normalized = query.trim().toLowerCase();
  const results = integrations.filter((item) => {
    const matchesFilter = active === "All" || item.category === active;
    const matchesQuery =
      normalized === "" ||
      item.name.toLowerCase().includes(normalized) ||
      item.description.toLowerCase().includes(normalized) ||
      item.category.toLowerCase().includes(normalized);
    return matchesFilter && matchesQuery;
  });

  function openConnect(item: Integration) {
    setNotify(true);
    setSelected(item);
  }

  function handleConnect() {
    if (selected) {
      toast.success(`${selected.name} connected`, {
        description: notify
          ? `Notifications enabled for your ${selected.category} workflows.`
          : `Added to your ${selected.category} integrations.`,
      });
    }
    setSelected(null);
  }

  const SelectedIcon = selected?.Icon;

  return (
    <section className="flex min-h-svh w-full justify-center bg-muted/30 px-6 py-16 text-foreground">
      <Toaster />
      <div className="mx-auto w-full max-w-5xl">
        <div className="flex flex-col gap-4">
          <Badge variant="outline" className="w-fit">
            <RiStackLine data-icon="inline-start" />
            Integration directory
          </Badge>
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Connect Acme to your stack
            </h2>
            <p className="max-w-xl text-sm text-muted-foreground">
              Browse our directory of native integrations. Search by name or
              filter by category to find the right connection.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4">
          <div className="relative w-full max-w-sm">
            <RiSearchLine
              className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <Input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search integrations..."
              aria-label="Search integrations"
              className="h-9 pl-8 text-sm"
            />
          </div>

          <ToggleGroup
            variant="outline"
            size="sm"
            value={[active]}
            onValueChange={(value) => {
              const next = value[0] as Filter | undefined;
              if (next) setActive(next);
            }}
            aria-label="Filter integrations by category"
            className="flex-wrap"
          >
            {filters.map((filter) => (
              <ToggleGroupItem
                key={filter}
                value={filter}
                aria-label={`Show ${filter} integrations`}
                className="text-xs font-medium tracking-wide"
              >
                {filter}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>

        {results.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {results.map((item) => {
              const CategoryIcon = categoryIcon[item.category];
              return (
                <Card
                  key={item.name}
                  className="group/tile transition-shadow hover:ring-foreground/25"
                >
                  <CardContent className="flex h-full flex-col gap-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex size-10 items-center justify-center rounded-none bg-muted text-foreground">
                        <item.Icon className="size-5" aria-hidden="true" />
                      </div>
                      <Badge variant="secondary" className="gap-1">
                        <CategoryIcon data-icon="inline-start" />
                        {item.category}
                      </Badge>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-sm font-medium">{item.name}</h3>
                      <p className="text-xs/relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                    <div className="mt-auto pt-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => openConnect(item)}
                        className="-ml-2 text-primary"
                      >
                        Connect
                        <RiArrowRightLine className="transition-transform group-hover/tile:translate-x-0.5" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        ) : (
          <div className="mt-8 flex flex-col items-center justify-center gap-2 rounded-none border border-dashed border-border bg-background px-6 py-16 text-center">
            <div className="flex size-10 items-center justify-center rounded-full bg-muted text-muted-foreground">
              <RiSearchLine className="size-5" aria-hidden="true" />
            </div>
            <p className="text-sm font-medium">No integrations found</p>
            <p className="max-w-xs text-xs text-muted-foreground">
              Try a different search term or clear the active filter.
            </p>
          </div>
        )}
      </div>

      <Dialog
        open={selected !== null}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      >
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <span className="flex size-10 items-center justify-center border border-border bg-background">
              {SelectedIcon && (
                <SelectedIcon className="size-5" aria-hidden="true" />
              )}
            </span>
            <DialogTitle className="mt-3">Connect {selected?.name}</DialogTitle>
            <DialogDescription>
              Authorize Acme to access your {selected?.name} account. This adds
              it to your{" "}
              <span className="text-foreground">{selected?.category}</span>{" "}
              integrations. You can disconnect any time.
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="workspace" className="text-xs font-medium">
                Workspace
              </Label>
              <Input
                id="workspace"
                defaultValue="acme-team"
                className="h-9 text-sm"
              />
            </div>
            <div className="flex items-start justify-between gap-4 border border-border bg-muted/40 p-3">
              <div className="flex flex-col gap-0.5">
                <Label htmlFor="notify" className="text-xs font-medium">
                  Enable notifications
                </Label>
                <span className="text-xs text-muted-foreground">
                  Send workflow updates to this integration.
                </span>
              </div>
              <Switch
                id="notify"
                checked={notify}
                onCheckedChange={setNotify}
                aria-label="Enable notifications"
              />
            </div>
          </div>

          <DialogFooter>
            <DialogClose render={<Button variant="outline" />}>
              Cancel
            </DialogClose>
            <Button onClick={handleConnect}>Connect {selected?.name}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
}
