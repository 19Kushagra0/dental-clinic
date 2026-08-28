# 🦷 SmileCraft Digital — High-Precision Dental Studio

> A high-performance web platform built with **Next.js (App Router)**, **TypeScript**, **Turbopack**, and **Next.js CSS Modules**.

[![Next.js](https://img.shields.io/badge/Next.js-16.3.3-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Turbopack](https://img.shields.io/badge/Bundler-Turbopack-0284C7?style=flat)](https://turbo.build/)
[![CSS Modules](https://img.shields.io/badge/Styles-CSS_Modules-blueviolet?style=flat)](https://nextjs.org/docs/app/building-your-application/styling/css-modules)
[![Core Web Vitals](https://img.shields.io/badge/Performance-Optimized_FCP_%26_TBT-success?style=flat)](#-performance--core-web-vitals-optimizations)

---

## 📖 Overview

**SmileCraft Digital Dental Studio** is a digital dental studio located on Road No. 12, Banjara Hills, Hyderabad. This web application delivers a clinical patient experience designed to communicate sub-micron precision, transparency, and clinical excellence.

### ✨ Key Features

- **🔬 Interactive Clinical Technology Matrix**: Detailed breakdowns and technical specifications for 3D Optical Scanning (Planmeca® Emerald S), 3D Cone Beam CT (CBCT), 5-Axis In-House CAD/CAM Milling (CEREC®), Biolase® Waterlase Laser, and The Wand® Computerized Anesthesia.
- **⚡ Interactive 3D Smile Simulator**: Smooth, touch-responsive before/after slider comparing baseline dental alignment with CAD/CAM porcelain veneer restorations.
- **📅 Multi-Step Diagnostic Booking Engine**: Code-split, accessible appointment booking modal with dynamic specialist assignment, treatment categorization, date/time slot pickers, and direct WhatsApp clinical desk handoff.
- **📊 Digital vs. Conventional Comparison Matrix**: Side-by-side procedure analysis for patient clarity.
- **👩‍⚕️ Specialist Credentials Showcase**: Lead implantologists, orthodontists, and endodontists with verified international fellowships (ICOI, Invisalign® Diamond Provider).
- **📱 Touch-Optimized Mobile Navigation**: Fast responsive header, 44px touch-target hamburger toggle, and mobile sidebar drawer with backdrop blur.

---

## ⚡ Performance & Core Web Vitals Optimizations

This application is engineered for maximum performance, minimal main-thread blocking, and SEO superiority:

| Metric | Optimization Technique |
| :--- | :--- |
| **FCP (First Contentful Paint)** | Self-hosted Google Fonts via `next/font/google` (`Barlow` & `Barlow_Condensed`) with `display: "swap"`, eliminating external render-blocking network requests. |
| **TBT (Total Blocking Time)** | 100% GPU-composited, hardware-accelerated CSS keyframe animations. Deferred/code-split `BookingModal` via `next/dynamic` (`ssr: false`) to minimize hydration overhead. |
| **LCP (Largest Contentful Paint)** | Next-gen **AVIF & WebP** image formatting in `next.config.ts`, responsive `sizes` breakpoints, and `quality={65}` compression on hero imagery. |
| **CLS (Cumulative Layout Shift)** | Strict dimensional constraints on all next/image wrappers and font fallbacks to guarantee `0.000` shift. |
| **Social Sharing (OG / Twitter)** | Dynamic Open Graph social share image (1200×630px) resolved via `NEXT_PUBLIC_SITE_URL` and App Router file-based route conventions (`/opengraph-image.jpg`). |
| **SEO & Discoverability** | Fully structured `LocalBusiness` JSON-LD schema with geo-coordinates, telephone, treatments, opening hours, and canonical URLs. |

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack, Server & Client Components)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling Architecture**: Scoped **CSS Modules** (`*.module.css`) + [Tailwind CSS v4](https://tailwindcss.com/) utilities + CSS Variables design tokens
- **Typography**: [Barlow & Barlow Condensed](https://fonts.google.com/specimen/Barlow) (optimized via `next/font/google`)
- **Icons**: Custom inline SVG icon system in `@/icons`

---

## 📁 Project Structure

```text
dental-clinic/
├── public/                     # Static production assets
│   ├── dental-scanner-3d.jpg   # Hero operatory scanner
│   ├── og-image.jpg            # Open Graph social preview (1200x630)
│   ├── smile-after.jpg         # Before/after simulator (After)
│   └── smile-before.jpg        # Before/after simulator (Before)
├── src/
│   ├── app/
│   │   ├── globals.css         # Reset, tokens, and dark scrollbar rules
│   │   ├── layout.tsx          # Root layout, fonts, metadata, JSON-LD
│   │   ├── opengraph-image.jpg # Next.js App Router native OG image
│   │   ├── page.tsx            # Main landing page component
│   │   └── twitter-image.jpg   # Twitter summary_large_image card
│   ├── components/
│   │   ├── BookingModal.tsx    # Diagnostic booking multi-step drawer
│   │   ├── Footer.tsx          # Responsive 2-column clinic footer
│   │   ├── Header.tsx          # Desktop navigation & mobile toggle
│   │   └── MobileSidebar.tsx   # Mobile sliding drawer
│   ├── icons/
│   │   └── index.tsx           # Scalable SVG clinical icon suite
│   └── styles/
│       ├── BookingModal.module.css # Scoped booking modal styles
│       ├── Footer.module.css       # Scoped footer styles
│       ├── Header.module.css       # Scoped header styles
│       ├── HomePage.module.css     # Scoped landing page styles
│       └── MobileSidebar.module.css# Scoped mobile drawer styles
├── .env.example                # Deployment environment template
├── .env.local                  # Local development environment
├── next.config.ts              # Next.js compiler & image optimization config
├── package.json
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: `v18.18.0` or higher
- **Package Manager**: `npm`, `yarn`, `pnpm`, or `bun`

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/19Kushagra0/dental-clinic.git
   cd dental-clinic
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
   For local development:
   ```env
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Build & Production

To build the production bundle with Next.js Turbopack:

```bash
# Build optimized static and server pages
npm run build

# Start production server
npm run start

# Run ESLint validation
npm run lint
```

---

## 🌐 Deployment

### Deploy on Vercel
1. Push your repository to GitHub.
2. Import the project into [Vercel](https://vercel.com).
3. Add the environment variable in your Vercel Project Settings:
   - `NEXT_PUBLIC_SITE_URL` = `https://your-custom-domain.com`
4. Deploy! Vercel will automatically optimize images and edge-cache static assets.

---

## 📄 License

This project is open-source and available under the **MIT License**.
