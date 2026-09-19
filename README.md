# AnimeMiniGames - Free Anime Minigames in the Browser

Free browser minigames, no download, no account. Live now: three One Piece games
(draft, blind rank, highest bounty) plus a 184-character roster page. Naruto,
Hunter x Hunter and Jujutsu Kaisen are charted next.

Stack: Astro 7 + Svelte 5 + Tailwind CSS v4 + TypeScript (strict), client-side only.
Package manager: **Bun**.

## Commands

| Command                        | Action                                                |
| :----------------------------- | :---------------------------------------------------- |
| `bun install`                  | Install dependencies                                  |
| `bun dev`                      | Dev server at `localhost:4321`                        |
| `bun run build`                | Production build to `./dist/`                         |
| `bun run preview`              | Preview the build locally                             |
| `bun run check`                | Typecheck (svelte-check: `.astro`, `.svelte`, `.ts`)  |
| `bun run lint`                 | ESLint                                                |
| `bun run lint:fix`             | ESLint with autofix                                   |
| `bun run format`               | Prettier write                                        |
| `bun run format:check`         | Prettier check                                        |
| `bun test`                     | Unit tests (Bun)                                      |
| `bun scripts/keyword-audit.ts` | SEO audit from built HTML (writes `KEYWORD_USAGE.md`) |

After changes: `lint:fix` → `format` → `lint` → `check` → `test` → `build` → `keyword-audit`.
After data or formula changes, first regen rankings:
`bun src/games/one-piece-draft/scripts/rank-v2.ts`.

## Project Structure

Per-game folders: each game owns components, lib, data and docs under
`src/games/[slug]/`. Routes are thin SEO wrappers, one flat file per page:
`src/pages/[franchise]/[slug].astro`. Shared chrome stays at `src/` top level.

```text
src/
├── pages/
│   ├── index.astro              # brand hub (SEO: anime minigames)
│   ├── 404.astro                # dead-end page (noindex, off sitemap)
│   ├── one-piece/index.astro    # franchise hub (SEO: one piece games)
│   ├── one-piece/draft.astro    # draft game + guide + FAQ (P1 query)
│   ├── one-piece/characters.astro # 184-character roster (franchise magnet)
│   ├── one-piece/blind-rank.astro # blind ranking game + FAQ
│   ├── one-piece/bounty.astro   # highest-bounty game + FAQ
│   └── preview/a.astro          # style preview (noindex, off sitemap)
├── games/
│   ├── one-piece-draft/         # components, lib, data (184), scripts, docs
│   ├── one-piece-blind-rank/    # components, lib
│   └── one-piece-bounty-path/   # components, lib, data (7 paths), docs
├── components/                  # NavBar, WantedPoster, GameModeCard (shared)
├── layouts/Layout.astro         # per-page SEO props (title, description, canonical)
├── lib/cloudinary.ts            # generic uploader
└── assets/                      # site OG master, franchise art
scripts/keyword-audit.ts         # keyword counts + SEO gates (H1, FAQ/JSON-LD sync)
Keywords.md / KEYWORD_USAGE.md   # keyword strategy (one URL per term) + audit output
design.md                        # visual design system (all components follow it)
```

## Conventions

- **SEO per game page**: what-it-is + how-to-play + FAQ on the page itself, ~900–1300
  body words, exactly one `h1` (`h2` for sections). Static `FAQPage` JSON-LD must
  mirror visible answers exactly - `keyword-audit.ts` fails loudly on drift.
- **Keywords**: every term maps to exactly one URL (`Keywords.md`) - no two pages
  target the same query. New pages need audit-map + strategy entries.
- **Shared surfaces stay franchise-neutral** (404, homepage hubs); same-franchise
  cross-links are fine. Marketing pages use neutral voice; game text keeps flavor.
- **Sitemap** is auto-generated on build; `noindex` routes are filtered out in
  `astro.config.mjs`. No SSR adapter - static output only, so no `500.astro`.
- TypeScript strict, `type` over `interface`, descriptive names, comments explain
  the _why_. See `AGENTS.md` for the full working agreement.
