import type { Lang, StatKey } from '@/types/shared';
import { getHauntStory } from './traitorTome';

/**
 * A setup action the app can auto-apply for a step. Steps with no action are
 * pure checklist items (the game master does them physically / on the board).
 */
export type SetupAction =
  | { type: 'addToken'; roomDefId: string; label: string; color?: string }
  | { type: 'adjustTrait'; stat: StatKey; delta: number } // applied to the traitor
  | { type: 'moveTraitor'; roomDefId: string };

/** An authored setup step (bilingual text + optional auto actions). */
export interface HauntSetupStep {
  en: string;
  vi: string;
  actions?: SetupAction[];
}

/** A setup step resolved to the current language. */
export interface ResolvedSetupStep {
  text: string;
  actions: SetupAction[];
}

const RIGHT_NOW_HEADINGS = ['Right Now', 'Ngay Lúc Này'];

/**
 * Authored, structured setup steps with auto-apply actions. Haunts not listed
 * here fall back to a checklist derived from their "Right Now" story section, so
 * every haunt still gets a step-by-step guide — just without auto actions yet.
 * TODO: author the rest (an agent can draft them from the Right Now sections).
 */
export const HAUNT_SETUPS: Record<number, HauntSetupStep[]> = {
  55: [
    {
      en: 'Your explorer has turned traitor (Medusa).',
      vi: 'Nhân vật của bạn đã hóa traitor (Medusa).',
    },
    {
      en: "If the Statuary Corridor isn't in play, search the room stack, place it, and shuffle.",
      vi: 'Nếu Statuary Corridor chưa có trên bàn: tìm trong chồng phòng, đặt vào, rồi xáo.',
    },
    {
      en: 'Put your figure in the Statuary Corridor.',
      vi: 'Đặt figure traitor vào Statuary Corridor.',
      actions: [{ type: 'moveTraitor', roomDefId: 'statuary-corridor' }],
    },
    {
      en: 'Put an orange Statue token (face-down) in each room with an item or omen symbol.',
      vi: 'Đặt token Statue (cam, úp) vào mỗi phòng có symbol Item hoặc Omen.',
    },
    {
      en: "If the Armor card isn't in play, find it in the item stack/discard, take it, then shuffle.",
      vi: 'Nếu Armor chưa có: tìm trong chồng Item + chồng bài bỏ, lấy nó, rồi xáo.',
    },
    {
      en: 'Gain 2 Might and 1 Speed.',
      vi: 'Nhận 2 Might và 1 Speed.',
      actions: [
        { type: 'adjustTrait', stat: 'might', delta: 2 },
        { type: 'adjustTrait', stat: 'speed', delta: 1 },
      ],
    },
    {
      en: 'Set aside Might Roll and Sanity Roll tokens, each equal to the number of heroes.',
      vi: 'Để riêng token Might Roll và Sanity Roll, mỗi loại bằng số hero.',
    },
  ],
};

/** Fallback: split the haunt's "Right Now" section into checklist steps. */
function fallbackSteps(hauntId: number, lang: Lang): ResolvedSetupStep[] {
  const story = getHauntStory(hauntId, lang);
  const section = story?.sections.find(s =>
    RIGHT_NOW_HEADINGS.some(h => s.heading.includes(h)),
  );
  if (!section) return [];
  return section.body
    .split('\n')
    .map(line => line.trim())
    .filter(Boolean)
    .map(text => ({ text, actions: [] as SetupAction[] }));
}

/**
 * The step-by-step setup guide for a haunt in the given language. Uses authored
 * steps (with auto actions) when available, else a checklist from the story.
 */
export function getHauntSetupSteps(
  hauntId: number,
  lang: Lang = 'en',
): ResolvedSetupStep[] {
  const authored = HAUNT_SETUPS[hauntId];
  if (authored) {
    return authored.map(s => ({
      text: lang === 'vi' ? s.vi : s.en,
      actions: s.actions ?? [],
    }));
  }
  return fallbackSteps(hauntId, lang);
}
