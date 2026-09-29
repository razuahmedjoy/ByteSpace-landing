# ByteSpace — Landing Page

A pixel-faithful build of the **ByteSpace New** Figma design: the full landing page plus the bonus **Login** and **Sign up** pages.

- **Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4
- **Fonts:** Poppins (`next/font/google`), Satoshi and Clash Display (self-hosted with `next/font/local`)
- **Rendering:** every route is statically prerendered

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Routes

| Route     | Description                                        |
| --------- | -------------------------------------------------- |
| `/`       | Landing page                                       |
| `/login`  | Sign in (email + password, social buttons)         |
| `/signup` | Create an account (name, email, password)          |

## Project structure

```
app/
  layout.tsx            fonts + metadata
  page.tsx              landing page, composed from sections
  (auth)/login          /login
  (auth)/signup         /signup
  globals.css           design tokens (colours, fonts, shadows) from Figma
components/
  ui/                   primitives: Button, Container, SectionHeading, Logo, AvatarGroup, Ornament, icons
  cards/                CourseCard, CategoryCard, TestimonialCard, floating stat cards
  layout/               Navbar (responsive menu), Footer, NewsletterForm
  sections/             Hero, Partners, PopularCourses, LearningPaths, Growth, CreatorCta, Testimonials
  auth/                 AuthLayout, AuthShowcase, AuthForm, TextField
lib/
  data.ts               all page content (courses, categories, testimonials, links)
  validation.ts         auth form validation
public/                 optimised images and SVGs exported from Figma
```

## Implementation notes

- **Design tokens.** The colours, type scale, letter spacing and shadows come straight from the Figma styles. They're defined once in `@theme` (`app/globals.css`), so components use semantic classes like `bg-primary`, `text-ink` and `font-display`.
- **Data-driven sections.** The markup doesn't hard-code content. Cards and lists are rendered from `lib/data.ts`.
- **3D ornaments.** In Figma these are grey renders with a colour blend on top. I baked each colour into a small WebP, which keeps the rendering identical in every browser and the page light (the whole `public/` folder is about 700 KB).
- **Layered compositions.** The hero photo with its floating cards, and the growth-section visuals, keep the design's exact geometry on a fixed artboard. On small screens that artboard is scaled down with CSS `zoom`, so the composition never breaks.
- **Interactivity:**
  - The hero search filters the course grid (`/?q=figma`).
  - The topic chips filter courses by topic.
  - The navbar collapses into a menu on mobile.
  - The newsletter form and the login/signup forms validate client-side. The auth submit simulates a request, since there's no backend in scope.
- **Accessibility.** The page uses semantic landmarks. Form fields have labels and error messages wired up with `aria-describedby`. Toggle chips use `aria-pressed`, decorative art is `aria-hidden`, and focus states are visible.

### Deliberate deviations from the design

- The footer newsletter button reads **"Subscribe"**. The design says "Search", which looks like a copy slip.
- The footer copyright year updates automatically instead of being fixed at 2023.
