import Link from "next/link";
import type { Category } from "@/lib/data";

export function CategoryCard({ category }: { category: Category }) {
  const { icon: Icon, name, href } = category;
  return (
    <Link
      href={href}
      className="group flex aspect-square w-full flex-col items-center justify-center gap-3 rounded-3xl border border-line bg-white transition hover:-translate-y-1 hover:border-primary hover:shadow-lg focus-visible:outline-2 focus-visible:outline-primary"
    >
      <span className="grid place-items-center rounded-[40px] bg-lime p-3 text-ink transition group-hover:bg-primary group-hover:text-white">
        <Icon />
      </span>
      <span className="text-lg leading-[1.2] font-medium text-ink sm:text-xl">{name}</span>
    </Link>
  );
}
