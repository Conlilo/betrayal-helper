import type { ID } from '@/types/shared';

/** The levels of the house, from bottom to top. */
export type Floor = 'basement' | 'ground' | 'upper' | 'roof';

export const FLOORS: Floor[] = ['basement', 'ground', 'upper', 'roof'];

/** Cardinal edge of a square tile. */
export type Direction = 'N' | 'E' | 'S' | 'W';

export const DIRECTIONS: Direction[] = ['N', 'E', 'S', 'W'];

/** Tile rotation in degrees (clockwise). */
export type Rotation = 0 | 90 | 180 | 270;

/**
 * The symbol printed on a room tile.
 * - `event` / `omen` / `item`: entering makes the explorer draw that card.
 * - `dumbwaiter`: a special feature (move between floors), not a card draw.
 * - `none`: nothing happens.
 */
export type RoomSymbol = 'event' | 'omen' | 'item' | 'dumbwaiter' | 'none';

/** Symbols that trigger drawing a card (a subset of RoomSymbol). */
export const CARD_SYMBOLS = ['event', 'omen', 'item'] as const;

/** True when a room symbol makes the explorer draw a card. */
export function isCardSymbol(
  symbol: RoomSymbol,
): symbol is 'event' | 'omen' | 'item' {
  return symbol === 'event' || symbol === 'omen' || symbol === 'item';
}

/** A printed room tile definition (independent of any match). */
export interface RoomDef {
  defId: string;
  name: string;
  /** Floors this tile may legally be placed on. */
  floors: Floor[];
  /** Edges that have a door, in the tile's un-rotated orientation. */
  doors: Direction[];
  /** Card symbol that triggers on entering this room. */
  symbol: RoomSymbol;
  /** The room's printed special effect, if any (free text). */
  effect?: string;
}

/** A room tile placed on the board during a game. */
export interface PlacedRoom {
  id: ID;
  defId: string;
  name: string;
  floor: Floor;
  /** Grid coordinates (column, row); origin top-left, y grows downward. */
  x: number;
  y: number;
  rotation: Rotation;
}

export interface RoomState {
  rooms: PlacedRoom[];
  currentFloor: Floor;
}

/** Logical board size (square). The starting tile sits at the center. */
export const BOARD_SIZE = 11;
export const BOARD_CENTER = Math.floor(BOARD_SIZE / 2);
