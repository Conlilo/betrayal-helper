# Toolbox Menu (Batch 2) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remove the automatic room-exploration card draw, lift `ResolutionSheet` to a global, context-driven provider so any in-game screen's Toolbox can trigger a manual card draw for whoever's turn it is, and add two new Toolbox menu items: manual "Draw Card" (pick a type) and "Player Info" (edit any explorer's 4 stats via draft + confirm/cancel).

**Architecture:** One new React Context provider (`ResolutionSheetProvider`) mounted once in `App.tsx`, replacing `BoardScreen`'s local `resolve` state + inline `<ResolutionSheet>`. `ToolboxMenu` (currently one flat file from Batch 1) is restructured into a small folder: a shell component owning the modal + view-routing state, plus one file per view. Two new views (`ToolboxDrawView`, `ToolboxPlayersView`, `ToolboxPlayerDetailView`) are added; the existing `ToolboxDiceView` is extracted unchanged from Batch 1's inline code. Reuses `StatTrackSlider` (already built) for the stat-editing UI, and the existing `adjustStat` reducer (no Redux/state-shape changes).

**Tech Stack:** React Native, TypeScript, `react-i18next`, React Context (`createContext`/`useContext`), existing `Modal` pattern.

## Global Constraints

- Design spec: `docs/superpowers/specs/2026-07-30-toolbox-menu-batch-2-design.md` — this plan implements it in full.
- `ResolutionSheet.tsx` itself is **not modified** — its prop contract (`{ visible, explorerId: ID | null, symbol: CardType | null, onClose }`) stays exactly as-is; only *who renders it and how it's triggered* changes.
- The manually-drawn card is always attributed to `state.game.activeCharacterId` — never let the caller pass an arbitrary explorer id.
- `adjustStat`'s existing `{characterId, stat, delta}` shape is reused as-is for Player Info's confirm step — no new reducer.
- This project does not render RN UI trees in Jest — no new Jest tests for any of the new toolbox view components.
- **Do not build/deploy to a device until this entire plan is complete.** The human partner wants Batch 1 (already done) and Batch 2 (this plan) verified together in one on-device build — Task 6 below is the first point in either batch where an actual build happens.

---

### Task 1: Create `ResolutionSheetProvider` and mount it in `App.tsx`

**Files:**
- Create: `src/features/play/ResolutionSheetProvider.tsx`
- Modify: `src/app/App.tsx`

**Interfaces:**
- Produces: `ResolutionSheetProvider({ children })` (React component) and `useRequestCardDraw(): (symbol: CardType) => void` (hook, throws if called outside the provider). Task 4 imports `useRequestCardDraw` from `@/features/play/ResolutionSheetProvider`.

- [ ] **Step 1: Read the current files first**

Read `src/features/play/ResolutionSheet.tsx` (just the top ~60 lines, for the exact `ResolutionSheetProps` shape — already known to be `{ visible: boolean; explorerId: ID | null; symbol: CardType | null; onClose: () => void }`, confirm it matches) and `src/app/App.tsx` in full (~79 lines) to confirm the current provider nesting order before inserting a new one.

- [ ] **Step 2: Write `ResolutionSheetProvider.tsx`**

```tsx
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
```

- [ ] **Step 3: Mount it in `App.tsx`**

Find:

```tsx
            <SafeAreaProvider>
              <StatusBar barStyle="light-content" backgroundColor={colors.surface} />
              <NavigationContainer theme={navTheme}>
                <RootNavigator />
              </NavigationContainer>
            </SafeAreaProvider>
```

Replace with:

```tsx
            <SafeAreaProvider>
              <StatusBar barStyle="light-content" backgroundColor={colors.surface} />
              <ResolutionSheetProvider>
                <NavigationContainer theme={navTheme}>
                  <RootNavigator />
                </NavigationContainer>
              </ResolutionSheetProvider>
            </SafeAreaProvider>
```

Add the import near the other feature imports:

```ts
import { ResolutionSheetProvider } from '@/features/play/ResolutionSheetProvider';
```

- [ ] **Step 4: Type-check and lint**

Run: `npx tsc --noEmit && npx eslint src/features/play/ResolutionSheetProvider.tsx src/app/App.tsx`
Expected: no errors. (It's expected/fine that nothing calls `useRequestCardDraw` yet — that's Task 4.)

