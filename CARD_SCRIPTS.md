# Tiến độ script "phase xử lý" cho thẻ bài

Tài liệu này theo dõi việc gắn `resolution.steps` (kịch bản thao tác) cho từng lá.
Có thể **tạm dừng / tiếp tục bất cứ lúc nào** — cứ mở file này xem lá nào còn thiếu.

## Quy ước đã chốt
- **Lá kiểm tra chỉ số:** số xúc xắc = **giá trị chỉ số nhân vật** (đúng luật). Trong code:
  `{ kind: 'roll', stat: '<might|speed|knowledge|sanity>', outcomes: [...] }` → app tự điền số xúc xắc.
- **Lá đổ số xúc xắc cố định:** `{ kind: 'roll', dice: N, outcomes: [...] }`.
- **Tấn công / phòng thủ:** `{ kind: 'attackDefense', attackerDice, defenseStat, damage }`.
- **Hướng dẫn không đổ:** `{ kind: 'note', prompt }`.
- **Mọi lá Omen:** tự động có bước cuối **Haunt roll** (không cần khai báo).
- **Áp thiệt hại:** bước "Tác động" sau các bước → chỉ hiện cặp chỉ số bị ảnh hưởng (vật chất = Might/Speed, tinh thần = Knowledge/Sanity).

## Tính năng lớn còn chờ làm (KHÔNG thuộc resolution.steps)
1. **Xem chi tiết phòng + token:** panel xem 1 phòng, hiển thị các token đang ảnh hưởng
   (Closet, Drip, Smoke, Skeletons, Safe, Blessing, Plant, Burial Mound, Secret Passage/Stairs…).
   → Các lá "đặt token / kéo dài nhiều lượt" sẽ gắn vào đây thay vì phase rút thẻ.
2. **Menu thao tác từng nhân vật** (nút góc trên mỗi nhân vật): **Di chuyển · Đánh nhau · Dùng Item · …**
   → Các khả năng "dùng mỗi lượt" của Omen/Item (Vial, Crystal ball, Mask, vũ khí, Medical Kit…) sẽ nằm ở đây.

Ký hiệu: ✅ đã script · 🅣 chờ tính năng token · 🅐 chờ menu thao tác nhân vật · ❓ cần bạn quyết · 🔵 sẵn sàng script

---

## EVENTS (56/56 đã script)

Đợt mới đã script nốt 24 lá còn thiếu (thủ công, app chỉ hướng dẫn):
- **2 bước**: groundskeeper (roll Knowledge → attackDefense, chỉ đánh khi 0-3).
- **4 bước roll**: hanged-men (mỗi đặc điểm 1 lần đổ, 0-1 mất 1).
- **roll**: mystic-slide (đổ Sanity dùng cầu trượt).
- **note (token / di chuyển / chọn-nhánh)**: closet-door, secret-passage, what-the,
  drip-drip-drip, secret-stairs, revolving-wall, the-walls, jonahs-turn, skeletons,
  image-in-the-mirror (+ bản 2), smoke, locked-safe, lights-out, a-moment-of-hope,
  whoops, it-is-meant-to-be, the-left-hand, what-year-is-it, flytrap, burial-mound.
  → note ghi rõ phải chọn nút nào ở bước Tác động ("· Không có" / "✨ Khác / hồi phục"
  / "🩸 Vật chất" / "🧠 Tinh thần") để áp đúng hiệu ứng.

> Khả năng "đặt token / kéo dài nhiều lượt" vẫn chờ **tính năng xem token** để xử lý
> đúng cơ chế — note hiện tại đã tóm tắt đủ luật để chơi tay.

### (lịch sử) 32 lá đã script từ trước

✅ creepy-crawlies, burning-man, angry-being, something-slimy, the-voice, funeral, night-view,
something-hidden, bloody-vision, rotten, grave-dirt, the-walls-have-eyes, mutant-housepet,
ghost-in-the-machine, acupuncture, contract, the-lost-one, mists-from-the-walls, hideous-shriek,
silence, the-beckoning, shrieking-wind, lightning-strikes, spider, possession, footsteps,
phone-call, misty-arch, disquieting-sounds, creepy-puppet (AD), debris, webs

