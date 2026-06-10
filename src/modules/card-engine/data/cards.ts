import type { CardDef } from '../types';

/**
 * A small starter set of card definitions. The full game has ~45 event,
 * 13 omen and 22 item cards — extend this list (or load from JSON) over time.
 */
export const CARD_DEFS: CardDef[] = [
  // --- Events --- (description = lời dẫn, effect = xử lý tác dụng)
  {
    defId: 'event-creepy-crawlies',
    type: 'event',
    name: 'Creepy Crawlies',
    description: 'Something skitters in the dark and swarms over you.',
    effect:
      'Roll for Sanity. 4+: nothing. 2–3: lose 1 Sanity. 0–1: lose 2 Sanity.',
  },
  {
    defId: 'event-the-voice',
    type: 'event',
    name: 'The Voice',
    description: 'A whisper from nowhere offers forbidden knowledge.',
    effect: 'Roll for Knowledge. 5+: gain 1 Knowledge. 0–2: lose 1 Sanity.',
  },
  {
    defId: 'event-hidden-passage',
    type: 'event',
    name: 'Hidden Passage',
    description: 'A draft reveals a seam in the wall — a secret way.',
    effect: 'Move to any other room that has a matching door symbol.',
  },

  // --- Omens ---
  {
    defId: 'omen-skull',
    type: 'omen',
    name: 'Skull',
    description: 'Một cái đầu lâu, bị nứt và không còn răng.',
    effect:
      'Nếu bạn nhận thiệt hại tinh thần (sanity hoặc knowledge), thay vào đó bạn có thế thay bằng thiệt hại vật chất (might hoặc speed). Đổ xí ngầu cho ngôi nhà ma ngay lúc này',
  },
  {
    defId: 'omen-madman',
    type: 'omen',
    name: 'Madman',
    description: 'Bạn đồng hành. Một tiên diên mê sảng, miệng sủi bọt mép.',
    effect:
      'Nhận 2 Might và mất 1 Sanity.\n Mất 2 Might và nhận 1 Sanity nếu bạn để Tên Điên trốn thoát.\n Lá omen này không thể trao đổi, đưa cho người khác hay để trao đổi.\n Đổ xí ngầu cho ngôi nha ma hay lúc này.',
  },
  {
    defId: 'omen-vial',
    type: 'omen',
    name: 'Vial',
    description:
      "The old and crazy woman said you sould drink this potion that glows with an amber light. Maybe that's how she got so old and crazy.",
    effect:
      'Once on your turn, you may drink from the vial. Roll 2 dice:\n 0: Poison! Take 2 point of physical damage (might and speed).\n 1: Visions and dreams. Take 2 points of mental damamge (sannity and knowledge)\n 2: Failed experiment. No effect.\n3: Invigoratting tonic. Gain 1 in ant physical trait. \n 4: The blood of something unknow gain 1 in each trait but sanity. Lose 2 Sanity. \n Make a haunt roll now',
  },
  {
    defId: 'omen-crystal-ball',
    type: 'omen',
    name: 'Crystal ball',
    description: 'Hình ảnh mờ mịt xuất hiện trong quả cầu.',
    effect:
      'Một lần mỗi lượt, Sau khi ngôi nhà ma được tiết lộ bạn có thể đổ xí ngầu Knowledge để nhìn vào quả cầu thủy tinh. \n 4+: Bạn nhìn thấy được sự thật tìm lá Item hay Event mà bạn chọn. Xào ngẫu nhiên chồng bài đó. Sau đó đặt lên đầu. \n 1-3: Bán tránh đi ánh mắt của mình. Mất 1 Sanity.\n 0: Bạn nhìn chằm chằm vào địa ngục. Mất 2 Sanity.\n Đổ xí ngầu cho nhà ma lúc này.',
  },
  {
    defId: 'omen-medallion',
    type: 'omen',
    name: 'Medallion',
    description: 'Huy chương có hình ngôi sao 5 cánh',
    effect:
      'Bạn được miễn dịch với ảnh hưởng của Pentagram Champer, Crypt và Graveyard. \n Đổ xí ngầu cho ngôi nhà ma ngay lúc này.',
  },
  {
    defId: 'omen-ring',
    type: 'omen',
    name: 'Ring',
    description: 'Chiếc nhẫn méo mó với dòng chữ khắc khó hiểu',
    effect:
      'Nếu bạn tấn công đối phương mà có Sanity, bạn có thể tấn công băng Sanity thay vì Might. (Đối thủ của bạn phòng ngự bằng Sanity, và nhận thiệt hại là tin thần, thay vì vật chất). \n Đổ xí ngầu cho ngôi nhà ma ngay lúc này.',
  },
  {
    defId: 'omen-spirit-board',
    type: 'omen',
    name: 'Spirit board',
    description: 'Tấm bảng với nhưng con số và chữ cái để gọi cái chết',
    effect:
      'Trước khi di chuyển trong lượt của mình, bạn có thể nhìn thẻ đầu tiên trong chồng thể căn phòng.\nNếu sử dung Spirit board sau khi căn nhà ma được tiết lộ, kẻ phản bội có thể di chuyển số lượng quái vật bất kỳ 1 bước về phía bạn (nếu bạn là kẻ phản bội, bạn không cần phải di chuyển quái vật). Nếu không có phản bội, tât cả quái vật sẽ di chuyển về phía bạn 1 bước. \n Đổ xí ngầu cho ngôi nhà ma ngay lúc này.',
  },
  {
    defId: 'omen-bite',
    type: 'omen',
    name: 'Bite',
    description: 'Tiếng gầm gừ mùi của cái chết',
    effect:
      'Khi bạn rút được lá này một con gì đó sẽ cắn bạn. NGười chơi bên phải bạn sẽ đổ 4 xí ngầu Might tượng trưng cho đòn cắn của con thú đó(Trước khi nó bỏ chạy vào bóng tối). Bạn chông lại đòn tấn công bình thường, bằng cách đổ xí ngầu tương ứng với giá trị Might của bạn.\nLá Omen này không thể bị trao đổi , đưa cho ai khác hay bị trộm. \n Đổ xí ngầu cho ngôi nhà ma ngay lúc này.',
  },
  {
    defId: 'omen-dog',
    type: 'omen',
    name: 'Dog',
    description: 'Tiếng gầm gừ mùi của cái chết',
    effect:
      'Bạn đồng hành\n Nhận 1 Might và 1 Sanity.\n Mất 1 Might và 1 Sanity nếu bạn mất lá Dog.\nNhận token quái vật nhỏ để tượng trưng cho Dog. Đặt nó vào phòng của bạn.\nMột lần trong lượt của mình, Dog có thể di chuyển đến bất kỳ phòng đã khám phá nào với tối đa là 6 bước, sử dụng của và cầu thang, sau đó có thể quay lại. Nó có thể nhặt lên, mang lại và/hoặc đưa 1 vật phẩm trước khi quay lại.\nĐối thủ không thể ngăn cản Dog. Nó không thể sử dụng hành lang 1 chiều hay phòng mà yêu cầu sử dụng xí ngầu. Nó không không thể mang các vật phẩm mà làm chậm việc di chuyển.\n Lá Omen này không thể trao đổi, đưa cho người khác hay trộm. \n Đổ xí ngầu cho ngôi nhà ma ngay lúc này.',
  },
  {
    defId: 'omen-holy-symbol',
    type: 'omen',
    name: 'Holy symbol',
    description: 'Biểu tượng của sự yên bình trong một thế giới đầy hỗn loạn',
    effect:
      'Nhận 2 Sanity.\nMất 2 Sanity nếu bạn mất Holy symbol. \n Đổ xí ngầu cho ngôi nhà ma ngay lúc này.',
  },
  {
    defId: 'omen-girl',
    type: 'omen',
    name: 'Girl',
    description: 'Bạn đồng hành\nMột cô gái.\nBị mắc bẫy.\nMột mình.\nBạn giải thoát cho cô ta!',
    effect:
      'Nhận 1 Sanity và 1 Knowledge.\nMất 1 Sanity và 1 Knowledge nếu bạn mất Holy symbol.\nLá Omen này không thể trao đổi, đưa cho người khác hay trộm \n Đổ xí ngầu cho ngôi nhà ma ngay lúc này.',
  },
  {
    defId: 'omen-mask',
    type: 'omen',
    name: 'Mask',
    description: 'Một cái mặt nạ ảm đạm giúp che đi âm mưu thực sự của bạn',
    effect:
      'Một lần trong lượt của mình, bạn có thể đổ xí ngầu Sanity để sử dụng Mask:\n4+ Bạn có thể mang hoặc tháo Mask ra.\nNếu bạn mang Mask, nhận 2 Knowledge và mất 2 Sanity.\nNếu bạn thao Mask ra, nhận 2 Sanity và mất 2 Knowledge.\n0-3: Bạn không thể sử dụng Mask kượt này.\n Đổ xí ngầu cho ngôi nhà ma ngay lúc này.',
  },
  {
    defId: 'omen-spear',
    type: 'omen',
    name: 'Spear',
    description: 'Vũ khí\nThứ vũ khí rất mạnh mẽ',
    effect:
      'Đổ thêm 2 xí ngầy nữa( tối đa 8) khi bạn tấn công Might bằng vũ khí này.\nBạn không thể sử dụng vũ khí khác khi đang sử dụng vũ khí này.\n Đổ xí ngầu cho ngôi nhà ma ngay lúc này.',
  },
  {
    defId: 'omen-book',
    type: 'omen',
    name: 'Book',
    description: 'Một cuốn nhận ký hay ghi chú của 1 cuốn thí nghiệm khoa học?\nBản khảo cổ, hay kiên thức thời hiện đại?',
    effect:
      'Nhận 2 Knowledge.\nMất 2 Knowledge nếu bạn làm mất lá Book\n Đổ xí ngầu cho ngôi nhà ma ngay lúc này.',
  },
  {
    defId: 'omen-box',
    type: 'omen',
    name: 'Box',
    description: 'They were always telling you to think outside of it. Now you\'re worries you will end up inside it',
    effect:
      'When you draw this card draw an item card and put in on this card. That Item cannot be dropped or traded. If someone would steal that item, you can instead discard the Box. On your turn, you may remove that item from the Box and put a different item in your possession into the Box. If it is empty, you may put an item in the Box. The Box cannot be stolen\n Make a haunt roll now.',
  },
  {
    defId: 'omen-bloodstone',
    type: 'omen',
    name: 'Bloodstone',
    description: 'Smooth and the deep green of a midnghit forest, the stone is veinedwith crimson. They say you cannot  get blood from a stone.\nThey did not ask this one',
    effect:
      'Once per turn, you may lose 1 from any trait to add 2 dice (maximum of 8 dice) to your trait roll.\n Make a haunt roll now.',
  },
  {
    defId: 'omen-rope',
    type: 'omen',
    name: 'Rope',
    description: 'It probably was not used to hang anybody. Today',
    effect:
      'You may move up the Coal Chute, and from the Ball Room to the Gallery. You do not need to roll for crossing the Chasm. You do not take damame from the Collabsed Room, and can move from the room with the Below Collapsed Room token in to the Collapsed Room. When moving via a Dumbwaiter you may move to any landing\n Make a haunt roll now.',
  },
  {
    defId: 'omen-key',
    type: 'omen',
    name: 'Key',
    description: 'You heve been wondering how to open all the locks in the house. The question is, thy did they get locked in the first place?',
    effect:
      'Add 4 dice to trait rolls to open or take something from a card or room tile, such as the Locked Room, Safe or Vault.\nYou may pass through the Locked Room without removing a lock. At the start of each turn, you may choose to put a Lock token on  an unlocked door in the Locked Rom, if you are next to that door\n Make a haunt roll now.',
  },
  {
    defId: 'omen-photograph',
    type: 'omen',
    name: 'Photograph',
    description: 'It changes as you look at it, showing different rooms in this house. Probably this house',
    effect:
      'When discorvering a room, you may  discard the first drawn room tile and discover the next eligible room in the room stack instead\n Make a haunt roll now.',
  },
  {
    defId: 'omen-letter',
    type: 'omen',
    name: 'Letter',
    description: 'Scrwled in ink, or whatever',
    effect:
      'You may hand one of your explorer token to another explorer. On your turn , you may move to that explorer\'s room, then discard this omen and the explorer discards your explorer token\n Make a haunt roll now.',
  },
  {
    defId: 'omen-cat',
    type: 'omen',
    name: 'Cat',
    description: 'Companion\nIt crossed you path, and you are supposed to have bad luck. But maybe you crossed its path, and it is the one that is not too happy about it. Now it accompanies you',
    effect:
      'You may call on the Cat for luck before tour trait roll. Roll 1 dice:\n 0: Subtract 2 from the resukt of that trait roll\n 1+: Add 2 to the result of the trait roll.\n This Omen cannot be dropped, traded, or stolen\n Make a haunt roll now.',
  },

  // --- Items ---
  {
    defId: 'item-revolver',
    type: 'item',
    name: 'Revolver',
    description: 'A heavy six-shooter, cold in your hand.',
    effect: 'Add 2 dice to an attack. Holds limited shots.',
  },
  {
    defId: 'item-axe',
    type: 'item',
    name: 'Axe',
    description: 'A rusted axe, still wickedly sharp.',
    effect: 'Add 2 dice when you attack with Might.',
  },
  {
    defId: 'item-medical-kit',
    type: 'item',
    name: 'Medical Kit',
    description: 'Bandages and salves in a battered tin.',
    effect: 'Spend an action to heal Might or Speed by 1.',
  },
];

export const CARD_DEFS_BY_TYPE = {
  event: CARD_DEFS.filter(c => c.type === 'event'),
  omen: CARD_DEFS.filter(c => c.type === 'omen'),
  item: CARD_DEFS.filter(c => c.type === 'item'),
};
