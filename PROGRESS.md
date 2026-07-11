# RC Motogarage Website — Progress Log

## Current State
- Local preview: `http://127.0.0.1:8787`
- Repo: `/home/michael/portfolio/rc-motogarage-website`
- Active background HTTP server on port `8787`

## Completed Changes
- Set product-teaser CTA to **Shop Now** (homepage teaser bottom CTA)
- Removed copywriting from all product cards site-wide
  - `index.html` teaser cards: image-only
  - `js/main.js` render path: image-only
- Added hard rule: **product cards must contain only the product image** unless `DESIGN-BRIEF.md` explicitly overrides
  - Saved in `.hermes/AGENTS.md` and `.hermes/skills/rc-motogarage-website/SKILL.md`
- Removed empty `.card__content` wrappers from homepage cards
- Made all product cards square via CSS (`aspect-ratio: 1 / 1`)
- Footer
  - Tightened footer spacing overall
  - Tightened Shop, Support, Company columns only
  - Reduced overall footer height slightly
- Header
  - Removed header **Shop Now** button; nav links kept intact
- Hero carousel
  - Prev arrow on left edge
  - Next arrow on right edge
  - Vertically centered arrows
  - Removed progress bar from markup, CSS, and JS
  - Removed slide indicators/dots completely
  - Arrows, autoplay, keyboard nav, touch swipe, hover-pause remain intact

## Deliverables
- Pitch deck saved at `assets/references/pitch-deck/RC-Motogarage-Pitch-Deck.html`
  - Self-contained HTML slides
  - Brand-aligned: Montserrat, night-black/charcoal/graphite, RC Red accents, gold for premium labels
  - No `.pptx` because `python-pptx` was unavailable

## Known Notes
- User wants cheap revisions through DM/messaging rather than full redraft
- Style preference: direct, non-generic feedback, “delegates immediately”
- Indonesian market; no CC; target $100–200/project
- Cute/pastel/gold cues remain where applicable, but current build follows Concept 3: Precision Garage
- Product tiles remain image-only by default

## Possible Next Steps
- Continue header/footer polish
- Tune spacing/typography
- Resume main redesign blocks
- Add/adjust images/assets
- Convert pitch deck if `python-pptx` becomes available

## Files Modified Recently
- `index.html`
- `css/main.css`
- `js/main.js`
- `.hermes/AGENTS.md`
- `.hermes/skills/rc-motogarage-website/SKILL.md`
- `assets/references/pitch-deck/RC-Motogarage-Pitch-Deck.html`
