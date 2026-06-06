import type { ID } from '@/types/shared';

/**
 * Lightweight unique id generator. Avoids a native uuid dependency.
 * Good enough for client-side game entity ids (not cryptographic).
 */
export function createId(prefix = 'id'): ID {
  const rand = Math.random().toString(36).slice(2, 10);
  const time = Date.now().toString(36);
  return `${prefix}_${time}${rand}`;
}
