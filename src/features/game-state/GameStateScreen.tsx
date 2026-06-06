import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Screen, Button, Card, colors, spacing, typography } from '@/modules/ui';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { resetGame } from '@/modules/game-engine';
import { resetCards } from '@/modules/card-engine';
import { resetHaunt } from '@/modules/haunt-engine';
import { resetRooms } from '@/modules/room-engine';
import type { RootScreenProps } from '@/navigation/types';

export function GameStateScreen({ navigation }: RootScreenProps<'GameState'>) {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const game = useAppSelector(s => s.game);

  const clearGame = () => {
    dispatch(resetCards());
    dispatch(resetHaunt());
    dispatch(resetRooms());
    dispatch(resetGame());
    navigation.navigate('Home');
  };

  return (
    <Screen>
      <Card title={t('gameState.saveState')}>
        <Text style={styles.text}>{t('gameState.saveText')}</Text>
        <Text style={styles.meta}>
          {game.id
            ? t('gameState.game', { name: game.name })
            : t('gameState.noActiveGame')}
        </Text>
        {game.updatedAt ? (
          <Text style={styles.meta}>
            {t('gameState.lastUpdated', {
              date: new Date(game.updatedAt).toLocaleString(),
            })}
          </Text>
        ) : null}
      </Card>

      <Card title={t('gameState.actionHistory')}>
        {game.log.length === 0 ? (
          <Text style={styles.meta}>{t('gameState.noActions')}</Text>
        ) : (
          game.log.map(entry => (
            <View key={entry.id} style={styles.logRow}>
              <Text style={styles.logTime}>
                {new Date(entry.at).toLocaleTimeString()}
              </Text>
              <Text style={styles.logText}>{entry.message}</Text>
            </View>
          ))
        )}
      </Card>

      <Button label={t('gameState.clearGame')} variant="danger" onPress={clearGame} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.text,
    fontSize: typography.body,
  },
  meta: {
    color: colors.textMuted,
    fontSize: typography.caption,
  },
  logRow: {
    flexDirection: 'row',
    gap: spacing.sm,
    paddingVertical: 2,
  },
  logTime: {
    color: colors.textMuted,
    fontSize: typography.caption,
    width: 84,
  },
  logText: {
    color: colors.text,
    fontSize: typography.caption,
    flex: 1,
  },
});
