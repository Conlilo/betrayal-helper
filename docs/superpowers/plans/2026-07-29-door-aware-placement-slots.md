# Door-Aware Room Placement Slots Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** `isPlaceable()` should only mark an empty board cell as a valid placement slot when a neighboring room actually has a door facing that cell, instead of any orthogonally adjacent empty cell.

**Architecture:** One pure-function change in `src/modules/room-engine/geometry.ts` (add a `doorsOf` callback parameter, reusing the same door-matching logic `connectedDirections` already uses), plus updating the single call site in `src/features/board/BoardScreen.tsx` to pass the existing `doorsOfDef` helper.

**Tech Stack:** React Native, TypeScript, Jest (existing pure-function test style in `__tests__/App.test.tsx`).

## Global Constraints

- Design spec: `docs/superpowers/specs/2026-07-29-door-aware-placement-slots-design.md` — this plan implements it in full.
- A cell is placeable if **at least one** (not all) adjacent room has a door facing it — `some`, not `every`.
- Door direction must account for rotation: use `effectiveDoors(doorsOf(neighbor), neighbor.rotation)`, matching the existing pattern in `connectedDirections` (`src/modules/room-engine/geometry.ts:58-72`).
- The first-room-on-empty-floor placement path (`roomsOnFloor.length === 0 && x === BOARD_CENTER && y === BOARD_CENTER` in `BoardScreen.tsx`) does not call `isPlaceable` and must not be touched.
- This project does not render RN UI trees in Jest (see `__tests__/App.test.tsx` header comment) — no new UI test for `BoardScreen.tsx`. `isPlaceable` itself is a pure function and gets unit tests in the same style as the existing `describe('room-engine geometry', ...)` block.

---

### Task 1: Make `isPlaceable` door-aware and update its call site

**Files:**
- Modify: `src/modules/room-engine/geometry.ts:74-86` (the `isPlaceable` function)
- Modify: `src/features/board/BoardScreen.tsx:154` (the `canPlace` helper that calls `isPlaceable`)
- Modify: `__tests__/App.test.tsx` (add cases to the existing `describe('room-engine geometry', ...)` block)

**Interfaces:**
- Produces: `isPlaceable(rooms: PlacedRoom[], floor: string, x: number, y: number, doorsOf: (r: PlacedRoom) => Direction[]): boolean` — same name, one new required parameter appended at the end. The only call site in the app (`BoardScreen.tsx:154`) is updated in this same task, so there's no intermediate broken state to hand off.

- [ ] **Step 1: Write the failing tests**

Open `__tests__/App.test.tsx`. Find the existing block:

```ts
describe('room-engine geometry', () => {
  it('rotates doors clockwise', () => {
    expect(effectiveDoors(['N'], 90)).toEqual(['E']);
    expect(effectiveDoors(['N'], 180)).toEqual(['S']);
    expect(effectiveDoors(['N', 'W'], 90)).toEqual(['E', 'N']);
  });

  it('connects two rooms only when doors face each other', () => {
    const a: PlacedRoom = {
      id: 'a', defId: 'a', name: 'A', floor: 'ground', x: 0, y: 0, rotation: 0,
    };
    const b: PlacedRoom = {
      id: 'b', defId: 'b', name: 'B', floor: 'ground', x: 1, y: 0, rotation: 0,
    };
    const doorsOf = (r: PlacedRoom) => (r.id === 'a' ? ['E'] : ['W']) as any;
    expect(connectedDirections(a, ['E'], [a, b], doorsOf)).toEqual(['E']);

    // B's door faces away (E, not W) → no connection.
    const doorsOf2 = (r: PlacedRoom) => (r.id === 'a' ? ['E'] : ['E']) as any;
    expect(connectedDirections(a, ['E'], [a, b], doorsOf2)).toEqual([]);
  });
});
```

Add a new `it(...)` inside this same `describe` block (after the existing two), and add `isPlaceable` to the import from `@/modules/room-engine` at the top of the file (alongside the existing `effectiveDoors`, `connectedDirections`, `type PlacedRoom` import):

```ts
  it('only marks a cell placeable when a neighbor has a door facing it', () => {
    const withDoorSouth: PlacedRoom = {
      id: 'a', defId: 'a', name: 'A', floor: 'ground', x: 0, y: 0, rotation: 0,
    };
    const doorsOf = (r: PlacedRoom) => (r.id === 'a' ? ['S'] : []) as any;

    // South of A: A has a door facing south → placeable.
    expect(isPlaceable([withDoorSouth], 'ground', 0, 1, doorsOf)).toBe(true);
    // North of A: A has no door facing north → not placeable.
    expect(isPlaceable([withDoorSouth], 'ground', 0, -1, doorsOf)).toBe(false);
    // East of A: A has no door facing east → not placeable.
    expect(isPlaceable([withDoorSouth], 'ground', 1, 0, doorsOf)).toBe(false);
    // A cell with no adjacent room at all is never placeable.
    expect(isPlaceable([withDoorSouth], 'ground', 5, 5, doorsOf)).toBe(false);
    // An already-occupied cell is never placeable, door or not.
    expect(isPlaceable([withDoorSouth], 'ground', 0, 0, doorsOf)).toBe(false);

    // A cell adjacent to two rooms is placeable if EITHER has a matching
    // door — "some", not "every".
    const noDoorNeighbor: PlacedRoom = {
      id: 'b', defId: 'b', name: 'B', floor: 'ground', x: 1, y: 1, rotation: 0,
    };
    const doorsOfEither = (r: PlacedRoom) =>
      (r.id === 'a' ? ['S'] : []) as any;
    // (0,1) is south of A (has a door there) and west of B (no door) —
    // still placeable because A's door alone is enough.
    expect(
      isPlaceable([withDoorSouth, noDoorNeighbor], 'ground', 0, 1, doorsOfEither),
    ).toBe(true);
  });
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npx jest __tests__/App.test.tsx -t "only marks a cell placeable"`
Expected: FAIL — either a TypeScript error (`isPlaceable` doesn't accept a 5th argument yet) or, if TS is loose enough to let it through, a runtime assertion failure because the current `isPlaceable` returns `true` for the north/east cases (it doesn't check doors yet).

