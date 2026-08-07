import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  type PersistConfig,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import { gameReducer } from '@/modules/game-engine';
import { cardReducer } from '@/modules/card-engine';
import { hauntReducer } from '@/modules/haunt-engine';
import { settingsReducer } from '@/modules/settings';
import { roomReducer } from '@/modules/room-engine';

const rootReducer = combineReducers({
  game: gameReducer,
  cards: cardReducer,
  haunt: hauntReducer,
  settings: settingsReducer,
  rooms: roomReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const persistConfig: PersistConfig<ReturnType<typeof rootReducer>> = {
  key: 'hauntkeeper-root',
  version: 1,
  storage: AsyncStorage,
  whitelist: ['game', 'cards', 'haunt', 'settings', 'rooms'],
  // Shallow-merges each persisted slice against that slice's initialState,
  // so fields added to a slice after data was already persisted (e.g.
  // cards.drawnDefIds) get filled in from initialState instead of being
  // undefined on rehydration. The default (autoMergeLevel1) hard-replaces
  // each slice wholesale and would leave new fields undefined.
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        // redux-persist dispatches these non-serializable actions internally.
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
