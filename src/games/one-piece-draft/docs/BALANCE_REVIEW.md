# Balance Review - audit summary (all APPLIED)

Values below already live in `characters-v2.ts`. This file is history + rationale, not live spec.
Compressed: per-character `Perfect` rationale and `Peer` comparisons dropped (kept in git history - see deleted BASESTAT/DF/HAKI/WEAPON_REVIEW.md).
Every remaining line is an applied change, a Speculative hold, or a standard. Full detail: `git log -- src/games/one-piece-draft/docs`.
Live spec: GAME_DESIGN.md. Generated snapshot: Rankings-v2.md.
---

# Part 1 - Base Stats (from BASESTAT_REVIEW.md)

Scope: `baseStats` ONLY (body, senses, mind with DF/haki/weapon stripped out).

## Standards

### Physical bands (STR / DUR / SPD / AWR / STA)

| Band      | Range    | Anchor residents                         |
| --------- | -------- | ---------------------------------------- |
| Helpless  | 20–60    | Shirahoshi, Cobra, sickbed civilians     |
| Ordinary  | 60–150   | Nami, Usopp, rank-and-file               |
| Officer   | 150–300  | Robin's body, Arlong, New World officers |
| Veteran   | 300–500  | Warlord crew officers, Vice Admirals     |
| Commander | 500–750  | Zoro, King, Katakuri                     |
| Top-tier  | 750–950  | Admirals, Yonko, Mihawk                  |
| Peak      | 950–1200 | Gods, Roger, Whitebeard                  |

### Mental scales (0–100)

- INT anchors: Vegapunk 100 (ceiling, nobody above) · Robin 93 · Nami 88 · Arlong 58 · Luffy/Zoro/Kaido ~55 (cap for battle-brained brawlers) · Shirahoshi 45.
- BIQ anchors: gods 95–98 · Mihawk 95 · Zoro 94 · Kaido 85 · Robin 80 · Usopp 78 · Nami 72 · Vegapunk 35 (genius, untested fighter) · Shirahoshi 30.
- Reference model: Luffy `int 55 / biq 95` - book-smarts and fight-smarts are separate axes. Flag any conflation.

### Rules

- Speed/awareness judge the UNAUGMENTED body. Fast DFs (Kizaru light, Enel lightning) live in the DF block, not base SPD. Observation-haki reflex lives in the haki block, not base AWR/SPD.
- Rarity priors (rebuttable): god 950–1200 core · legend 700–1100 · epic 250–800 (named exceptions: Vegapunk mind, Usopp awareness, sniper eyes) · basic 20–400.
- Anatomy priors, no auto-bonus: an adult giant/oni/lunarian/fishman with civilian-level STR/DUR gets flagged. Small races judged on feats, never penalized for size alone.
- Verdicts per field: `Perfect` · `Raise → suggested range` · `Lower → suggested range` · `Speculative (no verdict)`.
- Flag bar (fine-grained): ~50+ physical · ~5+ mental · any wrong-band placement.
- Every non-Perfect needs: canon feat (manga chapter or databook/Vivre Card citation) + peer comparison (nearest neighbors in file order or same tier).
- Peer ladders to protect: admirals vs admirals · SH crew (Zoro ≥ Sanji > Franky > Brook > Nami/Usopp body) · giants vs giants · Gorosei among themselves.
- Low-feat characters (Imu, Joy Boy, Rocks, Harald, Ryuma, Loki, …): `Speculative`, keep current numbers.

## Verdicts

### Batch 1 - Imu → Akainu

#### 1. Imu (nerona-imu) - ALL SPECULATIVE

- STR 1100 / DUR 1200 / SPD 1100 / AWR 1000 / STA 1200 / INT 96 / BIQ 97 (all Speculative): no combat, sensing, or scholarly panels - presence only (ch 908 throne, ch 1085 Cobra). Settle with: a scaled blow landed, a named top-tier attack survived, a blitz/interception, a CoO-style detection, a prolonged-fight showing, a Void Century exposition scene, an on-panel duel.

#### 2. Joy Boy (joy-boy) - ALL SPECULATIVE

- STR 1200 / DUR 1100 / SPD 1000 / AWR 1000 / STA 1200 / INT 90 / BIQ 97 (all Speculative): Nika feats belong to DF block, Emeth's blast to haki block; lore only (ch 1044–1045, ch 1122). Settle with unaugmented body panels + a stated multi-day fight like ch 966.

#### 3. Rocks (rocks-d-xebec) - ALL SPECULATIVE

- STR 1100 / DUR 1100 / SPD 1000 / AWR 900 / STA 1000 / INT 82 / BIQ 98 (all Speculative): required Roger+Garp at God Valley (ch 1096; Sengoku ch 957) but zero isolated body feats. Settle with an unaugmented blow panel, a survived named attack, a day-scale duration anchor.

#### 4. Roger (gol-d-roger)

- AWR 1100 → Lower 950–1050: Voice of All Things (ch 966–967; Rayleigh ch 507) isn't base senses; range-sensing Oden anchors Peak-floor, not ceiling.
- INT 88 → Lower 75–85: needed Oden to read Poneglyphs, Crocus to manage illness - ch 966–967; no scholarly feat of his own.

#### 5. Garp (monkey-d-garp)

- AWR 1000 → Lower 800–900: zero elite-sensing feats; Galaxy Impact is AoE, not precision.
- INT 90 → Lower 40–55: briefing-sleeper, refused promotion, restrained at Ace's execution - brawler cap ~55 applies - ch 574.

#### 6. Blackbeard (marshall-d-teach)

- STR 1000 → Lower 800–900: pre-Gura anchors are scarring young Shanks (ch 434, aged ch 1152) + Yami-assisted Ace CQC (ch 440–441) - not Roger-equal bare body.
- SPD 700 → Lower 500–600: failed to evade Ace, one-shot by Magellan's Hydra (ch 542) - slowest-Yonko portrayal.
- AWR 900 → Lower 650–750: tagged by everything (Ace, Magellan, WB ch 576); sleeplessness (ch 966 Buggy) is physiology, not senses.
- INT 98 → Lower 88–93: elite scheming (WB infiltration, Level-6 recruitment, Gura timing) but 98 > scholar Robin 93 on a DF-encyclopedia habit - ch 440–544.
- BIQ 98 → Lower 90–95: Ace outplay offset by Magellan one-shot (Shiryu antidote, ch 542) + begging WB (ch 576).

#### 7. Shanks (shanks)

- STR 1000 → Lower 700–800: dead-even duelist rivalry with Mihawk 700 (ch 434); Kamusari vs Kid is haki+weapon block (ch 1079); one-armed base body ≠ Peak.
- DUR 900 → Lower 700–800: zero body-tank feats; Akainu block was sword+haki (ch 579); a Sea King took his arm (ch 1).
- SPD 1100 → Lower 850–950: Marineford/Kid arrivals are positioning + Future Sight setups; Kaido interception off-screen (ch 579–580); +300 over Mihawk 800 unjustified.
- AWR 1100 → Lower 850–950: Future Vision (ch 1079) is haki block; duelist-grade ≈ Mihawk 900.
- STA 900 → Lower 750–850: no extended-duel anchor; daily Mihawk duels (ch 434) support Commander-high/Top-tier-low.
- INT 95 → Lower 82–88: arm-bet (ch 1), Marineford words (ch 580), Elder meeting (ch 907) are cunning/diplomacy (BIQ), not scholastics.
- BIQ 100 → Lower 95–98: Kamusari replication (ch 1079), Kaido interception, war-ending negotiation - god-band elite but 100 breaks stated cap.

#### 8. Loki (loki) - ALL SPECULATIVE

- STR 800 / DUR 700 / SPD 600 / AWR 700 / STA 700 / INT 78 / BIQ 90 (all Speculative): giant frame + Ragnir imply power but chained/unfought; Elbaf arc (ch 1130s–1150s) still ongoing. Settle with an unaugmented blow, a survived attack, a lore/strategy scene.

#### 9. Dragon (monkey-d-dragon) - ALL SPECULATIVE

- STR 900 / DUR 900 / SPD 900 / AWR 1000 / STA 800 / INT 96 / BIQ 96 (all Speculative): "world's worst criminal" hype + Garp lineage, zero blows thrown; Loguetown gale (ch 100) likely DF block; Baltigo off-screen. Settle with an on-panel strike, a survived admiral-tier attack, a strategy scene (intel network is organization, not senses).

#### 10. Akainu (sakazuki)

- STR 1000 → Lower 850–950: magma offense is DF block (ch 574–578); +100 over file Kuzan 900 breaks admiral parity ±50.
- AWR 800 → Raise 850–950: −100 vs file Kuzan 900 with zero portrayal gap in CoO across Marineford - converge.
- INT 96 → Lower 80–88: Squard manipulation (ch 565), Ace taunt-kill (ch 574) are cunning (BIQ-adjacent) + Fleet Admiral politics - no scholarly feat.
- BIQ 98 → Lower 90–94: Squard/Ace ploys + 10-day outlast support above Kuzan 92, but god-band ceiling needs a mastermind duel record.

### Batch 2 - Luffy → Nusjuro

#### 11. Luffy (monkey-d-luffy)

- DUR 900 → Lower 750–850: Lucci drew blood (ch 411–413), Kaido's club one-shot pre-Udon body (ch 923) - rubber blunt-soak is DF block.
- SPD 1100 → Lower 950–1000: Gear 2 blood-pump (ch 388) and Snakeman are DF-block speed.
- AWR 900 → Lower 700–750: Future Sight is haki block; bare senses repeatedly ambushed pre-CoO.

#### 12. Kizaru (borsalino)

- STR 800 → Lower 700–750: destructive kicks are Pika-powered (DF block) - ch 502–511.
- DUR 800 → Raise 850–900: admiral anchor Akainu 900 ±50; dueled Rayleigh evenly (ch 512–513), Egghead workload.
- SPD 1100 → Lower 750–800: light-speed is DF block (ch 511); Rayleigh's sword tracked him (ch 511).
- STA 800 → Raise 850–900: Sabaody→Marineford→Egghead vs G5 workload demands 850+.
- INT 85 → Lower 70–80: no scholar feats; near Nami 88 wrong.

#### 13. Whitebeard (edward-newgate)

- STR 1200 → Lower 1000–1100: equal 3-day clash vs Roger 1000 (ch 966) - +200 unjustified on old/sick body.
- SPD 700 → Lower 600–650: plodding Marineford; Squard stabbed him clean (ch 562); Marco notes failing health/CoO (ch 563).
- AWR 800 → Lower 650–700: failed to sense Squard's intent (ch 562–563) - sickness-degraded.

#### 14. Kaido (kaido)

- AWR 800 → Lower 700–750: drunk, hit by everyone (ch 992, ch 923).

#### 15. Big Mom (charlotte-linlin)

- SPD 800 → Lower 600–700: chronically slow, Napoleon-carried; Jinbe sea-toss (ch 901), Brook thefts.
- AWR 800 → Lower 650–700: fooled repeatedly; hunger-pang derangement (ch 868–871) zeroes perception.
- INT 80 → Lower 60–70: tricked by Nami/Chopper/Jinbe across WCI (ch 868–890); ate Mother Carmel.
- BIQ 88 → Lower 75–80: hunger volatility (ch 868–871), Law/Kidd loss (ch 1030–1040).

#### 16. Mihawk (dracule-mihawk)

- INT 95 → Lower 85–90: witty mentor, zero scholar feats - above Nami 88 wrong.

#### 17. Shamrock (figarland-shamrock) - ALL SPECULATIVE

- STR 650 / DUR 650 / SPD 700 / AWR 750 / STA 700 / INT 86 / BIQ 94 (all Speculative): debut ch 1137 (Elbaf Holy Knight commander, Cerberus sword) - zero feat panels; BIQ 94 near Mihawk with no sword swung is wholly unearned. Settle with on-panel combat + executed strategy.

#### 18. Kuzan (kuzan)

- INT 92 → Lower 80–85: cunning drifter, but ≈ Robin 93 scholar with no academic feats.
- BIQ 92 → Lower 85–90: Jozu one-touch freeze (ch 569) shows craft, but above Kaido 85 unearned.

#### 19. Harald (harald) - ALL SPECULATIVE

- STR 700 / DUR 650 / SPD 500 / AWR 600 / STA 600 / INT 65 / BIQ 70 (all Speculative): Elbaf flashback ongoing (ch 1130s–1150s) - "mighty king" hearsay only. Settle with measured lift/strike panels + resolved diplomacy plotline.

#### 20. Nusjuro (ethanbaron-v-nusjuro)

- STR 650 Speculative: Pacifista bisection (ch 1110–1111) is Shodai Kitetsu + awakened-form cut - no bare-body strength isolated.
- DUR 650 Speculative: never clean-hit in base; Gorosei regen unquantified.
- SPD 750 → Lower 600–650: Egghead blitzes are horse-form + sword-lunge (DF/weapon blocks, ch 1110–1111).
- STA 650 Speculative: brief sorties only; no attrition sample.
- BIQ 93 → Lower 85–90: one Pacifista sequence + Zoro/Sanji skirmishes (ch 1111–1112) - near Mihawk 95 unearned on sample.

### Batch 3 - Saturn → Sommers

#### 21. Saturn (jaygarcia-saturn)

- STR 650 / DUR 700 / SPD 600 / STA 700 (all Speculative): venom/telekinesis and spider movement are DF/unknown-mechanic blocks; G5 blows, Kuma punch (ch 1103–1104), Radical Beam (ch 1104) all healed by regen - no pure-body read.
- AWR 750 → Lower 600–650: missed Kuma's arrival (ch 1103); eye-immobilization is unknown-mechanic, not senses; below Nusjuro-800 peer.
- BIQ 90 → Lower 75–80: outplayed on Egghead; broadcast trick succeeded; failed objectives vs Stella/Kuma/Bonney (ch 1110–1125).

#### 22. Warcury (topman-warcury)

- STR 650 / DUR 700 / SPD 600 / STA 700 (all Speculative): Fengxi boar power, transformed-hide (Red Roc hand-hurt, ch 1112), boar charges (ch 1110–1111) all DF/regen-masked.
- AWR 650 → Lower 600–650: CoC roar (ch 1111) is haki block; no sensory feats; well below Nusjuro 800.
- BIQ 91 → Lower 75–80: shared Egghead command failure; Vegapunk outsmarted all five on broadcast (ch 1110–1125).

#### 23. Ju Peter (shepherd-ju-peter)

- STR 600 / DUR 650 / SPD 750 / STA 650 (all Speculative): sandworm damage, burrowing lunges (ch 1110–1111) are DF block; worm-body explosion soak (ch 1111) regen-masked; fastest-rated Gorosei base on least evidence.
- AWR 650 → Lower 600–650: no sensory feats at Egghead; 150 below Nusjuro 800 either way unjustified.
- BIQ 90 → Lower 75–80: broadcast failure, no independent tactical success (ch 1110–1125).

#### 24. Mars (marcus-mars)

- STR 600 / DUR 650 / SPD 650 / STA 650 (all Speculative): Itsumade talons/beams/flight (ch 1110–1111) all DF block; true body never tested.
- AWR 800 → Lower 650–700: aerial vantage yet lost the broadcast-snail hunt, fooled by Vegapunk's trick (ch 1111–1114) - Nusjuro parity unearned.
- INT 92 → Lower 84–88: one point off Robin-93 scholar band with zero scholarship feats.
- BIQ 94 → Lower 78–83: god-adjacent rating with the single worst Egghead failure attached (ch 1111–1114).

#### 25. Rayleigh (silvers-rayleigh)

- DUR 650 → Lower 550–600: no clean hits taken, panted, "were I younger" (ch 513) - can't hold Commander-high at 78.

#### 26. Gaban (scopper-gaban)

- STA 700 → Lower 600–650: +150 over same-generation Rayleigh 550 needs feats.
- BIQ 96 → Lower 90–93: goaded out G5 to verify Shanks's claim (ch 1140), bypassed Sommers regen (ch 1148) - elite but god-band unearned.

#### 27. Fujitora (fujitora)

- DUR 800 → Raise 850–900: gravity barriers are DF block masking body; admiral parity ±50 demands convergence.
- AWR 1000 → Lower 150–250: blind man's unaugmented senses are near-Helpless; file launders CoO into base while haki-observation sits at basic-100 - worst category error in the file so far.
- STA 800 → Raise 850–900: levitated Dressrosa rubble while fighting Sabo untired (ch 757–790); −100 vs Green Bull unearned.

#### 28. Sengoku (sengoku)

#### 29. Killingham (rimoshifu-killingham) - ALL SPECULATIVE

- STR 650 / DUR 650 / SPD 800 / AWR 750 / STA 650 / INT 65 / BIQ 78 (all Speculative): Kirin MMA/dream constructs, Abyss-regen, dream-sensing all DF/mechanic blocks (ch 1140–1150); SPD 800 with zero foot-speed panels is the worst-evidenced number. Settle with true-body combat + executed tactics.

#### 30. Sommers (shepherd-sommers) - ALL SPECULATIVE

- STR 650 / DUR 700 / SPD 600 / AWR 650 / STA 650 / INT 70 / BIQ 82 (all Speculative): thorn-leading, regen after Gaban's chop (ch 1148), CoC-bypass detail all mechanic-masked; got dissected by Gaban (ch 1148). Settle with true-body panels.

### Batch 4 - Enel → Sabo

#### 31. Enel (enel)

- STR 500 → Lower 200–300: no strong base fists; all damage via 200M-volt DF + staff; hurt by pre-G2 Luffy's bare punches (ch 279–285).
- DUR 450 → Lower 200–300: bled/KO'd by rubber fists; nearly killed by Wiper's Reject Dial; DF heart-restart (ch 280–284).
- SPD 800 → Lower 300–400: lightning travel is DF conduction; base legs failed to dodge Luffy's finisher (ch 285).
- AWR 850 → Lower 350–450: island-wide Mantra is DF-amplified eavesdropping; bypassed by wall-bounce punches; failed inside Nola (ch 278).
- STA 400 → Lower 250–350: gassed and KO'd by pre-gear Luffy after one sustained beating (ch 280–285).
- INT 82 → Lower 60–70: Maxim plan is arrogance, zero scholarship - near Nami 88 absurd.
- BIQ 78 → Lower 60–70: spammed lightning into rubber immunity instead of adapting (ch 279–285).

#### 32. Green Bull (aramaki)

- STA 900 → Lower 800–850: 3-year fasting is DF photosynthesis; withdrew after one CoC wave + dragon breath (ch 1055).

#### 33. Ryuma (shimotsuki-ryuma) - ALL SPECULATIVE

- STR 700 / DUR 650 / SPD 750 / AWR 800 / STA 600 / INT 55 / BIQ 93 (all Speculative): one-panel Monsters dragon slash (canon per SBS vol 47); zombie body ran Brook's shadow, lost to pre-TS Zoro (ch 450–456); died of sickness (SBS vol 47). BIQ 93 near Mihawk 95 wholly unearned. Likely permanent Speculative - no prime-duel evidence exists.

#### 34. Oden (kozuki-oden)

- STR 750 → Raise 850–950: Togen Totsuka dropped dragon Kaido, carved the permanent X-scar (ch 970) - top-tier base behind the blades.
- STA 650 → Raise 950–1100: held 9 scabbards over 700° oil for the full hour and lived - single best STA panel in the series (ch 971–972).
- BIQ 96 → Lower 84–88: lost a won fight to a fake-Momonosuke distraction (ch 970) - caps at/below Kaido 85.

#### 35. Shiki (shiki)

- SPD 750 → Lower 450–600: all flight is Fuwa Fuwa levitation; legs are severed sword-prosthetics - zero base footspeed (ch 0, ch 530).
- BIQ 95 → Lower 85–90: Edd War storm-loss, Marineford 2v1 loss, film-era loss - overconfidence caps at Kaido-band.

#### 36. Garling (figarland-garling) - ALL SPECULATIVE

- STR 700 / DUR 650 / SPD 750 / AWR 750 / STA 650 / INT 85 / BIQ 93 (all Speculative): God Valley portrayal only (ch 1095–1096); Gorosei rank proves longevity, not tissue (ch 1124–1125). BIQ 93 near Zoro 94 on bloodline alone. Settle with verified prime-body panels.

#### 37. Law (trafalgar-d-water-law)

