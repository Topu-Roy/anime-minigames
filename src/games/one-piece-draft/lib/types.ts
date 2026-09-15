export type Race =
  | "human"
  | "fishman"
  | "giant"
  | "mink"
  | "skypiean"
  | "lunarian"
  | "longarm"
  | "longleg"
  | "merfolk"
  | "dwarf"
  | "oni"
  | "shandia";

export type HakiTier = "none" | "basic" | "advanced" | "supreme";
export type DevilFruitType = "paramecia" | "zoan" | "ancient_zoan" | "mythical_zoan" | "logia" | "none";
export type WeaponType = "sword" | "spear" | "club" | "rifle" | "slingshot" | "staff" | "mechanical" | "none";
export type Stats = "strength" | "attack" | "durability" | "defense" | "speed" | "awareness" | "stamina";
export type Rarity = "basic" | "epic" | "legend" | "god";

/**
 * V2 Character type - flat additive stat values.
 *
 * Final block has 7 stats: strength, attack, durability, defense, speed,
 * awareness, stamina.
 *   - strength/durability come ONLY from baseStats (raw body).
 *   - attack/defense start at 0 and come ONLY from haki, DF, weapon
 *     (technique output / blocking ability).
 * Haki sub-objects:
 *   - armament → attack, defense, stamina
 *   - observation → awareness, speed, reflex (dodge sense)
 *   - conqueror → attack, stamina, defense
 *
 * DF and weapon have attack/defense/speed/awareness/stamina.
 * Characters with no DF or no weapon have all stat fields set to 0.
 * intelligence/battleIQ live in baseStats and act as % multipliers
 * (awareness/strength), not flat bonuses.
 */
export type Character = {
  id: string;
  displayName: string;
  fullName: string;
  imageURL: string;
  race: Race;
  rarity: Rarity;

  /** Individual base stats - evaluated from canonical feats, not from race */
  baseStats: {
    strength: number;
    durability: number;
    speed: number;
    awareness: number;
    stamina: number;
    intelligence: number;
    battleIQ: number;
  };

  haki: {
    armament: {
      tier: HakiTier;
      attack: number;
      defense: number;
      stamina: number;
    };
    observation: {
      tier: HakiTier;
      awareness: number;
      speed: number;
      reflex: number;
    };
    conqueror: {
      tier: HakiTier;
      attack: number;
      stamina: number;
      defense: number;
    };
  };

  devilFruit: {
    type: DevilFruitType;
    japaneseName: string;
    englishName: string;
    awakened: boolean;
    attack: number;
    defense: number;
    speed: number;
    awareness: number;
    stamina: number;
  };

  weapon: {
    type: WeaponType;
    name: string;
    attack: number;
    defense: number;
    speed: number;
    awareness: number;
    stamina: number;
  };
};

// --- Draft types ---

export type StatBlock = {
  strength: number;
  attack: number;
  durability: number;
  defense: number;
  speed: number;
  awareness: number;
  stamina: number;
};

export type RoundType =
  "body" | "armament" | "observation" | "conqueror" | "devil_fruit" | "weapon" | "intelligence" | "battle_iq";

export type DraftPick = {
  round: number;
  roundType: RoundType;
  characterId: string;
  characterName: string;
  rarity: Rarity;
};

export type DraftPickWithRace = DraftPick & {
  race: Race;
};

export type DraftPickWithHaki = DraftPick & {
  hakiTier: HakiTier;
  hakiAttack: number;
  hakiDefense: number;
  hakiStamina: number;
};

export type DraftPickWithDF = DraftPick & {
  dfName: string;
  dfType: DevilFruitType;
};

export type DraftPickWithWeapon = DraftPick & {
  weaponName: string;
  weaponType: WeaponType;
};

export type DraftPickWithStat = DraftPick & {
  value: number;
};

export type DraftState = {
  currentRound: number;
  rerollsLeft: number;
  picks: DraftPick[];
  baseStats: StatBlock | null;
  roundOptions: Character[];
  isComplete: boolean;
};
