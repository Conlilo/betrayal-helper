# Toolbox Menu (Batch 1) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a header "toolbox" menu (Save/History + Dice Roller) to the 6 in-game screens, and structurally block back-navigation into setup screens once gameplay starts.

**Architecture:** One new shared UI component (`ToolboxMenu`) wired into `RootNavigator`'s per-screen `headerRight`, plus `navigation.reset` replacing `navigation.navigate` at the 3 points where the app transitions into/out of active gameplay. No Redux/state-shape changes — reuses the existing `rollDice` (combat-engine) and the existing `resetCards`/`resetHaunt`/`resetRooms`/`resetGame` actions already wired in `GameStateScreen`.

**Tech Stack:** React Native, TypeScript, `react-i18next`, `@react-navigation/native-stack` (`navigation.reset`), existing `Modal` pattern from `react-native` (matches `ResolutionSheet.tsx`).

## Global Constraints

- Design spec: `docs/superpowers/specs/2026-07-30-toolbox-menu-design.md` — this plan implements it in full, batch 1 only. Do **not** touch `BoardScreen.tsx`'s `justPlaced`/`resolve`/card-draw logic, and do **not** add "Player Info" or "Draw Card" menu items — those are a separate future batch.
- The toolbox header button appears on exactly these 6 screens: `Board`, `Events`, `Omens`, `Items`, `Combat`, `HauntSetup`. Not on `Home`, `GameSetup`, `Characters`, `GameState`.
- Dice count is bounded `[1, 8]` inclusive.
- Every `navigation.reset({ index: 0, routes: [{ name: '<Screen>' }] })` call fully replaces the stack — this is the mechanism that hides the native-stack back button/gesture, not a manual `gestureEnabled: false` override.
- This project does not render RN UI trees in Jest (see `__tests__/App.test.tsx` header comment) — no new Jest tests for `ToolboxMenu` or the screen changes in this plan.
- **Do not build/deploy to a device for this batch.** The human partner wants both Batch 1 and Batch 2 implemented before the next on-device build — stop after Task 4 (verification) below is *written up as instructions*, but do not actually run `react-native run-ios`. Report code-complete instead.

---

### Task 1: Create the `ToolboxMenu` component

**Files:**
- Create: `src/modules/ui/components/ToolboxMenu.tsx`
- Modify: `src/modules/ui/index.ts` (export it)
- Modify: `src/modules/i18n/locales/vi.ts` and `src/modules/i18n/locales/en.ts` (add the `toolbox` namespace)

**Interfaces:**
- Produces: `ToolboxMenu()` — a React component with no props (reads navigation via `useNavigation()` from `@react-navigation/native`). Task 2 imports it as `import { ToolboxMenu } from '@/modules/ui'` and passes `headerRight: () => <ToolboxMenu />` in `RootNavigator.tsx`.

- [ ] **Step 1: Add the i18n keys**

In `src/modules/i18n/locales/vi.ts`, find the `gameState` block (around line 195-206):

```ts
  gameState: {
    title: 'Lưu / Lịch sử',
    saveState: 'Trạng thái lưu',
    saveText:
      'Trận đấu được lưu tự động vào thiết bị sau mỗi hành động — đóng và mở lại ứng dụng để tiếp tục.',
    game: 'Trận: {{name}}',
    noActiveGame: 'Chưa có trận đấu.',
    lastUpdated: 'Cập nhật lần cuối: {{date}}',
    actionHistory: 'Lịch sử hành động',
    noActions: 'Chưa có hành động nào.',
    clearGame: 'Xóa trận đấu',
  },
```

Add `closeGame` after `clearGame`, and add a new `toolbox` block right after the whole `gameState` block:

```ts
  gameState: {
    title: 'Lưu / Lịch sử',
    saveState: 'Trạng thái lưu',
    saveText:
      'Trận đấu được lưu tự động vào thiết bị sau mỗi hành động — đóng và mở lại ứng dụng để tiếp tục.',
    game: 'Trận: {{name}}',
    noActiveGame: 'Chưa có trận đấu.',
    lastUpdated: 'Cập nhật lần cuối: {{date}}',
    actionHistory: 'Lịch sử hành động',
    noActions: 'Chưa có hành động nào.',
    clearGame: 'Xóa trận đấu',
    closeGame: 'Đóng trò chơi',
  },
  toolbox: {
    gameState: '🗂️ Lưu / Lịch sử',
    rollDice: '🎲 Đổ xúc xắc',
    diceCount: 'Số lượng xúc xắc',
    roll: 'Đổ xúc xắc',
    rollAgain: 'Đổ lại',
    total: 'Tổng: {{total}}',
    back: '← Quay lại',
  },
```

