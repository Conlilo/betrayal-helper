import React from 'react';
import { useTranslation } from 'react-i18next';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from '@/modules/ui';
import type { RootStackParamList } from './types';

import { HomeScreen } from '@/features/home/HomeScreen';
import { GameSetupScreen } from '@/features/game-setup/GameSetupScreen';
import { CharacterListScreen } from '@/features/character/CharacterListScreen';
import { BoardScreen } from '@/features/board/BoardScreen';
import { EventScreen } from '@/features/event/EventScreen';
import { OmenScreen } from '@/features/omen/OmenScreen';
import { ItemScreen } from '@/features/item/ItemScreen';
import { CombatScreen } from '@/features/combat/CombatScreen';
import { HauntSetupScreen } from '@/features/haunt-setup/HauntSetupScreen';
import { GameStateScreen } from '@/features/game-state/GameStateScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  const { t } = useTranslation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.surface },
        headerTintColor: colors.text,
        headerTitleStyle: { fontWeight: '700' },
        contentStyle: { backgroundColor: colors.background },
      }}>
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'HauntKeeper' }} />
      <Stack.Screen name="GameSetup" component={GameSetupScreen} options={{ title: t('gameSetup.title') }} />
      <Stack.Screen name="Characters" component={CharacterListScreen} options={{ title: t('characters.title') }} />
      <Stack.Screen name="Board" component={BoardScreen} options={{ title: t('board.title') }} />
      <Stack.Screen name="Events" component={EventScreen} options={{ title: t('events.title') }} />
      <Stack.Screen name="Omens" component={OmenScreen} options={{ title: t('omens.title') }} />
      <Stack.Screen name="Items" component={ItemScreen} options={{ title: t('items.title') }} />
      <Stack.Screen name="Combat" component={CombatScreen} options={{ title: t('combat.title') }} />
      <Stack.Screen name="HauntSetup" component={HauntSetupScreen} options={{ title: t('hauntSetup.title') }} />
      <Stack.Screen name="GameState" component={GameStateScreen} options={{ title: t('gameState.title') }} />
    </Stack.Navigator>
  );
}
