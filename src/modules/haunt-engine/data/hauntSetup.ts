import type { Lang } from '@/types/shared';
import type { HauntStory } from '../types';
import { getHauntStory } from './traitorTome';
import { getSecretsOfSurvival } from './secretsOfSurvival';
import { findHaunt } from './haunts';

/** The win-condition section heading, in both languages. */
const WIN_HEADING = ['You Win When', 'Bạn Thắng Khi'];

function winCondition(story: HauntStory | undefined): string | undefined {
  if (!story) return undefined;
  const sec = story.sections.find(s =>
    WIN_HEADING.some(h => s.heading.includes(h)),
  );
  return sec?.body;
}

export interface HauntSetup {
  id: number;
  name: string;
  heroGoal: string;
  traitorGoal: string;
}

/**
 * Build a localized haunt setup (name + win conditions) for any haunt id by
 * pulling the title and "You Win When" sections from the traitor's (Traitor's
 * Tome) and heroes' (Secrets of Survival) stories. Falls back to HAUNT_DEFS.
 */
export function getHauntSetup(hauntId: number, lang: Lang = 'en'): HauntSetup {
  const traitor = getHauntStory(hauntId, lang);
  const hero = getSecretsOfSurvival(hauntId, lang);
  const def = findHaunt(hauntId);
  return {
    id: hauntId,
    name: traitor?.title ?? hero?.title ?? def?.name ?? `Haunt ${hauntId}`,
    heroGoal: winCondition(hero) ?? def?.heroGoal ?? '',
    traitorGoal: winCondition(traitor) ?? def?.traitorGoal ?? '',
  };
}
