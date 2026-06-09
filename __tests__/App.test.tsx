/**
 * Smoke tests for the pure game-engine logic. Rendering the full App requires
 * native modules (AsyncStorage), so UI is better covered with E2E later.
 *
 * @format
 */

import { resolveCombat } from '@/modules/combat-engine';
import { evaluateHauntRoll } from '@/modules/haunt-engine';
import {
  effectiveDoors,
  connectedDirections,
  type PlacedRoom,
} from '@/modules/room-engine';
import {
  gameReducer,
  createGame,
  addCharacterFromTemplate,
  adjustStat,
  nextTurn,
  CHARACTER_TEMPLATES,
  currentStat,
} from '@/modules/game-engine';

describe('combat-engine', () => {
  it('damages the loser by the difference', () => {
    const out = resolveCombat({
      attacker: { characterId: 'a', name: 'A', trait: 'might', diceCount: 4 },
      defender: { characterId: 'b', name: 'B', trait: 'might', diceCount: 4 },
      attackerRoll: { dice: [], total: 6 },
      defenderRoll: { dice: [], total: 2 },
    });
    expect(out.loserId).toBe('b');
    expect(out.damage).toBe(4);
  });

  it('deals no damage on a tie', () => {
    const out = resolveCombat({
      attacker: { characterId: 'a', name: 'A', trait: 'might', diceCount: 3 },
      defender: { characterId: 'b', name: 'B', trait: 'might', diceCount: 3 },
      attackerRoll: { dice: [], total: 3 },
      defenderRoll: { dice: [], total: 3 },
    });
    expect(out.loserId).toBeNull();
    expect(out.damage).toBe(0);
  });
});

describe('room-engine geometry', () => {
  it('rotates doors clockwise', () => {
    expect(effectiveDoors(['N'], 90)).toEqual(['E']);
    expect(effectiveDoors(['N'], 180)).toEqual(['S']);
    expect(effectiveDoors(['N', 'W'], 90)).toEqual(['E', 'N']);
  });

  it('connects two rooms only when doors face each other', () => {
    const a: PlacedRoom = {
      id: 'a', defId: 'a', name: 'A', floor: 'ground', x: 0, y: 0, rotation: 0,
    };
    const b: PlacedRoom = {
      id: 'b', defId: 'b', name: 'B', floor: 'ground', x: 1, y: 0, rotation: 0,
    };
    const doorsOf = (r: PlacedRoom) => (r.id === 'a' ? ['E'] : ['W']) as any;
    expect(connectedDirections(a, ['E'], [a, b], doorsOf)).toEqual(['E']);

    // B's door faces away (E, not W) → no connection.
    const doorsOf2 = (r: PlacedRoom) => (r.id === 'a' ? ['E'] : ['E']) as any;
    expect(connectedDirections(a, ['E'], [a, b], doorsOf2)).toEqual([]);
  });
});

describe('haunt-engine', () => {
  it('triggers when the roll is below the omen count', () => {
    expect(evaluateHauntRoll(2, 5).triggered).toBe(true);
    expect(evaluateHauntRoll(6, 5).triggered).toBe(false);
  });
});

describe('game-engine slice', () => {
  it('adds a character and applies damage to a stat', () => {
    let state = gameReducer(undefined, createGame('Test'));
    state = gameReducer(state, addCharacterFromTemplate(CHARACTER_TEMPLATES[0]));
    const id = state.characters[0].id;
    const before = currentStat(state.characters[0].stats.might);

    state = gameReducer(state, adjustStat({ characterId: id, stat: 'might', delta: -1 }));
    const after = currentStat(state.characters[0].stats.might);

    expect(state.characters).toHaveLength(1);
    expect(after).toBeLessThan(before);
  });

  it('advances turns in choice order and counts rounds', () => {
    let state = gameReducer(undefined, createGame('Test'));
    state = gameReducer(state, addCharacterFromTemplate(CHARACTER_TEMPLATES[0]));
    state = gameReducer(state, addCharacterFromTemplate(CHARACTER_TEMPLATES[1]));
    const [a, b] = state.characters.map(c => c.id);

    // First chosen character starts the turn.
    expect(state.activeCharacterId).toBe(a);
    expect(state.round).toBe(1);

    state = gameReducer(state, nextTurn());
    expect(state.activeCharacterId).toBe(b);
    expect(state.round).toBe(1);

    // Wrapping back to the first player starts round 2.
    state = gameReducer(state, nextTurn());
    expect(state.activeCharacterId).toBe(a);
    expect(state.round).toBe(2);
  });
});
