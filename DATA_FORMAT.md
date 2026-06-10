# Form nhập dữ liệu — HauntKeeper

Tài liệu này mô tả **đúng các field** cho từng loại thẻ. Bạn điền theo form (bảng,
Google Sheet, JSON, hay text đều được) — mình sẽ convert vào code. Cứ đảm bảo có
đủ các field bắt buộc là được.

Giá trị enum dùng chung:
- **floors (tầng):** `basement` (hầm) · `ground` (trệt) · `upper` (trên) · `roof` (mái)
- **doors (cửa):** `N` (trên) · `E` (phải) · `S` (dưới) · `W` (trái) — theo hình in trên tile gốc; app tự xử lý xoay khi đặt.
- **symbol:** `event` · `omen` · `item` · `dumbwaiter` (di chuyển giữa tầng — không rút thẻ) · `none` (không có)
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

Nhân vật **gom theo màu** (mỗi màu = 1 quân, có **2 nhân vật** ở 2 mặt thẻ). Trong
1 ván, mỗi màu chỉ chọn **1** nhân vật. Mỗi nhân vật gồm:

| Field | Bắt buộc | Kiểu | Ghi chú |
|---|---|---|---|
| id | ✅ | text | slug duy nhất, vd `ox_bellows` |
| name | ✅ | text | tên nhân vật |
| speed / might / sanity / knowledge | ✅ | 8 số | dãy số in trên thẻ trái→phải (kể cả ô skull `0` ngoài cùng trái) |
| *start* mỗi chỉ số | ✅ | số | số được **khoanh tròn** trên thẻ (điểm bắt đầu) |

Và mỗi **màu**: `color` (hex) + `colorName`.

**Ví dụ (1 màu = 2 nhân vật):**
```
color: #C0392B   colorName: Red
─ ox_bellows · Ox Bellows
    speed:     2 2 2 3 4 5 5 6   (start 4)
    might:     4 5 5 6 6 7 8 8   (start 5)
    sanity:    2 2 3 4 5 5 6 7   (start 3)
    knowledge: 2 2 3 3 5 5 6 6   (start 3)
─ flash_williams · Darrin "Flash" Williams
    speed:     3 3 4 5 6 7 7 8   (start 6)
    might:     2 3 3 4 5 6 6 7   (start 3)
    sanity:    1 2 3 4 5 5 5 7   (start 3)
    knowledge: 2 3 3 4 5 5 5 7   (start 3)
```

> Trong code: dãy số nằm trong `CHARACTER_TEMPLATES` (gom theo màu), còn các số
> *start* nằm ở object `characterStarts` (key = id). Bạn chỉ cần cung cấp đủ
> dãy số + start cho mỗi nhân vật; mình ráp vào đúng chỗ.

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