- [ ] **Step 5: Commit**

```bash
git add src/features/play/ResolutionSheetProvider.tsx src/app/App.tsx
git commit -m "feat(play): add global ResolutionSheetProvider for toolbox-triggered card draws"
```

---

### Task 2: Remove the room-exploration auto-draw from `BoardScreen.tsx`

**Files:**
- Modify: `src/features/board/BoardScreen.tsx`

**Interfaces:** none new — this task only removes code.

- [ ] **Step 1: Read the current file's relevant sections**

Read `src/features/board/BoardScreen.tsx` around lines 1-50 (imports), 85-100 (`justPlaced`/`resolve` state), 215-240 (the `justPlaced` effect), and 535-556 (the `<ResolutionSheet>` render) to confirm exact current content before editing (line numbers may have drifted slightly since this plan was written).

- [ ] **Step 2: Trim the `justPlaced` effect**

Find (the effect body):

```ts
  useEffect(() => {
    if (!justPlaced) return;
    const room = roomAt(rooms, floor, justPlaced.x, justPlaced.y);
    if (!room) return;
    dispatch(
      setCharacterRoom({
        characterId: justPlaced.charId,
        roomId: room.id,
        roomName: room.name,
      }),
    );
    const cardSymbols = cardSymbolsOf(symbolsOfDef(justPlaced.defId));
    if (cardSymbols.length > 0) {
      setResolve({ explorerId: justPlaced.charId, queue: cardSymbols });
    }
    setActiveCharId(null);
    setJustPlaced(null);
  }, [rooms, justPlaced, floor, dispatch]);
```

Replace with (keep the token-move dispatch and the two `set...(null)` cleanup calls; remove only the card-symbol computation and `setResolve` call):

```ts
  useEffect(() => {
    if (!justPlaced) return;
    const room = roomAt(rooms, floor, justPlaced.x, justPlaced.y);
    if (!room) return;
    dispatch(
      setCharacterRoom({
        characterId: justPlaced.charId,
        roomId: room.id,
        roomName: room.name,
      }),
    );
    setActiveCharId(null);
    setJustPlaced(null);
  }, [rooms, justPlaced, floor, dispatch]);
```

- [ ] **Step 3: Remove the `resolve` state**

Find:

```ts
  // A room may carry several card symbols; resolve them one at a time, with
  // the remaining symbols held in a queue.
  const [resolve, setResolve] = useState<
    { explorerId: ID; queue: CardType[] } | null
  >(null);
```

Delete this whole block (both the comment and the `useState` call).

- [ ] **Step 4: Remove the `<ResolutionSheet>` render**

Find:

```tsx
      {/* Card resolution for a freshly explored symbol room. Resolve each of
          the room's card symbols in turn, advancing the queue on close. */}
      <ResolutionSheet
        visible={resolve !== null}
        explorerId={resolve?.explorerId ?? null}
        symbol={resolve?.queue[0] ?? null}
        onClose={() =>
          setResolve(prev => {
            const rest = prev?.queue.slice(1) ?? [];
            return rest.length > 0 && prev
              ? { explorerId: prev.explorerId, queue: rest }
              : null;
          })
        }
      />
```

Delete this whole block. Leave the enclosing `<View>` (or whatever wraps it) otherwise intact.

- [ ] **Step 5: Remove now-unused imports**

Confirm each is unused elsewhere in the file (a plain text search within the file, not the whole codebase — these are already known from prior investigation to be used only for this feature), then remove:

- `symbolsOfDef` (from the room-engine import)
- `cardSymbolsOf` (from the room-engine import)
- `import { ResolutionSheet } from '@/features/play/ResolutionSheet';` (whole line)
- `import type { CardType } from '@/modules/card-engine';` (whole line — confirm `CardType` isn't used elsewhere in this file first; it was only used in the `resolve` state's type, which Step 3 removed)

Leave every other import untouched — `symbolsOfDef`/`cardSymbolsOf` may be imported alongside other still-used room-engine functions in the same `import { ... } from '@/modules/room-engine'` line; only remove those two names from that line, not the whole line, unless they were the only names in it.

- [ ] **Step 6: Type-check, lint, and run the suite**

