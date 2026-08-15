import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import type { ID, StatKey } from '@/types/shared';
import { STAT_KEYS } from '@/types/shared';
import type { StatTrack } from '@/modules/game-engine';
import { adjustStat } from '@/modules/game-engine';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { StatTrackSlider } from '../StatTrackSlider';
import { toolboxStyles } from './styles';

function cloneStats(stats: Record<StatKey, StatTrack>): Record<StatKey, StatTrack> {
  const clone = {} as Record<StatKey, StatTrack>;
  STAT_KEYS.forEach(key => {
    clone[key] = { ...stats[key] };
  });
  return clone;
}

interface Props {
  characterId: ID;
  onDone: () => void;
}

/** Toolbox view: edit one explorer's 4 stats on a local draft, confirm or cancel. */
export function ToolboxPlayerDetailView({ characterId, onDone }: Props) {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const character = useAppSelector(s => s.game.characters.find(c => c.id === characterId));
  const items = useAppSelector(s =>
    s.cards.drawn.filter(c => c.type === 'item' && c.ownerId === characterId),
  );
  const [draft, setDraft] = useState<Record<StatKey, StatTrack> | null>(() =>
    character ? cloneStats(character.stats) : null,
  );

  if (!character || !draft) return null;
  const original = character.stats;

  const updateIndex = (stat: StatKey, index: number) => {
    setDraft(prev => (prev ? { ...prev, [stat]: { ...prev[stat], index } } : prev));
  };

  const confirm = () => {
    STAT_KEYS.forEach(stat => {
      const delta = draft[stat].index - original[stat].index;
      if (delta !== 0) {
        dispatch(adjustStat({ characterId, stat, delta }));
      }
    });
    onDone();
  };

  return (
    <View style={toolboxStyles.menu}>
      <Text style={toolboxStyles.label}>{character.name}</Text>
      <Text style={toolboxStyles.label}>{t('toolbox.items')}</Text>
      {items.length === 0 ? (
        <Text style={toolboxStyles.backText}>{t('toolbox.noItems')}</Text>
      ) : (
        items.map(item => (
          <Text key={item.id} style={toolboxStyles.menuRowText}>
            • {item.name}
          </Text>
        ))
      )}
      {STAT_KEYS.map(stat => (
        <StatTrackSlider
          key={stat}
          stat={stat}
          track={draft[stat]}
          onChangeIndex={index => updateIndex(stat, index)}
        />
      ))}
      <Pressable onPress={confirm} style={toolboxStyles.rollBtn}>
        <Text style={toolboxStyles.rollBtnText}>{t('toolbox.confirm')}</Text>
      </Pressable>
      <Pressable onPress={onDone} style={toolboxStyles.backBtn}>
        <Text style={toolboxStyles.backText}>{t('toolbox.cancel')}</Text>
      </Pressable>
    </View>
  );
}
