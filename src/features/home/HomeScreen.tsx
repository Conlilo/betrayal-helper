import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import {
  Screen,
  Button,
  Card,
  LanguageSwitcher,
  colors,
  spacing,
  typography,
} from '@/modules/ui';
import { useAppSelector } from '@/app/hooks';
import type { RootScreenProps } from '@/navigation/types';

export function HomeScreen({ navigation }: RootScreenProps<'Home'>) {
  const { t } = useTranslation();
  const game = useAppSelector(s => s.game);
  const haunt = useAppSelector(s => s.haunt);
  const hasGame = game.id !== null;

  return (
    <Screen>
      <Card>
        <Text style={styles.title}>HauntKeeper</Text>
        <Text style={styles.subtitle}>{t('home.subtitle')}</Text>
        {hasGame ? (
          <View style={styles.statusRow}>
            <Text style={styles.status}>
              {t('home.status', {
                name: game.name,
                count: game.playerCount,
                phase: game.phase,
              })}
            </Text>
            {haunt.started ? (
              <Text style={styles.haunt}>
                {t('home.haunt', { name: haunt.hauntName })}
              </Text>
            ) : null}
          </View>
        ) : (
          <Text style={styles.status}>{t('home.noGame')}</Text>
        )}
      </Card>

      <Card>
        <LanguageSwitcher />
      </Card>

      <Button
        label={t('home.play')}
        onPress={() => navigation.navigate('GameSetup')}
      />

      <Button
        label={t('home.loadGame')}
        variant="secondary"
        disabled={!hasGame}
        onPress={() => navigation.navigate('Board')}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: {
    color: colors.text,
    fontSize: typography.title,
    fontWeight: '800',
  },
  subtitle: {
    color: colors.textMuted,
    fontSize: typography.body,
  },
  statusRow: {
    marginTop: spacing.sm,
    gap: spacing.xs,
  },
  status: {
    color: colors.text,
    fontSize: typography.caption,
  },
  haunt: {
    color: colors.warning,
    fontSize: typography.caption,
    fontWeight: '700',
  },
});
