/**
 * Betrayal uses 6-sided dice whose faces are 0, 0, 1, 1, 2, 2.
 * A roll of N dice therefore yields a total between 0 and 2N.
 */

export type DieFace = 0 | 1 | 2;

const FACES: DieFace[] = [0, 0, 1, 1, 2, 2];

export function rollDie(): DieFace {
  return FACES[Math.floor(Math.random() * FACES.length)];
}

export interface DiceResult {
  dice: DieFace[];
  total: number;
}

/** Roll `count` dice. Counts below 0 are treated as 0 (auto result of 0). */
export function rollDice(count: number): DiceResult {
  const n = Math.max(0, Math.floor(count));
  const dice: DieFace[] = [];
  for (let i = 0; i < n; i += 1) {
    dice.push(rollDie());
  }
  return { dice, total: dice.reduce<number>((sum, d) => sum + d, 0) };
}

/** Build a DiceResult from a manually entered total (Solo-mode fairness). */
export function manualResult(total: number, count: number): DiceResult {
  const clamped = Math.max(0, Math.min(2 * Math.max(0, count), Math.floor(total)));
  return { dice: [], total: clamped };
}
