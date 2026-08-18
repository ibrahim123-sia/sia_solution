# SIA Technologies — Official Web Application

Production Next.js 15 web application for **SIA Technologies** (`siatech.pk`, `@siatechpk`). Founder-led web and AI development studio based in Karachi, Pakistan.

---

## Core Brand Offer

> **"We build your website first. You pay once it's live."**  
> Complete bespoke website or online store built and tested live before any deposit or advance payment is requested.

---

## Tech Stack

- **Framework:** Next.js 15 (App Router) + TypeScript + React 19
- **Styling:** Tailwind CSS with custom design tokens
- **Motion:** Framer Motion (`framer-motion`) with strict `prefers-reduced-motion` fallbacks
- **Typography:** Geist Variable Font via `next/font`
- **Icons:** Lucide React (`lucide-react`)
- **Deployment:** Vercel Edge Network

---

## Brand System & Design Tokens

Design tokens are defined in `tailwind.config.ts` and `src/app/globals.css`:

```
Background / Paper  #F7F6F3   (warm-neutral)
Surface / Card      #FFFFFF
Text / Charcoal     #241F1B   (charcoal)
Muted Text          #7C736A
Hairline / Border   #E5E3DD
Accent (Petrol)     #16636A
Accent Hover        #0E4A50
Accent Tint         #E9F1F1   (for chips & badges only)
Live / Success      #1E7A4B
```

### Accent Rule
Petrol appears in only three roles:
1. Small uppercase labels (`12px`, tracking `0.14em`)
2. One highlighted phrase or word per heading
3. Primary action buttons and full-bleed Shape B callout bands

---

## Content Architecture

All website data and copy are strictly typed and located under `src/content/`:
- `src/content/site.ts`: Global brand metadata, links, contact details (`hello@siatech.pk`), socials.
- `src/content/projects.ts`: Flagship client case studies (**Naqsh**, **Zephyr**, **Nowhere**, **Hoor**) with verbatim client quotes and screenshot assets.
- `src/content/services.ts`: 5 core services (**Business Websites**, **Online Stores**, **Landing Pages**, **AI Assistants & Chatbots**, **Mobile Apps**) with comprehensive 600+ word specs.
- `src/content/rd-projects.ts`: In-house R&D capability prototypes (UniAssist, Sprintlog Agent, NoChat, Learning Path Recommender, Study Planner, Assortment Dashboard).
- `src/content/pricing.ts`: Pricing ranges with USD and PKR currencies and build-first assurances.
- `src/content/faq.ts`: Core FAQs addressing development risk, ownership, timelines, and payment.

---

## How to Add a New Case Study

To add a new client project to the site and automatically generate a case study page:
1. Add high-resolution screenshots to `public/images/projects/your-project-hero.jpeg`.
2. Add a new object to the `clientProjects` array in `src/content/projects.ts` with:
   - `id`, `slug`, `title`, `brandName`, `client`, `clientRole`, `category`
   - `oneLiner`, `coverImage`, `galleryImages`, `technologies`, `liveUrl`, `githubUrl`
   - `brief`, `challenge`, `whatWeBuilt`, `stackDetails`, `results`, `testimonial`
3. The new project will automatically appear on `/`, `/work`, `/work/[slug]`, and in `sitemap.xml`.

---

## Getting Started & Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

### 3. Production Build
```bash
npm run build
```

---

## License & Ownership
© 2026 SIA Technologies. All rights reserved.
