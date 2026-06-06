import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Screen, Button, Card, colors, spacing, typography } from '@/modules/ui';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { CARD_DEFS_BY_TYPE, drawCard, discardCard } from '@/modules/card-engine';
import type { RootScreenProps } from '@/navigation/types';

export function EventScreen(_props: RootScreenProps<'Events'>) {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const events = useAppSelector(s =>
    s.cards.drawn.filter(c => c.type === 'event'),
  );

  const drawRandom = () => {
    const defs = CARD_DEFS_BY_TYPE.event;
    const def = defs[Math.floor(Math.random() * defs.length)];
    dispatch(drawCard(def));
  };

  return (
    <Screen>
      <Button label={t('events.draw')} onPress={drawRandom} />

      {events.length === 0 ? (
        <Text style={styles.empty}>{t('events.none')}</Text>
      ) : null}

      {events.map(card => (
        <Card key={card.id} title={card.name}>
          <Text style={styles.desc}>{card.description}</Text>
          <View style={styles.footer}>
            <Button
              label={t('events.resolveDiscard')}
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
  empty: {
    color: colors.textMuted,
    fontSize: typography.body,
    textAlign: 'center',
    marginTop: spacing.md,
  },
  desc: {
    color: colors.text,
    fontSize: typography.body,
  },
  footer: {
    marginTop: spacing.sm,
  },
});
