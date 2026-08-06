# Toolbox Menu (Batch 1) — Design

## Bối cảnh

Trong lúc chơi, người dùng hiện không có cách nào rời khỏi luồng chơi để xem
trạng thái lưu/lịch sử, và có thể vô tình bấm nút back của header để lùi về
các màn thiết lập (Home/GameSetup/Characters) dù đang có trận đang diễn ra.
Đồng thời cần một công cụ đổ xúc xắc nhanh (game thường cần đổ xúc xắc ngoài
luồng chiến đấu chính thức).

Đây là **đợt 1** của tính năng Toolbox. Đợt 2 (Thông tin nhà thám hiểm + Rút
bài thủ công, thay thế cơ chế rút bài tự động khi khám phá phòng) sẽ thiết kế
và triển khai riêng sau, vì đụng vào logic gameplay đang hoạt động
(`BoardScreen.tsx`'s `justPlaced`/`resolve` auto-trigger).

## Phạm vi đợt 1

1. Nút Toolbox trên header, chỉ hiện ở 6 màn đang chơi.
2. Modal Toolbox với 2 mục: Lưu/Lịch sử, Đổ xúc xắc.
3. Chặn back-navigation về màn thiết lập khi đang chơi.
4. Nút "Đóng trò chơi" mới trong `GameStateScreen`.

## Component mới: `ToolboxMenu`

`src/modules/ui/components/ToolboxMenu.tsx` — không nhận props ngoài
navigation (dùng `useNavigation()` từ `@react-navigation/native` để gọi
`navigate('GameState')`, tránh phải truyền prop qua từng màn).

State nội bộ: `open: boolean` (hiện modal), `view: 'menu' | 'dice'`.

- Nút header: icon "🧰" (`Pressable` nhỏ, không dùng `Button` chung vì đó
  dành cho nút full-width).
- `<Modal visible={open} transparent animationType="slide" onRequestClose={close}>`
  — tái dùng đúng pattern backdrop/sheet đã có ở `ResolutionSheet.tsx`
  (`styles.backdrop`/`styles.sheet`).
- **View `menu`**: 2 dòng bấm được —
  - "🗂️ Lưu / Lịch sử" → đóng modal, `navigate('GameState')`.
  - "🎲 Đổ xúc xắc" → `setView('dice')` (modal không đóng).
- **View `dice`**:
  - Stepper `[−] count [+]` (component nội bộ riêng, style giống Stepper
    trong `StatTrackSlider.tsx` nhưng không import chung — mỗi file tự có
    bản nhỏ, đúng quy ước hiện tại của codebase), giới hạn `[1, 8]`.
  - Nút "Đổ xúc xắc" → `rollDice(count)` (từ `@/modules/combat-engine`,
    đã có sẵn, không cần sửa) → lưu kết quả vào state `result: DiceResult | null`.
  - Nếu có `result`: hiện lưới ô vuông (mỗi ô 1 giá trị `DieFace` 0/1/2,
    style giống ô số trong `StatTrackSlider`), dòng "Tổng: {result.total}",
    và đổi nút chính thành "Đổ lại".
  - Nút "← Quay lại" → `setView('menu')`, xoá `result`.
- Nút "✕" ở góc để đóng hẳn modal từ bất kỳ view nào.

### Gắn vào `RootNavigator.tsx`

Thêm `headerRight: () => <ToolboxMenu />` vào `options` của đúng 6 màn:
`Board`, `Events`, `Omens`, `Items`, `Combat`, `HauntSetup`. Không đổi
`Home`, `GameSetup`, `Characters`, `GameState`.

## Chặn back-navigation khi đang chơi

Thay `navigation.navigate('Board')` bằng
`navigation.reset({ index: 0, routes: [{ name: 'Board' }] })` ở 2 nơi:

- `src/features/character/CharacterListScreen.tsx:58` (bắt đầu chơi lần đầu)
- `src/features/home/HomeScreen.tsx:60` (nút "Tải game")

Sau `reset`, `Board` là gốc mới của stack — native-stack tự ẩn nút back và
tắt cử chỉ vuốt back vì không còn màn nào phía sau. Đây là cách chặn "đúng
chuẩn" của React Navigation, không cần thêm `gestureEnabled`/`beforeRemove`
thủ công.

## `GameStateScreen`: thêm "Đóng trò chơi"

Trong `src/features/game-state/GameStateScreen.tsx`:

- Thêm nút mới **"Đóng trò chơi"** (`variant="secondary"`, đặt trước nút
  "Xóa trận đấu"): không dispatch reset gì, chỉ
  `navigation.reset({ index: 0, routes: [{ name: 'Home' }] })`. Trận đấu vẫn
  còn nguyên (tự lưu qua redux-persist như thiết kế sẵn có) — nút "Tải game"
  ở Home chính là đường quay lại.
- Nút "Xóa trận đấu" hiện có (đóng vai trò "Kết thúc trò chơi") giữ nguyên
  toàn bộ logic xoá, chỉ đổi dòng cuối `navigation.navigate('Home')` thành
  `navigation.reset({ index: 0, routes: [{ name: 'Home' }] })` để nhất quán
  (dù lúc này `hasGame` đã `false` nên rủi ro thấp, vẫn nên đồng bộ cách
  thoát).

## i18n

Thêm namespace `toolbox` (vi + en), song song `gameState.closeGame`:

```
toolbox: {
  gameState: '🗂️ Lưu / Lịch sử',
  rollDice: '🎲 Đổ xúc xắc',
  diceCount: 'Số lượng xúc xắc',
  roll: 'Đổ xúc xắc',
  rollAgain: 'Đổ lại',
  total: 'Tổng: {{total}}',
  back: '← Quay lại',
}
```

`gameState.closeGame: 'Đóng trò chơi'` (vi) / `'Close game'` (en).

## Không thay đổi (đợt 1)

- Không đụng `BoardScreen.tsx`'s `justPlaced`/`resolve`/card-draw logic —
  giữ nguyên như hiện tại, kể cả khi Toolbox đã có mặt trên màn Board.
- Không thêm mục "Thông tin nhà thám hiểm" hay "Rút bài" vào menu — để đợt 2.
- Không đổi `RootStackParamList`/route nào.

## Testing

- Không có test tự động cho UI (cùng quy ước dự án). `rollDice` đã có test
  sẵn trong `combat-engine`, không cần thêm.
- Kiểm thử thủ công trên thiết bị:
  - Vào Board, thấy icon 🧰 trên header; bấm mở modal, 2 mục hiện đúng.
  - "Lưu / Lịch sử" → mở đúng `GameStateScreen`, có nút "Đóng trò chơi" mới.
  - "Đổ xúc xắc" → chỉnh số lượng 1-8 bằng stepper, đổ ra đúng số ô = số đã
    chọn, mỗi ô là 0/1/2, tổng cộng khớp.
  - Từ Board bấm nút back header (hoặc vuốt back) → xác nhận **không** lùi
    được về Characters/GameSetup/Home.
  - "Đóng trò chơi" → về Home, bấm "Tải game" → quay lại đúng Board với
    trạng thái cũ. "Xóa trận đấu" → về Home, game bị xoá hẳn (như trước).
  - Các màn Events/Omens/Items/Combat/HauntSetup cũng có icon 🧰 (dù có thể
    chưa reachable qua UI hiện tại — không thuộc phạm vi sửa ở đây).
