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
 * A symbol printed on a room tile.
 * - `event` / `omen` / `item`: entering makes the explorer draw that card.
 * - `dumbwaiter`: a special feature (move between floors), not a card draw.
 *
 * A tile can carry several of these at once (see `RoomDef.symbols`); a tile
 * with no symbols is simply an empty array.
 */
export type RoomSymbol = 'event' | 'omen' | 'item' | 'dumbwaiter';

/** Symbols that trigger drawing a card (a subset of RoomSymbol). */
export const CARD_SYMBOLS = ['event', 'omen', 'item'] as const;

/** True when a room symbol makes the explorer draw a card. */
export function isCardSymbol(
  symbol: RoomSymbol,
): symbol is 'event' | 'omen' | 'item' {
  return symbol === 'event' || symbol === 'omen' || symbol === 'item';
}

/** The card-drawing symbols on a tile, in print order (skips `dumbwaiter`). */
export function cardSymbolsOf(
  symbols: RoomSymbol[],
): ('event' | 'omen' | 'item')[] {
  return symbols.filter(isCardSymbol);
}

/** A printed room tile definition (independent of any match). */
export interface RoomDef {
  defId: string;
  name: string;
  /** Floors this tile may legally be placed on. */
  floors: Floor[];
  /** Edges that have a door, in the tile's un-rotated orientation. */
  doors: Direction[];
  /**
   * Symbols printed on this tile (a tile may have more than one). Entering
   * triggers each card symbol in order. Empty array = no symbol.
   */
  symbols: RoomSymbol[];
  /**
   * True for rooms that count as "outdoor / has a window". Several events filter
   * by this group (Shrieking Wind, The Beckoning, Lightning Strikes): explorers
   * standing in an outdoor room — or on the roof — must roll.
   */
  outdoor?: boolean;
  /** The room's printed special effect, if any (free text). */
  effect?: string;
}

/**
 * A token sitting in a room during play — monster/obstacle/item tokens, or
 * named markers placed by a haunt setup (Statue, Blessing, Smoke, Safe…).
 * Shown in the room's detail panel.
 */
export interface RoomToken {
  id: ID;
  label: string;
  /** Optional display color (e.g. a monster token colour). */
  color?: string;
  /** Optional free-text note (what the token does / its number). */
  note?: string;
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
  /** Tokens currently sitting in this room (empty/undefined = none). */
  tokens?: RoomToken[];
}

export interface RoomState {
  rooms: PlacedRoom[];
  currentFloor: Floor;
}

/** Logical board size (square). The starting tile sits at the center. */
export const BOARD_SIZE = 11;
export const BOARD_CENTER = Math.floor(BOARD_SIZE / 2);
