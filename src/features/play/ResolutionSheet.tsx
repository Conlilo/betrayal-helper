import React, { useEffect, useMemo, useState } from 'react';
import { Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Button, Card, StatBadge, colors, radius, spacing, typography } from '@/modules/ui';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import {
  adjustStat,
  currentStat,
  incrementOmenCount,
  logAction,
} from '@/modules/game-engine';
import {
  CARD_DEFS_BY_TYPE,
  drawCard,
  type CardDef,
  type CardType,
  type ResolutionStep,
} from '@/modules/card-engine';
import { rollDice } from '@/modules/combat-engine';
import { evaluateHauntRoll } from '@/modules/haunt-engine';
import {
  STAT_KEYS,
  STATS_BY_CATEGORY,
  type ID,
  type StatCategory,
  type StatKey,
} from '@/types/shared';

/** Impact options shown after the dice result is confirmed. */
type Impact = StatCategory | 'other' | 'none';
const IMPACTS: { key: Impact; label: string }[] = [
  { key: 'physical', label: 'explore.impactPhysical' },
  { key: 'mental', label: 'explore.impactMental' },
  { key: 'other', label: 'explore.impactOther' },
  { key: 'none', label: 'explore.impactNone' },
];

/** A single stage the player walks through, built from the card. */
type Stage =
  | ResolutionStep
  | { kind: 'genericDice' }
  | { kind: 'impact' }
  | { kind: 'summary' }
  | { kind: 'hauntRoll' };

interface ResolutionSheetProps {
  visible: boolean;
  explorerId: ID | null;
  symbol: CardType | null;
  onClose: () => void;
}

