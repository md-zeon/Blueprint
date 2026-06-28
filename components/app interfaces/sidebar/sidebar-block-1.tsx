"use client";

import * as React from "react";
import {
  RiHome5Line,
  RiDashboardLine,
  RiBarChartBoxLine,
  RiFolderLine,
  RiTeamLine,
  RiSettings3Line,
  RiNotification3Line,
  RiLogoutBoxRLine,
  RiArrowUpLine,
  RiArrowDownLine,
  RiCheckboxCircleLine,
  RiTimeLine,
  RiMoreLine,
  RiUser3Line,
  RiEyeLine,
} from "@remixicon/react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
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

const mainNav = [
  { label: "Home", icon: RiHome5Line, active: false },
  { label: "Dashboard", icon: RiDashboardLine, active: true },
  { label: "Analytics", icon: RiBarChartBoxLine, active: false },
  { label: "Projects", icon: RiFolderLine, active: false, badge: "4" },
];

const workspaceNav = [
  { label: "Team", icon: RiTeamLine },
  { label: "Settings", icon: RiSettings3Line },
];

const stats = [
  {
    label: "Open Tasks",
    value: "24",
    delta: "+3",
    up: true,
    note: "Vs. Last Week",
  },
  {
    label: "Deployments",
    value: "11",
    delta: "-2",
    up: false,
    note: "Vs. Last Week",
  },
  {
    label: "Team Members",
    value: "8",
    delta: "+1",
    up: true,
    note: "New This Month",
  },
  {
    label: "Uptime",
    value: "99.9%",
    delta: "+0.1%",
    up: true,
    note: "30-Day Average",
  },
];

const recentActivity = [
  {
    user: "Marcus Holt",
    initials: "MH",
    avatar: "https://i.pravatar.cc/150?img=13",
    action: "Merged pull request",
    target: "feat/auth-refresh",
    time: "2 Min Ago",
    done: true,
  },
  {
    user: "Priya Nair",
    initials: "PN",
    avatar: "https://i.pravatar.cc/150?img=45",
    action: "Opened issue",
    target: "Dashboard: chart overflow on mobile",
    time: "14 Min Ago",
    done: false,
  },
  {
    user: "Leon Fischer",
    initials: "LF",
    avatar: "https://i.pravatar.cc/150?img=8",
    action: "Deployed to production",
    target: "v2.4.1",
    time: "1 Hour Ago",
    done: true,
  },
  {
    user: "Suki Tanaka",
    initials: "ST",
    avatar: "https://i.pravatar.cc/150?img=29",
    action: "Created project",
    target: "Rebrand: Q3",
    time: "3 Hours Ago",
    done: false,
  },
];

