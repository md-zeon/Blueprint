"use client";

import * as React from "react";
import {
  RiArrowRightLine,
  RiBookOpenLine,
  RiFileChartLine,
  RiFileLine,
  RiFolderLine,
  RiHashtag,
  RiSearchLine,
  RiUserSettingsLine,
  RiWindowLine,
} from "@remixicon/react";

import { Badge } from "@/components/ui/badge";
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

const recentItems = [
  { icon: RiFileLine, label: "Q3 Budget Review.xlsx", time: "2 Min Ago" },
  { icon: RiWindowLine, label: "Acme Design System", time: "1 Hour Ago" },
  { icon: RiBookOpenLine, label: "Onboarding Docs", time: "Yesterday" },
];

const results = [
  { icon: RiFolderLine, label: "Marketing Assets", category: "Folder" },
  {
    icon: RiFileChartLine,
    label: "Campaign Performance Report",
    category: "File",
  },
  { icon: RiHashtag, label: "acme-design", category: "Channel" },
  { icon: RiUserSettingsLine, label: "Account Settings", category: "Settings" },
];

export default function CommandPaletteBlock2() {
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
              className="w-full max-w-lg justify-start gap-2 text-muted-foreground"
            />
          }
        >
          <RiSearchLine className="size-4 shrink-0" aria-hidden="true" />
          <span className="flex-1 text-left">Type a command or search…</span>
          <KbdGroup>
            <Kbd>⌘</Kbd>
            <Kbd>K</Kbd>
          </KbdGroup>
        </DialogTrigger>

        <DialogContent
          className="overflow-hidden p-0 sm:max-w-lg"
          showCloseButton={false}
        >
          <DialogTitle className="sr-only">Command palette</DialogTitle>
          <DialogDescription className="sr-only">
            Search recent items and results.
          </DialogDescription>
          <Command>
            <CommandInput
              placeholder="Type a command or search…"
              className="text-sm"
            />
            <CommandList>
              <CommandEmpty className="text-sm">No results found.</CommandEmpty>
              <CommandGroup heading="Recent" className={COMMAND_GROUP_CLASS}>
                {recentItems.map((item) => (
                  <CommandItem
                    key={item.label}
                    value={item.label}
                    onSelect={() => run(item.label)}
                    className={COMMAND_ITEM_CLASS}
                  >
                    <div className="flex size-7 shrink-0 items-center justify-center border border-border bg-muted text-muted-foreground group-data-selected/command-item:border-border group-data-selected/command-item:bg-background">
                      <item.icon className="size-3.5" aria-hidden="true" />
                    </div>
                    <span className="flex-1 truncate">{item.label}</span>
                    <span className="text-[10px] text-muted-foreground group-data-selected/command-item:text-foreground">
                      {item.time}
                    </span>
                    <RiArrowRightLine
                      className="size-3.5 shrink-0 text-muted-foreground opacity-0 transition-opacity group-data-selected/command-item:opacity-100"
                      aria-hidden="true"
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Results" className={COMMAND_GROUP_CLASS}>
                {results.map((item) => (
                  <CommandItem
                    key={item.label}
                    value={item.label}
                    onSelect={() => run(item.label)}
                    className={COMMAND_ITEM_CLASS}
                  >
                    <item.icon aria-hidden="true" />
                    <span className="flex-1 truncate">{item.label}</span>
                    <Badge
                      variant="outline"
                      className="bg-background group-data-selected/command-item:border-border group-data-selected/command-item:bg-background group-data-selected/command-item:text-foreground"
                    >
                      {item.category}
                    </Badge>
                    <CommandShortcut>
                      <Kbd>↵</Kbd>
                    </CommandShortcut>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>

            <div className="flex items-center gap-4 border-t border-border bg-muted/50 px-4 py-2">
              <span className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                <KbdGroup>
                  <Kbd>↑</Kbd>
                  <Kbd>↓</Kbd>
                </KbdGroup>
                to navigate
              </span>
              <span className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                <Kbd>↵</Kbd>
                to open
              </span>
              <span className="ml-auto flex items-center gap-1.5 text-[10px] text-muted-foreground">
                <Kbd>Esc</Kbd>
                to close
              </span>
            </div>
          </Command>
        </DialogContent>
      </Dialog>
      {ranLabel ? (
        <p className="text-xs text-muted-foreground">
          Opened:{" "}
          <span className="font-medium text-foreground">{ranLabel}</span>
        </p>
      ) : null}
    </section>
  );
}
