---
name: SmileCraft Digital Dental Studio
description: High-Precision Modern Dental Technology (Cyber-Precision Architecture)
colors:
  primary: "#0EA5E9"
  primary-glow: "#38BDF8"
  secondary: "#06B6D4"
  neutral-dark: "#0B0F19"
  neutral-graphite: "#111827"
  neutral-surface: "#1E293B"
  neutral-white: "#FFFFFF"
  neutral-muted: "#9CA3AF"
  border-cyan: "rgba(14, 165, 233, 0.2)"
  border-subtle: "rgba(255, 255, 255, 0.08)"
typography:
  display:
    fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif"
    fontSize: "clamp(2.4rem, 5vw, 5.8rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif"
    fontSize: "clamp(2rem, 3.5vw, 3.6rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  title:
    fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif"
    fontSize: "1.3rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.03em"
  body:
    fontFamily: "'Barlow', system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "normal"
  label:
    fontFamily: "'Barlow', system-ui, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.12em"
rounded:
  none: "0px"
  sm: "2px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral-dark}"
    rounded: "{rounded.none}"
    padding: "12px 26px"
  button-primary-hover:
    backgroundColor: "{colors.primary-glow}"
    textColor: "{colors.neutral-dark}"
    rounded: "{rounded.none}"
    padding: "12px 26px"
  button-secondary:
    backgroundColor: "rgba(255, 255, 255, 0.05)"
    textColor: "{colors.neutral-white}"
    rounded: "{rounded.none}"
    padding: "12px 26px"
---

# Design System: SmileCraft Digital Dental Studio

## Overview

**Creative North Star: "The Cyber-Precision Operatory"**

SmileCraft Digital Dental Studio expresses extreme clinical accuracy, sub-micron diagnostic confidence, and patient tranquility through a modern high-tech visual language. Rooted in deep cyber-dark foundations (`#0B0F19`), the interface radiates precision using electric cyan (`#0EA5E9`) and luminous cyan accents (`#06B6D4`), high-contrast tabular telemetry, and condensed technical typography.

**Key Characteristics:**
- Deep obsidian foundation paired with luminous cyan laser-accent glow lines.
- High-contrast Barlow Condensed technical headlines paired with clean geometric Barlow body text.
- Live telemetry data readouts communicating measurable diagnostic accuracy (`< 20 µm`, `60 Min`, `90% Less Radiation`).
- Clipped geometric polygons and sharp architectural borders reflecting robotic CAD/CAM milling precision.

## Colors

The palette is engineered for high contrast and clinical focus, evoking advanced optical sensors, 3D tomography, and laser dentistry.

