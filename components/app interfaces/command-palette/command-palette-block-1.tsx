"use client";

import * as React from "react";
import {
  RiBarChartLine,
  RiFileTextLine,
  RiLayoutGridLine,
  RiSearchLine,
  RiSettings3Line,
  RiTeamLine,
  RiTerminalBoxLine,
  RiUserLine,
} from "@remixicon/react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Kbd, KbdGroup } from "@/components/ui/kbd";

const COMMAND_GROUP_CLASS =
  "p-1.5 **:[[cmdk-group-heading]]:px-3 **:[[cmdk-group-heading]]:font-medium **:[[cmdk-group-heading]]:tracking-wide";
const COMMAND_ITEM_CLASS = "gap-2.5 px-3 py-2.5 text-sm";

const navigationCommands = [
  { icon: RiLayoutGridLine, label: "Go to Dashboard", shortcut: ["G", "D"] },
  { icon: RiFileTextLine, label: "Open Projects", shortcut: ["G", "P"] },
  { icon: RiBarChartLine, label: "View Analytics", shortcut: ["G", "A"] },
  { icon: RiTeamLine, label: "Browse Members", shortcut: ["G", "M"] },
];

const actionCommands = [
  { icon: RiUserLine, label: "Edit Profile", shortcut: ["⌘", "E"] },
  { icon: RiSettings3Line, label: "Open Settings", shortcut: ["⌘", ","] },
  { icon: RiTerminalBoxLine, label: "Open Terminal", shortcut: ["⌘", "`"] },
];

export default function CommandPaletteBlock1() {
  const [open, setOpen] = React.useState(true);
  const [ranLabel, setRanLabel] = React.useState<string | null>(null);

  function run(label: string) {
    setRanLabel(label);
    setOpen(false);
  }

  return (
    <section className="flex min-h-svh w-full flex-col items-center justify-center gap-3 bg-background px-6 py-12 text-foreground">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger
          render={
            <Button
              variant="outline"
              className="w-full max-w-md justify-start gap-2 text-muted-foreground"
            />
          }
        >
          <RiSearchLine className="size-4 shrink-0" aria-hidden="true" />
          <span className="flex-1 text-left">Search…</span>
          <KbdGroup>
            <Kbd>⌘</Kbd>
            <Kbd>K</Kbd>
          </KbdGroup>
        </DialogTrigger>

        <DialogContent className="overflow-hidden p-0" showCloseButton={false}>
          <DialogTitle className="sr-only">Command palette</DialogTitle>
          <DialogDescription className="sr-only">
            Search for a command to run.
          </DialogDescription>
          <Command>
            <CommandInput placeholder="Search commands…" className="text-sm" />
            <CommandList>
              <CommandEmpty className="text-sm">
                No commands found.
              </CommandEmpty>
              <CommandGroup
                heading="Navigation"
                className={COMMAND_GROUP_CLASS}
              >
                {navigationCommands.map((cmd) => (
                  <CommandItem
                    key={cmd.label}
                    value={cmd.label}
                    onSelect={() => run(cmd.label)}
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
              <CommandSeparator />
              <CommandGroup heading="Actions" className={COMMAND_GROUP_CLASS}>
                {actionCommands.map((cmd) => (
                  <CommandItem
                    key={cmd.label}
                    value={cmd.label}
                    onSelect={() => run(cmd.label)}
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
            </CommandList>
          </Command>
        </DialogContent>
      </Dialog>
      {ranLabel ? (
        <p className="text-xs text-muted-foreground">
          Last action:{" "}
          <span className="font-medium text-foreground">{ranLabel}</span>
        </p>
      ) : null}
    </section>
  );
}
