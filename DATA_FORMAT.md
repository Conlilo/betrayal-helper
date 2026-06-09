# Form nhập dữ liệu — HauntKeeper

Tài liệu này mô tả **đúng các field** cho từng loại thẻ. Bạn điền theo form (bảng,
Google Sheet, JSON, hay text đều được) — mình sẽ convert vào code. Cứ đảm bảo có
đủ các field bắt buộc là được.

Giá trị enum dùng chung:
- **floors (tầng):** `basement` (hầm) · `ground` (trệt) · `upper` (trên) · `roof` (mái)
- **doors (cửa):** `N` (trên) · `E` (phải) · `S` (dưới) · `W` (trái) — theo hình in trên tile gốc; app tự xử lý xoay khi đặt.
- **symbol:** `event` · `omen` · `item` · `none` (không có)
- **stat:** `might` · `speed` · `knowledge` · `sanity`

> `id`: chuỗi ngắn, **duy nhất**, không dấu, không khoảng trắng (vd `kitchen`, `the-dog`).
> Nếu bạn không muốn tự đặt, để trống — mình sẽ tạo từ tên.

---

## 1. Thẻ phòng (Room) → `src/modules/room-engine/data/rooms.ts`

| Field | Bắt buộc | Kiểu | Ghi chú |
|---|---|---|---|
| id | nên có | text | slug duy nhất |
| name | ✅ | text | tên phòng |
| floors | ✅ | danh sách | tầng được phép đặt (1 hoặc nhiều) |
| doors | ✅ | danh sách | cạnh có cửa (tập con N/E/S/W) |
| symbol | ✅ | enum | `event`/`omen`/`item`/`none` |
| effect | tùy chọn | text | hiệu ứng đặc biệt của phòng |

**Ví dụ:**
```
id: kitchen
name: Kitchen
floors: ground, upper
doors: N, E, W
symbol: event
effect: Một lần mỗi lượt, bạn có thể đổ 4 xúc xắc; nếu ra 5+ thì hồi 1 Might.
```

---

> **Thẻ Event / Item / Omen đều có 2 phần văn bản:**
> - `description` = **lời dẫn** (văn flavor, in nghiêng) — hiển thị nhưng không phải tác dụng.
> - `effect` = **đoạn xử lý tác dụng** (việc cần làm: đổ xúc xắc, ±chỉ số, di chuyển...) — in nổi bật.

## 2. Thẻ Event → `src/modules/card-engine/data/cards.ts`

| Field | Bắt buộc | Kiểu | Ghi chú |
|---|---|---|---|
| id | nên có | text | slug duy nhất |
| name | ✅ | text | tên thẻ |
| description | ✅ | text | lời dẫn (flavor) |
| effect | ✅ | text | đoạn xử lý tác dụng (ghi cả yêu cầu đổ xúc xắc + ngưỡng) |

**Ví dụ:**
```
id: creepy-crawlies
name: Creepy Crawlies
description: Có thứ gì đó lúc nhúc trong bóng tối bò lên người bạn.
effect: Đổ xúc xắc theo Sanity. 4+: không sao. 2-3: mất 1 Sanity. 0-1: mất 2 Sanity.
```

---

## 3. Thẻ Item → `src/modules/card-engine/data/cards.ts`

| Field | Bắt buộc | Kiểu | Ghi chú |
|---|---|---|---|
| id | nên có | text | slug duy nhất |
| name | ✅ | text | tên vật phẩm |
| description | ✅ | text | lời dẫn (flavor) |
| effect | ✅ | text | tác dụng (ghi rõ bonus, vd "+2 xúc xắc khi tấn công") |

**Ví dụ:** 
```
id: revolver
name: Revolver
description: Khẩu súng lục nặng trịch, lạnh ngắt trong tay.
effect: Khi tấn công, cộng thêm 2 xúc xắc. Hết đạn sau vài lần dùng.
```

---

## 4. Thẻ Omen → `src/modules/card-engine/data/cards.ts`

| Field | Bắt buộc | Kiểu | Ghi chú |
|---|---|---|---|
| id | nên có | text | slug duy nhất |
| name | ✅ | text | tên thẻ |
| description | ✅ | text | lời dẫn (flavor) |
| effect | ✅ | text | tác dụng |

> Lưu ý: mỗi lần rút Omen, app tự tăng bộ đếm và gợi ý Haunt Roll — bạn không cần điền gì thêm.

**Ví dụ:**
```
id: the-dog
name: The Dog
description: Một chú chó trung thành lon ton lại bên bạn.
effect: +1 xúc xắc khi chiến đấu nếu nó đi cùng bạn.
```

---

## 5. Thẻ nhân vật (Character) → `src/modules/game-engine/characters.ts`

| Field | Bắt buộc | Kiểu | Ghi chú |
|---|---|---|---|
| name | ✅ | text | tên nhân vật |
| color | tùy chọn | hex | màu token, vd `#3C8DBC` (thiếu thì mình gán) |
| might | ✅ | dãy số + start | xem dưới |
| speed | ✅ | dãy số + start | |
| knowledge | ✅ | dãy số + start | |
| sanity | ✅ | dãy số + start | |
| ability | tùy chọn | text | kỹ năng đặc biệt (nếu có) |

**Mỗi chỉ số** = dãy số in trên thẻ (trái→phải, kể cả ô skull `0` ngoài cùng trái)
**+ số bắt đầu** (số được khoanh tròn trên thẻ).

**Ví dụ (Ox Bellows):**
```
name: Ox Bellows
color: #3C8DBC
might:     values = 0 4 5 5 6 7 8 8 ; start = 6
speed:     values = 0 2 3 3 4 5 5 6 ; start = 3
knowledge: values = 0 2 2 3 4 5 5 6 ; start = 2
sanity:    values = 0 3 3 4 5 6 6 7 ; start = 4
ability: (không có)
```

---

## 6. (Tùy chọn) Haunt → `src/modules/haunt-engine/data/haunts.ts`

Nếu sau này muốn nhập kịch bản Haunt:

| Field | Bắt buộc | Kiểu | Ghi chú |
|---|---|---|---|
| hauntId | ✅ | số | số thứ tự Haunt |
| name | ✅ | text | tên Haunt |
| premise | ✅ | text | mô tả khởi phát |
| heroGoal | ✅ | text | điều kiện thắng phe Hero |
| traitorGoal | ✅ | text | điều kiện thắng phe Traitor |

---

### Gửi cho mình thế nào cũng được
Bảng Excel/Sheet, JSON, hay dán text theo mẫu trên — mình sẽ đổ vào đúng file.
Chỉ cần đủ field **bắt buộc (✅)**; field tùy chọn để trống cũng không sao.
