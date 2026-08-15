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
  isPlaceable,
  type PlacedRoom,
} from '@/modules/room-engine';
import {
  gameReducer,
  createGame,
  addCharacter,
  adjustStat,
  nextTurn,
  CHARACTER_TEMPLATES,
  characterStarts,
  currentStat,
} from '@/modules/game-engine';
import {
  cardReducer,
  drawCard,
  discardCard,
  type CardDef,
} from '@/modules/card-engine';

/** Helper: add the Nth explorer option (flattened across colour groups). */
const addNth = (state: ReturnType<typeof gameReducer>, n: number) => {
  const flat = CHARACTER_TEMPLATES.flatMap(g =>
    g.characters.map(option => ({ option, color: g.color })),
  );
  return gameReducer(state, addCharacter(flat[n]));
};

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

  it('only marks a cell placeable when a neighbor has a door facing it', () => {
    const withDoorSouth: PlacedRoom = {
      id: 'a', defId: 'a', name: 'A', floor: 'ground', x: 0, y: 0, rotation: 0,
    };
    const doorsOf = (r: PlacedRoom) => (r.id === 'a' ? ['S'] : []) as any;

    // South of A: A has a door facing south → placeable.
    expect(isPlaceable([withDoorSouth], 'ground', 0, 1, doorsOf)).toBe(true);
    // North of A: A has no door facing north → not placeable.
    expect(isPlaceable([withDoorSouth], 'ground', 0, -1, doorsOf)).toBe(false);
    // East of A: A has no door facing east → not placeable.
    expect(isPlaceable([withDoorSouth], 'ground', 1, 0, doorsOf)).toBe(false);
    // A cell with no adjacent room at all is never placeable.
    expect(isPlaceable([withDoorSouth], 'ground', 5, 5, doorsOf)).toBe(false);
    // An already-occupied cell is never placeable, door or not.
    expect(isPlaceable([withDoorSouth], 'ground', 0, 0, doorsOf)).toBe(false);

    // A cell adjacent to two rooms is placeable if EITHER has a matching
    // door — "some", not "every".
    const noDoorNeighbor: PlacedRoom = {
      id: 'b', defId: 'b', name: 'B', floor: 'ground', x: 1, y: 1, rotation: 0,
    };
    const doorsOfEither = (r: PlacedRoom) =>
      (r.id === 'a' ? ['S'] : []) as any;
    // (0,1) is south of A (has a door there) and west of B (no door) —
    // still placeable because A's door alone is enough.
    expect(
      isPlaceable([withDoorSouth, noDoorNeighbor], 'ground', 0, 1, doorsOfEither),
    ).toBe(true);
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
    state = addNth(state, 0);
    const id = state.characters[0].id;
    const beforeIndex = state.characters[0].stats.might.index;
    const beforeValue = currentStat(state.characters[0].stats.might);

    state = gameReducer(state, adjustStat({ characterId: id, stat: 'might', delta: -1 }));
    const afterTrack = state.characters[0].stats.might;

    expect(state.characters).toHaveLength(1);
    // Damage always moves one step down the track (index is the source of truth);
    // the printed value may repeat across adjacent boxes, so it can only be ≤.
    expect(afterTrack.index).toBe(beforeIndex - 1);
    expect(currentStat(afterTrack)).toBeLessThanOrEqual(beforeValue);
  });

  it('advances turns in choice order and counts rounds', () => {
    let state = gameReducer(undefined, createGame('Test'));
    state = addNth(state, 0);
    state = addNth(state, 1);
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

describe('game-engine characters', () => {
  it('every printed stat row contains its declared starting value', () => {
    // A missing value means track() (lastIndexOf) can't find the circled
    // starting box and silently falls back to index 0 — the skull/death box.
    const problems: string[] = [];
    for (const group of CHARACTER_TEMPLATES) {
      for (const c of group.characters) {
        const starts = characterStarts[c.id];
        if (!starts) continue;
        const checks: [string, number[], number][] = [
          ['speed', c.speed, starts.speedStart],
          ['might', c.might, starts.mightStart],
          ['sanity', c.sanity, starts.sanityStart],
          ['knowledge', c.knowledge, starts.knowledgeStart],
        ];
        for (const [stat, row, start] of checks) {
          if (!row.includes(start)) {
            problems.push(`${c.id} (${c.name}): ${stat}Start=${start} not in row [${row.join(',')}]`);
          }
        }
      }
    }
    expect(problems).toEqual([]);
  });
});

describe('card-engine slice', () => {
  it('keeps a defId in drawnDefIds after the card is discarded', () => {
    const def: CardDef = {
      defId: 'test-event-1',
      type: 'event',
      name: 'Test Event',
      description: 'A test card.',
    };
    let state = cardReducer(undefined, drawCard(def));
    expect(state.drawnDefIds).toContain('test-event-1');
    expect(state.drawn).toHaveLength(1);

    const instanceId = state.drawn[0].id;
    state = cardReducer(state, discardCard(instanceId));
    expect(state.drawn).toHaveLength(0);
    expect(state.drawnDefIds).toContain('test-event-1');
  });

  it('handles a legacy persisted state with no drawnDefIds field', () => {
    const legacyState = { drawn: [] } as unknown as ReturnType<typeof cardReducer>;
    const def: CardDef = {
      defId: 'legacy-test-1',
      type: 'item',
      name: 'Legacy Test Item',
      description: 'A test card for legacy state handling.',
    };
    // This should not throw even though legacyState.drawnDefIds is undefined.
    expect(() => cardReducer(legacyState, drawCard(def))).not.toThrow();
  });
});
