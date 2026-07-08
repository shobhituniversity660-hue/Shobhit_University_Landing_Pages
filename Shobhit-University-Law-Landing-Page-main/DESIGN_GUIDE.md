# Shobhit University Landing Page — Design & Brand Guide

This document defines the brand style, layout rules, color palettes, typography specs, and spacing guidelines for Shobhit University landing pages. Share this guide with any developer, designer, or builder to ensure pixel-perfect brand consistency.

---

## 1. Typography & Web Fonts

We use a carefully curated set of typography assets from **Google Fonts** and **Fontshare** to establish a modern, clean, academic-yet-progressive aesthetic.

### Font Imports
Ensure the following font stylesheets are imported in the main CSS file (e.g., `src/index.css`):

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,600;1,400;1,600;1,700&display=swap');
@import url('https://api.fontshare.com/v2/css?f[]=excon@500,700,900&f[]=ranade@300,400,500&display=swap');
```

### Font Families Mapping (Tailwind Setup)
*   **`font-sans`** (General UI/Interface Elements): `"Inter"`, sans-serif
*   **`font-display`** (Alternate modern headers): `"Outfit"`, sans-serif
*   **`font-serif`** (Editorial/Accents): `"Playfair Display"`, serif
*   **`font-excon`** (Primary Heading Font - **Modern Geometric Serif/Sans hybrid aesthetic**): `"Excon"`, sans-serif
*   **`font-ranade`** (Primary Body & Copy Font - **Super elegant, highly readable geometric sans**): `"Ranade"`, sans-serif

---

## 2. Color System

Our color scheme combines prestigious academic forest emeralds, deep trust navies, and sleek, high-contrast greyscale neutrals.

| Color Token | Hex Code | Tailwind Usage | Typical Use Case |
| :--- | :--- | :--- | :--- |
| **University Forest Green (Primary)** | `#116446` | `bg-izee-red`, `text-izee-red` | Primary branding accents, badges, highlight lines, success indicators. |
| **University Forest Green Hover** | `#0d4e36` | `hover:bg-izee-red-hover` | Button hover states. |
| **Deep Trust Navy** | `#0B1E33` | `text-[#0B1E33]` | Primary title headings. |
| **Rich Charcoal Dark** | `#111111` | `text-izee-black` | Core brand text headers and heavy card backgrounds. |
| **High-Contrast Dark Gray** | `#18181B` | `text-zinc-900` | Sub-headings and active UI titles. |
| **Elegant Slate Body Gray** | `#52525B` | `text-zinc-600` | High-readability body paragraphs. |
| **Muted Caption Zinc** | `#71717A` | `text-zinc-500` / `text-zinc-550` | Captions, dates, and secondary indicators. |
| **Off-White Canvas Backplate** | `#FAFAFA` | `bg-zinc-50` | Secondary zebra-striping section backgrounds. |
| **Pristine White** | `#FFFFFF` | `bg-white` | Cards, hero containers, dropdown menus. |

---

## 3. Typographic Hierarchy & Line Heights

To maintain high legibility and elegant editorial weight, headings and body copies strictly adhere to the following configurations:

### Section Headings
*   **Font Family:** `font-excon`
*   **Weight:** `font-normal` (Prestige elegance over bold heavy blockiness)
*   **Size (Mobile/Desktop):** `text-2xl sm:text-3xl md:text-4xl` (Or explicitly `fontSize: "36px"` on large views)
*   **Line Height:** Explicitly **`lineHeight: "40px"`** to avoid tight character overlaps.
*   **Letter Spacing:** `tracking-tight`

### Section Body / Paragraph Text
*   **Font Family:** `font-ranade`
*   **Weight:** `font-light`
*   **Size:** **`fontSize: "14px"`** (or `text-sm`)
*   **Line Height:** **`lineHeight: "26px"`** (highly readable line spacing for screen reading)
*   **Text Color:** `text-zinc-600` (for light backgrounds) or `text-zinc-400` (for dark backgrounds)

### Section Badge Markers (Kickers)
*   **Font Family:** `font-mono` or `font-excon font-bold`
*   **Size:** `text-[10px]` or `text-xs`
*   **Casing:** `uppercase`
*   **Letter Spacing:** `tracking-widest` or `tracking-wider`
*   **Padding:** `px-2.5 py-1` or `px-3 py-1`
*   **Styling:** Embedded within a pill with `bg-izee-red/10` and `text-izee-red`.

---

## 4. Spacing & Container Architecture

Consistent spatial rhythms prevent cognitive fatigue and make the page feel luxurious and clean.

### Core Containers
All layout sections use a centralized grid layout limiting text sprawl on ultra-wide monitors:
```tsx
<section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id="section-id">
  <div className="max-w-7xl mx-auto">
    {/* Content goes here */}
  </div>
</section>
```

### Padding & Margins Standards
*   **Vertical Section Spacing:** `py-24` (96px) on desktop to give each major section breathing room.
*   **Card Grid Spacing:** `gap-8` (32px) for structural bento configurations, and `gap-6` (24px) for small utility grids.
*   **Inner Card Padding:** `p-6 sm:p-8` (24px - 32px) to prevent element-to-border crowding.
*   **Section Header Bottom Margin:** `mb-16` (64px) between the intro group and grid elements.

---

## 5. Visual Utilities & Accents

We use specific design classes to introduce high-fidelity depth:

### Glassmorphism Effects (White Canvas)
```css
.glass-effect {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.4);
}
```

### Glassmorphism Effects (Dark Canvas)
```css
.dark-glass-effect {
  background: rgba(17, 17, 17, 0.8);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
}
```

### Border Radii System
To match modern luxury landing layouts, we maintain a soft but defined edge:
*   **Interactive Cards / Interactive Modules:** `rounded-xl` (12px radius) or `rounded-2xl` (16px radius)
*   **Embedded Media & Banners:** `rounded-md` (6px radius) as standard
*   **Buttons / Micro Pills:** `rounded-full` (capsule radius) or `rounded-lg` (8px radius)

### Transitions & Hovers
To guarantee intuitive interactive responses:
*   Include transitions on all hover states: `transition-all duration-300`
*   Use subtle scales or translated positions for tactile feedback: `hover:shadow-md hover:-translate-y-0.5`
