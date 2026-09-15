# One Piece Character Draft Builder - Game Design Document

## Core Concept

A self-contained, browser-based game where the player builds their own original "strongest possible character" by drafting individual attributes from a pool of One Piece-inspired characters, round by round. Instead of picking a whole character, the player harvests **one trait per round** from a choice of four characters, gradually assembling a custom, original build. Once the draft is complete, the character's stats are calculated and displayed on a result screen - including where the build ranks against all 184 roster characters.

The game has no backend - all logic, data, and simulation run client-side.

---

## Game Loop Overview

1. Player begins a new draft.
2. The game presents **8 rounds**, one per attribute.
3. Each round shows **4 character options**, each representing a "donor" for that round's attribute.
4. The player selects one option - only the attribute tied to that round transfers to the player's custom character. The rest of that character's data is discarded.
5. The player has **2 rerolls total**, shared across all 8 rounds (not per-round). A reroll replaces the current round's 4 options with 4 new ones.
6. After all 8 rounds are complete, the player has a fully custom character built from up to 8 different "donors."
7. The finished character's stats are calculated from all picks and the live rank is displayed on a result screen - rank-only by design, raw stat values stay under the hood.
8. **New Draft** button restarts.

---

## The 8 Rounds

| Round | Attribute        | What's Shown                        | Pool Rules                           |
| ----- | ---------------- | ----------------------------------- | ------------------------------------ |
| 1     | Body             | Character name + race + rarity chip | All characters, rarity-weighted      |
| 2     | Armament Haki    | Character name + haki tier          | All characters, ≥2 holders           |
| 3     | Observation Haki | Character name + haki tier          | All characters, ≥2 holders           |
| 4     | Conqueror's Haki | Character name + haki tier          | All characters, ≥2 holders           |
| 5     | Devil Fruit      | Character name + DF name/type       | DF users only                        |
| 6     | Weapon           | Character name + weapon name/type   | At least 3 of 4 must be weapon users |
| 7     | Intelligence     | Character name + intelligence value | All characters                       |
| 8     | Battle IQ        | Character name + battle IQ value    | All characters                       |

Round 1 (Body) merges the old Race + Appearance rounds: the picked character provides the looks, the name, the base stat block, and the race. Options are rarity-weighted like every other round - race plays no part in selection except the big-race (giant/oni/lunarian) variety guarantee, and never touches stats: racial physique already lives in each character's hand-tuned baseStats. No separate cosmetic round.

---

## Rerolls

- The player has **2 total rerolls** for the entire draft, usable in any round including Round 8.
- A reroll discards the current 4 options for that round and replaces them with 4 newly selected options.
- Because rerolls are scarce and shared, players must decide strategically which rounds are worth spending a reroll on (typically Devil Fruit and Haki, since they define playstyle most heavily) rather than relying on rerolls to fix every weak round.
- This scarcity ensures high variance between playthroughs - two players with the same luck can end up with meaningfully different builds depending on where they chose to spend their rerolls.

---

## Rarity System

Each of the 4 options in a round gets an **independent** rarity roll:

- **40% Basic** - standard-strength canon characters.
- **30% Epic** - notably powerful characters (e.g. Warlord-level, top commanders).
- **20% Legend** - the strongest characters in the setting (e.g. Admirals, Yonko commanders, Gorosei).
- **10% God** - the canon apex (Imu, Joy Boy, Rocks, Luffy, Shanks, Roger, Dragon, Whitebeard).

Round 1 (Body) rolls 0% god / 30% legend / 40% epic / 30% basic - no god bodies; gods are earned through donor rounds - and guarantees at least one giant, oni, or lunarian among the 4 options.

### Selection Process

1. Roll rarity for each of the 4 options independently.
2. Pick a random character matching that rarity from the available pool.
3. Options are unique within the round and never re-offer already-picked donors.
4. If no fresh character exists for that rarity in the pool, fall back to any rarity - fresh faces only. Already-picked donors are never re-offered, and a final dedupe pass guarantees 4 unique options every round.

---

## Stat Values Are Manually Assigned

Numeric base stats and the strength of categorical attributes (Haki values, Devil Fruit potency, Weapon mastery) are **not generated from fixed formulas or clean round numbers**. Instead, every character's stats across every attribute are **manually assigned** by the designer, individually, based on canonical feats.

- A Legend-tier character doesn't get a flat multiplier - they are manually given hand-picked values appropriate to their canon strength.
- This keeps power levels feeling authentic and canon-accurate rather than mechanically derived.
- Rarity is really just a label/rarity indicator for draft pools - actual stat values are hand-tuned per character per attribute, not calculated from the tier.

---

## The 7 Stats

Final builds have **7 stats**. Strength/durability are distinct from attack/defense:

