"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";

export function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "done">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // No backend yet — acknowledge the signup client-side.
    e.currentTarget.reset();
    setStatus("done");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:gap-6">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        placeholder="Enter your email"
        onChange={() => setStatus("idle")}
        className="h-[52px] w-full rounded-full border border-line bg-white px-6 text-base leading-[1.6] text-ink placeholder:text-ink focus:border-primary focus:outline-none sm:w-[376px]"
      />
      <Button type="submit" aria-live="polite">
        {status === "done" ? "Subscribed!" : "Subscribe"}
      </Button>
    </form>
  );
}
