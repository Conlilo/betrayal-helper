/**
 * storage — persistence layer. Currently backed by AsyncStorage via
 * redux-persist (configured in src/app/store.ts). SQLite is planned (see spec).
 */
export { createId } from './id';
export { default as storage } from '@react-native-async-storage/async-storage';
