import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import type { ID } from '@/types/shared';
import { useAppSelector } from '@/app/hooks';
import { toolboxStyles } from './styles';

/** Toolbox view: pick which explorer to view/edit. */
export function ToolboxPlayersView({
  onPick,
  onBack,
}: {
  onPick: (characterId: ID) => void;
  onBack: () => void;
}) {
  const { t } = useTranslation();
  const characters = useAppSelector(s => s.game.characters);

  if (characters.length === 0) {
    return (
      <View style={toolboxStyles.menu}>
        <Text style={toolboxStyles.label}>{t('toolbox.noCharacters')}</Text>
        <Pressable onPress={onBack} style={toolboxStyles.backBtn}>
          <Text style={toolboxStyles.backText}>{t('toolbox.back')}</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={toolboxStyles.menu}>
      {characters.map(c => (
        <Pressable
          key={c.id}
          onPress={() => onPick(c.id)}
          style={[toolboxStyles.menuRow, styles.playerRow]}>
          <View style={[styles.dot, { backgroundColor: c.color }]} />
          <Text style={toolboxStyles.menuRowText}>{c.name}</Text>
        </Pressable>
      ))}
      <Pressable onPress={onBack} style={toolboxStyles.backBtn}>
        <Text style={toolboxStyles.backText}>{t('toolbox.back')}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  playerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
});
