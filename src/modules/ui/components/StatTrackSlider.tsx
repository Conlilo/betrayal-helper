import React, { useRef, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import type { StatKey } from '@/types/shared';
import type { StatTrack } from '@/modules/game-engine';
import { colors, radius, spacing, typography } from '../theme';

interface StatTrackSliderProps {
  stat: StatKey;
  track: StatTrack;
  onChangeIndex: (index: number) => void;
}

/**
 * Board-style stat track: every printed box is shown, drag or tap anywhere
 * on the track to jump the pointer, or nudge one step with the end buttons.
 */
export function StatTrackSlider({ stat, track, onChangeIndex }: StatTrackSliderProps) {
  const { t } = useTranslation();
  const { values, index } = track;
  const count = values.length;
  const [trackWidth, setTrackWidth] = useState(0);
  const lastEmitted = useRef(index);
  lastEmitted.current = index;

  const emit = (nextIndex: number) => {
    const clamped = Math.max(0, Math.min(count - 1, nextIndex));
    if (clamped !== lastEmitted.current) {
      lastEmitted.current = clamped;
      onChangeIndex(clamped);
    }
  };

  const indexFromX = (x: number) => {
    if (trackWidth <= 0) return index;
    const ratio = x / trackWidth;
    return Math.round(ratio * (count - 1));
  };

  const pan = Gesture.Pan()
    .runOnJS(true)
    .onBegin(e => emit(indexFromX(e.x)))
    .onUpdate(e => emit(indexFromX(e.x)));

  return (
    <View style={styles.wrap}>
      <Text style={styles.label}>{t(`stats.${stat}`)}</Text>
      <View style={styles.row}>
        <Stepper symbol="−" disabled={index === 0} onPress={() => emit(index - 1)} />
        <GestureDetector gesture={pan}>
          <View style={styles.track} onLayout={e => setTrackWidth(e.nativeEvent.layout.width)}>
            <View style={styles.trackLine} />
            {values.map((printed, i) => (
              <Pressable key={i} style={styles.cell} onPress={() => emit(i)}>
                <View style={[styles.dot, i === index && styles.dotActive]} />
                <Text
                  style={[
                    styles.cellText,
                    i === index && styles.cellTextActive,
                    printed === 0 && styles.dead,
                  ]}>
                  {printed}
                </Text>
              </Pressable>
            ))}
          </View>
        </GestureDetector>
        <Stepper
          symbol="+"
          disabled={index === count - 1}
          onPress={() => emit(index + 1)}
        />
      </View>
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
  wrap: {
    backgroundColor: colors.surfaceAlt,
    borderRadius: radius.sm,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
  },
  label: {
    color: colors.textMuted,
    fontSize: typography.caption,
    fontWeight: '600',
    marginBottom: spacing.xs,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  track: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 44,
  },
  trackLine: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: colors.border,
  },
  cell: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.border,
  },
  dotActive: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.primary,
  },
  cellText: {
    color: colors.textMuted,
    fontSize: typography.caption,
    fontWeight: '600',
  },
  cellTextActive: {
    color: colors.text,
    fontSize: typography.body,
    fontWeight: '700',
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
  stepperDisabled: {
    opacity: 0.35,
  },
  stepperPressed: {
    backgroundColor: colors.border,
  },
  stepperText: {
    color: colors.text,
    fontSize: typography.body,
    fontWeight: '700',
  },
});
