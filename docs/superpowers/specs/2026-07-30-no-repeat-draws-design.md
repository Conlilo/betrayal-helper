# No-Repeat Card & Room Draws — Design

## Bối cảnh

Hiện tại, cả bộ chọn lá bài (`ResolutionSheet.tsx`) và bộ chọn phòng
(`BoardScreen.tsx`) đều hiển thị **toàn bộ** danh sách tĩnh (`CARD_DEFS_BY_TYPE`,
`roomDefsForFloor`) mỗi lần, không loại trừ những lá/phòng đã dùng — người
chơi có thể chọn trùng một lá Event/Omen/Item hoặc đặt trùng một phòng đã có
trên bàn. Board game gốc không hoạt động vậy: bộ bài không được xáo lại
trong ván, và mỗi tile phòng là vật lý duy nhất.

## Quyết định (theo xác nhận)

- **Lá bài**: một khi đã rút, **không bao giờ** xuất hiện lại trong bộ chọn —
  kể cả sau khi bị discard (Event/Omen xử lý xong, Item bị bỏ). Cần theo
  dõi riêng biệt với danh sách `drawn` hiện có (vì `discardCard` xóa khỏi
  `drawn`).
- **Phòng**: dựa thẳng vào danh sách phòng **đang có trên bàn**
  (`rooms: PlacedRoom[]`) — không cần state mới. Nếu người chơi xóa nhầm một
  phòng (nút sửa lỗi có sẵn), phòng đó rảnh lại ngay, có thể đặt lại.

## 1. Card-engine: theo dõi `drawnDefIds`

`src/modules/card-engine/types.ts` — thêm field vào `CardState`:

```ts
export interface CardState {
  /** All cards that have been drawn this game, newest first. */
  drawn: CardInstance[];
  /** defIds ever drawn this game — persists even after discard, so a
   *  discarded card never re-enters the draw pool. */
  drawnDefIds: string[];
}
```

`src/modules/card-engine/cardSlice.ts`:

- `initialState`: thêm `drawnDefIds: []`.
- `drawCard` reducer: sau `state.drawn.unshift(action.payload)`, thêm
  `if (!state.drawnDefIds.includes(action.payload.defId)) state.drawnDefIds.push(action.payload.defId);`.
- `discardCard`: **không đổi** — chỉ xóa khỏi `drawn`, `drawnDefIds` giữ
  nguyên (đây chính là điểm khác biệt cốt lõi tạo ra "không rút lại được").
- `resetCards`: không cần đổi — đã return `initialState`, tự động gồm
  `drawnDefIds: []` mới.

## 2. `ResolutionSheet.tsx`: lọc bộ chọn lá bài

Tại vị trí render `CARD_DEFS_BY_TYPE[symbol].map(...)` (dòng ~235), lọc theo
`drawnDefIds` lấy từ `useAppSelector(s => s.cards.drawnDefIds)`:

```ts
const drawnDefIds = useAppSelector(s => s.cards.drawnDefIds);
const availableDefs = symbol
  ? CARD_DEFS_BY_TYPE[symbol].filter(def => !drawnDefIds.includes(def.defId))
  : [];
```

Dùng `availableDefs` thay cho `CARD_DEFS_BY_TYPE[symbol]` khi render danh
sách. Nếu `availableDefs.length === 0`, hiện thông báo hết bài (key mới
`explore.noCardsLeft`) thay vì danh sách rỗng.

## 3. `BoardScreen.tsx`: lọc bộ chọn phòng

Tại nơi khai báo `floorDefs`/`randomDef` (dòng ~225-227):

```ts
const floorDefs = roomDefsForFloor(floor);
const availableDefs = floorDefs.filter(
  def => !rooms.some(r => r.defId === def.defId),
);
const randomDef = () =>
  availableDefs[Math.floor(Math.random() * availableDefs.length)];
```

Lưu ý: đối chiếu với **toàn bộ** `rooms` (mọi tầng), không chỉ tầng hiện
tại — một tile phòng vật lý dùng chung cho cả căn nhà, không giới hạn theo
tầng.

Dùng `availableDefs` thay `floorDefs` khi render danh sách chọn phòng (dòng
~505). Nút "🎲 Random" (`randomDef()`) tự động chỉ random trong
`availableDefs`; nếu rỗng, `randomDef()` trả về `undefined` —
`onPress={() => { const def = randomDef(); if (def) onPickRoom(def.defId); }}`
đã có sẵn guard `if (def)` nên không cần sửa, nhưng nên hiện thông báo hết
phòng (key mới `board.noRoomsLeft`) khi `availableDefs.length === 0` thay vì
danh sách rỗng im lặng.

## i18n mới

```
explore.noCardsLeft: 'Đã hết lá {{type}} để rút.' (vi) / 'No more {{type}} cards left to draw.' (en)
board.noRoomsLeft: 'Đã hết phòng để đặt.' (vi) / 'No more rooms left to place.' (en)
```

(`{{type}}` dùng lại nhãn loại bài đã có, VD `t('events.title')`/`t('omens.title')`/`t('items.title')`.)

## Không thay đổi

- Không đổi `discardCard`, `transferItem`, `loadCards` reducer.
- Không đổi cách `drawCard` được dispatch (từ `ResolutionSheet` lẫn qua
  Toolbox "Rút bài" mới xây — cả hai đều đi qua cùng 1 reducer, tự động
  được hưởng cơ chế lọc).
- Không đổi cấu trúc `RoomDef`/`CardDef`, không thêm field `count`/`quantity`.
- redux-persist whitelist đã gồm `cards` và `rooms` sẵn — `drawnDefIds` tự
  động được lưu/khôi phục cùng state `cards` hiện có, không cần cấu hình gì
  thêm.

## Testing

- Thêm 1-2 unit test thuần cho `cardSlice` (theo style test có sẵn trong
  `__tests__/App.test.tsx`, khối `describe('game-engine slice', ...)`):
  dispatch `drawCard` rồi `discardCard`, xác nhận `drawnDefIds` vẫn còn
  chứa defId đó dù `drawn` đã rỗng.
- Kiểm thử thủ công trên thiết bị: rút 1 lá Event, xử lý xong (discard) →
  mở lại bộ chọn Event → xác nhận lá đó **không** còn trong danh sách. Đặt
  1 phòng → mở bộ chọn phòng → xác nhận phòng đó không còn; xóa phòng đó
  khỏi bàn → mở lại bộ chọn → xác nhận đã xuất hiện lại.
