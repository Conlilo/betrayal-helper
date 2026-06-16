import type { Floor, RoomDef, RoomSymbol } from '../types';

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
    symbols: [],
  },
  {
    defId: 'entrance-hall',
    name: 'Entrance Hall',
    floors: ['ground'],
    doors: ['N', 'E', 'W'],
    symbols: [],
  },
  {
    defId: 'grand-staircase',
    name: 'Grand Staircase',
    floors: ['ground'],
    doors: ['S'],
    symbols: [],
  },
  {
    defId: 'upper-landing',
    name: 'Upper Landing',
    floors: ['upper'],
    doors: ['N', 'E', 'S', 'W'],
    symbols: [],
  },
  {
    defId: 'basement-landing',
    name: 'Basement Landing',
    floors: ['basement'],
    doors: ['N', 'E', 'S', 'W'],
    symbols: [],
  },
  {
    defId: 'roof-landing',
    name: 'Roof Landing',
    floors: ['roof'],
    doors: ['N', 'E', 'S', 'W'],
    symbols: [],
  },

  // Generic rooms — placeholders with assorted symbols
  
];

/**
 * Fixed starting tiles auto-placed on each floor, with their offset (dx, dy)
 * from the board centre. The ground floor always starts with the classic row
 * Grand Staircase — Foyer — Entrance Hall (top→bottom). Other floors start
 * with their single landing.
 */
export interface SeedTile {
  defId: string;
  dx: number;
  dy: number;
}

export const FLOOR_SEED: Record<Floor, SeedTile[]> = {
  basement: [{ defId: 'basement-landing', dx: 0, dy: 0 }],
  ground: [
    { defId: 'grand-staircase', dx: 0, dy: -1 },
    { defId: 'foyer', dx: 0, dy: 0 },
    { defId: 'entrance-hall', dx: 0, dy: 1 },
  ],
  upper: [{ defId: 'upper-landing', dx: 0, dy: 0 }],
  roof: [{ defId: 'roof-landing', dx: 0, dy: 0 }],
};

/** defIds that are auto-placed at seed time — never drawn from the pool. */
const SEEDED_IDS = new Set(
  Object.values(FLOOR_SEED).flat().map(s => s.defId),
);

export const ROOM_DEFS_BY_ID: Record<string, RoomDef> = Object.fromEntries(
  ROOM_DEFS.map(r => [r.defId, r]),
);

/** Room tiles legal to draw/place on a floor (excludes fixed starting tiles). */
export function roomDefsForFloor(floor: Floor): RoomDef[] {
  return ROOM_DEFS.filter(
    r => r.floors.includes(floor) && !SEEDED_IDS.has(r.defId),
  );
}

export function doorsOfDef(defId: string) {
  return ROOM_DEFS_BY_ID[defId]?.doors ?? [];
}

export function symbolsOfDef(defId: string): RoomSymbol[] {
  return ROOM_DEFS_BY_ID[defId]?.symbols ?? [];
}

export function effectOfDef(defId: string): string | undefined {
  return ROOM_DEFS_BY_ID[defId]?.effect;
}
