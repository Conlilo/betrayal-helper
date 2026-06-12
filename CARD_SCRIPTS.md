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

## EVENTS (32/56 đã script)

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

## OMENS (1/21 đã script)

✅ bite (attackDefense + haunt)

🅐 khả năng dùng mỗi lượt (chờ menu thao tác): vial, crystal-ball, mask, spear, ring, skull,
medallion, spirit-board, box, bloodstone, rope, key, photograph, letter, cat

❓ nhận chỉ số ngay khi rút (madman +2 Might −1 Sanity, holy-symbol +2 Sanity, girl +1/+1,
dog +1/+1, book +2 Knowledge): muốn tạo bước "note + áp chỉ số" lúc rút không?

> Mọi omen đều đã có bước Haunt roll tự động ở cuối.

---

## ITEMS (0/33)

Đa số bị động / dùng sau → để cho **menu thao tác nhân vật**. Hiện chỉ hiển thị mô tả + effect.
Sẽ rà khi làm menu thao tác.

---

## Cần bạn quyết để chạy tiếp
1. **groundskeeper / hanged-men**: làm nhiều bước roll như mô tả ở trên?
2. **Omen nhận chỉ số ngay khi rút**: có tạo bước áp chỉ số lúc rút không, hay để menu thao tác?
3. **Lá di chuyển/sắp xếp bàn**: dùng `note` nhắc thao tác là đủ chưa?
4. Thứ tự ưu tiên build 2 tính năng lớn (xem token / menu thao tác) — cái nào trước?
