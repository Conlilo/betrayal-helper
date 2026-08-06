import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import type { CardType } from '@/modules/card-engine';
import { useRequestCardDraw } from '@/features/play/resolutionContext';
import { useAppSelector } from '@/app/hooks';
import { toolboxStyles } from './styles';

const TYPES: { symbol: CardType; labelKey: string }[] = [
  { symbol: 'event', labelKey: 'events.draw' },
  { symbol: 'omen', labelKey: 'omens.draw' },
  { symbol: 'item', labelKey: 'items.draw' },
];

/** Toolbox view: pick a card type, draw it for whoever's turn it is. */
export function ToolboxDrawView({
  onDraw,
  onBack,
}: {
  onDraw: () => void;
  onBack: () => void;
}) {
  const { t } = useTranslation();
  const requestDraw = useRequestCardDraw();
  const activeCharacterId = useAppSelector(s => s.game.activeCharacterId);

  const pick = (symbol: CardType) => {
    requestDraw(symbol);
    onDraw();
  };

  return (
    <View style={toolboxStyles.menu}>
      {activeCharacterId ? (
        <>
          <Text style={toolboxStyles.label}>{t('toolbox.pickCardType')}</Text>
          {TYPES.map(({ symbol, labelKey }) => (
            <Pressable
              key={symbol}
              onPress={() => pick(symbol)}
              style={toolboxStyles.menuRow}>
              <Text style={toolboxStyles.menuRowText}>{t(labelKey)}</Text>
            </Pressable>
          ))}
        </>
      ) : (
        <Text style={toolboxStyles.label}>{t('toolbox.noCharacters')}</Text>
      )}

      <Pressable onPress={onBack} style={toolboxStyles.backBtn}>
        <Text style={toolboxStyles.backText}>{t('toolbox.back')}</Text>
      </Pressable>
    </View>
  );
}
