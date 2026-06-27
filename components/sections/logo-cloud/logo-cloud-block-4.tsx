"use client";

import {
  RiDiscordFill,
  RiFigmaFill,
  RiGithubFill,
  RiGoogleFill,
  RiNotionFill,
  RiOpenaiFill,
  RiSlackFill,
  RiSpotifyFill,
  RiSupabaseFill,
  RiVercelFill,
} from "@remixicon/react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const logos = [
  { name: "Slack", Icon: RiSlackFill },
  { name: "GitHub", Icon: RiGithubFill },
  { name: "Notion", Icon: RiNotionFill },
  { name: "Figma", Icon: RiFigmaFill },
  { name: "Vercel", Icon: RiVercelFill },
  { name: "Supabase", Icon: RiSupabaseFill },
  { name: "Google", Icon: RiGoogleFill },
  { name: "Discord", Icon: RiDiscordFill },
  { name: "Spotify", Icon: RiSpotifyFill },
  { name: "OpenAI", Icon: RiOpenaiFill },
];

export default function LogoCloudBlock4() {
  return (
    <section className="flex min-h-svh w-full items-center justify-center bg-muted/30 px-6 py-16 text-foreground">
      <div className="mx-auto w-full max-w-5xl text-center">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Powering teams everywhere
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
          Acme connects the tools your team already relies on, from day one.
        </p>

        <TooltipProvider delay={150}>
          <ul className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-none border border-border bg-border md:grid-cols-5">
            {logos.map(({ name, Icon }) => (
              <li key={name} className="bg-card">
                <Tooltip>
                  <TooltipTrigger
                    render={
                      <div
                        aria-label={name}
                        className="group flex h-24 w-full items-center justify-center"
                      />
                    }
                  >
                    <Icon
                      aria-hidden="true"
                      className="size-8 text-muted-foreground/60 transition-colors duration-200 group-hover:text-foreground"
                    />
                  </TooltipTrigger>
                  <TooltipContent>{name}</TooltipContent>
                </Tooltip>
              </li>
            ))}
          </ul>
        </TooltipProvider>
      </div>
    </section>
  );
}
