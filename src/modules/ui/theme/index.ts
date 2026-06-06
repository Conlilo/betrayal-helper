/**
 * Central design tokens for the app. Keep all colors / spacing here so
 * screens stay visually consistent and easy to re-theme.
 */

export const colors = {
  background: '#14110F',
  surface: '#1F1A17',
  surfaceAlt: '#2A2320',
  border: '#3A312C',
  text: '#F2E9E4',
  textMuted: '#9A8C82',
  primary: '#B5402A', // blood red
  hero: '#3C8DBC',
  traitor: '#8E3B46',
  warning: '#D9A441',
  success: '#5A8F4E',
  danger: '#C0392B',
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
} as const;

export const radius = {
  sm: 6,
  md: 12,
  lg: 20,
} as const;

export const typography = {
  title: 28,
  heading: 20,
  body: 16,
  caption: 13,
} as const;

export type Theme = {
  colors: typeof colors;
  spacing: typeof spacing;
  radius: typeof radius;
  typography: typeof typography;
};

export const theme: Theme = { colors, spacing, radius, typography };
