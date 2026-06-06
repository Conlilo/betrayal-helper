import { createSlice, nanoid, type PayloadAction } from '@reduxjs/toolkit';
import type { ID } from '@/types/shared';
import type { CardDef, CardInstance, CardState } from './types';

const initialState: CardState = {
  drawn: [],
};

const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    /** Draw (play) a card from its definition. */
    drawCard: {
      reducer(state, action: PayloadAction<CardInstance>) {
        state.drawn.unshift(action.payload);
      },
      prepare(def: CardDef, ownerId: ID | null = null) {
        const instance: CardInstance = {
          id: nanoid(),
          defId: def.defId,
          type: def.type,
          name: def.name,
          description: def.description,
          ownerId: def.type === 'item' ? ownerId : null,
          drawnAt: Date.now(),
        };
        return { payload: instance };
      },
    },

    discardCard(state, action: PayloadAction<ID>) {
      state.drawn = state.drawn.filter(c => c.id !== action.payload);
    },

    /** Transfer an item card to another character (or to a tile via null). */
    transferItem(
      state,
      action: PayloadAction<{ cardId: ID; toOwnerId: ID | null }>,
    ) {
      const card = state.drawn.find(c => c.id === action.payload.cardId);
      if (card && card.type === 'item') {
        card.ownerId = action.payload.toOwnerId;
      }
    },

    loadCards(_state, action: PayloadAction<CardState>) {
      return action.payload;
    },

    resetCards() {
      return initialState;
    },
  },
});

export const {
  drawCard,
  discardCard,
  transferItem,
  loadCards,
  resetCards,
} = cardSlice.actions;

export default cardSlice.reducer;
