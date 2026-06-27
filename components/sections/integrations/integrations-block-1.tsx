"use client";

import {
  RiArrowRightUpLine,
  RiCheckLine,
  RiDiscordFill,
  RiFigmaFill,
  RiGithubFill,
  RiNotionFill,
  RiSlackFill,
  RiSupabaseFill,
} from "@remixicon/react";
import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldContent, FieldLabel } from "@/components/ui/field";
import { Switch } from "@/components/ui/switch";
import { Toaster } from "@/components/ui/sonner";

const integrations = [
  {
    name: "Slack",
    description: "Send alerts and updates to any channel in real time.",
    Icon: RiSlackFill,
  },
  {
    name: "GitHub",
    description: "Sync issues, pull requests, and deploys automatically.",
    Icon: RiGithubFill,
  },
  {
    name: "Notion",
    description: "Turn docs and databases into a shared source of truth.",
    Icon: RiNotionFill,
  },
  {
    name: "Figma",
    description: "Pull design tokens and assets straight into your build.",
    Icon: RiFigmaFill,
  },
  {
    name: "Supabase",
    description: "Connect your database and auth with a single click.",
    Icon: RiSupabaseFill,
  },
  {
    name: "Discord",
    description: "Keep your community in the loop with instant notifications.",
    Icon: RiDiscordFill,
  },
];

function ConnectCard({
  name,
  description,
  Icon,
}: (typeof integrations)[number]) {
  const [open, setOpen] = useState(false);
  const [enabled, setEnabled] = useState(true);
  const [connected, setConnected] = useState(false);

  function handleConnect() {
    setConnected(true);
    setOpen(false);
    toast.success(`${name} connected`, {
      description: enabled
        ? "Notifications are on. You're all set."
        : "Connected. Notifications are paused.",
    });
  }

  return (
    <Card>
      <CardHeader>
        <span className="flex size-11 items-center justify-center border border-border bg-background">
          <Icon className="size-5" aria-hidden="true" />
        </span>
        <CardTitle className="mt-4 text-base">{name}</CardTitle>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Dialog
          open={open}
          onOpenChange={(next) => {
            setOpen(next);
            if (!next) setEnabled(true);
          }}
        >
          <DialogTrigger
            render={
              <Button variant="link" className="px-0" disabled={connected} />
            }
          >
            {connected ? (
              <>
                Connected
                <RiCheckLine data-icon="inline-end" />
              </>
            ) : (
              <>
                Connect
                <RiArrowRightUpLine data-icon="inline-end" />
              </>
            )}
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <span className="flex size-10 items-center justify-center border border-border bg-background">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <DialogTitle className="mt-3">Connect {name}</DialogTitle>
              <DialogDescription>
                Authorize Acme to {description.charAt(0).toLowerCase()}
                {description.slice(1)} You can disconnect at any time from your
                workspace settings.
              </DialogDescription>
            </DialogHeader>

            <Field
              orientation="horizontal"
              className="border border-border bg-muted/40 p-3"
            >
              <FieldContent>
                <FieldLabel htmlFor={`notify-${name}`}>
                  Enable notifications
                </FieldLabel>
              </FieldContent>
              <Switch
                id={`notify-${name}`}
                checked={enabled}
                onCheckedChange={setEnabled}
              />
            </Field>

            <DialogFooter>
              <DialogClose render={<Button variant="outline" />}>
                Cancel
              </DialogClose>
              <Button onClick={handleConnect}>Connect {name}</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}

export default function IntegrationsBlock1() {
  return (
    <section className="flex min-h-svh w-full items-center justify-center bg-background px-6 py-12 text-foreground">
      <Toaster />
      <div className="w-full max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-muted-foreground">
            Integrations
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Works with your favorite tools
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Connect Acme to the apps your team already uses and keep everything
            in sync without extra glue code.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {integrations.map((integration) => (
            <ConnectCard key={integration.name} {...integration} />
          ))}
        </div>
      </div>
    </section>
  );
}
