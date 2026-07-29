# Stat Track Slider Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the `StatBadge` +/- stepper with a draggable `StatTrackSlider` that shows every printed box on a character's stat track and lets the player drag, tap, or use end buttons to move the pointer.

**Architecture:** One new presentational component (`StatTrackSlider`) driven by `react-native-gesture-handler`'s `Gesture.Pan`, plumbed into `ResolutionSheet.tsx` in place of `StatBadge`. No Redux changes — the component always resolves interactions to a target index and the caller converts that to the existing `adjustStat({ delta })` action.

**Tech Stack:** React Native, TypeScript, `react-native-gesture-handler` (already a project dependency, already wired at the app root via `GestureHandlerRootView` in `src/app/App.tsx`).

## Global Constraints

- Design spec: `docs/superpowers/specs/2026-07-29-stat-track-slider-design.md` — every task below implements a section of it.
- Every `StatTrack.values` array in this codebase has exactly 9 entries (index 0–8); the component may assume `values.length >= 2` but must not hardcode `9`.
- Index 0 (a "0" printed box) always renders in `colors.danger`, whether or not it's the active box (matches current `StatBadge` "dead" behavior).
- This project deliberately does **not** render RN UI trees in Jest — see the header comment in `__tests__/App.test.tsx` ("Rendering the full App requires native modules... UI is better covered with E2E later"). Follow that convention: no Jest test file for `StatTrackSlider`. Verification is `npx tsc --noEmit`, `npx eslint src`, and manual on-device checks.
- Vietnamese label lookup for each stat is `t(\`stats.${stat}\`)` via `react-i18next` — keep using this, don't hardcode labels.

---

### Task 1: Create the `StatTrackSlider` component

**Files:**
- Create: `src/modules/ui/components/StatTrackSlider.tsx`

**Interfaces:**
- Produces: `StatTrackSlider({ stat: StatKey, track: StatTrack, onChangeIndex: (index: number) => void })` — a React component. `StatTrack` comes from `@/modules/game-engine` (`{ values: number[]; index: number }`). Later tasks import this component and pass `onChangeIndex` a function that dispatches `adjustStat`.

- [ ] **Step 1: Write the component**

```tsx
import React, { useRef, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import type { StatKey } from '@/types/shared';
import type { StatTrack } from '@/modules/game-engine';
import { colors, radius, spacing, typography } from '../theme';

interface StatTrackSliderProps {
  stat: StatKey;
  track: StatTrack;
  onChangeIndex: (index: number) => void;
}

/**
 * Board-style stat track: every printed box is shown, drag or tap anywhere
 * on the track to jump the pointer, or nudge one step with the end buttons.
 */
export function StatTrackSlider({ stat, track, onChangeIndex }: StatTrackSliderProps) {
  const { t } = useTranslation();
  const { values, index } = track;
  const count = values.length;
  const [trackWidth, setTrackWidth] = useState(0);
  const lastEmitted = useRef(index);
  lastEmitted.current = index;

  const emit = (nextIndex: number) => {
    const clamped = Math.max(0, Math.min(count - 1, nextIndex));
    if (clamped !== lastEmitted.current) {
      lastEmitted.current = clamped;
      onChangeIndex(clamped);
    }
  };

  const indexFromX = (x: number) => {
    if (trackWidth <= 0) return index;
    const ratio = x / trackWidth;
    return Math.round(ratio * (count - 1));
  };

  const pan = Gesture.Pan()
    .runOnJS(true)
    .onBegin(e => emit(indexFromX(e.x)))
    .onUpdate(e => emit(indexFromX(e.x)));

  return (
    <View style={styles.wrap}>
      <Text style={styles.label}>{t(`stats.${stat}`)}</Text>
      <View style={styles.row}>
        <Stepper symbol="−" disabled={index === 0} onPress={() => emit(index - 1)} />
        <GestureDetector gesture={pan}>
          <View style={styles.track} onLayout={e => setTrackWidth(e.nativeEvent.layout.width)}>
            <View style={styles.trackLine} />
            {values.map((printed, i) => (
              <Pressable key={i} style={styles.cell} onPress={() => emit(i)}>
                <View style={[styles.dot, i === index && styles.dotActive]} />
                <Text
                  style={[
                    styles.cellText,
                    i === index && styles.cellTextActive,
                    printed === 0 && styles.dead,
                  ]}>
                  {printed}
                </Text>
              </Pressable>
            ))}
          </View>
        </GestureDetector>
        <Stepper
          symbol="+"
          disabled={index === count - 1}
          onPress={() => emit(index + 1)}
        />
      </View>
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
  wrap: {
    backgroundColor: colors.surfaceAlt,
    borderRadius: radius.sm,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
  },
  label: {
    color: colors.textMuted,
    fontSize: typography.caption,
    fontWeight: '600',
    marginBottom: spacing.xs,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  track: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 44,
  },
  trackLine: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: colors.border,
  },
  cell: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.border,
  },
  dotActive: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.primary,
  },
  cellText: {
    color: colors.textMuted,
    fontSize: typography.caption,
    fontWeight: '600',
  },
  cellTextActive: {
    color: colors.text,
    fontSize: typography.body,
    fontWeight: '700',
  },
  dead: {
    color: colors.danger,
  },
  stepper: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: colors.surface,
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
    fontSize: typography.body,
    fontWeight: '700',
  },
});
```

