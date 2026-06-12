import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import {
  Screen,
  Button,
  Card,
  colors,
  spacing,
  typography,
} from '@/modules/ui';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import {
  CHARACTER_TEMPLATES,
  addCharacter,
  removeCharacter,
  setCharacterRoom,
  type CharacterOption,
} from '@/modules/game-engine';
import type { RootScreenProps } from '@/navigation/types';

export function CharacterListScreen({
  navigation,
}: RootScreenProps<'Characters'>) {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const characters = useAppSelector(s => s.game.characters);
  const rooms = useAppSelector(s => s.rooms.rooms);

  // The chosen explorer for a given figure colour (one per colour).
  const chosenForColor = (color: string) =>
    characters.find(c => c.color === color);

  const toggle = (option: CharacterOption, color: string) => {
    const existing = chosenForColor(color);
    if (existing && existing.name === option.name) {
      dispatch(removeCharacter(existing.id)); // deselect
      return;
    }
    if (existing) dispatch(removeCharacter(existing.id)); // switch side
    dispatch(addCharacter({ option, color }));
  };

  // On entering the board, every explorer token starts in the Entrance Hall.
  const startGame = () => {
    const hall = rooms.find(r => r.defId === 'entrance-hall');
    if (hall) {
      characters.forEach(c =>
        dispatch(
          setCharacterRoom({
            characterId: c.id,
            roomId: hall.id,
            roomName: hall.name,
          }),
        ),
      );
    }
    navigation.navigate('Board');
  };

  return (
    <Screen>
      <Card title={t('characters.addCharacter')}>
        {CHARACTER_TEMPLATES.map(group => (
          <View key={group.color} style={styles.groupRow}>
            <View style={[styles.groupDot, { backgroundColor: group.color }]} />
            {group.characters.map(option => {
              const selected = chosenForColor(group.color)?.name === option.name;
              return (
                <Button
                  key={option.id}
                  label={selected ? `✓ ${option.name}` : option.name}
                  variant={selected ? 'primary' : 'secondary'}
                  style={styles.templateBtn}
                  onPress={() => toggle(option, group.color)}
                />
              );
            })}
          </View>
        ))}
      </Card>

      {characters.length === 0 ? (
        <Text style={styles.empty}>{t('characters.none')}</Text>
      ) : (
        <Button label={t('characters.toBoard')} onPress={startGame} />
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  groupRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    marginBottom: spacing.sm,
  },
  groupDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
  },
  templateBtn: {
    flexGrow: 1,
    flexShrink: 1,
  },
  empty: {
    color: colors.textMuted,
    fontSize: typography.body,
    textAlign: 'center',
    marginTop: spacing.md,
  },
});
