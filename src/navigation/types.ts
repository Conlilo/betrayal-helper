import type { NativeStackScreenProps } from '@react-navigation/native-stack';

/** All routes in the app and their params. */
export type RootStackParamList = {
  Home: undefined;
  GameSetup: undefined;
  Characters: undefined;
  Board: undefined;
  Events: undefined;
  Omens: undefined;
  Items: undefined;
  Combat: undefined;
  HauntSetup: undefined;
  GameState: undefined;
};

export type RootScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
