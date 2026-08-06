import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { rollDice, type DiceResult } from '@/modules/combat-engine';
import { colors, radius, spacing, typography } from '../../theme';
import { toolboxStyles } from './styles';

/** Toolbox view: pick a dice count [1,8], roll, show each die's face + total. */
export function ToolboxDiceView({
  count,
  onChangeCount,
  onBack,
}: {
  count: number;
  onChangeCount: (count: number) => void;
  onBack: () => void;
}) {
  const { t } = useTranslation();
  const [result, setResult] = useState<DiceResult | null>(null);

  const roll = () => setResult(rollDice(count));

  return (
    <View style={toolboxStyles.menu}>
      <Text style={toolboxStyles.label}>{t('toolbox.diceCount')}</Text>
      <View style={styles.stepperRow}>
        <Stepper
          symbol="−"
          disabled={count <= 1}
          onPress={() => onChangeCount(Math.max(1, count - 1))}
        />
        <Text style={styles.count}>{count}</Text>
        <Stepper
          symbol="+"
          disabled={count >= 8}
          onPress={() => onChangeCount(Math.min(8, count + 1))}
        />
      </View>

      {result ? (
        <>
          <View style={styles.diceGrid}>
            {result.dice.map((face, i) => (
              <View key={i} style={styles.die}>
                <Text style={styles.dieText}>{face}</Text>
              </View>
            ))}
          </View>
          <Text style={styles.total}>{t('toolbox.total', { total: result.total })}</Text>
        </>
      ) : null}

      <Pressable onPress={roll} style={toolboxStyles.rollBtn}>
        <Text style={toolboxStyles.rollBtnText}>
          {result ? t('toolbox.rollAgain') : t('toolbox.roll')}
        </Text>
      </Pressable>

      <Pressable onPress={onBack} style={toolboxStyles.backBtn}>
        <Text style={toolboxStyles.backText}>{t('toolbox.back')}</Text>
      </Pressable>
    </View>
  );
}

function Stepper({
  symbol,
  disabled,
  onPress,
}: {
  symbol: string;
  disabled: boolean;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.stepper,
        disabled && styles.stepperDisabled,
        pressed && !disabled && styles.stepperPressed,
      ]}>
      <Text style={styles.stepperText}>{symbol}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  stepperRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.md,
  },
  count: {
    color: colors.text,
    fontSize: typography.title,
    fontWeight: '700',
    minWidth: 32,
    textAlign: 'center',
  },
  stepper: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.surfaceAlt,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepperDisabled: {
    opacity: 0.35,
  },
  stepperPressed: {
    backgroundColor: colors.border,
  },
  stepperText: {
    color: colors.text,
    fontSize: typography.heading,
    fontWeight: '700',
  },
  diceGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.xs,
    justifyContent: 'center',
  },
  die: {
    width: 40,
    height: 40,
    borderRadius: radius.sm,
    backgroundColor: colors.surfaceAlt,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dieText: {
    color: colors.text,
    fontSize: typography.heading,
    fontWeight: '700',
  },
  total: {
    color: colors.text,
    fontSize: typography.body,
    fontWeight: '700',
    textAlign: 'center',
  },
});
