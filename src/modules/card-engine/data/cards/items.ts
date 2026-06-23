import type { CardDef } from '../../types';

export const ITEM_CARDS: CardDef[] = [
  // --- Items ---
  // Đa số Item là bị động / "dùng mỗi lượt" / dùng sau → bước `note` nhắc luật,
  // chọn "· Không có" ở bước Tác động (không có gì chỉnh khi rút). Vài lá cộng
  // chỉ số NGAY khi rút (Bells, Locket, Amulet…) → note "Áp dụng ngay" + chọn
  // "✨ Khác / hồi phục" để chỉnh. Item KHÔNG có bước Haunt roll.
  {
    defId: 'item-medical-kit',
    type: 'item',
    name: 'Medical Kit',
    description:
      'Một cái túi của bác sĩ, tuy nhiên không còn nhiều thứ ở trong đó',
    effect:
      'Một lần trong lượt của mình, bạn có thể đổ xí ngầu Knowledge để chữa cho bản thân hay nhà thám hiểm khác trong cùng phòng:\n8+: Nhận tối đa 3 điểm cho đặc điểm vật chất.\n6-7: Nhận tối đa 2 điểm cho đặc điểm vật chất.\n4-5: Nhận 1 điểm cho đặc điểm vật chất\n0-3: Không có chuyện gì xảy ra.\nBạn không thể tăng vượt mức bắt đầu bằng Medical kit được',
    resolution: {
      steps: [
        {
          kind: 'note',
          prompt:
            'Dùng mỗi lượt (không xử lý khi rút — chọn "· Không có"). Khi dùng, đổ Knowledge để hồi đặc điểm Vật lý cho mình/người chung phòng: 8+: tối đa 3 · 6-7: tối đa 2 · 4-5: 1 · 0-3: không gì. Không vượt mức bắt đầu.',
        },
      ],
    },
  },
  {
    defId: 'item-smelling-salts',
    type: 'item',
    name: 'Smelling Salts',
    description: 'Chà, 1 lượng đầy.',
    effect:
      'Nếu giá trị Knowledge của bạn hay 1 nhà thám hiểm còn sống nào khác dưới mức bắt đầu, và 2 người đang ở chung phòng thì bạn có thể tăng mức giá trị đó lên tới mức bắt đầu bằng cách sử dung Smelling Salt.\nLoại bỏ vật phẩm này sau khi sử dụng nó.',
    resolution: {
      steps: [
        {
          kind: 'note',
          prompt:
            'Dùng sau, rồi bỏ lá (không xử lý khi rút — chọn "· Không có"). Khi dùng: đưa Knowledge của mình hoặc người chung phòng trở lại mức bắt đầu nếu đang thấp hơn.',
        },
      ],
    },
  },
  {
    defId: 'item-lucky-stone',
    type: 'item',
    name: 'Lucky Stone',
    description:
      '1 viên dá trơn nhẵn, nhìn khá bình thường. Bạn cảm thấy nó sẽ mang đến những điều may mắn.',
    effect:
      'Sau khi đổ xí ngầu bất kỳ, bạn có thể sờ hòn đá để đổ lại bất kỳ số lượng xí ngầu mà bạn muốn.\nLoại bỏ vật phẩm này sau khi sử dụng nó.',
    resolution: {
      steps: [
        {
          kind: 'note',
          prompt:
            'Dùng sau, rồi bỏ lá (không xử lý khi rút — chọn "· Không có"). Khi dùng: sau khi đổ bất kỳ, đổ lại số xúc xắc tùy ý.',
        },
      ],
    },
  },
  {
    defId: 'item-adrenaline-shot',
    type: 'item',
    name: 'Adrenaline Shot',
    description: 'Một ông tiêm chứa chất lỏng huỳnh quang kỳ lạ.',
    effect:
      'Trước khi đổ xí ngầu, bạn có thể dùng vật phẩm này để công thêm 4 điểm vào kết quả của mình.\nLoại bỏ vật phẩm này sau khi sử dụng nó.',
    resolution: {
      steps: [
        {
          kind: 'note',
          prompt:
            'Dùng sau, rồi bỏ lá (không xử lý khi rút — chọn "· Không có"). Khi dùng: trước khi đổ, +4 vào kết quả.',
        },
      ],
    },
  },
  {
    defId: 'item-healing-salve',
    type: 'item',
    name: 'Healing Salve',
    description: 'Một khối bột dính trong 1 cái tô nhỏ.',
    effect:
      'Bạn có thể dùng Healing Slave cho chính bản thân hay cho nhà thám hiểm còn sống khác chung phòng với bạn. Nếu giá trị của Might hay Speed của nhà thám hiểm đó dưới mức ban đầu, tăng 1 hoặc cả 2 đặc điểm đó đến mức bắt đầu.\nLoại bỏ vật phẩm này sau khi sử dụng nó.',
    resolution: {
      steps: [
        {
          kind: 'note',
          prompt:
            'Dùng sau, rồi bỏ lá (không xử lý khi rút — chọn "· Không có"). Khi dùng: đưa Might và/hoặc Speed của mình hoặc người chung phòng về mức bắt đầu nếu đang thấp hơn.',
        },
      ],
    },
  },
  {
    defId: 'item-armor',
    type: 'item',
    name: 'Armor',
    description:
      'Nó chỉ là 1 bộ giáp thời kỳ phục hưng dùng để trang bị , nhưng dù sao nó vẫn là kim loại.',
    effect:
      'Bất cứ lúc nào (không phải chỉ một lần mỗi lượt) bạn nhận sát thương vật lý, giảm đi 1 sát thương.\nLá này không thể bị trộm',
    resolution: {
      steps: [
        {
          kind: 'note',
          prompt:
            'Bị động: mỗi lần nhận sát thương Vật lý, giảm 1 sát thương (không giới hạn số lần). Không bị trộm. Không xử lý khi rút — chọn "· Không có".',
        },
      ],
    },
  },
  {
    defId: 'item-puzzle-box',
    type: 'item',
    name: 'Puzzle Box',
    description: 'Chắc hẳn phải có 1 cách để mở nó.',
    effect:
      'Một lần trong lượt của mình, bạn có thể đổ xí ngầu Knowledge để mở hộp.\n6+: Bạn mở được hộp đó. Rút 2 lá vật phẩm và loại bỏ Puzzle Box.\n0-5: Bạn không thể mở nó.',
    resolution: {
      steps: [
        {
          kind: 'note',
          prompt:
            'Dùng mỗi lượt (không xử lý khi rút — chọn "· Không có"). Khi dùng, đổ Knowledge: 6+: rút 2 lá Item và bỏ Puzzle Box · 0-5: chưa mở được.',
        },
      ],
    },
  },
  {
    defId: 'item-revolver',
    type: 'item',
    name: 'Revolver',
    description: 'Vũ khí\nMột thứ vũ khí cũ, có vẻ có uy lực lớn.',
    effect:
      'Bạn có thể sử dụng Revolver để tấn công bằng Speed thay vì Might (Đối thủ sẽ phòng ngự bằng Speed và nhận thiệt hại về vật chất).\nĐổ thêm 1 xí ngầu khi tấn công với Speed (Tối đa 8).\nVới Revolver, bạn có thể tấn công bất cứ ai trong cùng phòng hoặc trong đường ngắm (thông qua đường thẳng của các cánh cửa không bị gián đoạn).\nNếu bạn tấn công ai đó ở phòng khác và thua, bạn không nhận thiệt hại.\n Bạn không thể sử dụng vũ khí khác khi đang sử dụng cái này.',
    resolution: {
      steps: [
        {
          kind: 'note',
          prompt:
            'Bị động (vũ khí): tấn công bằng Speed thay Might (+1 xúc xắc, tối đa 8); bắn được trong cùng phòng hoặc đường ngắm thẳng. Thua khi bắn xa thì không nhận sát thương. Không xử lý khi rút — chọn "· Không có".',
        },
      ],
    },
  },
  {
    defId: 'item-bells',
    type: 'item',
    name: 'Bells',
    description: 'Chiếc chuông đồng tạo ra một âm thanh vang dội.',
    effect:
      'Nhận ngay 1 Sanity.\nMất 1 Sanity nếu bạn đánh mất lá Bells.\nMột lần trong lượt của mình sau khi ngôi nhà ma được tiết lộ, bạn có thể đổ xí ngầu Sanity để sử dụng Bells:\n5+: Di chuyển tùy ý số lượng quân hero không bị kiểm soát 1 bước về phía bạn.\n0-4: Kẻ phản bội có thể di chuyển tùy ý số lượng quái vật về phía bạn 1 bước (nếu bạn là kẻ phản bội sẽ không ảnh hưởng gì cả). Nếu không có phản bội, tất cả quái vật di chuyển về bạn 1 bước.',
    resolution: {
      steps: [
        {
          kind: 'note',
          prompt:
            'Áp dụng ngay khi rút: +1 Sanity (ở bước Tác động chọn "✨ Khác / hồi phục"). Mất lá: −1 Sanity. Sau khi nhà ma tiết lộ, dùng mỗi lượt: đổ Sanity 5+ kéo hero 1 bước về phía bạn; 0-4 quái vật tiến về bạn (xem effect).',
        },
      ],
    },
  },
  {
    defId: 'item-angel-feather',
    type: 'item',
    name: 'Angel Feather',
    description: 'Một chiệc kông vũ hoàn hảo trong tay bạn.',
    effect:
      'Khi bạn phải đổ xí ngầu cho bất kỳ loại nào, bạn có thể nói to một con số từ 0-8. Sử dụng con số đó thay vì đổ xí ngầu.\nBỏ lá này sau khi đã sử dụng nó',
    resolution: {
      steps: [
        {
          kind: 'note',
          prompt:
            'Dùng sau, rồi bỏ lá (không xử lý khi rút — chọn "· Không có"). Khi phải đổ bất kỳ, đọc to một số 0-8 và dùng số đó thay vì đổ.',
        },
      ],
    },
  },
  {
    defId: 'item-pickpockets-gloves',
    type: 'item',
    name: "Pickpoket's Gloves",
    description: 'Lấy đồ đã trở nên dễ dang hơn bao giờ hết.',
    effect:
      'Khi bạn ở cung phòng với một nhà thám hiểm khác, bạn có thể loại vật phẩm này để lấy 1 vật phẩm mà người kia đang cầm.',
    resolution: {
      steps: [
        {
          kind: 'note',
          prompt:
            'Dùng sau, rồi bỏ lá (không xử lý khi rút — chọn "· Không có"). Khi chung phòng với người khác: bỏ Gloves để lấy 1 vật phẩm họ đang cầm.',
        },
      ],
    },
  },
  {
    defId: 'item-dark-dice',
    type: 'item',
    name: 'Dark Dice',
    description: 'Bạn có cảm thấy may mắn không.',
    effect:
      'Mỗi lần mỗi lượt, bạn có thể đổ 3 xí ngầu:\n6: Di chuyển đến vị trí của bất kỳ nhà thám hiểm nào mà không phải là kẻ phản bội.\n5: Di chuyển đến 1 nhà thám hiểm khác trong cùng phòng đến phòng kế bên.\n4: Nhận thêm 1 giá trị cho đặc điểm vật chất.\n3: Ngay lập tức di chuyển đến phòng kế bên(không tốn lượt di chuyển).\n2: Nhận thêm 1 giá trị cho đặc điểm tinh thần.\n1: Rút 1 lá Event.\n0: Giảm tất cả đặc điểm xuống mức trên mức 0 1 bậc. Loại bỏ lá Dark Dice',
    resolution: {
      steps: [
        {
          kind: 'note',
          prompt:
            'Dùng mỗi lượt (không xử lý khi rút — chọn "· Không có"). Khi dùng, đổ 3 xúc xắc: 6: đến chỗ một nhà thám hiểm bất kỳ · 5: theo người chung phòng sang kế bên · 4: +1 Vật lý · 3: sang phòng kế (miễn phí) · 2: +1 Tinh thần · 1: rút 1 Event · 0: mọi chỉ số xuống 1 bậc trên ngưỡng tử, bỏ Dark Dice.',
        },
      ],
    },
  },
  {
    defId: 'item-idol',
    type: 'item',
    name: 'Idol',
    description:
      'Có lẽ nó chọn bạn cho nhưng mục đích cao cả. Nhu hiến tế chẳng hạn.',
    effect:
      'Mỗi lần mỗi lượt, bạn có thể đánh bóng tượng thần trước khi đổ xí ngầu tấn công, đặc điểm hoặc sự kiện để được thêm 2 xí ngầu (Tối đa 8). Mỗi lần như thế mất 1 Sanity.',
    resolution: {
      steps: [
        {
          kind: 'note',
          prompt:
            'Dùng mỗi lượt (không xử lý khi rút — chọn "· Không có"). Trước khi đổ tấn công/đặc điểm/sự kiện: mất 1 Sanity để thêm 2 xúc xắc (tối đa 8).',
        },
      ],
    },
  },
  {
    defId: 'item-candle',
    type: 'item',
    name: 'Candle',
    description: 'Nó xóa tan bóng tối xung quanh bạn - Hoặc ít nhất, bạn cũng hi vọng nó làm được như vậy.',
    effect: 'Nếu bạn rút là sự kiện đổ thêm 1 xí ngầu (Tối đa 8) cho đặc điểm sự kiện đó.\nNếu bạn có 3 món là Bells, Book và Candle, nhận thêm 2 giá trị cho mỗi đặc điểm.\nLần đầu tiên bạn mất 1 trong 3 vật phẩm trên trong trò chơi, mất 2 cho mỗi đặc điểm.',
    resolution: {
      steps: [
        {
          kind: 'note',
          prompt:
            'Bị động: +1 xúc xắc (tối đa 8) cho đặc điểm khi rút lá Event. Nếu giữ đủ Bells + Book + Candle: +2 mỗi đặc điểm (mất 1 trong 3 lần đầu: −2 mỗi đặc điểm). Không xử lý khi rút — chọn "· Không có".',
        },
      ],
    },
  },
  {
    defId: 'item-sacrificial-dagger',
    type: 'item',
    name: 'Sacrificial Dagger',
    description: 'Vũ khí\nNhưng mảnh sắt xoán vào nhau được bao phủ bởi nhưng biểu tượng kỳ bí và nhuốm máu.',
    effect: 'Khi tấn công bằng Might với vũ khí này, bạn đổ thêm 3 xí ngầu nữa (tối đa 8) nhưng đầu tiên bạn phải đổ xí ngầu cho Knowledge trước:\n6+: Không ảnh hưởng gì.\n3-5: Giảm 1 điểm trên thanh tinh thần.\n0-2: Dao găm cuộn xoắn trong tay bạn! Đổ 2 xí ngầu cho thiệt hại vật chất.Bạn không thể tấn công trong lượt này.\nBạn không thể sử dụng vũ khí khác khi đang sử dụng cái này.',
    resolution: {
      steps: [
        {
          kind: 'note',
          prompt:
            'Bị động (vũ khí): +3 xúc xắc Might (tối đa 8) khi tấn công, nhưng đổ Knowledge trước: 6+: không sao · 3-5: −1 Tinh thần · 0-2: tự nhận 2 xúc xắc sát thương Vật lý và không tấn công được lượt này. Không xử lý khi rút — chọn "· Không có".',
        },
      ],
    },
  },
  {
    defId: 'item-axe',
    type: 'item',
    name: 'Axe',
    description: 'Vũ khí\nCực kỳ bén.',
    effect: 'Bạn đổ thêm 1 xí ngầu nữa (Tối đa 8) khi gây sát thương Might bằng vũ khí này.\nBạn không thể dùng vũ khí khác khi đang sử dụng vũ khí này.',
    resolution: {
      steps: [
        {
          kind: 'note',
          prompt:
            'Bị động (vũ khí): +1 xúc xắc (tối đa 8) khi tấn công bằng Might. Không dùng vũ khí khác cùng lúc. Không xử lý khi rút — chọn "· Không có".',
        },
      ],
    },
  },
  {
    defId: 'item-bottle',
    type: 'item',
    name: 'Bottle',
    description: 'Một lọ nhỏ đục chứa dung dịch màu đen.',
    effect: 'Mỗi lần trong lượt của mình sau khi ngôi nhà ma được tiết lộ, bạn có thể đổ 3 xí ngầu và uống dung dịch đó:\n6: Chọn 1 phòng và đặt nhân vật của bạn đến đó.\n5: Nhận 2 Might và 2 Speed\n4: Nhận2 Knowledge và 2 Sanity.\n3: Nhận 1 Knowledge và mất 1 Might.\n2: Mất 2 Knowledge và 2 Sanity.\n1: Mất 2 Might và 2 Speed.\n0: Mất 2 ở mỗi đặc điểm.\nLoại bỏ vật phẩm sau khi sử dụng.',
    resolution: {
      steps: [
        {
          kind: 'note',
          prompt:
            'Dùng mỗi lượt sau khi nhà ma tiết lộ, rồi bỏ lá (không xử lý khi rút — chọn "· Không có"). Khi dùng, đổ 3 xúc xắc: 6: dịch chuyển tới phòng bất kỳ · 5: +2 Might +2 Speed · 4: +2 Knowledge +2 Sanity · 3: +1 Knowledge −1 Might · 2: −2 Knowledge −2 Sanity · 1: −2 Might −2 Speed · 0: −2 mỗi đặc điểm.',
        },
      ],
    },
  },
  {
    defId: 'item-dynamite',
    type: 'item',
    name: 'Dynamite',
    description: 'Ngòi nổ chưa được đốt nhưng sắp thôi.',
    effect: 'Thay vì tấn công bạn có thể nem Dynamite qua cánh cửa kết nối với phòng kế bên. Mỗi nhà thám hiểm và quái vật có Might và Speed trong căn phòng đó sẽ phải đổ xí ngầu Speed:\n5+: Không nhận thiệt hại.\n0-4: Nhận 4 thiệt hại về vật chất.\nLoại vật phẩm này sau khi sử dụng.',
    resolution: {
      steps: [
        {
          kind: 'note',
          prompt:
            'Dùng sau, rồi bỏ lá (không xử lý khi rút — chọn "· Không có"). Thay vì tấn công: ném sang phòng kế bên — mỗi nhà thám hiểm/quái vật ở đó đổ Speed: 5+: an toàn · 0-4: nhận 4 sát thương Vật lý.',
        },
      ],
    },
  },
  {
    defId: 'item-blood-dagger',
    type: 'item',
    name: 'Blood Dagger',
    description: 'Vũ khí\nMột vũ khí nguy hiểm. Kim và ống được mở rộng từ cán... và cắm vào thẳng tĩnh mạch của bạn.',
    effect: 'Bạn có thể đổ thêm 3 xí ngầu(Tối đa 8) khi thực hiện tấn công Might với vũ khí này. Nếu làm thế, mất 1 Speed.\nBạn không thể dùng sử dụng vũ khí khác khi sử dụng vũ khí này.\nVật phẩm này không thể trao đổi hay đưa cho ai khác. Nếu bị trộm, bạn nhận thiệt 2 vật chất với 2 xí ngầu.',
    resolution: {
      steps: [
        {
          kind: 'note',
          prompt:
            'Bị động (vũ khí): +3 xúc xắc Might (tối đa 8) khi tấn công, mỗi lần như vậy −1 Speed. Không trao đổi/đưa. Bị trộm: nhận 2 xúc xắc sát thương Vật lý. Không xử lý khi rút — chọn "· Không có".',
        },
      ],
    },
  },
  {
    defId: 'item-rabbits-foot',
    type: 'item',
    name: 'Rabbit\'s Foot',
    description: 'Thật không may cho con thỏ đấy.',
    effect: 'Mỗi lần trong lượt của mình bạn có thể dổ lại 1 xí ngầu.Nhưng bạn phải lấy kết quả của lần đổ lại đó.',
    resolution: {
      steps: [
        {
          kind: 'note',
          prompt:
            'Dùng mỗi lượt (không xử lý khi rút — chọn "· Không có"). Đổ lại 1 xúc xắc, nhưng phải lấy kết quả của lần đổ lại.',
        },
      ],
    },
  },
  {
    defId: 'item-music-box',
    type: 'item',
    name: 'Music Box',
    description: 'Một món đồ cổ thủ công.\nNó cứ ngân lên một giai điệu gây ám ảnh trong đầu bạn.',
    effect: 'Một lần mỗi lượt, bạn có thể mở và đóng Music Box.\nTrong lúc Music Box mở, bất cứ nhà thám hiểm hoặc quái vật nào có đặc điểm Sanity mà đi vào hoặc bắt đầu lượt của mình trong phòng có Music Box sẽ phải đổ xí ngầu Sanity với điểm phải là 4+. Nếu thất bại, nhà thámm hiểm hoặc quái vật đó phải kết thúc lượt của mình vì đã bị thôi miên bởi âm nhạc.\nNếu nhà thám hiểm và quái vật đang mang Music Box mà bị thôi miên, họ sẽ đánh rơi Music Box. Nếu Music Box khi bị đánh rơi đã được mở thì nó vẫn được mở.',
    resolution: {
      steps: [
        {
          kind: 'note',
          prompt:
            'Dùng mỗi lượt (không xử lý khi rút — chọn "· Không có"). Mở/đóng hộp 1 lần/lượt. Khi mở: ai vào/bắt đầu lượt trong phòng phải đổ Sanity 4+, thất bại thì kết thúc lượt (bị thôi miên).',
        },
      ],
    },
  },
  {
    defId: 'item-device',
    type: 'item',
    name: 'Device',
    description: 'A jumble of wires and glass instruments used to measure things that are not of this world.',
    effect: 'At the end of your turn if you are in the same rooom as an opponent gain 1 Knowledge.\nDiscard this card to add 3 dice to your attack roll, but you may use that attack to steal something.',
    resolution: {
      steps: [
        {
          kind: 'note',
          prompt:
            'Bị động + dùng sau (không xử lý khi rút — chọn "· Không có"). Cuối lượt, nếu chung phòng với đối thủ: +1 Knowledge. Có thể bỏ lá để +3 xúc xắc cho đòn tấn công (đòn đó có thể dùng để cướp đồ).',
        },
      ],
    },
  },
  {
    defId: 'item-chalk',
    type: 'item',
    name: 'Chalk',
    description: 'a simple frawing stick made of ground bone and wax.',
    effect: 'You may roll Knowledge instead of Might on defense rolls.',
    resolution: {
      steps: [
        {
          kind: 'note',
          prompt:
            'Bị động: khi phòng thủ, có thể đổ Knowledge thay Might. Không xử lý khi rút — chọn "· Không có".',
        },
      ],
    },
  },
  {
    defId: 'item-blueprint',
    type: 'item',
    name: 'Blueprint',
    description: 'An old map of the house.',
    effect: 'When you roll for your movement or enter, exit  or cross a room , you may chosse your result. You may travel between rooms that have a Dumbwaiter.',
    resolution: {
      steps: [
        {
          kind: 'note',
          prompt:
            'Bị động: khi đổ để di chuyển/vào/ra/băng qua phòng, có thể tự chọn kết quả. Đi lại giữa các phòng có Dumbwaiter. Không xử lý khi rút — chọn "· Không có".',
        },
      ],
    },
  },
  {
    defId: 'item-boomstick',
    type: 'item',
    name: 'Boomstick',
    description: 'Weapon\nRusted and well-used, someone tool a hacksaw to the barrel. At least they left 2 good shells.',
    effect: 'When you draw this card, put 2 tokens to this card. Discard a token to make a Spped 7 attack instead pf a Might attack. When there are no tokens left, discard this item.\nYou can not use another weapon while you are using this one.',
    resolution: {
      steps: [
        {
          kind: 'note',
          prompt:
            'Khi rút: đặt 2 token lên lá (không có chỉ số để chỉnh — chọn "· Không có"). Bỏ 1 token để tấn công Speed 7 thay cho đòn Might; hết token thì bỏ lá. Không dùng vũ khí khác cùng lúc.',
        },
      ],
    },
  },
  {
    defId: 'item-effigy',
    type: 'item',
    name: 'Effigy',
    description: 'Handmade with care, the doll is dressed in a tiny copy of your own clothes.',
    effect: 'While you have Effigy, add 1 die to all trait roll, except when you attack or defend.\nIf you ever lose or drop Effigy, reduce each of your traits by one die.',
    resolution: {
      steps: [
        {
          kind: 'note',
          prompt:
            'Bị động: +1 xúc xắc cho mọi lần đổ chỉ số (trừ tấn công/phòng thủ) khi giữ lá. Mất/rơi lá: −1 xúc xắc mỗi chỉ số. Không xử lý khi rút — chọn "· Không có".',
        },
      ],
    },
  },
  {
    defId: 'item-ceremonial-robe',
    type: 'item',
    name: 'Ceremonial Robe',
    description: 'Not sure if it is for the sacrificerer the sacrificee.',
    effect: 'Once per turn, when you make a Sanity or Knowledge roll, you may reroll any number of those dice.',
    resolution: {
      steps: [
        {
          kind: 'note',
          prompt:
            'Dùng mỗi lượt (không xử lý khi rút — chọn "· Không có"). Khi đổ Sanity hoặc Knowledge: đổ lại số xúc xắc tùy ý.',
        },
      ],
    },
  },
  {
    defId: 'item-locket',
    type: 'item',
    name: 'Locket',
    description: 'A memento of love on a this gold chain.',
    effect: 'Gain 1 Sanity.\nAnytime (not just once per turn) you take mental damage, take 1 less point of dame.\nIf you lose this carrd, lose 1 Sanity.',
    resolution: {
      steps: [
        {
          kind: 'note',
          prompt:
            'Áp dụng ngay khi rút: +1 Sanity (ở bước Tác động chọn "✨ Khác / hồi phục"). Bị động: mỗi lần nhận sát thương Tinh thần, giảm 1 sát thương. Mất lá: −1 Sanity.',
        },
      ],
    },
  },
  {
    defId: 'item-chainsaw',
    type: 'item',
    name: 'Chainsaw',
    description: 'Weapon\nVroom, baby, vroom.',
    effect: 'If you make chainsaw noise, add 1 die to your Might roll. You can do this even when you defend.\nYou can not use another weapon while you are using this one.',
    resolution: {
      steps: [
        {
          kind: 'note',
          prompt:
            'Bị động (vũ khí): +1 xúc xắc cho lần đổ Might (kể cả khi phòng thủ) nếu gây tiếng cưa. Không dùng vũ khí khác cùng lúc. Không xử lý khi rút — chọn "· Không có".',
        },
      ],
    },
  },
  {
    defId: 'item-snake-oil',
    type: 'item',
    name: 'Snake Oil',
    description: 'The worn label has vague promises of renewed vigor. It is does not smell poisonous.',
    effect: 'Discard this item to choose an explorer in your room (including yourself) and raise one of his or her Physical traits and or one of his or her mental traits to their starting values.',
    resolution: {
      steps: [
        {
          kind: 'note',
          prompt:
            'Dùng sau, rồi bỏ lá (không xử lý khi rút — chọn "· Không có"). Bỏ lá để chọn một người trong phòng (kể cả bạn) và đưa 1 chỉ số Vật lý và/hoặc 1 chỉ số Tinh thần về mức bắt đầu.',
        },
      ],
    },
  },
  {
    defId: 'item-camcorder',
    type: 'item',
    name: 'Camcorder',
    description: 'Left by previous explorer, there seems to be something on the tape. You should totally watch it.',
    effect: 'When you draw this card, put a number of triangular Knowledge Roll tokens on this card eual to ther number of explorer. An explorerin possession of the Camcorder can take a Knowledge Roll token to gain 1 Knowledge. You may not gain a Knowledge Roll token if you already have one. When there are no token left, discard this card and all those Knowledge roll tokens.',
    resolution: {
      steps: [
        {
          kind: 'note',
          prompt:
            'Khi rút: đặt số token Knowledge Roll bằng số nhà thám hiểm lên lá (không có chỉ số để chỉnh — chọn "· Không có"). Người giữ Camcorder lấy 1 token để +1 Knowledge (không giữ quá 1 token). Hết token thì bỏ lá.',
        },
      ],
    },
  },
  {
    defId: 'item-teapot',
    type: 'item',
    name: 'Teapot',
    description: 'A porcelain teapot with a motif oof delicate pink flowers. It grants wishes, at a price.',
    effect: 'Once during your turn, when  an explorer in your room (including yourself) take physical damage, you .',
    resolution: {
      steps: [
        {
          kind: 'note',
          prompt:
            'Dùng mỗi lượt (không xử lý khi rút — chọn "· Không có"). Khi một người trong phòng (kể cả bạn) nhận sát thương Vật lý — xem mô tả lá để biết hiệu ứng đầy đủ.',
        },
      ],
    },
  },
  {
    defId: 'item-amulet-of-the-ages',
    type: 'item',
    name: 'Amulet Of The Ages',
    description: 'Một trang sức cổ bằng bạc với những viên đá quý được chạm trổ, và được khắc lên những điều tốt lành.',
    effect: 'Nhận 1 Might, 1 Speed, 1 Knowledge và 1 Sanity.\nMất 3 Might, 3 Speed, 3 Knowledge và 3 Sanity nếu bạn đánh mất lá Amulet.',
    resolution: {
      steps: [
        {
          kind: 'note',
          prompt:
            'Áp dụng ngay khi rút: +1 mỗi đặc điểm (Might, Speed, Knowledge, Sanity) — ở bước Tác động chọn "✨ Khác / hồi phục" để chỉnh. Mất lá: −3 mỗi đặc điểm.',
        },
      ],
    },
  },
];
