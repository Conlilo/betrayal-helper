# Toolbox Menu (Batch 2) — Design

## Bối cảnh

Đợt 1 đã có khung Toolbox (icon header + modal) với 2 mục: Lưu/Lịch sử, Đổ
xúc xắc. Đợt 2 thêm 2 mục nữa và **xóa hẳn** cơ chế rút bài tự động khi khám
phá phòng — theo yêu cầu, người chơi giờ rút bài thủ công qua Toolbox.

## Phạm vi đợt 2

1. Xóa cơ chế rút bài tự động trong `BoardScreen.tsx` (`justPlaced` →
   `cardSymbols` → auto-mở `ResolutionSheet`).
2. Đưa `ResolutionSheet` lên mức global (mount 1 lần ở `App.tsx`, không còn
   sống bên trong `BoardScreen`), điều khiển qua React Context, để gọi được
   từ Toolbox trên cả 6 màn đang chơi.
3. Toolbox thêm mục **"🃏 Rút bài"** → chọn loại bài (Event/Omen/Item) → mở
   `ResolutionSheet` cho **nhân vật đang trong lượt** (`activeCharacterId`).
4. Toolbox thêm mục **"🧑 Thông tin nhà thám hiểm"** → chọn 1 nhà thám hiểm
   → chỉnh 4 chỉ số (tái dùng `StatTrackSlider`) trên **bản nháp cục bộ** →
   Xác nhận (áp dụng qua `adjustStat`) hoặc Hủy (bỏ, không dispatch).

## 1. Xóa auto-draw trong `BoardScreen.tsx`

Trong `useEffect` xử lý `justPlaced` (dòng ~219-236), **giữ nguyên** phần
dispatch `setCharacterRoom` (di chuyển token vào phòng), **xóa** 2 dòng:

```ts
    const cardSymbols = cardSymbolsOf(symbolsOfDef(justPlaced.defId));
    if (cardSymbols.length > 0) {
      setResolve({ explorerId: justPlaced.charId, queue: cardSymbols });
    }
```

Xóa luôn: state `resolve` (dòng 93-95), khối JSX `<ResolutionSheet ... />`
(dòng 540-554), và các import chỉ còn dùng cho phần này —
`symbolsOfDef`, `cardSymbolsOf`, `ResolutionSheet`, `type CardType` (đã xác
nhận qua grep: không còn chỗ nào khác trong file dùng 4 cái này).

## 2. `ResolutionSheet` lên global — Context Provider mới

File mới `src/features/play/ResolutionSheetProvider.tsx`:

```ts
interface DrawRequest {
  explorerId: ID;
  symbol: CardType;
}

const ResolutionContext = createContext<{
  requestDraw: (symbol: CardType) => void;
} | null>(null);

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

export function useRequestCardDraw() {
  const ctx = useContext(ResolutionContext);
  if (!ctx) throw new Error('useRequestCardDraw must be used within ResolutionSheetProvider');
  return ctx.requestDraw;
}
```

- Không còn `queue` (nhiều symbol xếp hàng) — mỗi lần Toolbox chỉ yêu cầu rút
  **đúng 1 lá** loại người chơi chọn. Đây là điểm khác so với luồng cũ
  (1 phòng có thể có nhiều symbol xếp hàng); phù hợp vì giờ người chơi tự
  chọn từng lần rút, không còn tự động theo phòng.
- `explorerId` luôn lấy từ `state.game.activeCharacterId` (đúng yêu cầu
  "đang lượt của ai thì lá bài rút về cho người đó") — Toolbox không cần
  biết/chọn người chơi.

Mount trong `src/app/App.tsx`, bọc quanh `NavigationContainer` (bên trong
`Provider`/`PersistGate`/`LanguageSync`/`SafeAreaProvider` — cần đọc Redux
nên phải nằm trong `Provider`):

```tsx
<SafeAreaProvider>
  <StatusBar .../>
  <ResolutionSheetProvider>
    <NavigationContainer theme={navTheme}>
      <RootNavigator />
    </NavigationContainer>
  </ResolutionSheetProvider>
</SafeAreaProvider>
```

`ResolutionSheet` tự nó vẫn là `<Modal>` — nhưng giờ render từ thân cây
component bình thường (ngang hàng `NavigationContainer`), **không** còn bị
đặt sâu trong header như `ToolboxMenu`'s Modal (đợt 1 đã ghi nhận rủi ro
kiến trúc của việc lồng Modal trong header; cách làm này của đợt 2 không
lặp lại vấn đề đó).

## 3 & 4. Mở rộng `ToolboxMenu`

Do số lượng view tăng lên 5 (`menu`, `dice`, `drawType`, `players`,
`playerDetail`), tách nhỏ theo file để dễ đọc/sửa — mỗi file phụ trách đúng
1 view:

