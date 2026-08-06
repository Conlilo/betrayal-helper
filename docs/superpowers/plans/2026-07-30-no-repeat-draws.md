# No-Repeat Card & Room Draws Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Once a card has been drawn, it never appears in the card picker again — even after being discarded. Once a room tile is placed anywhere on the board, it never appears in the room picker again — unless it's removed from the board, which frees it back up.

**Architecture:** One additive field on `card-engine`'s Redux state (`drawnDefIds: string[]`, appended on draw, never removed on discard) filters `ResolutionSheet.tsx`'s card picker. `BoardScreen.tsx`'s room picker is filtered directly against the existing `rooms` (`PlacedRoom[]`) state — no new state needed there.

**Tech Stack:** React Native, TypeScript, Redux Toolkit, `react-i18next`, Jest (for the one new card-engine unit test).

## Global Constraints

- Design spec: `docs/superpowers/specs/2026-07-30-no-repeat-draws-design.md` — this plan implements it in full.
- `discardCard` must NOT be modified — `drawnDefIds` is intentionally a separate, append-only record from `drawn`, so discarding a card never makes its defId drawable again.
- The room-picker filter checks `rooms` **board-wide** (all floors), not just the current floor — a physical room tile is shared across the whole house.
- `resetCards`/`resetGame`-style resets must clear `drawnDefIds` for a fresh game — verify this falls out naturally from `resetCards` already returning `initialState`, don't add special-case reset logic.
- This project does not render RN UI trees in Jest — the one new test in this plan is for the pure `cardSlice` reducer logic only, not any UI component.

---

### Task 1: Add `drawnDefIds` to card-engine state

**Files:**
- Modify: `src/modules/card-engine/types.ts`
- Modify: `src/modules/card-engine/cardSlice.ts`
- Modify: `__tests__/App.test.tsx`

**Interfaces:**
- Produces: `CardState.drawnDefIds: string[]` — a new field on the existing card-engine Redux state. Task 2 reads it via `useAppSelector(s => s.cards.drawnDefIds)`.

- [ ] **Step 1: Write the failing test**

Read `__tests__/App.test.tsx` first (already known structure) to find the existing `describe('game-engine slice', ...)` block and the imports at the top of the file. Add a new `describe` block (or add to an existing card-engine-related one if one already exists — check first; based on prior investigation, none currently exists, so add a new one) with this test:

```ts
describe('card-engine slice', () => {
  it('keeps a defId in drawnDefIds after the card is discarded', () => {
    const def: CardDef = {
      defId: 'test-event-1',
      type: 'event',
      name: 'Test Event',
      description: 'A test card.',
    };
    let state = cardReducer(undefined, drawCard(def));
    expect(state.drawnDefIds).toContain('test-event-1');
    expect(state.drawn).toHaveLength(1);

    const instanceId = state.drawn[0].id;
    state = cardReducer(state, discardCard(instanceId));
    expect(state.drawn).toHaveLength(0);
    expect(state.drawnDefIds).toContain('test-event-1');
  });
});
```

Add the necessary imports at the top of `__tests__/App.test.tsx`:

```ts
import {
  cardReducer,
  drawCard,
  discardCard,
  type CardDef,
} from '@/modules/card-engine';
```

