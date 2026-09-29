import type { ComponentType, SVGProps } from "react";
import {
  BusinessIcon,
  DesignIcon,
  DevelopmentIcon,
  LaptopIcon,
  MarketingIcon,
  PhotographyIcon,
} from "@/components/ui/icons";

export type NavLink = { label: string; href: string };

export const mainNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "#courses" },
  { label: "Creators", href: "#creators" },
];

export const authNav: NavLink[] = [
  { label: "Sign In", href: "/login" },
  { label: "Join Us", href: "/signup" },
];

export const partnerLogos = [
  { src: "/partners/logo-1.svg", width: 167, height: 41 },
  { src: "/partners/logo-2.svg", width: 168, height: 41 },
  { src: "/partners/logo-3.svg", width: 170, height: 41 },
  { src: "/partners/logo-4.svg", width: 170, height: 41 },
  { src: "/partners/logo-5.svg", width: 169, height: 42 },
];

export const happyStudentAvatars = Array.from({ length: 7 }, (_, i) => `/images/avatars/student-${i + 1}.webp`);

const learners = Array.from({ length: 4 }, (_, i) => `/images/avatars/learner-${i + 1}.webp`);

/** Topic filters, grouped into the three rows shown in the design. */
export const topicRows: string[][] = [
  ["Featured", "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media", "UI/UX Design", "Creative Marketing"],
  ["Digital Illustration", "Film & Video", "Crafts", "Freelance & Entrepreneurship", "Graphic Design", "Photography"],
  ["Productivity", "Web Development", "Data Science", "Cooking"],
];

export type Course = {
  id: string;
  title: string;
  topic: string;
  author: string;
  image: string;
  lessons: number;
  duration: string;
  comments: number;
  rating: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  price: number;
  learners: string[];
  learnersExtra: string;
};

const courseDefaults = {
  author: "purepearl studio",
  lessons: 17,
  duration: "2 hours 16 mins",
  comments: 59,
  rating: 4.5,
  level: "Beginner",
  price: 25,
  learners,
  learnersExtra: "26+",
} satisfies Partial<Course>;

export const courses: Course[] = [
  { id: "figma-basics", topic: "UI/UX Design", title: "Learn Figma from Basic", image: "/images/courses/figma-basics.webp" },
  { id: "digital-asset", topic: "Graphic Design", title: "Build Digital Asset", image: "/images/courses/digital-asset.webp" },
  { id: "big-data", topic: "Data Science", title: "the Power of Big Data", image: "/images/courses/big-data.webp" },
  { id: "productivity", topic: "Productivity", title: "Balancing Productivity and Self-Care", image: "/images/courses/productivity.webp" },
  { id: "money", topic: "Freelance & Entrepreneurship", title: "Mastering Money Management", image: "/images/courses/money-management.webp" },
  { id: "startup", topic: "Freelance & Entrepreneurship", title: "From Idea to Startup Success", image: "/images/courses/startup.webp" },
].map((course) => ({ ...courseDefaults, ...course }));

export type Category = {
  name: string;
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export const categories: Category[] = [
  { name: "Design", href: "#courses", icon: DesignIcon },
  { name: "Development", href: "#courses", icon: DevelopmentIcon },
  { name: "IT & Software", href: "#courses", icon: LaptopIcon },
  { name: "Business", href: "#courses", icon: BusinessIcon },
  { name: "Marketing", href: "#courses", icon: MarketingIcon },
  { name: "Photography", href: "#courses", icon: PhotographyIcon },
];

export const platformStats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

export const creatorPerks = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export type Testimonial = { name: string; role: string; avatar: string; quote: string };

export const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/images/avatars/sarah.webp",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/images/avatars/james.webp",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/images/avatars/alex.webp",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

export const footerLinks: { title: string; links: NavLink[] }[] = [
  {
    title: "Browse",
    links: ["Featured Courses", "Featured Categories", "Business", "IT", "Design"].map((label) => ({
      label,
      href: "#courses",
    })),
  },
  {
    title: "Categories",
    links: ["Development", "Marketing", "Photography", "Finance", "Sport"].map((label) => ({
      label,
      href: "#courses",
    })),
  },
  {
    title: "Platform",
    links: [
      { label: "Become a Creator", href: "/signup" },
      { label: "Affiliate Program", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Help", href: "#" },
      { label: "About", href: "#" },
    ],
  },
];

export const legalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookies Settings", href: "#" },
];
