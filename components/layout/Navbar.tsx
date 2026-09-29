"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { BagIcon, CloseIcon, MenuIcon } from "@/components/ui/icons";
import { authNav, mainNav } from "@/lib/data";
import { cn } from "@/lib/cn";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const linkClass = "text-base leading-[1.6] text-surface transition hover:text-lime";

  return (
    <header className="relative z-30">
      <nav
        aria-label="Main"
        className="mx-auto flex h-[88px] max-w-[1440px] items-center justify-between px-5 lg:h-[120px] lg:pr-[120px] lg:pl-[122px]"
      >
        <Logo />

        <ul className="absolute left-1/2 hidden -translate-x-1/2 gap-6 md:flex">
          {mainNav.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                aria-current={href === pathname ? "page" : undefined}
                className={cn(linkClass, "aria-[current=page]:font-medium")}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-6">
          <ul className="hidden gap-6 md:flex">
            {authNav.map(({ label, href }) => (
              <li key={label}>
                <Link href={href} className={linkClass}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="#courses" aria-label="Cart" className="text-surface transition hover:text-lime">
            <BagIcon />
          </Link>
          <button
            type="button"
            className="text-surface md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="absolute inset-x-5 top-[80px] rounded-2xl bg-white p-5 shadow-xl md:hidden"
      >
        <ul className="flex flex-col gap-1">
          {[...mainNav, ...authNav].map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-base font-medium text-ink hover:bg-surface"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
