import type { HauntStory } from '../types';
import { SS_VI_1 } from './vi/secrets-1';
import { SS_VI_2 } from './vi/secrets-2';
import { SS_VI_3 } from './vi/secrets-3';
import { SS_VI_4 } from './vi/secrets-4';

/**
 * Vietnamese translations of SECRETS_OF_SURVIVAL (the heroes' side), keyed by
 * haunt id. The English source lives in `secretsOfSurvival.ts`;
 * `getSecretsOfSurvival` returns the VI story when the app language is `vi`,
 * falling back to English otherwise. Split into `vi/secrets-*.ts` and merged.
 */
export const SECRETS_OF_SURVIVAL_VI: Record<number, HauntStory> = {
  ...SS_VI_1,
  ...SS_VI_2,
  ...SS_VI_3,
  ...SS_VI_4,
};
