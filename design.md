# Anime Draft - Design System ("Wanted Poster")

Selected from three style previews (`src/pages/preview/`). A playful,
childish pirate-cove look: parchment canvas, thick ink outlines, hard
sticker shadows, tilted badges, toy-like press-down buttons. Every surface
feels cut from paper and glued on slightly crooked - on purpose.

## Philosophy

- **Sticker book, not software.** No gradients, no glass, no mesh, no
  atmospheric backdrops. Depth comes from solid offset shadows, never blur.
- **Ink outlines everything.** Interactive and card surfaces carry a 3–4px
  ink-brown border. If it has no outline, it isn't clickable or isn't a card.
- **Crooked is correct.** Badges and feature cards rotate −2°…2°. The page
  should feel hand-placed, never grid-perfect.
- **Buttons are toys.** Every CTA squishes on press (translate + shadow
  collapse). A button that doesn't react to pressing is broken.
- **Pirate voice.** Copy talks like a cheerful pirate ("Draft yer own
  pirate!", "Set sail →"). Emoji lead badges, chips and CTAs (⚓ 🏴‍☠️ 🎲 👑).
- **Readable first.** Body copy is large, rounded, high-contrast Fredoka -
  childish but never at legibility's expense.

## Colors

| Token       | Hex       | Role                                                             |
| ----------- | --------- | ---------------------------------------------------------------- |
| `parchment` | `#f5e9d4` | Page canvas. Warm paper floor of every surface.                  |
| `ink`       | `#3a2a18` | Text, borders, shadow color. Dark warm brown - never pure black. |
| `coral`     | `#aa2d00` | Primary action + alert accents (banners, primary CTA).           |
| `forest`    | `#0a2e0e` | Signature dark card surface. Deep green, white type inside.      |
| `yellow`    | `#f4d35e` | Highlights: badges, secondary CTAs on dark, bounty pills.        |
| `white`     | `#ffffff` | Cards, secondary buttons, banner pills.                          |
| `on-dark`   | `#ffffff` | Type on forest/coral surfaces.                                   |

Rules:

- Text on parchment is always `ink`. Text on forest/coral is always white.
- Yellow never carries body copy - badges and buttons only, with `ink` text.
- Ink is the _only_ border and shadow color on light surfaces.
- Chips on dark surfaces use translucent white borders (`white/40`).

## Typography

| Role                    | Font                                    | Use                                                             |
| ----------------------- | --------------------------------------- | --------------------------------------------------------------- |
| Display / headings      | Peralta (`font-hand`), 400              | H1 hero (text-6xl), section titles (text-4xl), brand (text-3xl) |
| Body / buttons / labels | Fredoka 400–700 (`.font-playful` scope) | Everything else. Bold (600–700) for buttons, summaries, badges. |

- Package: `@fontsource/peralta` + `@fontsource/fredoka` (400/500/600/700).
- Fredoka fallback: `ui-rounded, system-ui, sans-serif`.
- Buttons and summaries are always bold. Body copy defaults to 400 at
  base-to-lg sizes - large by default (nothing below `text-sm` carries
  meaning).
- Letter-spaced uppercase (`tracking-widest`/`0.2em`) marks badges and
  eyebrow labels only.

## Elevation & Motion

Hard offset shadows only - `Npx Npx 0 ink`, no blur, no spread:

| Shadow | Use                                              |
| ------ | ------------------------------------------------ |
| `4px`  | Small cards (`details` Q&A), badges next to text |
| `6px`  | Primary/secondary buttons                        |
| `8px`  | Signature dark card                              |

Press states (all buttons): `active:translate-x-1 active:translate-y-1`
plus shadow collapse (`active:shadow-none`). The toy squish is mandatory.

Tilt: `rotate-2` / `-rotate-2` on badges and banners, `rotate-[-0.5deg]`
on the signature card. Never tilt body copy or form controls.

No hover styling beyond what exists. No entrance animations on content
pages (the game rounds keep their own reveal choreography).

## Shapes

- `rounded-lg` (8px): badges, small chips.
- `rounded-2xl` (16px): buttons, Q&A cards.
- `rounded-3xl` (24px): signature dark card.
- `rounded-full`: pills (bounty badge), avatars.
- Borders: 2px chips on dark, 3px cards/badges, 4px buttons/nav/footer/
  signature card.

## Components

**Nav** - parchment, `border-b-4 ink`. Brand in Peralta 3xl. Right slot
holds one tilted yellow badge (page label) or the section CTA.

**Banner pill** - white, 3px coral border, coral bold uppercase text,
`-rotate-2`. Announces the page (`★ Wanted ★ Dead or alive ★`).

**Button primary** - coral bg, white bold text, 4px ink border,
`rounded-2xl`, 6px hard shadow, squish on press.

**Button secondary** - white bg, ink bold text, same border/radius/shadow
as primary. The pair always appears together (play + how-to-play).

**Button on dark** - yellow bg, ink bold text, 4px ink border. Lives
inside the forest card only.

**Signature dark card** - forest bg, white type, 4px ink border,
`rounded-3xl`, 8px shadow, `-0.5deg` tilt. Holds the eyebrow pill, Peralta
h2, supporting copy, translucent chips, and the on-dark button.

**Info chips** - translucent white border pills on dark; solid bordered
pills on light. Emoji + short label.

**Q&A card** - white, 3px ink border, `rounded-2xl`, 4px shadow. Bold
summary, regular answer.

**Footer** - parchment, `border-t-4 ink`, small centered type.

## Layout

- Max content `max-w-5xl` (game-flavored pages), `max-w-3xl` for reading
  pages (guides, Q&A).
- Hero: centered, eyebrow pill → Peralta H1 → lede → button pair.
- Rhythm: hero → signature dark card → content → footer. One dark card
  per viewport, never two in a row.
- Grids collapse to single column on mobile; shadows shrink to 4px under
  `md` where they feel heavy.

## Voice & Emoji

- Cheerful pirate, never corporate: "Draft yer own pirate!", "Tavern
  talk", "Read the map", "Set sail →".
- Emoji lead chips, badges and playful CTAs - never inside body sentences
  except Q&A answers where the joke lands.
- Numbers get pirate flavor where free (bounty pill, "184 sea dogs").

## Do's and Don'ts

- Do keep ink as the only outline/shadow color on light surfaces.
- Do squish every button on press - no exceptions.
- Do tilt badges and the signature card; don't tilt body copy.
- Don't add gradients, blur shadows, or glassmorphism anywhere.
- Don't use pure black (`#000`) for text or borders - ink brown only.
- Don't use pill radius on main CTAs (`rounded-2xl`, not full) - pills
  are for badges and chips.
- Don't place two dark cards adjacently; parchment must reset between.
- Don't shrink body copy below `text-sm`, and keep answers at base.
