# Highest Bounty - Path Graph (review draft)

Branching narrative DAG for the "Get the highest bounty" mode.
5 rounds deep. 6+ choices authored per node (R1 has 10), random 3 shown per visit.
18 nodes, 129 choices total.

## Legend

- `P / N / D / I / C / K` = Power / Notoriety / Defiance / Influence / Cunning / Knowledge (% deltas per pick, clamped 0-100, diminishing past 80).
- `B` = bountyBase range (millions of belly, rolled per run).
- `+flag` = hidden flags added (drive combo multipliers + gating).
- `(req: ...)` = choice only offered when the flag/stat requirement holds.
- `(flex: A or B)` = engine rolls which node the choice routes to (keeps origins replayable).
- `(reuse: NODE)` = same choice also appears in NODE's pool when shown (no duplicate authoring).

## Poster formula (tunable)

```text
avg = 0.30*P + 0.25*D + 0.20*N + 0.15*C + 0.10*I   // Influence unscored, unlocks paths
poster = floor((baseSum + avg * 10M) * comboMult)    // baseSum = rolled B values
if K > 0: poster *= 1.3
cap poster at 5,000,000,000 (Roger cap), format as ฿ X,XXX,XXX,XXX
```

## R1 - ORIGIN (1 node, "Pick yer sin")

| #   | Choice                  | Next                                 | P/N/D/I/C/K          | B        | Flags                |
| --- | ----------------------- | ------------------------------------ | -------------------- | -------- | -------------------- |
| 1   | Desert Yer Marine Post  | (flex: MARINE_HUNTED or CONVOY_RAID) | +5/+10/+15/+0/+10/+0 | 80-150M  | +marine_defect       |
| 2   | Join Revolutionary Army | (flex: REVO_CELL or TRIBUTE_HEIST)   | +0/+10/+10/+20/+5/+0 | 50-120M  | +revolutionary       |
| 3   | Pickpocket a Celestial  | TRIBUTE_HEIST                        | +0/+15/+20/+0/+15/+0 | 60-120M  | +celestial_crime     |
| 4   | Graffiti Shanks's Flag  | YONKO_HEAT                           | +0/+15/+10/+0/+15/+0 | 40-100M  | +yonko_insult        |
| 5   | Steal Ohara Records     | OHARA_TRAIL                          | +0/+5/+15/+0/+10/+30 | 40-100M  | +forbidden_knowledge |
| 6   | Hijack a Supply Ship    | CONVOY_RAID                          | +5/+10/+10/+0/+15/+0 | 80-150M  | +marine_hate         |
| 7   | Torch a Marine Base     | MARINE_HUNTED                        | +10/+15/+15/+0/+5/+0 | 120-220M | +marine_hate         |
| 8   | Free a Slave Ship       | REVO_CELL                            | +5/+15/+10/+15/+5/+0 | 100-200M | +liberator           |

| 9 | Rob the Golden Casino Ship | TRIBUTE_HEIST | +0/+15/+5/+5/+20/+0 | 120-220M | +con_artist |
| 10 | Kidnap a Celestial Dragon's Chef | TRIBUTE_HEIST | +0/+10/+15/+0/+15/+0 | 50-100M | +celestial_crime |

## R2 - CREWS (6 nodes)

### MARINE_HUNTED ("Ex-comrades close in")

| #   | Choice               | Next         | P/N/D/I/C/K          | B        | Flags                       |
| --- | -------------------- | ------------ | -------------------- | -------- | --------------------------- |
| 1   | Sink Pursuit Fleet   | IMPEL_STORM  | +15/+15/+15/+0/+0/+0 | 200-350M | +marine_hate                |
| 2   | Fake Yer Death       | MARY_GEOISE  | +0/+5/+0/+0/+20/+0   | 50-120M  | +ghost (reuse: CONVOY_RAID) |
| 3   | Join Cross Guild     | CROSS_GUILD  | +5/+15/+10/+10/+5/+0 | 150-250M | +cross_guild                |
| 4   | Hide in Wano's Ruins | WANO_FALLOUT | +5/+5/+0/+5/+15/+0   | 80-150M  | +hidden_cache               |
| 5   | Raid Sky Vault       | SKY_VAULT    | +5/+10/+5/+0/+15/+0  | 100-200M | +sky_pirate                 |
| 6   | Broadcast Defection  | IMPEL_STORM  | +0/+20/+10/+5/+0/+0  | 100-180M | +loud_mouth                 |

