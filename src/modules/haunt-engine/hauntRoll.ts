import { rollDice } from '@/modules/combat-engine/dice';

export interface HauntRollResult {
  total: number;
  omenCount: number;
  /** True when the Haunt begins. */
  triggered: boolean;
}

/**
 * The Haunt roll: after drawing an omen, roll six dice. If the total is LESS
 * than the number of omen cards drawn so far, the Haunt begins.
 */
export function rollHaunt(omenCount: number): HauntRollResult {
  const { total } = rollDice(6);
  return { total, omenCount, triggered: total < omenCount };
}

/** Evaluate a manually-entered six-dice total (Solo-mode fairness). */
export function evaluateHauntRoll(
  total: number,
  omenCount: number,
): HauntRollResult {
  return { total, omenCount, triggered: total < omenCount };
}