- [ ] **Step 3: Update `isPlaceable` in `geometry.ts`**

In `src/modules/room-engine/geometry.ts`, replace:

```ts
/** True if the cell is empty and orthogonally adjacent to ≥1 placed room. */
export function isPlaceable(
  rooms: PlacedRoom[],
  floor: string,
  x: number,
  y: number,
): boolean {
  if (roomAt(rooms, floor, x, y)) return false;
  return (Object.keys(OFFSET) as Direction[]).some(dir => {
    const { dx, dy } = OFFSET[dir];
    return Boolean(roomAt(rooms, floor, x + dx, y + dy));
  });
}
```

with:

```ts
/**
 * True if the cell is empty and at least one orthogonally adjacent room has
 * a door (after rotation) facing this cell.
 */
export function isPlaceable(
  rooms: PlacedRoom[],
  floor: string,
  x: number,
  y: number,
  doorsOf: (r: PlacedRoom) => Direction[],
): boolean {
  if (roomAt(rooms, floor, x, y)) return false;
  return (Object.keys(OFFSET) as Direction[]).some(dir => {
    const { dx, dy } = OFFSET[dir];
    const neighbor = roomAt(rooms, floor, x + dx, y + dy);
    if (!neighbor) return false;
    const theirs = effectiveDoors(doorsOf(neighbor), neighbor.rotation);
    return theirs.includes(OPPOSITE[dir]);
  });
}
```

- [ ] **Step 4: Update the call site in `BoardScreen.tsx`**

In `src/features/board/BoardScreen.tsx`, find (around line 154):

```ts
  const canPlace = (x: number, y: number) =>
    isPlaceable(rooms, floor, x, y) ||
    (roomsOnFloor.length === 0 && x === BOARD_CENTER && y === BOARD_CENTER);
```

Replace with:

```ts
  const canPlace = (x: number, y: number) =>
    isPlaceable(rooms, floor, x, y, r => doorsOfDef(r.defId)) ||
    (roomsOnFloor.length === 0 && x === BOARD_CENTER && y === BOARD_CENTER);
```

`doorsOfDef` is already imported in this file (used at line 634 for `connectedDirections`) — no new import needed.

- [ ] **Step 5: Run the test to verify it passes**

Run: `npx jest __tests__/App.test.tsx -t "only marks a cell placeable"`
Expected: PASS

- [ ] **Step 6: Run the full suite, type-check, and lint**

Run: `npx jest && npx tsc --noEmit && npx eslint src __tests__`
Expected: all green (8/8 tests — the 7 existing plus this new one; no tsc/eslint errors).

- [ ] **Step 7: Commit**

```bash
git add src/modules/room-engine/geometry.ts src/features/board/BoardScreen.tsx __tests__/App.test.tsx
git commit -m "fix(room-engine): only show placement slots where a neighbor has a matching door"
```

---

### Task 2: Manual verification on device

**Files:** none (verification only).

- [ ] **Step 1: Build and run on a connected device or simulator**

Run: `npx react-native run-ios` (or the established device-specific Release invocation for this project).

- [ ] **Step 2: Reach the board screen**

Open a game, navigate to "Bàn nhà" (the board screen), and place a room known to have doors on only some sides — e.g. a room defined with `doors: ['S']` in `src/modules/room-engine/data/*.ts` (matches the "Grand Staircase" case from the original bug report).

- [ ] **Step 3: Verify only door-facing sides show a placement slot**

Expected: a dashed placement-slot cell appears only on the side(s) matching that room's door(s) after rotation; the other 2-3 sides show no slot.

- [ ] **Step 4: Verify normal placement still works**

Tap a valid (door-facing) slot, pick a room from the picker, confirm it places correctly and the board updates as before.

- [ ] **Step 5: Verify the very first room on an empty floor is unaffected**

On a floor with zero rooms placed, confirm the center cell still shows as placeable (this path bypasses `isPlaceable` entirely, per the Global Constraints, so it should be unchanged).

No commit for this task — it's a verification checkpoint. If any check fails, fix Task 1 and re-run from Step 1.
