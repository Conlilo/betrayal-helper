import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Screen, Button, Card, colors, radius, spacing, typography } from '@/modules/ui';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { setPhase, setCharacterSide } from '@/modules/game-engine';
import {
  HAUNT_DEFS,
  findHaunt,
  startHaunt,
  toggleObjective,
} from '@/modules/haunt-engine';
import type { ID } from '@/types/shared';
import type { RootScreenProps } from '@/navigation/types';

export function HauntSetupScreen({ navigation }: RootScreenProps<'HauntSetup'>) {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const characters = useAppSelector(s => s.game.characters);
  const haunt = useAppSelector(s => s.haunt);
  const [hauntId, setHauntId] = useState<number | null>(haunt.hauntId);
  const [traitorId, setTraitorId] = useState<ID | null>(haunt.traitorId);

  const selectedDef = hauntId ? findHaunt(hauntId) : undefined;

  const begin = () => {
    if (!hauntId) return;
    dispatch(startHaunt({ hauntId, traitorId }));
    dispatch(setPhase('haunt'));
    // Assign sides: chosen traitor becomes the traitor, everyone else a hero.
    characters.forEach(c => {
      const side = c.id === traitorId ? 'traitor' : 'hero';
      dispatch(setCharacterSide({ characterId: c.id, side }));
    });
    navigation.navigate('Home');
  };

  return (
    <Screen>
      <Card title={t('hauntSetup.chooseHaunt')}>
        {HAUNT_DEFS.map(h => {
          const active = h.hauntId === hauntId;
          return (
            <Pressable
              key={h.hauntId}
              onPress={() => setHauntId(h.hauntId)}
              style={[styles.option, active && styles.optionActive]}>
              <Text style={styles.optionTitle}>
                #{h.hauntId} · {h.name}
              </Text>
              <Text style={styles.optionDesc}>{h.premise}</Text>
            </Pressable>
          );
        })}
      </Card>

      <Card title={t('hauntSetup.chooseTraitor')}>
        <View style={styles.row}>
          {characters.map(c => {
            const active = c.id === traitorId;
            return (
              <Pressable
                key={c.id}
                onPress={() => setTraitorId(c.id)}
                style={[styles.chip, active && { backgroundColor: colors.traitor }]}>
                <Text style={styles.chipText}>{c.name}</Text>
              </Pressable>
            );
          })}
        </View>
      </Card>

      {selectedDef ? (
        <Card title={t('hauntSetup.winConditions')}>
          <Text style={styles.goalLabel}>{t('hauntSetup.heroes')}</Text>
          <Text style={styles.goalText}>{selectedDef.heroGoal}</Text>
          <Text style={styles.goalLabel}>{t('hauntSetup.traitor')}</Text>
          <Text style={styles.goalText}>{selectedDef.traitorGoal}</Text>
        </Card>
      ) : null}

      <Button label={t('hauntSetup.begin')} onPress={begin} disabled={!hauntId} />

      {haunt.started ? (
        <Card title={t('hauntSetup.progress')}>
          <Text style={styles.goalLabel}>{t('hauntSetup.heroes')}</Text>
          {haunt.heroObjectives.map(o => (
            <ObjectiveRow
              key={o.id}
              text={o.text}
              done={o.done}
              onToggle={() =>
                dispatch(toggleObjective({ side: 'hero', objectiveId: o.id }))
              }
            />
          ))}
          <Text style={styles.goalLabel}>{t('hauntSetup.traitor')}</Text>
          {haunt.traitorObjectives.map(o => (
            <ObjectiveRow
              key={o.id}
              text={o.text}
              done={o.done}
              onToggle={() =>
                dispatch(toggleObjective({ side: 'traitor', objectiveId: o.id }))
              }
            />
          ))}
        </Card>
      ) : null}
    </Screen>
  );
}

function ObjectiveRow({
  text,
  done,
  onToggle,
}: {
  text: string;
  done: boolean;
  onToggle: () => void;
}) {
  return (
    <Pressable onPress={onToggle} style={styles.objRow}>
      <Text style={styles.check}>{done ? '☑' : '☐'}</Text>
      <Text style={[styles.objText, done && styles.objDone]}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  option: {
    backgroundColor: colors.surfaceAlt,
    borderRadius: radius.sm,
    padding: spacing.sm,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
    gap: spacing.xs,
  },
  optionActive: {
    borderColor: colors.primary,
    borderWidth: 1.5,
  },
  optionTitle: {
    color: colors.text,
    fontSize: typography.body,
    fontWeight: '700',
  },
  optionDesc: {
    color: colors.textMuted,
    fontSize: typography.caption,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  chip: {
    backgroundColor: colors.surfaceAlt,
    borderRadius: radius.sm,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
  },
  chipText: {
    color: colors.text,
    fontSize: typography.body,
  },
  goalLabel: {
    color: colors.warning,
    fontSize: typography.caption,
    fontWeight: '700',
    marginTop: spacing.xs,
  },
  goalText: {
    color: colors.text,
    fontSize: typography.body,
  },
  objRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  check: {
    color: colors.text,
    fontSize: typography.heading,
  },
  objText: {
    color: colors.text,
    fontSize: typography.body,
    flex: 1,
  },
  objDone: {
    color: colors.textMuted,
    textDecorationLine: 'line-through',
  },
});
