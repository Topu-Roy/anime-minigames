import { Characters } from "../../one-piece-draft/data/characters-v2";

// Display-name brackets as authored in docs/brackets.md (strongest → weakest,
// both between and within brackets). Mirrored here so scoring is self-contained
// without parsing markdown at runtime.
const BRACKETS_BY_DISPLAY_NAME: string[][] = [
  ["Imu", "Joy Boy"],
  ["Rocks", "Roger", "Whitebeard", "Garp", "Sengoku"],
  ["Shanks", "Mihawk"],
  ["Garling", "Shamrock"],
  ["Akainu", "Kizaru"],
  ["Luffy", "Blackbeard", "Kaido", "Big Mom", "Dragon", "Shiki"],
  ["Nusjuro", "Warcury", "Mars", "Ju Peter", "Saturn"],
  ["Loki", "Harald"],
  ["Kuzan", "Fujitora", "Beckman"],
  ["Green Bull", "Rayleigh", "Gaban", "Oden", "Ryuma", "Zoro", "Sanji"],
  ["Gunko", "Sommers", "Killingham", "Yamato", "Law", "Kid", "Ace", "Sabo", "Marco"],
  ["Shiryu", "Magellan", "Lucci"],
  ["Jinbe", "Doflamingo", "Kuma", "Hancock", "Crocodile", "Enel", "Katakuri"],
  ["Dorry", "Brogy", "King"],
  ["Kaku", "Van Augur", "Queen", "Cracker", "Smoothie"],
  ["Koby", "Sentomaru", "Smoker"],
  ["Moria", "Yasopp", "Lucky Roux", "Killer", "Jack", "Weevil"],
  ["Vista", "Who's-Who", "Drake"],
  ["Bege", "Bonney", "Brook", "Franky", "Robin"],
  ["Ivankov", "Morley", "Karasu", "Sasaki"],
  ["Urouge", "Apoo", "Hawkins", "Black Maria"],
  ["Lindbergh", "Koala", "Hack"],
  ["Ulti", "Page One", "Oven", "Daifuku"],
  ["Burgess", "Pedro", "Tamago", "Devon", "Doc Q", "Monet"],
  ["Hajrudin", "Daz Bonez", "Pica"],
  ["Inuarashi", "Nekomamushi"],
  ["Kyros", "Cavendish"],
  ["Saul", "Fisher Tiger", "Pizarro", "Vasco Shot", "Momonosuke", "Marigold", "Sandersonia"],
  ["Kawamatsu", "Kiku", "Kin'emon", "Ashura Doji", "Denjiro"],
  ["Perospero", "Bartolomeo", "Senor Pink", "Laffitte"],
  ["Wyper", "Kalgara", "Tsuru", "Gan Fall", "Kamakiri", "Raki"],
  ["Wadatsumi", "Arlong", "Hody", "Hatchan", "Ideo", "Blue Gilly", "Hyouzou"],
  ["Raizo", "Kanjuro", "Carrot"],
  ["Tashigi", "Hina", "Helmeppo", "Perona", "Sugar", "Pudding"],
  ["Fukaboshi", "Ryuboshi", "Manboshi"],
  ["Nami", "Chopper", "Usopp", "Rebecca", "Vivi", "Shinobu"],
  ["Bepo", "Leo", "Kabu", "Bian", "Koza"],
  ["Pell", "Zala", "Caesar"],
  ["Bon Clay", "Buggy", "Mr. 3", "Wapol", "Goldenweek"],
  ["Mont-d'Or", "Mansherry", "Hannyabal", "Brûlée", "Caribou"],
  [
    "Aisa",
    "Wicca",
    "Conis",
    "Camie",
    "Shirahoshi",
    "Cobra",
    "Neptune",
    "Gancho",
    "Corazon",
    "Hogback",
    "Vegapunk",
  ],
];

// Fast lookup: displayName → character id (shares the one allowed dataset).
const idByDisplayName = new Map<string, string>(Characters.map((c) => [c.displayName, c.id]));

type BracketInfo = { bracketIdx: number; intraIdx: number };

const infoById = new Map<string, BracketInfo>();

for (let bracketIdx = 0; bracketIdx < BRACKETS_BY_DISPLAY_NAME.length; bracketIdx++) {
  const names = BRACKETS_BY_DISPLAY_NAME[bracketIdx] as string[];
  for (let intraIdx = 0; intraIdx < names.length; intraIdx++) {
    const name = names[intraIdx] as string;
    const id = idByDisplayName.get(name);
    if (!id) throw new Error(`brackets: displayName not found: ${name}`);
    infoById.set(id, { bracketIdx, intraIdx });
  }
}

export function getBracketInfo(id: string): BracketInfo {
  const info = infoById.get(id);
  if (!info) throw new Error(`brackets: id not in any bracket: ${id}`);
  return info;
}

export function compareBracket(aId: string, bId: string): number {
  const a = getBracketInfo(aId);
  const b = getBracketInfo(bId);
  if (a.bracketIdx !== b.bracketIdx) return a.bracketIdx - b.bracketIdx;
  return a.intraIdx - b.intraIdx;
}

/** Truth order for a lineup: strongest → weakest by bracket. */
export function truthOrder(ids: string[]): string[] {
  return [...ids].sort(compareBracket);
}