(Add this alongside the existing import block — don't duplicate an existing `@/modules/card-engine` import if one already exists in the file; merge into it instead. Check first.)

- [ ] **Step 2: Run the test to verify it fails**

Run: `npx jest __tests__/App.test.tsx -t "keeps a defId in drawnDefIds"`
Expected: FAIL — either a TypeScript error (`drawnDefIds` doesn't exist on `CardState` yet) or a runtime assertion failure (`state.drawnDefIds` is `undefined`).

- [ ] **Step 3: Add the field to `CardState`**

In `src/modules/card-engine/types.ts`, find:

```ts
export interface CardState {
  /** All cards that have been drawn this game, newest first. */
  drawn: CardInstance[];
}
```

Replace with:

```ts
export interface CardState {
  /** All cards that have been drawn this game, newest first. */
  drawn: CardInstance[];
  /** defIds ever drawn this game — persists even after discard, so a
   *  discarded card never re-enters the draw pool. */
  drawnDefIds: string[];
}
```

- [ ] **Step 4: Update `cardSlice.ts`**

Find:

```ts
const initialState: CardState = {
  drawn: [],
};
```

Replace with:

```ts
const initialState: CardState = {
  drawn: [],
  drawnDefIds: [],
};
```

Find the `drawCard` reducer:

```ts
    drawCard: {
      reducer(state, action: PayloadAction<CardInstance>) {
        state.drawn.unshift(action.payload);
      },
```

Replace with:

```ts
    drawCard: {
      reducer(state, action: PayloadAction<CardInstance>) {
        state.drawn.unshift(action.payload);
        if (!state.drawnDefIds.includes(action.payload.defId)) {
          state.drawnDefIds.push(action.payload.defId);
        }
      },
```

Do not change `discardCard`, `transferItem`, `loadCards`, or `resetCards`.

- [ ] **Step 5: Run the test to verify it passes**

Run: `npx jest __tests__/App.test.tsx -t "keeps a defId in drawnDefIds"`
Expected: PASS

- [ ] **Step 6: Run the full suite, type-check, and lint**

Run: `npx jest && npx tsc --noEmit && npx eslint src __tests__`
Expected: all green (9/9 tests — the 8 existing plus this new one; no tsc/eslint errors).

- [ ] **Step 7: Commit**

```bash
git add src/modules/card-engine/types.ts src/modules/card-engine/cardSlice.ts __tests__/App.test.tsx
git commit -m "feat(card-engine): track drawnDefIds so discarded cards never re-enter the draw pool"
```

---

### Task 2: Filter the card picker in `ResolutionSheet.tsx`

**Files:**
- Modify: `src/features/play/ResolutionSheet.tsx`
- Modify: `src/modules/i18n/locales/vi.ts` and `src/modules/i18n/locales/en.ts`

**Interfaces:**
- Consumes: `CardState.drawnDefIds` from Task 1, via `useAppSelector(s => s.cards.drawnDefIds)`.

- [ ] **Step 1: Add the i18n key**

In `src/modules/i18n/locales/vi.ts`, inside the `explore` block, add after `flowDone`:

```ts
    flowDone: 'Đã xử lý lượt. Khám phá tiếp hoặc kết thúc lượt.',
    noCardsLeft: 'Đã hết lá {{type}} để rút.',
```

In `src/modules/i18n/locales/en.ts`, inside the `explore` block, add after `flowDone`:

```ts
    flowDone: 'Turn resolved. Explore again or end the turn.',
    noCardsLeft: 'No more {{type}} cards left to draw.',
```

- [ ] **Step 2: Read the current file, then filter the picker**

Read `src/features/play/ResolutionSheet.tsx` in full first (it's a large file with a lot of hooks near the top) to find the exact current line numbers for its `useAppSelector` calls (to add the new one in a sensible spot near the others) and the card-picker JSX block — the plan's line numbers are approximate.

Add a new selector near the other `useAppSelector` calls at the top of the component:

```ts
  const drawnDefIds = useAppSelector(s => s.cards.drawnDefIds);
```

Find:

```tsx
              <ScrollView style={styles.list}>
                {CARD_DEFS_BY_TYPE[symbol].map(def => (
                  <Pressable
                    key={def.defId}
                    style={styles.row}
                    onPress={() => onPickCard(def)}>
                    <Text style={styles.rowName}>{def.name}</Text>
                  </Pressable>
                ))}
              </ScrollView>
```

Replace with:

```tsx
              {(() => {
                const availableDefs = CARD_DEFS_BY_TYPE[symbol].filter(
                  def => !drawnDefIds.includes(def.defId),
                );
                return availableDefs.length === 0 ? (
                  <Text style={styles.desc}>
                    {t('explore.noCardsLeft', { type: t(`${symbol}s.title`) })}
                  </Text>
                ) : (
                  <ScrollView style={styles.list}>
                    {availableDefs.map(def => (
                      <Pressable
                        key={def.defId}
                        style={styles.row}
                        onPress={() => onPickCard(def)}>
                        <Text style={styles.rowName}>{def.name}</Text>
                      </Pressable>
                    ))}
                  </ScrollView>
                );
              })()}
```

Note on `t(\`${symbol}s.title\`)`: `symbol` is `CardType` = `'event' | 'omen' | 'item'`, and the i18n namespaces are `events`/`omens`/`items` (plural, confirmed in both locale files — `events.title`, `omens.title`, `items.title`). This string-interpolation into a translation key is a bit unusual for this codebase (most `t()` calls use static keys) — if it feels fragile or `eslint`/`tsc` complain, an acceptable alternative is a small local lookup map instead:
```ts
const TYPE_LABEL_KEY: Record<CardType, string> = {
  event: 'events.title',
  omen: 'omens.title',
  item: 'items.title',
};
// ...
{t('explore.noCardsLeft', { type: t(TYPE_LABEL_KEY[symbol]) })}
```
Use whichever reads more consistently with the rest of this file — check how `capitalize(symbol)` (used a few lines above for `explore.pickCard`) is implemented, since that function already solves a similar "turn `symbol` into a display string" problem and might be reusable or a useful pattern reference.

- [ ] **Step 3: Type-check, lint, and run the suite**

Run: `npx tsc --noEmit && npx eslint src && npx jest`
Expected: no errors; 9/9 tests passing.

- [ ] **Step 4: Commit**

```bash
git add src/features/play/ResolutionSheet.tsx src/modules/i18n/locales/vi.ts src/modules/i18n/locales/en.ts
git commit -m "feat(play): filter card picker to exclude already-drawn cards"
```

---

### Task 3: Filter the room picker in `BoardScreen.tsx`

**Files:**
- Modify: `src/features/board/BoardScreen.tsx`
- Modify: `src/modules/i18n/locales/vi.ts` and `src/modules/i18n/locales/en.ts`

**Interfaces:** none new — this task only changes how existing `rooms` state (already selected via `useAppSelector(s => s.rooms.rooms)`, confirmed already present in this file) is used to derive the picker's option list.

- [ ] **Step 1: Add the i18n key**

In `src/modules/i18n/locales/vi.ts`, inside the `board` block, add after `pickRoom`:

```ts
    pickRoom: 'Đặt một phòng',
    noRoomsLeft: 'Đã hết phòng để đặt.',
```

In `src/modules/i18n/locales/en.ts`, inside the `board` block, add after `pickRoom`:

```ts
    pickRoom: 'Place a room',
    noRoomsLeft: 'No more rooms left to place.',
```

- [ ] **Step 2: Filter `floorDefs`/`randomDef`**

Find:

```ts
  const floorDefs = roomDefsForFloor(floor);
  const randomDef = () =>
    floorDefs[Math.floor(Math.random() * floorDefs.length)];
```

Replace with:

```ts
  const floorDefs = roomDefsForFloor(floor);
  const availableDefs = floorDefs.filter(
    def => !rooms.some(r => r.defId === def.defId),
  );
  const randomDef = () =>
    availableDefs[Math.floor(Math.random() * availableDefs.length)];
```

- [ ] **Step 3: Update the picker list rendering**

Find:

```tsx
            <ScrollView style={styles.sheetList}>
              {floorDefs.map(def => (
                <Pressable
                  key={def.defId}
                  style={styles.defRow}
                  onPress={() => onPickRoom(def.defId)}>
                  <Text style={styles.defName}>{def.name}</Text>
                  <Text style={styles.defDoors}>
                    {(def.symbols.map(s => SYMBOL_ICON[s]).join(' ') || '·')} ·{' '}
                    {def.doors.join(' · ') || '—'}
                  </Text>
                </Pressable>
              ))}
            </ScrollView>
```

Replace with:

```tsx
            {availableDefs.length === 0 ? (
              <Text style={styles.defDoors}>{t('board.noRoomsLeft')}</Text>
            ) : (
              <ScrollView style={styles.sheetList}>
                {availableDefs.map(def => (
                  <Pressable
                    key={def.defId}
                    style={styles.defRow}
                    onPress={() => onPickRoom(def.defId)}>
                    <Text style={styles.defName}>{def.name}</Text>
                    <Text style={styles.defDoors}>
                      {(def.symbols.map(s => SYMBOL_ICON[s]).join(' ') || '·')} ·{' '}
                      {def.doors.join(' · ') || '—'}
                    </Text>
                  </Pressable>
                ))}
              </ScrollView>
            )}
```

(`styles.defDoors` is reused here purely as a small muted-text style for the empty-state message — check it reads reasonably; if it looks off given its normal usage as a doors-list caption, use `styles.defName` or another existing muted-text style from this file's `StyleSheet` instead, whichever the file already has that fits a plain informational line.)

- [ ] **Step 4: Type-check, lint, and run the suite**

Run: `npx tsc --noEmit && npx eslint src && npx jest`
Expected: no errors; 9/9 tests passing.

- [ ] **Step 5: Commit**

```bash
git add src/features/board/BoardScreen.tsx src/modules/i18n/locales/vi.ts src/modules/i18n/locales/en.ts
git commit -m "feat(board): filter room picker to exclude already-placed rooms"
```

---

### Task 4: Build, deploy, and manually verify

**Files:** none (verification only).

- [ ] **Step 1: Build and deploy**

Run the project's established device-specific Release invocation (e.g. `npx react-native run-ios --no-packager --mode Release --udid 00008101-00124D2E36F1003A --extra-params "DEVELOPMENT_TEAM=G9R47GGCGM CODE_SIGN_STYLE=Automatic -allowProvisioningUpdates"`, or ask if the target device has changed).

- [ ] **Step 2: Cards never repeat, even after discard**

Draw an Event card (via Toolbox "🃏 Rút bài" or by exploring, if the room happens to have an event symbol still wired up), resolve it fully so it gets discarded (or manually discard it if there's a UI path to do so directly). Open the Event picker again (draw another Event) and confirm the previously-drawn card is **not** in the list. Repeat once more with a second card to confirm the exclusion accumulates (2 cards gone, not just the most recent one).

- [ ] **Step 3: Empty state for cards (optional, if feasible)**

If practical, draw enough cards of one type to exhaust the pool (or note the total count of that type and decide if this is worth actually exhausting during a manual pass) and confirm `explore.noCardsLeft` renders instead of an empty list. If exhausting a whole pool isn't practical in a quick manual pass, it's fine to skip this specific check — the filtering behavior from Step 2 is the important thing to verify.

- [ ] **Step 4: Rooms never repeat once placed**

Place a room. Open the room picker again (explore a new cell) and confirm that room def is no longer offered, including via the "🎲 Random" button (roll it several times and confirm the already-placed room never comes up).

- [ ] **Step 5: Removing a room frees it back up**

Remove the room placed in Step 4 from the board (using the existing "Xóa" room-removal feature). Open the room picker again and confirm that room def is available again.

No commit for this task — it's a verification checkpoint. If any check fails, fix the relevant task above and re-run from Step 1.
