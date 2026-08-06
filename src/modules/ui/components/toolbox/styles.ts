import { StyleSheet } from 'react-native';
import { colors, radius, spacing, typography } from '../../theme';

/** Chrome shared by the toolbox shell and every one of its views. */
export const toolboxStyles = StyleSheet.create({
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