In `src/modules/i18n/locales/en.ts`, find the equivalent `gameState` block (around line 194-205):

```ts
  gameState: {
    title: 'Save / History',
    saveState: 'Save state',
    saveText:
      'The match is saved automatically to this device after every action — close and reopen the app to resume.',
    game: 'Game: {{name}}',
    noActiveGame: 'No active game.',
    lastUpdated: 'Last updated: {{date}}',
    actionHistory: 'Action history',
    noActions: 'No actions yet.',
    clearGame: 'Clear game',
  },
```

Apply the same two changes:

```ts
  gameState: {
    title: 'Save / History',
    saveState: 'Save state',
    saveText:
      'The match is saved automatically to this device after every action — close and reopen the app to resume.',
    game: 'Game: {{name}}',
    noActiveGame: 'No active game.',
    lastUpdated: 'Last updated: {{date}}',
    actionHistory: 'Action history',
    noActions: 'No actions yet.',
    clearGame: 'Clear game',
    closeGame: 'Close game',
  },
  toolbox: {
    gameState: '🗂️ Save / History',
    rollDice: '🎲 Roll Dice',
    diceCount: 'Number of dice',
    roll: 'Roll',
    rollAgain: 'Roll again',
    total: 'Total: {{total}}',
    back: '← Back',
  },
```

- [ ] **Step 2: Write the `ToolboxMenu` component**

Create `src/modules/ui/components/ToolboxMenu.tsx`:

