import type {
  ID,
  StatKey,
  Side,
  Controller,
  GamePhase,
} from '@/types/shared';

/**
 * A stat track. In Betrayal each attribute is a row of numbers with a pointer
 * that moves left (damage) or right (heal). The current value is
 * `values[index]`. Reaching index 0 (a skull) usually means death.
 */
export interface StatTrack {
  values: number[];
  index: number;
}

/** A playable explorer / character sheet. */
export interface Character {
  id: ID;
  name: string;
  color: string;
  side: Side;
  controller: Controller;
  stats: Record<StatKey, StatTrack>;
  /** Ids of items currently held (see card-engine). */
  itemIds: ID[];
  /** Free-text room / tile the character is on. Map handling is future work. */
  location: string;
  alive: boolean;
}

/** A single entry in the action history (used for the activity log / undo). */
export interface LogEntry {
  id: ID;
  at: number;
  message: string;
}

export interface GameState {
  /** null until a match is created. */
  id: ID | null;
  name: string;
  phase: GamePhase;
  playerCount: number;
  characters: Character[];
  /** Character ids in turn order. */
  turnOrder: ID[];
  activeCharacterId: ID | null;
  /** Number of omens drawn so far — feeds the Haunt roll. */
  omenCount: number;
  log: LogEntry[];
  createdAt: number | null;
  updatedAt: number | null;
}
