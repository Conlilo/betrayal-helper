import type { Floor, RoomDef } from '../types';

/**
 * Starter room tile definitions. Door layouts are placeholders — replace with
 * the real tiles (and room effects) when the data doc arrives. `defId` 'foyer'
 * is the seeded starting tile for the ground floor.
 */
export const ROOM_DEFS: RoomDef[] = [
  // Starting / fixed tiles
  {
    defId: 'foyer',
    name: 'Foyer',
    floors: ['ground'],
    doors: ['N', 'E', 'S', 'W'],
  },
  {
    defId: 'grand-staircase',
    name: 'Grand Staircase',
    floors: ['ground'],
    doors: ['S'],
  },
  {
    defId: 'upper-landing',
    name: 'Upper Landing',
    floors: ['upper'],
    doors: ['N', 'E', 'W'],
  },
  {
    defId: 'basement-landing',
    name: 'Basement Landing',
    floors: ['basement'],
    doors: ['N', 'E', 'S', 'W'],
  },

  // Generic rooms (any floor) — placeholders
  {
    defId: 'hallway',
    name: 'Hallway',
    floors: ['basement', 'ground', 'upper'],
    doors: ['N', 'S'],
  },
  {
    defId: 'corner-room',
    name: 'Corner Room',
    floors: ['basement', 'ground', 'upper'],
    doors: ['N', 'E'],
  },
  {
    defId: 'dead-end',
    name: 'Dead End',
    floors: ['basement', 'ground', 'upper'],
    doors: ['S'],
  },
  {
    defId: 'crossroads',
    name: 'Crossroads',
    floors: ['basement', 'ground', 'upper'],
    doors: ['N', 'E', 'S', 'W'],
  },
  {
    defId: 'gallery',
    name: 'Gallery',
    floors: ['ground', 'upper'],
    doors: ['E', 'S', 'W'],
  },
  {
    defId: 'bedroom',
    name: 'Bedroom',
    floors: ['upper'],
    doors: ['S', 'W'],
  },
  {
    defId: 'kitchen',
    name: 'Kitchen',
    floors: ['ground'],
    doors: ['N', 'E', 'W'],
  },
  {
    defId: 'cellar',
    name: 'Cellar',
    floors: ['basement'],
    doors: ['N', 'E'],
  },
];

export const ROOM_DEFS_BY_ID: Record<string, RoomDef> = Object.fromEntries(
  ROOM_DEFS.map(r => [r.defId, r]),
);

/** Room tiles legal to place on a given floor (excludes fixed starting tiles). */
export function roomDefsForFloor(floor: Floor): RoomDef[] {
  const fixed = new Set(['foyer']);
  return ROOM_DEFS.filter(r => r.floors.includes(floor) && !fixed.has(r.defId));
}

export function doorsOfDef(defId: string) {
  return ROOM_DEFS_BY_ID[defId]?.doors ?? [];
}
