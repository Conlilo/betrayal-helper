/**
 * Shared primitive types used across modules.
 */

export type ID = string;

/** The four character attributes tracked in Betrayal at House on the Hill. */
export type StatKey = 'might' | 'speed' | 'knowledge' | 'sanity';

export const STAT_KEYS: StatKey[] = ['might', 'speed', 'knowledge', 'sanity'];

/**
 * Stats are grouped into two kinds of damage:
 * - **Physical** (vật chất): Might + Speed
 * - **Mental** (tinh thần): Knowledge + Sanity
 * Cards/rooms that deal "physical damage" hit Might/Speed; "mental damage"
 * hits Knowledge/Sanity. The player chooses how to split it across the pair.
 */
export type StatCategory = 'physical' | 'mental';

export const PHYSICAL_STATS: StatKey[] = ['might', 'speed'];
export const MENTAL_STATS: StatKey[] = ['knowledge', 'sanity'];

export const STAT_CATEGORY: Record<StatKey, StatCategory> = {
  might: 'physical',
  speed: 'physical',
  knowledge: 'mental',
  sanity: 'mental',
};

export const STATS_BY_CATEGORY: Record<StatCategory, StatKey[]> = {
  physical: PHYSICAL_STATS,
  mental: MENTAL_STATS,
};

/** A faction in the game. Before the Haunt everyone is `explorer`. */
export type Side = 'explorer' | 'hero' | 'traitor';

/** Who controls a character — a human player or the AI. */
export type Controller = 'human' | 'ai';

/** High-level phase of a match. */
export type GamePhase = 'setup' | 'exploration' | 'haunt' | 'ended';
