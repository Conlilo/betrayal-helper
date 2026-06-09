import type { Floor, RoomDef } from '../types';

/**
 * Starter room tile definitions. Door layouts and symbols are placeholders —
 * replace with the real tiles (and room effects) when the data doc arrives.
 * `defId` 'foyer' is the seeded starting tile for the ground floor.
 */
export const ROOM_DEFS: RoomDef[] = [
  // Starting / fixed tiles
  {
    defId: 'foyer',
    name: 'Foyer',
    floors: ['ground'],
    doors: ['N', 'E', 'S', 'W'],
    symbol: 'none',
  },
  {
    defId: 'grand-staircase',
    name: 'Grand Staircase',
    floors: ['ground'],
    doors: ['S'],
    symbol: 'none',
  },
  {
    defId: 'upper-landing',
    name: 'Upper Landing',
    floors: ['upper'],
    doors: ['N', 'E', 'S', 'W'],
    symbol: 'none',
  },
  {
    defId: 'basement-landing',
    name: 'Basement Landing',
    floors: ['basement'],
    doors: ['N', 'E', 'S', 'W'],
    symbol: 'none',
  },
  {
    defId: 'roof-landing',
    name: 'Roof Landing',
    floors: ['roof'],
    doors: ['N', 'E', 'S', 'W'],
    symbol: 'none',
  },

  // Generic rooms — placeholders with assorted symbols
  {
    defId: 'hallway',
    name: 'Hallway',
    floors: ['basement', 'ground', 'upper'],
    doors: ['N', 'S'],
    symbol: 'none',
  },
  {
    defId: 'corner-room',
    name: 'Corner Room',
    floors: ['basement', 'ground', 'upper'],
    doors: ['N', 'E'],
    symbol: 'event',
  },
  {
    defId: 'dead-end',
    name: 'Dead End',
    floors: ['basement', 'ground', 'upper'],
    doors: ['S'],
    symbol: 'item',
  },
  {
    defId: 'crossroads',
    name: 'Crossroads',
    floors: ['basement', 'ground', 'upper'],
    doors: ['N', 'E', 'S', 'W'],
    symbol: 'event',
  },
  {
    defId: 'gallery',
    name: 'Gallery',
    floors: ['ground', 'upper'],
    doors: ['E', 'S', 'W'],
    symbol: 'omen',
  },
  {
    defId: 'bedroom',
    name: 'Bedroom',
    floors: ['upper'],
    doors: ['S', 'W'],
    symbol: 'item',
  },
  {
    defId: 'kitchen',
    name: 'Kitchen',
    floors: ['ground'],
    doors: ['N', 'E', 'W'],
    symbol: 'event',
  },
  {
    defId: 'cellar',
    name: 'Cellar',
    floors: ['basement'],
    doors: ['N', 'E'],
    symbol: 'omen',
  },
  {
    defId: 'tower',
    name: 'Tower',
    floors: ['roof', 'upper'],
    doors: ['S'],
    symbol: 'omen',
  },
  {
    defId: 'widows-walk',
    name: "Widow's Walk",
    floors: ['roof'],
    doors: ['N', 'S'],
    symbol: 'event',
  },
];

/** The fixed landing tile auto-placed at the centre of each floor. */
export const FLOOR_LANDING: Record<Floor, string> = {
  basement: 'basement-landing',
  ground: 'foyer',
  upper: 'upper-landing',
  roof: 'roof-landing',
};

const LANDING_IDS = new Set(Object.values(FLOOR_LANDING));

export const ROOM_DEFS_BY_ID: Record<string, RoomDef> = Object.fromEntries(
  ROOM_DEFS.map(r => [r.defId, r]),
);

/** Room tiles legal to place on a given floor (excludes fixed landing tiles). */
export function roomDefsForFloor(floor: Floor): RoomDef[] {
  return ROOM_DEFS.filter(
    r => r.floors.includes(floor) && !LANDING_IDS.has(r.defId),
  );
}

export function doorsOfDef(defId: string) {
  return ROOM_DEFS_BY_ID[defId]?.doors ?? [];
}

export function symbolOfDef(defId: string) {
  return ROOM_DEFS_BY_ID[defId]?.symbol ?? 'none';
}

export function effectOfDef(defId: string): string | undefined {
  return ROOM_DEFS_BY_ID[defId]?.effect;
}
