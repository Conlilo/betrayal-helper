/**
 * "Triggering the Haunt" chart (Widow's Walk). When the Haunt roll succeeds,
 * cross-reference the ROOM where the omen was drawn with the OMEN itself to get
 * the haunt number. `★` on the printed chart = Seasons of the Witch (id 101).
 *
 * ⚠️ TRANSCRIBED FROM A PHOTO — VERIFY against the printed chart before trusting.
 * The numbers below are a best-effort reading of a dense numeric grid; some
 * cells are likely off. Each ROWS entry is 21 haunt ids in CHART_OMENS order.
 *
 * This is the A–T portion of the chart (18 rooms). Add the remaining rooms when
 * their rows are available.
 */

/** Seasons of the Witch — the `★` cells on the chart. */
export const SEASONS_OF_THE_WITCH_ID = 101;

/** Omen columns, in the chart's left-to-right order (defId + display label). */
export const CHART_OMENS: { id: string; label: string }[] = [
  { id: 'omen-bite', label: 'Bite' },
  { id: 'omen-bloodstone', label: 'Bloodstone' },
  { id: 'omen-book', label: 'Book' },
  { id: 'omen-box', label: 'Box' },
  { id: 'omen-cat', label: 'Cat' },
  { id: 'omen-crystal-ball', label: 'Crystal Ball' },
  { id: 'omen-dog', label: 'Dog' },
  { id: 'omen-girl', label: 'Girl' },
  { id: 'omen-holy-symbol', label: 'Holy Symbol' },
  { id: 'omen-key', label: 'Key' },
  { id: 'omen-letter', label: 'Letter' },
  { id: 'omen-madman', label: 'Madman' },
  { id: 'omen-mask', label: 'Mask' },
  { id: 'omen-medallion', label: 'Medallion' },
  { id: 'omen-photograph', label: 'Photograph' },
  { id: 'omen-ring', label: 'Ring' },
  { id: 'omen-rope', label: 'Rope' },
  { id: 'omen-skull', label: 'Skull' },
  { id: 'omen-spear', label: 'Spear' },
  { id: 'omen-spirit-board', label: 'Spirit Board' },
  { id: 'omen-vial', label: 'Vial' },
];

/** Room rows (defId + display label), in chart order. */
export const CHART_ROOMS: { id: string; label: string }[] = [
  { id: 'abandoned-room', label: 'Abandoned Room' },
  { id: 'balcony', label: 'Balcony' },
  { id: 'catacombs', label: 'Catacombs' },
  { id: 'charred-room', label: 'Charred Room' },
  { id: 'dining-room', label: 'Dining Room' },
  { id: 'dungeon', label: 'Dungeon' },
  { id: 'furnace-room', label: 'Furnace Room' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'gymnasium', label: 'Gymnasium' },
  { id: 'junk-room', label: 'Junk Room' },
  { id: 'kitchen', label: 'Kitchen' },
  { id: 'master-bedroom', label: 'Master Bedroom' },
  { id: 'nursery', label: 'Nursery' },
  { id: 'pentagram-chamber', label: 'Pentagram Chamber' },
  { id: 'rookery', label: 'Rookery' },
  { id: 'servants-quarters', label: "Servants' Quarters" },
  { id: 'study', label: 'Study' },
  { id: 'theater', label: 'Theater' },
];

const S = SEASONS_OF_THE_WITCH_ID;

// Each row: 21 haunt ids matching CHART_OMENS order.
// Bite, Bloodstone, Book, Box, Cat, Crystal Ball, Dog, Girl, Holy Symbol, Key,
// Letter, Madman, Mask, Medallion, Photograph, Ring, Rope, Skull, Spear,
// Spirit Board, Vial.
const ROWS: Record<string, number[]> = {
  // TODO: verify all rows against the printed chart.
  'abandoned-room': [18, 96, 7, 63, 88, 12, 38, 1, 9, 96, 100, 45, 42, 49, 96, 28, 86, 34, 43, 48, 96],
  balcony: [24, 67, 7, 63, 32, 32, 5, 16, 6, 90, 87, 11, 25, 49, 89, 20, 71, 47, 39, 2, 70],
  catacombs: [4, 59, 7, 61, 88, 23, 46, 1, 13, 53, 83, 10, 25, 49, 94, 41, 69, 37, 43, 48, 91],
  'charred-room': [24, 79, 33, 63, S, 23, 38, 30, 13, S, 83, 31, 48, 44, S, 20, 69, 47, 15, 8, S],
  'dining-room': [24, 67, 3, 99, 60, 27, 5, 16, 6, 90, 54, 45, 42, 21, 89, 20, 82, 37, 39, 40, 91],
  dungeon: [97, 55, 55, 61, 55, 84, 72, 55, 66, 53, 100, 56, 55, 77, 89, 85, 69, 73, 65, 64, 80],
  'furnace-room': [4, 59, 33, 61, 75, 32, 38, 30, 13, 75, 83, 10, 42, 36, 75, 28, 75, 34, 15, 2, 91],
  gallery: [18, 79, 3, 52, 88, 19, 19, 19, 22, 53, 54, 10, 25, 36, 76, 41, 71, 37, 15, 8, 70],
  gymnasium: [35, 79, 29, 52, 92, 12, 46, 1, 22, 92, 100, 11, 22, 21, 92, 41, 86, 47, 43, 48, 92],
  'junk-room': [4, 79, 33, 52, 88, 27, 46, 1, 9, 68, 100, 11, 25, 76, 91, 17, 71, 17, 17, 40, 91],
  kitchen: [18, 67, 3, 99, 60, 23, 46, 16, 22, 53, 87, 31, 32, 36, 89, 41, 82, 37, 39, 2, 80],
  'master-bedroom': [35, 98, 29, 98, 98, 27, 5, 16, 6, 90, 54, 10, 35, 44, 76, 20, 82, 47, 43, 2, 98],
  nursery: [74, 67, 95, 99, 74, 84, 72, 58, 66, 68, 87, 74, 74, 95, 95, 85, 86, 73, 65, 95, 80],
  'pentagram-chamber': [26, 59, 50, 61, 81, 32, 50, 26, 26, 81, 83, 45, 14, 14, 94, 26, 81, 14, 50, 40, 81],
  rookery: [97, 93, 93, 57, 57, 93, 57, 58, 66, 93, 87, 56, 57, 77, 94, 85, 86, 73, 65, 64, 70],
  'servants-quarters': [35, 59, 29, 52, 60, 12, 5, 30, 9, 68, 54, 31, 42, 21, 94, 28, 71, 34, 15, 8, 80],
  study: [97, 59, 78, 99, 78, 84, 72, 58, 78, 68, 78, 56, 78, 77, 76, 85, 82, 73, 65, 64, 62],
  theater: [97, 62, 51, 63, 60, 84, 72, 58, 66, 68, 51, 56, 62, 77, 51, 51, 69, 62, 62, 64, 62],
};

/** Nested lookup: HAUNT_CHART[roomDefId][omenDefId] = haunt id. */
export const HAUNT_CHART: Record<string, Record<string, number>> = Object.fromEntries(
  Object.entries(ROWS).map(([room, ids]) => [
    room,
    Object.fromEntries(CHART_OMENS.map((o, i) => [o.id, ids[i]])),
  ]),
);

/**
 * The haunt id triggered by drawing `omenDefId` in `roomDefId`, or undefined if
 * that room/omen combo isn't on the chart.
 */
export function getTriggeredHaunt(
  roomDefId: string,
  omenDefId: string,
): number | undefined {
  return HAUNT_CHART[roomDefId]?.[omenDefId];
}