| 7 | Hide in Amazon Lily | WANO_FALLOUT | +0/+5/+0/+5/+15/+0 | 60-120M | +hidden_cache |

### REVO_CELL ("Dragon watches")

| #   | Choice                 | Next         | P/N/D/I/C/K           | B        | Flags            |
| --- | ---------------------- | ------------ | --------------------- | -------- | ---------------- |
| 1   | Bomb Mary Geoise Depot | MARY_GEOISE  | +5/+20/+25/+10/+0/+0  | 250-400M | +celestial_crime |
| 2   | Free Impel Slaves      | IMPEL_STORM  | +10/+15/+15/+10/+0/+0 | 150-280M | +liberator       |
| 3   | Turn Clerk Stussy      | CROSS_GUILD  | +0/+10/+5/+10/+20/+0  | 100-200M | +inside_man      |
| 4   | Guard Robin's Trail    | SKY_VAULT    | +0/+5/+5/+5/+10/+15   | 80-150M  | +poneglyph_hint  |
| 5   | Smuggle Wano Arms      | WANO_FALLOUT | +5/+10/+10/+15/+5/+0  | 120-220M | +arms_dealer     |
| 6   | Kill a Vice Admiral    | IMPEL_STORM  | +15/+10/+15/+0/+5/+0  | 180-300M | +marine_hate     |

| 7 | Drop Leaflets from Sky | SKY_VAULT | +0/+15/+5/+10/+10/+0 | 60-120M | +loud_mouth |

### TRIBUTE_HEIST ("Heaven's gold")

| #   | Choice                 | Next         | P/N/D/I/C/K           | B        | Flags            |
| --- | ---------------------- | ------------ | --------------------- | -------- | ---------------- |
| 1   | Melt Tribute Gold      | CROSS_GUILD  | +0/+15/+10/+10/+10/+0 | 200-350M | +cross_guild     |
| 2   | Ransom a Celestial     | MARY_GEOISE  | +5/+25/+25/+0/+5/+0   | 300-500M | +celestial_crime |
| 3   | Shower Gold on Sabaody | SKY_VAULT    | +0/+20/+5/+0/+10/+0   | 100-200M | +folk_hero       |
| 4   | Bribe the Impel Warden | IMPEL_STORM  | +0/+5/+5/+10/+20/+0   | 80-150M  | +inside_man      |
| 5   | Burn Tribute Ship Live | MARY_GEOISE  | +5/+20/+20/+0/+0/+0   | 200-320M | +loud_mouth      |
| 6   | Hide Loot in Wano      | WANO_FALLOUT | +0/+5/+0/+5/+15/+0    | 100-180M | +hidden_cache    |

| 7 | Swap Tribute with Fakes | CROSS_GUILD | +0/+10/+5/+5/+25/+0 | 200-350M | +con_artist |

### YONKO_HEAT ("A Yonko knows yer name")

