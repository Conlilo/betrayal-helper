import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import type { CardType } from '@/modules/card-engine';
import { useRequestCardDraw } from '@/features/play/ResolutionSheetProvider';
import { toolboxStyles } from './styles';

const TYPES: { symbol: CardType; labelKey: string }[] = [
  { symbol: 'event', labelKey: 'events.draw' },
  { symbol: 'omen', labelKey: 'omens.draw' },
  { symbol: 'item', labelKey: 'items.draw' },
];

/** Toolbox view: pick a card type, draw it for whoever's turn it is. */
export function ToolboxDrawView({ onDraw }: { onDraw: () => void }) {
  const { t } = useTranslation();
  const requestDraw = useRequestCardDraw();

  const pick = (symbol: CardType) => {
    requestDraw(symbol);
    onDraw();
  };

  return (
    <View style={toolboxStyles.menu}>
      <Text style={toolboxStyles.label}>{t('toolbox.pickCardType')}</Text>
      {TYPES.map(({ symbol, labelKey }) => (
        <Pressable
          key={symbol}
          onPress={() => pick(symbol)}
          style={toolboxStyles.menuRow}>
          <Text style={toolboxStyles.menuRowText}>{t(labelKey)}</Text>
        </Pressable>
      ))}
    </View>
  );
}
