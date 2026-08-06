import React, { useState } from 'react';
import type { ID } from '@/types/shared';
import type { CardType } from '@/modules/card-engine';
import { useAppSelector } from '@/app/hooks';
import { ResolutionSheet } from './ResolutionSheet';
import { ResolutionContext } from './resolutionContext';

interface DrawRequest {
  explorerId: ID;
  symbol: CardType;
}

export { useRequestCardDraw } from './resolutionContext';

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
