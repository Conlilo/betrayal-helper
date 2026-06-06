import React, { useState } from 'react';
import { StyleSheet, Text, TextInput } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Screen, Button, Card, colors, radius, spacing, typography } from '@/modules/ui';
import { useAppDispatch } from '@/app/hooks';
import { createGame, resetGame } from '@/modules/game-engine';
import { resetCards } from '@/modules/card-engine';
import { resetHaunt } from '@/modules/haunt-engine';
import { resetRooms, seedBoard } from '@/modules/room-engine';
import type { RootScreenProps } from '@/navigation/types';

export function GameSetupScreen({ navigation }: RootScreenProps<'GameSetup'>) {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [name, setName] = useState('');

  const handleCreate = () => {
    // Wipe any previous match so a new game starts clean.
    dispatch(resetCards());
    dispatch(resetHaunt());
    dispatch(resetRooms());
    dispatch(resetGame());
    dispatch(createGame(name.trim() || t('gameSetup.defaultName')));
    // Seed the ground floor with the starting Foyer tile.
    dispatch(seedBoard());
    navigation.navigate('Characters');
  };

  return (
    <Screen>
      <Card title={t('gameSetup.createMatch')}>
        <Text style={styles.label}>{t('gameSetup.gameName')}</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder={t('gameSetup.placeholder')}
          placeholderTextColor={colors.textMuted}
          style={styles.input}
        />
        <Text style={styles.hint}>{t('gameSetup.hint')}</Text>
      </Card>

      <Button label={t('gameSetup.createGame')} onPress={handleCreate} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  label: {
    color: colors.textMuted,
    fontSize: typography.caption,
    fontWeight: '600',
  },
  input: {
    backgroundColor: colors.surfaceAlt,
    borderRadius: radius.sm,
    color: colors.text,
    fontSize: typography.body,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  hint: {
    color: colors.textMuted,
    fontSize: typography.caption,
  },
});
