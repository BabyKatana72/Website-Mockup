# RC Motogarage — Design Brief

## Project Context
- **Brand:** RC Motogarage — premium motorcycle gear & apparel retailer in Indonesia
- **History:** Founded as a single workshop, grew into household name across Greater Jakarta
- **Tone:** Bold, authentic, community-driven, high-performance
- **Audience:** Real Indonesian riders — not posers
- **Deliverables:** Website, campaign visuals, social assets, packaging

---

## 1. Brand Identity

### Colors
| Role | Hex | Usage |
|------|-----|-------|
| Night Black | `#0f0f0f` | Primary background — warmer than pure black |
| Charcoal | `#1a1a1a` | Cards, surfaces, elevated sections |
| Graphite | `#2A2A2A` | Hover states, secondary surfaces |
| RC Red | `#ED1C24` | CTAs, accents, tags, active states |
| Off-White | `#FFFFFF` | Headlines, headings |
| Muted Text | `#B8B4AE` | Body copy, secondary text |
| **Gold** | `#D4AF37` | Premium accents, badges, limited editions |

**Rules:**
- Never use pure `#000` — always warm it toward `#0f0f0f`
- Red is brand anchor — use it sparingly for maximum impact
- Gold is secondary accent only — never override red
- Muted text at 85-92% opacity for warmth

### Typography
| Hierarchy | Font | Weight | Treatment |
|-----------|------|--------|-----------|
| Hero / Display | Montserrat | 800 | Uppercase, wide tracking (0.04em) |
| Section Headers | Montserrat | 700-800 | Uppercase, tight leading |
| Labels / Meta | Montserrat | 700 | Uppercase, extreme tracking (0.12em) |
| Body | Montserrat | 400 | Normal case, comfortable leading |
| Accent Words | Montserrat | 600 | Italic, sentence case |

**Rules:**
- One font family: Montserrat only (no display-font experiments without approval)
- Font loading: Google Fonts preconnected with `display=swap`
- Min weights loaded: 400, 600, 700, 800

### Texture System
| Layer | Asset | Opacity | Purpose |
|-------|-------|---------|---------|
| Base | Solid dark color | 100% | Background |
| Depth | Carbon fiber weave | 0.04 | Subtle surface texture |
| Atmosphere | Halftone dot pattern | 0.03 | Industrial print feel |
| Grit | Film grain SVG | 0.08 | Authenticity, workshop feel |

**Rules:**
- Max 2 texture layers active per section
- Textures must NEVER reduce text readability
- All textures via CSS/SVG — no raster texture images on web

---

## 2. Visual Language

### Geometry & Layout
- **Diagonal tension** preferred over horizontal grids
- Asymmetric compositions feel more energetic than centered
- Minimum 3-4 accent elements using red per section (CTA, label, divider, hover state)
- Section dividers: diagonal red lines at 15-30 degrees where possible

### Cards & Surfaces
- Border-radius: 14-16px (soft but not pill-shaped, feels armored)
- Border: 1px white at 8% opacity for definition
- Hover: translateY(-3px) + red glow shadow `rgba(237, 28, 36, 0.25)`
- Background: elevated surface one level darker than parent

### Buttons
- **Primary CTA:** Pill-shaped (999px radius), RC Red bg, white text, uppercase, bold
- **Secondary:** Transparent bg, red border, red text
- **Text buttons:** Red only, no underline, hover: underline
- All buttons: letter-spacing 0.04em, font-weight 700

### Imagery Direction
- High contrast, moody lighting
- Rim lights, edge highlights, dramatic shadows
- Environments: garage, night road, industrial space
- Products shot with "speed line" or diagonal angle preferred
- Grunge texture acceptable for campaigns, clean for product shots

---

## 3. Motion & Interaction

### Hover Patterns
| Element | Effect |
|---------|--------|
| Cards | Lift up 3px + red glow |
| Product tiles | Diagonal slide + red border highlight |
| Nav links | Color swap to red + underline |
| CTAs | Slight scale (1.02) + deeper red bg |

### Page Transitions
- Smooth scroll (`scroll-behavior: smooth`) on HTML
- No animation on initial load (instant render)
- Max transition duration: 300ms (faster = snappier)

---

## 4. Component Cheat Sheet

| Component | Spec |
|-----------|------|
| Nav | Sticky, glass blur (6px), red bottom border (0.35 opacity) |
| Hero min-height | 100vh on desktop, auto on mobile |
| Section padding | 6rem vertical desktop, 4rem tablet, 3rem mobile |
| Grid gap | 1-2rem |
| Max content width | 1200px (92% width) |
| Card image ratio | 16:10 for product cards, 1:1 for tiles |
| Pill CTA padding | 0.9rem 1.4rem |

---

## 5. Do's and Don'ts

### DO
- Use diagonal section dividers
- Layer grain + gradient for depth
- Use red as single accent color (no multicolor accents)
- Use uppercase for labels/nav, sentence case for body
- Add subtle glow effects on hover (max 25% opacity)
- Trust negative space — dark backgrounds make content pop
- Use red sparingly (60% of red = brand anchor, 40% = accent)

### DON'T
- Don't use pure black `#000`
- Don't layer more than 2 textures per section
- Don't add soft pastels as primary accents (gold = secondary only)
- Don't use rounded corners > 20px (feels cheap)
- Don't clutter — one focal point per section
- Don't use drop shadows that aren't red-tinted
- Don't center-align headlines left-aligned = industrial feel

---

## 6. Design Mood Spectrum

Pick the mood based on section purpose:

| Mood | Use For | Key Visual |
|------|---------|------------|
| **Night Ride** | Hero, launches | Deep black, neon red streaks |
| **Rebellion** | Campaigns, drops | Grunge texture, halftone, diagonal shards |
| **Precision** | Specs, product detail | Carbon fiber, clean lines, white text |
| **Workshop** | About, process | Grain, industrial, muted palette |

---

## 7. References

- **Brand Assets:** `/assets/references/brand-assets/`
- **Inspiration Analysis:** `/assets/references/inspiration/VISION-ANALYSIS.md`
- **Live Specimen:** `index.html`, `shop.html`
- **Font:** [Montserrat on Google Fonts](https://fonts.google.com/specimen/Montserrat)

---

## 8. Quick Start Checklist

Before delivering any design:
- [ ] Colors match the approved palette
- [ ] Typography uses Montserrat only
- [ ] Max 2 texture layers per section
- [ ] No pure black anywhere
- [ ] Red used as accent, not dominant background
- [ ] Buttons are pill-shaped (unless brief says otherwise)
- [ ] Section padding follows spec
- [ ] Images have rim light / diagonal angle
- [ ] Hover effects are snappy (<300ms)
- [ ] Readability test passes (contrast ratio ≥ 4.5:1)
