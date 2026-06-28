"use client";

import {
  RiHome5Line,
  RiDashboardLine,
  RiBarChartBoxLine,
  RiFolderLine,
  RiCalendarLine,
  RiTeamLine,
  RiSettings3Line,
  RiLifebuoyLine,
} from "@remixicon/react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

type NavItem = {
  label: string;
  icon: typeof RiHome5Line;
  active?: boolean;
  badge?: string;
};

const navGroups: { heading: string; items: NavItem[] }[] = [
  {
    heading: "Overview",
    items: [
      { label: "Home", icon: RiHome5Line },
      { label: "Dashboard", icon: RiDashboardLine, active: true },
      { label: "Analytics", icon: RiBarChartBoxLine },
    ],
  },
  {
    heading: "Workspace",
    items: [
      { label: "Projects", icon: RiFolderLine, badge: "6" },
      { label: "Calendar", icon: RiCalendarLine },
      { label: "Team", icon: RiTeamLine, badge: "3" },
    ],
  },
  {
    heading: "System",
    items: [
      { label: "Settings", icon: RiSettings3Line },
      { label: "Support", icon: RiLifebuoyLine },
    ],
  },
];

export default function SidebarBlock3() {
  return (
    <SidebarProvider className="min-h-svh text-foreground">
      <Sidebar collapsible="icon">
        <SidebarHeader className="h-16 justify-center border-b border-sidebar-border">
          <div className="flex items-center gap-2.5 px-1 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-0">
            <div
              className="grid size-9 shrink-0 grid-cols-2 gap-0.5 bg-primary/10 p-2"
              aria-hidden="true"
            >
              <div className="bg-primary" />
              <div className="bg-primary" />
              <div className="bg-primary" />
              <div className="bg-primary/40" />
            </div>
            <div className="min-w-0 flex-1 group-data-[collapsible=icon]:hidden">
              <p className="truncate text-sm font-bold tracking-tight">Acme</p>
              <p className="truncate text-xs text-muted-foreground">
                Workspace
              </p>
            </div>
          </div>
        </SidebarHeader>

        <SidebarContent className="gap-2 py-2">
          {navGroups.map((group) => (
            <SidebarGroup key={group.heading}>
              <SidebarGroupLabel className="text-[10px] font-semibold tracking-widest uppercase">
                {group.heading}
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {group.items.map((item) => (
                    <SidebarMenuItem key={item.label}>
                      <SidebarMenuButton
                        size="lg"
                        isActive={item.active}
                        tooltip={
                          item.badge
                            ? `${item.label} (${item.badge})`
                            : item.label
                        }
                        render={<a href="#" />}
                        aria-current={item.active ? "page" : undefined}
                        className="group-data-[collapsible=icon]:justify-center"
                      >
                        <item.icon aria-hidden="true" />
                        <span className="group-data-[collapsible=icon]:hidden">
                          {item.label}
                        </span>
                      </SidebarMenuButton>
                      {item.badge && (
                        <SidebarMenuBadge className="top-1/2 -translate-y-1/2 tabular-nums">
                          {item.badge}
                        </SidebarMenuBadge>
                      )}
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarContent>

        <SidebarFooter className="border-t border-sidebar-border">
          <div className="flex items-center gap-3 p-1 group-data-[collapsible=icon]:justify-center">
            <Avatar className="size-9 shrink-0">
              <AvatarImage
                src="https://i.pravatar.cc/150?img=47"
                alt="Ada Lovelace"
                className="grayscale"
              />
              <AvatarFallback>AL</AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1 group-data-[collapsible=icon]:hidden">
              <p className="truncate text-sm font-semibold">Ada Lovelace</p>
              <p className="truncate text-xs text-muted-foreground">
                ada@acme.com
              </p>
            </div>
          </div>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset className="bg-muted/30">
        <header className="flex h-16 items-center gap-3 border-b border-border px-4 sm:px-6">
          <SidebarTrigger className="-ml-1" />
          <div className="h-7 w-40 bg-muted" aria-hidden="true" />
          <div className="ml-auto h-8 w-24 bg-muted/70" aria-hidden="true" />
        </header>

        <div className="flex min-w-0 flex-1 flex-col p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="flex flex-col gap-3 border border-border bg-card/40 p-5"
                aria-hidden="true"
              >
                <div className="h-4 w-1/2 bg-muted" />
                <div className="h-8 w-2/3 bg-muted/80" />
                <div className="h-3 w-full bg-muted/50" />
                <div className="h-3 w-4/5 bg-muted/50" />
              </div>
            ))}
          </div>
          <div
            className="mt-4 flex-1 border border-border bg-card/40"
            aria-hidden="true"
          />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
