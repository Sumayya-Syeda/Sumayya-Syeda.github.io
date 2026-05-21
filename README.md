# Personal Website — sumayya-syeda.github.io

Astro + Tailwind. Static site, designed for GitHub Pages.

## Preview locally

```bash
npm install     # first time only
npm run dev     # opens http://localhost:4321
npm run build   # produces dist/ — also runs in CI
```

## Structure

```
src/
  pages/
    index.astro      # Landing: about hero + vertical roadmap
    projects.astro   # Project grid
    resume.astro     # Resume preview + download
    contact.astro    # Contact links
  components/
    Nav.astro
    Footer.astro
    RoadmapStop.astro
    ProjectCard.astro
  layouts/
    Layout.astro     # Shared shell, fonts, scroll-reveal observer
  data/
    roadmap.ts       # Three locations + nested events (Bay Area, Pittsburgh, San Diego)
    projects.ts      # College projects
  styles/
    global.css       # Tailwind base + reveal animation
public/
  favicon.svg
  sumayya-syeda-resume.pdf   # ← needs to be added (placeholder shown until then)
```

## Placeholders to swap before publishing

Search for `[Placeholder` or `placeholder` in the codebase. Quick list:

1. **Hero photo** — `src/pages/index.astro`, the `photo` circle. Drop an image into `public/` and replace the div with `<img>`.
2. **Bio paragraph** — `src/pages/index.astro`, the two paragraphs marked `[Placeholder bio]`.
3. **Apple role description** — `src/data/roadmap.ts`, the San Diego entry under `events[0].summary`.
4. **Public email** — `src/pages/contact.astro`, the `Email` entry.
5. **Photography site URL** — `src/pages/index.astro`, the `Photography ↗` link.
6. **Resume PDF** — drop the consolidated PDF at `public/sumayya-syeda-resume.pdf`.

## Color & type tokens

Defined in `tailwind.config.mjs`:

- `paper` (warm off-white background)
- `ink` (text — DEFAULT, muted, faint)
- `accent` (cool ocean blue, soft variant)
- Fonts: `Inter` (sans), `Source Serif 4` (display), `JetBrains Mono` (labels)

Swap the accent color or fonts in one place to re-skin the site.

## Deploying

A GitHub Actions workflow lives at `.github/workflows/deploy.yml` and is **not yet active**. Do not push to GitHub or enable Pages until the site is approved for publishing.

When ready:

1. Create the repo `sumayya-syeda.github.io` on GitHub.
2. Push this directory to `main`.
3. In the repo's **Settings → Pages**, set **Source** to **GitHub Actions**.
4. The workflow will deploy automatically on each push to `main`.
