# Inspiration Folder Analysis — RC Motogarage Design References

## Files Found (6 images in `/assets/references/inspiration/`)

| File | Size | Likely Content |
|------|------|----------------|
| Background Inspiration (1).jpg | 25 KB | Lightweight texture/pattern |
| Background Inspiration (2).jpg | 16 KB | Minimal texture/gradient |
| Background Inspiration (3).jpg | 121 KB | Detailed composition/photo |
| Background Inspiration (4).jpg | 53 KB | Medium complexity |
| Background Inspiration (5).jpg | 64 KB | Medium complexity |
| Background Inspiration (6).jpg | 105 KB | Detailed composition/photo |

## Inferred Design Direction (from filenames + existing site + user prefs)

### Visual Style
- **Dark, moody atmospheres** — filenames suggest "background" references, implying texture/atmosphere over UI layouts
- **Film grain / gritty textures** — aligns with current site's SVG grain overlay (opacity 0.08)
- **Industrial / raw aesthetic** — motorcycle culture leans raw, mechanical, authentic

### Color Palette (extrapolated from user prefs + live site)
| Role | Current Site | User Preference | Inspiration Likely Adds |
|------|--------------|-----------------|------------------------|
| Primary BG | `#141414` | Dark | Deeper blacks, charcoal gradients |
| Surface | `#1E1E1E` | Dark | Textured dark surfaces |
| Accent | `#ED1C24` (red) | Red + **gold** | Gold highlights, warm metallics |
| Muted | `#B8B4AE` | Pastel | **Pastel accents** (dusty rose, sage, warm sand) |
| Highlight | — | **Gold** | Gold foil, brass, warm metal tones |

### Composition Patterns (inferred)
1. **Full-bleed atmospheric backgrounds** — hero sections with textured darkness
2. **Layered depth** — grain + gradient + content layers
3. **Asymmetric focus** — product imagery offset, not centered
4. **Negative space** — breathing room around key elements

### Typography Mood
- **Bold, industrial sans** — Montserrat 800/700 fits (current)
- **Wide tracking on labels** — current `.label` uses `letter-spacing: .12em`
- **Italic accent words** — current `.hero .accent` uses `font-style: italic`

### Motorcycle-Specific Visual Language
- **Materials:** carbon fiber, brushed metal, leather grain, matte rubber
- **Lighting:** rim lights, edge highlights, dramatic shadows
- **Details:** stitching, perforations, vent patterns, logo embossing
- **Environments:** garage/workshop, track, night roads, industrial spaces

## Recommendations for Creative Agent

### Immediate Additions to Inspiration Folder
```
inspiration/
├── background-textures/     ← Move the 6 BG files here
├── hero-compositions/       ← Full-screen hero layouts
├── product-display/         ← Product card/grid patterns
├── typography-treatments/   ← Type hierarchies, expressive type
├── color-applications/      ← Red/gold/pastel in dark UI
├── micro-interactions/      ← Hover states, transitions
└── brand-touchpoints/       ← Instagram, packaging, print
```

### Style Keywords to Tag Future References
- `#dark-mode` `#film-grain` `#industrial` `#motorcycle-culture`
- `#red-accent` `#gold-accents` `#pastel-highlights`
- `#montserrat` `#bold-typography` `#asymmetric-layout`
- `#premium-feel` `#authentic` `#gritty-luxe`

## Next Steps
1. **Rename files** descriptively (e.g., `bg-grain-charcoal.jpg`, `bg-gradient-red-gold.jpg`)
2. **Add metadata** — create `inspiration/manifest.json` with tags per image
3. **Collect more** — competitor hero sections, e-commerce product grids, dark-mode dashboards
4. **Extract palettes** — use tool to pull dominant colors from each image into `color-palettes/`