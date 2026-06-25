import React, { useEffect, useMemo, useState } from 'react';
import { Modal, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Button, colors, radius, spacing, typography } from '@/modules/ui';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { adjustStat, setCharacterRoom } from '@/modules/game-engine';
import { addRoomToken } from '@/modules/room-engine';
import { getHauntSetupSteps, type SetupAction } from '@/modules/haunt-engine';
import type { Lang } from '@/types/shared';

interface SetupGuideModalProps {
  visible: boolean;
  hauntId: number | null;
  lang: Lang;
  onClose: () => void;
}

/**
 * Step-by-step "Trigger the Haunt" setup wizard. Walks the game master through
 * each setup instruction one at a time: steps with structured actions get an
 * "Apply" button (place a token, adjust the traitor's traits, move the traitor),
 * everything else is a checklist the GM does on the physical board. A "Continue"
 * button advances, leaving time to set up between steps.
 */
export function SetupGuideModal({
  visible,
  hauntId,
  lang,
  onClose,
}: SetupGuideModalProps) {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const traitorId = useAppSelector(s => s.haunt.traitorId);
  const placedRooms = useAppSelector(s => s.rooms.rooms);

  const steps = useMemo(
    () => (hauntId != null ? getHauntSetupSteps(hauntId, lang) : []),
    [hauntId, lang],
  );

  const [index, setIndex] = useState(0);
  const [applied, setApplied] = useState<Set<number>>(new Set());

  // Restart the wizard whenever it's reopened for a (possibly new) haunt.
  useEffect(() => {
    if (visible) {
      setIndex(0);
      setApplied(new Set());
    }
  }, [visible, hauntId]);

  const step = steps[index];
  const roomIdOf = (defId: string) =>
    placedRooms.find(r => r.defId === defId)?.id;

  // Which blockers (if any) stop a step's actions from auto-applying.
  const blocker = (actions: SetupAction[]): string | null => {
    for (const a of actions) {
      if (a.type === 'adjustTrait' && !traitorId) return t('hauntSetup.setupNoTraitor');
      if (a.type === 'moveTraitor') {
        if (!traitorId) return t('hauntSetup.setupNoTraitor');
        if (!roomIdOf(a.roomDefId)) return t('hauntSetup.setupRoomMissing');
      }
      if (a.type === 'addToken' && !roomIdOf(a.roomDefId))
        return t('hauntSetup.setupRoomMissing');
    }
    return null;
  };

  const applyStep = () => {
    if (!step) return;
    for (const a of step.actions) {
      if (a.type === 'addToken') {
        const roomId = roomIdOf(a.roomDefId);
        if (roomId) dispatch(addRoomToken(roomId, a.label, { color: a.color }));
      } else if (a.type === 'adjustTrait') {
        if (traitorId)
          dispatch(adjustStat({ characterId: traitorId, stat: a.stat, delta: a.delta }));
      } else if (a.type === 'moveTraitor') {
        const roomId = roomIdOf(a.roomDefId);
        const room = placedRooms.find(r => r.id === roomId);
        if (traitorId && room)
          dispatch(
            setCharacterRoom({ characterId: traitorId, roomId: room.id, roomName: room.name }),
          );
      }
    }
    setApplied(prev => new Set(prev).add(index));
  };

  const isLast = index >= steps.length - 1;
  const hasActions = (step?.actions.length ?? 0) > 0;
  const block = step ? blocker(step.actions) : null;
  const isApplied = applied.has(index);

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <View style={styles.backdrop}>
        <View style={styles.sheet}>
          <View style={styles.handle} />

          {step ? (
            <>
              <Text style={styles.counter}>
                {t('hauntSetup.setupStep', { n: index + 1, total: steps.length })}
              </Text>
              <ScrollView style={styles.body} contentContainerStyle={styles.bodyContent}>
                <Text style={styles.stepText}>{step.text}</Text>
                {hasActions && block ? (
                  <Text style={styles.blockNote}>{block}</Text>
                ) : null}
              </ScrollView>

              {hasActions ? (
                <Button
                  label={isApplied ? t('hauntSetup.setupApplied') : t('hauntSetup.setupApply')}
                  disabled={!!block || isApplied}
                  onPress={applyStep}
                />
              ) : null}

              <View style={styles.navRow}>
                <Button
                  label={t('hauntSetup.setupBack')}
                  variant="secondary"
                  style={styles.flex}
                  disabled={index === 0}
                  onPress={() => setIndex(i => Math.max(0, i - 1))}
                />
                <Button
                  label={isLast ? t('hauntSetup.setupDone') : t('hauntSetup.setupNext')}
                  style={styles.flex}
                  onPress={() => (isLast ? onClose() : setIndex(i => i + 1))}
                />
              </View>
            </>
          ) : (
            <>
              <Text style={styles.stepText}>{t('hauntSetup.setupNone')}</Text>
              <Button label={t('hauntSetup.close')} variant="secondary" onPress={onClose} />
            </>
          )}
        </View>
      </View>
    </Modal>
  );
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
    maxHeight: '80%',
  },
  handle: {
    alignSelf: 'center',
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.border,
    marginBottom: spacing.xs,
  },
  counter: {
    color: colors.warning,
    fontSize: typography.caption,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  body: {
    maxHeight: 240,
  },
  bodyContent: {
    gap: spacing.sm,
  },
  stepText: {
    color: colors.text,
    fontSize: typography.body,
  },
  blockNote: {
    color: colors.warning,
    fontSize: typography.caption,
  },
  navRow: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  flex: {
    flex: 1,
  },
});
