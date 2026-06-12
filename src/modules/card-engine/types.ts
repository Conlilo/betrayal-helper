import type { ID, StatCategory, StatKey } from '@/types/shared';

export type CardType = 'event' | 'omen' | 'item';

/**
 * A guided step the helper walks the player through when resolving a card.
 * Cards without a `resolution` fall back to the generic dice + impact flow.
 */
export type ResolutionStep =
  | {
      /** An instruction with no dice — placing a token, moving, etc. */
      kind: 'note';
      prompt: string;
    }
  | {
      /** A single dice roll (a trait check). */
      kind: 'roll';
      prompt: string;
      /** Fixed dice count; omit to let the player set it. */
      dice?: number;
      /** Roll using the explorer's current value of this trait. */
      stat?: StatKey;
      /** Optional result hints, e.g. ['4+: gain 1 Sanity', '0-3: lose 1']. */
      outcomes?: string[];
    }
  | {
      /** An attacker (player on the right / monster) vs the explorer's defense. */
      kind: 'attackDefense';
      prompt: string;
      /** Dice the attacker rolls. */
      attackerDice: number;
      /** Trait the explorer defends with (dice = its current value). */
      defenseStat: StatKey;
      /** Damage category the explorer takes when the attacker wins. */
      damage: StatCategory;
    };

export interface CardResolution {
  steps: ResolutionStep[];
}

/** A card definition (the printed card, independent of any match). */
export interface CardDef {
  defId: string;
  type: CardType;
  name: string;
  /** Flavour / narration text ("lời dẫn"). */
  description: string;
  /** The mechanical effect to carry out ("đoạn xử lý tác dụng"). */
  effect?: string;
  /** Optional guided resolution steps for cards with special handling. */
  resolution?: CardResolution;
}

/** An instance of a card that has been drawn / is in play. */
export interface CardInstance {
  id: ID;
  defId: string;
  type: CardType;
  name: string;
  description: string;
  effect?: string;
  /** For items: id of the character holding it, or null if unowned/on a tile. */
  ownerId: ID | null;
  drawnAt: number;
}

export interface CardState {
  /** All cards that have been drawn this game, newest first. */
  drawn: CardInstance[];
}