| #   | Choice                       | Next         | P/N/D/I/C/K           | B        | Flags                      |
| --- | ---------------------------- | ------------ | --------------------- | -------- | -------------------------- |
| 1   | Squat in Buggy's Cove        | WANO_FALLOUT | +10/+15/+10/+10/+0/+0 | 150-280M | +yonko_claim               |
| 2   | Forge Roger's Lost Map       | CROSS_GUILD  | +0/+10/+5/+5/+20/+0   | 100-200M | +con_artist                |
| 3   | Flee Above Clouds            | SKY_VAULT    | +0/+5/+0/+0/+20/+0    | 50-120M  | +ghost                     |
| 4   | Storm Impel for Allies       | IMPEL_STORM  | +15/+10/+15/+10/+0/+0 | 200-350M | +liberator                 |
| 5   | Ambush Buggy's Delivery Ship | WANO_FALLOUT | +15/+10/+5/+0/+5/+0   | 150-250M | +yonko_blood               |
| 6   | Snitch to Marines            | MARY_GEOISE  | +0/+5/+0/+5/+15/+0    | 80-150M  | +snitch (nerf combo later) |

| 7 | Steal Buggy's Map Room | CROSS_GUILD | +0/+10/+5/+0/+20/+0 | 100-200M | +con_artist |

### OHARA_TRAIL ("The forbidden century")

| #   | Choice                    | Next         | P/N/D/I/C/K           | B        | Flags                                      |
| --- | ------------------------- | ------------ | --------------------- | -------- | ------------------------------------------ |
| 1   | Decipher One Glyph        | SKY_VAULT    | +0/+10/+10/+0/+5/+25  | 100-200M | +poneglyph_hint                            |
| 2   | Sell Copy on Black Market | CROSS_GUILD  | +0/+10/+5/+10/+15/+10 | 150-250M | +arms_dealer                               |
| 3   | Sail for Elbaf Library    | ANCIENT_HUNT | +0/+5/+5/+5/+10/+20   | 80-150M  | +scholar                                   |
| 4   | Leak All to Morgans       | MARY_GEOISE  | +0/+25/+15/+0/+0/+5   | 120-220M | +loud_mouth                                |
| 5   | Burn the Originals        | IMPEL_STORM  | +0/+10/+20/+0/+0/+10  | 100-200M | +knowledge_burned (kills Knowledge combos) |
| 6   | Hide Out in Wano          | WANO_FALLOUT | +0/+5/+0/+5/+15/+10   | 80-150M  | +hidden_cache                              |

| 7 | Hide with Saul the Giant | WANO_FALLOUT | +0/+5/+5/+10/+10/+15 | 80-150M | +scholar |

### CONVOY_RAID ("Marines bleed supplies")

| #   | Choice                 | Next         | P/N/D/I/C/K            | B        | Flags                                |
| --- | ---------------------- | ------------ | ---------------------- | -------- | ------------------------------------ |
| 1   | Seize Seraphim Parts   | SKY_VAULT    | +10/+15/+15/+0/+10/+10 | 200-350M | +stolen_science                      |
| 2   | Free Prison Convoy     | IMPEL_STORM  | +10/+15/+10/+10/+0/+0  | 150-280M | +liberator                           |
| 3   | Torch Convoy on Camera | MARY_GEOISE  | +5/+20/+15/+0/+0/+0    | 150-250M | +loud_mouth (reuse: TRIBUTE_HEIST)   |
| 4   | Fence Guns via Guild   | CROSS_GUILD  | +0/+10/+5/+15/+10/+0   | 150-250M | +arms_dealer                         |
| 5   | Cache Guns in Wano     | WANO_FALLOUT | +0/+5/+0/+5/+15/+0     | 100-180M | +hidden_cache (reuse: TRIBUTE_HEIST) |
| 6   | Ransom Captain Tashigi | IMPEL_STORM  | +5/+15/+10/+0/+10/+0   | 150-250M | +marine_hate                         |

| 7 | Steal the Marines' Meat | SKY_VAULT | +0/+15/+5/+0/+10/+0 | 80-150M | +folk_hero |

## R3 - HEAT (5 nodes)

### IMPEL_STORM ("Break the drowned prison")

