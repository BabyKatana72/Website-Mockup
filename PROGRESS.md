# RC Motogarage Website — Progress Log

## Current State
- Local preview: `http://127.0.0.1:8787`
- Repo: `/home/michael/portfolio/rc-motogarage-website`
- Active background HTTP server on port `8787`
- Git remote: `https://github.com/BabyKatana72/Website-Mockup.git` (branch `main`)

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
- `.gitignore`
  - Added `.hermes/`, `node_modules/`, `.env`, standard web ignores
  - Committed as `124f602`

## Deliverables

### Pitch Deck
- Path: `assets/references/pitch-deck/RC-Motogarage-Pitch-Deck.html`
- 11 slides, self-contained HTML/CSS, no external JS/CSS/Font dependencies except Google Fonts
- Font: Montserrat 400/700/800
- Palette: Night Black #0f0f0f, Charcoal #1a1a1a, Graphite #2A2A2A, RC Red #ED1C24, Off-White #FFFFFF, Muted #B8B4AE, Gold #D4AF37
- Horizontal red dividers only; no diagonal lines
- Transitions <300ms; pill CTAs
- Facts sourced from `DESIGN-BRIEF.md` and deep research
- Unverified claims marked on-slides; no invented statistics
- Rebuilt from scratch after initial deck was created

### Deep Research Dossier
- Path: `assets/references/deep-research/RC-Motogarage-Deep-Research.md`
- Cross-referenced facts only, no marketing fluff
- 9 sections with sources cited per claim
- Gaps explicitly marked "unverified"
- Verified facts: owner Reyner Alexander; HQ South Jakarta; branches in Bandung, Gading Serpong, Surabaya; brand collabs Phillip Works Nov 2023, Kremlin Dec 2024; brands carried AGV, Kushitani, HJC, Qwart, Tomica, Bilmola, XPD, Cardo, Retouch, RS Taichi; Tokopedia Jakarta store ~4.9 rating / ~10.7k reviews / ~18k units sold
- Unverified: exact founding year, national sales/market share, ISO/SNI certifications, NIB/PKP public record, nationwide presence beyond current 4 cities

### Deep Research HTML Slides
- Path: `assets/references/deep-research/RC-Motogarage-Deep-Research.html`
- 9 slides, one per major section from the markdown
- Self-contained HTML/CSS/JS; Montserrat via Google Fonts
- Slide navigation via prev/next buttons
- Fabrication-safe cache used during rebuild to avoid truncation

### Competitor Comparison (standalone)
- Path: `assets/references/deep-research/RC-Motogarage-Competitor-Comparison.md`
- Extracted `## 10) Competitor Comparison` section from deep research into standalone file
- Rewritten for readability: per-competitor bullet blocks instead of wide table
- Peer set: RC Motogarage vs Riderspot vs Juragan Helm vs Jagoan Helm vs Casco Motoworld
- Covered dimensions: geographic/offline footprint, sales channels, brand catalog breadth, campaigns/partnerships, community/social proof, operational differentiators
- All peer claims cite public sources; unverifiable items marked "unverified" or "Inference"; no rankings or winners
- Appended `## Appendix A) Online Presence Breakdown: RC Motogarage vs Market Peers`
  - Per-entity breakdown: website URL/HTTPS, Instagram, TikTok, Facebook, YouTube, other notable presence
  - Cross-entity comparison table: website completeness, multi-platform coverage, marketplace-linked shopping, content recency, booking/contact flows, community touchpoints
  - Source list at bottom

### Expansion & Opportunities
- Appended to deep research: `## 9) Expansion & Market Penetration Opportunities`
- Covers geographic expansion (Medan, Makassar, Semarang, Denpasar), digital/marketplace penetration, brand/category mix gaps, partnership levers, community/retention growth, operational/service differentiation
- Sources: BusinessWire/ResearchAndMarkets Jan 2026; Nikkei Asia 2025

## Git History (recent)
- `124f602` — Add `.gitignore` with `.hermes/` and standard ignores
- `61a7a58` — Add deep research dossier and rebuild fact-first pitch deck
- `ee3c5b4` — Pitch deck: replace diagonal dividers with horizontal lines
- `b709c69` — Deep research: append expansion & market penetration opportunities
- `1dd61b8` — Convert deep research dossier to HTML slide presentation
- `a979c32` — Fix deep research presentation: only slide 1 visible
- `d50c37d` — Deep research: correct competitors to Riderspot, Juragan Helm, Jagoan Helm, Casco Motoworld
- `e8210b6` — Sync corrected competitors to pitch deck and deep research HTML
- `caf65b4` — Deep research: append competitor comparison RC vs peers
- `fcb42f6` — Extract competitor comparison into standalone markdown file
- `a185f6c` — Rewrite competitor comparison for readability
- `4a30179` — Competitor comparison: append online presence breakdown

## Known Notes
- User wants cheap revisions through DM/messaging rather than full redraft
- Style preference: direct, non-generic feedback, “delegates immediately”
- Indonesian market; no CC; target $100–200/project
- Cute/pastel/gold cues remain where applicable, but current build follows Concept 3: Precision Garage
- Product tiles remain image-only by default
- Slide-based HTML decks must avoid `body { overflow: hidden }` unless slides are absolutely positioned inside a fixed-height container

## Possible Next Steps
- Continue header/footer polish
- Tune spacing/typography
- Resume main redesign blocks
- Add/adjust images/assets
- Build website around research insights: digital/marketplace expansion, brand mix gaps, classifieds/RCX loyalty, appointment booking, community hub

## Files Modified Recently
- `index.html`
- `css/main.css`
- `js/main.js`
- `.hermes/AGENTS.md`
- `.hermes/skills/rc-motogarage-website/SKILL.md`
- `PROGRESS.md`
- `assets/references/pitch-deck/RC-Motogarage-Pitch-Deck.html`
- `assets/references/deep-research/RC-Motogarage-Deep-Research.md`
- `assets/references/deep-research/RC-Motogarage-Deep-Research.html`
- `assets/references/deep-research/RC-Motogarage-Competitor-Comparison.md`
