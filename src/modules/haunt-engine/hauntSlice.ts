import { createSlice, nanoid, type PayloadAction } from '@reduxjs/toolkit';
import type { ID } from '@/types/shared';
import type { HauntState, Objective } from './types';
import { findHaunt } from './data/haunts';

const initialState: HauntState = {
  started: false,
  hauntId: null,
  hauntName: '',
  traitorId: null,
  heroObjectives: [],
  traitorObjectives: [],
  lastRoll: null,
};

const makeObjective = (text: string): Objective => ({
  id: nanoid(),
  text,
  done: false,
});

const hauntSlice = createSlice({
  name: 'haunt',
  initialState,
  reducers: {
    recordHauntRoll(
      state,
      action: PayloadAction<{ total: number; omenCount: number; triggered: boolean }>,
    ) {
      state.lastRoll = action.payload;
    },

    /**
     * Begin the Haunt: assign the haunt scenario and the traitor. The caller may
     * pass a localized name / win conditions (from the story, see getHauntSetup);
     * otherwise we fall back to HAUNT_DEFS.
     */
    startHaunt(
      state,
      action: PayloadAction<{
        hauntId: number;
        traitorId: ID | null;
        name?: string;
        heroGoal?: string;
        traitorGoal?: string;
      }>,
    ) {
      const { hauntId, traitorId, name, heroGoal, traitorGoal } = action.payload;
      const def = findHaunt(hauntId);
      state.started = true;
      state.hauntId = hauntId;
      state.hauntName = name ?? def?.name ?? `Haunt ${hauntId}`;
      state.traitorId = traitorId;
      const hg = heroGoal ?? def?.heroGoal;
      const tg = traitorGoal ?? def?.traitorGoal;
      state.heroObjectives = hg ? [makeObjective(hg)] : [];
      state.traitorObjectives = tg ? [makeObjective(tg)] : [];
    },

    addObjective(
      state,
      action: PayloadAction<{ side: 'hero' | 'traitor'; text: string }>,
    ) {
      const list =
        action.payload.side === 'hero'
          ? state.heroObjectives
          : state.traitorObjectives;
      list.push(makeObjective(action.payload.text));
    },

    toggleObjective(
      state,
      action: PayloadAction<{ side: 'hero' | 'traitor'; objectiveId: ID }>,
    ) {
      const list =
        action.payload.side === 'hero'
          ? state.heroObjectives
          : state.traitorObjectives;
      const obj = list.find(o => o.id === action.payload.objectiveId);
      if (obj) obj.done = !obj.done;
    },

    loadHaunt(_state, action: PayloadAction<HauntState>) {
      return action.payload;
    },

    resetHaunt() {
      return initialState;
    },
  },
});

export const {
  recordHauntRoll,
  startHaunt,
  addObjective,
  toggleObjective,
  loadHaunt,
  resetHaunt,
} = hauntSlice.actions;

export default hauntSlice.reducer;
