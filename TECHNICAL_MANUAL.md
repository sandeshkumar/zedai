# ZED Labs - Technical Manual

> Developer reference for the ZED Labs landing page built with Next.js, Tailwind CSS, Prisma, and Neon PostgreSQL.

---

## Table of Contents

1. [Tech Stack](#1-tech-stack)
2. [Project Structure](#2-project-structure)
3. [Getting Started](#3-getting-started)
4. [Architecture](#4-architecture)
5. [Design System](#5-design-system)
6. [Components Reference](#6-components-reference)
7. [API Reference](#7-api-reference)
8. [Database](#8-database)
9. [Form System](#9-form-system)
10. [Content Management](#10-content-management)
11. [Deployment](#11-deployment)
12. [Common Tasks](#12-common-tasks)

---

## 1. Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 16.1.6 | Framework (App Router, SSR) |
| React | 19.2.3 | UI library |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4.x | Utility-first styling |
| Framer Motion | 12.34.3 | Scroll animations |
| React Hook Form | 7.71.2 | Form state management |
| Zod | 4.3.6 | Schema validation |
| Prisma | 6.19.2 | Database ORM |
| Neon PostgreSQL | - | Cloud database (free tier) |
| Vercel | - | Hosting & deployment |

---

## 2. Project Structure

```
zedlabs/
├── app/
│   ├── layout.tsx                # Root layout (fonts, metadata)
│   ├── page.tsx                  # Landing page (composes all sections)
│   ├── globals.css               # Tailwind @theme tokens + base styles
│   ├── favicon.ico
│   └── api/
│       └── enquiry/
│           └── route.ts          # POST endpoint for form submissions
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx            # Fixed navigation bar
│   │   └── Footer.tsx            # Page footer
│   ├── sections/
│   │   ├── Hero.tsx              # Hero section with form
│   │   ├── LogoStrip.tsx         # Trusted brands strip
│   │   ├── Results.tsx           # 4-stat metrics grid
│   │   ├── Services.tsx          # 6-card service grid
│   │   ├── BeforeAfter.tsx       # Case study comparison
│   │   ├── Process.tsx           # 4-step timeline
│   │   ├── Testimonials.tsx      # 3-card testimonial grid
│   │   ├── Pricing.tsx           # 3-tier pricing cards
│   │   ├── FAQ.tsx               # Accordion Q&A
│   │   └── FinalCTA.tsx          # Final call-to-action
│   ├── ui/
│   │   ├── Button.tsx            # Button + ButtonLink components
│   │   ├── ScrollReveal.tsx      # Framer Motion fade-up wrapper
│   │   ├── SectionHeader.tsx     # Reusable tag + title + description
│   │   └── WhatsAppButton.tsx    # Fixed floating WhatsApp FAB
│   └── forms/
│       └── EnquiryForm.tsx       # Contact form (React Hook Form + Zod)
├── lib/
│   ├── constants.ts              # All static content (services, pricing, FAQ, etc.)
│   ├── db.ts                     # Prisma client singleton
│   └── validations/
│       └── enquiry.ts            # Zod schema (shared client + server)
├── prisma/
│   ├── schema.prisma             # Database schema
│   └── migrations/               # Migration history
├── .env                          # Environment variables (gitignored)
├── .env.example                  # Template for env vars
├── .gitignore
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
├── eslint.config.mjs
├── package.json
└── zedlabs-deepblue-orange-landing.html  # Original static HTML (preserved)
```

---

## 3. Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Git

### Clone & Install

```bash
git clone https://github.com/sandeshkumar/zedai.git
cd zedai
npm install
```

The `postinstall` script automatically runs `prisma generate` to build the Prisma client.

### Environment Setup

Copy the example env file and fill in your Neon credentials:

```bash
cp .env.example .env
```

Edit `.env`:

```env
DATABASE_URL="postgresql://user:password@ep-xxx-pooler.region.aws.neon.tech/dbname?sslmode=require"
DIRECT_URL="postgresql://user:password@ep-xxx.region.aws.neon.tech/dbname?sslmode=require"
```

- `DATABASE_URL` — Pooled connection (has `-pooler` in hostname). Used by the app at runtime.
- `DIRECT_URL` — Direct connection (no `-pooler`). Used by Prisma for migrations.

Get both URLs from your [Neon Console](https://console.neon.tech) project dashboard.

### Database Setup

Run the initial migration to create the `enquiries` table:

```bash
npx prisma migrate dev --name init
```

### Start Development Server

```bash
npm run dev
```

Opens at `http://localhost:3000`.

### Available Scripts

| Script | Command | Purpose |
|---|---|---|
| `npm run dev` | `next dev` | Start dev server (Turbopack) |
| `npm run build` | `next build` | Production build |
| `npm run start` | `next start` | Start production server |
| `npm run lint` | `eslint` | Run linter |
| `npx prisma studio` | - | Open database GUI (localhost:5555) |
| `npx prisma migrate dev` | - | Run pending migrations |
| `npx prisma generate` | - | Regenerate Prisma client |

---

## 4. Architecture

### App Router

This project uses the Next.js **App Router** (`app/` directory). All routes are file-system based:

- `app/page.tsx` — `/` (landing page)
- `app/api/enquiry/route.ts` — `POST /api/enquiry`
- `app/layout.tsx` — Root layout wrapping all pages
- `app/globals.css` — Global styles loaded by root layout

### Server vs Client Components

By default, all components are **Server Components** (rendered on the server, zero JS shipped to client). Components that need browser APIs or React hooks use the `"use client"` directive.

**Server Components** (no JS bundle):
- `app/page.tsx`
- `app/layout.tsx`
- `components/layout/Footer.tsx`
- `components/ui/Button.tsx`
- `components/ui/SectionHeader.tsx`
- `components/sections/LogoStrip.tsx`
- `components/sections/FinalCTA.tsx`

**Client Components** (`"use client"`):
- `components/layout/Navbar.tsx` — scroll event listener
- `components/forms/EnquiryForm.tsx` — form state, fetch API
- `components/ui/ScrollReveal.tsx` — Framer Motion animation
- `components/ui/WhatsAppButton.tsx` — Framer Motion animation
- `components/sections/Hero.tsx` — Framer Motion animations
- `components/sections/Results.tsx` — ScrollReveal wrapper
- `components/sections/Services.tsx` — ScrollReveal wrapper
- `components/sections/BeforeAfter.tsx` — ScrollReveal wrapper
- `components/sections/Process.tsx` — ScrollReveal wrapper
- `components/sections/Testimonials.tsx` — ScrollReveal wrapper
- `components/sections/Pricing.tsx` — ScrollReveal wrapper
- `components/sections/FAQ.tsx` — useState for accordion

### Data Flow (Form Submission)

```
User fills form
  → React Hook Form validates (Zod schema, client-side)
  → POST /api/enquiry (JSON body)
  → Server validates again (same Zod schema)
  → Prisma creates record in Neon PostgreSQL
  → Returns { success: true, id } (201)
  → EnquiryForm shows success state
```

### Import Aliases

`@/*` maps to the project root (configured in `tsconfig.json`):

```typescript
import { prisma } from "@/lib/db";
import { Hero } from "@/components/sections/Hero";
```

---

## 5. Design System

### Tailwind v4 Theme Tokens

All design tokens are defined in `app/globals.css` using Tailwind v4's `@theme inline` block. They become usable as Tailwind utility classes.

### Color Palette

| Token | Value | Tailwind Class | Usage |
|---|---|---|---|
| `--color-db` | `#1E3A5F` | `bg-db`, `text-db` | Primary blue |
| `--color-db-light` | `#2D5A8E` | `bg-db-light` | Blue hover states |
| `--color-db-lighter` | `#4A7DB8` | `border-db-lighter` | Focus borders |
| `--color-db-dark` | `#152B47` | `bg-db-dark` | Dark blue accents |
| `--color-accent` | `#F97316` | `bg-accent`, `text-accent` | Orange CTA/action |
| `--color-accent-light` | `#FB923C` | `bg-accent-light` | Orange gradients |
| `--color-accent-dark` | `#EA580C` | `bg-accent-dark` | Orange hover |
| `--color-bg-primary` | `#080C14` | `bg-bg-primary` | Page background |
| `--color-bg-secondary` | `#0C1220` | `bg-bg-secondary` | Input backgrounds |
| `--color-bg-tertiary` | `#111827` | `bg-bg-tertiary` | Section backgrounds |
| `--color-card` | `#141C2E` | `bg-card` | Card backgrounds |
| `--color-card-alt` | `#192236` | `bg-card-alt` | Card gradients |
| `--color-text-primary` | `#F8FAFC` | `text-text-primary` | Main text |
| `--color-text-muted` | `#CBD5E1` | `text-text-muted` | Secondary text |
| `--color-text-subtle` | `#94A3B8` | `text-text-subtle` | Descriptions |
| `--color-text-faint` | `#64748B` | `text-text-faint` | De-emphasized text |
| `--color-text-dim` | `#475569` | `text-text-dim` | Placeholders |
| `--color-success` | `#22C55E` | `text-success` | Success states |
| `--color-error` | `#EF4444` | `text-error` | Error states |

### Border Colors

| Token | Value | Usage |
|---|---|---|
| `--color-border-subtle` | `rgba(255,255,255,0.06)` | Dividers |
| `--color-border-medium` | `rgba(255,255,255,0.09)` | Input borders |
| `--color-border-blue` | `rgba(30,58,95,0.35)` | Card borders |
| `--color-border-accent` | `rgba(249,115,22,0.25)` | Accent borders |

### Fonts

| Token | Font | Usage |
|---|---|---|
| `--font-heading` / `font-heading` | Outfit (800 weight) | Headings, stats |
| `--font-body` / `font-body` | Inter (400/500 weight) | Body text, inputs |

Fonts are loaded via `next/font/google` in `app/layout.tsx` and injected as CSS variables (`--font-inter`, `--font-outfit`). The `@theme` block references these variables.

### Border Radius

| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | `8px` | Inputs, small cards |
| `--radius-md` | `14px` | Buttons, medium cards |
| `--radius-lg` | `20px` | Large cards, form container |
| `--radius-full` | `100px` | Badges, pills |

---

## 6. Components Reference

### Layout Components

#### `Navbar` — `components/layout/Navbar.tsx`
- **Type:** Client component
- **Features:** Fixed position, backdrop blur, scroll shadow (appears at scrollY > 50), navigation links, CTA button
- **Section IDs used:** `#services`, `#results`, `#pricing`, `#faq`, `#contact`

#### `Footer` — `components/layout/Footer.tsx`
- **Type:** Server component
- **Features:** Logo, tagline, email/phone links, dynamic copyright year

### UI Components

#### `Button` / `ButtonLink` — `components/ui/Button.tsx`
- **Type:** Server component
- **Props:** `variant` (`"primary"` | `"ghost"` | `"fill"` | `"outline"`), `className`, plus standard button/anchor attributes
- **`ButtonLink`** renders an `<a>` tag
- **`Button`** renders a `<button>` tag
- **Variants:**
  - `primary` — Orange gradient with shadow
  - `ghost` — Transparent with blue border
  - `fill` — Solid orange gradient
  - `outline` — Transparent with white/blue border

#### `ScrollReveal` — `components/ui/ScrollReveal.tsx`
- **Type:** Client component
- **Props:** `children`, `delay` (number, default 0), `className`
- **Behavior:** Fades in from below (opacity 0→1, y: 20→0) when element enters viewport. Triggers once.

#### `SectionHeader` — `components/ui/SectionHeader.tsx`
- **Type:** Server component
- **Props:** `tag` (string), `title` (string), `description` (string, optional), `centered` (boolean, optional)
- **Renders:** Uppercase tag with accent line + large title + optional description

#### `WhatsAppButton` — `components/ui/WhatsAppButton.tsx`
- **Type:** Client component
- **Behavior:** Fixed bottom-right floating button, scales in after 1s delay, links to WhatsApp URL from constants

### Section Components

All sections are rendered in order in `app/page.tsx`:

| # | Component | File | Section ID | Type |
|---|---|---|---|---|
| 1 | `Hero` | `sections/Hero.tsx` | `#contact` (form) | Client |
| 2 | `LogoStrip` | `sections/LogoStrip.tsx` | — | Server |
| 3 | `Results` | `sections/Results.tsx` | `#results` | Client |
| 4 | `Services` | `sections/Services.tsx` | `#services` | Client |
| 5 | `BeforeAfter` | `sections/BeforeAfter.tsx` | — | Client |
| 6 | `Process` | `sections/Process.tsx` | — | Client |
| 7 | `Testimonials` | `sections/Testimonials.tsx` | — | Client |
| 8 | `Pricing` | `sections/Pricing.tsx` | `#pricing` | Client |
| 9 | `FAQ` | `sections/FAQ.tsx` | `#faq` | Client |
| 10 | `FinalCTA` | `sections/FinalCTA.tsx` | — | Server |

### Form Components

#### `EnquiryForm` — `components/forms/EnquiryForm.tsx`
- **Type:** Client component
- **Section ID:** `#contact`
- **Features:** React Hook Form + Zod validation, 4 submit states (idle/loading/success/error), auto-reset on success (5s) and error (3s), urgency badge, trust stats footer
- **Fields:** Name, WhatsApp Number, Service Type (dropdown), Budget (optional)

---

## 7. API Reference

### `POST /api/enquiry`

**File:** `app/api/enquiry/route.ts`

**Request:**

```json
{
  "name": "John Doe",
  "phone": "+91 9876543210",
  "serviceType": "Business Website",
  "budget": "₹25,000 - ₹50,000"
}
```

**Validation Rules:**

| Field | Type | Rules |
|---|---|---|
| `name` | string | Required, 2-100 characters |
| `phone` | string | Required, 10-15 chars, regex: `/^[+]?[\d\s-]+$/` |
| `serviceType` | enum | Required, must be one of `SERVICE_OPTIONS` |
| `budget` | string | Optional, max 100 characters |

**Valid `serviceType` values:**
- `"Business Website"`
- `"E-Commerce Store"`
- `"Mobile App"`
- `"Website Redesign"`
- `"SEO & Marketing"`
- `"Custom Software"`

**Success Response (201):**

```json
{
  "success": true,
  "id": "cm5abc123def456"
}
```

**Validation Error Response (400):**

```json
{
  "error": "Validation failed",
  "details": {
    "name": ["Name must be at least 2 characters"],
    "phone": ["Enter a valid phone number"]
  }
}
```

**Server Error Response (500):**

```json
{
  "error": "Internal server error"
}
```

---

## 8. Database

### Provider

**Neon PostgreSQL** (free tier) — serverless Postgres with connection pooling.

- Dashboard: [console.neon.tech](https://console.neon.tech)
- Region: `ap-southeast-1` (Singapore)

### Prisma Schema

**File:** `prisma/schema.prisma`

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider  = "postgresql"
  url       = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}

model Enquiry {
  id          String   @id @default(cuid())
  name        String
  phone       String
  serviceType String   @map("service_type")
  budget      String?  @default("")
  status      String   @default("new")
  createdAt   DateTime @default(now()) @map("created_at")
  updatedAt   DateTime @updatedAt @map("updated_at")

  @@map("enquiries")
}
```

### Database Table: `enquiries`

| Column | Type | Default | Notes |
|---|---|---|---|
| `id` | String | `cuid()` | Primary key |
| `name` | String | — | Customer name |
| `phone` | String | — | WhatsApp number |
| `service_type` | String | — | Selected service |
| `budget` | String? | `""` | Budget range (optional) |
| `status` | String | `"new"` | Enquiry status |
| `created_at` | DateTime | `now()` | Submission timestamp |
| `updated_at` | DateTime | auto | Last update timestamp |

### Prisma Client Singleton

**File:** `lib/db.ts`

Uses the singleton pattern to prevent multiple `PrismaClient` instances during Next.js hot reload:

```typescript
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
```

Always import from `@/lib/db`:

```typescript
import { prisma } from "@/lib/db";
```

### Common Database Commands

```bash
# View data in browser GUI
npx prisma studio

# Create a new migration after schema changes
npx prisma migrate dev --name description_of_change

# Reset database (WARNING: deletes all data)
npx prisma migrate reset

# Regenerate Prisma client after schema changes
npx prisma generate

# View SQL queries in Neon Console
# Go to console.neon.tech → SQL Editor → Run queries
```

### Useful SQL Queries (Neon SQL Editor)

```sql
-- View all enquiries (newest first)
SELECT * FROM enquiries ORDER BY created_at DESC;

-- Count total enquiries
SELECT COUNT(*) FROM enquiries;

-- View enquiries from today
SELECT * FROM enquiries WHERE created_at::date = CURRENT_DATE;

-- Update enquiry status
UPDATE enquiries SET status = 'contacted' WHERE id = 'some_id';
```

---

## 9. Form System

### Validation Schema

**File:** `lib/validations/enquiry.ts`

The same Zod schema is used for both client-side (React Hook Form) and server-side (API route) validation — single source of truth.

```typescript
import { z } from "zod";

export const SERVICE_OPTIONS = [
  "Business Website",
  "E-Commerce Store",
  "Mobile App",
  "Website Redesign",
  "SEO & Marketing",
  "Custom Software",
] as const;

export const enquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  phone: z.string().min(10, "Enter a valid phone number").max(15)
    .regex(/^[+]?[\d\s-]+$/, "Enter a valid phone number"),
  serviceType: z.enum(SERVICE_OPTIONS, { message: "Please select a service" }),
  budget: z.string().max(100),
});

export type EnquiryFormData = z.infer<typeof enquirySchema>;
```

### React Hook Form Integration

`EnquiryForm` uses `zodResolver` to connect the Zod schema to React Hook Form:

```typescript
const { register, handleSubmit, reset, formState: { errors } } = useForm<EnquiryFormData>({
  resolver: zodResolver(enquirySchema),
});
```

### Submit States

The form button cycles through 4 visual states:

| State | Color | Label | Duration |
|---|---|---|---|
| `idle` | Orange gradient | "Get My Free Quote →" | Default |
| `loading` | Orange gradient | "Sending..." | During fetch |
| `success` | Green (`#22C55E`) | "Sent! We'll Contact You in 2 Hours" | 5 seconds |
| `error` | Red (`#EF4444`) | "Failed — Try Again" | 3 seconds |

---

## 10. Content Management

All static content lives in a single file: `lib/constants.ts`. To update text, pricing, testimonials, or FAQ items, edit this file.

### Navigation Links

```typescript
// lib/constants.ts
export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];
```

### Results/Stats

```typescript
export const RESULTS = [
  { value: "3X", label: "More Enquiries", description: "Average lead increase within 60 days" },
  // ... add/edit/remove items
];
```

### Services

```typescript
export const SERVICES = [
  { icon: "🌐", title: "Business Websites", description: "..." },
  // ... 6 items total, rendered in a 3-column grid
];
```

### Pricing Tiers

```typescript
export const PRICING_TIERS = [
  {
    name: "Starter",
    description: "For small businesses getting online",
    oldPrice: "₹25,000",      // Crossed-out price (set null to hide)
    price: "₹14,999",
    priceSuffix: "one-time",
    popular: false,            // Set true to show "MOST POPULAR" badge
    features: ["Feature 1", "Feature 2", ...],
    ctaLabel: "Get Started",
    ctaVariant: "outline",     // "outline" | "fill"
  },
  // ... 3 tiers total
];
```

### FAQ Items

```typescript
export const FAQ_ITEMS = [
  {
    question: "How long does it take to build my website?",
    answer: "Most business websites are delivered in 7-14 days...",
  },
  // ... add/edit/remove items
];
```

### Testimonials

```typescript
export const TESTIMONIALS = [
  {
    stars: 5,
    quote: "ZED Labs completely transformed our online presence...",
    name: "Rahul K.",
    initials: "RK",
    role: "E-Commerce Business Owner, Mumbai",
  },
  // ... 3 items total
];
```

### WhatsApp Number

```typescript
export const WHATSAPP_URL = "https://wa.me/917019581347?text=Hi%20ZED%20Labs!...";
```

Change the phone number after `wa.me/` (format: country code + number, no spaces).

### Service Options (Form Dropdown)

To add/modify service options in the form dropdown, edit `lib/validations/enquiry.ts`:

```typescript
export const SERVICE_OPTIONS = [
  "Business Website",
  "E-Commerce Store",
  "Mobile App",
  "Website Redesign",
  "SEO & Marketing",
  "Custom Software",
] as const;
```

### SEO Metadata

Edit `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "ZED Labs — Websites & Apps That Grow Your Business | Get Free Quote",
  description: "ZED Labs builds fast, SEO-optimized websites...",
  openGraph: {
    title: "ZED Labs — Websites & Apps That Grow Your Business",
    description: "Fast, SEO-optimized websites...",
    type: "website",
  },
};
```

---

## 11. Deployment

### Vercel

The project is deployed on Vercel with automatic deployments from the `main` branch.

- **Dashboard:** [vercel.com/dashboard](https://vercel.com/dashboard)
- **GitHub repo:** `https://github.com/sandeshkumar/zedai.git`
- **Live URL:** `https://zedai.tech`

### Deploy Workflow

1. Push code to `main` branch on GitHub
2. Vercel automatically detects the push and triggers a build
3. Build runs `npm install` → `prisma generate` (postinstall) → `next build`
4. If build succeeds, the new version goes live

### Environment Variables (Vercel)

Go to **Vercel Dashboard → Project → Settings → Environment Variables** and add:

| Key | Value | Environment |
|---|---|---|
| `DATABASE_URL` | `postgresql://...pooler...` | Production, Preview, Development |
| `DIRECT_URL` | `postgresql://...direct...` | Production, Preview, Development |

After adding/changing env vars, you must **redeploy** for changes to take effect.

### Custom Domain (DNS)

Domain `zedai.tech` is managed in **Hostinger**. DNS records:

| Type | Name | Value | Purpose |
|---|---|---|---|
| A | `@` | `76.76.21.21` | Root domain → Vercel |
| CNAME | `www` | `cname.vercel-dns.com` | www subdomain → Vercel |
| A | `billing` | `145.79.212.61` | billing.zedai.tech (Hostinger) |

Vercel automatically provisions and renews SSL certificates.

### Redeploying

To redeploy without a code change (e.g., after updating env vars):

1. Vercel Dashboard → Deployments
2. Click `...` on latest deployment → **Redeploy**
3. Uncheck "Use existing Build Cache" if you changed Prisma schema or env vars

---

## 12. Common Tasks

### Add a New Section

1. Create `components/sections/NewSection.tsx`
2. Import static data from `lib/constants.ts` (or add new constants)
3. Wrap content in `<ScrollReveal>` for scroll animation
4. Use `<SectionHeader>` for consistent heading
5. Add the component to `app/page.tsx` in the desired position:

```tsx
// app/page.tsx
import { NewSection } from "@/components/sections/NewSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* ... existing sections ... */}
        <NewSection />    {/* Add here */}
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
```

### Change Colors

Edit `app/globals.css` inside the `@theme inline` block:

```css
@theme inline {
  --color-accent: #E11D48;       /* Change orange to rose */
  --color-accent-light: #FB7185;
  --color-accent-dark: #BE123C;
}
```

All components using `bg-accent`, `text-accent`, etc. will automatically update.

### Update Pricing

Edit the `PRICING_TIERS` array in `lib/constants.ts`. Each tier has:

- `name`, `description`, `price`, `oldPrice` (strike-through), `priceSuffix`
- `popular: true` adds the "MOST POPULAR" badge
- `features` array of bullet points
- `ctaVariant` controls button style

### Add a Form Field

1. Update the Zod schema in `lib/validations/enquiry.ts`:

```typescript
export const enquirySchema = z.object({
  // ... existing fields
  email: z.string().email("Enter a valid email"),
});
```

2. Add the input in `components/forms/EnquiryForm.tsx`:

```tsx
<input {...register("email")} type="email" placeholder="Email *" className={inputClass} />
{errors.email && <p className="text-error text-xs mt-1">{errors.email.message}</p>}
```

3. Update the Prisma schema in `prisma/schema.prisma`:

```prisma
model Enquiry {
  // ... existing fields
  email String
}
```

4. Run migration:

```bash
npx prisma migrate dev --name add_email_field
```

5. Update the API route `app/api/enquiry/route.ts` to include the new field in `prisma.enquiry.create()`.

### Add a New API Route

Create a new file under `app/api/`:

```
app/api/your-route/route.ts
```

```typescript
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(request: NextRequest) {
  // Your logic here
  return NextResponse.json({ data: "..." });
}
```

### Add a Database Model

1. Add the model to `prisma/schema.prisma`
2. Run `npx prisma migrate dev --name add_model_name`
3. Prisma client regenerates automatically
4. Import and use via `import { prisma } from "@/lib/db"`

### Rotate Database Password

1. Go to [Neon Console](https://console.neon.tech) → your project → **Roles**
2. Reset the password for `neondb_owner`
3. Copy the new connection strings
4. Update `.env` locally
5. Update Vercel environment variables (Dashboard → Settings → Environment Variables)
6. Redeploy on Vercel

---

## Quick Reference

| What | Where |
|---|---|
| Change page text/content | `lib/constants.ts` |
| Change colors/fonts | `app/globals.css` (`@theme inline`) |
| Change form fields | `lib/validations/enquiry.ts` + `components/forms/EnquiryForm.tsx` |
| Change SEO metadata | `app/layout.tsx` |
| Change WhatsApp number | `lib/constants.ts` → `WHATSAPP_URL` |
| View enquiry submissions | `npx prisma studio` or Neon SQL Editor |
| Add a new page section | Create in `components/sections/`, add to `app/page.tsx` |
| Deploy changes | Push to `main` → Vercel auto-deploys |
| Database schema changes | Edit `prisma/schema.prisma` → `npx prisma migrate dev` |