| #   | Choice                 | Next         | P/N/D/I/C/K           | B        | Flags                                            |
| --- | ---------------------- | ------------ | --------------------- | -------- | ------------------------------------------------ |
| 1   | Free Floor 6 Monsters  | BUSTER_CALL  | +15/+20/+15/+10/+0/+0 | 300-500M | +liberator                                       |
| 2   | Recruit Crocodile      | YONKO_CLASH  | +15/+15/+5/+15/+0/+0  | 250-400M | +yonko_ally                                      |
| 3   | Lift the Warden's Keys | BLACK_MARKET | +0/+10/+5/+5/+20/+0   | 100-200M | +inside_man                                      |
| 4   | Broadcast Breakout     | BUSTER_CALL  | +0/+25/+15/+5/+0/+0   | 150-280M | +loud_mouth                                      |
| 5   | Hunt Magellan          | YONKO_CLASH  | +20/+10/+10/+0/+0/+0  | 200-350M | +warden_slayer                                   |
| 6   | Copy Hidden Rubbing    | ANCIENT_HUNT | +0/+5/+10/+0/+5/+25   | 120-220M | +poneglyph_hint (req: scholar or poneglyph_hint) |

| 7 | Escape with Bon Clay | BUSTER_CALL | +5/+15/+10/+10/+10/+0 | 150-280M | +liberator |

### MARY_GEOISE ("Holy land burns")

| #   | Choice                      | Next         | P/N/D/I/C/K           | B        | Flags                      |
| --- | --------------------------- | ------------ | --------------------- | -------- | -------------------------- |
| 1   | Burn WG Flag                | BUSTER_CALL  | +5/+25/+25/+0/+0/+0   | 300-500M | +flag_burner               |
| 2   | Repeat Fisher Tiger's Climb | YONKO_CLASH  | +10/+20/+15/+10/+0/+0 | 200-350M | +liberator                 |
| 3   | Rob Pangaea Vault           | BLACK_MARKET | +5/+15/+15/+5/+15/+0  | 250-400M | +vault_robber              |
| 4   | Photograph Empty Throne     | ANCIENT_HUNT | +0/+15/+20/+0/+10/+20 | 150-280M | +throne_seen (req: ghost)  |
| 5   | Pie a Gorosei on Camera     | BUSTER_CALL  | +5/+25/+20/+0/+5/+0   | 250-400M | +elder_shame               |
| 6   | Escape on a Coated Bubble   | ANCIENT_HUNT | +0/+5/+0/+0/+20/+0    | 80-150M  | +ghost (reuse: YONKO_HEAT) |

| 7 | Free Kuma's Memory | ANCIENT_HUNT | +0/+10/+15/+0/+5/+20 | 150-280M | +truth_seeker (req: revolutionary or liberator) |

### CROSS_GUILD ("Buggy's bounty market")

| #   | Choice                    | Next         | P/N/D/I/C/K           | B        | Flags                             |
| --- | ------------------------- | ------------ | --------------------- | -------- | --------------------------------- |
| 1   | Post a Yonko Bounty       | YONKO_CLASH  | +15/+20/+10/+10/+0/+0 | 300-500M | +guild_star                       |
| 2   | Rig Bounty Market         | BLACK_MARKET | +0/+15/+5/+15/+20/+0  | 150-280M | +market_rigger                    |
| 3   | Hunt Hero Koby            | BUSTER_CALL  | +15/+15/+15/+5/+0/+0  | 250-400M | +hero_slayer                      |
| 4   | Buy a Stolen Road Rubbing | ANCIENT_HUNT | +0/+10/+5/+5/+10/+10  | 150-250M | +road_copy                        |
| 5   | Betray Guild              | YONKO_CLASH  | +10/+15/+10/+0/+10/+0 | 200-350M | +oathbreaker (locks guild combos) |
| 6   | Fund Sky Fleet            | ANCIENT_HUNT | +0/+5/+0/+10/+15/+0   | 100-200M | +sky_pirate (reuse: SKY_VAULT)    |

| 7 | Insure Yer Own Head | BLACK_MARKET | +0/+15/+0/+10/+20/+0 | 100-200M | +con_artist |

### WANO_FALLOUT ("Ruins, grudges, steel")

