import type { CardDef } from '../../types';

export const EVENT_CARDS: CardDef[] = [
  // --- Events --- (description = lời dẫn, effect = xử lý tác dụng)
  {
    defId: 'event-creepy-crawlies',
    type: 'event',
    name: 'Creepy Crawlies — Những bé bọ đáng sợ',
    description:
      'Hàng nghìn bé bọ bò lên da, dưới quần áo và trong tóc của bạn.',
    effect:
      'Đổ xúc xắc Sanity:\n5+: "Bạn chớp mắt, những bé bọ biến mất." Nhận 1 Sanity.\n1-4: Mất 1 Sanity.\n0: Mất 2 Sanity.',
    resolution: {
      steps: [
        {
          kind: 'roll',
          prompt: 'Đổ Sanity.',
          stat: 'sanity',
          outcomes: ['5+: nhận 1 Sanity', '1-4: mất 1 Sanity', '0: mất 2 Sanity'],
        },
      ],
    },
  },
  {
    defId: 'event-closet-door',
    type: 'event',
    name: 'Closet Door — Cửa tủ',
    description:
      'Cửa tủ mở ra… Chỉ một vết nứt. Chắc chắn phải có cái gì đó bên trong.',
    effect:
      'Đặt miếng Tủ quần áo (Closet) vào trong phòng.\nMỗi lượt của 1 nhà thám hiểm, người đó đổ 2 xúc xắc để mở tủ:\n4: Rút 1 lá Item.\n2-3: Rút 1 lá Event.\n0-1: Rút 1 lá Event và loại bỏ miếng Tủ khỏi phòng.',
  },
  {
    defId: 'event-burning-man',
    type: 'event',
    name: 'Burning Man — Người đàn ông bốc cháy',
    description:
      'Một người đàn ông đang bốc cháy chạy ngang căn phòng. Da ông ta bỏng phồng rộp và nứt nẻ, để lộ ra cái hộp sọ rực lửa rơi xuống đất, nảy lên, lăn đi rồi biến mất.',
    effect:
      'Đổ xúc xắc Sanity:\n4+: "Bạn thấy hơi nóng dưới cổ áo." Nhận 1 Sanity.\n2-3: Đặt nhà thám hiểm về Entrance Hall (Sảnh chính).\n0-1: "Bạn bị thiêu cháy." Đổ 1 xúc xắc sát thương Vật lý, rồi đổ thêm 1 xúc xắc sát thương Tinh thần và thoát khỏi ngọn lửa.',
    resolution: {
      steps: [
        {
          kind: 'roll',
          prompt: 'Đổ Sanity.',
          stat: 'sanity',
          outcomes: ['4+: nhận 1 Sanity', '2-3: về Entrance Hall', '0-1: đổ 1 xúc xắc sát thương Vật lý rồi 1 xúc xắc sát thương Tinh thần'],
        },
      ],
    },
  },
  {
    defId: 'event-angry-being',
    type: 'event',
    name: 'Angry Being — Cơn tức giận',
    description: 'Nó phát ra từ con slime trên tường cạnh bạn.',
    effect:
      'Đổ xúc xắc Speed:\n5+: "Bạn chạy như chó." Nhận 1 Speed.\n2-4: Đổ 1 xúc xắc sát thương Tinh thần.\n0-1: Đổ 1 xúc xắc sát thương Tinh thần và thêm 1 xúc xắc sát thương Vật lý.',
    resolution: {
      steps: [
        {
          kind: 'roll',
          prompt: 'Đổ Speed.',
          stat: 'speed',
          outcomes: ['5+: nhận 1 Speed', '2-4: 1 xúc xắc sát thương Tinh thần', '0-1: 1 xúc xắc Tinh thần + 1 xúc xắc Vật lý'],
        },
      ],
    },
  },
  {
    defId: 'event-secret-passage',
    type: 'event',
    name: 'Secret Passage — Mật đạo',
    description:
      'Một phần của bức tường trượt đi. Phía sau nó là một đường hầm mốc meo, đầy rêu đang chờ bạn khám phá.',
    effect:
      'Đặt miếng Mật đạo (Secret Passage) vào phòng. Tung 3 xúc xắc và đặt miếng Mật đạo thứ 2 vào:\n6: Phòng nào cũng được.\n4-5: Chỉ các phòng tầng trên.\n2-3: Chỉ các phòng tầng trệt.\n0-1: Chỉ các phòng tầng hầm.\nBạn có thể di chuyển qua mật đạo dù không còn lượt di chuyển. Đi từ mật đạo này sang mật đạo khác tính là 1 lượt di chuyển. Ai cũng dùng được nhưng không thể dừng ở mật đạo.',
  },
  {
    defId: 'event-creepy-puppet',
    type: 'event',
    name: 'Creepy Puppet — Búp bê đáng sợ',
    description:
      'Bạn thấy một con búp bê khiến bạn sợ té đái. Nó lao nhanh như cắt đến bạn với một ngọn giáo nhỏ.',
    effect:
      'Người chơi bên phải bạn hóa thân thành Búp bê và đổ 4 xúc xắc Might để tấn công. Bạn phòng thủ bằng Might như bình thường với lượng Might bạn có.\nNếu bạn nhận bất kỳ sát thương nào từ đòn này, nhà thám hiểm đang có cây Giáo (Spear) nhận 2 Might (nếu không có thì thôi).',
    resolution: {
      steps: [
        {
          kind: 'attackDefense',
          prompt: 'Người chơi bên phải đổ 4 Might (Búp bê). Bạn phòng thủ bằng Might. Nếu bạn nhận sát thương, người đang giữ Spear nhận 2 Might.',
          attackerDice: 4,
          defenseStat: 'might',
          damage: 'physical',
        },
      ],
    },
  },
  {
    defId: 'event-what-the',
    type: 'event',
    name: 'What The…? — Cái dell…?',
    description:
      'Bạn quay đầu nhìn lại... không có gì cả. Chỉ còn sương mù và hơi nước, nơi trước đây từng là một căn phòng.',
    effect:
      'Lấy căn phòng bạn đang ở (đưa các token trong đó ra một bên). Đặt nó ở nơi khác trên cùng tầng sao cho cửa của nó kết nối với cửa của một phòng chưa được khám phá (rồi đặt lại các token vào).\nNếu không có phòng nào còn cửa chưa khám phá trên tầng đó, để nó qua tầng khác.',
  },
  {
    defId: 'event-something-slimy',
    type: 'event',
    name: 'Something Slimy — Một đống nhầy nhụa',
    description:
      'Có cái gì đó đang phủ lấy mắt cá chân bạn? Một con bọ? Một cái xúc tu? Hay một bàn tay đã chết đang bám lấy bạn.',
    effect:
      'Đổ xúc xắc Speed:\n4+: "Bạn được giải thoát." Nhận 1 Speed.\n1-3: Mất 1 Might.\n0: "Bạn xui như chó." Mất 1 Might và 1 Speed.',
    resolution: {
      steps: [
        {
          kind: 'roll',
          prompt: 'Đổ Speed.',
          stat: 'speed',
          outcomes: ['4+: nhận 1 Speed', '1-3: mất 1 Might', '0: mất 1 Might và 1 Speed'],
        },
      ],
    },
  },
  {
    defId: 'event-the-voice',
    type: 'event',
    name: 'The Voice — Giọng nói',
    description:
      'Ta dưới đây, bị chôn vùi dưới đây… Lời thì thầm xoẹt qua tai rồi biến mất.',
    effect:
      'Đổ xúc xắc Knowledge:\n4+: "Bạn tìm thấy một món đồ dưới sàn nhà." Rút 1 lá Item.\n0-3: Bạn đào bới khắp nơi nhưng chẳng được gì.',
    resolution: {
      steps: [
        {
          kind: 'roll',
          prompt: 'Đổ Knowledge.',
          stat: 'knowledge',
          outcomes: ['4+: rút 1 lá Item', '0-3: không có gì'],
        },
      ],
    },
  },
  {
    defId: 'event-funeral',
    type: 'event',
    name: 'Funeral — Tang lễ',
    description:
      'Bạn nhìn thấy một cái quan tài đang mở và thấy chính mình đang nằm bên trong đó.',
    effect:
      'Đổ xúc xắc Sanity:\n4+: "Cảnh tượng biến mất." Nhận 1 Sanity.\n2-3: Mất 1 Sanity.\n0-1: Mất 1 Might và 1 Speed để tự đào mình lên. Nếu đã tìm thấy Graveyard (Nghĩa Địa) và Crypt (Nhà Mồ), đặt nhà thám hiểm vào 1 trong 2 phòng tùy ý.',
    resolution: {
      steps: [
        {
          kind: 'roll',
          prompt: 'Đổ Sanity.',
          stat: 'sanity',
          outcomes: ['4+: nhận 1 Sanity', '2-3: mất 1 Sanity', '0-1: mất 1 Might và 1 Speed (nếu đã có Graveyard và Crypt, vào 1 phòng tùy chọn)'],
        },
      ],
    },
  },
  {
    defId: 'event-night-view',
    type: 'event',
    name: 'Night View — Đám cưới trong đêm',
    description:
      'Bạn nhìn thấy một cặp đôi ma đang đi dạo bên ngoài, với những bước đi tĩnh lặng đến đáng sợ trong bộ lễ phục của họ.',
    effect:
      'Đổ xúc xắc Knowledge:\n5+: "Họ quay lại tiến đến bạn, thì thầm những bí mật đen tối của căn nhà." Nhận 1 Knowledge.\n0-4: Bạn bị ám ảnh và không thể nhìn tiếp.',
    resolution: {
      steps: [
        {
          kind: 'roll',
          prompt: 'Đổ Knowledge.',
          stat: 'knowledge',
          outcomes: ['5+: nhận 1 Knowledge', '0-4: bị ám ảnh, không có gì'],
        },
      ],
    },
  },
  {
    defId: 'event-footsteps',
    type: 'event',
    name: 'Footsteps — Những bước chân',
    description:
      'Những tấm ván sàn kêu cót két. Bụi bay khắp nơi. Những dấu chân xuất hiện trên sàn đầy bụi, tiến gần đến bạn rồi biến mất.',
    effect:
      'Tung 1 xúc xắc (nhà thám hiểm ở Chapel — Nhà Thờ được tung thêm 1):\n4: Bạn và nhà thám hiểm gần nhất nhận 1 Might.\n3: Bạn nhận 1 Might, nhà thám hiểm gần nhất mất 1 Sanity.\n2: Mất 1 Sanity.\n1: Mất 1 Speed.\n0: Mỗi nhà thám hiểm mất 1 điểm từ một đặc điểm tùy chọn.',
    resolution: {
      steps: [
        {
          kind: 'roll',
          prompt: 'Đổ 1 xúc xắc (ở Chapel đổ thêm 1).',
          dice: 1,
          outcomes: ['4: bạn và người gần nhất +1 Might', '3: bạn +1 Might, người gần nhất mất 1 Sanity', '2: mất 1 Sanity', '1: mất 1 Speed', '0: mỗi người mất 1 điểm đặc điểm tùy chọn'],
        },
      ],
    },
  },
  {
    defId: 'event-mists-from-the-walls',
    type: 'event',
    name: 'Mists From The Walls — Sương mù từ những bức tường',
    description:
      'Những làn sương mù tràn ra từ các bức tường, lấp ló những khuôn mặt bí ẩn, con người… hoặc không.',
    effect:
      'Mỗi nhà thám hiểm đang ở tầng hầm đổ xúc xắc Sanity:\n4+: Mọi thứ vẫn ổn.\n1-3: Tung 1 xúc xắc sát thương Tinh thần (thêm 1 xúc xắc nữa nếu đang ở phòng có symbol Event).\n0: Tung 1 xúc xắc sát thương Tinh thần (thêm 2 xúc xắc nữa nếu đang ở phòng có symbol Event).\nMỗi kết quả chỉ ảnh hưởng đến nhà thám hiểm tung xúc xắc.',
    resolution: {
      steps: [
        {
          kind: 'roll',
          prompt: 'Mỗi người ở tầng hầm tự đổ Sanity.',
          stat: 'sanity',
          outcomes: ['4+: ổn', '1-3: 1 xúc xắc Tinh thần (+1 nếu phòng có Event)', '0: 1 xúc xắc Tinh thần (+2 nếu phòng có Event)'],
        },
      ],
    },
  },
  {
    defId: 'event-something-hidden',
    type: 'event',
    name: 'Something Hidden — Cái gì đó đang được giấu kín',
    description:
      'Có cái gì đó kỳ lạ đang diễn ra trong căn phòng này. Nó khiến tâm trí bạn bứt rứt, vừa tò mò vừa lo lắng.',
    effect:
      'Nếu muốn thử tìm, đổ xúc xắc Knowledge:\n4+: "Một phần bức tường trượt ra, lộ một cái hốc nhỏ." Rút 1 lá Item.\n0-3: Bạn chẳng thấy gì và điều đó khiến bạn điên lên. Mất 1 Sanity.',
    resolution: {
      steps: [
        {
          kind: 'roll',
          prompt: 'Nếu muốn thử, đổ Knowledge.',
          stat: 'knowledge',
          outcomes: ['4+: rút 1 lá Item', '0-3: mất 1 Sanity'],
        },
      ],
    },
  },
  {
    defId: 'event-bloody-vision',
    type: 'event',
    name: 'Bloody Vision — Cảnh tượng đẫm máu',
    description:
      'Những bức tường ướt đẫm máu. Máu chảy từ trần xuống tường, trên đồ đạc, nhiễu lên giày bạn. Nhưng thoáng chốc, nó biến mất.',
    effect:
      'Đổ xúc xắc Sanity:\n4+: "Bạn tự trấn an bản thân." Nhận 1 Sanity.\n2-3: Mất 1 Sanity.\n0-1: Nếu có nhà thám hiểm hoặc quái vật ở phòng bạn hoặc phòng kế bên, bạn phải tấn công họ (nếu có thể). Chọn người có Might thấp nhất nếu có nhiều người.',
    resolution: {
      steps: [
        {
          kind: 'roll',
          prompt: 'Đổ Sanity.',
          stat: 'sanity',
          outcomes: ['4+: nhận 1 Sanity', '2-3: mất 1 Sanity', '0-1: tấn công người Might thấp nhất trong phòng/kế bên'],
        },
      ],
    },
  },
  {
    defId: 'event-rotten',
    type: 'event',
    name: 'Rotten — Thối rữa',
    description:
      'Cái mùi căn phòng này phát ra thật kinh tởm. Như mùi xác chết, như mùi máu, mùi của một nhà mổ xác.',
    effect:
      'Đổ xúc xắc Sanity:\n5+: Nhận 1 Sanity.\n2-4: Mất 1 Might.\n1: Mất 1 Might và 1 Speed.\n0: Mất 1 cho mỗi đặc điểm.',
    resolution: {
      steps: [
        {
          kind: 'roll',
          prompt: 'Đổ Sanity.',
          stat: 'sanity',
          outcomes: ['5+: nhận 1 Sanity', '2-4: mất 1 Might', '1: mất 1 Might và 1 Speed', '0: mất 1 mỗi chỉ số'],
        },
      ],
    },
  },
  {
    defId: 'event-hideous-shriek',
    type: 'event',
    name: 'Hideous Shriek — Tiếng kêu kinh khủng',
    description:
      'Lúc đầu nó như lời thì thầm nhỏ, rồi từ từ rít lên đau đớn, khủng khiếp như thể xé toạc cả linh hồn.',
    effect:
      'Mỗi nhà thám hiểm đổ xúc xắc Sanity:\n4+: Bạn vượt qua nó.\n1-3: Tung 1 xúc xắc sát thương Tinh thần.\n0: Tung 2 xúc xắc sát thương Tinh thần.\nMỗi kết quả chỉ ảnh hưởng đến nhà thám hiểm tung xúc xắc.',
    resolution: {
      steps: [
        {
          kind: 'roll',
          prompt: 'Mỗi người tự đổ Sanity.',
          stat: 'sanity',
          outcomes: ['4+: vượt qua', '1-3: 1 xúc xắc Tinh thần', '0: 2 xúc xắc Tinh thần'],
        },
      ],
    },
  },
  {
    defId: 'event-spider',
    type: 'event',
    name: 'Spider — Bé Nhện',
    description:
      'Một bé nhện bé cỡ nắm đấm thôi, đậu nhẹ lên vai bạn, còn bò trong tóc bạn nữa. So cute!',
    effect:
      'Đổ xúc xắc Speed (để nhẹ nhàng đưa bé xuống) hoặc Sanity (để đứng yên cho bé dạo chơi):\n4+: "Bé chán và bỏ đi." Nhận 1 điểm cho đặc điểm bạn chọn.\n1-3: Tung 1 xúc xắc sát thương Vật lý.\n0: Tung 2 xúc xắc sát thương Vật lý.',
    resolution: {
      steps: [
        {
          kind: 'roll',
          prompt: 'Đổ Speed (gạt bé xuống) hoặc Sanity (đứng yên) — chọn 1.',
          stat: 'speed',
          outcomes: ['4+: nhận 1 điểm chỉ số tùy chọn', '1-3: 1 xúc xắc sát thương Vật lý', '0: 2 xúc xắc sát thương Vật lý'],
        },
      ],
    },
  },
  {
    defId: 'event-debris',
    type: 'event',
    name: 'Debris — Mảnh vụn',
    description: 'Những mảnh vụn trắng từ bức tường và trần nhà đổ sập xuống.',
    effect:
      'Đổ xúc xắc Speed:\n3+: "Né nhẹ!" Nhận 1 Speed.\n1-2: Tung 1 xúc xắc sát thương Vật lý.\n0: Tung 2 xúc xắc sát thương Vật lý.\nNếu bị chôn, giữ lá này — bạn không làm được gì đến khi được cứu. Mỗi lượt của 1 nhà thám hiểm (kể cả bạn), người đó đổ Might 4+ để cứu. Sau 3 lần thất bại, bạn tự thoát ra ở lượt sau. Hủy lá này khi được giải thoát.',
    resolution: {
      steps: [
        {
          kind: 'roll',
          prompt: 'Đổ Speed.',
          stat: 'speed',
          outcomes: ['3+: nhận 1 Speed', '1-2: 1 xúc xắc sát thương Vật lý', '0: 2 xúc xắc sát thương Vật lý', 'Nếu bị chôn: giữ lá, được cứu bằng Might 4+'],
        },
      ],
    },
  },
  {
    defId: 'event-grave-dirt',
    type: 'event',
    name: 'Grave Dirt — Bụi từ mộ',
    description:
      'Căn phòng phủ một lớp bụi dày. Bạn ho như điên vì nó bám vào da và đi vào phổi.',
    effect:
      'Đổ xúc xắc Might:\n4+: "Bạn phủi nó đi." Nhận 1 Might.\n0-3: Giữ lá này. Nhận 1 sát thương Vật lý mỗi khi bắt đầu lượt. Hủy lá nếu có vật phẩm tăng 1 điểm đặc điểm, hoặc nếu kết thúc lượt ở Balcony, Gardens, Graveyard, Gymnasium, Larder, Patio hoặc Tower.',
    resolution: {
      steps: [
        {
          kind: 'roll',
          prompt: 'Đổ Might.',
          stat: 'might',
          outcomes: ['4+: nhận 1 Might', '0-3: giữ lá, mỗi đầu lượt nhận 1 sát thương Vật lý'],
        },
      ],
    },
  },
  {
    defId: 'event-possession',
    type: 'event',
    name: 'Possession — Kiểm soát',
    description:
      'Một Cái bóng bước ra từ bức tường. Nó bao quanh bạn và khiến cái lạnh thấu tận xương tủy.',
    effect:
      'Chọn một đặc điểm bất kỳ và đổ xúc xắc cho đặc điểm đó:\n4+: Bạn chống lại được. Nhận 1 điểm cho đặc điểm đã chọn.\n0-3: Đặc điểm đã chọn bị giảm xuống giá trị thấp nhất (không xuống ngưỡng tử). Nếu nó đã thấp nhất, chọn đặc điểm khác và đưa nó xuống giá trị thấp nhất.',
    resolution: {
      steps: [
        {
          kind: 'roll',
          prompt: 'Chọn 1 đặc điểm bất kỳ rồi đổ xúc xắc đặc điểm đó.',
          outcomes: ['4+: nhận 1 điểm đặc điểm đó', '0-3: đặc điểm đó về giá trị thấp nhất'],
        },
      ],
    },
  },
  {
    defId: 'event-silence',
    type: 'event',
    name: 'Silence — Sự tĩnh lặng',
    description:
      'Dưới mặt đất, mọi thứ trở nên tĩnh lặng. Ngay cả âm thanh hơi thở cũng biến mất.',
    effect:
      'Mỗi nhà thám hiểm đang ở tầng hầm đổ xúc xắc Sanity:\n4+: Bạn bình tĩnh chờ đến khi âm thanh trở lại.\n1-3: Tung 1 xúc xắc sát thương Tinh thần.\n0: Tung 2 xúc xắc sát thương Tinh thần.\nMỗi kết quả chỉ ảnh hưởng đến nhà thám hiểm tung xúc xắc.',
    resolution: {
      steps: [
        {
          kind: 'roll',
          prompt: 'Mỗi người ở tầng hầm tự đổ Sanity.',
          stat: 'sanity',
          outcomes: ['4+: ổn', '1-3: 1 xúc xắc Tinh thần', '0: 2 xúc xắc Tinh thần'],
        },
      ],
    },
  },
  {
    defId: 'event-drip-drip-drip',
    type: 'event',
    name: 'Drip…Drip…Drip — Tỏn…Tỏn…Tỏn',
    description:
      'Tiếng giọt nước chầm chậm, đều đặn như những chiếc kim xuyên qua não bạn.',
    effect:
      'Đặt miếng Nước Nhiễu (Drip) vào căn phòng.\nMỗi nhà thám hiểm phải tung ít hơn 1 xúc xắc (thấp nhất là 1) cho tất cả các đặc điểm khi đang ở phòng này.',
  },
  {
    defId: 'event-phone-call',
    type: 'event',
    name: 'Phone Call — Cuộc gọi điện thoại',
    description:
      'Một chiếc điện thoại đột nhiên rung lên. Bạn cảm thấy phải nhấc máy trả lời.',
    effect:
      'Tung 2 xúc xắc, giọng một bà cụ dễ thương vang lên:\n4: Nhận 1 Sanity.\n3: Nhận 1 Knowledge.\n1-2: Tung 1 xúc xắc sát thương Tinh thần.\n0: Tung 2 xúc xắc sát thương Vật lý.',
    resolution: {
      steps: [
        {
          kind: 'roll',
          prompt: 'Đổ 2 xúc xắc.',
          dice: 2,
          outcomes: ['4: nhận 1 Sanity', '3: nhận 1 Knowledge', '1-2: 1 xúc xắc Tinh thần', '0: 2 xúc xắc Vật lý'],
        },
      ],
    },
  },
  {
    defId: 'event-secret-stairs',
    type: 'event',
    name: 'Secret Stairs — Cầu thang bí mật',
    description:
      'Một tiếng rít kinh khủng vang khắp căn phòng. Bạn đã khám phá được một cầu thang bí mật.',
    effect:
      'Đặt miếng Cầu thang ẩn (Secret Stairs) vào phòng này và một miếng khác vào một phòng đã mở ở tầng khác. Di chuyển giữa hai cầu thang tính là 1 (cầu thang không tính là 1 ô di chuyển).\nNếu muốn, bạn có thể đi theo cầu thang ngay bây giờ dù không còn lượt di chuyển. Nếu đi trong lượt này, rút 1 lá Event ở phòng mới.',
  },
  {
    defId: 'event-revolving-wall',
    type: 'event',
    name: 'Revolving Wall — Bức tường xoay',
    description: 'Bức tường tự xoay làm lộ ra một con đường đến nơi khác.',
    effect:
      'Đặt miếng Cần Gạt Tường (Wall) vào bức tường không có lối ra hoặc ở góc phòng. Nếu không có phòng nào bên kia tường, rút phòng đến khi tìm được phòng cho tầng đó rồi đặt vào nhà (nếu không có phòng nào trên tầng này thì đặt nhân vật về phòng cũ). Đặt nhân vật vào phòng đó.\nMỗi lượt, nếu đứng ở 1 trong 2 phòng, đổ Knowledge để gạt cần:\n3+: Bạn đi qua (không tính là di chuyển).\n0-2: Không tìm được công tắc, không đi qua được.',
  },
  {
    defId: 'event-the-walls',
    type: 'event',
    name: 'The Walls — Những bức tường',
    description:
      'Những bức tường trở nên ấm áp lạ thường, như có da thịt, như đang sống và đập theo nhịp tim. Bạn bị mê hoặc… rồi bần thần tỉnh dậy ở một nơi khác.',
    effect:
      'Bạn phải rút căn phòng tiếp theo và đặt nó vào trong ngôi nhà. Đặt nhà thám hiểm của bạn vào trong đó.',
  },
  {
    defId: 'event-jonahs-turn',
    type: 'event',
    name: "Jonah's Turn — Lượt của Jonah",
    description:
      'Hai cậu nhóc đang chơi với cái đĩa gỗ. Jonah chộp lấy cái đĩa và tấn công cậu nhóc còn lại liên tục cho đến khi họ khuất khỏi tầm nhìn.',
    effect:
      'Nếu một nhà thám hiểm đang sở hữu Puzzle Box (Trò chơi ngàn năm), người đó phải hủy vật phẩm và rút một vật phẩm khác thay thế — khi đó bạn nhận 1 Sanity. Nếu không, bạn tung 1 xúc xắc sát thương Tinh thần.',
  },
  {
    defId: 'event-groundskeeper',
    type: 'event',
    name: 'Groundskeeper — Người làm vườn',
    description:
      'Bạn quay lại và thấy một người đàn ông trong bộ đồ làm vườn giơ xẻng lao tới. Chỉ cách mặt bạn vài phân, hắn biến mất, chỉ còn lại những dấu chân dính bùn.',
    effect:
      'Đổ xúc xắc Knowledge (nhà thám hiểm ở Gardens — Sân Vườn đổ ít hơn 2 xúc xắc):\n4+: "Bạn tìm kiếm trong đống bùn." Rút 1 lá Item.\n0-3: Người chơi bên phải bạn hóa thành Người làm vườn và tung 4 xúc xắc Might. Bạn phòng thủ bằng Might như bình thường.',
  },
  {
    defId: 'event-skeletons',
    type: 'event',
    name: 'Skeletons — Những bộ xương',
    description: 'Người mẹ và đứa trẻ, vẫn còn đang ôm nhau.',
    effect:
      'Đặt miếng Bộ xương (Skeletons) vào phòng. Đổ 1 xúc xắc sát thương Tinh thần.\nMỗi lượt của 1 nhà thám hiểm, người đó đổ xúc xắc Sanity để tìm kiếm:\n5+: Rút 1 lá Item và hủy miếng Bộ xương.\n0-4: Đổ 1 xúc xắc sát thương Tinh thần.\nMỗi kết quả chỉ ảnh hưởng đến nhà thám hiểm tung xúc xắc.',
  },
  {
    defId: 'event-the-beckoning',
    type: 'event',
    name: 'The Beckoning — Lời mời gọi',
    description: 'Bên ngoài. Bạn phải ra bên ngoài. Hãy bay đến vùng trời tự do!',
    effect:
      'Mỗi nhà thám hiểm ở Gardens, Graveyard, Tower, Balcony hoặc phòng có cửa sổ hướng ra ngoài đổ xúc xắc Sanity:\n3+: Bạn lùi lại an toàn.\n0-2: "Bạn nhảy xuống Patio (Mái Hiên)." Nếu chưa có phòng đó, tìm và đặt nó vào nhà. Đặt nhà thám hiểm vào đó và tung 1 xúc xắc sát thương Vật lý.\nMỗi kết quả chỉ ảnh hưởng đến nhà thám hiểm tung xúc xắc.',
    resolution: {
      steps: [
        {
          kind: 'roll',
          prompt: 'Mỗi người ở Gardens/Graveyard/Tower/Balcony/phòng có cửa sổ tự đổ Sanity.',
          stat: 'sanity',
          outcomes: ['3+: lùi lại an toàn', '0-2: rơi xuống Patio, 1 xúc xắc sát thương Vật lý'],
        },
      ],
    },
  },
  {
    defId: 'event-webs',
    type: 'event',
    name: 'Webs — Mạng nhện',
    description:
      'Theo phản xạ, bạn vươn tay phủi mạng nhện… Nhưng chúng không rơi xuống, chúng dính chặt lấy bạn.',
    effect:
      'Đổ xúc xắc Might:\n4+: "Bạn được giải thoát." Nhận 1 Might và hủy lá này.\n0-3: Bạn bị dính. Giữ lá này — bạn không làm được gì đến khi được cứu. Mỗi lượt của 1 nhà thám hiểm (kể cả bạn), người đó đổ Might 4+ để cứu. Sau 3 lần thất bại, bạn tự thoát ở lượt sau. Hủy lá khi được giải thoát.',
    resolution: {
      steps: [
        {
          kind: 'roll',
          prompt: 'Đổ Might.',
          stat: 'might',
          outcomes: ['4+: nhận 1 Might và huỷ lá', '0-3: bị dính (giữ lá), được cứu bằng Might 4+'],
        },
      ],
    },
  },
  {
    defId: 'event-image-in-the-mirror',
    type: 'event',
    name: 'Image In The Mirror — Hình ảnh trong gương',
    description:
      'Một cái gương cũ trong phòng. Ảnh phản chiếu của bạn — chính bạn ở một thời điểm khác — đang hoảng loạn và cần giúp đỡ.',
    effect:
      'Đưa 1 món đồ qua gương: chọn một lá Item của bạn (không phải omen) và đặt nó vào bộ bài Item, sau đó xáo chồng bài lên. Nhận 1 Knowledge.\nNếu bạn không có vật phẩm, hiệu ứng tác động đến nhà thám hiểm kế tiếp phía bên trái có Item. Hủy lá này nếu không nhà thám hiểm nào có vật phẩm.',
  },
  {
    defId: 'event-mystic-slide',
    type: 'event',
    name: 'Mystic Slide — Cầu trượt kì bí',
    description: 'Cái sàn nhà bị sập xuống từ bên dưới bạn.',
    effect:
      'Đặt miếng Cầu trượt (Slide) vào phòng. Đổ xúc xắc Sanity để dùng cầu trượt:\n5+: Đặt nhân vật của bạn vào một phòng chưa khám phá bên dưới.\n0-4: Rút phòng đến khi được phòng tầng hầm, đặt nhân vật ở đó và tung 1 xúc xắc sát thương Vật lý.\nNếu bạn đang ở tầng hầm, hiệu ứng tác động đến nhà thám hiểm kế tiếp bên trái không ở tầng hầm. Hủy lá nếu tất cả nhà thám hiểm đều ở tầng hầm. Ở các lượt sau, ai cũng phải đổ xúc xắc để dùng slide.',
  },
  {
    defId: 'event-smoke',
    type: 'event',
    name: 'Smoke — Làn khói',
    description: 'Làn khói xuất hiện xung quanh bạn, bạn ho chảy cả nước mắt.',
    effect:
      'Đặt miếng Khói (Smoke) vào phòng.\nMột nhà thám hiểm phải tung ít hơn 2 xúc xắc (nhỏ nhất là 1) cho tất cả đặc điểm khi tung trong phòng này.',
  },
  {
    defId: 'event-hanged-men',
    type: 'event',
    name: 'Hanged Men — Người đàn ông treo cổ',
    description:
      'Một cơn gió lạnh thổi vào phòng. Phía trước bạn là 3 người đàn ông treo lơ lửng, nhìn bạn với ánh mắt chết chóc rồi tan thành bụi. Bạn bắt đầu thấy nghẹt thở.',
    effect:
      'Đổ xúc xắc cho mỗi đặc điểm (4 lần):\n2+: Đặc điểm không sao.\n0-1: Giảm 1 điểm cho đặc điểm đó.\nNếu cả 4 lần đổ đều 2+, tăng thêm 1 điểm vào đặc điểm bạn chọn.',
  },
  {
    defId: 'event-disquieting-sounds',
    type: 'event',
    name: 'Disquieting Sounds — Những âm thanh bất ổn',
    description:
      'Một tiếng khóc của đứa bé bị bỏ rơi. Một tiếng la hét. Một tiếng vỡ kính. Sau đó yên lặng.',
    effect:
      'Tung 6 xúc xắc. Nếu kết quả lớn hơn hoặc bằng số Omen đã được tiết lộ, bạn nhận 1 Sanity. Nếu không, bạn tung 1 xúc xắc sát thương Tinh thần.',
    resolution: {
      steps: [
        {
          kind: 'roll',
          prompt: 'Đổ 6 xúc xắc, so với số Omen đã rút.',
          dice: 6,
          outcomes: ['≥ số Omen: nhận 1 Sanity', '< số Omen: 1 xúc xắc sát thương Tinh thần'],
        },
      ],
    },
  },
  {
    defId: 'event-image-in-the-mirror-2',
    type: 'event',
    name: 'Image In The Mirror — Hình ảnh trong gương (tiếp theo)',
    description:
      'Một cái gương cũ khác. Cũng như lần trước, ảnh phản chiếu cần bạn đưa cho nó một thứ.',
    effect:
      'Giống lá Image In The Mirror kia, nhưng bạn rút 1 lá Item.',
  },
  {
    defId: 'event-locked-safe',
    type: 'event',
    name: 'Locked Safe — Két sắt bị khoá',
    description: 'Phía sau bức tranh có một cái két sắt trên tường. Nó chắc chắn đã bị gài bẫy.',
    effect:
      'Đặt miếng Két Sắt (Safe) vào phòng.\nMỗi lượt của 1 nhà thám hiểm, người đó đổ xúc xắc Knowledge để mở két:\n5+: Rút 2 lá Item và bỏ miếng Két sắt.\n2-4: Tung 1 xúc xắc sát thương Vật lý. Két không mở.\n0-1: Tung 2 xúc xắc sát thương Vật lý. Két không mở.',
  },
  {
    defId: 'event-lights-out',
    type: 'event',
    name: 'Lights Out — Tắt đèn',
    description: 'Đèn pin của bạn bỗng dưng bị tắt. Đừng lo, ai đó sẽ có pin mà.',
    effect:
      'Giữ lá này. Bạn chỉ di chuyển được 1 ô mỗi lượt cho đến khi có một nhà thám hiểm khác ở chung phòng. Vào cuối lượt đó, bạn hủy lá này và di chuyển bình thường trở lại.\nNếu bạn có Candle (Cây Nến) hoặc kết thúc lượt ở Furnace Room (Lò Than), hủy lá này.',
  },
  {
    defId: 'event-a-moment-of-hope',
    type: 'event',
    name: 'A Moment of Hope — Khoảnh khắc hy vọng',
    description:
      'Có cái gì đó kỳ lạ trong căn phòng này. Có cái gì đó đang chống lại cái ác trong ngôi nhà này.',
    effect:
      'Đặt miếng Phước lành (Blessing) vào phòng.\nMỗi anh hùng đổ thêm 1 xúc xắc (tối đa 8) cho tất cả các đặc điểm khi đang ở phòng này.',
  },
  {
    defId: 'event-whoops',
    type: 'event',
    name: 'Whoops — Ôi, xin lỗi',
    description:
      'Bạn giẫm phải một cơ thể dưới chân. Trước khi bạn kịp nhảy ra, bạn bị đẩy ngã, một giọng cười khúc khích chạy vào màn đêm.',
    effect:
      'Lấy và úp tất cả các lá Item của bạn (không phải omen) rồi xáo lên. Người chơi bên phải bạn bóc ngẫu nhiên 1 lá và hủy nó. Sau đó lật bài lên như bình thường.',
  },
  {
    defId: 'event-shrieking-wind',
    type: 'event',
    name: 'Shrieking Wind — Tiếng gió rít',
    description:
      'Gió nổi lên, từ từ nhẹ nhàng cho đến khi trở thành tiếng rít kinh hoàng.',
    effect:
      'Mỗi nhà thám hiểm ở Gardens, Graveyard, Patio, Tower, Balcony hoặc phòng có cửa sổ đổ xúc xắc Might:\n5+: "Chân vẫn chạm đất, là còn sống."\n3-4: Tung 1 xúc xắc sát thương Vật lý.\n1-2: Tung 1 xúc xắc sát thương Tinh thần.\n0: Tung 1 xúc xắc sát thương Vật lý và đặt một món đồ của bạn (nếu có) vào Entrance Hall (Tiền Sảnh).\nMỗi kết quả chỉ ảnh hưởng đến nhà thám hiểm tung xúc xắc.',
    resolution: {
      steps: [
        {
          kind: 'roll',
          prompt: 'Mỗi người ở khu ngoài trời tự đổ Might.',
          stat: 'might',
          outcomes: ['5+: an toàn', '3-4: 1 xúc xắc Vật lý', '1-2: 1 xúc xắc Tinh thần', '0: 1 xúc xắc Vật lý, đặt 1 đồ vào Entrance Hall'],
        },
      ],
    },
  },
  {
    defId: 'event-the-lost-one',
    type: 'event',
    name: 'The Lost One — Người đã khuất',
    description:
      'Một người phụ nữ trong trang phục thời Nội Chiến Mỹ ra hiệu cho bạn. Bạn rơi vào trạng thái mê man.',
    effect:
      'Đổ xúc xắc Knowledge. Nếu 5+, bạn được giải thoát và nhận 1 Knowledge. Nếu không, đổ 3 xúc xắc để xem người đã khuất dẫn bạn đi đâu:\n6: Về Entrance Hall (Sảnh chính).\n4-5: Lên Upper Landing.\n2-3: Tìm phòng đến khi có phòng tầng trên.\n0-1: Tìm phòng đến khi có phòng tầng hầm.\nĐặt phòng được rút vào nhà và đặt nhà thám hiểm ở đó. Nếu rút hết chồng bài mà chưa thấy, đặt nhà thám hiểm ở Entrance Hall.',
    resolution: {
      steps: [
        {
          kind: 'roll',
          prompt: 'Đổ Knowledge.',
          stat: 'knowledge',
          outcomes: ['5+: được giải thoát và nhận 1 Knowledge', '0-4: đổ thêm 3 xúc xắc xem đi đâu (xem mô tả)'],
        },
      ],
    },
  },
  {
    defId: 'event-it-is-meant-to-be',
    type: 'event',
    name: 'It is Meant To Be — Đó là ý định của nó',
    description:
      'Bạn té xuống sàn, bất chợt những sự kiện từ tương lai chạy thẳng vào trong đầu bạn.',
    effect:
      'Chọn 1 trong 2:\n• Nhìn 3 lá trên đầu của bất kỳ chồng bài nào (kể cả phòng). Sắp xếp lại 3 lá đó hoặc đặt lại lên đầu tùy ý, không cho ai biết.\n• Hoặc đổ 4 xúc xắc và ghi lại số điểm. Một lần trong tương lai, bạn được dùng lại số đó. Nếu số đó lớn hơn mức tối đa cần đạt, dùng số tối đa cho kết quả.',
  },

  // --- Events (bản mở rộng / Widow's Walk) ---
  {
    defId: 'event-the-left-hand',
    type: 'event',
    name: 'The Left Hand — Bàn Tay Trái',
    description:
      'Bàn tay bạn bắt đầu ngứa. Rồi bỏng rát. Cơn đau quá sức chịu đựng, bạn chỉ biết ôm chặt tay và hét lên. Tiếng hét tắt nghẹn khi bạn nhận ra mình không còn cảm giác gì ở bàn tay nữa. Bạn thử cử động ngón tay, và bàn tay tự ý đưa về phía cổ họng bạn.',
    effect:
      'Chọn một:\n• Chặt bỏ bàn tay. Mất 1 Might và nhận 1 Sanity.\n• Thay bàn tay. Mất 1 Might và rút 1 lá Item.\n• Giữ bàn tay. Mất 2 Sanity, nhận 1 Might, và di chuyển đến phòng gần nhất có symbol Omen rồi rút 1 lá Omen.',
  },
  {
    defId: 'event-contract',
    type: 'event',
    name: 'Contract — Khế Ước',
    description: 'Đây là một khế ước trao quyền lực để đổi lấy linh hồn bạn.',
    effect:
      'Bạn có thể ký khế ước. Nếu ký, đổ xúc xắc Knowledge để đọc dòng chữ nhỏ:\n0-1: Bạn bán linh hồn mà chẳng được gì. Mất 1 Sanity.\n2-3: Bạn mất linh hồn nhưng nhận được quyền lực. Mất 1 Sanity. Rút 1 lá Item.\n4: Bạn tìm thấy một kẽ hở và giữ được linh hồn. Rút 1 lá Item.\n5+: Bạn phát hiện khế ước không có hiệu lực và giữ được linh hồn. Nhận 1 Sanity. Rút 1 lá Item.',
    resolution: {
      steps: [
        {
          kind: 'roll',
          prompt: 'Nếu ký, đổ Knowledge.',
          stat: 'knowledge',
          outcomes: ['0-1: mất 1 Sanity', '2-3: mất 1 Sanity, rút 1 lá Item', '4: rút 1 lá Item', '5+: nhận 1 Sanity, rút 1 lá Item'],
        },
      ],
    },
  },
  {
    defId: 'event-what-year-is-it',
    type: 'event',
    name: 'What Year Is It?! — Năm Nay Là Năm Nào?!',
    description:
      'Bạn bước qua cánh cửa và khựng lại. Bạn đã từng ở đây. Nhiều năm trước, trước Sự Cố. Bạn bắt gặp hình phản chiếu của mình trong cửa sổ, gương mặt trông thật trẻ. Nhưng lần này, bạn sẽ không còn ngây thơ nữa.',
    effect:
      'Mất 1 Sanity, nhận 1 Might và 1 Knowledge.\nNếu ngôi nhà ma đã được tiết lộ, phe bên kia phải đọc to đoạn dẫn mở đầu và kết thúc (in nghiêng) của họ. Nếu chưa, đặt lá này trước mặt bạn cho đến khi ngôi nhà ma được tiết lộ.',
  },
  {
    defId: 'event-the-walls-have-eyes',
    type: 'event',
    name: 'The Walls Have Eyes — Những Bức Tường Có Mắt',
    description:
      'Một loạt chân dung phai màu treo trên tường. Ánh mắt chúng như dõi theo bạn. Chỉ là trò của họa sĩ thôi sao? Không, những gương mặt chết lặng đang cố nói với bạn điều gì đó.',
    effect:
      'Đổ xúc xắc Sanity:\n0-2: Mất 1 Sanity.\n3: Nhận 1 Knowledge.\n4+: Nếu Arsenal (Kho Vũ Khí) đang trong cuộc chơi, đặt nhân vật vào Arsenal và rút 1 lá Item. Nếu Arsenal chưa xuất hiện, tìm trong chồng bài phòng đến khi thấy nó, đặt vào nhà, xáo lại chồng đó rồi đặt nhân vật vào Arsenal như vừa khám phá ra.',
    resolution: {
      steps: [
        {
          kind: 'roll',
          prompt: 'Đổ Sanity.',
          stat: 'sanity',
          outcomes: ['0-2: mất 1 Sanity', '3: nhận 1 Knowledge', '4+: vào Arsenal và rút 1 lá Item'],
        },
      ],
    },
  },
  {
    defId: 'event-mutant-housepet',
    type: 'event',
    name: 'Mutant Housepet — Thú Cưng Đột Biến',
    description:
      'Một tiếng meo. Từ bên trong bức tường. Là một con mèo? Tiếng gào thứ hai vang lên cùng chỗ đó, một giọng mèo khác. Hai con mèo? Bạn chỉ nghe một tiếng cào để thoát ra. Hai đầu? Bạn cào lớp vữa ra để xem cho rõ.',
    effect:
      'Đổ xúc xắc Speed 4+. Nếu thất bại, nhận 1 sát thương Vật lý từ đòn tấn công của con thú. Nếu thành công, nhận 1 Sanity và 1 Speed.',
    resolution: {
      steps: [
        {
          kind: 'roll',
          prompt: 'Đổ Speed (cần 4+).',
          stat: 'speed',
          outcomes: ['4+: nhận 1 Sanity và 1 Speed', '0-3: 1 xúc xắc sát thương Vật lý'],
        },
      ],
    },
  },
  {
    defId: 'event-flytrap',
    type: 'event',
    name: 'Flytrap — Cây Bắt Ruồi',
    description:
      'Một cây ngoại lai khổng lồ đứng dưới một dàn đèn và ống nước phức tạp. Lá của nó nâu héo, túi hoa khổng lồ hé mở chờ được nuôi dưỡng. Nó cần nước. Nó cần được nuôi bằng máu của bạn.',
    effect:
      'Nhận 1 sát thương Vật lý, đặt một Plant token (token Cây) vào phòng của bạn và giữ lá này. Sau khi ngôi nhà ma được tiết lộ, khi bất kỳ hero, traitor hay quái vật nào đi vào phòng đó, bạn có thể thực hiện đòn tấn công Might 7 nhắm vào đối thủ đó.',
  },
  {
    defId: 'event-burial-mound',
    type: 'event',
    name: 'Burial Mound — Gò Chôn',
    description: 'Một đống đá phủ lên một cái xác mới. Quá mới.',
    effect:
      'Đặt Burial Mound token (token Gò Chôn) vào phòng. Sau khi ngôi nhà ma được tiết lộ, khi một nhà thám hiểm rời khỏi phòng này, cái xác tấn công: người chơi bên phải nhà thám hiểm đó thực hiện đòn tấn công Might 4 nhắm vào họ. Nếu nhà thám hiểm thắng cách biệt 3 trở lên, bỏ token.',
  },
  {
    defId: 'event-misty-arch',
    type: 'event',
    name: 'Misty Arch — Vòm Cổng Sương Mù',
    description: 'Một vòm cổng trên tường tràn ngập làn sương mù đủ màu.',
    effect:
      'Bạn có thể chọn bước qua. Đưa nhân vật ra khỏi nhà và đổ 3 xúc xắc:\n0: Đặt nhân vật vào Entrance Hall. Bạn đã đánh mất thứ gì đó. Bỏ 1 lá Item.\n1-2: Bạn bị biến đổi theo cách nào đó. Đặt nhân vật vào Entrance Hall nhưng lật úp thẻ nhân vật, đưa mọi chỉ số về giá trị bắt đầu.\n3-4: Đặt nhân vật vào bất kỳ phòng nào có cửa còn mở.\n5-6: Đặt nhân vật vào bất kỳ phòng nào có cửa còn mở. Rút 1 lá Item.',
    resolution: {
      steps: [
        {
          kind: 'roll',
          prompt: 'Đưa nhân vật ra khỏi nhà rồi đổ 3 xúc xắc.',
          dice: 3,
          outcomes: ['0: về Entrance Hall, bỏ 1 Item', '1-2: về Entrance Hall, lật thẻ reset chỉ số', '3-4: vào phòng có cửa mở', '5-6: vào phòng có cửa mở, rút 1 Item'],
        },
      ],
    },
  },
  {
    defId: 'event-ghost-in-the-machine',
    type: 'event',
    name: 'Ghost in the Machine — Hồn Ma Trong Máy',
    description:
      'Tiếng tĩnh điện lách tách làm bạn giật mình khi một chiếc tivi nhỏ bật sáng. Qua hình ảnh nhiễu hạt, bạn nhận ra hình dáng một đứa trẻ đang chơi đâu đó trong nhà. Cô bé dừng lại, quay về phía bạn và vẫy gọi bạn đến chơi cùng. Rồi tivi tối đen trở lại.',
    effect:
      'Đổ xúc xắc Sanity:\n0-2: Mất 1 Might. Đặt lá này trước mặt bạn. Mọi nhà thám hiểm chỉ di chuyển được 1 ô mỗi lượt cho đến đầu lượt kế tiếp của bạn, rồi bỏ lá này.\n3+: Rút 1 thẻ phòng tầng mái từ chồng bài, đặt vào nhà và đặt nhân vật vào phòng đó.',
    resolution: {
      steps: [
        {
          kind: 'roll',
          prompt: 'Đổ Sanity.',
          stat: 'sanity',
          outcomes: ['0-2: mất 1 Might; mọi người chỉ đi 1 ô đến đầu lượt bạn', '3+: rút 1 phòng tầng mái và vào đó'],
        },
      ],
    },
  },
  {
    defId: 'event-acupuncture',
    type: 'event',
    name: 'Acupuncture — Châm Cứu',
    description:
      'Căn phòng được thắp sáng dễ chịu bằng nến. Một người phụ nữ tóc dài đen trong chiếc áo blouse trắng tinh mỉm cười ấm áp với bạn. Cô ta nâng một cây kim, mảnh như sợi tóc và dài hơn bàn tay. Đầu kim lấp lánh trong ánh nến khi được đâm về phía mắt bạn.',
    effect:
      'Đi đến một phòng kế bên đã khám phá và mất 1 Sanity, hoặc đổ xúc xắc Might:\n0-2: Mất 1 Speed và 1 Might.\n3-4: Nhận 1 Speed và 1 Might.\n5+: Nhận 1 Speed, 1 Might và 1 Sanity.',
    resolution: {
      steps: [
        {
          kind: 'roll',
          prompt: 'Hoặc qua phòng kế bên đã khám phá và mất 1 Sanity; hoặc đổ Might.',
          stat: 'might',
          outcomes: ['0-2: mất 1 Speed và 1 Might', '3-4: nhận 1 Speed và 1 Might', '5+: nhận 1 Speed, 1 Might và 1 Sanity'],
        },
      ],
    },
  },
  {
    defId: 'event-lightning-strikes',
    type: 'event',
    name: 'Lightning Strikes — Sét Đánh',
    description: 'Bạn đếm số giây kể từ khi nhìn thấy tia chớp. Một giây.',
    effect:
      'Mọi nhà thám hiểm ở trên mái hoặc trong phòng ngoài trời phải đổ xúc xắc Might:\n0: Nhận 2 sát thương Vật lý.\n1-3: Nhận 1 sát thương Vật lý.\n4+: Không có gì xảy ra.',
    resolution: {
      steps: [
        {
          kind: 'roll',
          prompt: 'Mỗi người trên mái/phòng ngoài trời tự đổ Might.',
          stat: 'might',
          outcomes: ['0: 2 sát thương Vật lý', '1-3: 1 sát thương Vật lý', '4+: không sao'],
        },
      ],
    },
  },

];
