# Backlog Round 1 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship 6 small, independent UI improvements from the backlog: search filters for the room/card pickers, a standalone quick dice-roll icon in the card resolution modal, a remaining-moves (Speed) indicator and repositioned turn bar on Board, used-token suggestion chips, and a held-items list in Toolbox Player Info.

**Architecture:** Each task is a self-contained UI change to an existing screen/component — no new Redux state, no new reducers, no new dependencies. All 6 reuse existing selectors/actions/helpers already in the codebase (`rollDice`, `currentStat`, `addRoomToken`, `s.cards.drawn`).

**Tech Stack:** React Native, TypeScript, `react-i18next`, existing Redux selectors.

## Global Constraints

- Design spec: `docs/superpowers/specs/2026-07-30-backlog-round-1-design.md` — this plan implements it in full.
- No new npm dependencies (no dropdown/picker library) — task 4's "dropdown" is a row of suggestion chips (`Pressable`s), matching the spec's explicit decision to avoid adding a new UI library.
- No reducer/state-shape changes anywhere in this plan — every task reads existing state or dispatches an existing action unchanged.
- This project does not render RN UI trees in Jest — no new Jest tests in this plan; all verification is `tsc`/`eslint` plus the manual on-device pass in the final task.
- **Do not build/deploy to a device until all 5 feature tasks are committed and reviewed.** The final task is the first (and only) build for this batch.

---

### Task 1: Search filter for room and card pickers

**Files:**
- Modify: `src/features/board/BoardScreen.tsx`
- Modify: `src/features/play/ResolutionSheet.tsx`
- Modify: `src/modules/i18n/locales/vi.ts` and `src/modules/i18n/locales/en.ts`

**Interfaces:** none new — purely local component state (`search`) filtering the existing `availableDefs` arrays already computed in both files.

- [ ] **Step 1: Add the i18n key**

In `src/modules/i18n/locales/vi.ts`, inside the `common` block, add after `effect`:

```ts
  common: {
    remove: 'Xóa',
    discard: 'Bỏ thẻ',
    effect: 'Tác dụng',
    search: 'Tìm kiếm...',
  },
```

In `src/modules/i18n/locales/en.ts`, inside the `common` block, add after `effect`:

```ts
  common: {
    remove: 'Remove',
    discard: 'Discard',
    effect: 'Effect',
    search: 'Search...',
  },
```

- [ ] **Step 2: Filter the room picker in `BoardScreen.tsx`**

Read the file first to confirm current line numbers (recent tasks have touched this area — the `availableDefs` computation and the picker `ScrollView`). Add a new local state near the other picker-related state (`pendingExplore`/`placingAt` etc.):

```ts
  const [roomSearch, setRoomSearch] = useState('');
```

Find where `availableDefs` is computed:

```ts
  const availableDefs = floorDefs.filter(
    def => !rooms.some(r => r.defId === def.defId),
  );
```

