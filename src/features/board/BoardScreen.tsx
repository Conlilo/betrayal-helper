import React, { useEffect, useMemo, useState } from 'react';
import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
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
import { nextTurn, setCharacterRoom, type Character } from '@/modules/game-engine';
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
  addRoomToken,
  removeRoomToken,
  resetRooms,
  rotateRoom,
  roomAt,
  roomDefsForFloor,
  setFloor,
  symbolsOfDef,
  effectOfDef,
  cardSymbolsOf,
  type Direction,
  type Floor,
  type PlacedRoom,
} from '@/modules/room-engine';
import type { CardType } from '@/modules/card-engine';
import { ResolutionSheet } from '@/features/play/ResolutionSheet';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { ID } from '@/types/shared';
import type { RootScreenProps } from '@/navigation/types';

const CELL = 78;
const BOARD_PX = BOARD_SIZE * CELL;
const MIN_SCALE = 0.45;
const MAX_SCALE = 2.5;

const SYMBOL_ICON: Record<string, string> = {
  event: '🎴',
  omen: '🔮',
  item: '🗡️',
  dumbwaiter: '🛗',
  none: '·',
};

export function BoardScreen(_props: RootScreenProps<'Board'>) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'vi' ? 'vi' : 'en';
  const insets = useSafeAreaInsets();
  const dispatch = useAppDispatch();
  const rooms = useAppSelector(s => s.rooms.rooms);
  const floor = useAppSelector(s => s.rooms.currentFloor);
  const characters = useAppSelector(s => s.game.characters);
  const turnCharId = useAppSelector(s => s.game.activeCharacterId);
  const round = useAppSelector(s => s.game.round ?? 1);
  const omenCount = useAppSelector(s => s.game.omenCount ?? 0);
  const turnChar = characters.find(c => c.id === turnCharId) ?? null;

  const [selectedId, setSelectedId] = useState<ID | null>(null);
  const [moveMode, setMoveMode] = useState(false);
  const [placingAt, setPlacingAt] = useState<{ x: number; y: number } | null>(
    null,
  );
  // Character selected from the tray, waiting to be placed onto a room.
  const [activeCharId, setActiveCharId] = useState<ID | null>(null);
  const [tokenInput, setTokenInput] = useState('');
  // When an explorer places a NEW room, this remembers them so we can move
  // their token in and trigger the card resolution once the room exists.
  const [pendingExplore, setPendingExplore] = useState<ID | null>(null);
  const [justPlaced, setJustPlaced] = useState<
    { charId: ID; x: number; y: number; defId: string } | null
  >(null);
  // A room may carry several card symbols; resolve them one at a time, with
  // the remaining symbols held in a queue.
  const [resolve, setResolve] = useState<
    { explorerId: ID; queue: CardType[] } | null
  >(null);

  const selected = rooms.find(r => r.id === selectedId) ?? null;
  const activeChar = characters.find(c => c.id === activeCharId) ?? null;
  const roomsOnFloor = useMemo(
    () => rooms.filter(r => r.floor === floor),
    [rooms, floor],
  );

  // roomId -> characters standing on it.
  const tokensByRoom = useMemo(() => {
    const map: Record<string, Character[]> = {};
    characters.forEach(c => {
      if (c.roomId) (map[c.roomId] ??= []).push(c);
    });
    return map;
  }, [characters]);

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
  const canPlace = (x: number, y: number) =>
    isPlaceable(rooms, floor, x, y) ||
    (roomsOnFloor.length === 0 && x === BOARD_CENTER && y === BOARD_CENTER);

  const onCellPress = (x: number, y: number) => {
    const room = roomAt(rooms, floor, x, y);

    // An explorer is selected from the tray.
    if (activeChar) {
      if (room) {
        // Move the token into an existing room (no new exploration).
        dispatch(
          setCharacterRoom({
            characterId: activeChar.id,
            roomId: room.id,
            roomName: room.name,
          }),
        );
        setActiveCharId(null);
        return;
      }
      if (canPlace(x, y)) {
        // Explore: place a new room here, then move the token + resolve.
        setPendingExplore(activeChar.id);
        setPlacingAt({ x, y });
        return;
      }
      setActiveCharId(null);
      return;
    }

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
    if (canPlace(x, y)) {
      setPlacingAt({ x, y });
      return;
    }
    setSelectedId(null);
  };

  const onPickRoom = (defId: string) => {
    if (!placingAt) return;
    const { x, y } = placingAt;
    dispatch(placeRoom({ defId, floor, x, y }));
    if (pendingExplore) {
      setJustPlaced({ charId: pendingExplore, x, y, defId });
      setPendingExplore(null);
    }
    setPlacingAt(null);
  };

  const cancelPicker = () => {
    setPlacingAt(null);
    setPendingExplore(null);
  };

  // Once a freshly explored room exists in the store, move the explorer's
  // token into it and open the resolution sheet if it has a card symbol.
  useEffect(() => {
    if (!justPlaced) return;
    const room = roomAt(rooms, floor, justPlaced.x, justPlaced.y);
    if (!room) return;
    dispatch(
      setCharacterRoom({
        characterId: justPlaced.charId,
        roomId: room.id,
        roomName: room.name,
      }),
    );
    const cardSymbols = cardSymbolsOf(symbolsOfDef(justPlaced.defId));
    if (cardSymbols.length > 0) {
      setResolve({ explorerId: justPlaced.charId, queue: cardSymbols });
    }
    setActiveCharId(null);
    setJustPlaced(null);
  }, [rooms, justPlaced, floor, dispatch]);

  const floorDefs = roomDefsForFloor(floor);
  const randomDef = () =>
    floorDefs[Math.floor(Math.random() * floorDefs.length)];

  const selectChar = (id: ID) => {
    setActiveCharId(prev => (prev === id ? null : id));
    setSelectedId(null);
    setMoveMode(false);
  };

  // ----- render grid cells -----
  const cells = [];
  for (let y = 0; y < BOARD_SIZE; y += 1) {
    for (let x = 0; x < BOARD_SIZE; x += 1) {
      const room = roomAt(rooms, floor, x, y);
      const placeable = !room && canPlace(x, y);
      const moveTarget = moveMode && !room;
      cells.push(
        <Cell
          key={`${x}-${y}`}
          x={x}
          y={y}
          room={room}
          rooms={rooms}
          tokens={room ? tokensByRoom[room.id] ?? [] : []}
          placeable={placeable}
          moveTarget={moveTarget}
          highlight={Boolean(activeChar && room)}
          selected={room ? room.id === selectedId : false}
          onPress={() => onCellPress(x, y)}
        />,
      );
    }
  }

  return (
    <View style={styles.container}>
      {/* Omen tracker */}
      <View style={styles.omenBar}>
        <Text style={styles.omenText}>
          {t('board.omenTracker', { count: omenCount })}
        </Text>
      </View>

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

      {/* Character tray + turn tracker */}
      <View style={styles.tray}>
        {characters.length === 0 ? (
          <>
            <Text style={styles.trayTitle}>{t('board.tokensTitle')}</Text>
            <Text style={styles.hint}>{t('board.noCharacters')}</Text>
          </>
        ) : (
          <>
            <View style={styles.turnRow}>
              <Text style={styles.turnLabel} numberOfLines={1}>
                {turnChar
                  ? t('board.turn', { name: turnChar.name, round })
                  : t('board.tokensTitle')}
              </Text>
              <Pressable
                onPress={() => dispatch(nextTurn())}
                style={styles.endTurnBtn}>
                <Text style={styles.endTurnText}>{t('board.endTurn')}</Text>
              </Pressable>
            </View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.trayRow}>
              {characters.map(c => {
                const room = rooms.find(r => r.id === c.roomId);
                const active = c.id === activeCharId;
                const isTurn = c.id === turnCharId;
                return (
                  <Pressable
                    key={c.id}
                    onPress={() => selectChar(c.id)}
                    style={[
                      styles.chip,
                      active && styles.chipActive,
                      (active || isTurn) && { borderColor: c.color },
                    ]}>
                    <View style={[styles.chipDot, { backgroundColor: c.color }]}>
                      <Text style={styles.chipInitial}>{initial(c.name)}</Text>
                    </View>
                    <View>
                      <Text style={styles.chipName}>
                        {isTurn ? '▶ ' : ''}
                        {c.name}
                      </Text>
                      <Text style={styles.chipRoom}>
                        {room ? room.name : t('board.offBoard')}
                      </Text>
                    </View>
                  </Pressable>
                );
              })}
            </ScrollView>
          </>
        )}
      </View>

      {/* Bottom controls */}
      <View style={[styles.controls, { paddingBottom: insets.bottom + spacing.sm }]}>
        {activeChar ? (
          <View style={styles.actionRow}>
            <Text style={styles.placeHint}>
              {t('board.exploreHint', { name: activeChar.name })}
            </Text>
            {activeChar.roomId ? (
              <Button
                label={t('board.offBoard')}
                variant="secondary"
                onPress={() => {
                  dispatch(
                    setCharacterRoom({
                      characterId: activeChar.id,
                      roomId: null,
                      roomName: '',
                    }),
                  );
                  setActiveCharId(null);
                }}
              />
            ) : null}
            <Button
              label={t('board.cancel')}
              variant="secondary"
              onPress={() => setActiveCharId(null)}
            />
          </View>
        ) : selected ? (
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
              {effectOfDef(selected.defId, lang) ? (
                <Text style={styles.effectText}>{effectOfDef(selected.defId, lang)}</Text>
              ) : null}

              <Text style={styles.tokenLabel}>{t('board.tokens')}</Text>
              {selected.tokens && selected.tokens.length > 0 ? (
                <View style={styles.tokenWrap}>
                  {selected.tokens.map(tk => (
                    <Pressable
                      key={tk.id}
                      onPress={() =>
                        dispatch(
                          removeRoomToken({ roomId: selected.id, tokenId: tk.id }),
                        )
                      }
                      style={[
                        styles.roomToken,
                        tk.color ? { borderColor: tk.color } : null,
                      ]}>
                      <Text style={styles.roomTokenText}>{tk.label} ✕</Text>
                    </Pressable>
                  ))}
                </View>
              ) : (
                <Text style={styles.tokenEmpty}>{t('board.noTokens')}</Text>
              )}
              <View style={styles.tokenAddRow}>
                <TextInput
                  value={tokenInput}
                  onChangeText={setTokenInput}
                  placeholder={t('board.tokenPlaceholder')}
                  placeholderTextColor={colors.textMuted}
                  style={styles.tokenInput}
                />
                <Button
                  label={t('board.addToken')}
                  onPress={() => {
                    const label = tokenInput.trim();
                    if (!label) return;
                    dispatch(addRoomToken(selected.id, label));
                    setTokenInput('');
                  }}
                />
              </View>

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
            setActiveCharId(null);
          }}
        />
      </View>

      {/* Room picker */}
      <Modal
        visible={placingAt !== null}
        transparent
        animationType="slide"
        onRequestClose={cancelPicker}>
        <Pressable style={styles.backdrop} onPress={cancelPicker}>
          <Pressable style={styles.sheet}>
            <Text style={styles.sheetTitle}>
              {pendingExplore ? t('board.exploreRoom') : t('board.pickRoom')}
            </Text>
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
                    {(def.symbols.map(s => SYMBOL_ICON[s]).join(' ') || '·')} ·{' '}
                    {def.doors.join(' · ') || '—'}
                  </Text>
                </Pressable>
              ))}
            </ScrollView>
            <Button
              label={t('board.cancel')}
              variant="secondary"
              onPress={cancelPicker}
            />
          </Pressable>
        </Pressable>
      </Modal>

      {/* Card resolution for a freshly explored symbol room. Resolve each of
          the room's card symbols in turn, advancing the queue on close. */}
      <ResolutionSheet
        visible={resolve !== null}
        explorerId={resolve?.explorerId ?? null}
        symbol={resolve?.queue[0] ?? null}
        onClose={() =>
          setResolve(prev => {
            const rest = prev?.queue.slice(1) ?? [];
            return rest.length > 0 && prev
              ? { explorerId: prev.explorerId, queue: rest }
              : null;
          })
        }
      />
    </View>
  );
}