- STR 550 → Lower 450–500: every cut/lift/throw runs through Room/Shambles; zero bare-body feats vs Doffy/Yonko (ch 780–790).
- DUR 500 → Raise 600–700: survived Doffy's point-blank beatdown (ch 783–786), BM's rooftop punishment (ch 1030–1040).
- AWR 800 → Lower 600–700: Room-scanning is DF perception, not CoO (ch 780–790).
- STA 500 → Raise 600–700: paid Awakening drain (Puncture Wille) through a full Yonko fight on Dressrosa wounds (ch 1030–1040).

#### 38. Beckman (benn-beckman)

- STR 700 / DUR 650 / SPD 750 / AWR 750 / STA 650 (all Speculative): Higuma mooks (ch 1) + inconclusive Kizaru gun-point (ch 569–570) ≠ Commander-floor evidence; never hit, never fought, never fired in 1100+ chapters.
- BIQ 94 Speculative: zero on-panel duels, priced = Zoro 94 - hype without one adaptation feat.

#### 39. Zoro (roronoa-zoro)

- STA 650 → Raise 800–900: nothing-happened (ch 485) + rooftop-to-King gauntlet demands top-tier.

#### 40. Sabo (sabo)

### Batch 5 - Yamato → Katakuri

#### 41. Yamato (yamato)

- INT 35 → Raise 42–48: literate Oden-journal reader who chose Wano guardianship (ch 1059) - naive, not near-helpless; still below Arlong 58.

#### 42. Kid (eustass-kid)

- STR 650 → Lower 550–600: zero unaugmented feats - all damage via magnet constructs (DF block); folded once railgun broke (ch 1079).
- DUR 600 → Lower 500–550: one-shot KO by Divine Departure (ch 1079); Oden ate the same technique from Roger and rose.
- SPD 550 → Lower 450–500: no unaugmented footspeed; Shanks closed before Damned Punk fired (ch 1079).
- AWR 550 → Lower 450–500: blindsided at Elbaf (ch 1079).
- INT 70 → Lower 50–58: outwitted into Udon (ch 935–940), repeated the Shanks challenge, lost arm + crew (ch 1079) - near-Arlong at best.
- BIQ 88 → Lower 60–70: aimed Damned Punk at fodder with a Yonko present (ch 1079); rooftop teamwork was Law-directed (ch 1030).

#### 43. Hancock (boa-hancock)

- SPD 600 → Lower 550–600: MF blitzes were fodder Marines/NW pirates (ch 555–559); no speedster-scale feats.
- AWR 700 → Lower 600–650: no advanced-CoO; Slave Arrow accuracy is DF block.
- INT 78 → Lower 65–72: hid slave mark for years, but lovesick "fatal illness" (ch 522) and mid-battle swoon (ch 559–560) cap her well below Nami 88.
- BIQ 88 → Lower 70–78: best wins vs distracted Smoker (ch 559) + fodder; throttled by Teach (ch 1059) - nowhere near Kaido 85.

#### 44. King (king-the-conflagration)

- STA 650 → Raise 700–750: Marco 1v2 stall (ch 1005–1006) then full Zoro distance (ch 1030–1036) - back-to-back commanders demand Top-tier-entry.
- INT 70 → Lower 50–58: mute enforcer, zero plans - loyalty-muscle at brawler cap.
- BIQ 80 → Lower 65–72: Zoro solved the flame tradeoff mid-duel; King never adapted or concealed it (ch 1035).

#### 45. Marco (marco-the-phoenix)

- STR 600 hold: Commander-low; every admiral clash thrown in phoenix form (DF block, ch 567–578, ch 1006); no isolated raw-body striking.
- DUR 750 → Lower 650–700: Garp's punch floored him (ch 567); no-sell record belongs to regen (DF block).
- SPD 700 → Lower 600–650: all mobility is zoan flight (DF block, ch 567, ch 1006).

#### 46. Sanji (sanji)

- DUR 700 → Raise 750–800: Queen's Brachio-coil failed to damage (ch 1027–1028); S-Shark punch no-scratch on Egghead - exo recovery demands Top-tier-entry.

#### 47. Kuma (bartholomew-kuma)

- SPD 700 → Lower 550–600: TB "vanish" was Paw self-repel (DF block, ch 484); no unaugmented footspeed.

#### 48. Crocodile (crocodile)

- STR 700 → Lower 450–550: both Luffy wins came via desiccation/DF (ch 200–210); Mihawk parry was hook (weapon block, ch 561) - no raw-muscle feats above Veteran.
- DUR 600 → Lower 400–500: bled to pre-G2 Luffy's fists (ch 208–210); zero Haki-era body feats.
- SPD 800 → Lower 500–600: all MF movement was sand flight (DF block, ch 559–561) - Top-tier base speed absurd.
- AWR 800 → Lower 550–650: zero on-panel CoO; his "awareness" was the Baroque intel network (INT, not senses).
- STA 700 → Lower 600–650: full-war presence real (ch 550–580) but logia-intangibility subsidized it.

#### 49. Lucci (rob-lucci)

- STR 1000 → Lower 750–800: Doriki 4000 (ch 379) is EL-era base scale; base body lost to pre-TS G2/G3 (ch 410–430); Egghead standing was awakening (DF block, ch 1092).
- DUR 800 → Lower 650–750: Jet Gatling + G3 drew blood from leopard body (ch 420s); Tekkai is EL-scale, not Top-tier.
- SPD 900 → Lower 750–800: Soru real (ch 379–430) but G2 already outpaced him (ch 410); Egghead pace zoan-boosted.
- AWR 800 → Lower 650–700: Kami-e is close-range technique; Egghead reactions were awakened-state.
- STA 800 → Lower 700–750: EL mutual-KO marathon supports high STA, but Egghead consciousness was awakening resilience (ch 1092–1093).

#### 50. Katakuri (charlotte-katakuri)

- STR 1000 → Lower 700–800: every strike was mochi-construct, Mogura (weapon), or Armament (haki) (ch 871–895) - zero isolated raw-body feats.
- DUR 1000 → Lower 700–800: "untouched" myth was mochi-dodge (DF) + Future Sight (haki); Snakeman hits drew blood (ch 891–895); honor-stab bled normally (ch 884).
- SPD 900 → Lower 750–800: reactions are FS (haki block); footspeed never blitzed anyone across 12h (ch 871–895).
- AWR 1000 → Lower 650–750: Future Sight already lives in his advanced-CoO haki block - base double-counts it. Largest cut in batch.
- STA 900 → Lower 800–850: 12h duel genuine (ch 871–895) but mochi-body efficiency subsidized it.

### Batch 6 - Weevil → Vista

#### 51. Weevil (edward-weevil)

- STR 1200 → Lower 850–950: Kizaru "young WB" line is portrayal (ch 802); on-panel feats are 16 subordinate crews off-screen + GB capture (ch 1053–1054, ch 1073).
- SPD 600 → Lower 420–500: zero foot-speed receipts; lumbering brawler, never blitzed anyone (ch 802, ch 1073).
- AWR 500 → Lower 300–380: no senses/CoO receipts; Bakkin puppeteers him everywhere (ch 802, ch 1073).

#### 52. Ace (portgas-d-ace)

- STR 800 → Lower 620–700: all striking is Mera fire (DF block); must sit at/below Sabo 700 (B4) - lost to BB while Sabo stalled Fujitora (ch 440–441).
- SPD 700 → Lower 600–650: fire mobility/dashes are DF block (ch 440–441, ch 573).
- AWR 800 → Lower 600–650: zero CoO/senses feats (ch 440–441, ch 552).
- BIQ 85 → Lower 72–78: rushed BB against WB/Shanks warnings (ch 434, ch 552); Kaido-85 parity unearned.

#### 53. Doflamingo (donquixote-doflamingo)

- STR 800 → Lower 650–700: striking is strings (DF block, God Thread ch 790); never grappled anyone clean - below Sabo 700.
- SPD 800 → Lower 680–740: G4 blitzed him repeatedly (ch 786–790); Sky Path is strings, not footspeed.
- AWR 800 → Lower 650–720: failed to track Law's giant-Room setup (ch 781).
- INT 90 → Lower 84–88: decade Dressrosa/Joker scheme is cunning, not Nami-88 scholarship (ch 782–788).
- BIQ 88 → Lower 78–82: above Kaido 85 unearned - Birdcage gambit failed, out-adapted by Law/Luffy (ch 781–790); below Marco 90.

#### 54. Killer (killer)

- STR 700 → Lower 630–680: Kaido-scratch was Punisher sonic damage = weapon block (ch 1002); weakened-Zoro clash (ch 937–938) doesn't match King/Sabo 700.
- BIQ 87 → Lower 80–84: Hawkins outplay legit (ch 1029–1035) but near-Zoro-94/above-Kaido-85 unearned.

#### 55. Smoothie (charlotte-smoothie)

- STR 1000 / DUR 900 (both Speculative): zero unaugmented feats; squeezing is DF block; only on-panel "feats" are wringing a subordinate + standing around WCI (ch 846–890). Never took a hit.
- SPD 600 → Lower 450–550: never moved fast on-panel (WCI ch 846–890).
- STA 800 → Lower 600–650: no endurance feats whatsoever; never fought (WCI ch 846–890).
- BIQ 82 → Lower 60–68: did nothing while Sunny escaped twice under her nose (ch 875–890) - anti-feats.

#### 56. Queen (queen)

- STR 1100 → Lower 650–700: exceeds King 700 (B5) - calamity-ladder violation; best feats (vs Marco ch 1005–1006, vs Sanji ch 1029–1035) are LOSSES; grapples never overpowered Top-tiers.
- DUR 1100 → Lower 700–800: KO'd by BM (ch 935), finished by Ifrit (ch 1034–1035) - Peak contradicted twice; cyborg base keeps Top-tier.
- SPD 500 → Lower 400–450: Sanji blitzed him repeatedly pre-Ifrit (ch 1031–1034); slowest calamity.
- AWR 800 → Lower 600–650: zero receipts; Sanji kicked him repeatedly (ch 1031–1034).
- STA 650–700 hold: Marco then Sanji back-to-back real (ch 1005–1035) but at/below King 700–750.

#### 57. Jack (jack)

- STR 1200 → Lower 620–680: Peak with no Peak receipts; Zou damage was mammoth-form + Koro gas (ch 810–820); third calamity.
- DUR 1100 → Lower 700–780: convoy wreck + Zunesha trunk + Sulong beatdown survived (ch 801, ch 822, ch 987–988) earns Top-tier - Peak while losing every bout is wrong-band.
- STA 750 → Lower 700–750: 5-day Neko/Inu rotations real (ch 810–818) but must band-match Ace–Jinbe 5-day parity and sit at King ceiling.

#### 58. Karasu (karasu)

- STR 600 → Lower 450–550: Marijoa offense was soot crows = DF block; team stall vs Fujitora/GB (ch 1082–1084).
- DUR 500 → Lower 400–470: never took a clean unaugmented hit; soot intangibility ≠ body (ch 1082–1084).
- SPD 800 → Lower 550–650: soot flight/mobility is DF block; base footspeed unknown (ch 1082–1084).
- AWR 700 → Lower 550–600: no CoO receipts; Rev intel role implies baseline, not Top-tier.
- BIQ 83 → Lower 65–72: Admiral-stall was a 3-commander team feat (ch 1082–1084); near-Kaido-85 solo rating unearned.

#### 59. Jinbe (jinbe)

- STR 1100 → Lower 850–950: Buraikan moved craving-nerfed BM off Sunny (ch 869); Wadatsumi toss pre-dates ES-Hody loss (ch 626, ch 641–647); Fishman Karate lives in base (no technique slot) but Peak needs un-nerfed Emperor receipts.
- AWR 800 → Lower 620–700: veteran reads real but Top-tier CoO/senses unearned - only basic Armament/Observation shown (ch 547, ch 860–868).
- STA 750 → Lower 700–750: 5-day Ace duel (ch 552) demands band-parity with Ace 700 - file breaks into Top-tier while Ace sits Commander.

#### 60. Vista (vista)

- STR 700 → Lower 550–620: Mihawk clash was twin-saber skill = weapon block (ch 570–571); zero bare-body receipts for Commander-top.
- SPD 800 → Lower 650–720: tracked Mihawk's strikes = sword-speed + reading, not Top-tier footspeed (ch 570–571).
- BIQ 88 → Lower 78–82: Mihawk stall to mutual postponement genuinely elite (ch 570–571) but above-Kaido-85 for a skill-matchup stall is overcredit.

### Batch 7 - Shiryu → Oven

#### 61. Shiryu (shiryu)

- SPD 1000 → Lower 650–750: invisibility ≠ footspeed; DF block already carries speed; zero Soru-tier base feats (ch 1087).
- AWR 800 → Lower 600–650: no CoO feats; Hachinosu hit relied on DF invis (ch 1087).
- STA 700 → Lower 550–600: zero extended duels; floored by one Garp punch (ch 1087).
- INT 70 → Lower 55–60: brutal jailer, zero schemes; exceeds Arlong 58 + brawler cap without record (ch 542–543).
- BIQ 88 → Lower 78–82: sneak-stab = cunning, not duel IQ; exceeds Kaido 85 with no elite duel win (ch 1087).
- LEGEND CHECK: base body does NOT earn legend alone - rides invisibility; rarity note, out of scope.

#### 62. Magellan (magellan)

- STR 800 → Lower 500–600: all offense Hydra/Chloro/Kinjite (DF); horns never KO'd a commander (ch 534–535, ch 542).
- DUR 700 → Lower 550–650: hurt by pre-TS Jet Bazooka (ch 534–535); knocked back by wax-arm Champion Rifle (ch 547–548).
- SPD 600 → Lower 400–500: Luffy outran Hydra/Venom Road (ch 534–542); slow diarrheic warden.
- AWR 800 → Lower 550–600: zero CoO; Luffy/Bentham/Mr. 3 evaded + wax-walled him (ch 535–548).
- INT 74 → Lower 60–65: mass ID breakout on his watch (ch 535–548); above Arlong 58 unjustified.

#### 63. Kalgara (kalgara)

- STR 800 / DUR 700 / SPD 600 / AWR 600 / STA 700 (all Speculative): Nola-snake + Shandia warfare flashback only (ch 282–290); zero modern scaling; pre-Haki era.
- BIQ 88 → Lower 75–80: tribal/snake tactics only (ch 282–290); exceeds Kaido 85 unjustified.

#### 64. Ivankov (emporio-ivankov)

- DUR 600 → Raise 650–700: survived Kuma clash + MF gauntlet (ch 538–540, ch 567–578); 600 low.
- STA 800 → Lower 650–700: ID+MF marathon subsidized by Energetic Hormones (DF); base must exclude (ch 540–578).

#### 65. Drake (x-drake)

- STR 800 → Lower 650–700: Wano offense in allosaurus hybrid (DF); human axe never solo'd a commander (ch 995–1005).
- DUR 700 → Lower 550–650: ancient-zoan soak carried Sanji/Hawkins/Apoo exchanges (ch 1005).
- STA 700 → Lower 600–650: Wano marathon in zoan; base human unproven (ch 995–1008).
- BIQ 86 → Lower 80–84: exceeds Kaido 85 + Killer band with zero elite duel wins; CP0 capture ≠ duel IQ (ch 1005–1010).

#### 66. Cracker (charlotte-cracker)

- DUR 800 → Lower 400–500: TRUE body thin/frail, collapsed fast post-breach (ch 838, ch 864); 800 rides biscuit armor.
- AWR 800 → Lower 600–650: Nami/homie rain exploited him (ch 841–842).
- STA 700 → Lower 600–650: 11h subsidized hiding inside infinite soldiers; base unproven (ch 838–842).
- INT 76 → Lower 55–65: arrogant; rain/eating exploit by Nami/Luffy (ch 841–842); above Arlong unjustified.
- BIQ 86 → Lower 78–82: exceeds Kaido; adaptations failed vs rain/Tankman (ch 842); MUST sit below Katakuri.

#### 67. Inuarashi (inuarashi)

- AWR 800 → Lower 650–700: rotations relied on shifts, not elite senses (ch 810–818).
- STA 600 → Raise 700–750: 5-day Jack rotations = same STA as Jack 700–750 (ch 810–818); 600 wrong-band.
- INT 75 → Lower 60–65: duke statesman but exact-peer Neko 60 - 15-pt gap unjustified.
- BIQ 90 → Lower 82–86: nears Mihawk/Zoro, exceeds Kaido; Zou parity + Sulong wins = transformation, not IQ (ch 810–818, ch 1026).

#### 68. Nekomamushi (nekomamushi)

- AWR 800 → Lower 650–700: ambushed Perospero rather than out-sensing him (ch 1022–1026).
- STA 600 → Raise 700–750: same 5-day anchor as Inu/Jack (ch 810–818); 600 wrong-band.

#### 69. Perospero (charlotte-perospero)

- STR 600 → Lower 450–550: offense all candy arrows/tower (DF); elder base never grappled a commander (ch 860–890, ch 1022–1026).
- AWR 800 → Lower 600–650: Neko ambushed him outside dome (ch 1022–1026); sniping via DF lookout.

#### 70. Oven (charlotte-oven)

- STR 800 → Lower 650–700: WCI offense heat-subsidized (DF); naginata never solo'd a commander w/o heat (ch 860–890).
- DUR 700 → Lower 600–650: heat-armor soak carried Bege/Pekoms/Ichiji exchanges (ch 887–890).

### Batch 8 - Who's-Who → Brogy

#### 71. Who's-Who (whos-who)

- STR 800 → Lower 700–750: pushed Jinbe but lost to base-heavy style; DF-amped hits, not base (ch 1018–1021); must sit clearly below Jinbe 850–950.
- SPD 800 → Lower 650–750: Soru dodged once, yet Jinbe pinned tail and out-grappled him (ch 1018).
- AWR 600 → Lower 500–550: failed to detect Jinbe stepping on tail; no CoO feats (ch 1018).
- BIQ 84 → Lower 75–80: fingers shattered on Jinbe's haki; tail-step trick; near-Kaido-85 unearned (ch 1018).

#### 72. Kaku (kaku)

- BIQ 86 → Lower 78–82: exceeds Kaido 85 despite EL loss to pre-TS Zoro + Egghead no-sell (EL ch 416–417; ch 1071–1072).

#### 73. Pica (pica)

- STR 700 → Lower 200–300: all lifting via stone golem (DF block); fragile true body, zero base-strength feats (ch 778).
- DUR 1000 → Lower 200–300: Peak-band for a body canonically "as fragile as any person's"; Zoro one-shot it once exposed (ch 778). Worst DUR inflation in review so far.
- SPD 400 → Lower 150–250: golem repositioning is DF movement; true body never demonstrated speed (ch 777–778).
- AWR 600 → Lower 400–500: fell for Orlumbus-launch trick; real body located and carved out by Zoro (ch 778).
- STA 700 → Lower 400–500: golem persistence is DF stamina; base folded in one true-body exchange (ch 778).
- BIQ 70 → Lower 55–65: abandoned Zoro to prey on wounded, then cornered midair with no stone escape (ch 777–778).

#### 74. Sentomaru (sentomaru)

- AWR 800 → Lower 550–650: Top-tier awareness with zero precog feats; Kenbun noted weaker than his Busoshoku (ch 1091).
- STA 600 → Lower 450–550: incapacitated quickly in both Lucci and Kizaru fights; no extended duel anywhere (ch 1060s; ch 1091).

#### 75. Gunko (manmayer-gunko) - ALL SPECULATIVE

- STR 600 / DUR 600 / SPD 600 / AWR 600 / STA 600 / INT 76 / BIQ 87 (all Speculative): Elbaf showings all Arrow-DF/Abyss-mediated (ch 1140s); alleged Gaban edge (ch 1148–1149) is DF-mediated, base unread; BIQ 87 above Kaido 85 with zero tactical sample. Settle with true-body combat.

#### 76. Carrot (carrot)

- STR 500 → Lower 300–400: helm-ripping and crew-blitzing were Sulong-only; base never replicated (ch 888).
- DUR 500 → Lower 300–400: no base durability feat; Sulong adds offense, not proven toughness (WCI ch 880–890).
- SPD 800 → Lower 600–700: youth must sit below dukes' 800; flight-like gliding is Sulong.
- AWR 600 → Lower 400–500: no Observation feat in base form (WCI arc).
- STA 500 → Lower 350–450: Sulong burns out to near-death within hours per Jinbe; base stamina unproven past skirmishes.

#### 77. Yasopp (yasopp) - ALL SPECULATIVE

- STR 700 / DUR 500 / SPD 800 / AWR 1000 / STA 700 / INT 62 / BIQ 84 (all Speculative): portrayal-only Shanks officer (ch 1; ch 25 backstory; ch 957 roll-call). AWR 1000 Peak-band with zero confirmed CoO - do not invent; sniper reputation is not a feat. Settle with on-panel action (13 years of nothing so far).