/**
 * Bottom-sheet that walks a player through resolving a room's card symbol:
 * pick the card you drew → follow its guided steps (rolls, attack/defense) →
 * apply the impact on your stats → (omens) make a Haunt roll → finish.
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
  const omenCount = useAppSelector(s => s.game.omenCount ?? 0);

  const [card, setCard] = useState<CardDef | null>(null);
  const [stageIndex, setStageIndex] = useState(0);

  // Primary / attacker roll, defender roll, and the Haunt roll.
  const [pCount, setPCount] = useState(2);
  const [pTotal, setPTotal] = useState(0);
  const [dCount, setDCount] = useState(2);
  const [dTotal, setDTotal] = useState(0);
  const [hTotal, setHTotal] = useState(0);

  const [impact, setImpact] = useState<Impact | null>(null);
  const [changed, setChanged] = useState(false);
  // Stat values captured when the card is drawn, for the before → after summary.
  const [baseline, setBaseline] = useState<Record<StatKey, number> | null>(null);

  // The ordered stages: the card's own steps (or a generic roll), then the
  // impact + summary, plus a Haunt roll for every omen.
  const stages = useMemo<Stage[]>(() => {
    if (!card) return [];
    const out: Stage[] = card.resolution?.steps?.length
      ? [...card.resolution.steps]
      : [{ kind: 'genericDice' }];
    out.push({ kind: 'impact' }, { kind: 'summary' });
    if (card.type === 'omen') out.push({ kind: 'hauntRoll' });
    return out;
  }, [card]);

  const stage = stages[stageIndex] ?? null;

  // Initialise each stage's dice counts (and pre-select damage impact) on entry.
  useEffect(() => {
    if (!stage) return;
    if (stage.kind === 'roll') {
      setPCount(stage.dice ?? (stage.stat && explorer ? currentStat(explorer.stats[stage.stat]) : 2));
      setPTotal(0);
    } else if (stage.kind === 'attackDefense') {
      setPCount(stage.attackerDice);
      setPTotal(0);
      setDCount(explorer ? currentStat(explorer.stats[stage.defenseStat]) : 2);
      setDTotal(0);
    } else if (stage.kind === 'impact') {
      // Pre-select the damage category an attack/defense step implies.
      const atk = card?.resolution?.steps.find(s => s.kind === 'attackDefense');
      if (impact === null && atk && atk.kind === 'attackDefense') {
        setImpact(atk.damage);
      }
    } else if (stage.kind === 'hauntRoll') {
      setHTotal(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stageIndex, stages]);

  const close = () => {
    setCard(null);
    setStageIndex(0);
    setPCount(2);
    setPTotal(0);
    setDCount(2);
    setDTotal(0);
    setHTotal(0);
    setImpact(null);
    setChanged(false);
    setBaseline(null);
    onClose();
  };

  const onPickCard = (def: CardDef) => {
    dispatch(drawCard(def, def.type === 'item' ? explorerId : null));
    if (def.type === 'omen') dispatch(incrementOmenCount());
    if (explorer) {
      dispatch(logAction(`${explorer.name} drew ${def.name}.`));
      const snap = {} as Record<StatKey, number>;
      STAT_KEYS.forEach(s => {
        snap[s] = currentStat(explorer.stats[s]);
      });
      setBaseline(snap);
    }
    setStageIndex(0);
    setCard(def);
  };

  const advance = () => {
    if (stageIndex < stages.length - 1) setStageIndex(i => i + 1);
    else finish();
  };

  const finish = () => {
    if (explorer && card) {
      dispatch(logAction(`${explorer.name}: ${card.name} resolved.`));
    }
    close();
  };

  if (!symbol) return null;

  const impactStats: StatKey[] =
    impact === 'other'
      ? STAT_KEYS
      : impact === 'physical' || impact === 'mental'
        ? STATS_BY_CATEGORY[impact]
        : [];
  const requireChange = impact === 'physical' || impact === 'mental';
  const impactDone = impact !== null && !(requireChange && !changed);
  const changedStats: StatKey[] =
    baseline && explorer
      ? STAT_KEYS.filter(s => currentStat(explorer.stats[s]) !== baseline[s])
      : [];
  const isLast = stageIndex >= stages.length - 1;
  const nextLabel = isLast ? t('explore.finish') : t('explore.next');

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
              </Card>

              {/* --- Current stage --- */}
              {stage?.kind === 'note' ? (
                <Card>
                  <Text style={styles.effect}>{stage.prompt}</Text>
                </Card>
              ) : null}

              {stage?.kind === 'genericDice' ? (
                <Card title={t('explore.dice')}>
                  <DiceRoller
                    count={pCount}
                    total={pTotal}
                    editable
                    onCount={setPCount}
                    onTotal={setPTotal}
                    rolled={t('explore.rolled', { total: pTotal })}
                  />
                  <Text style={styles.muted}>{t('explore.manualNote')}</Text>
                </Card>
              ) : null}

              {stage?.kind === 'roll' ? (
                <Card>
                  <Text style={styles.effect}>{stage.prompt}</Text>
                  <DiceRoller
                    count={pCount}
                    total={pTotal}
                    editable
                    onCount={setPCount}
                    onTotal={setPTotal}
                    rolled={t('explore.rolled', { total: pTotal })}
                  />
                  {stage.outcomes?.map(o => (
                    <Text key={o} style={styles.muted}>
                      • {o}
                    </Text>
                  ))}
                </Card>
              ) : null}

              {stage?.kind === 'attackDefense' ? (
                <Card>
                  <Text style={styles.effect}>{stage.prompt}</Text>
                  <Text style={styles.rollLabel}>{t('explore.attack')}</Text>
                  <DiceRoller
                    count={pCount}
                    total={pTotal}
                    editable
                    onCount={setPCount}
                    onTotal={setPTotal}
                    rolled={t('explore.rolled', { total: pTotal })}
                  />
                  <Text style={styles.rollLabel}>
                    {t('explore.defense', { stat: t(`stats.${stage.defenseStat}`) })}
                  </Text>
                  <DiceRoller
                    count={dCount}
                    total={dTotal}
                    editable
                    onCount={setDCount}
                    onTotal={setDTotal}
                    rolled={t('explore.rolled', { total: dTotal })}
                  />
                  {pTotal - dTotal > 0 ? (
                    <Text style={styles.require}>
                      {t('explore.netDamage', { net: pTotal - dTotal })}
                    </Text>
                  ) : (
                    <Text style={styles.muted}>{t('explore.netSafe')}</Text>
                  )}
                </Card>
              ) : null}

              {stage?.kind === 'impact' && explorer ? (
                <Card title={t('explore.impact', { name: explorer.name })}>
                  <Text style={styles.muted}>{t('explore.impactPrompt')}</Text>
                  <View style={styles.impactRow}>
                    {IMPACTS.map(opt => (
                      <Button
                        key={opt.key}
                        label={t(opt.label)}
                        variant={impact === opt.key ? 'primary' : 'secondary'}
                        style={styles.impactBtn}
                        onPress={() => {
                          setImpact(opt.key);
                          setChanged(false);
                        }}
                      />
                    ))}
                  </View>
                  {impactStats.length > 0 ? (
                    <View style={styles.statRow}>
                      {impactStats.map(stat => (
                        <StatBadge
                          key={stat}
                          stat={stat}
                          value={currentStat(explorer.stats[stat])}
                          onDecrement={() => {
                            dispatch(adjustStat({ characterId: explorer.id, stat, delta: -1 }));
                            setChanged(true);
                          }}
                          onIncrement={() => {
                            dispatch(adjustStat({ characterId: explorer.id, stat, delta: 1 }));
                            setChanged(true);
                          }}
                        />
                      ))}
                    </View>
                  ) : null}
                  {requireChange && !changed ? (
                    <Text style={styles.require}>{t('explore.requireChange')}</Text>
                  ) : null}
                </Card>
              ) : null}

              {stage?.kind === 'summary' && explorer && baseline ? (
                <Card title={t('explore.summary')}>
                  {changedStats.length > 0 ? (
                    changedStats.map(stat => (
                      <Text key={stat} style={styles.summaryLine}>
                        {t(`stats.${stat}`)}: {baseline[stat]} →{' '}
                        {currentStat(explorer.stats[stat])}
                      </Text>
                    ))
                  ) : (
                    <Text style={styles.muted}>{t('explore.noChange')}</Text>
                  )}
                </Card>
              ) : null}

              {stage?.kind === 'hauntRoll' ? (
                <Card title={t('explore.haunt')}>
                  <Text style={styles.muted}>
                    {t('explore.hauntHint', { count: omenCount })}
                  </Text>
                  <DiceRoller
                    count={6}
                    total={hTotal}
                    onTotal={setHTotal}
                    onRoll={() => setHTotal(rollDice(6).total)}
                    rolled={t('explore.rolled', { total: hTotal })}
                  />
                  <Text
                    style={
                      evaluateHauntRoll(hTotal, omenCount).triggered
                        ? styles.require
                        : styles.muted
                    }>
                    {evaluateHauntRoll(hTotal, omenCount).triggered
                      ? t('explore.hauntTriggered')
                      : t('explore.hauntSafe')}
                  </Text>
                </Card>
              ) : null}

              <Button
                label={nextLabel}
                disabled={stage?.kind === 'impact' && !impactDone}
                onPress={advance}
              />
            </ScrollView>
          )}
        </View>
      </View>
    </Modal>
  );
}

