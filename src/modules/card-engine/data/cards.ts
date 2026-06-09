import type { CardDef } from '../types';

/**
 * A small starter set of card definitions. The full game has ~45 event,
 * 13 omen and 22 item cards — extend this list (or load from JSON) over time.
 */
export const CARD_DEFS: CardDef[] = [
  // --- Events --- (description = lời dẫn, effect = xử lý tác dụng)
  {
    defId: 'event-creepy-crawlies',
    type: 'event',
    name: 'Creepy Crawlies',
    description: 'Something skitters in the dark and swarms over you.',
    effect: 'Roll for Sanity. 4+: nothing. 2–3: lose 1 Sanity. 0–1: lose 2 Sanity.',
  },
  {
    defId: 'event-the-voice',
    type: 'event',
    name: 'The Voice',
    description: 'A whisper from nowhere offers forbidden knowledge.',
    effect: 'Roll for Knowledge. 5+: gain 1 Knowledge. 0–2: lose 1 Sanity.',
  },
  {
    defId: 'event-hidden-passage',
    type: 'event',
    name: 'Hidden Passage',
    description: 'A draft reveals a seam in the wall — a secret way.',
    effect: 'Move to any other room that has a matching door symbol.',
  },

  // --- Omens ---
  {
    defId: 'omen-the-dog',
    type: 'omen',
    name: 'The Dog',
    description: 'A loyal hound pads up to your side.',
    effect: '+1 die in combat while the Dog is with you.',
  },
  {
    defId: 'omen-skull',
    type: 'omen',
    name: 'Skull',
    description: 'You pick up a grim, grinning relic.',
    effect: 'Roll for Knowledge; on a low roll lose 1 Sanity.',
  },
  {
    defId: 'omen-madman',
    type: 'omen',
    name: 'Madman',
    description: 'A raving figure fixes his eyes on you.',
    effect: 'Lose 1 Sanity when you draw this.',
  },

  // --- Items ---
  {
    defId: 'item-revolver',
    type: 'item',
    name: 'Revolver',
    description: 'A heavy six-shooter, cold in your hand.',
    effect: 'Add 2 dice to an attack. Holds limited shots.',
  },
  {
    defId: 'item-axe',
    type: 'item',
    name: 'Axe',
    description: 'A rusted axe, still wickedly sharp.',
    effect: 'Add 2 dice when you attack with Might.',
  },
  {
    defId: 'item-medical-kit',
    type: 'item',
    name: 'Medical Kit',
    description: 'Bandages and salves in a battered tin.',
    effect: 'Spend an action to heal Might or Speed by 1.',
  },
];

export const CARD_DEFS_BY_TYPE = {
  event: CARD_DEFS.filter(c => c.type === 'event'),
  omen: CARD_DEFS.filter(c => c.type === 'omen'),
  item: CARD_DEFS.filter(c => c.type === 'item'),
};
