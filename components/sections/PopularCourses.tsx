import { Suspense } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { CourseExplorer, SearchableCourseExplorer } from "@/components/sections/CourseExplorer";

export function PopularCourses() {
  return (
    <section id="courses" className="scroll-mt-6 pt-[72px] pb-[72px]">
      <Container>
        <SectionHeading
          title={
            <>
              Discover Your Passion, <br className="hidden sm:block" />
              Build Your Skills
            </>
          }
          description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
        />
        {/* The unfiltered grid is prerendered; the URL query is applied once the client hydrates. */}
        <Suspense fallback={<CourseExplorer />}>
          <SearchableCourseExplorer />
        </Suspense>
      </Container>
    </section>
  );
}
