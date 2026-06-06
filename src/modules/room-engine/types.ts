import type { ID } from '@/types/shared';

/** The three levels of the house. */
export type Floor = 'basement' | 'ground' | 'upper';

export const FLOORS: Floor[] = ['basement', 'ground', 'upper'];

/** Cardinal edge of a square tile. */
export type Direction = 'N' | 'E' | 'S' | 'W';

export const DIRECTIONS: Direction[] = ['N', 'E', 'S', 'W'];

/** Tile rotation in degrees (clockwise). */
export type Rotation = 0 | 90 | 180 | 270;

/** A printed room tile definition (independent of any match). */
export interface RoomDef {
  defId: string;
  name: string;
  /** Floors this tile may legally be placed on. */
  floors: Floor[];
  /** Edges that have a door, in the tile's un-rotated orientation. */
  doors: Direction[];
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
