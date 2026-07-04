# RC Motogarage — Portfolio Showcase

Lightweight single-page portfolio site with no build step. Open `index.html` directly in a browser.

## Folder structure

- `index.html` — entire site
- `assets/` — images
  - `assets/mockups/` — generated portfolio mockups
  - `assets/*.png` / `.jpg` — actual campaign visuals

## How to swap copy or images

- Brand/copy: edit the text inside `index.html`
- Images: replace files in `assets/`, keeping filenames the same, or update `src="..."` paths in `index.html`
- Colors/styles: modify `--cream`, `--sand`, `--charcoal`, `--orange`, and `--red` in the `:root` block

## Notes

- Mobile-first, works from `file://` URLs
- All sections: Home, Products, About, Contact
- Product cards use “Coming Soon” CTAs
