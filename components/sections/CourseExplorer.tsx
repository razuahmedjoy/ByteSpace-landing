"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { CourseCard } from "@/components/cards/CourseCard";
import { courses, topicRows } from "@/lib/data";
import { cn } from "@/lib/cn";

const FEATURED = topicRows[0][0];

/** Reads the hero search query (`?q=`) from the URL. */
export function SearchableCourseExplorer() {
  const query = useSearchParams().get("q")?.trim() ?? "";
  return <CourseExplorer query={query} />;
}

export function CourseExplorer({ query = "" }: { query?: string }) {
  const [topic, setTopic] = useState(FEATURED);

  const visible = useMemo(() => {
    const q = query.toLowerCase();
    return courses.filter(
      (c) =>
        (topic === FEATURED || c.topic === topic) &&
        (!q || c.title.toLowerCase().includes(q) || c.author.toLowerCase().includes(q)),
    );
  }, [query, topic]);

  return (
    <>
      <div
        role="group"
        aria-label="Filter by topic"
        className="mt-10 flex flex-wrap justify-center gap-x-4 gap-y-4 lg:flex-col lg:items-center lg:gap-y-[21px]"
      >
        {topicRows.map((row, i) => (
          <div key={i} className="contents lg:flex lg:gap-4">
            {row.map((label) => (
              <button
                key={label}
                type="button"
                aria-pressed={topic === label}
                onClick={() => setTopic(label)}
                className={cn(
                  "rounded-3xl px-4 py-3 text-base leading-[1.2] font-medium transition focus-visible:outline-2 focus-visible:outline-primary",
                  topic === label ? "bg-lime text-ink" : "bg-surface text-body hover:bg-line-soft",
                )}
              >
                {label}
              </button>
            ))}
            {i === topicRows.length - 1 && (
              <Link href="#categories" className="self-center text-base leading-[1.2] font-medium text-primary hover:underline">
                + More
              </Link>
            )}
          </div>
        ))}
      </div>

      {query && (
        <p className="mt-10 text-center text-muted" aria-live="polite">
          Showing results for <span className="font-medium text-ink">&ldquo;{query}&rdquo;</span> ·{" "}
          <Link href="/#courses" className="text-primary hover:underline">
            Clear
          </Link>
        </p>
      )}

      {visible.length > 0 ? (
        <ul className="mt-[77px] grid justify-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((course) => (
            <li key={course.id} className="w-full max-w-[373px]">
              <CourseCard course={course} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-[77px] rounded-3xl bg-surface px-6 py-16 text-center text-lg text-body">
          No courses found{topic !== FEATURED && <> in <span className="font-medium text-ink">{topic}</span></>} yet
          — check back soon.
        </p>
      )}
    </>
  );
}
