# Game State Nav Entry — Design

## Bối cảnh

Màn `GameStateScreen` (`src/features/game-state/GameStateScreen.tsx`) hiển thị
trạng thái lưu tự động và nút "Xóa trận đấu", route `GameState` đã đăng ký
trong `RootStackParamList` (`src/navigation/types.ts:12`) và
`RootNavigator.tsx`. Nhưng chưa có màn hình nào trong app gọi
`navigation.navigate('GameState')` — route này "mồ côi" từ khi được thêm
(commit `c538b9a`), khiến người dùng không có cách nào vào được màn này qua
UI. Đây là bug có sẵn, không liên quan tới các thay đổi gần đây.

## Quyết định

Thêm một nút thứ ba trên `HomeScreen` (`src/features/home/HomeScreen.tsx`),
đặt cạnh nút "💾 Tải game" hiện có, dẫn tới `GameState`. Giống nút "Tải game",
nút mới chỉ bật khi `hasGame` (có trận đấu đang diễn ra) — xem trạng thái lưu
hay xoá trận đấu chỉ có ý nghĩa khi đã có game.

## Thay đổi

### `src/modules/i18n/locales/vi.ts` và `en.ts`

Thêm key `home.manageGame` vào khối `home` ở cả hai file, theo đúng style các
key `play`/`loadGame` hiện có (icon + text ngắn):

- vi: `manageGame: '🗂️ Lưu / Lịch sử'`
- en: `manageGame: '🗂️ Save / History'`

### `src/features/home/HomeScreen.tsx`

Thêm một `<Button>` sau nút "loadGame" hiện có (dòng 56-61):

```tsx
<Button
  label={t('home.manageGame')}
  variant="secondary"
  disabled={!hasGame}
  onPress={() => navigation.navigate('GameState')}
/>
```

Không cần thêm import mới — `Button`, `useAppSelector`, `hasGame` đã có sẵn
trong file.

## Không thay đổi

- Không đổi `GameStateScreen.tsx`, `RootNavigator.tsx`, hay
  `src/navigation/types.ts` — route `GameState` đã đăng ký đúng, chỉ thiếu
  điểm vào.
- Không thêm nút "Lưu" thủ công — lưu vẫn tự động như thiết kế hiện tại
  (`gameState.saveText`), ngoài phạm vi bug này.

## Testing

- Không có test tự động cho màn hình/nút UI (cùng quy ước với phần còn lại
  dự án — UI không render trong Jest).
- Kiểm thử thủ công trên thiết bị: mở Home khi chưa có game → nút "Lưu /
  Lịch sử" bị mờ/vô hiệu; tạo/tải một trận đấu → nút bật, bấm vào dẫn đúng
  tới `GameStateScreen` với nút "Xóa trận đấu" hoạt động như cũ.
