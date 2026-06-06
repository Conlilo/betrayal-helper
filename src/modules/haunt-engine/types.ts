import type { ID } from '@/types/shared';

/** Win conditions / objectives shown to a side during the Haunt. */
export interface Objective {
  id: ID;
  text: string;
  done: boolean;
}

/** A Haunt scenario definition (from the Secrets of Survival / Traitor's Tour). */
export interface HauntDef {
  hauntId: number;
  name: string;
  /** Short description of what triggers and what happens. */
  premise: string;
  heroGoal: string;
  traitorGoal: string;
}

export interface HauntState {
  started: boolean;
  hauntId: number | null;
  hauntName: string;
  traitorId: ID | null;
  heroObjectives: Objective[];
  traitorObjectives: Objective[];
  /** Result of the most recent Haunt roll, for display. */
  lastRoll: { total: number; omenCount: number; triggered: boolean } | null;
}
