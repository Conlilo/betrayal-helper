import React, { useMemo, useState } from 'react';
import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { Button, colors, radius, spacing, typography } from '@/modules/ui';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import {
  BOARD_CENTER,
  BOARD_SIZE,
  FLOORS,
  connectedDirections,
  doorsOfDef,
  effectiveDoors,
  isPlaceable,
  placeRoom,
  moveRoom,
  removeRoom,
  resetRooms,
  rotateRoom,
  roomAt,
  roomDefsForFloor,
  setFloor,
  type Direction,
  type Floor,
  type PlacedRoom,
} from '@/modules/room-engine';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { ID } from '@/types/shared';
import type { RootScreenProps } from '@/navigation/types';

const CELL = 78;
const BOARD_PX = BOARD_SIZE * CELL;
const MIN_SCALE = 0.45;
const MAX_SCALE = 2.5;

export function BoardScreen(_props: RootScreenProps<'Board'>) {
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const dispatch = useAppDispatch();
  const rooms = useAppSelector(s => s.rooms.rooms);
  const floor = useAppSelector(s => s.rooms.currentFloor);

  const [selectedId, setSelectedId] = useState<ID | null>(null);
  const [moveMode, setMoveMode] = useState(false);
  const [placingAt, setPlacingAt] = useState<{ x: number; y: number } | null>(
    null,
  );

  const selected = rooms.find(r => r.id === selectedId) ?? null;
  const roomsOnFloor = useMemo(
    () => rooms.filter(r => r.floor === floor),
    [rooms, floor],
  );

  // ----- pan + pinch (reanimated shared values) -----
  const scale = useSharedValue(0.8);
  const savedScale = useSharedValue(0.8);
  const tx = useSharedValue(0);
  const ty = useSharedValue(0);
  const savedTx = useSharedValue(0);
  const savedTy = useSharedValue(0);

  const pinch = Gesture.Pinch()
    .onUpdate(e => {
      const next = savedScale.value * e.scale;
      scale.value = Math.min(MAX_SCALE, Math.max(MIN_SCALE, next));
    })
    .onEnd(() => {
      savedScale.value = scale.value;
    });

  const pan = Gesture.Pan()
    .minDistance(12)
    .averageTouches(true)
    .onUpdate(e => {
      tx.value = savedTx.value + e.translationX;
      ty.value = savedTy.value + e.translationY;
    })
    .onEnd(() => {
      savedTx.value = tx.value;
      savedTy.value = ty.value;
    });

  const composed = Gesture.Simultaneous(pan, pinch);

  const boardStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: tx.value },
      { translateY: ty.value },
      { scale: scale.value },
    ],
  }));

  // ----- cell tap handling -----
  const onCellPress = (x: number, y: number) => {
    const room = roomAt(rooms, floor, x, y);

    if (moveMode && selected && !room) {
      dispatch(moveRoom({ id: selected.id, x, y }));
      setMoveMode(false);
      return;
    }
    if (room) {
      setSelectedId(room.id);
      setMoveMode(false);
      return;
    }
    const placeable =
      isPlaceable(rooms, floor, x, y) ||
      (roomsOnFloor.length === 0 && x === BOARD_CENTER && y === BOARD_CENTER);
    if (placeable) {
      setPlacingAt({ x, y });
      return;
    }
    setSelectedId(null);
  };

  const onPickRoom = (defId: string) => {
    if (!placingAt) return;
    dispatch(placeRoom({ defId, floor, x: placingAt.x, y: placingAt.y }));
    setPlacingAt(null);
  };

  const floorDefs = roomDefsForFloor(floor);
  const randomDef = () =>
    floorDefs[Math.floor(Math.random() * floorDefs.length)];

  // ----- render grid cells -----
  const cells = [];
  for (let y = 0; y < BOARD_SIZE; y += 1) {
    for (let x = 0; x < BOARD_SIZE; x += 1) {
      const room = roomAt(rooms, floor, x, y);
      const placeable =
        !room &&
        (isPlaceable(rooms, floor, x, y) ||
          (roomsOnFloor.length === 0 &&
            x === BOARD_CENTER &&
            y === BOARD_CENTER));
      const moveTarget = moveMode && !room;
      cells.push(
        <Cell
          key={`${x}-${y}`}
          x={x}
          y={y}
          room={room}
          rooms={rooms}
          placeable={placeable}
          moveTarget={moveTarget}
          selected={room ? room.id === selectedId : false}
          onPress={() => onCellPress(x, y)}
        />,
      );
    }
  }

  return (
    <View style={styles.container}>
      {/* Floor selector */}
      <View style={styles.floorBar}>
        {FLOORS.map((f: Floor) => {
          const active = f === floor;
          return (
            <Pressable
              key={f}
              onPress={() => {
                dispatch(setFloor(f));
                setSelectedId(null);
                setMoveMode(false);
              }}
              style={[styles.floorBtn, active && styles.floorBtnActive]}>
              <Text
                style={[styles.floorText, active && styles.floorTextActive]}>
                {t(`board.floors.${f}`)}
              </Text>
            </Pressable>
          );
        })}
      </View>

      {/* Board viewport */}
      <GestureDetector gesture={composed}>
        <View style={styles.viewport}>
          <Animated.View style={[styles.board, boardStyle]}>{cells}</Animated.View>
        </View>
      </GestureDetector>

      {/* Bottom controls */}
      <View style={[styles.controls, { paddingBottom: insets.bottom + spacing.sm }]}>
        {selected ? (
          moveMode ? (
            <View style={styles.actionRow}>
              <Text style={styles.moveHint}>{t('board.moveHint')}</Text>
              <Button
                label={t('board.cancel')}
                variant="secondary"
                onPress={() => setMoveMode(false)}
              />
            </View>
          ) : (
            <>
              <Text style={styles.selectedLabel}>
                {t('board.selected', { name: selected.name })}
              </Text>
              <View style={styles.actionRow}>
                <Button
                  label={t('board.rotate')}
                  style={styles.flex}
                  onPress={() => dispatch(rotateRoom(selected.id))}
                />
                <Button
                  label={t('board.move')}
                  variant="secondary"
                  style={styles.flex}
                  onPress={() => setMoveMode(true)}
                />
                <Button
                  label={t('board.remove')}
                  variant="danger"
                  style={styles.flex}
                  onPress={() => {
                    dispatch(removeRoom(selected.id));
                    setSelectedId(null);
                  }}
                />
              </View>
            </>
          )
        ) : (
          <Text style={styles.hint}>
            {roomsOnFloor.length === 0 ? t('board.empty') : t('board.hint')}
          </Text>
        )}
        <Button
          label={t('board.reset')}
          variant="secondary"
          onPress={() => {
            dispatch(resetRooms());
            setSelectedId(null);
            setMoveMode(false);
          }}
        />
      </View>

      {/* Room picker */}
      <Modal
        visible={placingAt !== null}
        transparent
        animationType="slide"
        onRequestClose={() => setPlacingAt(null)}>
        <Pressable style={styles.backdrop} onPress={() => setPlacingAt(null)}>
          <Pressable style={styles.sheet}>
            <Text style={styles.sheetTitle}>{t('board.pickRoom')}</Text>
            <Button
              label={t('board.random')}
              onPress={() => {
                const def = randomDef();
                if (def) onPickRoom(def.defId);
              }}
            />
            <ScrollView style={styles.sheetList}>
              {floorDefs.map(def => (
                <Pressable
                  key={def.defId}
                  style={styles.defRow}
                  onPress={() => onPickRoom(def.defId)}>
                  <Text style={styles.defName}>{def.name}</Text>
                  <Text style={styles.defDoors}>
                    {def.doors.join(' · ') || '—'}
                  </Text>
                </Pressable>
              ))}
            </ScrollView>
            <Button
              label={t('board.cancel')}
              variant="secondary"
              onPress={() => setPlacingAt(null)}
            />
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
}