Run: `npx tsc --noEmit && npx eslint src && npx jest`
Expected: no errors (a leftover unused import would show as an eslint error, which is exactly what this step catches); 8/8 tests still passing.

- [ ] **Step 7: Commit**

```bash
git add src/features/board/BoardScreen.tsx
git commit -m "refactor(board): remove auto-draw-on-explore, card drawing moves to toolbox"
```

---

### Task 3: Restructure `ToolboxMenu` into a folder; extract shared chrome styles and the dice view

**Files:**
- Create: `src/modules/ui/components/toolbox/styles.ts`
- Create: `src/modules/ui/components/toolbox/ToolboxDiceView.tsx`
- Create: `src/modules/ui/components/toolbox/ToolboxMenu.tsx` (new location)
- Delete: `src/modules/ui/components/ToolboxMenu.tsx` (old location)
- Modify: `src/modules/ui/index.ts` (update the export path)

**Interfaces:**
- Produces: same public `ToolboxMenu()` component as Batch 1 (still prop-less, still exported as `ToolboxMenu` from `@/modules/ui`) — this task is a pure refactor, no behavior change. Also produces `toolboxStyles` (default export or named export from `styles.ts`) and `ToolboxDiceView()` (prop-less, self-contained dice-roll view), both consumed by the shell in this same task, and by Tasks 4-5's new view files.

This task is a **pure refactor** — behavior must be identical to Batch 1 after it lands. Verify by comparing the rendered menu/dice flow mentally against Batch 1's `ToolboxMenu.tsx` (read it first, in full, before starting).

- [ ] **Step 1: Read the current `ToolboxMenu.tsx` in full**

Read `src/modules/ui/components/ToolboxMenu.tsx` (the Batch 1 file, ~268 lines) completely — you'll be splitting this exact code into 3 files with zero behavior change.

- [ ] **Step 2: Create `toolbox/styles.ts`** with the *shared* chrome styles (used by the shell and every view): trigger, backdrop, sheet, handle, closeBtn, closeText, menu, menuRow, menuRowText, label, rollBtn, rollBtnText, backBtn, backText.

```ts
import { StyleSheet } from 'react-native';
import { colors, radius, spacing, typography } from '../../theme';

/** Chrome shared by the toolbox shell and every one of its views. */
export const toolboxStyles = StyleSheet.create({
  trigger: {
    padding: spacing.xs,
  },
  triggerIcon: {
    fontSize: typography.heading,
  },
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'flex-end',
  },
  sheet: {
    backgroundColor: colors.surface,
    borderTopLeftRadius: radius.lg,
    borderTopRightRadius: radius.lg,
    padding: spacing.md,
    gap: spacing.sm,
  },
  handle: {
    alignSelf: 'center',
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.border,
    marginBottom: spacing.xs,
  },
  closeBtn: {
    position: 'absolute',
    top: spacing.sm,
    right: spacing.md,
  },
  closeText: {
    color: colors.textMuted,
    fontSize: typography.heading,
  },
  menu: {
    gap: spacing.sm,
  },
  menuRow: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: radius.sm,
    backgroundColor: colors.surfaceAlt,
  },
  menuRowText: {
    color: colors.text,
    fontSize: typography.body,
    fontWeight: '600',
  },
  label: {
    color: colors.textMuted,
    fontSize: typography.caption,
    fontWeight: '600',
  },
  rollBtn: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.sm + 2,
    borderRadius: radius.md,
    alignItems: 'center',
  },
  rollBtnText: {
    color: colors.text,
    fontSize: typography.body,
    fontWeight: '700',
  },
  backBtn: {
    alignItems: 'center',
    paddingVertical: spacing.xs,
  },
  backText: {
    color: colors.textMuted,
    fontSize: typography.caption,
    fontWeight: '600',
  },
});
```

(Import path is `'../../theme'` because this file lives two levels below `src/modules/ui/` — at `src/modules/ui/components/toolbox/styles.ts` — matching how `src/modules/ui/components/StatTrackSlider.tsx` imports theme via `'../theme'` one level up; confirm the relative path resolves correctly when you create the file, adjust if your editor/tsc disagrees.)

