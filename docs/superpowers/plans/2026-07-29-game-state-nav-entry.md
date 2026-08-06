# Game State Nav Entry Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a Home-screen button that navigates to the existing (currently unreachable) `GameState` screen.

**Architecture:** Two i18n string additions + one `<Button>` added to `HomeScreen.tsx`, reusing the existing `hasGame` flag and `Button`/navigation wiring already present in that file.

**Tech Stack:** React Native, TypeScript, `react-i18next`.

## Global Constraints

- Design spec: `docs/superpowers/specs/2026-07-29-game-state-nav-entry-design.md` — this plan implements it in full.
- The new button must be `disabled={!hasGame}`, matching the existing "loadGame" button's pattern (`HomeScreen.tsx:56-61`).
- No changes to `GameStateScreen.tsx`, `RootNavigator.tsx`, or `src/navigation/types.ts` — the route already exists and works, it's only missing an entry point.

---

### Task 1: Add the Home button and i18n strings

**Files:**
- Modify: `src/modules/i18n/locales/vi.ts` (the `home` block, around line 15-22)
- Modify: `src/modules/i18n/locales/en.ts` (the `home` block, around line 14-21)
- Modify: `src/features/home/HomeScreen.tsx:56-61`

- [ ] **Step 1: Add the i18n keys**

In `src/modules/i18n/locales/vi.ts`, find:

```ts
  home: {
    subtitle: 'Betrayal at House on the Hill — quản trò kỹ thuật số',
    noGame: 'Chưa có trận đấu.',
    status: '{{name}} · {{count}} người chơi · giai đoạn: {{phase}}',
    haunt: 'Haunt: {{name}}',
    play: '▶ Chơi game',
    loadGame: '💾 Tải game',
  },
```

Add `manageGame` after `loadGame`:

```ts
  home: {
    subtitle: 'Betrayal at House on the Hill — quản trò kỹ thuật số',
    noGame: 'Chưa có trận đấu.',
    status: '{{name}} · {{count}} người chơi · giai đoạn: {{phase}}',
    haunt: 'Haunt: {{name}}',
    play: '▶ Chơi game',
    loadGame: '💾 Tải game',
    manageGame: '🗂️ Lưu / Lịch sử',
  },
```

In `src/modules/i18n/locales/en.ts`, find:

```ts
  home: {
    subtitle: 'Betrayal at House on the Hill — digital game master',
    noGame: 'No active game.',
    status: '{{name}} · {{count}} players · phase: {{phase}}',
    haunt: 'Haunt: {{name}}',
    play: '▶ Play Game',
    loadGame: '💾 Load Game',
  },
```

Add `manageGame` after `loadGame`:

```ts
  home: {
    subtitle: 'Betrayal at House on the Hill — digital game master',
    noGame: 'No active game.',
    status: '{{name}} · {{count}} players · phase: {{phase}}',
    haunt: 'Haunt: {{name}}',
    play: '▶ Play Game',
    loadGame: '💾 Load Game',
    manageGame: '🗂️ Save / History',
  },
```

- [ ] **Step 2: Add the button in `HomeScreen.tsx`**

Find (lines 56-61):

```tsx
      <Button
        label={t('home.loadGame')}
        variant="secondary"
        disabled={!hasGame}
        onPress={() => navigation.navigate('Board')}
      />
    </Screen>
```

Replace with:

```tsx
      <Button
        label={t('home.loadGame')}
        variant="secondary"
        disabled={!hasGame}
        onPress={() => navigation.navigate('Board')}
      />

      <Button
        label={t('home.manageGame')}
        variant="secondary"
        disabled={!hasGame}
        onPress={() => navigation.navigate('GameState')}
      />
    </Screen>
```

- [ ] **Step 3: Type-check, lint, and run the suite**

Run: `npx tsc --noEmit && npx eslint src && npx jest`
Expected: no errors; 8/8 tests still passing (this change doesn't touch any tested logic, so the count should be unchanged from the current baseline).

- [ ] **Step 4: Commit**

```bash
git add src/modules/i18n/locales/vi.ts src/modules/i18n/locales/en.ts src/features/home/HomeScreen.tsx
git commit -m "feat(home): add nav entry point to the GameState screen"
```

---

### Task 2: Manual verification on device

**Files:** none (verification only).

- [ ] **Step 1: Build and run on a connected device or simulator**

Run: `npx react-native run-ios` (or the established device-specific Release invocation for this project).

- [ ] **Step 2: Verify disabled state with no active game**

On Home with no game created/loaded: confirm the new "🗂️ Lưu / Lịch sử" button is visible but disabled (dimmed, matches "Tải game"'s disabled look).

- [ ] **Step 3: Verify navigation with an active game**

Create or load a game, return to Home, confirm the new button is now enabled; tap it and confirm it opens `GameStateScreen` showing the auto-save status card and the "Xóa trận đấu" button.

No commit for this task — it's a verification checkpoint.
