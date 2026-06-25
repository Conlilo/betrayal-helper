import type { Lang } from '@/types/shared';
import type { Floor, RoomDef, RoomSymbol } from '../types';

/**
 * Starter room tile definitions. Door layouts and symbols are placeholders —
 * replace with the real tiles (and room effects) when the data doc arrives.
 * `defId` 'foyer' is the seeded starting tile for the ground floor.
 */
export const ROOM_DEFS: RoomDef[] = [
  // Starting / fixed tiles
  {
    defId: 'foyer',
    name: 'Foyer',
    floors: ['ground'],
    doors: ['N', 'E', 'S', 'W'],
    symbols: [],
  },
  {
    defId: 'entrance-hall',
    name: 'Entrance Hall',
    floors: ['ground'],
    doors: ['N', 'E', 'W'],
    symbols: [],
  },
  {
    defId: 'grand-staircase',
    name: 'Grand Staircase',
    floors: ['ground'],
    doors: ['S'],
    symbols: [],
  },
  {
    defId: 'upper-landing',
    name: 'Upper Landing',
    floors: ['upper'],
    doors: ['N', 'E', 'S', 'W'],
    symbols: [],
  },
  {
    defId: 'basement-landing',
    name: 'Basement Landing',
    floors: ['basement'],
    doors: ['N', 'E', 'S', 'W'],
    symbols: [],
  },
  {
    defId: 'roof-landing',
    name: 'Roof Landing',
    floors: ['roof'],
    doors: ['N', 'E', 'S', 'W'],
    symbols: [],
  },

  // --- Drawable room tiles (imported from ROOMS_IMPORT) ---
  // `doors` là hướng GỐC (chưa xoay) đọc từ bảng import; app cho xoay tile khi
  // đặt nên hướng này chỉ là khởi điểm. Báo lại nếu tile nào khớp cửa sai.
  {
    defId: 'research-laboratory',
    name: 'Research Laboratory',
    floors: ['basement', 'upper'],
    doors: ['N', 'S'],
    symbols: ['event'],
  },
  {
    defId: 'stairs-from-basement',
    name: 'Stair From Basement',
    floors: ['basement'],
    doors: ['N', 'S'],
    symbols: [],
    effect: 'Leads to and from Foyer.',
  },
  {
    defId: 'rookery',
    name: 'Rookery',
    floors: ['roof'],
    doors: ['E', 'W'],
    symbols: ['omen'],
    effect:
      'When discovered, search the room stack and choose a room tile to place in the house. Then shuffle that stack.',
  },
  {
    defId: 'bathroom',
    name: 'Bathroom',
    floors: ['upper', 'ground'],
    doors: ['N'],
    symbols: ['event'],
  },
  {
    defId: 'graveyard',
    name: 'Graveyard',
    floors: ['ground'],
    doors: ['S'],
    symbols: ['event'],
    outdoor: true,
    effect:
      'When exiting, you must attempt a Sanity roll of 4+. If you fail, lose 1 Knowledge (but continue moving).',
  },
  {
    defId: 'gardens',
    name: 'Gardens',
    floors: ['ground'],
    doors: ['N', 'S'],
    symbols: ['event'],
    outdoor: true,
  },
  {
    defId: 'master-bedroom',
    name: 'Master Bedroom',
    floors: ['upper'],
    doors: ['N', 'E'],
    symbols: ['omen'],
  },
  {
    defId: 'panic-room',
    name: 'Panic Room',
    floors: ['basement', 'ground', 'upper', 'roof'],
    doors: ['W'],
    symbols: ['event'],
    effect:
      'When you exit, you may attempt a Speed roll of 3+. If you succeed, move to any room with a dumbwaiter.',
  },
  {
    defId: 'charred-room',
    name: 'Charred Room',
    floors: ['basement', 'ground', 'upper', 'roof'],
    doors: ['N', 'E', 'S', 'W'],
    symbols: ['omen'],
  },
  {
    defId: 'library',
    name: 'Library',
    floors: ['upper', 'ground'],
    doors: ['S', 'W'],
    symbols: ['event'],
    effect: 'Once per game, if you end your turn here gain 1 Knowledge.',
  },
  {
    defId: 'theater',
    name: 'Theater',
    floors: ['upper', 'ground'],
    doors: ['E', 'W'],
    symbols: ['omen'],
  },
  {
    defId: 'laundry',
    name: 'Laundry',
    floors: ['ground', 'basement'],
    doors: ['N'],
    symbols: ['item', 'dumbwaiter'],
    effect:
      'If you end your turn here, you may discard an item card to draw an item card from the discard pile.',
  },
  {
    defId: 'mystic-elevator',
    name: 'Mystic Elevator',
    floors: ['basement', 'ground', 'upper', 'roof'],
    doors: ['N'],
    symbols: [],
    effect:
      'Once per turn, roll 2 dice and move this room next to any open door on:\n4: any floor\n3: Upper floor\n2: Ground floor\n1: Basement\n0: Basement, then take 1 die of physical damage.',
  },
  {
    defId: 'arsenal',
    name: 'Arsenal',
    floors: ['basement', 'ground'],
    doors: ['E', 'S'],
    symbols: ['item', 'dumbwaiter'],
    effect:
      'When you draw an item card in this room, draw 2 cards and choose 1 to keep. Discard the other.',
  },
  {
    defId: 'coal-chute',
    name: 'Coal Chute',
    floors: ['ground'],
    doors: ['N'],
    symbols: [],
    effect: 'One way slide to Basement Landing.',
  },
  {
    defId: 'spiral-staircase',
    name: 'Spiral Staircase',
    floors: ['roof', 'upper', 'ground'],
    doors: ['N', 'E', 'S', 'W'],
    symbols: [],
    effect: 'You may spend 2 spaces of movement to move to any landing.',
  },
  {
    defId: 'creaky-hallway',
    name: 'Creaky Hallway',
    floors: ['upper', 'ground', 'basement'],
    doors: ['N', 'E', 'S', 'W'],
    symbols: [],
  },
  {
    defId: 'kitchen',
    name: 'Kitchen',
    floors: ['ground', 'basement'],
    doors: ['N', 'E'],
    symbols: ['omen'],
  },
  {
    defId: 'conservatory',
    name: 'Conservatory',
    floors: ['upper', 'ground'],
    doors: ['N'],
    symbols: ['event'],
    outdoor: true,
  },
  {
    defId: 'statuary-corridor',
    name: 'Statuary Corridor',
    floors: ['upper', 'ground', 'basement'],
    doors: ['N', 'S'],
    symbols: ['event'],
  },
  {
    defId: 'bloody-room',
    name: 'Bloody Room',
    floors: ['upper', 'ground'],
    doors: ['N', 'E', 'S', 'W'],
    symbols: ['item'],
  },
  {
    defId: 'game-room',
    name: 'Game Room',
    floors: ['upper', 'ground', 'basement'],
    doors: ['N', 'E', 'W'],
    symbols: ['event'],
  },
  {
    defId: 'vault',
    name: 'Vault',
    floors: ['upper', 'basement'],
    doors: ['N'],
    symbols: ['event'],
    effect:
      'You can attempt a Knowledge roll of 6+ to open and empty the vault (max 2 item cards).',
  },
  {
    defId: 'solarium',
    name: 'Solarium',
    floors: ['roof', 'upper'],
    doors: ['N'],
    symbols: ['item'],
    outdoor: true,
    effect:
      'If you end your turn here, you may discard an item card to gain 1 Sanity.',
  },
  {
    defId: 'sewing-room',
    name: 'Sewing Room',
    floors: ['roof', 'upper'],
    doors: ['N', 'E', 'S', 'W'],
    symbols: ['item', 'dumbwaiter'],
    effect:
      "If you end your turn here, you may discard an item card to gain 1 physical trait if it's below its starting value.",
  },
  {
    defId: 'chapel',
    name: 'Chapel',
    floors: ['upper', 'ground'],
    doors: ['N'],
    symbols: ['event'],
    effect: 'Once per game, if you end your turn here gain 1 Sanity.',
  },
  {
    defId: 'study',
    name: 'Study',
    floors: ['roof', 'upper', 'ground'],
    doors: ['E', 'W'],
    symbols: ['omen', 'dumbwaiter'],
    effect:
      'Once per game, if you end your turn here, put your explorer token here and gain 1 mental trait.',
  },
  {
    defId: 'junk-room',
    name: 'Junk Room',
    floors: ['upper', 'ground', 'basement'],
    doors: ['N', 'E', 'S', 'W'],
    symbols: ['omen'],
    effect:
      'When exiting, you must attempt a Might roll of 3+. If you fail, lose 1 Speed (but continue moving).',
  },
  {
    defId: 'widows-walk',
    name: "Widow's Walk",
    floors: ['roof', 'upper'],
    doors: ['E', 'S', 'W'],
    symbols: ['event'],
    effect:
      'Add 1 to the results of Knowledge rolls here, and subtract 1 from the results of Speed rolls here (minimum 0).',
  },
  {
    defId: 'drawing-room',
    name: 'Drawing Room',
    floors: ['roof', 'upper'],
    doors: ['N', 'E', 'S', 'W'],
    symbols: ['dumbwaiter'],
    effect: 'When discovered, draw 1 card of any type (event/omen/item tùy chọn).',
  },
  {
    defId: 'collapsed-room',
    name: 'Collapsed Room',
    floors: ['upper', 'ground'],
    doors: ['N', 'E', 'S', 'W'],
    symbols: [],
    effect:
      'You must attempt a Speed roll of 5+ to avoid falling. If you fail, draw a basement tile and put it in play. You fall there and take 1 die of physical damage.',
  },
  {
    defId: 'gallery',
    name: 'Gallery',
    floors: ['upper'],
    doors: ['N', 'E'],
    symbols: ['omen'],
    effect:
      "You can choose to fall to the Ballroom if it's in the house. If you do, take 1 die of physical damage.",
  },
  {
    defId: 'bedroom',
    name: 'Bedroom',
    floors: ['upper'],
    doors: ['E', 'W'],
    symbols: ['event'],
  },
  {
    defId: 'nursery',
    name: 'Nursery',
    floors: ['roof', 'upper'],
    doors: ['N', 'E'],
    symbols: ['omen'],
    effect:
      "If you end your turn here, gain 1 Sanity if it's below its starting value; lose 1 Sanity if it's above its starting value.",
  },
  {
    defId: 'pentagram-chamber',
    name: 'Pentagram Chamber',
    floors: ['basement'],
    doors: ['E'],
    symbols: ['omen'],
    effect:
      'When exiting, you must attempt a Knowledge roll of 4+. If you fail, lose 1 Sanity (but continue moving).',
  },
  {
    defId: 'abandoned-room',
    name: 'Abandoned Room',
    floors: ['ground', 'basement'],
    doors: ['N', 'E', 'S', 'W'],
    symbols: ['omen'],
  },
  {
    defId: 'dusty-hallway',
    name: 'Dusty Hallway',
    floors: ['upper', 'ground', 'basement'],
    doors: ['N', 'E', 'S'],
    symbols: [],
  },
  {
    defId: 'dungeon',
    name: 'Dungeon',
    floors: ['basement'],
    doors: ['N', 'S'],
    symbols: ['omen'],
    effect:
      'When you enter, you may attempt a Sanity roll of 3+. If you fail, lose 1 Sanity.',
  },
  {
    defId: 'organ-room',
    name: 'Organ Room',
    floors: ['upper', 'ground', 'basement'],
    doors: ['N', 'S'],
    symbols: ['event'],
  },
  {
    defId: 'menagerie',
    name: 'Menagerie',
    floors: ['ground', 'basement'],
    doors: ['E', 'W'],
    symbols: ['event', 'dumbwaiter'],
    effect:
      'Once per game, if you end your turn here, put your explorer token here and gain 1 physical trait.',
  },
  {
    defId: 'furnace-room',
    name: 'Furnace Room',
    floors: ['basement'],
    doors: ['N', 'S', 'W'],
    symbols: ['omen'],
    effect: 'If you end your turn here, take 1 point of physical damage.',
  },
  {
    defId: 'larder',
    name: 'Larder',
    floors: ['basement'],
    doors: ['N', 'S'],
    symbols: ['item'],
    effect: 'Once per game, if you end your turn here gain 1 Might.',
  },
  {
    defId: 'patio',
    name: 'Patio',
    floors: ['ground'],
    doors: ['N', 'S', 'W'],
    symbols: ['event'],
    outdoor: true,
  },
  {
    defId: 'dining-room',
    name: 'Dining Room',
    floors: ['ground'],
    doors: ['N', 'E'],
    symbols: ['omen'],
  },
  {
    defId: 'tree-house',
    name: 'Tree House',
    floors: ['ground'],
    doors: ['S', 'W'],
    symbols: ['event'],
    effect:
      'Put a Plant token on any open door on the roof or upper floor that is adjacent to that door. (Ngoài trời)',
  },
  {
    defId: 'underground-lake',
    name: 'Underground Lake',
    floors: ['basement'],
    doors: ['N', 'E'],
    symbols: ['event'],
  },
  {
    defId: 'catacombs',
    name: 'Catacombs',
    floors: ['basement'],
    doors: ['N', 'S'],
    symbols: ['omen'],
    effect:
      'You can attempt a Sanity roll of 6+ to cross. If you fail, you stop moving.',
  },
  {
    defId: 'storm-cellar',
    name: 'Storm Cellar',
    floors: ['basement'],
    doors: ['E', 'S'],
    symbols: ['item', 'dumbwaiter'],
  },
  {
    defId: 'locked-room',
    name: 'Locked Room',
    floors: ['roof', 'upper', 'basement'],
    doors: ['N', 'E', 'S'],
    symbols: ['event'],
    effect:
      'Put a Lock token on each door of this room. To enter or exit through a locked door, attempt a Knowledge roll of 3+ to remove the Lock.',
  },
  {
    defId: 'servants-quarters',
    name: 'Servants Quarters',
    floors: ['upper', 'basement'],
    doors: ['N', 'E', 'S', 'W'],
    symbols: ['omen'],
  },
  {
    defId: 'cave',
    name: 'Cave',
    floors: ['basement'],
    doors: ['N', 'E', 'S', 'W'],
    symbols: ['event'],
    effect:
      'If you enter and exit this room on your turn, lose 1 die from a physical trait.',
  },
  {
    defId: 'tower',
    name: 'Tower',
    floors: ['upper'],
    doors: ['E', 'W'],
    symbols: ['event'],
    outdoor: true,
    effect:
      'You can attempt a Might roll of 3+ to cross. If you fail, you stop moving.',
  },
  {
    defId: 'operating-laboratory',
    name: 'Operating Laboratory',
    floors: ['upper', 'basement'],
    doors: ['E', 'S'],
    symbols: ['event'],
  },
  {
    defId: 'wine-cellar',
    name: 'Wine Cellar',
    floors: ['basement'],
    doors: ['N', 'S'],
    symbols: ['item'],
  },
  {
    defId: 'attic',
    name: 'Attic',
    floors: ['upper'],
    doors: ['S'],
    symbols: ['event'],
    effect:
      'When exiting, you must attempt a Speed roll of 3+. If you fail, lose 1 Might (but continue moving).',
  },
  {
    defId: 'storeroom',
    name: 'Storeroom',
    floors: ['upper', 'basement'],
    doors: ['N'],
    symbols: ['item'],
  },
  {
    defId: 'gymnasium',
    name: 'Gymnasium',
    floors: ['upper', 'basement'],
    doors: ['E', 'S'],
    symbols: ['omen'],
    effect: 'Once per game, if you end your turn here gain 1 Speed.',
  },
  {
    defId: 'chasm',
    name: 'Chasm',
    floors: ['basement'],
    doors: ['E', 'W'],
    symbols: [],
    effect:
      'You can attempt a Speed roll of 3+ to cross. If you fail, you stop moving.',
  },
  {
    defId: 'balcony',
    name: 'Balcony',
    floors: ['upper'],
    doors: ['N', 'S'],
    symbols: ['omen'],
    outdoor: true,
  },
  {
    defId: 'ballroom',
    name: 'Ballroom',
    floors: ['ground'],
    doors: ['N', 'E', 'S', 'W'],
    symbols: ['event'],
  },
  {
    defId: 'crypt',
    name: 'Crypt',
    floors: ['basement'],
    doors: ['N'],
    symbols: ['event'],
    effect: 'If you end your turn here, take 1 point of mental damage.',
  },
];

