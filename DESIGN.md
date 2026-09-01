---
name: SmileCraft Precision Digital Studio
description: High-craft, bespoke digital dental studio design system
colors:
  dark-bg: "#090D16"
  surface: "#0F172A"
  card: "#151E2E"
  primary-blue: "#0369A1"
  accent-cyan: "#38BDF8"
  badge-bg: "#E0F2FE"
  badge-text: "#075985"
  text-muted: "#94A3B8"
  text-slate: "#CBD5E1"
  white: "#FFFFFF"
typography:
  display:
    fontFamily: "var(--font-outfit), 'Outfit', sans-serif"
    fontWeight: 700
    letterSpacing: "-0.02em"
  body:
    fontFamily: "var(--font-plus-jakarta), 'Plus Jakarta Sans', sans-serif"
    fontWeight: 400
    lineHeight: 1.65
rounded:
  sm: "6px"
  md: "8px"
  lg: "12px"
  full: "9999px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
components:
  button-primary:
    backgroundColor: "{colors.primary-blue}"
    textColor: "{colors.white}"
    rounded: "{rounded.sm}"
    padding: "0.75rem 1.5rem"
  button-secondary:
    backgroundColor: "rgba(15, 23, 42, 0.45)"
    textColor: "{colors.white}"
    rounded: "{rounded.sm}"
    padding: "0.75rem 1.5rem"
  kicker-badge:
    textColor: "{colors.primary-blue}"
    letterSpacing: "0.08em"
---

# SmileCraft Precision Studio — Design System

## Overview
SmileCraft Precision Studio's visual identity reflects clinical authority, cutting-edge 3D medical engineering, and human-centric warmth. Built with deep dark slate surfaces (`#090D16` and `#0F172A`), high-trust ocean blue accents (`#0369A1`), and crisp geometric typography (**Outfit** for display headings, **Plus Jakarta Sans** for body copy).

## Colors
- **Primary Accent**: Ocean Blue (`#0369A1`) – applied to primary action buttons and clinical highlights.
- **Secondary Accent**: High-Contrast Sky Blue (`#38BDF8`) – used for active tabs, status indicators, and subtle glowing highlights.
- **Deep Surfaces**: Slate Dark (`#090D16`) root canvas, Deep Studio Slate (`#0F172A`) section cards, and Elevated Card (`#151E2E`).
- **High-Contrast Badges**: Deep Blue (`#075985`) text on light sky blue background (`#E0F2FE`) for 7.8:1 WCAG AAA accessibility contrast.

## Typography
- **Headings & Display**: **Outfit** (Weights 600, 700, 800) – crisp, modern geometric letterforms with tight `-0.02em` tracking.
- **Body & Interface**: **Plus Jakarta Sans** (Weights 400, 500, 600, 700) – warm, open humanist grotesk for effortless legibility.
- **Eyebrow Kickers**: Uppercase, bold weight (700), `0.08em` tracking in `#0284C7`.

## Layout
- **Container Max-Width**: `1360px` centered canvas with `2rem` horizontal padding.
- **Section Spacing**: Generous `6.5rem 2rem` vertical padding for spacious visual breathing room.
- **Grid Systems**: Responsive 2-column split layouts for equipment showcase, 4-column cards for workflow timeline.

## Elevation & Depth
- **Glassmorphic Hero Buttons**: `backdrop-filter: blur(12px)` with subtle `rgba(255, 255, 255, 0.18)` borders and soft `0 4px 20px rgba(0, 0, 0, 0.2)` drop-shadows.
- **Unified Table Cards**: Single `#0F172A` background card with `border-radius: 12px` and `1px solid rgba(255, 255, 255, 0.12)` border.

## Shapes
- **Standard Corners**: `6px` radius for interactive buttons and input controls; `8px` for cards and equipment showcase containers; `12px` for section table wrappers.
- **Avatars**: `50%` circular clip-path with `object-fit: cover` for authentic clinical doctor headshots and patient portraits.

## Components
- **Primary CTA**: Solid `#0369A1` background with white text and `border-radius: 6px`.
- **Secondary CTA**: Glassmorphic `rgba(15, 23, 42, 0.45)` with `blur(12px)` and clean white hover highlight.
- **Interactive Tabs**: Pill button switches with active cyan bottom accent borders and subtle scale transitions.

## Do's and Don'ts
- **DO**: Use authentic, real-world clinical photography for equipment and doctor headshots.
- **DO**: Maintain 7:1+ contrast ratios for all body text and numerical badges.
- **DON'T**: Use synthetic neon cyan-to-purple linear gradients or artificial glowing drop-shadows.
- **DON'T**: Revert to generic AI fonts like Barlow or Inter without explicit craft intent.
