"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent, type ReactNode } from "react";
import { TextField } from "@/components/auth/TextField";
import { Button } from "@/components/ui/Button";
import { FacebookIcon, GoogleIcon } from "@/components/ui/icons";
import { validateAuth, type AuthErrors, type AuthValues } from "@/lib/validation";

type AuthFormProps = {
  mode: "login" | "signup";
};

const copy = {
  login: {
    eyebrow: "Sign In",
    title: "Welcome Back",
    submit: "Sign In",
    footer: { text: "New user?", link: "Create an account", href: "/signup" },
  },
  signup: {
    eyebrow: "Create an Account",
    title: "Welcome to ByteSpace",
    submit: "Continue",
    footer: { text: "Already have an account?", link: "Login", href: "/login" },
  },
} as const;

export function AuthForm({ mode }: AuthFormProps) {
  const router = useRouter();
  const [errors, setErrors] = useState<AuthErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const isSignup = mode === "signup";
  const t = copy[mode];

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const values: AuthValues = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      password: String(data.get("password") ?? ""),
    };

    const nextErrors = validateAuth(values, { requireName: isSignup });
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // There's no auth backend in scope: simulate the request, then go home.
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 600));
    router.push("/");
  }

  // Clear a field's error as soon as the user edits it.
  const clearError = (field: keyof AuthValues) => () => {
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  return (
    <div className="flex flex-1 flex-col justify-between gap-12">
      <div className="flex flex-col gap-10">
        <hgroup>
          <p className="text-lg leading-[1.6] text-primary">{t.eyebrow}</p>
          <h2 className="font-display text-[36px] leading-[1.2] font-semibold tracking-heading text-ink sm:text-[44px]">
            {t.title}
          </h2>
        </hgroup>

        <form noValidate onSubmit={handleSubmit} className="flex flex-col items-end gap-6">
          {isSignup && (
            <TextField
              label="Full Name"
              name="name"
              autoComplete="name"
              placeholder="Jamie Davis"
              error={errors.name}
              onChange={clearError("name")}
            />
          )}
          <TextField
            label="Email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="designer@example.com"
            error={errors.email}
            onChange={clearError("email")}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            autoComplete={isSignup ? "new-password" : "current-password"}
            placeholder="********"
            error={errors.password}
            onChange={clearError("password")}
          />
          <Button type="submit" disabled={submitting}>
            {submitting ? "Please wait…" : t.submit}
          </Button>
        </form>
      </div>

      {!isSignup && <SocialLogin />}

      <p className="text-center text-base leading-[1.6] text-gray-400">
        {t.footer.text}{" "}
        <Link href={t.footer.href} className="text-primary hover:underline">
          {t.footer.link}
        </Link>
      </p>
    </div>
  );
}

function SocialLogin() {
  const providers: { label: string; icon: ReactNode }[] = [
    { label: "Continue with Facebook", icon: <FacebookIcon /> },
    { label: "Continue with Google", icon: <GoogleIcon /> },
  ];
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex w-full items-center gap-3 text-lg leading-[1.6] text-gray-400">
        <span className="h-px flex-1 bg-line-soft" />
        or
        <span className="h-px flex-1 bg-line-soft" />
      </div>
      <div className="flex gap-4">
        {providers.map(({ label, icon }) => (
          <button
            key={label}
            type="button"
            aria-label={label}
            className="grid size-[72px] place-items-center rounded-3xl border border-gray-200 text-black transition hover:bg-surface focus-visible:outline-2 focus-visible:outline-primary"
          >
            {icon}
          </button>
        ))}
      </div>
    </div>
  );
}
