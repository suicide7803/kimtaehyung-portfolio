# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

Static HTML portfolio site for theatre/musical director Kim Taehyung (김태형). No build system — each page is a self-contained HTML file with all CSS inlined in `<style>` blocks. Deployed via GitHub Pages at `suicide7803.github.io/kimtaehyung-portfolio`.

## Page Map

Two parallel design variants exist side-by-side:

| Page | Standard version | 3D / premium version |
|------|-----------------|----------------------|
| Home (작품 목록) | `index.html` | `3dindex.html` |
| Show detail (작품 상세) | `work.html` | `3dwork.html` |
| Database browser | `db.html` | `3ddb.html` |
| About | `about.html` | `3dabout.html` |

`voice-studio.html` — standalone recording quality analysis tool, light theme, unrelated to the main design system.

## Data Architecture

All show/season data lives in **two JS files** loaded as globals:

- **`db-data.js`** — Primary database (`window.SHOW_DATA` or similar). Auto-generated from PlayDB (ManNo 6372) + KOPIS cross-verification. Contains every show, season, cast, venue, and award. This file is very large (>50k tokens) — search for specific entries with Grep rather than reading the whole file.
- **`show-extras.js`** — Manually curated extras (`window.SHOW_EXTRAS`), keyed by exact Korean show title (e.g., `"신과 함께 - 이승편"`). Contains: `press` (media reviews), `audience` (viewer quotes), `photos` (production stills), and `photos_note`/`press_note` (copyright disclaimers). Only sections with data are rendered on the detail page.
- **`comments-config.js`** — Disqus shortname (`window.DISQUS_SHORTNAME = "kimtaehyung-portfolio"`). Empty string = comments hidden.

When adding a new show's supplementary content, add an entry to `show-extras.js` using the exact title string as the key.

## Design System (Dark Luxury)

All CSS is inline per page. The shared token set (copy-paste when adding a new page):

```css
:root {
  --void:#0d0b08; --panel:#161209; --panel-2:#1a150d;
  --glass:rgba(24,19,12,.55); --glass-strong:rgba(20,16,10,.78);
  --line:rgba(239,233,220,.10); --line-strong:rgba(239,233,220,.17);
  --ink:#efe9dc; --ink-dim:#a89e8a; --ink-faint:#6f6656;
  --gold:#c9a961; --gold-bright:#e0c17d; --gold-dim:#8a7442;
  --serif:"Noto Serif KR","Nanum Myeongjo",serif;
  --sans:"Pretendard","Apple SD Gothic Neo","Malgun Gothic","Segoe UI",sans-serif;
  --ease:cubic-bezier(.16,1,.3,1);
  --shadow-poster:0 30px 80px -20px rgba(0,0,0,.8),0 8px 24px rgba(0,0,0,.5);
  --glow-gold:0 0 70px rgba(201,169,97,.16);
}
```

Key design patterns:
- **Film grain overlay**: always `body::after` with inline SVG `feTurbulence`, z-index 900, opacity ~0.05, `pointer-events:none`
- **Glass nav**: `backdrop-filter:blur(20px) saturate(1.2)`, background `var(--glass)`, `border-bottom:1px solid var(--line)`
- **Gold accent** (`--gold`) is the single interactive color — links, borders, highlights
- **`--ease`** (`cubic-bezier(.16,1,.3,1)`) is the spring easing used on all transitions/animations
- **3D variant** adds `Cormorant Garamond` (italic, 300/600 weights) as a display serif and a WebGL/canvas background layer (`#stage`)

External fonts loaded via Google Fonts:
- Standard: `Noto Serif KR` (600, 900)
- 3D: `Noto Serif KR` (200, 300, 600, 900) + `Cormorant Garamond` (italic 300, regular 300/600)

External JS:
- `assets/vendor/motion.min.js` — Motion One library, used for scroll animations on the 3D pages

## Assets

- `assets/posters/` — Show posters named `<작품명>_<YYYY>.<ext>` (jpg/webp/gif/png)
- `assets/photos/<작품명>/` — Production stills, one subfolder per show
- `assets/photos/_rejected/` — Rejected stills (not displayed, keep for reference)
- Poster filenames are referenced from `db-data.js`; photo paths from `show-extras.js`

## Deployment

```bash
git add -A && git commit -m "..." && git push
```

GitHub Actions / Pages publishes the `master` branch automatically. No build step.

## Design Reference Documents

`DESIGN-lovable.md` and `DESIGN-apple.md` are detailed design system analyses (color tokens, typography scales, component specs) for Lovable and Apple respectively — use them when designing new UI elements or referencing component patterns for future design work.
