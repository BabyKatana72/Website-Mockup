# RC Motogarage — Inspiration Learning Report

## Images Analyzed
- `Background Inspiration (1).jpg`
- `Background Inspiration (2).jpg`
- `Background Inspiration (3).jpg`
- `Background Inspiration (4).jpg`
- `Background Inspiration (5).jpg`
- `Background Inspiration (6).jpg`

## Unified Design Style (from all 6 images)

### Core Aesthetic: **Dark Tech / Industrial Speed**

**Keywords:** Cyberpunk Industrial | Brutalist Luxury | Speed Abstract | High-Octane | Premium Streetwear | Night Riding

### Color Palette (strong consensus across all refs)

| Role | Hex/Description | Usage |
|------|-----------------|-------|
| Base BG | `#050505` - `#0f0f0f` | Hero/primary background, void depth |
| Surface | `#1a1a1a` - `#2A2A2A` | Cards, section backgrounds |
| Primary Accent | `#ff0000` - `#8a0000` | CTAs, highlights, safety signals |
| Secondary Accent | Deep crimson `#8a0303` | Gradients, shadows |
| Highlight | White/silver `#e0e0e0` | Text, metallic reflections |
| Texture Tint | Subtle gray/white halftone | Depth overlays |

**Priority adjustment for RC Motogarage:**
- 60% Warm red (`#ED1C24`) — safer, matches existing brand
- 30% Cool metallic grey/silver — industrial, steel, asphalt
- 10% Gold/warm highlights — premium finish (your stated preference)

### Composition Patterns (all images agree)

1. **Diagonal dominance** — 5/6 images use diagonal TL-BR or BL-TR lines = forward motion, speed, leaning into turns
2. **Layered depth** — 3+ layers: texture base → color bands → sharp highlights → negative space
3. **Radial convergence** — Image 6 uses center vanishing point = "tunnel vision" / focus
4. **Asymmetry** — Unbalanced, chaotic, energetic
5. **Negative space is king** — Large dark areas make accents pop

### Texture / Material Language (ALL 6 images)

| Texture Type | Symbolism | Web Application |
|-------------|----------|-----------------|
| Carbon fiber weave | Performance, protection | Subtle background overlay |
| Halftone dots | Industrial print, grit | Section dividers, footer |
| Perforated metal grid | Breathability, armor | Product card textures |
| Speed lines / streaks | Velocity | Section dividers, hover states |
| Metallic reflections | Premium finish | Nav/footer surfaces |
| Noise/grain | Authenticity, workshop | Existing `.grain` SVG already does this |

### Typography Direction (inferred, unanimous)

**Headlines:**
- Bold, condensed sans-serif
- *Bebas Neue* or *Rajdhani* or *Orbitron*
- ALL CAPS, wide tracking
- Optionally italicized to match diagonal flow

**Body:**
- Clean geometric sans-serif
- *Inter*, *Roboto*, or keep *Montserrat* (current)
- Light grey/white for max contrast

**Special treatments:**
- Stencil/distressed for campaign titles
- Metallic gradient text for premium sections
- Glitch/edge effects on hover

### Visual Mood Spectrum

| Mood | Source Image | Application |
|------|-------------|-------------|
| **Cyberpunk Night Ride** | Images 1, 5, 6 | Hero sections, product launches |
| **Grunge Rebellion** | Image 3 | Campaign banners, limited drops |
| **Brutalist Luxury** | Images 2, 4 | About, brand storytelling |
| **Precision Engineering** | Image 6 | Spec sheets, helmet/armor detail |

### Concrete Design Do's and Don'ts

**DO:**
- Use diagonal section dividers (3-4px red lines at 15-30deg angle)
- Add carbon fiber texture at low opacity (0.05-0.1) on dark surfaces
- Use "speed line" hover effects on product cards
- Layer content: grain → gradient → content
- Use sharp angles for CTAs (clip-path polygons) or keep pills for softness

**DON'T:**
- Avoid flat solid colors (always layer with texture)
- Avoid horizontal grids without diagonal tension
- Avoid pure `#000` — go `#050505` or `#0f0f0f` for richer depth
- Don't use soft pastels as primary accents (keep your gold as secondary, not main)
- Avoid cluttered layouts — these references are minimal

### How to Merge with Current Site

| Current Site | Inspiration Adds |
|-------------|------------------|
| Montserrat (400-800) | Add display font for headlines: *Bebas Neue* or *Rajdhani* |
| Red `#ED1C24` | Add gold secondary: `#D4AF37` or `#FFD700` at low opacity |
| Flat card borders | Add diagonal clip-paths or red speed-line borders |
| Square product tiles | Add hover: diagonal slide + red glow |
| Standard nav | Add blur + red bottom-border at angle |
| Film grain overlay | Add carbon fiber weave layer at 0.04 opacity |

### Recommended Next Steps for Creative Agent

1. **Immediate:** Extract dominant colors from each image using a palette tool and save to `/color-palettes/`
2. **This week:** Create 3 hero section concepts combining site's red + inspiration's diagonal/grain style
3. **Save:** Download 10-15 motorcycle/helmet/leather close-up images from reference sites into `/competitors/`
4. **Build:** A "design system" page showing the merged color, type, and texture system
