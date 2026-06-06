/**
 * Shared primitive types used across modules.
 */

export type ID = string;

/** The four character attributes tracked in Betrayal at House on the Hill. */
export type StatKey = 'might' | 'speed' | 'knowledge' | 'sanity';

export const STAT_KEYS: StatKey[] = ['might', 'speed', 'knowledge', 'sanity'];

/** A faction in the game. Before the Haunt everyone is `explorer`. */
export type Side = 'explorer' | 'hero' | 'traitor';

/** Who controls a character — a human player or the AI. */
export type Controller = 'human' | 'ai';

/** High-level phase of a match. */
export type GamePhase = 'setup' | 'exploration' | 'haunt' | 'ended';
