---
name: localize-data-to-app-language
description: Game data is authored in English but must display in the app's selected language (vi/en)
metadata:
  type: feedback
---

When adding game data (haunt stories, room effects, cards, etc.) the user is fine authoring/importing in English, but the app MUST display it translated to the currently selected language (i18next; app default is `vi`). Don't leave English-only data visible in the Vietnamese UI.

**Why:** The app is Vietnamese-first (DEFAULT_LANGUAGE = 'vi', cards already in Vietnamese); English data shown in a VI session is inconsistent.

**How to apply — established pattern (bilingual, select by locale):** English is the source; Vietnamese overrides live in a sibling VI map keyed by id/defId, and a getter returns VI when `lang === 'vi'` else falls back to English. `Lang = 'en' | 'vi'` is in `@/types/shared`. UI reads `i18n.language` (from `useTranslation()`), maps to `'vi' | 'en'`, and passes it to the getter.

Already done & wired:
- **Room effects**: `ROOM_EFFECTS_VI` map + `effectOfDef(defId, lang)` in `rooms.ts`; BoardScreen passes lang. (All ~35 effects translated.)
- **Haunt summaries**: `HAUNT_DEFS_VI` + `getHauntDef(id, lang)` / `getHauntDefs(lang)` in `data/haunts.ts`; HauntSetupScreen wired. (3 placeholder entries translated.)
- **Haunt stories**: `getHauntStory(id, lang)` / `getSecretsOfSurvival(id, lang)` with EN fallback. VI maps are **fully populated** — `TRAITOR_TOME_VI` (ids 1–101) and `SECRETS_OF_SURVIVAL_VI` (ids 1–100), split into `data/vi/traitor-1..4.ts` and `data/vi/secrets-1..4.ts` and merged in `traitorTome.vi.ts` / `secretsOfSurvival.vi.ts`. Heading glossary used (e.g. "Right Now" → "Ngay Lúc Này", "You Win When" → "Bạn Thắng Khi"); trait names (Speed/Might/Sanity/Knowledge) and room/proper names kept in English. Stories still aren't wired to a screen — when you add a haunt-story viewer, call `getHauntStory/getSecretsOfSurvival(id, i18nLang)`.

Still TODO: room NAMES are still English (only room effects localized).
