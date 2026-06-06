import React, { useEffect } from 'react';
import { ActivityIndicator, StatusBar, StyleSheet, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {
  NavigationContainer,
  DarkTheme,
  type Theme as NavTheme,
} from '@react-navigation/native';

import { store, persistor } from './store';
import { useAppSelector } from './hooks';
import { RootNavigator } from '@/navigation/RootNavigator';
import { colors } from '@/modules/ui';
import i18n from '@/modules/i18n';

const navTheme: NavTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: colors.background,
    card: colors.surface,
    text: colors.text,
    primary: colors.primary,
    border: colors.border,
  },
};

function Loading() {
  return (
    <View style={styles.loading}>
      <ActivityIndicator color={colors.primary} size="large" />
    </View>
  );
}

/** Keeps i18next in sync with the persisted language preference. */
function LanguageSync({ children }: { children: React.ReactNode }) {
  const language = useAppSelector(s => s.settings.language);
  useEffect(() => {
    if (i18n.language !== language) {
      i18n.changeLanguage(language);
    }
  }, [language]);
  return <>{children}</>;
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
});

export default function App() {
  return (
    <GestureHandlerRootView style={styles.root}>
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <LanguageSync>
            <SafeAreaProvider>
              <StatusBar barStyle="light-content" backgroundColor={colors.surface} />
              <NavigationContainer theme={navTheme}>
                <RootNavigator />
              </NavigationContainer>
            </SafeAreaProvider>
          </LanguageSync>
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
}