```
src/modules/ui/components/toolbox/
  ToolboxMenu.tsx        # shell: trigger + Modal + view state, import 4 view dưới
  ToolboxDiceView.tsx     # (đợt 1, di chuyển từ trong ToolboxMenu.tsx ra)
  ToolboxDrawView.tsx     # mới: chọn loại bài
  ToolboxPlayersView.tsx  # mới: danh sách nhà thám hiểm
  ToolboxPlayerDetailView.tsx  # mới: chỉnh chỉ số 1 nhà thám hiểm
```

`ToolboxMenu.tsx` (shell) giữ `view: 'menu' | 'dice' | 'drawType' | 'players' | 'playerDetail'`
và các state dùng chung tối thiểu (`selectedPlayerId` cho playerDetail).
Menu chính giờ có 4 dòng: Lưu/Lịch sử, Đổ xúc xắc, Rút bài, Thông tin nhà
thám hiểm.

### `ToolboxDrawView`

- 3 nút: "🎴 Event", "🔮 Omen", "🗡️ Item" (dùng lại đúng icon các key
  `events.draw`/`omens.draw`/`items.draw` đã có, tách phần icon).
- Bấm 1 nút → gọi `requestDraw(symbol)` (từ `useRequestCardDraw()`) → đóng
  hẳn Toolbox modal (không chỉ quay về menu — vì `ResolutionSheet` sắp mở
  full-screen sheet của riêng nó, hai modal chồng nhau không cần thiết).

### `ToolboxPlayersView`

- `useAppSelector(s => s.game.characters)`, render mỗi nhân vật 1 dòng
  (chấm màu `character.color` + `character.name`), bấm → set
  `selectedPlayerId`, chuyển view `playerDetail`.

### `ToolboxPlayerDetailView`

- Props: `characterId: ID`, `onDone: () => void` (quay lại `players`).
- Khi mount (hoặc khi `characterId` đổi), copy `character.stats` vào state
  nháp cục bộ: `useState<Record<StatKey, StatTrack> | null>(null)`, khởi
  tạo qua `useEffect`/lazy init từ Redux character hiện tại.
- Render 4 `StatTrackSlider` (mỗi `StatKey` trong `STAT_KEYS`), `track`
  lấy từ state nháp, `onChangeIndex` cập nhật **chỉ** state nháp (không
  dispatch).
- Nút **"✓ Xác nhận"**: với mỗi `stat` trong `STAT_KEYS`, nếu
  `draft[stat].index !== original[stat].index`, dispatch
  `adjustStat({ characterId, stat, delta: draft[stat].index - original[stat].index })`.
  Sau đó `onDone()`.
- Nút **"✕ Hủy"**: không dispatch gì, `onDone()` thẳng.

## i18n

Thêm vào namespace `toolbox` (vi + en):

```
players: '🧑 Thông tin nhà thám hiểm',
drawCard: '🃏 Rút bài',
pickCardType: 'Chọn loại bài muốn rút',
confirm: '✓ Xác nhận',
cancel: '✕ Hủy',
noCharacters: 'Chưa có nhà thám hiểm nào.',
```

(`event`/`omen`/`item` labels trong `ToolboxDrawView` tái dùng
`t('events.draw')`/`t('omens.draw')`/`t('items.draw')` có sẵn, không tạo
key trùng.)

## Không thay đổi

- Không đổi `ResolutionSheet.tsx` chính nó — vẫn nhận đúng
  `{visible, explorerId, symbol, onClose}` như cũ, không cần sửa gì bên
  trong.
- Không đổi `adjustStat` reducer — dùng nguyên như `ResolutionSheet` đã
  dùng.
- Không thêm reducer mới, không đổi `Character`/`StatTrack` type.

## Testing

- Không có test tự động cho UI (cùng quy ước dự án).
- Kiểm thử thủ công trên thiết bị (gộp chung với checklist đợt 1, build 1
  lần duy nhất sau khi cả 2 đợt xong):
  - Khám phá phòng mới (bất kỳ symbol nào) → xác nhận **không** còn tự mở
    sheet rút bài; token vẫn di chuyển đúng vào phòng.
  - Toolbox → "Rút bài" → chọn 1 loại → `ResolutionSheet` mở đúng, gán
    đúng cho nhân vật đang trong lượt (`activeCharacterId`), xử lý xong
    như luồng cũ.
  - Toolbox → "Thông tin nhà thám hiểm" → chọn 1 người → kéo/chỉnh vài
    `StatTrackSlider` → "Hủy" → xác nhận chỉ số **không đổi** trong Redux.
  - Lặp lại, lần này bấm "Xác nhận" → xác nhận chỉ số đổi đúng như đã
    chỉnh trên bản nháp.