// ---------------------------------------------------------------------------

function initial(name: string): string {
  return name.trim().charAt(0).toUpperCase() || '?';
}

interface CellProps {
  x: number;
  y: number;
  room?: PlacedRoom;
  rooms: PlacedRoom[];
  tokens: Character[];
  placeable: boolean;
  moveTarget: boolean;
  highlight: boolean;
  selected: boolean;
  onPress: () => void;
}

function Cell({
  x,
  y,
  room,
  rooms,
  tokens,
  placeable,
  moveTarget,
  highlight,
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
      {room ? (
        <RoomTile
          room={room}
          rooms={rooms}
          tokens={tokens}
          selected={selected}
          highlight={highlight}
        />
      ) : null}
    </Pressable>
  );
}

function RoomTile({
  room,
  rooms,
  tokens,
  selected,
  highlight,
}: {
  room: PlacedRoom;
  rooms: PlacedRoom[];
  tokens: Character[];
  selected: boolean;
  highlight: boolean;
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
    <View
      style={[
        styles.tile,
        selected && styles.tileSelected,
        highlight && styles.tileHighlight,
      ]}>
      <Text style={styles.tileName} numberOfLines={2}>
        {room.name}
      </Text>
      {doors.map(dir => (
        <Door key={dir} dir={dir} connected={connected.includes(dir)} />
      ))}
      {tokens.length > 0 ? (
        <View style={styles.tokens}>
          {tokens.map(c => (
            <View
              key={c.id}
              style={[styles.token, { backgroundColor: c.color }]}>
              <Text style={styles.tokenText}>{initial(c.name)}</Text>
            </View>
          ))}
        </View>
      ) : null}
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
  omenBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: spacing.sm,
    paddingHorizontal: spacing.sm,
  },
  omenText: {
    color: colors.warning,
    fontSize: typography.caption,
    fontWeight: '700',
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
  tileHighlight: {
    borderColor: colors.hero,
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
  tokens: {
    position: 'absolute',
    bottom: 2,
    left: 2,
    right: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 2,
  },
  token: {
    width: 18,
    height: 18,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.4)',
  },
  tokenText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '800',
  },
  tray: {
    backgroundColor: colors.surface,
    paddingHorizontal: spacing.sm,
    paddingTop: spacing.sm,
    paddingBottom: spacing.xs,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.border,
    gap: spacing.xs,
  },
  trayTitle: {
    color: colors.textMuted,
    fontSize: typography.caption,
    fontWeight: '700',
  },
  turnRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.sm,
  },
  turnLabel: {
    flex: 1,
    color: colors.text,
    fontSize: typography.body,
    fontWeight: '700',
  },
  endTurnBtn: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.md,
    borderRadius: radius.sm,
  },
  endTurnText: {
    color: colors.text,
    fontSize: typography.caption,
    fontWeight: '700',
  },
  trayRow: {
    gap: spacing.sm,
    paddingVertical: 2,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
    borderRadius: radius.sm,
    backgroundColor: colors.surfaceAlt,
    borderWidth: 1.5,
    borderColor: 'transparent',
  },
  chipActive: {
    backgroundColor: colors.background,
  },
  chipDot: {
    width: 26,
    height: 26,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chipInitial: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '800',
  },
  chipName: {
    color: colors.text,
    fontSize: typography.caption,
    fontWeight: '700',
  },
  chipRoom: {
    color: colors.textMuted,
    fontSize: 11,
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
  effectText: {
    color: colors.textMuted,
    fontSize: typography.caption,
  },
  tokenLabel: {
    color: colors.warning,
    fontSize: typography.caption,
    fontWeight: '700',
    textTransform: 'uppercase',
    marginTop: spacing.xs,
  },
  tokenWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.xs,
  },
  roomToken: {
    backgroundColor: colors.surfaceAlt,
    borderRadius: radius.sm,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },
  roomTokenText: {
    color: colors.text,
    fontSize: typography.caption,
    fontWeight: '600',
  },
  tokenEmpty: {
    color: colors.textMuted,
    fontSize: typography.caption,
  },
  tokenAddRow: {
    flexDirection: 'row',
    gap: spacing.sm,
    alignItems: 'center',
  },
  tokenInput: {
    flex: 1,
    backgroundColor: colors.surfaceAlt,
    borderRadius: radius.sm,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    color: colors.text,
    fontSize: typography.body,
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
  placeHint: {
    flex: 1,
    color: colors.hero,
    fontSize: typography.caption,
    fontWeight: '600',
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