// ---------------------------------------------------------------------------

interface CellProps {
  x: number;
  y: number;
  room?: PlacedRoom;
  rooms: PlacedRoom[];
  placeable: boolean;
  moveTarget: boolean;
  selected: boolean;
  onPress: () => void;
}

function Cell({
  x,
  y,
  room,
  rooms,
  placeable,
  moveTarget,
  selected,
  onPress,
}: CellProps) {
  const left = x * CELL;
  const top = y * CELL;

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.cell,
        { left, top },
        placeable && styles.cellPlaceable,
        moveTarget && !room && styles.cellMoveTarget,
      ]}>
      {room ? <RoomTile room={room} rooms={rooms} selected={selected} /> : null}
    </Pressable>
  );
}

function RoomTile({
  room,
  rooms,
  selected,
}: {
  room: PlacedRoom;
  rooms: PlacedRoom[];
  selected: boolean;
}) {
  const defDoors = doorsOfDef(room.defId);
  const doors = effectiveDoors(defDoors, room.rotation);
  const connected = connectedDirections(
    room,
    defDoors,
    rooms,
    r => doorsOfDef(r.defId),
  );

  return (
    <View style={[styles.tile, selected && styles.tileSelected]}>
      <Text style={styles.tileName} numberOfLines={3}>
        {room.name}
      </Text>
      {doors.map(dir => (
        <Door key={dir} dir={dir} connected={connected.includes(dir)} />
      ))}
    </View>
  );
}

