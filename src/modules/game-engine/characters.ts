import { createId } from '@/modules/storage/id';
import type { Character, StatTrack } from './types';

/** A row of 8 printed stat values for one trait (left→right, skull at index 0). */
export type StatRow = number[];

/** One playable explorer option (a side of a character figure). */
export interface CharacterOption {
  id: string;
  name: string;
  speed: StatRow;
  might: StatRow;
  sanity: StatRow;
  knowledge: StatRow;
}

/** A colour group — one figure colour, holding its two explorer options. */
export interface CharacterTemplate {
  color: string;
  colorName: string;
  characters: CharacterOption[];
}

/** Starting (circled) value of each trait, keyed by character id. */
export interface StatStarts {
  speedStart: number;
  mightStart: number;
  sanityStart: number;
  knowledgeStart: number;
}

// If the starting value appears more than once in the row, use the LAST
// occurrence as the starting index (the higher position on the track).
const track = (values: number[], startValue: number): StatTrack => ({
  values: [...values],
  index: Math.max(0, values.lastIndexOf(startValue)),
});

export const CHARACTER_TEMPLATES: CharacterTemplate[] = [
  {
    color: '#C0392B',
    colorName: 'Red',
    characters: [
      {
        id: 'flash_williams',
        name: 'Darrin "Flash" Williams',
        // TODO: verify
        speed: [0, 3, 3, 4, 5, 6, 7, 7, 8],
        might: [0, 2, 3, 3, 4, 5, 6, 6, 7],
        sanity: [0, 1, 2, 3, 4, 5, 5, 5, 7],
        knowledge: [0, 2, 3, 3, 4, 5, 5, 5, 7],
      },
      {
        id: 'ox_bellows',
        name: 'Ox Bellows',
        speed: [0, 2, 2, 2, 3, 4, 5, 5, 6],
        might: [0, 4, 5, 5, 6, 6, 7, 8, 8],
        sanity: [0, 2, 2, 3, 4, 5, 5, 6, 7],
        knowledge: [0, 2, 2, 3, 3, 5, 5, 6, 6],
      },
    ],
  },

  {
    color: '#2980B9',
    colorName: 'Blue',
    characters: [
      {
        id: 'madame_zostra',
        name: 'Madame Zostra',
        speed: [0, 2, 3, 3, 5, 5, 6, 6, 7],
        might: [0, 2, 3, 3, 4, 5, 5, 5, 6],
        sanity: [0, 4, 4, 4, 5, 6, 7, 8, 8],
        knowledge: [0, 1, 3, 4, 4, 4, 5, 6, 6],
      },
      {
        id: 'vivian_lopez',
        name: 'Vivian Lopez',
        speed: [0, 3, 4, 4, 4, 4, 6, 7, 8],
        might: [0, 2, 2, 2, 4, 4, 5, 6, 6],
        sanity: [0, 4, 4, 4, 5, 6, 7, 8, 8],
        knowledge: [0, 4, 5, 5, 5, 5, 6, 6, 7],
      },
    ],
  },

  {
    color: '#27AE60',
    colorName: 'Green',
    characters: [
      {
        id: 'brandon_jaspers',
        name: 'Brandon Jaspers',
        // TODO: verify
        speed: [0, 3, 4, 4, 4, 5, 6, 7, 8],
        might: [0, 2, 3, 3, 4, 5, 6, 6, 7],
        sanity: [0, 2, 3, 3, 5, 5, 6, 7, 8],
        knowledge: [0, 1, 3, 3, 5, 5, 6, 6, 7],
      },
      {
        id: 'peter_akimoto',
        name: 'Peter Akimoto',
        // TODO: verify
        speed: [0, 3, 3, 3, 4, 6, 6, 7, 7],
        might: [0, 2, 3, 3, 4, 5, 5, 6, 8],
        sanity: [0, 3, 4, 4, 4, 5, 6, 6, 7],
        knowledge: [0, 3, 4, 4, 5, 6, 7, 7, 8],
      },
    ],
  },

  {
    color: '#F1C40F',
    colorName: 'Yellow',
    characters: [
      {
        id: 'missy_dubourde',
        name: 'Missy Dubourde',
        speed: [0, 3, 4, 5, 6, 6, 6, 7, 7],
        might: [0, 2, 3, 3, 3, 4, 5, 6, 7],
        sanity: [0, 1, 2, 3, 4, 5, 5, 6, 7],
        knowledge: [0, 2, 3, 4, 4, 5, 6, 6, 6],
      },
      {
        id: 'zoe_ingstrom',
        name: 'Zoe Ingstrom',
        speed: [0, 4, 4, 4, 4, 5, 6, 8, 8],
        might: [0, 2, 2, 3, 3, 4, 4, 6, 7],
        sanity: [0, 3, 4, 5, 5, 6, 6, 7, 8],
        knowledge: [0, 1, 2, 3, 4, 4, 5, 5, 5],
      },
    ],
  },

  {
    color: '#ECF0F1',
    colorName: 'White',
    characters: [
      {
        id: 'father_rhinehardt',
        name: 'Father Rhinehardt',
        // TODO: verify
        speed: [0, 2, 3, 3, 4, 5, 6, 7, 7],
        might: [0, 1, 2, 2, 4, 4, 5, 5, 7],
        sanity: [0, 3, 4, 5, 5, 6, 7, 7, 8],
        knowledge: [0, 1, 3, 4, 5, 5, 6, 7, 8],
      },
      {
        id: 'professor_longfellow',
        name: 'Professor Longfellow',
        // TODO: verify
        speed: [0, 2, 3, 4, 4, 5, 5, 6, 6],
        might: [0, 1, 2, 3, 4, 5, 5, 6, 6],
        sanity: [0, 1, 3, 3, 4, 5, 5, 6, 7],
        knowledge: [0, 4, 5, 5, 5, 5, 6, 7, 8],
      },
    ],
  },

  {
    color: '#8E44AD',
    colorName: 'Purple',
    characters: [
      {
        id: 'heather_granville',
        name: 'Heather Granville',
        // TODO: verify
        speed: [0, 3, 3, 4, 5, 6, 6, 7, 8],
        might: [0, 3, 3, 3, 4, 5, 6, 7, 8],
        sanity: [0, 1, 3, 3, 4, 5, 6, 6, 6],
        knowledge: [0, 2, 3, 4, 5, 6, 7, 7, 8],
      },
      {
        id: 'jenny_leclerc',
        name: 'Jenny LeClerc',
        // TODO: verify
        speed: [0, 2, 3, 4, 4, 4, 5, 6, 8],
        might: [0, 3, 4, 4, 4, 4, 5, 6, 8],
        sanity: [0, 1, 1, 2, 4, 4, 4, 5, 6],
        knowledge: [0, 2, 3, 3, 4, 4, 5, 6, 8],
      },
    ],
  },
];

