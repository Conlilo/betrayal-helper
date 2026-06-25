import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Button, Card, colors, radius, spacing, typography } from '@/modules/ui';
import {
  CHART_OMENS,
  CHART_ROOMS,
  getHauntStory,
  getTriggeredHaunt,
} from '@/modules/haunt-engine';
import type { Lang } from '@/types/shared';

interface TriggerHauntCardProps {
  lang: Lang;
  /** Called with the looked-up haunt id when the user taps "use this haunt". */
  onPick: (hauntId: number) => void;
  /** Called to open the story modal for the looked-up haunt. */
  onViewStory: (hauntId: number) => void;
}

/**
 * "Trigger the Haunt" helper: pick the room where the omen was drawn and the
 * omen, cross-reference the chart, and reveal which haunt fires — then jump
 * straight to its win conditions or story.
 */
export function TriggerHauntCard({ lang, onPick, onViewStory }: TriggerHauntCardProps) {
  const { t } = useTranslation();
  const [roomId, setRoomId] = useState<string | null>(null);
  const [omenId, setOmenId] = useState<string | null>(null);

  const hauntId = roomId && omenId ? getTriggeredHaunt(roomId, omenId) : undefined;
  const hauntTitle = hauntId ? getHauntStory(hauntId, lang)?.title : undefined;

  return (
    <Card title={t('hauntSetup.triggerTitle')}>
      <Text style={styles.hint}>{t('hauntSetup.triggerHint')}</Text>

      <Text style={styles.groupLabel}>{t('hauntSetup.triggerRoom')}</Text>
      <View style={styles.chipRow}>
        {CHART_ROOMS.map(r => (
          <Pressable
            key={r.id}
            onPress={() => setRoomId(r.id)}
            style={[styles.chip, roomId === r.id && styles.chipActive]}>
            <Text style={[styles.chipText, roomId === r.id && styles.chipTextActive]}>
              {r.label}
            </Text>
          </Pressable>
        ))}
      </View>

      <Text style={styles.groupLabel}>{t('hauntSetup.triggerOmen')}</Text>
      <View style={styles.chipRow}>
        {CHART_OMENS.map(o => (
          <Pressable
            key={o.id}
            onPress={() => setOmenId(o.id)}
            style={[styles.chip, omenId === o.id && styles.chipActive]}>
            <Text style={[styles.chipText, omenId === o.id && styles.chipTextActive]}>
              {o.label}
            </Text>
          </Pressable>
        ))}
      </View>

      {roomId && omenId ? (
        hauntId ? (
          <View style={styles.result}>
            <Text style={styles.resultText}>
              → Haunt #{hauntId}
              {hauntTitle ? ` · ${hauntTitle}` : ''}
            </Text>
            <View style={styles.resultBtns}>
              <Button
                label={t('hauntSetup.triggerUse')}
                style={styles.flex}
                onPress={() => onPick(hauntId)}
              />
              <Button
                label={t('hauntSetup.viewStory')}
                variant="secondary"
                style={styles.flex}
                onPress={() => onViewStory(hauntId)}
              />
            </View>
          </View>
        ) : (
          <Text style={styles.notInChart}>{t('hauntSetup.triggerNotInChart')}</Text>
        )
      ) : null}
    </Card>
  );
}

const styles = StyleSheet.create({
  hint: {
    color: colors.textMuted,
    fontSize: typography.caption,
  },
  groupLabel: {
    color: colors.warning,
    fontSize: typography.caption,
    fontWeight: '700',
    marginTop: spacing.sm,
    textTransform: 'uppercase',
  },
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.xs,
    marginTop: spacing.xs,
  },
  chip: {
    backgroundColor: colors.surfaceAlt,
    borderRadius: radius.sm,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
  },
  chipActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  chipText: {
    color: colors.text,
    fontSize: typography.caption,
  },
  chipTextActive: {
    color: colors.surface,
    fontWeight: '700',
  },
  result: {
    marginTop: spacing.sm,
    gap: spacing.sm,
  },
  resultText: {
    color: colors.text,
    fontSize: typography.body,
    fontWeight: '700',
  },
  resultBtns: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  flex: {
    flex: 1,
  },
  notInChart: {
    color: colors.danger,
    fontSize: typography.caption,
    marginTop: spacing.sm,
  },
});
