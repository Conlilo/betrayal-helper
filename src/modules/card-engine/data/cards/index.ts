import type { CardDef } from '../../types';
import { EVENT_CARDS } from './events';
import { OMEN_CARDS } from './omens';
import { ITEM_CARDS } from './items';

/**
 * Full card pool, split by type into sibling files for readability:
 * `events.ts` · `omens.ts` · `items.ts`. Edit those, not this index.
 */
export const CARD_DEFS: CardDef[] = [...EVENT_CARDS, ...OMEN_CARDS, ...ITEM_CARDS];

export const CARD_DEFS_BY_TYPE = {
  event: EVENT_CARDS,
  omen: OMEN_CARDS,
  item: ITEM_CARDS,
};