export default function SidebarBlock1() {
  const [query, setQuery] = React.useState("");
  const normalized = query.trim().toLowerCase();
  const filteredActivity = normalized
    ? recentActivity.filter((item) =>
        [item.user, item.action, item.target].some((field) =>
          field.toLowerCase().includes(normalized),
        ),
      )
    : recentActivity;

  return (
    <SidebarProvider defaultOpen className="min-h-svh">
      <Sidebar collapsible="icon">
        <SidebarHeader>
          <div className="flex h-10 items-center gap-2.5 px-2">
            <div className="grid grid-cols-2 gap-0.5" aria-hidden="true">
              <div className="size-2 bg-primary" />
              <div className="size-2 bg-primary" />
              <div className="size-2 bg-primary" />
              <div className="size-2 bg-primary opacity-40" />
            </div>
            <span className="text-sm font-bold tracking-tight group-data-[collapsible=icon]:hidden">
              Acme Corp
            </span>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Menu</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {mainNav.map((item) => (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton
                      isActive={item.active}
                      tooltip={item.label}
                      render={<a href="#" />}
                    >
                      <item.icon aria-hidden="true" />
                      <span>{item.label}</span>
                    </SidebarMenuButton>
                    {item.badge && (
                      <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>
                    )}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>Workspace</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {workspaceNav.map((item) => (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton
                      tooltip={item.label}
                      render={<a href="#" />}
                    >
                      <item.icon aria-hidden="true" />
                      <span>{item.label}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
          <div className="flex items-center gap-3 p-1">
            <Avatar className="size-8 shrink-0">
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
            <Button
              variant="ghost"
              size="icon"
              className="shrink-0 text-muted-foreground transition-colors duration-150 group-data-[collapsible=icon]:hidden hover:text-foreground"
              aria-label="Sign out"
            >
              <RiLogoutBoxRLine aria-hidden="true" />
            </Button>
          </div>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset>
        <header className="flex h-14 items-center gap-4 border-b border-border px-5">
          <SidebarTrigger className="-ml-1" />
          <div>
            <h1 className="text-sm font-bold tracking-tight">Dashboard</h1>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Input
              type="search"
              placeholder="Search activity…"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="hidden w-48 sm:inline-flex"
              aria-label="Search activity"
            />
            <Button
              variant="outline"
              size="icon"
              className="relative"
              aria-label="Notifications"
            >
              <RiNotification3Line aria-hidden="true" />
              <span
                className="absolute top-1.5 right-1.5 size-1.5 bg-primary"
                aria-hidden="true"
              />
            </Button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-5 sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold tracking-tight">
                Good morning, Ada
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Here&apos;s what&apos;s happening across your projects today.
              </p>
            </div>
            <Button variant="outline" size="sm" className="shrink-0">
              <RiTimeLine className="mr-1.5 size-3.5" aria-hidden="true" />
              Jun 20, 2026
            </Button>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col gap-3 border border-border bg-card p-4 transition-shadow duration-150 hover:shadow-sm"
              >
                <p className="text-xs font-medium text-muted-foreground">
                  {s.label}
                </p>
                <p className="text-2xl font-bold tracking-tight">{s.value}</p>
                <div className="flex items-center gap-1.5">
                  {s.up ? (
                    <RiArrowUpLine
                      className="size-3.5 text-foreground"
                      aria-hidden="true"
                    />
                  ) : (
                    <RiArrowDownLine
                      className="size-3.5 text-muted-foreground"
                      aria-hidden="true"
                    />
                  )}
                  <span
                    className={
                      "text-xs font-semibold " +
                      (s.up ? "text-foreground" : "text-muted-foreground")
                    }
                  >
                    {s.delta}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {s.note}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <div className="flex items-center justify-between gap-4 pb-3">
              <h3 className="text-sm font-semibold tracking-tight">
                Recent Activity
              </h3>
              <Button
                nativeButton={false}
                variant="ghost"
                size="sm"
                className="text-xs text-muted-foreground"
                render={<a href="#" />}
              >
                View All
              </Button>
            </div>

            <div className="divide-y divide-border border border-border bg-card">
              {filteredActivity.length === 0 && (
                <p className="px-4 py-10 text-center text-xs text-muted-foreground">
                  No activity matches “{query}”.
                </p>
              )}
              {filteredActivity.map((item) => (
                <div
                  key={`${item.user}-${item.time}`}
                  className="flex items-center gap-4 px-4 py-3 transition-colors duration-150 hover:bg-muted/50"
                >
                  <Avatar className="size-8 shrink-0">
                    <AvatarImage
                      src={item.avatar}
                      alt={item.user}
                      className="grayscale"
                    />
                    <AvatarFallback className="text-[10px]">
                      {item.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-sm font-semibold">{item.user}</span>
                      <span className="text-sm text-muted-foreground">
                        {item.action}
                      </span>
                    </div>
                    <p className="truncate text-xs text-muted-foreground">
                      {item.target}
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center gap-3">
                    {item.done ? (
                      <RiCheckboxCircleLine
                        className="size-4 text-foreground"
                        aria-label="Completed"
                      />
                    ) : (
                      <RiTimeLine
                        className="size-4 text-muted-foreground"
                        aria-label="In progress"
                      />
                    )}
                    <span className="text-xs text-muted-foreground">
                      {item.time}
                    </span>
                    <DropdownMenu>
                      <DropdownMenuTrigger
                        render={
                          <Button
                            variant="ghost"
                            size="icon"
                            className="size-7 text-muted-foreground"
                            aria-label={`Actions for ${item.user}`}
                          >
                            <RiMoreLine aria-hidden="true" />
                          </Button>
                        }
                      />
                      <DropdownMenuContent align="end" className="w-40">
                        <DropdownMenuItem>
                          <RiEyeLine aria-hidden="true" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <RiUser3Line aria-hidden="true" />
                          View Profile
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Mark as Read</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
