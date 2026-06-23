import type { CardDef } from '../../types';

export const OMEN_CARDS: CardDef[] = [
  // --- Omens ---
  // Quy ước resolution (xử lý thủ công — app chỉ hướng dẫn, người chơi tự chỉnh):
  // • Lá cộng/trừ chỉ số NGAY khi rút → bước `note` "Áp dụng ngay", rồi chọn
  //   "✨ Khác / hồi phục" ở bước Tác động để chỉnh đúng các chỉ số nêu trong note.
  // • Lá BỊ ĐỘNG / dùng mỗi lượt sau này → bước `note` nhắc luật, chọn "· Không có"
  //   ở bước Tác động (không có gì để chỉnh khi rút).
  // • Mọi omen tự có bước Haunt roll ở cuối — không cần khai báo.
  {
    defId: 'omen-skull',
    type: 'omen',
    name: 'Skull',
    description: 'Một cái đầu lâu, bị nứt và không còn răng.',
    effect:
      'Nếu bạn nhận thiệt hại tinh thần (sanity hoặc knowledge), thay vào đó bạn có thế thay bằng thiệt hại vật chất (might hoặc speed). Đổ xí ngầu cho ngôi nhà ma ngay lúc này',
    resolution: {
      steps: [
        {
          kind: 'note',
          prompt:
            'Bị động (giữ lá): khi sắp nhận sát thương Tinh thần (Knowledge/Sanity), bạn có thể nhận sát thương Vật lý (Might/Speed) thay thế. Không xử lý gì khi rút — chọn "· Không có" ở bước Tác động, rồi đổ Haunt.',
        },
      ],
    },
  },
  {
    defId: 'omen-madman',
    type: 'omen',
    name: 'Madman',
    description: 'Bạn đồng hành. Một tiên diên mê sảng, miệng sủi bọt mép.',
    effect:
      'Nhận 2 Might và mất 1 Sanity.\n Mất 2 Might và nhận 1 Sanity nếu bạn để Tên Điên trốn thoát.\n Lá omen này không thể trao đổi, đưa cho người khác hay để trao đổi.\n Đổ xí ngầu cho ngôi nha ma hay lúc này.',
    resolution: {
      steps: [
        {
          kind: 'note',
          prompt:
            'Áp dụng ngay khi rút: +2 Might, −1 Sanity. Ở bước Tác động chọn "✨ Khác / hồi phục" để chỉnh. (Sau này nếu để Tên Điên trốn thoát: −2 Might, +1 Sanity.) Lá này không trao đổi/đưa/trộm được.',
        },
      ],
    },
  },
  {
    defId: 'omen-vial',
    type: 'omen',
    name: 'Vial',
    description:
      "The old and crazy woman said you sould drink this potion that glows with an amber light. Maybe that's how she got so old and crazy.",
    effect:
      'Once on your turn, you may drink from the vial. Roll 2 dice:\n 0: Poison! Take 2 point of physical damage (might and speed).\n 1: Visions and dreams. Take 2 points of mental damamge (sannity and knowledge)\n 2: Failed experiment. No effect.\n3: Invigoratting tonic. Gain 1 in ant physical trait. \n 4: The blood of something unknow gain 1 in each trait but sanity. Lose 2 Sanity. \n Make a haunt roll now',
    resolution: {
      steps: [
        {
          kind: 'note',
          prompt:
            'Dùng mỗi lượt (không xử lý khi rút — chọn "· Không có" ở bước Tác động). Khi dùng, đổ 2 xúc xắc: 0: 2 sát thương Vật lý · 1: 2 sát thương Tinh thần · 2: không gì · 3: +1 một chỉ số Vật lý · 4: +1 mỗi chỉ số trừ Sanity, −2 Sanity.',
        },
      ],
    },
  },
  {
    defId: 'omen-crystal-ball',
    type: 'omen',
    name: 'Crystal ball',
    description: 'Hình ảnh mờ mịt xuất hiện trong quả cầu.',
    effect:
      'Một lần mỗi lượt, Sau khi ngôi nhà ma được tiết lộ bạn có thể đổ xí ngầu Knowledge để nhìn vào quả cầu thủy tinh. \n 4+: Bạn nhìn thấy được sự thật tìm lá Item hay Event mà bạn chọn. Xào ngẫu nhiên chồng bài đó. Sau đó đặt lên đầu. \n 1-3: Bán tránh đi ánh mắt của mình. Mất 1 Sanity.\n 0: Bạn nhìn chằm chằm vào địa ngục. Mất 2 Sanity.\n Đổ xí ngầu cho nhà ma lúc này.',
    resolution: {
      steps: [
        {
          kind: 'note',
          prompt:
            'Dùng mỗi lượt sau khi nhà ma được tiết lộ (không xử lý khi rút — chọn "· Không có"). Khi dùng, đổ Knowledge: 4+: chọn 1 lá Item/Event đặt lên đầu chồng · 1-3: −1 Sanity · 0: −2 Sanity.',
        },
      ],
    },
  },
  {
    defId: 'omen-medallion',
    type: 'omen',
    name: 'Medallion',
    description: 'Huy chương có hình ngôi sao 5 cánh',
    effect:
      'Bạn được miễn dịch với ảnh hưởng của Pentagram Champer, Crypt và Graveyard. \n Đổ xí ngầu cho ngôi nhà ma ngay lúc này.',
    resolution: {
      steps: [
        {
          kind: 'note',
          prompt:
            'Bị động: miễn nhiễm hiệu ứng của Pentagram Chamber, Crypt và Graveyard khi giữ lá. Không xử lý gì khi rút — chọn "· Không có" ở bước Tác động.',
        },
      ],
    },
  },
  {
    defId: 'omen-ring',
    type: 'omen',
    name: 'Ring',
    description: 'Chiếc nhẫn méo mó với dòng chữ khắc khó hiểu',
    effect:
      'Nếu bạn tấn công đối phương mà có Sanity, bạn có thể tấn công băng Sanity thay vì Might. (Đối thủ của bạn phòng ngự bằng Sanity, và nhận thiệt hại là tin thần, thay vì vật chất). \n Đổ xí ngầu cho ngôi nhà ma ngay lúc này.',
    resolution: {
      steps: [
        {
          kind: 'note',
          prompt:
            'Bị động: khi tấn công đối thủ có Sanity, có thể tấn công bằng Sanity thay Might (đối thủ phòng thủ bằng Sanity, nhận sát thương Tinh thần). Không xử lý khi rút — chọn "· Không có".',
        },
      ],
    },
  },
  {
    defId: 'omen-spirit-board',
    type: 'omen',
    name: 'Spirit board',
    description: 'Tấm bảng với nhưng con số và chữ cái để gọi cái chết',
    effect:
      'Trước khi di chuyển trong lượt của mình, bạn có thể nhìn thẻ đầu tiên trong chồng thể căn phòng.\nNếu sử dung Spirit board sau khi căn nhà ma được tiết lộ, kẻ phản bội có thể di chuyển số lượng quái vật bất kỳ 1 bước về phía bạn (nếu bạn là kẻ phản bội, bạn không cần phải di chuyển quái vật). Nếu không có phản bội, tât cả quái vật sẽ di chuyển về phía bạn 1 bước. \n Đổ xí ngầu cho ngôi nhà ma ngay lúc này.',
    resolution: {
      steps: [
        {
          kind: 'note',
          prompt:
            'Dùng mỗi lượt (không xử lý khi rút — chọn "· Không có"). Trước khi di chuyển, có thể xem thẻ phòng đầu chồng. Sau khi nhà ma tiết lộ, dùng Spirit board sẽ khiến quái vật di chuyển 1 bước về phía bạn (xem effect).',
        },
      ],
    },
  },
  {
    defId: 'omen-bite',
    type: 'omen',
    name: 'Bite',
    description: 'Tiếng gầm gừ mùi của cái chết',
    effect:
      'Khi bạn rút được lá này một con gì đó sẽ cắn bạn. NGười chơi bên phải bạn sẽ đổ 4 xí ngầu Might tượng trưng cho đòn cắn của con thú đó(Trước khi nó bỏ chạy vào bóng tối). Bạn chông lại đòn tấn công bình thường, bằng cách đổ xí ngầu tương ứng với giá trị Might của bạn.\nLá Omen này không thể bị trao đổi , đưa cho ai khác hay bị trộm. \n Đổ xí ngầu cho ngôi nhà ma ngay lúc này.',
    resolution: {
      steps: [
        {
          kind: 'attackDefense',
          prompt:
            'Người chơi bên phải đổ 4 Might (đòn cắn). Bạn phòng thủ bằng Might. Chênh lệch = thiệt hại vật chất bạn nhận.',
          attackerDice: 4,
          defenseStat: 'might',
          damage: 'physical',
        },
      ],
    },
  },
  {
    defId: 'omen-dog',
    type: 'omen',
    name: 'Dog',
    description: 'Tiếng gầm gừ mùi của cái chết',
    effect:
      'Bạn đồng hành\n Nhận 1 Might và 1 Sanity.\n Mất 1 Might và 1 Sanity nếu bạn mất lá Dog.\nNhận token quái vật nhỏ để tượng trưng cho Dog. Đặt nó vào phòng của bạn.\nMột lần trong lượt của mình, Dog có thể di chuyển đến bất kỳ phòng đã khám phá nào với tối đa là 6 bước, sử dụng của và cầu thang, sau đó có thể quay lại. Nó có thể nhặt lên, mang lại và/hoặc đưa 1 vật phẩm trước khi quay lại.\nĐối thủ không thể ngăn cản Dog. Nó không thể sử dụng hành lang 1 chiều hay phòng mà yêu cầu sử dụng xí ngầu. Nó không không thể mang các vật phẩm mà làm chậm việc di chuyển.\n Lá Omen này không thể trao đổi, đưa cho người khác hay trộm. \n Đổ xí ngầu cho ngôi nhà ma ngay lúc này.',
    resolution: {
      steps: [
        {
          kind: 'note',
          prompt:
            'Áp dụng ngay khi rút: +1 Might, +1 Sanity. Ở bước Tác động chọn "✨ Khác / hồi phục" để chỉnh. Đặt token Dog vào phòng bạn (mỗi lượt Dog đi tối đa 6 bước, mang được 1 vật phẩm). Mất lá: −1 Might, −1 Sanity. Không trao đổi/đưa/trộm.',
        },
      ],
    },
  },
  {
    defId: 'omen-holy-symbol',
    type: 'omen',
    name: 'Holy symbol',
    description: 'Biểu tượng của sự yên bình trong một thế giới đầy hỗn loạn',
    effect:
      'Nhận 2 Sanity.\nMất 2 Sanity nếu bạn mất Holy symbol. \n Đổ xí ngầu cho ngôi nhà ma ngay lúc này.',
    resolution: {
      steps: [
        {
          kind: 'note',
          prompt:
            'Áp dụng ngay khi rút: +2 Sanity. Ở bước Tác động chọn "✨ Khác / hồi phục" để chỉnh. (Mất lá: −2 Sanity.)',
        },
      ],
    },
  },
  {
    defId: 'omen-girl',
    type: 'omen',
    name: 'Girl',
    description:
      'Bạn đồng hành\nMột cô gái.\nBị mắc bẫy.\nMột mình.\nBạn giải thoát cho cô ta!',
    effect:
      'Nhận 1 Sanity và 1 Knowledge.\nMất 1 Sanity và 1 Knowledge nếu bạn mất Holy symbol.\nLá Omen này không thể trao đổi, đưa cho người khác hay trộm \n Đổ xí ngầu cho ngôi nhà ma ngay lúc này.',
    resolution: {
      steps: [
        {
          kind: 'note',
          prompt:
            'Áp dụng ngay khi rút: +1 Sanity, +1 Knowledge. Ở bước Tác động chọn "✨ Khác / hồi phục" để chỉnh. (Mất lá: −1 Sanity, −1 Knowledge.) Không trao đổi/đưa/trộm.',
        },
      ],
    },
  },
  {
    defId: 'omen-mask',
    type: 'omen',
    name: 'Mask',
    description: 'Một cái mặt nạ ảm đạm giúp che đi âm mưu thực sự của bạn',
    effect:
      'Một lần trong lượt của mình, bạn có thể đổ xí ngầu Sanity để sử dụng Mask:\n4+ Bạn có thể mang hoặc tháo Mask ra.\nNếu bạn mang Mask, nhận 2 Knowledge và mất 2 Sanity.\nNếu bạn thao Mask ra, nhận 2 Sanity và mất 2 Knowledge.\n0-3: Bạn không thể sử dụng Mask kượt này.\n Đổ xí ngầu cho ngôi nhà ma ngay lúc này.',
    resolution: {
      steps: [
        {
          kind: 'note',
          prompt:
            'Dùng mỗi lượt (không xử lý khi rút — chọn "· Không có"). Khi dùng, đổ Sanity 4+: mang Mask (+2 Knowledge, −2 Sanity) hoặc tháo Mask (+2 Sanity, −2 Knowledge). 0-3: không dùng được lượt này.',
        },
      ],
    },
  },
  {
    defId: 'omen-spear',
    type: 'omen',
    name: 'Spear',
    description: 'Vũ khí\nThứ vũ khí rất mạnh mẽ',
    effect:
      'Đổ thêm 2 xí ngầy nữa( tối đa 8) khi bạn tấn công Might bằng vũ khí này.\nBạn không thể sử dụng vũ khí khác khi đang sử dụng vũ khí này.\n Đổ xí ngầu cho ngôi nhà ma ngay lúc này.',
    resolution: {
      steps: [
        {
          kind: 'note',
          prompt:
            'Bị động (vũ khí): +2 xúc xắc (tối đa 8) khi tấn công bằng Might. Không dùng vũ khí khác cùng lúc. Không xử lý khi rút — chọn "· Không có".',
        },
      ],
    },
  },
  {
    defId: 'omen-book',
    type: 'omen',
    name: 'Book',
    description:
      'Một cuốn nhận ký hay ghi chú của 1 cuốn thí nghiệm khoa học?\nBản khảo cổ, hay kiên thức thời hiện đại?',
    effect:
      'Nhận 2 Knowledge.\nMất 2 Knowledge nếu bạn làm mất lá Book\n Đổ xí ngầu cho ngôi nhà ma ngay lúc này.',
    resolution: {
      steps: [
        {
          kind: 'note',
          prompt:
            'Áp dụng ngay khi rút: +2 Knowledge. Ở bước Tác động chọn "✨ Khác / hồi phục" để chỉnh. (Mất lá: −2 Knowledge.)',
        },
      ],
    },
  },
  {
    defId: 'omen-box',
    type: 'omen',
    name: 'Box',
    description:
      "They were always telling you to think outside of it. Now you're worries you will end up inside it",
    effect:
      'When you draw this card draw an item card and put in on this card. That Item cannot be dropped or traded. If someone would steal that item, you can instead discard the Box. On your turn, you may remove that item from the Box and put a different item in your possession into the Box. If it is empty, you may put an item in the Box. The Box cannot be stolen\n Make a haunt roll now.',
    resolution: {
      steps: [
        {
          kind: 'note',
          prompt:
            'Khi rút: rút 1 lá Item và đặt lên lá Box (vật phẩm đó không bị rơi/trao đổi/trộm). Không có chỉ số để chỉnh — chọn "· Không có" ở bước Tác động. Bị trộm: có thể bỏ Box thay vì mất vật phẩm.',
        },
      ],
    },
  },
  {
    defId: 'omen-bloodstone',
    type: 'omen',
    name: 'Bloodstone',
    description:
      'Smooth and the deep green of a midnghit forest, the stone is veinedwith crimson. They say you cannot  get blood from a stone.\nThey did not ask this one',
    effect:
      'Once per turn, you may lose 1 from any trait to add 2 dice (maximum of 8 dice) to your trait roll.\n Make a haunt roll now.',
    resolution: {
      steps: [
        {
          kind: 'note',
          prompt:
            'Dùng mỗi lượt (không xử lý khi rút — chọn "· Không có"). Khi dùng: mất 1 điểm một chỉ số tùy chọn để thêm 2 xúc xắc (tối đa 8) vào lần đổ chỉ số.',
        },
      ],
    },
  },
  {
    defId: 'omen-rope',
    type: 'omen',
    name: 'Rope',
    description: 'It probably was not used to hang anybody. Today',
    effect:
      'You may move up the Coal Chute, and from the Ball Room to the Gallery. You do not need to roll for crossing the Chasm. You do not take damame from the Collabsed Room, and can move from the room with the Below Collapsed Room token in to the Collapsed Room. When moving via a Dumbwaiter you may move to any landing\n Make a haunt roll now.',
    resolution: {
      steps: [
        {
          kind: 'note',
          prompt:
            'Bị động (di chuyển): đi ngược Coal Chute, từ Ball Room sang Gallery, không cần đổ khi qua Chasm, không nhận sát thương từ Collapsed Room, Dumbwaiter đến landing bất kỳ. Không xử lý khi rút — chọn "· Không có".',
        },
      ],
    },
  },
  {
    defId: 'omen-key',
    type: 'omen',
    name: 'Key',
    description:
      'You heve been wondering how to open all the locks in the house. The question is, thy did they get locked in the first place?',
    effect:
      'Add 4 dice to trait rolls to open or take something from a card or room tile, such as the Locked Room, Safe or Vault.\nYou may pass through the Locked Room without removing a lock. At the start of each turn, you may choose to put a Lock token on  an unlocked door in the Locked Rom, if you are next to that door\n Make a haunt roll now.',
    resolution: {
      steps: [
        {
          kind: 'note',
          prompt:
            'Bị động: +4 xúc xắc khi đổ để mở/lấy đồ từ thẻ hay phòng (Locked Room, Safe, Vault). Đi qua Locked Room không cần gỡ khóa. Không xử lý khi rút — chọn "· Không có".',
        },
      ],
    },
  },
  {
    defId: 'omen-photograph',
    type: 'omen',
    name: 'Photograph',
    description:
      'It changes as you look at it, showing different rooms in this house. Probably this house',
    effect:
      'When discorvering a room, you may  discard the first drawn room tile and discover the next eligible room in the room stack instead\n Make a haunt roll now.',
    resolution: {
      steps: [
        {
          kind: 'note',
          prompt:
            'Bị động: khi khám phá phòng, có thể bỏ thẻ phòng vừa rút và lấy thẻ phòng hợp lệ kế tiếp trong chồng. Không xử lý khi rút — chọn "· Không có".',
        },
      ],
    },
  },
  {
    defId: 'omen-letter',
    type: 'omen',
    name: 'Letter',
    description: 'Scrwled in ink, or whatever',
    effect:
      "You may hand one of your explorer token to another explorer. On your turn , you may move to that explorer's room, then discard this omen and the explorer discards your explorer token\n Make a haunt roll now.",
    resolution: {
      steps: [
        {
          kind: 'note',
          prompt:
            'Bị động: trao 1 explorer token của bạn cho người khác. Trong lượt, có thể di chuyển đến phòng người đó rồi bỏ lá Letter. Không xử lý khi rút — chọn "· Không có".',
        },
      ],
    },
  },
  {
    defId: 'omen-cat',
    type: 'omen',
    name: 'Cat',
    description:
      'Companion\nIt crossed you path, and you are supposed to have bad luck. But maybe you crossed its path, and it is the one that is not too happy about it. Now it accompanies you',
    effect:
      'You may call on the Cat for luck before tour trait roll. Roll 1 dice:\n 0: Subtract 2 from the resukt of that trait roll\n 1+: Add 2 to the result of the trait roll.\n This Omen cannot be dropped, traded, or stolen\n Make a haunt roll now.',
    resolution: {
      steps: [
        {
          kind: 'note',
          prompt:
            'Bị động (dùng trước khi đổ chỉ số): đổ 1 xúc xắc — 0: −2 vào kết quả · 1+: +2 vào kết quả. Không rơi/trao đổi/trộm. Không xử lý khi rút — chọn "· Không có".',
        },
      ],
    },
  },
];