```tsx
import React, { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { rollDice, type DiceResult } from '@/modules/combat-engine';
import { colors, radius, spacing, typography } from '../theme';

type View = 'menu' | 'dice';

/** Header toolbox button + modal, shown on in-game screens only. */
export function ToolboxMenu() {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<View>('menu');
  const [count, setCount] = useState(1);
  const [result, setResult] = useState<DiceResult | null>(null);

  const close = () => {
    setOpen(false);
    setView('menu');
    setResult(null);
  };

  const backToMenu = () => {
    setView('menu');
    setResult(null);
  };

  const openGameState = () => {
    close();
    navigation.navigate('GameState' as never);
  };

  const roll = () => setResult(rollDice(count));

  return (
    <>
      <Pressable onPress={() => setOpen(true)} style={styles.trigger} hitSlop={8}>
        <Text style={styles.triggerIcon}>🧰</Text>
      </Pressable>

      <Modal visible={open} transparent animationType="slide" onRequestClose={close}>
        <View style={styles.backdrop}>
          <View style={styles.sheet}>
            <View style={styles.handle} />
            <Pressable onPress={close} style={styles.closeBtn} hitSlop={8}>
              <Text style={styles.closeText}>✕</Text>
            </Pressable>

            {view === 'menu' ? (
              <View style={styles.menu}>
                <MenuRow label={t('toolbox.gameState')} onPress={openGameState} />
                <MenuRow label={t('toolbox.rollDice')} onPress={() => setView('dice')} />
              </View>
            ) : (
              <View style={styles.menu}>
                <Text style={styles.label}>{t('toolbox.diceCount')}</Text>
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

                <Pressable onPress={roll} style={styles.rollBtn}>
                  <Text style={styles.rollBtnText}>
                    {result ? t('toolbox.rollAgain') : t('toolbox.roll')}
                  </Text>
                </Pressable>

                <Pressable onPress={backToMenu} style={styles.backBtn}>
                  <Text style={styles.backText}>{t('toolbox.back')}</Text>
                </Pressable>
              </View>
            )}
          </View>
        </View>
      </Modal>
    </>
  );
}

function MenuRow({ label, onPress }: { label: string; onPress: () => void }) {
  return (
    <Pressable onPress={onPress} style={styles.menuRow}>
      <Text style={styles.menuRowText}>{label}</Text>
    </Pressable>
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

Note: `navigation.navigate('GameState' as never)` uses `as never` because `useNavigation()` without a generic parameter isn't typed against `RootStackParamList`. This matches the fact that `ToolboxMenu` is mounted via `headerRight` (outside any single screen's typed `RootScreenProps`), so it can't import a screen-specific navigation type. If `npx tsc --noEmit` flags a better-typed alternative that still compiles cleanly, use that instead — but don't spend more than a couple of minutes on it; `as never` for this one call site is acceptable.

- [ ] **Step 3: Export it from the barrel**

In `src/modules/ui/index.ts`, add (alongside the existing `Screen`/`Button`/`Card`/`StatTrackSlider`/`LanguageSwitcher` exports):

```ts
export { ToolboxMenu } from './components/ToolboxMenu';
```

- [ ] **Step 4: Type-check and lint**

Run: `npx tsc --noEmit && npx eslint src/modules/ui/components/ToolboxMenu.tsx src/modules/ui/index.ts src/modules/i18n/locales/vi.ts src/modules/i18n/locales/en.ts`
Expected: no errors.

- [ ] **Step 5: Commit**

```bash
git add src/modules/ui/components/ToolboxMenu.tsx src/modules/ui/index.ts src/modules/i18n/locales/vi.ts src/modules/i18n/locales/en.ts
git commit -m "feat(ui): add ToolboxMenu component with save/history and dice roller"
```

---

### Task 2: Wire `ToolboxMenu` into the 6 in-game screens

**Files:**
- Modify: `src/navigation/RootNavigator.tsx`

**Interfaces:**
- Consumes: `ToolboxMenu` from `@/modules/ui` (Task 1).

- [ ] **Step 1: Add the import**

In `src/navigation/RootNavigator.tsx`, add to the existing `@/modules/ui` import (or add a new import line if `colors` is imported standalone — check the current import first):

```ts
import { colors, ToolboxMenu } from '@/modules/ui';
```

- [ ] **Step 2: Add `headerRight` to the 6 in-game screens**

Find the 6 screen registrations:

```tsx
      <Stack.Screen name="Board" component={BoardScreen} options={{ title: t('board.title') }} />
      <Stack.Screen name="Events" component={EventScreen} options={{ title: t('events.title') }} />
      <Stack.Screen name="Omens" component={OmenScreen} options={{ title: t('omens.title') }} />
      <Stack.Screen name="Items" component={ItemScreen} options={{ title: t('items.title') }} />
      <Stack.Screen name="Combat" component={CombatScreen} options={{ title: t('combat.title') }} />
      <Stack.Screen name="HauntSetup" component={HauntSetupScreen} options={{ title: t('hauntSetup.title') }} />
```

Replace with:

```tsx
      <Stack.Screen
        name="Board"
        component={BoardScreen}
        options={{ title: t('board.title'), headerRight: () => <ToolboxMenu /> }}
      />
      <Stack.Screen
        name="Events"
        component={EventScreen}
        options={{ title: t('events.title'), headerRight: () => <ToolboxMenu /> }}
      />
      <Stack.Screen
        name="Omens"
        component={OmenScreen}
        options={{ title: t('omens.title'), headerRight: () => <ToolboxMenu /> }}
      />
      <Stack.Screen
        name="Items"
        component={ItemScreen}
        options={{ title: t('items.title'), headerRight: () => <ToolboxMenu /> }}
      />
      <Stack.Screen
        name="Combat"
        component={CombatScreen}
        options={{ title: t('combat.title'), headerRight: () => <ToolboxMenu /> }}
      />
      <Stack.Screen
        name="HauntSetup"
        component={HauntSetupScreen}
        options={{ title: t('hauntSetup.title'), headerRight: () => <ToolboxMenu /> }}
      />
```

Leave `Home`, `GameSetup`, `Characters`, `GameState` untouched.

- [ ] **Step 3: Type-check and lint**

Run: `npx tsc --noEmit && npx eslint src/navigation/RootNavigator.tsx`
Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add src/navigation/RootNavigator.tsx
git commit -m "feat(navigation): show ToolboxMenu on in-game screens"
```

---

### Task 3: Block back-navigation into setup screens

**Files:**
- Modify: `src/features/character/CharacterListScreen.tsx:58`
- Modify: `src/features/home/HomeScreen.tsx:56-61`
- Modify: `src/features/game-state/GameStateScreen.tsx`

