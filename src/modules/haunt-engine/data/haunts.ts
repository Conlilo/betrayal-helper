import type { HauntDef } from '../types';

/**
 * Starter Haunt definitions. The base game has 50 haunts — add the rest to
 * this table (or load from a database, see "Haunt Database" in the spec).
 */
export const HAUNT_DEFS: HauntDef[] = [
  {
    hauntId: 1,
    name: 'The Walking Dead',
    premise: 'A zombie outbreak. The traitor raises the dead to overwhelm the heroes.',
    heroGoal: 'Destroy the source of the zombies and escape the house.',
    traitorGoal: 'Kill all the heroes with your growing horde of zombies.',
  },
  {
    hauntId: 2,
    name: 'The Webs of Fate',
    premise: 'A giant spider nests in the house and the traitor feeds it.',
    heroGoal: 'Kill the spider before it cocoons every explorer.',
    traitorGoal: 'Cocoon all heroes to feed the spider.',
  },
  {
    hauntId: 3,
    name: 'The Mad Scientist',
    premise: 'A traitor builds a monster from spare parts in the basement.',
    heroGoal: 'Destroy the monster and its creator.',
    traitorGoal: 'Animate the monster and use it to kill the heroes.',
  },
];

export function findHaunt(hauntId: number): HauntDef | undefined {
  return HAUNT_DEFS.find(h => h.hauntId === hauntId);
}