### Primary
- **Electric Cyan-Blue** (#0EA5E9): Primary conversion actions, key metric data readouts, active state indicators, and signature glow accents.
- **Electric Sky Glow** (#38BDF8): Hover states, interactive highlights, and high-intensity optical beam visualizers.

### Secondary
- **Luminous Cyan** (#06B6D4): Secondary technical highlights, live status pulses, certification badges, and sub-labels.

### Neutral
- **Cyber Dark Obsidian** (#0B0F19): Primary page canvas and backdrop; deep, immersive, and reflection-free.
- **Graphite Slate** (#111827): Container fills, standard card backgrounds, table cell alternating fills, and modal surfaces.
- **Elevated Deep Slate** (#1E293B): Focused card state, active technology showcase view, and input field backgrounds.
- **Pure Crisp White** (#FFFFFF): Primary typographic headings and high-contrast clinical highlights.
- **Muted Steel Gray** (#9CA3AF): Secondary body narrative and contextual technical descriptions.
- **Cyber Hairline Border** (rgba(14, 165, 233, 0.2)): Structural frames, dividers, and matrix grids.

### Named Rules
**The Precision Cyan Accent Rule.** Cyan (#0EA5E9) is reserved for active diagnostic data, high-priority conversion triggers, and live system feedback. It illuminates the interface rather than washing over entire large backgrounds.

## Typography

**Display Font:** Barlow Condensed (with Arial Narrow, sans-serif fallback)  
**Body Font:** Barlow (with system-ui, sans-serif fallback)

**Character:** Technical authority and rapid scannability. Barlow Condensed delivers dense, commanding headline impact inspired by clinical telemetry monitors, while Barlow provides effortless legibility for treatment protocols.

### Hierarchy
- **Display** (Extra Bold 800, clamp(3.2rem, 6vw, 5.8rem), 0.95): Hero statements and brand pillars.
- **Headline** (Bold 700, clamp(2.4rem, 4vw, 3.6rem), 1.05): Section introduction headlines.
- **Title** (Bold 700, 1.3rem–2.0rem, 1.1): Technology names, step titles, and doctor names.
- **Body** (Regular 400, 0.95rem, 1.75): Narrative descriptions and treatment explanations.
- **Label** (Bold 700, 0.72rem, letter-spacing 0.12em, uppercase): Eyebrows, telemetry labels, status chips, and technical specs.

## Layout

- **Container Model:** Max-width 1360px with 2rem side gutters.
- **Spatial Rhythm:** Generous vertical section padding (7rem / 112px) creating breathing room between technical modules.
- **Sub-Micron Grid Background:** Subtle 60px x 60px cyan grid overlay on dark canvases.
- **Modular Matrices:** 4-column telemetry strip, 4-column treatment ribbon, and 3-column specialist matrix.

## Elevation & Depth

Surfaces rely on dark tonal layering (Obsidian #0B0F19 $\rightarrow$ Slate #111827 $\rightarrow$ Elevated #1E293B) bordered by 1px cyan rules and subtle neon glow blooms rather than traditional drop shadows.

### Named Rules
**The Cyber Glow Rule.** Depth is established through luminous neon glows (`0 0 20px rgba(14, 165, 233, 0.35)`) and value shifts from deep slate to elevated slate, never muddy gray drop shadows.

## Shapes

- **Corner Strategy:** Sharp 0px architectural corners on containers, inputs, and tables.
- **Polygon Clipping:** 5-point clipped polygon corners (`clip-path: polygon(0 0, 100% 0, 100% 75%, 90% 100%, 0 100%)`) on primary CTA buttons and brand logos.
- **Circular Glow Rings:** Circular doctor avatars with spinning CSS outer orbit rings.

## Components

### Buttons
- **Shape:** 5-point clipped polygon corner.
- **Primary:** Electric Cyan background (#0EA5E9), Cyber Dark text (#0B0F19), padding 12px 26px, uppercase tracking 0.1em.
- **Secondary:** Transparent with 1px Cyan Border (rgba(14, 165, 233, 0.3)), White text (#FFFFFF).
- **Hover:** Background shift to #38BDF8 with elevated cyber glow.

### Treatment Chips
- **Background:** Graphite Slate (#111827).
- **Border:** 1px solid rgba(14, 165, 233, 0.15) with animated top cyan border reveal on hover.
- **Icon:** Centered React vector icon with scale and glow transition.

### Technology Tab Showcase
- **Active Card:** Elevated Deep Slate (#1E293B) 2-column layout with technical specifications list and highlighted patient advantage callout box.

### Telemetry Strip
- **Structure:** 4-column data grid with left 2px solid cyan border and animated numerical values.

## Do's and Don'ts

### Do:
- **Do** showcase tangible diagnostic accuracy metrics (`< 20 µm`, `60 Min`, `90% Less Radiation`).
- **Do** emphasize patient comfort benefits alongside cutting-edge hardware.
- **Do** use crisp vector React Icons from `@/icons` with dedicated semantic sizing.
- **Do** maintain high WCAG AA contrast against dark backgrounds.

### Don't:
- **Don't** use cartoon tooth graphics or generic smiling family stock clip art.
- **Don't** use warm sepia or pastel beige tones that dilute the high-precision digital architecture.
- **Don't** clutter screens with unformatted phone numbers or non-functional buttons.
- **Don't** use unstyled default browser alert dialogs or generic form controls.
