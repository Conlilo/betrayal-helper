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

    /** Begin the Haunt: assign the haunt scenario and the traitor. */
    startHaunt(
      state,
      action: PayloadAction<{ hauntId: number; traitorId: ID | null }>,
    ) {
      const def = findHaunt(action.payload.hauntId);
      state.started = true;
      state.hauntId = action.payload.hauntId;
      state.hauntName = def?.name ?? `Haunt ${action.payload.hauntId}`;
      state.traitorId = action.payload.traitorId;
      state.heroObjectives = def ? [makeObjective(def.heroGoal)] : [];
      state.traitorObjectives = def ? [makeObjective(def.traitorGoal)] : [];
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
