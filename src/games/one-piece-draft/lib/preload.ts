import { Characters } from "../data/characters-v2";

/** Give up waiting for one card's real art and lock anyway. */
export const REAL_ART_CAP_MS = 1000;

/**
 * Warm the browser (HTTP disk) cache for a URL set.
 * Resolves only after EVERY url settles (load or error) - the round
 * does not start until then. Failures just mean that face may pop in
 * late; existing fallbacks cover it. Never rejects.
 */
export function preloadImages(
  urls: string[],
  onProgress?: (loaded: number, total: number) => void,
): Promise<void> {
  const unique = [...new Set(urls.filter(Boolean))];
  if (unique.length === 0) {
    onProgress?.(0, 0);
    return Promise.resolve();
  }

  let settled = 0;
  const tick = () => {
    settled += 1;
    onProgress?.(settled, unique.length);
  };

  // No timeout cap: the round waits for every image. Errors settle
  // immediately (offline/dead link resolves fast, never hangs) and the
  // browser itself eventually times out truly-stalled requests.
  return Promise.allSettled(
    unique.map(
      (src) =>
        new Promise<void>((res) => {
          const img = new Image();
          const settle = () => {
            tick();
            res();
          };
          img.onload = settle;
          img.onerror = settle;
          img.src = src;
        }),
    ),
  ).then(() => undefined);
}

/**
 * Fixed decoy cast: 15 recognizable mid-tier faces, no god-tier
 * (decoys shouldn't imply the option). Cycled every round.
 * Overlap with real options is allowed - a decoy may flash a real face.
 */
export const FIXED_DECOY_IDS = [
  "portgas-d-ace",
  "crocodile",
  "donquixote-doflamingo",
  "boa-hancock",
  "jinbe",
  "nico-robin",
  "franky",
  "brook",
  "nami",
  "usopp",
  "tony-tony-chopper",
  "smoker",
  "enel",
  "buggy-the-star-clown",
  "charlotte-katakuri",
];

/** Resolve the fixed decoy cast to image URLs (stable order). */
export function getFixedDecoyURLs(): string[] {
  const byId = new Map(Characters.map((c) => [c.id, c]));
  return FIXED_DECOY_IDS.map((id) => byId.get(id)?.imageURL).filter((u): u is string => Boolean(u));
}

/** Every roster face - background-warmed once so later rounds open instantly. */
export function getAllImageURLs(): string[] {
  return Characters.map((c) => c.imageURL).filter((u): u is string => Boolean(u));
}