- **STR (Strength)** - raw physical power. From base only (+ Battle IQ %).
- **ATK (Attack)** - technique output (haki/DF/weapon). Starts at 0, fed only by picks.
- **DUR (Durability)** - body toughness / HP. From base only.
- **DEF (Defense)** - blocking, hardening, parrying. Starts at 0, fed only by picks.
- **SPD (Speed)** - movement + reaction. Base + observation (+ reflex) + DF + weapon.
- **AWR (Awareness)** - perception. Base + observation + DF + weapon (+ Intelligence %).
- **STA (Stamina)** - endurance. Base + armament/conqueror + DF + weapon.

BST (Battle Stat Total) = rounded integer sum of all 7. One shared implementation feeds both the rankings file and the live in-app rank, so the two can never disagree.

---

## Stat Calculation Flow

All calculations happen **after the draft is complete**, not during. Picks are stored in shared state and computed at the end.

### Step 1: Base Stats (from Body pick)

Set STR/DUR/SPD/AWR/STA from the Round 1 character's individual baseStats (evaluated from canonical feats - not from a race table). ATK and DEF start at 0. Each base value passes through a soft-cap (knee 500 × 0.5): values at/below 500 count fully, every point above counts half - this compresses the stretched god-tier top end so donor rounds decide more, while weak bodies stay byte-identical and peer order never flips.

### Step 2: Haki (flat additions)

- **Armament** - adds attack, defense, stamina.
- **Observation** - adds awareness, speed, plus reflex (dodge sense) into speed.
- **Conqueror's** - adds attack, stamina, defense.

### Step 3: Devil Fruit (flat additions)

Adds attack, defense, speed, awareness, stamina. Skipped when the picked donor has no DF.

### Step 4: Weapon (flat additions)

Adds attack, defense, speed, awareness, stamina. Skipped when the picked donor has no weapon.

### Step 5: Intelligence & Battle IQ (% bonuses)

- **Intelligence** boosts awareness: `AWR *= 1 + (intelligence / 100) * 0.3`.
- **Battle IQ** boosts strength: `STR *= 1 + (battleIQ / 100) * 0.2`.

Finally, the 7 stats feed the live rank on the result screen. Results are rank-only by design - raw stat values stay hidden.

---

## Result Screen

After all 8 rounds are complete, the result screen shows (rank-only by design):

- **Hero art** of the Round 1 Body pick with the rank numeral and name overlaid
- **Live rank** (`#X of 185`) computed in-browser against all 184 roster characters, with the closest neighbor above and below, tie info, and ladder faces
- **8-donor strip** recapping every round's pick
- **Try Again** button to start over

---

## Round Details (merged from Rounds.md)

Source merged: Rounds.md was 80% duplicate of the spec above; only unique mechanics kept below.

# Draft Rounds - current spec (8 rounds, 7 stats)

- Calculations happen after the draft finishes, not during. Picks stored in shared state, computed at end. Placeholder images only where real art missing.

## Round 1 - Body

- Pool: all characters, rarity-weighted per slot with Round 1 dice (rolls 0/30/40/30 god/legend/epic/basic - no god bodies; observed skews legend/epic via the guarantee below). Race plays no part in selection, except the guarantee: at least one option is always giant, oni, or lunarian.
- Shows: character name, race (flavor label), rarity chip. No numbers shown.
- Pick gives: looks + name + base stat block + race. Race is identity only - it never touches stats (physique is already in each character's baseStats).
- Note: per-character baseStats (hand-tuned from canonical feats), NOT a shared race table.
- Options are unique within the round and exclude already-picked donors.

## Haki rounds - 2/3/4

- Options: all characters (haki users or not - tier `none` contributes 0), with at least 2 of 4 holding the round's haki type. Names + tiers shown.
- Armament → ATK, DEF, STA.
- Observation → AWR, SPD (incl. reflex).
- Conqueror → ATK, STA, DEF.

## Round 5 - Devil Fruit

- DF users only. Characters with no DF omitted. Names + DF names shown.

## Round 6 - Weapon

- Weapon users + non-weapon users, but at least 3 of 4 must be weapon users. Names shown.

## Round 7 - Intelligence

- All characters. Names shown.
- End buff: AWR *= 1 + (intelligence / 100) * 0.3.

## Round 8 - Battle IQ

- All characters. Names shown.
- End buff: STR *= 1 + (battleIQ / 100) * 0.2.

## Calculation flow (result screen)

Step 1: base STR/DUR/SPD/AWR/STA from Round 1 character. ATK/DEF start at 0.

Step 2: flat haki additions (armament → ATK/DEF/STA; observation → AWR/SPD; conqueror → ATK/STA/DEF).

Step 3: flat DF additions (ATK/DEF/SPD/AWR/STA). Skipped if donor has none.

Step 4: flat weapon additions (ATK/DEF/SPD/AWR/STA). Skipped if donor has none.

Step 5: intelligence % on AWR, battle IQ % on STR.

Result screen shows: final name (Round 1 pick), live rank vs all 184 roster characters with neighbors above/below, all 7 stats, per-round breakdown, picks recap, New Draft button.

BST = STR + ATK + DUR + DEF + SPD + AWR + STA.