/** A labelled dice roller: − count + · roll · result with manual ± . */
function DiceRoller({
  count,
  total,
  editable,
  onCount,
  onTotal,
  onRoll,
  rolled,
}: {
  count: number;
  total: number;
  editable?: boolean;
  onCount?: (n: number) => void;
  onTotal: (n: number) => void;
  onRoll?: () => void;
  rolled: string;
}) {
  const { t } = useTranslation();
  return (
    <>
      <View style={styles.diceRow}>
        {editable && onCount ? (
          <Stepper label="−" onPress={() => onCount(Math.max(0, count - 1))} />
        ) : null}
        <Text style={styles.diceCount}>{count}</Text>
        {editable && onCount ? (
          <Stepper label="+" onPress={() => onCount(Math.min(8, count + 1))} />
        ) : null}
        <Button
          label={t('explore.roll')}
          style={styles.flex}
          onPress={onRoll ?? (() => onTotal(rollDice(count).total))}
        />
      </View>
      <View style={styles.diceRow}>
        <Text style={styles.diceTotal}>{rolled}</Text>
        <Stepper label="−" onPress={() => onTotal(Math.max(0, total - 1))} />
        <Stepper label="+" onPress={() => onTotal(total + 1)} />
      </View>
    </>
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
  rollLabel: {
    color: colors.textMuted,
    fontSize: typography.caption,
    fontWeight: '700',
    textTransform: 'uppercase',
    marginTop: spacing.xs,
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
  impactRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    marginTop: spacing.xs,
  },
  impactBtn: {
    flexGrow: 1,
    flexBasis: '47%',
  },
  require: {
    color: colors.danger,
    fontSize: typography.caption,
    fontWeight: '700',
    marginTop: spacing.xs,
  },
  summaryLine: {
    color: colors.text,
    fontSize: typography.body,
    fontWeight: '600',
  },
});
