import type { Lang } from '@/types/shared';
import type { HauntDef } from '../types';

/**
 * Starter Haunt definitions. The base game has 50 haunts — add the rest to
 * this table (or load from a database, see "Haunt Database" in the spec).
 */
export const HAUNT_DEFS: HauntDef[] = [
  {
    hauntId: 1,
    name: 'The Walking Dead',
    premise: 'A zombie outbreak. The traitor raises the dead to overwhelm the heroes.',
    heroGoal: 'Destroy the source of the zombies and escape the house.',
    traitorGoal: 'Kill all the heroes with your growing horde of zombies.',
  },
  {
    hauntId: 2,
    name: 'The Webs of Fate',
    premise: 'A giant spider nests in the house and the traitor feeds it.',
    heroGoal: 'Kill the spider before it cocoons every explorer.',
    traitorGoal: 'Cocoon all heroes to feed the spider.',
  },
  {
    hauntId: 3,
    name: 'The Mad Scientist',
    premise: 'A traitor builds a monster from spare parts in the basement.',
    heroGoal: 'Destroy the monster and its creator.',
    traitorGoal: 'Animate the monster and use it to kill the heroes.',
  },
];

export function findHaunt(hauntId: number): HauntDef | undefined {
  return HAUNT_DEFS.find(h => h.hauntId === hauntId);
}

/**
 * Vietnamese translations of the haunt summaries, keyed by hauntId. The data is
 * authored in English (HAUNT_DEFS); the getters below return the VI text when
 * the app language is `vi`, falling back to English when none exists here.
 */
export const HAUNT_DEFS_VI: Record<number, HauntDef> = {
  1: {
    hauntId: 1,
    name: 'Xác Sống',
    premise: 'Một đợt bùng phát zombie. Kẻ phản bội triệu hồi người chết để áp đảo các anh hùng.',
    heroGoal: 'Phá hủy nguồn gốc zombie và thoát khỏi ngôi nhà.',
    traitorGoal: 'Giết tất cả anh hùng bằng đàn zombie ngày càng đông.',
  },
  2: {
    hauntId: 2,
    name: 'Mạng Lưới Số Phận',
    premise: 'Một con nhện khổng lồ làm tổ trong nhà và kẻ phản bội nuôi nó.',
    heroGoal: 'Giết con nhện trước khi nó bọc kén mọi nhà thám hiểm.',
    traitorGoal: 'Bọc kén tất cả anh hùng để nuôi con nhện.',
  },
  3: {
    hauntId: 3,
    name: 'Nhà Khoa Học Điên',
    premise: 'Kẻ phản bội chế tạo một con quái vật từ phụ tùng dưới tầng hầm.',
    heroGoal: 'Phá hủy con quái vật và kẻ tạo ra nó.',
    traitorGoal: 'Hồi sinh con quái vật và dùng nó giết các anh hùng.',
  },
};

/** A haunt summary in the given language (falls back to English). */
export function getHauntDef(hauntId: number, lang: Lang = 'en'): HauntDef | undefined {
  if (lang === 'vi' && HAUNT_DEFS_VI[hauntId]) return HAUNT_DEFS_VI[hauntId];
  return findHaunt(hauntId);
}

/** The full haunt list localized to the given language. */
export function getHauntDefs(lang: Lang = 'en'): HauntDef[] {
  return HAUNT_DEFS.map(h => getHauntDef(h.hauntId, lang) ?? h);
}
