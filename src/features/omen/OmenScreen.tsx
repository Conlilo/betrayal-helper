import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Screen, Button, Card, colors, spacing, typography } from '@/modules/ui';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { CARD_DEFS_BY_TYPE, drawCard, discardCard } from '@/modules/card-engine';
import { incrementOmenCount } from '@/modules/game-engine';
import { rollHaunt, recordHauntRoll } from '@/modules/haunt-engine';
import type { HauntRollResult } from '@/modules/haunt-engine';
import type { RootScreenProps } from '@/navigation/types';

export function OmenScreen({ navigation }: RootScreenProps<'Omens'>) {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const omenCount = useAppSelector(s => s.game.omenCount);
  const omens = useAppSelector(s => s.cards.drawn.filter(c => c.type === 'omen'));
  const [roll, setRoll] = useState<HauntRollResult | null>(null);

  const drawOmen = () => {
    const defs = CARD_DEFS_BY_TYPE.omen;
    const def = defs[Math.floor(Math.random() * defs.length)];
    dispatch(drawCard(def));
    dispatch(incrementOmenCount());
  };

  const doHauntRoll = () => {
    // Haunt roll uses the omen count AFTER this omen, matching the rulebook.
    const result = rollHaunt(omenCount);
    setRoll(result);
    dispatch(recordHauntRoll(result));
  };

  return (
    <Screen>
      <Card title={t('omens.tracker')}>
        <Text style={styles.count}>{t('omens.drawn', { count: omenCount })}</Text>
        <Button label={t('omens.draw')} onPress={drawOmen} />
      </Card>

      <Card title={t('omens.hauntRoll')}>
        <Text style={styles.hint}>{t('omens.hauntHint')}</Text>
        <Button label={t('omens.roll')} onPress={doHauntRoll} />
        {roll ? (
          <Text style={[styles.result, roll.triggered && styles.triggered]}>
            {t('omens.result', {
              total: roll.total,
              count: roll.omenCount,
              outcome: roll.triggered ? t('omens.begins') : t('omens.safe'),
            })}
          </Text>
        ) : null}
        {roll?.triggered ? (
          <Button
            label={t('omens.goToSetup')}
            onPress={() => navigation.navigate('HauntSetup')}
          />
        ) : null}
      </Card>

      {omens.map(card => (
        <Card key={card.id} title={card.name}>
          <Text style={styles.desc}>{card.description}</Text>
          <View style={styles.footer}>
            <Button
              label={t('common.discard')}
              variant="secondary"
              onPress={() => dispatch(discardCard(card.id))}
            />
          </View>
        </Card>
      ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  count: {
    color: colors.text,
    fontSize: typography.body,
    fontWeight: '600',
  },
  hint: {
    color: colors.textMuted,
    fontSize: typography.caption,
  },
  result: {
    color: colors.text,
    fontSize: typography.body,
    fontWeight: '700',
    marginTop: spacing.sm,
  },
  triggered: {
    color: colors.warning,
  },
  desc: {
    color: colors.text,
    fontSize: typography.body,
  },
  footer: {
    marginTop: spacing.sm,
  },
});
