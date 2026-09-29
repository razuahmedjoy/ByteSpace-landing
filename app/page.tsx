import { Footer } from "@/components/layout/Footer";
import { CreatorCta } from "@/components/sections/CreatorCta";
import { Growth } from "@/components/sections/Growth";
import { Hero } from "@/components/sections/Hero";
import { LearningPaths } from "@/components/sections/LearningPaths";
import { Partners } from "@/components/sections/Partners";
import { PopularCourses } from "@/components/sections/PopularCourses";
import { Testimonials } from "@/components/sections/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <main>
        <Partners />
        <PopularCourses />
        <LearningPaths />
        <Growth />
        <CreatorCta />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
