import {
  RiArrowLeftLine,
  RiArrowRightLine,
  RiArrowRightSLine,
} from "@remixicon/react";

import { Separator } from "@/components/ui/separator";

const breadcrumb = ["Docs", "Guides", "Authentication"];

export default function ArticleBlock3() {
  return (
    <section className="flex min-h-svh w-full justify-center bg-background px-6 py-16 text-foreground">
      <article className="w-full max-w-2xl">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
            {breadcrumb.map((crumb, i) => (
              <li key={crumb} className="flex items-center gap-1.5">
                {i > 0 && (
                  <RiArrowRightSLine
                    className="size-3.5 text-muted-foreground/50"
                    aria-hidden="true"
                  />
                )}
                <span
                  className={
                    i === breadcrumb.length - 1
                      ? "font-medium text-foreground"
                      : ""
                  }
                >
                  {crumb}
                </span>
              </li>
            ))}
          </ol>
        </nav>

        <h1 className="text-3xl font-bold tracking-tight">
          Setting up authentication
        </h1>
        <p className="mt-3 text-muted-foreground">
          Connect a provider, protect your routes, and read the current session
          on the server.
        </p>
        <p className="mt-4 text-xs text-muted-foreground tabular-nums">
          Last updated Jun 16, 2026
        </p>

        <Separator className="my-8" />

        <div className="flex flex-col gap-5 text-[15px]/relaxed text-foreground/80">
          <p>
            Acme Auth wraps your app in a session provider and exposes helpers
            for both client and server components. You can be up and running
            with a single provider in under five minutes.
          </p>

          <h2 className="mt-4 text-xl font-semibold tracking-tight text-foreground">
            Install the provider
          </h2>
          <p>
            Add the provider at the root of your application so every route can
            read the session. It is safe to render on the server and streams no
            secrets to the client.
          </p>
          <pre className="overflow-x-auto border border-border bg-muted/50 p-4 font-mono text-xs text-foreground">
            <code>{`import { AuthProvider } from "@acme/auth"

export default function RootLayout({ children }) {
  return <AuthProvider>{children}</AuthProvider>
}`}</code>
          </pre>

          <h2 className="mt-4 text-xl font-semibold tracking-tight text-foreground">
            Protect a route
          </h2>
          <p>
            Call the session helper in any server component. If there is no
            active session it redirects to your sign-in page automatically.
          </p>
        </div>

        <Separator className="my-8" />

        <nav aria-label="Pagination" className="grid gap-3 sm:grid-cols-2">
          <a
            href="#"
            className="group flex flex-col gap-1 border border-border p-4 transition-colors hover:border-muted-foreground/40"
          >
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <RiArrowLeftLine className="size-3.5" aria-hidden="true" />
              Previous
            </span>
            <span className="text-sm font-medium">Installation</span>
          </a>
          <a
            href="#"
            className="group flex flex-col items-end gap-1 border border-border p-4 text-right transition-colors hover:border-muted-foreground/40"
          >
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              Next
              <RiArrowRightLine className="size-3.5" aria-hidden="true" />
            </span>
            <span className="text-sm font-medium">Managing sessions</span>
          </a>
        </nav>
      </article>
    </section>
  );
}
