import React, { useState } from 'react';
import { Modal, Pressable, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import type { ID } from '@/types/shared';
import { toolboxStyles } from './styles';
import { ToolboxDiceView } from './ToolboxDiceView';
import { ToolboxDrawView } from './ToolboxDrawView';
import { ToolboxPlayersView } from './ToolboxPlayersView';
import { ToolboxPlayerDetailView } from './ToolboxPlayerDetailView';

type ToolboxView = 'menu' | 'dice' | 'drawType' | 'players' | 'playerDetail';

/** Header toolbox button + modal, shown on in-game screens only. */
export function ToolboxMenu() {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<ToolboxView>('menu');
  const [diceCount, setDiceCount] = useState(1);
  const [selectedPlayerId, setSelectedPlayerId] = useState<ID | null>(null);

  const close = () => {
    setOpen(false);
    setView('menu');
  };

  const openGameState = () => {
    close();
    navigation.navigate('GameState' as never);
  };

  return (
    <>
      <Pressable onPress={() => setOpen(true)} style={toolboxStyles.trigger} hitSlop={8}>
        <Text style={toolboxStyles.triggerIcon}>🧰</Text>
      </Pressable>

      <Modal visible={open} transparent animationType="slide" onRequestClose={close}>
        <View style={toolboxStyles.backdrop}>
          <View style={toolboxStyles.sheet}>
            <View style={toolboxStyles.handle} />
            <Pressable onPress={close} style={toolboxStyles.closeBtn} hitSlop={8}>
              <Text style={toolboxStyles.closeText}>✕</Text>
            </Pressable>

            {view === 'menu' ? (
              <View style={toolboxStyles.menu}>
                <MenuRow label={t('toolbox.gameState')} onPress={openGameState} />
                <MenuRow label={t('toolbox.rollDice')} onPress={() => setView('dice')} />
                <MenuRow label={t('toolbox.drawCard')} onPress={() => setView('drawType')} />
                <MenuRow label={t('toolbox.players')} onPress={() => setView('players')} />
              </View>
            ) : null}

            {view === 'dice' ? (
              <ToolboxDiceView
                count={diceCount}
                onChangeCount={setDiceCount}
                onBack={() => setView('menu')}
              />
            ) : null}

            {view === 'drawType' ? (
              <ToolboxDrawView onDraw={close} onBack={() => setView('menu')} />
            ) : null}

            {view === 'players' ? (
              <ToolboxPlayersView
                onPick={id => {
                  setSelectedPlayerId(id);
                  setView('playerDetail');
                }}
                onBack={() => setView('menu')}
              />
            ) : null}

            {view === 'playerDetail' && selectedPlayerId ? (
              <ToolboxPlayerDetailView
                characterId={selectedPlayerId}
                onDone={() => setView('players')}
              />
            ) : null}
          </View>
        </View>
      </Modal>
    </>
  );
}

function MenuRow({ label, onPress }: { label: string; onPress: () => void }) {
  return (
    <Pressable onPress={onPress} style={toolboxStyles.menuRow}>
      <Text style={toolboxStyles.menuRowText}>{label}</Text>
    </Pressable>
  );
}
