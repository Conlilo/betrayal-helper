import { createSlice, nanoid, type PayloadAction } from '@reduxjs/toolkit';
import type { ID } from '@/types/shared';
import type { Floor, PlacedRoom, RoomState } from './types';
import { BOARD_CENTER, FLOORS } from './types';
import { nextRotation } from './geometry';
import { ROOM_DEFS_BY_ID, FLOOR_SEED } from './data/rooms';

const initialState: RoomState = {
  rooms: [],
  currentFloor: 'ground',
};

const roomSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    setFloor(state, action: PayloadAction<Floor>) {
      state.currentFloor = action.payload;
    },

    /** Seed each floor's fixed starting tiles if the board is empty. */
    seedBoard: {
      reducer(state, action: PayloadAction<PlacedRoom[]>) {
        if (state.rooms.length === 0) {
          state.rooms.push(...action.payload);
          state.currentFloor = 'ground';
        }
      },
      prepare() {
        const seeds: PlacedRoom[] = FLOORS.flatMap(floor =>
          FLOOR_SEED[floor].map(({ defId, dx, dy }) => {
            const def = ROOM_DEFS_BY_ID[defId];
            return {
              id: nanoid(),
              defId,
              name: def?.name ?? defId,
              floor,
              x: BOARD_CENTER + dx,
              y: BOARD_CENTER + dy,
              rotation: 0,
            };
          }),
        );
        return { payload: seeds };
      },
    },

    placeRoom: {
      reducer(state, action: PayloadAction<PlacedRoom>) {
        const exists = state.rooms.some(
          r =>
            r.floor === action.payload.floor &&
            r.x === action.payload.x &&
            r.y === action.payload.y,
        );
        if (!exists) state.rooms.push(action.payload);
      },
      prepare(args: { defId: string; floor: Floor; x: number; y: number }) {
        const def = ROOM_DEFS_BY_ID[args.defId];
        const room: PlacedRoom = {
          id: nanoid(),
          defId: args.defId,
          name: def?.name ?? args.defId,
          floor: args.floor,
          x: args.x,
          y: args.y,
          rotation: 0,
        };
        return { payload: room };
      },
    },

    moveRoom(state, action: PayloadAction<{ id: ID; x: number; y: number }>) {
      const room = state.rooms.find(r => r.id === action.payload.id);
      if (!room) return;
      const occupied = state.rooms.some(
        r =>
          r.id !== room.id &&
          r.floor === room.floor &&
          r.x === action.payload.x &&
          r.y === action.payload.y,
      );
      if (occupied) return;
      room.x = action.payload.x;
      room.y = action.payload.y;
    },

    rotateRoom(state, action: PayloadAction<ID>) {
      const room = state.rooms.find(r => r.id === action.payload);
      if (room) room.rotation = nextRotation(room.rotation);
    },

    removeRoom(state, action: PayloadAction<ID>) {
      state.rooms = state.rooms.filter(r => r.id !== action.payload);
    },

    loadRooms(_state, action: PayloadAction<RoomState>) {
      return action.payload;
    },

    resetRooms() {
      return initialState;
    },
  },
});

export const {
  setFloor,
  seedBoard,
  placeRoom,
  moveRoom,
  rotateRoom,
  removeRoom,
  loadRooms,
  resetRooms,
} = roomSlice.actions;

export default roomSlice.reducer;