- [ ] **Step 3: Create `toolbox/ToolboxDiceView.tsx`** with the dice-rolling view extracted unchanged from Batch 1, using `toolboxStyles` for shared chrome and its own local `StyleSheet` for dice-specific bits (stepperRow, count, stepper*, diceGrid, die*, total):

```tsx
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { rollDice, type DiceResult } from '@/modules/combat-engine';
import { colors, radius, spacing, typography } from '../../theme';
import { toolboxStyles } from './styles';

/** Toolbox view: pick a dice count [1,8], roll, show each die's face + total. */
export function ToolboxDiceView({ onBack }: { onBack: () => void }) {
  const { t } = useTranslation();
  const [count, setCount] = useState(1);
  const [result, setResult] = useState<DiceResult | null>(null);

  const roll = () => setResult(rollDice(count));

  return (
    <View style={toolboxStyles.menu}>
      <Text style={toolboxStyles.label}>{t('toolbox.diceCount')}</Text>
      <View style={styles.stepperRow}>
        <Stepper
          symbol="−"
          disabled={count <= 1}
          onPress={() => setCount(c => Math.max(1, c - 1))}
        />
        <Text style={styles.count}>{count}</Text>
        <Stepper
          symbol="+"
          disabled={count >= 8}
          onPress={() => setCount(c => Math.min(8, c + 1))}
        />
      </View>

      {result ? (
        <>
          <View style={styles.diceGrid}>
            {result.dice.map((face, i) => (
              <View key={i} style={styles.die}>
                <Text style={styles.dieText}>{face}</Text>
              </View>
            ))}
          </View>
          <Text style={styles.total}>{t('toolbox.total', { total: result.total })}</Text>
        </>
      ) : null}

      <Pressable onPress={roll} style={toolboxStyles.rollBtn}>
        <Text style={toolboxStyles.rollBtnText}>
          {result ? t('toolbox.rollAgain') : t('toolbox.roll')}
        </Text>
      </Pressable>

      <Pressable onPress={onBack} style={toolboxStyles.backBtn}>
        <Text style={toolboxStyles.backText}>{t('toolbox.back')}</Text>
      </Pressable>
    </View>
  );
}

function Stepper({
  symbol,
  disabled,
  onPress,
}: {
  symbol: string;
  disabled: boolean;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.stepper,
        disabled && styles.stepperDisabled,
        pressed && !disabled && styles.stepperPressed,
      ]}>
      <Text style={styles.stepperText}>{symbol}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  stepperRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.md,
  },
  count: {
    color: colors.text,
    fontSize: typography.title,
    fontWeight: '700',
    minWidth: 32,
    textAlign: 'center',
  },
  stepper: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.surfaceAlt,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepperDisabled: {
    opacity: 0.35,
  },
  stepperPressed: {
    backgroundColor: colors.border,
  },
  stepperText: {
    color: colors.text,
    fontSize: typography.heading,
    fontWeight: '700',
  },
  diceGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.xs,
    justifyContent: 'center',
  },
  die: {
    width: 40,
    height: 40,
    borderRadius: radius.sm,
    backgroundColor: colors.surfaceAlt,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dieText: {
    color: colors.text,
    fontSize: typography.heading,
    fontWeight: '700',
  },
  total: {
    color: colors.text,
    fontSize: typography.body,
    fontWeight: '700',
    textAlign: 'center',
  },
});
```

Note the new `onBack: () => void` prop — in Batch 1 this view's "back to menu" logic lived inside the monolithic `ToolboxMenu` (`backToMenu`, which also cleared `result`). Now that the view owns its own `result` state locally, `onBack` only needs to tell the shell to switch back to `'menu'`; the dice `result` state naturally resets on its own because this whole component unmounts when the shell stops rendering it (same reasoning as the design spec's `ToolboxPlayerDetailView`).

- [ ] **Step 4: Create `toolbox/ToolboxMenu.tsx`** (new shell, at the new location) — for now (this task), it only knows about `'menu'` and `'dice'`; Tasks 4-5 will extend the `View` union and add more branches:

