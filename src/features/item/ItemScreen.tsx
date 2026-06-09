import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Screen, Button, Card, colors, spacing, typography } from '@/modules/ui';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import {
  CARD_DEFS_BY_TYPE,
  drawCard,
  discardCard,
  transferItem,
} from '@/modules/card-engine';
import type { RootScreenProps } from '@/navigation/types';

export function ItemScreen(_props: RootScreenProps<'Items'>) {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const items = useAppSelector(s => s.cards.drawn.filter(c => c.type === 'item'));
  const characters = useAppSelector(s => s.game.characters);

  const drawItem = () => {
    const defs = CARD_DEFS_BY_TYPE.item;
    const def = defs[Math.floor(Math.random() * defs.length)];
    dispatch(drawCard(def, characters[0]?.id ?? null));
  };

  const ownerName = (ownerId: string | null) =>
    characters.find(c => c.id === ownerId)?.name ?? t('items.unassigned');

  return (
    <Screen>
      <Button label={t('items.draw')} onPress={drawItem} />

      {items.length === 0 ? (
        <Text style={styles.empty}>{t('items.none')}</Text>
      ) : null}

      {items.map(card => (
        <Card key={card.id} title={card.name}>
          <Text style={styles.desc}>{card.description}</Text>
          {card.effect ? (
            <Text style={styles.effect}>
              {t('common.effect')}: {card.effect}
            </Text>
          ) : null}
          <Text style={styles.owner}>
            {t('items.heldBy', { name: ownerName(card.ownerId) })}
          </Text>

          <Text style={styles.label}>{t('items.giveTo')}</Text>
          <View style={styles.ownerRow}>
            {characters.map(c => (
              <Button
                key={c.id}
                label={c.name}
                variant={card.ownerId === c.id ? 'primary' : 'secondary'}
                style={styles.ownerBtn}
                onPress={() =>
                  dispatch(transferItem({ cardId: card.id, toOwnerId: c.id }))
                }
              />
            ))}
          </View>

          <Button
            label={t('items.discardItem')}
            variant="danger"
            onPress={() => dispatch(discardCard(card.id))}
          />
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
    color: colors.textMuted,
    fontSize: typography.body,
    fontStyle: 'italic',
  },
  effect: {
    color: colors.text,
    fontSize: typography.body,
    fontWeight: '600',
  },
  owner: {
    color: colors.warning,
    fontSize: typography.caption,
    fontWeight: '600',
  },
  label: {
    color: colors.textMuted,
    fontSize: typography.caption,
    marginTop: spacing.xs,
  },
  ownerRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  ownerBtn: {
    flexGrow: 1,
  },
});
