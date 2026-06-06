/**
 * ai-engine — controls the Hero or Traitor side when a player is missing
 * (Solo Mode / fewer players). Per the spec, AI is implemented AFTER the core
 * match-management system is stable, so this module currently only defines the
 * contract the rest of the app will program against.
 */
import type { ID, Side } from '@/types/shared';

export interface AiSuggestion {
  characterId: ID;
  /** Human-readable recommended action, e.g. "Move to Basement and attack". */
  action: string;
  rationale: string;
}

export interface AiController {
  side: Side;
  /** Produce suggested moves for every character the AI controls. */
  planTurn(): AiSuggestion[];
}

/** Placeholder controller — returns no suggestions until the AI is built. */
export const createStubAiController = (side: Side): AiController => ({
  side,
  planTurn: () => [],
});