/**
 * Fixed starting tiles auto-placed on each floor, with their offset (dx, dy)
 * from the board centre. The ground floor always starts with the classic row
 * Grand Staircase — Foyer — Entrance Hall (top→bottom). Other floors start
 * with their single landing.
 */
export interface SeedTile {
  defId: string;
  dx: number;
  dy: number;
}

export const FLOOR_SEED: Record<Floor, SeedTile[]> = {
  basement: [{ defId: 'basement-landing', dx: 0, dy: 0 }],
  ground: [
    { defId: 'grand-staircase', dx: 0, dy: -1 },
    { defId: 'foyer', dx: 0, dy: 0 },
    { defId: 'entrance-hall', dx: 0, dy: 1 },
  ],
  upper: [{ defId: 'upper-landing', dx: 0, dy: 0 }],
  roof: [{ defId: 'roof-landing', dx: 0, dy: 0 }],
};

/** defIds that are auto-placed at seed time — never drawn from the pool. */
const SEEDED_IDS = new Set(
  Object.values(FLOOR_SEED).flat().map(s => s.defId),
);

export const ROOM_DEFS_BY_ID: Record<string, RoomDef> = Object.fromEntries(
  ROOM_DEFS.map(r => [r.defId, r]),
);

/** Room tiles legal to draw/place on a floor (excludes fixed starting tiles). */
export function roomDefsForFloor(floor: Floor): RoomDef[] {
  return ROOM_DEFS.filter(
    r => r.floors.includes(floor) && !SEEDED_IDS.has(r.defId),
  );
}

