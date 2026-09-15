# AnimeMiniGames - One Piece Character Draft Builder

A browser draft game: build an original "strongest possible character" by harvesting **one trait per round** from 4 donor options, over **8 rounds** (Body → Armament → Observation → Conqueror's → Devil Fruit → Weapon → Intelligence → Battle IQ). Final builds resolve to **7 stats** (STR/ATK/DUR/DEF/SPD/AWR/STA) and rank live against all **184** roster characters. Rank-only results - raw numbers stay hidden.

Stack: Astro 7 + Svelte 5 + Tailwind CSS v4 + TypeScript (strict), client-side only. Package manager: **Bun**.

## Commands

| Command                                            | Action                                |
| :------------------------------------------------- | :------------------------------------ |
| `bun install`                                      | Install dependencies                  |
| `bun dev`                                          | Dev server at `localhost:4321`        |
| `bun run build`                                    | Production build to `./dist/`         |
| `bun run preview`                                  | Preview the build locally             |
| `bun run tsc --noEmit`                             | Typecheck                             |
| `bun run lint`                                     | ESLint                                |
| `bun run lint:fix`                                 | ESLint with autofix                   |
| `bun run format`                                   | Prettier write                        |
| `bun src/games/one-piece-draft/scripts/rank-v2.ts` | Regenerate rankings from current data |

After data or formula changes: regen rankings → `tsc` → `lint:fix` → `format` → `lint` → sanity drafts → `build`.

## Project Structure

Per-game folders: each game owns its code, data, scripts and docs under
`src/games/[slug]/`. Routes are thin wrappers under franchise hubs
(`src/pages/[franchise]/[slug]/`). Shared chrome stays at `src/` top level.

```text
src/
├── pages/                   # hub index.astro, preview/a.astro
│   ├── one-piece/index.astro      # franchise hub (SEO: one piece games)
│   └── one-piece/draft/
│       ├── index.astro      # landing (SEO owner, P1 query)
│       ├── play.astro       # game + SEO footer (indexed, self-canonical)
│       └── how-to-play|rankings|characters.astro
├── games/one-piece-draft/
│   ├── components/    # DraftGame, RoundScreen, CharacterCard, DraftPicks,
│   │                  # ResultScreen, RerollButton (Svelte)
│   ├── lib/           # draft.ts (rolls, guarantees, math, ranking),
│   │                  # types.ts, preload.ts
│   ├── data/          # characters-v2.ts (184 hand-tuned), image-urls.json
│   ├── stores/        # draft.ts - Svelte draft state store
│   ├── assets/        # thumbnails-optimized/ (Cloudinary upload source)
│   ├── scripts/       # rank-v2.ts (imports the lib's BST - no copy)
│   └── docs/          # CORE_IDEA, Rounds, *_REVIEW, MISPLACED, RARITY_REVIEW,
│                      # Rankings-v2.md (generated - read, don't hand-edit)
├── components/NavBar.svelte  # shared chrome
├── layouts/Layout.astro      # shared chrome (SEO props)
├── lib/cloudinary.ts         # generic uploader
└── assets/ancient_bg.avif    # site OG master
```

## Docs

- `src/games/one-piece-draft/docs/CORE_IDEA.md` - game design (rounds, rarity, formula)
- `src/games/one-piece-draft/docs/Rounds.md`, `design.md` - round spec, visual design system
- `src/games/one-piece-draft/docs/*_REVIEW.md`, `MISPLACED.md`, `RARITY_REVIEW.md` - canon audit trails
