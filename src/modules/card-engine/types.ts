import type { ID } from '@/types/shared';

export type CardType = 'event' | 'omen' | 'item';

/** A card definition (the printed card, independent of any match). */
export interface CardDef {
  defId: string;
  type: CardType;
  name: string;
  /** Flavour / narration text ("lời dẫn"). */
  description: string;
  /** The mechanical effect to carry out ("đoạn xử lý tác dụng"). */
  effect?: string;
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