export const characterStarts: Record<string, StatStarts> = {
  flash_williams: {
    speedStart: 6,
    mightStart: 3,
    sanityStart: 3,
    knowledgeStart: 3,
  },

  ox_bellows: {
    speedStart: 4,
    mightStart: 5,
    sanityStart: 3,
    knowledgeStart: 3,
  },

  madame_zostra: {
    speedStart: 4,
    mightStart: 3,
    sanityStart: 4,
    knowledgeStart: 4,
  },

  vivian_lopez: {
    speedStart: 3,
    mightStart: 4,
    sanityStart: 4,
    knowledgeStart: 5,
  },

  brandon_jaspers: {
    speedStart: 4,
    mightStart: 4,
    sanityStart: 4,
    knowledgeStart: 3,
  },

  peter_akimoto: {
    speedStart: 3,
    mightStart: 4,
    sanityStart: 4,
    knowledgeStart: 4,
  },

  missy_dubourde: {
    speedStart: 5,
    mightStart: 3,
    sanityStart: 3,
    knowledgeStart: 4,
  },

  zoe_ingstrom: {
    speedStart: 4,
    mightStart: 4,
    sanityStart: 5,
    knowledgeStart: 3,
  },

  father_rhinehardt: {
    speedStart: 3,
    mightStart: 2,
    sanityStart: 6,
    knowledgeStart: 4,
  },

  professor_longfellow: {
    speedStart: 4,
    mightStart: 3,
    sanityStart: 3,
    knowledgeStart: 5,
  },

  heather_granville: {
    speedStart: 4,
    mightStart: 4,
    sanityStart: 3,
    knowledgeStart: 5,
  },

  jenny_leclerc: {
    speedStart: 4,
    mightStart: 4,
    sanityStart: 4,
    knowledgeStart: 3,
  },
};

/** Build a fresh Character from a chosen explorer option and its colour. */
export function characterFromOption(
  option: CharacterOption,
  color: string,
): Character {
  const s = characterStarts[option.id];
  return {
    id: createId('char'),
    name: option.name,
    color,
    side: 'explorer',
    controller: 'human',
    stats: {
      might: track(option.might, s?.mightStart ?? option.might[0]),
      speed: track(option.speed, s?.speedStart ?? option.speed[0]),
      knowledge: track(
        option.knowledge,
        s?.knowledgeStart ?? option.knowledge[0],
      ),
      sanity: track(option.sanity, s?.sanityStart ?? option.sanity[0]),
    },
    itemIds: [],
    location: 'Entrance Hall',
    roomId: null,
    alive: true,
  };
}

/** Current numeric value of a stat track. */
export function currentStat(statTrack: StatTrack): number {
  return statTrack.values[statTrack.index] ?? 0;
}