| #   | Choice                   | Next         | P/N/D/I/C/K            | B        | Flags            |
| --- | ------------------------ | ------------ | ---------------------- | -------- | ---------------- |
| 1   | Seize Pluton Plans       | ANCIENT_HUNT | +5/+15/+15/+5/+10/+15  | 250-400M | +pluton_plans    |
| 2   | Duel King the Wildfire   | YONKO_CLASH  | +20/+10/+5/+0/+0/+0    | 200-350M | +lunarian_slayer |
| 3   | Forge Sea-Prism Fleet    | BUSTER_CALL  | +10/+10/+10/+10/+10/+0 | 200-350M | +arms_dealer     |
| 4   | Sell Kaido's Gun Forge   | BLACK_MARKET | +0/+10/+0/+15/+10/+0   | 100-200M | +arms_dealer     |
| 5   | Raise the Kozuki Banner  | YONKO_CLASH  | +5/+15/+5/+15/+0/+0    | 150-280M | +shogun_backed   |
| 6   | Loot Onigashima's Armory | BLACK_MARKET | +0/+10/+10/+5/+15/+0   | 150-250M | +hidden_cache    |

| 7 | Eat a Failed SMILE | BUSTER_CALL | +5/+15/+5/+0/+0/+0 | 80-150M | +eternal_grin |

### SKY_VAULT ("Above law")

| #   | Choice                     | Next         | P/N/D/I/C/K           | B        | Flags        |
| --- | -------------------------- | ------------ | --------------------- | -------- | ------------ |
| 1   | Drop Sky Island            | BUSTER_CALL  | +10/+25/+20/+0/+0/+0  | 300-500M | +skyfall     |
| 2   | Mine Dial Arsenal          | BLACK_MARKET | +5/+10/+5/+10/+15/+0  | 150-250M | +arms_dealer |
| 3   | Chart Laugh Tale Hint      | ANCIENT_HUNT | +0/+15/+10/+0/+10/+20 | 200-350M | +laugh_hint  |
| 4   | Loot Enel's Moon Ruins     | ANCIENT_HUNT | +5/+10/+10/+0/+10/+20 | 150-280M | +moon_lore   |
| 5   | Rain Gold on the Holy Land | BUSTER_CALL  | +0/+20/+5/+5/+10/+0   | 120-220M | +folk_hero   |
| 6   | Study Sky Glyphs           | ANCIENT_HUNT | +0/+5/+10/+0/+5/+25   | 100-200M | +scholar     |

| 7 | Befriend the Spaceys | ANCIENT_HUNT | +0/+5/+5/+10/+15/+10 | 120-220M | +moon_lore |

## R4 - STORM (4 nodes)

### YONKO_CLASH ("A Yonko learns yer name")

| #   | Choice                    | Next            | P/N/D/I/C/K           | B        | Flags            |
| --- | ------------------------- | --------------- | --------------------- | -------- | ---------------- |
| 1   | Wound Blackbeard          | FINAL_STAND     | +25/+20/+10/+0/+0/+0  | 500-800M | +yonko_blood     |
| 2   | Sink Blackbeard's Fleet   | FINAL_STAND     | +15/+20/+15/+10/+0/+0 | 400-650M | +fleet_killer    |
| 3   | Steal Big Mom's Road Copy | GOD_VALLEY_ECHO | +0/+15/+10/+0/+15/+20 | 300-500M | +road_copy       |
| 4   | Ally with Shanks          | FINAL_STAND     | +5/+10/+5/+20/+5/+0   | 250-400M | +yonko_ally      |
| 5   | Poison Kaido's Banquet    | GOD_VALLEY_ECHO | +5/+15/+10/+0/+20/+0  | 250-400M | +oathbreaker     |
| 6   | Crash Big Mom's Wedding   | FINAL_STAND     | +10/+20/+10/+5/+15/+0 | 300-500M | +wedding_crasher |

| 7 | Refuse the Sake Cup | FINAL_STAND | +5/+15/+15/+0/+5/+0 | 250-400M | +yonko_insult |

