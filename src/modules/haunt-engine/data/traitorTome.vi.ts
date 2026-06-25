import type { HauntStory } from '../types';
import { TT_VI_1 } from './vi/traitor-1';
import { TT_VI_2 } from './vi/traitor-2';
import { TT_VI_3 } from './vi/traitor-3';
import { TT_VI_4 } from './vi/traitor-4';

/**
 * Vietnamese translations of TRAITOR_TOME (the traitor's side), keyed by haunt
 * id. The English source lives in `traitorTome.ts`; `getHauntStory` returns the
 * VI story when the app language is `vi`, falling back to English otherwise.
 * Translations are split into `vi/traitor-*.ts` part files and merged here.
 */
export const TRAITOR_TOME_VI: Record<number, HauntStory> = {
  ...TT_VI_1,
  ...TT_VI_2,
  ...TT_VI_3,
  ...TT_VI_4,
};
