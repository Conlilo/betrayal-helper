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
import type { RootScreenProps, RootStackParamList } from '@/navigation/types';

type NavTarget = keyof RootStackParamList;

const MENU: { key: string; target: NavTarget }[] = [
  { key: 'home.menu.characters', target: 'Characters' },
  { key: 'home.menu.board', target: 'Board' },
  { key: 'home.menu.events', target: 'Events' },
  { key: 'home.menu.omens', target: 'Omens' },
  { key: 'home.menu.items', target: 'Items' },
  { key: 'home.menu.combat', target: 'Combat' },
  { key: 'home.menu.hauntSetup', target: 'HauntSetup' },
  { key: 'home.menu.saveHistory', target: 'GameState' },
];

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
        label={hasGame ? t('home.newGameRestart') : t('home.startNew')}
        onPress={() => navigation.navigate('GameSetup')}
      />

      {hasGame
        ? MENU.map(item => (
            <Button
              key={item.target}
              label={t(item.key)}
              variant="secondary"
              onPress={() => navigation.navigate(item.target)}
            />
          ))
        : null}
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
