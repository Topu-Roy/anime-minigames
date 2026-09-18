# Path C - Free a Slave Ship (liberator trunk)

One full tree branch: open-sea rescue to Mariejois steps.
7 options per node. Trunk marked ★ (no plotholes, no reader needed — K stays 0).
Siblings carry named stubs + premise (zero dead ends).
Unique finale leaf: MARIEJOIS_STEPS.

## Legend

- `P / N / D / I / C / K` = Power / Notoriety / Defiance / Influence / Cunning / Knowledge (% deltas, clamped 0-100, diminishing past 80).
- `B` = bountyBase range (millions of belly, rolled per run). Bounties in R2-R5 represent Δ additions onto the baseline.
- `+flag` = hidden flags (combos + gates, see graph.md).
- `(stub: ...)` = continuation premise, authored in the next pass.

## Canon logic rules (no plotholes)

- No glyph reading anywhere on trunk (no reader earned). K stays 0 by design.
- Power ladder: R1-R2 sail and hide (freed rowers, not fighters), R3 royal allies, R4 court, R5 Mariejois assault.
- Fisher Tiger parallel is deliberate: Mariejois already fell once, Marines fear a repeat.

---

## R1 - OPEN_SEA ("No port safe")

| #   | Choice                                                                  | Next                                                  | P/N/D/I/C/K            | B (Baseline) | Flags            |
| --- | ----------------------------------------------------------------------- | ----------------------------------------------------- | ---------------------- | ------------ | ---------------- |
| 1   | ★ Free a Celestial Slave Vessel on the Open Sea                         | CHAIN_BREAKER                                         | +5/+15/+10/+15/+5/+0   | 120-220M     | +liberator       |
| 2   | Broadside & Ram a Marine Escort Cruiser Guarding Slave Transports       | CRUISER_SINK (stub: burning cruiser, drowning guards) | +15/+15/+15/+0/+5/+0   | 150-250M     | +marine_hate     |
| 3   | Board a Government Supply Fleet & Arm Freed Oarsmen with Artillery      | FLEET_RAID (stub: stolen cannons, rowers armed)       | +10/+10/+10/+10/+10/+0 | 110-190M     | +freed_crew      |
| 4   | Hijack a Heavenly Tribute Transport Laden with Celestial Gold           | TRIBUTE_TAKE (stub: golden chains, tribute looted)    | +10/+20/+20/+5/+10/+0  | 180-280M     | +celestial_crime |
| 5   | Infiltrate Golden Casino Ship Gran Tesoro to Buy Freed Captives' Debt   | TESORO_DEBT (stub: golden ship, golden rage)          | +0/+15/+5/+5/+20/+0    | 130-230M     | +con_artist      |
| 6   | Cloak Freed Captives in Deep Cargo Holds under Forged Customs Manifests | STOWAWAY_HOLD (stub: extra mouths, forged manifest)   | +0/+5/+0/+10/+15/+0    | 50-90M       | +ghost           |
| 7   | Detonate Powder Stores to Sink a Cipher Pol Slaver Brig                 | BRIG_SINK (stub: wreck bubbles, slavers swim)         | +10/+15/+10/+0/+5/+0   | 120-200M     | +marine_hate     |

---

## R2 - CHAIN_BREAKER ("Freed rowers, no port safe")

| #   | Choice                                                             | Next                                                 | P/N/D/I/C/K           | Δ B       | Flags          |
| --- | ------------------------------------------------------------------ | ---------------------------------------------------- | --------------------- | --------- | -------------- |
| 1   | ★ Escort Freed Captives to the Safety of Fish-Man Island           | RYUGU_HARBOR                                         | +5/+10/+5/+15/+10/+0  | +60-100M  | +liberator     |
| 2   | Request Safe Haven from Revolutionary Dragon in Baltigo            | WIND_ROAD (stub: revolutionary winds, Baltigo bound) | +0/+10/+10/+15/+5/+0  | +70-120M  | +revolutionary |
| 3   | Smuggle Freed Women Captives to Amazon Lily's Hidden Cove          | SNAKE_COVE (stub: warrior women, love-sick empress)  | +0/+5/+0/+10/+15/+0   | +30-60M   | +hidden_cache  |
| 4   | Incite an Iron-Chain Mutiny on a Celestial Dragon's Pleasure Barge | BARGE_RIOT (stub: burning barge, chains snapped)     | +15/+20/+20/+10/+0/+0 | +120-180M | +sun_pirates   |
| 5   | Enlist Freed Gladiators & Martial Artists as Ship Vanguard         | IRON_CREW (stub: oar calluses, newborn crew)         | +15/+5/+0/+10/+0/+0   | +40-80M   | +freed_crew    |
| 6   | Raid a Marine Naval Outpost to Seize Siege Munitions & Heavy Armor | ARMORY_RAID (stub: powder kegs, naval alarms)        | +10/+10/+15/+0/+15/+0 | +60-110M  | +marine_hate   |
| 7   | Disguise the Fleet with Stolen G-5 Navy Signal Flags               | FALSE_COLORS (stub: wrong flag, right smile)         | +0/+5/+0/+0/+20/+0    | +15-40M   | +ghost         |

---

## R3 - RYUGU_HARBOR ("Neptune's dilemma")

