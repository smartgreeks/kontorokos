ROLE: You are a Senior Frontend Prototyper. Build a polished, animated website prototype with **Next.js 15 (App Router) + TypeScript + Tailwind + shadcn/ui + Framer Motion**. Deliver a runnable project with beautiful UI, design tokens, micro-interactions, scroll/hero animations, strong SEO, and LocalBusiness schema. Use the JSON brief below as the single source of truth.

STACK (non-negotiable)
- Next.js 15 (App Router), TypeScript
- Tailwind CSS (with CSS variables design tokens)
- shadcn/ui (Radix-based, accessible components) + lucide-react icons
- Framer Motion for animations
- next-sitemap OR simple sitemap.xml + robots.txt
- Google Fonts loader (Playfair Display for headings, Lato for body)

BUSINESS JSON (create as src/data/business.json and import it across pages/components)
[BEGIN_JSON]
{
  "brandName": "Κοντορόκος",
  "tagline": "Αυθεντική ελληνική κουζίνα στη Σαλαμίνα",
  "sectors": ["Εστίαση", "Ελληνική κουζίνα"],
  "primaryLocation": {
    "city": "Σαλαμίνα",
    "areas": ["Κέντρο"],
    "address": "Οδός Αιγαίου 1, Σαλαμίνα 189 00",
    "geo": { "lat": 37.9645, "lng": 23.5168 }
  },
  "contact": {
    "phone": "+30 21 0466 1234",
    "email": "info@kontorokos.gr",
    "hours": {
      "mon_fri": "12:00–00:00",
      "sat": "12:00–01:00",
      "sun": "12:00–00:00"
    }
  },
  "services": [
    { "name": "Μεζέδες", "desc": "Παραδοσιακοί μεζέδες με φρέσκα υλικά.", "priceFrom": "€8" },
    { "name": "Ψητά", "desc": "Χειροποίητα ψητά από την παραδοσιακή ελληνική κουζίνα.", "priceFrom": "€10" }
  ],
  "social": { 
    "googleBusinessUrl": "https://maps.google.com/?cid=1234567890123456789", 
    "facebook": "https://www.facebook.com/kontorokos.salamina", 
    "instagram": "https://www.instagram.com/kontorokos/" 
  },
  "seo": {
    "targetKeywordsEL": ["εστιατόριο σαλαμίνα", "ελληνική κουζίνα κοντορόκος"],
    "targetKeywordsEN": ["greek restaurant salamina", "kontorokos greek food"]
  },
  "brand": {
    "primary": "#D2691E",
    "secondary": "#8B4513",
    "accent": "#F4A460",
    "dark": "#3E2723",
    "light": "#FFF8DC",
    "fontHeadings": "Inter",
    "fontBody": "Inter"
  },
  "bilingual": true,
  "imagesPolicy": "auto-or-placeholder",
  "notes": "CTA για κράτηση τραπεζιού, emphasis σε φωτογραφίες φαγητού και reviews."
}
[END_JSON]

REQUIREMENTS
A) Pages/Routes
- "/" (Hero, Services, About teaser, Testimonials teaser, FAQ, Map, Contact strip, prominent CTAs)
- "/about", "/services", "/gallery", "/contact"
- If bilingual=true: implement simple EL/EN using dictionaries (no heavy i18n lib), default EL
- Layout: shared `SiteHeader` (sticky) and `SiteFooter`

B) Components (use shadcn/ui where it helps)
- SiteHeader (Navbar with underline-on-hover, mobile Sheet/Drawer)
- Hero (full-bleed image + gradient overlay; heading/subheading **fade+slide in** with Framer Motion; primary/ghost CTA buttons)
- ServicesGrid (CSS Grid cards; **hover lift + shadow + slight scale**; priceFrom; icons via lucide)
- AboutSection (2-col image/text; image masked/rounded-xl; **scroll reveal**)
- Testimonials (3 items placeholders; **staggered fade/scale** on in-view)
- FAQ (Accordion from shadcn/ui with smooth expand)
- ContactPanel (phone/email/hours; CTA buttons: Treatwell link & tel:)
- MapEmbed (Google Maps iframe based on geo)
- LanguageSwitch (simple toggle EL/EN)
- SectionWrapper (utility that wires IntersectionObserver + Framer Motion variants)

C) Design System (Tailwind + CSS variables)
- Define tokens in `globals.css` or a tokens layer: colors (primary, secondary, accent, bg, text, muted), spacing scale, radius, shadow, motion (easings/durations)
- Typography: Playfair Display for headings, Lato for body (Next.js font loader), fluid sizes via `clamp()`
- Container: max-w-7xl, responsive padding; grid helpers via Tailwind

D) Animations & Micro-interactions
- Respect `prefers-reduced-motion`
- Buttons: transition on transform/background/shadow; hover scale(1.03)
- Cards: hover translate-y-1 and shadow-md→lg
- Section reveals: IntersectionObserver adds class or use Framer Motion `whileInView` with `viewport={{ once: true }}`
- Hero: stagger text intro; subtle parallax on image (optional)

E) SEO & Schema
- Titles/meta per page using brand/tagline & location; OG/Twitter tags
- `/robots.txt` and `/sitemap.xml` (via next-sitemap or static)
- JSON-LD: LocalBusiness (+ Service entries for services[])

F) Assets & Images
- Use responsive `<Image>` (next/image) with `/public` placeholders; descriptive alt
- If imagesPolicy is auto-or-placeholder, seed with tasteful royalty-free spa images

OUTPUT (return full contents)
1) File tree
2) `package.json`, `tailwind.config.ts`, `postcss.config.js`, `next.config.js`
3) `app/layout.tsx`, `app/page.tsx`, `app/(el)/page.tsx` and `app/(en)/page.tsx` (or simple param routes) + metadata files
4) `src/data/business.json` (from [BEGIN_JSON])
5) Components listed above in `/components` (and `/components/ui` for shadcn)
6) `styles/globals.css` with tokens, base styles, and Tailwind layers
7) SEO files: `robots.txt`, `sitemap.config.ts` (if using next-sitemap) or `public/sitemap.xml`
8) JSON-LD snippets inline or helper util
9) `README.md` with setup, dev, build, deploy (Dokploy/Hetzner), and where to replace placeholders

DEV NOTES (include in README)
- Install commands (exact): tailwind, shadcn/ui init, framer-motion, lucide-react, next-sitemap
- Scripts: dev/build/start/lint
- How to add new services/testimonials/FAQ via `business.json`
- How to switch EL/EN copy via dictionaries
- Lighthouse target ≥ 95 on Perf/SEO/Best/Access

GUARDRAILS
- Keep imports tidy; no unused deps
- All links real; images with `alt`
- Accessible Nav/Accordion; focus-visible states
- Bundle size sensible; avoid heavy extras beyond the listed libs

NOW GENERATE the full project accordingly, with polished visuals and animations matching a premium spa brand.