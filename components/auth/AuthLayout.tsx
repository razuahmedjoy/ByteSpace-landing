import Image from "next/image";
import type { ReactNode } from "react";
import { AuthShowcase } from "@/components/auth/AuthShowcase";
import { Logo } from "@/components/ui/Logo";

type AuthLayoutProps = {
  title: string;
  description: string;
  children: ReactNode;
};

/** Blue split-screen shell shared by the login and signup pages. */
export function AuthLayout({ title, description, children }: AuthLayoutProps) {
  return (
    <div className="relative min-h-dvh overflow-hidden bg-primary">
      <Image
        src="/decor/grid.svg"
        alt=""
        width={1442}
        height={1026}
        aria-hidden="true"
        priority
        className="pointer-events-none absolute -top-0.5 left-1/2 max-w-none -translate-x-1/2"
      />

      <div className="relative mx-auto flex max-w-[1440px] flex-col px-5 pb-16 lg:min-h-[1024px] lg:px-[120px] lg:pb-[120px]">
        <header className="flex h-[88px] items-center lg:h-[120px] lg:pl-0.5">
          <Logo markOnly />
        </header>

        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="relative flex flex-col gap-4 text-surface lg:w-[548px] lg:pl-0.5">
            <h1 className="font-display text-xl leading-[1.2] font-semibold tracking-heading">{title}</h1>
            <p className="max-w-[475px] text-lg leading-[1.6]">{description}</p>
            <AuthShowcase className="absolute top-[185px] left-0.5 hidden lg:block" />
          </div>

          <main className="flex w-full flex-col rounded-3xl bg-white px-6 py-10 sm:px-[63px] sm:py-[61px] lg:min-h-[784px] lg:w-[579px]">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
