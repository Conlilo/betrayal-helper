import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { setLanguage } from '@/modules/settings';
import { LANGUAGES, type Language } from '@/modules/i18n';
import { colors, radius, spacing, typography } from '../theme';

/** Segmented control to switch between the supported UI languages. */
export function LanguageSwitcher() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const current = useAppSelector(s => s.settings.language);

  return (
    <View style={styles.wrap}>
      <Text style={styles.label}>{t('language.label')}</Text>
      <View style={styles.row}>
        {LANGUAGES.map((lng: Language) => {
          const active = lng === current;
          return (
            <Pressable
              key={lng}
              onPress={() => dispatch(setLanguage(lng))}
              style={[styles.option, active && styles.optionActive]}>
              <Text style={[styles.optionText, active && styles.optionTextActive]}>
                {t(`language.${lng}`)}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    color: colors.textMuted,
    fontSize: typography.caption,
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
    gap: spacing.xs,
  },
  option: {
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
    borderRadius: radius.sm,
    backgroundColor: colors.surfaceAlt,
  },
  optionActive: {
    backgroundColor: colors.primary,
  },
  optionText: {
    color: colors.textMuted,
    fontSize: typography.caption,
    fontWeight: '600',
  },
  optionTextActive: {
    color: colors.text,
  },
});
