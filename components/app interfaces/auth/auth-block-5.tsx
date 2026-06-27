"use client";

import { useState } from "react";
import {
  RiAppleFill,
  RiArrowRightLine,
  RiGithubFill,
  RiGoogleFill,
  RiShieldKeyholeLine,
} from "@remixicon/react";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Toaster } from "@/components/ui/sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const BRAND = "Acme";

const SOCIALS = [
  { id: "google", label: "Google", icon: RiGoogleFill },
  { id: "github", label: "GitHub", icon: RiGithubFill },
  { id: "apple", label: "Apple", icon: RiAppleFill },
];

const signInSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Enter a valid email address"),
  password: z.string().min(1, "Password is required"),
});

const signUpSchema = z
  .object({
    name: z.string().min(1, "Full name is required"),
    email: z
      .string()
      .min(1, "Email is required")
      .email("Enter a valid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[0-9]/, "Include at least one number"),
    confirm: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords do not match",
    path: ["confirm"],
  });

export default function AuthBlock5() {
  const [tab, setTab] = useState("signin");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const isSignUp = tab === "signup";

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    const result = (isSignUp ? signUpSchema : signInSchema).safeParse(data);
    if (!result.success) {
      const next: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0];
        if (typeof key === "string" && !next[key]) {
          next[key] = issue.message;
        }
      }
      setErrors(next);
      return;
    }
    setErrors({});
    toast.promise(new Promise((resolve) => setTimeout(resolve, 1400)), {
      loading: isSignUp ? "Creating your account…" : "Signing you in…",
      success: isSignUp
        ? `Welcome to ${BRAND}! Your account is ready.`
        : `Welcome back to ${BRAND}.`,
      error: isSignUp
        ? "Could not create account. Please try again."
        : "Sign-in failed. Please try again.",
    });
  }

  function clearError(name: string) {
    setErrors((prev) => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
  }

  function handleSocial(label: string) {
    toast.info(`Continuing with ${label}`, {
      description: "Redirecting you to authenticate…",
    });
  }

  return (
    <section className="flex min-h-svh w-full items-center justify-center bg-muted/30 px-6 py-16 text-foreground">
      <Toaster />
      <Card className="w-full max-w-md gap-6">
        <CardHeader className="items-center gap-3 text-center">
          <span className="mx-auto flex size-11 items-center justify-center border border-border bg-muted text-foreground">
            <RiShieldKeyholeLine className="size-5" aria-hidden="true" />
          </span>
          <div className="flex flex-col gap-1">
            <CardTitle className="text-lg font-bold tracking-tight">
              {isSignUp ? `Join ${BRAND}` : `Welcome back to ${BRAND}`}
            </CardTitle>
            <CardDescription>
              {isSignUp
                ? "Create your account in under a minute."
                : "Sign in to pick up where you left off."}
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="flex flex-col gap-6">
          <Tabs
            value={tab}
            onValueChange={(value) => {
              setTab(value as string);
              setErrors({});
            }}
          >
            <TabsList className="grid h-9 w-full grid-cols-2">
              <TabsTrigger value="signin">Sign in</TabsTrigger>
              <TabsTrigger value="signup">Sign up</TabsTrigger>
            </TabsList>

            <TabsContent value="signin" className="pt-5">
              <form
                className="flex flex-col gap-5"
                onSubmit={handleSubmit}
                noValidate
              >
                <Field>
                  <FieldLabel htmlFor="signin-email">Email</FieldLabel>
                  <Input
                    id="signin-email"
                    name="email"
                    type="email"
                    placeholder="jordan@company.com"
                    autoComplete="email"
                    aria-invalid={!!errors.email}
                    onChange={() => clearError("email")}
                  />
                  <FieldError>{errors.email}</FieldError>
                </Field>
                <Field>
                  <div className="flex items-center justify-between">
                    <FieldLabel htmlFor="signin-password">Password</FieldLabel>
                    <Button
                      variant="link"
                      className="h-auto p-0 text-xs"
                      render={<a href="#" />}
                      nativeButton={false}
                    >
                      Forgot password?
                    </Button>
                  </div>
                  <Input
                    id="signin-password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    autoComplete="current-password"
                    aria-invalid={!!errors.password}
                    onChange={() => clearError("password")}
                  />
                  <FieldError>{errors.password}</FieldError>
                </Field>
                <Button type="submit" size="lg" className="w-full">
                  Sign in
                  <RiArrowRightLine data-icon="inline-end" />
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="signup" className="pt-5">
              <form
                className="flex flex-col gap-5"
                onSubmit={handleSubmit}
                noValidate
              >
                <Field>
                  <FieldLabel htmlFor="signup-name">Full name</FieldLabel>
                  <Input
                    id="signup-name"
                    name="name"
                    type="text"
                    placeholder="Jordan Blake"
                    autoComplete="name"
                    aria-invalid={!!errors.name}
                    onChange={() => clearError("name")}
                  />
                  <FieldError>{errors.name}</FieldError>
                </Field>
                <Field>
                  <FieldLabel htmlFor="signup-email">Email</FieldLabel>
                  <Input
                    id="signup-email"
                    name="email"
                    type="email"
                    placeholder="jordan@company.com"
                    autoComplete="email"
                    aria-invalid={!!errors.email}
                    onChange={() => clearError("email")}
                  />
                  <FieldError>{errors.email}</FieldError>
                </Field>
                <Field>
                  <FieldLabel htmlFor="signup-password">Password</FieldLabel>
                  <Input
                    id="signup-password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    autoComplete="new-password"
                    aria-invalid={!!errors.password}
                    onChange={() => clearError("password")}
                  />
                  {errors.password ? (
                    <FieldError>{errors.password}</FieldError>
                  ) : (
                    <FieldDescription>
                      Minimum 8 characters, at least one number.
                    </FieldDescription>
                  )}
                </Field>
                <Field>
                  <FieldLabel htmlFor="signup-confirm">
                    Confirm password
                  </FieldLabel>
                  <Input
                    id="signup-confirm"
                    name="confirm"
                    type="password"
                    placeholder="••••••••"
                    autoComplete="new-password"
                    aria-invalid={!!errors.confirm}
                    onChange={() => clearError("confirm")}
                  />
                  <FieldError>{errors.confirm}</FieldError>
                </Field>
                <Button type="submit" size="lg" className="w-full">
                  Create account
                  <RiArrowRightLine data-icon="inline-end" />
                </Button>
              </form>
            </TabsContent>
          </Tabs>

          <div className="flex items-center gap-3">
            <Separator className="flex-1" />
            <span className="text-xs text-muted-foreground">Or</span>
            <Separator className="flex-1" />
          </div>

          <div className="grid grid-cols-3 gap-3">
            {SOCIALS.map((social) => {
              const Icon = social.icon;
              return (
                <Button
                  key={social.id}
                  variant="outline"
                  type="button"
                  className="w-full"
                  aria-label={`Continue with ${social.label}`}
                  onClick={() => handleSocial(social.label)}
                >
                  <Icon data-icon="inline-start" />
                  <span className="sr-only sm:not-sr-only">{social.label}</span>
                </Button>
              );
            })}
          </div>
        </CardContent>

        <CardFooter className="justify-center text-xs text-muted-foreground">
          {isSignUp ? "Already have an account?" : "New to Acme?"}
          <Button
            variant="link"
            className="px-1 text-xs"
            type="button"
            onClick={() => setTab(isSignUp ? "signin" : "signup")}
          >
            {isSignUp ? "Sign in" : "Create one"}
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
}
