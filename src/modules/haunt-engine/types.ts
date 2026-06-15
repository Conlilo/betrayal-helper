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

/** One ALL-CAPS section of a haunt page in the Traitor's Tome. */
export interface HauntSection {
  heading: string;
  body: string;
}

/** A monster stat block printed on a haunt page. */
export interface HauntMonster {
  name: string;
  stats: string;
}

/**
 * Full Traitor's Tome haunt entry (Betrayal at House on the Hill, 2010).
 * `intro` is the italic opening story; each ALL-CAPS heading becomes a
 * `sections` entry; monster stat blocks go in `monsters`.
 */
export interface HauntStory {
  id: number;
  title: string;
  intro: string;
  sections: HauntSection[];
  monsters: HauntMonster[];
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
