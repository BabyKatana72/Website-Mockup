# RC Motogarage — Creative Mood Concepts

## Concept 1: Asphalt Velocity
**Vibe:** High-speed night ride through downtown Jakarta — raw, kinetic energy trapped in dark surfaces.

**Palette:**
- Base: Night Black `#0f0f0f`
- Surfaces: Charcoal `#1a1a1a` / Graphite `#2A2A2A`
- Accent: RC Red `#ED1C24` (80%) + Off-White `#FFFFFF` (20%)
- Avoid: Gold in this concept; keep it single-accent red

**Key Visual Treatments:**
- Hero: Full-viewport black with a single animated diagonal red streak (15°) across lower-third, hinting at motion blur; large hero image shot from low angle with rim light, no drop shadow — implied movement only
- Background texture: Carbon fiber weave at 4% opacity over a subtle radial gradient from `#1a1a1a` (center) to `#0f0f0f` (edges)
- Typography: Hero headline Montserrat 800, uppercase, wide tracking (0.04em), no italic; accent line above in RC Red, 3px height, 180-degree rotated -12deg to reinforce diagonal
- Cards: 15px border-radius, 1px white border at 8% opacity, hover lifts 3px with red glow shadow `rgba(237,28,36,0.25)` — no texture on cards in this concept, keep clean
- Buttons: Pill-shaped (999px radius), RC Red bg, white text; secondary transparent with red border — no gold
- Nav: Sticky, glass blur 6px, red bottom border at 0.35 opacity, straight horizontal
- Section dividers: Thin red line (2px) rotated -18deg spanning full width between sections
- Imagery direction: Night-road environments, seat-level or pillion shots, rim-light only, left-aligned framing

**Primary Application:** Hero, launch announcements, homepage CTA band, footer
**Secondary Application:** Category navigation tiles (shop grid), promotional banners

---

## Concept 2: Carbon Rebellion
**Vibe:** Industrial angst meets premium streetwear — gritty campaign energy with halftone grit and deliberate imperfection.

**Palette:**
- Base: Night Black `#0f0f0f`
- Surfaces: Charcoal `#1a1a1a`
- Accent: RC Red `#ED1C24` (60%) + Gold `#D4AF37` (10%) + Off-White `#FFFFFF` (30%)
- Texture tints: Halftone dot at low opacity for industrial print feel

**Key Visual Treatments:**
- Hero: Large typographic hero with Montserrat 800 headline, possibly distressed or subtly clipped with `clip-path: polygon(...)` to introduce jagged edge on one side; background texture layer stack = film grain SVG (8%) + halftone dot pattern (3%) + charcoal gradient
- Divider shapes: Red diagonal line (3px, -25deg) with random 40px gaps to mimic perforated metal; alternate with halftone-dot horizontal bands 20px tall, 4% opacity
- Cards: 14px border-radius, no rounded corners on top-right (clip-path: polygon(0 0, 100% 0, 100% 85%, 98% 100%, 0 100%)) for asymmetric armored feel; background Graphite `#2A2A2A`; border 1px white at 8% opacity; hover diagonal slide + red border highlight on left edge only (4px)
- Product tiles: 1:1 ratio, image slightly zoomed and rotated 1.5deg clockwise; hover: diagonal translate + red glow + stencil-style price tag in Montserrat 700 uppercase with letter-spacing 0.12em
- Buttons: Primary pill RC Red; secondary transparent red border; tertiary gold text buttons for "limited edition" or "premium" labels — gold never dominates
- Nav: Sticky, glass blur 6px, red bottom border (0.35 opacity) with jagged CSS mask-image to look like torn/stamped metal
- Imagery direction: Campaign-only — grunge texture overlays acceptable, leather close-ups with creases, helmet visor reflections of neon signs, workshop tool textures
- Special treatment: "Limited drop" badge = gold pill (999px radius), Montserrat 700 uppercase, extreme tracking 0.15em, positioned top-right of card

**Primary Application:** Campaign landing sections, limited-edition product drops, About / brand story, Lookbook-style galleries
**Secondary Application:** Product cards for special collections, promotional nav highlighting drop dates

---

## Concept 3: Precision Garage
**Vibe:** Clean workshop at night — honest materials, exact specs, zero fluff, premium through restraint not flash.

**Palette:**
- Base: Night Black `#0f0f0f`
- Surfaces: Charcoal `#1a1a1a` / Graphite `#2A2A2A`
- Accent: Off-White `#FFFFFF` (60%) + RC Red `#ED1C24` (30%) + Muted Text `#B8B4AE` (10%)
- Avoid: Gold entirely in this concept; defer to red + white only

**Key Visual Treatments:**
- Hero: Editorial layout — split screen, left 55% product/spec image with hard left-align, right 45% spec list in Off-White; no gradient overlays on product image; thin red left border (2px) separating image from text
- Background texture: Single layer only — carbon fiber weave at 4% opacity default; no grain in main content
- Typography: Hero headline Montserrat 800 uppercase, wide tracking 0.04em, left-aligned; body Montserrat 400 normal case; accent words Montserrat 600 italic, sentence case in Muted Text `#B8B4AE` — used sparingly
- Cards: 15px border-radius, 1px white border at 6% opacity (thinner than other concepts), no glow on hover — instead, hard 2px red left-border appears and card lifts 2px (more mechanical, less flashy than Velvet concept)
- Product cards: 16:10 image ratio; image has clean left edge with slight metallic gradient inset on right edge to simulate studio light; price/spec lines in Montserrat 700, tight leading, Off-White on Charcoal
- Buttons: Primary pill RC Red, white text; secondary ghost — red text only, no border, hover underline appears left-aligned
- Nav: Sticky, glass blur 6px, red bottom border (0.35 opacity), hidden on scroll-down, reappears on scroll-up — functional over ornamental
- Imagery direction: Technical/spec photography — studio lighting, hard shadows, no rim light, helmet/armor/product detail on clean garage background, leather texture neutral
- Dividers: Straight horizontal red line (1px, 40% opacity) between sections, no rotation — pure functional separation

**Primary Application:** Product detail pages, shop grid, spec sheets, About / process / heritage, check-out adjacent UI
**Secondary Application:** Account/login areas, support/FAQ, modal interiors

---

## Cross-Concept Rules (Non-Negotiable)
- Montserrat weights 400/600/700/800 only; no display-font experiments
- Max 2 texture layers active per section
- No pure `#000` anywhere — always Night Black `#0f0f0f`
- Red used as accent, not dominant background
- All animations ≤ 300ms
- Text readability must maintain ≥ 4.5:1 contrast
- Buttons remain pill-shaped (999px radius) unless explicitly noted above
- Gold is secondary accent only —Gold concept may never override Red
