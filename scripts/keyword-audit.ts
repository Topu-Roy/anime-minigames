import { readFileSync, writeFileSync, existsSync } from "fs";

// Keyword → pages audit. Counts case-insensitive occurrences in rendered
// HTML (scripts/styles stripped, tags stripped). Run from repo root after
// `bun run build`. Output: KEYWORD_USAGE.md
const pages: Record<string, string> = {
  "/": "dist/index.html",
  "/one-piece": "dist/one-piece/index.html",
  "/one-piece/draft": "dist/one-piece/draft/index.html",
  "/one-piece/draft/how-to-play": "dist/one-piece/draft/how-to-play/index.html",
  "/one-piece/draft/characters": "dist/one-piece/draft/characters/index.html",
};

const keywords: Record<string, string[]> = {
  P1: [
    "one piece draft game",
    "best one piece game",
    "build your own pirate",
    "build your own one piece character",
  ],
  Hub: ["animeminigames", "anime mini games", "anime minigames", "free anime minigames"],
  P1F: ["one piece games", "one piece minigames", "naruto"],
  P2: ["strongest one piece characters ranked", "strongest one piece characters", "imu one piece"],
  P3: [
    "does blackbeard have conqueror",
    "does garp have conqueror",
    "does koby have conqueror",
    "what is imu",
    "imu vs joy boy",
    "does zoro have conqueror",
  ],
  P4: [
    "luffy",
    "zoro",
    "nami",
    "usopp",
    "sanji",
    "chopper",
    "robin",
    "franky",
    "brook",
    "jinbe",
    "devil fruit",
    "haki",
  ],
};

// Title + H1 + meta description per page (separate check - placement matters).
const textOf = (html: string): string => {
  const noScripts = html.replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<style[\s\S]*?<\/style>/gi, " ");
  return noScripts.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");
};

const count = (text: string, phrase: string): number => {
  const t = text.toLowerCase();
  const p = phrase.toLowerCase();
  let n = 0;
  let i = 0;
  while ((i = t.indexOf(p, i)) !== -1) {
    n++;
    i += p.length;
  }
  return n;
};

const titleOf = (html: string): string => html.match(/<title>([^<]*)<\/title>/)?.[1] ?? "";
const h1Of = (html: string): string =>
  [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) => m[1].replace(/<[^>]+>/g, "").trim()).join(" | ");

const urls = Object.keys(pages);
const missing = urls.filter((u) => !existsSync(pages[u]));
if (missing.length > 0) {
  console.error("Missing built pages (run bun run build first):", missing.join(", "));
  process.exit(1);
}

const texts: Record<string, string> = {};
const titles: Record<string, string> = {};
const h1s: Record<string, string> = {};
for (const u of urls) {
  const html = readFileSync(pages[u], "utf8");
  texts[u] = textOf(html);
  titles[u] = titleOf(html);
  h1s[u] = h1Of(html);
}

let md = `# Keyword usage - per route

Generated from built HTML (\`bun run build\` first). Case-insensitive body-text counts (scripts/styles excluded). One exact-match in title + H1 outweighs ten body mentions.
`;
for (const u of urls) {
  const words = texts[u].split(" ").filter(Boolean).length;
  md += `\n## \`${u}\`\n\n- Title: ${titles[u]}\n- H1: ${h1s[u] || "(none)"}\n- Body: ${words} words\n`;
  for (const [group, phrases] of Object.entries(keywords)) {
    const hits = phrases.map((k) => ({ k, n: count(texts[u], k) })).filter((h) => h.n > 0);
    if (hits.length === 0) continue;
    md += `- ${group}: ${hits.map((h) => `"${h.k}" ×${h.n}`).join(", ")}\n`;
  }
}

md += `\n## Notes\n\n- Overlapping phrases double-count by design ("strongest characters" counts inside "strongest characters ranked") - read child rows first.\n- Name rows (luffy … jinbe) count every mention including nav-adjacent copy; the characters page carries the intentional density.\n- Rerun after every copy change: \`bun scripts/keyword-audit.ts\` (writes here).\n`;

writeFileSync("KEYWORD_USAGE.md", md);
console.log("KEYWORD_USAGE.md written");
