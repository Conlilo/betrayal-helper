import type { Direction, PlacedRoom, Rotation } from './types';

/** Clockwise neighbor of a direction (N → E → S → W → N). */
const CW: Record<Direction, Direction> = { N: 'E', E: 'S', S: 'W', W: 'N' };

/** Opposite edge — the door that must face it on the adjacent tile. */
export const OPPOSITE: Record<Direction, Direction> = {
  N: 'S',
  S: 'N',
  E: 'W',
  W: 'E',
};

/** Unit grid offset for each direction (y grows downward). */
export const OFFSET: Record<Direction, { dx: number; dy: number }> = {
  N: { dx: 0, dy: -1 },
  E: { dx: 1, dy: 0 },
  S: { dx: 0, dy: 1 },
  W: { dx: -1, dy: 0 },
};

/** Rotate a single direction clockwise by the given rotation. */
export function rotateDirection(dir: Direction, rotation: Rotation): Direction {
  let result = dir;
  for (let i = 0; i < rotation / 90; i += 1) {
    result = CW[result];
  }
  return result;
}

/** The doors of a tile after applying its rotation. */
export function effectiveDoors(
  doors: Direction[],
  rotation: Rotation,
): Direction[] {
  return doors.map(d => rotateDirection(d, rotation));
}

/** Next rotation when rotating clockwise. */
export function nextRotation(rotation: Rotation): Rotation {
  return (((rotation + 90) % 360) as Rotation);
}

/** Find a placed room at a grid cell on a given floor. */
export function roomAt(
  rooms: PlacedRoom[],
  floor: string,
  x: number,
  y: number,
): PlacedRoom | undefined {
  return rooms.find(r => r.floor === floor && r.x === x && r.y === y);
}

/**
 * Directions in which `room` connects to a neighbor: both tiles have a door on
 * the shared edge. Used to draw door connections and validate layouts.
 */
export function connectedDirections(
  room: PlacedRoom,
  roomDoors: Direction[],
  rooms: PlacedRoom[],
  doorsOf: (r: PlacedRoom) => Direction[],
): Direction[] {
  const mine = effectiveDoors(roomDoors, room.rotation);
  return mine.filter(dir => {
    const { dx, dy } = OFFSET[dir];
    const neighbor = roomAt(rooms, room.floor, room.x + dx, room.y + dy);
    if (!neighbor) return false;
    const theirs = effectiveDoors(doorsOf(neighbor), neighbor.rotation);
    return theirs.includes(OPPOSITE[dir]);
  });
}

/** True if the cell is empty and orthogonally adjacent to ≥1 placed room. */
export function isPlaceable(
  rooms: PlacedRoom[],
  floor: string,
  x: number,
  y: number,
): boolean {
  if (roomAt(rooms, floor, x, y)) return false;
  return (Object.keys(OFFSET) as Direction[]).some(dir => {
    const { dx, dy } = OFFSET[dir];
    return Boolean(roomAt(rooms, floor, x + dx, y + dy));
  });
}