#### 78. Lucky Roux (lucky-roux) - ALL SPECULATIVE

- STR 800 / DUR 900 / SPD 700 / AWR 600 / STA 800 / INT 55 / BIQ 78 (all Speculative): only kill is a point-blank shot on a weak bandit (ch 1); Marineford no-feats. DUR 900 Top-tier with zero tanking feats - invented band. Settle with on-panel action.

#### 79. Dorry (dorry)

- AWR 500 → Lower 350–450: fooled by rum-bomb + wax-trip sabotage; zero senses feats (ch 129–130).
- BIQ 85 → Lower 70–78: ties Kaido despite needing deception to be beaten by Galdino's crew; ritual draws over tactics (ch 129–130).

#### 80. Brogy (brogy)

- AWR 500 → Lower 350–450: detected neither Mr. 3's wax nor the sabotage tilting his win (ch 129–130).
- INT 35 → Raise 50–60: 23-pt gap vs co-captain Dorry 58 with zero evidence of dumber judgment across a century of draws (ch 129–130).

### Batch 9 - Morley → Saul

#### 81. Morley (morley)

- STR 900 → Lower 600–650: no solo base receipt; pushing feats are Oshi Oshi DF; sits above chief-of-staff Sabo - ch 904, ch 1083–1084. (Note: worker flags file race as giant 12.53m - verify race field separately.)
- SPD 500 → Lower 300–400: giant base speed; underground mobility is DF (ch 1083–1084).

#### 82. Urouge (urouge)

- STR 900 → Lower 600–680: Pacifista smash (ch 509) was damage-amped DF growth; must match Supernova peers - ch 508–509, ch 864 (Snack win/Cracker loss).
- DUR 800 → Lower 650–750: conscious after Kizaru beating; survived Cracker (ch 508, ch 793) - Top-tier band unearned.
- SPD 500 → Lower 350–450: Drake intercepted his Grove 21 rampage; no speed receipt (ch 498).
- AWR 600 → Lower 300–400: no haki, no senses feats anywhere (ch 498–509).
- INT 58 → Lower 50–55: smiling rampage monk above Arlong/brawler cap with zero cunning (ch 498).

#### 83. Burgess (jesus-burgess)

- STR 1200 → Lower 600–680: pre-DF base only - Riki Riki came post-Dressrosa (ch 1063); lost to Sabo (ch 780–792).
- DUR 800 → Lower 600–700: Sabo's haki-imbued finisher shattered his guard (ch 792).
- SPD 500 → Lower 350–450: lumbering wrestler outmaneuvered by Sabo throughout (ch 780–792).
- AWR 500 → Lower 350–450: headfirst brawler, zero senses feats (Colosseum ch 780–792).

#### 84. Pizarro (avalo-pizarro)

- STR 800 → Lower 600–700: island feats are Shima Shima DF; no base strength receipt (ch 1080–1088).
- AWR 800 → Lower 350–450: island-wide sensing is DF-merge surveillance, no base CoO (ch 1080).

#### 85. Vasco Shot (vasco-shot)

- SPD 600 → Lower 400–500: drunk brawler, zero speed feats (ch 1080 DF reveal only).
- AWR 600 → Lower 350–450: no senses feats on-page (ch 1080).

#### 86. Koby (koby)

- AWR 800 → Lower 500–600: Marineford awakening + ch-1088 reactions are CoO (haki block); base senses lack Top-tier receipt (ch 569, ch 1088).
- STA 600 → Raise 650–750: nightly 100–200x bag volume beyond regimen (ch 1088 flashback).
- BIQ 85 → Lower 75–80: one great Honesty Impact timing moment ≠ Kaido-85 career BIQ (ch 1088).

#### 87. Kawamatsu (kawamatsu)

- AWR 600 → Lower 400–500: action feats, zero senses feats (ch 948).
- INT 70 → Lower 55–60: loyal samurai; Hiyori protection is devotion, not intellect (ch 939, ch 952).
- BIQ 88 → Lower 78–82: above Kaido 85 unearned; Udon coordination + group raid share (ch 948, ch 987).

#### 88. Denjiro (denjiro)

- BIQ 89 → Lower 82–85: brief Zoro exchange + group Kaido stab don't clear Kaido 85 solo (ch 933, ch 987).

#### 89. Ashura Doji (ashura-doji)

- STR 1100 → Lower 650–750: Jack duel was even and Oden once beat him - Peak band shatters parity (ch 922, ch 958–962).
- DUR 900 → Lower 700–780: Jack-parity DUR; Top-tier ceiling unearned solo (ch 922).
- AWR 600 → Lower 400–500: Mt. Atama boss portrayal, zero senses feats (ch 920–924).
- INT 72 → Lower 58–65: ch-950 graveyard speech is loyalty/history, not intellect (ch 950).
- BIQ 88 → Lower 78–82: Jack-even + group raid share don't clear Kaido 85 (ch 922, ch 987).

#### 90. Saul (jaguar-d-saul)

### Batch 10 - Franky → Hawkins

#### 91. Franky (franky)

- STR 800 → Lower 650–750: Senor Pink win (ch 775) was Iron Boxing slugfest vs officer-tier foe; Sasaki kill (ch 1019) was Radical Beam = weapon block; no unaugmented Top-tier output.
- SPD 500 → Lower 300–400: ch-775 slugfest = tanked instead of evading; bulky cyborg, zero Commander footspeed.
- AWR 600 → Lower 400–500: no notable CoO; shipwright senses ≠ Commander awareness.

#### 92. Pedro (pedro)

- SPD 800 → Lower 650–750: Tamago duel (ch 853) was mutual-hits brawl, not blitz; zero Top-tier speed showings.
- AWR 800 → Lower 600–700: no elite CoO feats; mink night-eyes ≠ Top-tier senses.

#### 93. Smoker (smoker)

- BIQ 78 → Lower 68–74: outboxed twice - Law heart steal + Vergo Haki gap (ch 690); stall bought Law seconds but credits the plan, not Smoker.

#### 94. Cavendish (cavendish)

- BIQ 82 → Lower 70–78: Hakuba attacks allies indiscriminately (ch 772) + sleep crash - unfieldable tactic; suppression lasts seconds.

#### 95. Robin (nico-robin) - ANCHOR VERIFIED

#### 96. Ulti (ulti)

- BIQ 84 → Lower 60–70: charged an Emperor's-castle intruder skull-first (ch 983) with zero tactics - ≈ Kaido 85 wrong-band-adjacent for a headbutt merchant.

#### 97. Sasaki (sasaki)

- BIQ 75 → Lower 62–70: spun frill backwards mid-duel (ch 1019) + exposed belly - won-position lost 1v1.

#### 98. Black Maria (black-maria)

- BIQ 78 → Lower 65–72: ch-1020–21 taunts awakened Demonio Fleur; set own floor ablaze - talk-no-jutsu victim.

#### 99. Apoo (scratchmen-apoo)

#### 100. Hawkins (basil-hawkins)

- BIQ 82 → Lower 72–78: Killer solved the Kid-hostage doll loophole, severed the un-transferable left arm (ch 1033); Death/Tower draws didn't save him.

### Batch 11 - Page One → Marigold

#### 101. Page One (page-one)

#### 102. Fisher Tiger (fisher-tiger)

#### 103. Kyros (kyros)

- SPD 380 → Lower 240–280: ONE-LEGGED fighter mocked for single leg on uneven Flower Hill - cannot run normally; file rates whole-body Veteran speed (ch 739, ch 773, ch 776).
- STA 380 → Raise 450–500: 3000 undefeated wins + Diamante commends running country + fighting one-legged guarding daughter - file underrates the STA anchor (ch 742–744, ch 776).
- INT 80 → Lower 50–60: gladiator brawler, no craft/command intellect - 80 nears Nami 88 vs ~55 brawler cap.
- BIQ 90 → Lower 78–84: god-tier near Mihawk 95/Zoro 94, above Kaido 85 - Diamante bout needed Robin save, took heavy wounds (ch 776–777).

#### 104. Hajrudin (hajrudin)

#### 105. Brook (brook)

#### 106. Bonney (jewelry-bonney) - ERA FLAG

- STR 200 → Lower 80–120: TRUE body is a 12-year-old child (ch 1098); adult form is Toshi DF - file rates adult athletic as base.
- DUR 190 → Lower 80–130: Sapphire Scales childhood; captured by Teach; spared by Akainu - no Officer durability (ch 580, ch 595, ch 1098).
- SPD 210 → Lower 120–160: child legs can't hold Officer 210 without DF adult form (ch 1060, ch 1098).
- STA 200 → Lower 100–140: diseased-childhood stamina; file rates adult endurance as base (ch 1098).
- INT 68 → Lower 55–62: 12-year-old mind; captain cunning but above brawler cap unjustified for a child.
- BIQ 80 → Lower 60–68: Nika Distorted Future vs Saturn is DF-block feat (ch 1103–1114); base tactics are child-escapee level.

#### 107. Ideo (ideo)

#### 108. Lindbergh (lindbergh)

#### 109. Sandersonia (boa-sandersonia)

#### 110. Marigold (boa-marigold)

- INT 60 → Lower 50–55: Kuja brawler exceeds ~55 cap by 5 with no craft/command feats.

### Batch 12 - Kiku → Wyper

#### 111. Kiku (kikunojo)

#### 112. Kin'emon (kinemon)

#### 113. Laffitte (laffitte) - ALL SPECULATIVE

- STR 250 / DUR 240 / SPD 360 / AWR 340 / STA 260 / INT 76 / BIQ 72 (all Speculative): gate hypnosis (ch 234) is hax, not muscle; unexplained wings flight, no timed feat; file correctly keeps DF none - do not invent DF; ex-sheriff + Mary Geoise infiltration suggests cunning, unquantified; zero duels. Settle with on-panel action.

#### 114. Van Augur (van-augur)

- STR 240 / DUR 230 / STA 260 (all Speculative): pure sniper, no melee/grapple panel; never tanked anything.
- SPD 400 Speculative: prices Wapu Wapu teleport (Hachinosu-era DF) into body - teleport belongs in DF block; unaugmented footspeed unshown.
- BIQ 85 → Lower 65–72: ties Kaido 85 with ZERO on-panel duels - Usopp-rival hype is portrayal, not feats (nothing through Egghead/Hachinosu).

#### 115. Daifuku (charlotte-daifuku)

#### 116. Moria (gecko-moria) - ERA FLAG

- STR 400 → Lower 300–350: file splits prime Kaido-rival (ch 490 "once rivaled Kaido") vs present fat true body that lost TB (ch 450–490) - pick PRESENT era like Bonney B11; Asgard is DF, not body.
- DUR 420 → Lower 320–370: present Moria folded to pre-G2/G3 Luffy + Nightmare damage TB (ch 480–490); Doffy prey post-MF (ch 581).

#### 117. Bege (capone-bege)

#### 118. Devon (catarina-devon) - ALL SPECULATIVE

