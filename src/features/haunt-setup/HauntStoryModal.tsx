import React, { useState } from 'react';
import { Modal, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Button, colors, radius, spacing, typography } from '@/modules/ui';
import { getHauntStory, getSecretsOfSurvival } from '@/modules/haunt-engine';
import type { Lang } from '@/types/shared';

type Side = 'traitor' | 'heroes';

interface HauntStoryModalProps {
  visible: boolean;
  hauntId: number | null;
  lang: Lang;
  onClose: () => void;
}

/**
 * Bottom-sheet that shows a haunt's full story (intro + ALL-CAPS sections +
 * monster stat blocks) in the app language, with a Traitor / Heroes toggle so
 * the game master can read either side. Falls back to English when no
 * Vietnamese translation exists for the chosen haunt.
 */
export function HauntStoryModal({
  visible,
  hauntId,
  lang,
  onClose,
}: HauntStoryModalProps) {
  const { t } = useTranslation();
  const [side, setSide] = useState<Side>('traitor');

  const story =
    hauntId == null
      ? undefined
      : side === 'traitor'
        ? getHauntStory(hauntId, lang)
        : getSecretsOfSurvival(hauntId, lang);

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <View style={styles.backdrop}>
        <View style={styles.sheet}>
          <View style={styles.handle} />

          <View style={styles.toggleRow}>
            <Button
              label={t('hauntSetup.storyTraitor')}
              variant={side === 'traitor' ? 'primary' : 'secondary'}
              style={styles.toggleBtn}
              onPress={() => setSide('traitor')}
            />
            <Button
              label={t('hauntSetup.storyHeroes')}
              variant={side === 'heroes' ? 'primary' : 'secondary'}
              style={styles.toggleBtn}
              onPress={() => setSide('heroes')}
            />
          </View>

          <ScrollView contentContainerStyle={styles.body}>
            {story ? (
              <>
                <Text style={styles.title}>
                  #{story.id} · {story.title}
                </Text>
                {story.intro ? <Text style={styles.intro}>{story.intro}</Text> : null}

                {story.sections.map((s, i) => (
                  <View key={`${s.heading}-${i}`} style={styles.section}>
                    <Text style={styles.heading}>{s.heading}</Text>
                    <Text style={styles.sectionBody}>{s.body}</Text>
                  </View>
                ))}

                {story.monsters.length > 0 ? (
                  <View style={styles.section}>
                    <Text style={styles.heading}>{t('hauntSetup.monstersLabel')}</Text>
                    {story.monsters.map((m, i) => (
                      <Text key={`${m.name}-${i}`} style={styles.monster}>
                        {m.name} — {m.stats}
                      </Text>
                    ))}
                  </View>
                ) : null}
              </>
            ) : (
              <Text style={styles.intro}>{t('hauntSetup.noStory')}</Text>
            )}
          </ScrollView>

          <Button label={t('hauntSetup.close')} variant="secondary" onPress={onClose} />
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
    maxHeight: '88%',
  },
  handle: {
    alignSelf: 'center',
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.border,
    marginBottom: spacing.xs,
  },
  toggleRow: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  toggleBtn: {
    flex: 1,
  },
  body: {
    gap: spacing.sm,
    paddingBottom: spacing.sm,
  },
  title: {
    color: colors.text,
    fontSize: typography.heading,
    fontWeight: '700',
  },
  intro: {
    color: colors.textMuted,
    fontSize: typography.body,
    fontStyle: 'italic',
  },
  section: {
    gap: spacing.xs,
    marginTop: spacing.xs,
  },
  heading: {
    color: colors.warning,
    fontSize: typography.caption,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  sectionBody: {
    color: colors.text,
    fontSize: typography.body,
  },
  monster: {
    color: colors.text,
    fontSize: typography.body,
    fontWeight: '600',
  },
});
