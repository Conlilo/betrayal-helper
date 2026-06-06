import type { StatKey } from '@/types/shared';
import { createId } from '@/modules/storage/id';
import type { Character, StatTrack } from './types';

/**
 * Preset character definitions. These are simplified starting templates —
 * the real game ships 12 characters with distinct stat tracks. Add the rest
 * (or load from card-engine data) as the project grows.
 */
export interface CharacterTemplate {
  name: string;
  color: string;
  stats: Record<StatKey, StatTrack>;
}

const track = (values: number[], startValue: number): StatTrack => ({
  values,
  index: Math.max(0, values.indexOf(startValue)),
});

export const CHARACTER_TEMPLATES: CharacterTemplate[] = [
  {
    name: 'Ox Bellows',
    color: '#3C8DBC',
    stats: {
      might: track([0, 4, 5, 5, 6, 7, 8, 8], 6),
      speed: track([0, 2, 3, 3, 4, 5, 5, 6], 3),
      knowledge: track([0, 2, 2, 3, 4, 5, 5, 6], 2),
      sanity: track([0, 3, 3, 4, 5, 6, 6, 7], 4),
    },
  },
  {
    name: 'Vivian Lopez',
    color: '#8E3B46',
    stats: {
      might: track([0, 3, 3, 4, 4, 5, 6, 7], 4),
      speed: track([0, 3, 4, 4, 5, 6, 7, 8], 5),
      knowledge: track([0, 3, 4, 4, 5, 5, 6, 7], 4),
      sanity: track([0, 4, 4, 5, 5, 6, 7, 8], 5),
    },
  },
  {
    name: 'Professor Longfellow',
    color: '#5A8F4E',
    stats: {
      might: track([0, 2, 3, 3, 4, 5, 5, 6], 3),
      speed: track([0, 3, 3, 4, 5, 6, 6, 7], 4),
      knowledge: track([0, 4, 5, 5, 6, 7, 8, 8], 5),
      sanity: track([0, 3, 4, 5, 5, 6, 7, 8], 5),
    },
  },
  {
    name: 'Madame Zostra',
    color: '#D9A441',
    stats: {
      might: track([0, 3, 4, 4, 5, 5, 6, 7], 4),
      speed: track([0, 3, 3, 4, 5, 6, 6, 7], 3),
      knowledge: track([0, 3, 3, 4, 5, 6, 6, 7], 4),
      sanity: track([0, 4, 5, 5, 6, 7, 8, 8], 5),
    },
  },
];

/** Build a fresh Character instance from a template. */
export function characterFromTemplate(template: CharacterTemplate): Character {
  return {
    id: createId('char'),
    name: template.name,
    color: template.color,
    side: 'explorer',
    controller: 'human',
    stats: cloneStats(template.stats),
    itemIds: [],
    location: 'Entrance Hall',
    alive: true,
  };
}

function cloneStats(
  stats: Record<StatKey, StatTrack>,
): Record<StatKey, StatTrack> {
  return {
    might: { ...stats.might, values: [...stats.might.values] },
    speed: { ...stats.speed, values: [...stats.speed.values] },
    knowledge: { ...stats.knowledge, values: [...stats.knowledge.values] },
    sanity: { ...stats.sanity, values: [...stats.sanity.values] },
  };
}

/** Current numeric value of a stat track. */
export function currentStat(statTrack: StatTrack): number {
  return statTrack.values[statTrack.index] ?? 0;
}
