"use client";

import { useState } from "react";
import {
  RiCheckLine,
  RiCloudLine,
  RiGithubFill,
  RiHardDrive2Line,
  RiMailLine,
  RiSlackFill,
  RiStackLine,
} from "@remixicon/react";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

type Integration = {
  id: string;
  name: string;
  description: string;
  icon: typeof RiSlackFill;
  category: string;
  defaultConnected?: boolean;
};

const integrations: Integration[] = [
  {
    id: "slack",
    name: "Slack",
    description: "Send deploy alerts and digests to any channel.",
    icon: RiSlackFill,
    category: "Messaging",
    defaultConnected: true,
  },
  {
    id: "github",
    name: "GitHub",
    description: "Sync pull requests, issues and CI status.",
    icon: RiGithubFill,
    category: "Developer",
  },
  {
    id: "drive",
    name: "Acme Drive",
    description: "Back up exports and attachments automatically.",
    icon: RiHardDrive2Line,
    category: "Storage",
  },
  {
    id: "mailer",
    name: "Mailer",
    description: "Trigger transactional emails from workflows.",
    icon: RiMailLine,
    category: "Email",
  },
  {
    id: "datastore",
    name: "Datastore",
    description: "Stream events into your warehouse in real time.",
    icon: RiStackLine,
    category: "Analytics",
  },
  {
    id: "cdn",
    name: "Edge CDN",
    description: "Purge caches and manage edge config remotely.",
    icon: RiCloudLine,
    category: "Infra",
  },
];

export default function IntegrationsBlock4() {
  const [connected, setConnected] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(
      integrations.map((i) => [i.id, Boolean(i.defaultConnected)]),
    ),
  );

  const toggle = (id: string) =>
    setConnected((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <section className="flex w-full justify-center bg-muted/30 px-6 py-20 text-foreground">
      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-8 space-y-2">
          <Badge variant="secondary">
            <RiStackLine data-icon="inline-start" className="size-3.5" />
            Acme workspace
          </Badge>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Integrations
          </h2>
          <p className="max-w-prose text-sm text-muted-foreground">
            Connect your favorite tools to automate the boring parts of your
            workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {integrations.map((integration) => {
            const isOn = Boolean(connected[integration.id]);
            const Icon = integration.icon;
            return (
              <Card
                key={integration.id}
                className={cn(
                  "flex flex-col gap-0 transition-colors",
                  isOn && "border-primary/40 bg-primary/[0.03]",
                )}
              >
                <CardHeader className="flex flex-row items-start justify-between gap-3 space-y-0">
                  <div className="flex items-center gap-3">
                    <span
                      className={cn(
                        "flex size-10 shrink-0 items-center justify-center rounded-none border border-border bg-muted text-foreground transition-colors",
                        isOn && "border-primary/30 bg-primary/10 text-primary",
                      )}
                    >
                      <Icon className="size-5" />
                    </span>
                    <div className="space-y-0.5">
                      <CardTitle className="text-base leading-none">
                        {integration.name}
                      </CardTitle>
                      <CardDescription className="text-xs">
                        {integration.category}
                      </CardDescription>
                    </div>
                  </div>
                  <Switch
                    checked={isOn}
                    onCheckedChange={() => toggle(integration.id)}
                    aria-label={`Toggle ${integration.name}`}
                  />
                </CardHeader>

                <CardContent className="flex-1 py-4">
                  <p className="text-sm text-muted-foreground">
                    {integration.description}
                  </p>
                </CardContent>

                <CardFooter className="items-center justify-between">
                  {isOn ? (
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/10">
                      <RiCheckLine
                        data-icon="inline-start"
                        className="size-3.5"
                      />
                      Connected
                    </Badge>
                  ) : (
                    <Badge variant="outline">Not connected</Badge>
                  )}
                  <Button
                    variant={isOn ? "ghost" : "default"}
                    size="sm"
                    onClick={() => toggle(integration.id)}
                    className={cn(isOn && "text-muted-foreground")}
                  >
                    {isOn ? "Disconnect" : "Connect"}
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