- STR 360 / DUR 340 / SPD 350 / AWR 360 / STA 320 / INT 72 / BIQ 78 (all Speculative): Hachinosu Moria capture (ch 1059–1081) off-panel/ambiguous - no clean panels; "Crescent Moon Hunter" cunning title-only; zero on-panel duels. (File correctly gives Kyubi mythical zoan - Absalom's Suke Suke went to Shiryu, not Devon.) Settle with on-panel action.

#### 119. Doc Q (doc-q)

- INT 80 → Lower 70–74: BB-pirate doctor title only - no Law-style diagnosis/surgery panels to hold near-86 medical ceiling.
- BIQ 76 Speculative: zero on-panel tactical duels; sickness-spread is DF hax (Shiku Shiku), not battle craft.

#### 120. Wyper (wyper)

### Batch 13 - Gan Fall → Bartolomeo

#### 121. Gan Fall (gan-fall)

- SPD 270 → Lower 200–240: mount-assisted; Pierre flight is Uma Uma graft + wings, not Gan Fall's body (ch 248).

#### 122. Sugar (sugar) - CHILD BODY

- SPD 120 → Raise 150–190: tagged Tontatta dwarves moving faster than eyes track (ch 738).
- AWR 200 → Lower 100–150: blindsided by Usopp twice (ch 740, ch 743).
- STA 100 → Lower 50–70: faints unconscious at scary faces (ch 740, ch 756) - Helpless composure.

#### 123. Monet (monet)

- STR 180 → Lower 120–160: bites landed via snow jaws + harpy talons (Law graft/DF, ch 687–690).
- SPD 300 → Lower 200–250: flight/chase speed is Yuki Yuki snow + grafted wings, not base legs.
- BIQ 72 → Lower 40–55: froze at Zoro intent, failed to reform, cheap backstab failed (ch 690).

#### 124. Mr. 3 (galdino)

- STR 180 → Lower 80–120: zero body feats; lost to Luffy LG (ch 120–130); all offense is wax.
- DUR 170 → Lower 80–120: hides behind Candle Wall vs Magellan Hydra (ch 535–548); wall is DF, not body.
- AWR 320 → Lower 200–260: Veteran senses unearned; repeatedly blindsided, lookout-grade at best.
- INT 82 → Lower 68–76: cunning (wax keys, Candle Champion) but 82 crowds Nami 88 - Baroque officer, not navigator-tier.

#### 125. Senor Pink (senor-pink)

- SPD 260 → Lower 180–220: tower-swim repositioning is Sui Sui ground-swim; base footwork tank-no-dodge style.
- BIQ 78 → Lower 65–72: good setup but lost duel; 78 nears commander tacticians unearned.

#### 126. Rebecca (rebecca)

- STR 220 → Lower 120–160: dull blade, zero damaging wins; strike on Diamante ineffective, needs Kyros/Robin rescue (ch 757+).
- DUR 210 → Lower 120–170: one Diamante club hit shattered helmet; Robin shielded her (ch 773+, Flower Hill).

#### 127. Hody (hody-jones) - STEROID FLAG

- STR 450 → Lower 300–380: overdosed handfuls vs Luffy/Noah (ch 640–650) are DRUGS, not base; also breaks basic 400 cap.
- DUR 420 → Lower 280–360: same drug + cap violation; clean Hody scarred by Zoro pre-overdose.
- SPD 320 → Lower 250–300: water-bullet flicks + Shirahoshi chase are overdose feats (FI arc).
- STA 400 → Lower 280–350: at basic cap, reads as dosed endurance; clean base unproven past Zoro loss.
- INT 68 → Lower 50–60: racist ideologue, Arlong's heir but rage-driven; 68 exceeds Arlong anchor 58 unearned.

#### 128. Wadatsumi (wadatsumi)

- STR 460 → Lower 380–430 (+ rarity raise): 80m pufferfish base justifies Veteran, but 460 breaks basic 400 cap - rarity illegal.
- DUR 440 → Lower 350–400 (+ rarity raise): same cap violation; felt Jinbe Buraikan + Sanji Hell Memories pain (FI).
- STA 380 → Lower 280–340: deflated and dropped after Jinbe/Sanji combo - near-cap STA unearned.
- BIQ 56 → Lower 35–50: gullible, zero tactics; Surume win needed Energy Steroid (drug, FI).

#### 129. Arlong (arlong) - ANCHOR VERIFIED

#### 130. Bartolomeo (bartolomeo)

- STR 280 → Lower 120–180: zero body hits; King Punch block (ch 709) + Gladius KO (ch 773) are Bari Bari barriers.
- DUR 270 → Lower 120–180: never tanks anything skin-to-skin; Hakuba/Dellinger stopped by DF.
- SPD 260 → Lower 150–200: no foot-speed feats; B-Block win by standing behind barrier (ch 709).
- AWR 300 → Lower 180–230: Officer+ senses unearned for gangster-fanboy; barrier is passive, not perception.
- STA 280 → Lower 150–200: no endurance feats outside DF shell.
- BIQ 72 → Lower 55–65: Barrier Crash/stairs/Ball (ch 709, ch 757, ch 773) are DF-craft; base duelist BIQ average.

### Batch 14 - Caesar → Koala

#### 131. Caesar (caesar-clown)

- STR 200 → Lower 80–140: gasless fraud never throws a punch; all offense is Gasu Gasu DF (ch 668–692).
- DUR 320 → Lower 150–220: one-shot KO by Luffy's Grizzly Magnum (ch 691–692) - Veteran DUR absurd.
- SPD 340 → Lower 150–220: flight/gas mobility is DF block; base body caught clean (ch 691).
- AWR 380 → Lower 200–260: blindsided repeatedly; fell for Law's SAD-room plot (ch 669–682).
- INT 94 → Lower 84–88: ex-MADS SAD/SMILEs legit but above Robin 93, near Vegapunk ceiling - peer Queen 88 (ch 658–670).
- BIQ 58 → Lower 45–53: coward begged Luffy mid-fight (ch 691); outplayed by Law entire arc.

#### 132. Daz Bonez (daz-bonez)

#### 133. Momonosuke (kozuki-momonosuke) - CHILD BODY

- STR 180 → Lower 30–60: TRUE body is an 8-year-old child - same child-body ruling as Bonney/Sugar; dragon feats are DF block.
- DUR 170 → Lower 40–80: child body; Kaido interrogation endured via will, not flesh (ch 986–995).
- SPD 160 → Lower 60–110: 8-year-old legs, carried everywhere (DF dragon flight excluded).

#### 134. Hack (hack)

- SPD 300 Speculative: barrier loss gives no clean speed read - portrayal-only placement.

#### 135. Hyouzou (hyouzou) - DRUG FLAG

- DUR 340 Speculative: only durability read is drugged-state loss to Zoro (ch 646–647); clean DUR unmeasured.
- BIQ 65 → Lower 50–60: fell for Zoro's insult-bait, lowered guard before Rengoku Oni Giri (ch 646–647).

#### 136. Fukaboshi (fukaboshi)

- BIQ 78 → Lower 60–70: lost to Hody with zero tactical feats; near-Pedro 84 unjustified (ch 645–647).

#### 137. Bon Clay (bentham)

#### 138. Tamago (baron-tamago)

- STR 300 → Raise 450–550: Pedro rivalry demands comparability - Pedro B10 600; broke even in courtyard (ch 850).
- DUR 310 → Raise 400–500: traded blows with Pedro across two eras; five-years-ago eye-duel + rematch (ch 850).
- SPD 280 → Raise 350–430: kept up with mink-fast Pedro in rematch until sword-break (ch 850).

#### 139. Hannyabal (hannyabal)

- STR 200 → Raise 250–300: easily beat Buggy + Mr. 3 (ch 537); dueled Bon Clay (ch 535–540); below epic floor at 200.
- DUR 200 → Raise 240–300: refused to stay down vs pre-TS Luffy (ch 542–543); Magellan named him successor (ch 544).
- SPD 130 → Raise 200–250: kept re-engaging Luffy's advance (ch 542–543); Ordinary 130 contradicts duelist read.
- AWR 120 → Raise 180–230: tracked Luffy + riot flow on Level 4 (ch 542–544); Ordinary 120 too low.
- STA 180 → Raise 220–270: kept standing until Teach stomped him (ch 543); troops begged him to stop (ch 542).
- BIQ 80 → Lower 65–75: stomped flat by Teach (ch 543) with zero adaptation; near-Pedro 84 unjustified.

#### 140. Koala (koala)

- BIQ 74 → Lower 55–65: zero manga duels, Dressrosa support only; near-Fukaboshi 78 / Pedro 84 unjustified.

### Batch 15 - Raizo → Mont-d'Or

#### 141. Raizo (raizo)

- STR 160 → Raise 220–300: Scabbard rooftop + dueled Oniwabanshu chief; sits at half of Kiku 340 / Kin'emon 350 (ch 992, ch 1022; Vivre Card #0981).
- DUR 140 → Raise 180–220: survived Kaido's counter + Onigashima flames while paralyzed (ch 993, ch 1036–1041).
- STA 150 → Raise 190–240: outlasted Fukurokuju in mutual-paralysis endurance (ch 1038–1041).

#### 142. Kanjuro (kurozumi-kanjuro) - LEGEND FLAG

- STR 150 → Raise 250–320: clashed with Kiku + pierced her; must sit just below Kiku 340 (ch 985–986, ch 1014; Vivre Card #0917).
- DUR 140 → Raise 200–260: survived Kiku's finishing and returned; only Kin'emon put him down (ch 986, ch 1014).
- STA 150 → Raise 180–240: kept acting after mortal wounds to the end (ch 1014).

#### 143. Perona (perona)

- AWR 140 → Lower 80–110: never detected Usopp's adhesive or approach to real body (ch 465–466).
- INT 58 → Lower 40–52: fell for toy roaches + balloon hammer (ch 466).
- BIQ 68 → Lower 45–58: totally outplayed by pre-TS Usopp, zero adaptation (ch 465–466).

#### 144. Corazon (donquixote-rosinante)

- STR 100 Speculative: zero combat feats; tall commander portrayal only (Vivre Card #0924).

#### 145. Hatchan (hatchan)

#### 146. Blue Gilly (blue-gilly)

- STR 150 → Raise 200–280: Block B standout longleg striker; still below Ideo 400 (ch 709; Vivre Card #0868).
- DUR 160 → Lower 100–140: one-shot KO by Dellinger's neck kick (ch 754).

#### 147. Leo (leo)

- STR 120 Speculative: no direct STR feats in SOP; dwarf-strong portrayal only (ch 737–743).

#### 148. Kamakiri (kamakiri)

- SPD 160 → Lower 100–130: mobility all Jet Board equipment, no foot-speed feats (ch 251).
- STA 110 → Raise 140–180: kept fighting wounded from Ohm into the Enel bout (ch 263–264).
- INT 60 → Lower 45–55: above brawler 55 cap with zero clever showings (ch 264).
- BIQ 72 → Lower 50–62: kept slashing intangible Logia asking why it won't die, zero adaptation (ch 264).

#### 149. Neptune (neptune)

- BIQ 72 → Lower 50–60: captured without battle command, zero combat showings (ch 618).

#### 150. Mont-d'Or (charlotte-mont-dor)

### Batch 16 - Hina → Wapol

#### 151. Hina (hina)

#### 152. Tsuru (tsuru)

- AWR 180 → Lower 140–160: no enhanced-sense feats at 76; ch-234 puppet read was tactical, not sensory.
- BIQ 75 → Raise 80–85: hunted Donquixote Pirates years (ch 764–765); Marineford formation call (ch 551).

#### 153. Tashigi (tashigi)

#### 154. Helmeppo (helmeppo)

- STR 60 → Raise 80–100: Garp/Bogard swordsmanship training + SWORD lieutenant commander; still far below Koby.

#### 155. Chopper (tony-tony-chopper) - FORM FLAG

- BIQ 62 → Raise 68–72: brewed Ice Oni antibody mid-raid (ch 1005+); Kumadori win was berserk MP (ch 403–408).

#### 156. Nami (nami) - ANCHOR VERIFIED

#### 157. Usopp (usopp)

#### 158. Pudding (charlotte-pudding)

- INT 82 → Lower 75–80: wedding plot was Big Mom/Bege design; point-blank miss vs Sanji; map (ch 827) + memory-edit (ch 851) support mid-70s, not near-scholar.

#### 159. Brûlée (charlotte-brulee)

#### 160. Wapol (wapol)

- STR 150 → Lower 70–100: true body never threw barehanded hit; cannon arms were eaten weapons (ch 145–148).
- DUR 160 → Lower 90–120: one-shot by Drum Luffy (ch 153) - Officer-band DUR above Hina 130 is wrong-band.

### Batch 17 - Zala → Gancho

#### 161. Zala (zala)

- STR 100 → Lower 50–65: dominated Nami only via thorn growths; base body ordinary woman (ch 192–197).
- DUR 90 → Lower 50–70: took Thunderbolt + wall crash on DF body; no base soak feats (ch 195–197).
- SPD 150 → Lower 80–100: Officer band on heel-spike/roll attacks that are DF movement (ch 193–196).
- AWR 130 → Lower 70–90: no Observation; Baroque officer alertness only, 60 over ordinary (ch 191–197).
- STA 110 → Lower 70–90: single duel gassed while smoking; ordinary stamina (ch 192–197).
- BIQ 68 → Lower 45–55: fell for Mirage Tempo/weather setups; charged recklessly (ch 195–197).

#### 162. Koza (koza)

#### 163. Buggy (buggy-the-star-clown) - EPIC FLAG + LUCK WARNING

- DUR 150 → Lower 50–70: slash immunity is Bara Bara DF, not base; KO'd by Luffy, hurt by rebounded Muggy Ball (ch 18–19, ch 560–561) - wrong-band Officer.
- INT 78 → Lower 40–55: idiot-lucky figurehead; Cross Guild presidency by poster error (ch 1056–1058) - luck rated as mind.

#### 164. Pell (pell)

- STR 170 → Lower 90–120: giant-bomb carry done in full-falcon form (ch 208); base back broken by Robin (ch 169).
- DUR 180 → Lower 80–110: bomb soak is Zoan-form feat (ch 208–209); base spine snapped (ch 169) - 100 over.
- SPD 220 → Lower 90–120: flight speed is DF; base foot ordinary - wrong-band Officer+.
- AWR 140 → Lower 80–100: falcon vision is hybrid-form sense; base captain alertness only.
- STA 160 → Lower 90–120: bomb-flight stamina is DF-form; base unproven past one guard rotation.

#### 165. Bepo (bepo)

#### 166. Shinobu (shinobu)

#### 167. Hogback (doctor-hogback)

- INT 96 → Lower 82–88: genius surgeon (zombie preservation, Absalom/Cindry mods, Oars cockpit ch 456–463) beats Chopper 78 ≈ Law 86 - but 96 touches Robin 93 / Vegapunk 100 ceiling. Doctor ladder: Chopper 78 < Hogback ~85 ≈ Law 86 < Robin 93.

#### 168. Caribou (caribou)

- DUR 150 → Lower 60–90: Logia intangibility is not base; folded to Luffy (ch 650), gift-wrapped to Jinbe/G-5 (ch 677) - Officer-boundary coward.

#### 169. Kabu (kabu)

- SPD 160 → Lower 100–130: Yellow Kabu flight is Mushi-model DF aviation; Officer foot speed on 20cm body is anatomy FLAG (ch 718–743).
- BIQ 68 → Lower 50–60: no individual tactics - SOP was Leo/Usopp plan (ch 742–743).

#### 170. Gancho (gancho)

- STR 120 → Lower 60–90: zero-combat elder chief, authority only, no strength panels (ch 711–717).
- DUR 120 → Lower 60–90: never takes a hit in canon, featless.
- SPD 130 → Lower 70–100: never moves in combat, featless.
- AWR 140 → Lower 80–100: no sensory feats, chief exposition only (ch 717).
- STA 120 → Lower 60–90: no exertion feats, old-chief frame.

### Batch 18 - Wicca → Manboshi

#### 171. Wicca (wicca)

- BIQ 60 → Lower 40–50: featless medic with zero combat role in SOP (ch 738–744); matches squad-leader Bian number unearned.

#### 172. Bian (bian)

#### 173. Goldenweek (miss-goldenweek)

#### 174. Cobra (nefertari-cobra)

#### 175. Vivi (nefertari-vivi)

- INT 88 → Lower 78–84: outmaneuvered by Crocodile, failed to stop war (ch 211–213) - equals navigator-genius Nami 88 unearned.

#### 176. Shirahoshi (shirahoshi) - POSEIDON CLEAN

#### 177. Vegapunk (vegapunk) - CEILING + FORM FLAG

- AWR 100 → Lower 40–60: old-man base senses - 100 = Punk Records external database (ch 1066–1067), NOT base senses. FLAG like Fujitora B3.

#### 178. Camie (camie)

#### 179. Ryuboshi (ryuboshi)

- BIQ 72 → Lower 55–62: nearly featless; out-BIQs rebel-general Koza 48, near-equals warrior Fukaboshi 78 - minimal FI vs New Fishman Pirates (ch 625–644).

#### 180. Manboshi (manboshi)

- BIQ 65 → Lower 55–60: nearly featless; above war-leader Koza 48 unearned - minimal FI combat (ch 625–644).

### Batch 19 - Mansherry → Raki (final four)

#### 181. Mansherry (mansherry)

- AWR 80 → Lower 35–50: no sensing feats as captive, mantra-less - Ordinary misband for Helpless body (ch 774–775).
- INT 62 → Lower 50–58: fickle/irritable princess, no intellect feats - above Arlong-58/brawler-cap unjustified (ch 717).

#### 182. Conis (conis)

#### 183. Aisa (aisa)

- STR 60 → Lower 25–40: age-9 child (Vivre #0292); Burn Blade carried, never used in combat - Ordinary-floor misband (ch 249, ch 264).
- SPD 80 → Lower 40–60: child on foot; waver broke down (ch 265), Pierre-carried (ch 282–283) - Ordinary misband.
- AWR 90 → Lower 30–50: base senses ordinary child - Mantra-born-with-it (ch 265) lives in haki block - FLAG haki-split like Fujitora/Usopp (ch 251, ch 265).
- STA 60 → Lower 30–45: child stamina, tires/needs escort - boundary misband (ch 264–265).

#### 184. Raki (raki)

- STR 60 → Raise 80–110: active Shandia warrior, Upper Yard assault - must approach Kamakiri-110 tier (ch 251–253; Vivre #0297).
- DUR 50 → Raise 70–100: faced Gedatsu/Ohm line (ch 252); Survival Game survivor - Helpless misband for warrior (ch 252–253).
- STA 60 → Raise 80–110: still active at 2hr Survival Game mark with 7 warriors (ch 264).
- BIQ 58 → Lower 40–50: told not to join battle (ch 249); purse-distraction needed Kamakiri rescue (ch 253); reckless Enel attack (ch 270).

---

## Review complete - all 184 characters

### Decisions needed before apply step (user calls)

---

## Apply log

APPLIED to `src/data/characters-v2.ts` (baseStats only - rarity, haki, DF, weapon untouched).

- Range verdicts applied at midpoint, halves rounded up (e.g. Lower 850–950 → 900, Raise 42–48 → 45, 95–98 → 97).
- "Hold" verdicts (Marco STR 600, Queen STA band): no change.
- Era/form decisions: Bonney = true child body · Moria = present fat body · Hody = clean (no steroids) · Hyouzou = clean · Chopper = Brain-Point base · Kuma = pre-erase mind (no numeric change) · Vegapunk = Stella old man.
- Post-apply: `tsc` clean, `eslint` clean, `prettier` clean, rankings regen'd, 300-draft headless sanity (0 big-race misses, 0 bad drafts), `astro build` clean.
- Ranking effect: 8 gods all still top 9 (Kaido intrudes at 7 on corrected 10,689). Biggest movers down: Shanks (Mihawk convergence), Luffy (rubber/G2/FS stripped to DF/haki), Whitebeard (sick-body SPD/AWR). Dragon holds #4 untouched - speculative-policy artifact, revisit when feats land.

## Cap log (ceiling 950)

APPLIED manually, one Edit per character (user request - no script).

- Rule: any `baseStats` physical (STR/DUR/SPD/AWR/STA) above 950 → 950. INT/BIQ untouched.
- 19 characters: Imu (5 fields), Joy Boy (5), Rocks (3), Roger (4), Garp (2), Teach (DUR), Dragon (AWR), Luffy (STR/SPD/STA), Whitebeard (STR/DUR), Kaido (STR/DUR/STA), Big Mom (STR/DUR), Jinbe (DUR), Kuma (DUR), Oden (STA), Smoothie (STR), Yasopp (AWR), Dorry (STR/DUR), Brogy (STR/DUR), Saul (STR/DUR).
- Straggler sweep caught 5 the plan missed (Smoothie, Yasopp, Dorry, Brogy, Saul) + Luffy SPD 975. Verified zero base physicals above 950 after.
- Peer ladders preserved: Roger=WB (both →950), Dorry=Brogy (both →950/950), Shanks≈Mihawk + admirals untouched.
- Ranking effect: god order intact (Imu > Joy Boy > Rocks > Dragon > Luffy > Roger > WB > Shanks). Imu 13,070 → 12,018 (−8%). Kaido drops to 8, Akainu enters top 10 (Big Mom out).
- Post-apply: `tsc` clean, `eslint` clean, `prettier` clean, rankings regen'd, 300-draft sanity clean, `astro build` clean.

## Soft-cap log (body curve, knee 500 × 0.5)

APPLIED in code, not data - `softCapBody()` in `src/lib/draft.ts`, wired into Step 1 of `calculateFinalStats` AND `calculateCharacterBST` (both, or ranks break). Rank/preview scripts import it (duplicated formula copies removed - single source of truth). `GAME_DESIGN.md` Step 1 documents it.

- Rule: base physical ≤500 counts fully, every point above counts half. Monotonic - peer order never flips. Weak bodies (all ≤500) byte-identical.
- Calibration (in-memory sweep, knee×factor): A (500×0.5) chosen over B (600×0.4) - better R1-share compression (61.0% → 56.8% for Zoro-avg build) AND cleaner rank preservation (top-9 order identical to linear; only #10 BM→Loki boundary swap). God relative order identical; Garp-body > WB/Shanks bodies holds; admirals relative order holds.
- Measured: Imu base-5 4750 → 3625; Imu full BST 12,018 → 10,785 (−10%); Imu−Zoro full-BST gap 4,889 → 4,291. Nami unchanged (1,430).
- One wrong edit made and instantly reverted mid-session (`pickRandom` return type) - verified zero diff via `git diff` before proceeding.
- Post-apply: `tsc` clean, `eslint` clean, `prettier` clean, rankings regen'd, 300-draft sanity clean, `astro build` clean.

---

---

# Part 2 - Devil Fruit (from DF_REVIEW.md)

Scope: `devilFruit` ONLY - type + names + awakened flag + 5 output values (attack/defense/speed/awareness/stamina).

## Mechanics (verified against code)

- R5 Step 3 (`draft.ts:402-408`): flat 1:1 addition - `attack/defense/speed/awareness/stamina` added with no multipliers, no type scaling, no STR/DUR contribution. Skipped if `type === "none"`. Identical math in live-rank calc (`draft.ts:486-492`).
- R5 pool is DF-holders-only, rarity-weighted (`getDFUsersByRarity`, `draft.ts:36-39, 87-89`) - every R5 option carries a fruit by construction. (Earlier plan note about all-none R5 rounds was wrong - struck.)
- `awakened` appears NOWHERE outside the data file (zero hits in `src/lib`, scripts) - pure label, zero mechanical effect. Awakening matters only through the values reviewers assign. (User decision: keep label-only; no multiplier mechanic.)

## Standards

### Correctness checks (every character)

- **Assignment**: right fruit per canon. Teach keeps Yami Yami (Gura stolen + WB-associated - exclusion noted, not modeled). Single-fruit file: the fruit that defines the datasheet.
- **Type classification**: logia (intangible element) · zoan · ancient_zoan (extinct) · mythical_zoan (creature/god) · paramecia (else). Special cases: Katakuri mochi = special paramecia · Yami = logia (no intangibility - note only) · Momonosuke artificial = filed type verified, not assumed · Devon = Kyubi (Suke went to Shiryu).
- **Awakened flag**: true ONLY with evidence - Luffy, Law, Kid, Katakuri, Doffy, Lucci (Egghead zoan), Joy Boy. False stays for: Kaido, BM, Teach, admirals/logias, Sabo/Ace Mera, Bonney (Distorted Future ≠ awakening), Hancock Mero, Crocodile, Enel, Smoker, Caesar, Queen/King/Jack/Marco forms, Burgess, Pizarro, Vasco, Doc Q, Van Augur.

### Awakened-value rule (user decision)

Awakened fruits are judged against their AWAKENED showings, not the base fruit:

- Law: Puncture Wille / Shock Wille vs BM - Yonko-damaging output, must clear unawakened-paramecia band.
- Kid: Damned Punk, railgun constructs - same bar as Law (rooftop peers).
- Katakuri: overflowing/ambient mochi, Block Mochi vs Snakeman - above base-paramecia, below Nika-scale.
- Doffy: awakened strings, God Thread, Birdcage sustain under G4 beating - above base-string output.
- Luffy: Bajrang Gun scale - mythical-awakened ceiling all others sit below.
- Lucci: Egghead recovery/pace vs G5 - zoan-awakening recovery must show in STA, not just offense.
- Joy Boy: sealed-blast scale (ch 1122) - ceiling-adjacent, speculative-keep per policy.
- Anti-patterns killed: awakened-true with base-level numbers (flag without substance) · unawakened numbers pricing awakening-level output. Workers cite the awakening panel per awakened fruit.

### Value judgments (peer ladders, no fixed bands)

- Judge output-consistency with panels + same-class/same-tier peers: mythical-awakened top (Nika scale) · Yonko-paramecia (Gura scale) · admiral-logia · ancient-commander · utility (Bonney/Sugar/Mansherry low).
- Cross-leak enforcement (from base/haki reviews, now DF-side): Enel lightning, Kizaru light-speed, Katakuri mochi, Cracker biscuits, Lucci awakening, Smoothie juice, Perospero candy, Oven heat, Daifuku genie, Mont-d'Or books, Doffy strings, Law Room, Kid magnets, Bege castle, Hawkins dolls, Apoo sound, Drake allo, Tobiroppo ancients, Marco regen, Hancock arrows, Kuma Paw-repel - ALL must live in DF values, nowhere else.
- **none-DF**: type `none` + all zeros + `awakened: false`, enforced. Any nonzero is auto-flag.

### Rules

- Verdicts per block: `Perfect` · `Re-assign → fruit` · `Re-type → type` · `Awakened flip` · `Raise/Lower → range` · `Speculative (no verdict)`.
- Flag bar: wrong fruit/type/awakened · ~50+ value deviation · any nonzero under `none` · awakened-true with base-level numbers.
- Every non-Perfect needs: canon evidence (manga, databooks/Vivre; anime/portrayal admissible) + peer comparison (same fruit class + same tier).
- Peer ladders to protect: Nika scale (Luffy ceiling, Joy Boy speculative-adjacent) · rooftop peers (Law ≈ Kid awakened) · Sweet Commander DFs (Katakuri > Cracker > Smoothie/Perospero/Oven/Daifuku) · calamity zoans (Kaido > King/Queen/Jack) · admirals logia parity · Tobiroppo ancients among themselves · Supernova DFs (Law/Kid/Apoo/Hawkins/Bonney/Bege).
- Low-feat characters (Imu, Joy Boy, Rocks, Harald, Ryuma, Loki, …): `Speculative`, keep current values. Era flags: Burgess Riki = post-Dressrosa ✓ · Shiryu Suke = current ✓ · Kuma Paw lifelong ✓.

## Verdicts

### Batch 1 - Imu → Akainu

#### 1. Imu (nerona-imu) - ALL SPECULATIVE (placeholder fruit)

- ASSIGN file [Akuma no Mi / Devil-Devil Fruit] (Speculative): placeholder name; true fruit unrevealed (Domi Reversi/Covenants/Omen trinity ch 1179/1181).
- TYPE file [mythical_zoan] (Speculative): demonic transformation suggests zoan, class unconfirmed - keep pending Oda naming.
- AWAKENED file [false] (Speculative): no awakening statement; keep false pending Elbaf reveal.
- VALUES file [300/300/300/250/250] (Speculative): magnitude unsettled until true fruit + Imu showings fixed.

#### 2. Joy Boy (joy-boy)

#### 3. Rocks (rocks-d-xebec)

- ASSIGN file [none] (Speculative): file gives no fruit - correct conservative call (Ope/Yami/Mera theories all unconfirmed).

#### 4. Roger (gol-d-roger)

#### 5. Garp (monkey-d-garp)

#### 6. Blackbeard (marshall-d-teach) - FLAGSHIP

#### 7. Shanks (shanks)

#### 8. Loki (loki) - CONFIRMED FRUIT, RE-ASSIGN NEEDED

- ASSIGN file [blank] (Re-assign → Ryu Ryu no Mi, Model: Nidhogg): Elbaf legendary fruit confirmed ch 1175 - blank names must be filled.
- VALUES file [250/250/200/180/200] (Raise → atk 300–350 / def 300–350 / spd 200–250 / awr 180–230 / sta 250–320): largest dragon + lightning + Harald-domination + Shanks/Gaban stall + giant-size scaling exceed Kaido-Seiryu baseline.

#### 9. Dragon (monkey-d-dragon) - ALL SPECULATIVE

- ASSIGN file [blank logia] (Speculative): wind/storm reading (Loguetown ch 100 gust) plausible but Oda never confirmed DF at all (anime "wind blast" absent in manga).
- TYPE file [logia] (Speculative): Kaze-type guess fits gale showings; Haki/weather-machine alternatives open - keep pending reveal.
- AWAKENED file [false] (Speculative): nothing supports awakening of unconfirmed fruit.
- VALUES file [300/280/300/250/250] (Speculative): mid-wind placeholder until Oda names fruit or confirms non-DF.

#### 10. Akainu (sakazuki)

### Batch 2 - Luffy → Nusjuro

#### 11. Luffy (monkey-d-luffy)

#### 12. Kizaru (borsalino)

#### 13. Whitebeard (edward-newgate)

- VALUES file [400/200/200/180/135] (Adjust → def 100–150, spd ~100–150): ATK 400 Perfect (Akainu beatdown + plaza split ch 575); DEF 200/SPD 200 high for pure-offense fruit - shock-block vs Aokiji spears (ch 567) justifies ~100–150 DEF; shockwave range is not mobility.

#### 14. Kaido (kaido)

- VALUES file [250/250/120/110/130] (Adjust → raise atk/def/spd): Blast Breath (ch 922) + Tornadoes + Flame-Cloud flight (ch 1001) + dragon scales underpriced - ATK/DEF light vs BM 300/WB 400; SPD 120 ignores flight mobility. Thunder Bagua correctly CoC-side excluded.

#### 15. Big Mom (charlotte-linlin)

#### 16. Mihawk (dracule-mihawk)

#### 17. Shamrock (figarland-shamrock)

#### 18. Kuzan (kuzan)

#### 19. Harald (harald) - provisional-speculative

#### 20. Nusjuro (ethanbaron-v-nusjuro)

- ASSIGN file [blank names] (Speculative): Bakotsu/Itsumade names never stated by Oda - yokai visuals only (ch 1110–1111).
- TYPE file [mythical_zoan] (Speculative): asserts mythical subclass without confirmation - no fruit names given; unconfirmed-class.
- AWAKENED file [true] (Flip → false): regen = Abyss/Imu-contract-side, NOT DF awakening - Saturn stripped (ch 1125); Joy Boy haki negates via Emet (ch 1122); smoke ribbons ≠ proof.
- VALUES file [220/220/200/170/210] (Speculative): Pacifista bisection/blitz (ch 1110–1111) real but DF-vs-sword-vs-Haki split + ice-imbuement unquantified; hold pending classification.

### Batch 3 - Saturn → Sommers (Gorosei classification flagship)

#### 21. Saturn (jaygarcia-saturn)

- ASSIGN file [blank] (KEEP blank, Speculative): ch-1110 beast-label "Gyuki" only - no Oda fruit name ever.
- TYPE file [mythical_zoan] (HOLD provisional-Speculative): yokai visual + sash only; same unconfirmed-class as Nusjuro; contract confounds DF reading.
- AWAKENED file [true] (Flip → false): regen = Abyss/Imu-contract-side (stripped ch 1125; Joy Boy haki negates ch 1122); sash ≠ proof.
- VALUES file [430/430/380/330/380] (HOLD-frozen per Nusjuro-uniformity, else TRIM DEF/STA): G5 blows/Kuma punch/Radical Beam all regen-healed, never tanked clean; venom/gaze/telekinesis DF-vs-Abyss unseparated.

#### 22. Warcury (topman-warcury)

- ASSIGN file [blank] (KEEP blank, Speculative): ch-1110 beast-label "Hoki/Fengxi" only; no fruit name ever (Nusjuro-blank precedent).
- TYPE file [mythical_zoan] (HOLD provisional-Speculative): boar-form visual + sash only; Red Roc hand-hurt (ch 1112) = transformed-hide, not type proof.
- AWAKENED file [true] (Flip → false): regen contract-side (ch 1125 strip, ch 1122 negate); CoC roar (ch 1111) is HAKI-side per haki review; charges DF-side unawakened.
- VALUES file [430/430/380/330/380] (HOLD-frozen per uniformity, else TRIM DEF): zero clean tanks; copy-paste identical to Saturn/Mars/JuPeter unjustified.

#### 23. Ju Peter (shepherd-ju-peter)

- ASSIGN file [blank] (KEEP blank, Speculative): ch-1110 "Sandworm" beast-label only; Mongolian-Death-Worm inspiration unconfirmed.
- TYPE file [mythical_zoan] (HOLD provisional-Speculative): burrow-form + sash only; worm-explosion-soak regen-masked; weakest Egghead showing.
- AWAKENED file [true] (Flip → false): regen contract-side (ch 1125/ch 1122); no independent awakening evidence.
- VALUES file [430/430/380/330/380] (HOLD-frozen per uniformity, else TRIM all): burrowing lunges only feat; identical-quad vs Saturn/Warcury/Mars indefensible on showings.

#### 24. Mars (marcus-mars)

- ASSIGN file [Tori Tori no Mi, Model: Itsumade] (STRIP → blank, Speculative): ch-1110 "Itsumade" is beast-label only - no fruit name ever; Nusjuro-flip precedent demands strip.
- TYPE file [mythical_zoan] (HOLD provisional-Speculative): bird-serpent visual + sash only; flight/talons/beams (ch 1110–1111) are form showings, not type proof.
- AWAKENED file [true] (Flip → false): regen contract-side (ch 1125 strip, ch 1122 negate); no awakening statement.
- VALUES file [430/430/380/330/380] (HOLD-frozen per uniformity, else TRIM DEF/STA + RAISE SPD/AWA): flight range (ch 1110–1111) suggests SPD/AWA above identical-quad; body never tanks clean.

#### 25. Rayleigh (silvers-rayleigh)

#### 26. Gaban (scopper-gaban)

#### 27. Fujitora (fujitora)

#### 28. Sengoku (sengoku)

#### 29. Killingham (rimoshifu-killingham)

- AWAKENED file [true] (Flip → false): hybrid/MMA (ch 1140–1151) base showings; scarf ≠ proof per Yamato precedent.
- VALUES file [350/350/300/250/300] (Speculative-HOLD pending Elbaf, else TRIM DEF/STA): MMA immortal army + sleep/dream-pull (ch 1143–1151) hax utility; zero clean tanks; Abyss-regen masks durability; Sengoku-mirror unjustified.

#### 30. Sommers (shepherd-sommers)

- VALUES file [300/280/250/230/250] (Speculative-HOLD pending Elbaf, else TRIM ATK/DEF): love-scaled thorns shred unquantified; Gaban-chop regen-healed, never tanked clean; near-Kirin/Sengoku scale unearned on 2-chapter showings.

### Batch 4 - Enel → Sabo

#### 31. Enel (enel)

- VALUES file [200/150/160/250/120] (Raise → near-550 band): 200M-volt El Thor + Maxim island-destroy + lightning travel/forms + heart-restart (ch 264–280) needs high logia band, not 36% of admiral-550s.

#### 32. Green Bull (aramaki)

- VALUES file [400/400/350/350/350] (Raise → 550 band): vine-pierce recovering King/Queen + Groves of Wrath + 3-yr photosynthesis fast (ch 1053–1054) still admiral-tier; breaks 550-trio parity at 73%. (Fire-weakness portrayal discount max ~50, not 150.)

#### 33. Ryuma (shimotsuki-ryuma)

#### 34. Oden (kozuki-oden)

#### 35. Shiki (shiki)

- VALUES file [180/160/160/150/160] (Raise → Fujitora-250+ utility band): Edd War armada-float + Marineford island-lift vs Garp/Sengoku (ch 0) + Strong World drops + legless flight/ID escape - fleet/island scale exceeds 250 baseline; file inverts ladder.

#### 36. Garling (figarland-garling)

#### 37. Law (trafalgar-d-water-law) - AWAKENED FLAGSHIP

- VALUES file [200/140/135/140/120] (Raise → 400+ atk band): Shock Wille internal-fry + Puncture Wille Onigashima-through-Wano crater vs BM (ch 1030–1040) is Yonko-damaging AWAKENED output, not unawakened-paramecia 200.

#### 38. Beckman (benn-beckman)

#### 39. Zoro (roronoa-zoro)

#### 40. Sabo (sabo)

- VALUES file [250/150/150/130/120] (Raise → BM-Soru-300 mid-logia band): Kaen Ryuo Burgess-win (ch 787) + Fujitora stall (ch 743–757) + Hiken inheritance needs mid-logia band + intangibility def, not 250/150 novice discount.

### Batch 5 - Yamato → Katakuri

#### 41. Yamato (yamato)

#### 42. Kid (eustass-kid) - ROOFTOP PARITY DECIDED

- VALUES file [150/140/110/110/120] (Raise → atk 400–450 band, def 250+): Damned Punk wounded Yonko BM (ch 1039–1040); 150 atk contradicts awakened-value rule + Law-400+ parity - Punk Rotten hull needs def 250+.

#### 43. Hancock (boa-hancock)

#### 44. King (king-the-conflagration)

- VALUES file [120/110/110/100/110] (Raise → atk 180–220, speed 150+): flame-off speed blitzed Zoro + aerial beak/kick pressure (ch 1032–1035) unsupported by 110 speed/120 atk.

#### 45. Marco (marco-the-phoenix)

#### 46. Sanji (sanji)

#### 47. Kuma (bartholomew-kuma)

#### 48. Crocodile (crocodile)

#### 49. Lucci (rob-lucci)

- VALUES file [180/140/160/110/150] (Raise → sta 200+ band, def 170+): 150 sta contradicts awakened-value rule - absorbed G5 blows and kept pace via zoan recovery (base STA cut to 725 was awakening-laundered - DF-side MUST carry recovery).

#### 50. Katakuri (charlotte-katakuri) - SWEET COMMANDER CEILING

- VALUES file [180/170/110/110/120] (Raise → atk ~300 commander-ceiling band, sta 180+): 180 atk equals unawakened Hancock and contradicts awakened-value rule - ambient-mochi + Block Mochi battered Snakeman across 11h.

### Batch 6 - Weevil → Vista

#### 51. Weevil (edward-weevil)

#### 52. Ace (portgas-d-ace) - MERA PARITY

- VALUES file [250/150/150/130/120] (Raise → atk 300 band): Mera-line PARITY - same fruit as Sabo-raise-300; Ace longer mastery + Entei + Aokiji-stalemate + 5-day Jinbe draw (ch 546–547).

#### 53. Doflamingo (donquixote-doflamingo)

- VALUES file [140/130/110/110/120] (Raise → atk ~220–250 band + sta/def up): violates awakened-value rule - God Thread pushed G4 Boundman + island-wide Birdcage sustain + Meteor-cut at atk 140 sits below featless Smoothie-120 and base Ace-250. Still below Katakuri-~300 (fell to G4 in ~30min vs Katakuri 12h, ch 781–790).

#### 54. Killer (killer)

#### 55. Smoothie (charlotte-smoothie)

- VALUES file [120/110/110/110/120] (LOWER atk 120 → ~80–100): zero combat feats - only subordinate-wringing + WCI standing (ch 846–890); juice output unproven, 120 overpays vs proven-output peers.

#### 56. Queen (queen)

#### 57. Jack (jack)

#### 58. Karasu (karasu)

#### 59. Jinbe (jinbe)

#### 60. Vista (vista)

### Batch 7 - Shiryu → Oven

#### 61. Shiryu (shiryu)

- VALUES file [150/150/110/115/120] (Trim → def 110–120): atk 150 = sneak-enabler premium for Garp-stab (ch 1087) - zero direct DF damage caps ~150; def 150 generous (evasion≠soak).

#### 62. Magellan (magellan)

#### 63. Kalgara (kalgara)

#### 64. Ivankov (emporio-ivankov)

#### 65. Drake (x-drake)

#### 66. Cracker (charlotte-cracker)

#### 67. Inuarashi (inuarashi)

#### 68. Nekomamushi (nekomamushi)

#### 69. Perospero (charlotte-perospero)

- VALUES file [120/115/110/110/120] (Trim → atk 100–110): 120 ties Cracker-120 - INVERTS decided Cracker > Perospero side; def/sta under Cracker correct on Sulong-mauling loss (ch 1026) + Bege-trap limits.

#### 70. Oven (charlotte-oven)

- VALUES file [160/130/110/110/120] (Trim → atk 120–130): 160 > Cracker-120 INVERTS decided Cracker > Oven side + double-counts heat-armor already in def; def 130 heat-armor soak acceptable vs Bege/Pekoms (ch 887–890).

### Batch 8 - Who's-Who → Brogy

#### 71. Who's-Who (whos-who)

#### 72. Kaku (kaku) - AWAKENED CORRECTION

#### 73. Pica (pica)

#### 74. Sentomaru (sentomaru)

#### 75. Gunko (manmayer-gunko)

- ASSIGN file [Aro Aro no Mi] (Speculative-lean-Confirm): vector-arrow fruit named (ch 1137); Elbaf showings ongoing - assignment correct but provisional.
- VALUES file [350/300/280/250/280] (TRIM-HEAVY → atk ~230 / def ~200 band): atk-350 shatters Sweet ladder (Katakuri-~300 top) - showings (giant-gauntlet constructs, redirect vs Jinbe/Brook ch 1146, Colon-hostage arrows) support provisional ~230/200; Imu-possession knockouts EXCLUDED (Imu's, not hers).

#### 76. Carrot (carrot)

#### 77. Yasopp (yasopp)

#### 78. Lucky Roux (lucky-roux)

#### 79. Dorry (dorry)

#### 80. Brogy (brogy)

### Batch 9 - Morley → Saul

#### 81. Morley (morley)

#### 82. Urouge (urouge) - MODELING QUESTION RESOLVED

#### 83. Burgess (jesus-burgess)

#### 84. Pizarro (avalo-pizarro)

#### 85. Vasco Shot (vasco-shot)

- ASSIGN file [Gabu Gabu no Mi, english blank] (Acceptable + FILL: english "Glug-Glug Fruit" missing - fill at apply): alcohol-liquor power shown (ch 1087).

#### 86. Koby (koby)

#### 87. Kawamatsu (kawamatsu)

#### 88. Denjiro (denjiro)

#### 89. Ashura Doji (ashura-doji)

#### 90. Saul (jaguar-d-saul)

### Batch 10 - Franky → Hawkins (all Perfect batch)

#### 91. Franky (franky)

#### 92. Pedro (pedro)

#### 93. Smoker (smoker)

#### 94. Cavendish (cavendish)

#### 95. Robin (nico-robin)

#### 96. Ulti (ulti)

#### 97. Sasaki (sasaki)

#### 98. Black Maria (black-maria)

#### 99. Apoo (scratchmen-apoo)

#### 100. Hawkins (basil-hawkins)

### Batch 11 - Page One → Marigold

#### 101. Page One (page-one)

- VALUES file [200/170/140/110/170] (Trim → atk 160): atk +40 breaks Tobiroppo-ancient uniform 160/170/140/110/170 (Drake/Who's-Who/Ulti/Sasaki); showings (Sanji-kick swipe ch 931, G3 recovery, BM one-shot loss) sit below Drake / with Sasaki; def/spd/awa/sta already uniform.

#### 102. Fisher Tiger (fisher-tiger)

#### 103. Kyros (kyros)

#### 104. Hajrudin (hajrudin)

#### 105. Brook (brook)

- VALUES file [120/165/121/110/120] (Trim → def 130): atk 120 prices soul-chill offense correctly - but def 165 prices one-time revival as combat durability; revival is NOT combat output (single extra life, dormant until first death). Regular-homie rout (ch 848) soul-authority utility while Zeus/Prometheus/Napoleon immune (ch 853) - no 35-pt def premium over Robin-130.

#### 106. Bonney (jewelry-bonney)

#### 107. Ideo (ideo)

#### 108. Lindbergh (lindbergh)

#### 109. Sandersonia (boa-sandersonia)

#### 110. Marigold (boa-marigold)

### Batch 12 - Kiku → Wyper

#### 111. Kiku (kikunojo)

#### 112. Kin'emon (kinemon) - BRIEF CORRECTED, SCABBARD DF-COUNT IS ONE

- VALUES file [110/110/105/115/110] (Trim → atk 100): utility/disguise fruit, near-zero combat - atk 110 generous; awa 115 acceptable (infiltration/disguise use).

#### 113. Laffitte (laffitte) - UNNAMED DF CONFIRMED, FILE WRONG

- ASSIGN file [none] (FAIL - brief wrong): Vivre Card/databook confirms UNNAMED DF (arms→wings ch 542 Impel Down) - file contradicts canon.
- TYPE file [none] (FAIL): follows bad assign - should be unnamed/unknown-type placeholder, not none.
- VALUES file [0/0/0/0/0] (FAIL): unnamed flight-DF showings (Impel Down flight, Mary Geoise infiltration ch 234; Gates hypnosis ch 576 hax-side) warrant small mobility values, not zeros - spec spd/awa-side trim band ~110–120; hypnosis stays haki/hax-side, not DF.

#### 114. Van Augur (van-augur)

#### 115. Daifuku (charlotte-daifuku)

#### 116. Moria (gecko-moria)

- VALUES file [120/131/110/110/120] (Trim → def 130): Doppelman-switch + Asgard-vessel justify atk 120; def 131 odd-precision - round to 130 (Brook-trim-def-130 parity band).

#### 117. Bege (capone-bege)

#### 118. Devon (catarina-devon)

- VALUES file [170/170/150/120/180] (Trim → atk/def ~140–150, sta ~150): near-featless commander - zero DF-combat showings; atk/def 170 + sta 180 = mythical-name premium, violates showings rule. (BB-commander floor; trickery-side awa keep 120.)

#### 119. Doc Q (doc-q)

#### 120. Wyper (wyper)

### Batch 13 - Gan Fall → Bartolomeo

#### 121. Gan Fall (gan-fall)

#### 122. Sugar (sugar)

- VALUES file [100/140/110/110/120] (Trim → def ~105–110): atk-100 touch-hax OK; def-140 unearned - one-scare-faint child, Trebol-guarded precisely because fragile (ch 740–742); eternal-youth ≠ durability.

#### 123. Monet (monet)

- VALUES file [150/180/125/130/120] (Trim → def ~150–160): atk-150 blizzard-output OK; def-180 overpays intangibility broken by Nami-heat + Zoro-fear (ch 687–690) - snow-walls fell, heart-stab killed her.

#### 124. Mr. 3 (galdino)

#### 125. Senor Pink (senor-pink)

- VALUES file [155/140/120/110/120] (Trim → atk ~130–140): def-140 earned (dozens of Franky blows absorbed, ch 774–775); atk-155 overpays - offense is Iron-Boxing/technique-side, fruit only repositions.

#### 126. Rebecca (rebecca)

#### 127. Hody (hody-jones)

#### 128. Wadatsumi (wadatsumi)

#### 129. Arlong (arlong)

#### 130. Bartolomeo (bartolomeo)

### Batch 14 - Caesar → Koala

#### 131. Caesar (caesar-clown)

- VALUES file [180/190/120/130/120] (Trim → def 150–160, Monet parity): Haki-vulnerable Grizzly Magnum KO (ch 691–692) + pipe-break Karakuni; hold atk 180 steel-melt Gastille + oxygen-theft Luffy-KO.

#### 132. Daz Bonez (daz-bonez)

- VALUES file [180/180/110/110/120] (Trim → atk 140–150 + def 150–160): extreme-diff loss to pre-Haki Zoro steel-cut ceiling; Senor Pink-atk-trim-130–140 band.

#### 133. Momonosuke (kozuki-momonosuke)

- VALUES file [180/150/130/115/145] (Trim → atk 80–100 + def 100–110): true 8yo zero-combat; Bolo Breath struggled vs Aramaki-regrow. Hold stamina-145 cloud-utility that saved Onigashima.

#### 134. Hack (hack)

#### 135. Hyouzou (hyouzou)

#### 136. Fukaboshi (fukaboshi)

#### 137. Bon Clay (bentham)

- VALUES file [115/110/110/115/120] (Trim → atk 60–80 + def 80–100): zero combat output, infiltration-utility only per Mr.3-wax-utility-120 rule; hold awareness/stamina plot-carry ID/MF.

#### 138. Tamago (baron-tamago)

#### 139. Hannyabal (hannyabal)

#### 140. Koala (koala)

### Batch 15 - Raizo → Mont-d'Or

#### 141. Raizo (raizo) - BRIEF CORRECTED, SCABBARD DF-COUNT IS THREE

#### 142. Kanjuro (kurozumi-kanjuro)

#### 143. Perona (perona)

#### 144. Corazon (donquixote-rosinante)

- VALUES file [115/110/110/115/115] (Trim → full block toward 70/90/90/95/90 band): pure silence utility, zero combat output, explicit non-combatant (BIQ-48) - Bon-Clay-trim rule caps utility-only at atk 60–80/def 80–100; file overshoots ~35–50; silence grants no spd/awa/sta either.

#### 145. Hatchan (hatchan)

#### 146. Blue Gilly (blue-gilly)

#### 147. Leo (leo)

#### 148. Kamakiri (kamakiri)

#### 149. Neptune (neptune)

#### 150. Mont-d'Or (charlotte-mont-dor)

### Batch 16 - Hina → Wapol

#### 151. Hina (hina)

#### 152. Tsuru (tsuru)

#### 153. Tashigi (tashigi)

#### 154. Helmeppo (helmeppo)

#### 155. Chopper (tony-tony-chopper)

- VALUES file [150/150/130/120/150] (Trim → atk/def/sta ~130): prices 30-min Monster-Point burst (Queen-stall ch 1005–1007; Kumadori-win ch 407–408 berserk) as SUSTAINED output - ignoring crash-penalty (paralysis/Baby-geezer) + Rumble 3-min/6-hr limits.

#### 156. Nami (nami)

#### 157. Usopp (usopp)

#### 158. Pudding (charlotte-pudding)

#### 159. Brûlée (charlotte-brulee)

#### 160. Wapol (wapol)

### Batch 17 - Zala → Gancho

#### 161. Zala (zala)

- VALUES file [120/110/110/110/120] (Trim → atk 110 + awa 100): lost to pre-Clima-Tact Nami (ch 192–197) - must sit below Mr.3-wax-120 who bound Zoro/giants; spikes grant zero senses.

#### 162. Koza (koza)

#### 163. Buggy (buggy-the-star-clown)

- VALUES file [120/110/110/110/120] (Trim → atk 100 + awa 100): zero DF offense - Bara Festival chips no one, Muggy Balls WEAPON-side (ch 560); def-140... file def 110? verdict keeps def (Mihawk-slash immunity gag ch 560 + ID/MF gag-survival) - hold def, trim atk/awa only.

#### 164. Pell (pell)

- VALUES file [140/140/130/110/150] (Trim → atk 120 + def 130): zero duel wins - folded by Robin Clutch (ch 169); bomb-carry = flight/stamina feat, not attack; bomb-survival gag ≠ DF durability. Keep spd 130 + sta 150 (falcon-flight + bomb-lift showings).

#### 165. Bepo (bepo)

#### 166. Shinobu (shinobu)

#### 167. Hogback (doctor-hogback)

#### 168. Caribou (caribou)

#### 169. Kabu (kabu)

- VALUES file [140/140/130/110/150] (Trim → atk 120): SOP airlift = speed/stamina feat, zero duels - atk 140 claims Leo-Nui-120+ combat tier without a single fight. Keep spd 130 + sta 150 (aviation showings); def 140 kept (beetle carapace).

#### 170. Gancho (gancho)

### Batch 18 - Wicca → Manboshi

#### 171. Wicca (wicca)

#### 172. Bian (bian)

- TYPE file [ancient_zoan] (Re-type → zoan): canon REGULAR Zoan-type - hornets extant, not extinct (Mushi Mushi/Suzumebachi page + Bian page).
- VALUES file [130/165/150/110/140] (Trim → atk 120): atk 130 high vs Sugar-incap + scout/message/sting-support showings (ch 718+); def/spd/sta kept as zoan-flight physicals.

#### 173. Goldenweek (miss-goldenweek)

#### 174. Cobra (nefertari-cobra)

#### 175. Vivi (nefertari-vivi)

#### 176. Shirahoshi (shirahoshi)

#### 177. Vegapunk (vegapunk)

- VALUES file [120/130/110/250/120] (Trim → combat four atk/def/spd/sta ≤50, KEEP awa-250): awa-250 Punk Records database-utility justified; atk/def/spd/sta 110–130 FAIL vs "virtually no direct offensive uses" + frail zero-combat Stella.

#### 178. Camie (camie)

#### 179. Ryuboshi (ryuboshi)

#### 180. Manboshi (manboshi)

### Batch 19 - Mansherry → Raki (final four)

#### 181. Mansherry (mansherry)

- VALUES file [80/130/110/130/130] (Trim → atk 0): atk-80 contradicts "few fruits with zero combative capability" + cannot-regrow-limbs cap (ch 784) + lifespan-cost on objects (ch 775). KEEP def/awr/sta-130 + spd-110 = army-scale heal-utility (Chiyupopo Birdcage run ch 787–789, Kenpopo donor system ch 796–798).

#### 182. Conis (conis)

#### 183. Aisa (aisa)

#### 184. Raki (raki)

---

## Review complete - all 184 characters

### Headline changes (apply step will move these)

- Loki Re-assign → Ryu Ryu no Mi Model Nidhogg (ch 1175 CONFIRMED) + raise over Kaido-Seiryu baseline; Kaido-Seiryu raise logged (atk ~300–350/def ~300/spd ~200) with Loki trimmed to parity-or-below - both adjustments apply.
- Law-awakened → 400+ atk band (file 200) · Kid-awakened → 400–450 (file 150) - rooftop parity restored.
- Katakuri-awakened → ~300 (file 180) - Sweet Commander ceiling; Doffy-awakened → ~220–250 (file 140).
- Enel → near-550 band (file 200s) · Green Bull → 550 band (file 400s) · Sabo → Soru-300 band (file 250) · Ace → 300 band (file 250, Mera parity).
- Nusjuro + Saturn/Warcury/JuPeter/Mars awakened → false (regen = Abyss-contract); Mars Itsumade STRIPPED to blank; Gorosei values frozen pending classification.
- Killingham-Kirin + Sommers-Iba names CONFIRMED (ch 1143); awakened flips (Kirin→false); values speculative-hold.
- Shiki → 250+ utility (file 180) · Lucci STA → 200+ (file 150, awakening-recovery) · Kaku-awakened-TRUE (correction) modest band.
- WB DEF/SPD adjust (~100–150) · Smoothie atk → 80–100 · Perospero/Oven atk trims (Cracker-parity) · Page One atk → 160 (uniformity) · Brook def → 130 (revival≠durability) · Chopper → ~130s (crash-penalty) · Momonosuke atk/def trim (hold sta-145 clouds) · Bon Clay full-block trim (utility-only) · Corazon full-block trim · Caesar def → Monet parity · Daz atk/def trim · Kin'emon atk → 100 · Laffitte UNNAMED-DF (file none WRONG - needs placeholder + mobility values) · Devon trim ~145 · Moria def → 130 · Sugar/Monet/Senor Pink/Zala/Kabu/Buggy/Pell/Kamakiri/Gancho/Bian/Vegapunk/Mansherry/WB trims logged.
- Kin'emon-Fuku correction: Scabbard DF-count is THREE (Kin'emon/Raizo/Kanjuro), not one.
- Karasu-soot = logia (dispute logged: official site says paramecia, intangibility + consensus settle logia).
- Bian Re-type ancient → zoan (hornets extant).
- Vasco english-fill "Glug-Glug Fruit" (blank in file).

### Decisions needed before apply step (user calls)

---

## Apply log

APPLIED to `src/data/characters-v2.ts` (devilFruit fields only - type/names/awakened/values; baseStats/haki/weapon/rarity untouched).

- 93 fields changed, zero failures, old values matched review on every line.
- Open-call resolutions: Loki-vs-Kaido BOTH halves (Kaido atk 325/def 300/spd 200 AND Loki trimmed to atk 300/def 300 parity-or-below, spd 225/awr 205/sta 285) · Laffitte placeholder (type zoan, blank names kept, atk/def/sta 0, spd/awa 115 - best-guess wing-zoan, logged) · Gunko provisional cut (atk 230/def 200, spd/awa/sta held for Elbaf revisit) · Enel FULL raise [500/450/500/400/350] (epic god-output carries, pre-TS body stays base-side).
- Judgment calls (worker-silent fields, logged): Shiki atk 275/def 250 (Fujitora-250+ band) · Sabo atk 300/def 250 (Soru band + intangibility; Ace stays [300/150s] - same-fruit asymmetry noted: Sabo's Fujitora-stall justifies def edge) · Doffy atk 235/def 200/sta 225 · Kid atk 425/def 275 · Lucci def 175/sta 225 · Katakuri atk 300/sta 200 · Sugar def 108 · Monet def 155 · Senor Pink atk 135 · Caesar def 155 · Daz atk 145/def 155 · Momo atk 90/def 105 · Bon Clay atk 70/def 90 · Corazon [70/90/90/95/90] exact · Chopper 130s · Zala atk 110/awa 100 · Buggy atk 100/awa 100 · Pell atk 120/def 130 · Kabu atk 120 · Vegapunk combat-four 40s (awa-250 kept) · Mansherry atk 0 · Devon atk/def 145/sta 150 · Moria def 130 · Kin'emon atk 100.
- Post-apply: `tsc` clean, `eslint` clean, `prettier` clean, rankings regen'd, 300-draft sanity clean, `astro build` clean.
- Ranking effect: 8 gods still top 10 (Kaido/GB intrude). Up: Kaido 5th (Seiryu raise + conq-supreme), Green Bull 8th (550 band). Down: Luffy 9th (no DF change - haki-obs cut from prior apply still settling), Roger 7th. Dragon holds 6th (speculative-keeps).

---

---

# Part 3 - Haki (from HAKI_REVIEW.md)

Scope: `haki` ONLY - three types (armament / observation / conqueror), each a tier + flat values.
Tiers AND values both in scope: tier gates round eligibility (`tier !== "none"` = holder for the ≥2-holder guarantee), values set the technique ceiling (ATK/DEF start at 0 - haki + DF + weapon are the only sources).

## Mechanics (why this audit matters)

- R2 armament → ATK + DEF + STA. R3 observation → AWR + SPD (**speed AND reflex both feed SPD** - judge the sum). R4 conqueror → ATK + STA + DEF.
- Observation double-dip is by design: basic obs = +200 SPD, advanced = +600, supreme = +1000. Worker sanity-checks each total against the base SPD scale.
- Established facts (do not relitigate): Garp CoC CONFIRMED (Vivre Card vol-110 pack, all three haki; Galaxy Impact = CoC-infused) · Teach CoC DENIED (Vivre Card: Armament + Observation only - file's `none` is correct) · Koby CoC UNCONFIRMED (black lightning = advanced armament, Ulti precedent; Honesty Impact = emission).

## Standards

### Armament (Busoshoku)

- **none**: no hardening shown → all values MUST be 0. Any nonzero is auto-flag.
- **basic**: hardening (visible blackening) for offense/defense.
- **advanced**: emission (barrier/projection, no-touch hits) or internal destruction (Ryuo). Needs a named emission feat or Wano-Ryuo lineage.
- **supreme**: emission + internal destruction at top-of-verse scale (town-wiping, Yonko-duel level). Every supreme needs a town-scale or Yonko-duel receipt. 550 needs more than 500 (Garp's 550 = Galaxy Impact benchmark).

### Observation (Kenbunshoku)

- **none**: no sensing shown → all values MUST be 0.
- **basic**: presence/location/emotion/intent sensing, combat dodge-aid.
- **advanced**: Future Sight OR elite range/precision (island-Mantra is DF-amplified range - check whether file models it in obs or DF; born-Mantra counts as advanced-range; blind-mastery navigation argues advanced, not basic).
- **supreme**: Future Sight at extended horizon or FS-nullification + god-tier portrayal. Boundary case: Luffy supreme vs Katakuri advanced - worker must show why the line holds.

### Conqueror (Haoshoku)

- **none**: DEFAULT, including strong non-possessors (admirals, Law, Mihawk-unconfirmed, Crocodile, Moria, Koby, Dragon-unconfirmed, Sabo-unconfirmed, Lucci). Vivre-Card-denied = hard none.
- **basic**: confirmed possession, knockout-level use, NO infusion.
- **advanced**: infusion (CoC coating, no-contact sky-split blows). Needs an infusion panel or Vivre-Card-grade confirmation.
- **supreme**: infusion + top-of-verse dominance (Roger, Shanks, Kaido, Luffy tier). Old/sick holders (WB-old, Garp-old): worker argues advanced vs supreme from Hachinosu/Marineford panels.

### Value bands (elite variants need proof)

- basic 100 · advanced 300 · supreme 500.
- 350/400 advanced survive ONLY with top-of-tier receipt. 550 supreme survives ONLY with Galaxy-Impact-scale receipt. 200-basic normalizes to 100 unless elite-range proof. `none` = all zeros, enforced.

### Rules

- Verdicts per haki type: `Perfect` · `Re-tier → tier` · `Raise/Lower → range` · `Speculative (no verdict)`.
- Flag bar: any wrong tier · ~50+ value deviation · any nonzero under `none` · any elite variant without proof.
- Every non-Perfect needs: canon evidence (manga, databooks/Vivre Cards; anime/portrayal admissible for haki) + peer comparison (same tier, same batch or same role: admirals vs admirals, SH crew, Yonko commanders, Rev chain, BB officers).
- Peer ladders to protect: admiral CoC uniformity (all none unless proof) · Luffy-supreme vs Katakuri-advanced line · SH crew (Zoro adv-infused, Sanji no-CoC) · Gorosei (no CoC shown - all none unless proof) · Warlords (Hancock/Doffy basic-posessed, Mihawk/Crocodile/Moria none).
- Cross-checks bind to baseStats review: Katakuri FS stays in haki (base AWR already cut) · Fujitora obs-basic-100 stands (base AWR was the error) · Enel Mantra / Aisa Mantra placement re-verified on haki side · Koby Honesty Impact = advanced armament (emission), CoC stays none.
- Low-feat characters (Imu, Joy Boy, Rocks, Harald, Ryuma, Loki, …): `Speculative`, keep current numbers/tiers.

## Verdicts

### Batch 1 - Imu → Akainu

#### 1. Imu (nerona-imu)

- ARM file supreme-500 → Speculative: no discrete hardening/emission panel; ch-1182 display is DF-charged, not armament proof.

#### 2. Joy Boy (joy-boy)

- ARM file supreme-500 → Speculative: zero discrete armament panels; sealed blast is conqueror-side only (ch 1122).
- OBS file supreme-500 → Speculative: zero discrete sensing/FS panels; VoAT lore adds nothing CoO-side.

#### 3. Rocks (rocks-d-xebec)

- ARM file supreme-500 → Speculative: haki-blast AoE is CoC-side; no discrete emission/Ryuo panel.
- OBS file supreme-500 → Speculative: zero sensing/FS panels; God Valley portrayal only.

#### 4. Roger (gol-d-roger)

- OBS file advanced-300 → Lower → basic-100: ch-966 Oden-approach sensing is presence-level only; VoAT is not CoO.
- CONQ file advanced-350/300/300 → Raise → supreme-500: ch-966 sky-split vs WB is the supreme definition.

#### 5. Garp (monkey-d-garp)

- OBS file supreme-500 → Lower → basic-100: Vivre Card lists possession but zero FS/elite-range panels exist.

#### 6. Blackbeard (marshall-d-teach)

- OBS file advanced-300 → Lower → basic-100: bounty-sensing + Impel Down reads are presence-level only, no FS.

#### 7. Shanks (shanks)

- OBS file advanced-300 → Raise → supreme-500: ch-1079 10s future vision + FS-killing clears the Katakuri-advanced line.
- CONQ file advanced-350/300/300 → Raise → supreme-500: Divine Departure (ch 1079) + WB sky-split + Green Bull paralysis = supreme scale.

#### 8. Loki (loki)

- ARM file advanced-300 → Speculative: no discrete hardening/emission panels; Ragnir feats shown are CoC-infused.
- OBS file advanced-300 → Speculative: zero sensing/FS panels in Elbaf showings to date.

#### 9. Dragon (monkey-d-dragon) - FLAGSHIP RE-TIER

- ARM file supreme-500 → Re-tier → none-zeros: zero confirmed armament panels of any kind.
- OBS file supreme-500 → Re-tier → none-zeros: zero confirmed observation panels; weather feats are DF-side.
- CONQ file supreme-500 → Re-tier → none-zeros: zero confirmed CoC; hints are not panels.
- Keep him akainu level as he is the head of the revolutionary army. give speculative stats.

#### 10. Akainu (sakazuki)

- OBS file advanced-400 → Lower → advanced-300: elite-range keeps advanced, but no FS panel justifies 400.

### Batch 2 - Luffy → Nusjuro

#### 11. Luffy (monkey-d-luffy)

- OBS file supreme-500 → Re-tier → advanced-300: FS unlocked (ch 894 vs Katakuri) meets advanced, but no Shanks-tier extended-range/kill feat justifies supreme.

#### 12. Kizaru (borsalino)

- OBS file advanced-400 → Lower → advanced-300: no FS or elite-range panel; light-speed movement is DF-side.

#### 13. Whitebeard (edward-newgate, old/MF-era file)

- OBS file advanced-300 → Re-tier → basic-100: failed Squard-sense (ch 562–563, health-decay per Marco); zero FS panels ever.

#### 14. Kaido (kaido)

- CONQ file advanced-300 → Raise → supreme-500: sky-split vs BM (ch 951) + sustained infusion mastery = top-scale gate cleared.

#### 15. Big Mom (charlotte-linlin)

#### 16. Mihawk (dracule-mihawk)

- CONQ file advanced-350/300/350 → Re-tier → none-zeros: Vivre Card lists his haki types but omits CoC; zero manga panels - same hard-error class as admirals.

#### 17. Shamrock (figarland-shamrock) - ALL SPECULATIVE (keep)

- ARM advanced-350 / OBS advanced-300 / CONQ advanced-350/300/300 (all Speculative): no personal panels; Cerberus output DF-side; Figarland bloodline suggests CoC but zero panels. Settle with on-panel haki use.

#### 18. Kuzan (kuzan)

- OBS file advanced-400 → Lower → advanced-300: no FS or elite-range panel; Hachinosu freeze actions are DF-side.

#### 19. Harald (harald) - ALL SPECULATIVE (keep)

- ARM/OBS/CONQ all advanced-300s (Speculative): shockwave unattributed by type; zero sensing panels; Rocks sky-split is Rocks' feat, Harald's share unconfirmed. Flashback ongoing.

#### 20. Nusjuro (ethanbaron-v-nusjuro)

- CONQ file advanced-300 → Re-tier → basic-100: possession confirmed (listing + arrival burst ch 1110) but zero infusion panels - advanced gate unmet.

### Batch 3 - Saturn → Sommers

#### 21. Saturn (jaygarcia-saturn)

- ARM file advanced-300 → Lower → basic-100: no blackening panel; G5 blows tanked via regen, not hardening.
- OBS file advanced-300 → Lower → basic-100: missed Kuma's arrival; Egghead tracking failures.
- CONQ file advanced-300 → Re-tier → none-zeros: stare-down immobilization (ch 1103–1104) is gaze-mechanic/DF-side, not a CoC burst; no CoC panel.

#### 22. Warcury (topman-warcury)

- ARM file advanced-300 → Lower → basic-100: tusk-blades DF-side; no hardening panel.
- OBS file advanced-300 → Lower → basic-100: sensed Nika (ch 1118) but generic range only.
- CONQ file advanced-300 → Lower → basic-100: ch-1111 roar is a confirmed CoC burst (KO'd Marines offshore) - possession confirmed - but burst only, no infusion.

#### 23. Ju Peter (shepherd-ju-peter)

- ARM file advanced-300 → Lower → basic-100: sandworm vortex DF-side; no hardening panel.
- OBS file advanced-300 → Lower → basic-100: co-sensed two Nikas (ch 1118) yet no range/FS feat.
- CONQ file advanced-300 → Re-tier → none-zeros: no CoC panel anywhere; weakest Gorosei evidence.

#### 24. Mars (marcus-mars)

- ARM file advanced-300 → Lower → basic-100: Itsumade flight/beak DF-side; no hardening panel.
- OBS file advanced-300 → Lower → basic-100: lost Labophase snail, needed York/Lucci guidance - obs failure.
- CONQ file advanced-300 → Re-tier → none-zeros: no explicit CoC panel; wiki-template listings are editor inference, not canon.

#### 25. Rayleigh (silvers-rayleigh)

- OBS file basic-100 → Raise → advanced-300: sensed + graded 500 Rusukaina beasts (ch 597), island-range, taught Luffy FS; FS unconfirmed caps below supreme.

#### 26. Gaban (scopper-gaban)

#### 27. Fujitora (fujitora)

- OBS file basic-100 → Raise → advanced-300: blind mind's-eye auras, emotion-reading (ch 799), meteor/cloud sensing at tens of km; FS never shown caps below supreme.

#### 28. Sengoku (sengoku)

- ARM file advanced-400 → Lower → basic-100: off-scale values; Buddha shockwave DF-side, Garp-pin base STR; no emission panel. (Invalid 400s for the feats.)
- OBS file advanced-400 → Lower → basic-100: off-scale; Squard-plant/Siege-Wall reads are command awareness, no CoO feat.
- CONQ file advanced-400 → Lower → basic-100: off-scale; Vivre Card vol 7 confirms POSSESSION only - zero infusion panels. (Correction to plan brief: possession confirmed, tier basic.)

#### 29. Killingham (rimoshifu-killingham) - low-confidence downgrades

- ARM file advanced-300 → Lower → basic-100: dream-Kirin/MMA feats DF-side; only generic arrival-burst haki.
- OBS file advanced-300 → Lower → basic-100: no range/FS feat.
- CONQ file advanced-300 → Re-tier → none-zeros: no CoC burst in Elbaf; Knight CoC listings cover Shamrock/Gunko-via-Imu only.

#### 30. Sommers (shepherd-sommers) - low-confidence downgrades

- ARM file advanced-300 → Lower → basic-100: thorn feats DF-side; single secondary-source "advanced-grade" claim insufficient.
- OBS file advanced-300 → Lower → basic-100: no sensing panel beyond generic Knight haki.
- CONQ file advanced-300 → Re-tier → none-zeros: no CoC burst; dismantled by Gaban's CoC (ch 1148) as recipient, not user.

### Batch 4 - Enel → Sabo

#### 31. Enel (enel)

- ARM file basic-100 → Re-tier → none-zeros: zero armament panels; hurt by base Luffy (ch 281) - rubber immunity ≠ haki.
- OBS file basic-200 → Re-tier → advanced-300: Mantra island-wide eavesdropping is DF-AMPLIFIED range (no FS → not supreme); DF-side already pays AWR so haki-side pays standard 300; 200s non-standard either way.

#### 32. Green Bull (aramaki)

- ARM file advanced-300 → Raise → 400: branch-tip hardening (ch 1055) is basic application, but admiral-line elite gate (emission shield share) pulls to 400.

#### 33. Ryuma (shimotsuki-ryuma) - ALL SPECULATIVE (keep)

- ARM advanced-300 / OBS basic-100 / CONQ none-zeros (all Speculative): sole ground is Shusui black-blade Ryuo inference; zero on-panel haki; pre-haki-era figure; zombie bout showed none (ch 448–469).

#### 34. Oden (kozuki-oden)

- ARM file advanced-400 → Lower → 300: emission-user listed; Enma/Habakiri wielded freely - but 400s need elite proof, scar credits partly to CoC (SBS vol 100).
- OBS file advanced-300 → Lower → basic-100: canon user-listed but zero FS/elite-range feats.
- CONQ file advanced-400/300/400 → Lower → 300: SBS vol 100 pairs Togen Shirataki with Kamusari as CoC attacks; WB-clash lightning + Kaido scar prove infusion - but no sky-split, below supreme.

#### 35. Shiki (shiki) - NEAR-TRIPLE-NONE

- ARM file advanced-300 → Re-tier → none-zeros: zero haki panels/statements of any type; Edd War/Marineford 2v1 feats are Fuwa Fuwa-side.
- OBS file advanced-300 → Re-tier → none-zeros: no sensing feat.

#### 36. Garling (figarland-garling) - ALL SPECULATIVE (hold as estimate)

- ARM advanced-300 / OBS basic-100 / CONQ advanced-300 (all Speculative): zero haki panels; God Valley kills vs king/civilians/incapacitated Xebec (ch 1095–1096); "champion" title WG fabrication; bloodline ≠ proof (cf. Rosinante).

#### 37. Law (trafalgar-d-water-law)

- ARM file advanced-300 → Lower → basic-100: Kikoku string-blocks (ch 781) + fist/forearm hardening vs Vergo are basic techniques; Puncture/Shock Wille are Awakening DF-side; no emission panel.

#### 38. Beckman (benn-beckman) - panel-grounded basics

- ARM file advanced-300 → Lower → basic-100: confirmed user (Vivre #0020; bullets vs Logia require imbuement, ch 501–502/569–570) but no emission panel; Film Red hardening non-canon.
- OBS file basic-200 → keep tier, values → 100: mast-stealth past Kizaru implies sensing competence; 200s non-standard.
- CONQ file basic-100 → Re-tier → none-zeros: no CoC panel, no Vivre/SBS entry; gunpoint is armament mechanics, not CoC.

#### 39. Zoro (roronoa-zoro) - FLAGSHIP ASYMMETRY

#### 40. Sabo (sabo)

- ARM file advanced-300 → Lower → basic-100: Ryusoken hardening overmatched Burgess, held vs Fujitora (Dressrosa) = hardening-grade only; no emission/internal-destruction panel.
- CONQ file basic-100 → Re-tier → none-zeros: unconfirmed (Vivre lists Arm/Obs only); Ace-brother/Dragon-staff status ≠ proof.

### Batch 5 - Yamato → Katakuri

#### 41. Yamato (yamato)

#### 42. Kid (eustass-kid)

- ARM file basic-110 → keep tier, values → 100: rooftop vs Kaido/BM + Damned Punk DF-side; pure-armament hardening only; 110 unproven variant.
- CONQ file basic-200 → keep tier, values → 100: possession confirmed (Kaido ch 924 statement); zero on-panel use, no infusion vs Shanks.

#### 43. Hancock (boa-hancock)

- CONQ file basic-200 → keep tier, values → 100: possession confirmed (Sandersonia statement); never showcased, no infusion.

#### 44. King (king-the-conflagration)

- ARM file basic-200 → keep tier, values → 100: sword/kicks hardening vs Zoro; flame-off speed race-side; no emission.
- OBS file basic-150 → keep tier, values → 100: lost flame-puzzle; no FS/sensing feat.
- CONQ file basic-100 → Re-tier → none-zeros: zero CoC burst/panel; absent all ~30 confirmed lists.

#### 45. Marco (marco-the-phoenix)

- ARM file basic-200 → keep tier, values → 100: Bluebird kicks blocked Kizaru/Akainu (hardening); no emission.

#### 46. Sanji (sanji) - IFRIT ≠ COC

- ARM file advanced-300 → Lower → basic-100: hardening vs Queen yes; DJ/Ifrit heat exo-side; zero emission/Ryuo panel.
- OBS file basic-250 → keep tier, values → 100: jellybean dodge (ch 862) elite precision credited via base awareness-800; no FS (below Usopp-advanced-range + Luffy-FS).

#### 47. Kuma (bartholomew-kuma)

- ARM file basic-130 → keep tier, values → 100: PX-0 hull/TB hits hardening-level; vanish/repel DF-side; no emission.
- OBS file basic-130 → keep tier (lenient), values → 100: zero CoO panel; bounty-scope pupils mods/base-side.

#### 48. Crocodile (crocodile)

- ARM file basic-150 → keep tier, values → 100: Vivre Card 2024 confirms armament post-TS; zero on-panel hardening/emission (hook/Sables weapon+DF-side).

#### 49. Lucci (rob-lucci)

- ARM file basic-200 → keep tier, values → 100: hardened fists vs G5 + pierced Sentomaru guard + blocked Zoro swords Egghead; Tekkai/Shigan technique-side; no emission panel.

#### 50. Katakuri (charlotte-katakuri) - LINE-SETTER

- ARM file advanced-300 → Lower → basic-100: Mogura/jellybean hardening vs Boundman/Snakeman yes; mochi-thrusts DF-side; zero emission/Ryuo panel.

### Batch 6 - Weevil → Vista

#### 51. Weevil (edward-weevil)

- ARM file advanced-300 → Lower → basic-100: Vivre/Visual-Dictionary tick confirms Arm+Obs but zero hardening/emission panels; Kizaru "young WB" hype + GB capture are portrayal, not Ryuo.
- CONQ file basic-100 → Re-tier → none-zeros: no CoC burst/panel anywhere; invented tier.

#### 52. Ace (portgas-d-ace)

#### 53. Doflamingo (donquixote-doflamingo)

- ARM file basic-200 → keep tier, values → 100: hardened threads/blocks vs Law/Luffy/G4 are basic hardening; zero emission/Ryuo; 200 non-standard.
- OBS file basic-200 → keep tier, values → 100: Flower-Hill oversight + Sanji-blindspot reactions are proficient-basic; no FS; 200 non-standard.
- CONQ file advanced-300 → Lower → basic-100: CONFIRMED possessor (mob-KO age ~10 ch 782; G-5 KO; CoC clash vs Luffy ep 723) but Birdcage/God Thread are DF - zero infusion panels.

#### 54. Killer (killer)

#### 55. Smoothie (charlotte-smoothie)

#### 56. Queen (queen)

#### 57. Jack (jack)

- ARM file basic-150 → keep tier, values → 100: Vivre tick confirms Arm; 5-day Neko/Inu (ch 810–818) + Ashura/Sulong wars show no hardening/emission; 150 non-standard.

#### 58. Karasu (karasu)

#### 59. Jinbe (jinbe) - TECHNIQUE ≠ RYUO RULING

- ARM file advanced-300 → Lower → basic-100: Kairagi hardening vs BM Cognac (ch 869) + Who's-Who superior-hardening + Akainu-block (ch 578) are elite-basic feats - but Buraikan/Vagabond Drill shockwaves are Fishman-Karate water TECHNIQUE, not emission/Ryuo.
- OBS file basic-150 → keep tier, values → 100: Shanks-CoC-burst sensing + Saturn arrival are solid-basic reads; no FS/elite-range; 150 non-standard.

#### 60. Vista (vista)

### Batch 7 - Shiryu → Oven

#### 61. Shiryu (shiryu)

#### 62. Magellan (magellan)

#### 63. Kalgara (kalgara)

- OBS file basic-100 → Re-tier → none-zeros: Shandia showed no Mantra tradition (Skypiea priests only) - basic is invention without evidence.

#### 64. Ivankov (emporio-ivankov)

- CONQ file basic-100 → Re-tier → none-zeros: absent every confirmed CoC list; charisma ≠ CoC.

#### 65. Drake (x-drake)

#### 66. Cracker (charlotte-cracker)

#### 67. Inuarashi (inuarashi)

- ARM file advanced-300 → Lower → basic-100: no emission/internal-destruction feat; Jack rotations (ch 810–818) + rooftop wound came via Electro/Sulong + combined strike, not Ryuo proof.

#### 68. Nekomamushi (nekomamushi)

- CONQ file basic-100 → Re-tier → none-zeros: zero CoC panels/lists/Vivre (Arm+Obs only); no royal-blood CoC case.

#### 69. Perospero (charlotte-perospero)

#### 70. Oven (charlotte-oven)

### Batch 8 - Who's-Who → Brogy

#### 71. Who's-Who (whos-who)

#### 72. Kaku (kaku)

#### 73. Pica (pica)

#### 74. Sentomaru (sentomaru)

#### 75. Gunko (manmayer-gunko) - ALL SPECULATIVE (reject filed values)

- ARM/OBS/CONQ all advanced-300s → Speculative: zero hardening/sensing panels; feats are Aro Aro DF + Covenant regen/Abyss; Elbaf knockouts are Imu possessing her (excluded per B3); arrival burst sensed "abnormal" by Gaban unattributed. Beat Gaban only via Colon hostage - nothing supports Gaban-triple-advanced parity.

#### 76. Carrot (carrot) - TRIPLE-NONE

#### 77. Yasopp (yasopp)

#### 78. Lucky Roux (lucky-roux)

- ARM file basic-200 → keep tier, values → 100: Vol 4 Billion confirms Arm only; no elite proof for 200s.
- OBS file basic-100 → CUT → none-zeros: wiki lists Arm only; zero sensing panels; "likely decent Obs" is invention, rejected.

#### 79. Dorry (dorry) - TRIPLE-NONE

- ARM file advanced-300 → CUT → none-zeros: zero hardening panels; Hakoku = compressed-air beams, manga never states infusion - emission reading is speculation.
- OBS file basic-100 → CUT → none-zeros: zero sensing panels/ticks; feeling Joy Boy's burst is universal, not a feat.
- CONQ file basic-100 → CUT → none-zeros: zero bursts in 100-year duel or Egghead; resisting Warcury burst = resistance only.

#### 80. Brogy (brogy) - TRIPLE-NONE

- ARM file advanced-300 → CUT → none-zeros: same as Dorry; Hakoku haki-infusion unconfirmed.
- OBS file basic-100 → CUT → none-zeros: zero sensing panels/ticks.
- CONQ file basic-100 → CUT → none-zeros: zero bursts; later Imu-demonization is Abyss contract, not his haki.

### Batch 9 - Morley → Saul

#### 81. Morley (morley)

- ARM file basic-150 → keep tier, values → 100: Vivre confirms arm+obs, but Marijoa stall vs GB/Fujitora (ch 1082–1084) is Oshi-Oshi terrain-driven; no hardening/emission panel.

#### 82. Urouge (urouge) - TRIPLE-NONE

#### 83. Burgess (jesus-burgess)

#### 84. Pizarro (avalo-pizarro)

- ARM file basic-100 → CUT → none-zeros: no hardening panel; took Garp Galaxy Divide + Koby Honesty Impact (ch 1087–1088) with zero haki defense shown.

#### 85. Vasco Shot (vasco-shot) - DOUBLE-NONE

- ARM file basic-100 → CUT → none-zeros: no hardening panel; Hachinosu showing is Gabu-Gabu flame-spit (ch 1087); wiki lists no Haki ability.
- OBS file basic-100 → CUT → none-zeros: zero sensing feats; drunk-brawler portrayal carries no proof.

#### 86. Koby (koby) - FLAGSHIP VERIFICATION

- ARM file basic-150 → Raise → advanced-300: Honesty Impact shatters Pizarro island-hand (ch 1088) via emission/Ryuo shockwave without full contact; single-feat → 300, below Akainu-400 sustained record.
- OBS file advanced-300 → Lower → basic-100: Marineford voice-awakening + ch-1088 reactions real but no Future Sight; "far better than group" = skill within basic.
- CONQ file basic-125 → CUT → none-zeros: Vivre Cards confirm only two haki types; black lightning = advanced armament per Ulti precedent. EXPLICIT.

#### 87. Kawamatsu (kawamatsu)

- ARM file advanced-300 → Lower → basic-100: Kaido-stab (ch 987) is combined Oden-style strike off-guard; no emission/Ryuo-penetration panel per Hyogoro standard.

#### 88. Denjiro (denjiro)

- ARM file advanced-300 → Lower → basic-100: Zoro duel (ch 933) + Kaido raid show sword-haki hardening at most; zero emission/infusion evidence.

#### 89. Ashura Doji (ashura-doji)

- ARM file advanced-300 → Lower → basic-100: Jack-even (ch 922) + Kaido raid are endurance/swordsmanship; no emission panel.

#### 90. Saul (jaguar-d-saul)

### Batch 10 - Franky → Hawkins

#### 91. Franky (franky)

- OBS file basic-100 → CUT → none-zeros: no sensing feat paneled; no Vivre haki listing; cola-cyborg sensors are not CoO.

#### 92. Pedro (pedro)

#### 93. Smoker (smoker)

#### 94. Cavendish (cavendish)

#### 95. Robin (nico-robin) - TRIPLE-NONE

#### 96. Ulti (ulti)

- CONQ file basic-100 → CUT → none-zeros: no CoC panel/Vivre; BM CoC victim (paralyzed), not user; default none.

#### 97. Sasaki (sasaki)

#### 98. Black Maria (black-maria)

#### 99. Apoo (scratchmen-apoo)

#### 100. Hawkins (basil-hawkins)

### Batch 11 - Page One → Marigold

#### 101. Page One (page-one)

- ARM file none-zeros → Raise → basic-100: Vivre Card #1343 dual-confirms Arm+Obs; fought Raid Suit Sanji (ch 931–932) with hardening-tough Zoan body.
- OBS file none-zeros → Raise → basic-100: same Vivre dual-confirmation; Tobiroppo scout role + presence-sensing feat.

#### 102. Fisher Tiger (fisher-tiger) - TRIPLE-NONE

- ARM file basic-100 → CUT → none-zeros: no hardening panel; Red Line climb/Marijoa raid (ch 621–626) are fishman-body feats; pre-systematization flashback hero.
- OBS file basic-100 → CUT → none-zeros: no sensing feat; died to marine gunfire ambush/blood loss never detected or evaded.

#### 103. Kyros (kyros) - TRIPLE-NONE (pure swordsman)

#### 104. Hajrudin (hajrudin) - TRIPLE-NONE

#### 105. Brook (brook) - TRIPLE-NONE

#### 106. Bonney (jewelry-bonney)

#### 107. Ideo (ideo) - TRIPLE-NONE

#### 108. Lindbergh (lindbergh)

#### 109. Sandersonia (boa-sandersonia)

#### 110. Marigold (boa-marigold)

### Batch 12 - Kiku → Wyper

#### 111. Kiku (kikunojo)

#### 112. Kin'emon (kinemon)

- ARM file basic-130 → keep tier, values → 100: Birdcage block + Kaido pierce (ch 987) = hardening/imbuement, not emission; no elite proof.

#### 113. Laffitte (laffitte) - DOUBLE-NONE

- ARM file basic-130 → CUT → none-zeros: zero hardening panel; Vivre #0268 lists no haki; 130 zero proof.
- OBS file basic-100 → CUT → none-zeros: Marijoa sneak (ch 234) + MF hypnosis = stealth/hax, not CoO.

#### 114. Van Augur (van-augur) - TRIPLE-NONE

#### 115. Daifuku (charlotte-daifuku)

#### 116. Moria (gecko-moria) - TRIPLE-NONE

#### 117. Bege (capone-bege) - TRIPLE-NONE

#### 118. Devon (catarina-devon)

- ARM file basic-100 → CUT → none-zeros: zero hardening panel; spear vs weakened WB (MF) not haki; Kyubi DF-side.

#### 119. Doc Q (doc-q) - TRIPLE-NONE

#### 120. Wyper (wyper) - TRIPLE-NONE

### Batch 13 - Gan Fall → Bartolomeo (all-basic band, strict)

#### 121. Gan Fall (gan-fall) - TRIPLE-NONE

#### 122. Sugar (sugar) - TRIPLE-NONE

#### 123. Monet (monet) - TRIPLE-NONE

#### 124. Mr. 3 (galdino) - TRIPLE-NONE

#### 125. Senor Pink (senor-pink) - TRIPLE-NONE

#### 126. Rebecca (rebecca)

#### 127. Hody (hody-jones) - TRIPLE-NONE

#### 128. Wadatsumi (wadatsumi) - TRIPLE-NONE

#### 129. Arlong (arlong) - TRIPLE-NONE

#### 130. Bartolomeo (bartolomeo) - TRIPLE-NONE (textbook 100%-DF fighter)

### Batch 14 - Caesar → Koala (low-tier, strict)

#### 131. Caesar (caesar-clown) - TRIPLE-NONE

#### 132. Daz Bonez (daz-bonez)

- ARM file basic-100 → CUT → none-zeros: no hardening panel in Zoro duel (ch 195–211); steel body Supa-Supa DF-side; Vivre #0182 lists no haki.

#### 133. Momonosuke (kozuki-momonosuke)

- CONQ file basic-100 → CUT → none-zeros: zero CoC burst/panel ever; Voice of All Things (Zunesha ch 821–822) explicitly NOT haki per VoAT ruling.

#### 134. Hack (hack) - TRIPLE-NONE

#### 135. Hyouzou (hyouzou) - TRIPLE-NONE

#### 136. Fukaboshi (fukaboshi) - TRIPLE-NONE

#### 137. Bon Clay (bentham) - TRIPLE-NONE

#### 138. Tamago (baron-tamago)

#### 139. Hannyabal (hannyabal) - TRIPLE-NONE

#### 140. Koala (koala) - TRIPLE-NONE

### Batch 15 - Raizo → Mont-d'Or (low-tier, strict)

#### 141. Raizo (raizo)

#### 142. Kanjuro (kurozumi-kanjuro) - LEGEND RIDES 100% DF

#### 143. Perona (perona) - TRIPLE-NONE

#### 144. Corazon (donquixote-rosinante) - TRIPLE-NONE

#### 145. Hatchan (hatchan) - TRIPLE-NONE

#### 146. Blue Gilly (blue-gilly) - TRIPLE-NONE

#### 147. Leo (leo) - TRIPLE-NONE

#### 148. Kamakiri (kamakiri) - TRIPLE-NONE (databook negative proof)

#### 149. Neptune (neptune) - TRIPLE-NONE

#### 150. Mont-d'Or (charlotte-mont-dor) - TRIPLE-NONE

---

---

# Part 4 - Weapon (from WEAPON_REVIEW.md)

Scope: `weapon` block ONLY (type + name + 5 stats). Holders: does the filed type/name/stats match the canonical HELD weapon? Nones: does canon show a signature held weapon that's missing? DF-constructs (Kuzan ice saber, Kizaru light sword, Monet snow sword) and body parts (Crocodile hook, Magellan horns, Daz Bonez blades, Electro claws) are NOT held weapons - correctly filed none, omissions NOT added for them.

STATUS: APPLIED - see Apply log at end of file.

## Standards

- Attack scale (anchored to haki bands): supreme-grade / Yonko signature 500–650 (Ace, Yoru, Gryphon, Murakumogiri, Rocks' sword, Oden pair-combined, Shodai Kitetsu) · Great Grade / top-commander signature 300–450 · veteran named 200–300 · standard 100–180 · joke/rusty/improvised 60–80.
- Per-stat plausibility: blades give atk/def + modest spd (cap ~300 - a sword does not grant supreme-obs-tier speed) · blade awr/sta ≤250 unless the weapon is special (sentient homie, haki-draining Enma) · rifles give atk + sharpshooter awr, low def · tech weapons (Clima-Tact, Kabuto, cyborg arsenal) may carry awr/spd.
- Names: canonical primary/signature name, else `""` (type + stats kept). Descriptive generics ("Flintlock Pistol") tolerated; `/`-placeholders and invented proper nouns stripped.
- Never invent: unconfirmed weapons stripped to none even if the character "should" have one. Fists-only fighters stay none.
- Peer consistency: same-crew / same-role ladders checked (Yonko sets, Admirals, Scabbards, BB officers, giants, SH crew).

## Verdicts

Verdict kinds: `Keep` · `Fix → fields` · `Strip → none` · `Add → block`.

### Batch 1 - Imu → Akainu

1. Imu (Fix → type spear, name "", a650/d600/s550/w400/t400): PRIMARY weapon is a versatile zigzagging polearm that shapeshifts - spear is the fit, top of the supreme band (god #1 + shapeshift versatility premium over Yoru-tier). The 19-weapon founding-monarchs arsenal is real but can't fit a single weapon slot - noted, not filed. CORROBORATED ch 1189: Imu summons the Sea God Sword + the 19 founding-kings weapons, granting Sommers the Sword of Wrath and Killingham the Spear of Holy Command.
2. Roger (Fix → s300/w250/t250): Ace is Supreme (ch 966) - a650/d580 Keep. But a sword granting 620 speed + 350 awareness equals advanced-obs tier; trim to blade caps.
3. Shanks (Fix → s300/w250/t250): Gryphon Keep (named saber, ch 1). a600/d540 Keep - same blade-cap trim as Roger.
4. Loki (Fix → a450/d400/s350/w300/t350): Ragnir CONFIRMED - sentient Ratatoskr warhammer ("Iron Thunder", ch 1141+), worthy-wielding, island-scale lightning. Name Keep; club-type kept as closest fit; 350s underrate a living legendary weapon.

### Batch 2 - Luffy → Nusjuro

13. Whitebeard (Fix → s300/w250/t250): Murakumogiri is Supreme (Marineford). a500/d520 Keep; trim construct-speed/awareness per blade caps.
14. Kaido (Fix → s300): Hassaikai kanabo Keep (ch 922+). a480/d500 Keep; 350 weapon-speed trimmed.
15. Big Mom (Fix → a350/d300/s280/w200/t200): Napoleon Keep (homie-blade that clashed Kaido's kanabo; Supreme-grade speculation exists). 300s underrate a Yonko's main weapon. Prometheus/Zeus correctly omitted (not held).
16. Mihawk (Fix → s300/w250/t250): Yoru is Supreme Black Blade (ch 50). a650/d550 Keep; same blade-cap trim.
17. Shamrock (Fix → a400/d350/s300/w250/t200): Cerberus CONFIRMED canon name - awakened MYTHICAL Zoan saber that injured Loki (Elbaf). Name Keep; 450s trimmed (Loki restrained + wielder-boosted) but stays top-commander.
18. Harald (Fix → name ""): "Sword" is a placeholder. Elbaf sword-king's greatsword kept unnamed; 300-band fits a legend.
19. Nusjuro (Fix → a550/d500/s400/w300/t300): Shodai Kitetsu is one of the 12 Supreme Grade (confirmed Kitetsu rank) - 200s is the worst scale break in the file. Admiral-tier portrayal demands the supreme band.

### Batch 3 - Saturn → Sommers

25. Rayleigh (Fix → name "", a350/d300/s300/w200/t200): Rayleigh's sword has NO canon name ("Cutlass" invented). 160s insults the Dark King (stalled Kizaru, ch 511) - veteran band.
26. Gaban (Fix → name "", a400/d350/s300/w250/t250): dual axes confirmed (Elbaf) but unnamed; filed type club is the closest fit. Legend left-hand stats were far too low.
27. Fujitora (Fix → s300): Yakuza Kasen CONFIRMED canon (weapon lists). Admiral signature band otherwise Keep; 430 weapon-speed trimmed.
28. Killingham (Fix → type spear, name "", a280/d250/s220/w200/t200): CORRECTION - Killingham wields an asymmetric trident (polearm wiki; ch 1189 "Spear of Holy Command"); filed "Kirisame" belongs to HODY (his fin-blade, ch 637). Ancestral/Longinus names spoiler-grade → "". God's Knight band.
29. Sommers (Fix → name "", a300/d280/s250/w200/t250): CORRECTION - Sommers carries a thorn-guard sword that becomes a giant thorny kanabo via DF (beat giant Saul, ch 1142+; ch 1189 "Sword of Wrath"). Filed name descriptive, not a proper noun → "". God's Knight band.

### Batch 4 - Enel → Sabo

31. Enel (Fix → w150): Nonosama Bo gold staff Keep (Skypeia). Mantra is Enel's obs, not the staff's - awr trimmed.
32. Green Bull (Fix → name "", a400/d350/s300/w200/t200): blackened katana (possible Black Blade) but unnamed. Admiral band, not 250s.
33. Ryuma (Fix → a400/d350/s300/w200/t200): Shusui is one of the 21 Great Grade + sword-god legend (ch 450–466, Monsters). 250s far too low.
34. Oden (Fix → s350): Enma + Ame no Habakiri pair-combined 500 Keep (both Great Grade, ch 955–970). 480 weapon-speed trimmed.
35. Shiki (Fix → a350/d300/s300/w200/t200): Oto + Kogarashi are canon named swords. 115s for the man who needed Garp + Sengoku combined is absurd - legend band.
36. Garling (Fix → name "", a400/d350/s300/w200/t200): saber confirmed (God Valley, ch 1095+) but unnamed ("Saber" is a placeholder). God's Knight supreme commander band.
37. Law (Fix → a260/d230/s230/w200): Kikoku nodachi Keep. Legend-mid bump; Room is DF, the sword itself earns veteran-plus.
38. Zoro (Fix → a400/d350/s300/w200/t250): Enma is Great Grade + Oden's former blade + adv-CoC conduit (ch 955+). 280s underrates a legend's primary blade; sta kept 250 (Enma drains haki).
39. Sabo (Fix → name "", a300/d280/s250/w200/t200): the metal pipe is signature (canon) but unnamed. Rev #2 + Mera demands commander band, not 130s.

### Batch 5 - Yamato → Katakuri

41. Yamato (Fix → a350/d350/s250/w200/t250): Takeru kanabo Keep (canon name). Kaido-clash portrayal (ch 1016+) needs above the filed 250s.
42. King (Fix → name "", a250/d230/s230/w150/t150): swordbreaker-katana confirmed (matched Zoro blow-for-blow) but unnamed. Calamity band, not 120s.
43. Crocodile (Strip → none): the hook is a PROSTHETIC body part, not a held weapon - its edge belongs in baseStats, not the weapon slot.

### Batch 6 - Weevil → Vista

51. Weevil (Fix → name "", a250/d230/s200/w150/t150): naginata-style blade plausible (WB-look parallel) but unnamed. 480M-pedigree band, not 125s.
52. Smoothie (Fix → name "", a250/d230/s200/w150/t150): drill-bit-sheath sword + DF combo CONFIRMED, but the blade itself unnamed. Commander band.
53. Jack (Fix → a250/d230/s200/w150/t150): twin SHOTELS confirmed (canon). Calamity band, not 120s.
54. Vista (Fix → name "", a300/d280/s250/w200/t200): twin sabers confirmed but unnamed. Stalled Mihawk (Marineford) - top-commander band, not 150s.

### Batch 7 - Shiryu → Oven

61. Shiryu (Fix → a350/d300/s300/w250/t250): Raiu Keep (canon sword name). BB #2 + Suke invisibility demands top-commander band, not 200s.
62. Magellan (Strip → none): the "horns" are his Venom-Demon BODY, not a held weapon - same rule as Crocodile's hook.
63. Kalgara (Fix → name ""): "Spear" is a placeholder. Shandoran warrior's spear kept unnamed; modest stats Keep.
64. Drake (Fix → a200/d180/s180/w150/t150): rapier + four-bladed axe confirmed (canon). Flying-Six durability machine deserves above 115s.
65. Cracker (Fix → a300/d280/s250/w200/t200): Pretzel Keep (canon). 860M commander band, not 200s.
66. Inuarashi (Fix → name "", a250/d230/s200/w150/t150): sword confirmed (vs Jack) but unnamed. Duke band.
67. Nekomamushi (Fix → a250/d230/s200/w150/t150): CORRECTION - wiki describes it as a STAFF resembling a jumonji yari (Electro-channeled, ch 816); filed staff-type stands and "Jumonji Yari" is descriptive-accurate. Duke band stands. (His ch 984 gun-hand is a prosthetic - correctly unfiled.)
68. Perospero (Add → staff "", a150/d140/s130/w120/t120): OMISSION - Perospero carries his striped candy-cane staff in the field (Whole Cake). Modest officer stats.
69. Oven (Fix → a150/d140/s130/w120/t120): CORRECTION - heated naginata CONFIRMED (vs Pound). Filed spear-type + name stand; modest officer bump.

### Batch 8 - Who's-Who → Brogy

71. Who's-Who (Add → sword "", a200/d180/s180/w150/t150): OMISSION - Who's-Who duels Jinbe with a katana + Rokushiki (Wano). Unnamed; Flying-Six band.
72. Kaku (Fix → name "", a250/d230/s200/w150/t150): paired swords confirmed (CP0, "Shirasaya" is just wood-scabbard descriptive). CP0 band, not 115s.
73. Pica (Fix → name ""): giant katana vs Zoro confirmed (Dressrosa); already-unnamed descriptive → "". Basic-rarity stats Keep.
74. Carrot (Strip → none): "Electro Claws" are worn claws + Mink Electro - body/fighting-style, not a held weapon (same rule as Bepo #165).

### Batch 9 - Morley → Saul

81. Morley (Fix → a200/d180/s150/w150/t150): harpoon-trident hybrid CONFIRMED (ch 904); "Harpoon-Trident" is canon-descriptive → name Keep. Officer band, not 115s.
82. Denjiro (Fix → name "", a250/d230/s200/w150/t150): sword confirmed (Kyoshiro's blade, Wano) but unnamed. Scabbard band, not 115s.
83. Ashura Doji (Fix → name "", a250/d230/s200/w150/t150): sword confirmed but unnamed ("Katana" placeholder). Scabbard band.

### Batch 10 - Franky → Hawkins

92. Pedro (Fix → a200/d180/s180/w150/t150): machete (Zou) + rapier (WCI) CONFIRMED; "Rapier" canon-descriptive → name Keep. Veteran band, not 115s.
93. Cavendish (Fix → a250/d230/s230/w150/t150): Durandal Keep (canon famous sword). Supernova band, not flat 200s.
94. Sasaki (Fix → a200/d180/s180/w150/t150): Karakuri Rasento trick-sword Keep (canon). Flying-Six band, not 115s.
95. Black Maria (Fix → a180/d160/s150/w150/t150): Wanyudo polearm Keep (canon, SMILE-fused). Officer band.

### Batch 11 - Page One → Marigold

103. Kyros (Fix → name "", a220/d200/s180/w150/t150): Thunder Soldier's longsword confirmed (Dressrosa) but unnamed. Veteran band.
104. Brook (Fix → a250/d230/s250/w200/t200): Soul Solid shikomizue Keep (canon). Speedster swordsman band - filed 200s flat underrates him.

### Batch 12 - Kiku → Wyper

111. Kiku (Fix → name "", a220/d200/s180/w150/t150): katana confirmed but unnamed. Scabbard band, not 115s.
112. Kin'emon (Fix → a200/d180/s160/w150/t150): Sukesan + Kakusan CONFIRMED canon (weapon lists). Scabbard band.
113. Van Augur (Fix → a250/d150/s150/w280/t150): Senriku Keep (canon rifle). World's top-sniper portrayal demands the best gun numbers in the file - 115s was absurd.
114. Devon (Fix → type spear, name "", a200/d180/s180/w150/t150): CORRECTION - Marineford polearm CONFIRMED (anime clarifies spear; "weapon available at the time") + post-TS hip sword + whip proficiency. "Sword / Spear" placeholder → "". Level-6 pedigree band.
115. Doc Q (Fix → a180/d160/s140/w150/t140): double-bladed scythe confirmed (canon reaper look). BB officer band.
116. Wyper (Fix → a180/d140/s140/w150/t140): Burn Bazooka Keep (canon). Warlord-of-Skypeia band, not flat 115s.

### Batch 13 - Gan Fall → Bartolomeo

121. Gan Fall (Fix → name ""): "Lance" is descriptive, not a name. Pierre-lance combo Keep (canon, Skypiea). Stats Keep.
122. Rebecca (Fix → name ""): blunt longsword confirmed (Dressrosa) but unnamed. Basic stats Keep.
123. Hody (Fix → name ""): trident confirmed + Kirisame is HODY's fin-mounted Famous Blade (ch 637, destroyed ch 641 - NOT Killingham's). The trident itself unnamed → "". Stats Keep.

### Batch 14 - Caesar → Koala

### Batch 15 - Raizo → Mont-d'Or

141. Raizo (Strip → none): CONFIRMED his weapon is SHURIKEN (not katanas) - doesn't fit the held-weapon slot. Strip stands, reason corrected.
142. Kanjuro (Fix → type staff): "Tsuji Shibai" brush kept (canon tool) - but a brush is NOT a sword. Staff is the closest fit. Joke-tier 75s Keep (rusty-traitor appropriate).
143. Mont-d'Or (Fix → name "Walker"): CORRECTION - rifle CONFIRMED (vs Luffy, Sweet City) + Walker pistol at the wedding. "Rifle / Pistol" placeholder → "Walker" (the named gun). Stats Keep.

### Batch 16 - Hina → Wapol

153. Tashigi (Fix → a165/d150/s140/w120/t120): Shigure Keep (canon named katana). Modest officer bump - she wields a named blade.

### Batch 17 - Zala → Gancho

162. Koza (Fix → name ""): CORRECTION - sword CONFIRMED (ch 187 soldier cutdown + Chaka training; also carries a pistol). "Katana" descriptive → "". "Competent if unremarkable" - stats Keep.
163. Bepo (Strip → none): same as Carrot - "Electro Claws" are Mink Electro + worn claws, body/fighting-style, not a held weapon.
164. Shinobu (Strip → none): no signature sword (one past-battle kunai only). Strip stands, cited.

### Batch 18 - Wicca → Manboshi

175. Vivi (Fix → type sword): Peacock Slashers Keep (canon signature) - but they are RING BLADES, not a staff. Sword is the closest functional fit (handheld melee blades). Stats Keep.
176. Manboshi (Fix → name ""): "Longsword" is descriptive. Prince's blade kept unnamed; stats Keep.

### Batch 19 - Mansherry → Raki

183. Aisa (Fix → type sword): Burn Blade dial-blade confirmed (Skypiea child warrior) - but a burn BLADE is not a rifle. Sword is the correct type. Stats Keep.
184. Raki (Fix → name ""): "Rifle" is a placeholder. Shandian warrior's gun kept unnamed; stats Keep.

## Tally (184 = 111 Keep + 65 Fix + 6 Strip + 2 Add)

- Keep: 111 (67 none-Keeps - fists-only, DF-constructs, body-parts correctly filed · 44 holder-Keeps)
- Fix: 65 (6 name-only placeholder cleanups: Kalgara, Gan Fall, Rebecca, Raki, Manboshi, Hody · 7 top-tier blade-cap trims on spd/awr/sta · 4 type corrections: Laffitte reverted so Vivi staff→sword, Kanjuro sword→staff, Aisa rifle→sword + Devon sword→spear · 48 stat-band changes: 46 raises incl. Nusjuro/Shodai emergency, Loki/Ragnir living-weapon band, Napoleon Yonko bump, Imu polearm at supreme-top + Killingham/Sommers/Devon God's-Knight bands, 1 lower in Shamrock, 1 awr-trim in Enel)
- Strip → none: 6 (Crocodile, Magellan, Carrot, Bepo, Raizo, Shinobu - body-parts, body-abilities, shuriken-no-slot, no-signature-sword)
- Add: 2 (Perospero candy-cane staff · Who's-Who katana - dagger-sword per Beasts tobiroppo list)
- Net holders: 115 → 111 (strips −6, adds +2). R6 ≥3-users guarantee re-verified at apply time from the holder pool per rarity.

## Verification log (web search, 30 queries)

- Canon names CONFIRMED (kept): Eclipse/Rocks (Vol 114 SBS), Gryphon (SBS 87), Takeru (SBS), Soto Muso (ch 948), Karakuri Rasento (ch 982/1019), Wanyudo system (ch 1020 - Pug-SMILE person + polearm), Kessui (double-bladed naginata), Sukesan + Kakusan, Tsuji Shibai, Yakuza Kasen, Cerberus (awakened Mythical Zoan saber), Terry Sword + Bruiser Axe (Yellow databook; destroyed vs Island Eater - filing = prime weapons), Ragnir (sentient Ratatoskr-hammer, ch 1141+), Kirisame = HODY's fin-blade (ch 637, destroyed ch 641).
- Wrong strips REVERTED (10): Urouge pillar, Pizarro flintlock (ch 575–576 volley), Vasco pistol (ch 575–576), Fisher Tiger saber (Mary Geoise armory raid), Oven naginata (vs Pound), Koza sword (ch 187), Mont-d'Or rifle + Walker, Devon spear (Marineford) + hip sword, Sommers thorn-sword (ch 1142+), Killingham trident (ch 1189 Spear of Holy Command).
- Wrong fixes REVERTED (4): Rocks→Keep, Fujitora name Keep, Nekomamushi staff-type Keep (ch 816), Laffitte rifle Keep (ch 576; cane blade unconfirmed).
- New issues FOUND by search: Napoleon bumped (Kaido-kanabo clash), Loki raised (living weapon), Imu corroborated (ch 1189 Sea God Sword + 19 kings arsenal), Shamrock rebalanced up (injured Loki), Hody name→"" (Kirisame reassigned), Raizo strip reason corrected (shuriken), Caribou/Bege/Jinbe/Dragon none-stands noted (secondary/list-only claims).

## Apply log

APPLIED via scripted exact-match write (`apply-weapons.ts`, temp): 73/73 blocks, each old-block asserted present-before-replace and belonging to the right character. `git diff`: 326+/326−, all weapon fields, `characters-v2.ts` only.

- Ranking effect: Imu 10,785 → 12,806 (+2,021, polearm) - lead over #2 now ~2,100, a dominance spike from canon accuracy, flagged. Nusjuro #20→#12 (+1,218, Shodai fix). Green Bull #8→#6. Shanks #4→#7 / Roger #7→#11 / Mihawk #11→#16 (blade-cap trims); god relative order intact. Who's-Who #67→#46 (+894). Strips slide: Croc #54→#78, Magellan, Shinobu, Raizo, Bepo. 60+ chars move ≥3 ranks, all in verdict direction.
- Holder pool: god 5 / legend 25 / epic 49 / basic 32 = 111 total. R6 ≥3-users guarantee unaffected (60% holder rate).
- Post-apply: `tsc` clean, `eslint` clean, `prettier` clean, rankings + preview regen'd, 300-draft sanity clean (`bad: 0`), `astro build` clean.
