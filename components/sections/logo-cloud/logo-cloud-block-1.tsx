import {
  RiDiscordFill,
  RiFigmaFill,
  RiGithubFill,
  RiGoogleFill,
  RiNotionFill,
  RiSlackFill,
  RiSupabaseFill,
  RiVercelFill,
} from "@remixicon/react";

const logos = [
  { name: "Slack", Icon: RiSlackFill },
  { name: "GitHub", Icon: RiGithubFill },
  { name: "Notion", Icon: RiNotionFill },
  { name: "Figma", Icon: RiFigmaFill },
  { name: "Vercel", Icon: RiVercelFill },
  { name: "Supabase", Icon: RiSupabaseFill },
  { name: "Google", Icon: RiGoogleFill },
  { name: "Discord", Icon: RiDiscordFill },
];

export default function LogoCloudBlock1() {
  return (
    <section className="flex min-h-svh w-full items-center justify-center bg-background px-6 py-20 text-foreground">
      <div className="mx-auto w-full max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
            Trusted by teams at
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-balance sm:text-3xl">
            Powering the tools your team already loves
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden border border-border bg-border sm:grid-cols-4">
          {logos.map(({ name, Icon }) => (
            <div
              key={name}
              className="flex items-center justify-center gap-2.5 bg-background px-4 py-8 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icon className="size-6 shrink-0" aria-hidden="true" />
              <span className="text-lg font-semibold tracking-tight">
                {name}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Join 4,000+ teams building faster on Acme.
        </p>
      </div>
    </section>
  );
}
