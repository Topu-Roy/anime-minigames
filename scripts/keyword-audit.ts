import { readFileSync, writeFileSync, existsSync } from "fs";

// Keyword → pages audit. Counts case-insensitive occurrences in rendered
// HTML (scripts/styles stripped, tags stripped). Run from repo root after
// `bun run build`. Output: KEYWORD_USAGE.md
const pages: Record<string, string> = {
  "/": "dist/index.html",
  "/one-piece": "dist/one-piece/index.html",
  "/one-piece/draft": "dist/one-piece/draft/index.html",
  "/one-piece/characters": "dist/one-piece/characters/index.html",
  "/one-piece/bounty": "dist/one-piece/bounty/index.html",
  "/one-piece/blind-rank": "dist/one-piece/blind-rank/index.html",
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
  P5: ["one piece bounty game", "highest bounty", "wanted poster"],
  P6: ["one piece blind ranking game", "blind ranking game", "top-10"],
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

// SEO gates: exactly one H1 per route, and marked-up FAQ answers must match
// the visible copy (rich-result requirement). Fails loudly on drift.
const decodeEntities = (s: string): string =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");

const clean = (s: string): string => decodeEntities(s.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();

let failures = 0;
for (const u of urls) {
  const html = readFileSync(pages[u], "utf8");
  const h1Count = [...html.matchAll(/<h1[\s>]/gi)].length;
  if (h1Count !== 1) {
    console.error(`H1 gate: ${u} has ${h1Count} <h1> tags (want exactly 1)`);
    failures++;
  }
  // Visible FAQs: <details><summary>Q</summary><p>A</p>.
  const visible = [...html.matchAll(/<details[\s\S]*?<summary[^>]*>([\s\S]*?)<\/summary>\s*<p[^>]*>([\s\S]*?)<\/p>/gi)].map(
    (m) => ({ q: clean(m[1]), a: clean(m[2]) }),
  );
  // Marked-up FAQs: JSON-LD FAQPage blocks.
  const marked: { q: string; a: string }[] = [];
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)) {
    try {
      const data = JSON.parse(decodeEntities(m[1]));
      const blocks = Array.isArray(data) ? data : [data];
      for (const b of blocks) {
        if (b?.["@type"] !== "FAQPage" || !Array.isArray(b.mainEntity)) continue;
        for (const e of b.mainEntity) {
          marked.push({ q: clean(String(e.name ?? "")), a: clean(String(e.acceptedAnswer?.text ?? "")) });
        }
      }
    } catch {
      console.error(`FAQ gate: ${u} has unparseable JSON-LD`);
      failures++;
    }
  }
  if (visible.length !== marked.length) {
    console.error(`FAQ gate: ${u} shows ${visible.length} FAQs but marks up ${marked.length}`);
    failures++;
    continue;
  }
  for (const v of visible) {
    const match = marked.find((x) => x.q === v.q);
    if (!match) {
      console.error(`FAQ gate: ${u} visible question missing from JSON-LD: "${v.q}"`);
      failures++;
    } else if (match.a !== v.a) {
      console.error(`FAQ gate: ${u} answer drift for "${v.q}"`);
      failures++;
    }
  }
}

if (failures > 0) {
  console.error(`SEO gates failed with ${failures} problem(s)`);
  process.exit(1);
}
console.log("SEO gates pass: one H1 per route, FAQ copy matches JSON-LD");