| #   | Choice                                                                    | Next                                                        | P/N/D/I/C/K            | Δ B       | Flags            |
| --- | ------------------------------------------------------------------------- | ----------------------------------------------------------- | ---------------------- | --------- | ---------------- |
| 1   | ★ Petition King Neptune for Sanctuary & Safe Passage                      | NEPTUNE_COURT                                               | +0/+10/+5/+20/+5/+0    | +60-100M  | +royal_pardon    |
| 2   | Forge a Secret Pact with Shirahoshi in the Hard-Shell Tower               | CRYING_PRINCESS (stub: giant mermaid, ancient voice)        | +0/+15/+0/+10/+5/+0    | +40-70M   | +shirahoshi_bond |
| 3   | Crushing Duel with Hody Jones to Purge the Energy Steroid Cult            | DRUG_TIDE (stub: steroid pills, cheering thugs)             | +20/+10/+5/+0/+0/+0    | +120-200M | +pill_breaker    |
| 4   | Raid & Burn the Underworld Black-Market Slave Auction Block               | AUCTION_CRASH (stub: auction block smashed, brokers flee)   | +10/+15/+15/+10/+10/+0 | +90-150M  | +liberator       |
| 5   | Master Secret Fish-Man Karate Techniques under Jinbe's Tutelage           | WHALE_SHARK_ROAD (stub: fish-man karate, sea current punch) | +20/+5/+0/+5/+0/+0     | +60-100M  | +karate_form     |
| 6   | Seize Tamatebako & Royal Treasury Funds to Finance the Rebellion          | VAULT_TIDE (stub: Tamatebako rumors, guards sleep)          | +0/+15/+10/+0/+15/+0   | +80-140M  | +vault_robber    |
| 7   | Rally Fish-Man Island's Labor District for an Anti-Slavery General Strike | LABOR_RIOT (stub: dock workers rise, plaza seals)           | +10/+15/+20/+10/+5/+0  | +100-160M | +sun_pirates     |

---

## R4 - NEPTUNE_COURT ("The king decides")

| #   | Choice                                                              | Next                                                | P/N/D/I/C/K           | Δ B       | Flags           |
| --- | ------------------------------------------------------------------- | --------------------------------------------------- | --------------------- | --------- | --------------- |
| 1   | ★ Volunteer as Royal Escort Guard for Shirahoshi to the Reverie     | MARIEJOIS_STEPS (finale)                            | +5/+20/+10/+15/+5/+0  | +200-300M | +royal_escort   |
| 2   | Brand the Sun Pirate Crest onto Palace Gates & Reject Royal Amnesty | PROUD_CHAIN (stub: pardon torn, island split)       | +10/+20/+25/+0/+0/+0  | +150-250M | +sun_pirates    |
| 3   | Marry into Ryugu Royalty to Unify Human & Fish-Man Dynasties        | CORAL_VOWS (stub: royal wedding, soft bounty)       | +0/+15/+0/+25/+5/+0   | +40-90M   | +royal_pardon   |
| 4   | Unite Sun Pirate Veterans into an Underground Liberation Front      | SUN_COALITION (stub: tiger's legacy, veteran fleet) | +15/+15/+15/+20/+0/+0 | +180-280M | +sun_pirates    |
| 5   | Eliminate ES Steroid Syndicate Cartels Operating in the Sea Floor   | PILL_DREGS (stub: leftover pills, drowning rally)   | +20/+10/+5/+0/+0/+0   | +120-200M | +pill_breaker   |
| 6   | Expose World Government Slave Contracts to Visiting Allied Monarchs | SUMMIT_LEAK (stub: kings murmur, navy tense)        | +0/+20/+15/+25/+10/+0 | +180-260M | +abolition_call |
| 7   | Swear a Sacred Sun Pirate Blood Oath with Jinbe on the Sea Floor    | SUN_MARK (stub: brands covered, new crew born)      | +10/+15/+10/+15/+0/+0 | +130-210M | +sun_pirates    |

---

## R5 - MARIEJOIS_STEPS (finale leaf: liberator trunk, terminal)

| #   | Choice                                                                    | P/N/D/I/C/K            | Final Total Bounty Range | Flags                     |
| --- | ------------------------------------------------------------------------- | ---------------------- | ------------------------ | ------------------------- |
| 1   | Storm Pangaea Castle Gates & Free Every Slave in the Holy Land            | +15/+35/+35/+15/+0/+0  | 2.2B-3.2B                | +liberator, +sun_pirates  |
| 2   | Hijack the Live Reverie Broadcast to Proclaim Worldwide Emancipation      | +0/+30/+25/+20/+5/+0   | 1.5B-2.2B                | +abolition_call           |
| 3   | Execute a World Noble at the Reverie Table in Full View of Kings          | +20/+35/+35/+0/+10/+0  | 2.5B-3.5B                | +god_slayer, +world_enemy |
| 4   | Incite Mass Slave Uprising across Mariejois & Incinerate Slave Archives   | +15/+30/+30/+15/+10/+0 | 1.8B-2.8B                | +chaos_god                |
| 5   | Force Five Elders at Gunpoint to Sign the Mariejois Emancipation Edict    | +0/+25/+20/+30/+20/+0  | 2.0B-3.0B                | +elder_deal, +liberator   |
| 6   | Stand as Lone Vanguard against God's Knights to Guard Princess Shirahoshi | +25/+25/+20/+10/+0/+0  | 1.2B-1.8B                | +folk_hero                |
| 7   | Sear the Burning Sun Brand across the Mariejois Celestial Emblem          | +10/+30/+30/+15/+0/+0  | 1.6B-2.4B                | +sun_pirates              |

---

## Final Bounty Summary

- **Top Tier (World Threat):** Executing a Celestial Dragon live at the Reverie pushes total run bounties to a peak of **2.5B–3.5B**.
- **High Tier (Holy Land Invasion/Coercion):** Full-scale assaults on Pangaea Castle or coercing the Five Elders scale between **2.0B–3.2B**.
- **Mid-High Tier (Ideological & Heroic):** Broadcasting global emancipation, burning slave archives, or defending Shirahoshi from God's Knights yield total bounties ranging from **1.2B–2.8B**.
