import { createContext, useContext } from 'react';
import type { CardType } from '@/modules/card-engine';

export interface ResolutionContextValue {
  requestDraw: (symbol: CardType) => void;
}

export const ResolutionContext = createContext<ResolutionContextValue | null>(null);

/** Trigger a manual card draw of `symbol` for the current turn's explorer. */
export function useRequestCardDraw() {
  const ctx = useContext(ResolutionContext);
  if (!ctx) {
    throw new Error('useRequestCardDraw must be used within ResolutionSheetProvider');
  }
  return ctx.requestDraw;
}
