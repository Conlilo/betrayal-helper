import React, { useState } from 'react';
import { Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Button, Card, StatBadge, colors, radius, spacing, typography } from '@/modules/ui';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { adjustStat, currentStat, logAction } from '@/modules/game-engine';
import { CARD_DEFS_BY_TYPE, drawCard, type CardDef, type CardType } from '@/modules/card-engine';
import { rollDice } from '@/modules/combat-engine';
import { STAT_KEYS, type ID, type StatKey } from '@/types/shared';

interface ResolutionSheetProps {
  visible: boolean;
  explorerId: ID | null;
  symbol: CardType | null;
  onClose: () => void;
}

/**
 * Bottom-sheet that walks a player through resolving a room's card symbol:
 * pick the card you drew → read its effect → roll / enter dice → adjust the
 * explorer's stats manually → finish.
 */
export function ResolutionSheet({
  visible,
  explorerId,
  symbol,
  onClose,
}: ResolutionSheetProps) {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const explorer = useAppSelector(s =>
    s.game.characters.find(c => c.id === explorerId),
  );

  const [card, setCard] = useState<CardDef | null>(null);
  const [diceCount, setDiceCount] = useState(2);
  const [diceTotal, setDiceTotal] = useState(0);

  const close = () => {
    setCard(null);
    setDiceCount(2);
    setDiceTotal(0);
    onClose();
  };

  const onPickCard = (def: CardDef) => {
    setCard(def);
    dispatch(drawCard(def, def.type === 'item' ? explorerId : null));
    if (explorer) dispatch(logAction(`${explorer.name} drew ${def.name}.`));
  };

  const finish = () => {
    if (explorer && card) {
      dispatch(
        logAction(`${explorer.name}: ${card.name} resolved (dice ${diceTotal}).`),
      );
    }
    close();
  };

  if (!symbol) return null;

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={close}>
      <View style={styles.backdrop}>
        <View style={styles.sheet}>
          <View style={styles.handle} />
          {!card ? (
            <>
              <Text style={styles.title}>
                {t('explore.pickCard', { type: capitalize(symbol) })}
              </Text>
              <ScrollView style={styles.list}>
                {CARD_DEFS_BY_TYPE[symbol].map(def => (
                  <Pressable
                    key={def.defId}
                    style={styles.row}
                    onPress={() => onPickCard(def)}>
                    <Text style={styles.rowName}>{def.name}</Text>
                  </Pressable>
                ))}
              </ScrollView>
              <Button label={t('board.cancel')} variant="secondary" onPress={close} />
            </>
          ) : (
            <ScrollView contentContainerStyle={styles.resolveBody}>
              <Card title={card.name}>
                <Text style={styles.desc}>{card.description}</Text>
                {card.effect ? (
                  <>
                    <Text style={styles.effectLabel}>{t('common.effect')}</Text>
                    <Text style={styles.effect}>{card.effect}</Text>
                  </>
                ) : null}
                <Text style={styles.muted}>{t('explore.doWhatItSays')}</Text>
              </Card>

              <Card title={t('explore.dice')}>
                <View style={styles.diceRow}>
                  <Stepper label="−" onPress={() => setDiceCount(Math.max(0, diceCount - 1))} />
                  <Text style={styles.diceCount}>{diceCount}</Text>
                  <Stepper label="+" onPress={() => setDiceCount(Math.min(8, diceCount + 1))} />
                  <Button
                    label={t('explore.roll')}
                    style={styles.flex}
                    onPress={() => setDiceTotal(rollDice(diceCount).total)}
                  />
                </View>
                <View style={styles.diceRow}>
                  <Text style={styles.diceTotal}>
                    {t('explore.rolled', { total: diceTotal })}
                  </Text>
                  <Stepper label="−" onPress={() => setDiceTotal(Math.max(0, diceTotal - 1))} />
                  <Stepper label="+" onPress={() => setDiceTotal(diceTotal + 1)} />
                </View>
                <Text style={styles.muted}>{t('explore.manualNote')}</Text>
              </Card>

              {explorer ? (
                <Card title={t('explore.adjust', { name: explorer.name })}>
                  <View style={styles.statRow}>
                    {STAT_KEYS.map((stat: StatKey) => (
                      <StatBadge
                        key={stat}
                        stat={stat}
                        value={currentStat(explorer.stats[stat])}
                        onDecrement={() =>
                          dispatch(adjustStat({ characterId: explorer.id, stat, delta: -1 }))
                        }
                        onIncrement={() =>
                          dispatch(adjustStat({ characterId: explorer.id, stat, delta: 1 }))
                        }
                      />
                    ))}
                  </View>
                </Card>
              ) : null}

              <Button label={t('explore.finish')} onPress={finish} />
            </ScrollView>
          )}
        </View>
      </View>
    </Modal>
  );
}

function Stepper({ label, onPress }: { label: string; onPress: () => void }) {
  return (
    <Pressable onPress={onPress} style={styles.stepper}>
      <Text style={styles.stepperText}>{label}</Text>
    </Pressable>
  );
}

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'flex-end',
  },
  sheet: {
    backgroundColor: colors.surface,
    borderTopLeftRadius: radius.lg,
    borderTopRightRadius: radius.lg,
    padding: spacing.md,
    gap: spacing.sm,
    maxHeight: '85%',
  },
  handle: {
    alignSelf: 'center',
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.border,
    marginBottom: spacing.xs,
  },
  title: {
    color: colors.text,
    fontSize: typography.heading,
    fontWeight: '700',
  },
  list: {
    maxHeight: 320,
  },
  row: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: radius.sm,
    backgroundColor: colors.surfaceAlt,
    marginBottom: spacing.xs,
  },
  rowName: {
    color: colors.text,
    fontSize: typography.body,
    fontWeight: '600',
  },
  resolveBody: {
    gap: spacing.sm,
  },
  desc: {
    color: colors.textMuted,
    fontSize: typography.body,
    fontStyle: 'italic',
  },
  effectLabel: {
    color: colors.warning,
    fontSize: typography.caption,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  effect: {
    color: colors.text,
    fontSize: typography.body,
    fontWeight: '600',
  },
  muted: {
    color: colors.textMuted,
    fontSize: typography.caption,
  },
  diceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  diceCount: {
    color: colors.text,
    fontSize: typography.heading,
    fontWeight: '700',
    minWidth: 28,
    textAlign: 'center',
  },
  diceTotal: {
    flex: 1,
    color: colors.warning,
    fontSize: typography.body,
    fontWeight: '700',
  },
  flex: {
    flex: 1,
  },
  stepper: {
    width: 40,
    height: 40,
    borderRadius: radius.sm,
    backgroundColor: colors.surfaceAlt,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepperText: {
    color: colors.text,
    fontSize: typography.heading,
    fontWeight: '700',
  },
  statRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    justifyContent: 'space-between',
  },
});
