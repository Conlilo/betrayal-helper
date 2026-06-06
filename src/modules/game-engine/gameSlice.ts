import { createSlice, nanoid, type PayloadAction } from '@reduxjs/toolkit';
import type { ID, StatKey, GamePhase, Side, Controller } from '@/types/shared';
import type { Character, GameState } from './types';
import {
  CHARACTER_TEMPLATES,
  characterFromTemplate,
  type CharacterTemplate,
} from './characters';

const initialState: GameState = {
  id: null,
  name: '',
  phase: 'setup',
  playerCount: 0,
  characters: [],
  turnOrder: [],
  activeCharacterId: null,
  omenCount: 0,
  log: [],
  createdAt: null,
  updatedAt: null,
};

function touch(state: GameState, message?: string) {
  state.updatedAt = Date.now();
  if (message) {
    state.log.unshift({ id: nanoid(), at: state.updatedAt, message });
    state.log = state.log.slice(0, 100);
  }
}

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    createGame: {
      reducer(state, action: PayloadAction<{ id: ID; name: string; at: number }>) {
        Object.assign(state, initialState);
        state.id = action.payload.id;
        state.name = action.payload.name || 'New Game';
        state.phase = 'setup';
        state.createdAt = action.payload.at;
        state.updatedAt = action.payload.at;
        state.log = [
          { id: nanoid(), at: action.payload.at, message: 'Game created.' },
        ];
      },
      prepare(name: string) {
        return { payload: { id: nanoid(), name, at: Date.now() } };
      },
    },

    addCharacterFromTemplate(state, action: PayloadAction<CharacterTemplate>) {
      const character = characterFromTemplate(action.payload);
      state.characters.push(character);
      state.turnOrder.push(character.id);
      state.playerCount = state.characters.length;
      touch(state, `${character.name} joined the game.`);
    },

    removeCharacter(state, action: PayloadAction<ID>) {
      state.characters = state.characters.filter(c => c.id !== action.payload);
      state.turnOrder = state.turnOrder.filter(id => id !== action.payload);
      state.playerCount = state.characters.length;
      if (state.activeCharacterId === action.payload) {
        state.activeCharacterId = state.turnOrder[0] ?? null;
      }
      touch(state, 'A character left the game.');
    },

    /** Move a stat pointer by `delta` steps, clamped to the track bounds. */
    adjustStat(
      state,
      action: PayloadAction<{ characterId: ID; stat: StatKey; delta: number }>,
    ) {
      const { characterId, stat, delta } = action.payload;
      const character = state.characters.find(c => c.id === characterId);
      if (!character) return;
      const tr = character.stats[stat];
      tr.index = Math.max(0, Math.min(tr.values.length - 1, tr.index + delta));
      character.alive = !STAT_DEATH_KEYS.some(k => character.stats[k].index === 0);
      touch(
        state,
        `${character.name} ${stat} → ${tr.values[tr.index]}`,
      );
    },

    setCharacterLocation(
      state,
      action: PayloadAction<{ characterId: ID; location: string }>,
    ) {
      const character = state.characters.find(
        c => c.id === action.payload.characterId,
      );
      if (!character) return;
      character.location = action.payload.location;
      touch(state);
    },

    setCharacterSide(
      state,
      action: PayloadAction<{ characterId: ID; side: Side; controller?: Controller }>,
    ) {
      const character = state.characters.find(
        c => c.id === action.payload.characterId,
      );
      if (!character) return;
      character.side = action.payload.side;
      if (action.payload.controller) {
        character.controller = action.payload.controller;
      }
      touch(state, `${character.name} is now a ${action.payload.side}.`);
    },

    setPhase(state, action: PayloadAction<GamePhase>) {
      state.phase = action.payload;
      touch(state, `Phase → ${action.payload}.`);
    },

    incrementOmenCount(state) {
      state.omenCount += 1;
      touch(state, `Omen drawn (total ${state.omenCount}).`);
    },

    nextTurn(state) {
      if (state.turnOrder.length === 0) return;
      const currentIndex = state.activeCharacterId
        ? state.turnOrder.indexOf(state.activeCharacterId)
        : -1;
      const nextIndex = (currentIndex + 1) % state.turnOrder.length;
      state.activeCharacterId = state.turnOrder[nextIndex];
      touch(state);
    },

    /** Replace the whole game state (used by load / undo). */
    loadGame(_state, action: PayloadAction<GameState>) {
      return action.payload;
    },

    resetGame() {
      return initialState;
    },
  },
});

/** Stats whose skull (index 0) kills the character. */
const STAT_DEATH_KEYS: StatKey[] = ['might', 'speed', 'knowledge', 'sanity'];

export const {
  createGame,
  addCharacterFromTemplate,
  removeCharacter,
  adjustStat,
  setCharacterLocation,
  setCharacterSide,
  setPhase,
  incrementOmenCount,
  nextTurn,
  loadGame,
  resetGame,
} = gameSlice.actions;

export { CHARACTER_TEMPLATES };
export type { Character };
export default gameSlice.reducer;