```tsx
import React, { useState } from 'react';
import { Modal, Pressable, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { toolboxStyles } from './styles';
import { ToolboxDiceView } from './ToolboxDiceView';

type ToolboxView = 'menu' | 'dice';

/** Header toolbox button + modal, shown on in-game screens only. */
export function ToolboxMenu() {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<ToolboxView>('menu');

  const close = () => {
    setOpen(false);
    setView('menu');
  };

  const openGameState = () => {
    close();
    navigation.navigate('GameState' as never);
  };

  return (
    <>
      <Pressable onPress={() => setOpen(true)} style={toolboxStyles.trigger} hitSlop={8}>
        <Text style={toolboxStyles.triggerIcon}>🧰</Text>
      </Pressable>

      <Modal visible={open} transparent animationType="slide" onRequestClose={close}>
        <View style={toolboxStyles.backdrop}>
          <View style={toolboxStyles.sheet}>
            <View style={toolboxStyles.handle} />
            <Pressable onPress={close} style={toolboxStyles.closeBtn} hitSlop={8}>
              <Text style={toolboxStyles.closeText}>✕</Text>
            </Pressable>

            {view === 'menu' ? (
              <View style={toolboxStyles.menu}>
                <MenuRow label={t('toolbox.gameState')} onPress={openGameState} />
                <MenuRow label={t('toolbox.rollDice')} onPress={() => setView('dice')} />
              </View>
            ) : null}

            {view === 'dice' ? <ToolboxDiceView onBack={() => setView('menu')} /> : null}
          </View>
        </View>
      </Modal>
    </>
  );
}

function MenuRow({ label, onPress }: { label: string; onPress: () => void }) {
  return (
    <Pressable onPress={onPress} style={toolboxStyles.menuRow}>
      <Text style={toolboxStyles.menuRowText}>{label}</Text>
    </Pressable>
  );
}
```

- [ ] **Step 5: Delete the old file and update the barrel export**

Run: `git rm src/modules/ui/components/ToolboxMenu.tsx`

In `src/modules/ui/index.ts`, change:

```ts
export { ToolboxMenu } from './components/ToolboxMenu';
```

to:

```ts
export { ToolboxMenu } from './components/toolbox/ToolboxMenu';
```

- [ ] **Step 6: Type-check, lint, and run the suite**

Run: `npx tsc --noEmit && npx eslint src && npx jest`
Expected: no errors; 8/8 tests passing. `src/navigation/RootNavigator.tsx` needs no changes — it imports `ToolboxMenu` from `@/modules/ui`, and the barrel still exports that name; only the underlying file moved.

- [ ] **Step 7: Commit**

```bash
git add src/modules/ui/components/toolbox/ src/modules/ui/index.ts
git rm src/modules/ui/components/ToolboxMenu.tsx 2>/dev/null || true
git commit -m "refactor(ui): split ToolboxMenu into a toolbox/ folder (shell + dice view + shared styles)"
```