🅣 đặt token / kéo dài (chờ tính năng xem token):
closet-door, drip-drip-drip, smoke, skeletons, locked-safe, a-moment-of-hope,
secret-passage, secret-stairs, burial-mound, flytrap

🔵/❓ di chuyển – sắp xếp bàn (tạm dùng `note`, cần bạn xác nhận cách hiển thị):
what-the, revolving-wall, the-walls, mystic-slide (có đổ Sanity 5+/0-4)

❓ cần bạn giải thích cách xử lý:
- **groundskeeper** — đổ Knowledge; nếu 0-3 thì người bên phải đổ 4 Might (AD có điều kiện). Làm 2 bước?
- **hanged-men** — đổ xúc xắc cho **mỗi** đặc điểm (4 lần, 2+ ok / 0-1 mất 1). Làm 4 bước roll?
- **jonahs-turn** — phụ thuộc Puzzle Box của người khác.
- **image-in-the-mirror** & **-2** — đưa/rút Item qua gương.
- **lights-out** — giữ lá, giới hạn di chuyển.
- **whoops** — người bên phải huỷ 1 Item ngẫu nhiên của bạn.
- **the-left-hand** — chọn 1 trong 3 nhánh (chặt/thay/giữ tay).
- **it-is-meant-to-be** — chọn 1 trong 2 (xem 3 lá / ghi số đổ).
- **what-year-is-it** — không đổ; mất 1 Sanity, +1 Might +1 Knowledge (làm `note`+impact?).

---

## OMENS (21/21 đã script)

Cách xử lý đã chốt (thủ công): app **không** tự áp chỉ số — bước `note` chỉ rõ phải làm gì,
người chơi tự chỉnh ở bước Tác động. Mọi omen vẫn có bước Haunt roll tự động ở cuối.

✅ attackDefense: bite

✅ cộng/trừ chỉ số NGAY khi rút (note "Áp dụng ngay" → chọn **✨ Khác / hồi phục** để chỉnh):
madman (+2 Might −1 Sanity), dog (+1 Might +1 Sanity), holy-symbol (+2 Sanity),
girl (+1 Sanity +1 Knowledge), book (+2 Knowledge)

✅ bị động / dùng mỗi lượt (note nhắc luật → chọn **· Không có**):
skull, vial, crystal-ball, medallion, ring, spirit-board, mask, spear, box,
bloodstone, rope, key, photograph, letter, cat

> Khi làm **menu thao tác nhân vật**, các omen "dùng mỗi lượt" (vial, crystal-ball, mask,
> spear, ring, spirit-board, bloodstone, cat…) sẽ chuyển khả năng kích hoạt sang menu đó.

---

## ITEMS (33/33 đã script — note)

Mỗi item đã có bước `note` nhắc luật (bỏ được bước đổ xúc xắc chung vô nghĩa khi rút):
- **Áp dụng ngay khi rút** (chọn ✨ Khác / hồi phục): bells (+1 Sanity), locket (+1 Sanity),
  amulet-of-the-ages (+1 mỗi đặc điểm).
- **Bị động / dùng mỗi lượt / dùng sau** (chọn · Không có): tất cả còn lại.

> Item KHÔNG có bước Haunt roll. Khả năng kích hoạt thực sự (đổ xúc xắc, hồi máu, vũ khí…)
> sẽ gắn vào **menu thao tác nhân vật** sau — note hiện tại đã tóm tắt đầy đủ luật từng lá.

---

## Đã chốt (các quyết định trước đây)
1. **groundskeeper** → 2 bước (roll Knowledge → attackDefense). **hanged-men** → 4 bước roll. ✅
2. **Omen/Item nhận chỉ số khi rút** → giữ thủ công: note "Áp dụng ngay" + người chơi tự
   chỉnh ở bước Tác động (KHÔNG auto-apply). ✅
3. **Lá di chuyển / sắp xếp bàn / token** → dùng `note` nhắc thao tác. ✅

## Còn lại
- Build 2 tính năng lớn: **xem token phòng** & **menu thao tác nhân vật** — cái nào trước?
- (Tùy chọn) Khi có auto-apply, nâng các note "Áp dụng ngay" thành bước áp chỉ số tự động.
