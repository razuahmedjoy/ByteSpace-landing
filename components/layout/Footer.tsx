import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { NewsletterForm } from "@/components/layout/NewsletterForm";
import { footerLinks, legalLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-line bg-white pt-[71px] pb-12">
      <Container className="flex flex-col gap-16 lg:gap-[130px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-[92px]">
          <div className="flex flex-col gap-[45px] lg:w-[528px]">
            <div className="flex flex-col gap-4">
              <Logo tone="dark" />
              <p className="text-sm leading-[1.6] text-ink">
                Stay Up to date with our latest features and releases by joining our newsletter.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <NewsletterForm />
              <p className="max-w-[504px] text-xs leading-[1.6] text-ink">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:w-[580px] lg:pt-12">
            {footerLinks.map(({ title, links }) => (
              <nav key={title} aria-label={title}>
                <h2 className="sr-only">{title}</h2>
                <ul className="flex flex-col gap-4">
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      <Link href={href} className="text-sm leading-[1.6] text-ink transition hover:text-primary">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-line pt-5 text-xs leading-[1.6] text-ink sm:flex-row sm:justify-between">
          <p>@ {new Date().getFullYear()} ByteSpace. All rights reserved.</p>
          <ul className="flex flex-wrap gap-6">
            {legalLinks.map(({ label, href }) => (
              <li key={label}>
                <Link href={href} className="transition hover:text-primary">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
