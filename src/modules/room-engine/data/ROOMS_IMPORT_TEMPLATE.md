# Mẫu import Phòng (Room)

Điền danh sách phòng vào bảng bên dưới rồi gửi lại — mình sẽ chuyển thành các
entry `RoomDef` trong [rooms.ts](./rooms.ts). Mỗi phòng là **một dòng** trong bảng.

---

## Giải thích các cột

| Cột | Bắt buộc | Kiểu | Mô tả |
|-----|----------|------|-------|
| `defId` | ✅ | chuỗi kebab-case, **duy nhất** | Mã định danh phòng. VD: `gardens`, `master-bedroom`. |
| `name` | ✅ | chuỗi | Tên phòng in trên thẻ (tiếng Anh). Có thể kèm tên tiếng Việt: `Gardens — Sân Vườn`. |
| `floors` | ✅ | một/nhiều giá trị | Tầng được phép đặt. Chọn từ: `basement`, `ground`, `upper`, `roof`. Nhiều tầng ngăn bằng dấu phẩy: `ground, upper`. |
| `doors` | ✅ | một/nhiều giá trị | Các cạnh có cửa (hướng gốc, chưa xoay): `N`, `E`, `S`, `W`. VD: `N, S`. |
| `symbols` | ⬜ | **mảng** — 0, 1 hoặc nhiều | Symbol in trên phòng. Chọn từ: `event`, `omen`, `item`, `dumbwaiter`. **Một phòng có thể có nhiều symbol** (ngăn bằng dấu phẩy). Để **trống** nếu không có symbol nào. |
| `effect` | ⬜ | chuỗi (tự do) | Hiệu ứng đặc biệt của phòng (nếu có). Để trống nếu không. |

> **Lưu ý symbol:** đây là điểm vừa đổi — `symbols` giờ là **mảng**, nên một
> phòng có thể vừa có `omen` vừa có `item`, hoặc nhiều hơn. Khi nhà thám hiểm
> bước vào, app sẽ lần lượt xử lý từng symbol rút thẻ (`event`/`omen`/`item`).
> `dumbwaiter` là tính năng di chuyển giữa các tầng, không rút thẻ.

---

## Bảng điền (xóa các dòng ví dụ, thêm phòng của bạn)

| defId | name | floors | doors | symbols | effect |
|-------|------|--------|-------|---------|--------|
| gardens | Gardens — Sân Vườn | ground, upper | N, S | event | (ngoài trời) |
| crypt | Crypt — Nhà Mồ | basement | N | omen, item |  |
| chapel | Chapel — Nhà Thờ | upper | N, E, W |  | Đổ thêm 1 xúc xắc khi tìm dấu chân |
| dining-room | Dining Room — Phòng Ăn | ground | N, E, S, W |  |  |
| collapsed-room | Collapsed Room — Phòng Sập | basement, ground, upper | N, S | event |  |

---

## Ví dụ kết quả sau khi chuyển sang code

Mỗi dòng ở trên sẽ thành một object như sau trong `ROOM_DEFS`:

```ts
{
  defId: 'gardens',
  name: 'Gardens — Sân Vườn',
  floors: ['ground', 'upper'],
  doors: ['N', 'S'],
  symbols: ['event'],
  effect: '(ngoài trời)',
},
{
  defId: 'crypt',
  name: 'Crypt — Nhà Mồ',
  floors: ['basement'],
  doors: ['N'],
  symbols: ['omen', 'item'], // ← phòng có NHIỀU symbol
},
{
  defId: 'dining-room',
  name: 'Dining Room — Phòng Ăn',
  floors: ['ground'],
  doors: ['N', 'E', 'S', 'W'],
  symbols: [], // ← không có symbol
},
```

---

## Gợi ý dữ liệu nên có (giúp nâng cấp tính năng Event sau này)

Một số lá Event tham chiếu trực tiếp tới phòng/tầng/thuộc tính. Nếu bạn ghi chú
thêm các thông tin sau (ở cột `effect` hoặc nhắn riêng), về sau mình có thể biến
các bước "gợi ý text" thành thao tác thật:

- **Phòng ngoài trời / có cửa sổ** — nhiều event lọc theo nhóm này (Shrieking
  Wind, The Beckoning, Lightning Strikes…). Ghi rõ phòng nào là ngoài trời / có cửa sổ.
- **Phòng đặc biệt được nhắc tên** trong event/haunt: Entrance Hall, Graveyard,
  Crypt, Arsenal, Chapel, Gardens, Patio, Tower, Balcony, Furnace Room,
  Gymnasium, Larder…
- **Tầng** của mỗi phòng (đã có ở cột `floors`).
