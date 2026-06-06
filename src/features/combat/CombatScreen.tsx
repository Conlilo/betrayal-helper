import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Screen, Button, Card, colors, radius, spacing, typography } from '@/modules/ui';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { adjustStat, currentStat } from '@/modules/game-engine';
import { rollDice, resolveCombat, type CombatOutcome } from '@/modules/combat-engine';
import type { ID } from '@/types/shared';
import type { RootScreenProps } from '@/navigation/types';

export function CombatScreen(_props: RootScreenProps<'Combat'>) {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const characters = useAppSelector(s => s.game.characters);
  const [attackerId, setAttackerId] = useState<ID | null>(null);
  const [defenderId, setDefenderId] = useState<ID | null>(null);
  const [outcome, setOutcome] = useState<CombatOutcome | null>(null);

  const attacker = characters.find(c => c.id === attackerId) ?? null;
  const defender = characters.find(c => c.id === defenderId) ?? null;
  const ready = attacker && defender && attacker.id !== defender.id;

  /** Build a localized result line from the structured combat outcome. */
  const summarize = (o: CombatOutcome): string => {
    if (!attacker || !defender) return '';
    if (!o.loserId) {
      return t('combat.tie', {
        attacker: attacker.name,
        a: o.attackerTotal,
        defender: defender.name,
        d: o.defenderTotal,
      });
    }
    const loser = o.loserId === attacker.id ? attacker : defender;
    const winner = o.loserId === attacker.id ? defender : attacker;
    const winnerVal = winner.id === attacker.id ? o.attackerTotal : o.defenderTotal;
    const loserVal = loser.id === attacker.id ? o.attackerTotal : o.defenderTotal;
    return t('combat.win', {
      winner: winner.name,
      wv: winnerVal,
      loser: loser.name,
      lv: loserVal,
      damage: o.damage,
    });
  };

  const fight = () => {
    if (!attacker || !defender) return;
    const aDice = currentStat(attacker.stats.might);
    const dDice = currentStat(defender.stats.might);
    const result = resolveCombat({
      attacker: { characterId: attacker.id, name: attacker.name, trait: 'might', diceCount: aDice },
      defender: { characterId: defender.id, name: defender.name, trait: 'might', diceCount: dDice },
      attackerRoll: rollDice(aDice),
      defenderRoll: rollDice(dDice),
    });
    setOutcome(result);
  };

  const applyDamage = () => {
    if (!outcome?.loserId) return;
    // Physical attack damages Might. The player can spread damage manually too.
    dispatch(adjustStat({ characterId: outcome.loserId, stat: 'might', delta: -outcome.damage }));
    setOutcome(null);
  };

  return (
    <Screen>
      <Card title={t('combat.attacker')}>
        <Picker
          characters={characters}
          selectedId={attackerId}
          onSelect={setAttackerId}
          emptyText={t('combat.addCharsFirst')}
        />
      </Card>

      <Card title={t('combat.defender')}>
        <Picker
          characters={characters}
          selectedId={defenderId}
          onSelect={setDefenderId}
          emptyText={t('combat.addCharsFirst')}
        />
      </Card>

      <Button label={t('combat.roll')} onPress={fight} disabled={!ready} />

      {outcome ? (
        <Card title={t('combat.result')}>
          <Text style={styles.summary}>{summarize(outcome)}</Text>
          {outcome.loserId ? (
            <Button
              label={t('combat.applyDamage', { damage: outcome.damage })}
              variant="danger"
              onPress={applyDamage}
            />
          ) : null}
        </Card>
      ) : null}
    </Screen>
  );
}

function Picker({
  characters,
  selectedId,
  onSelect,
  emptyText,
}: {
  characters: { id: ID; name: string; color: string }[];
  selectedId: ID | null;
  onSelect: (id: ID) => void;
  emptyText: string;
}) {
  if (characters.length === 0) {
    return <Text style={styles.empty}>{emptyText}</Text>;
  }
  return (
    <View style={styles.row}>
      {characters.map(c => {
        const active = c.id === selectedId;
        return (
          <Pressable
            key={c.id}
            onPress={() => onSelect(c.id)}
            style={[styles.chip, active && { backgroundColor: c.color }]}>
            <Text style={[styles.chipText, active && styles.chipTextActive]}>
              {c.name}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
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
  chipTextActive: {
    fontWeight: '700',
  },
  empty: {
    color: colors.textMuted,
    fontSize: typography.body,
  },
  summary: {
    color: colors.text,
    fontSize: typography.body,
  },
});
