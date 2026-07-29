# Door-Aware Room Placement Slots — Design

## Bối cảnh

Màn `BoardScreen.tsx` vẽ các ô viền đứt (dashed) cạnh phòng đã đặt để gợi ý vị
trí có thể đặt phòng mới. Hiện tại `isPlaceable()`
(`src/modules/room-engine/geometry.ts:74-86`) chỉ kiểm tra "ô trống + có
phòng liền kề", không kiểm tra phòng liền kề đó có cửa hướng về phía ô trống
hay không. Vì nhiều phòng trong dữ liệu game chỉ có 1-2 cửa (VD:
`doors: ['S']`, `doors: ['N']` — xem `src/modules/room-engine/data/*.ts`),
điều này khiến ô gợi ý xuất hiện ở cả những hướng không có cửa nối, như phía
Bắc của "Grand Staircase" trong ảnh chụp màn hình gốc.

Codebase đã có logic cửa đúng cần thiết ở `connectedDirections()`
(`geometry.ts:58-72`), hiện chỉ dùng để vẽ đường nối cửa giữa các phòng đã đặt
(`BoardScreen.tsx:628-635`), chưa được tái dùng cho việc tính ô có thể đặt.

## Quy tắc

Một ô trống chỉ được coi là "có thể đặt phòng" nếu **ít nhất một** phòng liền
kề (theo 4 hướng N/E/S/W) có cửa — sau khi tính xoay (`rotation`) — hướng về
phía ô đó. Nếu ô nằm cạnh nhiều phòng, chỉ cần một phòng có cửa đúng hướng là
đủ (ngữ nghĩa `some`, không phải `every`).

## Thay đổi

### `src/modules/room-engine/geometry.ts`

Thêm tham số `doorsOf` vào `isPlaceable`, cùng kiểu với tham số đã có ở
`connectedDirections`:

```ts
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

Logic giống hệt cách `connectedDirections` xác định "phòng liền kề có cửa
đúng hướng" (`effectiveDoors(doorsOf(neighbor), neighbor.rotation).includes(OPPOSITE[dir])`),
chỉ khác là ở đây không có phòng "của mình" để so khớp hai chiều — vì phòng
mới chưa được chọn — nên chỉ kiểm tra cửa của phòng đã đặt.

### `src/features/board/BoardScreen.tsx`

Cập nhật lời gọi `isPlaceable` (dòng 154) để truyền thêm `doorsOfDef`, tái
dùng đúng hàm đã import sẵn và đang dùng cho `connectedDirections` (dòng 634):

```ts
const canPlace = (x: number, y: number) =>
  isPlaceable(rooms, floor, x, y, r => doorsOfDef(r.defId)) ||
  (roomsOnFloor.length === 0 && x === BOARD_CENTER && y === BOARD_CENTER);
```

## Không thay đổi

- Trường hợp đặt phòng đầu tiên (bàn trống, ô trung tâm `BOARD_CENTER`) đi qua
  nhánh `roomsOnFloor.length === 0 && ...` riêng, không qua `isPlaceable` —
  không bị ảnh hưởng.
- Không đổi UI/style của ô placeable (`Cell`, `cellPlaceable`) — chỉ thu hẹp
  **tập hợp** ô được đánh dấu placeable, không đổi cách hiển thị.
- Không đổi logic xoay phòng, đặt phòng, hay `connectedDirections`.

## Testing

- Không có test tự động hiện có cho `BoardScreen.tsx` (UI, không render trong
  Jest — cùng quy ước với phần còn lại của dự án).
- `isPlaceable` là hàm thuần (`geometry.ts`), phù hợp để thêm 1-2 unit test
  trong `__tests__/App.test.tsx` (file test hiện có duy nhất, đã có sẵn
  `describe('room-engine geometry', ...)` kiểm `effectiveDoors` và
  `connectedDirections`) — thêm case tương tự cho `isPlaceable`: ô liền kề
  phòng có cửa đúng hướng → placeable; ô liền kề phòng nhưng cửa sai hướng →
  không placeable.
- Kiểm thử thủ công trên thiết bị: mở Bàn nhà, đặt "Grand Staircase" (chỉ có
  cửa hướng Nam nối Foyer), xác nhận chỉ còn ô phía Nam hiện viền đứt, 3
  hướng còn lại không còn ô gợi ý.
