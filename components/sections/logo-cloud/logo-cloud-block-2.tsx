import {
  RiAmazonFill,
  RiDiscordFill,
  RiDribbbleFill,
  RiDropboxFill,
  RiFigmaFill,
  RiGithubFill,
  RiGoogleFill,
  RiLinkedinBoxFill,
  RiMicrosoftFill,
  RiNotionFill,
  RiSlackFill,
  RiSpotifyFill,
} from "@remixicon/react";

const logos = [
  { name: "Amazon", Icon: RiAmazonFill },
  { name: "Microsoft", Icon: RiMicrosoftFill },
  { name: "Slack", Icon: RiSlackFill },
  { name: "GitHub", Icon: RiGithubFill },
  { name: "Notion", Icon: RiNotionFill },
  { name: "Figma", Icon: RiFigmaFill },
  { name: "Spotify", Icon: RiSpotifyFill },
  { name: "Dropbox", Icon: RiDropboxFill },
  { name: "LinkedIn", Icon: RiLinkedinBoxFill },
  { name: "Google", Icon: RiGoogleFill },
  { name: "Discord", Icon: RiDiscordFill },
  { name: "Dribbble", Icon: RiDribbbleFill },
];

export default function LogoCloudBlock2() {
  return (
    <section className="flex min-h-svh w-full items-center justify-center bg-background px-6 py-12 text-foreground">
      <div className="w-full max-w-4xl">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold tracking-tight">
            Built to integrate with your stack
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Acme connects with the tools your team already relies on, no extra
            setup required.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-px bg-border sm:grid-cols-3 md:grid-cols-4">
          {logos.map(({ name, Icon }) => (
            <div
              key={name}
              className="flex flex-col items-center justify-center gap-3 bg-card px-4 py-8"
            >
              <Icon
                className="size-8 text-muted-foreground"
                aria-hidden="true"
              />
              <span className="text-xs font-medium text-muted-foreground">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
