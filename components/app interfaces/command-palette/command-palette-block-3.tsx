"use client";

import { useEffect, useState } from "react";
import {
  RiAddLine,
  RiBarChartLine,
  RiCornerDownLeftLine,
  RiFileTextLine,
  RiLayoutGridLine,
  RiMoonLine,
  RiSearchLine,
  RiSettings3Line,
  RiTeamLine,
  RiTerminalBoxLine,
  RiUserLine,
} from "@remixicon/react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/components/ui/command";
import { Kbd, KbdGroup } from "@/components/ui/kbd";

type PaletteCommand = {
  id: string;
  label: string;
  group: string;
  icon: typeof RiSearchLine;
  shortcut: string[];
};

const commands: PaletteCommand[] = [
  {
    id: "dashboard",
    label: "Go to Dashboard",
    group: "Navigation",
    icon: RiLayoutGridLine,
    shortcut: ["G", "D"],
  },
  {
    id: "projects",
    label: "Open Projects",
    group: "Navigation",
    icon: RiFileTextLine,
    shortcut: ["G", "P"],
  },
  {
    id: "analytics",
    label: "View Analytics",
    group: "Navigation",
    icon: RiBarChartLine,
    shortcut: ["G", "A"],
  },
  {
    id: "members",
    label: "Browse Members",
    group: "Navigation",
    icon: RiTeamLine,
    shortcut: ["G", "M"],
  },
  {
    id: "new-project",
    label: "Create New Project",
    group: "Actions",
    icon: RiAddLine,
    shortcut: ["⌘", "N"],
  },
  {
    id: "profile",
    label: "Edit Profile",
    group: "Actions",
    icon: RiUserLine,
    shortcut: ["⌘", "E"],
  },
  {
    id: "settings",
    label: "Open Settings",
    group: "Actions",
    icon: RiSettings3Line,
    shortcut: ["⌘", ","],
  },
  {
    id: "terminal",
    label: "Open Terminal",
    group: "Actions",
    icon: RiTerminalBoxLine,
    shortcut: ["⌘", "`"],
  },
  {
    id: "theme",
    label: "Toggle Dark Mode",
    group: "Preferences",
    icon: RiMoonLine,
    shortcut: ["⌘", "K", "T"],
  },
];

const groupOrder = ["Navigation", "Actions", "Preferences"];

const COMMAND_GROUP_CLASS =
  "p-1.5 **:[[cmdk-group-heading]]:px-3 **:[[cmdk-group-heading]]:font-medium **:[[cmdk-group-heading]]:tracking-wide";
const COMMAND_ITEM_CLASS = "gap-2.5 px-3 py-2.5 text-sm";

export default function CommandPaletteBlock3() {
  const [open, setOpen] = useState(false);
  const [ranLabel, setRanLabel] = useState<string | null>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((prev) => !prev);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  function run(cmd: PaletteCommand) {
    setRanLabel(cmd.label);
    setOpen(false);
  }

  return (
    <section className="flex min-h-svh w-full flex-col items-center justify-center gap-6 bg-muted/30 px-6 py-16 text-foreground">
      <div className="flex w-full max-w-md flex-col items-center gap-4 text-center">
        <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
          Acme Console
        </span>
        <h2 className="text-2xl font-semibold tracking-tight">
          Jump to anything
        </h2>
        <p className="text-sm text-muted-foreground">
          Search projects, run actions, and navigate without leaving the
          keyboard.
        </p>
        <Button
          type="button"
          variant="outline"
          onClick={() => setOpen(true)}
          className="w-full justify-between font-normal text-muted-foreground"
        >
          <span className="flex items-center gap-2">
            <RiSearchLine data-icon="inline-start" className="size-4" />
            Search commands…
          </span>
          <KbdGroup>
            <Kbd>⌘</Kbd>
            <Kbd>K</Kbd>
          </KbdGroup>
        </Button>
        {ranLabel ? (
          <p className="text-xs text-muted-foreground">
            Last action:{" "}
            <span className="font-medium text-foreground">{ranLabel}</span>
          </p>
        ) : null}
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput
            placeholder="Type a command or search…"
            className="text-sm"
          />
          <CommandList>
            <CommandEmpty className="text-sm">No results found.</CommandEmpty>
            {groupOrder.map((group) => (
              <CommandGroup
                key={group}
                heading={group}
                className={COMMAND_GROUP_CLASS}
              >
                {commands
                  .filter((cmd) => cmd.group === group)
                  .map((cmd) => (
                    <CommandItem
                      key={cmd.id}
                      value={cmd.label}
                      onSelect={() => run(cmd)}
                      className={COMMAND_ITEM_CLASS}
                    >
                      <cmd.icon aria-hidden="true" />
                      <span className="flex-1 truncate">{cmd.label}</span>
                      <CommandShortcut>
                        <KbdGroup>
                          {cmd.shortcut.map((key) => (
                            <Kbd key={key}>{key}</Kbd>
                          ))}
                        </KbdGroup>
                      </CommandShortcut>
                    </CommandItem>
                  ))}
              </CommandGroup>
            ))}
          </CommandList>

          <div className="flex items-center justify-between border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5">
                <KbdGroup>
                  <Kbd>↑</Kbd>
                  <Kbd>↓</Kbd>
                </KbdGroup>
                Navigate
              </span>
              <span className="flex items-center gap-1.5">
                <Kbd>
                  <RiCornerDownLeftLine className="size-3" />
                </Kbd>
                Select
              </span>
            </div>
            <span className="hidden items-center gap-1.5 sm:flex">
              <span className="size-2 rounded-full bg-primary" />
              Acme
            </span>
          </div>
        </Command>
      </CommandDialog>
    </section>
  );
}
