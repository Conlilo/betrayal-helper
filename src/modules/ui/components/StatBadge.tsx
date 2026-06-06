import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import type { StatKey } from '@/types/shared';
import { colors, radius, spacing, typography } from '../theme';

interface StatBadgeProps {
  stat: StatKey;
  value: number;
  onDecrement?: () => void;
  onIncrement?: () => void;
}

/** Shows one attribute with +/- steppers to move the stat track. */
export function StatBadge({
  stat,
  value,
  onDecrement,
  onIncrement,
}: StatBadgeProps) {
  const { t } = useTranslation();
  return (
    <View style={styles.wrap}>
      <Text style={styles.label}>{t(`stats.${stat}`)}</Text>
      <View style={styles.row}>
        <Stepper symbol="−" onPress={onDecrement} />
        <Text style={[styles.value, value === 0 && styles.dead]}>{value}</Text>
        <Stepper symbol="+" onPress={onIncrement} />
      </View>
    </View>
  );
}

function Stepper({ symbol, onPress }: { symbol: string; onPress?: () => void }) {
  if (!onPress) return <View style={styles.stepperSpacer} />;
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.stepper, pressed && styles.stepperPressed]}>
      <Text style={styles.stepperText}>{symbol}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrap: {
    alignItems: 'center',
    backgroundColor: colors.surfaceAlt,
    borderRadius: radius.sm,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
    minWidth: 72,
  },
  label: {
    color: colors.textMuted,
    fontSize: typography.caption,
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  value: {
    color: colors.text,
    fontSize: typography.heading,
    fontWeight: '700',
    minWidth: 24,
    textAlign: 'center',
  },
  dead: {
    color: colors.danger,
  },
  stepper: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepperPressed: {
    backgroundColor: colors.border,
  },
  stepperText: {
    color: colors.text,
    fontSize: typography.body,
    fontWeight: '700',
  },
  stepperSpacer: {
    width: 26,
    height: 26,
  },
});