### BUSTER_CALL ("Ten warships")

| #   | Choice                 | Next            | P/N/D/I/C/K           | B        | Flags         |
| --- | ---------------------- | --------------- | --------------------- | -------- | ------------- |
| 1   | Sink Two Warships      | FINAL_STAND     | +20/+20/+15/+0/+0/+0  | 400-650M | +fleet_killer |
| 2   | Slip the Ring          | GOD_VALLEY_ECHO | +0/+10/+0/+0/+25/+0   | 150-300M | +ghost        |
| 3   | Capture a Vice Admiral | FINAL_STAND     | +15/+15/+15/+5/+5/+0  | 350-550M | +marine_hate  |
| 4   | Shield Island Anyway   | GOD_VALLEY_ECHO | +5/+20/+5/+10/+0/+0   | 150-300M | +folk_hero    |
| 5   | Ram Flagship           | FINAL_STAND     | +15/+25/+20/+0/+0/+0  | 400-600M | +flag_burner  |
| 6   | Surrender... Then Riot | GOD_VALLEY_ECHO | +10/+15/+10/+0/+15/+0 | 200-350M | +oathbreaker  |

| 7 | Ram Them with a Sea Train | FINAL_STAND | +15/+15/+15/+0/+5/+0 | 300-500M | +fleet_killer |

### BLACK_MARKET ("Everything priced")

| #   | Choice                   | Next            | P/N/D/I/C/K            | B        | Flags          |
| --- | ------------------------ | --------------- | ---------------------- | -------- | -------------- |
| 1   | Auction Pluton Plans     | GOD_VALLEY_ECHO | +0/+20/+10/+10/+15/+15 | 400-600M | +pluton_plans  |
| 2   | Buy Green Bull's Route   | FINAL_STAND     | +5/+10/+10/+5/+20/+0   | 200-350M | +inside_man    |
| 3   | Corner Bounty Market     | GOD_VALLEY_ECHO | +0/+15/+5/+15/+20/+0   | 250-400M | +market_rigger |
| 4   | Hire Stussy the Defector | FINAL_STAND     | +5/+10/+10/+10/+20/+0  | 200-350M | +cp0_mole      |
| 5   | Sell Fake Road Copy      | GOD_VALLEY_ECHO | +0/+15/+0/+5/+25/+0    | 150-300M | +con_artist    |
| 6   | Torch Market             | FINAL_STAND     | +5/+20/+15/+0/+0/+0    | 250-400M | +oathbreaker   |

| 7 | Outbid a Celestial Dragon | GOD_VALLEY_ECHO | +0/+20/+15/+5/+10/+0 | 250-400M | +celestial_crime |

### ANCIENT_HUNT ("Century's shadow")

| #   | Choice                  | Next            | P/N/D/I/C/K           | B        | Flags                                                      |
| --- | ----------------------- | --------------- | --------------------- | -------- | ---------------------------------------------------------- |
| 1   | Read Three Glyphs       | GOD_VALLEY_ECHO | +0/+15/+15/+0/+5/+30  | 300-500M | +truth_seeker (req: scholar, poneglyph_hint, or moon_lore) |
| 2   | Wake Ancient Weapon     | FINAL_STAND     | +15/+25/+20/+0/+0/+10 | 500-800M | +weapon_waker                                              |
| 3   | Sketch Imu's Silhouette | GOD_VALLEY_ECHO | +0/+20/+20/+0/+10/+15 | 300-500M | +throne_seen                                               |
| 4   | Deal with Saint Saturn  | FINAL_STAND     | +0/+10/+10/+15/+20/+0 | 200-350M | +elder_deal (caps D at 40)                                 |
| 5   | Bury Truth for Gold     | GOD_VALLEY_ECHO | +0/+10/+0/+10/+20/+0  | 150-300M | +sellout (zeroes Knowledge)                                |
| 6   | Sail for Laugh Tale     | GOD_VALLEY_ECHO | +5/+20/+10/+5/+10/+15 | 400-650M | +laugh_hint (req: road_copy or laugh_hint)                 |

