import type { CardDef } from '../types';

/**
 * A small starter set of card definitions. The full game has ~45 event,
 * 13 omen and 22 item cards — extend this list (or load from JSON) over time.
 */
export const CARD_DEFS: CardDef[] = [
  // --- Events ---
  {
    defId: 'event-creepy-crawlies',
    type: 'event',
    name: 'Creepy Crawlies',
    description: 'Roll dice for Sanity. On a low roll, take damage as bugs swarm you.',
  },
  {
    defId: 'event-the-voice',
    type: 'event',
    name: 'The Voice',
    description: 'A whisper offers knowledge. Roll for Knowledge to gain or lose.',
  },
  {
    defId: 'event-hidden-passage',
    type: 'event',
    name: 'Hidden Passage',
    description: 'You find a secret way. Move to any other room with a matching symbol.',
  },

  // --- Omens ---
  {
    defId: 'omen-the-dog',
    type: 'omen',
    name: 'The Dog',
    description: 'A loyal companion. Gain +1 die in combat while it is with you.',
  },
  {
    defId: 'omen-skull',
    type: 'omen',
    name: 'Skull',
    description: 'A grim relic. Roll for Knowledge; on a low roll lose Sanity.',
  },
  {
    defId: 'omen-madman',
    type: 'omen',
    name: 'Madman',
    description: 'His ravings unsettle you. Lose 1 Sanity when you draw this.',
  },

  // --- Items ---
  {
    defId: 'item-revolver',
    type: 'item',
    name: 'Revolver',
    description: 'Add 2 dice to an attack. Holds limited shots.',
  },
  {
    defId: 'item-axe',
    type: 'item',
    name: 'Axe',
    description: 'Add 2 dice when you attack with Might.',
  },
  {
    defId: 'item-medical-kit',
    type: 'item',
    name: 'Medical Kit',
    description: 'Spend an action to heal Might or Speed by 1.',
  },
];

export const CARD_DEFS_BY_TYPE = {
  event: CARD_DEFS.filter(c => c.type === 'event'),
  omen: CARD_DEFS.filter(c => c.type === 'omen'),
  item: CARD_DEFS.filter(c => c.type === 'item'),
};
