import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import {
  Screen,
  Button,
  Card,
  StatBadge,
  colors,
  spacing,
  typography,
} from '@/modules/ui';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import {
  CHARACTER_TEMPLATES,
  addCharacter,
  removeCharacter,
  adjustStat,
  currentStat,
} from '@/modules/game-engine';
import { STAT_KEYS, type StatKey } from '@/types/shared';
import type { RootScreenProps } from '@/navigation/types';

export function CharacterListScreen({
  navigation,
}: RootScreenProps<'Characters'>) {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const characters = useAppSelector(s => s.game.characters);
  // Only one explorer per figure colour may be in play.
  const usedColors = new Set(characters.map(c => c.color));

  return (
    <Screen>
      <Card title={t('characters.addCharacter')}>
        {CHARACTER_TEMPLATES.map(group => {
          const colorUsed = usedColors.has(group.color);
          return (
            <View key={group.color} style={styles.groupRow}>
              <View
                style={[styles.groupDot, { backgroundColor: group.color }]}
              />
              {group.characters.map(option => (
                <Button
                  key={option.id}
                  label={option.name}
                  variant="secondary"
                  disabled={colorUsed}
                  style={styles.templateBtn}
                  onPress={() =>
                    dispatch(addCharacter({ option, color: group.color }))
                  }
                />
              ))}
            </View>
          );
        })}
      </Card>

      {characters.length === 0 ? (
        <Text style={styles.empty}>{t('characters.none')}</Text>
      ) : null}

      {characters.map(character => (
        <Card key={character.id}>
          <View style={styles.header}>
            <View style={styles.nameRow}>
              <View style={[styles.dot, { backgroundColor: character.color }]} />
              <Text style={styles.name}>{character.name}</Text>
              {!character.alive ? (
                <Text style={styles.dead}>{t('characters.dead')}</Text>
              ) : null}
            </View>
            <Text style={styles.side}>{t(`side.${character.side}`)}</Text>
          </View>

          <Text style={styles.location}>📍 {character.location}</Text>
          {character.ability ? (
            <Text style={styles.ability}>✦ {character.ability}</Text>
          ) : null}

          <View style={styles.stats}>
            {STAT_KEYS.map((stat: StatKey) => (
              <StatBadge
                key={stat}
                stat={stat}
                value={currentStat(character.stats[stat])}
                onDecrement={() =>
                  dispatch(adjustStat({ characterId: character.id, stat, delta: -1 }))
                }
                onIncrement={() =>
                  dispatch(adjustStat({ characterId: character.id, stat, delta: 1 }))
                }
              />
            ))}
          </View>

          <Button
            label={t('common.remove')}
            variant="danger"
            onPress={() => dispatch(removeCharacter(character.id))}
          />
        </Card>
      ))}

      {characters.length > 0 ? (
        <Button
          label={t('characters.toBoard')}
          onPress={() => navigation.navigate('Board')}
        />
      ) : null}
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  dot: {
    width: 14,
    height: 14,
    borderRadius: 7,
  },
  name: {
    color: colors.text,
    fontSize: typography.heading,
    fontWeight: '700',
  },
  dead: {
    color: colors.danger,
    fontSize: typography.caption,
    fontWeight: '700',
  },
  side: {
    color: colors.textMuted,
    fontSize: typography.caption,
    textTransform: 'uppercase',
  },
  location: {
    color: colors.textMuted,
    fontSize: typography.caption,
  },
  ability: {
    color: colors.warning,
    fontSize: typography.caption,
  },
  stats: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    justifyContent: 'space-between',
  },
});