export function doorsOfDef(defId: string) {
  return ROOM_DEFS_BY_ID[defId]?.doors ?? [];
}

export function symbolsOfDef(defId: string): RoomSymbol[] {
  return ROOM_DEFS_BY_ID[defId]?.symbols ?? [];
}

/**
 * Vietnamese translations of room effects, keyed by defId. The data is authored
 * in English (see ROOM_DEFS); `effectOfDef` returns the VI text when the app
 * language is `vi`, falling back to the English `effect` when none exists here.
 */
export const ROOM_EFFECTS_VI: Record<string, string> = {
  'stairs-from-basement': 'Dẫn đến và đi từ Foyer (Tiền sảnh).',
  rookery:
    'Khi khám phá, lục chồng phòng và chọn 1 thẻ phòng đặt vào nhà, rồi xáo lại chồng đó.',
  graveyard:
    'Khi rời phòng, phải đổ Sanity 4+. Thất bại: mất 1 Knowledge (vẫn đi tiếp).',
  'panic-room':
    'Khi rời phòng, có thể đổ Speed 3+. Thành công: di chuyển đến phòng bất kỳ có dumbwaiter.',
  library: 'Một lần mỗi ván, nếu kết thúc lượt ở đây, nhận 1 Knowledge.',
  laundry:
    'Nếu kết thúc lượt ở đây, có thể bỏ 1 lá Item để rút 1 lá Item từ chồng bài bỏ.',
  'mystic-elevator':
    'Một lần mỗi lượt, đổ 2 xúc xắc và di chuyển phòng này cạnh cửa mở bất kỳ:\n4: tầng bất kỳ\n3: tầng trên\n2: tầng trệt\n1: tầng hầm\n0: tầng hầm, rồi nhận 1 xúc xắc sát thương vật chất.',
  arsenal: 'Khi rút lá Item ở phòng này, rút 2 lá và giữ 1, bỏ lá còn lại.',
  'coal-chute': 'Đường trượt 1 chiều xuống Basement Landing.',
  'spiral-staircase': 'Có thể tốn 2 ô di chuyển để đến landing bất kỳ.',
  vault:
    'Có thể đổ Knowledge 6+ để mở và lấy hết đồ trong két (tối đa 2 lá Item).',
  solarium: 'Nếu kết thúc lượt ở đây, có thể bỏ 1 lá Item để nhận 1 Sanity.',
  'sewing-room':
    'Nếu kết thúc lượt ở đây, có thể bỏ 1 lá Item để nâng 1 chỉ số vật chất lên mức bắt đầu nếu đang thấp hơn.',
  chapel: 'Một lần mỗi ván, nếu kết thúc lượt ở đây, nhận 1 Sanity.',
  study:
    'Một lần mỗi ván, nếu kết thúc lượt ở đây, đặt explorer token vào đây và nhận 1 chỉ số tinh thần.',
  'junk-room':
    'Khi rời phòng, phải đổ Might 3+. Thất bại: mất 1 Speed (vẫn đi tiếp).',
  'widows-walk':
    'Cộng 1 vào kết quả đổ Knowledge ở đây, trừ 1 vào kết quả đổ Speed ở đây (tối thiểu 0).',
  'drawing-room': 'Khi khám phá, rút 1 lá bất kỳ loại (event/omen/item tùy chọn).',
  'collapsed-room':
    'Phải đổ Speed 5+ để khỏi rơi. Thất bại: rút 1 phòng tầng hầm đặt vào nhà, rơi xuống đó và nhận 1 xúc xắc sát thương vật chất.',
  gallery:
    'Có thể chọn rơi xuống Ballroom nếu nó có trong nhà; nếu rơi, nhận 1 xúc xắc sát thương vật chất.',
  nursery:
    'Nếu kết thúc lượt ở đây: nhận 1 Sanity nếu đang dưới mức bắt đầu; mất 1 Sanity nếu đang trên mức bắt đầu.',
  'pentagram-chamber':
    'Khi rời phòng, phải đổ Knowledge 4+. Thất bại: mất 1 Sanity (vẫn đi tiếp).',
  dungeon: 'Khi vào phòng, có thể đổ Sanity 3+. Thất bại: mất 1 Sanity.',
  menagerie:
    'Một lần mỗi ván, nếu kết thúc lượt ở đây, đặt explorer token vào đây và nhận 1 chỉ số vật chất.',
  'furnace-room': 'Nếu kết thúc lượt ở đây, nhận 1 điểm sát thương vật chất.',
  larder: 'Một lần mỗi ván, nếu kết thúc lượt ở đây, nhận 1 Might.',
  'tree-house':
    'Đặt 1 Plant token lên cửa mở bất kỳ ở tầng mái hoặc tầng trên kề với cửa đó. (Ngoài trời)',
  catacombs: 'Có thể đổ Sanity 6+ để băng qua. Thất bại: dừng di chuyển.',
  'locked-room':
    'Đặt 1 Lock token lên mỗi cửa của phòng. Để vào/ra qua cửa khóa, đổ Knowledge 3+ để gỡ khóa.',
  cave: 'Nếu bạn vào và ra phòng này trong cùng lượt, mất 1 xúc xắc từ một chỉ số vật chất.',
  tower: 'Có thể đổ Might 3+ để băng qua. Thất bại: dừng di chuyển. (Ngoài trời)',
  attic:
    'Khi rời phòng, phải đổ Speed 3+. Thất bại: mất 1 Might (vẫn đi tiếp).',
  gymnasium: 'Một lần mỗi ván, nếu kết thúc lượt ở đây, nhận 1 Speed.',
  chasm: 'Có thể đổ Speed 3+ để băng qua. Thất bại: dừng di chuyển.',
  crypt: 'Nếu kết thúc lượt ở đây, nhận 1 điểm sát thương tinh thần.',
};

/** A room's printed effect in the given language (falls back to English). */
export function effectOfDef(defId: string, lang: Lang = 'en'): string | undefined {
  if (lang === 'vi' && ROOM_EFFECTS_VI[defId]) return ROOM_EFFECTS_VI[defId];
  return ROOM_DEFS_BY_ID[defId]?.effect;
}

/**
 * True for rooms that count as outdoor / has a window. Used by the events that
 * affect everyone standing outside (Shrieking Wind, The Beckoning, Lightning
 * Strikes — the latter also counts anyone on the roof floor).
 */
export function isOutdoorDef(defId: string): boolean {
  return ROOM_DEFS_BY_ID[defId]?.outdoor === true;
}

/** All outdoor / window room tiles. */
export const OUTDOOR_ROOM_DEFS: RoomDef[] = ROOM_DEFS.filter(r => r.outdoor);
