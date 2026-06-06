# HauntKeeper

Ứng dụng React Native hỗ trợ chơi board game **Betrayal at House on the Hill** —
đóng vai trò "Game Master kỹ thuật số": quản lý trạng thái trận đấu, xử lý luật,
tự động hóa chiến đấu và (về sau) điều khiển AI cho phe thiếu người.

## Tech stack

- **React Native** + **TypeScript** (bare workflow, `@react-native-community/cli`)
- **Redux Toolkit** + **react-redux** — state management
- **redux-persist** + **AsyncStorage** — lưu / tải trận đấu tự động
- **React Navigation** (native-stack) — điều hướng màn hình

## Bắt đầu

```bash
npm install
# iOS (cần macOS + Xcode)
cd ios && pod install && cd ..
npm run ios
# Android (cần Android Studio / emulator)
npm run android
# Metro bundler riêng
npm start
# Kiểm thử
npm test
npx tsc --noEmit     # type-check
npx eslint src       # lint
```

## Kiến trúc

Feature-based + domain-driven, dùng path alias `@/` → `src/`.

```
src/
├── app/                 # Khởi tạo app: Redux store, persist, hooks, App root
│   ├── store.ts         # configureStore + redux-persist (AsyncStorage)
│   ├── hooks.ts         # useAppDispatch / useAppSelector (typed)
│   └── App.tsx          # Provider + PersistGate + NavigationContainer
│
├── navigation/          # RootNavigator + kiểu route
│
├── modules/             # CÁC ENGINE theo domain (logic + Redux slice)
│   ├── game-engine/     # Trận đấu, nhân vật, chỉ số (Might/Speed/Knowledge/Sanity)
│   ├── card-engine/     # Thẻ Event / Omen / Item, sở hữu & chuyển vật phẩm
│   ├── combat-engine/   # Xúc xắc (mặt 0/0/1/1/2/2) + giải quyết chiến đấu
│   ├── haunt-engine/    # Haunt roll, thiết lập Haunt, mục tiêu Hero/Traitor
│   ├── ai-engine/       # (Tương lai) AI điều khiển Hero hoặc Traitor
│   ├── storage/         # Tiện ích id + lớp lưu trữ
│   └── ui/              # Theme + component dùng chung (Screen/Button/Card/StatBadge)
│
├── features/            # MÀN HÌNH theo tính năng
│   ├── home/            # Hub điều hướng + trạng thái trận
│   ├── game-setup/      # Tạo trận mới
│   ├── character/       # Quản lý nhân vật & chỉ số
│   ├── event/           # Quản lý Event
│   ├── omen/            # Quản lý Omen + Haunt roll
│   ├── item/            # Quản lý & chuyển Item
│   ├── combat/          # Combat calculator
│   ├── haunt-setup/     # Thiết lập Haunt, chọn Traitor, mục tiêu
│   └── game-state/      # Save / lịch sử hành động / clear
│
└── types/               # Kiểu dùng chung (StatKey, Side, GamePhase, ...)
```

### Quy ước

- **`modules/`** chứa logic thuần + Redux slice (không phụ thuộc màn hình).
- **`features/`** chỉ là UI, đọc/ghi state qua slice của `modules/`.
- Mỗi engine export qua `index.ts` (barrel) để import gọn: `@/modules/combat-engine`.

## Trạng thái MVP

| Tính năng (spec)        | Trạng thái |
|-------------------------|-----------|
| Tạo trận đấu            | ✅ |
| Quản lý nhân vật + chỉ số | ✅ |
| Quản lý Event           | ✅ |
| Quản lý Omen + Haunt Roll | ✅ |
| Quản lý Item (chuyển)   | ✅ |
| Combat calculator       | ✅ |
| Haunt setup (Hero/Traitor + mục tiêu) | ✅ |
| Save / Load (tự động)   | ✅ |
| AI (Hero/Traitor, Solo) | ⏳ placeholder `ai-engine` |

## Dữ liệu cần bổ sung

Các bảng dữ liệu là **placeholder, dễ mở rộng** — chờ doc dữ liệu thật:

- Thẻ **Event / Omen / Item**: [src/modules/card-engine/data/cards.ts](src/modules/card-engine/data/cards.ts)
- **Haunt** (điều kiện thắng từng phe): [src/modules/haunt-engine/data/haunts.ts](src/modules/haunt-engine/data/haunts.ts)
- **Nhân vật** (12 nhân vật gốc): [src/modules/game-engine/characters.ts](src/modules/game-engine/characters.ts)
- **Phòng & hiệu ứng phòng**: chưa có module — sẽ thêm khi có dữ liệu.