**Interfaces:**
- No new interfaces — this task only changes how existing navigation calls are made (`navigate` → `reset`) and adds one new button wired to an existing pattern.

- [ ] **Step 1: Update `CharacterListScreen.tsx`**

Find (around line 58, inside the "go to board" handler):

```ts
    navigation.navigate('Board');
```

Replace with:

```ts
    navigation.reset({ index: 0, routes: [{ name: 'Board' }] });
```

(Read the surrounding function first to confirm this is the only `navigate('Board')` call in the file and that `navigation` is already in scope with the right type — it is, per `RootScreenProps<'Characters'>`.)

- [ ] **Step 2: Update `HomeScreen.tsx`**

Find (lines 56-61):

```tsx
      <Button
        label={t('home.loadGame')}
        variant="secondary"
        disabled={!hasGame}
        onPress={() => navigation.navigate('Board')}
      />
```

Replace with:

```tsx
      <Button
        label={t('home.loadGame')}
        variant="secondary"
        disabled={!hasGame}
        onPress={() => navigation.reset({ index: 0, routes: [{ name: 'Board' }] })}
      />
```

- [ ] **Step 3: Update `GameStateScreen.tsx`**

Read the full current file first (it's short, ~88 lines) to confirm exact structure, then:

1. Change the `clearGame` function's last line from `navigation.navigate('Home');` to `navigation.reset({ index: 0, routes: [{ name: 'Home' }] });`.
2. Add a new `closeGame` function right above `clearGame`:

```ts
  const closeGame = () => {
    navigation.reset({ index: 0, routes: [{ name: 'Home' }] });
  };
```

3. Add a new `<Button>` right before the existing "Xóa trận đấu" button (so the render order is: save-state Card, action-history Card, "Đóng trò chơi" button, "Xóa trận đấu" button):

```tsx
      <Button label={t('gameState.closeGame')} variant="secondary" onPress={closeGame} />
      <Button label={t('gameState.clearGame')} variant="danger" onPress={clearGame} />
```

(Replacing the current single `<Button label={t('gameState.clearGame')} variant="danger" onPress={clearGame} />` line with both of the above.)

- [ ] **Step 4: Type-check, lint, and run the suite**

Run: `npx tsc --noEmit && npx eslint src && npx jest`
Expected: all clean; 8/8 tests passing (no test in this plan touches tested logic — `adjustStat`/`isPlaceable`/etc. are untouched).

- [ ] **Step 5: Commit**

```bash
git add src/features/character/CharacterListScreen.tsx src/features/home/HomeScreen.tsx src/features/game-state/GameStateScreen.tsx
git commit -m "feat(navigation): reset stack when entering/leaving gameplay, add Close Game"
```

---

### Task 4: Manual verification (write up only — do NOT build yet)

**Files:** none.

Per the Global Constraints, do not run `react-native run-ios`/`run-android` for this batch. Instead, produce a short written verification checklist (in your final report) covering:

- **First and most important:** the toolbox modal actually opens when the header icon is tapped, on a real device/simulator. `ToolboxMenu` renders a `<Modal>` from inside `headerRight`, i.e. from a view nested in the native navigation bar (`react-native-screens`) rather than from a screen body like every other `Modal` in this codebase (`ResolutionSheet`, etc.) — this is the one architectural assumption nothing has validated yet. If it doesn't open correctly, the fix is structural (keep only the trigger `Pressable` in the header; move the `<Modal>` itself into each screen's body or a root-level portal), not a tweak — flag this loudly rather than working around it quietly.
- Toolbox icon visible on Board/Events/Omens/Items/Combat/HauntSetup, absent on Home/GameSetup/Characters/GameState.
- Toolbox modal: menu shows 2 rows; "Lưu / Lịch sử" navigates to `GameState`; "Đổ xúc xắc" switches to the dice view.
- Dice view: stepper clamps to [1, 8]; rolling shows exactly `count` dice, each a valid `0|1|2`, and a matching total; "Đổ lại" re-rolls; "← Quay lại" returns to the menu.
- From Board, the header back button/swipe-back no longer works (no way back to Characters).
- "Đóng trò chơi" (in `GameStateScreen`) returns to Home with the game intact (`loadGame` still enabled); "Xóa trận đấu" still fully clears the game as before.

This checklist will be used once Batch 2 is also implemented and both are verified together on-device in one build.
