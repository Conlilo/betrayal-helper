import type { ID, StatKey } from '@/types/shared';
import type { DiceResult } from './dice';

/**
 * Standard attack: both sides roll dice equal to a chosen trait (usually
 * Might). Higher total wins; loser takes damage equal to the difference.
 * A tie deals no damage.
 */
export interface Combatant {
  characterId: ID;
  name: string;
  /** Trait the combatant is rolling with (Might for a physical attack). */
  trait: StatKey;
  /** Number of dice = current value of that trait. */
  diceCount: number;
}

export interface CombatInput {
  attacker: Combatant;
  defender: Combatant;
  attackerRoll: DiceResult;
  defenderRoll: DiceResult;
}

export interface CombatOutcome {
  attackerTotal: number;
  defenderTotal: number;
  /** Character id that takes damage, or null on a tie. */
  loserId: ID | null;
  /** Amount of (physical/mental) damage to apply to the loser. */
  damage: number;
  summary: string;
}

export function resolveCombat(input: CombatInput): CombatOutcome {
  const attackerTotal = input.attackerRoll.total;
  const defenderTotal = input.defenderRoll.total;
  const diff = Math.abs(attackerTotal - defenderTotal);

  if (attackerTotal === defenderTotal) {
    return {
      attackerTotal,
      defenderTotal,
      loserId: null,
      damage: 0,
      summary: `${input.attacker.name} ${attackerTotal} vs ${input.defender.name} ${defenderTotal} — tie, no damage.`,
    };
  }

  const attackerWins = attackerTotal > defenderTotal;
  const loser = attackerWins ? input.defender : input.attacker;
  const winner = attackerWins ? input.attacker : input.defender;

  return {
    attackerTotal,
    defenderTotal,
    loserId: loser.characterId,
    damage: diff,
    summary: `${winner.name} ${attackerWins ? attackerTotal : defenderTotal} beats ${loser.name} ${attackerWins ? defenderTotal : attackerTotal} — ${diff} damage to ${loser.name}.`,
  };
}
