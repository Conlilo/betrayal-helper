# Stat Track Slider — Design

## Bối cảnh

Hiện tại, chỉnh chỉ số nhân vật (Might/Speed/Knowledge/Sanity) trong `ResolutionSheet.tsx`
(giai đoạn "impact" khi resolve Event/Omen/Room) dùng component `StatBadge`
(`src/modules/ui/components/StatBadge.tsx`): mỗi chỉ số là một pill với 2 nút
tròn `[−]` / `[+]` quanh con số hiện tại.

Dữ liệu chỉ số không phải một số tự do mà là một **track**
(`StatTrack { values: number[]; index: number }` — `src/modules/game-engine/types.ts`):
`values` là dãy số in sẵn trên bảng nhân vật (luôn có đúng 9 phần tử, index 0–8,
VD `speed: [0, 3, 3, 4, 5, 6, 7, 7, 8]`), `index` là vị trí con trỏ hiện tại.
Giá trị hiển thị là `values[index]` — có thể có "plateau" (nhiều ô liền nhau
cùng một số in), giống hệt cơ chế track vật lý của board game gốc.

Mục tiêu: thay giao diện +/- rời rạc bằng một **thanh kéo (slider)** thể hiện
trực quan toàn bộ track — kéo/chạm để nhảy tới ô bất kỳ, đồng thời vẫn giữ
2 nút +/- ở hai đầu để chỉnh từng nấc.

## Component API

Tạo component mới `StatTrackSlider` thay cho `StatBadge`, cùng thư mục
`src/modules/ui/components/`.

```ts
interface StatTrackSliderProps {
  stat: StatKey;
  track: StatTrack;                       // { values: number[]; index: number }
  onChangeIndex: (index: number) => void; // kéo / chạm ô / bấm +/- đều gọi hàm này
}
```

- Nhận thẳng `StatTrack` (thay vì chỉ `value: number` như `StatBadge` cũ) vì
  cần cả dãy `values` để vẽ từng ô, và `index` để biết vị trí con trỏ.
- Một callback duy nhất `onChangeIndex` — mọi tương tác (kéo, chạm ô, bấm nút)
  đều quy về "muốn nhảy tới index nào".
- Tất cả track hiện có đều cố định 9 ô, nên layout dùng chiều rộng chia đều
  cố định, không cần responsive phức tạp.

## Tương tác kéo/thả

- Dùng `react-native-gesture-handler` (đã là dependency sẵn có) —
  `Gesture.Pan()` để bắt kéo ngón tay ngang qua thanh.
- Vị trí ngón tay → tính ô gần nhất theo toạ độ x → gọi `onChangeIndex(index)`
  ngay trong lúc kéo (live update), không đợi thả tay.
- Chạm thẳng vào một ô bất kỳ (tap, không cần kéo) cũng nhảy thẳng tới ô đó.
- Nút `[−]` / `[+]` ở hai đầu thanh: mỗi lần bấm gọi
  `onChangeIndex(index ± 1)`, tự vô hiệu/ẩn khi đã ở ô đầu hoặc ô cuối.

## Giao diện

- Mỗi ô trên track hiển thị số in sẵn (`values[i]`), giống hệt bảng nhân vật
  vật lý — không dùng kiểu chấm trơn không số (đã cân nhắc và loại bỏ, xem
  Alternatives).
- Ô đang được chọn (`i === index`): chấm tròn tô đậm (accent color theo theme),
  số hiển thị đậm/trắng.
- Các ô khác: số mờ (`colors.textMuted`), có đường kẻ ngang nối các ô làm nền
  track.
- Ô có giá trị in = 0 (chết): luôn tô màu `colors.danger`, bất kể đang được
  chọn hay không — giữ nguyên hành vi cảnh báo "chết" như `StatBadge` cũ.
- Nút +/- ở hai đầu tái dùng style `Stepper` hiện có trong `StatBadge`.
- Chiều rộng: full width trong `Card` chứa nó ở `ResolutionSheet`; chiều cao
  vùng chạm ~44–48px để đủ thoải mái với ngón tay.

## Tích hợp vào ResolutionSheet

Trong `src/features/play/ResolutionSheet.tsx`, thay:

```tsx
<StatBadge
  stat={stat}
  value={currentStat(explorer.stats[stat])}
  onDecrement={() => dispatch(adjustStat({ characterId: explorer.id, stat, delta: -1 }))}
  onIncrement={() => dispatch(adjustStat({ characterId: explorer.id, stat, delta: 1 }))}
/>
```

bằng:

```tsx
<StatTrackSlider
  stat={stat}
  track={explorer.stats[stat]}
  onChangeIndex={i =>
    dispatch(
      adjustStat({
        characterId: explorer.id,
        stat,
        delta: i - explorer.stats[stat].index,
      }),
    )
  }
/>
```

- Không cần thay đổi `gameSlice.ts` — action `adjustStat` hiện có (nhận
  `delta`, tự clamp trong khoảng track) đã đủ dùng: component chỉ cần tính
  `delta = targetIndex - currentIndex` trước khi dispatch.
- Xoá `StatBadge.tsx` sau khi thay thế xong, vì đây là nơi duy nhất dùng nó
  (đã xác nhận qua khảo sát codebase) và không còn tham chiếu nào khác.
- Cập nhật export trong `src/modules/ui/index.ts` (`StatBadge` → `StatTrackSlider`).

## Testing

- Không viết unit test cho phần gesture kéo-thả (khó mô phỏng đáng tin cậy
  trong Jest với react-native-gesture-handler).
- Kiểm thử thủ công trên thiết bị/simulator sau khi implement:
  - Kéo qua từng ô — giá trị cập nhật đúng theo vị trí ngón tay.
  - Chạm trực tiếp một ô — nhảy thẳng tới ô đó.
  - Bấm nút +/- ở hai đầu — di chuyển đúng 1 nấc, vô hiệu ở 2 đầu track.
  - Ô có giá trị 0 hiển thị màu đỏ (chết) đúng như hành vi cũ.
  - `npx tsc --noEmit` và `npx eslint src` sạch sau khi đổi.

## Alternatives đã cân nhắc

- **Thanh trơn kiểu volume (chấm nhỏ, không hiện số từng ô, snap ngầm khi
  thả tay)** — giống slider Cỡ chữ của iOS. Bị loại vì ẩn mất thông tin dãy số
  in sẵn trên bảng nhân vật, trong khi các ô có thể "plateau" (trùng số) —
  người chơi cần thấy rõ số để hiểu vị trí, giống board game vật lý.
- **Giữ nguyên cả 2 kiểu (badge cũ + slider mới)** — bị loại vì tăng phức tạp
  UI không cần thiết khi slider đã bao gồm được +/- lẫn kéo-chạm.