Immediately after it, add a second filter pass for search (keep `availableDefs` as the base "not yet placed" list, and derive a separately-named filtered list for rendering so `randomDef` still randomizes across ALL available rooms, not just search-matched ones — the spec doesn't ask for the Random button to respect search):

```ts
  const searchedDefs = availableDefs.filter(def =>
    def.name.toLowerCase().includes(roomSearch.trim().toLowerCase()),
  );
```

Find the room-picker rendering (the `{availableDefs.length === 0 ? ... : (<ScrollView>...)}` block from a prior task). Add a `TextInput` immediately before that whole conditional block, and change the conditional's list source and empty-check from `availableDefs` to `searchedDefs`:

```tsx
            <TextInput
              value={roomSearch}
              onChangeText={setRoomSearch}
              placeholder={t('common.search')}
              placeholderTextColor={colors.textMuted}
              style={styles.tokenInput}
            />
            {searchedDefs.length === 0 ? (
              <Text style={styles.defDoors}>{t('board.noRoomsLeft')}</Text>
            ) : (
              <ScrollView style={styles.sheetList}>
                {searchedDefs.map(def => (
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

(Reusing `styles.tokenInput` for visual consistency with the existing token-name input, per the spec. `TextInput` is already imported in this file — confirm and don't re-import.)

Also reset `roomSearch` back to `''` wherever the picker modal is dismissed/reopened (find `cancelPicker` and `onPickRoom` — add `setRoomSearch('');` at the end of both, so the next time the picker opens it starts unfiltered).

- [ ] **Step 3: Filter the card picker in `ResolutionSheet.tsx`**

Read the file first to confirm current structure around `availableDefs` (added by a prior task). Add local state near the component's other `useState` calls:

```ts
  const [cardSearch, setCardSearch] = useState('');
```

Find:

```ts
                const availableDefs = CARD_DEFS_BY_TYPE[symbol].filter(
                  def => !drawnDefIds.includes(def.defId),
                );
```

Add a second filtered variable right after it:

```ts
                const searchedDefs = availableDefs.filter(def =>
                  def.name.toLowerCase().includes(cardSearch.trim().toLowerCase()),
                );
```

Update the subsequent render to add a `TextInput` before the list/empty-state, and swap `availableDefs` for `searchedDefs` in both the empty check and the `.map()`:

```tsx
                return (
                  <>
                    <TextInput
                      value={cardSearch}
                      onChangeText={setCardSearch}
                      placeholder={t('common.search')}
                      placeholderTextColor={colors.textMuted}
                      style={styles.searchInput}
                    />
                    {searchedDefs.length === 0 ? (
                      <Text style={styles.desc}>
                        {t('explore.noCardsLeft', { type: capitalize(symbol) })}
                      </Text>
                    ) : (
                      <ScrollView style={styles.list}>
                        {searchedDefs.map(def => (
                          <Pressable
                            key={def.defId}
                            style={styles.row}
                            onPress={() => onPickCard(def)}>
                            <Text style={styles.rowName}>{def.name}</Text>
                          </Pressable>
                        ))}
                      </ScrollView>
                    )}
                  </>
                );
```

(Match this against whatever the actual current IIFE/const structure looks like from the prior task — the exact wrapping syntax may differ slightly; preserve it, just add the `TextInput` and swap the data source.)

Add `TextInput` to this file's `react-native` import if not already present. Add a new style `searchInput` to this file's `StyleSheet.create` — copy the shape of `BoardScreen.tsx`'s `tokenInput` style (`backgroundColor: colors.surfaceAlt, borderRadius: radius.sm, paddingHorizontal: spacing.sm, paddingVertical: spacing.xs, color: colors.text, fontSize: typography.body`) for visual consistency across the app.

Reset `cardSearch` to `''` in `close()` (so reopening the sheet for a fresh draw starts unfiltered).

- [ ] **Step 4: Type-check, lint, and run the suite**

Run: `npx tsc --noEmit && npx eslint src && npx jest`
Expected: no errors; all existing tests still passing (11/11 as of the last count — confirm the actual current count and don't be alarmed if it's grown from other work, just confirm 100% pass).

- [ ] **Step 5: Commit**

```bash
git add src/features/board/BoardScreen.tsx src/features/play/ResolutionSheet.tsx src/modules/i18n/locales/vi.ts src/modules/i18n/locales/en.ts
git commit -m "feat: add search filter to room and card pickers"
```

---

### Task 2: Quick standalone dice-roll icon in the card resolution modal

**Files:**
- Modify: `src/features/play/ResolutionSheet.tsx`

**Interfaces:** none new — uses the already-imported `rollDice` from `@/modules/combat-engine`.

- [ ] **Step 1: Add local state**

Near the component's other `useState` calls, add:

```ts
  const [quickRoll, setQuickRoll] = useState<ReturnType<typeof rollDice> | null>(null);
```

- [ ] **Step 2: Add the quick-roll row inside the card's `<Card>` block**

Find:

```tsx
              <Card title={card.name}>
                <Text style={styles.desc}>{card.description}</Text>
                {card.effect ? (
                  <>
                    <Text style={styles.effectLabel}>{t('common.effect')}</Text>
                    <Text style={styles.effect}>{card.effect}</Text>
                  </>
                ) : null}
              </Card>
```

Replace with:

```tsx
              <Card title={card.name}>
                <Text style={styles.desc}>{card.description}</Text>
                {card.effect ? (
                  <>
                    <Text style={styles.effectLabel}>{t('common.effect')}</Text>
                    <Text style={styles.effect}>{card.effect}</Text>
                  </>
                ) : null}
                <View style={styles.quickRollRow}>
                  <Pressable
                    onPress={() => setQuickRoll(rollDice(1))}
                    style={styles.quickRollBtn}>
                    <Text style={styles.quickRollIcon}>🎲</Text>
                  </Pressable>
                  {quickRoll ? (
                    <Text style={styles.quickRollResult}>{quickRoll.dice[0]}</Text>
                  ) : null}
                </View>
              </Card>
```

- [ ] **Step 3: Add the styles**

In this file's `StyleSheet.create` call, add:

```ts
  quickRollRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    marginTop: spacing.sm,
  },
  quickRollBtn: {
    width: 36,
    height: 36,
    borderRadius: radius.sm,
    backgroundColor: colors.surfaceAlt,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quickRollIcon: {
    fontSize: typography.heading,
  },
  quickRollResult: {
    color: colors.text,
    fontSize: typography.heading,
    fontWeight: '700',
  },
```

- [ ] **Step 4: Type-check, lint, and run the suite**

Run: `npx tsc --noEmit && npx eslint src && npx jest`
Expected: no errors; all tests still passing.

- [ ] **Step 5: Commit**

```bash
git add src/features/play/ResolutionSheet.tsx
git commit -m "feat(play): add quick standalone dice-roll icon to card modal"
```

---

### Task 3: Move the turn bar to the top of Board, show remaining moves (Speed)

**Files:**
- Modify: `src/features/board/BoardScreen.tsx`
- Modify: `src/modules/i18n/locales/vi.ts` and `src/modules/i18n/locales/en.ts`

**Interfaces:** none new — uses `currentStat` from `@/modules/game-engine` (not yet imported in this file — add it).

- [ ] **Step 1: Update the `board.turn` i18n string**

In `src/modules/i18n/locales/vi.ts`, find (inside the `board` block):

```ts
    turn: '▶ {{name}} · Vòng {{round}}',
```

Replace with:

```ts
    turn: '▶ {{name}} · Vòng {{round}} · 👟 {{speed}}',
```

In `src/modules/i18n/locales/en.ts`, find:

```ts
    turn: '▶ {{name}} · Round {{round}}',
```

Replace with:

```ts
    turn: '▶ {{name}} · Round {{round}} · 👟 {{speed}}',
```

- [ ] **Step 2: Import `currentStat`**

In `src/features/board/BoardScreen.tsx`, find the `@/modules/game-engine` import and add `currentStat` to it (check the exact current import list first — don't duplicate or break existing names).

- [ ] **Step 3: Read the file, then move the turn bar**

Read `src/features/board/BoardScreen.tsx` in full around the `container`/`tray`/`turnRow` area (roughly lines 260-360, but confirm against the actual current file — Task 1 of this same plan will have already touched nearby code, so re-read fresh).

Find the block:

```tsx
      {/* Character tray + turn tracker */}
      <View style={styles.tray}>
        {characters.length === 0 ? (
          <>
            <Text style={styles.trayTitle}>{t('board.tokensTitle')}</Text>
            <Text style={styles.hint}>{t('board.noCharacters')}</Text>
          </>
        ) : (
          <>
            <View style={styles.turnRow}>
              <Text style={styles.turnLabel} numberOfLines={1}>
                {turnChar
                  ? t('board.turn', { name: turnChar.name, round })
                  : t('board.tokensTitle')}
              </Text>
              <Pressable
                onPress={() => dispatch(nextTurn())}
                style={styles.endTurnBtn}>
                <Text style={styles.endTurnText}>{t('board.endTurn')}</Text>
              </Pressable>
            </View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.trayRow}>
```

Restructure so the turn-bar block becomes a standalone top-level element rendered BEFORE `omenBar`, and `tray` no longer renders it (the `characters.length > 0` branch inside `tray` now goes straight to the character-chip `ScrollView`):

```tsx
    <View style={styles.container}>
      {/* Turn tracker — top of screen */}
      {characters.length > 0 ? (
        <View style={styles.topBar}>
          <View style={styles.turnRow}>
            <Text style={styles.turnLabel} numberOfLines={1}>
              {turnChar
                ? t('board.turn', {
                    name: turnChar.name,
                    round,
                    speed: currentStat(turnChar.stats.speed),
                  })
                : t('board.tokensTitle')}
            </Text>
            <Pressable
              onPress={() => dispatch(nextTurn())}
              style={styles.endTurnBtn}>
              <Text style={styles.endTurnText}>{t('board.endTurn')}</Text>
            </Pressable>
          </View>
        </View>
      ) : null}

      {/* Omen tracker */}
      <View style={styles.omenBar}>
```

(The `{/* Omen tracker */}` comment and `<View style={styles.omenBar}>` line already exist right after — this step just inserts the new top-bar block before them, using the existing `container` opening tag as the anchor point. Don't duplicate `<View style={styles.container}>`.)

Then, further down, simplify the `tray` block to drop the now-relocated turn-row markup:

```tsx
      {/* Character tray */}
      <View style={styles.tray}>
        {characters.length === 0 ? (
          <>
            <Text style={styles.trayTitle}>{t('board.tokensTitle')}</Text>
            <Text style={styles.hint}>{t('board.noCharacters')}</Text>
          </>
        ) : (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.trayRow}>
```

(Everything else inside the character-chip `ScrollView` — the `.map()` over `characters` and its closing tags — stays exactly as it is today; only the wrapping `<>...</>` fragment that used to also hold `turnRow` is removed, since `ScrollView` is now the branch's only child. Read the actual closing-tag structure carefully to make sure you don't leave a dangling `</>`.)

- [ ] **Step 4: Add the `topBar` style**

In this file's `StyleSheet.create` call, add a new style near `omenBar`/`tray`:

```ts
  topBar: {
    backgroundColor: colors.surface,
    paddingHorizontal: spacing.sm,
    paddingTop: spacing.sm,
    paddingBottom: spacing.xs,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
```

- [ ] **Step 5: Type-check, lint, and run the suite**

Run: `npx tsc --noEmit && npx eslint src && npx jest`
Expected: no errors; all tests still passing.

- [ ] **Step 6: Commit**

```bash
git add src/features/board/BoardScreen.tsx src/modules/i18n/locales/vi.ts src/modules/i18n/locales/en.ts
git commit -m "feat(board): move turn bar to top of screen, show remaining moves"
```

---

### Task 4: Used-token suggestion chips

**Files:**
- Modify: `src/features/board/BoardScreen.tsx`

**Interfaces:** none new.

- [ ] **Step 1: Read the file, then compute the suggestion list**

Read `src/features/board/BoardScreen.tsx` fresh around the token-adding UI (`tokenAddRow`, roughly lines 407-446 per earlier investigation, but re-confirm — Tasks 1 and 3 in this same plan touch this file too, so line numbers will have shifted).

Near where `rooms` is already selected (`useAppSelector(s => s.rooms.rooms)`), add:

```ts
  const usedTokenLabels = Array.from(
    new Set(rooms.flatMap(r => (r.tokens ?? []).map(tk => tk.label))),
  );
```

- [ ] **Step 2: Render the suggestion chips**

Find the existing token-add UI:

```tsx
              <View style={styles.tokenAddRow}>
                <TextInput
                  value={tokenInput}
                  onChangeText={setTokenInput}
                  placeholder={t('board.tokenPlaceholder')}
                  placeholderTextColor={colors.textMuted}
                  style={styles.tokenInput}
                />
                <Button
                  label={t('board.addToken')}
                  onPress={() => {
                    const label = tokenInput.trim();
                    if (!label) return;
                    dispatch(addRoomToken(selected.id, label));
                    setTokenInput('');
                  }}
                />
              </View>
```

Add the suggestion row immediately BEFORE this block (only when there's something to suggest):

```tsx
              {usedTokenLabels.length > 0 ? (
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={styles.tokenSuggestRow}>
                  {usedTokenLabels.map(label => (
                    <Pressable
                      key={label}
                      onPress={() => dispatch(addRoomToken(selected.id, label))}
                      style={styles.tokenSuggestChip}>
                      <Text style={styles.tokenSuggestText}>{label}</Text>
                    </Pressable>
                  ))}
                </ScrollView>
              ) : null}
              <View style={styles.tokenAddRow}>
                <TextInput
                  value={tokenInput}
                  onChangeText={setTokenInput}
                  placeholder={t('board.tokenPlaceholder')}
                  placeholderTextColor={colors.textMuted}
                  style={styles.tokenInput}
                />
                <Button
                  label={t('board.addToken')}
                  onPress={() => {
                    const label = tokenInput.trim();
                    if (!label) return;
                    dispatch(addRoomToken(selected.id, label));
                    setTokenInput('');
                  }}
                />
              </View>
```

(The `TextInput`/`Button` block itself is UNCHANGED — copy it verbatim, this step only adds the new suggestion row above it. Free-text entry keeps working exactly as before.)

- [ ] **Step 3: Add the styles**

In this file's `StyleSheet.create` call, add:

```ts
  tokenSuggestRow: {
    gap: spacing.xs,
    paddingBottom: spacing.xs,
  },
  tokenSuggestChip: {
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
    borderRadius: radius.sm,
    backgroundColor: colors.surfaceAlt,
    borderWidth: 1,
    borderColor: colors.border,
  },
  tokenSuggestText: {
    color: colors.text,
    fontSize: typography.caption,
  },
```

- [ ] **Step 4: Type-check, lint, and run the suite**

Run: `npx tsc --noEmit && npx eslint src && npx jest`
Expected: no errors; all tests still passing.

- [ ] **Step 5: Commit**

```bash
git add src/features/board/BoardScreen.tsx
git commit -m "feat(board): suggest previously-used token labels as tappable chips"
```

---

### Task 5: Held-items list in Toolbox Player Info

**Files:**
- Modify: `src/modules/ui/components/toolbox/ToolboxPlayerDetailView.tsx`
- Modify: `src/modules/i18n/locales/vi.ts` and `src/modules/i18n/locales/en.ts`

**Interfaces:** none new — reads `state.cards.drawn` directly via `useAppSelector`.

- [ ] **Step 1: Add the i18n keys**

In `src/modules/i18n/locales/vi.ts`, inside the existing `toolbox` block, add:

```ts
    items: '🗡️ Vật phẩm đang giữ',
    noItems: 'Chưa có vật phẩm nào.',
```

In `src/modules/i18n/locales/en.ts`, inside the existing `toolbox` block, add:

```ts
    items: '🗡️ Items held',
    noItems: 'No items yet.',
```

- [ ] **Step 2: Read the current file, then add the items list**

Read `src/modules/ui/components/toolbox/ToolboxPlayerDetailView.tsx` in full (it's short, ~71 lines).

Add a new selector inside the component, alongside the existing `character` selector:

```ts
  const items = useAppSelector(s =>
    s.cards.drawn.filter(c => c.type === 'item' && c.ownerId === characterId),
  );
```

Find:

```tsx
    <View style={toolboxStyles.menu}>
      <Text style={toolboxStyles.label}>{character.name}</Text>
      {STAT_KEYS.map(stat => (
```

Replace with:

```tsx
    <View style={toolboxStyles.menu}>
      <Text style={toolboxStyles.label}>{character.name}</Text>
      <Text style={toolboxStyles.menuRowText}>{t('toolbox.items')}</Text>
      {items.length === 0 ? (
        <Text style={toolboxStyles.backText}>{t('toolbox.noItems')}</Text>
      ) : (
        items.map(item => (
          <Text key={item.id} style={toolboxStyles.menuRowText}>
            • {item.name}
          </Text>
        ))
      )}
      {STAT_KEYS.map(stat => (
```

(Reusing `toolboxStyles.menuRowText`/`backText` — already-defined muted/body text styles from the shared toolbox chrome — rather than inventing new styles, matching this component's existing minimal-styling approach.)

- [ ] **Step 3: Type-check, lint, and run the suite**

Run: `npx tsc --noEmit && npx eslint src && npx jest`
Expected: no errors; all tests still passing.

- [ ] **Step 4: Commit**

```bash
git add src/modules/ui/components/toolbox/ToolboxPlayerDetailView.tsx src/modules/i18n/locales/vi.ts src/modules/i18n/locales/en.ts
git commit -m "feat(ui): show held items in toolbox Player Info"
```

---

### Task 6: Build, deploy, and manually verify all 6 features

**Files:** none (verification only).

- [ ] **Step 1: Build and deploy**

Run the project's established device-specific Release invocation (e.g. `npx react-native run-ios --no-packager --mode Release --udid 00008101-00124D2E36F1003A --extra-params "DEVELOPMENT_TEAM=G9R47GGCGM CODE_SIGN_STYLE=Automatic -allowProvisioningUpdates"`, or ask if the target device has changed).

- [ ] **Step 2: Search filters**

Open the room picker (explore a new cell) and type a partial room name — confirm the list narrows correctly, case-insensitively. Clear the search and confirm the full list returns. Repeat for the card picker (draw a card via Toolbox "Rút bài").

- [ ] **Step 3: Quick dice icon**

In the card resolution modal (after picking a card), tap the 🎲 icon — confirm a die face (0/1/2) appears next to it. Tap again — confirm it re-rolls (value may repeat, that's fine, just confirm the tap is responsive).

- [ ] **Step 4: Turn bar position and remaining moves**

On Board, confirm the "▶ Name · Vòng N · 👟 Speed" bar now renders at the TOP of the screen (above the omen tracker), and the 👟 number matches that character's current Speed value (cross-check against Toolbox "Thông tin nhà thám hiểm" for the same character). Confirm the character chip row still renders correctly at the bottom.

- [ ] **Step 5: Token suggestion chips**

Select a room, add a free-text token (e.g. "Statue"). Select a different room, confirm "Statue" now appears as a tappable chip above the input; tap it and confirm it's added without needing to type. Confirm the free-text input still works for a brand-new label.

- [ ] **Step 6: Held items list**

Give an item to a character (via the existing Item flow or Toolbox draw). Open Toolbox → "Thông tin nhà thám hiểm" → select that character → confirm the item's name appears in the new held-items list. Select a character with no items and confirm the empty-state message shows instead.

No commit for this task — it's a verification checkpoint. If any check fails, fix the relevant task above and re-run from Step 1.
