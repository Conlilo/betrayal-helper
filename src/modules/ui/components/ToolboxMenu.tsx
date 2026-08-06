import React, { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { rollDice, type DiceResult } from '@/modules/combat-engine';
import { colors, radius, spacing, typography } from '../theme';

type ToolboxView = 'menu' | 'dice';

/** Header toolbox button + modal, shown on in-game screens only. */
export function ToolboxMenu() {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<ToolboxView>('menu');
  const [count, setCount] = useState(1);
  const [result, setResult] = useState<DiceResult | null>(null);

  const close = () => {
    setOpen(false);
    setView('menu');
    setResult(null);
  };

  const backToMenu = () => {
    setView('menu');
    setResult(null);
  };

  const openGameState = () => {
    close();
    navigation.navigate('GameState' as never);
  };

  const roll = () => setResult(rollDice(count));

  return (
    <>
      <Pressable onPress={() => setOpen(true)} style={styles.trigger} hitSlop={8}>
        <Text style={styles.triggerIcon}>🧰</Text>
      </Pressable>

      <Modal visible={open} transparent animationType="slide" onRequestClose={close}>
        <View style={styles.backdrop}>
          <View style={styles.sheet}>
            <View style={styles.handle} />
            <Pressable onPress={close} style={styles.closeBtn} hitSlop={8}>
              <Text style={styles.closeText}>✕</Text>
            </Pressable>

            {view === 'menu' ? (
              <View style={styles.menu}>
                <MenuRow label={t('toolbox.gameState')} onPress={openGameState} />
                <MenuRow label={t('toolbox.rollDice')} onPress={() => setView('dice')} />
              </View>
            ) : (
              <View style={styles.menu}>
                <Text style={styles.label}>{t('toolbox.diceCount')}</Text>
                <View style={styles.stepperRow}>
                  <Stepper
                    symbol="−"
                    disabled={count <= 1}
                    onPress={() => setCount(c => Math.max(1, c - 1))}
                  />
                  <Text style={styles.count}>{count}</Text>
                  <Stepper
                    symbol="+"
                    disabled={count >= 8}
                    onPress={() => setCount(c => Math.min(8, c + 1))}
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

                <Pressable onPress={roll} style={styles.rollBtn}>
                  <Text style={styles.rollBtnText}>
                    {result ? t('toolbox.rollAgain') : t('toolbox.roll')}
                  </Text>
                </Pressable>

                <Pressable onPress={backToMenu} style={styles.backBtn}>
                  <Text style={styles.backText}>{t('toolbox.back')}</Text>
                </Pressable>
              </View>
            )}
          </View>
        </View>
      </Modal>
    </>
  );
}

function MenuRow({ label, onPress }: { label: string; onPress: () => void }) {
  return (
    <Pressable onPress={onPress} style={styles.menuRow}>
      <Text style={styles.menuRowText}>{label}</Text>
    </Pressable>
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
  trigger: {
    padding: spacing.xs,
  },
  triggerIcon: {
    fontSize: typography.heading,
  },
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
  },
  handle: {
    alignSelf: 'center',
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.border,
    marginBottom: spacing.xs,
  },
  closeBtn: {
    position: 'absolute',
    top: spacing.sm,
    right: spacing.md,
  },
  closeText: {
    color: colors.textMuted,
    fontSize: typography.heading,
  },
  menu: {
    gap: spacing.sm,
  },
  menuRow: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: radius.sm,
    backgroundColor: colors.surfaceAlt,
  },
  menuRowText: {
    color: colors.text,
    fontSize: typography.body,
    fontWeight: '600',
  },
  label: {
    color: colors.textMuted,
    fontSize: typography.caption,
    fontWeight: '600',
  },
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
  rollBtn: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.sm + 2,
    borderRadius: radius.md,
    alignItems: 'center',
  },
  rollBtnText: {
    color: colors.text,
    fontSize: typography.body,
    fontWeight: '700',
  },
  backBtn: {
    alignItems: 'center',
    paddingVertical: spacing.xs,
  },
  backText: {
    color: colors.textMuted,
    fontSize: typography.caption,
    fontWeight: '600',
  },
});