Notes on the code above:
- `lastEmitted.current = index;` at the top of the render body re-syncs the dedupe ref every time the parent gives us a fresh `track.index` (e.g. after Redux updates), so a later drag's dedupe check compares against the real current index, not a stale value from before the last render.
- `printed === 0 && styles.dead` is applied last in the style array for every cell (active or not), so a dead (0) box always renders red — matches the "always red regardless of selection" rule.
- `Gesture.Pan().runOnJS(true)` makes `onBegin`/`onUpdate` run as plain JS callbacks (not UI-thread worklets), which keeps `emit` a normal function that can call `onChangeIndex` (which will dispatch Redux) directly, no `runOnJS()` wrapping needed. This is a deliberate simplification vs. `BoardScreen.tsx`'s worklet+`useSharedValue` pattern — that pattern exists there for 60fps pinch/pan of a large board; this control only has up to 9 discrete stops, so a JS-thread callback per touch move is fine.

- [ ] **Step 2: Type-check and lint**

Run: `npx tsc --noEmit && npx eslint src/modules/ui/components/StatTrackSlider.tsx`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/modules/ui/components/StatTrackSlider.tsx
git commit -m "feat(ui): add StatTrackSlider component"
```

---

### Task 2: Swap the module export and delete `StatBadge`

**Files:**
- Modify: `src/modules/ui/index.ts`
- Delete: `src/modules/ui/components/StatBadge.tsx`

**Interfaces:**
- Consumes: `StatTrackSlider` from Task 1 (`src/modules/ui/components/StatTrackSlider.tsx`).
- Produces: `@/modules/ui` now exports `StatTrackSlider` instead of `StatBadge`. Task 3 imports it as `import { StatTrackSlider } from '@/modules/ui'`.

- [ ] **Step 1: Confirm `StatBadge` has no other consumers**

Run: `grep -rn "StatBadge" src`
Expected: only `src/modules/ui/index.ts` and `src/modules/ui/components/StatBadge.tsx` itself, plus `src/features/play/ResolutionSheet.tsx` (handled in Task 3 — if Task 3 hasn't run yet, that's expected and fine).

- [ ] **Step 2: Update the barrel export**

In `src/modules/ui/index.ts`, replace:

```ts
export { StatBadge } from './components/StatBadge';
```

with:

```ts
export { StatTrackSlider } from './components/StatTrackSlider';
```

- [ ] **Step 3: Delete the old component file**

Run: `rm src/modules/ui/components/StatBadge.tsx`

- [ ] **Step 4: Type-check (expect a failure — this is the checkpoint before Task 3 fixes it)**

Run: `npx tsc --noEmit`
Expected: FAIL — `src/features/play/ResolutionSheet.tsx` still imports `StatBadge` from `@/modules/ui`, which no longer exists. This confirms Task 3 is the only remaining consumer to fix.

- [ ] **Step 5: Commit**

```bash
git add src/modules/ui/index.ts
git rm src/modules/ui/components/StatBadge.tsx
git commit -m "refactor(ui): replace StatBadge export with StatTrackSlider"
```

---

### Task 3: Wire `StatTrackSlider` into `ResolutionSheet`

**Files:**
- Modify: `src/features/play/ResolutionSheet.tsx:4` (import line)
- Modify: `src/features/play/ResolutionSheet.tsx:342-360` (impact stat rendering block)
- Modify: `src/features/play/ResolutionSheet.tsx:598-603` (`statRow` style)

**Interfaces:**
- Consumes: `StatTrackSlider` from `@/modules/ui` (Task 2), `adjustStat` and `StatKey`/`StatTrack` already imported in this file.

- [ ] **Step 1: Update the import**

In `src/features/play/ResolutionSheet.tsx:4`, replace:

```tsx
import { Button, Card, StatBadge, colors, radius, spacing, typography } from '@/modules/ui';
```

with:

```tsx
import { Button, Card, StatTrackSlider, colors, radius, spacing, typography } from '@/modules/ui';
```

- [ ] **Step 2: Replace the stat rendering block**

Find this block (currently around line 342-360):

```tsx
                  {impactStats.length > 0 ? (
                    <View style={styles.statRow}>
                      {impactStats.map(stat => (
                        <StatBadge
                          key={stat}
                          stat={stat}
                          value={currentStat(explorer.stats[stat])}
                          onDecrement={() => {
                            dispatch(adjustStat({ characterId: explorer.id, stat, delta: -1 }));
                            setChanged(true);
                          }}
                          onIncrement={() => {
                            dispatch(adjustStat({ characterId: explorer.id, stat, delta: 1 }));
                            setChanged(true);
                          }}
                        />
                      ))}
                    </View>
                  ) : null}