function Door({ dir, connected }: { dir: Direction; connected: boolean }) {
  const color = connected ? colors.success : colors.warning;
  const base: object[] = [styles.door, { backgroundColor: color }];
  switch (dir) {
    case 'N':
      base.push(styles.doorN);
      break;
    case 'S':
      base.push(styles.doorS);
      break;
    case 'E':
      base.push(styles.doorE);
      break;
    case 'W':
      base.push(styles.doorW);
      break;
  }
  return <View style={base} />;
}

const DOOR_LEN = 22;
const DOOR_THICK = 5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  floorBar: {
    flexDirection: 'row',
    gap: spacing.xs,
    padding: spacing.sm,
  },
  floorBtn: {
    flex: 1,
    paddingVertical: spacing.sm,
    borderRadius: radius.sm,
    backgroundColor: colors.surfaceAlt,
    alignItems: 'center',
  },
  floorBtnActive: {
    backgroundColor: colors.primary,
  },
  floorText: {
    color: colors.textMuted,
    fontSize: typography.body,
    fontWeight: '600',
  },
  floorTextActive: {
    color: colors.text,
  },
  viewport: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: '#0D0B0A',
  },
  board: {
    width: BOARD_PX,
    height: BOARD_PX,
    alignSelf: 'center',
    marginTop: spacing.md,
  },
  cell: {
    position: 'absolute',
    width: CELL,
    height: CELL,
    padding: 3,
  },
  cellPlaceable: {
    borderWidth: 1.5,
    borderColor: colors.primary,
    borderStyle: 'dashed',
    borderRadius: radius.sm,
    backgroundColor: 'rgba(181,64,42,0.12)',
  },
  cellMoveTarget: {
    borderWidth: 1.5,
    borderColor: colors.hero,
    borderStyle: 'dashed',
    borderRadius: radius.sm,
    backgroundColor: 'rgba(60,141,188,0.12)',
  },
  tile: {
    flex: 1,
    borderRadius: radius.sm,
    backgroundColor: colors.surface,
    borderWidth: 2,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
  },
  tileSelected: {
    borderColor: colors.primary,
    backgroundColor: colors.surfaceAlt,
  },
  tileName: {
    color: colors.text,
    fontSize: 11,
    fontWeight: '700',
    textAlign: 'center',
  },
  door: {
    position: 'absolute',
    borderRadius: 2,
  },
  doorN: {
    top: -2,
    left: CELL / 2 - DOOR_LEN / 2 - 3,
    width: DOOR_LEN,
    height: DOOR_THICK,
  },
  doorS: {
    bottom: -2,
    left: CELL / 2 - DOOR_LEN / 2 - 3,
    width: DOOR_LEN,
    height: DOOR_THICK,
  },
  doorE: {
    right: -2,
    top: CELL / 2 - DOOR_LEN / 2 - 3,
    width: DOOR_THICK,
    height: DOOR_LEN,
  },
  doorW: {
    left: -2,
    top: CELL / 2 - DOOR_LEN / 2 - 3,
    width: DOOR_THICK,
    height: DOOR_LEN,
  },
  controls: {
    padding: spacing.sm,
    gap: spacing.sm,
    backgroundColor: colors.surface,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.border,
  },
  selectedLabel: {
    color: colors.text,
    fontSize: typography.body,
    fontWeight: '700',
  },
  actionRow: {
    flexDirection: 'row',
    gap: spacing.sm,
    alignItems: 'center',
  },
  flex: {
    flex: 1,
  },
  moveHint: {
    flex: 1,
    color: colors.hero,
    fontSize: typography.caption,
  },
  hint: {
    color: colors.textMuted,
    fontSize: typography.caption,
    textAlign: 'center',
  },
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'flex-end',
  },
  sheet: {
    backgroundColor: colors.surface,
    borderTopLeftRadius: radius.lg,
    borderTopRightRadius: radius.lg,
    padding: spacing.md,
    gap: spacing.sm,
    maxHeight: '70%',
  },
  sheetTitle: {
    color: colors.text,
    fontSize: typography.heading,
    fontWeight: '700',
  },
  sheetList: {
    maxHeight: 320,
  },
  defRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: radius.sm,
    backgroundColor: colors.surfaceAlt,
    marginBottom: spacing.xs,
  },
  defName: {
    color: colors.text,
    fontSize: typography.body,
    fontWeight: '600',
  },
  defDoors: {
    color: colors.textMuted,
    fontSize: typography.caption,
  },
});
