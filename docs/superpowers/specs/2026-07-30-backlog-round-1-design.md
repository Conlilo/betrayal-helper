# Backlog Round 1 — Design

## Phạm vi

6 mục từ `docs/superpowers/backlog.md`, xử lý cùng đợt:

1. Thanh tìm kiếm cho bộ chọn phòng + bộ chọn bài.
2. Icon 🎲 đổ nhanh độc lập trong modal lá bài.
3. Hiển thị số nước di chuyển (= Speed) trên thanh lượt hiện tại.
4. Chuyển thanh lượt người chơi lên đầu màn Board.
5. Dropdown gợi ý token (từ token đã từng nhập trong trận) + vẫn nhập tự do.
6. Danh sách vật phẩm đang giữ trong Toolbox "Thông tin nhà thám hiểm".

## 1. Tìm kiếm phòng + bài

Thêm state `search` cục bộ ở cả 2 nơi, lọc thêm trên `availableDefs` đã có
sẵn (không trùng lá/phòng đã dùng):

- `BoardScreen.tsx`: `TextInput` mới ngay trên `ScrollView` chọn phòng
  (trước dòng render `availableDefs.map`), style theo đúng `tokenInput` có
  sẵn (`surfaceAlt` nền, `radius.sm`, không viền).
- `ResolutionSheet.tsx`: tương tự, ngay trên `ScrollView` chọn bài.
- Lọc: `def.name.toLowerCase().includes(search.trim().toLowerCase())`.
- i18n mới: `common.search` (placeholder dùng chung cho cả 2 nơi).

## 2. Icon đổ xúc xắc nhanh trong modal lá bài

Trong `ResolutionSheet.tsx`, bên trong `<Card title={card.name}>` (sau phần
`effect`), thêm 1 hàng nhỏ: icon "🎲" (Pressable) + text kết quả. Bấm → gọi
`rollDice(1)` (đã có sẵn từ `combat-engine`) → hiện mặt xúc xắc (0/1/2) ngay
cạnh icon. Bấm lại → đổ lại (ghi đè kết quả cũ). Hoàn toàn độc lập với luồng
`stages`/`genericDice` hiện có — không đụng gì tới logic resolution.

## 3. Số nước di chuyển trên thanh lượt

Đổi key `board.turn` (vi: `'▶ {{name}} · Vòng {{round}}'`) thành
`'▶ {{name}} · Vòng {{round}} · 👟 {{speed}}'` (và tương tự bản en), truyền
thêm `speed: currentStat(turnChar.stats.speed)` khi gọi `t('board.turn', ...)`
tại `BoardScreen.tsx:313`. Cần import `currentStat` từ `@/modules/game-engine`
(chưa có trong file này).

## 4. Chuyển thanh lượt lên đầu màn Board

Trong `BoardScreen.tsx`, tách khối `<View style={styles.turnRow}>...</View>`
(hiện nằm trong `tray`, dòng ~310-321) ra khỏi `tray`, render nó làm phần tử
**đầu tiên** trong `container` (trước cả `omenBar`). Phần còn lại của `tray`
(hàng chip nhân vật, `trayRow`) giữ nguyên vị trí cũ ở cuối màn. Cần điều
chỉnh nhẹ style (`turnRow` hiện có thể phụ thuộc `tray`'s padding/border —
kiểm tra và bổ sung padding riêng nếu cần để không bị dính sát mép trên).

## 5. Gợi ý token đã dùng + vẫn nhập tự do

Trong `BoardScreen.tsx`, trước `tokenAddRow` hiện có, thêm 1 hàng chip gợi ý
ngang (`ScrollView horizontal`), nguồn dữ liệu tính từ toàn bộ `rooms` đang
có trong trận:

```ts
const usedTokenLabels = Array.from(
  new Set(rooms.flatMap(r => (r.tokens ?? []).map(tk => tk.label))),
);
```

Mỗi chip là 1 `Pressable` hiện `label`, bấm vào → dispatch `addRoomToken`
ngay (giống hệt hành vi nút "Thêm" hiện có, không cần gõ). Ô `TextInput` +
nút "Thêm" hiện có **giữ nguyên không đổi** — vẫn nhập tên mới tự do bình
thường. Nếu `usedTokenLabels` rỗng (chưa từng nhập token nào), không hiện
hàng gợi ý (tránh 1 khoảng trống vô nghĩa).

## 6. Danh sách vật phẩm đang giữ

Trong `ToolboxPlayerDetailView.tsx`, thêm ngay sau dòng tên nhân vật (trước
danh sách `StatTrackSlider`):

```ts
const items = useAppSelector(s =>
  s.cards.drawn.filter(c => c.type === 'item' && c.ownerId === characterId),
);
```

Render: label "🗡️ {{count}} vật phẩm" (key mới `toolbox.items`) + danh sách
tên từng item (`Text` đơn giản mỗi dòng), hoặc thông báo trống (key mới
`toolbox.noItems`) nếu `items.length === 0`.

## i18n mới (vi/en)

```
common.search: 'Tìm kiếm...' / 'Search...'
toolbox.items: '🗡️ Vật phẩm đang giữ' / '🗡️ Items held'
toolbox.noItems: 'Chưa có vật phẩm nào.' / 'No items yet.'
```

`board.turn` sửa tại chỗ (không thêm key mới, xem mục 3).

## Không thay đổi

- Không đụng `adjustStat`, `addRoomToken`, `rollDice`, `drawnDefIds`, hay
  bất kỳ reducer nào — toàn bộ đều tái dùng nguyên trạng.
- Không thêm thư viện dropdown/picker mới — mục 5 dùng chip gợi ý (Pressable
  list) thay vì native dropdown, tránh thêm dependency.
- Không đổi cấu trúc `RoomToken`/`CardInstance`.

## Testing

- Không có test tự động cho các thay đổi UI này (cùng quy ước dự án).
- Kiểm thử thủ công trên thiết bị (gộp vào 1 lượt build):
  - Gõ vào ô tìm kiếm phòng/bài → danh sách lọc đúng theo tên, không phân
    biệt hoa/thường.
  - Bấm icon 🎲 trong modal lá bài → hiện mặt xúc xắc, bấm lại đổi kết quả.
  - Thanh lượt hiện ở đầu màn Board, có số nước di chuyển đúng bằng Speed
    hiện tại của nhân vật đang lượt.
  - Thêm 1 token tự do → chuyển sang phòng khác → thêm token → xác nhận
    token cũ hiện thành chip gợi ý, bấm vào thêm ngay không cần gõ lại.
  - Toolbox "Thông tin nhà thám hiểm" → chọn nhân vật đang giữ ít nhất 1
    item → xác nhận danh sách hiện đúng tên item đó.