```

Replace it with:

```tsx
                  {impactStats.length > 0 ? (
                    <View style={styles.statRow}>
                      {impactStats.map(stat => (
                        <StatTrackSlider
                          key={stat}
                          stat={stat}
                          track={explorer.stats[stat]}
                          onChangeIndex={i => {
                            dispatch(
                              adjustStat({
                                characterId: explorer.id,
                                stat,
                                delta: i - explorer.stats[stat].index,
                              }),
                            );
                            setChanged(true);
                          }}
                        />
                      ))}
                    </View>
                  ) : null}
```

`currentStat` stays imported and used elsewhere in this file (the summary stage at line ~373), so don't remove that import.

- [ ] **Step 3: Switch `statRow` from a wrapped row to a vertical stack**

The old layout packed compact badges side by side; `StatTrackSlider` is full-width per stat, so find:

```ts
  statRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    justifyContent: 'space-between',
  },
```

and replace with:

```ts
  statRow: {
    flexDirection: 'column',
    gap: spacing.sm,
  },
```

- [ ] **Step 4: Type-check and lint**

Run: `npx tsc --noEmit && npx eslint src`
Expected: no errors (this also confirms Task 2's dangling import is now fixed).

- [ ] **Step 5: Commit**

```bash
git add src/features/play/ResolutionSheet.tsx
git commit -m "feat(play): use StatTrackSlider for impact stat adjustment"
```

---

### Task 4: Manual verification on device

**Files:** none (verification only).

- [ ] **Step 1: Build and run on a connected device or simulator**

Run: `npx react-native run-ios` (or the Release/device-specific invocation already established for this project, e.g. `npx react-native run-ios --no-packager --mode Release --udid <udid> --extra-params "DEVELOPMENT_TEAM=G9R47GGCGM CODE_SIGN_STYLE=Automatic -allowProvisioningUpdates"`).

- [ ] **Step 2: Reach the impact stat screen**

In the app: create/open a game with at least one explorer, draw an Event/Omen/Room card that deals physical or mental damage, and get to the "impact" stage in `ResolutionSheet` (the sheet shown in the earlier screenshot with "Tác động lên <character>").

- [ ] **Step 3: Verify drag**

Press and drag a finger across a stat's track. Expected: the highlighted box (bigger dot + bold white number) follows the finger in real time, moving between adjacent boxes as the finger crosses their midpoint.

- [ ] **Step 4: Verify tap-to-jump**

Tap directly on a box away from the current position (no drag). Expected: the pointer jumps straight to that box.

- [ ] **Step 5: Verify end buttons**

Tap `[−]` and `[+]`. Expected: pointer moves exactly one box per tap; the button dims and stops responding at index 0 / index (count-1).

- [ ] **Step 6: Verify the dead-box color**

Drag or tap to the box printing `0`. Expected: that box's number renders in the red "danger" color, whether or not it's the currently active box (check by moving one step away and back).

- [ ] **Step 7: Verify Redux state matches the UI**

After a few drags/taps, back out to the summary stage (`explore.summary`). Expected: the "before → after" values shown match the last box you landed on for each stat.

No commit for this task — it's a verification checkpoint. If any check fails, fix the relevant task above and re-run from Step 1.