(The `git rm ... || true` guards against the file already being staged/removed by Step 5 — if `git status` shows it already staged as deleted, just `git add` the rest and commit; don't worry about the exact staging mechanics as long as the final commit shows the old file deleted and the new files added.)

---

### Task 4: Add the "Draw Card" toolbox view

**Files:**
- Create: `src/modules/ui/components/toolbox/ToolboxDrawView.tsx`
- Modify: `src/modules/ui/components/toolbox/ToolboxMenu.tsx`
- Modify: `src/modules/i18n/locales/vi.ts` and `src/modules/i18n/locales/en.ts`

**Interfaces:**
- Consumes: `useRequestCardDraw` from `@/features/play/ResolutionSheetProvider` (Task 1).

- [ ] **Step 1: Add i18n keys**

In both `src/modules/i18n/locales/vi.ts` and `en.ts`, inside the existing `toolbox` block, add two keys after `back`:

vi.ts:
```ts
  toolbox: {
    gameState: '🗂️ Lưu / Lịch sử',
    rollDice: '🎲 Đổ xúc xắc',
    diceCount: 'Số lượng xúc xắc',
    roll: 'Đổ xúc xắc',
    rollAgain: 'Đổ lại',
    total: 'Tổng: {{total}}',
    back: '← Quay lại',
    drawCard: '🃏 Rút bài',
    pickCardType: 'Chọn loại bài muốn rút',
  },
```

en.ts:
```ts
  toolbox: {
    gameState: '🗂️ Save / History',
    rollDice: '🎲 Roll Dice',
    diceCount: 'Number of dice',
    roll: 'Roll',
    rollAgain: 'Roll again',
    total: 'Total: {{total}}',
    back: '← Back',
    drawCard: '🃏 Draw Card',
    pickCardType: 'Which card type?',
  },
```

- [ ] **Step 2: Write `ToolboxDrawView.tsx`**

```tsx
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import type { CardType } from '@/modules/card-engine';
import { useRequestCardDraw } from '@/features/play/ResolutionSheetProvider';
import { toolboxStyles } from './styles';

const TYPES: { symbol: CardType; labelKey: string }[] = [
  { symbol: 'event', labelKey: 'events.draw' },
  { symbol: 'omen', labelKey: 'omens.draw' },
  { symbol: 'item', labelKey: 'items.draw' },
];

/** Toolbox view: pick a card type, draw it for whoever's turn it is. */
export function ToolboxDrawView({ onDraw }: { onDraw: () => void }) {
  const { t } = useTranslation();
  const requestDraw = useRequestCardDraw();

  const pick = (symbol: CardType) => {
    requestDraw(symbol);
    onDraw();
  };

  return (
    <View style={toolboxStyles.menu}>
      <Text style={toolboxStyles.label}>{t('toolbox.pickCardType')}</Text>
      {TYPES.map(({ symbol, labelKey }) => (
        <Pressable
          key={symbol}
          onPress={() => pick(symbol)}
          style={toolboxStyles.menuRow}>
          <Text style={toolboxStyles.menuRowText}>{t(labelKey)}</Text>
        </Pressable>
      ))}
    </View>
  );
}
```

- [ ] **Step 3: Wire it into the shell**

In `src/modules/ui/components/toolbox/ToolboxMenu.tsx`:

1. Add the import: `import { ToolboxDrawView } from './ToolboxDrawView';`
2. Change `type ToolboxView = 'menu' | 'dice';` to `type ToolboxView = 'menu' | 'dice' | 'drawType';`
3. Add a menu row (inside the `view === 'menu'` block, after the "rollDice" row):

```tsx
                <MenuRow label={t('toolbox.drawCard')} onPress={() => setView('drawType')} />
```

4. Add a new conditional render block (alongside the existing `{view === 'dice' ? ... : null}`):

```tsx
            {view === 'drawType' ? <ToolboxDrawView onDraw={close} /> : null}
```

(`onDraw={close}` — picking a type closes the whole toolbox modal outright, per the design spec, rather than returning to the toolbox menu, since `ResolutionSheet` is about to open its own full-screen sheet.)

- [ ] **Step 4: Type-check, lint, and run the suite**

Run: `npx tsc --noEmit && npx eslint src && npx jest`
Expected: no errors; 8/8 tests passing.

- [ ] **Step 5: Commit**

```bash
git add src/modules/ui/components/toolbox/ToolboxDrawView.tsx src/modules/ui/components/toolbox/ToolboxMenu.tsx src/modules/i18n/locales/vi.ts src/modules/i18n/locales/en.ts
git commit -m "feat(ui): add toolbox Draw Card view"
```

---

### Task 5: Add the "Player Info" toolbox views

**Files:**
- Create: `src/modules/ui/components/toolbox/ToolboxPlayersView.tsx`
- Create: `src/modules/ui/components/toolbox/ToolboxPlayerDetailView.tsx`
- Modify: `src/modules/ui/components/toolbox/ToolboxMenu.tsx`
- Modify: `src/modules/i18n/locales/vi.ts` and `src/modules/i18n/locales/en.ts`

**Interfaces:**
- Consumes: `StatTrackSlider` from `@/modules/ui` (already built, `{ stat: StatKey, track: StatTrack, onChangeIndex: (index: number) => void }`), `adjustStat`/`STAT_KEYS`/`StatKey`/`StatTrack` from `@/modules/game-engine` and `@/types/shared`, `useAppSelector`/`useAppDispatch` from `@/app/hooks`.

- [ ] **Step 1: Add i18n keys**

In both locale files, inside the `toolbox` block, add after `pickCardType` (from Task 4):

vi.ts:
```ts
    players: '🧑 Thông tin nhà thám hiểm',
    confirm: '✓ Xác nhận',
    cancel: '✕ Hủy',
    noCharacters: 'Chưa có nhà thám hiểm nào.',
```

en.ts:
```ts
    players: '🧑 Explorer Info',
    confirm: '✓ Confirm',
    cancel: '✕ Cancel',
    noCharacters: 'No explorers yet.',
```

- [ ] **Step 2: Write `ToolboxPlayersView.tsx`**

```tsx
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import type { ID } from '@/types/shared';
import { useAppSelector } from '@/app/hooks';
import { toolboxStyles } from './styles';

/** Toolbox view: pick which explorer to view/edit. */
export function ToolboxPlayersView({ onPick }: { onPick: (characterId: ID) => void }) {
  const { t } = useTranslation();
  const characters = useAppSelector(s => s.game.characters);

  if (characters.length === 0) {
    return (
      <View style={toolboxStyles.menu}>
        <Text style={toolboxStyles.label}>{t('toolbox.noCharacters')}</Text>
      </View>
    );
  }

  return (
    <View style={toolboxStyles.menu}>
      {characters.map(c => (
        <Pressable
          key={c.id}
          onPress={() => onPick(c.id)}
          style={[toolboxStyles.menuRow, styles.playerRow]}>
          <View style={[styles.dot, { backgroundColor: c.color }]} />
          <Text style={toolboxStyles.menuRowText}>{c.name}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  playerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
});
```

- [ ] **Step 3: Write `ToolboxPlayerDetailView.tsx`**

```tsx
import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import type { ID, StatKey } from '@/types/shared';
import { STAT_KEYS } from '@/types/shared';
import type { StatTrack } from '@/modules/game-engine';
import { adjustStat } from '@/modules/game-engine';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { StatTrackSlider } from '../StatTrackSlider';
import { toolboxStyles } from './styles';

function cloneStats(stats: Record<StatKey, StatTrack>): Record<StatKey, StatTrack> {
  const clone = {} as Record<StatKey, StatTrack>;
  STAT_KEYS.forEach(key => {
    clone[key] = { ...stats[key] };
  });
  return clone;
}

interface Props {
  characterId: ID;
  onDone: () => void;
}

/** Toolbox view: edit one explorer's 4 stats on a local draft, confirm or cancel. */
export function ToolboxPlayerDetailView({ characterId, onDone }: Props) {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const character = useAppSelector(s => s.game.characters.find(c => c.id === characterId));
  const [draft, setDraft] = useState<Record<StatKey, StatTrack> | null>(() =>
    character ? cloneStats(character.stats) : null,
  );

  if (!character || !draft) return null;
  const original = character.stats;

  const updateIndex = (stat: StatKey, index: number) => {
    setDraft(prev => (prev ? { ...prev, [stat]: { ...prev[stat], index } } : prev));
  };

  const confirm = () => {
    STAT_KEYS.forEach(stat => {
      const delta = draft[stat].index - original[stat].index;
      if (delta !== 0) {
        dispatch(adjustStat({ characterId, stat, delta }));
      }
    });
    onDone();
  };

  return (
    <View style={toolboxStyles.menu}>
      <Text style={toolboxStyles.label}>{character.name}</Text>
      {STAT_KEYS.map(stat => (
        <StatTrackSlider
          key={stat}
          stat={stat}
          track={draft[stat]}
          onChangeIndex={index => updateIndex(stat, index)}
        />
      ))}
      <Pressable onPress={confirm} style={toolboxStyles.rollBtn}>
        <Text style={toolboxStyles.rollBtnText}>{t('toolbox.confirm')}</Text>
      </Pressable>
      <Pressable onPress={onDone} style={toolboxStyles.backBtn}>
        <Text style={toolboxStyles.backText}>{t('toolbox.cancel')}</Text>
      </Pressable>
    </View>
  );
}
```

- [ ] **Step 4: Wire both into the shell**

In `src/modules/ui/components/toolbox/ToolboxMenu.tsx`:

1. Add imports:
```ts
import type { ID } from '@/types/shared';
import { ToolboxPlayersView } from './ToolboxPlayersView';
import { ToolboxPlayerDetailView } from './ToolboxPlayerDetailView';
```
2. Change `type ToolboxView = 'menu' | 'dice' | 'drawType';` to `type ToolboxView = 'menu' | 'dice' | 'drawType' | 'players' | 'playerDetail';`
3. Add a new piece of state for the selected player: `const [selectedPlayerId, setSelectedPlayerId] = useState<ID | null>(null);`
4. Add a menu row (after the "drawCard" row added in Task 4):
```tsx
                <MenuRow label={t('toolbox.players')} onPress={() => setView('players')} />
```
5. Add two new conditional render blocks (alongside the existing ones):
```tsx
            {view === 'players' ? (
              <ToolboxPlayersView
                onPick={id => {
                  setSelectedPlayerId(id);
                  setView('playerDetail');
                }}
              />
            ) : null}

            {view === 'playerDetail' && selectedPlayerId ? (
              <ToolboxPlayerDetailView
                characterId={selectedPlayerId}
                onDone={() => setView('players')}
              />
            ) : null}
```

- [ ] **Step 5: Type-check, lint, and run the suite**

Run: `npx tsc --noEmit && npx eslint src && npx jest`
Expected: no errors; 8/8 tests passing.

- [ ] **Step 6: Commit**

```bash
git add src/modules/ui/components/toolbox/ToolboxPlayersView.tsx src/modules/ui/components/toolbox/ToolboxPlayerDetailView.tsx src/modules/ui/components/toolbox/ToolboxMenu.tsx src/modules/i18n/locales/vi.ts src/modules/i18n/locales/en.ts
git commit -m "feat(ui): add toolbox Player Info views (edit stats with confirm/cancel)"
```

---

### Task 6: Build, deploy, and manually verify both batches together

**Files:** none (verification only). **This is the first build for either batch — go ahead and run it.**

- [ ] **Step 1: Build and deploy**

Run the project's established device-specific Release invocation (the human partner has a known-working command from earlier sessions targeting their iPhone 12 Pro Max — use `npx react-native run-ios --no-packager --mode Release --udid 00008101-00124D2E36F1003A --extra-params "DEVELOPMENT_TEAM=G9R47GGCGM CODE_SIGN_STYLE=Automatic -allowProvisioningUpdates"`, or ask if the target device has changed).

- [ ] **Step 2: Toolbox modal opens (Batch 1's deferred top-priority check)**

On Board (or any of the 6 in-game screens), tap the 🧰 header icon. Confirm the modal actually slides up and is interactive — this validates the Batch 1 final-review's flagged risk (rendering `Modal` from inside `headerRight`) actually works on a real device.

- [ ] **Step 3: Batch 1 checklist**

- Icon visible on Board/Events/Omens/Items/Combat/HauntSetup, absent on Home/GameSetup/Characters/GameState.
- "Lưu / Lịch sử" → opens `GameState` correctly.
- "Đổ xúc xắc" → stepper clamps [1,8], rolling shows the right count of dice + correct total, "Đổ lại" re-rolls, "← Quay lại" returns to menu.
- From Board, header back button/swipe-back does not return to Characters.
- "Đóng trò chơi" → Home, game intact, "Tải game" resumes correctly. "Xóa trận đấu" still fully clears.

- [ ] **Step 4: Batch 2 — auto-draw removed**

Explore a new room (any symbol). Confirm the explorer's token still moves into the room correctly, and confirm **no** card-resolution sheet opens automatically anymore.

- [ ] **Step 5: Batch 2 — manual draw**

Toolbox → "🃏 Rút bài" → pick a type (Event/Omen/Item). Confirm the toolbox closes and `ResolutionSheet` opens, attributed to whoever's turn it currently is (check the sheet's header/explorer name against the board's active-turn indicator). Resolve it as normal (pick a card, walk through impact/summary) and confirm it behaves exactly like the old auto-triggered flow did.

- [ ] **Step 6: Batch 2 — player info, cancel path**

Toolbox → "🧑 Thông tin nhà thám hiểm" → pick an explorer → drag one or two `StatTrackSlider` rows to different values → tap "✕ Hủy". Back out of the toolbox entirely and confirm that explorer's stats are **unchanged** from before you opened the view.

- [ ] **Step 7: Batch 2 — player info, confirm path**

Repeat: pick the same (or another) explorer → change a couple of stats → tap "✓ Xác nhận". Confirm the stats now reflect exactly what was set on the draft (check against the board or another screen showing that character's stats).

No commit for this task — it's a verification checkpoint. If any check fails, fix the relevant task above and re-run from Step 1.
