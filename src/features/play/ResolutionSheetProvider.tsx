import React, { createContext, useContext, useState } from 'react';
import type { ID } from '@/types/shared';
import type { CardType } from '@/modules/card-engine';
import { useAppSelector } from '@/app/hooks';
import { ResolutionSheet } from './ResolutionSheet';

interface DrawRequest {
  explorerId: ID;
  symbol: CardType;
}

interface ResolutionContextValue {
  requestDraw: (symbol: CardType) => void;
}

const ResolutionContext = createContext<ResolutionContextValue | null>(null);

/**
 * Mounts the single, app-wide ResolutionSheet and exposes `requestDraw` so
 * any screen can trigger a manual card draw for whoever's turn it is.
 */
export function ResolutionSheetProvider({ children }: { children: React.ReactNode }) {
  const activeCharacterId = useAppSelector(s => s.game.activeCharacterId);
  const [pending, setPending] = useState<DrawRequest | null>(null);

  const requestDraw = (symbol: CardType) => {
    if (!activeCharacterId) return;
    setPending({ explorerId: activeCharacterId, symbol });
  };

  return (
    <ResolutionContext.Provider value={{ requestDraw }}>
      {children}
      <ResolutionSheet
        visible={pending !== null}
        explorerId={pending?.explorerId ?? null}
        symbol={pending?.symbol ?? null}
        onClose={() => setPending(null)}
      />
    </ResolutionContext.Provider>
  );
}

/** Trigger a manual card draw of `symbol` for the current turn's explorer. */
export function useRequestCardDraw() {
  const ctx = useContext(ResolutionContext);
  if (!ctx) {
    throw new Error('useRequestCardDraw must be used within ResolutionSheetProvider');
  }
  return ctx.requestDraw;
}