| 7 | Drink with Roger's Doctor | GOD_VALLEY_ECHO | +0/+10/+5/+5/+10/+15 | 200-350M | +laugh_hint |

## R5 - FINALE (2 nodes, terminal, no next - each choice yields the poster)

### FINAL_STAND ("Last island. All eyes")

| #   | Choice                   | P/N/D/I/C/K          | B         | Flags                  |
| --- | ------------------------ | -------------------- | --------- | ---------------------- |
| 1   | Duel Admiral Fujitora    | +25/+20/+15/+0/+0/+0 | 800M-1.2B | +admiral_duel          |
| 2   | Plant Flag on Marineford | +5/+25/+20/+10/+0/+0 | 500-900M  | +pirate_king_claim     |
| 3   | Spare Fleet              | +0/+20/+0/+5/+0/+0   | 300-600M  | +folk_hero             |
| 4   | Detonate Island          | +15/+25/+25/+0/+0/+0 | 700M-1.1B | +island_breaker        |
| 5   | Surrender for Crew       | +0/+15/+0/+0/+0/+0   | 200-400M  | +selfless (final x0.7) |
| 6   | Vanish in Smoke          | +0/+10/+0/+0/+25/+0  | 250-500M  | +ghost                 |

| 7 | Challenge Fleet Admiral Akainu | +25/+20/+20/+0/+0/+0 | 900M-1.4B | +admiral_duel |

### GOD_VALLEY_ECHO ("History repeats")

| #   | Choice                      | P/N/D/I/C/K            | B         | Flags                       |
| --- | --------------------------- | ---------------------- | --------- | --------------------------- |
| 1   | Claim One Piece Hint        | +10/+25/+15/+5/+10/+20 | 800M-1.3B | +laugh_hint                 |
| 2   | Expose Century              | +0/+25/+25/+0/+0/+30   | 700M-1.2B | +truth_seeker               |
| 3   | Crown New God               | +20/+20/+10/+0/+0/+0   | 600M-1B   | +god_claim                  |
| 4   | Bury Truth Again            | +0/+10/+0/+0/+0/+0     | 200-400M  | +sellout (zeroes Knowledge) |
| 5   | Challenge Kaido and Big Mom | +25/+20/+15/+0/+0/+0   | 800M-1.2B | +yonko_blood                |
| 6   | Marry a Celestial           | +0/+0/+0/+25/+0/+0     | 150-350M  | +throne_wedding (joke path) |

| 7 | Recreate God Valley | +25/+25/+20/+0/+0/+10 | 900M-1.4B | +island_breaker |

## Combos (end multipliers, evaluated on final flags)

| Needs                               | Mult           | Label             |
| ----------------------------------- | -------------- | ----------------- |
| revolutionary + celestial_crime     | x1.6           | Dragon's Faith    |
| yonko_blood + fleet_killer          | x1.5           | Yonko Slayer      |
| throne_seen + truth_seeker          | x1.8           | Knows Too Much    |
| pluton_plans + arms_dealer          | x1.4           | Merchant of Death |
| liberator + folk_hero               | x1.3           | People's Pirate   |
| yonko_insult + pirate_king_claim    | x1.2           | Big Mouth         |
| snitch present                      | x0.7           | Rat               |
| selfless present                    | x0.7           | Soft Heart        |
| knowledge_burned or sellout present | K = 0          | Truth Lost        |
| elder_deal present                  | D capped at 40 | Elder's Leash     |

## Open review items

- Flag swaps? Tone too dark / too jokey anywhere?
- Bounty ranges sane? Max reachable poster before combos ~2.5B, x1.8 pushes ~4.5B under Roger cap.
- Gated choices (req:) - keep, expand, or drop?
- Diminishing-repeat rule (-50% on seen choices) still wanted?
